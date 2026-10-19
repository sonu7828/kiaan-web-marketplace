export const PROJECT_STAGES = [
    'I only have an idea',
    'Planning the MVP',
    'Development has started',
    'Existing SaaS needs improvement',
    'Preparing for launch',
    'Looking for a development partner',
] as const;

export interface SaasChecklistLead {
    fullName: string;
    email: string;
    phone: string;
    companyName: string;
    projectStage: (typeof PROJECT_STAGES)[number];
    consent: true;
    leadMagnet: 'SaaS Development Checklist';
    sourcePage: '/resources/saas-development-checklist';
    submittedAt: string;
    userAgent: string;
    referrer: string;
}

export type LeadInput = Record<string, unknown>;

const clean = (value: unknown, max: number) =>
    typeof value === 'string' ? value.trim().replace(/[<>]/g, '').slice(0, max) : '';

export function validateLead(input: LeadInput): { lead?: SaasChecklistLead; errors?: Record<string, string> } {
    const fullName = clean(input.fullName, 100);
    const email = clean(input.email, 254).toLowerCase();
    const phone = clean(input.phone, 25);
    const companyName = clean(input.companyName, 120);
    const projectStage = clean(input.projectStage, 80);
    const errors: Record<string, string> = {};

    if (fullName.length < 2) errors.fullName = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid business email.';
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 7 || digits.length > 15) errors.phone = 'Please enter a valid phone number (7–15 digits).';
    if (!PROJECT_STAGES.includes(projectStage as SaasChecklistLead['projectStage'])) errors.projectStage = 'Please select your project stage.';
    if (input.consent !== true) errors.consent = 'Consent is required to download the checklist.';
    if (Object.keys(errors).length) return { errors };

    return {
        lead: {
            fullName,
            email,
            phone,
            companyName,
            projectStage: projectStage as SaasChecklistLead['projectStage'],
            consent: true,
            leadMagnet: 'SaaS Development Checklist',
            sourcePage: '/resources/saas-development-checklist',
            submittedAt: new Date().toISOString(),
            userAgent: clean(input.userAgent, 300),
            referrer: clean(input.referrer, 500),
        },
    };
}
