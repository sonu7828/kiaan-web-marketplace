"use client";

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, ArrowLeft, CheckCircle2, ChevronDown,
    Layout, Smartphone, Database, Brain, Palette, Globe, Code, Zap,
    ShieldCheck, BarChart3, Users, Rocket, Cpu, Activity, Lock, RefreshCw,
    Layers, Shield
} from 'lucide-react';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { SocialProofBar } from '@/components/SocialProofBar';
import Link from 'next/link';
import Script from 'next/script';
import caseStudiesData from '@/data/caseStudies.json';

const IconMap: Record<string, any> = {
    Layout, Smartphone, Database, Brain, Palette, Globe, Code, Zap,
    ShieldCheck, BarChart3, Users, Rocket, Cpu, Activity, Lock, RefreshCw,
    Layers, Shield
};

interface NicheServicePageProps {
    title: string;
    subTitle: string;
    mainKeyword: string;
    keywords: string[];
    desc: string;
    features: {
        title: string;
        desc: string;
        icon: string;
        items: string[];
    }[];
    stats: any[];
    colorClass?: string;
    bgClass?: string;
    slug?: string;
    faqs?: {
        question: string;
        answer: string;
    }[];
    longTailKeywords?: string[];
    locationKeywords?: string[];
    internalLinks?: {
        label: string;
        href: string;
    }[];
    painPoints?: {
        title: string;
        desc: string;
    }[];
    useCases?: {
        title: string;
        desc: string;
    }[];
}

const NicheServicePageInner = ({
    title,
    subTitle,
    mainKeyword,
    keywords,
    desc,
    features,
    stats,
    colorClass = "text-yellow-500",
    bgClass = "bg-yellow-500",
    slug,
    faqs,
    longTailKeywords,
    locationKeywords,
    internalLinks,
    painPoints,
    useCases
}: NicheServicePageProps) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [showAllKeywords, setShowAllKeywords] = useState(false);
    const [showAllLinks, setShowAllLinks] = useState(false);

    const relatedCaseStudies = slug ? (() => {
        const mapping: Record<string, string[]> = {
            'services/custom-software-development': ['study-first-info-crm', 'healthsakhi-ai', 'pgx-payment-gateway'],
            'services/saas-development': ['turf-booking-saas', 'study-first-info-crm', 'pgx-payment-gateway'],
            'services/erp-crm-solutions': ['study-first-info-crm', 'turf-booking-saas', 'pgx-payment-gateway'],
            'services/mobile-app-development': ['healthsakhi-ai', 'turf-booking-saas', 'study-first-info-crm'],
            'services/web-development': ['pgx-payment-gateway', 'playgroundx', 'turf-booking-saas'],
            'services/ai-automation': ['healthsakhi-ai', 'study-first-info-crm', 'pgx-payment-gateway'],
            'industries/fintech-software': ['pgx-payment-gateway', 'study-first-info-crm', 'turf-booking-saas'],
            'industries/healthcare-software': ['healthsakhi-ai', 'study-first-info-crm', 'turf-booking-saas'],
            'industries/retail-technology': ['turf-booking-saas', 'pgx-payment-gateway', 'study-first-info-crm'],
            'hrm': ['study-first-info-crm', 'turf-booking-saas', 'healthsakhi-ai']
        };
        const targetSlugs = mapping[slug] || [];
        return caseStudiesData.filter(cs => targetSlugs.includes(cs.slug));
    })() : [];

    return (
        <div className="bg-black min-h-screen text-white pt-5 lg:pt-7 pb-4 font-sans selection:bg-yellow-500 selection:text-black overflow-hidden uppercase">
            {/* Breadcrumb Schema */}
            {slug && (() => {
                let parentName = "Solutions";
                let parentUrl = "https://kiaantechnology.com/solutions";
                let schemaItemUrl = `https://kiaantechnology.com/solutions/${slug}`;
                if (slug.startsWith('services/')) {
                    parentName = "Services";
                    parentUrl = "https://kiaantechnology.com/services";
                    schemaItemUrl = `https://kiaantechnology.com/${slug}`;
                } else if (slug.startsWith('industries/')) {
                    parentName = "Industries";
                    parentUrl = "https://kiaantechnology.com";
                    schemaItemUrl = `https://kiaantechnology.com/${slug}`;
                }
                const schemaId = slug.replace(/\//g, '-');
                return (
                    <Script
                        id={`breadcrumb-schema-${schemaId}`}
                        type="application/ld+json"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://kiaantechnology.com"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": parentName,
                                        "item": parentUrl
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": title,
                                        "item": schemaItemUrl
                                    }
                                ]
                            })
                        }}
                    />
                );
            })()}



            {/* Structured Data: FAQPage Schema */}
            {faqs && faqs.length > 0 && (
                <Script
                    id={`faq-schema-${slug || 'page'}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map((faq) => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })
                    }}
                />
            )}

            {/* Professional Service Organization Schema */}
            {slug && (
                <Script
                    id={`professional-service-schema-${slug}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "parentOrganization": {
                                "@id": "https://kiaantechnology.com/#organization"
                            },
                            "name": "Kiaan Technology",
                            "image": "https://kiaantechnology.com/og-image.jpg",
                            "@id": `https://kiaantechnology.com/${slug}#service`,
                            "url": "https://kiaantechnology.com",
                            "priceRange": "$$",
                            "sameAs": [
                                "https://www.linkedin.com/company/kiaan-technology",
                                "https://twitter.com/kiaantech"
                            ]
                        })
                    }}
                />
            )}

            {/* WebPage Schema */}
            {slug && (
                <Script
                    id={`webpage-schema-${slug}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebPage",
                            "@id": `https://kiaantechnology.com/${slug}`,
                            "url": `https://kiaantechnology.com/${slug}`,
                            "name": title,
                            "description": desc,
                            "isPartOf": {
                                "@type": "WebSite",
                                "@id": "https://kiaantechnology.com/#website",
                                "url": "https://kiaantechnology.com",
                                "name": "Kiaan Technology"
                            },
                            "about": {
                                "@type": "Thing",
                                "name": mainKeyword
                            },
                            "publisher": {
                                "@id": "https://kiaantechnology.com/#organization"
                            }
                        })
                    }}
                />
            )}

            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full animated-grid opacity-10" />
                <div className={`absolute top-1/4 -right-20 w-96 h-96 ${bgClass} opacity-[0.03] blur-[120px] animate-pulse`} />
                <div className={`absolute bottom-1/4 -left-20 w-96 h-96 ${bgClass} opacity-[0.03] blur-[120px] animate-pulse`} style={{ animationDelay: '2s' }} />
            </div>

            {/* Top Navigation & Title Row */}
            <div className="container mx-auto px-6 mb-3 relative z-20 flex flex-col lg:flex-row lg:items-center justify-between border-b border-white/5 pb-2.5 gap-3">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                    <Link href="/solutions" prefetch={false} className="shrink-0">
                        <button className="flex items-center gap-2 text-white/70 hover:text-yellow-400 transition-all group px-3 py-1.5 border border-white/5 hover:border-yellow-500/50 hover:bg-white/5 rounded-none backdrop-blur-sm cursor-pointer">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[9px] font-black uppercase tracking-[0.25em]">Back to All Solutions</span>
                        </button>
                    </Link>
                    <div className="h-3 w-px bg-white/10 hidden md:block" />
                    <Reveal>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-display uppercase tracking-tight leading-none bg-gradient-to-r from-white via-yellow-400 to-yellow-500 bg-clip-text text-transparent font-black">
                            {title}
                        </h1>
                    </Reveal>
                </div>
                <div className="hidden lg:block shrink-0">
                    <Reveal>
                        <div className={`inline-flex items-center gap-2.5 bg-zinc-900/80 ${colorClass} text-[8.5px] font-black uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full border border-white/5 cyber-glow-yellow`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${bgClass} animate-pulse`} />
                            {mainKeyword}
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Hero Content Section */}
            <section className="container mx-auto px-6 mb-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 items-start border-b border-white/5 pb-4">
                    {/* Left Column (70%) - Main Info & CTA Buttons */}
                    <div className="space-y-3">
                        <div className="lg:hidden">
                            <Reveal>
                                <div className={`inline-flex items-center gap-2.5 bg-zinc-900/80 ${colorClass} text-[8.5px] font-black uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full border border-white/5 cyber-glow-yellow`}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${bgClass} animate-pulse`} />
                                    {mainKeyword}
                                </div>
                            </Reveal>
                        </div>
                        <Reveal delay={0.2}>
                            <div className="relative p-4 bg-zinc-950/40 border border-white/5 border-l-2 border-l-yellow-500/40 rounded-lg backdrop-blur-md">
                                <div className="absolute top-1 left-3 text-yellow-500/10 text-5xl font-serif select-none pointer-events-none">“</div>
                                <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed pl-4 normal-case">
                                    {desc}
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="flex flex-wrap gap-3 pl-0">
                                <Link href="/demo" prefetch={false}>
                                    <Button className={`${bgClass} text-black border-none rounded-none text-[11px] font-black uppercase tracking-[0.25em] px-6 h-10 shadow-[3px_3px_0_white] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer`}>
                                        Explore Demo
                                    </Button>
                                </Link>
                                <Link href="/schedule" prefetch={false}>
                                    <Button variant="outline" className="h-10 px-5 text-[9px] font-black uppercase tracking-[0.25em] rounded-none border-white/10 hover:bg-white hover:text-black transition-all cursor-pointer">
                                        Talk to Experts
                                    </Button>
                                </Link>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column (30%) - Keywords / Tags Card */}
                    <div className="w-full">
                        <Reveal delay={0.3}>
                            <div className="p-4 bg-zinc-950/40 border border-white/5 rounded-lg backdrop-blur-md space-y-2.5">
                                <p className="text-[11px] font-black uppercase tracking-[0.25em] text-yellow-500 border-b border-white/5 pb-1.5">
                                    Focus Areas
                                </p>
                                <div className="flex flex-wrap gap-1.5 max-w-full">
                                    {keywords.map((kw, i) => (
                                        <span
                                            key={i}
                                            className={`text-[8.5px] border border-white/10 bg-white/5 hover:bg-yellow-500/10 hover:border-yellow-500/50 hover:text-yellow-500 px-2.5 py-1 uppercase font-bold text-zinc-400 tracking-wider transition-all duration-300 rounded cursor-default whitespace-nowrap ${!showAllKeywords && i >= 8 ? 'hidden lg:inline-flex' : 'inline-flex'}`}
                                        >
                                            {kw}
                                        </span>
                                    ))}
                                </div>
                                {keywords.length > 8 && (
                                    <button
                                        onClick={() => setShowAllKeywords(!showAllKeywords)}
                                        className="lg:hidden text-[9px] font-black uppercase tracking-widest text-yellow-500 hover:text-white transition-colors pt-1 flex items-center gap-1 cursor-pointer"
                                    >
                                        {showAllKeywords ? (
                                            <>View Less <ChevronDown className="rotate-180" size={12} /></>
                                        ) : (
                                            <>View More ({keywords.length - 8}) <ChevronDown size={12} /></>
                                        )}
                                    </button>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-6 mb-4 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {features.map((f, i) => {
                        const Icon = IconMap[f.icon] || Code;
                        return (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
                                    }
                                }}
                                className="group glass-panel p-5 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] transition-all duration-500"
                            >
                                <div className={`mb-3 inline-flex p-2.5 bg-black border border-white/5 ${colorClass} group-hover:bg-white group-hover:text-black transition-all duration-500 animate-float`} style={{ animationDelay: `${i * 0.5}s` }}>
                                    <Icon size={20} />
                                </div>
                                <h3 className="text-xl font-display uppercase mb-1.5 tracking-wider">{f.title}</h3>
                                <p className="text-zinc-500 text-[11px] leading-relaxed mb-3 font-light italic normal-case">&quot;{f.desc}&quot;</p>
                                <ul className="space-y-1.5">
                                    {f.items.map((item: string, j: number) => (
                                        <li key={j} className="flex items-center gap-2.5 text-[8.5px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200 transition-colors">
                                            <div className={`w-1 h-1 rounded-full ${bgClass} opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            {/* Stats / Trust Counter */}
            <section className="bg-zinc-950/50 border-y border-white/5 py-4 mb-4 relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                    {stats.map((s, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="group">
                                <p className={`text-3xl md:text-4xl font-display uppercase mb-2 transition-all duration-500 group-hover:scale-110 ${colorClass}`}>{s.val}</p>
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-0.5 bg-white/10 mb-2 group-hover:w-16 group-hover:bg-yellow-500 transition-all" />
                                    <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-500 font-black">{s.label}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Industry Pain Points */}
            {painPoints && painPoints.length > 0 && (
                <section className="container mx-auto px-6 mb-4 relative z-10">
                    <Reveal>
                        <h2 className="text-2xl md:text-3xl font-display uppercase mb-4 tracking-tighter">
                            Industry <span className={colorClass}>Challenges</span>
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {painPoints.map((pp, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className="glass-panel p-4 border-l-2 border-l-yellow-500/50 hover:border-l-yellow-500 transition-colors">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-white mb-1.5">{pp.title}</h3>
                                    <p className="text-[11px] text-zinc-500 leading-relaxed normal-case">{pp.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
            )}

            {/* Industry Use Cases */}
            {useCases && useCases.length > 0 && (
                <section className="container mx-auto px-6 mb-4 relative z-10">
                    <Reveal>
                        <h2 className="text-2xl md:text-3xl font-display uppercase mb-4 tracking-tighter">
                            Real-World <span className={colorClass}>Use Cases</span>
                        </h2>
                    </Reveal>
                    <div className="space-y-3">
                        {useCases.map((uc, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className="glass-panel p-4 flex items-start gap-3 group hover:bg-white/[0.02] transition-colors">
                                    <div className={`w-7 h-7 flex-shrink-0 ${bgClass} flex items-center justify-center text-black text-[11px] font-black mt-0.5`}>
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-black uppercase tracking-widest text-white mb-1 group-hover:text-yellow-500 transition-colors">{uc.title}</h3>
                                        <p className="text-[11px] text-zinc-400 leading-relaxed normal-case">{uc.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
                <section className="container mx-auto px-6 mb-4 relative z-10">
                    <Reveal>
                        <h2 className="text-2xl md:text-3xl font-display uppercase mb-4 tracking-tighter">
                            Frequently Asked <span className={colorClass}>Questions</span>
                        </h2>
                    </Reveal>
                    <div className="space-y-2.5">
                        {faqs.map((faq, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className="glass-panel overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors"
                                    >
                                        <span className="text-xs md:text-sm font-bold uppercase tracking-wide pr-4 normal-case">{faq.question}</span>
                                        <ChevronDown
                                            size={16}
                                            className={`shrink-0 transition-transform duration-300 ${colorClass} ${openFaq === i ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                            >
                                                <div className="px-4 pb-4 border-t border-white/5">
                                                    <p className="text-xs text-zinc-400 leading-relaxed pt-3 normal-case">{faq.answer}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
            )}

            {/* EEAT Trust Block */}
            <section className="container mx-auto px-6 mb-4 relative z-10">
                <div className="glass-panel p-5 md:p-6">
                    <Reveal>
                        <h2 className="text-xl md:text-2xl font-display uppercase mb-4 tracking-tighter">
                            Why Trust <span className={colorClass}>Kiaan Technology</span>
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { val: '10+', label: 'Years of Experience', desc: 'Enterprise software development expertise across India' },
                            { val: '150+', label: 'Projects Delivered', desc: 'Custom solutions for startups to Fortune 500 companies' },
                            { val: '99.99%', label: 'Uptime Guarantee', desc: 'SOC 2 certified, cloud-native infrastructure' },
                            { val: '24/7', label: 'Dedicated Support', desc: 'India-based team with offices in Indore' }
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="text-center group">
                                    <div className={`text-2xl font-display ${colorClass} mb-1.5 group-hover:scale-110 transition-transform`}>{item.val}</div>
                                    <div className="text-[11px] font-black uppercase tracking-widest mb-1">{item.label}</div>
                                    <p className="text-[9.5px] text-zinc-500 normal-case">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Case Studies */}
            {relatedCaseStudies.length > 0 && (
                <section className="container mx-auto px-6 mb-4 relative z-10">
                    <Reveal>
                        <h2 className="text-2xl md:text-3xl font-display uppercase mb-4 tracking-tighter">
                            Featured <span className={colorClass}>Success Stories</span>
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {relatedCaseStudies.map((cs, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="group glass-panel overflow-hidden border border-white/5 bg-zinc-950/40 rounded-lg hover:border-yellow-500/30 transition-all duration-500 flex flex-col h-full">
                                    <div className="relative aspect-video w-full overflow-hidden">
                                        <img 
                                            src={cs.image} 
                                            alt={cs.title} 
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                                        />
                                        <div className="absolute top-3 left-3 bg-black/80 border border-white/10 px-2.5 py-0.5 text-[8.5px] font-black uppercase tracking-widest text-yellow-500">
                                            {cs.category}
                                        </div>
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow justify-between">
                                        <div>
                                            <h3 className="text-lg font-display uppercase text-white mb-1.5 group-hover:text-yellow-500 transition-colors">
                                                {cs.title}
                                            </h3>
                                            <p className="text-[11px] text-zinc-400 font-light leading-relaxed mb-4 normal-case line-clamp-3">
                                                {cs.desc}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
                                            <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
                                                {cs.result}
                                            </span>
                                            <Link href={`/case-studies/${cs.slug}`} className="flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-yellow-500 group-hover:text-white transition-colors">
                                                Read Blueprint <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
            )}

            {/* Internal Links Section */}
            {internalLinks && internalLinks.length > 0 && (
                <section className="container mx-auto px-6 mb-4 relative z-10">
                    <Reveal>
                        <div className="glass-panel p-4 md:p-5">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-3">Related Solutions</h3>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {internalLinks.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.href}
                                        prefetch={false}
                                        className={`${!showAllLinks && i >= 6 ? 'hidden md:inline-flex' : 'inline-flex'}`}
                                    >
                                        <span className={`inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer ${colorClass}`}>
                                            {link.label}
                                            <ArrowRight size={11} />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                            {internalLinks.length > 6 && (
                                <button
                                    onClick={() => setShowAllLinks(!showAllLinks)}
                                    className={`md:hidden text-[9px] font-black uppercase tracking-widest ${colorClass} hover:text-white transition-colors flex items-center gap-1`}
                                >
                                    {showAllLinks ? (
                                        <>View Less <ChevronDown className="rotate-180" size={12} /></>
                                    ) : (
                                        <>View More ({internalLinks.length - 6}) <ChevronDown size={12} /></>
                                    )}
                                </button>
                            )}
                        </div>
                    </Reveal>
                </section>
            )}

            {/* Interactive Demo Teaser */}
            <section className="container mx-auto px-6 mb-4 relative z-10">
                <div className="glass-panel p-5 md:p-7 flex flex-col items-center text-center group overflow-hidden relative">
                    <div className={`absolute inset-0 ${bgClass} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-1000`} />
                    <Reveal>
                        <h2 className="text-2xl md:text-4xl font-display uppercase mb-3 tracking-tighter leading-none">
                            Next-Gen <br />
                            <span className={colorClass}>{subTitle} Engineering</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-sm md:text-base text-zinc-400 mb-5 max-w-2xl font-light normal-case">
                            Experience the future of enterprise operations with our specialized {subTitle} architecture. Zero compromise on security. Absolute dominance in performance.
                        </p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/demo" prefetch={false}>
                                <Button className={`${bgClass} text-black border-none rounded-none text-[11px] font-black uppercase tracking-[0.25em] px-7 h-10 shadow-[3px_3px_0_white] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all`}>
                                    Launch Your {subTitle} Solution
                                </Button>
                            </Link>
                            <Link href="/schedule" prefetch={false}>
                                <Button variant="outline" className="h-10 px-6 text-[9px] font-black uppercase tracking-[0.25em] rounded-none border-white/10 hover:bg-white hover:text-black transition-all">
                                    Talk To Our Lead Architects
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <SocialProofBar variant="transparent" className="mt-3" />
                    </Reveal>
                </div>
            </section>

            {/* Bottom Navigation */}
            <section className="container mx-auto px-6 pb-6 relative z-10 flex justify-center">
                <Link href="/solutions" prefetch={false}>
                    <button className="flex items-center gap-3 text-white/70 hover:text-white transition-all group px-8 py-4 border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(255,214,10,0.1)]">
                        <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform text-yellow-500" />
                        <span className="text-xs font-black uppercase tracking-[0.4em]">Back to Solutions Arena</span>
                    </button>
                </Link>
            </section>
        </div>
    );
};

export const NicheServicePage = React.memo(NicheServicePageInner);
