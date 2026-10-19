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
    { id: 'introduction', label: '1. Introduction', icon: ShieldCheck },
    { id: 'saas-cancellation', label: '2. SaaS Subscription', icon: Layers },
    { id: 'monthly-plans', label: '3. Monthly Plans', icon: Clock },
    { id: 'annual-plans', label: '4. Annual Plans', icon: Clock },
    { id: 'auto-renewal', label: '5. Auto-Renewal', icon: RefreshCw },
    { id: 'custom-projects', label: '6. Custom Projects', icon: Activity },
    { id: 'enterprise-implementations', label: '7. Enterprise Implementations', icon: Database },
    { id: 'service-suspension', label: '8. Service Suspension', icon: Lock },
    { id: 'effect-cancellation', label: '9. Effect of Cancellation', icon: Trash2 },
    { id: 'cancellation-requests', label: '10. Cancellation Requests', icon: FileText },
    { id: 'abuse-prevention', label: '11. Abuse Prevention', icon: Shield },
    { id: 'policy-updates', label: '12. Policy Updates', icon: RefreshCw },
    { id: 'contact-us', label: '13. Contact Us', icon: Mail },
];

export default function CancellationPolicyPage() {
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
                                Cancellation <span className="text-yellow-500">Policy</span>
                            </h1>
                            <div className="hidden sm:block w-[1px] h-5 bg-zinc-800" />
                            <div>
                                <span className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black uppercase tracking-[0.25em] rounded">
                                    Sub & Account
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
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    This Cancellation Policy governs the cancellation of subscriptions, software services, SaaS platforms, enterprise solutions, custom software development services, and other offerings provided by Kiaan Technology Private Limited (&quot;Kiaan Technology&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    By purchasing or subscribing to any service, you acknowledge that you have read, understood, and agreed to this Cancellation Policy.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: SaaS Subscription Cancellation */}
                        <section id="saas-cancellation" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Layers className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">2. SaaS Subscription Cancellation</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Users may cancel their SaaS subscription at any time through their account settings dashboard or by contacting our customer support team directly.
                            </p>
                            <div className="border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/[0.02]">
                                <p className="text-yellow-500 font-bold text-sm uppercase tracking-wide mb-1">Billing Notice</p>
                                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                                    Cancellation of a subscription will prevent future billing cycles but will not automatically generate a refund unless specifically permitted under our separate Refund Policy.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: Monthly Subscription Plans */}
                        <section id="monthly-plans" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Clock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">3. Monthly Subscription Plans</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                For users subscribed to our monthly billing plans:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Users may cancel their subscription at any time.</li>
                                <li>Access to services will continue until the end of the current paid billing period.</li>
                                <li>No partial refunds shall be issued for unused portions of the active billing cycle.</li>
                            </ul>
                        </section>

                        {/* Section 4: Annual Subscription Plans */}
                        <section id="annual-plans" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Clock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">4. Annual Subscription Plans</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                For users subscribed to our annual billing plans:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Users may cancel their renewal at any time before the next billing cycle.</li>
                                <li>Access will continue until the subscription expiration date.</li>
                                <li>Annual subscription fees already paid are generally non-refundable unless otherwise specified in writing.</li>
                            </ul>
                        </section>

                        {/* Section 5: Auto-Renewal */}
                        <section id="auto-renewal" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">5. Auto-Renewal</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Certain subscription plans are configured to renew automatically to prevent service interruptions.
                            </p>
                            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg">
                                <p className="text-white text-sm font-bold uppercase tracking-wider mb-2">Recurring Billing Authorization</p>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                    By subscribing, users authorize Kiaan Technology to process recurring payments for the selected subscription plan unless cancelled before the renewal date. Users remain responsible for managing their subscription status and renewal preferences inside their profile settings.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Custom Software Development Projects */}
                        <section id="custom-projects" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Activity className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">6. Custom Software Development Projects</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Custom software development services, consulting engagements, implementation projects, integrations, and enterprise deployments may be cancelled only in accordance with the applicable project agreement.
                            </p>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Where work has already commenced:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
                                {[
                                    { title: "Completed Milestones", desc: "Completed project milestones remain fully payable by the client." },
                                    { title: "Delivered Work", desc: "Delivered software, code, and documents remain chargeable." },
                                    { title: "Deposits & Planning", desc: "Project deposits and discovery planning fees remain non-refundable." },
                                    { title: "Payment Obligations", desc: "Cancellation does not eliminate outstanding payment obligations for completed work." }
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

                        {/* Section 7: Enterprise Software Implementations */}
                        <section id="enterprise-implementations" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Database className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">7. Enterprise Software Implementations</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Cancellation terms for large-scale enterprise solutions are governed under dedicated contracts. This applies to:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-zinc-300 text-sm">
                                {[
                                    "CRM Systems",
                                    "ERP Solutions",
                                    "HRMS Platforms",
                                    "Hospital & EMR Systems",
                                    "Property Management",
                                    "Loan Management",
                                    "Car Rental Platforms",
                                    "Warehouse Management"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 p-3 rounded">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                                        <span className="text-zinc-300 text-xs font-bold uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-400 text-sm font-light leading-relaxed mt-4">
                                Cancellation terms for these solutions may be governed by separate contracts, service agreements, statements of work (SOW), or implementation agreements. Such signed agreements shall prevail over this policy.
                            </p>
                        </section>

                        {/* Section 8: Service Suspension */}
                        <section id="service-suspension" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Lock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">8. Service Suspension</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology reserves the right to suspend or restrict access to services where:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                {[
                                    "Payments remain overdue or unpaid",
                                    "Fraudulent activity is detected under your account",
                                    "Security risks are identified for our systems",
                                    "Terms & Conditions are breached or violated",
                                    "Required legal or regulatory compliance is not met"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 border-l-2 border-yellow-500/20 pl-4 py-1.5 bg-zinc-950/20">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-l-2 border-red-500/40 pl-4 py-2 bg-red-500/[0.01] mt-4">
                                <p className="text-zinc-400 text-xs leading-relaxed italic">
                                    Note: Suspension does not constitute cancellation of the contract and does not waive or excuse any outstanding payment obligations.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Effect of Cancellation */}
                        <section id="effect-cancellation" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Trash2 className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">9. Effect of Cancellation</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Upon cancellation of your software services or subscription:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Future billing cycles may stop, where applicable.</li>
                                <li>User access to the paid features may continue until the end of the active subscription period.</li>
                                <li>Certain stored data may remain available for a limited retention period for backup purposes.</li>
                                <li>Data may subsequently be deleted in accordance with our Privacy Policy and internal retention procedures.</li>
                            </ul>
                            <div className="bg-zinc-950 border border-zinc-900/80 p-5 rounded-lg">
                                <p className="text-yellow-500 font-bold text-xs uppercase tracking-wide mb-1">Data Backup Reminder</p>
                                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                                    Users are strongly encouraged to export or back up all important information, client records, and data prior to the final cancellation date.
                                </p>
                            </div>
                        </section>

                        {/* Section 10: Cancellation Requests */}
                        <section id="cancellation-requests" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <FileText className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">10. Cancellation Requests</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Cancellation requests may be submitted through our customer support email:
                            </p>
                            <div className="border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/[0.02]">
                                <a href="mailto:info@kiaantechnology.com" className="text-yellow-500 font-bold hover:underline text-sm flex items-center gap-1.5">
                                    <Mail size={14} /> info@kiaantechnology.com
                                </a>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                To successfully process a cancellation request, users may be required to provide:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 text-[10px] text-zinc-300 font-bold uppercase text-center">
                                {["Customer Name", "Registered Email", "Subscription Info", "Account Info", "Reason"].map((item, index) => (
                                    <div key={index} className="border border-zinc-900 bg-zinc-950/40 py-2.5 px-3 rounded flex items-center justify-center">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs italic">
                                Verification of account ownership may be required before cancellation is finalized.
                            </p>
                        </section>

                        {/* Section 11: Abuse Prevention */}
                        <section id="abuse-prevention" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Shield className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">11. Abuse Prevention</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology reserves the right to reject cancellation-related requests or refuse subscription terminations that involve:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Fraudulent activities or suspicious account takeovers.</li>
                                <li>Unauthorized account access attempts.</li>
                                <li>Payment disputes or chargebacks initiated in bad faith.</li>
                                <li>Violations of applicable local or national laws.</li>
                                <li>Abuse of promotional offers, trial programs, or discount schemes.</li>
                            </ul>
                        </section>

                        {/* Section 12: Policy Updates */}
                        <section id="policy-updates" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">12. Policy Updates</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology reserves the right to update or modify this Cancellation Policy at any time. Updated versions will be published on our website with a revised effective date.
                            </p>
                            <p className="text-yellow-500 text-sm font-semibold tracking-wide bg-yellow-500/[0.02] border-l-2 border-yellow-500 pl-4 py-1.5">
                                Your continued use of our services following any updates represents your binding acceptance of the revised Cancellation Policy.
                            </p>
                        </section>

                        {/* Section 13: Contact Us */}
                        <section id="contact-us" className="scroll-mt-32">
                            <div className="bg-yellow-500 text-black p-8 md:p-12 rounded-lg relative overflow-hidden shadow-2xl shadow-yellow-500/5">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />

                                <h2 className="text-3xl font-display uppercase mb-2 leading-none font-black text-zinc-950">13. Contact Us</h2>
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
