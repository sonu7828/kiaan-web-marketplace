"use client";

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft, ChevronRight, Mail, Phone, MapPin,
    Shield, Lock, Database, CreditCard, Layers,
    Clock, User, Trash2, Globe, FileText, UserCheck,
    RefreshCw, ExternalLink, Activity, Scale, Bell, AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

// List of all sections for the Table of Contents
const sections = [
    { id: 'introduction', label: 'Introduction', icon: Shield },
    { id: 'acceptance', label: '1. Acceptance of Terms', icon: Scale },
    { id: 'eligibility', label: '2. Eligibility', icon: UserCheck },
    { id: 'services', label: '3. Services', icon: Layers },
    { id: 'accounts', label: '4. User Accounts', icon: User },
    { id: 'responsibilities', label: '5. User Responsibilities', icon: Activity },
    { id: 'data-ownership', label: '6. Data Ownership', icon: Database },
    { id: 'marketing-consent', label: '7. Marketing Consent', icon: Bell },
    { id: 'intellectual-property', label: '8. Intellectual Property', icon: FileText },
    { id: 'prohibited-activities', label: '9. Prohibited Activities', icon: AlertTriangle },
    { id: 'payments-billing', label: '10. Payments & Billing', icon: CreditCard },
    { id: 'refunds-cancellations', label: '11. Refunds & Cancellations', icon: RefreshCw },
    { id: 'third-party', label: '12. Third-Party Services', icon: ExternalLink },
    { id: 'service-availability', label: '13. Service Availability', icon: Clock },
    { id: 'disclaimer-warranties', label: '14. Disclaimer of Warranties', icon: AlertTriangle },
    { id: 'limitation-liability', label: '15. Limitation of Liability', icon: Lock },
    { id: 'indemnification', label: '16. Indemnification', icon: Shield },
    { id: 'force-majeure', label: '17. Force Majeure', icon: Globe },
    { id: 'suspension-termination', label: '18. Suspension & Termination', icon: Trash2 },
    { id: 'changes-terms', label: '19. Changes to Terms', icon: RefreshCw },
    { id: 'governing-law', label: '20. Governing Law', icon: Scale },
    { id: 'contact-info', label: '21. Contact Information', icon: Mail },
];

export default function TermsPage() {
    const [activeSection, setActiveSection] = useState('introduction');

    // Scroll spy to highlight active section in sidebar
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px -75% 0px', // trigger when section is active in viewport
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((sec) => {
            const el = document.getElementById(sec.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Helper for smooth scrolling
    const handleScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <div className="bg-black min-h-screen pt-32 pb-24 text-zinc-400 selection:bg-yellow-500 selection:text-black relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-500/3 blur-[180px] rounded-full -z-10" />

            <div className="mx-auto w-[95%] max-w-[95%]" style={{ paddingLeft: '1.5%', paddingRight: '1.5%' }}>
                {/* Unified Header & Back Nav Grid Row */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-center mb-12 border-b border-zinc-900 pb-8"
                >
                    {/* Left Column (Above Sidebar) */}
                    <div className="flex items-center pl-5">
                        <Link href="/">
                            <button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest group shrink-0 cursor-pointer">
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                            </button>
                        </Link>
                    </div>

                    {/* Right Column (Above Content) */}
                    <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                            <h1 className="text-2xl md:text-4xl font-display uppercase text-white leading-none">
                                Terms & <span className="text-yellow-500">Conditions</span>
                            </h1>
                            <div className="hidden sm:block w-[1px] h-5 bg-zinc-800" />
                            <div>
                                <span className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black uppercase tracking-[0.25em] rounded">
                                    Legal Agreement
                                </span>
                            </div>
                        </div>

                        <div className="shrink-0 text-zinc-500 text-xs font-semibold tracking-wider uppercase">
                            Last Updated: <span className="text-white font-bold ml-1">June 2026</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

                    {/* Left Sticky Table of Contents Sidebar */}
                    <aside className="hidden lg:block privacy-sidebar-scroll" style={{ position: 'sticky', top: '7rem', width: '280px', maxHeight: '460px', overflowY: 'auto' }}>
                        <div className="border-l border-zinc-900 pl-4 py-2 space-y-3">
                            {sections.map((sec) => {
                                const IconComponent = sec.icon;
                                const isActive = activeSection === sec.id;
                                return (
                                    <button
                                        key={sec.id}
                                        onClick={() => handleScrollTo(sec.id)}
                                        className={`w-full flex items-center gap-3 text-left py-1.5 px-3 rounded-md transition-all text-xs font-bold cursor-pointer group ${isActive
                                            ? 'text-yellow-500 bg-yellow-500/5 border-l-2 border-yellow-500 pl-2.5'
                                            : 'text-zinc-400 hover:text-zinc-200 border-l-2 border-transparent'
                                            }`}
                                    >
                                        <IconComponent size={14} className={`shrink-0 ${isActive ? 'text-yellow-500' : 'text-zinc-500 group-hover:text-zinc-400'}`} />
                                        <span className="truncate">{sec.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </aside>

                    {/* Right Main Content */}
                    <div className="w-full space-y-16" style={{ marginLeft: '0' }}>

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-32">
                            <div
                                className="border-l-2 border-yellow-500 pl-6 space-y-4"
                            >
                                <h2 className="text-white text-xl font-bold uppercase tracking-wider mb-2">Introduction</h2>
                                <p className="text-zinc-300 text-lg font-light leading-relaxed">
                                    Welcome to the Terms & Conditions page of Kiaan Technology.
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    These Terms &amp; Conditions (&quot;Terms&quot;) constitute a legally binding agreement between Kiaan Technology Private Limited (&quot;Kiaan Technology&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) and any individual, organization, business entity, customer, visitor, subscriber, or user (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) accessing or using our website, software products, SaaS platforms, enterprise solutions, mobile applications, APIs, cloud services, or related offerings.
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    By accessing or using our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
                                </p>
                            </div>
                        </section>

                        {/* Section 1: Acceptance of Terms */}
                        <section id="acceptance" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Scale className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">1. Acceptance of Terms</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                These Terms constitute a legally binding agreement. If you do not agree to these Terms, you must immediately cease all access and use of our SaaS products, platforms, websites, and custom solutions. Your continued use of the services will be deemed as your unconditional acceptance of these terms.
                            </p>
                        </section>

                        {/* Section 2: Eligibility */}
                        <section id="eligibility" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <UserCheck className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">2. Eligibility</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                You must be at least 18 years of age and legally capable of entering into binding contracts under applicable laws to register for or use our services.
                            </p>
                            <div className="border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/[0.02]">
                                <p className="text-yellow-500 font-bold text-sm uppercase tracking-wide mb-1">On Behalf of an Organization</p>
                                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                                    If you are using our services on behalf of an organization or business entity, you represent and warrant that you have the legal authority to bind that organization to these Terms. In such cases, &quot;you&quot; and &quot;your&quot; will refer to that organization.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: Services */}
                        <section id="services" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Layers className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">3. Services</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology develops, provides, and maintains premium software systems, custom client portals, and cloud solutions, including:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-zinc-300 text-sm">
                                {[
                                    "SaaS Applications",
                                    "CRM Solutions",
                                    "ERP Solutions",
                                    "Hospital & EMR Systems",
                                    "Property Management Systems",
                                    "Loan Management Systems",
                                    "Car Rental Software",
                                    "HRMS Platforms",
                                    "Enterprise Applications",
                                    "AI Automation Solutions",
                                    "Software Development Services",
                                    "Cloud-Based Business Solutions"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 p-3 rounded hover:border-yellow-500/20 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                                        <span className="text-zinc-300 text-xs font-bold uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-sm font-light leading-relaxed mt-2">
                                We reserve the right to modify, update, suspend, discontinue, or enhance any service, feature, or platform offering at any time without prior notice.
                            </p>
                        </section>

                        {/* Section 4: User Accounts */}
                        <section id="accounts" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <User className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">4. User Accounts</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Certain services require account registration. When creating an account, you agree to:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light">
                                {[
                                    "Provide complete, true, and accurate information during signup",
                                    "Keep account credentials, passwords, and access keys confidential",
                                    "Maintain and promptly update account information to keep it accurate",
                                    "Take immediate measures to prevent unauthorized access to your account"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2 bg-zinc-950/40 border border-zinc-900 p-4 rounded">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-400 text-sm font-light leading-relaxed mt-2">
                                You remain solely and fully responsible for all activities, data entries, and API requests performed under your account credentials.
                            </p>
                        </section>

                        {/* Section 5: User Responsibilities */}
                        <section id="responsibilities" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Activity className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">5. User Responsibilities</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Users represent and warrant that they will comply with all legal duties and platform guidelines. You agree to:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light">
                                {[
                                    "Comply with all local, state, national, and international laws",
                                    "Provide truthful, complete information in all business interactions",
                                    "Use our SaaS platforms and systems only for lawful business purposes",
                                    "Securely protect all portal login passwords and API credentials",
                                    "Maintain accurate data and prevent records corruption",
                                    "Cooperate during internal security or compliance investigations"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2 bg-zinc-950/40 border border-zinc-900 p-4 rounded">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                You are solely responsible for all data, text, files, and content uploaded, stored, transmitted, or processed through your account.
                            </p>
                        </section>

                        {/* Section 6: Data Ownership */}
                        <section id="data-ownership" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Database className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">6. Data Ownership</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Users retain all ownership, intellectual property rights, and control over their business data, customer records, documents, files, and information uploaded to Kiaan Technology platforms.
                            </p>
                            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg">
                                <p className="text-white text-sm font-bold uppercase tracking-wider mb-3">Limited Operations License</p>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-4">
                                    You grant Kiaan Technology a limited, non-exclusive, worldwide, royalty-free right to host, store, process, backup, secure, and transmit your data solely as required to provide, support, secure, and improve our services, and to comply with legal obligations.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] text-zinc-300 font-bold uppercase text-center">
                                    {["Host & Store", "Process Dues", "Secure Data", "Backups"].map((item, i) => (
                                        <div key={i} className="border border-zinc-900 bg-zinc-950/40 py-2 px-3 rounded">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 7: Marketing & Communication Consent */}
                        <section id="marketing-consent" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Bell className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">7. Marketing & Communication Consent</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                By registering for our services, creating an account, or subscribing to our platforms, you consent to receive relevant transactional, operational, and marketing communications from us:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-zinc-300 text-sm">
                                {[
                                    "Service notifications and system status updates",
                                    "Automated billing statements and payment alerts",
                                    "Security notices, critical patches, and account alerts",
                                    "Platform version updates and product newsletters",
                                    "Subscription renewal and expiration reminders",
                                    "Customer support responses and correspondence"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 border-l-2 border-yellow-500/20 pl-4 py-1.5 bg-zinc-950/20">
                                        <ChevronRight size={14} className="text-yellow-500 mt-0.5 shrink-0" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed mt-4">
                                You can opt out of promotional communications at any time by clicking the unsubscribe link or contacting our support team, though critical service and transactional alerts will continue.
                            </p>
                        </section>

                        {/* Section 8: Intellectual Property Rights */}
                        <section id="intellectual-property" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <FileText className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">8. Intellectual Property Rights</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                All rights, title, and interest in and to our proprietary assets remain the exclusive property of Kiaan Technology Private Limited or its licensors:
                            </p>
                            <div className="bg-zinc-950/60 border border-zinc-900 p-6 rounded-lg space-y-4">
                                <h3 className="text-white text-sm font-bold uppercase tracking-wider">Protected Elements</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                                    {["Source Code", "Databases", "UI/UX Designs", "Trademarks & Logos", "APIs", "Documentation", "Software Products", "Client Portals"].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 pl-3 py-1 border-l-2 border-yellow-500/20">
                                            <Shield size={12} className="text-yellow-500 shrink-0" />
                                            <span className="text-zinc-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="border-l-2 border-red-500/40 pl-4 py-2 bg-red-500/[0.01]">
                                <p className="text-red-500 font-bold text-xs uppercase tracking-wide mb-2">Usage Restrictions</p>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                    Users are strictly prohibited from copying, reproducing, modifying, reverse engineering, decompile, deconstructing, reselling, renting, redistributing, or exploiting any parts of our software or platforms without explicit prior written authorization.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Prohibited Activities */}
                        <section id="prohibited-activities" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <AlertTriangle className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">9. Prohibited Activities</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Users agree to use the platforms in absolute good faith. You shall not engage in, facilitate, or support:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-zinc-300 text-sm">
                                {[
                                    "Any illegal activities or violating local regulations",
                                    "Fraudulent transactions, phishing, or spoofing scams",
                                    "Money laundering operations or illegal money schemes",
                                    "Spam email campaigns or unsolicited mass messaging",
                                    "Malware, virus, trojan, or ransomware distribution",
                                    "Unauthorized system access, hacking, or scraping",
                                    "Adult content, pornography, or explicit media services",
                                    "Online gambling, betting, or lottery services",
                                    "Hate speech, harassment, defamation, or threats",
                                    "Intellectual property and copyright infringements",
                                    "Cryptocurrency activities prohibited by applicable laws",
                                    "Activities violating local business license requirements"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2.5 bg-zinc-950/40 border border-zinc-900/60 p-3 rounded">
                                        <AlertTriangle size={14} className="text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-zinc-300 text-xs font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-red-500/80 text-xs italic">
                                Engaging in prohibited activities will result in immediate suspension or termination of access and potential reporting to governing authorities.
                            </p>
                        </section>

                        {/* Section 10: Payments and Billing */}
                        <section id="payments-billing" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <CreditCard className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">10. Payments and Billing</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Certain services require active subscription payments. Users agree to:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Pay all applicable platform, licensing, setup, and usage fees in full.</li>
                                <li>Provide and maintain valid, updated billing information and credit/debit card credentials.</li>
                                <li>Pay all applicable local, state, and national taxes related to the subscriptions.</li>
                                <li>Comply with agreed subscription billing cycles, auto-renewals, and terms.</li>
                            </ul>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                Pricing may be updated periodically to account for new features, inflation, or operational costs, with notice provided in advance.
                            </p>
                        </section>

                        {/* Section 11: Refunds and Cancellations */}
                        <section id="refunds-cancellations" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">11. Refunds and Cancellations</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Subscription cancellations and refund requests are governed by our separate, dedicated Refund Policy and Cancellation Policy.
                            </p>
                            <div className="border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/[0.02]">
                                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                                    By purchasing, subscribing, or ordering services from Kiaan Technology, you represent that you have read, understood, and agreed to be bound by the Refund Policy and Cancellation Policy.
                                </p>
                            </div>
                        </section>

                        {/* Section 12: Third-Party Services */}
                        <section id="third-party" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <ExternalLink className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">12. Third-Party Services</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Our SaaS solutions and custom development may integrate with, rely on, or embed third-party services:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-zinc-300 text-sm">
                                {["Payment Gateways", "Cloud Infrastructure Providers", "Email & SMS Engines", "Map Services & Geocoding", "Communication APIs", "Analytics Systems"].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 p-3 rounded">
                                        <ExternalLink size={12} className="text-yellow-500 shrink-0" />
                                        <span className="text-zinc-300 text-xs font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed mt-4">
                                Kiaan Technology is not responsible or liable for any service interruptions, data practices, outages, failures, or policies of these external providers.
                            </p>
                        </section>

                        {/* Section 13: Service Availability */}
                        <section id="service-availability" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Clock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">13. Service Availability</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                We strive to provide premium platform availability, but we do not guarantee uninterrupted system access. Service availability may be occasionally interrupted for:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Scheduled server maintenance and database optimizations.</li>
                                <li>Security updates, patches, and emergency deployments.</li>
                                <li>Infrastructure failures, network blockages, or third-party outages.</li>
                                <li>Force majeure events beyond our reasonable control.</li>
                            </ul>
                        </section>

                        {/* Section 14: Disclaimer of Warranties */}
                        <section id="disclaimer-warranties" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <AlertTriangle className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">14. Disclaimer of Warranties</h2>
                            </div>
                            <div className="bg-zinc-950 border border-zinc-900/80 p-8 rounded-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-xl rounded-full" />
                                <div className="space-y-4">
                                    <p className="text-zinc-300 font-bold uppercase tracking-wide text-xs">Standard Disclaimer</p>
                                    <p className="text-zinc-300 text-sm font-light leading-relaxed italic">
                                        All services, software products, SaaS platforms, portals, and materials are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
                                    </p>
                                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                        Kiaan Technology makes no warranties, express or implied, regarding continuous availability, error-free operation, specific business outcomes, complete system compatibility, or the accuracy of third-party integrations. To the maximum extent permitted by applicable laws, all statutory warranties are disclaimed.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 15: Limitation of Liability */}
                        <section id="limitation-liability" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Lock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">15. Limitation of Liability</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                To the maximum extent permitted by applicable law, Kiaan Technology shall not be liable for:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-zinc-300 text-sm">
                                {[
                                    "Indirect, incidental, or special damages",
                                    "Business interruption or operational losses",
                                    "Loss of business data, files, or information",
                                    "Revenue loss, profit cuts, or financial damages",
                                    "Loss of business goodwill or reputation"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 border-l-2 border-yellow-500/20 pl-4 py-1.5 bg-zinc-950/20">
                                        <ChevronRight size={14} className="text-yellow-500" />
                                        <span className="text-zinc-300 text-xs font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/[0.02] mt-4">
                                <p className="text-yellow-500 font-bold text-xs uppercase tracking-wide mb-1">Liability Cap</p>
                                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                                    Our total aggregate liability for any claims arising from or related to these Terms or our services shall not exceed the amount actually paid by you to the Company for the specific affected service during the three (3) months immediately preceding the event giving rise to liability.
                                </p>
                            </div>
                        </section>

                        {/* Section 16: Indemnification */}
                        <section id="indemnification" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Shield className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">16. Indemnification</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                You agree to indemnify, defend, and hold harmless Kiaan Technology Private Limited, its directors, officers, employees, contractors, agents, affiliates, and partners from any third-party claims, liabilities, damages, losses, expenses, and reasonable legal fees arising from:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Your violation or breach of these Terms &amp; Conditions.</li>
                                <li>Your misuse or unauthorized access of our SaaS systems or APIs.</li>
                                <li>Your breach of any local, state, or international laws.</li>
                                <li>Your infringement of any third-party rights, including IP or privacy rights.</li>
                            </ul>
                        </section>

                        {/* Section 17: Force Majeure */}
                        <section id="force-majeure" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Globe className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">17. Force Majeure</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology shall not be held liable or responsible for any failures, delays, or outages resulting from events beyond our reasonable control:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-zinc-300 font-bold uppercase text-center mt-4">
                                {["Natural Disasters", "Government Actions", "Internet Outages", "Cyberattacks", "Power Grid Failures", "Labor Disputes", "Pandemics", "Civil disturbances"].map((item, index) => (
                                    <div key={index} className="border border-zinc-900 bg-zinc-950/40 py-2.5 px-3 rounded">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 18: Suspension and Termination */}
                        <section id="suspension-termination" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Trash2 className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">18. Suspension and Termination</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                We reserve the right to suspend or terminate your account and platform access at our sole discretion, without prior notice, if:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>You violate or breach these Terms &amp; Conditions.</li>
                                <li>Fraudulent, abusive, or malicious activities are detected under your credentials.</li>
                                <li>Security threats to our infrastructure or other users are identified.</li>
                                <li>We are required to do so by law or governmental orders.</li>
                                <li>Payment obligations remain unpaid and overdue.</li>
                            </ul>
                            <p className="text-zinc-500 text-xs leading-relaxed mt-4">
                                Termination of access does not waive or excuse any outstanding payment obligations incurred prior to termination.
                            </p>
                        </section>

                        {/* Section 19: Changes to Terms */}
                        <section id="changes-terms" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">19. Changes to Terms</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                We reserve the right to modify, amend, or replace these Terms at our discretion. Updated versions will be published on this page with a revised &quot;Last Updated&quot; date.
                            </p>
                            <p className="text-yellow-500 text-sm font-semibold tracking-wide bg-yellow-500/[0.02] border-l-2 border-yellow-500 pl-4 py-1.5">
                                Your continued use of the platforms or services following any updates represents your binding acceptance of the revised Terms.
                            </p>
                        </section>

                        {/* Section 20: Governing Law and Jurisdiction */}
                        <section id="governing-law" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Scale className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">20. Governing Law and Jurisdiction</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                These Terms &amp; Conditions shall be governed by, interpreted, and construed in accordance with the laws of India.
                            </p>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Any legal suits, disputes, actions, or proceedings arising out of or related to these Terms or our services shall be subject to the exclusive jurisdiction of the courts located in Indore, Madhya Pradesh, India.
                            </p>
                        </section>

                        {/* Section 21: Contact Information */}
                        <section id="contact-info" className="scroll-mt-32">
                            <div className="bg-yellow-500 text-black p-8 md:p-12 rounded-lg relative overflow-hidden shadow-2xl shadow-yellow-500/5">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />

                                <h2 className="text-3xl font-display uppercase mb-2 leading-none font-black text-zinc-950">21. Contact Information</h2>
                                <p className="font-bold mb-8 uppercase tracking-widest text-xs text-zinc-800">Kiaan Technology Private Limited</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="flex items-center gap-4 bg-black/[0.04] p-4 rounded-md backdrop-blur-sm border border-black/5 hover:border-black/10 transition-colors">
                                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                            <Mail size={18} className="text-zinc-900" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Email</span>
                                            <a href="mailto:info@kiaantechnology.com" className="font-bold text-sm text-zinc-950 hover:underline">info@kiaantechnology.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-black/[0.04] p-4 rounded-md backdrop-blur-sm border border-black/5 hover:border-black/10 transition-colors">
                                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                            <Phone size={18} className="text-zinc-900" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Phone</span>
                                            <a href="tel:+919752100980" className="font-bold text-sm text-zinc-950 hover:underline">+91 97521 00980</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-black/[0.04] p-4 rounded-md backdrop-blur-sm border border-black/5 hover:border-black/10 transition-colors">
                                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                            <Globe size={18} className="text-zinc-900" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Website</span>
                                            <a href="https://kiaantechnology.com" target="_blank" rel="noopener noreferrer" className="font-bold text-sm text-zinc-950 hover:underline flex items-center gap-1">
                                                kiaantechnology.com <ExternalLink size={12} className="shrink-0" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-black/10 flex items-start gap-3">
                                    <MapPin size={18} className="text-zinc-900 shrink-0 mt-0.5" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Registered Office Address</span>
                                        <span className="font-bold text-zinc-950 text-sm leading-relaxed">2341/E, Sudama Nagar, Indore, Madhya Pradesh, India</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Bottom Back Home Nav */}
                <div className="mt-20 text-center border-t border-zinc-950 pt-8">
                    <Link href="/">
                        <button className="text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2 mx-auto cursor-pointer group">
                            Back to Home <ChevronRight size={14} className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
