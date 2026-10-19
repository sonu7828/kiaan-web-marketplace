export interface TopPageFreshness {
    id: string;
    title: string;
    path: string;
    priority: 'P0' | 'P1';
    trafficShare: string;
    lastReviewed: string; // ISO format: YYYY-MM-DD
    nextScheduledReview: string; // ISO format: YYYY-MM-DD
    quarter: string;
    seoTargetKeywords: string[];
    auditChecklist: string[];
}

export const top10PagesFreshnessSchedule: TopPageFreshness[] = [
    {
        id: "home-page",
        title: "Home Gateway",
        path: "/",
        priority: "P0",
        trafficShare: "32%",
        lastReviewed: "2026-07-01",
        nextScheduledReview: "2026-10-01",
        quarter: "Q3 2026",
        seoTargetKeywords: [
            "AI business automation",
            "custom software development company",
            "enterprise SaaS solutions",
            "predictive ERP systems"
        ],
        auditChecklist: [
            "Verify Hero headline alignment with current quarterly ROI stats",
            "Audit CTA conversion rates and lead form endpoints",
            "Update client awards and marquee partner badges",
            "Refresh schema JSON-LD dateModified tag"
        ]
    },
    {
        id: "services-page",
        title: "Services Overview",
        path: "/services",
        priority: "P0",
        trafficShare: "18%",
        lastReviewed: "2026-07-01",
        nextScheduledReview: "2026-10-01",
        quarter: "Q3 2026",
        seoTargetKeywords: [
            "custom software development services",
            "AI automation development",
            "enterprise ERP CRM solutions",
            "SaaS architecture design"
        ],
        auditChecklist: [
            "Review technical capability stack for new AI frameworks",
            "Ensure service tier pricing benchmarks are up to date",
            "Check all internal links to niche industry pages",
            "Update meta description and open graph tags"
        ]
    },
    {
        id: "solutions-page",
        title: "Solutions Suite",
        path: "/solutions",
        priority: "P0",
        trafficShare: "12%",
        lastReviewed: "2026-07-01",
        nextScheduledReview: "2026-10-01",
        quarter: "Q3 2026",
        seoTargetKeywords: [
            "enterprise automation suite",
            "industry specific software solutions",
            "algorithmic trading fintech engine",
            "logistics route optimization software"
        ],
        auditChecklist: [
            "Update solution ROI metrics and outcome statistics",
            "Verify industry filter navigation functionality",
            "Audit lead magnet links and demo scheduler integration"
        ]
    },
    {
        id: "products-page",
        title: "SaaS Products Catalog",
        path: "/products",
        priority: "P0",
        trafficShare: "10%",
        lastReviewed: "2026-07-01",
        nextScheduledReview: "2026-10-01",
        quarter: "Q3 2026",
        seoTargetKeywords: [
            "SaaS product ecosystem",
            "custom CRM software",
            "cloud ERP modules",
            "HRM payroll management tool"
        ],
        auditChecklist: [
            "Add newly engineered SaaS modules to category listings",
            "Verify search filtering and tag indexing",
            "Audit product feature comparison charts"
        ]
    },
    {
        id: "indore-software-page",
        title: "Software Development Company Indore",
        path: "/software-development-company-indore",
        priority: "P1",
        trafficShare: "7%",
        lastReviewed: "2026-07-01",
        nextScheduledReview: "2026-10-01",
        quarter: "Q3 2026",
        seoTargetKeywords: [
            "software development company indore",
            "top IT company in indore",
            "custom app developers indore",
            "software agency indore"
        ],
        auditChecklist: [
            "Review regional GEO schema and local business coordinates",
            "Update local client case study highlights",
            "Ensure Google Maps and local contact NAP consistency"
        ]
    },
    {
        id: "indore-saas-page",
        title: "SaaS Development Company Indore",
        path: "/saas-development-company-indore",
        priority: "P1",
        trafficShare: "5%",
        lastReviewed: "2026-07-01",
        nextScheduledReview: "2026-10-01",
        quarter: "Q3 2026",
        seoTargetKeywords: [
            "saas development company indore",
            "cloud software agency indore",
            "multi-tenant app developers indore"
        ],
        auditChecklist: [
            "Audit SaaS tech stack recommendations (Next.js 15, Node, Cloud)",
            "Review client testimonial quotes and ratings",
            "Update pricing calculator benchmarks"
        ]
    },
    {
        id: "india-software-page",
        title: "Software Development Company India",
        path: "/software-development-company-india",
        priority: "P1",
        trafficShare: "5%",
        lastReviewed: "2026-07-01",
        nextScheduledReview: "2026-10-01",
        quarter: "Q3 2026",
        seoTargetKeywords: [
            "software development company india",
            "offshore software engineering team india",
            "custom IT outsourcing india"
        ],
        auditChecklist: [
            "Review global timezone and offshore engagement models",
            "Update cost efficiency comparison tables vs US/EU agencies",
            "Verify international client compliance credentials"
        ]
    },
    {
        id: "case-studies-page",
        title: "Case Archive",
        path: "/case-studies",
        priority: "P1",
        trafficShare: "4%",
        lastReviewed: "2026-07-01",
        nextScheduledReview: "2026-10-01",
        quarter: "Q3 2026",
        seoTargetKeywords: [
            "enterprise software case studies",
            "AI implementation success stories",
            "ERP migration results"
        ],
        auditChecklist: [
            "Feature newly completed quarterly client case studies",
            "Verify verified metric badges (e.g. 50% execution speed boost)",
            "Check canonical links and image webp alt text"
        ]
    },
    {
        id: "internship-page",
        title: "Internship Program",
        path: "/internship",
        priority: "P1",
        trafficShare: "4%",
        lastReviewed: "2026-07-01",
        nextScheduledReview: "2026-10-01",
        quarter: "Q3 2026",
        seoTargetKeywords: [
            "engineering internship indore",
            "full stack developer internship",
            "AI engineering training program"
        ],
        auditChecklist: [
            "Update upcoming batch start dates and curriculum tracks",
            "Review alumni hiring partner logos",
            "Verify enrollment form submission triggers"
        ]
    },
    {
        id: "about-page",
        title: "About Us",
        path: "/about",
        priority: "P1",
        trafficShare: "3%",
        lastReviewed: "2026-07-01",
        nextScheduledReview: "2026-10-01",
        quarter: "Q3 2026",
        seoTargetKeywords: [
            "about kiaan technology",
            "enterprise software leadership team",
            "AI engineering philosophy"
        ],
        auditChecklist: [
            "Audit StatCounter animation numbers for real-time accuracy",
            "Review engineering protocol steps and vision 360",
            "Update leadership profiles and technical certifications"
        ]
    }
];

export function getFreshnessByPath(path: string): TopPageFreshness | undefined {
    return top10PagesFreshnessSchedule.find(p => p.path === path);
}

export function getQuarterlyAuditSummary() {
    const totalPages = top10PagesFreshnessSchedule.length;
    const p0Pages = top10PagesFreshnessSchedule.filter(p => p.priority === 'P0').length;
    const p1Pages = top10PagesFreshnessSchedule.filter(p => p.priority === 'P1').length;
    return {
        totalPages,
        p0Pages,
        p1Pages,
        scheduleFrequency: "Quarterly (Every 90 Days)",
        nextGlobalReviewDate: "2026-10-01",
        currentQuarter: "Q3 2026"
    };
}
