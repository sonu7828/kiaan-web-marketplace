"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { triggerPixelConversionEvent } from '@/data/retargetingCampaigns';

export function RetargetingTracker() {
    const pathname = usePathname();

    useEffect(() => {
        if (!pathname) return;

        // Base PageView tracking
        triggerPixelConversionEvent('PageView', { path: pathname });

        // High-Intent Route Segment Tracking for Retargeting Pools
        if (pathname.includes('/pricing')) {
            triggerPixelConversionEvent('ViewContent', { content_type: 'PricingPage', path: pathname });
        } else if (pathname.includes('/demo') || pathname.includes('/start-project')) {
            triggerPixelConversionEvent('ViewContent', { content_type: 'DemoIntent', path: pathname });
        } else if (pathname.includes('/solutions') || pathname.includes('/services')) {
            triggerPixelConversionEvent('ViewContent', { content_type: 'SolutionsExplore', path: pathname });
        } else if (pathname.includes('/case-studies')) {
            triggerPixelConversionEvent('ViewContent', { content_type: 'CaseStudiesProof', path: pathname });
        } else if (pathname.includes('/contact')) {
            triggerPixelConversionEvent('LeadIntent', { content_type: 'ContactInitiated', path: pathname });
        }
    }, [pathname]);

    return null;
}
