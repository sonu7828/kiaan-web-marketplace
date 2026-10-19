import 'server-only';

const HUBSPOT_BASE_URL = 'https://api.hubapi.com';

export interface HubSpotContactInput {
    email: string;
    fullName?: string;
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
}

export interface HubSpotSyncResult {
    synced: boolean;
    contactId?: string;
    dealCreated: boolean;
    duplicateDealSkipped: boolean;
    errorReason?: string;
}

// Server-owned allowlist mapping for HubSpot custom property option values.
// Values MUST match the exact display labels configured in the HubSpot portal.
const LEAD_SOURCE_MAP: Record<string, string> = {
    contact: 'Website Contact Form',
    website_contact: 'Website Contact Form',
    'website contact form': 'Website Contact Form',
    start_project: 'Website Contact Form',
    start_project_form: 'Website Contact Form',
    demo_request: 'Demo Booking',
    'demo booking': 'Demo Booking',
    demo: 'Demo Booking',
    ai_roi_calculator: 'SaaS Checklist',
    saas_checklist: 'SaaS Checklist',
    'saas checklist': 'SaaS Checklist',
    vendor_scorecard: 'Vendor Scorecard',
    'vendor scorecard': 'Vendor Scorecard',
    resource_download: 'Organic Search',
    lead_magnet: 'Organic Search',
    internship: 'Referral',
    internship_application: 'Referral',
    social_media: 'Social Media',
    'social media': 'Social Media',
    organic_search: 'Organic Search',
    'organic search': 'Organic Search',
    referral: 'Referral',
    whatsapp: 'WhatsApp',
    tidio: 'Tidio Live Chat',
    'live chat': 'Tidio Live Chat',
    exit_intent: 'Exit-Intent Popup',
    'exit-intent popup': 'Exit-Intent Popup',
};

const SERVICE_INTEREST_MAP: Record<string, string> = {
    'custom software development': 'Custom Software Development',
    'saas product': 'SaaS Development',
    'saas development': 'SaaS Development',
    'website development': 'Website Development',
    'web development': 'Website Development',
    'mobile app development': 'Mobile App Development',
    'mobile app': 'Mobile App Development',
    'ai automation': 'AI Automation',
    'ai/ml': 'AI Automation',
    'crm / erp development': 'CRM / ERP Development',
    'crm/erp': 'CRM / ERP Development',
    'erp development': 'CRM / ERP Development',
    'e-commerce development': 'E-commerce Development',
    'ecommerce': 'E-commerce Development',
    'dedicated development team': 'Dedicated Development Team',
    'dedicated team': 'Dedicated Development Team',
    'software maintenance': 'Software Maintenance',
    'maintenance': 'Software Maintenance',
    'digital marketing': 'Digital Marketing',
    'marketing': 'Digital Marketing',
    'ui/ux design': 'Custom Software Development',
    'cloud migration & architecture': 'Custom Software Development',
    'scaling existing applications': 'Dedicated Development Team',
    'legacy system modernization': 'Software Maintenance',
    'engineering resource shortage': 'Dedicated Development Team',
    'business process automation': 'AI Automation',
};

/**
 * Map a raw user-submitted value to a valid HubSpot enum option label.
 * Returns the mapped label if found, or the raw value trimmed (pass-through)
 * for properties that accept free-text rather than enumerated options.
 */
function mapInternalValue(map: Record<string, string>, rawValue?: string): string | undefined {
    if (!rawValue) return undefined;
    const normalized = rawValue.trim().toLowerCase();
    // Return exact match from allowlist
    if (map[normalized]) return map[normalized];
    // Check if the raw value (trimmed) already matches an allowed option label
    const rawTrimmed = rawValue.trim();
    const allowedValues = Object.values(map);
    if (allowedValues.includes(rawTrimmed)) return rawTrimmed;
    // Fall back to returning the raw trimmed value (may be rejected by HubSpot
    // if it doesn't match an enum option — callers should handle the error).
    return rawTrimmed;
}

function splitName(fullName?: string): { firstName: string; lastName: string } {
    if (!fullName || !fullName.trim()) return { firstName: '', lastName: '' };
    const parts = fullName.trim().split(/\s+/);
    if (parts.length === 1) return { firstName: parts[0], lastName: '' };
    return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

function getAuthHeader(): Record<string, string> {
    const token = process.env.HUBSPOT_ACCESS_TOKEN;
    if (!token) {
        throw new Error('HUBSPOT_ACCESS_TOKEN is not configured');
    }
    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
}

async function hubspotFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    try {
        const res = await fetch(`${HUBSPOT_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                ...getAuthHeader(),
                ...(options.headers || {}),
            },
            signal: controller.signal,
            cache: 'no-store',
        });
        return res;
    } finally {
        clearTimeout(timeoutId);
    }
}

/**
 * Search contact by exact normalized email. Throws on error so a failed lookup
 * is never treated as "contact not found".
 */
export async function findContactByEmail(email: string): Promise<string | null> {
    const normalizedEmail = email.trim().toLowerCase();
    const response = await hubspotFetch('/crm/v3/objects/contacts/search', {
        method: 'POST',
        body: JSON.stringify({
            filterGroups: [
                {
                    filters: [
                        {
                            propertyName: 'email',
                            operator: 'EQ',
                            value: normalizedEmail,
                        },
                    ],
                },
            ],
            limit: 1,
        }),
    });

    if (!response.ok) {
        throw new Error(`HubSpot contact search failed with status ${response.status}`);
    }

    const data = (await response.json()) as { total: number; results: Array<{ id: string }> };
    if (data.total > 0 && data.results?.[0]?.id) {
        return data.results[0].id;
    }
    return null;
}

/**
 * Upsert Contact in HubSpot CRM API v3
 */
export async function upsertHubSpotContact(input: HubSpotContactInput): Promise<string> {
    const normalizedEmail = input.email.trim().toLowerCase();
    const existingContactId = await findContactByEmail(normalizedEmail);
    const { firstName, lastName } = splitName(input.fullName);

    const properties: Record<string, string | boolean> = {
        email: normalizedEmail,
    };

    if (firstName) properties.firstname = firstName;
    if (lastName) properties.lastname = lastName;
    if (input.phone) properties.phone = input.phone;
    if (input.companyName) properties.company = input.companyName;

    // Custom Properties Mapping
    const mappedLeadSource = mapInternalValue(LEAD_SOURCE_MAP, input.leadSource);
    if (mappedLeadSource) properties.kiaan_lead_source = mappedLeadSource;

    if (input.leadMagnet) properties.kiaan_lead_magnet = input.leadMagnet;

    const mappedServiceInterest = mapInternalValue(SERVICE_INTEREST_MAP, input.serviceInterest);
    if (mappedServiceInterest) properties.kiaan_service_interest = mappedServiceInterest;

    if (input.projectStage) properties.kiaan_project_stage = input.projectStage;
    if (input.budgetRange) properties.kiaan_budget_range = input.budgetRange;
    if (input.projectTimeline) properties.kiaan_project_timeline = input.projectTimeline;
    if (input.sourcePage) properties.kiaan_source_page = input.sourcePage;
    if (input.originalReferrer) properties.kiaan_original_referrer = input.originalReferrer;

    // Consent property boolean
    if (typeof input.consentGiven === 'boolean') {
        properties.kiaan_consent_given = input.consentGiven;
    }

    if (existingContactId) {
        const updateRes = await hubspotFetch(`/crm/v3/objects/contacts/${existingContactId}`, {
            method: 'PATCH',
            body: JSON.stringify({ properties }),
        });
        if (!updateRes.ok) {
            throw new Error(`Failed to update HubSpot contact with status ${updateRes.status}`);
        }
        return existingContactId;
    } else {
        const createRes = await hubspotFetch('/crm/v3/objects/contacts', {
            method: 'POST',
            body: JSON.stringify({ properties }),
        });
        if (!createRes.ok) {
            throw new Error(`Failed to create HubSpot contact with status ${createRes.status}`);
        }
        const createdData = (await createRes.json()) as { id: string };
        return createdData.id;
    }
}

/**
 * Check if the contact already has an open deal to prevent duplicates
 */
export async function hasOpenDealForContact(contactId: string, pipelineId: string): Promise<boolean> {
    try {
        const searchRes = await hubspotFetch('/crm/v3/objects/deals/search', {
            method: 'POST',
            body: JSON.stringify({
                filterGroups: [
                    {
                        filters: [
                            {
                                propertyName: 'associations.contact',
                                operator: 'EQ',
                                value: contactId,
                            },
                            {
                                propertyName: 'pipeline',
                                operator: 'EQ',
                                value: pipelineId,
                            },
                        ],
                    },
                ],
                limit: 5,
            }),
        });

        if (!searchRes.ok) return false;

        const data = (await searchRes.json()) as { total: number };
        return data.total > 0;
    } catch {
        return false;
    }
}

/**
 * Create a high-intent deal with duplicate check and contact association
 */
export async function createHubSpotDealWithDeduplication(
    contactId: string,
    dealName: string,
    amount?: string
): Promise<{ dealCreated: boolean; duplicateDealSkipped: boolean }> {
    const pipelineId = process.env.HUBSPOT_PIPELINE_ID || 'default';
    const stageId = process.env.HUBSPOT_NEW_LEAD_STAGE_ID || 'appointmentscheduled';

    const hasDuplicate = await hasOpenDealForContact(contactId, pipelineId);
    if (hasDuplicate) {
        return { dealCreated: false, duplicateDealSkipped: true };
    }

    const properties: Record<string, string> = {
        dealname: dealName,
        pipeline: pipelineId,
        dealstage: stageId,
    };
    if (amount) properties.amount = amount;

    const createDealRes = await hubspotFetch('/crm/v3/objects/deals', {
        method: 'POST',
        body: JSON.stringify({
            properties,
            associations: [
                {
                    to: { id: contactId },
                    types: [
                        {
                            associationCategory: 'HUBSPOT_DEFINED',
                            associationTypeId: 3, // deal_to_contact
                        },
                    ],
                },
            ],
        }),
    });

    if (!createDealRes.ok) {
        throw new Error(`HubSpot deal creation failed with status ${createDealRes.status}`);
    }

    const createdDeal = (await createDealRes.json()) as { id: string };

    // Verify / ensure association via explicit v3 association endpoint
    try {
        await hubspotFetch(
            `/crm/v3/objects/deals/${createdDeal.id}/associations/contacts/${contactId}/deal_to_contact`,
            { method: 'PUT' }
        );
    } catch {
        // Association during creation already attached or primary association created
    }

    return { dealCreated: true, duplicateDealSkipped: false };
}

/**
 * Create an Activity Engagement Note on the Contact for detailed payload data
 */
export async function createHubSpotNoteForContact(contactId: string, noteBody: string): Promise<boolean> {
    try {
        const response = await hubspotFetch('/crm/v3/objects/notes', {
            method: 'POST',
            body: JSON.stringify({
                properties: {
                    hs_note_body: noteBody,
                    hs_timestamp: new Date().toISOString(),
                },
                associations: [
                    {
                        to: { id: contactId },
                        types: [
                            {
                                associationCategory: 'HUBSPOT_DEFINED',
                                associationTypeId: 202, // note_to_contact
                            },
                        ],
                    },
                ],
            }),
        });
        return response.ok;
    } catch {
        return false;
    }
}
