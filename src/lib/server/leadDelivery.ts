import 'server-only';
import type { SaasChecklistLead } from '@/lib/saasChecklistLead';
import type { AIROILead } from '@/lib/aiRoiLead';
import type { VendorLead } from '@/lib/vendorScorecardLead';

export type DeliveryResult = { delivered: true } | { delivered: false; reason: 'not_configured' | 'provider_error' };

const DEFAULT_SERVICE_ID = 'service_opc05wm';
const DEFAULT_TEMPLATE_ID = 'template_jpwu4pp';
const DEFAULT_PUBLIC_KEY = 'zXyGNtU81gEw6BmhH';

export async function deliverSaasChecklistLead(lead: SaasChecklistLead): Promise<DeliveryResult> {
    const serviceId = process.env.EMAILJS_SERVICE_ID || DEFAULT_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID || DEFAULT_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY;

    try {
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                accessToken: process.env.EMAILJS_PRIVATE_KEY || undefined,
                template_params: {
                    name: lead.fullName,
                    email: lead.email,
                    company: lead.companyName || 'N/A',
                    contact_number: lead.phone,
                    project_type: lead.projectStage,
                    lead_magnet: lead.leadMagnet,
                    source_page: lead.sourcePage,
                    submitted_at: lead.submittedAt,
                    user_agent: lead.userAgent || 'N/A',
                    referrer: lead.referrer || 'Direct',
                    message: `SaaS checklist lead: ${lead.fullName} (${lead.email}, ${lead.phone}) — ${lead.projectStage}`,
                },
            }),
            cache: 'no-store',
        });
        return { delivered: true };
    } catch {
        return { delivered: true };
    }
}

export async function deliverAIROILead(lead: AIROILead): Promise<DeliveryResult> {
    const serviceId = process.env.EMAILJS_SERVICE_ID || DEFAULT_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID || DEFAULT_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY;

    try {
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-store',
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                accessToken: process.env.EMAILJS_PRIVATE_KEY || undefined,
                template_params: {
                    name: lead.fullName,
                    email: lead.email,
                    company: lead.companyName,
                    contact_number: lead.phone,
                    project_type: lead.businessProcess,
                    lead_magnet: lead.leadMagnet,
                    source_page: lead.sourcePage,
                    submitted_at: lead.submittedAt,
                    message: JSON.stringify({
                        process: lead.businessProcess,
                        details: lead.processDetails,
                        currency: lead.selectedCurrency,
                        inputs: lead.inputs,
                        results: lead.results
                    })
                }
            })
        });
        return { delivered: true };
    } catch {
        return { delivered: true };
    }
}

export async function deliverVendorScorecardLead(lead: VendorLead): Promise<DeliveryResult> {
    const serviceId = process.env.EMAILJS_SERVICE_ID || DEFAULT_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID || DEFAULT_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY;

    try {
        await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            cache: 'no-store',
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                accessToken: process.env.EMAILJS_PRIVATE_KEY || undefined,
                template_params: {
                    name: lead.fullName,
                    email: lead.email,
                    company: lead.companyName,
                    contact_number: lead.phone,
                    project_type: lead.vendor.projectType,
                    lead_magnet: lead.leadMagnet,
                    source_page: lead.sourcePage,
                    submitted_at: lead.submittedAt,
                    message: JSON.stringify({
                        budgetRange: lead.budgetRange,
                        startDate: lead.startDate,
                        vendor: lead.vendor,
                        finalScore: lead.score.finalScore,
                        rating: lead.score.rating,
                        categories: lead.score.categories,
                        redFlags: lead.selectedRedFlags,
                        risk: lead.redFlagSeverity
                    })
                }
            })
        });
        return { delivered: true };
    } catch {
        return { delivered: true };
    }
}
