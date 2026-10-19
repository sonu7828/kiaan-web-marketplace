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
    { id: 'introduction', label: 'Introduction', icon: ShieldCheck },
    { id: 'saas-refunds', label: '1. SaaS Subscriptions', icon: Layers },
    { id: 'free-trial', label: '2. Free Trial Services', icon: Clock },
    { id: 'custom-dev', label: '3. Custom Software Dev', icon: Activity },
    { id: 'enterprise-projects', label: '4. Enterprise Projects', icon: Database },
    { id: 'duplicate-payments', label: '5. Duplicate Payments', icon: Receipt },
    { id: 'failed-transactions', label: '6. Failed Transactions', icon: AlertTriangle },
    { id: 'non-refundable', label: '7. Non-Refundable Services', icon: Lock },
    { id: 'request-process', label: '8. Refund Request Process', icon: FileText },
    { id: 'processing-timeline', label: '9. Processing Timeline', icon: Clock },
    { id: 'fraud-prevention', label: '10. Fraud Prevention', icon: Shield },
    { id: 'policy-updates', label: '11. Policy Updates', icon: RefreshCw },
    { id: 'contact-us', label: '12. Contact Us', icon: Mail },
];

export default function RefundPolicyPage() {
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
                                Refund <span className="text-yellow-500">Policy</span>
                            </h1>
                            <div className="hidden sm:block w-[1px] h-5 bg-zinc-800" />
                            <div>
                                <span className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black uppercase tracking-[0.25em] rounded">
                                    Billing & Refund
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
                                    Welcome to the Refund Policy page of Kiaan Technology.
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    This Refund Policy governs refunds for all products, software solutions, SaaS subscriptions, enterprise applications, custom software development services, implementation services, consulting services, and other offerings provided by Kiaan Technology Private Limited (&quot;Kiaan Technology&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    By purchasing any service or product from Kiaan Technology, you acknowledge that you have read, understood, and agreed to this Refund Policy.
                                </p>
                            </div>
                        </section>

                        {/* Section 1: SaaS Subscription Refunds */}
                        <section id="saas-refunds" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Layers className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">1. SaaS Subscription Refunds</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology provides subscription-based software services. Unless expressly stated otherwise in writing, please note the following subscription refund terms:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light">
                                {[
                                    { title: "Monthly Subscriptions", desc: "Monthly subscription fees are strictly non-refundable." },
                                    { title: "Annual Subscriptions", desc: "Annual subscription fees are non-refundable after activation." },
                                    { title: "Partial Usage", desc: "Partial usage of a subscription does not qualify for a refund." },
                                    { title: "Unused Periods", desc: "Unused subscription periods are non-refundable." },
                                    { title: "Inactivity", desc: "Failure to use the purchased service does not qualify for a refund." },
                                    { title: "Cancellation Intent", desc: "Change of mind after purchase does not qualify for a refund." }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-zinc-950/40 border border-zinc-900/60 p-4 rounded-md">
                                        <span className="w-5 h-5 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                            {index + 1}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-white font-bold text-xs uppercase tracking-wider mb-1">{item.title}</span>
                                            <span className="text-zinc-400 leading-relaxed">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/[0.02]">
                                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                                    Users may cancel future subscription renewals at any time in accordance with our separate Cancellation Policy.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Free Trial Services */}
                        <section id="free-trial" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Clock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">2. Free Trial Services</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Where a free trial is offered to users, the following guidelines govern evaluation and subsequent billings:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light">
                                {[
                                    { title: "Evaluation Window", desc: "Users may evaluate the platform capabilities during the specified trial period." },
                                    { title: "Cancellation Period", desc: "Users may cancel before the trial expires to avoid future charges on their card." },
                                    { title: "Conversion Rules", desc: "Once a paid subscription begins, standard subscription refund rules apply." }
                                ].map((item, index) => (
                                    <div key={index} className="bg-zinc-950/60 border border-zinc-900/80 p-5 rounded-lg flex flex-col justify-between hover:border-yellow-500/20 transition-colors">
                                        <div className="space-y-3">
                                            <h3 className="text-white font-bold uppercase tracking-wider">{item.title}</h3>
                                            <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-sm font-light leading-relaxed mt-2">
                                Any usage of our platforms beyond the trial period may result in automatic billing according to the selected subscription plan.
                            </p>
                        </section>

                        {/* Section 3: Custom Software Development Services */}
                        <section id="custom-dev" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Activity className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">3. Custom Software Development Services</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Due to the highly customized nature of software development services, project setups, and resource allocation:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light">
                                {[
                                    "Payments for completed work milestones are non-refundable",
                                    "Project milestone payments already completed are non-refundable",
                                    "Discovery, planning, consultation, design, architecture, and requirement analysis fees are non-refundable",
                                    "Development work already performed remains chargeable and invoiced"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2 bg-zinc-950/40 border border-zinc-900 p-4 rounded">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="border-l-2 border-red-500/40 pl-4 py-2 bg-red-500/[0.01]">
                                <p className="text-red-500 font-bold text-xs uppercase tracking-wide mb-1">Cancellation Mid-Project</p>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                    Where a project is cancelled after development work has commenced, charges applicable to all completed work and consumed resources up to the cancellation date shall remain payable.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: Enterprise Software Projects */}
                        <section id="enterprise-projects" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Database className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">4. Enterprise Software Projects</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Enterprise-level software projects developed or implemented by us are governed under specific project agreements. This applies to:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-zinc-300 text-sm">
                                {[
                                    "CRM Systems",
                                    "ERP Systems",
                                    "HRMS Solutions",
                                    "Hospital & EMR Software",
                                    "Property Management Systems",
                                    "Loan Management Systems",
                                    "Car Rental Platforms",
                                    "Warehouse Management Systems",
                                    "AI Automation Solutions"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 p-3 rounded hover:border-yellow-500/20 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                                        <span className="text-zinc-300 text-xs font-bold uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg mt-4">
                                <p className="text-white text-sm font-bold uppercase tracking-wider mb-2">Agreement Precedence</p>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                    Enterprise projects may be governed by separate written agreements, contracts, proposals, Statements of Work (SOW), or Master Service Agreements (MSA). Where such specific agreements exist, the refund provisions within those signed contracts shall prevail.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Duplicate Payments */}
                        <section id="duplicate-payments" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Receipt className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">5. Duplicate Payments</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                If a customer is accidentally charged multiple times for the same transaction due to a technical, bank, or gateway error, the duplicate payments may be eligible for a refund after thorough verification.
                            </p>
                            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg">
                                <p className="text-white text-sm font-bold uppercase tracking-wider mb-4">Required Details for Investigation</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px] text-zinc-300 font-bold uppercase text-center">
                                    {["Transaction ID", "Payment Receipt", "Account Info", "Support Docs"].map((item, i) => (
                                        <div key={i} className="border border-zinc-900 bg-zinc-950/40 py-2.5 px-3 rounded flex items-center justify-center gap-2">
                                            <ChevronRight size={10} className="text-yellow-500" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                Approved duplicate payment refunds will be processed through the original payment method wherever possible, subject to bank timelines.
                            </p>
                        </section>

                        {/* Section 6: Failed Transactions */}
                        <section id="failed-transactions" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <AlertTriangle className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">6. Failed Transactions</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                If a payment is successfully debited from your account but the purchased service or subscription is not activated due to a verified technical issue:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>The disputed transaction will be reviewed internally within 48 hours.</li>
                                <li>The debited amount may be refunded in full or credited as platform balance after verification.</li>
                                <li>Resolution timelines may vary depending on payment gateway providers and financial institutions.</li>
                            </ul>
                        </section>

                        {/* Section 7: Non-Refundable Services */}
                        <section id="non-refundable" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Lock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">7. Non-Refundable Services</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                To protect resource commitments and upfront configurations, the following services and charges are strictly non-refundable:
                            </p>
                            <div className="bg-zinc-950/60 border border-zinc-900 p-6 rounded-lg space-y-4">
                                <h3 className="text-white text-sm font-bold uppercase tracking-wider text-yellow-500">Service Categories</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                                    {[
                                        "Custom Software Development",
                                        "UI/UX Design Services",
                                        "Consultation Services",
                                        "Technical Support Delivered",
                                        "Data Migration Services",
                                        "Configuration Services",
                                        "Training Services",
                                        "Setup & Installation Fees",
                                        "Implementation Charges",
                                        "Third-Party Licensing Costs",
                                        "Cloud Server Charges Incurred",
                                        "Completed Project Milestones"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 pl-3 py-1.5 border-l-2 border-zinc-900 hover:border-yellow-500/20 transition-colors">
                                            <ChevronRight size={12} className="text-yellow-500/60 shrink-0" />
                                            <span className="text-zinc-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 8: Refund Request Process */}
                        <section id="request-process" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <FileText className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">8. Refund Request Process</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                To request a refund for an eligible payment, customers must submit an official request to our support desk:
                            </p>
                            <div className="border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/[0.02] flex flex-col gap-1.5">
                                <span className="text-white font-bold text-xs uppercase tracking-wide">Support Email</span>
                                <a href="mailto:info@kiaantechnology.com" className="text-yellow-500 font-bold hover:underline text-sm flex items-center gap-1.5">
                                    <Mail size={14} /> info@kiaantechnology.com
                                </a>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Your email request should contain the following details for faster verification:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-zinc-300 font-semibold">
                                {[
                                    "Customer Full Name",
                                    "Registered Email Address",
                                    "Transaction ID",
                                    "Invoice Number",
                                    "Payment Date",
                                    "Detailed Issue Description"
                                ].map((item, index) => (
                                    <div key={index} className="border border-zinc-900 bg-zinc-950/40 py-2.5 px-3 rounded flex items-center gap-2">
                                        <ChevronRight size={12} className="text-yellow-500 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs italic">
                                Note: Additional verification details or transaction logs may be requested before processing.
                            </p>
                        </section>

                        {/* Section 9: Refund Processing Timeline */}
                        <section id="processing-timeline" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Clock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">9. Refund Processing Timeline</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Once an eligible refund request is verified and formally approved by our billing team, the refund is generally processed within **7 to 15 business days**.
                            </p>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                The actual credit timeline to appear on your statement depends on:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-zinc-300 font-semibold">
                                {["Receiving Bank", "Credit Card Provider", "Debit Card Network", "UPI Service Provider", "Payment Gateway Partner", "Local Clearing Systems"].map((item, index) => (
                                    <div key={index} className="border border-zinc-900 bg-zinc-950/20 py-2.5 px-3 rounded">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                Kiaan Technology shall not be held liable or responsible for operational delays caused by banks, payment gateways, or other external financial institutions.
                            </p>
                        </section>

                        {/* Section 10: Fraud Prevention */}
                        <section id="fraud-prevention" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Shield className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">10. Fraud Prevention</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology reserves the right to deny or block any refund requests where:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Fraudulent, abusive, or suspicious activity is detected.</li>
                                <li>False or misleading information is provided during signup or dispute processing.</li>
                                <li>Services or platforms have already been substantially consumed or utilized.</li>
                                <li>Our platform Terms &amp; Conditions have been violated.</li>
                                <li>Payment disputes or chargebacks are initiated in bad faith.</li>
                            </ul>
                        </section>

                        {/* Section 11: Policy Updates */}
                        <section id="policy-updates" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">11. Policy Updates</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                We reserve the right to modify, amend, or replace this Refund Policy at our discretion. Updated versions will be published on this page with a revised &quot;Last Updated&quot; date.
                            </p>
                            <p className="text-yellow-500 text-sm font-semibold tracking-wide bg-yellow-500/[0.02] border-l-2 border-yellow-500 pl-4 py-1.5">
                                Your continued use of our services following any updates represents your binding acceptance of the revised Refund Policy.
                            </p>
                        </section>

                        {/* Section 12: Contact Us */}
                        <section id="contact-us" className="scroll-mt-32">
                            <div className="bg-yellow-500 text-black p-8 md:p-12 rounded-lg relative overflow-hidden shadow-2xl shadow-yellow-500/5">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />

                                <h2 className="text-3xl font-display uppercase mb-2 leading-none font-black text-zinc-950">12. Contact Us</h2>
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
