"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Rocket,
    Terminal,
    Cpu,
    Search,
    Cloud,
    CheckCircle2,
    Users,
    Calendar,
    Code,
    Layout,
    Smartphone,
    BarChart,
    ShieldCheck,
    Zap,
    ChevronDown,
    ChevronRight,
    ArrowLeft,
    Building,
    Award,
    Briefcase,
    FolderGit2,
    GraduationCap,
    Star,
} from 'lucide-react';
import { Button } from '@/components/Button';
import emailjs from '@emailjs/browser';
import { trackGAEvent, trackGTMEvent } from '@/utils/analytics';
import { getStoredUTMParams } from '@/utils/utm';
import {
    whyStudentsChooseCards,
    highlightQuote,
    journeySteps,
    whyDifferentPoints,
    trustBuildingTags,
    trustBuildingOpportunities,
    studentOutcomes,
    benefitsData,
    faqData,
} from '@/data/internshipData';

const EMAILJS_SERVICE_ID = 'service_opc05wm';
const EMAILJS_TEMPLATE_ID = 'template_jpwu4pp';
const EMAILJS_PUBLIC_KEY = 'zXyGNtU81gEw6BmhH';

interface Program {
    title: string;
    slug: string;
}

interface Category {
    id: string;
    title: string;
    icon: React.ReactNode;
    keywords: string;
    programs: Program[];
}

const internshipCategories: Category[] = [
    {
        id: 'web',
        title: 'Web Development Internships',
        icon: <Layout className="text-blue-500" size={24} />,
        keywords: 'full stack internship, web development internship',
        programs: [
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
        id: 'mobile',
        title: 'Mobile App Development Internships',
        icon: <Smartphone className="text-purple-500" size={24} />,
        keywords: 'app development internship, AI app development internship',
        programs: [
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
        id: 'ai',
        title: 'AI-Powered Development Internships',
        icon: <Cpu className="text-yellow-500" size={24} />,
        keywords: 'AI web development internship, AI internship program',
        programs: [
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
        id: 'data',
        title: 'Data Science & Machine Learning',
        icon: <BarChart className="text-green-500" size={24} />,
        keywords: 'machine learning internship',
        programs: [
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
        id: 'seo',
        title: 'SEO & Digital Growth Internships',
        icon: <Search className="text-orange-500" size={24} />,
        keywords: 'SEO internship with certificate, digital marketing internship',
        programs: [
            { title: 'Search Engine Optimization (SEO) Internship', slug: 'seo-internship' },
            { title: 'AI-Driven SEO Automation Internship', slug: 'ai-driven-seo-automation-internship' },
            { title: 'Digital Marketing Strategy Internship', slug: 'digital-marketing-strategy-internship' },
            { title: 'Content Growth Engineering Internship', slug: 'content-growth-engineering-internship' },
            { title: 'Technical SEO & Site Audit Internship', slug: 'technical-seo-site-audit-internship' },
            { title: 'Growth Hacking for SaaS Internship', slug: 'growth-hacking-for-saas-internship' }
        ]
    },
    {
        id: 'devops',
        title: 'DevOps & Cloud Internships',
        icon: <Cloud className="text-cyan-500" size={24} />,
        keywords: 'software developer internship, SaaS developer internship',
        programs: [
            { title: 'Cloud Deployment & AWS Internship', slug: 'aws-cloud' },
            { title: 'DevOps Engineering (Docker/K8s) Internship', slug: 'devops-engineering-docker-k8s-internship' },
            { title: 'CI/CD Pipeline Automation Internship', slug: 'ci-cd-pipeline-automation-internship' },
            { title: 'Cloud-Native SaaS Infrastructure Internship', slug: 'cloud-native-saas-infrastructure-internship' },
            { title: 'Cybersecurity & DevSecOps Internship', slug: 'cybersecurity-devsecops-internship' }
        ]
    }
];

// Trust building icon mapper
const trustIconMap: Record<string, React.ReactNode> = {
    code: <Code size={20} />,
    users: <Users size={20} />,
    terminal: <Terminal size={20} />,
    briefcase: <Briefcase size={20} />,
    folder: <FolderGit2 size={20} />,
    mentor: <GraduationCap size={20} />,
};

// Benefits category icon mapper
const benefitCategoryIcons: Record<string, React.ReactNode> = {
    industry: <Building size={20} />,
    portfolio: <FolderGit2 size={20} />,
    mentorship: <GraduationCap size={20} />,
    career: <Award size={20} />,
    technology: <Zap size={20} />,
    additional: <Star size={20} />,
};

export default function InternshipPage() {
    const [activeTab, setActiveTab] = useState('web');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        program: '',
        education: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [openBenefit, setOpenBenefit] = useState<string | null>('industry');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setErrorMessage('');

        const utm = getStoredUTMParams();

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name || 'N/A',
                    email: formData.email || 'N/A',
                    company: 'Internship Application',
                    contact_number: formData.whatsapp || 'N/A',
                    contact_method: 'WhatsApp / Email',
                    industry: selectedCategory
                        ? internshipCategories.find(c => c.id === selectedCategory)?.title || 'Internship Program'
                        : 'Internship Program',
                    project_type: formData.program || 'N/A',
                    features: selectedCategory || 'N/A',
                    vision: formData.education || 'N/A',
                    budget: 'N/A',
                    timeline: 'N/A',
                    submitted_at: new Date().toLocaleString(),
                    message: [
                        'Application Type: Innovation Lab Track',
                        `Name: ${formData.name || 'N/A'}`,
                        `Email: ${formData.email || 'N/A'}`,
                        `WhatsApp: ${formData.whatsapp || 'N/A'}`,
                        `Selected Category: ${selectedCategory ? internshipCategories.find(c => c.id === selectedCategory)?.title || selectedCategory : 'N/A'}`,
                        `Selected Program: ${formData.program || 'N/A'}`,
                        `Education: ${formData.education || 'N/A'}`,
                        `UTM Source: ${utm?.utm_source || 'Direct/None'}`,
                        `UTM Medium: ${utm?.utm_medium || 'Direct/None'}`,
                        `UTM Campaign: ${utm?.utm_campaign || 'Direct/None'}`,
                        `UTM Term: ${utm?.utm_term || 'Direct/None'}`,
                        `UTM Content: ${utm?.utm_content || 'Direct/None'}`,
                        `Referral Code: ${utm?.ref || 'None'}`
                    ].join('\n')
                },
                EMAILJS_PUBLIC_KEY
            );

            try {
                await fetch('/api/leads/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        leadType: 'internship',
                        leadSource: 'internship_application',
                        fullName: formData.name,
                        email: formData.email,
                        phone: formData.whatsapp,
                        serviceInterest: formData.program || 'Internship Program',
                        message: `Education: ${formData.education || 'N/A'} | Category: ${selectedCategory || 'N/A'}`,
                        sourcePage: '/internship'
                    })
                });
            } catch (err) {
                console.warn('Backend internship lead sync notice:', err);
            }

            setFormStatus('success');
            trackGAEvent('form_submit', 'Lead Generation', 'Internship Application');
            trackGTMEvent('form_submit', { form_name: 'Internship Application', program: formData.program });
            setFormData({ name: '', email: '', whatsapp: '', program: '', education: '' });
            setSelectedCategory('');
        } catch {
            setFormStatus('error');
            setErrorMessage('Application send nahi ho paayi. Please try again.');
        }
    };

    // ── Section animation presets ──
    const sectionFade = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
        },
    };

    const staggerItem = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
    };

    return (
        <div className="bg-black min-h-screen pt-6 lg:pt-8 pb-10 selection:bg-yellow-500 selection:text-black">

            {/* ════════════════════════════════════════════════════════════════
                SECTION 1: HERO
            ════════════════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-4 sm:px-6 mb-8 text-center relative max-w-5xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-[0.25em] mb-3 rounded-full">
                        Real Projects • Real Experience • Real Growth
                    </span>

                    <h1 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white mb-3 leading-tight">
                        Kiaan Technology <span className="text-yellow-500">Innovation Lab</span>
                    </h1>

                    <p className="text-sm md:text-base text-zinc-400 mb-5 max-w-2xl mx-auto leading-relaxed">
                        Work on real software projects, learn from industry professionals, build your portfolio, and gain practical experience inside a real software development company.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                        {[
                            { text: 'Live Project Experience', icon: <CheckCircle2 size={15} /> },
                            { text: 'Internship Certification', icon: <CheckCircle2 size={15} /> },
                            { text: 'Industry Mentorship', icon: <CheckCircle2 size={15} /> },
                            { text: 'Career Development Support', icon: <CheckCircle2 size={15} /> }
                        ].map((badge) => (
                            <div key={badge.text} className="flex items-center gap-1.5 px-3.5 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-300 text-xs font-bold">
                                <span className="text-yellow-500">{badge.icon}</span>
                                {badge.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link href="#apply" className="w-full sm:w-auto">
                            <Button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 border-none text-black rounded-none skew-x-[-12deg] px-8 h-12 text-xs font-black uppercase tracking-[0.15em]">
                                <span className="skew-x-[12deg] flex items-center gap-2">
                                    Join The Lab <Rocket size={16} />
                                </span>
                            </Button>
                        </Link>
                        <Link href="#counseling" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full sm:w-auto border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 text-xs font-black uppercase tracking-widest h-12 px-8 rounded-none transition-all">
                                Book Free Training Call
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 2: WHY STUDENTS CHOOSE KIAAN
            ════════════════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-4 sm:px-6 mb-8 max-w-6xl">
                <motion.div {...sectionFade} className="text-center mb-5">
                    <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] mb-1.5 block">WHY CHOOSE US</span>
                    <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-1.5">
                        Why Students Choose <span className="text-yellow-500">Kiaan Technology</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto text-xs sm:text-sm">Five core reasons students trust us with their career development.</p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-10"
                >
                    {whyStudentsChooseCards.map((card) => (
                        <motion.div
                            key={card.title}
                            variants={staggerItem}
                            className="group p-6 bg-zinc-950 border border-zinc-800/80 hover:border-yellow-500/40 transition-all duration-500 text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-yellow-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <span className="text-3xl mb-4 block">{card.emoji}</span>
                                <h3 className="text-white font-bold text-sm mb-2">{card.title}</h3>
                                <p className="text-zinc-500 text-xs leading-relaxed">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Highlight Quote */}
                <motion.div {...sectionFade} className="max-w-3xl mx-auto">
                    <div className="border-l-2 border-yellow-500/60 pl-6 py-2">
                        <p className="text-zinc-400 text-sm leading-relaxed italic">
                            &ldquo;{highlightQuote}&rdquo;
                        </p>
                    </div>
                </motion.div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 3: PROGRAM FEE + PERFORMANCE REWARD
            ════════════════════════════════════════════════════════════════ */}
            <section className="bg-zinc-950/50 border-y border-zinc-900 py-6 mb-8">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <motion.div {...sectionFade} className="text-center mb-5">
                        <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] mb-1.5 block">INVESTMENT</span>
                        <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-1.5">
                            Program Fee <span className="text-yellow-500">Structure</span>
                        </h2>
                        <p className="text-zinc-500 max-w-xl mx-auto text-xs sm:text-sm">Transparent pricing with flexible payment options.</p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        {/* Pricing Card */}
                        <motion.div
                            {...sectionFade}
                            className="pricing-glow bg-zinc-950 border border-zinc-800 p-5 md:p-6 mb-4 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 blur-[80px] rounded-full" />
                            <div className="relative z-10">
                                <div className="text-center mb-4">
                                    <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Total Program Fee</span>
                                    <div className="text-3xl md:text-4xl font-display text-white mt-1">
                                        ₹<span className="text-yellow-500">40,000</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-2">
                                    {[
                                        { label: 'At Joining', amount: '₹20,000', highlight: true, step: 1 },
                                        { label: 'After Month 1', amount: '₹10,000', highlight: false, step: 2 },
                                        { label: 'After Month 2', amount: '₹10,000', highlight: false, step: 3 },
                                    ].map((row, idx) => (
                                        <React.Fragment key={row.label}>
                                            <div className={`flex-1 p-4 border ${row.highlight ? 'border-yellow-500/30 bg-yellow-500/[0.03]' : 'border-zinc-850 bg-zinc-900/10'} flex flex-col justify-center items-center text-center relative`}>
                                                <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-0.5">Step 0{row.step}</span>
                                                <span className="text-zinc-400 text-xs font-medium mb-1">{row.label}</span>
                                                <span className={`text-lg font-display font-bold ${row.highlight ? 'text-yellow-500' : 'text-white'}`}>
                                                    {row.amount}
                                                </span>
                                            </div>
                                            {idx < 2 && (
                                                <div className="flex items-center justify-center py-1 md:py-0 md:px-1 shrink-0">
                                                    <ChevronRight className="hidden md:block text-yellow-500/60" size={16} />
                                                    <ChevronDown className="block md:hidden text-yellow-500/60" size={16} />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Performance Reward Box */}
                        <motion.div
                            {...sectionFade}
                            className="reward-pulse bg-zinc-950 border border-yellow-500/30 p-4 md:p-5 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-yellow-500/[0.03]" />
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 shrink-0">
                                    <Award size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xs sm:text-sm mb-0.5">
                                        Up to ₹20,000 Performance Reward
                                    </h4>
                                    <p className="text-zinc-500 text-xs leading-relaxed">
                                        Eligible students who successfully complete project milestones, internship requirements, and evaluation criteria may be considered for a performance-based reward, subject to company policy.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 4: YOUR JOURNEY
            ════════════════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-4 sm:px-6 mb-8 max-w-5xl">
                <motion.div {...sectionFade} className="text-center mb-5">
                    <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] mb-1.5 block">YOUR PATH</span>
                    <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-1.5">
                        Your <span className="text-yellow-500">Internship Journey</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto text-xs sm:text-sm">From foundations to certification — your step-by-step development path.</p>
                </motion.div>

                {/* Desktop Timeline (horizontal) */}
                <div className="hidden lg:block max-w-5xl mx-auto relative">
                    <div className="timeline-connector" />
                    <div className="grid grid-cols-6 gap-3 relative z-10">
                        {journeySteps.map((step, idx) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-yellow-500 flex items-center justify-center text-zinc-400 group-hover:text-yellow-500 font-black text-xs transition-all duration-300 mb-2.5">
                                    {step.step}
                                </div>
                                <h4 className="text-white font-bold text-xs mb-0.5 leading-tight">{step.title}</h4>
                                <p className="text-zinc-600 text-[10px] leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline (vertical) */}
                <div className="lg:hidden max-w-md mx-auto relative">
                    <div className="timeline-connector-vertical" />
                    <div className="space-y-4 relative z-10">
                        {journeySteps.map((step, idx) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="flex items-start gap-3.5 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-yellow-500 flex items-center justify-center text-zinc-400 group-hover:text-yellow-500 font-black text-xs transition-all shrink-0">
                                    {step.step}
                                </div>
                                <div className="pt-1">
                                    <h4 className="text-white font-bold text-xs mb-0.5">{step.title}</h4>
                                    <p className="text-zinc-500 text-[11px] leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 5: WHAT MAKES THIS DIFFERENT
            ════════════════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-4 sm:px-6 mb-8 max-w-5xl">
                <motion.div {...sectionFade} className="text-center mb-5">
                    <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] mb-1.5 block">DIFFERENTIATORS</span>
                    <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-1.5">
                        What Makes This Program <span className="text-yellow-500">Different?</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 max-w-5xl mx-auto"
                >
                    {whyDifferentPoints.map((point) => (
                        <motion.div
                            key={point.text}
                            variants={staggerItem}
                            className="group flex items-start gap-3 p-4 bg-zinc-950 border border-zinc-800/80 hover:border-yellow-500/40 transition-all duration-300"
                        >
                            <CheckCircle2 size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-xs mb-0.5">{point.text}</h4>
                                <p className="text-zinc-500 text-[11px] leading-relaxed">{point.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 6: IMPORTANT NOTE FOR STUDENTS & PARENTS
            ════════════════════════════════════════════════════════════════ */}
            <section className="bg-zinc-950/50 border-y border-zinc-900 py-6 mb-8">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6">
                        {/* Left — Content */}
                        <motion.div {...sectionFade} className="lg:w-3/5">
                            <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] mb-2 block">IMPORTANT NOTE</span>
                            <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-2.5 leading-tight">
                                Not a Coaching Institute.<br />
                                <span className="text-yellow-500">A Real Software Company.</span>
                            </h2>
                            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3">
                                We are a registered Private Limited software development company actively working on live client projects, SaaS platforms, cloud applications, CRM systems, ERP solutions, AI-powered applications, and enterprise software products.
                            </p>
                            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-4">
                                Our internship and training program is designed to bridge the gap between academic education and real industry requirements. Unlike traditional institutes that focus primarily on theoretical concepts, our objective is to provide students with practical industry exposure through real-world projects and professional work environments.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {trustBuildingTags.map((tag) => (
                                    <span key={tag} className="trust-tag">{tag}</span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — Opportunity Cards */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5"
                        >
                            {trustBuildingOpportunities.map((item) => (
                                <motion.div
                                    key={item.title}
                                    variants={staggerItem}
                                    className="flex items-start gap-2.5 p-3.5 bg-black/40 border border-zinc-800/60 hover:border-zinc-700 transition-colors"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-yellow-500 shrink-0">
                                        {trustIconMap[item.icon] || <Code size={18} />}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-xs mb-0.5">{item.title}</h4>
                                        <p className="text-zinc-600 text-[10px] leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 7: CHOOSE YOUR INNOVATION LAB TRACK
            ════════════════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-4 sm:px-6 mb-8 max-w-5xl">
                <motion.div {...sectionFade} className="text-center mb-4">
                    <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] mb-1.5 block">EXPLORE TRACKS</span>
                    <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-1.5">Choose Your Innovation Lab Track</h2>
                    <p className="text-zinc-500 max-w-xl mx-auto text-xs sm:text-sm">Explore 40+ specialized engineering tracks tailored for career growth.</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mb-5 max-w-5xl mx-auto">
                    {internshipCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-4 py-2.5 border transition-all duration-300 flex items-center gap-2 ${activeTab === cat.id
                                ? 'bg-zinc-900 border-yellow-500 text-white'
                                : 'bg-transparent border-zinc-900 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                                }`}
                        >
                            {cat.icon}
                            <span className="text-xs font-bold uppercase tracking-wider">{cat.title.replace(' Internships', '')}</span>
                        </button>
                    ))}
                </div>

                {/* ── SECTION 8: INTERNSHIP PROGRAMS ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {internshipCategories.find(c => c.id === activeTab)?.programs.map((program, index) => {
                            return (
                                <Link
                                    key={program.title}
                                    href={`/internship/${program.slug}`}
                                    className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-0.75rem)]"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group p-4 bg-zinc-900/40 border border-zinc-800/80 hover:border-yellow-500/50 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer hover:shadow-[0_0_30px_rgba(234,179,8,0.08)] hover:bg-zinc-900/60"
                                    >
                                        <div>
                                            <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 mb-2.5 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                                                <Terminal size={12} />
                                            </div>
                                            <h3 className="text-sm font-bold text-white mb-1 leading-tight group-hover:text-yellow-500 transition-colors">
                                                {program.title}
                                            </h3>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white">Live Projects</span>
                                            <Rocket size={12} className="text-yellow-500" />
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 9: REAL PROJECTS SHOWCASE
            ════════════════════════════════════════════════════════════════ */}
            <section className="bg-zinc-950/50 border-y border-zinc-900 py-6 mb-8">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <motion.div {...sectionFade} className="text-center mb-4">
                        <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] mb-1.5 block">EXPERIMENTAL R&D</span>
                        <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-1.5">
                            Real Projects <span className="text-yellow-500">You May Work On</span>
                        </h2>
                        <p className="text-zinc-500 max-w-2xl mx-auto text-xs sm:text-sm">See the high-performance enterprise tools our interns are building today.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {[
                            { title: 'AI Trading Bot Template', desc: 'A micro-SaaS starter kit integrating Binance API with local LLM sentiment analysis.', tags: ['Python', 'FastAPI', 'Next.js'] },
                            { title: 'Healthcare Patient Portal UI', desc: 'A HIPAA-compliant, fully accessible React frontend designed for telemedicine clinics.', tags: ['React', 'Tailwind', 'Accessibility'] },
                            { title: 'Serverless CRM Engine', desc: 'A scalable backend infrastructure utilizing AWS Lambda and DynamoDB for high-throughput CRM operations.', tags: ['AWS Lambda', 'Node.js', 'DynamoDB'] },
                            { title: 'Flutter Fleet Tracker', desc: 'Cross-platform mobile application with real-time Mapbox integration for logistics management.', tags: ['Flutter', 'Mapbox', 'Firebase'] },
                            { title: 'Automated SEO Auditor', desc: 'An internal tool that scrapes websites and scores them based on 40+ technical SEO factors.', tags: ['Node.js', 'Puppeteer', 'Next.js'] },
                            { title: 'Micro-Frontend Architecture Demo', desc: 'A modular e-commerce frontend demonstrating module federation with React.', tags: ['React', 'Webpack 5', 'Redux'] }
                        ].map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-4 bg-black border border-zinc-800 hover:border-yellow-500 transition-colors"
                            >
                                <div className="mb-2.5">
                                    <h3 className="text-sm font-bold text-white mb-1">{project.title}</h3>
                                    <p className="text-xs text-zinc-500">{project.desc}</p>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[8.5px] font-black uppercase tracking-widest text-zinc-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 10: STUDENT OUTCOMES
            ════════════════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-4 sm:px-6 py-6 mb-8 max-w-5xl">
                <motion.div {...sectionFade} className="text-center mb-4">
                    <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] mb-1.5 block">OUTCOMES</span>
                    <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-1.5">
                        By Program Completion <span className="text-yellow-500">You May Have</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto text-xs sm:text-sm">Tangible outcomes that enhance your career readiness.</p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-4xl mx-auto"
                >
                    {studentOutcomes.map((outcome) => (
                        <motion.div
                            key={outcome.title}
                            variants={staggerItem}
                            className="group flex items-start gap-3 p-4 bg-zinc-950 border border-zinc-800/80 hover:border-green-500/30 transition-all duration-300"
                        >
                            <div className="w-7 h-7 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                <CheckCircle2 size={14} className="text-green-500" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xs mb-0.5">{outcome.title}</h4>
                                <p className="text-zinc-500 text-[11px] leading-relaxed">{outcome.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 11: 60+ BENEFITS (Accordion)
            ════════════════════════════════════════════════════════════════ */}
            <section className="bg-zinc-950/50 border-y border-zinc-900 py-6 mb-8">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <motion.div {...sectionFade} className="text-center mb-4">
                        <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] mb-1.5 block">COMPREHENSIVE</span>
                        <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-1.5">
                            60+ <span className="text-yellow-500">Benefits</span> of Joining
                        </h2>
                        <p className="text-zinc-500 max-w-xl mx-auto text-xs sm:text-sm">Everything you gain from our Innovation Lab program.</p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-2.5">
                        {benefitsData.map((category) => {
                            const isOpen = openBenefit === category.id;
                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-zinc-950 border border-zinc-800/80 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenBenefit(isOpen ? null : category.id)}
                                        className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-zinc-900/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-yellow-500">
                                                {benefitCategoryIcons[category.id] || <Star size={16} />}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-xs sm:text-sm">{category.emoji} {category.title}</h4>
                                                <span className="text-zinc-600 text-[9px] font-bold">{category.items.length} benefits</span>
                                            </div>
                                        </div>
                                        <ChevronDown
                                            size={16}
                                            className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-yellow-500' : ''}`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 pb-4 pt-1 border-t border-zinc-800/50">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        {category.items.map((item, idx) => (
                                                            <div key={idx} className="flex items-start gap-2 py-1">
                                                                <span className="benefit-counter">{idx + 1}</span>
                                                                <span className="text-zinc-400 text-xs leading-relaxed">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 12: APPLICATION FORM
            ════════════════════════════════════════════════════════════════ */}
            <section id="apply" className="container mx-auto px-4 sm:px-6 mb-8 max-w-5xl">
                <div className="max-w-4xl mx-auto flex flex-col lg:flex-row bg-zinc-950 border border-zinc-900 relative">
                    <div className="absolute inset-0 bg-yellow-500/[0.02] pointer-events-none" />

                    <div className="lg:w-2/5 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-zinc-900 bg-black/40">
                        <h2 className="text-xl md:text-2xl font-display text-white mb-3 leading-tight">Apply for Your <br /><span className="text-yellow-500">Innovation Lab Track</span></h2>
                        <p className="text-zinc-500 mb-5 text-xs sm:text-sm">Take the first step towards your career. Fill out the form below and our team will get back to you.</p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-zinc-400">
                                <Calendar size={16} className="text-yellow-500" />
                                <span className="text-xs">Seats limited every month. Apply early.</span>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-400">
                                <ShieldCheck size={16} className="text-yellow-500" />
                                <span className="text-xs">Authorized Internship Certificates</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/5 p-6 md:p-8 relative">
                        <form onSubmit={handleSubmit} className="space-y-3.5">
                            {formStatus === 'error' && errorMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center font-bold"
                                >
                                    {errorMessage}
                                </motion.div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="w-full bg-zinc-900 border border-zinc-800 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-yellow-500 transition-all placeholder:text-zinc-700"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className="w-full bg-zinc-900 border border-zinc-800 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-yellow-500 transition-all placeholder:text-zinc-700"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">WhatsApp Number</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.whatsapp}
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-zinc-900 border border-zinc-800 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-yellow-500 transition-all placeholder:text-zinc-700"
                                    />
                                </div>
                                <div className="space-y-1 relative" id="program-selector">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                                        Select Internship Program
                                    </label>

                                    <div className="relative group/selector">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const el = document.getElementById('program-menu');
                                                if (el) el.classList.toggle('hidden');
                                            }}
                                            className="w-full bg-zinc-900 border border-zinc-800 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-yellow-500 transition-all text-left flex justify-between items-center group"
                                        >
                                            <span className={formData.program ? 'text-white font-bold' : 'text-zinc-500'}>
                                                {formData.program || (selectedCategory ? 'Choose specialized program' : 'Choose a category')}
                                            </span>
                                            <ChevronRight size={14} className={`text-zinc-500 transition-transform ${formData.program ? 'rotate-90 text-yellow-500' : ''}`} />
                                        </button>

                                        <div id="program-menu" className="hidden absolute z-50 left-0 right-0 mt-2 bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden min-h-[250px]">
                                            <AnimatePresence mode="wait">
                                                {!selectedCategory ? (
                                                    <motion.div
                                                        key="categories"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: -20 }}
                                                        className="p-2 space-y-1"
                                                    >
                                                        <div className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-600 border-b border-zinc-900 mb-2">Main Categories</div>
                                                        {internshipCategories.map(cat => (
                                                            <button
                                                                key={cat.id}
                                                                type="button"
                                                                onClick={() => setSelectedCategory(cat.id)}
                                                                className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-zinc-900 text-white transition-colors group/item"
                                                            >
                                                                <div className="flex items-center gap-2.5">
                                                                    <div className="text-zinc-500 group-hover/item:text-yellow-500 transition-colors">
                                                                        {cat.icon}
                                                                    </div>
                                                                    <span className="font-bold uppercase text-xs tracking-wider">{cat.title.replace(' Internships', '')}</span>
                                                                </div>
                                                                <ChevronRight size={14} className="text-zinc-700 group-hover/item:translate-x-1 transition-transform" />
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="programs"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 20 }}
                                                        className="p-2 space-y-1"
                                                    >
                                                        <button
                                                            type="button"
                                                            onClick={() => setSelectedCategory('')}
                                                            className="w-full flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-yellow-500 hover:bg-yellow-500/5 transition-colors mb-2"
                                                        >
                                                            <ArrowLeft size={12} /> Back to Categories
                                                        </button>
                                                        <div className="px-4 py-1 text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-900/50 rounded pointer-events-none mb-2">
                                                            {internshipCategories.find(c => c.id === selectedCategory)?.title}
                                                        </div>
                                                        <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
                                                            {internshipCategories.find(c => c.id === selectedCategory)?.programs.map(prog => (
                                                                <button
                                                                    key={prog.title}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setFormData({ ...formData, program: prog.title });
                                                                        document.getElementById('program-menu')?.classList.add('hidden');
                                                                    }}
                                                                    className="w-full text-left px-4 py-2 hover:bg-zinc-900 text-white transition-colors text-xs border-l-2 border-transparent hover:border-yellow-500"
                                                                >
                                                                    {prog.title}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Current Education</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.education}
                                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                                    placeholder="e.g. B.Tech Computer Science 3rd Year"
                                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-yellow-500 transition-all placeholder:text-zinc-700"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black rounded-none py-3.5 text-xs font-black uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-2"
                            >
                                {formStatus === 'submitting' ? 'Processing...' : 'Apply Now'} <Rocket size={15} />
                            </Button>

                            {formStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-3 bg-green-500/10 border border-green-500/20 text-green-500 text-xs text-center font-bold"
                                >
                                    Application submitted successfully! Our team will contact you soon.
                                </motion.div>
                            )}
                        </form>
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 13: BOOK FREE CALL
            ════════════════════════════════════════════════════════════════ */}
            <section id="counseling" className="container mx-auto px-4 sm:px-6 mb-8 max-w-5xl">
                <div className="max-w-4xl mx-auto">
                    {/* Book Free Training Call */}
                    <div className="bg-zinc-950 border border-zinc-900 p-6 md:p-8 relative overflow-hidden text-center group">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/[0.03] blur-[120px] rounded-full pointer-events-none group-hover:bg-red-600/[0.07] transition-colors duration-700" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span className="text-red-500 text-[10px] font-black tracking-[0.4em] mb-2 block flex items-center justify-center gap-2">
                                <Calendar size={12} /> PERSONAL GUIDANCE
                            </span>
                            <h2 className="text-xl md:text-2xl font-display text-white mb-2 leading-tight uppercase">
                                Book a Free <span className="text-red-500">Training Call</span>
                            </h2>
                            <p className="text-zinc-400 text-xs sm:text-sm mb-5 leading-relaxed">
                                Not sure which track is right for you? Speak with our lab coordinator to find the perfect fit for your engineering career goals.
                            </p>
                            <Link href="/schedule" className="inline-block">
                                <Button className="relative bg-red-600 text-white hover:bg-red-500 px-6 h-10 rounded-none text-xs font-black tracking-[0.15em] flex items-center gap-2 transition-all duration-300">
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Calendar size={14} /> Schedule Call
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* ════════════════════════════════════════════════════════════════
                SECTION 15: FAQ (Accordion)
            ════════════════════════════════════════════════════════════════ */}
            <section className="container mx-auto px-4 sm:px-6 max-w-4xl pb-6">
                <motion.div {...sectionFade} className="text-center mb-5">
                    <span className="text-yellow-500 text-[10px] font-black tracking-[0.4em] mb-1.5 block">GOT QUESTIONS?</span>
                    <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-1.5">Frequently Asked Questions</h2>
                    <p className="text-zinc-500 text-xs sm:text-sm">Everything you need to know about our Innovation Lab program.</p>
                </motion.div>

                <div className="space-y-2.5">
                    {faqData.map((item, i) => {
                        const isOpen = openFaq === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03 }}
                                className="bg-zinc-950 border border-zinc-900 overflow-hidden hover:border-zinc-800 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenFaq(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between px-4 py-3.5 text-left group"
                                >
                                    <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2.5 pr-4">
                                        <span className="text-yellow-500 text-xs font-black">Q.</span>
                                        {item.q}
                                    </h4>
                                    <ChevronDown
                                        size={14}
                                        className={`text-zinc-500 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-yellow-500' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 pb-3.5 pt-0 border-t border-zinc-800/50">
                                                <p className="text-zinc-500 text-xs leading-relaxed pl-5">
                                                    {item.a}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

        </div>
    );
}
