export interface ReferralTier {
    name: string;
    reward: string;
    qualifyingCriteria: string;
    badge: string;
    description: string;
}

export interface ReferralFAQ {
    question: string;
    answer: string;
}

export const referralProgramData = {
    title: "Kiaan Technology Client Referral Program",
    tagline: "Partner with Us & Earn £500 Credit Per Successful Referral",
    mainReward: "£500",
    description: "Introduce business leaders, founders, or enterprise CTOs to Kiaan Technology. When your referred client launches a custom software, ERP, CRM, or AI automation project with us, you receive a £500 service credit or direct payout.",
    
    tiers: [
        {
            name: "Standard Referral",
            reward: "£500 Credit / Cash",
            qualifyingCriteria: "Qualifying project value > £3,000",
            badge: "Tier 1",
            description: "Ideal for referring startups, SMBs, and mid-market web/mobile application projects."
        },
        {
            name: "Enterprise Partner",
            reward: "£1,500 Credit / Cash",
            qualifyingCriteria: "Qualifying project value > £15,000",
            badge: "Tier 2",
            description: "For introducing enterprise clients requiring full-scale ERP migration, AI automation, or multi-tenant SaaS builds."
        },
        {
            name: "Strategic Affiliate",
            reward: "10% Ongoing Revenue Share",
            qualifyingCriteria: "Multiple recurring client introductions",
            badge: "Tier 3",
            description: "Designed for IT consultants, agencies, and advisors managing continuous client referral pipelines."
        }
    ] as ReferralTier[],

    howItWorks: [
        {
            step: "01",
            title: "Generate & Share Your Link",
            description: "Enter your name and email below to generate your unique referral link or send a direct email invitation."
        },
        {
            step: "02",
            title: "Client Consultation & Scope",
            description: "Our Lead Solution Architects conduct a free architecture audit and project scoping call with your referral."
        },
        {
            step: "03",
            title: "Receive Your £500 Reward",
            description: "Once the referral contract is initiated, your £500 credit is disbursed immediately via direct transfer or invoice credit."
        }
    ],

    termsAndConditions: [
        {
            title: "Eligibility",
            content: "Anyone can participate in the Kiaan Technology Referral Program. Existing clients, tech partners, consultants, and independent advisors are all welcome."
        },
        {
            title: "Qualifying Criteria",
            content: "A referral is considered successful when the referred organization signs a project agreement with Kiaan Technology valued at £3,000 or above."
        },
        {
            title: "Payout Timelines",
            content: "Referral rewards (£500 for Standard, £1,500 for Enterprise) are processed within 14 business days of initial project milestone confirmation."
        },
        {
            title: "Unlimited Earnings",
            content: "There is no cap on the number of clients you can refer. Each successful qualifying introduction earns you a new £500 reward."
        }
    ],

    faqs: [
        {
            question: "How do I track the status of my referral?",
            answer: "Once you submit a referral via your link or form, our team sends you automated email updates at every milestone: Consultation Booked, Proposal Accepted, and Reward Disbursed."
        },
        {
            question: "Can I apply the £500 credit toward my own project invoices?",
            answer: "Yes! If you are an existing Kiaan Technology client, you can choose to apply the £500 credit toward ongoing maintenance, new feature development, or direct bank transfer."
        },
        {
            question: "What types of projects qualify for the program?",
            answer: "All custom software development, custom ERP/CRM implementation, AI workflow automation, mobile app builds, and enterprise SaaS projects qualify."
        }
    ] as ReferralFAQ[]
};
