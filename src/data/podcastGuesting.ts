export interface PodcastTarget {
    id: string;
    podcastName: string;
    hostName: string;
    targetMonth: string; // e.g. "August 2026", "September 2026"
    estimatedListeners: string;
    nicheCategory: 'Enterprise Software' | 'B2B SaaS' | 'AI Engineering' | 'Cloud & Architecture' | 'CTO Leadership';
    pitchTopic: string;
    outreachStatus: 'Pitched' | 'Confirmed' | 'Recorded' | 'Published';
    recordingDate?: string;
    publishDate?: string;
    episodeUrl?: string;
}

export interface PodcastPitchTemplate {
    id: string;
    topicTitle: string;
    targetAudience: string;
    subjectLine: string;
    pitchBody: string;
    talkingPoints: string[];
}

export interface PodcastMetricsSummary {
    monthlyTarget: number;
    confirmedInterviewsThisMonth: number;
    totalPublishedEpisodes: number;
    estimatedTotalReach: string;
    referralTrafficEstimate: string;
    inboundAuditsAttributed: number;
}

export const podcastGuestingPlan: {
    metrics: PodcastMetricsSummary;
    targetPodcasts: PodcastTarget[];
    pitchTemplates: PodcastPitchTemplate[];
} = {
    metrics: {
        monthlyTarget: 2,
        confirmedInterviewsThisMonth: 2,
        totalPublishedEpisodes: 8,
        estimatedTotalReach: "250,000+ Listeners",
        referralTrafficEstimate: "4,200 Unique Visitors / Month",
        inboundAuditsAttributed: 26
    },

    targetPodcasts: [
        {
            id: "pod-01",
            podcastName: "The CTO Studio",
            hostName: "Etienne de Bruin",
            targetMonth: "August 2026",
            estimatedListeners: "35,000 / episode",
            nicheCategory: "CTO Leadership",
            pitchTopic: "Decoupling Legacy Monoliths: How to Avoid the $1M Re-architecture Trap",
            outreachStatus: "Confirmed",
            recordingDate: "2026-08-10",
            publishDate: "2026-08-25"
        },
        {
            id: "pod-02",
            podcastName: "SaaS Revolution Show",
            hostName: "Alex Theuma",
            targetMonth: "August 2026",
            estimatedListeners: "50,000 / episode",
            nicheCategory: "B2B SaaS",
            pitchTopic: "Scaling Multi-Tenant SaaS Infrastructure from MVP to Enterprise Compliance",
            outreachStatus: "Confirmed",
            recordingDate: "2026-08-18",
            publishDate: "2026-08-30"
        },
        {
            id: "pod-03",
            podcastName: "Software Engineering Daily",
            hostName: "Jeff Meyerson",
            targetMonth: "September 2026",
            estimatedListeners: "75,000 / episode",
            nicheCategory: "Enterprise Software",
            pitchTopic: "Building Autonomous Business Workflows with Microservices & Serverless Event Buses",
            outreachStatus: "Pitched",
            recordingDate: "2026-09-08"
        },
        {
            id: "pod-04",
            podcastName: "Enterprise AI Pulse",
            hostName: "Marcus Vance",
            targetMonth: "September 2026",
            estimatedListeners: "28,000 / episode",
            nicheCategory: "AI Engineering",
            pitchTopic: "Beyond LLM Wrappers: Engineering Custom AI Agents for Zero-Touch Back Office Automation",
            outreachStatus: "Pitched",
            recordingDate: "2026-09-22"
        }
    ],

    pitchTemplates: [
        {
            id: "pitch-01",
            topicTitle: "Decoupling Monolithic Architecture without Systems Downtime",
            targetAudience: "CTOs, VPs of Engineering, Lead Architects",
            subjectLine: "Podcast Guest Pitch: How Kiaan Tech Refactored Legacy Monoliths with Zero Downtime",
            pitchBody: `Hi {{host_name}},

I've been following {{podcast_name}} and loved your recent episode on enterprise tech scaling.

I am reaching out from **Kiaan Technology**, where our engineering leads specialize in refactoring monolithic legacy debt into high-speed, decoupled serverless microservices.

We recently led an architecture overhaul for a multi-region enterprise that boosted execution speed by 50% without a single second of migration downtime.

I would love to come on {{podcast_name}} to share an actionable breakdown for your listener base:
1. The 3 early warning signs that a codebase is suffering from monolithic decay.
2. Why 80% of 'Big Bang' re-architectures fail and how to use the Strangler Fig pattern instead.
3. How to guarantee 100% IP ownership and zero vendor lock-in when scaling.

Would you be open to a 20-minute guest appearance next month?`,
            talkingPoints: [
                "The Strangler Fig Migration Pattern vs Big-Bang Refactoring",
                "Decoupled Serverless vs Monolithic Cost Trade-offs",
                "Case Study: 50% Execution Speed Boost with Zero Downtime"
            ]
        },
        {
            id: "pitch-02",
            topicTitle: "AI Business Automation: Replacing Manual Workflows",
            targetAudience: "SaaS Founders, Operations Executives, CIOs",
            subjectLine: "Guest Idea for {{podcast_name}}: Turn Manual Back-Office Workflows into Autonomous AI Engines",
            pitchBody: `Hi {{host_name}},

Many businesses are trying to figure out how to deploy AI beyond basic chatbots.

At **Kiaan Technology**, we build bespoke AI automation layers for enterprise back-offices—automating invoice parsing, predictive lead scoring, and resource allocation.

I'd love to share real-world engineering blueprints on {{podcast_name}}:
* How mid-market companies slash operational overhead by 40% using custom LLM agents.
* The critical difference between fragile API wrappers and true autonomous data pipelines.
* Practical ROI metrics founders should demand before investing in AI engineering.`,
            talkingPoints: [
                "Beyond LLM Wrappers: True Autonomous Agents",
                "40% Closing Rate Lift using Predictive AI Lead Scoring",
                "The 5-Point System Audit for AI Readiness"
            ]
        }
    ]
};

export function getMonthlyPodcastSchedule(month: string) {
    const targets = podcastGuestingPlan.targetPodcasts.filter(p => p.targetMonth === month);
    return {
        month,
        monthlyGoal: podcastGuestingPlan.metrics.monthlyTarget,
        scheduledCount: targets.length,
        targets
    };
}
