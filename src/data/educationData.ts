import { ProductData } from './businessCompanyData';

export const educationData: Record<string, ProductData> = {
    'school-management': {
        id: 'school-management',
        name: 'School Management',
        title: 'School Management',
        tagline: 'Precision Academic Orchestration & Unified Campus Governance',
        description: 'Digitize your entire school ecosystem. Kiaan School Management connects administration, teachers, and students in a single high-performance portal.',
        mainKeyword: 'ACADEMIC EXCELLENCE',
        keywords: [
            'School ERP Software',
            'Academic Management System',
            'Student Administration Tool',
            'SaaS School Platform',
            'Education ERP System',
            'Attendance Management Software',
            'Fee Management System',
            'School CRM Tool',
            'Digital School Platform',
            'Campus Management Software'
        ],
        features: [
            {
                title: 'Global Campus ERP',
                desc: 'Consolidate multiple campus operations, from admissions to payroll, under one master dashboard.',
                iconName: 'Layout',
                items: ['Multi-Branch Control', 'Automated Fee Collection', 'Staff/Teacher Payroll', 'Inventory & Books Sync']
            },
            {
                title: 'Smart Attendance Gateway',
                desc: 'Track student and teacher presence via biometric, RFID, or rapid mobile app entry with instant parent alerts.',
                iconName: 'UserCheck',
                items: ['RFID Card Support', 'Face-ID Recognition', 'Absence SMS Triggers', 'Monthly Report Automations']
            },
            {
                title: 'Curriculum & Timetable Hub',
                desc: 'Optimize classroom and teacher allocation with a drag-and-drop visual timetable builder.',
                iconName: 'Calendar',
                items: ['Teacher Load Balancing', 'Room Conflict Alerts', 'Lesson Plan Tracking', 'Substitution Management']
            }
        ],
        benefits: [
            { title: 'Zero Fee Leakage', impact: 'Achieve 100% fee collection with automated reminders and online payment gateways.' },
            { title: 'Parent Trust', impact: 'Increase parent engagement by 60% with instant digital updates on their child’s progress.' },
            { title: 'Regulatory Compliance', impact: 'Generate government-mandated reports and student certificates with one click.' }
        ],
        useCases: [
            { scenario: 'K-12 Private Schools', solution: 'Coordinate complex daily operations for thousands of students across multiple grades.' },
            { scenario: 'International Schools', solution: 'Manage diverse curricula and multi-currency billing for a global student body.' },
            { scenario: 'School Chains', solution: 'Standardize academic quality and financial transparency across dozens of locations.' }
        ],
        integrations: ['Google Workspace for Education', 'Microsoft Teams', 'Stripe', 'Twilio', 'Zoom']
    },
    'student-information': {
        id: 'student-information',
        name: 'Student Information',
        title: 'Student Information',
        tagline: 'Immutable Academic Identity & Secure Student Data Lifecycle',
        description: 'The definitive source of truth for student records. Kiaan SIS ensures that every grade, certificate, and profile is secure and instantly accessible.',
        mainKeyword: 'DATA INTEGRITY',
        keywords: [
            'Student Information System',
            'SIS Software Platform',
            'Student Data Management',
            'Academic Records Software',
            'SaaS Student Portal',
            'School Data ERP',
            'Student Enrollment System',
            'Education CRM Tool',
            'Student Analytics Platform',
            'Digital Student Database'
        ],
        features: [
            {
                title: 'Digital Portfolio Vault',
                desc: 'Store everything from admission docs to final degrees in an encrypted, searchable cloud repository.',
                iconName: 'Lock',
                items: ['Document OCR', 'E-Signature Support', 'Multi-Level Permissions', 'Expiry Alerts']
            },
            {
                title: 'Automated Transcript Engine',
                desc: 'Generate perfect, professional academic transcripts and report cards based on real-time grade data.',
                iconName: 'FileText',
                items: ['GPA Math Logic', 'Custom Grading Scales', 'QR Code Verification', 'Bulk Export Tools']
            },
            {
                title: 'Admission Lifecycle Control',
                desc: 'Manage the entire journey from initial inquiry to final enrollment with automated application tracking.',
                iconName: 'Shuffle',
                items: ['Online Forms', 'Document Approval Pipes', 'Interview Scheduling', 'Waitlist Management']
            }
        ],
        benefits: [
            { title: 'Instant Access', impact: 'Retrieve any student record or historical grade in less than 5 seconds from the cloud.' },
            { title: 'Zero Forgery', impact: 'Secure certificates with QR-based digital verification to protect academic integrity.' },
            { title: 'Reduced Admin', impact: 'Save 100s of hours per semester by automating grade collation and transcript generation.' }
        ],
        useCases: [
            { scenario: 'Universities', solution: 'Manage complex degree requirements and research portfolios for diverse student bodies.' },
            { scenario: 'Niche Academies', solution: 'Track specific skill progression and professional certifications for adult learners.' },
            { scenario: 'Corporate Training', solution: 'Maintain learning records and compliance certificates for enterprise employees.' }
        ],
        integrations: ['Canvas', 'Moodle', 'Blackboard', 'DocuSign', 'Firebase']
    },
    'learning-management': {
        id: 'learning-management',
        name: 'Learning Management',
        title: 'Learning Management',
        tagline: 'Cognitive Growth Orchestration & Dynamic Content Delivery Excellence',
        description: 'Transform how you teach. Kiaan LMS provides a world-class environment for digital course delivery, interactive testing, and progress tracking.',
        mainKeyword: 'KNOWLEDGE TRANSFER',
        keywords: [
            'Learning Management System',
            'LMS Software Platform',
            'Online Learning Tool',
            'SaaS LMS Solution',
            'eLearning Management Software',
            'Course Delivery System',
            'Digital Classroom Platform',
            'Training Management System',
            'Education Automation Tool',
            'Virtual Learning Software'
        ],
        features: [
            {
                title: 'Rich Multimedia Player',
                desc: 'Deliver content via Video, PDF, Interactive HTML5, and Audio with instant progress saving.',
                iconName: 'PlayCircle',
                items: ['Video Hosting Sync', 'Resume-from-Left Logic', 'Subtitles Support', 'Download-for-Offline']
            },
            {
                title: 'AI Assessment Engine',
                desc: 'Create complex quizzes with automated grading and instant, personalized feedback for learners.',
                iconName: 'CheckCircle',
                items: ['Question Banks', 'Shuffled Options', 'Timed Tests', 'Grammar/Logic Analysis']
            },
            {
                title: 'Engagement Dashboards',
                desc: 'Track course completion rates and identify struggling students before they fall behind.',
                iconName: 'BarChart3',
                items: ['Completion Heatmaps', 'Forum Participation', 'Assignment Queues', 'Leaderboards']
            }
        ],
        benefits: [
            { title: 'Higher Completion', impact: 'Increase course finishing rates by 35% with gamified milestones and nudges.' },
            { title: 'Consistent Quality', impact: 'Deliver a standardized learning experience across any distance or timezone.' },
            { title: 'Actionable Data', impact: 'Identify exactly where students are getting stuck in your curriculum to iterate faster.' }
        ],
        useCases: [
            { scenario: 'Enterprise Training', solution: 'Onboard and upskill global teams with unified, tracked mandatory training.' },
            { scenario: 'Hybrid High Schools', solution: 'Blend in-person teaching with high-quality digital homework and resources.' },
            { scenario: 'Non-Profits', solution: 'Deliver critical education and skill-building modules to remote or underserved areas.' }
        ],
        integrations: ['Wistia', 'Vimeo', 'Typeform', 'Slack', 'LinkedIn Learning']
    },
    'online-course-saas': {
        id: 'online-course-saas',
        name: 'Online Course SaaS',
        title: 'Online Course SaaS',
        tagline: 'Instructor Empowerment & Global Knowledge Monetization',
        description: 'Build your own Masterclass. Kiaan Online Course SaaS provides independent instructors with the elite tools to market, sell, and host their expertise.',
        mainKeyword: 'EXPERT MONETIZATION',
        keywords: [
            'Online Course Platform',
            'eLearning SaaS Software',
            'Course Selling Platform',
            'Digital Training System',
            'SaaS Coaching Platform',
            'Membership Course Software',
            'Online Academy Tool',
            'Learning Subscription Platform',
            'Video Course Software',
            'Online Education CRM'
        ],
        features: [
            {
                title: 'White-Label Course Builder',
                desc: 'A stunning, drag-and-drop course creator that looks premium on any device by default.',
                iconName: 'Layout',
                items: ['Drip Content Setup', 'Subscription Models', 'Exclusive Communities', 'Certification Logic']
            },
            {
                title: 'High-Conversion Checkout',
                desc: 'Accept payments globally with one-click upsells, trial periods, and tiered membership options.',
                iconName: 'CreditCard',
                items: ['Stripe Connect Sync', 'Coupon Engine', 'Abandoned Cart Recovery', 'Global Tax Math']
            },
            {
                title: 'Integrated Affiliate Center',
                desc: 'Turn your students into partners with automated link generation and commission tracking.',
                iconName: 'Users',
                items: ['Partner Dashboards', 'Payout Automation', 'Banner Management', 'Cookie Tracking']
            }
        ],
        benefits: [
            { title: 'Scale to Thousands', impact: 'Sell your expertise to a global audience with zero incremental effort per student.' },
            { title: 'Premium Branding', impact: 'Ditch generic platforms and host courses on your own domain with elite aesthetics.' },
            { title: 'Predictable Revenue', impact: 'Build a sustainable business with recurring monthly memberships and subscriptions.' }
        ],
        useCases: [
            { scenario: 'Creative Professionals', solution: 'Sell high-value masterclasses on Photography, Design, or Music Production.' },
            { scenario: 'Business Consultants', solution: 'Scale your one-on-one advice into a scalable digital certification program.' },
            { scenario: 'Fitness Coaches', solution: 'Host workout videos and nutritional programs with recurring monthly access.' }
        ],
        integrations: ['Stripe', 'PayPal', 'Mailchimp', 'Klaviyo', 'Zapier']
    },
    'coaching-software': {
        id: 'coaching-software',
        name: 'Coaching Software',
        title: 'Coaching Software',
        tagline: 'High-Impact Mentor Orchestration & Direct Growth Tracking',
        description: 'Professional tools for professional mentors. Kiaan Coaching manages your appointments, goals, and client communication in one unified platform.',
        mainKeyword: 'MENTORSHIP EXCELLENCE',
        keywords: [
            'Coaching Institute Management',
            'Coaching ERP Software',
            'Batch Management Tool',
            'Student Coaching CRM',
            'SaaS Coaching Platform',
            'Exam Preparation Software',
            'Education Center Management',
            'Tuition Management System',
            'Coaching Attendance Software',
            'Institute ERP Tool'
        ],
        features: [
            {
                title: 'Interactive Goal Mapping',
                desc: 'Set OKRs or KPIs for your clients and track their progress with visual milestone charts.',
                iconName: 'Target',
                items: ['Visual Timelines', 'Nudge Alerts', 'Progress Verification', 'Collaborative Notes']
            },
            {
                title: 'Frictionless Booking',
                desc: 'A dedicated booking page that syncs with your calendar and prevents double-booking.',
                iconName: 'Calendar',
                items: ['Buffer Time Logic', 'Pre-payment Required', 'Reschedule Rules', 'Timezone Sync']
            },
            {
                title: 'Private Content Vault',
                desc: 'Share sensitive worksheets, session recordings, and custom resources securely with each client.',
                iconName: 'FolderLock',
                items: ['Selective Sharing', 'Client Upload Access', 'Comments & Feedback', 'Version Tracking']
            }
        ],
        benefits: [
            { title: 'Higher Accountability', impact: 'Improve client results by providing clear, visual tracking of their growth journey.' },
            { title: 'Save 10+ Hours/Week', impact: 'Automate scheduling, invoicing, and initial intake tasks completely.' },
            { title: 'Professional Image', impact: 'Impress high-ticket clients with a dedicated, secure, and branded digital home.' }
        ],
        useCases: [
            { scenario: 'Executive Coaches', solution: 'Manage high-value leadership programs for corporate directors and CEOs.' },
            { scenario: 'Life Coaches', solution: 'Organize intake forms and track holistic wellness goals across various dimensions.' },
            { scenario: 'Career Counselors', solution: 'Manage resume reviews, mock interview logs, and job search pipelines for students.' }
        ],
        integrations: ['Google Calendar', 'Calendly', 'Stripe', 'Microsoft Teams', 'Dropbox']
    },
    'examination-system': {
        id: 'examination-system',
        name: 'Examination System',
        title: 'Examination System',
        tagline: 'High-Integrity Assessment Orchestration & Fraud-Proof Testing Excellence',
        description: 'Secure, scalable, and fair. Kiaan Examination System manages everything from large-scale entrance exams to granular department tests.',
        mainKeyword: 'ASSESSMENT INTEGRITY',
        keywords: [
            'Online Examination Software',
            'Exam Management System',
            'Digital Exam Platform',
            'Assessment Software Tool',
            'SaaS Exam System',
            'Question Paper Management',
            'Test Evaluation Software',
            'Online Test Platform',
            'Result Management System',
            'Exam Analytics Tool'
        ],
        features: [
            {
                title: 'Industrial Question Bank',
                desc: 'Organize thousands of questions by difficulty, topic, and type (MCQ, Descriptive, etc.).',
                iconName: 'Database',
                items: ['Tag-Based Generation', 'Difficulty Math', 'Multi-Language Bank', 'Shuffling Logic']
            },
            {
                title: 'High-Trust Proctoring',
                desc: 'Monitor test-takers via AI video analysis, browser locking, and IP restrictions to prevent cheating.',
                iconName: 'Eye',
                items: ['Face detection', 'Tab-switch alerts', 'Audio Monitoring', 'Session Playback']
            },
            {
                title: 'Instant Mega-Grading',
                desc: 'Evaluate 10,000+ objective tests in seconds with detailed difficulty analysis and cohort reports.',
                iconName: 'BarChart3',
                items: ['Percentile Calculation', 'Topic Comparison', 'Difficulty Indexing', 'Instant Certificate Sync']
            }
        ],
        benefits: [
            { title: 'Zero Grading Errors', impact: 'Eliminate manual error risks with 100% accurate automated objective grading.' },
            { title: 'Scale Securely', impact: 'Conduct thousands of simultaneous exams without worrying about server crash or leaks.' },
            { title: 'Data-Driven Insights', impact: 'Identify overall class weaknesses through granular question-level analytics.' }
        ],
        useCases: [
            { scenario: 'National Board Exams', solution: 'Coordinate massive-scale testing with strict security and high-availability needs.' },
            { scenario: 'Recruitment Companies', solution: 'Perform rapid technical screening for thousands of job applicants globally.' },
            { scenario: 'Language Schools', solution: 'Manage speaking and listening tests with integrated audio recording and analysis.' }
        ],
        integrations: ['Respondus', 'ProctorU', 'OpenAI (for descriptive analysis)', 'Sinch (for alerts)', 'AWS']
    },
    'parent-portal-tool': {
        id: 'parent-portal-tool',
        name: 'Parent Portal Tool',
        title: 'Parent Portal Tool',
        tagline: 'Deepened Family Engagement & Transparent Academic Growth Insight',
        description: 'Bridge the gap between home and school. Kiaan Parent Portal provides a dedicated, high-trust space for parents to stay connected to their child’s daily journey.',
        mainKeyword: 'FAMILY TRANSPARENCY',
        keywords: [
            'Parent Portal Software',
            'School Parent App',
            'Student Progress Portal',
            'SaaS Parent Dashboard',
            'Academic Communication Tool',
            'School CRM Portal',
            'Parent Teacher Communication System',
            'Attendance Tracking Portal',
            'Student Report Portal',
            'Digital Parent Access'
        ],
        features: [
            {
                title: 'Live Student Feed',
                desc: 'A real-time update of grades, attendance, and teacher comments in a social-style mobile interface.',
                iconName: 'Activity',
                items: ['Push Notifications', 'Grade Milestones', 'Daily Activity Logs', 'Reward Badges']
            },
            {
                title: 'One-Tap Fee Payments',
                desc: 'Clear, transparent fee breakdown with instant payment and historical receipt download.',
                iconName: 'CreditCard',
                items: ['Fee Breakdown', 'Payment History', 'Automated Receipts', 'Installment Tracking']
            },
            {
                title: 'Teacher-Parent Messenger',
                desc: 'A secure, moderated channel for asking questions and receiving official school updates.',
                iconName: 'MessageSquare',
                items: ['Moderated Chat', 'Broadcast Messages', 'Document Sharing', 'Meeting Requests']
            }
        ],
        benefits: [
            { title: 'Eliminate Surprises', impact: 'Parents stay updated daily, preventing end-of-term shocks regarding grades or attendance.' },
            { title: 'Higher Engagement', impact: 'Schools with active portals see 40% higher participation in school events and surveys.' },
            { title: 'Admin Efficiency', impact: 'Reduce phone inquiries by 80% by putting all info at the parent’s fingertips.' }
        ],
        useCases: [
            { scenario: 'Preschools', solution: 'Share daily photos, meal logs, and nap schedules with anxious new parents.' },
            { scenario: 'Elite Boarding Schools', solution: 'Keep parents in different time zones updated on their child’s progress and well-being.' },
            { scenario: 'Sports Academies', solution: 'Coordinate practice schedules, travel plans, and performance metrics for young athletes.' }
        ],
        integrations: ['WhatsApp', 'Stripe', 'Firebase Messaging', 'Twilio', 'Google Calendar']
    }
};
