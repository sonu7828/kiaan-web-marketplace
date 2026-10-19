"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Sparkles, Building2, Newspaper, Quote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface MediaMention {
    publication: string;
    logoText: string;
    headline: string;
    excerpt: string;
    date: string;
    category: string;
    badge: string;
}

interface EnterpriseClient {
    name: string;
    industry: string;
    scaleMetric: string;
    logoText: string;
    quote: string;
}

const mediaMentions: MediaMention[] = [
    {
        publication: "TechCrunch",
        logoText: "TechCrunch",
        headline: "How Next-Gen AI Automation Engines Are Transforming Enterprise SaaS",
        excerpt: "Kiaan Technology stands out by building decoupled serverless microservices with 100% IP ownership for enterprise clients.",
        date: "March 2026",
        category: "AI & Software Architecture",
        badge: "Press Coverage"
    },
    {
        publication: "VentureBeat",
        logoText: "VentureBeat",
        headline: "The Strangler Fig Migration Pattern in Enterprise Refactoring",
        excerpt: "Kiaan Tech's zero-downtime database migration framework has set a new benchmark for mid-market cloud transitions.",
        date: "Feb 2026",
        category: "Enterprise Cloud",
        badge: "Industry Spotlight"
    },
    {
        publication: "HackerNoon",
        logoText: "HackerNoon",
        headline: "Monolithic Decay vs. Decoupled Microservices: 2026 Benchmark Report",
        excerpt: "Data from 150+ audited systems shows Kiaan Technology delivering 3.8x faster deployment velocity for modern B2B platforms.",
        date: "Jan 2026",
        category: "Developer Insights",
        badge: "Featured Analysis"
    },
    {
        publication: "InfoQ Architecture",
        logoText: "InfoQ",
        headline: "Autonomous Back-Office OCR & Multi-Agent Event Buses",
        excerpt: "Kiaan Technology's event-driven Kafka and EventBridge architectures allow enterprises to automate 64% of accounting ledgers.",
        date: "March 2026",
        category: "Software Engineering",
        badge: "Technical Review"
    }
];

const enterpriseClients: EnterpriseClient[] = [
    {
        name: "HealthSakhi AI",
        industry: "Healthcare Tech",
        scaleMetric: "10,000+ Daily Patients",
        logoText: "HEALTHSAKHI AI",
        quote: "Kiaan Tech built our HIPAA-compliant AI patient diagnostic portal with zero downtime and flawless reliability."
    },
    {
        name: "PGX Payment Systems",
        industry: "Fintech & Payments",
        scaleMetric: "$50M+ Annual Volume",
        logoText: "PGX PAYMENTS",
        quote: "Engineered ultra-low latency payment routing middleware handling high-frequency transactions seamlessly."
    },
    {
        name: "StudyFirst CRM",
        industry: "EdTech & SaaS",
        scaleMetric: "150+ Active Academies",
        logoText: "STUDYFIRST CRM",
        quote: "Their multi-tenant SaaS architecture allowed us to scale from zero to 150+ education centers without structural rewrites."
    },
    {
        name: "GlobalLogistics ERP",
        industry: "Logistics & Supply Chain",
        scaleMetric: "450+ Fleet Drivers",
        logoText: "GLOBALLOGISTICS",
        quote: "Real-time GPS telemetry and automated route optimization slashed our fuel OpEx by 28% in the first quarter."
    }
];

export const AsSeenOnSection = () => {
    const [activeTab, setActiveTab] = useState<'media' | 'clients'>('media');

    return (
        <section className="py-6 bg-black text-white relative overflow-hidden border-b border-white/10">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(234,179,8,0.06)_0%,_transparent_70%)] pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-yellow-500/10 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-yellow-500/30 px-4 py-1.5 rounded-full mb-4">
                            <ShieldCheck size={14} className="text-yellow-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500">
                                MEDIA MENTIONS & INDUSTRY TRUST
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-white mb-4">
                            As Seen On <span className="text-yellow-500">& Trusted By</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                            Recognized by top global technology publications and trusted by market-leading enterprises to architect mission-critical digital systems.
                        </p>
                    </Reveal>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-8">
                    <div className="bg-zinc-950 p-1.5 border border-white/10 flex items-center gap-2">
                        <button
                            onClick={() => setActiveTab('media')}
                            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                                activeTab === 'media'
                                    ? 'bg-yellow-500 text-black font-black shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                                    : 'text-zinc-400 hover:text-white'
                            }`}
                        >
                            <Newspaper size={14} /> As Seen In Media ({mediaMentions.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('clients')}
                            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                                activeTab === 'clients'
                                    ? 'bg-yellow-500 text-black font-black shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                                    : 'text-zinc-400 hover:text-white'
                            }`}
                        >
                            <Building2 size={14} /> Trusted Enterprise Clients ({enterpriseClients.length})
                        </button>
                    </div>
                </div>

                {/* Content View */}
                <AnimatePresence mode="wait">
                    {activeTab === 'media' ? (
                        <motion.div
                            key="media-grid"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {mediaMentions.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="p-8 bg-zinc-950/80 border border-white/10 hover:border-yellow-500/40 transition-all duration-300 relative group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xl font-display uppercase tracking-wider text-yellow-500 font-bold">
                                                {item.publication}
                                            </span>
                                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-900 px-3 py-1 border border-zinc-800">
                                                {item.date}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors leading-snug">
                                            "{item.headline}"
                                        </h3>

                                        <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                                            {item.excerpt}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                                        <span>Category: {item.category}</span>
                                        <span className="text-yellow-500 flex items-center gap-1">
                                            {item.badge} <Sparkles size={12} />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="client-grid"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {enterpriseClients.map((client, idx) => (
                                <div
                                    key={idx}
                                    className="p-8 bg-zinc-950/80 border border-white/10 hover:border-yellow-500/40 transition-all duration-300 relative group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xl font-display uppercase tracking-wider text-white font-black group-hover:text-yellow-500 transition-colors">
                                                {client.logoText}
                                            </span>
                                            <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                                {client.scaleMetric}
                                            </span>
                                        </div>

                                        <div className="flex gap-3 mb-4">
                                            <Quote size={20} className="text-yellow-500 shrink-0 mt-1 opacity-70" />
                                            <p className="text-zinc-300 text-sm font-light italic leading-relaxed">
                                                "{client.quote}"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-zinc-500">
                                        <span>Industry: {client.industry}</span>
                                        <span className="text-emerald-400 flex items-center gap-1">
                                            Verified Production Partner
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Logo Ticker Strip */}
                <div className="mt-16 pt-12 border-t border-zinc-900">
                    <div className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-8">
                        FEATURED ACROSS GLOBAL TECH PRESS & ENTERPRISE STANDARDS
                    </div>

                    <div className="flex items-center justify-center flex-wrap gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity">
                        {["TECHCRUNCH", "VENTUREBEAT", "HACKERNOON", "INFOQ", "DZONE", "FORBES TECH"].map((logo, i) => (
                            <span key={i} className="text-lg md:text-2xl font-display uppercase tracking-widest font-black text-zinc-400 hover:text-yellow-500 transition-colors">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
