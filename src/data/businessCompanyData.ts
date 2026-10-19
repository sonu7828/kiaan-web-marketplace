export interface ProductData {
    id: string;
    name: string;
    title: string;
    tagline: string;
    description: string;
    mainKeyword: string;
    keywords: string[];
    features: {
        title: string;
        desc: string;
        iconName: string;
        items: string[];
    }[];
    benefits: {
        title: string;
        impact: string;
    }[];
    useCases: {
        scenario: string;
        solution: string;
    }[];
    metaTitle?: string;
    faqs?: {
        q: string;
        a: string;
    }[];
    integrations: string[];
}

export const businessCompanyData: Record<string, ProductData> = {
    'crm-software': {
        id: 'crm-software',
        name: 'CRM Software',
        title: 'CRM Software Platform',
        metaTitle: 'Best CRM Software in India | AI-Powered Sales & Customer Management Platform',
        tagline: 'Velocity-Driven Customer Intelligence & Relationship Orchestration',
        description: 'Advanced cloud CRM software for lead tracking, sales automation, pipeline management and AI analytics. Trusted CRM solution for businesses across India & Indore.',
        mainKeyword: 'CUSTOMER EXPERIENCE',
        keywords: [
            'Customer Relationship Management',
            'Sales CRM System',
            'Lead Tracking Software',
            'Client Management Tool',
            'CRM Automation Platform',
            'Sales Pipeline Management',
            'Cloud CRM Solution',
            'CRM for Small Business',
            'Customer Data Management',
            'CRM with Reporting & Analytics',
            'customer relationship management system',
            'cloud CRM solution India',
            'sales pipeline automation platform',
            'lead conversion tracking software',
            'client database management tool',
            'CRM with mobile app access',
            'CRM for growing businesses',
            'deal tracking SaaS platform',
            'customer engagement CRM tool',
            'CRM reporting dashboard',
            'automated follow up CRM',
            'CRM with marketing integration',
            'centralized customer data software',
            'B2B CRM cloud platform',
            'smart CRM workflow system',
            'CRM analytics and insights',
            'CRM with API integration',
            'enterprise CRM management tool',
            'scalable CRM software India',
            'CRM with multi user access'
        ],
        features: [
            {
                title: 'Lead Management & Smart Sales Pipeline',
                desc: 'Capture leads from websites, ads, emails and campaigns. Organize opportunities using a visual pipeline that tracks every deal stage.',
                iconName: 'BarChart3',
                items: ['Multi-Stage Tracking', 'Automated Lead Routing', 'Probability Analysis', 'Deal Health Monitoring', 'Inquiry to Closure Tracking']
            },
            {
                title: 'Sales Automation & Workflow Intelligence',
                desc: 'Automation reduces manual workload. Follow-up emails, task reminders, and reporting are automated to improve efficiency.',
                iconName: 'Zap',
                items: ['Email Automation', 'Task Sequencing', 'Trigger-Based Alerts', 'Document Generation', 'Status Update Automation']
            },
            {
                title: '360° Customer Data Platform',
                desc: 'Maintain a centralized customer database that stores interactions, transaction history and notes.',
                iconName: 'Users',
                items: ['Interaction History', 'Social Intelligence', 'Account Mapping', 'Activity Timelines', 'Centralized Dashboard']
            },
            {
                title: 'AI-Based Forecasting & Analytics',
                desc: 'Predict revenue trends and monitor team performance with real-time dashboards for data-driven decisions.',
                iconName: 'TrendingUp',
                items: ['Revenue Prediction', 'Team Performance Metrics', 'Real-Time Insights', 'Custom Analytics']
            },
            {
                title: 'Cloud-Based & Scalable Infrastructure',
                desc: 'Enterprise-grade security with remote access. Scalable from Indore startups to nationwide enterprises.',
                iconName: 'ShieldCheck',
                items: ['Secure Data Hosting', 'Remote Accessibility', 'Elastic Scaling', 'Security Audit Trails']
            }
        ],
        benefits: [
            { title: 'SaaS-based Affordable Pricing', impact: 'Flexible subscription models designed for businesses of all sizes.' },
            { title: 'Secure Data Hosting', impact: 'Enterprise-grade encryption and secure infrastructure for sensitive data.' },
            { title: 'Customizable Modules', impact: 'Adapt the platform to your specific business workflows and requirements.' },
            { title: 'API Integrations', impact: 'Seamlessly connect with your existing tools like Slack, WhatsApp, and more.' },
            { title: 'Dedicated Support', impact: 'Round-the-clock technical assistance for optimized performance.' }
        ],
        useCases: [
            { scenario: 'Large Sales Teams', solution: 'Coordinate territory management and lead distribution across global departments.' },
            { scenario: 'Account-Based Marketing', solution: 'Synchronize marketing and sales efforts toward high-value strategic accounts.' },
            { scenario: 'Customer Success', solution: 'Proactively manage health scores and automate renewal reminders.' }
        ],
        faqs: [
            { q: 'What is CRM software?', a: 'CRM software manages customer data, sales pipelines and communication workflows.' },
            { q: 'Is this CRM suitable for startups?', a: 'Yes, it scales for startups and enterprises across India.' }
        ],
        integrations: ['SAP ERP', 'Dynamics 365', 'Slack', 'Mailchimp', 'QuickBooks']
    },
    'hrm-software': {
        id: 'hrm-software',
        name: 'HRM Software',
        title: 'HRM Software Platform',
        metaTitle: 'HRM Software India | Complete Workforce Management Platform',
        tagline: 'Unified Human Capital Management for Modern Distributed Enterprises',
        description: 'Managing human resources manually can limit business growth. Our HRM software centralizes employee data, automates HR workflows and provides analytics for decision-making. Designed for businesses across India and Indore, this platform supports the complete employee lifecycle.',
        mainKeyword: 'HUMAN CAPITAL',
        keywords: [
            'Human Resource Management System',
            'HR Management Software',
            'Employee Management System',
            'HR Automation Platform',
            'HRMS Cloud Software',
            'HR Dashboard Solution',
            'HR Workflow Automation',
            'HR Records Management',
            'HR Software for Companies',
            'Complete HR Solution',
            'employee management system',
            'HR cloud platform India',
            'workforce administration software',
            'employee record management tool',
            'HR operations automation system',
            'staff performance tracking software',
            'HR analytics dashboard',
            'HR workflow automation tool',
            'employee lifecycle management platform',
            'HR SaaS solution India',
            'onboarding management software',
            'HR compliance tracking system',
            'digital HR document management',
            'centralized HR database',
            'HR reporting automation tool',
            'employee self service HR portal',
            'attendance integrated HR system',
            'recruitment workflow software',
            'HR productivity tracking platform',
            'enterprise HR management solution'
        ],
        features: [
            {
                title: 'Employee Lifecycle Management',
                desc: 'Manage recruitment, onboarding, promotions, transfers and exits with structured workflows.',
                iconName: 'Users',
                items: ['Digital Onboarding', 'Promotion Tracking', 'Transfer Management', 'Exit Workflows', 'Secure Employee Records']
            },
            {
                title: 'HR Automation & Workflow Management',
                desc: 'Automate approvals, internal documentation and notifications to reduce manual errors.',
                iconName: 'Zap',
                items: ['Automated Approvals', 'Documentation Sync', 'Role-Based Notifications', 'Audit Readiness']
            },
            {
                title: 'Employee Self-Service Portal',
                desc: 'Empower employees to manage their own data, requests, and documents securely.',
                iconName: 'ShieldCheck',
                items: ['Payslip Access', 'Leave Balance Check', 'Attendance Logs', 'Profile Updates']
            },
            {
                title: 'HR Analytics Dashboard',
                desc: 'Monitor department performance, workforce trends and employee metrics in real time.',
                iconName: 'BarChart3',
                items: ['Turnover Analytics', 'Department Performance', 'Trend Forecasting', 'KPI Tracking']
            },
            {
                title: 'Seamless Module Integration',
                desc: 'Seamlessly connect HRM with payroll processing and attendance tracking modules.',
                iconName: 'ClipboardCheck',
                items: ['Payroll Sync', 'Attendance Mapping', 'Unified Data Flow', 'Centralized Reporting']
            }
        ],
        benefits: [
            { title: 'Lower Admin Overhead', impact: 'Reduce manual HR administration time by 50%.' },
            { title: 'Compliance Fidelity', impact: 'Maintain 100% audit readiness with automated record-keeping.' },
            { title: 'Enhanced Engagement', impact: 'Improve employee NPS by centralizing communication and feedback.' }
        ],
        useCases: [
            { scenario: 'Remote Workforce', solution: 'Standardize the employee experience regardless of geographic location.' },
            { scenario: 'Rapid Scaling', solution: 'Onboard hundreds of employees per month without increasing HR headcount.' },
            { scenario: 'Mergers & Acquisitions', solution: 'Consolidate multiple organizational structures into a single source of truth.' }
        ],
        faqs: [
            { q: 'What is HRM software?', a: 'It is a system that automates human resource processes and employee management.' }
        ],
        integrations: ['Azure AD', 'Workday', 'Microsoft 365', 'Zoom', 'Greenhouse']
    },
    'payroll-management': {
        id: 'payroll-management',
        name: 'Payroll Management',
        title: 'Payroll Management System',
        metaTitle: 'Payroll Software India | Automated Salary & Tax Solutions',
        tagline: 'Zero-Error Financial Disbursement & Global Tax Compliance',
        description: 'Payroll errors can lead to compliance risks. Our payroll software automates salary calculations, tax deductions and statutory compliance for Indian businesses.',
        mainKeyword: 'COMPENSATION',
        keywords: [
            'Payroll Processing Software',
            'Salary Management System',
            'Automated Payroll System',
            'Payroll Compliance Software',
            'Employee Salary Calculator',
            'Payroll & Tax Management',
            'Payslip Generation Software',
            'Payroll for Small Business',
            'Payroll Automation Tool',
            'Cloud Payroll Solution',
            'salary processing software',
            'payroll automation system India',
            'employee payslip generator online',
            'payroll compliance software',
            'salary tax calculation platform',
            'cloud payroll SaaS solution',
            'payroll accounting integration tool',
            'automated salary distribution system',
            'payroll deduction tracking software',
            'payroll analytics dashboard',
            'statutory payroll compliance India',
            'payroll reporting automation',
            'compensation management system',
            'payroll workflow automation',
            'small business payroll solution',
            'payroll with attendance integration',
            'payroll data management software',
            'payroll expense tracking tool',
            'multi branch payroll system',
            'payroll SaaS platform India'
        ],
        features: [
            {
                title: 'Automated Salary Processing',
                desc: 'Calculate salaries accurately based on attendance, overtime and leave data.',
                iconName: 'CreditCard',
                items: ['Gross-to-Net Math', 'Overtime Integration', 'Bonus Processing', 'Automated Deductions']
            },
            {
                title: 'Tax & Compliance Management',
                desc: 'Ensure compliance with Indian labor laws and tax regulations (PF, PT, ESI, TDS) automatically.',
                iconName: 'ShieldCheck',
                items: ['Statutory Filings', 'TDS Deductions', 'PF/ESI Integration', 'Tax Monitoring']
            },
            {
                title: 'Payslip & Bank Integration',
                desc: 'Generate digital payslips and enable direct transfers for seamless salary disbursement.',
                iconName: 'Zap',
                items: ['Digital Payslips', 'Direct Bank Transfer', 'Bulk Payments', 'Salary History']
            },
            {
                title: 'Reports & Insights',
                desc: 'Access detailed financial reports and analytics to monitor labor costs.',
                iconName: 'BarChart3',
                items: ['YTD Earnings', 'Cost Center Reporting', 'Labor Distribution', 'Audit-Ready Logs']
            }
        ],
        benefits: [
            { title: 'Precision Accuracy', impact: 'Eliminate 99.9% of payroll errors and manual double-checks.' },
            { title: 'Audit Confidence', impact: 'Instantly generate detailed statutory reports for any jurisdiction.' },
            { title: 'Financial Visibility', impact: 'Analyze labor costs across departments and regions in real-time.' }
        ],
        useCases: [
            { scenario: 'Global Operations', solution: 'Manage payroll across 15+ countries with localized tax logic.' },
            { scenario: 'Commissions-Heavy Sales', solution: 'Automate complex variable pay calculations for high-performing teams.' },
            { scenario: 'Contractor Management', solution: 'Streamline 1099 payments alongside regular W2 payroll.' }
        ],
        faqs: [
            { q: 'Does it handle Indian statutory compliance?', a: 'Yes, it is designed for Indian payroll standards including PF, ESI, Professional Tax, and Income Tax (TDS).' }
        ],
        integrations: ['Xero', 'NetSuite', 'ADP', 'BambooHR', 'Stripe']
    },
    'employee-attendance': {
        id: 'employee-attendance',
        name: 'Employee Attendance',
        title: 'Smart Employee Attendance System with AI-Face & Geo-Tagging System',
        metaTitle: 'Attendance Management Software India | Real-Time Workforce Tracking',
        tagline: 'Precision Workforce Tracking & Visual Presence Analytics',
        description: 'Monitor employee presence using biometric, mobile and GPS-based solutions. Replace antiquated punch cards with intelligent, multi-modal attendance tracking.',
        mainKeyword: 'WORKFORCE PRESENCE',
        keywords: [
            'Employee Attendance System',
            'Biometric Attendance Software',
            'Online Attendance Tracking',
            'Staff Attendance Management',
            'Attendance Monitoring Tool',
            'Attendance Automation Software',
            'Workforce Attendance System',
            'Cloud Attendance Platform',
            'Real-Time Attendance Tracking',
            'Employee Check-In System',
            'employee attendance tracking system',
            'biometric attendance software',
            'cloud attendance management tool',
            'staff time tracking system',
            'attendance reporting dashboard',
            'employee check in check out system',
            'GPS attendance tracking software',
            'attendance automation SaaS',
            'attendance with payroll integration',
            'real time attendance monitoring',
            'remote employee attendance tool',
            'shift attendance tracking system',
            'attendance compliance software',
            'attendance analytics dashboard',
            'workforce attendance solution',
            'digital attendance register',
            'mobile attendance app software',
            'attendance record management system',
            'multi location attendance software',
            'smart attendance management platform'
        ],
        features: [
            {
                title: 'Real-Time Attendance Monitoring',
                desc: 'Track check-in/out with accurate timestamps using facial recognition, QR codes, or mobile GPS.',
                iconName: 'Clock',
                items: ['Facial Recognition', 'GPS Verification', 'QR Code Attendance', 'RFID & Biometric Sync', 'Live Presence Dashboards']
            },
            {
                title: 'Shift & Roster Management',
                desc: 'Plan complex shift rotations and manage overtime efficiently with automated rules.',
                iconName: 'Calendar',
                items: ['Shift Scheduling', 'OT Rule Configuration', 'Roster Visualization', 'Break Monitoring', 'Holiday Logic']
            },
            {
                title: 'Seamless Payroll Synchronization',
                desc: 'Attendance data syncs automatically with payroll for zero-error salary processing.',
                iconName: 'Zap',
                items: ['Auto-Calc Hours', 'Exception Reporting', 'Direct Payroll Link', 'Warp-Speed Reconciliation']
            },
            {
                title: 'Attendance Analytics Dashboard',
                desc: 'Generate deep-dive reports for HR decision-making and workforce utilization.',
                iconName: 'BarChart3',
                items: ['Late-In/Early-Out Trends', 'Absenteeism Analysis', 'Heatmaps', 'Shift Status Logs']
            }
        ],
        benefits: [
            { title: 'Transparency', impact: 'Eliminate "buddy punching" and time theft with biometric verification.' },
            { title: 'Safety Compliance', impact: 'Always know who is on-site during emergency evacuations.' },
            { title: 'Payroll Readiness', impact: 'Reduce time spent reconciling hours by 80%.' }
        ],
        useCases: [
            { scenario: 'Manufacturing Facilities', solution: 'Track thousands of workers across multiple shift rotations on-site.' },
            { scenario: 'Hybrid Offices', solution: 'Log attendance for remote days vs. in-office collaboration days.' },
            { scenario: 'Field Service Teams', solution: 'Clock in at client locations using GPS-verified mobile check-ins.' }
        ],
        faqs: [
            { q: 'How can I monitor employee presence?', a: 'You can use biometric, mobile (GPS-fenced), and web-based check-in solutions provided by our platform.' }
        ],
        integrations: ['Hikvision', 'ZKTeco', 'Google Maps API', 'SAP', 'TSheets']
    },
    'time-tracking': {
        id: 'time-tracking',
        name: 'Time Tracking',
        title: 'Time Tracking Software',
        metaTitle: 'Project Time Tracking Software | Productivity Analysis Tools',
        tagline: 'Granular Project Profitability & Resource Utilization Intelligence',
        description: 'Improve operational efficiency by monitoring employee work hours and project time allocation. Kiaan Time Tracking provides deep insights into project costs and employee utilization.',
        mainKeyword: 'RESOURCE OPTIMIZATION',
        keywords: [
            'Time Tracking Software',
            'Employee Time Monitoring',
            'Work Hours Tracker',
            'Timesheet Management System',
            'Productivity Tracking Tool',
            'Online Time Tracker',
            'Billable Hours Tracking',
            'Work Time Management',
            'Time & Task Tracking',
            'Staff Time Recording System',
            'employee time monitoring software',
            'work hour tracking system',
            'timesheet management platform',
            'project time logging tool',
            'billable hours tracking software',
            'productivity time tracker SaaS',
            'remote team time tracking system',
            'automated timesheet generator',
            'time analytics dashboard',
            'work duration reporting software',
            'employee hour calculation tool',
            'task based time tracking system',
            'cloud timesheet management',
            'time tracking with payroll sync',
            'real time work hour monitor',
            'workforce time audit software',
            'daily activity tracking platform',
            'job time recording system',
            'digital time logging software',
            'team productivity timer tool'
        ],
        features: [
            {
                title: 'Work Hour Tracking',
                desc: 'Track daily and weekly productivity with one-click timers and smart logs.',
                iconName: 'Clock',
                items: ['Daily Timesheets', 'Weekly Summaries', 'Auto-Timers', 'Manual Logging Offsets']
            },
            {
                title: 'Project & Task Monitoring',
                desc: 'Measure billable and non-billable hours at the task level for precise client invoicing.',
                iconName: 'BarChart3',
                items: ['Budget Threshold Alerts', 'Billable Ratios', 'Task Costing', 'WIP Reporting']
            },
            {
                title: 'Remote Workforce Tracking',
                desc: 'Manage distributed teams across India/Indore with cloud-synced time logs.',
                iconName: 'Globe',
                items: ['Geo-Sync Logs', 'Cross-Device Tracking', 'Timezone Handling', 'Remote Status Alerts']
            },
            {
                title: 'Performance Reports',
                desc: 'Analyze productivity trends and resource allocation with executive dashboards.',
                iconName: 'TrendingUp',
                items: ['Utilization Reports', 'Burn-Up Charts', 'Effort Analysis', 'Profitability Insights']
            }
        ],
        benefits: [
            { title: 'Accurate Billing', impact: 'Recover 15% more billable hours previously lost to manual logging.' },
            { title: 'Margin Protection', impact: 'Identify projects nearing budget limits before they become unprofitable.' },
            { title: 'Capacity Planning', impact: 'Use historical time data to forecast landing talent for future pipeline.' }
        ],
        useCases: [
            { scenario: 'Professional Services', solution: 'Bill clients accurately for every minute of consultant or legal work.' },
            { scenario: 'Software Development', solution: 'Track R&D tax credit eligibility by logging time against specific features.' },
            { scenario: 'Marketing Agencies', solution: 'Monitor agency bandwidth and prevent burnout by tracking over-utilization.' }
        ],
        integrations: ['Jira', 'Asana', 'Harvest', 'FreshBooks', 'Monday.com']
    },
    'recruitment-ats': {
        id: 'recruitment-ats',
        name: 'Recruitment & ATS',
        title: 'Recruitment & ATS Platform',
        metaTitle: 'Best Recruitment Software India | AI Applicant Tracking System',
        tagline: 'Precision Talent Acquisition & Cognitive Candidate Matching',
        description: 'Modernize hiring with automated candidate management. Kiaan ATS streamlines the entire hiring journey, from programmatic job posting to cognitive matching.',
        mainKeyword: 'TALENT ACQUISITION',
        keywords: [
            'Applicant Tracking System',
            'Recruitment Management Software',
            'Hiring Automation Platform',
            'Candidate Tracking System',
            'Online Recruitment Tool',
            'ATS for HR Teams',
            'Resume Management Software',
            'Hiring Pipeline Software',
            'Talent Acquisition Platform',
            'Interview Management System',
            'applicant tracking system software',
            'recruitment automation platform',
            'candidate management system',
            'hiring workflow automation tool',
            'resume screening software',
            'job application tracking system',
            'recruitment analytics dashboard',
            'talent acquisition management platform',
            'interview scheduling software',
            'candidate pipeline tracking tool',
            'HR recruitment SaaS India',
            'online hiring management system',
            'automated resume shortlisting tool',
            'recruitment reporting software',
            'career portal integration system',
            'hiring performance analytics tool',
            'recruitment database management',
            'end to end hiring software',
            'smart hiring automation platform',
            'digital recruitment workflow system'
        ],
        features: [
            {
                title: 'Intelligent Resume Parsing',
                desc: 'Automatically filter and rank applicants with cognitive semantic analysis of skills.',
                iconName: 'Target',
                items: ['Skill Matching', 'Automated Screening', 'Experience Ranking', 'Semantic Filtering']
            },
            {
                title: 'Smart Interview Scheduling',
                desc: 'Streamline communication with candidates and sync schedules across hiring teams.',
                iconName: 'Calendar',
                items: ['Calendar Sync', 'Self-Scheduling Links', 'Interview Panels', 'Automated Reminders']
            },
            {
                title: 'Candidate Pipeline Tracking',
                desc: 'A visual hiring funnel to move talent from discovery to onboarding with one click.',
                iconName: 'Users',
                items: ['Drag-and-Drop Pipeline', 'Offer Management', 'Stage Analytics', 'Rejection Workflows']
            },
            {
                title: 'Data-Driven Hiring Analytics',
                desc: 'Measure recruitment efficiency, cost-per-hire, and time-to-fill with ease.',
                iconName: 'BarChart3',
                items: ['Source Effectiveness', 'Hiring Velocity', 'Quality of Hire', 'Team Productivity']
            }
        ],
        benefits: [
            { title: 'Velocity to Hire', impact: 'Reduce average time-to-hire by 45% through process automation.' },
            { title: 'Quality of Talent', impact: 'Improve candidate-job fit scores with data-driven screening tools.' },
            { title: 'Employer Brand', impact: 'Provide a white-glove candidate experience with automated status updates.' }
        ],
        useCases: [
            { scenario: 'High-Volume Hiring', solution: 'Process thousands of applications for seasonal or retail positions efficiently.' },
            { scenario: 'Tech Recruiting', solution: 'Manage technical screenings and coding challenges through integrated tools.' },
            { scenario: 'Executive Search', solution: 'Discreetly manage confidential high-level searches within private pipelines.' }
        ],
        integrations: ['LinkedIn', 'Indeed', 'CoderPad', 'HackerRank', 'DocuSign']
    },
    'performance-platform': {
        id: 'performance-platform',
        name: 'Performance Platform',
        title: 'Performance Management Platform',
        metaTitle: 'Performance Management Software India | OKR & KPI Tracking',
        tagline: 'Continuous Feedback Loops & Strategic Goal Alignment',
        description: 'Evaluate and improve employee productivity. Kiaan Performance fosters a culture of consistent growth through OKRs, 360° feedback, and data-driven career pathing.',
        mainKeyword: 'EMPLOYEE GROWTH',
        keywords: [
            'Employee Performance Management',
            'Performance Evaluation Software',
            'KPI Tracking System',
            'Appraisal Management Tool',
            'OKR Management Software',
            'Staff Performance Analytics',
            'Employee Review System',
            'Performance Monitoring Platform',
            'Goal Tracking Software',
            'Workforce Performance Tool',
            'employee performance management software',
            'KPI tracking system',
            'goal setting and evaluation tool',
            'performance review automation platform',
            'appraisal management system',
            'employee productivity analytics',
            'OKR management software',
            'performance tracking dashboard',
            'staff evaluation platform',
            'workforce performance reporting tool',
            'performance feedback system',
            'employee growth tracking software',
            'talent performance analytics tool',
            'performance monitoring SaaS',
            'goal alignment management platform',
            'HR performance reporting system',
            'digital appraisal workflow tool',
            'team performance analytics dashboard',
            'enterprise performance software',
            'employee KPI automation system'
        ],
        features: [
            {
                title: 'Goal & OKR Tracking',
                desc: 'Align employee goals with business objectives using transparent OKR frameworks.',
                iconName: 'Target',
                items: ['Strategic Goal Mapping', 'Real-Time Progress Bars', 'Dependency Tracking', 'Public Shoutouts']
            },
            {
                title: 'Performance Reviews',
                desc: 'Structured appraisal system with fair evaluation cycles and scoring.',
                iconName: 'ClipboardCheck',
                items: ['Annual/Quarterly Reviews', 'Self-Appraisals', 'Manager Scorecards', 'Review Audit Logs']
            },
            {
                title: '360 Feedback',
                desc: 'Comprehensive feedback collection from peers, managers, and subordinates.',
                iconName: 'Users',
                items: ['Peer Reviews', 'Upward Feedback', 'Anonymous Surveys', 'Sentiment Analysis']
            },
            {
                title: 'Performance Analytics Dashboard',
                desc: 'Monitor team performance trends and identify growth trajectories with real-time data.',
                iconName: 'BarChart3',
                items: ['9-Box Grid Mapping', 'Competency Frameworks', 'Learning Paths', 'KPI Trends']
            }
        ],
        benefits: [
            { title: 'Meritocratic Culture', impact: 'Increase employee retention by 30% through transparent, data-backed career paths.' },
            { title: 'Strategic Alignment', impact: 'Ensure 100% of employees are working toward goals that move the company needle.' },
            { title: 'Reduced Churn', impact: 'Identify disengaged employees early through performance dip alerts.' }
        ],
        useCases: [
            { scenario: 'High-Growth Tech', solution: 'Scale rapidly while maintaining high performance standards through automated OKRs.' },
            { scenario: 'Professional Services', solution: 'Tie bonuses and promotions to clear, billable-hour and client-satisfaction KPIs.' },
            { scenario: 'Large Enterprises', solution: 'Eliminate bias in annual reviews by using a single source of performance truth.' }
        ],
        integrations: ['Slack', 'MS Teams', '15Five', 'Lattice', 'Glint']
    },
    'workforce-scheduling': {
        id: 'workforce-scheduling',
        name: 'Workforce Scheduling',
        title: 'Automated Workforce Scheduling Software for Multi-Shift Teams',
        metaTitle: 'Shift Scheduling Software India | Workforce Management Solutions',
        tagline: 'Demand-Forecasting & Dynamic Labor Force Deployment',
        description: 'Optimize staff allocation and resource planning. Kiaan Scheduling uses intelligent forecasting to ensure you have the right people at the right place.',
        mainKeyword: 'LABOR OPTIMIZATION',
        keywords: [
            'Workforce Scheduling Software',
            'Employee Shift Management',
            'Staff Scheduling System',
            'Shift Planning Software',
            'Work Schedule Automation',
            'Employee Roster Management',
            'Smart Scheduling Platform',
            'Workforce Planning Tool',
            'Shift Allocation Software',
            'Schedule Management System',
            'employee shift scheduling software',
            'staff roster management system',
            'shift planning automation tool',
            'workforce allocation platform',
            'duty scheduling management software',
            'team shift calendar system',
            'automated roster generator',
            'workforce capacity planning tool',
            'employee shift tracking dashboard',
            'shift swap management software',
            'attendance linked scheduling system',
            'staff planning SaaS India',
            'workforce availability tracker',
            'shift assignment automation platform',
            'scheduling analytics dashboard',
            'labor planning management tool',
            'real time staff scheduling system',
            'shift compliance tracking software',
            'multi location scheduling solution',
            'smart workforce planner tool'
        ],
        features: [
            {
                title: 'Automated Shift Planning',
                desc: 'Create balanced schedules and optimize staff allocation.',
                iconName: 'Calendar',
                items: ['Automated Shift Generation', 'Workload Balancing', 'Fatigue Monitoring', 'Availability Matching']
            },
            {
                title: 'Real-Time Updates',
                desc: 'Notify employees instantly of shift changes and updates.',
                iconName: 'Zap',
                items: ['Shift Bidding', 'Open-Market Swapping', 'Instant Schedule Pushes', 'Time-Off Requests']
            },
            {
                title: 'Attendance Integration',
                desc: 'Sync with HR and payroll modules for unified workforce orchestration.',
                iconName: 'ClipboardCheck',
                items: ['Roster-to-Attendance Sync', 'Absence Gaps', 'Payroll Auto-Feeds', 'Compliance Guardrails']
            }
        ],
        benefits: [
            { title: 'Cost Control', impact: 'Reduce unnecessary overtime costs by 22% through better shift planning.' },
            { title: 'Staff Satisfaction', impact: 'Improve employee morale with self-service shift swaps and flexible bidding.' },
            { title: 'Operational Agility', impact: 'Respond to sudden demand spikes or call-outs in minutes, not hours.' }
        ],
        useCases: [
            { scenario: 'Retail Operations', solution: 'Staff stores based on peak transaction times and seasonal trends.' },
            { scenario: 'Hospitality & F&B', solution: 'Manage front-of-house and kitchen staff across varying dinner rushes.' },
            { scenario: 'Healthcare Facilities', solution: 'Ensure 24/7 nurse and doctor coverage while respecting mandatory rest periods.' }
        ],
        integrations: ['Square POS', 'Toast', 'Lightspeed', 'Kronos', 'Deputy']
    },
    'leave-management': {
        id: 'leave-management',
        name: 'Leave Management',
        title: 'Centralized Leave Management Software for Seamless Approvals',
        metaTitle: 'Leave Management Software India | Annual Leave Tracking',
        tagline: 'Global Time-Off Policies & Automated Absence Orchestration',
        description: 'Simplify leave approvals and tracking. Kiaan Leave handles complex global accrual rules while ensuring team coverage is never compromised.',
        mainKeyword: 'ABSENCE MANAGEMENT',
        keywords: [
            'Leave Management System',
            'Employee Leave Tracker',
            'Online Leave Application',
            'Leave Approval Workflow',
            'Paid Leave Management',
            'Absence Management Software',
            'Leave Balance Tracking',
            'HR Leave Automation',
            'Vacation Tracking System',
            'Staff Leave Portal',
            'employee leave tracking software',
            'leave request management system',
            'absence management platform',
            'leave approval workflow tool',
            'paid leave tracking system',
            'leave balance calculation software',
            'HR leave automation platform',
            'vacation tracking management tool',
            'leave reporting dashboard',
            'sick leave management system',
            'leave policy compliance software',
            'digital leave register system',
            'leave calendar integration tool',
            'leave analytics dashboard',
            'workforce absence tracker',
            'leave with payroll sync software',
            'employee time off management',
            'leave notification automation system',
            'cloud leave management SaaS',
            'staff leave monitoring platform'
        ],
        features: [
            {
                title: 'Leave Requests & Approvals',
                desc: 'Digital approval workflow with multi-level hierarchies.',
                iconName: 'Zap',
                items: ['One-Click Approvals', 'Multi-Level Hierarchies', 'Mobile Notifications', 'Comment Context']
            },
            {
                title: 'Leave Balance Management',
                desc: 'Automatic updates and notifications with real-time balance tracking.',
                iconName: 'CreditCard',
                items: ['Accrual Engines', 'Carry-Forward Logic', 'Prorated Leaves', 'Negative Balance Prevention']
            },
            {
                title: 'Holiday Calendar Integration',
                desc: 'Country-specific and restricted holidays for India with overlap warnings.',
                iconName: 'Calendar',
                items: ['Regional Holiday Lists', 'Restricted Holidays', 'Calendar Sync (ICS)', 'Overlap Warnings']
            }
        ],
        benefits: [
            { title: 'Coverage Certainty', impact: 'Visual calendars prevent key departments from being understaffed due to overlapping leaves.' },
            { title: 'Rule Enforcement', impact: 'Automatically block leave requests that violate company or statutory policies.' },
            { title: 'Reduced Friction', impact: 'Resolve leave inquiries instantly with self-service balance transparency.' }
        ],
        useCases: [
            { scenario: 'Distributed Global Teams', solution: 'Manage 30+ different national holiday calendars from a single dashboard.' },
            { scenario: 'Seasonal Businesses', solution: 'Implement "blackout dates" during peak periods where leave is restricted.' },
            { scenario: 'Startups to Enterprises', solution: 'Scale from simple accrual rules to complex, tenure-based global policies.' }
        ],
        integrations: ['Outlook Calendar', 'Google Calendar', 'Slack', 'Workday', 'Jira']
    },
    'hr-compliance-portal': {
        id: 'hr-compliance-portal',
        name: 'HR Compliance Portal',
        title: 'Digital HR Compliance Portal for Automated Audits & Regulations',
        metaTitle: 'HR Compliance Software India | Statutory Regulation Tools',
        tagline: 'Risk Mitigation & Proactive Regulatory Safeguarding',
        description: 'Ensure businesses meet statutory and regulatory requirements. Kiaan Compliance automates document verification, policy sign-offs, and critical audit logging.',
        mainKeyword: 'CORPORATE GOVERNANCE',
        keywords: [
            'HR Compliance Software',
            'Labor Law Compliance System',
            'Employee Compliance Management',
            'HR Policy Management Tool',
            'Compliance Tracking Platform',
            'Workplace Compliance Software',
            'Regulatory Compliance System',
            'HR Documentation Portal',
            'Compliance Audit Management',
            'Corporate Compliance Solution',
            'HR compliance management software',
            'employee policy tracking system',
            'labor law compliance platform',
            'HR audit management tool',
            'statutory compliance software India',
            'employee documentation compliance system',
            'workplace regulation tracking tool',
            'compliance reporting dashboard',
            'HR legal document management',
            'employee contract tracking system',
            'compliance workflow automation software',
            'HR governance platform',
            'compliance risk monitoring tool',
            'workforce regulation management SaaS',
            'digital compliance document vault',
            'HR compliance analytics dashboard',
            'statutory reporting automation tool',
            'employee compliance tracking platform',
            'corporate HR compliance solution',
            'HR policy automation system'
        ],
        features: [
            {
                title: 'Compliance Tracking',
                desc: 'Monitor Indian labor laws and updates with real-time regulatory status.',
                iconName: 'ShieldCheck',
                items: ['Statutory Filings', 'Labor Law Tracking', 'Regulatory Feeds', 'Gap Analysis']
            },
            {
                title: 'Policy Documentation',
                desc: 'Centralized and secure document storage for all corporate policies.',
                iconName: 'ClipboardCheck',
                items: ['Document Vault', 'Version Control', 'E-Sign Distribution', 'Access Logs']
            },
            {
                title: 'Audit Reporting',
                desc: 'Generate comprehensive compliance audit reports for stakeholders.',
                iconName: 'BarChart3',
                items: ['Tamper-Proof History', 'Reporting Deadlines', 'Jurisdiction Monitoring', 'Evidence Vault']
            },
            {
                title: 'Secure Employee Records',
                desc: 'Role-based data security and encryption for absolute privacy compliance.',
                iconName: 'Users',
                items: ['RBAC Security', 'Data Encryption', 'Privacy Safeguards', 'Incident Records']
            }
        ],
        benefits: [
            { title: 'Zero Penalty Risk', impact: 'Avoid costly legal fines with automated reminders for statutory filings.' },
            { title: 'Unified Governance', impact: 'Standardize policy enforcement across different branches and states.' },
            { title: 'Rapid Audit Cycle', impact: 'Cut audit preparation time from weeks to minutes with centralized logs.' }
        ],
        useCases: [
            { scenario: 'Multi-State Expansion', solution: 'Navigating different labor laws across 10+ Indian states with ease.' },
            { scenario: 'External Regulatory Audits', solution: 'Provide investigators with a complete, tamper-proof history of compliance.' },
            { scenario: 'IPO Preparation', solution: 'Ensure governance standards meet the rigorous requirements of a public listing.' }
        ],
        integrations: ['DocuSign', 'Checkr', 'E-Verify', 'LexisNexis', 'SharePoint']
    }
};
