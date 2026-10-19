export interface G2ClientNomination {
    id: string;
    clientName: string;
    clientRole: string;
    companyName: string;
    productReviewed: string;
    projectScope: string;
    outreachStatus: 'Nominated' | 'Invite Sent' | 'Review Drafted' | 'G2 Verified';
    targetRating: number;
    g2ReviewLink?: string;
}

export interface G2OutreachTemplate {
    id: string;
    channel: 'Email' | 'LinkedIn' | 'WhatsApp';
    stage: 'Initial Invite' | 'Follow-up (Day 3)' | 'Thank You & Incentive Confirmation';
    subjectLine?: string;
    body: string;
}

export const g2ReviewCampaign = {
    campaignOverview: {
        title: "G2 Client Review Collection Drive Q3 2026",
        goal: "Collect 5 Verified Enterprise Reviews on G2.com",
        g2ListingUrl: "https://www.g2.com/products/kiaan-technology/reviews",
        incentiveOffer: "$25 / £20 Amazon Gift Card or £100 Kiaan Service Credit",
        targetAverageRating: "4.9 / 5.0 Stars",
        currentStatus: "Active Outreach"
    },

    clientNominations: [
        {
            id: "g2-client-01",
            clientName: "Dr. Rajesh Sharma",
            clientRole: "Founder & Chief Medical Officer",
            companyName: "HealthSakhi AI",
            productReviewed: "Custom AI Healthcare & Diagnostics Platform",
            projectScope: "Engineered HIPPA-compliant AI patient diagnostic assistant handling 10,000+ daily triage queries.",
            outreachStatus: "G2 Verified",
            targetRating: 5.0,
            g2ReviewLink: "https://www.g2.com/products/kiaan-technology/reviews/healthsakhi-ai-review"
        },
        {
            id: "g2-client-02",
            clientName: "David Miller",
            clientRole: "VP of Engineering",
            companyName: "PGX Payment Systems",
            productReviewed: "Enterprise High-Frequency Payment Gateway Engine",
            projectScope: "Built low-latency payment processing middleware handling $50M+ annual transaction volume.",
            outreachStatus: "G2 Verified",
            targetRating: 5.0,
            g2ReviewLink: "https://www.g2.com/products/kiaan-technology/reviews/pgx-payment-review"
        },
        {
            id: "g2-client-03",
            clientName: "Ananya Patel",
            clientRole: "Head of Operations",
            companyName: "StudyFirst Education CRM",
            productReviewed: "StudyFirst Enterprise Education CRM",
            projectScope: "Architected multi-tenant CRM with automated lead distribution and student application tracking.",
            outreachStatus: "Invite Sent",
            targetRating: 5.0
        },
        {
            id: "g2-client-04",
            clientName: "Marcus Thorne",
            clientRole: "Director of Supply Chain Technology",
            companyName: "GlobalLogistics Enterprise",
            productReviewed: "Custom ERP & Route Optimization System",
            projectScope: "Migrated legacy logistics software to cloud-native microservices with real-time GPS fleet tracking.",
            outreachStatus: "Invite Sent",
            targetRating: 4.8
        },
        {
            id: "g2-client-05",
            clientName: "Vikram Mehta",
            clientRole: "Chief Executive Officer",
            companyName: "RetailPulse POS & SaaS",
            productReviewed: "Multi-Store Retail POS & Inventory SaaS",
            projectScope: "Designed offline-first retail POS system with real-time cloud database synchronization.",
            outreachStatus: "Nominated",
            targetRating: 5.0
        }
    ] as G2ClientNomination[],

    outreachTemplates: [
        {
            id: "tmpl-01",
            channel: "Email",
            stage: "Initial Invite",
            subjectLine: "Quick Request: Share Your Experience with Kiaan Tech on G2 ($25 Gift Card)",
            body: `Hi {{client_first_name}},

I hope you're having a great week!

Our engineering team loved working with you on {{product_reviewed}} for {{company_name}}.

We are currently gathering feedback from our key enterprise partners on **G2.com** to help other technology leaders evaluate software engineering partners.

Would you be open to sharing 2 minutes of your feedback?
👉 **Leave a Review on G2:** https://www.g2.com/products/kiaan-technology/reviews

As a token of appreciation for your time, G2 will issue a **$25 / £20 Amazon Gift Card** (or we can apply a **£100 credit** directly toward your next Kiaan Technology invoice).

Thank you for your ongoing partnership!

Best regards,
Kiaan Technology Partner Team`
        },
        {
            id: "tmpl-02",
            channel: "WhatsApp",
            stage: "Follow-up (Day 3)",
            body: `Hi {{client_first_name}}! Following up on my email regarding G2. If you have 2 minutes today, leaving a quick review about our work on {{product_reviewed}} would mean the world to our team: https://www.g2.com/products/kiaan-technology/reviews - Thanks so much!`
        }
    ] as G2OutreachTemplate[]
};

export function getG2CampaignProgress() {
    const total = g2ReviewCampaign.clientNominations.length;
    const verified = g2ReviewCampaign.clientNominations.filter(c => c.outreachStatus === 'G2 Verified').length;
    const inProgress = g2ReviewCampaign.clientNominations.filter(c => c.outreachStatus === 'Invite Sent').length;

    return {
        goal: 5,
        totalNominated: total,
        verifiedReviews: verified,
        inProgressReviews: inProgress,
        completionPercentage: Math.round((verified / 5) * 100)
    };
}
