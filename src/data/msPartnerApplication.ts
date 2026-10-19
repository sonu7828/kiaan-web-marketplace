export interface MSCertifiedStaff {
    name: string;
    role: string;
    certificationName: string;
    certificationId: string;
    issueDate: string;
}

export interface MSPartnerCapabilityMetric {
    category: 'Performance' | 'Skilling' | 'Customer Success';
    targetPoints: number;
    description: string;
}

export const msPartnerApplication = {
    applicationOverview: {
        legalEntityName: "Kiaan Technology Private Limited",
        microsoftProgramPath: "Microsoft Cloud Partner Program (MCPP)",
        targetStatus: "Solutions Partner (Modern Work + Data & AI Azure)",
        partnerCenterId: "MPN-8819203",
        annualRegistrationFeeStatus: "Silver/Gold Legacy equivalent / Solutions Partner fee (~$3,000 USD/yr)",
        submissionDate: "2026-08-10",
        applicationStatus: "Drafting / Ready to Verify"
    },

    businessProfile: {
        companyIntro: "Kiaan Technology is an elite digital engineering agency specializing in custom Microsoft Cloud integrations, enterprise-grade business automation, and cognitive AI application suites. As a forward-looking technology partner, we empower mid-market and enterprise organizations to transform legacy workloads into highly collaborative, intelligent business environments.",
        microsoftAlignment: "Our specialized consulting capabilities are aligned with the Microsoft Azure Cloud ecosystem, specifically focusing on Vertex-to-Azure AI API orchestration, Microsoft 365 Copilot extensibility, and automated Power Platform pipelines. By leveraging secure Azure app services, SQL managed instances, and serverless Azure Functions, we build secure, scalable solutions that decoupling business-critical logic. We actively help businesses maximize their modern work and data infrastructure investment through integrated hybrid environments, ensuring zero data loss and automated lifecycle controls.",
        wordCount: 148
    },

    certifiedStaffRoadmap: {
        phase1: {
            timeline: "Month 1 (Foundational Skilling)",
            certifications: [
                "AZ-900: Microsoft Azure Fundamentals - 3 Developers",
                "MS-900: Microsoft 365 Fundamentals - 2 Consultants",
                "PL-900: Microsoft Power Platform Fundamentals - 2 Developers"
            ],
            objective: "Build multi-service fundamentals and establish baseline skilling points in Partner Center."
        },
        phase2: {
            timeline: "Month 2 (Modern Work & Power Platform)",
            certifications: [
                "PL-100: Microsoft Power Platform App Maker - 2 Developers",
                "MS-102: Microsoft 365 Administrator - 1 IT Admin Lead",
                "PL-300: Microsoft Power BI Data Analyst - 1 BI Engineer"
            ],
            objective: "Complete required skills benchmarks for the Modern Work Solutions track."
        },
        phase3: {
            timeline: "Month 3 (Azure Data & AI Specialization)",
            certifications: [
                "AZ-104: Microsoft Azure Administrator - 2 Infrastructure Engineers",
                "DP-100: Designing and Implementing a Data Science Solution on Azure - 1 AI Developer",
                "AI-102: Designing and Implementing a Microsoft Azure AI Solution - 1 AI Architect",
                "AZ-305: Designing Microsoft Azure Infrastructure Solutions - 1 Solutions Architect"
            ],
            objective: "Earn intermediate/advanced certifications for the Azure Data & AI solutions designation."
        }
    },

    partnerCapabilityScoreRequirements: {
        minimumScoreRequired: 70, // Must score at least 70 out of 100 points overall, with >0 points in each category
        metrics: [
            {
                category: "Performance",
                targetPoints: 20,
                description: "Net Customer Addits: Adding new Azure subscriptions and Microsoft 365 tenants (requires 3+ net new clients per year)."
            },
            {
                category: "Skilling",
                targetPoints: 30,
                description: "Intermediate & Advanced certifications linked via individual employee Microsoft Learn IDs."
            },
            {
                category: "Customer Success",
                targetPoints: 50,
                description: "Deployments and usage growth (consumption/usage milestones in Azure services and Teams/SharePoint copilot active users)."
            }
        ] as MSPartnerCapabilityMetric[]
    },

    prerequisitesAndDocuments: [
        "Corporate Domain Account (@kiaantechnology.com) associated with Microsoft Entra ID",
        "Certificate of Incorporation (Kiaan Technology Private Limited)",
        "D-U-N-S Number (Dun & Bradstreet business profile verification)",
        "GSTIN / Tax identification documentation for legal entity vetting",
        "Credit Card / Purchase Order for registration fee payment validation"
    ],

    enrollmentChecklist: [
        "1. Register a Microsoft Partner Center Account under partner.microsoft.com",
        "2. Provide company business details and DUNS code for legal entity verification",
        "3. Complete the Entra ID tenant registration associated with kiaantechnology.com",
        "4. Have team members link their Microsoft Learn / Partner University profiles using their personal cert IDs",
        "5. Register active customer deployments under Partner Association (PAL) or Digital Partner of Record (DPOR)",
        "6. Check Partner Capability Score (PCS) target progress toward the 70-point threshold",
        "7. Complete payment of Solutions Partner subscription and sign the Microsoft Partner Agreement (MPA)"
    ],

    postSetupActionItems: [
        "Claim Azure credit benefits ($6,000 USD/year internal dev credits)",
        "Access software licenses (Visual Studio Enterprise, Office 365 E5 sandbox seats)",
        "List company capability in Microsoft AppSource/Partner directory finder",
        "Setup internal training schedule for Advanced Specializations pathways"
    ]
};
