import { NextResponse } from 'next/server';
import { validateLead, type LeadInput } from '@/lib/saasChecklistLead';
import { processLead } from '@/lib/server/leadProcessor';

export const runtime = 'nodejs';

export async function POST(request: Request) {
    let body: LeadInput;
    try {
        body = (await request.json()) as LeadInput;
    } catch {
        return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
    }

    if (typeof body.website === 'string' && body.website.trim()) {
        return NextResponse.json({ ok: false, message: 'Submission rejected.' }, { status: 400 });
    }

    const validated = validateLead({
        ...body,
        userAgent: request.headers.get('user-agent') || '',
        referrer: request.headers.get('referer') || '',
    });

    if (!validated.lead) {
        return NextResponse.json({ ok: false, errors: validated.errors }, { status: 422 });
    }

    const lead = validated.lead;
    const result = await processLead({
        leadType: 'saas_checklist',
        fullName: lead.fullName,
        email: lead.email,
        phone: lead.phone,
        companyName: lead.companyName,
        leadSource: 'saas_checklist',
        leadMagnet: lead.leadMagnet,
        projectStage: lead.projectStage,
        sourcePage: lead.sourcePage,
        consentGiven: lead.consent,
        userAgent: request.headers.get('user-agent') || '',
        originalReferrer: request.headers.get('referer') || '',
    });

    if (!result.accepted) {
        return NextResponse.json({
            ok: false,
            accepted: false,
            message: result.message || 'We could not deliver your request. Please try again.',
        }, { status: 503 });
    }

    return NextResponse.json({
        ok: true,
        accepted: true,
        submissionId: result.submissionId,
    });
}
