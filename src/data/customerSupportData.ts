import { ProductData } from './businessCompanyData';

export const customerSupportData: Record<string, ProductData> = {
    'ticket-management': {
        id: 'ticket-management',
        name: 'Ticket Management',
        title: 'Ticket Management',
        tagline: 'Precision SLA Orchestration & Intelligent Support Lifecycle Control',
        description: 'Scale your support operations with Kiaan Ticket Management. Our intelligent routing and automated prioritization engine ensures that critical issues are resolved with surgical precision.',
        mainKeyword: 'SUPPORT EXCELLENCE',
        keywords: [
            'Helpdesk Software',
            'Ticketing System Platform',
            'Support Ticket Tool',
            'Customer Issue Tracking',
            'SaaS Helpdesk System',
            'Complaint Management Software',
            'Support CRM Platform',
            'Ticket Automation Tool',
            'Customer Service Software',
            'Digital Helpdesk Solution',
            'customer ticketing system software',
            'support case management platform',
            'issue resolution tracking tool',
            'helpdesk workflow automation system',
            'service request management software',
            'ticket assignment automation platform',
            'support queue monitoring dashboard',
            'incident management system',
            'IT helpdesk SaaS solution',
            'customer complaint tracking tool',
            'ticket priority management software',
            'service desk reporting dashboard',
            'ticket escalation workflow system',
            'cloud based helpdesk platform',
            'support performance analytics software',
            'client issue tracking dashboard',
            'support request automation tool',
            'digital service management system',
            'ticket lifecycle monitoring software',
            'enterprise helpdesk management solution'
        ],
        features: [
            {
                title: 'Smart Ticket Routing',
                desc: 'Automatically assign tickets to the most qualified agent based on skill, workload, and historical performance.',
                iconName: 'Zap',
                items: ['Skill-Based Assignment', 'Load Balancing', 'Priority Escalation', 'Round-Robin Logic']
            },
            {
                title: 'SLA Guard Engine',
                desc: 'Prevent breaches with real-time countdowns and automated escalation triggers for at-risk tickets.',
                iconName: 'Clock',
                items: ['Response Time Tracking', 'Resolution Deadlines', 'Automated Warnings', 'Compliance Reporting']
            },
            {
                title: 'Collaborative Sidebars',
                desc: 'Loop in product or engineering experts without leaving the ticket view for faster resolution.',
                iconName: 'Users',
                items: ['Internal Slack sync', 'Private Notes', 'Expert Mentioning', 'Solution Templates']
            }
        ],
        benefits: [
            { title: 'Faster Resolution', impact: 'Reduce average ticket resolution time by 40% through automated routing.' },
            { title: 'Consistent SLAs', impact: 'Achieve 99% SLA compliance with proactive breach alerts.' },
            { title: 'Agent Efficiency', impact: 'Empower agents to handle 2x more volume with unified workspace tools.' }
        ],
        useCases: [
            { scenario: 'Enterprise IT Helpdesk', solution: 'Manage internal technical requests across thousands of global employees.' },
            { scenario: 'Consumable SaaS Support', solution: 'Handle high-volume billing and access queries with automated responses.' },
            { scenario: 'Government Agencies', solution: 'Track public inquiries and maintain strict transparency and response timelines.' }
        ],
        integrations: ['Zendesk', 'Jira Service Management', 'Slack', 'Microsoft Teams', 'Salesforce']
    },
    'live-chat-support': {
        id: 'live-chat-support',
        name: 'Live Chat Support',
        title: 'Live Chat Support',
        tagline: 'Instant Human Connection & Real-Time Engagement Intelligence',
        description: 'Engage your visitors in real-time. Kiaan Live Chat provides a seamless, high-performance portal for human-to-human support that converts visitors into advocates.',
        mainKeyword: 'INSTANT ENGAGEMENT',
        keywords: [
            'Live Chat Software',
            'Website Chat Support Tool',
            'Real-Time Customer Chat',
            'SaaS Chat Platform',
            'Online Support Chat System',
            'Customer Messaging Software',
            'Chat CRM Integration',
            'AI Live Chat Tool',
            'Support Automation Platform',
            'Instant Chat System',
            'live chat customer support software',
            'website chat integration platform',
            'real time customer messaging tool',
            'online chat support system',
            'chat support automation software',
            'AI live chat assistant platform',
            'chat engagement tracking dashboard',
            'multi agent chat management tool',
            'instant messaging support SaaS',
            'website visitor chat system',
            'proactive chat automation software',
            'chat performance analytics dashboard',
            'omnichannel chat support platform',
            'chatbot enabled live chat system',
            'digital customer interaction tool',
            'cloud live chat solution India',
            'chat transcript tracking software',
            'support chat monitoring dashboard',
            'web based chat management tool',
            'customer communication live platform'
        ],
        features: [
            {
                title: 'Visitor Intelligence',
                desc: 'See which page the visitor is on and their historical interaction data before you even say hello.',
                iconName: 'Eye',
                items: ['Page Tracking', 'Referral Source Data', 'User Profile Sync', 'Navigation History']
            },
            {
                title: 'Proactive Engagement trigs',
                desc: 'Trigger chat invites based on user behavior, such as time on page or exit intent.',
                iconName: 'Zap',
                items: ['Exit Intent Detection', 'Click-to-Chat Triggers', 'Targeted Greetings', 'Behavioral Scoring']
            },
            {
                title: 'Integrated Co-Browsing',
                desc: 'Guide users through complex processes by seeing their screen securely and in real-time.',
                iconName: 'Share2',
                items: ['Screen Sharing', 'Remote Pointer', 'Privacy Masking', 'Multi-Agent View']
            }
        ],
        benefits: [
            { title: 'Higher CSAT', impact: 'Achieve 30% higher satisfaction scores compared to email or phone support.' },
            { title: 'Lower Costs', impact: 'Agents can handle up to 4 simultaneous conversations, reducing headcount needs.' },
            { title: 'Reduced Friction', impact: 'Resolve queries instantly where the customer is, preventing site abandonment.' }
        ],
        useCases: [
            { scenario: 'E-commerce Checkout', solution: 'Answer product questions at the critical moment of purchase to reduce cart abandonment.' },
            { scenario: 'SaaS Onboarding', solution: 'Provide real-time guidance to new users as they configure their sophisticated setup.' },
            { scenario: 'High-Touch Services', solution: 'Offer a VIP boutique experience with dedicated consultants available on-demand.' }
        ],
        integrations: ['Intercom', 'Crisp', 'Tawk.to', 'Shopify', 'Magento']
    },
    'ai-chatbot-platform': {
        id: 'ai-chatbot-platform',
        name: 'AI Chatbot Platform',
        title: 'AI Chatbot Platform',
        tagline: 'Cognitive Self-Service & 24/7 Automated Resolution Excellence',
        description: 'Automate up to 80% of your support volume. Kiaan AI Chatbots use advanced LLMs and NLP to provide human-like assistance around the clock.',
        mainKeyword: 'COGNITIVE AUTOMATION',
        keywords: [
            'AI Chatbot Software',
            'Automated Chatbot System',
            'Customer Support Bot',
            'AI Messaging Platform',
            'Chatbot CRM Integration',
            'NLP Chatbot Tool',
            'SaaS AI Chat Solution',
            'Conversational AI Platform',
            'Support Automation Bot',
            'Smart Chat Assistant',
            'AI customer chatbot software',
            'conversational AI support platform',
            'automated customer response system',
            'chatbot workflow automation tool',
            'NLP powered chatbot solution',
            'virtual assistant software for business',
            'chatbot integration with CRM',
            'AI driven customer interaction tool',
            'smart chatbot management dashboard',
            'website chatbot automation platform',
            'WhatsApp AI chatbot software',
            'chatbot analytics reporting system',
            'AI query handling platform',
            'chatbot lead qualification tool',
            'self service AI assistant software',
            'chatbot conversation tracking dashboard',
            'AI helpdesk automation platform',
            'chatbot performance monitoring tool',
            'enterprise AI chatbot solution',
            'digital assistant SaaS platform'
        ],
        features: [
            {
                title: 'Neural Intent Recognition',
                desc: 'Understand the "why" behind a customer\'s query, regardless of how they phrase it.',
                iconName: 'Brain',
                items: ['Multi-Language Support', 'Slang/Nuance Handling', 'Contextual Memory', 'Topic Clustering']
            },
            {
                title: 'Dynamic Knowledge Base Sync',
                desc: 'The bot learns instantly from your help articles, PDFs, and historical tickets.',
                iconName: 'BookOpen',
                items: ['Instant Article Ingestion', 'PDF Document Parsing', 'Auto-Correction Loops', 'Content Citation']
            },
            {
                title: 'Seamless Human Handoff',
                desc: 'Automatically route complex or sensitive issues to a live agent with full context and transcript.',
                iconName: 'Shuffle',
                items: ['Sentiment-Based Handoff', 'Complexity-Based Handoff', 'Transcript Sync', 'Agent Summaries']
            }
        ],
        benefits: [
            { title: 'Scale Infinitely', impact: 'Handle 10,000 queries simultaneously without increasing core support staff.' },
            { title: '24/7 Availability', impact: 'Provide instant answers in any timezone, ensuring customers are never left waiting.' },
            { title: 'Massive Cost Savings', impact: 'Reduce cost-per-contact by up to 90% via autonomous resolution.' }
        ],
        useCases: [
            { scenario: 'Global E-commerce', solution: 'Resolve order status, returns, and shipping queries across 50+ countries instantly.' },
            { scenario: 'Banking & Fintech', solution: 'Securely handle password resets, balance inquiries, and transaction blocking.' },
            { scenario: 'Travel & Hospitality', solution: 'Automate booking modifications, cancellation policy FAQs, and local recommendations.' }
        ],
        integrations: ['OpenAI', 'LangChain', 'Pinecone', 'Zendesk', 'Salesforce']
    },
    'call-center-saas': {
        id: 'call-center-saas',
        name: 'Call Center SaaS',
        title: 'Call Center SaaS',
        tagline: 'Cloud-Native Voice Intelligence & High-Performance Dialer Orchestration',
        description: 'Modernize your voice support with Kiaan Call Center. A unified cloud platform for inbound and outbound voice, powered by real-time analytics and CRM sync.',
        mainKeyword: 'VOICE INTELLIGENCE',
        keywords: [
            'Call Center Software',
            'Cloud Call Center System',
            'Contact Center Platform',
            'SaaS Call Management Tool',
            'Inbound Outbound Calling Software',
            'IVR System Platform',
            'Call Tracking CRM',
            'Telephony Management System',
            'Call Analytics Tool',
            'Omni Channel Call Center',
            'cloud call center software',
            'inbound call management platform',
            'outbound calling automation system',
            'call tracking dashboard',
            'VoIP call center solution',
            'call recording management software',
            'agent performance monitoring tool',
            'contact center automation platform',
            'IVR system integration software',
            'call analytics reporting dashboard',
            'customer call routing system',
            'telephony CRM integration platform',
            'cloud based contact center SaaS',
            'predictive dialer software',
            'call queue management tool',
            'call center productivity system',
            'customer support telephony platform',
            'call center KPI tracking software',
            'digital contact center solution',
            'multi agent call management system'
        ],
        features: [
            {
                title: 'Visual IVR Designer',
                desc: 'Create complex, customer-friendly phone menus with an intuitive drag-and-drop interface.',
                iconName: 'Layout',
                items: ['Multi-Level Menus', 'Time-of-Day Routing', 'Voice Recognition Sync', 'External Data Fetching']
            },
            {
                title: 'AI Voice Analytics',
                desc: 'Automatically transcribe calls and analyze sentiment, keywords, and agent performance.',
                iconName: 'Activity',
                items: ['Live Transcription', 'Sentiment Scoring', 'Keyword Spotting', 'Silence Detection']
            },
            {
                title: 'Unified Softphone',
                desc: 'Agents handle calls directly from their browser with integrated CRM records and scripts.',
                iconName: 'Phone',
                items: ['One-Click Dial', 'Integrated Call Notes', 'Transfer/Conference Tools', 'Call Recording Access']
            }
        ],
        benefits: [
            { title: 'World-Class Uptime', impact: 'Ensure 99.99% voice availability with globally distributed cloud infrastructure.' },
            { title: 'Lower Latency', impact: 'High-fidelity audio with intelligent routing to the nearest regional data center.' },
            { title: 'Data-Backed Coaching', impact: 'Use AI insights to identify top-performing scripts and coach underperforming agents.' }
        ],
        useCases: [
            { scenario: 'Outbound Sales Teams', solution: 'Increase talk-time by 300% using predictive dialing and automated voicemail drop.' },
            { scenario: 'Emergency Support Lines', solution: 'Ensure zero-call-loss with high-availability disaster recovery and overflow logic.' },
            { scenario: 'Debt Collection', solution: 'Maintain strict legal compliance with automated recording and audit-ready call logs.' }
        ],
        integrations: ['Twilio', 'RingCentral', 'Aircall', 'Five9', 'HubSpot']
    },
    'omni-channel-portal': {
        id: 'omni-channel-portal',
        name: 'Omni-Channel Portal',
        title: 'Omni-Channel Portal',
        tagline: 'Unified Customer History & Seamless Cross-Platform Support Sync',
        description: 'Break down silos and provide a truly consistent experience. Kiaan Omni-Channel centralizes Email, Chat, Voice, WhatsApp, and Social into a single source of truth.',
        mainKeyword: 'UNIFIED EXPERIENCE',
        keywords: [
            'Omnichannel Support Software',
            'Multi Channel CRM System',
            'Unified Communication Platform',
            'Customer Engagement Portal',
            'SaaS Omni Channel Tool',
            'Cross Channel Messaging System',
            'Integrated Support Platform',
            'Customer Interaction Software',
            'Digital Engagement CRM',
            'Support Channel Management',
            'omnichannel customer communication software',
            'unified support management platform',
            'multi channel messaging dashboard',
            'cross channel support system',
            'integrated communication SaaS solution',
            'centralized customer interaction platform',
            'multichannel engagement tracking software',
            'unified inbox management tool',
            'cross platform customer support system',
            'integrated ticket and chat solution',
            'communication analytics dashboard',
            'social media support integration software',
            'unified customer messaging platform',
            'omnichannel CRM integration tool',
            'centralized service portal system',
            'customer engagement orchestration platform',
            'multi channel helpdesk software',
            'digital interaction management tool',
            'communication workflow automation system',
            'enterprise omnichannel support solution'
        ],
        features: [
            {
                title: 'Unified Agent Workspace',
                desc: 'Every channel—from Instagram to Email—lives in a single, high-performance interface.',
                iconName: 'Maximize',
                items: ['Threaded Conversations', 'Channel Switching', 'Internal Notes Sync', 'Shared Contextual View']
            },
            {
                title: 'Thread Consolidation',
                desc: 'Automatically group multiple messages from the same user across different platforms into one story.',
                iconName: 'Link',
                items: ['Identity Resolution', 'Cross-Channel Linking', 'Historical Merging', 'Duplicate Detection']
            },
            {
                title: 'Global Performance Dashboard',
                desc: 'Monitor response times and resolution rates across all channels in a single real-time view.',
                iconName: 'BarChart3',
                items: ['Heatmap Activity', 'Channel Comparison', 'Resource Allocation', 'CSAT by Source']
            }
        ],
        benefits: [
            { title: 'Zero Repetition', impact: 'Customers never have to repeat their story regardless of which channel they use.' },
            { title: 'Faster Onboarding', impact: 'Train agents on one platform rather than five disconnected tools.' },
            { title: 'Higher Loyalty', impact: 'Provide a modern, effortless experience that meets customers where they are.' }
        ],
        useCases: [
            { scenario: 'Luxury Retail Brands', solution: 'Manage high-touch relationships across Email, Phone, and WhatsApp seamlessly.' },
            { scenario: 'Tech Platforms', solution: 'Coordinate community support via Twitter/X alongside professional ticketed support.' },
            { scenario: 'Logistics Providers', solution: 'Update customers via SMS while managing their detailed queries via a web portal.' }
        ],
        integrations: ['Salesforce Service Cloud', 'Freshdesk', 'Zendesk', 'Front', 'Help Scout']
    },
    'sms-notification': {
        id: 'sms-notification',
        name: 'SMS Notification',
        title: 'SMS Notification',
        tagline: 'High-Priority Alerting & Global Reliable Message Orchestration',
        description: 'Reach your customers instantly with a 98% open rate. Kiaan SMS ensures critical alerts, OTPs, and updates are delivered with rock-solid reliability globally.',
        mainKeyword: 'INSTANT DELIVERY',
        keywords: [
            'SMS Notification Software',
            'Bulk SMS Platform',
            'SMS Automation Tool',
            'Customer SMS Alerts System',
            'SaaS SMS Gateway',
            'Marketing SMS Software',
            'Transactional SMS Platform',
            'SMS CRM Integration',
            'SMS Campaign Tool',
            'Business SMS Solution',
            'bulk SMS notification software',
            'transactional SMS automation platform',
            'SMS alert management system',
            'promotional SMS campaign tool',
            'SMS gateway integration software',
            'automated SMS reminder system',
            'SMS broadcast SaaS solution',
            'customer SMS engagement platform',
            'SMS analytics dashboard',
            'two way SMS communication tool',
            'SMS API integration platform',
            'SMS delivery tracking software',
            'business SMS marketing system',
            'secure SMS messaging solution',
            'OTP SMS automation software',
            'cloud SMS management platform',
            'SMS reporting analytics tool',
            'notification automation system',
            'SMS campaign tracking dashboard',
            'enterprise SMS solution India'
        ],
        features: [
            {
                title: 'Global Carrier Network',
                desc: 'Tier-1 connectivity to over 800 carriers across 190 countries for maximum reach.',
                iconName: 'Globe',
                items: ['Direct-to-Carrier Routing', 'Intelligent Failback', 'Low Latency Payouts', 'Local Compliance Prep']
            },
            {
                title: 'Personalized Broadcasts',
                desc: 'Send personalized bulk updates with dynamic fields and trackable shortlinks.',
                iconName: 'Zap',
                items: ['Dynamic Field Injection', 'Link Tracking (CTR)', 'Scheduled Sending', 'Opt-out Management']
            },
            {
                title: 'Two-Way Messaging',
                desc: 'Allow customers to reply to your messages for a more interactive and helpful experience.',
                iconName: 'MessageSquare',
                items: ['Shared Inbox View', 'Automated Keyword Replies', 'Human Handoff', 'Chat Transcript Sync']
            }
        ],
        benefits: [
            { title: 'Maximum Open Rates', impact: 'Reach customers instantly with messages that are read within 3 minutes of delivery.' },
            { title: 'High Trust', impact: 'Use branded Alphanumeric Sender IDs to build brand recognized and security.' },
            { title: 'Developer Friendly', impact: 'Industrial-grade APIs that integrate into your existing tech stack in minutes.' }
        ],
        useCases: [
            { scenario: 'Security Services', solution: 'Deliver instant 2FA/OTP codes for time-sensitive logins and transactions.' },
            { scenario: 'Service Technicians', solution: 'Notify customers when a representative is "on their way" with a live tracking link.' },
            { scenario: 'Public Safety', solution: 'Broadcast critical emergency alerts to entire municipalities in seconds.' }
        ],
        integrations: ['Twilio', 'MessageBird', 'Sinch', 'AWS SNS', 'Nexmo']
    },
    'self-service-kb': {
        id: 'self-service-kb',
        name: 'Self-Service KB',
        title: 'Self-Service KB',
        tagline: 'Structured Knowledge Orchestration & Frictionless Help Discovery',
        description: 'Empower your customers to help themselves. Kiaan Knowledge Base provides a stunning, high-performance portal for documentation and FAQs.',
        mainKeyword: 'KNOWLEDGE EMPOWERMENT',
        keywords: [
            'Knowledge Base Software',
            'Self Service Portal System',
            'FAQ Management Tool',
            'SaaS Knowledge Platform',
            'Customer Help Center',
            'Support Documentation Software',
            'Online Helpdesk Portal',
            'KB Automation Tool',
            'Digital Knowledge System',
            'Customer Support Library',
            'knowledge base management software',
            'self service support portal',
            'FAQ management system',
            'help center automation platform',
            'customer self help software',
            'documentation management system',
            'support article publishing tool',
            'knowledge base analytics dashboard',
            'AI powered help center platform',
            'searchable knowledge repository',
            'online documentation SaaS solution',
            'support resource management tool',
            'user guide management software',
            'digital knowledge sharing platform',
            'article performance tracking dashboard',
            'self service workflow automation system',
            'knowledge portal integration tool',
            'enterprise knowledge management software',
            'content driven support platform',
            'centralized help documentation system'
        ],
        features: [
            {
                title: 'Rich Content Editor',
                desc: 'Build beautiful help articles with video embeds, code blocks, and interactive tabs.',
                iconName: 'FileText',
                items: ['Markdown Support', 'Video Embeds', 'Tabbed Content', 'Image Optimization']
            },
            {
                title: 'AI Search Suggestions',
                desc: 'Predictive search that finds the right answer even before the user finishes typing.',
                iconName: 'Search',
                items: ['Fuzzy Matching', 'Synonym Support', 'Popular Article Highlighting', 'Semantic Relevance']
            },
            {
                title: 'Internal & Private Docs',
                desc: 'Create a single repository for public documentation and private internal team playbooks.',
                iconName: 'Lock',
                items: ['Role-Based Access', 'Password Protection', 'IP Whitelisting', 'SSO Integration']
            }
        ],
        benefits: [
            { title: 'Drastic Volume Reduction', impact: 'Deflect up to 40% of incoming support tickets with high-quality self-service.' },
            { title: 'SEO Visibility', impact: 'Indexed help articles drive high-intent organic traffic to your brand.' },
            { title: 'Always Up-to-Date', impact: 'Collaborative editing and version control ensure documentation stays current.' }
        ],
        useCases: [
            { scenario: 'Software Product Teams', solution: 'Provide detailed API documentation and step-by-step feature guides.' },
            { scenario: 'HR Departments', solution: 'Centralize internal policies, benefits, and employee handbooks in one portal.' },
            { scenario: 'E-commerce Brands', solution: 'Build a comprehensive FAQ for shipping, returns, and sizing guides.' }
        ],
        integrations: ['GitBook', 'ReadMe', 'Confluence', 'Google Analytics', 'Algolia']
    },
    'dispute-management': {
        id: 'dispute-management',
        name: 'Dispute Management',
        title: 'Dispute Management',
        tagline: 'Precision Case Resolution & Trust-First Conflict Orchestration',
        description: 'Protect your brand and revenue. Kiaan Dispute Management provides a structured, evidentiary portal for handling conflicts, refunds, and chargebacks.',
        mainKeyword: 'RESOLUTION INTEGRITY',
        keywords: [
            'Dispute Resolution Software',
            'Complaint Resolution System',
            'Case Management Tool',
            'SaaS Dispute Platform',
            'Customer Issue Resolution Software',
            'Case Tracking System',
            'Service Dispute CRM',
            'Conflict Management Tool',
            'Resolution Workflow System',
            'Support Case Platform',
            'dispute resolution management software',
            'customer complaint dispute system',
            'case resolution tracking platform',
            'dispute workflow automation tool',
            'conflict management SaaS solution',
            'ticket based dispute handling system',
            'dispute reporting dashboard',
            'resolution monitoring software',
            'escalation management platform',
            'grievance tracking automation tool',
            'dispute documentation management system',
            'customer claim management software',
            'issue arbitration platform',
            'dispute analytics dashboard',
            'complaint resolution tracking tool',
            'service recovery management system',
            'enterprise dispute handling solution',
            'digital conflict resolution platform',
            'dispute performance reporting software',
            'customer issue mediation system'
        ],
        features: [
            {
                title: 'Structured Evidence Vault',
                desc: 'Securely store and organize all communication, contracts, and proofs required for resolution.',
                iconName: 'ShieldCheck',
                items: ['Encrypted File Storage', 'Document Verification', 'Timeline History', 'Immutable Audit Logs']
            },
            {
                title: 'Automated Mediation',
                desc: 'Guided workflows that lead both parties toward a resolution based on your specific business rules.',
                iconName: 'Shuffle',
                items: ['Conditional Logic Paths', 'Deadline Enforcement', 'Auto-Resolution Triggers', 'Message Guarding']
            },
            {
                title: 'Chargeback Analysis',
                desc: 'Direct integration with payment gateways to fight fraudulent claims with data-driven evidence.',
                iconName: 'BarChart3',
                items: ['Success Rate Tracking', 'Fraud Pattern Detection', 'Manual Review Queues', 'Gateway Sync']
            }
        ],
        benefits: [
            { title: 'Recover Revenue', impact: 'Win 25% more chargeback disputes through better evidence organization.' },
            { title: 'Preserve Trust', impact: 'Resolve customer conflicts professionally and transparently, reducing churn.' },
            { title: 'Compliance Safety', impact: 'Maintain a perfect audit trail for all financial adjustments and resolutions.' }
        ],
        useCases: [
            { scenario: 'Online Marketplaces', solution: 'Mediate disputes between buyers and sellers with a fair, structured portal.' },
            { scenario: 'Professional Services', solution: 'Manage project-milestone disagreements with documented sign-off history.' },
            { scenario: 'E-commerce Retailers', solution: 'Automate complex return and refund disputes based on clear internal policies.' }
        ],
        integrations: ['Stripe', 'PayPal', 'Adyen', 'DocuSign', 'Zendesk']
    }
};
