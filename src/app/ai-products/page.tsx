import type { Metadata } from 'next';
import { NicheServicePage } from '@/components/NicheServicePage';

export const metadata: Metadata = {
    title: "AI-Powered Business Products & Tools India | Kiaan",
    description: "Enterprise AI products — OCR, chatbots, resume screening & business analytics. Plug-and-play AI SaaS for Indian enterprises. Explore Kiaan AI solutions today.",
    keywords: 'AI products India, AI business tools, AI chatbot India, document OCR software, AI sales assistant, AI automation software, business AI solutions, AI SaaS India',
    openGraph: {
        title: "AI-Powered Business Products & Tools India | Kiaan",
        description: 'Enterprise AI products — OCR, chatbots, resume screening & business analytics. Plug-and-play AI SaaS for Indian enterprises.',
        url: 'https://kiaantechnology.com/ai-products',
        siteName: 'Kiaan Technology',
        type: 'website',
    },
};

export default function AIProductsPage() {
    return (
        <NicheServicePage
            title="Supercharge Business With AI Products"
            subTitle="AI Platform — Cognitive Intelligence"
            mainKeyword="AI Products India"
            slug="ai-products"
            keywords={['AI products India', 'AI business software', 'document OCR AI', 'AI chatbot India', 'resume screening AI', 'business analytics AI', 'AI SaaS India', 'workflow automation AI']}
            desc="Deploy battle-tested AI products for document processing, customer conversations, resume screening, sales acceleration, and business analytics — all as plug-and-play SaaS modules that integrate with your existing systems in hours."
            stats={[
                { val: '90%', label: 'Document Accuracy' },
                { val: '<2s', label: 'AI Response Time' },
                { val: '10x', label: 'Faster Processing' },
                { val: 'GPT-4', label: 'Powered' },
            ]}
            features={[
                {
                    icon: 'Zap',
                    title: 'AI Document OCR',
                    desc: 'Extract structured data from invoices, KYC documents, contracts, and medical records with 90%+ accuracy. Supports handwritten text, multi-language, and complex table extraction.',
                    items: ['Invoice & PO Data Extraction', 'KYC Document Processing', 'Handwritten Text Recognition', 'Multi-Language Support', 'Table & Form Data Parsing']
                },
                {
                    icon: 'Globe',
                    title: 'AI Chatbot Platform',
                    desc: 'Deploy intelligent conversational AI on your website, WhatsApp, and app. Handles FAQs, lead qualification, appointment booking, and escalation to human agents.',
                    items: ['GPT-4 Powered Conversations', 'WhatsApp Business Bot', 'Lead Qualification Bot', 'Appointment Booking Bot', 'Multi-Language Support']
                },
                {
                    icon: 'Users',
                    title: 'AI Resume Screening',
                    desc: 'Parse thousands of resumes in minutes, rank candidates by job requirements, auto-score on skills and experience, and shortlist top talent without human bias.',
                    items: ['Bulk Resume Parsing', 'Job Description Matching', 'Skill Gap Analysis', 'Candidate Ranking Engine', 'ATS Integration Ready']
                },
                {
                    icon: 'TrendingUp',
                    title: 'AI Sales Assistant',
                    desc: 'AI co-pilot for your sales team — auto-qualify leads, suggest next-best-action, draft email responses, predict deal closure probability, and flag at-risk deals.',
                    items: ['Lead Qualification AI', 'Next Best Action Suggestions', 'Email Draft Generation', 'Deal Health Scoring', 'Competitive Intelligence']
                },
                {
                    icon: 'BarChart3',
                    title: 'AI Business Analytics',
                    desc: 'Conversational analytics — ask your data questions in plain English and get instant charts, reports, and insights without writing SQL or using complex BI tools.',
                    items: ['Natural Language Queries', 'Auto Chart Generation', 'Anomaly Detection', 'Predictive Revenue Models', 'Insight Narration Engine']
                },
                {
                    icon: 'ShieldCheck',
                    title: 'AI Workflow Automation',
                    desc: 'AI-powered workflow builder that understands business rules in plain language and automates approval chains, data routing, and cross-system synchronization.',
                    items: ['Natural Language Workflow Builder', 'Intelligent Document Routing', 'Multi-System Auto-Sync', 'Exception Handling AI', 'Audit Trail & Logging']
                }
            ]}
            useCases={[
                { title: 'KYC Document Processing Automation', desc: 'Auto-extract PAN, Aadhaar, bank statements, and income documents for loan applications — reducing KYC time from 2 days to 10 minutes.' },
                { title: 'High-Volume Resume Screening', desc: 'Parse 10,000+ resumes per day, rank by job requirements, and shortlist top 50 candidates for recruiter review automatically.' },
                { title: 'AI Customer Support Chatbot', desc: 'Handle 70% of customer queries automatically — order status, returns, product info — and escalate complex issues to human agents.' },
                { title: 'Medical Document OCR', desc: 'Extract patient data from handwritten prescriptions, lab reports, and discharge summaries for EMR auto-population.' },
                { title: 'Contract Analysis AI', desc: 'Review contracts for key clauses, flag risks, extract obligations and deadlines, and compare against standard templates automatically.' },
                { title: 'Quality Inspection AI', desc: 'Computer vision AI inspects production line images for defects in real time — rejecting faulty units before they reach customers.' }
            ]}
            faqs={[
                { question: 'Do I need technical expertise to implement Kiaan AI products?', answer: 'No. Our AI products are designed for business users. The chatbot builder uses drag-and-drop. The OCR system requires only uploading sample documents. Most products are live within 24-48 hours with our guided onboarding, and we handle all technical integration.' },
                { question: 'How accurate is the AI Document OCR?', answer: 'For structured documents like invoices, PO, and standard forms, accuracy is 92-97%. For handwritten content, accuracy is 85-90%. We continuously fine-tune models on your specific document types to improve accuracy over time. A human review workflow flags low-confidence extractions.' },
                { question: 'Is the AI chatbot available in Hindi and regional languages?', answer: 'Yes. Our chatbot supports English, Hindi, Tamil, Telugu, Marathi, Bengali, and 20+ languages. Conversations can start in one language and switch to another mid-session. WhatsApp Business API integration allows deployment on the most widely used messaging platform in India.' },
                { question: 'Where is my data processed — is it secure?', answer: 'Your data is processed in isolated cloud environments. We do not share your documents or conversations with other clients or use them to train shared models. All data is encrypted in transit and at rest. Enterprise clients can opt for on-premise or private cloud deployment.' },
                { question: 'Can AI products integrate with my existing CRM or ERP?', answer: 'Yes. All our AI products expose REST APIs and webhook endpoints. We also have pre-built connectors for Salesforce, HubSpot, Zoho, SAP, and custom ERPs. Our team handles integration with your existing systems as part of the onboarding package.' }
            ]}
        />
    );
}

