"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShieldCheck,
    ExternalLink,
    CheckCircle2,
    Zap,
    Cpu,
    Cloud,
    CreditCard,
    Database,
    Lock,
    Sparkles,
    Send,
    ArrowRight,
    Search
} from 'lucide-react';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { partnerProgramData, IntegrationPartner } from '@/data/partnerProgramData';

export default function PartnersPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All Partners");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [applySuccess, setApplySuccess] = useState<boolean>(false);
    const [companyName, setCompanyName] = useState<string>("");
    const [contactEmail, setContactEmail] = useState<string>("");

    const filteredPartners = partnerProgramData.partners.filter((partner) => {
        const matchesCategory = selectedCategory === "All Partners" || partner.category === selectedCategory;
        const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              partner.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              partner.integrationCapabilities.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const handleApplySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setApplySuccess(true);
        setTimeout(() => setApplySuccess(false), 5000);
        setCompanyName("");
        setContactEmail("");
    };

    const getCategoryIcon = (cat: string) => {
        switch (cat) {
            case 'Cloud & Infrastructure': return <Cloud size={16} />;
            case 'AI & Data Engines': return <Cpu size={16} />;
            case 'Payments & Fintech': return <CreditCard size={16} />;
            case 'CRM & Enterprise SaaS': return <Database size={16} />;
            case 'Security & Compliance': return <Lock size={16} />;
            default: return <Sparkles size={16} />;
        }
    };

    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-500 selection:text-black min-h-screen pt-28 pb-20 px-6 relative overflow-hidden">
            {/* Ambient Background Visuals */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,_rgba(234,179,8,0.08)_0%,_transparent_65%)] pointer-events-none" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-500/5 blur-[160px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-yellow-500/30 px-5 py-2 rounded-full backdrop-blur-md mb-8">
                            <ShieldCheck className="text-yellow-500" size={16} />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-yellow-500">
                                ECOSYSTEM & INTEGRATION PARTNERS // VERIFIED BACKLINKS
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tighter leading-[1.08] text-white mb-6">
                            Enterprise <span className="text-yellow-500">Partner Ecosystem</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-zinc-300 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
                            We collaborate with global technology pioneers across cloud infrastructure, AI platforms, fintech gateways, and enterprise SaaS systems to deliver robust, high-performance digital architectures.
                        </p>
                    </Reveal>

                    {/* Search & Filter Hub */}
                    <Reveal delay={0.3} width="100%">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto mb-10">
                            <div className="relative w-full sm:w-80">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search partners or capabilities..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-zinc-950 border border-white/10 text-white text-xs focus:outline-none focus:border-yellow-500 transition-colors"
                                />
                            </div>
                            <div className="text-xs text-zinc-500 font-mono">
                                Showing <strong className="text-yellow-500">{filteredPartners.length}</strong> Verified Partner Integrations
                            </div>
                        </div>
                    </Reveal>

                    {/* Category Tabs */}
                    <Reveal delay={0.4} width="100%">
                        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-12">
                            {partnerProgramData.categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                                        selectedCategory === cat
                                            ? 'bg-yellow-500 text-black border-yellow-500 font-black shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                                            : 'bg-zinc-950 text-zinc-400 border-white/10 hover:border-yellow-500/50 hover:text-white'
                                    }`}
                                >
                                    {getCategoryIcon(cat)}
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </Reveal>
                </div>

                {/* Partners Grid */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredPartners.map((partner, idx) => (
                                <motion.div
                                    key={partner.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="bg-zinc-950 border border-white/10 hover:border-yellow-500/50 p-8 flex flex-col justify-between group transition-all duration-500 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-[50px] pointer-events-none group-hover:bg-yellow-500/10 transition-all" />

                                    <div>
                                        {/* Top Header: Partner Tier & Backlink Status */}
                                        <div className="flex items-center justify-between gap-2 mb-6">
                                            <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-zinc-900 border border-zinc-800 text-yellow-500">
                                                {partner.partnerTier}
                                            </span>
                                            {partner.verifiedBacklink && (
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1">
                                                    <CheckCircle2 size={12} /> Do-Follow Verified
                                                </span>
                                            )}
                                        </div>

                                        {/* Image & Title */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-14 h-14 bg-black border border-white/10 p-2 flex items-center justify-center shrink-0 group-hover:border-yellow-500/40 transition-colors">
                                                <img
                                                    src={partner.logoUrl}
                                                    alt={`${partner.name} partner logo`}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-display uppercase text-white group-hover:text-yellow-500 transition-colors">
                                                    {partner.name}
                                                </h3>
                                                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                                                    {partner.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                                            {partner.description}
                                        </p>

                                        {/* Integration Capabilities */}
                                        <div className="mb-6 pt-4 border-t border-zinc-900">
                                            <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">
                                                Key Integration Capabilities
                                            </div>
                                            <ul className="space-y-2">
                                                {partner.integrationCapabilities.map((cap, i) => (
                                                    <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
                                                        <span>{cap}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Direct Partner Directory Backlink Link */}
                                    <div className="pt-4 border-t border-zinc-900">
                                        <a
                                            href={partner.partnerDirectoryUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between w-full p-3 bg-zinc-900 hover:bg-yellow-500 hover:text-black text-zinc-300 text-xs font-bold uppercase tracking-wider transition-all duration-300 border border-zinc-800 hover:border-yellow-500"
                                        >
                                            <span className="truncate pr-2">{partner.backlinkAnchorText}</span>
                                            <ExternalLink size={14} className="shrink-0" />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredPartners.length === 0 && (
                        <div className="text-center py-16 bg-zinc-950 border border-white/10">
                            <p className="text-zinc-400 text-sm">No integration partners match your selected criteria.</p>
                            <button onClick={() => { setSelectedCategory("All Partners"); setSearchQuery(""); }} className="mt-4 text-xs font-black uppercase text-yellow-500 hover:underline">
                                Reset Filters
                            </button>
                        </div>
                    )}
                </section>

                {/* Become a Partner Application Hub */}
                <section className="max-w-4xl mx-auto">
                    <Reveal width="100%">
                        <div className="p-8 md:p-12 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-yellow-500/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/5 blur-[120px] pointer-events-none" />

                            <div className="text-center max-w-2xl mx-auto mb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 block mb-2">
                                    Join Our Global Network
                                </span>
                                <h2 className="text-2xl md:text-4xl font-display uppercase tracking-tight">
                                    Become An Official <span className="text-yellow-500">Integration Partner</span>
                                </h2>
                                <p className="text-zinc-400 text-xs md:text-sm font-light mt-3">
                                    We actively collaborate with cloud platforms, SaaS ISVs, and security vendors for joint technical integrations, reciprocal directory listings, and referral co-marketing.
                                </p>
                            </div>

                            <form onSubmit={handleApplySubmit} className="max-w-xl mx-auto space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Company / Platform Name</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Acme Cloud Corp"
                                            value={companyName}
                                            onChange={(e) => setCompanyName(e.target.value)}
                                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-yellow-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Partner Work Email</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="e.g. partner@acme.com"
                                            value={contactEmail}
                                            onChange={(e) => setContactEmail(e.target.value)}
                                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-yellow-500 transition-colors"
                                        />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full h-12 bg-yellow-500 text-black hover:bg-white text-xs font-black uppercase tracking-widest rounded-none transition-all gap-2">
                                    <Send size={14} /> Submit Partner Application
                                </Button>

                                {applySuccess && (
                                    <div className="mt-4 p-4 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2">
                                        <CheckCircle2 size={16} /> Partner application received! Our Alliances team will reach out within 24 hours.
                                    </div>
                                )}
                            </form>
                        </div>
                    </Reveal>
                </section>

            </div>
        </div>
    );
}
