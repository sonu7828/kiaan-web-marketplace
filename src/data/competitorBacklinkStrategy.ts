export interface CompetitorProfile {
    competitorName: string;
    websiteUrl: string;
    domainRatingDR: number;
    referringDomains: string;
    totalBacklinks: string;
    topAnchorKeywords: string[];
    primaryLinkSources: string[];
}

export interface BacklinkOpportunity {
    id: string;
    sourceDomain: string;
    domainRating: number;
    opportunityType: 'Vendor Review Directory' | 'Guest Architecture Column' | 'Resource List Inclusion' | 'Broken Link Replacement' | 'Podcast Citation';
    targetPageToLink: string;
    difficulty: 'Low' | 'Medium' | 'High';
    estimatedTrafficValue: string;
    outreachAction: string;
    status: 'Identified' | 'In Outreach' | 'Acquired';
}

export interface OutreachPlaybook {
    playbookName: string;
    strategyType: string;
    targetDomainAuthority: string;
    executionSteps: string[];
    pitchSnippet: string;
}

export const competitorBacklinkStrategy = {
    analysisSummary: {
        totalCompetitorsAudited: 5,
        targetDomainRatingGoal: "DR 70+",
        linkGapOpportunitiesIdentified: 15,
        acquiredQualityBacklinksToDate: 28,
        primaryFocus: "Custom Software Engineering, AI Automation & B2B SaaS Authority"
    },

    competitors: [
        {
            competitorName: "LeewayHertz",
            websiteUrl: "leewayhertz.com",
            domainRatingDR: 78,
            referringDomains: "4.2K",
            totalBacklinks: "48.5K",
            topAnchorKeywords: ["AI software development", "custom enterprise AI", "blockchain developers"],
            primaryLinkSources: ["TechCrunch", "VentureBeat", "Clutch.co", "HackerNoon", "Medium Tech"]
        },
        {
            competitorName: "Netguru",
            websiteUrl: "netguru.com",
            domainRatingDR: 82,
            referringDomains: "6.8K",
            totalBacklinks: "89.0K",
            topAnchorKeywords: ["custom software development company", "react nodejs agency", "saas architecture"],
            primaryLinkSources: ["Forbes Tech Council", "GoodFirms", "GitHub Awesome Lists", "DesignRush"]
        },
        {
            competitorName: "ThoughtWorks",
            websiteUrl: "thoughtworks.com",
            domainRatingDR: 88,
            referringDomains: "18.5K",
            totalBacklinks: "240.0K",
            topAnchorKeywords: ["enterprise technology consultancy", "microservices architecture", "technology radar"],
            primaryLinkSources: ["InfoQ", "IEEE Xplore", "Gartner", "Harvard Business Review"]
        },
        {
            competitorName: "Toptal",
            websiteUrl: "toptal.com",
            domainRatingDR: 90,
            referringDomains: "24.0K",
            totalBacklinks: "1.2M",
            topAnchorKeywords: ["hire software developers", "freelance engineers", "engineering blog"],
            primaryLinkSources: ["TechTarget", "DZone", "Smashing Magazine", "CSS-Tricks"]
        }
    ] as CompetitorProfile[],

    topOpportunities: [
        {
            id: "opp-01",
            sourceDomain: "Clutch.co",
            domainRating: 92,
            opportunityType: "Vendor Review Directory",
            targetPageToLink: "https://kiaantechnology.com/software-development-company-india",
            difficulty: "Low",
            estimatedTrafficValue: "High (Direct Buyer Intent)",
            outreachAction: "Claim & verify company profile; invite 10 verified enterprise clients to submit verified reviews.",
            status: "Acquired"
        },
        {
            id: "opp-02",
            sourceDomain: "GoodFirms.co",
            domainRating: 88,
            opportunityType: "Vendor Review Directory",
            targetPageToLink: "https://kiaantechnology.com/saas-development-company-indore",
            difficulty: "Low",
            estimatedTrafficValue: "High (Local & Global B2B Leads)",
            outreachAction: "Optimize service category listings for Top Custom Software & SaaS Developers in India.",
            status: "Acquired"
        },
        {
            id: "opp-03",
            sourceDomain: "DZone Software Architecture",
            domainRating: 84,
            opportunityType: "Resource List Inclusion",
            targetPageToLink: "https://kiaantechnology.com/resources/state-of-ai-automation-2026-report",
            difficulty: "Medium",
            estimatedTrafficValue: "Medium (Developer & Architect Referral)",
            outreachAction: "Submit 2026 State of AI Automation Report link for inclusion in DZone's annual Microservices Guide.",
            status: "In Outreach"
        },
        {
            id: "opp-04",
            sourceDomain: "Awesome-Microservices (GitHub)",
            domainRating: 96,
            opportunityType: "Resource List Inclusion",
            targetPageToLink: "https://kiaantechnology.com/blog/questions-to-ask-before-hiring-a-software-company",
            difficulty: "Medium",
            estimatedTrafficValue: "High (Technical Backlink Authority)",
            outreachAction: "Submit Pull Request adding Kiaan Tech's Decoupled Architecture Guide to curated GitHub Awesome repositories.",
            status: "Identified"
        },
        {
            id: "opp-05",
            sourceDomain: "TechTarget / SearchSoftwareQuality",
            domainRating: 89,
            opportunityType: "Broken Link Replacement",
            targetPageToLink: "https://kiaantechnology.com/solutions",
            difficulty: "High",
            estimatedTrafficValue: "High (Enterprise Buyer Traffic)",
            outreachAction: "Identify 404 dead links pointing to obsolete competitor ERP migration whitepapers and offer Kiaan Tech's updated 2026 guide as replacement.",
            status: "In Outreach"
        }
    ] as BacklinkOpportunity[],

    outreachPlaybooks: [
        {
            playbookName: "Competitor Broken Link Replacement",
            strategyType: "404 Dead Link Reclamation",
            targetDomainAuthority: "DR 70 - DR 90",
            executionSteps: [
                "Run SEMrush / Ahrefs Broken Backlink Audit on competitor URLs (e.g. netguru.com/reports, leewayhertz.com/whitepapers).",
                "Filter for high-authority tech blogs linking to these broken 404 pages.",
                "Reach out to site webmasters offering Kiaan Technology's live 2026 reports as replacement links."
            ],
            pitchSnippet: "Hi {{editor_name}}, I noticed a dead link (404) on your article 'Top Enterprise Software Strategies' pointing to an outdated guide. We recently published an updated 2026 State of AI Automation report that covers the exact same topic with fresh benchmark data. Thought it might make a great replacement link!"
        },
        {
            playbookName: "Unlinked Brand Mention & Visual Infographic Credit",
            strategyType: "Brand Reclamation",
            targetDomainAuthority: "DR 60 - DR 85",
            executionSteps: [
                "Monitor Google Alerts and Ahrefs Web Alerts for 'Kiaan Technology' or embeds of our infographics.",
                "Identify publications referencing our stats without a do-follow hyperlink.",
                "Send quick polite request asking for link attribution to our canonical resource page."
            ],
            pitchSnippet: "Hi {{editor_name}}, thanks so much for featuring our 2026 AI Automation statistics in your recent post! Would you mind adding a hyperlink to our original research page (https://kiaantechnology.com/resources/state-of-ai-automation-2026-report) so your readers can access the full dataset?"
        }
    ] as OutreachPlaybook[]
};

export function getCompetitorLinkGapSummary() {
    return {
        competitorsAnalyzed: competitorBacklinkStrategy.competitors.length,
        opportunitiesIdentified: competitorBacklinkStrategy.topOpportunities.length,
        acquiredLinks: competitorBacklinkStrategy.topOpportunities.filter(o => o.status === 'Acquired').length,
        inProgressLinks: competitorBacklinkStrategy.topOpportunities.filter(o => o.status === 'In Outreach').length,
        playbooksActive: competitorBacklinkStrategy.outreachPlaybooks.length
    };
}
