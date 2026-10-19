"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, XCircle, ArrowRight, ChevronDown, Zap, Shield, Globe,
    Clock, DollarSign, Settings, Users, BarChart3, Lock, Rocket, Code2,
    AlertTriangle, Star, Target
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { JsonLd } from '@/components/seo/JsonLd';

/* ─── Data ──────────────────────────────────────────────────────────── */

const comparisonRows = [
    {
        feature: 'Initial Cost',
        icon: DollarSign,
        custom: { text: 'Higher upfront investment; ROI-driven long-term value', positive: true },
        offShelf: { text: 'Low upfront cost; recurring subscription fees accumulate', positive: false },
    },
    {
        feature: 'Time to Deploy',
        icon: Clock,
        custom: { text: '8–24 weeks depending on complexity and scope', positive: null },
        offShelf: { text: 'Fast deployment in days or weeks for standard use cases', positive: true },
    },
    {
        feature: 'Customization',
        icon: Settings,
        custom: { text: 'Fully tailored to your exact workflows, branding, and logic', positive: true },
        offShelf: { text: 'Limited to vendor-defined templates and configuration options', positive: false },
    },
    {
        feature: 'Scalability',
        icon: BarChart3,
        custom: { text: 'Scales precisely with your business growth and architecture', positive: true },
        offShelf: { text: 'Scaling often requires costly plan upgrades or vendor lock-in', positive: false },
    },
    {
        feature: 'Data Ownership',
        icon: Lock,
        custom: { text: '100% ownership — data stays on your servers or private cloud', positive: true },
        offShelf: { text: 'Data stored on vendor servers; subject to their privacy policy', positive: false },
    },
    {
        feature: 'Integration',
        icon: Code2,
        custom: { text: 'Deep native integrations with any third-party tool or API', positive: true },
        offShelf: { text: 'Limited to supported integrations; workarounds needed for custom APIs', positive: false },
    },
    {
        feature: 'Competitive Advantage',
        icon: Target,
        custom: { text: 'Unique features competitors cannot replicate with generic tools', positive: true },
        offShelf: { text: 'Same tools available to all competitors; no differentiator', positive: false },
    },
    {
        feature: 'Maintenance',
        icon: Shield,
        custom: { text: 'Dedicated support team; you control update schedules', positive: true },
        offShelf: { text: 'Vendor-controlled updates may break workflows unexpectedly', positive: false },
    },
    {
        feature: 'User Adoption',
        icon: Users,
        custom: { text: 'Designed around your team workflows; minimal training required', positive: true },
        offShelf: { text: 'Teams must adapt workflows to fit the software limitations', positive: false },
    },
    {
        feature: 'Long-Term Cost',
        icon: Globe,
        custom: { text: 'One-time investment with predictable hosting costs; no per-user fees', positive: true },
        offShelf: { text: 'Subscription fees grow with users; often 3–5x more expensive over 5 years', positive: false },
    },
];

const customPros = [
    'Exact-fit software built around your unique business processes',
    'Full data sovereignty — your data, your infrastructure',
    'No per-user licensing fees as team grows',
    'Competitive moat — features rivals cannot copy',
    'Seamless integration with any existing tools or APIs',
    'Custom security protocols and compliance controls',
    'Evolves with your business without vendor dependency',
];

const customCons = [
    'Higher initial development investment',
    'Longer build timeline (weeks to months)',
    'Requires clear requirements and project management',
    'Ongoing maintenance responsibility',
];

const offShelfPros = [
    'Fast deployment — go live within days',
    'Lower upfront cost with subscription model',
    'Established product with proven stability',
    'Regular updates pushed by vendor automatically',
];

const offShelfCons = [
    'Generic features; forced to adapt your workflow to the software',
    'Subscription costs escalate rapidly at scale (per-user pricing)',
    'Data security risks — stored on third-party vendor servers',
    'Limited customization — often requires expensive workaround development',
    'Vendor lock-in — migrating is complex and costly',
    'Same tool your competitors use — zero differentiation',
    'Feature bloat — paying for unused modules',
];

const faqs = [
    {
        q: 'When should I choose custom software development over off-the-shelf?',
        a: 'Custom software is the right choice when your business has unique workflows that generic tools cannot handle, when you need full data ownership, when you expect significant team growth (making per-user licensing costly), or when you need a proprietary competitive advantage that off-the-shelf SaaS cannot provide.'
    },
    {
        q: 'Is custom software development more expensive than off-the-shelf?',
        a: 'Custom software has a higher initial investment, but the total cost of ownership over 3–5 years is typically lower. Off-the-shelf SaaS subscriptions, per-user fees, add-on module costs, and integration workarounds accumulate significantly. For growing businesses, custom software almost always delivers better ROI.'
    },
    {
        q: 'How long does custom software development take compared to off-the-shelf?',
        a: 'Off-the-shelf solutions can be deployed in days. Custom software typically takes 8–24 weeks depending on scope and complexity. However, Kiaan Technology\'s agile delivery methodology ships working modules within 2–4 weeks, with continuous deployments throughout the project.'
    },
    {
        q: 'Which option is better for data security and compliance?',
        a: 'Custom software wins decisively on data security. Your data remains on your own servers or a private cloud you control. Off-the-shelf SaaS tools store your data on shared vendor infrastructure, which introduces risks around data breaches, vendor bankruptcy, and compliance with GDPR, HIPAA, or Indian data protection laws.'
    },
    {
        q: 'Can off-the-shelf software be customized?',
        a: 'Most off-the-shelf software offers limited configuration options, not true customization. Deep workflow changes require expensive custom development on top of the vendor platform, resulting in fragile integrations, vendor lock-in, and often paying for both the SaaS and the custom work simultaneously.'
    },
];

const scoreData = [
    { label: 'Customization Fit', custom: 100, offShelf: 30 },
    { label: 'Long-Term ROI', custom: 92, offShelf: 45 },
    { label: 'Data Security', custom: 98, offShelf: 60 },
    { label: 'Scalability', custom: 95, offShelf: 55 },
    { label: 'Competitive Edge', custom: 100, offShelf: 20 },
    { label: 'Speed to Deploy', custom: 50, offShelf: 95 },
];

/* ─── Sub-components ─────────────────────────────────────────────── */

const ScoreBar = ({ label, custom, offShelf }: { label: string; custom: number; offShelf: number }) => (
    <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <span>{label}</span>
            <span className="flex gap-4">
                <span className="text-yellow-500">{custom}%</span>
                <span className="text-zinc-600">{offShelf}%</span>
            </span>
        </div>
        <div className="relative h-2 bg-zinc-900 overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${custom}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                className="absolute top-0 left-0 h-full bg-yellow-500"
            />
        </div>
        <div className="relative h-1 bg-zinc-900 overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${offShelf}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                className="absolute top-0 left-0 h-full bg-zinc-700"
            />
        </div>
    </div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-zinc-900">
            <button
                className="w-full py-5 flex justify-between items-center text-left gap-4 group"
                onClick={() => setOpen(!open)}
            >
                <span className="text-sm font-bold text-white group-hover:text-yellow-500 transition-colors leading-snug">
                    {q}
                </span>
                <ChevronDown
                    size={16}
                    className={`text-zinc-500 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-yellow-500' : ''}`}
                />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-sm text-zinc-400 leading-relaxed">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

/* ─── Page ───────────────────────────────────────────────────────── */

export default function CustomVsOffShelfPage() {
    return (
        <div className="bg-black text-white min-h-screen selection:bg-yellow-500 selection:text-black pt-24">

            {/* JSON-LD FAQ Schema */}
            <JsonLd
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: faqs.map(f => ({
                        '@type': 'Question',
                        name: f.q,
                        acceptedAnswer: { '@type': 'Answer', text: f.a },
                    })),
                }}
            />

            {/* ── Hero ── */}
            <section className="container mx-auto px-6 mb-16">
                <Reveal>
                    <div className="inline-flex items-center gap-2 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-6">
                        <Target size={12} /> Comparison Guide
                    </div>
                    <h1 className="text-5xl md:text-7xl xl:text-8xl font-display uppercase tracking-tighter leading-none mb-6">
                        Custom Dev<br />
                        <span className="text-yellow-500">vs Off-the-Shelf</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl border-l-2 border-yellow-500 pl-5 leading-relaxed">
                        A complete data-driven analysis of <strong className="text-white">custom software development</strong> versus <strong className="text-white">off-the-shelf SaaS solutions</strong> — covering cost, scalability, security, and long-term ROI for Indian and global enterprises.
                    </p>
                </Reveal>

                {/* Quick verdict badges */}
                <Reveal delay={0.2}>
                    <div className="flex flex-wrap gap-3 mt-8">
                        {[
                            { label: 'Best for Unique Workflows', winner: 'Custom' },
                            { label: 'Best for Speed of Deployment', winner: 'Off-the-Shelf' },
                            { label: 'Best Long-Term ROI', winner: 'Custom' },
                            { label: 'Best Data Security', winner: 'Custom' },
                            { label: 'Best for Scaling Teams', winner: 'Custom' },
                        ].map(({ label, winner }) => (
                            <div key={label} className="flex items-center gap-2 px-3 py-1.5 border border-zinc-800 bg-zinc-950">
                                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{label}:</span>
                                <span className={`text-[10px] font-black uppercase tracking-widest ${winner === 'Custom' ? 'text-yellow-500' : 'text-zinc-400'}`}>
                                    {winner}
                                </span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* ── Score Bars ── */}
            <section className="container mx-auto px-6 mb-16">
                <Reveal>
                    <div className="glass-panel p-6 md:p-10">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight">
                                Performance <span className="text-yellow-500">Scorecard</span>
                            </h2>
                            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest">
                                <span className="flex items-center gap-2"><span className="w-3 h-2 bg-yellow-500 inline-block" /> Custom Dev</span>
                                <span className="flex items-center gap-2"><span className="w-3 h-1 bg-zinc-700 inline-block" /> Off-the-Shelf</span>
                            </div>
                        </div>
                        <div className="space-y-8">
                            {scoreData.map(s => (
                                <ScoreBar key={s.label} {...s} />
                            ))}
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ── Full Comparison Table ── */}
            <section className="container mx-auto px-6 mb-16">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tighter mb-8">
                        Feature-by-Feature <span className="text-yellow-500">Breakdown</span>
                    </h2>
                </Reveal>

                {/* Header */}
                <div className="grid grid-cols-3 gap-4 mb-2 px-4">
                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Feature</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-yellow-500 text-center">Custom Development</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">Off-the-Shelf</div>
                </div>

                <div className="space-y-2">
                    {comparisonRows.map((row, i) => (
                        <Reveal key={i} delay={i * 0.04}>
                            <div className="grid grid-cols-3 gap-4 p-4 border border-zinc-900 hover:border-zinc-800 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <row.icon size={14} className="text-zinc-600 group-hover:text-yellow-500 transition-colors flex-shrink-0" />
                                    <span className="text-xs font-black uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">{row.feature}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    {row.custom.positive === true ? (
                                        <CheckCircle2 size={14} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                                    ) : row.custom.positive === false ? (
                                        <AlertTriangle size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
                                    ) : (
                                        <Clock size={14} className="text-zinc-500 flex-shrink-0 mt-0.5" />
                                    )}
                                    <span className="text-xs text-zinc-300 leading-relaxed">{row.custom.text}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    {row.offShelf.positive === true ? (
                                        <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                    ) : (
                                        <XCircle size={14} className="text-zinc-600 flex-shrink-0 mt-0.5" />
                                    )}
                                    <span className="text-xs text-zinc-500 leading-relaxed">{row.offShelf.text}</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── Pros & Cons Cards ── */}
            <section className="container mx-auto px-6 mb-16">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tighter mb-8">
                        Pros & Cons <span className="text-yellow-500">At a Glance</span>
                    </h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Custom Dev */}
                    <Reveal>
                        <div className="border border-yellow-500/20 bg-zinc-950 p-6 md:p-8 h-full">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-900">
                                <div className="p-2 bg-yellow-500 text-black">
                                    <Code2 size={16} />
                                </div>
                                <h3 className="text-lg font-display uppercase tracking-tight text-white">Custom Software Development</h3>
                            </div>
                            <div className="mb-6">
                                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-3">Advantages</p>
                                <ul className="space-y-3">
                                    {customPros.map((p, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 leading-snug">
                                            <CheckCircle2 size={14} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-3">Considerations</p>
                                <ul className="space-y-3">
                                    {customCons.map((c, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-500 leading-snug">
                                            <AlertTriangle size={14} className="text-amber-700 flex-shrink-0 mt-0.5" />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>

                    {/* Off-the-Shelf */}
                    <Reveal delay={0.1}>
                        <div className="border border-zinc-800 bg-zinc-950 p-6 md:p-8 h-full">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-900">
                                <div className="p-2 bg-zinc-800 text-zinc-400">
                                    <Rocket size={16} />
                                </div>
                                <h3 className="text-lg font-display uppercase tracking-tight text-zinc-400">Off-the-Shelf SaaS</h3>
                            </div>
                            <div className="mb-6">
                                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-3">Advantages</p>
                                <ul className="space-y-3">
                                    {offShelfPros.map((p, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-snug">
                                            <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-3">Limitations</p>
                                <ul className="space-y-3">
                                    {offShelfCons.map((c, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 leading-snug">
                                            <XCircle size={14} className="text-zinc-700 flex-shrink-0 mt-0.5" />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Decision Guide ── */}
            <section className="container mx-auto px-6 mb-16">
                <Reveal>
                    <div className="glass-panel p-6 md:p-10">
                        <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tighter mb-8">
                            Which Should You <span className="text-yellow-500">Choose?</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Star size={14} className="text-yellow-500" />
                                    <p className="text-sm font-black uppercase tracking-widest text-yellow-500">Choose Custom Software When...</p>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        'Your workflows are unique and require tailored automation',
                                        'You process sensitive customer or financial data',
                                        'Your team size is growing — avoiding per-user SaaS fees',
                                        'You need integration with legacy systems or custom APIs',
                                        'You want a proprietary product as a competitive advantage',
                                        'You operate in a regulated industry (healthcare, fintech, legal)',
                                        'Long-term cost efficiency is a strategic priority',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 leading-snug">
                                            <ArrowRight size={12} className="text-yellow-500 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Zap size={14} className="text-zinc-500" />
                                    <p className="text-sm font-black uppercase tracking-widest text-zinc-500">Choose Off-the-Shelf When...</p>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        'You need a quick solution for standard business functions',
                                        'Budget is extremely limited and timeline is critical',
                                        'Your needs perfectly match an existing product\'s feature set',
                                        'You\'re validating a business model before investing in tech',
                                        'The software category is highly standardized (e.g., basic email)',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-500 leading-snug">
                                            <ArrowRight size={12} className="text-zinc-600 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ── FAQ ── */}
            <section className="container mx-auto px-6 mb-16">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tighter mb-8">
                        Frequently Asked <span className="text-yellow-500">Questions</span>
                    </h2>
                </Reveal>
                <div className="max-w-3xl">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} q={faq.q} a={faq.a} />
                    ))}
                </div>
            </section>

            {/* ── Internal Links ── */}
            <section className="container mx-auto px-6 mb-10">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4">Related Pages</p>
                <div className="flex flex-wrap gap-2">
                    {[
                        { label: 'Custom Software Development', href: '/services/custom-software-development' },
                        { label: 'SaaS Development Services', href: '/services/saas-development' },
                        { label: 'ERP Systems', href: '/erp' },
                        { label: 'CRM Software', href: '/crm' },
                        { label: 'HRM Software', href: '/hrm' },
                        { label: 'Case Studies', href: '/case-studies' },
                        { label: 'Methodology', href: '/methodology' },
                        { label: 'Pricing Plans', href: '/pricing' },
                        { label: 'Tech Glossary', href: '/glossary' },
                        { label: 'Blog & Insights', href: '/blog' },
                    ].map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            prefetch={false}
                            className="px-3 py-1.5 text-[10px] font-black uppercase tracking-widest border border-zinc-800 text-zinc-600 hover:border-yellow-500/40 hover:text-yellow-500 transition-all duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="container mx-auto px-6 pb-20">
                <Reveal>
                    <div className="border border-yellow-500/20 bg-zinc-950 p-8 md:p-14 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(234,179,8,0.04),transparent_60%)] pointer-events-none" />
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div>
                                <div className="inline-block bg-yellow-500 text-black text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-4">
                                    Free Consultation
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tighter leading-none text-white">
                                    Ready to Build<br />
                                    <span className="text-yellow-500">Custom Software?</span>
                                </h2>
                                <p className="text-zinc-400 text-sm mt-4 max-w-lg leading-relaxed">
                                    Talk to our engineers and get a free technical assessment — we'll map the exact custom solution your business needs with a clear cost and timeline estimate.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                                <Link href="/start-project">
                                    <Button className="bg-yellow-500 text-black rounded-none h-12 px-8 text-xs font-black uppercase tracking-widest hover:bg-white transition-all">
                                        Start Your Project <ArrowRight size={14} className="ml-2" />
                                    </Button>
                                </Link>
                                <Link href="/schedule">
                                    <Button variant="outline" className="border-zinc-700 text-white rounded-none h-12 px-8 text-xs font-black uppercase tracking-widest hover:border-yellow-500 transition-all">
                                        Schedule a Call
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

        </div>
    );
}
