"use client";

import React, { useState } from 'react';
import {
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    Zap,
    ShieldCheck,
    Globe,
    Rocket,
    ChevronRight,
    Users,
    Briefcase,
    CreditCard,
    Clock,
    Target,
    Calendar,
    ClipboardCheck,
    BarChart3,
    ChevronDown
} from 'lucide-react';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ProductData } from '@/data/businessCompanyData';

const IconMap: Record<string, any> = {
    Users,
    Briefcase,
    CreditCard,
    Clock,
    Target,
    Calendar,
    ShieldCheck,
    ClipboardCheck,
    BarChart3,
    Zap,
    Rocket,
    Globe,
    TrendingUp
};

const SaaSProductTemplateInner = ({ data }: { data: ProductData }) => {
    const router = useRouter();
    const [showAllKeywords, setShowAllKeywords] = useState(false);

    return (
        <div className="bg-black min-h-screen text-white pt-8 pb-8 font-sans selection:bg-yellow-500 selection:text-black">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full animated-grid opacity-10" />
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-yellow-500 opacity-[0.03] blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-yellow-500 opacity-[0.03] blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-6 relative z-10">
                {/* Top Back Navigation */}
                <div className="mb-4">
                    <Link
                        href="/products"
                        prefetch={false}
                        className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-zinc-200 hover:text-white transition-all group"
                    >
                        <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                        BACK TO PRODUCTS
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-12 border-b border-white/5 pb-8">
                    <div className="flex-[1.2]">
                        <Reveal overflow="visible">
                            <div className="inline-flex items-center gap-3 bg-zinc-900 text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em] px-5 py-2 mb-5 rounded-full border border-white/5 cyber-glow-yellow">
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                                {data.mainKeyword}
                            </div>
                        </Reveal>
                        <Reveal delay={0.2} overflow="visible">
                            <h1 className="text-4xl md:text-5xl font-display leading-[0.9] tracking-tighter mb-5 text-white uppercase">
                                {data.name || data.title.split(' ')[0]} <br />
                                {data.title.replace(data.name || data.title.split(' ')[0], '').trim() && (
                                    <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                                        {data.title.replace(data.name || data.title.split(' ')[0], '').trim()}
                                    </span>
                                )}
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4} overflow="visible">
                            <h2 className="text-lg md:text-xl font-display text-yellow-500 mb-6 tracking-wide">
                                {data.tagline}
                            </h2>
                        </Reveal>
                        <Reveal delay={0.5} overflow="visible">
                            <p className="text-lg text-zinc-100 font-light leading-relaxed mb-8 italic border-l-2 border-yellow-500/50 pl-8">
                                {data.description}
                            </p>
                        </Reveal>
                        <Reveal delay={0.6} overflow="visible">
                            <Link href="/contact" prefetch={false}>
                                <Button className="bg-yellow-500 text-black border-none rounded-none text-xs font-black uppercase tracking-[0.3em] px-10 h-14 shadow-[8px_8px_0_white] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                    Request Enterprise Demo
                                </Button>
                            </Link>
                        </Reveal>
                    </div>
                    <div className="flex-1">
                        <Reveal delay={0.7} overflow="visible">
                            <div className="flex flex-wrap gap-2 mb-4 max-w-full">
                                {data.keywords.map((kw, i) => (
                                    <span
                                        key={i}
                                        className={`text-[9px] border border-white/5 bg-white/5 px-4 py-2 uppercase font-black text-zinc-300 tracking-widest cursor-default hover:text-white hover:border-yellow-500/30 transition-all whitespace-nowrap ${!showAllKeywords && i >= 6 ? 'hidden md:inline-flex' : 'inline-flex'}`}
                                    >
                                        {kw}
                                    </span>
                                ))}
                            </div>
                            {data.keywords.length > 6 && (
                                <button
                                    onClick={() => setShowAllKeywords(!showAllKeywords)}
                                    className="md:hidden text-[10px] font-black uppercase tracking-widest text-yellow-500 hover:text-white transition-colors flex items-center gap-1"
                                >
                                    {showAllKeywords ? (
                                        <>View Less <ChevronDown className="rotate-180" size={12} /></>
                                    ) : (
                                        <>View More ({data.keywords.length - 6}) <ChevronDown size={12} /></>
                                    )}
                                </button>
                            )}
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-6 mb-8 relative z-10">
                <Reveal overflow="visible">
                    <div className="mb-8">
                        <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-yellow-500 mb-2 block">Engineered for Performance</h3>
                        <h2 className="text-3xl md:text-4xl font-display tracking-tighter">Core Enterprise Features</h2>
                    </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.features.map((f, i) => {
                        const Icon = IconMap[f.iconName] || Rocket;
                        return (
                            <Reveal key={i} delay={i * 0.1} overflow="visible">
                                <div className="glass-panel p-6 md:p-8 h-full hover:border-yellow-500/50 transition-all duration-500 group">
                                    <div className="mb-6 inline-flex p-3 bg-zinc-900 border border-white/5 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500 rounded-none text-xl">
                                        <Icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-display mb-3 tracking-wider">{f.title}</h4>
                                    <p className="text-zinc-300 text-xs leading-relaxed mb-6 italic">"{f.desc}"</p>
                                    <ul className="space-y-3">
                                        {f.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-zinc-100 transition-colors">
                                                <div className="w-1.5 h-1.5 bg-yellow-500/30 group-hover:bg-yellow-500 transition-all" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto px-6 mb-10 relative z-10">
                <div className="bg-zinc-950 border border-white/5 p-8 md:p-14 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 opacity-[0.02] blur-[100px]" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Reveal overflow="visible">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-yellow-500 mb-4">Quantifiable Impact</h3>
                                <h2 className="text-3xl font-display tracking-tighter mb-8 leading-none">The Business <br /> Advantage</h2>
                            </Reveal>
                            <div className="space-y-6">
                                {data.benefits.map((b, i) => (
                                    <Reveal key={i} delay={i * 0.1} overflow="visible">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 bg-white/5 flex items-center justify-center text-yellow-500 font-display text-lg border border-white/5">
                                                0{i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-base font-display text-white mb-1">{b.title}</h4>
                                                <p className="text-zinc-200 text-[13px] font-light leading-relaxed">{b.impact}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <Reveal delay={0.3} overflow="visible">
                                <div className="bg-zinc-900 border border-white/5 p-8 flex flex-col justify-center relative group min-h-[300px]">
                                    <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-1000" />
                                    <TrendingUp size={50} className="text-yellow-500 mb-6 opacity-20 group-hover:opacity-100 transition-all duration-700" />
                                    <p className="text-2xl font-display uppercase tracking-tighter text-white mb-6">Optimized for Scaling <span className="text-yellow-500">Unrestricted</span> Business Flow.</p>
                                    <div className="h-1 w-16 bg-yellow-500" />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="container mx-auto px-6 mb-4 relative z-10">
                <Reveal overflow="visible">
                    <div className="text-center mb-6">
                        <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-yellow-500 mb-2 block">Proven Deployment</h3>
                        <h2 className="text-4xl md:text-5xl font-display tracking-tighter">Strategic Use Cases</h2>
                    </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.useCases.map((uc, i) => (
                        <div key={i} className="bg-zinc-900/50 border border-white/5 p-8 hover:bg-zinc-800 transition-all duration-300 group">
                            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-4 group-hover:text-yellow-500 transition-colors">Scenario 0{i + 1}</h4>
                            <h3 className="text-xl font-display mb-4 text-white min-h-[2.5rem]">{uc.scenario}</h3>
                            <div className="w-full h-px bg-white/5 mb-6" />
                            <p className="text-zinc-300 text-xs font-light leading-relaxed">
                                {uc.solution}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Integrations */}
            <section className="container mx-auto px-6 mb-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-y border-white/10 py-6">
                    <div className="max-w-sm">
                        <Reveal overflow="visible">
                            <h2 className="text-2xl md:text-3xl font-display tracking-tighter mb-2">Enterprise Ecosystem Integration</h2>
                            <p className="text-zinc-300 text-xs font-light">Seamlessly connect {data.title} with your existing tech stack through robust APIs.</p>
                        </Reveal>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 opacity-30">
                        {data.integrations.map((brand, i) => (
                            <span key={i} className="text-lg font-display tracking-[0.2em] text-white hover:text-yellow-500 hover:opacity-100 transition-all cursor-default">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            {data.faqs && data.faqs.length > 0 && (
                <section className="container mx-auto px-6 mb-4 relative z-10">
                    <div className="mb-6 text-center">
                        <Reveal overflow="visible">
                            <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-yellow-500 mb-2 block">Common Inquiries</h3>
                            <h2 className="text-3xl md:text-4xl font-display tracking-tighter">Frequently Asked Questions</h2>
                        </Reveal>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {data.faqs.map((faq, i) => (
                            <Reveal key={i} delay={i * 0.1} overflow="visible">
                                <div className="bg-zinc-900/50 border border-white/5 p-6 md:p-8 hover:border-yellow-500/30 transition-all duration-300">
                                    <h4 className="text-lg font-display text-white mb-3 flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-zinc-200 text-sm font-light leading-relaxed pl-4.5">
                                        {faq.a}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="container mx-auto px-6 relative z-10">
                <div className="glass-panel p-6 md:p-8 flex flex-col items-center text-center group overflow-hidden relative border-yellow-500/20">
                    <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000" />
                    <Reveal overflow="visible">
                        <h2 className="text-4xl md:text-6xl font-display mb-4 tracking-tighter leading-none">
                            Dominate Your <br />
                            <span className="text-yellow-500">Industry Sector</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2} overflow="visible">
                        <p className="text-base md:text-lg text-zinc-100 mb-4 max-w-2xl font-light">
                            Experience the future of {data.title} with Kiaan Enterprise. Zero compromise on security. Absolute dominance in performance.
                        </p>
                    </Reveal>
                    <Reveal delay={0.4} overflow="visible">
                        <div className="flex justify-center mt-4 px-6 sm:px-0">
                            <Link href="/contact" prefetch={false} className="group relative block w-full sm:w-auto transition-transform duration-300 ease-out hover:-translate-y-1 active:scale-[0.97]">
                                {/* Very slow shimmer border effect behind the button */}
                                <div className="absolute -inset-[2px] bg-gradient-to-r from-yellow-500/10 via-white/50 to-yellow-500/10 rounded-2xl opacity-60 group-hover:opacity-100 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-opacity duration-500 blur-sm pointer-events-none" />

                                <Button
                                    className="
                                        relative
                                        w-full sm:w-auto py-6 sm:py-8 px-12 sm:px-24 h-auto
                                        bg-gradient-to-b from-white to-zinc-100 
                                        text-black border border-white/60 rounded-xl
                                        transition-shadow duration-300 ease-out
                                        shadow-[0_0_35px_rgba(234,179,8,0.15)] 
                                        group-hover:shadow-[0_20px_45px_rgba(234,179,8,0.35)]
                                        overflow-hidden
                                    "
                                >
                                    {/* Subtle gradient shine overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="flex flex-col items-center justify-center gap-2 relative z-10">
                                        <div className="flex items-center gap-3 text-xl sm:text-2xl font-bold uppercase tracking-[0.3em]">
                                            LAUNCH YOUR SOFTWARE
                                            <Rocket size={26} className="text-zinc-800 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black transition-transform duration-300 ease-out" />
                                        </div>
                                        <div className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-zinc-500 opacity-80 group-hover:opacity-100 transition-opacity uppercase">
                                            Start Your Digital Transformation Today
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* Bottom Back Navigation */}
                <div className="mt-2 flex justify-center">
                    <Link href="/products" prefetch={false}>
                        <Button
                            variant="ghost"
                            className="bg-gradient-to-r from-zinc-900/80 to-zinc-900/40 hover:from-yellow-500/10 hover:to-zinc-900/40 border border-yellow-500/10 hover:border-yellow-500/40 text-zinc-300 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] h-12 px-10 rounded-none transition-all duration-300 group"
                        >
                            <span className="flex items-center gap-3">
                                <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform group-hover:text-yellow-500" />
                                BACK TO PRODUCTS
                            </span>
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export const SaaSProductTemplate = React.memo(SaaSProductTemplateInner);
export default SaaSProductTemplate;

