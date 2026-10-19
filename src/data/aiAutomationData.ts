import { ProductData } from './businessCompanyData';

export const aiAutomationData: Record<string, ProductData> = {
    'ai-document-ocr': {
        id: 'ai-document-ocr',
        name: 'AI Document OCR',
        title: 'AI Document OCR',
        tagline: 'Cognitive Data Extraction & High-Precision Paperless Intelligence',
        description: 'Digitize your data with unprecedented accuracy. Kiaan AI OCR doesn’t just read text—it understands context, structure, and intent from complex layouts.',
        mainKeyword: 'COGNITIVE OCR',
        keywords: [
            'AI Document OCR Software',
            'Automated Data Extraction',
            'AI OCR System',
            'SaaS Document OCR',
            'Intelligent Document Processing',
            'OCR for Business Automation',
            'Digital Document Extraction',
            'AI OCR Solution',
            'Cloud OCR Software',
            'Automated OCR Tool'
        ],
        features: [
            {
                title: 'Neural Layout Analysis',
                desc: 'Intelligently identify tables, headers, and key-value pairs in unstructured documents like invoices or contracts.',
                iconName: 'Layout',
                items: ['Table Extraction', 'Key-Value Pairing', 'Handwriting Recognition', 'Signature Detection']
            },
            {
                title: 'Contextual Validation',
                desc: 'The AI cross-checks extracted data against your existing records to flag anomalies or errors.',
                iconName: 'ShieldCheck',
                items: ['Master Data Matching', 'Mathematical Verification', 'Format Correction', 'Anomaly Detection']
            },
            {
                title: 'High-Speed Batch Pipeline',
                desc: 'Process thousands of pages per hour with industrial-grade scalability and low latency.',
                iconName: 'Zap',
                items: ['Parallel Processing', 'Asynchronous Workflows', 'PDF/Image/TIFF Support', 'Priority Queues']
            }
        ],
        benefits: [
            { title: '99% Data Accuracy', impact: 'Reduce manual data entry errors to near zero with self-correcting AI models.' },
            { title: '80% Cost Savings', impact: 'Automate high-volume data entry tasks, freeing up staff for high-value work.' },
            { title: 'Instant Searchability', impact: 'Turn piles of paper into a fully indexed, searchable digital knowledge vault.' }
        ],
        useCases: [
            { scenario: 'Accounts Payable', solution: 'Automate invoice ingestion and data entry for global finance teams.' },
            { scenario: 'Legal Document Audit', solution: 'Extract key clauses and dates from thousands of historical contracts rapidly.' },
            { scenario: 'Health Record Intake', solution: 'Digitize patient history forms and lab results into clinical systems accurately.' }
        ],
        integrations: ['AWS Textract', 'Google Document AI', 'Azure Form Recognizer', 'Salesforce', 'SAP']
    },
    'ai-resume-screening': {
        id: 'ai-resume-screening',
        name: 'AI Resume Screening',
        title: 'AI Resume Screening',
        tagline: 'Precision Talent Intelligence & Bias-Free Recruitment Orchestration',
        description: 'Find your next top performer in seconds. Kiaan AI Resume Screening analyzes skills, experience, and potential to identify the perfect cultural and technical fit.',
        mainKeyword: 'TALENT INTELLIGENCE',
        keywords: [
            'AI Resume Screening Software',
            'Automated Candidate Screening',
            'AI Recruitment Tool',
            'SaaS Resume Screening',
            'Talent Assessment AI',
            'AI Hiring Solution',
            'Candidate Ranking Software',
            'SaaS Recruitment ERP',
            'Smart Resume Analysis',
            'AI Talent Acquisition'
        ],
        features: [
            {
                title: 'Semantic Skill Mapping',
                desc: 'Understand the depth and nuance of a candidate’s experience, moving beyond simple keyword matching.',
                iconName: 'Brain',
                items: ['Related Skill Logic', 'Experience Weighting', 'Industry Context', 'Project Analysis']
            },
            {
                title: 'Bias-Free Ranking Core',
                desc: 'Anonymize personal data to ensure candidates are ranked purely on their technical and meritocratic value.',
                iconName: 'UserCheck',
                items: ['Full Anonymization', 'Diversity Tracking', 'Objective Scoring', 'Fairness Audits']
            },
            {
                title: 'Integrated ATS Workflow',
                desc: 'Seamlessly transition top candidates into your interview pipeline with one-click automated requests.',
                iconName: 'Shuffle',
                items: ['Pipeline Sync', 'Automated Ghosting Prev.', 'Interview Scheduling', 'Feedback Consolidation']
            }
        ],
        benefits: [
            { title: 'Reduce Screening Time', impact: 'Cut hours of manual review down to seconds with instant candidate ranking.' },
            { title: 'Higher Quality Hires', impact: 'Use objective AI data to identify promising talent that might be missed by manual review.' },
            { title: 'Better Candidate Experience', impact: 'Provide instant status updates to every applicant, preserving your brand reputation.' }
        ],
        useCases: [
            { scenario: 'High-Volume Hiring', solution: 'Manage thousands of applications for graduate programs or retail expansions.' },
            { scenario: 'Executive Search', solution: 'Perform deep semantic searches across historical candidate databases for niche roles.' },
            { scenario: 'Technical Recruitment', solution: 'Match complex coding and architectural skillsets against specific project needs.' }
        ],
        integrations: ['Workday ATS', 'Lever', 'Greenhouse', 'LinkedIn Recruiter', 'Slack']
    },
    'ai-sales-assistant': {
        id: 'ai-sales-assistant',
        name: 'AI Sales Assistant',
        title: 'AI Sales Assistant',
        tagline: 'High-Velocity Lead Engagement & Dynamic Revenue Orchestration',
        description: 'Your 24/7 sales powerhouse. Our AI assistant engages, qualifies, and schedules meetings with high-intent leads before they go cold.',
        mainKeyword: 'SALES AUTOMATION',
        keywords: [
            'AI Sales Assistant Software',
            'Automated Sales Tool',
            'AI Lead Engagement',
            'SaaS Sales AI',
            'Virtual Sales Assistant',
            'AI Sales Automation',
            'Sales CRM AI Tool',
            'Automated Meeting Scheduler',
            'SaaS Sales Engagement',
            'AI Revenue Growth Tool'
        ],
        features: [
            {
                title: 'Autonomous Qualification',
                desc: 'Engage website visitors in human-like dialogue to determine budget, authority, and need.',
                iconName: 'MessageSquare',
                items: ['Dynamic BANT Logic', 'Natural Language Flow', 'Sentiment Detection', 'Lead Scoring']
            },
            {
                title: 'One-Click Meeting Sync',
                desc: 'The AI suggests and books meeting times directly on your sales rep’s calendar.',
                iconName: 'Calendar',
                items: ['Calendly Sync', 'Timezone Math', 'Round-Robin Assignment', 'Meeting Reminders']
            },
            {
                title: 'Proactive Outreach Engine',
                desc: 'Automatically follow up with cold leads via personalized Email and LinkedIn messages.',
                iconName: 'Zap',
                items: ['Multi-Channel Drip', 'Personalization Tags', 'Response Detection', 'Reply Sentiment Analysis']
            }
        ],
        benefits: [
            { title: '4x More Meetings', impact: 'Book significantly more meetings by engaging every lead instantly, around the clock.' },
            { title: 'Clean CRM Data', impact: 'Ensure every lead is enriched with qualification data before the rep even says hello.' },
            { title: 'Lower CAC', impact: 'Reduce the cost of customer acquisition by automating the top-of-funnel engagement.' }
        ],
        useCases: [
            { scenario: 'B2B SaaS Growth', solution: 'Scale lead engagement without hiring a massive SDR team.' },
            { scenario: 'Real Estate Sales', solution: 'Acknowledge and qualify property inquiries in seconds, 24/7.' },
            { scenario: 'Professional Services', solution: 'Coordinate initial discovery calls for accounting, legal, or consulting firms.' }
        ],
        integrations: ['Salesforce', 'HubSpot', 'Calendly', 'Apollo.io', 'Slack']
    },
    'ai-business-analytics': {
        id: 'ai-business-analytics',
        name: 'AI Business Analytics',
        title: 'AI Business Analytics',
        tagline: 'Predictive Growth Intelligence & Cognitive Strategic Insights',
        description: 'See the future of your business. Kiaan AI Analytics turns raw data into actionable strategies with predictive modeling and anomaly detection.',
        mainKeyword: 'PREDICTIVE ANALYTICS',
        keywords: [
            'AI Business Analytics Software',
            'Predictive Business Intelligence',
            'AI Data Analysis Tool',
            'SaaS Business Insights',
            'Predictive Analytics Platform',
            'AI Decision Support System',
            'Business Intelligence AI',
            'AI Growth Analytics',
            'SaaS Insight ERP',
            'Automated Business Reporting'
        ],
        features: [
            {
                title: 'Predictive Growth Engine',
                desc: 'Forecast future revenue, churn, and inventory needs based on complex historical patterns.',
                iconName: 'TrendingUp',
                items: ['Revenue Forecasting', 'Churn Prediction', 'Inventory Planning', 'Seasonality Mapping']
            },
            {
                title: 'Natural Language Query',
                desc: 'Ask questions like "Which region had the highest margin last month?" and get instant visual answers.',
                iconName: 'MessageCircle',
                items: ['Voice-to-Chart', 'Semantic Data Search', 'Automated Narratives', 'Contextual Drills']
            },
            {
                title: 'Real-Time Anomaly Detection',
                desc: 'Get alerted the second something unusual happens in your data, from fraud to sales spikes.',
                iconName: 'AlertTriangle',
                items: ['Fraud Pattern Monitor', 'Operational Spikes', 'Cost Variance Alerts', 'Automated Root-Cause']
            }
        ],
        benefits: [
            { title: 'Data-Driven Decisions', impact: 'Replace gut feeling with hard facts and predictive modeling for every strategic move.' },
            { title: 'Zero Manual Reporting', impact: 'Save days of analyst time with automated, intelligent slide and deck generation.' },
            { title: 'Early Warning System', impact: 'Identify business risks and opportunities weeks before they manifest in standard reports.' }
        ],
        useCases: [
            { scenario: 'Retail Management', solution: 'Optimize stock levels and staffing based on predictive foot-traffic and sales math.' },
            { scenario: 'SaaS Finance', solution: 'Predict LTV/CAC ratios and model long-term MRR growth with diverse scenarios.' },
            { scenario: 'Manufacturing Ops', solution: 'Monitor machine data to predict failures and optimize production schedules.' }
        ],
        integrations: ['Tableau', 'Power BI', 'Google BigQuery', 'Snowflake', 'Looker']
    },
    'ai-workflow-tool': {
        id: 'ai-workflow-tool',
        name: 'AI Workflow Tool',
        title: 'AI Workflow Tool',
        tagline: 'Autonomous Process Orchestration & Cross-App Logic Intelligence',
        description: 'Automate the complex. Kiaan AI Workflow connects your entire tech stack with intelligent, conditional, and self-healing automation.',
        mainKeyword: 'PROCESS INTELLIGENCE',
        keywords: [
            'AI Workflow Automation Software',
            'Automated Business Process',
            'AI Process Orchestration',
            'SaaS Workflow Tool',
            'AI Business Automation',
            'Intelligent Workflow System',
            'Process Management AI',
            'SaaS Automation Platform',
            'AI Logic Automation',
            'Workflow Optimization Tool'
        ],
        features: [
            {
                title: 'Cognitive Logic Nodes',
                desc: 'Use AI to make real-time decisions within your workflows, such as sentiment-based routing.',
                iconName: 'Brain',
                items: ['Sentiment Branching', 'Content Summarization', 'Tone Classification', 'Risk Evaluation']
            },
            {
                title: 'Self-Healing Core',
                desc: 'If an API fails or data is missing, the AI attempts to resolve the issue or finds an alternative path.',
                iconName: 'ShieldCheck',
                items: ['Auto-Retry Logic', 'Error Context Mapping', 'Alternate Routing', 'AI Cleanup']
            },
            {
                title: 'Universal Multi-App Sync',
                desc: 'Connect over 5,000 apps with high-fidelity data mapping and bidirectional synchronization.',
                iconName: 'Shuffle',
                items: ['Data Transformation', 'Event Webhooks', 'Bulk Batch Sync', 'History Audit Logs']
            }
        ],
        benefits: [
            { title: 'Scale Operations', impact: 'Handle 10x the workload without increasing your operational team size.' },
            { title: 'Zero Manual Repetitive', impact: 'Eliminate "swivel-chair" work where staff copy-paste data between different systems.' },
            { title: 'Faster Responses', impact: 'Ensure internal and external processes happen in milliseconds, not hours.' }
        ],
        useCases: [
            { scenario: 'Customer Onboarding', solution: 'Automate the journey from signed contract to CRM update and project kickoff.' },
            { scenario: 'Finance Operations', solution: 'Link billing, bank feeds, and accounting systems with automated reconciliation.' },
            { scenario: 'Marketing Ops', solution: 'Coordinate lead data between social ads, landing pages, and email tools seamlessly.' }
        ],
        integrations: ['Zapier', 'Make.com', 'n8n', 'MuleSoft', 'Workato']
    },
    'ai-crm-auto-update': {
        id: 'ai-crm-auto-update',
        name: 'AI CRM Auto-Update',
        title: 'AI CRM Auto-Update',
        tagline: 'Precision Data Hygiene & Automated Relationship Intelligence',
        description: 'The end of manual CRM entry. Our AI monitors your emails, calls, and meetings to keep your customer records 100% updated and accurate.',
        mainKeyword: 'HYGIENE AUTOMATION',
        keywords: [
            'AI CRM Auto-Update Software',
            'Automated CRM Data Entry',
            'AI CRM Management',
            'SaaS CRM Automation',
            'Smart CRM Update Tool',
            'AI Customer Relationship Tool',
            'Automated Lead Updating',
            'CRM Data Hygiene AI',
            'SaaS CRM Enhancement',
            'AI Relationship Management'
        ],
        features: [
            {
                title: 'Zero-Touch Data Entry',
                desc: 'Automatically capture contact details, job titles, and company changes from your daily communications.',
                iconName: 'Zap',
                items: ['Email Signature Sync', 'Contact Enrichment', 'Company News Alerts', 'Profile Merging']
            },
            {
                title: 'AI Meeting Summaries',
                desc: 'Transcribe sales calls and meetings, then automatically post concise bullet-point notes to the CRM.',
                iconName: 'FileText',
                items: ['Action Item Detect', 'Sentiment Scoring', 'Next-Step Logic', 'Transcript Search']
            },
            {
                title: 'Relationship Integrity Sync',
                desc: 'Continuously cleanse your database by identifying duplicates and outdated records automatically.',
                iconName: 'ShieldCheck',
                items: ['Duplicate Detection', 'Stale Record Alerts', 'Validation Checks', 'Bulk Cleanse tools']
            }
        ],
        benefits: [
            { title: '100% Data Accuracy', impact: 'Ensure your CRM is always a reliable source of truth for sales and marketing teams.' },
            { title: 'Sales Focus', impact: 'Give your sales reps 5+ hours back per week by eliminating the need for post-call data entry.' },
            { title: 'Better Forecasts', impact: 'Reliable CRM data leads to significantly more accurate sales and revenue predictions.' }
        ],
        useCases: [
            { scenario: 'Enterprise Sales', solution: 'Maintain complex stakeholder records across massive global accounts effortlessly.' },
            { scenario: 'Account Management', solution: 'Track every interaction and sentiment change to proactively manage client health.' },
            { scenario: 'Marketing Database', solution: 'Ensure lead data is always enriched and segmented correctly for targeted campaigns.' }
        ],
        integrations: ['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Gong', 'Chorus.ai']
    }
};
