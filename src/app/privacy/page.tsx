"use client";

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft, ChevronRight, Mail, Phone, MapPin,
    Shield, Lock, Database, CreditCard, Cookie,
    Layers, Share2, Clock, User, Trash2, Users,
    Globe, FileText, UserCheck, RefreshCw, ExternalLink, Activity
} from 'lucide-react';
import Link from 'next/link';

// List of all sections for the Table of Contents
const sections = [
    { id: 'introduction', label: 'Introduction', icon: Shield },
    { id: 'info-we-collect', label: '1. Information We Collect', icon: Database },
    { id: 'how-we-use', label: '2. How We Use Info', icon: Activity },
    { id: 'payment-info', label: '3. Payment Information', icon: CreditCard },
    { id: 'cookies', label: '4. Cookies & Tracking', icon: Cookie },
    { id: 'third-party', label: '5. Third-Party Services', icon: Layers },
    { id: 'data-security', label: '6. Data Security', icon: Lock },
    { id: 'data-sharing', label: '7. Sharing & Disclosure', icon: Share2 },
    { id: 'data-retention', label: '8. Data Retention', icon: Clock },
    { id: 'user-rights', label: '9. User Rights', icon: User },
    { id: 'data-deletion', label: '10. Data Deletion', icon: Trash2 },
    { id: 'children-privacy', label: '11. Children\'s Privacy', icon: Users },
    { id: 'international-transfers', label: '12. International Transfers', icon: Globe },
    { id: 'intellectual-property', label: '13. Intellectual Property', icon: FileText },
    { id: 'grievance-officer', label: '14. Grievance Officer', icon: UserCheck },
    { id: 'policy-changes', label: '15. Policy Changes', icon: RefreshCw },
    { id: 'contact-us', label: '16. Contact Us', icon: Mail },
];

export default function PrivacyPage() {
    const [activeSection, setActiveSection] = useState('introduction');

    // Scroll spy to highlight active section in sidebar
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px -75% 0px', // trigger when section is active in the viewport
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
                                Privacy <span className="text-yellow-500">Policy</span>
                            </h1>
                            <div className="hidden sm:block w-[1px] h-5 bg-zinc-800" />
                            <div>
                                <span className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black uppercase tracking-[0.25em] rounded">
                                    Trust & Compliance
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
                                    Kiaan Technology Private Limited (&quot;Kiaan Technology&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal information.
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    This Privacy Policy explains how we collect, use, store, process, disclose, and safeguard information when you visit our website, use our SaaS platforms, software applications, enterprise solutions, mobile applications, cloud services, or otherwise interact with us.
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    By accessing or using our services, you agree to the collection and use of information in accordance with this Privacy Policy.
                                </p>
                            </div>
                        </section>

                        {/* Section 1: Information We Collect */}
                        <section id="info-we-collect" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Database className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">1. Information We Collect</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                We may collect information that you voluntarily provide to us as well as information automatically collected through your interaction with our services.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                {/* Personal Info Card */}
                                <div className="bg-zinc-950/60 border border-zinc-900/80 p-6 rounded-lg hover:border-yellow-500/20 transition-all duration-300 flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                                            <User className="text-yellow-500" size={20} />
                                        </div>
                                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Personal Info</h3>
                                        <ul className="space-y-2.5 text-xs text-zinc-400">
                                            {[
                                                "Full Name", "Email Address", "Phone Number",
                                                "Company Name", "Job Title", "Business Address",
                                                "Billing Address", "Account Credentials",
                                                "Support Requests & Comms"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <ChevronRight size={12} className="text-yellow-500/60 mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Business Info Card */}
                                <div className="bg-zinc-950/60 border border-zinc-900/80 p-6 rounded-lg hover:border-yellow-500/20 transition-all duration-300 flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                                            <Layers className="text-yellow-500" size={20} />
                                        </div>
                                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Business Info</h3>
                                        <ul className="space-y-2.5 text-xs text-zinc-400">
                                            {[
                                                "Company Details", "Subscription Information",
                                                "Service Preferences", "Project Requirements",
                                                "Customer Support Interactions", "Contractual Information"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <ChevronRight size={12} className="text-yellow-500/60 mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Technical Info Card */}
                                <div className="bg-zinc-950/60 border border-zinc-900/80 p-6 rounded-lg hover:border-yellow-500/20 transition-all duration-300 flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                                            <Globe className="text-yellow-500" size={20} />
                                        </div>
                                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Technical Info</h3>
                                        <ul className="space-y-2.5 text-xs text-zinc-400">
                                            {[
                                                "IP Address", "Browser Type", "Device Information",
                                                "Operating System", "Access Logs", "Usage Data",
                                                "Session Information", "Location Information"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <ChevronRight size={12} className="text-yellow-500/60 mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: How We Use Your Information */}
                        <section id="how-we-use" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Activity className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">2. How We Use Your Information</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                We may use collected information for various purposes that support service delivery, operational excellence, security compliance, and platform enhancements:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                {[
                                    "Provide and maintain our services",
                                    "Create and manage user accounts",
                                    "Process subscriptions and payments",
                                    "Deliver software products and SaaS solutions",
                                    "Respond to inquiries and support requests",
                                    "Improve platform functionality and performance",
                                    "Detect, prevent, and investigate fraud or security incidents",
                                    "Send service-related notifications",
                                    "Comply with legal and regulatory obligations",
                                    "Conduct internal business operations and analytics"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-zinc-950/40 border border-zinc-900/60 p-4 rounded-md">
                                        <span className="w-5 h-5 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                            {index + 1}
                                        </span>
                                        <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3: Payment Information */}
                        <section id="payment-info" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <CreditCard className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">3. Payment Information</h2>
                            </div>

                            <div className="bg-zinc-950 border border-zinc-900/80 p-8 rounded-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-xl rounded-full" />
                                <div className="space-y-4">
                                    <p className="text-zinc-300 font-light leading-relaxed">
                                        Payments made through our platforms may be processed by trusted third-party payment providers.
                                    </p>
                                    <div className="border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/[0.02]">
                                        <p className="text-yellow-500 font-bold text-sm uppercase tracking-wide mb-1">Data Storage Exclusions</p>
                                        <p className="text-zinc-300 text-sm font-light leading-relaxed">
                                            Kiaan Technology does not store complete debit card numbers, credit card numbers, CVV numbers, banking passwords, UPI PINs, or similar sensitive payment credentials on its servers.
                                        </p>
                                    </div>
                                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                        All payment transactions are subject to the privacy and security practices of the respective payment service providers.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Cookies and Tracking Technologies */}
                        <section id="cookies" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Cookie className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">4. Cookies & Tracking Technologies</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                We may use cookies, pixels, session identifiers, and similar technologies to improve our digital operations and verify active interactions. These tracking technologies assist us to:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-zinc-300 text-sm">
                                {[
                                    "Improve website functionality",
                                    "Remember user preferences",
                                    "Enhance security",
                                    "Analyze website traffic",
                                    "Measure service performance",
                                    "Improve customer experience"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 border-l-2 border-yellow-500/20 pl-4 py-1.5 bg-zinc-950/20">
                                        <ChevronRight size={14} className="text-yellow-500" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-zinc-400 text-sm font-light leading-relaxed mt-4">
                                You may choose to disable cookies through your browser settings. Certain features of our website may not function properly if cookies are disabled.
                            </p>
                        </section>

                        {/* Section 5: Third-Party Services */}
                        <section id="third-party" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Layers className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">5. Third-Party Services</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                We may engage trusted third-party providers to assist us in delivering our services, including:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 text-zinc-300 text-sm">
                                {[
                                    "Payment Processing Providers",
                                    "Cloud Hosting Providers",
                                    "Email Service Providers",
                                    "Analytics Providers",
                                    "Communication Platforms",
                                    "Customer Relationship Management Systems",
                                    "Infrastructure and Security Providers"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 p-3 rounded">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                                        <span className="text-zinc-300 text-xs font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-zinc-500 text-sm font-light leading-relaxed mt-4">
                                These providers may access information only to the extent necessary to perform services on our behalf.
                            </p>
                        </section>

                        {/* Section 6: Data Security */}
                        <section id="data-security" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Lock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">6. Data Security</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                We implement commercially reasonable technical, administrative, and organizational safeguards designed to protect user information.
                            </p>

                            <div className="bg-zinc-950/60 border border-zinc-900 p-6 rounded-lg space-y-4">
                                <h3 className="text-white text-sm font-bold uppercase tracking-wider">Security Measures In Place</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                                    {[
                                        "SSL/TLS Encryption",
                                        "Secure Cloud Infrastructure",
                                        "Role-Based Access Controls",
                                        "Authentication Mechanisms",
                                        "Firewalls and Security Monitoring",
                                        "Data Backup Procedures",
                                        "Access Logging and Auditing"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 pl-3 py-1 border-l-2 border-yellow-500/20">
                                            <Shield size={12} className="text-yellow-500" />
                                            <span className="text-zinc-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-zinc-500 text-sm font-light leading-relaxed">
                                While we strive to protect personal information, no method of electronic transmission or storage can be guaranteed to be completely secure.
                            </p>
                        </section>

                        {/* Section 7: Data Sharing and Disclosure */}
                        <section id="data-sharing" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Share2 className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">7. Data Sharing & Disclosure</h2>
                            </div>

                            <p className="text-zinc-300 font-medium">
                                We do not sell personal information to third parties.
                            </p>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                We may share information when:
                            </p>

                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Required to provide services requested by users</li>
                                <li>Necessary for payment processing</li>
                                <li>Required by law, court order, or governmental authority</li>
                                <li>Necessary to protect our legal rights</li>
                                <li>Required during mergers, acquisitions, or corporate restructuring</li>
                                <li>Necessary to prevent fraud, abuse, or security threats</li>
                            </ul>
                        </section>

                        {/* Section 8: Data Retention */}
                        <section id="data-retention" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Clock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">8. Data Retention</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                We retain information only for as long as necessary to:
                            </p>

                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Provide services</li>
                                <li>Maintain customer accounts</li>
                                <li>Comply with legal obligations</li>
                                <li>Resolve disputes</li>
                                <li>Enforce agreements</li>
                                <li>Maintain security and audit records</li>
                            </ul>

                            <p className="text-zinc-400 text-sm font-light leading-relaxed mt-4">
                                When information is no longer required, it may be deleted, anonymized, or securely archived.
                            </p>
                        </section>

                        {/* Section 9: User Rights */}
                        <section id="user-rights" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <User className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">9. User Rights</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                Subject to applicable laws, users may have the right to:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light mt-4">
                                {[
                                    "Request access to their personal information",
                                    "Request correction of inaccurate information",
                                    "Request deletion of personal information",
                                    "Request data portability where applicable",
                                    "Withdraw consent where legally permissible",
                                    "Object to certain processing activities"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2 bg-zinc-950/40 border border-zinc-900 p-4 rounded">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-zinc-500 text-xs leading-relaxed mt-4">
                                Requests may be submitted through our support channels.
                            </p>
                        </section>

                        {/* Section 10: Data Deletion Requests */}
                        <section id="data-deletion" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Trash2 className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">10. Data Deletion Requests</h2>
                            </div>

                            <p className="text-zinc-300 font-light leading-relaxed">
                                Users may request deletion of their account and associated personal information by contacting us.
                            </p>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Certain information may be retained where necessary for:
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-zinc-300 font-semibold">
                                {[
                                    "Legal compliance",
                                    "Tax obligations",
                                    "Regulatory requirements",
                                    "Fraud prevention",
                                    "Security investigations",
                                    "Dispute resolution"
                                ].map((item, index) => (
                                    <div key={index} className="border border-zinc-900 bg-zinc-950/40 text-center py-2 px-3 rounded">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 11: Children's Privacy */}
                        <section id="children-privacy" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Users className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">11. Children&apos;s Privacy</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                Our services are intended for business users and individuals who are at least 18 years of age. We do not knowingly collect personal information from children under the age of 18. If we become aware that such information has been collected, we will take reasonable steps to remove it.
                            </p>
                        </section>

                        {/* Section 12: International Data Transfers */}
                        <section id="international-transfers" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Globe className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">12. International Data Transfers</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                Our services may utilize cloud infrastructure and technology providers located in various jurisdictions. Where personal information is transferred across borders, we will take reasonable steps to ensure appropriate safeguards are implemented to protect such information.
                            </p>
                        </section>

                        {/* Section 13: Intellectual Property */}
                        <section id="intellectual-property" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <FileText className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">13. Intellectual Property</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                All content, software, trademarks, logos, designs, text, graphics, and materials displayed on our website and platforms are the property of Kiaan Technology Private Limited or its licensors and are protected by applicable intellectual property laws. Unauthorized use, reproduction, or distribution is prohibited.
                            </p>
                        </section>

                        {/* Section 14: Grievance Officer */}
                        <section id="grievance-officer" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <UserCheck className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">14. Grievance Officer</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                For privacy-related concerns, complaints, requests, or questions, please contact our designated Grievance Officer:
                            </p>

                            <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-lg max-w-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/[0.02] blur-2xl rounded-full" />
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-white text-lg font-bold">Grievance Officer</h3>
                                        <p className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">Kiaan Technology Private Limited</p>
                                    </div>
                                    <div className="h-[1px] bg-zinc-900 w-full" />
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-3 text-zinc-300">
                                            <Mail size={16} className="text-yellow-500 shrink-0" />
                                            <span>Email: <a href="mailto:info@kiaantechnology.com" className="hover:underline hover:text-white font-medium text-yellow-500/90">info@kiaantechnology.com</a></span>
                                        </div>
                                        <div className="flex items-center gap-3 text-zinc-300">
                                            <Phone size={16} className="text-yellow-500 shrink-0" />
                                            <span>Phone: <a href="tel:+919752100980" className="hover:underline hover:text-white font-medium text-yellow-500/90">+91 97521 00980</a></span>
                                        </div>
                                        <div className="flex items-start gap-3 text-zinc-300">
                                            <MapPin size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                                            <span>Address: Indore, Madhya Pradesh, India</span>
                                        </div>
                                    </div>
                                    <div className="h-[1px] bg-zinc-900 w-full" />
                                    <p className="text-zinc-500 text-xs italic">
                                        We aim to respond to all legitimate requests within 7 business days.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 15: Changes to This Privacy Policy */}
                        <section id="policy-changes" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">15. Changes to This Privacy Policy</h2>
                            </div>

                            <p className="text-zinc-400 font-light leading-relaxed">
                                We reserve the right to modify or update this Privacy Policy at any time. Updated versions will be published on this page along with the revised &quot;Last Updated&quot; date.
                            </p>
                            <p className="text-yellow-500 text-sm font-semibold tracking-wide bg-yellow-500/[0.02] border-l-2 border-yellow-500 pl-4 py-1.5">
                                Your continued use of our services following any updates constitutes acceptance of the revised Privacy Policy.
                            </p>
                        </section>

                        {/* Section 16: Contact Us */}
                        <section id="contact-us" className="scroll-mt-32">
                            <div className="bg-yellow-500 text-black p-8 md:p-12 rounded-lg relative overflow-hidden shadow-2xl shadow-yellow-500/5">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />

                                <h2 className="text-3xl font-display uppercase mb-2 leading-none font-black text-zinc-950">16. Contact Us</h2>
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
                                        <span className="font-bold text-zinc-950 text-sm leading-relaxed">Indore, Madhya Pradesh, India</span>
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
