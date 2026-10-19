import 'server-only';
import {
    upsertHubSpotContact,
    createHubSpotDealWithDeduplication,
    createHubSpotNoteForContact,
} from './hubspot';

export interface LeadSubmissionPayload {
    leadType: 'contact' | 'start_project' | 'demo_request' | 'ai_roi' | 'saas_checklist' | 'vendor_scorecard' | 'lead_magnet' | 'internship';
    fullName: string;
    email: string;
    phone?: string;
    companyName?: string;
    leadSource?: string;
    leadMagnet?: string;
    serviceInterest?: string;
    projectStage?: string;
    budgetRange?: string;
    projectTimeline?: string;
    sourcePage?: string;
    originalReferrer?: string;
    consentGiven?: boolean;
    message?: string;
    processDetails?: string;
    notesSummary?: string;
    websiteHoneypot?: string;
    userAgent?: string;
    attachmentRef?: string;
}

export interface InternalLeadResult {
    accepted: boolean;
    emailDelivered: boolean;
    hubspotContactSynced: boolean;
    hubspotDealCreated: boolean;
    duplicateDealSkipped: boolean;
    submissionId: string;
    message?: string;
    errors?: Record<string, string>;
}

// In-memory deduplication cache (email + leadType -> timestamp)
const recentSubmissions = new Map<string, number>();
const DUP_WINDOW_MS = 5000; // 5 seconds

function generateSubmissionId(): string {
    return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
}

/**
 * Truly server-side EmailJS REST delivery
 */
async function sendServerEmail(payload: LeadSubmissionPayload, submissionId: string): Promise<boolean> {
    const serviceId = process.env.EMAILJS_SERVICE_ID || 'service_opc05wm';
    const templateId = process.env.EMAILJS_TEMPLATE_ID || 'template_jpwu4pp';
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || 'zXyGNtU81gEw6BmhH';
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey) {
        return false;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                accessToken: privateKey || undefined,
                template_params: {
                    name: payload.fullName,
                    email: payload.email,
                    company: payload.companyName || 'N/A',
                    contact_number: payload.phone || 'N/A',
                    project_type: payload.serviceInterest || payload.leadType,
                    lead_magnet: payload.leadMagnet || 'N/A',
                    source_page: payload.sourcePage || 'N/A',
                    submitted_at: new Date().toLocaleString(),
                    message: payload.message || payload.notesSummary || JSON.stringify(payload),
                    submission_id: submissionId,
                    attachment_ref: payload.attachmentRef || 'None',
                },
            }),
            signal: controller.signal,
            cache: 'no-store',
        });

        return response.ok;
    } catch {
        return false;
    } finally {
        clearTimeout(timeoutId);
    }
}

/**
 * Server-side HubSpot synchronization handler
 */
async function syncHubSpot(
    payload: LeadSubmissionPayload
): Promise<{ synced: boolean; dealCreated: boolean; duplicateDealSkipped: boolean }> {
    if (process.env.HUBSPOT_ENABLED !== 'true') {
        return { synced: false, dealCreated: false, duplicateDealSkipped: false };
    }

    try {
        const contactId = await upsertHubSpotContact({
            email: payload.email,
            fullName: payload.fullName,
            phone: payload.phone,
            companyName: payload.companyName,
            leadSource: payload.leadSource || payload.leadType,
            leadMagnet: payload.leadMagnet,
            serviceInterest: payload.serviceInterest,
            projectStage: payload.projectStage,
            budgetRange: payload.budgetRange,
            projectTimeline: payload.projectTimeline,
            sourcePage: payload.sourcePage,
            originalReferrer: payload.originalReferrer,
            consentGiven: payload.consentGiven,
        });

        let dealCreated = false;
        let duplicateDealSkipped = false;

        // High-Intent check for deals: Contact, Start Project, Demo Request
        const highIntentTypes = ['contact', 'start_project', 'demo_request'];
        if (highIntentTypes.includes(payload.leadType)) {
            const dealName = `Lead: ${payload.fullName} - ${payload.serviceInterest || payload.leadType.toUpperCase()}`;
            const dealResult = await createHubSpotDealWithDeduplication(contactId, dealName, payload.budgetRange);
            dealCreated = dealResult.dealCreated;
            duplicateDealSkipped = dealResult.duplicateDealSkipped;
        }

        // Attach engagement note if additional details are provided
        if (payload.notesSummary || payload.message || payload.processDetails) {
            const noteContent = payload.notesSummary || payload.message || payload.processDetails || '';
            if (noteContent) {
                await createHubSpotNoteForContact(contactId, noteContent);
            }
        }

        return { synced: true, dealCreated, duplicateDealSkipped };
    } catch {
        return { synced: false, dealCreated: false, duplicateDealSkipped: false };
    }
}

/**
 * Central Lead Processor
 */
export async function processLead(payload: LeadSubmissionPayload): Promise<InternalLeadResult> {
    const submissionId = generateSubmissionId();

    // 1. Honeypot Spam Check
    if (payload.websiteHoneypot && payload.websiteHoneypot.trim()) {
        return {
            accepted: false,
            emailDelivered: false,
            hubspotContactSynced: false,
            hubspotDealCreated: false,
            duplicateDealSkipped: false,
            submissionId,
            message: 'Submission rejected.',
        };
    }

    // 2. Server Validation
    const errors: Record<string, string> = {};
    if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) {
        errors.email = 'Valid business email is required.';
    }
    if (!payload.fullName || !payload.fullName.trim()) {
        errors.fullName = 'Full name is required.';
    }

    if (Object.keys(errors).length > 0) {
        return {
            accepted: false,
            emailDelivered: false,
            hubspotContactSynced: false,
            hubspotDealCreated: false,
            duplicateDealSkipped: false,
            submissionId,
            errors,
            message: 'Validation failed.',
        };
    }

    // 3. Deduplication Window Check
    const dupKey = `${payload.email.trim().toLowerCase()}_${payload.leadType}`;
    const now = Date.now();
    const lastSub = recentSubmissions.get(dupKey);
    if (lastSub && now - lastSub < DUP_WINDOW_MS) {
        return {
            accepted: true,
            emailDelivered: true,
            hubspotContactSynced: true,
            hubspotDealCreated: false,
            duplicateDealSkipped: true,
            submissionId,
            message: 'Duplicate submission throttled.',
        };
    }
    recentSubmissions.set(dupKey, now);

    // Clean old cache entries
    for (const [k, time] of recentSubmissions.entries()) {
        if (now - time > 60000) recentSubmissions.delete(k);
    }

    // 4. Parallel execution of HubSpot and EmailJS delivery using Promise.allSettled
    const [hubspotSettled, emailSettled] = await Promise.allSettled([
        syncHubSpot(payload),
        sendServerEmail(payload, submissionId),
    ]);

    const hubspotResult = hubspotSettled.status === 'fulfilled' ? hubspotSettled.value : { synced: false, dealCreated: false, duplicateDealSkipped: false };
    const emailDelivered = emailSettled.status === 'fulfilled' ? emailSettled.value : false;

    // Delivery evaluation: Valid leads are accepted and stored/recorded
    const accepted = true;

    return {
        accepted,
        emailDelivered,
        hubspotContactSynced: hubspotResult.synced,
        hubspotDealCreated: hubspotResult.dealCreated,
        duplicateDealSkipped: hubspotResult.duplicateDealSkipped,
        submissionId,
        message: 'Submission accepted.',
    };
}
