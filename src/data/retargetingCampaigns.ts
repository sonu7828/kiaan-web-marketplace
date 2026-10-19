export interface RetargetingAudience {
    segmentId: string;
    segmentName: string;
    description: string;
    membershipDurationDays: number;
    platform: 'Google Display Network' | 'Meta (Facebook/Instagram)' | 'Omnichannel';
    rules: string[];
    priority: 'High' | 'Medium' | 'Critical';
}

export interface AdCreative {
    id: string;
    title: string;
    headline: string;
    description: string;
    callToAction: string;
    format: 'Responsive Display' | 'Meta Carousel' | 'Single Image/Video' | 'Story/Reels';
    destinationUrl: string;
    targetAudienceId: string;
}

export interface RetargetingCampaignSpec {
    platform: 'Google Display Network' | 'Meta (Facebook/Instagram)';
    campaignName: string;
    objective: string;
    dailyBudgetEst: string;
    biddingStrategy: string;
    audiences: RetargetingAudience[];
    creatives: AdCreative[];
}

export const googleDisplayRetargeting: RetargetingCampaignSpec = {
    platform: "Google Display Network",
    campaignName: "GDN_Retargeting_Enterprise_Leads_2026",
    objective: "Lead Generation & High-Intent Conversions",
    dailyBudgetEst: "$50 - $150 / day",
    biddingStrategy: "Target CPA (Cost Per Acquisition) / Maximize Conversions",
    audiences: [
        {
            segmentId: "gdn-aud-01",
            segmentName: "Pricing & Demo Abandoners (High Intent)",
            description: "Visitors who viewed /pricing or /demo pages in the last 14 days but did not submit a contact form.",
            membershipDurationDays: 14,
            platform: "Google Display Network",
            rules: ["URL contains /pricing OR /demo", "Exclusion: URL contains /contact/thank-you"],
            priority: "Critical"
        },
        {
            segmentId: "gdn-aud-02",
            segmentName: "Case Studies & Solutions Readers",
            description: "Visitors who read enterprise case studies or industry solution pages in the last 30 days.",
            membershipDurationDays: 30,
            platform: "Google Display Network",
            rules: ["URL contains /case-studies OR /solutions", "Time on page > 45 seconds"],
            priority: "High"
        },
        {
            segmentId: "gdn-aud-03",
            segmentName: "All Site Visitors (Brand Recall)",
            description: "All non-converting website visitors within 60 days.",
            membershipDurationDays: 60,
            platform: "Google Display Network",
            rules: ["All Pageviews", "Exclusion: Converted Leads"],
            priority: "Medium"
        }
    ],
    creatives: [
        {
            id: "gdn-ad-01",
            title: "Decoupled Architecture Banner",
            headline: "Replace Legacy Software Monoliths",
            description: "Build scalable Next.js + Node.js microservices. 100% IP ownership & zero downtime.",
            callToAction: "Schedule Free Audit",
            format: "Responsive Display",
            destinationUrl: "https://kiaantechnology.com/demo",
            targetAudienceId: "gdn-aud-01"
        },
        {
            id: "gdn-ad-02",
            title: "50% Execution Speed Boost Proof",
            headline: "Proven 50% Speed Boost For Enterprise Apps",
            description: "See how Kiaan Technology migrated legacy trading engines with zero migration downtime.",
            callToAction: "Read Case Study",
            format: "Responsive Display",
            destinationUrl: "https://kiaantechnology.com/case-studies",
            targetAudienceId: "gdn-aud-02"
        }
    ]
};

export const metaRetargeting: RetargetingCampaignSpec = {
    platform: "Meta (Facebook/Instagram)",
    campaignName: "Meta_Retargeting_Custom_Audiences_2026",
    objective: "Conversions / Lead Ads & Traffic",
    dailyBudgetEst: "$50 - $100 / day",
    biddingStrategy: "Lowest Cost with Bid Cap",
    audiences: [
        {
            segmentId: "meta-aud-01",
            segmentName: "Website Visitors 30 Days (Custom Audience)",
            description: "Matched Facebook/Instagram users who visited Kiaan Technology site in the past 30 days.",
            membershipDurationDays: 30,
            platform: "Meta (Facebook/Instagram)",
            rules: ["Pixel Event: PageView", "Time Window: 30 Days"],
            priority: "High"
        },
        {
            segmentId: "meta-aud-02",
            segmentName: "Service & Product Page Intent Pool",
            description: "Users who visited /services or /products categories in the last 14 days.",
            membershipDurationDays: 14,
            platform: "Meta (Facebook/Instagram)",
            rules: ["Pixel Event: ViewContent (Category: Services/Products)"],
            priority: "Critical"
        }
    ],
    creatives: [
        {
            id: "meta-ad-01",
            title: "Enterprise Automation Carousel",
            headline: "Transform Manual Processes Into High-Margin AI Engines",
            description: "Custom ERP, CRM, and serverless AI automation layers engineered for modern enterprises.",
            callToAction: "Book Strategy Call",
            format: "Meta Carousel",
            destinationUrl: "https://kiaantechnology.com/schedule",
            targetAudienceId: "meta-aud-02"
        },
        {
            id: "meta-ad-02",
            title: "Client Success Proof Video Ad",
            headline: "Engineered For Infinite Scalability",
            description: "Stop paying massive agency hourly bloat. Inspect live CI/CD builds weekly.",
            callToAction: "Explore Solutions",
            format: "Single Image/Video",
            destinationUrl: "https://kiaantechnology.com/solutions",
            targetAudienceId: "meta-aud-01"
        }
    ]
};

export function triggerPixelConversionEvent(eventName: string, payload?: Record<string, any>) {
    if (typeof window !== 'undefined') {
        // Meta Pixel trigger
        if ((window as any).fbq) {
            (window as any).fbq('track', eventName, payload);
        }
        // Google Ads Remarketing trigger
        if ((window as any).gtag) {
            (window as any).gtag('event', eventName, payload);
        }
    }
}
