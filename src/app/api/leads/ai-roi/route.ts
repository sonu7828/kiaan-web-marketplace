import { NextResponse } from 'next/server';
import { validateAIROILead } from '@/lib/aiRoiLead';
import { processLead } from '@/lib/server/leadProcessor';

export const runtime = 'nodejs';

export async function POST(request: Request) {
    let body: Record<string, unknown>;
    try {
        body = (await request.json()) as Record<string, unknown>;
    } catch {
        return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
    }

    if (typeof body.website === 'string' && body.website.trim()) {
        return NextResponse.json({ ok: false, message: 'Submission rejected.' }, { status: 400 });
    }

    const parsed = validateAIROILead({
        ...body,
        userAgent: request.headers.get('user-agent') || '',
        referrer: request.headers.get('referer') || '',
    });

    if (!parsed.lead) {
        return NextResponse.json({ ok: false, errors: parsed.errors }, { status: 422 });
    }

    const lead = parsed.lead;
    const summaryNote = [
        `AI ROI Calculator Report Request`,
        `Process: ${lead.businessProcess}`,
        `Details: ${lead.processDetails || 'N/A'}`,
        `Currency: ${lead.selectedCurrency}`,
        `Inputs: ${JSON.stringify(lead.inputs)}`,
        `Results: ${JSON.stringify(lead.results)}`,
    ].join('\n');

    const result = await processLead({
        leadType: 'ai_roi',
        fullName: lead.fullName,
        email: lead.email,
        phone: lead.phone,
        companyName: lead.companyName,
        leadSource: 'ai_roi_calculator',
        leadMagnet: lead.leadMagnet,
        serviceInterest: lead.businessProcess,
        sourcePage: lead.sourcePage,
        consentGiven: lead.consent,
        notesSummary: summaryNote,
        userAgent: request.headers.get('user-agent') || '',
        originalReferrer: request.headers.get('referer') || '',
    });

    if (!result.accepted) {
        return NextResponse.json({
            ok: false,
            accepted: false,
            message: result.message || 'We could not deliver your report request. Please try again.',
        }, { status: 503 });
    }

    return NextResponse.json({
        ok: true,
        accepted: true,
        results: lead.results,
        submissionId: result.submissionId,
    });
}
