export interface EmailTemplate {
    sequenceNumber: number;
    delayDays: number;
    trigger: string;
    stage: string;
    subjectLine: string;
    previewText: string;
    bodyMarkdown: string;
    primaryCTA: {
        text: string;
        url: string;
    };
    secondaryCTA?: {
        text: string;
        url: string;
    };
}

export const emailNurtureSequence: EmailTemplate[] = [
    {
        sequenceNumber: 1,
        delayDays: 0,
        trigger: "Lead Form Submission / Demo Request / Resource Download",
        stage: "Welcome & Value Delivery",
        subjectLine: "Welcome to Kiaan Technology: Re-architecting Enterprise Growth",
        previewText: "Thank you for reaching out. Here is what you can expect from our elite engineering team.",
        bodyMarkdown: `Hi {{first_name}},

Thank you for connecting with **Kiaan Technology**. Whether you are looking to replace legacy monoliths, automate back-office operations, or deploy high-availability SaaS platforms, you are in the right place.

At Kiaan Technology, we do not operate like traditional hourly-billed software agencies. We practice **high-velocity architectural engineering**—deploying pre-built serverless microservices and predictive AI models that turn operational bottlenecks into high-margin revenue engines.

### What Makes Our Engineering Protocol Different?
1. **Decoupled Architecture:** Infinite horizontal scaling using Next.js, Node.js, and cloud event buses.
2. **100% Source Code Ownership:** Full IP rights, deployment scripts, and repository access from Day 1.
3. **Predictable Velocity:** Weekly CI/CD previews so you inspect live code as it is built.

Want to see how we can transform your digital infrastructure? 

Explore our live case studies or schedule a 1-on-1 Architecture Audit with our lead team.`,
        primaryCTA: {
            text: "Schedule Free Architecture Audit",
            url: "https://kiaantechnology.com/demo"
        },
        secondaryCTA: {
            text: "Explore Our Solutions",
            url: "https://kiaantechnology.com/solutions"
        }
    },
    {
        sequenceNumber: 2,
        delayDays: 2,
        trigger: "2 Days After Email 1",
        stage: "Educational & Thought Leadership",
        subjectLine: "Why 80% of Enterprise Software Projects Fail (And How We Fix It)",
        previewText: "Discover the architectural flaws destroying software ROI and how decoupled microservices solve them.",
        bodyMarkdown: `Hi {{first_name}},

Most software projects fail not because of poor coding, but because of **poor architectural foundations**.

Mid-market enterprises frequently fall into two common traps:
* **The Monolithic Debt Trap:** Building all business logic into a single codebase that becomes sluggish, fragile, and impossible to update without breaking existing features.
* **The "Spreadsheet Band-Aid":** Forcing employees to stitch together disjointed SaaS subscriptions using manual Excel sheets.

### The Decoupled Fix
In modern engineering, we decouple business logic into isolated microservices. 

By building serverless event pipelines, your inventory, CRM, accounting, and AI automation engines communicate instantly without single points of failure.

Want to learn more about choosing the right technology partner? Read our latest technical guide below.`,
        primaryCTA: {
            text: "Read: Questions to Ask Before Hiring a Software Company",
            url: "https://kiaantechnology.com/blog/questions-to-ask-before-hiring-a-software-company"
        },
        secondaryCTA: {
            text: "View Our Tech Stack",
            url: "https://kiaantechnology.com/services"
        }
    },
    {
        sequenceNumber: 3,
        delayDays: 4,
        trigger: "4 Days After Email 1",
        stage: "Social Proof & Case Study",
        subjectLine: "How We Helped a Fintech Partner Boost Execution Speed by 50%",
        previewText: "See how Kiaan Technology migrated legacy trading engines with zero downtime.",
        bodyMarkdown: `Hi {{first_name}},

When our client needed to upgrade their high-frequency financial system across 40+ countries, they could not afford a single second of downtime.

### The Challenge
A legacy monolithic infrastructure was suffering from 30% latency spikes during peak market hours, risking compliance and user trust.

### Our Engineering Solution
* Architected a multi-region Go + Next.js serverless microservice layer.
* Deployed real-time algorithmic execution modules with automated failover routing.
* Migrated data with **zero downtime**.

### The Quantifiable Result
* **50% increase** in transaction execution speed.
* **0% migration downtime**.
* Expanded deployment across **40+ international markets**.

Whatever industry you operate in—Fintech, Healthcare, Retail, or Logistics—our engineering protocol delivers measurable business outcomes.`,
        primaryCTA: {
            text: "View Case Study Details",
            url: "https://kiaantechnology.com/case-studies/pgx-payment-gateway"
        },
        secondaryCTA: {
            text: "Explore All Case Studies",
            url: "https://kiaantechnology.com/case-studies"
        }
    },
    {
        sequenceNumber: 4,
        delayDays: 6,
        trigger: "6 Days After Email 1",
        stage: "Overcoming Objections & FAQs",
        subjectLine: "IP Ownership, Timelines & Pricing: Your Questions Answered",
        previewText: "Clear answers to the top questions decision-makers ask before starting a project.",
        bodyMarkdown: `Hi {{first_name}},

Before partnering with any software engineering firm, you deserve total clarity on how your project will be governed. 

Here are answers to the top 4 questions we receive from founders and CTOs:

**Q1: Who owns the source code and IP?**
**A:** You own 100% of the Intellectual Property. From Day 1, code is pushed directly to your private GitHub/GitLab repositories.

**Q2: How do you prevent budget overrun and scope creep?**
**A:** We define strict functional blueprints upfront and deploy weekly CI/CD builds. You review working software at every milestone.

**Q3: Can you integrate with our existing ERP or legacy databases?**
**A:** Yes. We specialize in building secure middleware and custom API adapters to connect legacy monoliths with modern AI cloud engines.

**Q4: What happens after production launch?**
**A:** We provide comprehensive SLAs, automated uptime monitoring, and continuous maintenance frameworks to ensure long-term stability.`,
        primaryCTA: {
            text: "Book A Technical Consultation",
            url: "https://kiaantechnology.com/contact"
        },
        secondaryCTA: {
            text: "Check Custom Pricing",
            url: "https://kiaantechnology.com/pricing"
        }
    },
    {
        sequenceNumber: 5,
        delayDays: 9,
        trigger: "9 Days After Email 1",
        stage: "Value Offer & Readiness Audit",
        subjectLine: "Is your tech stack ready for AI automation?",
        previewText: "Use our 5-point architecture checklist to evaluate your enterprise software bottlenecks.",
        bodyMarkdown: `Hi {{first_name}},

Artificial Intelligence is transforming business operations—from automated invoice parsing to predictive customer lead scoring.

However, AI models are only as good as the software architecture supporting them.

### Quick 5-Point System Audit:
1. Are your core databases siloed across multiple platforms?
2. Does generating quarterly reports require manual data entry?
3. Does setup for a new customer take more than 24 hours?
4. Do your applications slow down during unexpected traffic spikes?
5. Does scaling revenue require hiring proportional administrative staff?

If you answered "Yes" to two or more of these questions, your system architecture is ready for a modernization upgrade.`,
        primaryCTA: {
            text: "Request An Architecture Audit",
            url: "https://kiaantechnology.com/architecture-audit"
        },
        secondaryCTA: {
            text: "Explore AI Services",
            url: "https://kiaantechnology.com/services/ai-automation"
        }
    },
    {
        sequenceNumber: 6,
        delayDays: 12,
        trigger: "12 Days After Email 1",
        stage: "Final Call-To-Action & Consultation",
        subjectLine: "Ready to map out your software architecture?",
        previewText: "Let us discuss your project roadmap during a 1-on-1 session with our Chief Architect.",
        bodyMarkdown: `Hi {{first_name}},

Over the past two weeks, we have shared how Kiaan Technology builds scalable, high-performance software ecosystems.

Now, we would love to learn more about **your specific business goals**.

Whether you are starting a new custom SaaS build, refactoring a legacy ERP, or automating operational workflows, our Chief Solutions Architects are available for a dedicated 1-on-1 strategy call.

### In this 30-minute session, we will:
* Review your current system architecture and operational pain points.
* Map out a high-level microservices/cloud blueprint.
* Provide estimated development timelines and milestone estimates.

Select a time that works best for your schedule below.`,
        primaryCTA: {
            text: "Schedule Your 1-on-1 Strategy Call",
            url: "https://kiaantechnology.com/schedule"
        },
        secondaryCTA: {
            text: "Visit Kiaan Technology Homepage",
            url: "https://kiaantechnology.com"
        }
    }
];
