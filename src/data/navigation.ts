
export const generateSlug = (item: string) => {
    return item.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[()]/g, '')
        .replace(/&/g, '')
        .replace(/\//g, '-')
        .replace(/--+/g, '-')
        .replace(/^-|-$/g, '');
}

export const saasCategories = [
    {
        title: "Business & Company",
        items: ["CRM Software", "HRM Software", "Payroll Management", "Employee Attendance", "Time Tracking", "Workforce Scheduling", "Leave Management", "HR Compliance Portal"]
    },
    {
        title: "Accounting & Finance",
        items: ["Accounting SaaS", "Invoice & Billing", "Subscription Billing", "Expense Tracking", "Tax Compliance", "Ledger Management", "Payment Collection", "Accounts Payable", "Digital OCR Tool"]
    },
    {
        title: "Sales & Marketing",
        items: ["Lead Management", "Marketing Automation", "Email Campaigns", "WhatsApp Marketing", "Sales Forecasting", "Loyalty Platform", "Proposal Generator", "Appointment Booking", "Feedback & Survey", "Referral Management"]
    },
    {
        title: "Customer Support",
        items: ["Ticket Management", "Live Chat Support", "AI Chatbot Platform", "Call Center SaaS", "Omni-Channel Portal", "SMS Notification", "Self-Service KB", "Dispute Management"]
    },
    {
        title: "Retail & Inventory",
        items: ["POS Software", "Warehouse Management", "Order Management", "Retail ERP", "Supplier Management", "Stock Tracking Tool", "Multi-Store System", "Seller Panel SaaS", "Pricing & Discount"]
    },
    {
        title: "Healthcare & Clinic",
        items: ["Clinic Management", "Hospital System", "EMR/EHR SaaS", "Pharmacy Management", "Laboratory System", "Queue Management", "Telemedicine Platform", "Medical Billing", "Doctor Scheduling", "Patient Portal"]
    },
    {
        title: "Real Estate",
        items: ["Property Management", "Tenant & Rent SaaS", "Contract Management", "Rental Accounting", "Real Estate CRM", "Facility Maintenance", "Property Listings", "Insurance Tracking"]
    },
    {
        title: "Logistics & Fleet",
        items: ["Transport Management", "Fleet Tracking", "Route Optimization", "Delivery Platform", "Courier Software", "Logistics ERP", "Trip Management", "Fuel Monitoring", "Maintenance Tracker"]
    },
    {
        title: "Education",
        items: ["School Management", "Student Information", "Learning Management", "Online Course SaaS", "Coaching Software", "Examination System", "Parent Portal Tool"]
    },
    {
        title: "Construction & Field",
        items: ["Project Management", "Daily Site Reports", "Document Vault", "Workshop Management", "Vehicle Rental SaaS", "Field Service Platform", "Job Scheduling"]
    },
    {
        title: "Legal & Compliance",
        items: ["Audit & Compliance", "Digital Signature", "Role-Based Access", "KYC Verification", "Data Security"]
    },
    {
        title: "AI & Automation",
        items: ["AI Document OCR", "AI Resume Screening", "AI Sales Assistant", "AI Business Analytics", "AI Workflow Tool", "AI CRM Auto-Update"]
    }
]

export const solutionCategories = [
    {
        title: "Real Estate & Property",
        slug: "real-estate",
        href: "/solutions/real-estate",
        items: ["Real Estate Management Software", "Property Management System", "Real Estate CRM Software", "Construction Management Software"]
    },
    {
        title: "Logistics & Transport",
        slug: "logistics",
        href: "/solutions/logistics",
        items: ["Logistics Management Software", "Transport Management System", "Fleet Tracking Software", "Warehouse Management System"]
    },
    {
        title: "Healthcare",
        slug: "healthcare-software",
        href: "/industries/healthcare-software",
        items: ["Clinic Management Software", "Hospital Management System", "EMR Software Development", "Telemedicine Platform Development", "Medical Billing Software"]
    },
    {
        title: "Fintech & Banking",
        slug: "fintech-software",
        href: "/industries/fintech-software",
        items: ["Banking Dashboard Software", "Accounting Software Development", "Algorithmic Trading Software", "Payment Gateway Integration"]
    },
    {
        title: "Retail & POS Tech",
        slug: "retail-technology",
        href: "/industries/retail-technology",
        items: ["Retail POS Software", "Inventory Management System", "Billing Software Custom Development", "Multi-store POS Software"]
    },
    {
        title: "Automotive & Rental",
        slug: "automotive",
        href: "/solutions/automotive",
        items: ["Vehicle Rental Management Software", "Fleet Management System", "Garage Management Software", "Car Rental SaaS System"]
    },
    {
        title: "Education & LMS",
        slug: "education",
        href: "/solutions/education",
        items: ["School Management Software", "Student Management System", "LMS Software Development", "E-learning SaaS Platform"]
    },
    {
        title: "Hospitality & Dining",
        slug: "hospitality",
        href: "/solutions/hospitality",
        items: ["Hotel Management Software", "Restaurant Management System", "Booking & Reservation Software", "Hotel PMS Software"]
    },
    {
        title: "Cloud Infrastructure",
        slug: "cloud-infrastructure",
        href: "/solutions/cloud-infrastructure",
        items: ["AWS Cloud Architecture", "DevOps & CI/CD Automation", "Serverless Microservices", "Zero Downtime Cloud Migration"]
    },
    {
        title: "Legacy Modernization",
        slug: "legacy-modernization",
        href: "/solutions/legacy-modernization",
        items: ["Monolith to Microservices", "Database Architecture Refactor", "API Gateway Modernization", "Cloud Re-engineering"]
    },
    {
        title: "Professional Services",
        slug: "professional",
        href: "/solutions/professional",
        items: ["Law Firm Management Software", "Consultant CRM Software", "Agency Management Software", "Client Portal Software"]
    },
    {
        title: "UI/UX Product Design",
        slug: "ui-ux",
        href: "/solutions/ui-ux",
        items: ["Figma Design Systems", "Enterprise UX Audits", "Mobile App Wireframing", "Interactive Prototypes"]
    }
]

export const internshipCategories = [
    {
        title: 'Web Development',
        items: [
            { title: 'Full Stack Web Development Internship (MERN)', slug: 'full-stack-mern' },
            { title: 'React.js Frontend Internship', slug: 'react-frontend' },
            { title: 'Node.js Backend Internship', slug: 'nodejs-backend' },
            { title: 'Next.js SaaS Development Internship', slug: 'nextjs-saas' },
            { title: 'UI/UX Design + Figma Internship', slug: 'uiux-figma' },
            { title: 'Vue.js Frontend Engineering Internship', slug: 'vuejs-frontend-engineering-internship' },
            { title: 'Advanced TypeScript Development Internship', slug: 'advanced-typescript-development-internship' },
            { title: 'Progressive Web Apps (PWA) Internship', slug: 'progressive-web-apps-pwa-internship' },
            { title: 'GraphQL & API Design Internship', slug: 'graphql-api-design-internship' },
            { title: 'Web Performance Optimization Internship', slug: 'web-performance-optimization-internship' }
        ]
    },
    {
        title: 'Mobile App Development',
        items: [
            { title: 'Flutter Cross-Platform Internship', slug: 'flutter-cross-platform' },
            { title: 'React Native Mobile Internship', slug: 'react-native' },
            { title: 'Android Core (Kotlin) Internship', slug: 'android-core-kotlin-internship' },
            { title: 'iOS Development (Swift) Internship', slug: 'ios-development-swift-internship' },
            { title: 'AI-Powered Mobile App Internship', slug: 'ai-powered-mobile-app-internship' },
            { title: 'Mobile UI/UX Specialist Internship', slug: 'mobile-ui-ux-specialist-internship' },
            { title: 'Firebase Mobile Integration Internship', slug: 'firebase-mobile-integration-internship' }
        ]
    },
    {
        title: 'AI-Powered Development',
        items: [
            { title: 'AI Web Application Development Internship', slug: 'ai-web-development' },
            { title: 'AI Chatbot & LLM Integration Internship', slug: 'ai-chatbot-llm' },
            { title: 'AI Business Automation Internship', slug: 'ai-business-automation-internship' },
            { title: 'Generative AI Implementation Internship', slug: 'generative-ai-implementation-internship' },
            { title: 'AI-Enhanced Product Design Internship', slug: 'ai-enhanced-product-design-internship' },
            { title: 'OpenAI & LangChain Specialist Internship', slug: 'openai-langchain-specialist-internship' },
            { title: 'AI Software Engineering Internship', slug: 'ai-software-engineering-internship' },
            { title: 'Automated Testing with AI Internship', slug: 'automated-testing-with-ai-internship' },
            { title: 'AI Data Infrastructure Internship', slug: 'ai-data-infrastructure-internship' },
            { title: 'Prompt Engineering for SaaS Internship', slug: 'prompt-engineering-for-saas-internship' }
        ]
    },
    {
        title: 'Data Science & Machine Learning',
        items: [
            { title: 'Machine Learning Engineering Internship', slug: 'machine-learning' },
            { title: 'Deep Learning & Neural Networks Internship', slug: 'deep-learning-neural-networks-internship' },
            { title: 'NLP (Natural Language Processing) Internship', slug: 'nlp-natural-language-processing-internship' },
            { title: 'Computer Vision & Image Processing Internship', slug: 'computer-vision-image-processing-internship' },
            { title: 'Data Analytics & Visualization Internship', slug: 'data-analytics-visualization-internship' },
            { title: 'Predictive Modeling SaaS Internship', slug: 'predictive-modeling-saas-internship' },
            { title: 'Big Data Engineering Internship', slug: 'big-data-engineering-internship' },
            { title: 'AI Model Deployment (MLOps) Internship', slug: 'ai-model-deployment-mlops-internship' }
        ]
    },
    {
        title: 'SEO & Digital Growth',
        items: [
            { title: 'Search Engine Optimization (SEO) Internship', slug: 'seo-internship' },
            { title: 'AI-Driven SEO Automation Internship', slug: 'ai-driven-seo-automation-internship' },
            { title: 'Digital Marketing Strategy Internship', slug: 'digital-marketing-strategy-internship' },
            { title: 'Content Growth Engineering Internship', slug: 'content-growth-engineering-internship' },
            { title: 'Technical SEO & Site Audit Internship', slug: 'technical-seo-site-audit-internship' },
            { title: 'Growth Hacking for SaaS Internship', slug: 'growth-hacking-for-saas-internship' }
        ]
    },
    {
        title: 'DevOps & Cloud',
        items: [
            { title: 'Cloud Deployment & AWS Internship', slug: 'aws-cloud' },
            { title: 'DevOps Engineering (Docker/K8s) Internship', slug: 'devops-engineering-docker-k8s-internship' },
            { title: 'CI/CD Pipeline Automation Internship', slug: 'ci-cd-pipeline-automation-internship' },
            { title: 'Cloud-Native SaaS Infrastructure Internship', slug: 'cloud-native-saas-infrastructure-internship' },
            { title: 'Cybersecurity & DevSecOps Internship', slug: 'cybersecurity-devsecops-internship' }
        ]
    }
]

export const navLinks = [
    {
        name: 'Products',
        href: '/products',
        level2: saasCategories
    },
    {
        name: 'Marketplace',
        href: '/marketplace',
    },
    {
        name: 'Solutions',
        href: '/solutions',
    },
    {
        name: 'Services',
        href: '/services',
        subItems: [
            { name: 'Custom SaaS Development', href: '/services/saas-development' },
            { name: 'Mobile App Development', href: '/services/mobile-app-development' },
            { name: 'ERP & CRM Development', href: '/services/erp-crm-solutions' },
            { name: 'HRM Systems', href: '/hrm' },
            { name: 'Automation Systems', href: '/services/ai-automation' },
            { name: 'UI/UX Design', href: '/solutions/ui-ux' },
            { name: 'Web Development', href: '/services/web-development' },
            { name: 'Custom Software Development', href: '/services/custom-software-development' },
            { name: 'Agency Partnerships', href: '/referral-agency-partnerships' },
            { name: 'Partner Program', href: '/partner-program' },
            { name: 'HubSpot Integration', href: '/hubspot-integration' },
            { name: 'Zapier Integration', href: '/zapier-integration' },
            { name: 'Event Management', href: '/industry-events' },
            { name: 'Networking Organizations', href: '/networking-organizations' },
            { name: 'Affiliate Program', href: '/affiliate-program' },
            { name: 'White-Label Partnership', href: '/white-label-partnership' },
            { name: 'Analytics Debugger', href: '/analytics-debugger' },
            { name: 'Heatmaps Debugger', href: '/heatmaps-debugger' },
            { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
            { name: 'UTM Campaign Debugger', href: '/utm-debugger' },
            { name: 'SEO Keyword Tracker', href: '/seo-keyword-tracker' },
            { name: 'Backlink Monitor', href: '/backlink-monitor' },
            { name: 'Competitor Monitor', href: '/competitor-monitor' },
            { name: 'Lead Source Reports', href: '/lead-source-reports' },
            { name: 'Founder Intro', href: '/founder-intro' },
            { name: 'Video Testimonials', href: '/video-testimonials' },
            { name: 'Day in the Life', href: '/day-in-the-life' },
        ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Demo Arena', href: '/demo' },
    {
        name: 'Training & Internship',
        href: '/internship',
        level2: internshipCategories
    },

    { name: 'AI Automation', href: '/services/ai-automation' },
    { name: 'About Us', href: '/about' },
]
