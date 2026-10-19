// Lucide imports removed as we are using icon names (strings) now


export interface SolutionData {
    title: string;
    subTitle: string;
    mainKeyword: string;
    keywords: string[];
    desc: string;
    features: {
        title: string;
        desc: string;
        icon: string;
        items: string[];
    }[];
    stats: {
        val: string;
        label: string;
    }[];
    colorClass?: string;
    bgClass?: string;
    metaTitle?: string;
    metaDescription?: string;
    faqs?: {
        question: string;
        answer: string;
    }[];
    longTailKeywords?: string[];
    locationKeywords?: string[];
    internalLinks?: {
        label: string;
        href: string;
    }[];
    painPoints?: {
        title: string;
        desc: string;
    }[];
    useCases?: {
        title: string;
        desc: string;
    }[];
}

export const solutionsData: Record<string, SolutionData> = {
    'saas-development': {
        title: 'Custom SaaS Development Company',
        subTitle: 'SaaS',
        mainKeyword: 'SaaS Product Development Services',
        keywords: ['Product Strategy', 'Multi-Tenant SaaS Architecture', 'Cloud SaaS Development', 'SaaS Platform Development Company', 'SaaS Application Engineering', 'White Label SaaS Development', 'SaaS MVP Development Company', 'SaaS DevOps Services', 'SaaS Scalability Consulting', 'SaaS Migration Services'],
        desc: 'Kiaan Technology is a leading custom SaaS development company delivering scalable, cloud-native SaaS applications for startups and enterprises worldwide. We specialize in multi-tenant SaaS architecture, subscription-based platforms, and secure cloud SaaS development solutions. Our SaaS product development services include product strategy, UI/UX design, backend architecture, API integration, payment gateway integration, and global cloud deployment.',
        features: [
            {
                title: 'Multi-Tenant Core',
                desc: 'Highly scalable architecture focusing on secure data isolation and performance.',
                icon: 'Database',
                items: ['Data Isolation', 'Custom Domains', 'RBAC Security', 'Tenant Analytics']
            },
            {
                title: 'Hyper-Scale Infrastructure',
                desc: 'Architecture designed for the modern web with global scale and sub-second latency.',
                icon: 'Zap',
                items: ['Auto-Scaling', 'Serverless Logic', 'Global CDN', 'Edge Computing']
            },
            {
                title: 'Revenue Orchestration',
                desc: 'End-to-end engineering excellence for the next generation of digital-first businesses.',
                icon: 'Rocket',
                items: ['Tiered Billing', 'Usage Tracking', 'Global Tax Math', 'Churn Prevention']
            }
        ],
        stats: [
            { val: '99.99%', label: 'UPTIME GUARANTEE' },
            { val: '250ms', label: 'GLOBAL LATENCY' },
            { val: '1M+', label: 'CONCURRENT USERS' },
            { val: '100%', label: 'DATA ISOLATION' }
        ],
        colorClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500'
    },
    'mobile-development': {
        title: 'Mobile App Development Services',
        subTitle: 'Mobile Apps',
        mainKeyword: 'Mobile App Development Company',
        keywords: ['iOS App Development', 'Android App Development', 'Cross-Platform App Development', 'Custom Mobile Application Development', 'Enterprise Mobile Solutions', 'Progressive Web App Development', 'Mobile SaaS Application Development', 'Custom Business Mobile Apps'],
        desc: 'We provide end-to-end mobile app development services for iOS and Android platforms. Our team builds secure, scalable, and performance-driven custom mobile applications for startups and enterprises. From cross-platform app development using Flutter or React Native to native iOS and Android development, we deliver intuitive and user-friendly applications optimized for global users.',
        features: [
            {
                title: 'iOS App Development',
                desc: 'Sub-60fps animations and native-grade responsiveness across all Apple mobile devices.',
                icon: 'Smartphone',
                items: ['Smooth Gestures', 'Haptic Feedback', 'GPU Acceleration', 'Asset Optimization']
            },
            {
                title: 'Android App Development',
                desc: 'Advanced local database sync and native performance for the diverse Android ecosystem.',
                icon: 'ShieldCheck',
                items: ['Delta Sync', 'Conflict Resolve', 'Local Encryption', 'Background Tasks']
            },
            {
                title: 'Cross-Platform App Development',
                desc: 'Leveraging Flutter and React Native to deliver high-performance apps with a single codebase.',
                icon: 'Activity',
                items: ['Flutter Engineering', 'React Native Logic', 'Single Codebase', 'Fast Deployment']
            }
        ],
        stats: [
            { val: '4.9', label: 'AVG APP RATING' },
            { val: '0', label: 'CRASH-FREE DAYS' },
            { val: '2x', label: 'USER RETENTION' },
            { val: '150ms', label: 'STARTUP SPEED' }
        ],
        colorClass: 'text-red-500',
        bgClass: 'bg-red-500'
    },
    'erp-crm': {
        title: 'Custom ERP & CRM Development Services',
        subTitle: 'ERP & CRM',
        mainKeyword: 'ERP Software Development',
        keywords: ['Custom ERP Development', 'CRM Software Development Company', 'Enterprise Resource Planning Software', 'Business Process Automation', 'ERP Customization Services', 'CRM Implementation Services', 'Modular ERP Solutions', 'Enterprise CRM Analytics'],
        desc: 'Kiaan Technology provides comprehensive ERP software development and CRM software development services designed to optimize business operations and improve organizational efficiency. Our custom ERP solutions integrate core business functions such as accounting, human resources, inventory management, procurement, and reporting into a centralized and scalable platform. These systems help businesses gain real-time insights, reduce operational complexity, and enhance decision-making. In addition, our CRM software solutions empower organizations to automate sales workflows, manage customer interactions, track leads, and strengthen customer relationships. We build secure, scalable, and fully customizable ERP and CRM platforms tailored to meet industry-specific requirements and long-term business growth.',
        features: [
            {
                title: 'Enterprise Resource Planning Software',
                desc: 'A single source of truth for your entire enterprise, eliminating departmental silos through custom ERP development.',
                icon: 'Layout',
                items: ['Master Data Sync', 'Global Visibility', 'Cross-App Logic', 'Real-time Ledger']
            },
            {
                title: 'Business Process Automation',
                desc: 'Eliminate manual effort with intelligent CRM software solutions and automated workflow orchestration.',
                icon: 'Zap',
                items: ['Process Mining', 'Automated Triggers', 'SLA Monitoring', 'Smart Routing']
            },
            {
                title: 'Predictive CRM Insights',
                desc: 'Transform raw customer data into actionable growth strategies with AI-driven CRM forecasting.',
                icon: 'BarChart3',
                items: ['Demand Sensing', 'Churn Analysis', 'Revenue Modeling', 'Resource Optimization']
            }
        ],
        stats: [
            { val: '40%', label: 'OPEX REDUCTION' },
            { val: '24/7', label: 'REAL-TIME DATA' },
            { val: '10x', label: 'PROCESS SPEED' },
            { val: '100%', label: 'DATA ACCURACY' }
        ],
        colorClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500'
    },
    'ai-automation': {
        title: 'Business Automation Software Development',
        subTitle: 'Automation',
        mainKeyword: 'Business Automation Software',
        keywords: ['Workflow Automation Systems', 'Enterprise Automation Solutions', 'AI-Powered Automation Software', 'Process Automation Development', 'Robotic Process Automation Solutions', 'Intelligent Business Automation Tools', 'Digital Process Automation Tools', 'Enterprise Automation Integration'],
        desc: 'Kiaan Technology develops intelligent business automation software designed to streamline operations, eliminate repetitive manual tasks, and enhance overall organizational productivity. Our automation solutions integrate workflows, real-time notifications, analytics dashboards, and AI-powered automation capabilities into a unified system. We help businesses automate complex processes across departments, enabling faster decision-making and improved operational accuracy. From workflow automation tools to enterprise-grade automation platforms, our scalable solutions are built to support growing businesses with technology-driven efficiency, reduced operational costs, and improved performance outcomes.',
        features: [
            {
                title: 'AI-Powered Automation Software',
                desc: 'Complex decision-making handled by customized neural networks and workflow automation systems.',
                icon: 'Brain',
                items: ['Custom LLM Tuning', 'Sentiment Engine', 'Neural OCR', 'Natural Language UI']
            },
            {
                title: 'Process Automation Development',
                desc: 'High-precision visual analysis and enterprise automation solutions for quality control and security.',
                icon: 'Cpu',
                items: ['Object Detection', 'Facial Biometrics', 'Spatial Analysis', 'Thermal Imaging']
            },
            {
                title: 'Enterprise Automation Solutions',
                desc: 'Self-correcting digital workers that handle multi-step processes across your entire stack.',
                icon: 'Rocket',
                items: ['Multi-Step Logic', 'Self-Healing Paths', 'API Orchestration', '24/7 Operations']
            }
        ],
        stats: [
            { val: '98%', label: 'MODEL ACCURACY' },
            { val: '50ms', label: 'INFERENCE TIME' },
            { val: '75%', label: 'TIME SAVINGS' },
            { val: '24/7', label: 'AI AVAILABILITY' }
        ],
        colorClass: 'text-red-500',
        bgClass: 'bg-red-500'
    },
    'ui-ux': {
        title: 'UI/UX Design Services for Web & SaaS Applications',
        subTitle: 'User Experience',
        mainKeyword: 'UI/UX Design Services',
        keywords: ['SaaS UI Design', 'Web Application UI Design', 'User Experience Design', 'Product Design Services', 'SaaS Interface Optimization', 'UX Research and Strategy', 'Conversion-Focused Design Services', 'SaaS Dashboard Interface Design'],
        desc: 'Kiaan Technology offers professional UI/UX design services focused on creating intuitive, engaging, and conversion-driven digital experiences for web applications, SaaS platforms, and mobile applications. Our design process combines user research, wireframing, interactive prototyping, and usability testing to ensure every product delivers seamless navigation and exceptional user satisfaction. We design modern interfaces that improve user engagement, increase retention, and enhance overall product performance. From SaaS UI design to complex web application interfaces, our team builds scalable and user-centered product designs aligned with business goals and industry best practices.',
        features: [
            {
                title: 'SaaS UI Design',
                desc: 'Building scalable, atomic UI libraries for SaaS platforms that ensure brand consistency across all digital touchpoints.',
                icon: 'Palette',
                items: ['Atomic Design', 'Motion Bricks', 'Token Management', 'Interactive Specs']
            },
            {
                title: 'User Experience Design',
                desc: 'Data-driven psychological mapping and web application UI design that reduces friction and maximizes user conversion.',
                icon: 'Users',
                items: ['Behavioral Mapping', 'A/B Test Logic', 'Heatmap Analysis', 'Persona Validation']
            },
            {
                title: 'Product Design Services',
                desc: 'Fine-tuned interactive prototypes and user-centered designs that provide instant, delightful feedback.',
                icon: 'Zap',
                items: ['Physics-based Motion', 'Layered Parallax', 'Dynamic Feedback', 'Transition Magic']
            }
        ],
        stats: [
            { val: '300%', label: 'CONVERSION LIFT' },
            { val: '60fps', label: 'MOTION PERFORMANCE' },
            { val: 'AA', label: 'ACCESSIBILITY' },
            { val: '100%', label: 'BRAND SYNC' }
        ],
        colorClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500'
    },
    'web-development': {
        title: 'Web Application Development Company',
        subTitle: 'Web Applications',
        mainKeyword: 'Web Application Development',
        keywords: ['Custom Web Development', 'Enterprise Web Development', 'SaaS Web Development', 'Cloud-Based Web Applications', 'Enterprise Web Platform Development', 'API-First Web Development', 'Cloud-Native Web Platforms', 'Web Performance Optimization Services'],
        desc: 'Kiaan Technology is a trusted web application development company delivering secure, scalable, and high-performance custom web development solutions for businesses worldwide. We build enterprise-grade web applications, SaaS platforms, business dashboards, and API-driven systems using modern frameworks and cloud-native architecture. Our development approach focuses on performance optimization, security, and long-term scalability to support growing digital businesses. From startup platforms to enterprise systems, we develop responsive and reliable cloud-based web applications tailored to specific business requirements.',
        features: [
            {
                title: 'Enterprise Web Development',
                desc: 'Perfect Lighthouse scores and sub-second page loads through custom web development across cloud delivery networks.',
                icon: 'Globe',
                items: ['ISR/SSG Optimization', 'Image Edge-Serve', 'Font Subsetting', 'Dead-Code Shaking']
            },
            {
                title: 'SaaS Web Development',
                desc: 'Decoupling content from display to provide unmatched flexibility and cloud-based web application distribution.',
                icon: 'Code',
                items: ['Headless CMS', 'API-First Logic', 'Omnichannel Content', 'Git-Based Workflow']
            },
            {
                title: 'Secure Web Applications',
                desc: 'Hardened web architecture with automated threat detection and global security headers for reliable business operations.',
                icon: 'Lock',
                items: ['WAF Integration', 'DDoS Protection', 'CSRF Guard', 'Secure Headers']
            }
        ],
        stats: [
            { val: '100', label: 'LIGHTHOUSE SCORE' },
            { val: '0.8s', label: 'TIME TO INTERACTIVE' },
            { val: '1st', label: 'SEO RANKING' },
            { val: '10x', label: 'SECURITY SCORE' }
        ],
        colorClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500'
    },
    'custom-software': {
        title: 'Custom Software Development Company',
        subTitle: 'Custom Software',
        mainKeyword: 'Custom Software Development Company',
        keywords: ['Enterprise Software Development', 'SaaS Development Services', 'Business Software Solutions', 'Software Development for Startups', 'Bespoke Enterprise Applications', 'Custom Digital Product Engineering', 'Software Architecture Consulting', 'Scalable Enterprise Applications'],
        desc: 'Kiaan Technology provides tailored custom software development services designed to help businesses achieve scalable digital transformation and operational efficiency. Our team develops enterprise software solutions, SaaS platforms, and startup MVP applications using secure, cloud-based architectures and modern development practices. We focus on building performance-driven applications that align with business workflows, automate processes, and support long-term growth. From requirement analysis to deployment and maintenance, we deliver end-to-end business software solutions customized to your organizational goals.',
        features: [
            {
                title: 'Enterprise Software Development',
                desc: 'Custom-coded algorithms and business software solutions specifically for your unique industry logic.',
                icon: 'Code',
                items: ['Patentable Logic', 'Custom Math', 'Unique Workflows', 'Niche Domain Sync']
            },
            {
                title: 'SaaS Development Services',
                desc: 'Breathing new life into old systems through software development for startups and modern enterprise wrap-arounds.',
                icon: 'Layout',
                items: ['Cloud Migration', 'API Wrapping', 'UI Modernization', 'Data Integrity']
            },
            {
                title: 'Business Software Solutions',
                desc: 'Full-stack engineering for bespoke complex systems that dictate market dominance.',
                icon: 'Shield',
                items: ['Distributed Architecture', 'High-Concurrency', 'Real-time Sync', 'DevOps Pipeline']
            }
        ],
        stats: [
            { val: '150+', label: 'CUSTOM PROJECTS' },
            { val: '12+', label: 'INDUSTRIES SERVED' },
            { val: '98%', label: 'CLIENT RETENTION' },
            { val: '24/7', label: 'SUPPORT REACH' }
        ],
        colorClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500'
    },
    'healthcare': {
        title: 'Healthcare Intelligence',
        subTitle: 'Healthcare',
        mainKeyword: 'Healthcare Management Software India',
        keywords: ['Hospital Management Software', 'Clinic Management System', 'EMR Software India', 'Medical Billing Software', 'Healthcare Automation Platform', 'Hospital ERP India', 'Cloud Hospital Software', 'Patient Management System', 'Diagnostic Lab Software', 'Healthcare SaaS Platform', 'AI Healthcare Analytics', 'Telemedicine Software India', 'Pharmacy Management System', 'Healthcare Dashboard Software', 'Hospital Workflow Automation'],
        desc: 'Kiaan Technology is a leading healthcare management software company in India, delivering cloud-based, AI-powered digital health solutions for hospitals, clinics, and diagnostic centers. From small clinics in Indore to large hospital networks across India, our custom healthcare software development services automate clinical workflows, improve patient outcomes, and ensure regulatory compliance with enterprise-grade security and seamless API integrations.',
        features: [
            {
                title: 'Precision Patient Care',
                desc: 'Centralized EMR/EHR systems that provide a 360-degree view of patient history, treatment plans, and diagnostics.',
                icon: 'Activity',
                items: ['Real-time Monitoring', 'Smart Diagnostics', 'Treatment Planning', 'Pharmacy Sync']
            },
            {
                title: 'Clinical Operations',
                desc: 'Streamlining hospital workflows with automation-driven queue management, scheduling, and billing.',
                icon: 'Layout',
                items: ['Queue Management', 'OT Scheduling', 'Inventory Control', 'Billing Automation']
            },
            {
                title: 'Virtual Healthcare',
                desc: 'High-definition telemedicine platforms with secure, encrypted data transmission and ABDM compliance.',
                icon: 'Smartphone',
                items: ['Video Consult', 'Digital Rx', 'Patient Portal', 'Remote Lab Access']
            }
        ],
        stats: [
            { val: '100%', label: 'HIPAA COMPLIANT' },
            { val: '30%', label: 'WAIT-TIME REDUCTION' },
            { val: 'Zero', label: 'DATA BREACHES' },
            { val: '24/7', label: 'CRITICAL SUPPORT' }
        ],
        colorClass: 'text-red-500',
        bgClass: 'bg-red-500',
        metaTitle: 'Healthcare Software Development Company in India | Kiaan Technology',
        metaDescription: 'Custom healthcare software development company in India. Build HIPAA-compliant EMR, clinic management, telemedicine & hospital management systems. Book a demo.',
        faqs: [
            {
                question: 'What is healthcare management software?',
                answer: 'Healthcare management software is a comprehensive digital solution designed for hospitals, clinics, and diagnostic centers. It includes modules for patient management, EMR/EHR, appointment scheduling, billing, pharmacy, lab integration, and reporting — all in a unified cloud-based platform.'
            },
            {
                question: 'Is it suitable for small clinics in India?',
                answer: 'Yes. Our healthcare software offers flexible SaaS-based pricing models that allow small clinics and single-doctor practices to start with essential features like appointment booking, patient records, and billing, and scale up as they grow.'
            },
            {
                question: 'Does it support Indian billing compliance?',
                answer: 'Absolutely. Our software is fully compliant with Indian GST billing requirements, supports ABDM (Ayushman Bharat Digital Mission) integration, and adheres to IT Act 2000 data protection standards.'
            },
            {
                question: 'Is patient data secure?',
                answer: 'Yes. We implement end-to-end AES-256 encryption, HIPAA-compliant data storage, role-based access control, multi-factor authentication, and comprehensive audit logging to ensure complete patient data security.'
            },
            {
                question: 'Can it integrate with lab and pharmacy systems?',
                answer: 'Yes. Our platform integrates seamlessly with Lab Information Systems (LIS), pharmacy management systems, payment gateways (Razorpay, PayU), government APIs (ABDM, CoWIN), and wearable device APIs for remote patient monitoring.'
            }
        ],
        longTailKeywords: ['best hospital management software in India', 'cloud EMR software for clinics in Indore', 'AI powered healthcare automation system', 'affordable clinic software India', 'hospital billing software with GST India', 'telemedicine app development company India', 'HIPAA compliant healthcare software India', 'patient management system for small clinics'],
        locationKeywords: ['healthcare software India', 'hospital software Indore', 'clinic management system India', 'EMR software Indore', 'medical automation India', 'healthcare SaaS company Indore', 'health tech company India'],
        internalLinks: [
            { label: 'CRM Software', href: '/products/crm-software' },
            { label: 'HRM Software', href: '/products/hrm-software' },
            { label: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure' }
        ],
        painPoints: [
            { title: 'Fragmented Patient Records', desc: 'Patient data scattered across departments leads to misdiagnosis, treatment delays, and poor care coordination across hospital networks.' },
            { title: 'Manual Billing Errors', desc: 'Paper-based billing and insurance claims processing causes revenue leakage, GST compliance issues, and delayed reimbursements.' },
            { title: 'Legacy System Bottlenecks', desc: 'Outdated hospital software cannot handle growing patient volumes, telemedicine demands, or integration with modern diagnostic equipment.' },
            { title: 'Regulatory Compliance Risk', desc: 'Keeping up with ABDM, HIPAA, and state health authority regulations manually is error-prone and resource-intensive.' },
            { title: 'Poor Patient Experience', desc: 'Long waiting times, no online appointment booking, and lack of digital communication channels drive patients to competitors.' }
        ],
        useCases: [
            { title: 'Multi-Branch Hospital Network', desc: 'A 12-branch hospital chain in Maharashtra deployed our cloud HMS to centralize patient records, automate inter-department referrals, and achieve real-time bed availability tracking — reducing patient wait times by 40%.' },
            { title: 'Single-Doctor Clinic Digitization', desc: 'Solo practitioners across Tier 2 cities use our lightweight clinic management system to digitize prescriptions, automate appointment reminders via WhatsApp, and maintain GST-compliant billing.' },
            { title: 'Diagnostic Lab Automation', desc: 'Pathology and radiology labs integrate our LIMS for automated sample tracking, report generation, and patient portal delivery — eliminating manual data entry and enabling same-day report publishing.' },
            { title: 'Telemedicine for Rural Healthcare', desc: 'NGOs and government health programs deploy our telemedicine platform to connect rural patients with specialist doctors in metro cities, enabling video consultations with digital prescriptions and follow-up scheduling.' }
        ]
    },
    'real-estate': {
        title: 'Real Estate Ecosystems',
        subTitle: 'Real Estate',
        mainKeyword: 'Real Estate CRM Software India',
        keywords: ['Property Management Software', 'Real Estate CRM India', 'Rental Management System', 'Property Listing Platform', 'Real Estate Automation Software', 'Broker Management System', 'Tenant Management Software', 'Property ERP System', 'Real Estate SaaS India', 'Cloud Property Management'],
        desc: 'Kiaan Technology builds powerful real estate CRM software in India for property developers, agents, landlords, and rental businesses. Our cloud-based property management solutions automate listings, tenant relations, rent collection, and financial reporting. From individual landlords in Indore to large property groups across India, we deliver enterprise-grade real estate automation software with AI-powered lead management and RERA-compliant data handling.',
        features: [
            {
                title: 'Property Orchestration',
                desc: 'Manage thousands of listings and units from a single, cloud-based command center with real-time analytics.',
                icon: 'Layout',
                items: ['Unit Tracking', 'Maintenance Hub', 'Asset Analytics', 'Global Listing Sync']
            },
            {
                title: 'Financial Management',
                desc: 'Automate rent collection, utility billing, and financial reporting across your entire property portfolio.',
                icon: 'BarChart3',
                items: ['Automated Rent', 'E-Invoicing', 'Expense Shield', 'Profit Forecasting']
            },
            {
                title: 'Tenant Experience',
                desc: 'Branded mobile portals for tenants to pay rent, book amenities, and report issues seamlessly.',
                icon: 'Users',
                items: ['Mobile Rent Pay', 'Amenity Booking', 'Support Tickets', 'Digital Contracts']
            }
        ],
        stats: [
            { val: '10x', label: 'BOOKING SPEED' },
            { val: '15%', label: 'YIELD INCREASE' },
            { val: '100%', label: 'PAPERLESS' },
            { val: 'Elite', label: 'UX RATING' }
        ],
        colorClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500',
        metaTitle: 'Real Estate Software Development Company in India | Kiaan Technology',
        metaDescription: 'Custom real estate software development in India. Build property management, rental automation, CRM & listing platforms for developers and agents. Get a demo.',
        faqs: [
            {
                question: 'What is real estate CRM software?',
                answer: 'Real estate CRM software is a platform that helps property developers, brokers, and agencies manage leads, client interactions, property listings, and sales pipelines. It automates follow-ups, tracks deal stages, and provides analytics to close deals faster.'
            },
            {
                question: 'Can it manage rental properties?',
                answer: 'Yes. Our platform includes comprehensive rental management features — automated rent collection, lease management, tenant screening, maintenance request handling, and financial reporting for landlords and property managers.'
            },
            {
                question: 'Is it suitable for property brokers in India?',
                answer: 'Absolutely. Our real estate CRM is built for the Indian market with RERA compliance, GST-compliant invoicing, integration with property portals like 99acres and MagicBricks, and multi-language support.'
            },
            {
                question: 'Does it support multi-city property portfolios?',
                answer: 'Yes. Our enterprise solutions support multi-location property management with centralized dashboards, consolidated reporting, and role-based access for teams across different cities.'
            },
            {
                question: 'How much does real estate software development cost?',
                answer: 'Costs vary based on features and scale. Basic property management starts from ₹2-5 lakhs, while full enterprise platforms with CRM, analytics, and multi-location support can range from ₹15-50 lakhs. Contact us for a customized quote.'
            }
        ],
        longTailKeywords: ['best real estate CRM in India', 'property management software for rental business', 'real estate automation software Indore', 'cloud property tracking system India', 'RERA compliant property software India', 'tenant management system for landlords India'],
        locationKeywords: ['real estate software India', 'property CRM Indore', 'real estate automation India', 'property management system Madhya Pradesh', 'PropTech company India'],
        internalLinks: [
            { label: 'CRM Software', href: '/products/crm-software' },
            { label: 'HRM Software', href: '/products/hrm-software' },
            { label: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure' }
        ],
        painPoints: [
            { title: 'Lead Leakage from Portals', desc: 'Property inquiries from 99acres, MagicBricks, and walk-ins get lost in spreadsheets, causing missed follow-ups and lost deals worth lakhs.' },
            { title: 'Manual Rent Collection', desc: 'Chasing tenants for monthly rent via phone calls and bank transfers creates cash flow gaps, accounting errors, and strained landlord-tenant relationships.' },
            { title: 'RERA Compliance Burden', desc: 'Manually tracking project timelines, buyer agreements, and compliance documents for RERA reporting is time-consuming and error-prone for developers.' },
            { title: 'No Portfolio Visibility', desc: 'Property owners managing 50+ units across cities lack a single dashboard to track occupancy, maintenance, financial performance, and tenant lifecycle.' },
            { title: 'Slow Deal Closures', desc: 'Without automated document generation, e-signatures, and payment tracking, property transactions take weeks instead of days.' }
        ],
        useCases: [
            { title: 'Property Developer CRM', desc: 'A leading developer in Pune uses our real estate CRM to capture leads from 8+ property portals, auto-assign to sales agents by location, track site visits, and manage the complete booking-to-possession lifecycle.' },
            { title: 'Rental Portfolio Management', desc: 'A landlord managing 200+ residential units across Mumbai and Indore uses our platform for automated rent invoicing, maintenance request tracking, lease renewal alerts, and consolidated P&L reporting.' },
            { title: 'Broker Network Platform', desc: 'A brokerage firm with 50 agents deployed our multi-user CRM to manage shared listings, track commission splits, automate client follow-ups, and generate RERA-compliant documentation.' },
            { title: 'Society & Apartment Management', desc: 'Housing societies use our community management module for maintenance billing, visitor management, amenity booking, and transparent financial reporting to all members.' }
        ]
    },
    'automotive': {
        title: 'Automotive Digitalization',
        subTitle: 'Automotive',
        mainKeyword: 'Vehicle Rental Management Software India',
        keywords: ['Car Rental Software', 'Fleet Rental System', 'Vehicle Tracking Software', 'Automotive ERP India', 'Rental Booking Software', 'Fleet Management SaaS', 'Car Hire Management System'],
        desc: 'Kiaan Technology develops cutting-edge vehicle rental management software in India for car rental companies, fleet operators, dealerships, and automotive service centers. Our cloud-based fleet management SaaS platforms feature real-time GPS tracking, IoT-powered predictive maintenance, dynamic pricing engines, and automated booking systems. From small rental operators in Indore to enterprise fleet companies across India, we deliver scalable automotive software with AI-driven analytics.',
        features: [
            {
                title: 'Rental Command',
                desc: 'High-speed booking engines for car rentals with dynamic pricing, KYC verification, and damage reporting.',
                icon: 'Rocket',
                items: ['Instant Booking', 'Dynamic Pricing', 'KYC Verification', 'Damage Reports']
            },
            {
                title: 'Fleet Intelligence',
                desc: 'IoT-integrated GPS tracking and predictive maintenance scheduling to maximize fleet uptime.',
                icon: 'Zap',
                items: ['Real-time GPS', 'Fuel Monitoring', 'Safety Alerts', 'Predictive Repair']
            },
            {
                title: 'Service Flow',
                desc: 'Digital workshop management connecting customers, mechanics, and parts inventory seamlessly.',
                icon: 'Activity',
                items: ['Job Cards', 'Inventory Sync', 'Customer CRM', 'Service Billing']
            }
        ],
        stats: [
            { val: '25%', label: 'FUEL SAVINGS' },
            { val: '99%', label: 'FLEET UPTIME' },
            { val: '3s', label: 'BOOKING TIME' },
            { val: 'Global', label: 'SCALABILITY' }
        ],
        colorClass: 'text-red-500',
        bgClass: 'bg-red-500',
        metaTitle: 'Automotive Software Development Company in India | Kiaan Technology',
        metaDescription: 'Custom automotive & rental software development in India. Fleet management, vehicle rental systems, workshop ERP & IoT tracking solutions. Book a demo today.',
        faqs: [
            {
                question: 'How does rental software work?',
                answer: 'Our vehicle rental management software automates the entire rental lifecycle — from online booking, KYC verification, and vehicle assignment to billing, damage reporting, and return processing. It includes dynamic pricing engines and real-time fleet availability tracking.'
            },
            {
                question: 'Can it track vehicles in real-time?',
                answer: 'Yes. Our fleet management system integrates with GPS hardware and IoT sensors to provide real-time vehicle tracking, fuel monitoring, driver behavior analytics, and predictive maintenance alerts.'
            },
            {
                question: 'Is it suitable for small rental businesses in India?',
                answer: 'Absolutely. Our SaaS-based pricing allows small rental operators with 10-50 vehicles to start with basic booking and billing modules, and scale up to full fleet management as they grow.'
            },
            {
                question: 'Does it integrate with government transport portals?',
                answer: 'Yes. Our platform integrates with Vahan and Sarathi portals for vehicle registration and driver license verification, along with insurance APIs and payment gateways.'
            }
        ],
        longTailKeywords: ['best car rental software in India', 'fleet management software Indore', 'vehicle booking automation system', 'GPS fleet tracking software India', 'workshop management software India'],
        locationKeywords: ['car rental software India', 'fleet system Indore', 'automotive ERP India', 'vehicle tracking software India'],
        internalLinks: [
            { label: 'CRM Software', href: '/products/crm-software' },
            { label: 'HRM Software', href: '/products/hrm-software' },
            { label: 'Logistics Solutions', href: '/solutions/logistics' }
        ],
        painPoints: [
            { title: 'Vehicle Downtime Losses', desc: 'Unplanned breakdowns and reactive maintenance scheduling cause fleet operators to lose 15-20% of potential rental revenue annually.' },
            { title: 'Manual Booking Chaos', desc: 'Phone-based reservations, paper contracts, and manual availability checks lead to double bookings, disputes, and lost revenue.' },
            { title: 'Fleet Blind Spots', desc: 'Without real-time GPS tracking and analytics, fleet managers cannot optimize deployment, identify theft, or monitor driver behavior.' },
            { title: 'Pricing Inflexibility', desc: 'Static pricing models fail to capture surge demand during festivals and weekends, leaving significant revenue on the table.' },
            { title: 'Compliance Overhead', desc: 'Tracking insurance renewals, fitness certificates, and permit documentation across a growing fleet is a manual nightmare.' }
        ],
        useCases: [
            { title: 'Car Rental Platform', desc: 'A self-drive startup uses our platform to manage 500+ vehicles with dynamic pricing, KYC verification, and automated damage assessment.' },
            { title: 'Corporate Fleet Management', desc: 'An enterprise logistics company tracks 2,000 commercial vehicles with GPS monitoring, fuel analytics, and automated compliance alerts.' },
            { title: 'Two-Wheeler Rental', desc: 'Bike rental operators use our mobile-first booking platform with QR-based vehicle unlock and payment processing via UPI.' },
            { title: 'Dealership Service CRM', desc: 'Multi-brand dealerships use our service CRM to manage servicing appointments, spare parts inventory, and warranty claims.' }
        ]
    },
    'retail': {
        title: 'Omnichannel Retail',
        subTitle: 'Retail',
        mainKeyword: 'Retail POS Software India',
        keywords: ['POS Billing Software', 'Inventory Management System', 'Retail ERP India', 'Barcode Billing Software', 'Multi-Store Retail System', 'Retail Automation Platform'],
        desc: 'Kiaan Technology develops high-performance retail POS software in India that unifies the shopping experience across physical stores and digital storefronts. Our cloud-based POS systems, inventory management platforms, and omnichannel retail solutions help businesses sell smarter with GST-compliant billing, real-time stock tracking, and automated reordering. From single-store owners in Indore to multi-chain retailers across India, we deliver enterprise-grade retail automation software.',
        features: [
            {
                title: 'Smart Checkout',
                desc: 'Cloud POS systems with offline mode, GST-compliant billing, barcode scanning, and mobile checkout.',
                icon: 'Smartphone',
                items: ['Cloud POS', 'Offline Mode', 'Global Tax Engine', 'Mobile Checkout']
            },
            {
                title: 'Inventory Brain',
                desc: 'Real-time stock tracking across multiple warehouses and stores with AI-powered automated reordering.',
                icon: 'Database',
                items: ['Auto-Reorder', 'Store Sync', 'Warehouse Logic', 'Stock Analytics']
            },
            {
                title: 'Customer Loyalty',
                desc: 'Integrated CRM and loyalty programs with smart coupons and targeted marketing campaigns.',
                icon: 'Users',
                items: ['Point System', 'Smart Coupons', 'Purchase History', 'Blast Marketing']
            }
        ],
        stats: [
            { val: '200ms', label: 'PAYMENT SPEED' },
            { val: '100%', label: 'STOCK ACCURACY' },
            { val: '40%', label: 'SALES LIFT' },
            { val: '24/7', label: 'STORE SYNC' }
        ],
        colorClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500',
        metaTitle: 'Retail POS Software Development Company in India | Kiaan Technology',
        metaDescription: 'Custom retail POS & inventory management software in India. Cloud POS, multi-store sync, retail ERP & omnichannel solutions. Book your free demo.',
        faqs: [
            {
                question: 'Is POS software GST compliant?',
                answer: 'Yes. Our retail POS software is fully GST-compliant with automated tax calculations, e-invoicing support, GSTIN validation, and seamless filing-ready reports for Indian businesses.'
            },
            {
                question: 'Can it manage multiple stores?',
                answer: 'Absolutely. Our multi-store retail system provides centralized inventory management, stock transfers between locations, consolidated reporting, and role-based access for each store.'
            },
            {
                question: 'Does it work offline?',
                answer: 'Yes. Our cloud POS operates in offline mode with automatic data sync when connectivity is restored, ensuring zero downtime for your billing operations.'
            },
            {
                question: 'Can it integrate with my e-commerce store?',
                answer: 'Yes. We support integrations with Shopify, WooCommerce, and custom e-commerce platforms for unified omnichannel inventory and order management.'
            }
        ],
        longTailKeywords: ['best POS software for small retail shop India', 'inventory tracking software Indore', 'cloud POS billing system India', 'GST billing software for retail India', 'multi-store inventory management system'],
        locationKeywords: ['POS software India', 'retail software Indore', 'billing software India', 'retail ERP Indore'],
        internalLinks: [
            { label: 'CRM Software', href: '/products/crm-software' },
            { label: 'HRM Software', href: '/products/hrm-software' }
        ],
        painPoints: [
            { title: 'Disconnected Sales Channels', desc: 'Managing offline stores and e-commerce platforms separately leads to inventory mismatches and poor customer experience.' },
            { title: 'Stockouts & Overstocking', desc: 'Manual inventory tracking causes out-of-stock situations for popular items and dead capital tied up in slow-moving stock.' },
            { title: 'Slow Checkout Process', desc: 'Clunky legacy POS systems during peak hours lead to long queues, frustrated customers, and abandoned purchases.' },
            { title: 'No Customer Intelligence', desc: 'Inability to track purchase history and implement targeted loyalty programs results in low customer retention rates.' },
            { title: 'Complex GST Compliance', desc: 'Calculating split taxes, generating e-invoices, and preparing monthly GST reports manually is highly prone to errors.' }
        ],
        useCases: [
            { title: 'Multi-Brand Retail Chain', desc: 'A 50-store fashion retailer deployed our omnichannel POS to sync store inventory with their Shopify website, enabling click-and-collect.' },
            { title: 'Supermarket Automation', desc: 'A regional supermarket chain uses our barcode billing software for rapid high-volume checkout and automated PO generation.' },
            { title: 'Electronics Dealership', desc: 'Appliance stores use our serial-number tracking inventory to manage warranties, handle complex tax slabs, and run EMI schemes.' },
            { title: 'Pharmacy Point of Sale', desc: 'Medical stores utilize our POS for expiry date tracking, batch management, and automated regulatory compliance reporting.' }
        ]
    },
    'logistics': {
        title: 'Logistics Orchestration',
        subTitle: 'Logistics',
        mainKeyword: 'Fleet Management Software India',
        keywords: ['Logistics Management System', 'Transport ERP Software', 'GPS Fleet Tracking System', 'Vehicle Tracking Software India', 'Route Optimization Software'],
        desc: 'Kiaan Technology builds intelligent fleet management software in India that solves the last-mile challenge with AI-powered route optimization, real-time GPS tracking, and warehouse automation. Our cloud-based logistics management systems help transport companies, courier services, and supply chain operators across India streamline operations. From small courier companies in Indore to enterprise logistics networks, we deliver scalable transport ERP solutions.',
        features: [
            {
                title: 'Route Optimization',
                desc: 'AI-driven algorithms optimizing routes for fuel efficiency, traffic avoidance, and delivery windows.',
                icon: 'Brain',
                items: ['Traffic Logic', 'Fuel Math', 'Driver Scheduling', 'Load Balancing']
            },
            {
                title: 'Visibility Core',
                desc: 'Real-time GPS tracking with automated SMS/WhatsApp notifications and proof of delivery.',
                icon: 'Globe',
                items: ['Uber-like Tracking', 'SMS Alerts', 'POD (Proof of Delivery)', 'ETAs']
            },
            {
                title: 'Warehouse 360',
                desc: 'Intelligent warehouse management with space optimization, pick-and-pack workflows, and cross-docking.',
                icon: 'Layout',
                items: ['Space Logic', 'Pick & Pack', 'Returns Handling', 'Cross-Docking']
            }
        ],
        stats: [
            { val: '20%', label: 'ROUTE SAVINGS' },
            { val: '99.8%', label: 'ON-TIME RATE' },
            { val: 'Real', label: 'TIME SYNC' },
            { val: 'Zero', label: 'LOST PARCELS' }
        ],
        colorClass: 'text-red-500',
        bgClass: 'bg-red-500',
        metaTitle: 'Logistics Software Development Company in India | Kiaan Technology',
        metaDescription: 'Custom logistics & transport management software in India. Fleet tracking, route optimization, warehouse management & delivery solutions. Book a demo.',
        faqs: [
            {
                question: 'How does GPS fleet tracking work?',
                answer: 'Our fleet tracking system integrates with GPS hardware installed in vehicles to provide real-time location data, route history, fuel consumption metrics, and driver behavior analytics — all accessible from a centralized cloud dashboard.'
            },
            {
                question: 'Can it optimize delivery routes?',
                answer: 'Yes. Our AI-powered route optimization engine considers traffic conditions, delivery windows, fuel costs, load capacity, and driver availability to calculate the most efficient delivery routes in real-time.'
            },
            {
                question: 'Does it support warehouse management?',
                answer: 'Yes. Our integrated warehouse management system includes space optimization, pick-and-pack workflows, returns handling, cross-docking, and barcode/RFID scanning for inventory accuracy.'
            },
            {
                question: 'Can customers track their deliveries?',
                answer: 'Absolutely. We provide Uber-like real-time tracking for customers with automated SMS and WhatsApp notifications, ETA updates, and digital proof of delivery.'
            }
        ],
        longTailKeywords: ['best fleet tracking software India', 'logistics automation software Indore', 'route optimization software India', 'warehouse management system India', 'courier management software India'],
        locationKeywords: ['fleet management India', 'transport software Indore', 'logistics ERP India', 'delivery tracking system India'],
        internalLinks: [
            { label: 'CRM Software', href: '/products/crm-software' },
            { label: 'HRM Software', href: '/products/hrm-software' },
            { label: 'Automotive Solutions', href: '/solutions/automotive' }
        ],
        painPoints: [
            { title: 'Inefficient Route Planning', desc: 'Manual dispatching leads to overlapping routes, excessive fuel consumption, and missed delivery windows.' },
            { title: 'Lack of Real-Time Visibility', desc: 'Customers and managers calling drivers for updates causes operational delays and poor customer experience.' },
            { title: 'Warehouse Disorganization', desc: 'Poor inventory placement and manual pick-and-pack workflows drastically reduce warehouse efficiency and throughput.' },
            { title: 'Driver Utilization Issues', desc: 'Failure to balance loads and track driver hours results in compliance violations and increased overtime costs.' },
            { title: 'Lost or Damaged Goods', desc: 'Without digital proof of delivery and continuous tracking, handling disputes for lost or damaged items becomes impossible.' }
        ],
        useCases: [
            { title: 'Last-Mile Delivery Network', desc: 'A courier company operating across 5 states uses our route optimization to reduce fuel costs by 20% while increasing delivery density.' },
            { title: 'Cold-Chain Transport', desc: 'Pharma logistics providers use our IoT-enabled tracking to monitor temperature conditions in real-time alongside GPS location.' },
            { title: 'E-Commerce Fulfillment', desc: 'D2C brands utilize our warehouse management module to automate picking routes and seamlessly integrate with multiple carrier APIs.' },
            { title: 'Enterprise Freight Tracking', desc: 'Heavy load transporters use our ERP to manage driver scheduling, vehicle maintenance, and automated invoicing based on distance.' }
        ]
    },
    'education': {
        title: 'Educational Innovation',
        subTitle: 'Education',
        mainKeyword: 'School Management Software India',
        keywords: ['School ERP System', 'LMS Platform India', 'Student Management System', 'Online Learning Software', 'Attendance System School'],
        desc: 'Kiaan Technology builds comprehensive school management software in India that digitizes every aspect of educational institutions. Our NEP 2020-aligned LMS platforms, school ERP systems, and virtual classroom solutions connect teachers, students, and parents seamlessly. From coaching centers in Indore to university networks across India, we deliver AI-powered education software with multi-language support and affordable SaaS pricing.',
        features: [
            {
                title: 'Virtual Campus',
                desc: 'Feature-rich LMS platforms with course builders, video portals, quiz engines, and progress analytics.',
                icon: 'Palette',
                items: ['Course Builder', 'Video Portal', 'Quiz Engine', 'Assignment Tracking']
            },
            {
                title: 'Academic ERP',
                desc: 'Complete school administration — admissions, attendance, fee management, timetable, and parent portals.',
                icon: 'Database',
                items: ['Student Records', 'Finance Hub', 'Parent Portal', 'Staff HR']
            },
            {
                title: 'Secure Assessment',
                desc: 'Proctored online exams with auto-grading, question banks, e-certificates, and performance BI.',
                icon: 'ShieldCheck',
                items: ['Proctored Exams', 'Auto-Grading', 'E-Certificates', 'Performance BI']
            }
        ],
        stats: [
            { val: '500K+', label: 'STUDENTS SERVED' },
            { val: '100%', label: 'DIGITAL SYNC' },
            { val: '3x', label: 'LEARNING SPEED' },
            { val: 'AA', label: 'ACCESSIBILITY' }
        ],
        colorClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500',
        metaTitle: 'Education Software Development Company in India | Kiaan Technology',
        metaDescription: 'Custom education software development in India. LMS, school ERP, virtual classroom, exam management & student portals. Book your free demo today.',
        faqs: [
            {
                question: 'What features does the school ERP include?',
                answer: 'Our school management software includes admissions management, attendance tracking, fee collection, timetable scheduling, exam management, parent communication portals, staff HR, library management, and comprehensive reporting dashboards.'
            },
            {
                question: 'Is it suitable for coaching institutes?',
                answer: 'Yes. Our LMS platform is designed for coaching centers, tuition classes, and competitive exam preparation institutes with features like course management, batch scheduling, student progress tracking, and online test series.'
            },
            {
                question: 'Does it support online classes?',
                answer: 'Yes. Our virtual classroom module supports HD live classes with video conferencing integration (Zoom, Google Meet), interactive whiteboards, screen sharing, recording, and attendance tracking.'
            },
            {
                question: 'Is it aligned with NEP 2020?',
                answer: 'Yes. Our education software is designed to support NEP 2020 requirements including competency-based assessments, multi-disciplinary learning pathways, and outcome-based education frameworks.'
            }
        ],
        longTailKeywords: ['best school ERP software India', 'LMS platform for coaching institute Indore', 'student management system India', 'online exam software India', 'attendance management system for schools'],
        locationKeywords: ['school software India', 'education ERP Indore', 'LMS platform India', 'coaching software Indore'],
        internalLinks: [
            { label: 'CRM Software', href: '/products/crm-software' },
            { label: 'HRM Software', href: '/products/hrm-software' },
            { label: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure' }
        ],
        painPoints: [
            { title: 'Fragmented Administration', desc: 'Using different software for admissions, fees, and attendance creates data silos and massive administrative overhead.' },
            { title: 'Poor Parent Communication', desc: 'Relying on paper diaries or WhatsApp groups for updates results in miscommunication and low parent engagement.' },
            { title: 'Assessment Bottlenecks', desc: 'Conducting and grading offline exams takes weeks, delaying feedback and consuming valuable teaching time.' },
            { title: 'Legacy E-Learning Tools', desc: 'Basic video call setups lack proper course structuring, assignment tracking, and student progress analytics.' },
            { title: 'Fee Collection Delays', desc: 'Manual fee collection and receipt generation lead to high defaulting rates and accounting errors.' }
        ],
        useCases: [
            { title: 'K-12 School Network', desc: 'A group of 15 premium schools uses our ERP to centralize admissions, synchronize timetables, and provide a unified parent app.' },
            { title: 'Competitive Coaching Center', desc: 'NEET/JEE institutes deploy our proctored exam software to conduct mock tests for 10,000+ students simultaneously.' },
            { title: 'Corporate Training Academy', desc: 'Enterprises use our LMS to onboard employees, track compliance training, and issue digital certificates automatically.' },
            { title: 'University Campus Management', desc: 'Higher education institutions utilize our platform for choice-based credit system (CBCS) management and alumni networking.' }
        ]
    },
    'finance': {
        title: 'Financial Engineering',
        subTitle: 'Finance',
        mainKeyword: 'Accounting & Business Management Software India',
        keywords: ['GST Billing Software', 'Financial Management System', 'Payroll Integration Software', 'Accounting ERP India'],
        desc: 'Kiaan Technology develops secure accounting and business management software in India with enterprise-grade financial platforms, GST-compliant billing systems, and automated payroll solutions. Our fintech applications are built with PCI-DSS compliance, bank-level encryption, and AI-powered fraud detection. From small businesses in Indore to enterprise finance operations across India, we deliver scalable financial management systems with role-based dashboards and real-time reporting.',
        features: [
            {
                title: 'Payment Nexus',
                desc: 'PCI-DSS compliant payment processing with multi-currency support and AI-powered fraud prevention.',
                icon: 'Lock',
                items: ['PCI-DSS Sync', 'Multi-Gate Payment', 'Fraud Shield', 'Instant Payouts']
            },
            {
                title: 'Corporate Finance',
                desc: 'GST-compliant accounting with enterprise-grade budgeting, P&L reporting, and tax automation.',
                icon: 'BarChart3',
                items: ['P&L Engine', 'Tax Calculator', 'Audit Trails', 'Cashflow BI']
            },
            {
                title: 'Secure Ledger',
                desc: 'Immutable transaction records with real-time reconciliations and bank-grade encryption.',
                icon: 'ShieldCheck',
                items: ['Zero-Err Ledger', 'Real-time Recon', 'Bank-Grade Sec', 'Compliance Vault']
            }
        ],
        stats: [
            { val: '$10B+', label: 'PROCESSED VOL' },
            { val: 'Zero', label: 'FRAUD CASES' },
            { val: '100ms', label: 'TRANS LATENCY' },
            { val: '99.9%', label: 'UPTIME' }
        ],
        colorClass: 'text-red-500',
        bgClass: 'bg-red-500',
        metaTitle: 'Finance Software Development Company in India | Kiaan Technology',
        metaDescription: 'Custom finance & accounting software development in India. Payroll, invoicing, fintech platforms & billing automation. Enterprise-grade security. Book a demo.',
        faqs: [
            {
                question: 'Is your accounting software GST compliant?',
                answer: 'Yes. Our financial management software is fully GST-compliant with automated tax calculations, e-invoicing, GSTIN validation, HSN/SAC code mapping, and filing-ready GSTR reports for Indian businesses.'
            },
            {
                question: 'Does it include payroll management?',
                answer: 'Yes. Our integrated payroll module handles automated salary processing, TDS deductions, PF/ESI compliance, attendance integration, and employee self-service portals.'
            },
            {
                question: 'How secure are financial transactions?',
                answer: 'We implement military-grade AES-256 encryption, PCI-DSS compliance, multi-factor authentication, automated audit trails, and RBI-aligned security protocols to ensure complete transaction security.'
            },
            {
                question: 'Can it integrate with existing banking and accounting tools?',
                answer: 'Absolutely. Our platform integrates with banking APIs, Tally, QuickBooks, GST portal, payment gateways (Razorpay, PayU), and HR management systems for seamless financial operations.'
            }
        ],
        longTailKeywords: ['best accounting software India', 'GST billing software Indore', 'payroll management system India', 'fintech development company India', 'automated invoicing software India'],
        locationKeywords: ['finance software India', 'accounting ERP Indore', 'GST software India', 'fintech company Indore'],
        internalLinks: [
            { label: 'CRM Software', href: '/products/crm-software' },
            { label: 'HRM Software', href: '/products/hrm-software' }
        ],
        painPoints: [
            { title: 'Manual Tax Filing', desc: 'Preparing GST returns (GSTR-1, GSTR-3B) manually using spreadsheets results in mismatch errors and regulatory penalties.' },
            { title: 'Delayed Invoicing', desc: 'Slow manual invoice generation extends the accounts receivable cycle and disrupts business cash flow.' },
            { title: 'Payroll Compliance Risks', desc: 'Calculating complex PF, ESI, and TDS deductions without an automated system leads to severe legal and financial liabilities.' },
            { title: 'Fragmented Financial Data', desc: 'Using disjointed tools for bookkeeping, inventory, and point-of-sale prevents real-time profit and loss analysis.' },
            { title: 'Vulnerable Data Processing', desc: 'Storing sensitive financial records on local unencrypted drives exposes businesses to ransomware and critical data loss.' }
        ],
        useCases: [
            { title: 'Enterprise Financial Hub', desc: 'A mid-sized manufacturing firm uses our ERP to unify procurement, inventory, and GST accounting across 4 regional factories.' },
            { title: 'SaaS Billing Automation', desc: 'Software startups integrate our subscription billing engine to handle tiered pricing, proration, and automated recurring payments.' },
            { title: 'Multi-Branch Payroll', desc: 'A retail chain with 500+ employees automates biometric attendance syncing, salary processing, and tax filing through our payroll module.' },
            { title: 'B2B Trading Automation', desc: 'Wholesale distributors use our platform to generate instant E-Way bills and compliant E-Invoices directly from their sales orders.' }
        ]
    },
    'hospitality': {
        title: 'Hospitality Architecture',
        subTitle: 'Hospitality',
        mainKeyword: 'Hotel Management Software India',
        keywords: ['Hotel Booking Software', 'Hospitality ERP System', 'Room Management System', 'Hotel POS Software'],
        desc: 'Kiaan Technology builds intelligent hotel management software in India for hotels, resorts, and restaurant chains. Our cloud-based hospitality platforms include property management systems (PMS), booking engines, restaurant POS, and guest experience portals. From boutique hotels in Indore to luxury resort chains across India, we deliver AI-powered hospitality solutions with OTA integration and dynamic revenue management.',
        features: [
            {
                title: 'Unified Booking',
                desc: 'Direct booking engines synced with OTAs (MakeMyTrip, Goibibo, Booking.com) and dynamic pricing.',
                icon: 'Globe',
                items: ['Direct Booking', 'OTA Sync', 'Dynamic Pricing', 'Group Booking']
            },
            {
                title: 'Experience Command',
                desc: 'Mobile guest portals for contactless check-in, digital concierge, and room service ordering.',
                icon: 'Smartphone',
                items: ['Mobile Key', 'Digital Concierge', 'Bill View', 'Support Chat']
            },
            {
                title: 'Restaurant Core',
                desc: 'High-performance restaurant POS with KDS integration, table management, and menu engineering.',
                icon: 'Activity',
                items: ['Table Management', 'KDS (Kitchen System)', 'Inventory Sync', 'Menu Logic']
            }
        ],
        stats: [
            { val: '2x', label: 'DIRECT BOOKINGS' },
            { val: '30%', label: 'AOV INCREASE' },
            { val: 'Real', label: 'TIME SYNC' },
            { val: 'Elite', label: 'UX RATING' }
        ],
        colorClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500',
        metaTitle: 'Hospitality Software Development Company in India | Kiaan Technology',
        metaDescription: 'Custom hotel & restaurant software in India. PMS, restaurant POS, booking engines & guest portals for hospitality businesses. Book your demo.',
        faqs: [
            {
                question: 'Does the booking engine sync with OTAs?',
                answer: 'Yes. Our booking engine integrates with major OTAs including MakeMyTrip, Goibibo, Booking.com, and Expedia via channel managers, enabling real-time rate and availability sync across all platforms.'
            },
            {
                question: 'Can it manage multiple hotel properties?',
                answer: 'Absolutely. Our enterprise PMS supports multi-property management with centralized dashboards, consolidated reporting, revenue management, and role-based access across locations.'
            },
            {
                question: 'Does the restaurant POS support kitchen display systems?',
                answer: 'Yes. Our restaurant POS integrates with Kitchen Display Systems (KDS), supports table management, split billing, menu engineering, and real-time inventory tracking for food and beverage operations.'
            },
            {
                question: 'Is it FSSAI compliant for restaurants?',
                answer: 'Yes. Our restaurant management software supports FSSAI compliance requirements including food safety tracking, expiry management, supplier documentation, and audit-ready reporting.'
            }
        ],
        longTailKeywords: ['best hotel software India', 'cloud hotel management system Indore', 'restaurant POS software India', 'hotel booking engine development India'],
        locationKeywords: ['hotel software India', 'hospitality ERP Indore', 'restaurant software India', 'hotel PMS Indore'],
        internalLinks: [
            { label: 'CRM Software', href: '/products/crm-software' },
            { label: 'HRM Software', href: '/products/hrm-software' }
        ],
        painPoints: [
            { title: 'OTA Commission Leakage', desc: 'Over-reliance on third-party aggregators (MakeMyTrip, Booking.com) results in massive commission payouts and lost direct revenue.' },
            { title: 'Front Desk Inefficiency', desc: 'Manual check-ins, paper registrations, and uncoordinated housekeeping lead to long guest waits and poor reviews.' },
            { title: 'Inventory Sinkholes', desc: 'Disconnected restaurant POS and hotel PMS systems cause pilferage, food waste, and inaccurate F&B billing.' },
            { title: 'Static Pricing Decisions', desc: 'Failing to adjust room rates dynamically based on local events, seasonality, and competitor pricing leads to suboptimal RevPAR.' },
            { title: 'Fragmented Guest Experience', desc: 'Lack of digital concierge services and mobile ordering options makes the hotel feel outdated to modern travelers.' }
        ],
        useCases: [
            { title: 'Luxury Resort Chain', desc: 'A 5-star resort group deployed our PMS and mobile guest app, enabling zero-contact check-in, digital room keys, and poolside F&B ordering from guest devices.' },
            { title: 'Boutique Hotel Network', desc: 'Independent boutique hotels use our integrated booking engine to drive direct bookings via social media, increasing profit margins by 18%.' },
            { title: 'Multi-Outlet Restaurant System', desc: 'A nationwide restaurant chain uses our Cloud POS and KDS to synchronize orders across 50+ kitchens with centralized recipe management.' },
            { title: 'Corporate Stay Management', desc: 'Business hotels utilize our corporate billing module to automate GST invoicing, manage company credit limits, and sync with travel management companies.' }
        ]
    },
    'professional': {
        title: 'Professional Service Logic',
        subTitle: 'Services',
        mainKeyword: 'Professional Services Automation Software India',
        keywords: ['Consulting Management Software', 'Legal Case Management System', 'Service Business CRM', 'Professional ERP Platform'],
        desc: 'Kiaan Technology develops professional services automation software in India for law firms, consulting companies, marketing agencies, and service businesses. Our cloud-based management platforms automate client portals, billing, project management, and workflow operations. From solo practitioners in Indore to enterprise consulting firms across India, we deliver AI-powered professional services CRM and ERP solutions with precision time tracking and automated invoicing.',
        features: [
            {
                title: 'Client Operations',
                desc: 'Centralized client portals with case tracking, document management, and SLA monitoring dashboards.',
                icon: 'Users',
                items: ['Case Tracking', 'Client Portal', 'Document Vault', 'SLA Shield']
            },
            {
                title: 'Billing Mastery',
                desc: 'Automated time-tracking with precision invoicing tailored for billable hours and retainer management.',
                icon: 'BarChart3',
                items: ['Automated Billing', 'Time Capture', 'Project Budget', 'Revenue BI']
            },
            {
                title: 'Workflow Engine',
                desc: 'AI-powered project management with resource allocation, approval workflows, and deadline tracking.',
                icon: 'Layout',
                items: ['Resource Logic', 'Task Automator', 'Approval Flow', 'Knowledge Base']
            }
        ],
        stats: [
            { val: '100%', label: 'BILLING ACCURACY' },
            { val: '25%', label: 'MARGIN LIFT' },
            { val: 'Elite', label: 'CLIENT PX' },
            { val: 'Global', label: 'ACCESS' }
        ],
        colorClass: 'text-red-500',
        bgClass: 'bg-red-500',
        metaTitle: 'Professional Services Software Development in India | Kiaan Technology',
        metaDescription: 'Custom software for law firms, consultancies & agencies in India. Client portals, billing automation, project management & CRM. Book your demo.',
        faqs: [
            {
                question: 'Is it suitable for law firms?',
                answer: 'Yes. Our legal case management system includes matter tracking, document management, court date scheduling, client communication logs, and time-based billing specifically designed for Indian legal practices.'
            },
            {
                question: 'Does it support time-based billing?',
                answer: 'Absolutely. Our precision time tracking system captures billable hours automatically, generates invoices based on hourly rates or retainer agreements, and provides comprehensive revenue analytics.'
            },
            {
                question: 'Can consulting firms use it for project management?',
                answer: 'Yes. Our professional ERP includes project management with resource allocation, milestone tracking, budget monitoring, approval workflows, and client-facing progress dashboards.'
            },
            {
                question: 'Does it support client portals?',
                answer: 'Yes. We build branded client portals where customers can view project status, access documents, communicate with their account team, and approve deliverables — all in a secure, role-based environment.'
            }
        ],
        longTailKeywords: ['best consulting software India', 'legal automation software Indore', 'professional services CRM India', 'law firm management software India', 'agency billing software India'],
        locationKeywords: ['professional services software India', 'consulting CRM Indore', 'legal software India', 'agency ERP Indore'],
        internalLinks: [
            { label: 'CRM Software', href: '/products/crm-software' },
            { label: 'HRM Software', href: '/products/hrm-software' }
        ],
        painPoints: [
            { title: 'Lost Billable Time', desc: 'Professionals relying on memory or spreadsheets to track time lose up to 20% of billable hours every week.' },
            { title: 'Fragmented Client Communication', desc: 'Managing case files, deliverables, and approvals across endless email threads creates confusion and delays.' },
            { title: 'Unpredictable Cash Flow', desc: 'Manual invoice generation, lack of retainer tracking, and follow-up delays severely impact agency and firm liquidity.' },
            { title: 'Resource Misallocation', desc: 'Without centralized project tracking, some staff are overwhelmed while others are underutilized, hurting overall profitability.' },
            { title: 'Lack of Profitability Insight', desc: 'Firms struggle to identify which clients, project types, or practice areas are actually generating profit versus just revenue.' }
        ],
        useCases: [
            { title: 'Corporate Law Firm', desc: 'A 100-lawyer firm uses our legal practice management software for matter tracking, court date alerts, conflict checking, and precision time billing.' },
            { title: 'Global Consulting Agency', desc: 'Management consultants deploy our PSA platform to track project margins, manage multi-currency retainers, and forecast resource utilization globally.' },
            { title: 'Digital Marketing Agency', desc: 'A full-service marketing agency utilizes our workflow engine to manage creative approvals via client portals and auto-bill based on milestone completion.' },
            { title: 'Accounting & Audit Firm', desc: 'CA firms use our secure document vault and task management system to handle hundreds of concurrent tax filings and audit deadlines efficiently.' }
        ]
    },
    'cloud-infrastructure': {
        title: 'Cloud Native Infrastructure',
        subTitle: 'Cloud Solutions',
        mainKeyword: 'SCALABLE CLOUD',
        keywords: ['KUBERNETES', 'AWS/AZURE', 'SERVERLESS', 'DEV OPS'],
        desc: 'Architecting the backbone of modern digital enterprises. We build resilient, auto-scaling cloud infrastructures that handle millions of requests with zero downtime.',
        features: [
            {
                title: 'Auto-Scaling Core',
                desc: 'Dynamic resource allocation that grows with your traffic demand.',
                icon: 'Zap',
                items: ['Horizontal Scaling', 'Load Balancing', 'Microservices', 'Edge Delivery']
            },
            {
                title: 'DevOps Automation',
                desc: 'Streamlined CI/CD pipelines that move code to production in minutes, not days.',
                icon: 'Terminal',
                items: ['Jenkins/GitHub Actions', 'Docker/K8s', 'Infrastructure as Code', 'Monitoring']
            },
            {
                title: 'Security & Compliance',
                desc: 'Hardened cloud environments with automated threat detection and compliance reporting.',
                icon: 'ShieldCheck',
                items: ['IAM Policies', 'Network Isolation', 'Data Encryption', 'SOC2/HIPAA Sync']
            }
        ],
        stats: [
            { val: '99.99%', label: 'UPTIME' },
            { val: '10ms', label: 'LATENCY' },
            { val: 'Zero', label: 'DOWNTIME' },
            { val: 'Global', label: 'REACH' }
        ],
        colorClass: 'text-yellow-500',
        bgClass: 'bg-yellow-500'
    },
    'legacy-modernization': {
        title: 'Legacy System Modernization',
        subTitle: 'Modernization',
        mainKeyword: 'REFACTORING',
        keywords: ['CLOUD MIGRATION', 'RE-ARCHITECTING', 'API WRAPPING', 'DATA CLEANUP'],
        desc: 'Breathing new life into aging enterprise systems. We transform monolithic legacy software into modern, cloud-native microservices without business disruption.',
        features: [
            {
                title: 'Monolith to Microservices',
                desc: 'Decoupling complex legacy systems into manageable, independent services.',
                icon: 'Layout',
                items: ['Strangler Pattern', 'API Decoupling', 'Service Mesh', 'Event-Driven']
            },
            {
                title: 'Cloud Migration',
                desc: 'Moving on-premise workloads to the cloud with minimal latency and maximum security.',
                icon: 'Globe',
                items: ['Lift & Shift', 'Re-platforming', 'Database Migration', 'Zero Data Loss']
            },
            {
                title: 'UI/UX Refresh',
                desc: 'Updating legacy interfaces with modern, intuitive, and high-performance frontends.',
                icon: 'Palette',
                items: ['React/Next.js Mix', 'Mobile Responsive', 'Design System Sync', 'Perf Audit']
            }
        ],
        stats: [
            { val: '50%', label: 'COST SAVINGS' },
            { val: '10x', label: 'PERF BOOST' },
            { val: 'Seamless', label: 'MIGRATION' },
            { val: 'New', label: 'LIFE' }
        ],
        colorClass: 'text-red-500',
        bgClass: 'bg-red-500'
    }
};


