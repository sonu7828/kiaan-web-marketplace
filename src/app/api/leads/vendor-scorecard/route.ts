import { NextResponse } from 'next/server';
import { validateVendorLead } from '@/lib/vendorScorecardLead';
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

    const parsed = validateVendorLead(body);
    if (!parsed.lead) {
        return NextResponse.json({ ok: false, errors: parsed.errors }, { status: 422 });
    }

    const lead = parsed.lead;
    const notesSummary = [
        `Vendor Scorecard Evaluation Report`,
        `Vendor: ${lead.vendor.name} (${lead.vendor.projectType})`,
        `Budget Range: ${lead.budgetRange}`,
        `Start Date: ${lead.startDate}`,
        `Final Score: ${lead.score.finalScore} (${lead.score.rating})`,
        `Red Flags: ${lead.selectedRedFlags.join(', ') || 'None'}`,
    ].join('\n');

    const result = await processLead({
        leadType: 'vendor_scorecard',
        fullName: lead.fullName,
        email: lead.email,
        phone: lead.phone,
        companyName: lead.companyName,
        leadSource: 'vendor_scorecard',
        leadMagnet: lead.leadMagnet,
        serviceInterest: lead.vendor.projectType,
        budgetRange: lead.budgetRange,
        sourcePage: lead.sourcePage,
        consentGiven: lead.consent,
        notesSummary,
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
        score: lead.score,
        redFlagSeverity: lead.redFlagSeverity,
        submissionId: result.submissionId,
    });
}
