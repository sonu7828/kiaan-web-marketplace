import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    Sparkles,
    ArrowRight,
    ArrowUpRight,
    Clock,
    Calendar,
    Bookmark,
    CheckCircle2,
    Layers,
    Bot,
    Workflow,
    Compass,
    FileText,
    ShieldCheck,
    Users,
    Code2,
    Database,
    Zap
} from 'lucide-react';
import {
    blogData,
    getAllArticlesSorted,
    getFeaturedArticle,
    calculateReadingTime
} from '@/data/blogData';
import { BlogExplorerClient } from '@/components/blog/BlogExplorerClient';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Software, AI & Business Technology Insights | Kiaan Technology',
    description: 'Explore Kiaan Technology insights on custom software development, SaaS, AI automation, CRM, ERP, business systems and modern software engineering.',
    alternates: {
        canonical: 'https://kiaantechnology.com/blog/',
    },
    openGraph: {
        title: 'Software, AI & Business Technology Insights | Kiaan Technology',
        description: 'Practical guides, software engineering insights, AI automation strategies and business technology resources from Kiaan Technology.',
        url: 'https://kiaantechnology.com/blog/',
        siteName: 'Kiaan Technology',
        images: [
            {
                url: 'https://kiaantechnology.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Kiaan Technology Insights Hub',
            },
        ],
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Software, AI & Business Technology Insights | Kiaan Technology',
        description: 'Explore practical guides, software engineering insights, and business technology strategies from Kiaan Technology.',
        images: ['https://kiaantechnology.com/og-image.jpg'],
    },
};

export default function BlogPage() {
    const sortedArticles = getAllArticlesSorted();
    const featuredArticle = getFeaturedArticle(sortedArticles);

    // Extract unique categories
    const categories = Array.from(new Set(sortedArticles.map((a) => a.category)));

    // Dynamic JSON-LD Structured Data
    const collectionPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': 'https://kiaantechnology.com/blog/#collection',
        name: 'Kiaan Insights — Software, AI & Business Technology',
        description: 'Explore practical guides, software engineering insights, AI automation strategies and business technology resources from Kiaan Technology.',
        url: 'https://kiaantechnology.com/blog/',
        publisher: {
            '@type': 'Organization',
            name: 'Kiaan Technology',
            url: 'https://kiaantechnology.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://kiaantechnology.com/logo.webp',
            },
        },
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: sortedArticles.map((article, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: `https://kiaantechnology.com/blog/${article.slug}/`,
                name: article.title,
            })),
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://kiaantechnology.com/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Insights',
                item: 'https://kiaantechnology.com/blog/',
            },
        ],
    };

    const featuredReadingTime = calculateReadingTime(
        featuredArticle.content,
        featuredArticle.excerpt
    );

    return (
        <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
            {/* Structured Data */}
            <JsonLd data={collectionPageSchema} />
            <JsonLd data={breadcrumbSchema} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-20 sm:pt-24 md:pt-28 pb-20 space-y-12 md:space-y-16">
                {/* ========================================================================= */}
                {/* 01. BLOG HERO SECTION */}
                {/* ========================================================================= */}
                <section className="relative pt-1 pb-6 md:pb-8 border-b border-zinc-900">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
                        {/* Left Column: Eyebrow + Compact H1 + Topic Shortcuts */}
                        <div className="lg:col-span-7 space-y-4">
                            {/* Editorial Eyebrow */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-[#FFE81B] text-[10px] font-mono font-black uppercase tracking-[0.25em]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE81B] animate-pulse" />
                                KIAAN INSIGHTS
                            </div>

                            {/* Compact H1 Heading */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-[1.1]">
                                SOFTWARE, <span className="text-[#FFE81B]">AI</span> & <br />
                                BUSINESS TECHNOLOGY <span className="text-zinc-500">INSIGHTS.</span>
                            </h1>

                            {/* Topic Shortcuts */}
                            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono">
                                <span className="text-zinc-400 uppercase font-bold tracking-wider mr-1 text-[11px]">
                                    Topics:
                                </span>
                                {[
                                    { name: 'AI & Automation', href: '#explore-insights' },
                                    { name: 'Software Engineering', href: '#explore-insights' },
                                    { name: 'SaaS', href: '#explore-insights' },
                                    { name: 'Enterprise Solutions', href: '#explore-insights' },
                                    { name: 'Guides', href: '#explore-insights' }
                                ].map((topic) => (
                                    <a
                                        key={topic.name}
                                        href={topic.href}
                                        className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-[#FFE81B] hover:border-yellow-500/40 transition-colors text-[11px]"
                                    >
                                        {topic.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Supporting Description */}
                        <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 space-y-3 relative shadow-lg">
                            <p className="text-zinc-200 text-sm sm:text-base font-normal leading-relaxed">
                                Practical insights from Kiaan Technology on software development, SaaS, AI automation, business systems and the technologies shaping modern companies.
                            </p>
                            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed pt-2.5 border-t border-zinc-900">
                                Explore guides, engineering perspectives and business technology strategies created for founders, companies and technology teams.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 02. FEATURED ARTICLE */}
                {/* ========================================================================= */}
                <section aria-labelledby="featured-guide-heading">
                    <div className="flex items-center justify-between gap-4 mb-4">
                        <span id="featured-guide-heading" className="text-[11px] font-mono font-black uppercase tracking-[0.25em] text-[#FFE81B] flex items-center gap-2">
                            <Sparkles size={13} className="text-[#FFE81B]" />
                            FEATURED GUIDE
                        </span>
                        <span className="text-xs font-mono text-zinc-500 uppercase">
                            Vendor Evaluation & Due Diligence
                        </span>
                    </div>

                    <article className="group relative rounded-2xl bg-gradient-to-br from-zinc-950 via-zinc-900/70 to-zinc-950 border border-zinc-800 hover:border-yellow-500/40 transition-all duration-300 overflow-hidden shadow-xl">
                        <div className="p-8 sm:p-10 lg:p-12 space-y-6">
                            {/* Meta Tag & Date */}
                            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/25 text-[#FFE81B] text-[10px] font-mono font-black uppercase tracking-wider">
                                        <Bookmark size={11} className="text-[#FFE81B]" />
                                        {featuredArticle.category}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                                    <span className="text-zinc-500">{featuredArticle.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                                    <span className="text-zinc-400 flex items-center gap-1">
                                        <Clock size={12} className="text-yellow-500" />
                                        {featuredReadingTime}
                                    </span>
                                </div>

                                <span className="text-[11px] text-zinc-500">
                                    By <strong className="text-zinc-300 font-medium">Kiaan Technology</strong>
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight max-w-4xl">
                                <Link href={`/blog/${featuredArticle.slug}`}>
                                    {featuredArticle.title}
                                </Link>
                            </h2>

                            {/* Excerpt */}
                            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
                                {featuredArticle.excerpt}
                            </p>

                            {/* Action CTA */}
                            <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                                <Link
                                    href={`/blog/${featuredArticle.slug}`}
                                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-yellow-500 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,232,27,0.15)]"
                                >
                                    READ ARTICLE
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <span className="text-[11px] font-mono text-zinc-500 uppercase hidden sm:inline-block">
                                    Software Buyer & Engineering Due Diligence
                                </span>
                            </div>
                        </div>
                    </article>
                </section>

                {/* ========================================================================= */}
                {/* 03 & 04. EXPLORE BY TOPIC & LATEST ARTICLES */}
                {/* ========================================================================= */}
                <section aria-labelledby="all-insights-heading" className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-900 pb-4">
                        <div>
                            <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#FFE81B] block mb-1">
                                ARTICLES & GUIDES
                            </span>
                            <h2 id="all-insights-heading" className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white">
                                LATEST INSIGHTS
                            </h2>
                        </div>
                        <p className="text-xs font-mono text-zinc-500">
                            Explore practical engineering, SaaS, and business technology articles
                        </p>
                    </div>

                    {/* Dedicated Client Explorer */}
                    <BlogExplorerClient
                        initialArticles={sortedArticles}
                        categories={categories}
                    />
                </section>

                {/* ========================================================================= */}
                {/* 05. TOPIC COLLECTIONS */}
                {/* ========================================================================= */}
                <section aria-labelledby="topic-collections-heading" className="space-y-8 pt-4">
                    <div className="text-center max-w-2xl mx-auto space-y-2">
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#FFE81B]">
                            TOPICS & DISCIPLINES
                        </span>
                        <h2 id="topic-collections-heading" className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white">
                            EXPLORE WHAT MATTERS TO YOUR BUSINESS
                        </h2>
                        <p className="text-zinc-400 text-xs sm:text-sm font-light">
                            Navigate practical guides across software planning, AI automation, product architecture, and enterprise workflows.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                title: 'AI & AUTOMATION',
                                icon: Bot,
                                desc: 'Explore practical ways companies integrate AI automation, intelligent workflows, and smart software into daily operations.',
                                badge: 'Intelligent Workflows'
                            },
                            {
                                title: 'SOFTWARE DEVELOPMENT',
                                icon: Code2,
                                desc: 'Guides covering software planning, system architecture, development best practices, and vendor selection.',
                                badge: 'Architecture & Delivery'
                            },
                            {
                                title: 'SAAS & PRODUCT ENGINEERING',
                                icon: Layers,
                                desc: 'Insights for founders and businesses building scalable, modern SaaS products and digital platforms.',
                                badge: 'Product Scaling'
                            },
                            {
                                title: 'CRM & ERP SYSTEMS',
                                icon: Database,
                                desc: 'Connect customer data, business operations, sales teams and workflows into unified, accessible systems.',
                                badge: 'Enterprise Operations'
                            },
                            {
                                title: 'BUSINESS AUTOMATION',
                                icon: Workflow,
                                desc: 'Practical strategies for reducing repetitive manual processes and connecting business workflows.',
                                badge: 'Process Efficiency'
                            },
                            {
                                title: 'SOFTWARE BUYING GUIDES',
                                icon: Compass,
                                desc: 'Resources to help organizations evaluate technical requirements, estimate costs, and choose the right software partner.',
                                badge: 'Vendor Due Diligence'
                            }
                        ].map((col) => (
                            <div
                                key={col.title}
                                className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-yellow-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                            >
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-yellow-500/40 flex items-center justify-center text-[#FFE81B] mb-4 transition-colors">
                                        <col.icon size={20} />
                                    </div>
                                    <span className="text-[9px] font-mono font-black text-yellow-400/80 uppercase tracking-widest block mb-1">
                                        {col.badge}
                                    </span>
                                    <h3 className="text-base sm:text-lg font-display uppercase tracking-tight text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                        {col.title}
                                    </h3>
                                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                                        {col.desc}
                                    </p>
                                </div>

                                <div className="mt-5 pt-3 border-t border-zinc-900">
                                    <a
                                        href="#explore-insights"
                                        className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase tracking-wider text-zinc-400 group-hover:text-yellow-400 transition-colors"
                                    >
                                        EXPLORE TOPIC <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 06. SOFTWARE BUYER RESOURCES */}
                {/* ========================================================================= */}
                <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900/60 to-zinc-950 border border-zinc-800 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[10px] font-mono font-black uppercase tracking-wider">
                                <FileText size={12} />
                                SOFTWARE BUYER RESOURCES
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                PLANNING A SOFTWARE PROJECT? <br />
                                <span className="text-yellow-400">START WITH THE RIGHT QUESTIONS.</span>
                            </h2>

                            <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                                Planning a software project? Explore practical resources for evaluating requirements, development partners, architecture, delivery, security and long-term ownership.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                {[
                                    'Technical Due Diligence & Architecture Planning',
                                    'Automated Testing & Code Quality Benchmarks',
                                    'Deployment Reliability & Release Strategies',
                                    'Source Code Delivery & IP Terms Where Included'
                                ].map((point) => (
                                    <div key={point} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                                        <CheckCircle2 size={14} className="text-yellow-400 flex-shrink-0" />
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col justify-center space-y-3">
                            <Link
                                href="/blog/questions-to-ask-before-hiring-a-software-company"
                                className="w-full py-3.5 px-6 rounded-xl bg-yellow-500 text-black font-mono font-black uppercase text-xs tracking-wider text-center hover:bg-white transition-all shadow-[0_0_20px_rgba(255,232,27,0.15)] flex items-center justify-center gap-2"
                            >
                                EXPLORE SOFTWARE GUIDES <ArrowRight size={14} />
                            </Link>

                            <Link
                                href="/compare/custom-vs-off-the-shelf"
                                className="w-full py-3 px-6 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono font-bold uppercase text-xs tracking-wider text-center hover:border-yellow-500/40 hover:text-white transition-all"
                            >
                                CUSTOM VS OFF-THE-SHELF GUIDE
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 07. AI AUTOMATION & DEVELOPMENT PARTNERSHIPS */}
                {/* ========================================================================= */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* AI & Automation */}
                    <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-[#FFE81B]">
                                <Bot size={20} />
                            </div>
                            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#FFE81B] block">
                                AI STRATEGY
                            </span>
                            <h3 className="text-2xl font-display uppercase tracking-tight text-white">
                                AI & AUTOMATION INSIGHTS
                            </h3>
                            <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                Understand how AI agents, automation and intelligent software can be applied to practical business workflows.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                            <Link
                                href="/services/ai-automation"
                                className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-[#FFE81B] hover:text-white transition-colors"
                            >
                                EXPLORE AI CAPABILITIES <ArrowRight size={13} />
                            </Link>
                        </div>
                    </div>

                    {/* Development & Partnership */}
                    <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-6">
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-[#FFE81B]">
                                <Users size={20} />
                            </div>
                            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#FFE81B] block">
                                SOFTWARE PARTNERSHIPS
                            </span>
                            <h3 className="text-2xl font-display uppercase tracking-tight text-white">
                                BUILDING A SOFTWARE TEAM?
                            </h3>
                            <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                Scale your product with dedicated development pods, offshore engineering support, and transparent development velocity.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                            <Link
                                href="/start-project"
                                className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-[#FFE81B] hover:text-white transition-colors"
                            >
                                WORK WITH KIAAN TECHNOLOGY <ArrowRight size={13} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 08. EXPERT INSIGHTS / CONNECT */}
                {/* ========================================================================= */}
                <section className="p-8 sm:p-10 rounded-2xl bg-zinc-950 border border-zinc-800/80 text-center max-w-3xl mx-auto space-y-6 shadow-xl">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-[#FFE81B] flex items-center justify-center mx-auto">
                        <Sparkles size={20} />
                    </div>

                    <div className="space-y-2">
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#FFE81B]">
                            CONNECT WITH US
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white">
                            GET KIAAN INSIGHTS
                        </h2>
                        <p className="text-zinc-400 text-sm font-light max-w-lg mx-auto">
                            Get practical software, AI and business technology insights from our team.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-xl bg-yellow-500 text-black text-xs font-mono font-black uppercase tracking-wider hover:bg-white transition-all shadow-md"
                        >
                            TALK TO OUR TEAM
                        </Link>
                        <Link
                            href="/start-project"
                            className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-bold uppercase tracking-wider hover:border-yellow-500/40 hover:text-white transition-all"
                        >
                            SUBMIT PROJECT INQUIRY
                        </Link>
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 09. FROM INSIGHT TO IMPLEMENTATION (SERVICES STRIP) */}
                {/* ========================================================================= */}
                <section className="space-y-6 pt-2">
                    <div className="text-center max-w-2xl mx-auto space-y-1">
                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-[#FFE81B]">
                            CAPABILITIES
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white">
                            FROM INSIGHT TO IMPLEMENTATION
                        </h2>
                        <p className="text-zinc-400 text-xs sm:text-sm font-light">
                            Need help applying these ideas to your business? Explore Kiaan Technology&apos;s software development and AI capabilities.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                        {[
                            { name: 'Custom Software', href: '/services/custom-software-development' },
                            { name: 'SaaS Engineering', href: '/services/saas-development' },
                            { name: 'CRM Systems', href: '/crm' },
                            { name: 'ERP Platforms', href: '/erp' },
                            { name: 'AI & Automation', href: '/services/ai-automation' },
                            { name: 'Web Engineering', href: '/services/web-development' },
                            { name: 'Mobile Apps', href: '/services/mobile-app-development' },
                        ].map((svc) => (
                            <Link
                                key={svc.name}
                                href={svc.href}
                                className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 hover:border-yellow-500/40 hover:bg-zinc-900/60 transition-all text-center group flex flex-col justify-between"
                            >
                                <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors block mb-2">
                                    {svc.name}
                                </span>
                                <span className="text-[10px] font-mono text-yellow-500 flex items-center justify-center gap-1 group-hover:translate-x-0.5 transition-transform">
                                    Explore <ArrowRight size={10} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ========================================================================= */}
                {/* 10. FINAL CALL TO ACTION */}
                {/* ========================================================================= */}
                <section className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-yellow-500/30 text-center relative overflow-hidden shadow-[0_0_50px_rgba(255,232,27,0.05)]">
                    <div className="max-w-3xl mx-auto space-y-5 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-[#FFE81B] text-[10px] font-mono font-black uppercase tracking-widest">
                            <Zap size={12} className="text-[#FFE81B]" />
                            START A CONVERSATION
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-tight">
                            HAVE A SOFTWARE OR <br />
                            <span className="text-[#FFE81B]">AI PROJECT IN MIND?</span>
                        </h2>

                        <p className="text-zinc-300 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
                            Talk to Kiaan Technology about custom software, SaaS products, AI automation or development partnerships.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                            <Link
                                href="/start-project"
                                className="px-8 py-3.5 rounded-xl bg-yellow-500 text-black text-xs font-mono font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(255,232,27,0.25)] flex items-center gap-2"
                            >
                                START YOUR PROJECT <ArrowRight size={14} />
                            </Link>

                            <Link
                                href="/contact"
                                className="px-8 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs font-mono font-bold uppercase tracking-widest hover:border-yellow-500 hover:text-[#FFE81B] transition-all"
                            >
                                BOOK A CONSULTATION
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
