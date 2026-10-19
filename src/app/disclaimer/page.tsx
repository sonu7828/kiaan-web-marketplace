"use client";

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft, ChevronRight, Mail, Phone, MapPin,
    Shield, Lock, Database, CreditCard, Layers,
    Clock, User, Trash2, Globe, FileText, UserCheck,
    RefreshCw, ExternalLink, Activity, Scale, AlertTriangle,
    ShieldCheck, Receipt, HelpCircle
} from 'lucide-react';
import Link from 'next/link';

// List of all sections for the Table of Contents
const sections = [
    { id: 'general-disclaimer', label: '1. General Disclaimer', icon: ShieldCheck },
    { id: 'no-advice', label: '2. No Professional Advice', icon: Scale },
    { id: 'service-availability', label: '3. Service Availability', icon: Clock },
    { id: 'third-party', label: '4. Third-Party Services', icon: ExternalLink },
    { id: 'data-responsibility', label: '5. Data Responsibility', icon: Database },
    { id: 'no-results', label: '6. No Guaranteed Results', icon: Activity },
    { id: 'limitation-liability', label: '7. Limitation of Liability', icon: Lock },
    { id: 'security-disclaimer', label: '8. Security Disclaimer', icon: Shield },
    { id: 'external-links', label: '9. External Links', icon: Globe },
    { id: 'policy-changes', label: '10. Changes to Disclaimer', icon: RefreshCw },
    { id: 'contact-us', label: '11. Contact Us', icon: Mail },
];

export default function DisclaimerPage() {
    const [activeSection, setActiveSection] = useState('general-disclaimer');

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
                                Disclaimer
                            </h1>
                            <div className="hidden sm:block w-[1px] h-5 bg-zinc-800" />
                            <div>
                                <span className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black uppercase tracking-[0.25em] rounded">
                                    Legal Framework
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

                        {/* Section 1: General Disclaimer */}
                        <section id="general-disclaimer" className="scroll-mt-32">
                            <div
                                className="border-l-2 border-yellow-500 pl-6 space-y-4"
                            >
                                <h2 className="text-white text-xl font-bold uppercase tracking-wider mb-2">1. General Disclaimer</h2>
                                <p className="text-zinc-300 text-lg font-light leading-relaxed">
                                    The information, software, products, services, content, and materials available through Kiaan Technology Private Limited (&quot;Kiaan Technology&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    While we strive to maintain accurate, reliable, and secure services, we make no guarantees regarding the completeness, accuracy, reliability, suitability, availability, or performance of our website, SaaS platforms, software applications, enterprise solutions, APIs, integrations, or related services.
                                </p>
                                <p className="text-yellow-500 text-sm font-semibold tracking-wide bg-yellow-500/[0.02] border-l-2 border-yellow-500 pl-4 py-1.5">
                                    Your use of our services is entirely at your own risk.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: No Professional Advice */}
                        <section id="no-advice" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Scale className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">2. No Professional Advice</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Information provided through our website, software platforms, blogs, documentation, demonstrations, marketing materials, or support channels is provided for general informational purposes only. Nothing contained within our services shall be considered:
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[10px] text-zinc-300 font-bold uppercase text-center">
                                {["Legal Advice", "Financial Advice", "Tax Advice", "Accounting Advice", "Medical Advice", "Regulatory Advice", "Investment Advice", "Professional Advice"].map((item, i) => (
                                    <div key={i} className="border border-zinc-900 bg-zinc-950/40 py-2.5 px-3 rounded flex items-center justify-center gap-2">
                                        <ChevronRight size={10} className="text-yellow-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/[0.02]">
                                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                                    Users should consult qualified professionals before making business, legal, financial, medical, or regulatory decisions.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: Software and Service Availability */}
                        <section id="service-availability" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Clock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">3. Software and Service Availability</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology does not guarantee that services will be uninterrupted, always available, error-free, that all defects will be corrected immediately, that services will meet every business requirement, or be compatible with all devices or systems. Temporary interruptions may occur due to:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
                                {[
                                    { title: "Maintenance Activities", desc: "Scheduled optimizations, database tuning, and system checkups." },
                                    { title: "Software Updates", desc: "Deployments of new version features, dependencies, and codebases." },
                                    { title: "Security Enhancements", desc: "Emergency patches, threat mitigations, and network configurations." },
                                    { title: "External Outages", desc: "Infrastructure issues, internet connectivity disruptions, or third-party server failures." }
                                ].map((item, index) => (
                                    <div key={index} className="bg-zinc-950/60 border border-zinc-900/80 p-5 rounded-lg flex flex-col justify-between hover:border-yellow-500/20 transition-colors">
                                        <div className="space-y-3">
                                            <h3 className="text-white font-bold uppercase tracking-wider">{item.title}</h3>
                                            <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4: Third-Party Services */}
                        <section id="third-party" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <ExternalLink className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">4. Third-Party Services</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Our platforms may integrate with external services and applications:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-zinc-300 text-sm">
                                {[
                                    "Payment Gateways",
                                    "Cloud Providers",
                                    "SMS Providers",
                                    "Email Providers",
                                    "Communication Platforms",
                                    "Third-Party APIs",
                                    "Government Portals",
                                    "External Software"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 p-3 rounded">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                                        <span className="text-zinc-300 text-xs font-bold uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-400 text-sm font-light leading-relaxed mt-4">
                                Kiaan Technology does not control such third-party services and shall not be responsible or liable for any downtime, data inaccuracies, service interruptions, security incidents, API failures, or policy changes caused by such third parties.
                            </p>
                        </section>

                        {/* Section 5: Customer Data Responsibility */}
                        <section id="data-responsibility" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Database className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">5. Data Responsibility</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Users remain solely and exclusively responsible for the content they generate, upload, and process on our systems:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-light">
                                {[
                                    "Data entered into the platform",
                                    "Customer information uploaded",
                                    "Business records maintained & documents stored",
                                    "Compliance obligations and industry standards"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2 bg-zinc-950/40 border border-zinc-900 p-4 rounded">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                Kiaan Technology does not verify, monitor, or audit the accuracy, legality, or completeness of customer-provided information.
                            </p>
                        </section>

                        {/* Section 6: No Guaranteed Results */}
                        <section id="no-results" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Activity className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">6. No Guaranteed Results</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                While our software solutions are designed to improve and streamline business operations, Kiaan Technology does not guarantee:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                {[
                                    "Increased revenue or client volume",
                                    "Business growth or conversions",
                                    "Regulatory approval or clearances",
                                    "Customer acquisition rates",
                                    "Overall profitability",
                                    "Specific operational outcomes"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 border-l-2 border-yellow-500/20 pl-4 py-1.5 bg-zinc-950/20">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs italic">
                                Results may vary depending on user actions, business practices, market conditions, and external factors.
                            </p>
                        </section>

                        {/* Section 7: Limitation of Liability */}
                        <section id="limitation-liability" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Lock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">7. Limitation of Liability</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                To the maximum extent permitted by applicable law, Kiaan Technology shall not be liable for:
                            </p>
                            <div className="bg-zinc-950/60 border border-zinc-900 p-6 rounded-lg space-y-4">
                                <h3 className="text-white text-sm font-bold uppercase tracking-wider text-red-500">Excluded Damages</h3>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                                    {[
                                        "Indirect damages",
                                        "Consequential damages",
                                        "Special damages",
                                        "Incidental damages",
                                        "Loss of profits",
                                        "Loss of revenue",
                                        "Loss of business opportunities",
                                        "Loss of goodwill",
                                        "Loss of data",
                                        "Business interruption"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 pl-3 py-1.5 border-l-2 border-zinc-900 hover:border-yellow-500/20 transition-colors">
                                            <ChevronRight size={12} className="text-yellow-500/60 shrink-0" />
                                            <span className="text-zinc-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                The above exclusions apply to any claims arising from the use or inability to use our website, SaaS platforms, products, or custom integrations.
                            </p>
                        </section>

                        {/* Section 8: Security Disclaimer */}
                        <section id="security-disclaimer" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Shield className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">8. Security Disclaimer</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Although Kiaan Technology implements industry-standard technical and organizational security measures, no online platform, software system, network, or data transmission method can be guaranteed to be completely secure.
                            </p>
                            <div className="border-l-2 border-red-500/40 pl-4 py-2 bg-red-500/[0.01]">
                                <p className="text-red-500 font-bold text-xs uppercase tracking-wide mb-1">Inherent Risk Acknowledgment</p>
                                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                                    Users acknowledge and accept the inherent risks associated with internet-based technologies, data transfers, API calls, and cloud storage systems.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: External Links */}
                        <section id="external-links" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Globe className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">9. External Links</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Our website or SaaS solutions may contain links to third-party websites, applications, or resources. Such links are provided solely for convenience. Kiaan Technology does not endorse, control, or assume responsibility for the content, privacy practices, terms, or policies of third-party websites.
                            </p>
                        </section>

                        {/* Section 10: Changes to this Disclaimer */}
                        <section id="policy-changes" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">10. Changes to this Disclaimer</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology reserves the right to modify or amend this Disclaimer at any time. Updated versions will be published on this page with a revised effective date.
                            </p>
                            <p className="text-yellow-500 text-sm font-semibold tracking-wide bg-yellow-500/[0.02] border-l-2 border-yellow-500 pl-4 py-1.5">
                                Your continued use of our services following any updates represents your binding acceptance of the revised Disclaimer.
                            </p>
                        </section>

                        {/* Section 11: Contact Us */}
                        <section id="contact-us" className="scroll-mt-32">
                            <div className="bg-yellow-500 text-black p-8 md:p-12 rounded-lg relative overflow-hidden shadow-2xl shadow-yellow-500/5">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />

                                <h2 className="text-3xl font-display uppercase mb-2 leading-none font-black text-zinc-950">11. Contact Us</h2>
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
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Office Address</span>
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
