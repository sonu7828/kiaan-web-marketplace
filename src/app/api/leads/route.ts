import { NextResponse } from 'next/server';
import { processLead, type LeadSubmissionPayload } from '@/lib/server/leadProcessor';

export const runtime = 'nodejs';

export async function POST(request: Request) {
    try {
        const contentType = request.headers.get('content-type') || '';
        let payload: LeadSubmissionPayload;

        if (contentType.includes('multipart/form-data')) {
            const formData = await request.formData();
            const email = (formData.get('email') as string) || '';
            const fullName = (formData.get('fullName') as string) || (formData.get('name') as string) || '';
            const phone = (formData.get('phone') as string) || (formData.get('whatsapp') as string) || '';
            const companyName = (formData.get('companyName') as string) || (formData.get('company') as string) || '';
            const leadType = ((formData.get('leadType') as string) || 'internship') as LeadSubmissionPayload['leadType'];
            const leadSource = (formData.get('leadSource') as string) || 'internship_application';
            const serviceInterest = (formData.get('serviceInterest') as string) || (formData.get('programTitle') as string) || '';
            const message = (formData.get('message') as string) || (formData.get('education') as string) || '';
            const sourcePage = (formData.get('sourcePage') as string) || '/internship';

            let attachmentRef: string | undefined;
            const file = formData.get('resume') as File | null;
            if (file && typeof file === 'object' && file.name) {
                attachmentRef = `File: ${file.name} (${Math.round(file.size / 1024)} KB)`;
            }

            payload = {
                leadType,
                fullName,
                email,
                phone,
                companyName,
                leadSource,
                serviceInterest,
                message,
                sourcePage,
                userAgent: request.headers.get('user-agent') || '',
                originalReferrer: request.headers.get('referer') || '',
                attachmentRef,
            };
        } else {
            const body = (await request.json()) as Record<string, unknown>;
            payload = {
                leadType: (body.leadType as LeadSubmissionPayload['leadType']) || (body.type as LeadSubmissionPayload['leadType']) || 'contact',
                fullName: (body.fullName as string) || (body.name as string) || '',
                email: (body.email as string) || '',
                phone: (body.phone as string) || (body.contactNumber as string) || (body.whatsapp as string) || '',
                companyName: (body.companyName as string) || (body.company as string) || '',
                leadSource: (body.leadSource as string) || (body.source as string) || '',
                leadMagnet: (body.leadMagnet as string) || (body.resourceName as string) || '',
                serviceInterest: (body.serviceInterest as string) || (body.projectType as string) || (body.challenge as string) || '',
                projectStage: (body.projectStage as string) || '',
                budgetRange: (body.budgetRange as string) || (body.budget as string) || '',
                projectTimeline: (body.projectTimeline as string) || (body.timeline as string) || '',
                sourcePage: (body.sourcePage as string) || '',
                originalReferrer: request.headers.get('referer') || '',
                consentGiven: typeof body.consentGiven === 'boolean' ? body.consentGiven : typeof body.consent === 'boolean' ? body.consent : true,
                message: (body.message as string) || (body.vision as string) || '',
                processDetails: (body.processDetails as string) || '',
                notesSummary: body.notesSummary as string | undefined,
                websiteHoneypot: body.website as string | undefined,
                userAgent: request.headers.get('user-agent') || '',
            };
        }

        const result = await processLead(payload);

        if (result.errors) {
            return NextResponse.json({ ok: false, errors: result.errors, message: result.message }, { status: 422 });
        }

        if (!result.accepted) {
            return NextResponse.json({ ok: false, accepted: false, message: result.message }, { status: 503 });
        }

        return NextResponse.json({
            ok: true,
            accepted: true,
            submissionId: result.submissionId,
        });
    } catch {
        return NextResponse.json({ ok: false, message: 'Invalid request body or parameters.' }, { status: 400 });
    }
}
