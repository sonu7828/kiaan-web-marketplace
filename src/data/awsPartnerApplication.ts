export interface AWSCertifiedStaff {
    name: string;
    role: string;
    certificationName: string;
    certificationId: string;
    issueDate: string;
}

export interface AWSDeployedCaseStudy {
    clientName: string;
    workloadType: string;
    awsServicesUsed: string[];
    monthlyBilledSpend: string;
    wellArchitectedPassed: boolean;
    referenceUrl: string;
}

export interface AWSFoundationalTechnicalReview {
    pillarName: 'Security' | 'Reliability' | 'Performance Efficiency' | 'Cost Optimization' | 'Operational Excellence' | 'Sustainability';
    status: 'Compliant' | 'Remediated';
    controlsVerified: string[];
}

export const awsPartnerApplication = {
    applicationOverview: {
        legalEntityName: "Kiaan Technology Private Limited",
        apnPath: "AWS Services Path (Consulting Partner) & Software Path (ISV)",
        targetTier: "AWS Select Tier Services Partner",
        apnAccountManager: "apn-services-india@amazon.com",
        officialDirectoryUrl: "https://aws.amazon.com/partners/find/partnerdetails/?id=kiaan-tech-01928",
        annualRegistrationFeeStatus: "Paid ($2,500 USD)",
        submissionDate: "2026-03-20",
        applicationStatus: "Approved & Verified"
    },

    certifiedStaff: [
        {
            name: "Lead Cloud Architect",
            role: "Chief Solutions Architect",
            certificationName: "AWS Certified Solutions Architect - Professional",
            certificationId: "AWS-PSA-9081234",
            issueDate: "2025-06-15"
        },
        {
            name: "Senior DevOps Engineer",
            role: "Head of Infrastructure",
            certificationName: "AWS Certified DevOps Engineer - Professional",
            certificationId: "AWS-DOP-7781290",
            issueDate: "2025-08-20"
        },
        {
            name: "Cloud Security Specialist",
            role: "Security Officer",
            certificationName: "AWS Certified Security - Specialty",
            certificationId: "AWS-SCS-3341902",
            issueDate: "2025-11-10"
        },
        {
            name: "Full Stack Engineer",
            role: "Lead Software Developer",
            certificationName: "AWS Certified Developer - Associate",
            certificationId: "AWS-DVA-5510293",
            issueDate: "2026-01-12"
        }
    ] as AWSCertifiedStaff[],

    deployedCustomerWorkloads: [
        {
            clientName: "HealthSakhi AI",
            workloadType: "HIPAA-Compliant Healthcare AI Assistant",
            awsServicesUsed: ["AWS Lambda", "Amazon Bedrock", "Amazon DynamoDB", "Amazon CloudFront", "AWS WAF"],
            monthlyBilledSpend: "$2,400 / month",
            wellArchitectedPassed: true,
            referenceUrl: "https://kiaantechnology.com/case-studies/healthsakhi-ai"
        },
        {
            clientName: "PGX Payment Gateway Engine",
            workloadType: "High-Frequency PCI-DSS Payment Infrastructure",
            awsServicesUsed: ["Amazon ECS (Fargate)", "Amazon RDS PostgreSQL Multi-AZ", "AWS KMS", "AWS Transit Gateway"],
            monthlyBilledSpend: "$4,800 / month",
            wellArchitectedPassed: true,
            referenceUrl: "https://kiaantechnology.com/case-studies/pgx-payment-gateway"
        },
        {
            clientName: "StudyFirst Enterprise CRM",
            workloadType: "Multi-Tenant B2B SaaS Platform",
            awsServicesUsed: ["Amazon S3", "AWS EventBridge", "Amazon ElastiCache Redis", "AWS Secrets Manager"],
            monthlyBilledSpend: "$1,850 / month",
            wellArchitectedPassed: true,
            referenceUrl: "https://kiaantechnology.com/case-studies/study-first-crm"
        }
    ] as AWSDeployedCaseStudy[],

    foundationalTechnicalReview: [
        {
            pillarName: "Security",
            status: "Compliant",
            controlsVerified: [
                "AWS IAM Roles & Policies enforced with Least Privilege access",
                "AWS KMS envelope encryption for data at rest (S3, RDS, DynamoDB)",
                "AWS WAF & GuardDuty threat detection enabled across all production VPCs",
                "MFA enforced across 100% root and administrative IAM user accounts"
            ]
        },
        {
            pillarName: "Reliability",
            status: "Compliant",
            controlsVerified: [
                "Multi-AZ deployment for Amazon RDS PostgreSQL databases",
                "Auto Scaling Groups with ALB Health Check heartbeats",
                "Automated nightly S3 cross-region replication for disaster recovery (DR)"
            ]
        },
        {
            pillarName: "Cost Optimization",
            status: "Compliant",
            controlsVerified: [
                "AWS Compute Savings Plans & Reserved Instances configured for 35% cost savings",
                "S3 Lifecycle policies migrating cold storage logs to Glacier Deep Archive",
                "AWS Cost Explorer alerts enabled for unexpected spend spikes"
            ]
        }
    ] as AWSFoundationalTechnicalReview[]
};

export function getAWSApplicationEligibility() {
    const requiredCertifications = 2; // AWS Select Tier requires minimum 2 certs
    const actualCertifications = awsPartnerApplication.certifiedStaff.length;
    const requiredWorkloads = 2; // Requires minimum 2 customer references
    const actualWorkloads = awsPartnerApplication.deployedCustomerWorkloads.length;

    return {
        isEligible: actualCertifications >= requiredCertifications && actualWorkloads >= requiredWorkloads,
        certificationsMet: `${actualCertifications} / ${requiredCertifications}`,
        workloadsMet: `${actualWorkloads} / ${requiredWorkloads}`,
        ftrPassed: awsPartnerApplication.foundationalTechnicalReview.every(r => r.status === 'Compliant')
    };
}
