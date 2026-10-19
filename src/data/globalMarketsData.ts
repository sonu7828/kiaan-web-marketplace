export interface GlobalMarketData {
    id: string; // The URL slug (e.g., 'usa', 'uk', 'mena')
    regionName: string;
    heroHeadline: string;
    heroSubline: string;
    socialProof: string;
    complianceHighlight: {
        title: string;
        description: string;
        standards: string[];
    };
    caseStudyRef: {
        title: string;
        metric: string;
        description: string;
    };
}

export const globalMarkets: GlobalMarketData[] = [
    {
        id: 'usa',
        regionName: 'North America',
        heroHeadline: 'Silicon Valley Velocity. Global Agility.',
        heroSubline: 'We architect elite AI-driven automation ecosystems for mid-market US enterprises. Build 3x faster with zero technical debt using our proprietary microservice infrastructure.',
        socialProof: 'Trusted by innovative logistics and fintech leaders across the United States to slash operational overhead.',
        complianceHighlight: {
            title: 'US Enterprise Grade Security',
            description: 'Our software architectures are engineered from day one to meet strict United States data protection regulations.',
            standards: ['SOC 2 Type II Ready', 'HIPAA Compliant Architecture', 'CCPA Data Privacy']
        },
        caseStudyRef: {
            title: 'US Supply Chain Automation',
            metric: '$2.4M Saved Annually',
            description: 'We decoupled a monolithic inventory system for a US logistics firm, deploying a predictive AI routing engine that eliminated massive manual data entry.'
        }
    },
    {
        id: 'uk',
        regionName: 'United Kingdom & Europe',
        heroHeadline: 'Secure AI Acceleration for UK Enterprises.',
        heroSubline: 'We build fault-tolerant, highly compliant software systems for the UK financial and healthcare sectors. Precision engineering meets stringent data privacy.',
        socialProof: 'Powering automated compliance and core infrastructure for highly regulated UK businesses.',
        complianceHighlight: {
            title: 'European Data Sovereignty',
            description: 'We deploy localized, secure cloud architectures ensuring your customer data never violates EU/UK privacy laws.',
            standards: ['GDPR Compliant By Default', 'FCA Tech Alignment', 'ISO 27001 Security Frameworks']
        },
        caseStudyRef: {
            title: 'London Fintech Infrastructure',
            metric: '40% Efficiency Boost',
            description: 'Re-architected the core banking ledger for a UK fintech, implementing serverless microservices that guarantee 99.999% uptime during peak trading hours.'
        }
    },
    {
        id: 'mena',
        regionName: 'Middle East & North Africa',
        heroHeadline: 'Massive Scale Digital Transformation.',
        heroSubline: 'Pioneering the autonomous enterprise across the Middle East. We deploy cutting-edge AI ecosystems built for government-level security and unprecedented business scale.',
        socialProof: 'Architecting the digital foundation for the fastest-growing enterprises in Dubai, Riyadh, and beyond.',
        complianceHighlight: {
            title: 'Sovereign Scale & Security',
            description: 'Our systems are built for massive horizontal scaling while adhering to localization and government data mandates.',
            standards: ['On-Premise Deployment Capable', 'National Data Regulation Compliant', 'Zero-Trust Architecture']
        },
        caseStudyRef: {
            title: 'MENA AI Retail Operation',
            metric: '10x Capacity Scaling',
            description: 'Built a predictive retail management engine for a multi-national conglomerate, utilizing LLM-driven demand forecasting to automate regional procurement.'
        }
    }
];
