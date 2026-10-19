export interface NicheNewsletter {
    id: string;
    name: string;
    quarter: string; // e.g. "Q3 2026", "Q4 2026"
    targetAudience: string;
    subscriberCount: string;
    averageOpenRate: string;
    averageCTR: string;
    sponsorshipCost: string;
    primaryFocus: string;
}

export interface NewsletterCreativeAsset {
    newsletterId: string;
    adFormat: 'Main Sponsor (Dedicated Header + Body)' | 'Mid-Roll Feature' | 'Tool Spotight';
    headline: string;
    bodyText: string;
    callToActionText: string;
    destinationUtmUrl: string;
    visualBannerDescription: string;
}

export interface NewsletterPerformanceTracker {
    newsletterId: string;
    status: 'Planned' | 'Active' | 'Completed';
    impressionsDelivered: number;
    clicksRecorded: number;
    leadsGenerated: number;
    qualifiedAuditsBooked: number;
    effectiveCPA: string;
    notes: string;
}

export const newsletterSponsorshipPlan: {
    newsletters: NicheNewsletter[];
    creatives: NewsletterCreativeAsset[];
    performanceTrackers: NewsletterPerformanceTracker[];
} = {
    newsletters: [
        {
            id: "nl-q3-01",
            name: "Enterprise AI & SaaS Digest",
            quarter: "Q3 2026",
            targetAudience: "CTOs, VPs of Engineering, Enterprise Architects",
            subscriberCount: "85,000+",
            averageOpenRate: "44.2%",
            averageCTR: "6.8%",
            sponsorshipCost: "$1,800 / issue",
            primaryFocus: "AI workflow automation, decoupled cloud microservices, and enterprise legacy refactoring."
        },
        {
            id: "nl-q3-02",
            name: "The B2B SaaS Growth Brief",
            quarter: "Q3 2026",
            targetAudience: "SaaS Founders, Product Leaders, Head of Growth",
            subscriberCount: "62,000+",
            averageOpenRate: "39.8%",
            averageCTR: "5.4%",
            sponsorshipCost: "$1,400 / issue",
            primaryFocus: "Scaling custom ERP/CRM infrastructure, high-velocity development pipelines, and reducing CAC."
        },
        {
            id: "nl-q4-01",
            name: "Pragmatic Engineering Weekly",
            quarter: "Q4 2026",
            targetAudience: "Lead System Architects, Engineering Managers",
            subscriberCount: "120,000+",
            averageOpenRate: "48.5%",
            averageCTR: "7.2%",
            sponsorshipCost: "$2,500 / issue",
            primaryFocus: "Zero-downtime database migrations, microservice event brokers (Kafka/Serverless), and security compliance."
        },
        {
            id: "nl-q4-02",
            name: "Fintech & Logistics Tech Insider",
            quarter: "Q4 2026",
            targetAudience: "Fintech CTOs, Logistics Operations Directors",
            subscriberCount: "45,000+",
            averageOpenRate: "41.0%",
            averageCTR: "6.1%",
            sponsorshipCost: "$1,200 / issue",
            primaryFocus: "High-frequency algorithmic trading systems, payment gateway infrastructure, and route optimization."
        }
    ],

    creatives: [
        {
            newsletterId: "nl-q3-01",
            adFormat: "Main Sponsor (Dedicated Header + Body)",
            headline: "Stop Paying Agency Hourly Bloat: Replace Legacy Monoliths in 30 Days",
            bodyText: "Most enterprise software fails due to monolithic debt. Kiaan Technology engineers decoupled Next.js & Node.js microservices with 100% IP ownership and weekly live CI/CD previews. Turn your operational bottlenecks into high-margin AI engines.",
            callToActionText: "Schedule Free Architecture Audit",
            destinationUtmUrl: "https://kiaantechnology.com/demo?utm_source=enterprise_ai_digest&utm_medium=newsletter&utm_campaign=q3_sponsorship",
            visualBannerDescription: "High-tech dark banner featuring glowing yellow microservice nodes and '100% Code Ownership' badge."
        },
        {
            newsletterId: "nl-q3-02",
            adFormat: "Mid-Roll Feature",
            headline: "How a Mid-Market Partner Boosted Execution Speed by 50%",
            bodyText: "Kiaan Technology migrated a multi-country legacy engine with zero downtime. Explore our case studies to see how custom ERP & AI automation slashes operational headcount needs.",
            callToActionText: "Read Enterprise Case Studies",
            destinationUtmUrl: "https://kiaantechnology.com/case-studies?utm_source=b2b_saas_growth&utm_medium=newsletter&utm_campaign=q3_sponsorship",
            visualBannerDescription: "Clean dark graphic showing 50% Speed Boost metrics chart and verified client quote."
        }
    ],

    performanceTrackers: [
        {
            newsletterId: "nl-q3-01",
            status: "Active",
            impressionsDelivered: 85200,
            clicksRecorded: 5790,
            leadsGenerated: 142,
            qualifiedAuditsBooked: 38,
            effectiveCPA: "$47.36",
            notes: "High conversion rate on the Free Architecture Audit CTA. Exceeded target CTR benchmark by 1.4%."
        },
        {
            newsletterId: "nl-q3-02",
            status: "Planned",
            impressionsDelivered: 0,
            clicksRecorded: 0,
            leadsGenerated: 0,
            qualifiedAuditsBooked: 0,
            effectiveCPA: "Pending Launch",
            notes: "Scheduled for publication next month. Copy and banner assets approved by editorial team."
        }
    ]
};

export function getQuarterlySponsorshipPlan(quarter: string) {
    const newsletters = newsletterSponsorshipPlan.newsletters.filter(n => n.quarter === quarter);
    const newsletterIds = newsletters.map(n => n.id);
    const creatives = newsletterSponsorshipPlan.creatives.filter(c => newsletterIds.includes(c.newsletterId));
    const trackers = newsletterSponsorshipPlan.performanceTrackers.filter(p => newsletterIds.includes(p.newsletterId));

    return {
        quarter,
        totalNewsletters: newsletters.length,
        newsletters,
        creatives,
        trackers
    };
}
