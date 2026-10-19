export interface IntegrationPartner {
    id: string;
    name: string;
    logoUrl: string;
    category: 'Cloud & Infrastructure' | 'AI & Data Engines' | 'Payments & Fintech' | 'CRM & Enterprise SaaS' | 'Security & Compliance';
    partnerTier: 'Premier Technology Partner' | 'Certified Solutions Partner' | 'Ecosystem Specialist';
    description: string;
    integrationCapabilities: string[];
    partnerDirectoryUrl: string; // The official partner page linking back to Kiaan Tech
    backlinkAnchorText: string;
    verifiedBacklink: boolean;
}

export const partnerProgramData = {
    title: "Kiaan Technology Integration Partner Ecosystem",
    tagline: "Building High-Performance Enterprise Solutions with Industry Leaders",
    description: "We partner with world-class cloud infrastructure, AI platform, payment gateway, and enterprise SaaS providers to engineer seamless, high-availability digital solutions.",
    
    categories: [
        "All Partners",
        "Cloud & Infrastructure",
        "AI & Data Engines",
        "Payments & Fintech",
        "CRM & Enterprise SaaS",
        "Security & Compliance"
    ],

    partners: [
        {
            id: "partner-aws",
            name: "Amazon Web Services (AWS)",
            logoUrl: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=300",
            category: "Cloud & Infrastructure",
            partnerTier: "Premier Technology Partner",
            description: "Official AWS Select Tier Consulting Partner delivering cloud-native microservices, Lambda serverless event buses, and multi-region S3/EC2 architectures.",
            integrationCapabilities: [
                "AWS EventBridge & Lambda Async Queues",
                "DynamoDB & RDS PostgreSQL Multi-AZ Deployment",
                "CloudFront Edge Acceleration & Web Application Firewall (WAF)"
            ],
            partnerDirectoryUrl: "https://aws.amazon.com/partners/find/partnerdetails/?id=kiaan-tech-01928",
            backlinkAnchorText: "Kiaan Technology AWS Cloud Consulting Partner",
            verifiedBacklink: true
        },
        {
            id: "partner-stripe",
            name: "Stripe Connect & Billing",
            logoUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=300",
            category: "Payments & Fintech",
            partnerTier: "Certified Solutions Partner",
            description: "Certified Stripe Integration Partner architecting high-volume global payment gateways, multi-tenant billing engines, and automated subscription management.",
            integrationCapabilities: [
                "Stripe Connect Multi-Party Escrow & Payouts",
                "Webhook Event Bus Infrastructure",
                "PCI-DSS Compliant Tokenization & Fraud Defense"
            ],
            partnerDirectoryUrl: "https://stripe.com/partners/directory/kiaan-technology",
            backlinkAnchorText: "Kiaan Technology Certified Stripe Partner",
            verifiedBacklink: true
        },
        {
            id: "partner-openai",
            name: "OpenAI Enterprise Alliance",
            logoUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=300",
            category: "AI & Data Engines",
            partnerTier: "Premier Technology Partner",
            description: "Building custom fine-tuned GPT-4o enterprise agents, semantic vector databases (Pinecone/Qdrant), and zero-data-retention document processing pipelines.",
            integrationCapabilities: [
                "Autonomous Document Parsing (OCR + LLM)",
                "Custom Embeddings & RAG Knowledge Bases",
                "Predictive Sentiment & Intent Routing Engines"
            ],
            partnerDirectoryUrl: "https://openai.com/ecosystem/partners/kiaan-tech",
            backlinkAnchorText: "Kiaan Tech OpenAI Enterprise Partner",
            verifiedBacklink: true
        },
        {
            id: "partner-salesforce",
            name: "Salesforce ISV Ecosystem",
            logoUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=300",
            category: "CRM & Enterprise SaaS",
            partnerTier: "Certified Solutions Partner",
            description: "Integrating custom bi-directional Salesforce REST/SOAP data synchronizers, AppExchange custom lightning components, and automated sales pipeline scoring.",
            integrationCapabilities: [
                "Salesforce AppExchange Managed Packages",
                "Bi-Directional ERP to CRM Real-Time Sync",
                "Custom Apex Controllers & LWC Development"
            ],
            partnerDirectoryUrl: "https://appexchange.salesforce.com/consulting/kiaan-technology",
            backlinkAnchorText: "Kiaan Technology Salesforce Consulting Partner",
            verifiedBacklink: true
        },
        {
            id: "partner-confluent",
            name: "Confluent Kafka Ecosystem",
            logoUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300",
            category: "Cloud & Infrastructure",
            partnerTier: "Ecosystem Specialist",
            description: "Engineering real-time event streaming architectures and high-frequency pub-sub message queues for fintech, logistics, and IoT telemetry.",
            integrationCapabilities: [
                "Real-Time Stream Processing & Analytics",
                "Zero-Loss Transactional Event Buffers",
                "Microservice Event Sourcing & CQRS Systems"
            ],
            partnerDirectoryUrl: "https://www.confluent.io/partners/kiaan-technology",
            backlinkAnchorText: "Kiaan Technology Confluent Kafka Partner",
            verifiedBacklink: true
        },
        {
            id: "partner-cloudflare",
            name: "Cloudflare Enterprise Security",
            logoUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=300",
            category: "Security & Compliance",
            partnerTier: "Certified Solutions Partner",
            description: "Deploying DDoS mitigation, zero-trust network access (ZTNA), rate limiting, and global edge computing via Cloudflare Workers.",
            integrationCapabilities: [
                "Cloudflare Workers & KV Edge Caching",
                "Zero-Trust Access Control & SSO Integration",
                "Bot Management & Automated WAF Rules"
            ],
            partnerDirectoryUrl: "https://www.cloudflare.com/partners/directory/kiaan-tech",
            backlinkAnchorText: "Kiaan Technology Cloudflare Partner",
            verifiedBacklink: true
        }
    ] as IntegrationPartner[]
};
