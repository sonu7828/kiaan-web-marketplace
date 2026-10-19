import { ProductData } from './businessCompanyData';

export const legalComplianceData: Record<string, ProductData> = {
    'audit-compliance': {
        id: 'audit-compliance',
        name: 'Audit & Compliance',
        title: 'Audit & Compliance',
        tagline: 'Immutable Regulatory Governance & Strategic Risk Orchestration',
        description: 'Stay ahead of the auditors. Kiaan Audit & Compliance provides a structured framework for managing policy, monitoring risks, and generating proof of compliance effortlessly.',
        mainKeyword: 'GOVERNANCE INTEGRITY',
        keywords: [
            'Audit & Compliance Software',
            'Regulatory Compliance System',
            'SaaS Audit Management Tool',
            'Digital Compliance Platform',
            'Audit Tracking Software',
            'Compliance ERP Solution',
            'Risk Management Software',
            'Policy Management System',
            'SaaS Compliance ERP',
            'Corporate Governance Tool'
        ],
        features: [
            {
                title: 'Strategic Risk Register',
                desc: 'Identify, assess, and monitor business risks with automated threshold alerts and mitigation tracking.',
                iconName: 'ShieldAlert',
                items: ['Risk Scoring Logic', 'Impact Analysis', 'Mitigation Workflows', 'Dynamic Heatmaps']
            },
            {
                title: 'Automated Policy Vault',
                desc: 'Store and manage all internal policies with automated review cycles and digital employee sign-offs.',
                iconName: 'Lock',
                items: ['Policy Drafting Hub', 'Version Tracking', 'Mandatory Read-Logs', 'Compliance Mapping']
            },
            {
                title: 'Regulatory Mapping Engine',
                desc: 'Map your internal controls directly to global standards like ISO 27001, SOC2, or HIPAA.',
                iconName: 'Globe',
                items: ['Standard Frameworks', 'Gap Analysis Tools', 'Evidence Collection', 'Audit Export']
            }
        ],
        benefits: [
            { title: 'Zero Audit Friction', impact: 'Reduce audit preparation time by 80% with central, organized evidence storage.' },
            { title: 'Lower Risk Profile', impact: 'Catch policy violations or control failures in real-time before they escalate.' },
            { title: 'Corporate Trust', impact: 'Demonstrate elite governance standards to partners and shareholders with transparent reporting.' }
        ],
        useCases: [
            { scenario: 'Fintech Platforms', solution: 'Maintain strict financial regulatory compliance and anti-money laundering controls.' },
            { scenario: 'Healthcare Providers', solution: 'Ensure all data handling and clinical procedures meet high-trust HIPAA standards.' },
            { scenario: 'Global Tech Firms', solution: 'Coordinate security and privacy compliance across multiple international jurisdictions.' }
        ],
        integrations: ['Vanta', 'Drata', 'OneTrust', 'ServiceNow', 'SharePoint']
    },
    'digital-signature': {
        id: 'digital-signature',
        name: 'Digital Signature',
        title: 'Digital Signature',
        tagline: 'High-Trust Legal Authentication & Seamless Contract Orchestration',
        description: 'Eliminate paper. Kiaan Digital Signature provides industrial-grade, legally binding authentication that accelerates deal-making globally.',
        mainKeyword: 'AUTHENTICATION TRUST',
        keywords: [
            'Digital Signature Software',
            'E-Signature Platform',
            'Online Document Signing Tool',
            'SaaS E-Sign Solution',
            'Digital Contract Signing',
            'Secure Signature System',
            'Electronic Signature CRM',
            'E-Signing for Business',
            'SaaS Signature Tool',
            'Contract Authentication Software'
        ],
        features: [
            {
                title: 'Global Legal Compliance',
                desc: 'Fully compliant with eIDAS, ESIGN, and UETA laws for total legal standing across 180+ countries.',
                iconName: 'ShieldCheck',
                items: ['Court-Admissible Logs', 'Blockchain Notarization', 'Device ID Tracking', 'Timestamp Integrity']
            },
            {
                title: 'Multi-Party Workflows',
                desc: 'Coordinate complex signing sequences across dozens of stakeholders with automated reminders.',
                iconName: 'Shuffle',
                items: ['Sequential Signing', 'Parallel Signing', 'Witness Verification', 'Approver Loops']
            },
            {
                title: 'Embedded Signing API',
                desc: 'Integrate signing capabilities directly into your own website or mobile app for a seamless UX.',
                iconName: 'Code',
                items: ['White-Labeling', 'Webhook Callbacks', 'RESTful API', 'Secure Iframe']
            }
        ],
        benefits: [
            { title: 'Faster Deal Cycles', impact: 'Get contracts signed in minutes rather than days, boosting revenue velocity.' },
            { title: 'Lower Overhead', impact: 'Eliminate the cost of printing, shipping, and physical document storage.' },
            { title: 'Eco-Friendly Growth', impact: 'Save thousands of trees and reduce your carbon footprint with 100% digital flow.' }
        ],
        useCases: [
            { scenario: 'HR Departments', solution: 'Onboard and sign employment contracts with global teams instantly.' },
            { scenario: 'Real Estate Agencies', solution: 'Close rental and sales agreements on-site via tablet or mobile phone.' },
            { scenario: 'Procurement Teams', solution: 'Standardize and secure vendor agreements and purchase orders globally.' }
        ],
        integrations: ['DocuSign', 'Adobe Sign', 'Dropbox Sign', 'Google Drive', 'Slack']
    },
    'role-based-access': {
        id: 'role-based-access',
        name: 'Role-Based Access',
        title: 'Role-Based Access',
        tagline: 'Precision Security Governance & Granular Identity Orchestration',
        description: 'Control who sees what. Kiaan RBAC provides a robust, enterprise-grade framework for managing permissions and protecting sensitive data.',
        mainKeyword: 'ACCESS GOVERNANCE',
        keywords: [
            'Role Based Access Control',
            'RBAC Management System',
            'User Permission Software',
            'SaaS Access Control Platform',
            'Identity Management Tool',
            'Secure User Access System',
            'RBAC Security Software',
            'Access Governance Tool',
            'SaaS Identity ERP',
            'Permission Management Platform'
        ],
        features: [
            {
                title: 'Granular Permission Matrix',
                desc: 'Control access down to the individual field or button level based on user role and group.',
                iconName: 'LayoutGrid',
                items: ['Role Mapping', 'Attribute-Based Control', 'Inheritance Logic', 'Conditional Access']
            },
            {
                title: 'Unified SSO Gateway',
                desc: 'Connect your entire app ecosystem to a single source of truth for user identity and login.',
                iconName: 'Key',
                items: ['SAML 2.0 / OIDC', 'Active Directory Sync', 'Multi-Factor Auth (MFA)', 'Just-in-Time Provisioning']
            },
            {
                title: 'Immutable Access Logs',
                desc: 'Track every login, permission change, and data access for a perfect, audit-ready security tail.',
                iconName: 'FileText',
                items: ['User Activity Feeds', 'Admin Change Logs', 'IP Geolocation', 'Suspicious Activity Alerts']
            }
        ],
        benefits: [
            { title: 'Zero Data Leaks', impact: 'Ensure sensitive information never falls into the wrong hands through strict permissioning.' },
            { title: 'Reduced IT Burden', impact: 'Empower department heads to manage their own team permissions within guardrails.' },
            { title: 'Instant Compliance', impact: 'Meet strict SOC2 and ISO control requirements for user identification and access.' }
        ],
        useCases: [
            { scenario: 'Enterprise SaaS Apps', solution: 'Manage thousands of users across different tiers, departments, and geographies.' },
            { scenario: 'Gov-Tech Solutions', solution: 'Enforce strict need-to-know security protocols for sensitive national data.' },
            { scenario: 'Financial Systems', solution: 'Coordinate tiered approvals for transactions and high-value data changes.' }
        ],
        integrations: ['Okta', 'Auth0', 'Azure AD', 'OneLogin', 'AWS IAM']
    },
    'kyc-verification': {
        id: 'kyc-verification',
        name: 'KYC Verification',
        title: 'KYC Verification',
        tagline: 'High-Trust Identity Intelligence & Global Anti-Fraud Orchestration',
        description: 'Verify your users with confidence. Kiaan KYC provides automated, high-speed identity verification that blocks fraud while ensuring a smooth onboarding flow.',
        mainKeyword: 'IDENTITY INTEGRITY',
        keywords: [
            'KYC Verification Software',
            'Identity Verification System',
            'SaaS KYC Platform',
            'Digital KYC Tool',
            'Online ID Verification',
            'KYC Compliance Software',
            'Customer Identity Verification',
            'Automated KYC System',
            'SaaS Identity Check',
            'KYC CRM Integration'
        ],
        features: [
            {
                title: 'Global Document OCR',
                desc: 'Extract data and verify authenticity for passports, ID cards, and licenses from 200+ countries.',
                iconName: 'Scan',
                items: ['Template Matching', 'Hologram Check', 'Expiry Validation', 'MRZ Zone Reading']
            },
            {
                title: 'AI Biometric Liveness',
                desc: 'Ensure the person is real and present with 3D facial mapping and anti-spoofing technology.',
                iconName: 'Smile',
                items: ['Face Matching', 'Motion Detection', 'Anti-Deepfake Guard', 'Photo-to-ID Check']
            },
            {
                title: 'AML & Sanctions Screen',
                desc: 'Automatically check every user against global watchlists, PEP lists, and sanctions databases.',
                iconName: 'ShieldAlert',
                items: ['Daily List Sync', 'Fuzzy Name Matching', 'Adverse Media Check', 'Instant Flags']
            }
        ],
        benefits: [
            { title: 'Block Fraud Early', impact: 'Identify 99% of synthetic identities and forged documents before they enter your system.' },
            { title: 'Accelerated Onboarding', impact: 'Verify new users in less than 30 seconds, reducing abandonment rates by 40%.' },
            { title: 'Regulatory Peace', impact: 'Maintain perfect records for AML/CTF audits with automated risk scoring and reports.' }
        ],
        useCases: [
            { scenario: 'Crypto Exchanges', solution: 'Verify global users at scale while meeting strict financial transparency laws.' },
            { scenario: 'Banking & Neo-Banks', solution: 'Provide a seamless, mobile-first account opening experience with instant ID check.' },
            { scenario: 'Shared Economy Apps', solution: 'Verify drivers and hosts to build safety and trust within your marketplace.' }
        ],
        integrations: ['Onfido', 'Jumio', 'Trulioo', 'Sumsub', 'Veriff']
    },
    'data-security': {
        id: 'data-security',
        name: 'Data Security',
        title: 'Data Security',
        tagline: 'Industrial-Grade Encryption & Proactive Threat Defensive Orchestration',
        description: 'Protect your most valuable asset. Kiaan Data Security provides a multi-layered shield for your enterprise data, from the database to the browser.',
        mainKeyword: 'DATA DEFENSE',
        keywords: [
            'Data Security Software',
            'Cybersecurity Platform',
            'Encryption Management Tool',
            'SaaS Data Protection',
            'Cloud Security System',
            'Secure Data Storage Platform',
            'Information Security ERP',
            'Enterprise Security Software',
            'Data Breach Protection',
            'SaaS Security Solution'
        ],
        features: [
            {
                title: 'Universal Encryption Core',
                desc: 'Protect data at rest, in transit, and in use with industrial-grade AES-256 and TLS protocols.',
                iconName: 'Lock',
                items: ['Field-Level Encrypt', 'Key Management (KMS)', 'Zero-Knowledge Logs', 'Secure Enclaves']
            },
            {
                title: 'AI Threat Intelligence',
                desc: 'Monitor for suspicious patterns and potential breaches with real-time behavioral analysis.',
                iconName: 'Activity',
                items: ['Anomaly Detection', 'Brute-Force Guard', 'IP Reputation Sync', 'Admin Alert Triggers']
            },
            {
                title: 'Immutable Cloud Backups',
                desc: 'Ensure data recovery against ransomware with encrypted, cross-region, and versioned backups.',
                iconName: 'CloudDone',
                items: ['Point-in-Time Recover', 'Geographic Redundancy', 'Air-Gapped Vaults', 'Automated DR Tests']
            }
        ],
        benefits: [
            { title: 'Total Privacy', impact: 'Ensure only authorized users and services can decrypt and view sensitive customer data.' },
            { title: 'Resilience Guarantee', impact: 'Recover from any technical failure or cyber-attack with zero data loss.' },
            { title: 'Compliance Excellence', impact: 'Deeply satisfy the "Security" pillars of SOC2, ISO, and HIPAA with one platform.' }
        ],
        useCases: [
            { scenario: 'Legal & IP Firms', solution: 'Protect high-value trade secrets and client case data with absolute encryption.' },
            { scenario: 'Enterprise SaaS Providers', solution: 'Build trust with Fortune 500 clients by demonstrating elite security protocols.' },
            { scenario: 'Public Sector Portals', solution: 'Secure citizen identity and health data against state-level cyber threats.' }
        ],
        integrations: ['AWS KMS', 'HashiCorp Vault', 'Cloudflare', 'Splunk', 'CrowdStrike']
    }
};
