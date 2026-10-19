"use client";

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Clock, Calendar, BookOpen, Zap, Globe, Shield } from 'lucide-react';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { Resource, getResourceCTA } from '@/data/resourcesData';
import { ResourceCardMemo } from '@/components/ResourceCard';
import Script from 'next/script';
import { LeadCaptureForm } from '@/components/LeadCaptureForm';

interface ResourceDetailClientProps {
    resource: Resource;
    relatedResources: Resource[];
}

export default function ResourceDetailClient({ resource, relatedResources }: ResourceDetailClientProps) {
    const [isUnlocked, setIsUnlocked] = useState(!resource.isGated);

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-16 selection:bg-yellow-500 selection:text-black overflow-x-hidden">
            {/* Article Schema */}
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": resource.title,
                        "description": resource.metaDescription,
                        "image": resource.image,
                        "datePublished": resource.date,
                        "dateModified": resource.date,
                        "author": {
                            "@type": "Organization",
                            "name": "Kiaan Technology",
                            "url": "https://kiaantechnology.com"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Kiaan Technology",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://kiaantechnology.com/ChatGPT_Image_Feb_20__2026__05_48_11_PM-removebg-preview.webp"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://kiaantechnology.com/resources/${resource.slug}`
                        },
                        "keywords": resource.keywords.join(", "),
                        "articleSection": resource.category,
                        "wordCount": resource.sections.reduce((acc, s) => acc + s.content.split(' ').length, 0)
                    })
                }}
            />

            {/* Background */}
            <div className="fixed inset-0 pointer-events-none opacity-15">
                <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] bg-yellow-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] bg-red-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Back Link */}
                    <Reveal>
                        <Link
                            href="/resources"
                            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-yellow-500 transition-colors mb-8 group"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Resources
                        </Link>
                    </Reveal>

                    {/* Hero Header */}
                    <header className="mb-12">
                        <Reveal>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-yellow-500 text-black text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5">
                                    {resource.type}
                                </span>
                                <span className="bg-zinc-900 border border-zinc-800 text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5">
                                    {resource.category}
                                </span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h1 className="text-3xl md:text-5xl font-display uppercase leading-[0.95] text-white tracking-tighter mb-6">
                                {resource.title}
                            </h1>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-8">
                                <span className="flex items-center gap-2">
                                    <Calendar size={14} className="text-yellow-500" />
                                    {resource.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={14} className="text-yellow-500" />
                                    {resource.readTime}
                                </span>
                                <span className="flex items-center gap-2">
                                    <BookOpen size={14} className="text-yellow-500" />
                                    Kiaan Technology
                                </span>
                            </div>
                        </Reveal>

                        {/* Hero Image */}
                        <Reveal delay={0.2}>
                            <div className="aspect-video overflow-hidden border border-zinc-800 mb-8">
                                <img
                                    src={resource.image}
                                    alt={`${resource.title} - Technology Resource`}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </Reveal>

                        <Reveal delay={0.25}>
                            <p className="text-zinc-400 text-base md:text-lg leading-relaxed border-l-2 border-yellow-500 pl-6">
                                {resource.description}
                            </p>
                        </Reveal>
                    </header>

                    {/* Keyword Tags */}
                    <Reveal>
                        <div className="flex flex-wrap gap-2 mb-12">
                            {resource.keywords.map((kw, i) => (
                                <span key={i} className="text-[8px] font-black uppercase tracking-widest text-zinc-500 border border-zinc-800 px-3 py-1.5 bg-zinc-900/50">
                                    {kw}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    {isUnlocked ? (
                        <>
                            {/* Article Sections */}
                            <article className="space-y-10 mb-16">
                                {resource.sections.map((section, idx) => (
                                    <Reveal key={idx} delay={0.05}>
                                        <section>
                                            <h2 className="text-xl md:text-2xl font-display uppercase text-white mb-4 tracking-tight">
                                                {section.heading}
                                            </h2>
                                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                                                {section.content}
                                            </p>
                                        </section>
                                    </Reveal>
                                ))}
                            </article>

                            {/* Use Cases */}
                            <Reveal>
                                <div className="border border-zinc-800 bg-zinc-950 p-6 md:p-8 mb-10">
                                    <h2 className="text-lg md:text-xl font-display uppercase text-yellow-500 mb-6 tracking-tight">
                                        Practical Use Cases
                                    </h2>
                                    <ul className="space-y-3">
                                        {resource.useCases.map((uc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                                                <CheckCircle2 size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                                                {uc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>

                            {/* Benefits */}
                            <Reveal>
                                <div className="border border-zinc-800 bg-zinc-950 p-6 md:p-8 mb-12">
                                    <h2 className="text-lg md:text-xl font-display uppercase text-yellow-500 mb-6 tracking-tight">
                                        Key Benefits
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {resource.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-3 text-zinc-400 text-sm bg-zinc-900/30 border border-zinc-800/50 p-3">
                                                <Zap size={14} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </>
                    ) : (
                        <Reveal>
                            <LeadCaptureForm
                                resourceName={resource.title}
                                onSuccess={() => setIsUnlocked(true)}
                            />
                        </Reveal>
                    )}

                    {/* CTA Section — Explore Our Solutions */}
                    <Reveal>
                        <div className="border border-yellow-500/20 bg-zinc-950 p-8 md:p-10 text-center mb-16">
                            <h2 className="text-2xl md:text-3xl font-display uppercase text-white mb-3 tracking-tight">
                                Explore Our Solutions
                            </h2>
                            <p className="text-zinc-500 text-sm mb-8 max-w-lg mx-auto">
                                Ready to implement these insights? Our team builds enterprise-grade software solutions for businesses across India.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/demo"
                                    className="bg-yellow-500 text-black px-8 py-3.5 text-xs font-black uppercase tracking-[0.2em] hover:bg-yellow-400 transition-colors flex items-center gap-2"
                                >
                                    View Demo Arena
                                    <ArrowRight size={14} />
                                </Link>
                                <Link
                                    href="/products"
                                    className="bg-zinc-900 text-white px-8 py-3.5 text-xs font-black uppercase tracking-[0.2em] border border-zinc-800 hover:border-yellow-500/50 transition-colors flex items-center gap-2"
                                >
                                    <Globe size={14} />
                                    Explore CRM Solutions
                                </Link>
                                <Link
                                    href="/contact"
                                    className="bg-zinc-900 text-white px-8 py-3.5 text-xs font-black uppercase tracking-[0.2em] border border-zinc-800 hover:border-yellow-500/50 transition-colors flex items-center gap-2"
                                >
                                    <Shield size={14} />
                                    Contact Our Experts
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    {/* Related Resources */}
                    {relatedResources.length > 0 && (
                        <div className="mb-8">
                            <Reveal>
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-xl md:text-2xl font-display uppercase text-white tracking-tight">
                                        Related <span className="text-yellow-500">Resources</span>
                                    </h2>
                                    <Link
                                        href="/resources"
                                        className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-yellow-500 transition-colors flex items-center gap-2"
                                    >
                                        View All
                                        <ArrowRight size={12} />
                                    </Link>
                                </div>
                            </Reveal>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {relatedResources.map((res, idx) => (
                                    <ResourceCardMemo key={res.id} res={res} idx={idx} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
