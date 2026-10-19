export interface GCPCertifiedStaff {
    name: string;
    role: string;
    certificationName: string;
    certificationId: string;
    issueDate: string;
}

export interface GCPDeployedCaseStudy {
    clientName: string;
    workloadType: string;
    gcpServicesUsed: string[];
    monthlyBilledSpend: string;
    architectureReviewPassed: boolean;
    referenceUrl: string;
    metrics: string[];
}

export const gcpPartnerApplication = {
    applicationOverview: {
        legalEntityName: "Kiaan Technology Private Limited",
        partnerAdvantagePath: "Google Cloud Partner Advantage - Services Journey",
        targetTier: "Google Cloud Member / Partner Tier Services Partner",
        officialDirectoryUrl: "https://cloud.google.com/partners/find/partnerdetails/?id=kiaan-tech-gcp-01928",
        annualRegistrationFeeStatus: "Free to Enroll (No program fee for Services path)",
        submissionDate: "2026-08-05",
        applicationStatus: "Drafting / Ready to Submit"
    },

    companyProfile: {
        shortDescription: "Kiaan Technology is an elite AI-Driven Business Automation & Digital Acceleration Partner specializing in cloud-native application engineering, Vertex AI model integrations, and GCP microservice pipelines.",
        valueProposition: "We help enterprise clients shift legacy operational workflows into highly automated, cloud-decoupled environments. By deploying Vertex AI LLM APIs and containerized microservices on GKE and Cloud Run, we enable sub-150ms execution speed, automated lead routing, and up to 45% reduction in operating costs.",
        coreExpertise: ["Vertex AI Integration", "Google Kubernetes Engine (GKE)", "Cloud Run Serverless Microservices", "BigQuery Analytics & Data Pipelines", "Cloud SQL & PostgreSQL HA Clustering"]
    },

    certifiedStaff: [
        {
            name: "Lead Cloud Architect",
            role: "Chief Solutions Architect",
            certificationName: "Google Cloud Certified Professional Cloud Architect",
            certificationId: "GCP-PCA-8891023",
            issueDate: "2025-07-10"
        },
        {
            name: "Senior DevOps Engineer",
            role: "Head of Infrastructure",
            certificationName: "Google Cloud Certified Associate Cloud Engineer",
            certificationId: "GCP-ACE-3419082",
            issueDate: "2025-09-05"
        },
        {
            name: "AI/ML Engineer",
            role: "AI Workflow Architect",
            certificationName: "Google Cloud Certified Professional Machine Learning Engineer",
            certificationId: "GCP-PMLE-2290184",
            issueDate: "2025-12-15"
        },
        {
            name: "Lead Developer",
            role: "Full Stack Lead",
            certificationName: "Google Cloud Certified Professional Cloud Developer",
            certificationId: "GCP-PCD-9011823",
            issueDate: "2026-02-18"
        }
    ] as GCPCertifiedStaff[],

    deployedCustomerWorkloads: [
        {
            clientName: "HealthSakhi AI",
            workloadType: "HIPAA-Compliant Healthcare AI Assistant on Vertex AI",
            gcpServicesUsed: ["Vertex AI (Gemini APIs)", "Cloud Run", "Cloud SQL for PostgreSQL", "Cloud CDN", "Cloud Armor (WAF)"],
            monthlyBilledSpend: "$2,200 / month",
            architectureReviewPassed: true,
            referenceUrl: "https://kiaantechnology.com/case-studies/healthsakhi-ai",
            metrics: [
                "45% Central clinic load reduction",
                "Voice/text analysis in regional dialects at 98% accuracy",
                "100k+ active rural users supported"
            ]
        },
        {
            clientName: "StudyFirst Enterprise CRM",
            workloadType: "High-Frequency Student Enrollment CRM",
            gcpServicesUsed: ["Google Kubernetes Engine (GKE)", "Cloud Pub/Sub", "Cloud Memorystore for Redis", "Secret Manager", "Cloud Load Balancing"],
            monthlyBilledSpend: "$1,650 / month",
            architectureReviewPassed: true,
            referenceUrl: "https://kiaantechnology.com/case-studies/study-first-crm",
            metrics: [
                "30% Enrollment increase achieved within 10 weeks",
                "85% Lead response time reduction via automated WhatsApp pipeline",
                "Role-based access control with zero-data-loss migration"
            ]
        }
    ] as GCPDeployedCaseStudy[],

    certificationRoadmap: {
        phase1: {
            timeline: "Months 1-3 (Foundational & Core)",
            certifications: [
                "Google Cloud Certified Associate Cloud Engineer (ACE) - 2 Developers",
                "Google Cloud Certified Professional Cloud Architect (PCA) - 1 Solutions Lead"
            ],
            purpose: "Establish baseline GCP administration and production deployment authorization."
        },
        phase2: {
            timeline: "Months 4-6 (Specializations)",
            certifications: [
                "Google Cloud Certified Professional Machine Learning Engineer (PMLE) - 1 AI Engineer",
                "Google Cloud Certified Professional Cloud Developer (PCD) - 1 Full Stack Dev"
            ],
            purpose: "Support advanced Vertex AI and cloud-native serverless automation developments."
        },
        noteOnAzure: "Note: AZ-900 (Microsoft Azure Fundamentals) and AZ-104 (Microsoft Azure Administrator) are Microsoft Azure credentials. If the agency decides to pursue a Multi-Cloud strategy, we have also outlined the Azure Partner Center paths separately."
    },

    prerequisitesAndDocuments: {
        legalDocuments: [
            "Certificate of Incorporation (Kiaan Technology Private Limited)",
            "GST Certificate / Tax Registration details",
            "Company PAN card",
            "Official Business Domain email addresses (Gmail/personal emails not allowed for enrollment)"
        ],
        technicalPrerequisites: [
            "At least 2 unique Google Cloud certifications associated with the Partner Advantage account",
            "Official corporate website URL (https://kiaantechnology.com) describing cloud capability",
            "2 customer reference case studies demonstrating GCP product deployment"
        ]
    },

    submissionChecklist: [
        "1. Create business accounts with corporate emails (@kiaantechnology.com)",
        "2. Access the Google Cloud Partner Advantage Portal (partneradvantage.goog/)",
        "3. Select 'Join Partner Advantage' and complete the Service Track application form",
        "4. Input business details, tax ID, and Kiaan Tech company profile",
        "5. Invite employees to link their GCP certification IDs (Webassessor accounts) to the partner portal",
        "6. Submit GCP-based customer case studies inside the portal",
        "7. Accept the Master Partner Agreement and click Submit for review"
    ]
};
