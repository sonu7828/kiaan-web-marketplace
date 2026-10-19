"use client";

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft, ChevronRight, Mail, Phone, MapPin,
    Shield, Lock, Database, CreditCard, Layers,
    Clock, User, Trash2, Globe, FileText, UserCheck,
    RefreshCw, ExternalLink, Activity, Scale, AlertTriangle,
    ShieldCheck, Receipt, HelpCircle, Cookie
} from 'lucide-react';
import Link from 'next/link';

// List of all sections for the Table of Contents
const sections = [
    { id: 'introduction', label: '1. Introduction', icon: ShieldCheck },
    { id: 'what-are-cookies', label: '2. What Are Cookies?', icon: Cookie },
    { id: 'how-we-use', label: '3. How We Use Cookies', icon: Activity },
    { id: 'cookie-types', label: '4. Types of Cookies', icon: Layers },
    { id: 'third-party', label: '5. Third-Party Cookies', icon: ExternalLink },
    { id: 'managing-cookies', label: '6. Managing Cookies', icon: Lock },
    { id: 'collected-data', label: '7. Data Collected', icon: Database },
    { id: 'security', label: '8. Security', icon: Shield },
    { id: 'policy-changes', label: '9. Policy Changes', icon: RefreshCw },
    { id: 'contact-us', label: '10. Contact Us', icon: Mail },
];

export default function CookiePolicyPage() {
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
                                Cookie <span className="text-yellow-500">Policy</span>
                            </h1>
                            <div className="hidden sm:block w-[1px] h-5 bg-zinc-800" />
                            <div>
                                <span className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black uppercase tracking-[0.25em] rounded">
                                    Privacy & Cookies
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

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-32">
                            <div
                                className="border-l-2 border-yellow-500 pl-6 space-y-4"
                            >
                                <h2 className="text-white text-xl font-bold uppercase tracking-wider mb-2">1. Introduction</h2>
                                <p className="text-zinc-300 text-lg font-light leading-relaxed">
                                    Welcome to the Cookie Policy page of Kiaan Technology.
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    This Cookie Policy explains how Kiaan Technology Private Limited (&quot;Kiaan Technology&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and similar technologies when you visit our website, software platforms, SaaS applications, mobile applications, and related services.
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    By accessing or using our website and services, you acknowledge and agree to the use of cookies and similar technologies as described in this Cookie Policy.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Are Cookies? */}
                        <section id="what-are-cookies" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Cookie className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">2. What Are Cookies?</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Cookies are small text files that are stored on your computer, smartphone, or other device when you visit a website.
                            </p>
                            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg space-y-3">
                                <p className="text-white text-sm font-bold uppercase tracking-wider">How Cookies Help</p>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                    Cookies help websites recognize users, remember preferences, improve overall platform functionality, enhance account security, and provide a much smoother user experience. Cookies generally do not contain information that directly identifies an individual user.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: How We Use Cookies */}
                        <section id="how-we-use" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Activity className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">3. How We Use Cookies</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                We may use cookies and similar technologies for various operational, security, and research purposes, including:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Improve website functionality and visual responsiveness",
                                    "Remember user settings, language preferences, and profile defaults",
                                    "Maintain secure active user sessions and validation",
                                    "Analyze overall website traffic and user navigation paths",
                                    "Monitor platform speed, latency, and general performance",
                                    "Enhance system security and account protection profiles",
                                    "Improve customer experience and custom interface structures",
                                    "Understand user behaviors, flow patterns, and features usage",
                                    "Optimize general website responsiveness and client portal usability"
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

                        {/* Section 4: Types of Cookies We Use */}
                        <section id="cookie-types" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Layers className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">4. Types of Cookies We Use</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                We categorize the cookies we deploy into five primary classifications depending on their utility:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
                                {[
                                    { title: "Essential Cookies", desc: "These cookies are necessary for the basic operation of our website and services. Without these, certain features, dashboard systems, and critical security mechanisms will not function." },
                                    { title: "Performance Cookies", desc: "These help us monitor how users interact with our systems by gathering anonymous records regarding general platform performance and load speeds." },
                                    { title: "Functional Cookies", desc: "These cookies store active selections (like theme defaults or forms inputs) to deliver a personalized, customized interface on subsequent interactions." },
                                    { title: "Analytics Cookies", desc: "We utilize tools to analyze website traffic, engagement patterns, popular content, and visitor interactions. This data is collected in aggregated, non-identifiable profiles." },
                                    { title: "Security Cookies", desc: "These cookies identify suspicious interactions, block unauthorized access attempts, support safety protocols, and keep client credentials protected." }
                                ].map((item, index) => (
                                    <div key={index} className="bg-zinc-950/60 border border-zinc-900/80 p-5 rounded-lg hover:border-yellow-500/20 transition-all duration-300 flex flex-col justify-between">
                                        <div className="space-y-3">
                                            <h3 className="text-white font-bold uppercase tracking-wider">{item.title}</h3>
                                            <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 5: Third-Party Cookies */}
                        <section id="third-party" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <ExternalLink className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">5. Third-Party Cookies</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Certain third-party integrations embedded into our cloud environments may place their own cookies on your devices. These integrations may include:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-zinc-300 text-sm">
                                {[
                                    "Analytics Providers",
                                    "Payment Service Providers",
                                    "Customer Support Platforms",
                                    "Marketing Automation Tools",
                                    "Embedded Content Engines",
                                    "Cloud Security Providers"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 p-3 rounded">
                                        <ExternalLink size={12} className="text-yellow-500 shrink-0" />
                                        <span className="text-zinc-300 text-xs font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-l-2 border-red-500/40 pl-4 py-2 bg-red-500/[0.01] mt-4">
                                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                    We do not control third-party cookies. These cookies are subject to the respective privacy and cookie policies of the third-party providers. We encourage users to read policies of those external partners.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Managing Cookies */}
                        <section id="managing-cookies" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Lock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">6. Managing Cookies</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Most modern web browsers provide features that enable users to configure, block, or delete cookies as they prefer. Typically, you can:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light">
                                {[
                                    "Inspect all currently stored cookies on your local system",
                                    "Delete individual cookies or clear stored cookies databases",
                                    "Configure rules to block cookies from specific web addresses",
                                    "Block all cookies from being stored entirely",
                                    "Request alerts or notifications when new cookies are initialized"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2.5 bg-zinc-950/40 border border-zinc-900/60 p-4 rounded">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-red-500/80 text-xs italic mt-2">
                                Warning: Disabling essential cookies might severely limit the accessibility, features, performance, and general operations of our website services and portals.
                            </p>
                        </section>

                        {/* Section 7: Data Collected Through Cookies */}
                        <section id="collected-data" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Database className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">7. Data Collected Through Cookies</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Information collected through our use of cookies and tracking technologies may include:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-zinc-300 font-bold uppercase text-center mt-4">
                                {["Browser Type", "Device Model", "Operating System", "IP Address", "Session Info", "Usage Data", "Preference States", "Referring URLs"].map((item, index) => (
                                    <div key={index} className="border border-zinc-900 bg-zinc-950/40 py-2.5 px-3 rounded">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed mt-4">
                                All information harvested through tracking systems is processed in absolute compliance with our main Privacy Policy.
                            </p>
                        </section>

                        {/* Section 8: Security */}
                        <section id="security" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Shield className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">8. Security</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Cookies deployed by Kiaan Technology are restricted to security enhancements, active session verification, platform stability maintenance, and supporting fraud prevention measures.
                            </p>
                            <div className="border-l-2 border-yellow-500 pl-4 py-1.5 bg-yellow-500/[0.02]">
                                <p className="text-zinc-300 text-sm font-light">
                                    We do not use cookies to collect sensitive personal information, credentials, or private documents without your explicit consent where required by law.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Changes to This Cookie Policy */}
                        <section id="policy-changes" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">9. Changes to This Cookie Policy</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology reserves the right to update, modify, or replace this Cookie Policy at any time. All updates will be published directly on this page with a revised &quot;Last Updated&quot; date.
                            </p>
                            <p className="text-yellow-500 text-sm font-semibold tracking-wide bg-yellow-500/[0.02] border-l-2 border-yellow-500 pl-4 py-1.5">
                                Your continued use of our website and services following any updates constitutes acceptance of the revised Cookie Policy.
                            </p>
                        </section>

                        {/* Section 10: Contact Us */}
                        <section id="contact-us" className="scroll-mt-32">
                            <div className="bg-yellow-500 text-black p-8 md:p-12 rounded-lg relative overflow-hidden shadow-2xl shadow-yellow-500/5">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />

                                <h2 className="text-3xl font-display uppercase mb-2 leading-none font-black text-zinc-950">10. Contact Us</h2>
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
