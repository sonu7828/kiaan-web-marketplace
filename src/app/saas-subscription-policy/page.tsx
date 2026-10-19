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
    { id: 'subscription-plans', label: '2. Subscription Plans', icon: Layers },
    { id: 'subscription-activation', label: '3. Activation', icon: UserCheck },
    { id: 'billing-payments', label: '4. Billing & Payments', icon: CreditCard },
    { id: 'auto-renewal', label: '5. Auto-Renewal', icon: RefreshCw },
    { id: 'plan-upgrades', label: '6. Plan Upgrades', icon: Activity },
    { id: 'plan-downgrades', label: '7. Plan Downgrades', icon: Activity },
    { id: 'subscription-cancellation', label: '8. Cancellation', icon: Trash2 },
    { id: 'service-suspension', label: '9. Suspension', icon: Lock },
    { id: 'customer-data', label: '10. Customer Data', icon: Database },
    { id: 'service-availability', label: '11. Availability', icon: Clock },
    { id: 'subscription-termination', label: '12. Termination', icon: Lock },
    { id: 'plan-changes', label: '13. Plan Changes', icon: RefreshCw },
    { id: 'policy-updates', label: '14. Policy Updates', icon: FileText },
    { id: 'contact-us', label: '15. Contact Us', icon: Mail },
];

export default function SaasSubscriptionPolicyPage() {
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
                                SaaS Subscription <span className="text-yellow-500">Policy</span>
                            </h1>
                            <div className="hidden sm:block w-[1px] h-5 bg-zinc-800" />
                            <div>
                                <span className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black uppercase tracking-[0.25em] rounded">
                                    SaaS & Licensing
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
                                    This SaaS Subscription Policy governs the subscription-based software services, cloud platforms, enterprise applications, and Software-as-a-Service (&quot;SaaS&quot;) products provided by Kiaan Technology Private Limited (&quot;Kiaan Technology&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    By subscribing to any SaaS product or service offered by Kiaan Technology, you agree to this SaaS Subscription Policy in addition to our Terms &amp; Conditions, Privacy Policy, Refund Policy, and Cancellation Policy.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Subscription Plans */}
                        <section id="subscription-plans" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Layers className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">2. Subscription Plans</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology may offer various subscription plans depending on product configurations and corporate requirements, including:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-[10px] text-zinc-300 font-bold uppercase text-center">
                                {["Monthly Plans", "Quarterly Plans", "Annual Plans", "Enterprise Plans", "Custom Subscriptions"].map((item, i) => (
                                    <div key={i} className="border border-zinc-900 bg-zinc-950/40 py-2.5 px-3 rounded flex items-center justify-center gap-2">
                                        <ChevronRight size={10} className="text-yellow-500 shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed mt-2">
                                Features, pricing, user limits, storage allocations, service availability, and support levels may vary between plans.
                            </p>
                        </section>

                        {/* Section 3: Subscription Activation */}
                        <section id="subscription-activation" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <UserCheck className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">3. Subscription Activation</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Subscriptions become active once all the following requirements are met:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light">
                                {[
                                    { title: "Payment Cleared", desc: "Subscription fees are successfully processed and authorized." },
                                    { title: "Verification Completed", desc: "Account security and registration verification steps are fulfilled." },
                                    { title: "Service Provisioned", desc: "Cloud directories, instances, and software environments are fully set up." }
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
                                Access to subscribed systems and cloud dashboards may be restricted until these activation requirements are fully completed.
                            </p>
                        </section>

                        {/* Section 4: Billing and Payments */}
                        <section id="billing-payments" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <CreditCard className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">4. Billing and Payments</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Subscription billing is handled periodically. Users agree to:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Pay all applicable subscription fees in full.</li>
                                <li>Maintain valid, updated billing information and card credentials.</li>
                                <li>Authorize recurring billing transactions where applicable.</li>
                                <li>Pay applicable local, state, and national taxes related to the subscriptions.</li>
                            </ul>
                            <div className="border-l-2 border-red-500/40 pl-4 py-2 bg-red-500/[0.01]">
                                <p className="text-red-500 font-bold text-xs uppercase tracking-wide mb-1">Non-Payment Consequence</p>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                    Failure to complete payment may result in service restrictions, temporary suspension, limited access, or termination of services. Kiaan Technology reserves the right to suspend or restrict access to services until outstanding payments are cleared.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Auto-Renewal */}
                        <section id="auto-renewal" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">5. Auto-Renewal</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Certain subscription plans may automatically renew at the end of the subscription period to ensure ongoing service:
                            </p>
                            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg">
                                <p className="text-white text-sm font-bold uppercase tracking-wider mb-2">Recurring Authorization</p>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                    By purchasing such plans, users authorize Kiaan Technology to charge the applicable subscription fees using the selected payment method unless the subscription is cancelled before the renewal date. Users are responsible for managing subscription renewals and ensuring that cancellation requests are submitted before the next billing cycle.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: Plan Upgrades */}
                        <section id="plan-upgrades" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Activity className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">6. Plan Upgrades</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Users may upgrade their subscription plans at any time, subject to platform availability. Upon upgrade:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Additional features, user seats, or storage limits may become immediately available.</li>
                                <li>Revised pricing structures will apply to the billing account.</li>
                                <li>Billing adjustments or prorated charges may be made where applicable.</li>
                            </ul>
                            <p className="text-zinc-500 text-xs italic">
                                Upgrades may take effect immediately or at the beginning of the next billing cycle depending on the selected service.
                            </p>
                        </section>

                        {/* Section 7: Plan Downgrades */}
                        <section id="plan-downgrades" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Activity className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">7. Plan Downgrades</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Users may request plan downgrades subject to service limitations and eligibility requirements. Downgrading a subscription may result in:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 text-[10px] text-zinc-300 font-bold uppercase text-center">
                                {["Reduced Features", "Reduced Storage", "Reduced User limits", "Reduced Capacity", "Loss of Premium"].map((item, index) => (
                                    <div key={index} className="border border-zinc-900 bg-zinc-950/40 py-2.5 px-3 rounded flex items-center justify-center">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed mt-4">
                                Kiaan Technology shall not be responsible for any data loss, capacity issues, or business impact resulting from plan downgrades.
                            </p>
                        </section>

                        {/* Section 8: Subscription Cancellation */}
                        <section id="subscription-cancellation" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Trash2 className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">8. Subscription Cancellation</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Users may cancel subscriptions in accordance with the Cancellation Policy. Cancellation:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light">
                                {[
                                    { title: "Billing Cycles", desc: "Prevents future subscription renewals from being charged." },
                                    { title: "No Auto-Refunds", desc: "Does not automatically entitle users to refunds or credits." },
                                    { title: "Historical Charges", desc: "Does not affect charges already incurred or outstanding dues." },
                                    { title: "Previous Payments", desc: "Does not reverse previously processed subscription payments." }
                                ].map((item, index) => (
                                    <div key={index} className="bg-zinc-950/60 border border-zinc-900/80 p-5 rounded-lg flex flex-col justify-between hover:border-yellow-500/20 transition-colors">
                                        <div className="space-y-3">
                                            <h3 className="text-white font-bold uppercase tracking-wider">{item.title}</h3>
                                            <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="border-l-2 border-yellow-500 pl-4 py-2 bg-yellow-500/[0.02] mt-4">
                                <p className="text-zinc-300 text-xs leading-relaxed">
                                    Access may continue until the end of the active billing period. Users are responsible for cancelling subscriptions before the next billing cycle. Failure to cancel prior to renewal may result in automatic billing for the subsequent subscription period.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Suspension of Services */}
                        <section id="service-suspension" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Lock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">9. Suspension of Services</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology may suspend access where:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                                {[
                                    "Payments remain overdue or bank credentials expire",
                                    "Fraudulent activity is suspected on the subscription",
                                    "Security threats or system anomalies are identified",
                                    "Main platform Terms & Conditions are violated",
                                    "Legal or regulatory requirements necessitate suspension",
                                    "System misuse, data scraping, or overloading is detected"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2 bg-zinc-950/40 border border-zinc-900 p-4 rounded">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs italic mt-2">
                                Service suspension does not waive or eliminate outstanding payment obligations.
                            </p>
                        </section>

                        {/* Section 10: Customer Data */}
                        <section id="customer-data" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Database className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">10. Customer Data</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Users retain ownership of their business data and customer information. Kiaan Technology may process, store, secure, back up, and manage customer data solely for:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-zinc-300 text-sm">
                                {["Service Delivery", "Security Purposes", "Platform Maintenance", "Technical Support", "Platform Improvements", "Legal Compliance"].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 bg-zinc-950/40 border border-zinc-900/60 p-3 rounded">
                                        <div className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                                        <span className="text-zinc-300 text-xs font-bold uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg mt-4">
                                <p className="text-white text-sm font-bold uppercase tracking-wider mb-2">Backup Responsibility</p>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                    Customers are responsible for maintaining independent backups of critical business information. While Kiaan Technology maintains backup and recovery procedures, users should not rely solely on the platform as the exclusive repository of important business data.
                                </p>
                            </div>
                        </section>

                        {/* Section 11: Service Availability */}
                        <section id="service-availability" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Clock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">11. Service Availability</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                While Kiaan Technology strives to maintain high service availability, uninterrupted access cannot be guaranteed. Temporary interruptions may occur due to:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Scheduled server maintenance and database upgrades.</li>
                                <li>Infrastructure updates and cloud environment tuning.</li>
                                <li>Emergency security patches and vulnerability mitigations.</li>
                                <li>Third-party service outages or API blocks.</li>
                                <li>Internet connection disruptions or routing failures.</li>
                                <li>Force majeure events beyond our reasonable control.</li>
                            </ul>
                            <p className="text-zinc-500 text-xs leading-relaxed">
                                Kiaan Technology shall not be liable for temporary service interruptions that occur during reasonable maintenance or circumstances beyond its control.
                            </p>
                        </section>

                        {/* Section 12: Subscription Termination */}
                        <section id="subscription-termination" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Lock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">12. Subscription Termination</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology may terminate active subscriptions immediately where:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li>Platform Terms &amp; Conditions are violated.</li>
                                <li>Fraudulent, malicious, or abusive activities are detected.</li>
                                <li>Required payments remain unpaid after suspension notifications.</li>
                                <li>Continued service presents infrastructure or software security risks.</li>
                                <li>Continued service presents legal or regulatory risks to the Company.</li>
                            </ul>
                            <div className="bg-zinc-950 border border-zinc-900/80 p-5 rounded-lg">
                                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                                    Upon termination, access to subscription services, user accounts, stored data, and platform functionality may be restricted, suspended, or permanently removed in accordance with applicable retention policies and legal requirements.
                                </p>
                            </div>
                        </section>

                        {/* Section 13: Changes to Subscription Plans */}
                        <section id="plan-changes" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">13. Changes to Subscription Plans</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology reserves the right to make modifications to its pricing plans and structures. We may:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                {[
                                    "Modify subscription features and platform allocations",
                                    "Update general pricing rates and license fees",
                                    "Introduce new plans or tiered subscription structures",
                                    "Retire existing packages or legacy platforms",
                                    "Adjust service limitations and user caps"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 border-l-2 border-yellow-500/20 pl-4 py-1.5 bg-zinc-950/20">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs italic mt-2">
                                Reasonable notice regarding pricing adjustments or plan deprecations may be provided where appropriate.
                            </p>
                        </section>

                        {/* Section 14: Policy Updates */}
                        <section id="policy-updates" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <FileText className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">14. Policy Updates</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology reserves the right to modify this SaaS Subscription Policy at any time. Updated versions will be published on our website together with the revised effective date.
                            </p>
                            <p className="text-yellow-500 text-sm font-semibold tracking-wide bg-yellow-500/[0.02] border-l-2 border-yellow-500 pl-4 py-1.5">
                                Your continued use of subscribed services after such updates constitutes acceptance of the revised policy.
                            </p>
                        </section>

                        {/* Section 15: Contact Us */}
                        <section id="contact-us" className="scroll-mt-32">
                            <div className="bg-yellow-500 text-black p-8 md:p-12 rounded-lg relative overflow-hidden shadow-2xl shadow-yellow-500/5">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />

                                <h2 className="text-3xl font-display uppercase mb-2 leading-none font-black text-zinc-950">15. Contact Us</h2>
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
