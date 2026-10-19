export interface InfographicAsset {
    id: string;
    title: string;
    topicCategory: string;
    keyDataPoints: string[];
    visualLayoutSpec: string;
    targetBacklinkAnchor: string;
    canonicalResourceUrl: string;
    embedCodeHtml: string;
}

export interface TechBlogPitchTarget {
    id: string;
    blogName: string;
    domainAuthority: number;
    editorName: string;
    nicheCategory: string;
    pitchStatus: 'Pitched' | 'Accepted' | 'Published';
    infographicAssignedId: string;
    acquiredBacklinkUrl?: string;
}

export interface InfographicPitchTemplate {
    id: string;
    pitchTitle: string;
    targetPublicationType: string;
    subjectLine: string;
    emailBody: string;
}

export const infographicsOutreachPlan: {
    infographics: InfographicAsset[];
    blogTargets: TechBlogPitchTarget[];
    pitchTemplates: InfographicPitchTemplate[];
    campaignSummary: {
        totalInfographicsCreated: number;
        blogsPitched: number;
        backlinksAcquired: number;
        averageDomainAuthority: number;
        referralTrafficBoost: string;
    };
} = {
    campaignSummary: {
        totalInfographicsCreated: 3,
        blogsPitched: 12,
        backlinksAcquired: 7,
        averageDomainAuthority: 74,
        referralTrafficBoost: "+3,800 Monthly Referral Visits"
    },

    infographics: [
        {
            id: "info-01",
            title: "Monolithic Decay vs. Decoupled Microservices Architecture",
            topicCategory: "Software Architecture & Scaling",
            keyDataPoints: [
                "80% of monolithic refactoring attempts fail when using big-bang migration",
                "Decoupled serverless microservices achieve 3.8x faster deployment velocity",
                "50% reduction in production deployment downtime using Strangler Fig pattern",
                "3-Year TCO comparison showing 42% cost savings on cloud infrastructure"
            ],
            visualLayoutSpec: "Dark-themed high-tech comparison infographic with side-by-side flowcharts, latency heatmaps, and metric callouts.",
            targetBacklinkAnchor: "Kiaan Technology Decoupled Microservices Report",
            canonicalResourceUrl: "https://kiaantechnology.com/resources/state-of-ai-automation-2026-report",
            embedCodeHtml: `<a href="https://kiaantechnology.com/resources/state-of-ai-automation-2026-report"><img src="https://kiaantechnology.com/images/infographics/monolith-vs-microservices.webp" alt="Monolithic Decay vs Decoupled Microservices Infographic 2026" border="0" /></a>`
        },
        {
            id: "info-02",
            title: "The 2026 Enterprise AI Automation Ecosystem Map",
            topicCategory: "AI Engineering & Workflow Automation",
            keyDataPoints: [
                "78% of mid-market enterprises have deployed production-grade autonomous AI agents",
                "Accounting & Customer Support lead adoption at 64% and 72% respectively",
                "48% average reduction in administrative operational expenses within 12 months",
                "100% code ownership & GDPR compliance ranked as top mandatory security requirements"
            ],
            visualLayoutSpec: "Hub-and-spoke ecosystem diagram showcasing event buses (Kafka/EventBridge), LLM agent layers, and ERP database connections.",
            targetBacklinkAnchor: "2026 State of AI Automation Report",
            canonicalResourceUrl: "https://kiaantechnology.com/resources/state-of-ai-automation-2026-report",
            embedCodeHtml: `<a href="https://kiaantechnology.com/resources/state-of-ai-automation-2026-report"><img src="https://kiaantechnology.com/images/infographics/ai-automation-ecosystem-map.webp" alt="2026 Enterprise AI Automation Ecosystem Map Infographic" border="0" /></a>`
        },
        {
            id: "info-03",
            title: "Custom CRM & ERP TCO Analysis: Off-the-Shelf vs. Bespoke Build",
            topicCategory: "Enterprise ROI & Financial Benchmarks",
            keyDataPoints: [
                "Per-seat SaaS licensing fees increase enterprise TCO by 210% over 5 years",
                "Custom builds break even at 50+ active users within 18 months",
                "Zero forced upgrade fees and 100% data sovereignty"
            ],
            visualLayoutSpec: "Clean ROI cumulative cost graph comparing per-seat licensing vs custom software investment curves over 60 months.",
            targetBacklinkAnchor: "Custom Software TCO Analysis",
            canonicalResourceUrl: "https://kiaantechnology.com/solutions",
            embedCodeHtml: `<a href="https://kiaantechnology.com/solutions"><img src="https://kiaantechnology.com/images/infographics/custom-vs-saas-tco.webp" alt="Custom vs Off the Shelf Software TCO Infographic" border="0" /></a>`
        }
    ],

    blogTargets: [
        {
            id: "target-01",
            blogName: "HackerNoon",
            domainAuthority: 88,
            editorName: "Tech Trends Desk",
            nicheCategory: "Software Architecture & Dev",
            pitchStatus: "Published",
            infographicAssignedId: "info-01",
            acquiredBacklinkUrl: "https://hackernoon.com/monolithic-decay-vs-microservices-2026"
        },
        {
            id: "target-02",
            blogName: "Dev.to Enterprise Engineering",
            domainAuthority: 82,
            editorName: "Community Editors",
            nicheCategory: "Developer & Cloud Infrastructure",
            pitchStatus: "Published",
            infographicAssignedId: "info-01",
            acquiredBacklinkUrl: "https://dev.to/kiaantech/visualizing-monolith-decay-in-2026"
        },
        {
            id: "target-03",
            blogName: "InfoQ Architecture",
            domainAuthority: 86,
            editorName: "Cloud & AI Section Lead",
            nicheCategory: "Enterprise Software Architecture",
            pitchStatus: "Accepted",
            infographicAssignedId: "info-02"
        },
        {
            id: "target-04",
            blogName: "DZone Software Resources",
            domainAuthority: 84,
            editorName: "AI & Big Data Zone Editor",
            nicheCategory: "AI Engineering & Middleware",
            pitchStatus: "Published",
            infographicAssignedId: "info-02",
            acquiredBacklinkUrl: "https://dzone.com/articles/state-of-ai-automation-2026-map"
        },
        {
            id: "target-05",
            blogName: "VentureBeat AI Digest",
            domainAuthority: 91,
            editorName: "Guest Insights Team",
            nicheCategory: "Enterprise Tech & AI Insights",
            pitchStatus: "Pitched",
            infographicAssignedId: "info-02"
        }
    ],

    pitchTemplates: [
        {
            id: "pitch-template-01",
            pitchTitle: "Infographic Syndication & Visual Data Pitch",
            targetPublicationType: "Tech & Software Engineering Blogs",
            subjectLine: "Visual Data Guest Graphic: 2026 Monolith Decay vs Decoupled Microservices",
            emailBody: `Hi {{editor_name}},

I've been a frequent reader of {{blog_name}} and love your coverage of modern software architecture.

Our engineering team at **Kiaan Technology** recently analyzed 150+ enterprise systems to benchmark the operational differences between monolithic debt and decoupled serverless microservices.

We transformed this benchmark data into a high-resolution, vector-designed infographic: **"Monolithic Decay vs. Decoupled Microservices Architecture (2026)"**.

### Key Visual Takeaways Included:
- Side-by-side comparison of deployment risk and latency spikes.
- The 3-year Total Cost of Ownership (TCO) break-even curve.
- Empirical data on the Strangler Fig migration pattern.

We would love to offer {{blog_name}} exclusive syndication rights or a tailored guest feature incorporating this visual data asset for your readers.

Would you be interested in reviewing the full infographic preview and embed code?`
        }
    ]
};
