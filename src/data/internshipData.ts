// ─── Internship Page V2 Data ─────────────────────────────────────────────────

// Section 2: Why Students Choose Kiaan
export const whyStudentsChooseCards = [
    {
        emoji: '🚀',
        title: 'Real Projects',
        desc: 'Work on live software products used by real businesses — not dummy assignments.',
    },
    {
        emoji: '📜',
        title: 'Internship Certificate',
        desc: 'Receive an official internship completion certificate from a Private Limited company.',
    },
    {
        emoji: '💼',
        title: 'Portfolio Building',
        desc: 'Build a professional portfolio with 20+ real project contributions for your career.',
    },
    {
        emoji: '👨‍🏫',
        title: 'Industry Mentorship',
        desc: 'Learn directly from senior developers with years of industry experience.',
    },
    {
        emoji: '📈',
        title: 'Career Opportunities',
        desc: 'Gain practical skills, industry exposure, and career development support.',
    },
];

export const highlightQuote =
    'Most students graduate with theory. Our goal is to help you graduate with real project experience, a strong portfolio, industry exposure, and the confidence to work on professional software projects.';

// Section 4: Journey Steps
export const journeySteps = [
    { step: 1, title: 'Training & Foundations', desc: 'Core concepts, tools setup, and development environment onboarding.' },
    { step: 2, title: 'Technology Learning', desc: 'Deep dive into your chosen tech stack with guided exercises.' },
    { step: 3, title: 'Project Assignment', desc: 'Get assigned to a live project matching your skill track.' },
    { step: 4, title: 'Team Collaboration', desc: 'Work with professional teams using Agile workflows.' },
    { step: 5, title: 'Development & Deployment', desc: 'Build, test, and deploy real features to production.' },
    { step: 6, title: 'Evaluation & Certification', desc: 'Final assessment, feedback, and certification ceremony.' },
];

// Section 5: What Makes This Different
export const whyDifferentPoints = [
    { text: 'Work on Live Projects', desc: 'Contribute to real software being used by businesses' },
    { text: 'Learn From Senior Developers', desc: 'Direct mentorship from experienced professionals' },
    { text: 'Build Job-Ready Portfolio', desc: 'Projects that impress recruiters and hiring managers' },
    { text: 'Private Limited Company', desc: 'Official internship with a registered Pvt. Ltd. company' },
    { text: 'ISO Certified Organization', desc: 'Work with an internationally recognized company' },
    { text: 'SaaS Product Exposure', desc: 'Experience building cloud-based SaaS applications' },
    { text: 'Industry Workflows', desc: 'Learn Agile, Git, CI/CD, and professional workflows' },
    { text: 'Resume Support', desc: 'Get help crafting a professional, job-ready resume' },
    { text: 'LinkedIn Optimization', desc: 'Guidance on building a strong professional online presence' },
];

// Section 6: Trust Building Content
export const trustBuildingTags = [
    'SaaS Products',
    'CRM Systems',
    'ERP Platforms',
    'AI Applications',
    'Cloud Products',
    'Enterprise Software',
];

export const trustBuildingOpportunities = [
    { icon: 'code', title: 'Live Project Work', desc: 'Contribute to actual software development projects' },
    { icon: 'users', title: 'Professional Team Collaboration', desc: 'Work alongside experienced development teams' },
    { icon: 'terminal', title: 'Industry Tools', desc: 'Use professional-grade development tools and platforms' },
    { icon: 'briefcase', title: 'Client Workflow Exposure', desc: 'Understand real business requirements and delivery' },
    { icon: 'folder', title: 'Portfolio Development', desc: 'Build a strong portfolio with real project contributions' },
    { icon: 'mentor', title: 'Mentorship', desc: 'Receive guidance from senior industry professionals' },
];

// Section 10: Student Outcomes
export const studentOutcomes = [
    { title: 'Professional Portfolio', desc: 'A curated collection of real projects you built during the program' },
    { title: 'GitHub Project Contributions', desc: 'Verified commits and contributions on professional repositories' },
    { title: 'Resume Enhancement', desc: 'Industry experience and project details that strengthen your resume' },
    { title: 'LinkedIn Profile Improvements', desc: 'Professional profile with real company experience and endorsements' },
    { title: 'Real Project Experience', desc: 'Hands-on experience working on live software products' },
    { title: 'Industry Exposure', desc: 'Understanding of professional workflows, tools, and team dynamics' },
    { title: 'Technical Assessments', desc: 'Performance evaluations that validate your technical growth' },
    { title: 'Professional References', desc: 'Recommendations from industry mentors for top performers' },
    { title: 'Certification', desc: 'Official internship and experience certificates from the company' },
    { title: 'Better Career Readiness', desc: 'Confidence and skills to excel in technical interviews and roles' },
];

// Section 11: 60+ Benefits (Accordion)
export interface BenefitCategory {
    id: string;
    title: string;
    emoji: string;
    items: string[];
}

export const benefitsData: BenefitCategory[] = [
    {
        id: 'industry',
        title: 'Industry Experience',
        emoji: '🏢',
        items: [
            'Work on real live client projects',
            'Exposure to actual software development lifecycle',
            'Hands-on industry training',
            'Practical learning instead of theory',
            'Agile project workflow experience',
            'Team collaboration experience',
            'Client requirement understanding',
            'Professional project documentation',
            'Bug fixing and maintenance experience',
            'Production deployment exposure',
        ],
    },
    {
        id: 'portfolio',
        title: 'Portfolio Building',
        emoji: '💼',
        items: [
            'Work on 20+ real projects',
            'Build professional portfolio',
            'Portfolio review by mentors',
            'Resume enhancement support',
            'LinkedIn profile optimization guidance',
            'GitHub portfolio development',
            'Case study creation support',
            'Real project screenshots and references',
            'Project presentation skills',
            'Professional project showcase material',
        ],
    },
    {
        id: 'mentorship',
        title: 'Mentorship',
        emoji: '👨‍🏫',
        items: [
            'Training by senior developers',
            'Guidance from industry professionals',
            'Weekly mentoring sessions',
            'One-on-one doubt clearing sessions',
            'Career roadmap planning',
            'Interview preparation sessions',
            'Technical assessment guidance',
            'Industry best practices training',
            'Code review sessions',
            'Professional communication training',
        ],
    },
    {
        id: 'career',
        title: 'Career Development',
        emoji: '📈',
        items: [
            'Internship Completion Certificate',
            'Experience Certificate (based on completion criteria)',
            'Letter of Recommendation for top performers',
            'Performance Evaluation Report',
            'Soft skills development',
            'Problem-solving skill enhancement',
            'Professional work culture exposure',
            'Team leadership opportunities',
            'Time management training',
            'Workplace ethics and professionalism training',
        ],
    },
    {
        id: 'technology',
        title: 'Technology Exposure',
        emoji: '⚡',
        items: [
            'Exposure to Cloud Applications',
            'SaaS Product Development Experience',
            'CRM Development Exposure',
            'AI Tools Usage Training',
            'Modern Web Development Stack',
            'API Integration Experience',
            'Database Management Training',
            'Deployment & Hosting Exposure',
            'Security Best Practices',
            'Version Control (Git/GitHub) Experience',
        ],
    },
    {
        id: 'additional',
        title: 'Additional Benefits',
        emoji: '🎁',
        items: [
            'Access to recorded training sessions',
            'Lifetime alumni community access',
            'Networking with professionals',
            'Industry webinars and workshops',
            'Freelancing guidance sessions',
            'Startup and entrepreneurship exposure',
            'Business workflow understanding',
            'Real client meeting observation opportunities',
            'Productivity and AI automation training',
            'Top performers may be considered for future paid opportunities',
        ],
    },
];

// Section 15: FAQ
export const faqData = [
    {
        q: 'Is this a coaching institute?',
        a: 'No. Kiaan Technology is a registered Private Limited software development company. We are not a coaching institute, tuition center, or classroom-based training organization. Our internship program provides real industry experience through live software projects.',
    },
    {
        q: 'What is the fee structure?',
        a: 'The total program fee is ₹40,000, payable in three installments: ₹20,000 at joining, ₹10,000 after one month, and ₹10,000 after two months. This covers your complete training, project access, mentorship, and certification.',
    },
    {
        q: 'Will I work on live projects?',
        a: 'Yes. You will work on actual software projects including SaaS products, CRM systems, AI applications, and cloud-based solutions that are being built for real business requirements.',
    },
    {
        q: 'Will I get certificates?',
        a: 'Yes. Upon successful completion, you will receive an Internship Completion Certificate. Based on performance and completion criteria, you may also receive an Experience Certificate and Letter of Recommendation.',
    },
    {
        q: 'Is placement guaranteed?',
        a: 'We do not guarantee placement. However, our program is designed to make you industry-ready through real project experience, portfolio building, resume support, and interview preparation. Top performers may be considered for future opportunities within the company.',
    },
    {
        q: 'What technologies are covered?',
        a: 'Our programs cover modern tech stacks including React, Next.js, Node.js, Flutter, Python, AI/ML tools, cloud platforms (AWS), databases, DevOps tools, and more — depending on your chosen track.',
    },
    {
        q: 'Can beginners apply?',
        a: 'Yes, beginners with basic programming knowledge can apply. Our program starts with foundational training before moving to project work. However, having some prior coding experience is helpful.',
    },
    {
        q: 'What is the duration?',
        a: 'The standard program duration is 3 to 6 months depending on the track and your learning pace. This includes training, project work, and evaluation phases.',
    },
    {
        q: 'How are students evaluated?',
        a: 'Students are evaluated based on project milestones, code quality, team collaboration, learning progress, and final project deliverables. Regular assessments and mentor feedback are part of the evaluation process.',
    },
    {
        q: 'Is the program online or offline?',
        a: 'Currently, we offer on-site internships at our office with direct mentorship, collaborative project environments, and professional team interaction.',
    },
    {
        q: 'What reward can students receive?',
        a: 'Eligible students who successfully complete project milestones, internship requirements, and company evaluation criteria may receive up to ₹20,000 as a performance-based reward, subject to company policy.',
    },
];
