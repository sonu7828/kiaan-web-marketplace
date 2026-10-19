import { CURRENCIES, calculateAIROI, type Currency, type ROIInputs, type ROIResults } from '@/lib/aiRoiCalculator';

export const BUSINESS_PROCESSES = ['Customer support', 'Sales and lead follow-up', 'Data entry', 'Document processing', 'Invoice and payment processing', 'HR and recruitment', 'Reporting and analytics', 'Marketing automation', 'Operations and workflow management', 'Other'] as const;
export interface AIROILead { fullName: string; email: string; phone: string; companyName: string; businessProcess: typeof BUSINESS_PROCESSES[number]; processDetails: string; consent: true; selectedCurrency: Currency; inputs: ROIInputs; results: ROIResults; leadMagnet: 'AI Automation ROI Calculator'; sourcePage: '/tools/ai-automation-roi-calculator'; submittedAt: string; userAgent: string; referrer: string; }
type Raw = Record<string, unknown>;
const clean = (v: unknown, max: number) => typeof v === 'string' ? v.trim().replace(/[<>]/g, '').slice(0, max) : '';
const bounded = (v: unknown, min: number, max: number) => typeof v === 'number' && Number.isFinite(v) && v >= min && v <= max ? v : null;

export function validateAIROILead(raw: Raw): { lead?: AIROILead; errors?: Record<string, string> } {
    const errors: Record<string, string> = {}; const source = typeof raw.inputs === 'object' && raw.inputs ? raw.inputs as Raw : {};
    const fullName = clean(raw.fullName, 100), email = clean(raw.email, 254).toLowerCase(), phone = clean(raw.phone, 25), companyName = clean(raw.companyName, 120), businessProcess = clean(raw.businessProcess, 80), processDetails = clean(raw.processDetails, 1000), currency = clean(raw.selectedCurrency, 3) as Currency;
    if (fullName.length < 2) errors.fullName = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid business email.';
    if (!/^\+?[\d\s().-]{7,25}$/.test(phone) || phone.replace(/\D/g, '').length > 15) errors.phone = 'Please enter a valid phone number.';
    if (!companyName) errors.companyName = 'Please enter your company name.';
    if (!BUSINESS_PROCESSES.includes(businessProcess as AIROILead['businessProcess'])) errors.businessProcess = 'Please select a business process.';
    if (raw.consent !== true) errors.consent = 'Consent is required.';
    if (!(currency in CURRENCIES)) errors.selectedCurrency = 'Invalid currency.';
    const specs: Record<keyof ROIInputs, [number, number]> = { employees:[1,10000], weeklyHours:[0.5,168], hourlyCost:[0.01,1000000], workingWeeks:[1,52], automationPercentage:[5,100], productivityImprovement:[0,100], monthlyErrorCost:[0,1000000000], errorReductionPercentage:[0,100], implementationCost:[0,1000000000], monthlyRecurringCost:[0,1000000000] };
    const inputs = {} as ROIInputs;
    for (const key of Object.keys(specs) as (keyof ROIInputs)[]) { const value = bounded(source[key], ...specs[key]); if (value === null) errors[key] = 'Invalid calculator value.'; else inputs[key] = value; }
    if (Object.keys(errors).length) return { errors };
    return { lead: { fullName, email, phone, companyName, businessProcess: businessProcess as AIROILead['businessProcess'], processDetails, consent:true, selectedCurrency:currency, inputs, results:calculateAIROI(inputs), leadMagnet:'AI Automation ROI Calculator', sourcePage:'/tools/ai-automation-roi-calculator', submittedAt:new Date().toISOString(), userAgent:clean(raw.userAgent,300), referrer:clean(raw.referrer,500) } };
}
