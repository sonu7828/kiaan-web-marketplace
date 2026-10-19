"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2, Calendar, MapPin, Users, Globe2, ShieldCheck,
    Cpu, Sparkles, ArrowRight, CheckCircle2, ChevronRight,
    Layers, Bot, Smartphone, Server, Database, Cloud,
    Code2, Award, FileText, Lock, Rocket, Target, HeartHandshake,
    Compass, Workflow, Zap, Check, ExternalLink, HelpCircle,
    Stethoscope, Landmark, Home, ShoppingBag, Truck, Utensils,
    GraduationCap, Dumbbell, Briefcase, Settings2, Handshake,
    UserCheck, Terminal, Lightbulb, TrendingUp, BarChart3,
    Camera, Shield, PhoneCall, CheckCircle, Flame, Star, ShieldAlert,
    X, Maximize2
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';

// ── 1. CONFIGURABLE COMPANY GALLERY DATA ──
interface GalleryItem {
    id: number;
    title: string;
    category: 'Founder' | 'Team' | 'Office' | 'Workspace' | 'Events' | 'Awards' | 'Celebrations';
    caption: string;
    image?: string;
    alt: string;
    placeholderNote?: string;
}

const companyGallery: GalleryItem[] = [
    {
        id: 1,
        title: "Leadership & Technical Direction",
        category: "Founder",
        caption: "Founder Lalit Singh leading product engineering & AI architectural strategy.",
        alt: "Kiaan Technology Leadership & Architectural Direction",
        placeholderNote: "Founder Photograph (Uploading Soon)"
    },
    {
        id: 2,
        title: "Engineering Team & Collaboration",
        category: "Team",
        caption: "Full-stack developers, UI/UX designers and QA architects collaborating on client deliverables.",
        alt: "Kiaan Technology Software Engineering Team Workspace",
        placeholderNote: "Team & Workspace Photos (Uploading Soon)"
    },
    {
        id: 3,
        title: "Global Compliance & Certification",
        category: "Awards",
        caption: "ISO/IEC 27001:2022 international quality & data security standard compliance.",
        image: "/frontPage/ISO certificate.webp",
        alt: "ISO/IEC 27001:2022 Quality and Security Compliance Certificate",
    },
    {
        id: 4,
        title: "Development Center Headquarters",
        category: "Office",
        caption: "Central delivery & development hub located in Indore, Madhya Pradesh, India.",
        alt: "Kiaan Technology Delivery Center Headquarters Indore",
        placeholderNote: "Office & Innovation Floor (Uploading Soon)"
    },
    {
        id: 5,
        title: "Industry Excellence Recognition",
        category: "Awards",
        caption: "TechBehemoths 2025 Winner recognition for Graphic Design, ReactJS & UX/UI services.",
        image: "/frontPage/ReactJs.webp",
        alt: "TechBehemoths 2025 Winner Award Recognition",
    },
    {
        id: 6,
        title: "Culture & Team Milestones",
        category: "Celebrations",
        caption: "Celebrating product launches, sprint victories and company engineering milestones.",
        alt: "Kiaan Technology Team Celebrations and Culture",
        placeholderNote: "Team Celebrations & Events (Uploading Soon)"
    }
];

export default function AboutPage() {
    const [activeGalleryTab, setActiveGalleryTab] = useState<string>('All');
    const [selectedCertificate, setSelectedCertificate] = useState<{
        title: string;
        image: string;
        alt: string;
        category?: string;
        caption?: string;
    } | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedCertificate(null);
        };
        if (selectedCertificate) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedCertificate]);

    const filteredGallery = activeGalleryTab === 'All'
        ? companyGallery
        : companyGallery.filter(item => item.category === activeGalleryTab);

    // JSON-LD Structured Data
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Kiaan Technology Private Limited",
        "url": "https://kiaantechnology.com",
        "logo": "https://kiaantechnology.com/logo.webp",
        "foundingDate": "2022",
        "founder": {
            "@type": "Person",
            "name": "Lalit Singh",
            "jobTitle": "Founder"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Indore",
            "addressRegion": "Madhya Pradesh",
            "addressCountry": "IN"
        },
        "description": "Kiaan Technology Private Limited is a software development and AI automation company founded in 2022, building custom software, SaaS platforms, and intelligent business ecosystems.",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 40,
            "maxValue": 60
        }
    };

    const breadcrumbSchema = {
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
                "name": "About Us",
                "item": "https://kiaantechnology.com/about"
            }
        ]
    };

    return (
        <div className="bg-black text-white font-sans selection:bg-[#FFE81B] selection:text-black min-h-screen">
            {/* Structured Data Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* =========================================================================
                01. ABOUT HERO SECTION (High-Impact Glowing Layout with Snapshot Grid)
            ========================================================================= */}
            <section className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
                {/* Ambient Radial Lighting */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(255,232,27,0.12)_0%,_rgba(234,179,8,0.04)_45%,_transparent_75%)] pointer-events-none" />
                <div className="absolute -top-24 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <Reveal>
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-yellow-400/40 bg-yellow-500/10 text-[#FFE81B] shadow-[0_0_20px_rgba(255,232,27,0.15)] mb-6 backdrop-blur-md">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FFE81B] shadow-[0_0_8px_#FFE81B] animate-pulse" />
                            <span className="text-xs font-mono font-black tracking-[0.25em] uppercase">
                                ABOUT KIAAN TECHNOLOGY
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-[1.08] max-w-5xl mb-6">
                            WE BUILD TECHNOLOGY THAT HELPS BUSINESSES{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE81B] via-yellow-300 to-amber-400 drop-shadow-[0_0_35px_rgba(255,232,27,0.3)]">
                                GROW, AUTOMATE & SCALE.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="space-y-4 max-w-3xl text-zinc-200 text-sm md:text-base leading-relaxed font-normal mb-10">
                            <p className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm border-l-4 border-l-[#FFE81B]">
                                <strong className="text-white">Kiaan Technology Private Limited</strong> is a software development and AI automation company helping businesses build custom software, SaaS platforms, enterprise systems and intelligent automation solutions.
                            </p>
                            <p className="text-zinc-300 font-light pl-2">
                                Since 2022, our focus has remained simple: understand real business problems and build technology that helps organizations operate more efficiently and scale with confidence.
                            </p>
                        </div>
                    </Reveal>

                    {/* =========================================================================
                        02. COMPANY SNAPSHOT (KIAAN AT A GLANCE - Prominent Executive HUD)
                    ========================================================================= */}
                    <Reveal delay={0.3}>
                        <div className="mb-10 p-6 md:p-8 rounded-3xl bg-zinc-950/80 border border-yellow-500/30 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800/80">
                                <div className="w-9 h-9 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-[#FFE81B] shadow-[0_0_15px_rgba(255,232,27,0.15)]">
                                    <Building2 size={18} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#FFE81B] block">
                                        ENTERPRISE OVERVIEW
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-display uppercase tracking-tight text-white">
                                        KIAAN AT A GLANCE
                                    </h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                                {[
                                    { label: "COMPANY", value: "Kiaan Technology Private Limited", icon: Building2, highlight: true },
                                    { label: "FOUNDED", value: "2022", icon: Calendar, highlight: false },
                                    { label: "FOUNDER", value: "Lalit Singh", icon: UserCheck, highlight: true },
                                    { label: "HEADQUARTERS", value: "Indore, Madhya Pradesh, India", icon: MapPin, highlight: false },
                                    { label: "TEAM", value: "40–60 Professionals", icon: Users, highlight: false },
                                    { label: "CLIENTS SERVED", value: "2,000+", icon: HeartHandshake, highlight: true },
                                    { label: "PROJECTS COMPLETED", value: "5,000+", icon: CheckCircle2, highlight: true },
                                    { label: "MARKETS", value: "India + International", icon: Globe2, highlight: false },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-4 rounded-xl backdrop-blur-md transition-all duration-300 flex flex-col justify-between ${
                                            item.highlight
                                                ? "bg-zinc-900/90 border border-yellow-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-yellow-500/60"
                                                : "bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700"
                                        }`}
                                    >
                                        <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFE81B] uppercase flex items-center gap-1.5 mb-2">
                                            <item.icon size={13} className="text-[#FFE81B]" />
                                            {item.label}
                                        </span>
                                        <span className="text-sm md:text-base font-black text-white leading-snug">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}

                                {/* Full width row for Core Business */}
                                <div className="col-span-2 md:col-span-3 lg:col-span-4 p-4 rounded-xl bg-gradient-to-r from-yellow-500/10 via-zinc-900/90 to-yellow-500/10 border border-yellow-500/40 shadow-[0_0_25px_rgba(255,232,27,0.1)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <span className="text-xs font-mono font-black tracking-widest text-[#FFE81B] uppercase shrink-0 flex items-center gap-2">
                                        <Sparkles size={14} className="text-[#FFE81B]" />
                                        CORE BUSINESS
                                    </span>
                                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                                        Software • SaaS • AI • Automation • Technology Partnerships
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Primary Action Buttons */}
                    <Reveal delay={0.4}>
                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <Link href="/start-project">
                                <Button className="h-13 px-8 bg-gradient-to-r from-[#FFE81B] via-yellow-400 to-amber-400 text-black font-black uppercase text-xs tracking-widest hover:brightness-110 shadow-[0_0_30px_rgba(255,232,27,0.35)] hover:scale-[1.02] transition-all cursor-pointer">
                                    START A PROJECT
                                </Button>
                            </Link>
                            <Link href="/solutions">
                                <Button variant="outline" className="h-13 px-8 border-zinc-700 bg-zinc-900/70 hover:border-yellow-500/80 hover:bg-zinc-800 text-white font-black uppercase text-xs tracking-widest transition-all gap-2 cursor-pointer shadow-lg">
                                    EXPLORE OUR WORK <ArrowRight size={14} className="text-[#FFE81B]" />
                                </Button>
                            </Link>
                        </div>
                    </Reveal>

                    {/* Trust Strip - High Visibility Badges */}
                    <Reveal delay={0.5}>
                        <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl shadow-xl flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-[11px] font-mono font-bold uppercase tracking-widest text-zinc-200">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#FFE81B] shadow-[0_0_6px_#FFE81B]" />
                                FOUNDED 2022
                            </span>
                            <span className="hidden sm:inline text-zinc-700">•</span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#FFE81B] shadow-[0_0_6px_#FFE81B]" />
                                INDORE, INDIA
                            </span>
                            <span className="hidden sm:inline text-zinc-700">•</span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#FFE81B] shadow-[0_0_6px_#FFE81B]" />
                                40–60 TEAM MEMBERS
                            </span>
                            <span className="hidden sm:inline text-zinc-700">•</span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#FFE81B] shadow-[0_0_6px_#FFE81B]" />
                                2,000+ CLIENTS
                            </span>
                            <span className="hidden sm:inline text-zinc-700">•</span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#FFE81B] shadow-[0_0_6px_#FFE81B]" />
                                GLOBAL DELIVERY
                            </span>
                        </div>
                    </Reveal>
                </div>
            </section>


            {/* =========================================================================
                03. OUR STORY SECTION
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="mb-10">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                OUR STORY
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                FROM SOFTWARE DEVELOPMENT TO A GLOBAL TECHNOLOGY ECOSYSTEM
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                num: "01",
                                title: "WHERE WE STARTED",
                                p1: "Kiaan Technology began in 2022 with a focus on helping businesses turn ideas and operational requirements into practical software.",
                                p2: "The objective was never to build technology for the sake of technology. The goal was to create systems that solve real problems, simplify operations and support business growth.",
                                accentColor: "border-t-yellow-400"
                            },
                            {
                                num: "02",
                                title: "WHERE WE STAND",
                                p1: "Today, Kiaan Technology works across software development, SaaS platforms, business management systems, mobile applications, enterprise solutions and AI-powered automation.",
                                p2: "Our team supports businesses from initial planning and UI/UX through frontend development, backend engineering, integrations, deployment and long-term technical support.",
                                accentColor: "border-t-cyan-400"
                            },
                            {
                                num: "03",
                                title: "WHERE WE ARE GOING",
                                p1: "The next chapter of Kiaan Technology is focused on bringing software, automation and artificial intelligence together.",
                                p2: "We are building toward a future where businesses can access ready-made software, custom engineering, AI agents, dedicated developers and technology partnerships through one connected ecosystem.",
                                accentColor: "border-t-purple-400"
                            }
                        ].map((block, idx) => (
                            <Reveal key={idx} delay={idx * 0.1}>
                                <div className={`h-full p-6 md:p-8 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 border-t-4 ${block.accentColor} shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:border-yellow-500/40 transition-all flex flex-col justify-between`}>
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-[#FFE81B] mb-5 font-mono font-black text-xs shadow-md">
                                            {block.num}
                                        </div>
                                        <h3 className="text-lg font-display uppercase tracking-tight text-white mb-3">
                                            {block.title}
                                        </h3>
                                        <p className="text-zinc-200 text-xs sm:text-sm font-normal leading-relaxed">
                                            {block.p1}
                                        </p>
                                    </div>
                                    <p className="text-zinc-400 text-xs font-light leading-relaxed mt-4 pt-4 border-t border-zinc-900">
                                        {block.p2}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                04. FOUNDER SECTION (LALIT SINGH)
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/40">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        {/* Founder Visual Card / Photo Slot */}
                        <div className="lg:col-span-5">
                            <Reveal>
                                <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-b from-yellow-400 via-amber-600 to-zinc-900 shadow-[0_0_40px_rgba(255,232,27,0.15)] overflow-hidden">
                                    <div className="relative bg-zinc-950 rounded-[14px] p-6 sm:p-8 flex flex-col items-center text-center">
                                        {/* Avatar / Portrait Frame */}
                                        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-zinc-900 border-2 border-yellow-500/40 flex items-center justify-center relative overflow-hidden mb-6 shadow-inner">
                                            <div className="flex flex-col items-center justify-center p-4 text-center">
                                                <UserCheck size={52} className="text-[#FFE81B] mb-2 stroke-[1.5] drop-shadow-[0_0_10px_rgba(255,232,27,0.4)]" />
                                                <span className="text-xs font-mono font-black uppercase tracking-widest text-white">
                                                    Lalit Singh
                                                </span>
                                                <span className="text-[9px] font-mono uppercase text-[#FFE81B] font-bold">
                                                    Founder & Tech Lead
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-display uppercase tracking-tight text-white mb-1">
                                            Lalit Singh
                                        </h3>
                                        <span className="text-xs font-mono font-black tracking-widest text-[#FFE81B] uppercase mb-6 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30">
                                            Founder — Kiaan Technology
                                        </span>

                                        {/* Chips */}
                                        <div className="w-full grid grid-cols-2 gap-2.5 text-left pt-4 border-t border-zinc-900 text-xs">
                                            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                                                <span className="text-[9px] font-mono text-zinc-400 uppercase font-bold block">COMPANY FOUNDED</span>
                                                <span className="font-bold text-white text-sm">2022</span>
                                            </div>
                                            <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                                                <span className="text-[9px] font-mono text-zinc-400 uppercase font-bold block">BASED IN</span>
                                                <span className="font-bold text-white text-sm">Indore, India</span>
                                            </div>
                                            <div className="col-span-2 p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                                                <span className="text-[9px] font-mono text-zinc-400 uppercase font-bold block mb-0.5">CORE FOCUS</span>
                                                <span className="font-bold text-[#FFE81B] text-xs">Software • SaaS • AI • Business Technology</span>
                                            </div>
                                        </div>

                                        {/* LinkedIn Profile structure (Disabled until official verified URL is supplied) */}
                                        <div className="w-full mt-4">
                                            <button
                                                disabled
                                                className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-mono uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed opacity-80"
                                                title="Official profile link will be activated once verified"
                                            >
                                                VIEW LINKEDIN PROFILE
                                                <span className="text-[9px] px-2 py-0.5 rounded bg-zinc-800 text-[#FFE81B] border border-yellow-500/30 font-bold">Verified ID</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Founder Message */}
                        <div className="lg:col-span-7 space-y-6">
                            <Reveal delay={0.1}>
                                <div>
                                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                        FROM OUR FOUNDER
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white mb-6">
                                        MEET LALIT SINGH
                                    </h2>
                                </div>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <div className="space-y-4 text-zinc-200 text-sm md:text-base font-normal leading-relaxed border-l-4 border-[#FFE81B] pl-6 bg-zinc-950/60 p-6 rounded-r-2xl border border-zinc-800/80">
                                    <p className="text-white font-semibold italic text-base md:text-lg">
                                        &ldquo;I started Kiaan Technology with a simple belief: software should solve business problems, not create more complexity.&rdquo;
                                    </p>
                                    <p className="text-zinc-300">
                                        &ldquo;Our objective has always been bigger than simply delivering websites or applications. We want to understand how a business operates, identify where technology can create an advantage and then build systems capable of growing with that business.&rdquo;
                                    </p>
                                    <p className="text-zinc-300">
                                        &ldquo;As AI changes the way companies operate, our mission is evolving as well. We are building Kiaan Technology into a global software and automation partner that helps businesses move from manual operations toward intelligent digital ecosystems.&rdquo;
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.3}>
                                <div className="pt-2 flex items-center gap-4">
                                    <div className="h-11 w-11 rounded-xl bg-yellow-500/10 border border-yellow-500/40 flex items-center justify-center text-[#FFE81B] shadow-md">
                                        <Lightbulb size={20} />
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold text-white uppercase block">
                                            Lalit Singh
                                        </span>
                                        <span className="text-xs font-mono text-[#FFE81B] uppercase font-bold">
                                            Founder & Technology Lead
                                        </span>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                05. COMPANY JOURNEY / TIMELINE
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="text-center mb-12">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                MILESTONES & EVOLUTION
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                OUR JOURNEY
                            </h2>
                        </div>
                    </Reveal>

                    {/* Timeline Grid with High Contrast Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                tag: "2022",
                                isYear: true,
                                title: "KIAAN TECHNOLOGY BEGINS",
                                desc: "Kiaan Technology starts its journey in software development and digital solutions."
                            },
                            {
                                tag: "GROWTH PHASE",
                                isYear: false,
                                title: "BUSINESS SOFTWARE EXPANSION",
                                desc: "Expanded into business software, web applications and mobile development."
                            },
                            {
                                tag: "SAAS EXPANSION",
                                isYear: false,
                                title: "INDUSTRY PLATFORMS",
                                desc: "Built industry-focused SaaS, CRM, ERP and management platforms."
                            },
                            {
                                tag: "GLOBAL DELIVERY",
                                isYear: false,
                                title: "INTERNATIONAL DELIVERY",
                                desc: "Expanded technology delivery beyond India into international markets."
                            },
                            {
                                tag: "AI ERA",
                                isYear: false,
                                title: "AI WORKFLOWS & AUTOMATION",
                                desc: "Expanded capabilities into AI automation, AI integrations and intelligent workflows."
                            },
                            {
                                tag: "2025",
                                isYear: true,
                                title: "INDUSTRY RECOGNITION",
                                desc: "TechBehemoths 2025 recognition in India for Graphic Design, ReactJS & UX/UI services."
                            },
                            {
                                tag: "2030",
                                isYear: true,
                                title: "GLOBAL AI ECOSYSTEM",
                                desc: "Long-term vision: A unified global software, SaaS and AI automation ecosystem."
                            }
                        ].map((m, idx) => (
                            <Reveal key={idx} delay={idx * 0.05}>
                                <div className={`h-full p-5 rounded-xl bg-zinc-950 border transition-all flex flex-col justify-between ${
                                    m.isYear
                                        ? "border-yellow-500/40 shadow-[0_0_20px_rgba(255,232,27,0.1)] hover:border-yellow-500"
                                        : "border-zinc-800 hover:border-zinc-700"
                                }`}>
                                    <div>
                                        <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-mono font-black uppercase tracking-wider mb-3 ${
                                            m.isYear ? "bg-[#FFE81B] text-black shadow-md" : "bg-zinc-800 text-zinc-200 border border-zinc-700"
                                        }`}>
                                            {m.tag}
                                        </span>
                                        <h3 className="text-sm font-display uppercase tracking-tight text-white mb-2 leading-tight">
                                            {m.title}
                                        </h3>
                                    </div>
                                    <p className="text-zinc-300 text-xs font-normal leading-relaxed mt-2 pt-2 border-t border-zinc-900">
                                        {m.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                06. OUR TEAM SECTION
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/40">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                    OUR PEOPLE
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                    THE PEOPLE BEHIND KIAAN TECHNOLOGY
                                </h2>
                                <p className="text-zinc-300 text-xs sm:text-sm font-normal max-w-2xl mt-3 leading-relaxed">
                                    Kiaan Technology brings together professionals across software engineering, design, product development, quality assurance, project management, cloud infrastructure and AI.
                                </p>
                            </div>
                            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-yellow-500/40 shadow-[0_0_25px_rgba(255,232,27,0.15)] shrink-0 text-center">
                                <span className="text-3xl sm:text-4xl font-display text-[#FFE81B] font-black block">
                                    40–60
                                </span>
                                <span className="text-[10px] font-mono font-black tracking-widest uppercase text-white">
                                    TEAM MEMBERS
                                </span>
                            </div>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "SOFTWARE ENGINEERING", desc: "Frontend, backend and full-stack development.", icon: Code2 },
                            { title: "UI/UX & PRODUCT DESIGN", desc: "Business-oriented interfaces and product workflows.", icon: Sparkles },
                            { title: "MOBILE DEVELOPMENT", desc: "Cross-platform and mobile application engineering.", icon: Smartphone },
                            { title: "AI & AUTOMATION", desc: "AI integrations, intelligent workflows and autonomous business systems.", icon: Bot },
                            { title: "QUALITY ASSURANCE", desc: "Functional, integration, responsive and production-readiness testing.", icon: ShieldCheck },
                            { title: "PROJECT MANAGEMENT", desc: "Requirements, delivery planning and client coordination.", icon: Workflow },
                            { title: "DEVOPS & CLOUD", desc: "Deployment, infrastructure, monitoring and application operations.", icon: Cloud },
                        ].map((dept, idx) => (
                            <Reveal key={idx} delay={idx * 0.05}>
                                <div className="h-full p-5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-yellow-500/40 transition-all flex flex-col justify-between group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#FFE81B] group-hover:scale-110 transition-transform shadow-md">
                                            <dept.icon size={18} />
                                        </div>
                                        <h3 className="text-xs font-display uppercase tracking-tight text-white">
                                            {dept.title}
                                        </h3>
                                    </div>
                                    <p className="text-zinc-300 text-xs font-light leading-relaxed">
                                        {dept.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                07. WHAT WE BUILD
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                            <div>
                                <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                    CAPABILITIES
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                    WHAT WE BUILD
                                </h2>
                            </div>
                            <Link href="/services">
                                <Button variant="outline" className="h-11 px-5 border-zinc-700 bg-zinc-900 hover:border-yellow-500 text-white text-xs font-mono uppercase tracking-widest gap-2 shadow-md">
                                    EXPLORE OUR SERVICES <ArrowRight size={13} className="text-[#FFE81B]" />
                                </Button>
                            </Link>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { title: "READY-TO-USE SOFTWARE", desc: "Industry-focused software solutions that can be customized and deployed for businesses.", icon: Layers },
                            { title: "CUSTOM SOFTWARE", desc: "Web and business applications designed around unique workflows and requirements.", icon: Code2 },
                            { title: "SAAS PLATFORMS", desc: "Scalable multi-user and multi-tenant products for startups and established companies.", icon: Server },
                            { title: "AI AUTOMATION", desc: "Intelligent workflows designed to reduce repetitive manual business operations.", icon: Zap },
                            { title: "AI AGENTS", desc: "Specialized AI agents connected with software, data, APIs and business workflows.", icon: Bot },
                            { title: "ENTERPRISE SYSTEMS", desc: "CRM, ERP, operations platforms and integrated business ecosystems.", icon: Building2 },
                        ].map((card, idx) => (
                            <Reveal key={idx} delay={idx * 0.05}>
                                <div className="h-full p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(255,232,27,0.12)] transition-all flex flex-col justify-between group">
                                    <div>
                                        <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-[#FFE81B] group-hover:scale-110 transition-transform mb-4 shadow-md">
                                            <card.icon size={22} />
                                        </div>
                                        <h3 className="text-base font-display uppercase tracking-tight text-white mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-zinc-300 text-xs sm:text-sm font-normal leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                08. WHO WE WORK WITH
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/40">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="mb-12">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                AUDIENCE & STAGES
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                BUILT FOR DIFFERENT STAGES OF BUSINESS
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { title: "STARTUPS", desc: "From MVP to scalable SaaS platforms.", icon: Rocket },
                            { title: "SMALL & MEDIUM BUSINESSES", desc: "Digitization, CRM, ERP and automation.", icon: Building2 },
                            { title: "ENTERPRISES", desc: "Complex systems, integrations and custom platforms.", icon: Server },
                            { title: "SOFTWARE COMPANIES", desc: "Additional development capacity and technology partnerships.", icon: Code2 },
                            { title: "DIGITAL AGENCIES", desc: "White-label development while agencies retain client ownership.", icon: Handshake },
                            { title: "ENTREPRENEURS", desc: "Ready-made software, customization and product launches.", icon: Lightbulb },
                        ].map((item, idx) => (
                            <Reveal key={idx} delay={idx * 0.05}>
                                <div className="p-6 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-yellow-500/40 transition-all flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[#FFE81B] shrink-0 shadow-md">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-display uppercase tracking-tight text-white mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-300 text-xs font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                09. INDUSTRIES WE SERVE
            ========================================================================= */}
            <section className="py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="mb-8">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                DOMAIN EXPERTISE
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white">
                                INDUSTRIES WE SERVE
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {[
                            { name: "Healthcare", icon: Stethoscope },
                            { name: "Fintech & Banking", icon: Landmark },
                            { name: "Real Estate", icon: Home },
                            { name: "Retail & POS", icon: ShoppingBag },
                            { name: "Logistics & Fleet", icon: Truck },
                            { name: "Hospitality", icon: Utensils },
                            { name: "Education", icon: GraduationCap },
                            { name: "Sports & Recreation", icon: Dumbbell },
                            { name: "Professional Services", icon: Briefcase },
                            { name: "Custom Operations", icon: Settings2 },
                        ].map((ind, idx) => (
                            <div key={idx} className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-yellow-500/50 flex items-center gap-2.5 text-zinc-200 hover:text-white transition-all shadow-sm">
                                <ind.icon size={17} className="text-[#FFE81B] shrink-0" />
                                <span className="text-xs font-bold uppercase tracking-tight truncate">{ind.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                10. TECHNOLOGY STACK
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/40">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="mb-10">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                ENGINEERING CAPABILITIES
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                TECHNOLOGY BEHIND OUR PRODUCTS
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { layer: "FRONTEND", items: ["React", "Next.js", "JavaScript", "TypeScript"], icon: Code2 },
                            { layer: "BACKEND", items: ["Node.js", "Express.js", "Java", "Python"], icon: Server },
                            { layer: "DATABASE", items: ["MySQL", "PostgreSQL", "MongoDB"], icon: Database },
                            { layer: "CLOUD & DEPLOY", items: ["AWS", "Google Cloud", "Railway", "Vercel", "Hostinger"], icon: Cloud },
                            { layer: "AI & INTEGRATION", items: ["OpenAI / AI APIs", "AI Agents", "Workflow Automation", "Payment Gateways", "Communication APIs"], icon: Bot },
                        ].map((stack, idx) => (
                            <Reveal key={idx} delay={idx * 0.05}>
                                <div className="h-full p-5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-yellow-500/40 transition-all flex flex-col justify-between shadow-md">
                                    <div>
                                        <div className="flex items-center gap-2 text-[#FFE81B] mb-3 pb-2 border-b border-zinc-800">
                                            <stack.icon size={16} />
                                            <span className="text-xs font-mono font-bold uppercase tracking-widest">
                                                {stack.layer}
                                            </span>
                                        </div>
                                        <ul className="space-y-2">
                                            {stack.items.map((item, i) => (
                                                <li key={i} className="text-xs text-zinc-200 font-medium flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFE81B]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                11. MISSION / VISION / PURPOSE
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                tag: "MISSION",
                                text: "To build practical software and intelligent automation that helps businesses operate more efficiently, serve customers better and scale with confidence.",
                                icon: Target
                            },
                            {
                                tag: "VISION",
                                text: "To become a globally trusted technology partner for software products, AI automation and digital business infrastructure.",
                                icon: Compass
                            },
                            {
                                tag: "PURPOSE",
                                text: "To reduce the gap between a business idea and the technology required to make it work.",
                                icon: Sparkles
                            },
                        ].map((card, idx) => (
                            <Reveal key={idx} delay={idx * 0.1}>
                                <div className="h-full p-6 md:p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-yellow-500/30 hover:border-yellow-500 shadow-[0_0_30px_rgba(255,232,27,0.1)] transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/40 flex items-center justify-center text-[#FFE81B] mb-5 shadow-lg">
                                            <card.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-display uppercase tracking-tight text-[#FFE81B] mb-3">
                                            {card.tag}
                                        </h3>
                                        <p className="text-white text-sm sm:text-base font-normal leading-relaxed">
                                            &ldquo;{card.text}&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                12. HOW WE WORK (FROM IDEA TO PRODUCTION)
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/40">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="mb-10">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                DELIVERY WORKFLOW
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                FROM IDEA TO PRODUCTION
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { num: "01", title: "UNDERSTAND", desc: "Understand the business, users and requirements." },
                            { num: "02", title: "PLAN", desc: "Transform requirements into workflows, architecture and delivery plans." },
                            { num: "03", title: "DESIGN", desc: "Build intuitive interfaces around real user journeys." },
                            { num: "04", title: "DEVELOP", desc: "Connect frontend, backend, databases and integrations." },
                            { num: "05", title: "TEST", desc: "Validate functionality, responsiveness, security and workflows." },
                            { num: "06", title: "DEPLOY", desc: "Move the approved product into its production environment." },
                            { num: "07", title: "SUPPORT", desc: "Continue improvements, maintenance and scaling." },
                        ].map((step, idx) => (
                            <Reveal key={idx} delay={idx * 0.05}>
                                <div className="h-full p-5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between">
                                    <span className="text-xs font-mono font-black text-[#FFE81B] mb-2 block">
                                        STEP {step.num}
                                    </span>
                                    <h3 className="text-sm font-display uppercase tracking-tight text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-300 text-xs font-normal leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                13. COMPANY VALUES (WHAT WE BELIEVE)
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="mb-10">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                CORE PRINCIPLES
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                WHAT WE BELIEVE
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { title: "BUILD WITH PURPOSE", desc: "Technology should solve an actual business problem." },
                            { title: "THINK LONG TERM", desc: "Systems should be designed to evolve as businesses grow." },
                            { title: "OWN THE OUTCOME", desc: "Development responsibility goes beyond simply writing code." },
                            { title: "COMMUNICATE CLEARLY", desc: "Customers should understand progress, decisions and challenges." },
                            { title: "KEEP IMPROVING", desc: "Technology and business requirements constantly evolve." },
                            { title: "PARTNERSHIP OVER TRANSACTIONS", desc: "The strongest technology relationships are built long term." },
                        ].map((val, idx) => (
                            <Reveal key={idx} delay={idx * 0.05}>
                                <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/90 hover:border-yellow-500/40 transition-all flex flex-col justify-between shadow-md">
                                    <h3 className="text-sm font-display uppercase tracking-tight text-white mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#FFE81B] shadow-[0_0_6px_#FFE81B]" />
                                        {val.title}
                                    </h3>
                                    <p className="text-zinc-300 text-xs font-normal leading-relaxed">
                                        {val.desc}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                14. AWARDS & RECOGNITION (APPROVED ASSETS ONLY)
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/40">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="mb-10">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                RECOGNITION
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                AWARDS & RECOGNITION
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* TechBehemoths Award */}
                        <Reveal delay={0.1}>
                            <div className="p-6 rounded-2xl bg-zinc-950 border border-yellow-500/30 shadow-[0_0_25px_rgba(255,232,27,0.1)] flex flex-col justify-between h-full">
                                <div>
                                    <div className="relative w-full h-36 mb-4 bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center p-3 border border-zinc-800">
                                        <Image
                                            src="/frontPage/Graphic Design.webp"
                                            alt="TechBehemoths 2025 Winner Award"
                                            width={200}
                                            height={100}
                                            className="object-contain max-h-32"
                                        />
                                    </div>
                                    <span className="text-[10px] font-mono font-black text-[#FFE81B] uppercase tracking-wider block mb-1">
                                        TECHBEHEMOTHS 2025 WINNER AWARD
                                    </span>
                                    <h3 className="text-sm font-bold text-white mb-2">
                                        2025 Recognition in India
                                    </h3>
                                    <ul className="text-xs text-zinc-300 space-y-1 font-medium">
                                        <li>• Graphic Design</li>
                                        <li>• ReactJS Development</li>
                                        <li>• UX/UI Design Services</li>
                                    </ul>
                                </div>
                            </div>
                        </Reveal>

                        {/* Glassdoor */}
                        <Reveal delay={0.2}>
                            <div className="p-6 rounded-2xl bg-zinc-950 border border-indigo-500/30 shadow-[0_0_25px_rgba(99,102,241,0.1)] flex flex-col justify-between h-full">
                                <div>
                                    <div className="relative w-full h-36 mb-4 bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center p-3 border border-zinc-800">
                                        <Image
                                            src="/frontPage/glassdoor-award.webp"
                                            alt="Glassdoor Top Workplace Recognition"
                                            width={200}
                                            height={100}
                                            className="object-contain max-h-32"
                                        />
                                    </div>
                                    <span className="text-[10px] font-mono font-black text-indigo-400 uppercase tracking-wider block mb-1">
                                        GLASSDOOR 5.0 ACHIEVER
                                    </span>
                                    <h3 className="text-sm font-bold text-white mb-2">
                                        Workplace & Culture Rating
                                    </h3>
                                    <p className="text-xs text-zinc-300 font-normal leading-relaxed">
                                        High employee satisfaction and workplace feedback rating on Glassdoor.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        {/* AmbitionBox */}
                        <Reveal delay={0.3}>
                            <div className="p-6 rounded-2xl bg-zinc-950 border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.1)] flex flex-col justify-between h-full">
                                <div>
                                    <div className="relative w-full h-36 mb-4 bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center p-3 border border-zinc-800">
                                        <Image
                                            src="/frontPage/ambitionbox.webp"
                                            alt="AmbitionBox 4.7 Excellence Rating"
                                            width={200}
                                            height={100}
                                            className="object-contain max-h-32"
                                        />
                                    </div>
                                    <span className="text-[10px] font-mono font-black text-blue-400 uppercase tracking-wider block mb-1">
                                        AMBITIONBOX EXCELLENCE
                                    </span>
                                    <h3 className="text-sm font-bold text-white mb-2">
                                        4.7 / 5.0 Rating
                                    </h3>
                                    <p className="text-xs text-zinc-300 font-normal leading-relaxed">
                                        Verified company performance and workplace rating on AmbitionBox.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                15. CERTIFICATIONS, SECURITY & COMPLIANCE ENGINEERING
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="mb-10">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                CERTIFICATIONS & ENGINEERING STANDARDS
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                SECURITY & COMPLIANCE ENGINEERING
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {/* ISO Certificate */}
                        <div
                            onClick={() => setSelectedCertificate({
                                title: "ISO/IEC 27001:2022 Certification",
                                image: "/frontPage/ISO certificate.webp",
                                alt: "ISO/IEC 27001:2022 Quality and Security Compliance Certificate",
                                category: "Compliance",
                                caption: "Official ISO/IEC 27001:2022 Information Security Management System certification."
                            })}
                            className="group p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-yellow-500/60 transition-all flex flex-col justify-between shadow-md cursor-pointer transform hover:-translate-y-1"
                        >
                            <div>
                                <div className="relative h-32 bg-zinc-900 rounded-xl p-2 flex items-center justify-center mb-3 border border-zinc-800 overflow-hidden">
                                    <Image
                                        src="/frontPage/ISO certificate.webp"
                                        alt="ISO/IEC 27001:2022 Compliance"
                                        width={160}
                                        height={90}
                                        className="object-contain max-h-28 transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase font-bold text-[#FFE81B] bg-black/80 px-2 py-1 rounded border border-yellow-500/40">
                                            <Maximize2 size={11} /> View
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-mono font-black text-[#FFE81B] uppercase tracking-wider block">
                                    ISO/IEC 27001:2022
                                </span>
                                <span className="text-xs text-white font-bold block mt-0.5">
                                    Information Security Management
                                </span>
                            </div>
                        </div>

                        {/* Certificate of Incorporation */}
                        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-yellow-500/40 transition-all flex flex-col justify-between shadow-md">
                            <div>
                                <div className="h-32 bg-zinc-900 rounded-xl p-3 flex flex-col items-center justify-center mb-3 text-center border border-zinc-800">
                                    <FileText size={36} className="text-[#FFE81B] mb-2" />
                                    <span className="text-[10px] font-mono text-zinc-300 uppercase font-bold">Govt. of India</span>
                                </div>
                                <span className="text-[10px] font-mono font-black text-[#FFE81B] uppercase tracking-wider block">
                                    CERTIFICATE OF INCORPORATION
                                </span>
                                <span className="text-xs text-white font-bold block mt-0.5">
                                    Kiaan Technology Private Limited
                                </span>
                            </div>
                        </div>

                        {/* Fiverr Badge */}
                        <div
                            onClick={() => setSelectedCertificate({
                                title: "Fiverr Top Rated Seller Recognition",
                                image: "/frontPage/Fiver certificate.webp",
                                alt: "Fiverr Top Rated Badge",
                                category: "Recognition",
                                caption: "Verified Top Rated freelance development seller status on Fiverr."
                            })}
                            className="group p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/60 transition-all flex flex-col justify-between shadow-md cursor-pointer transform hover:-translate-y-1"
                        >
                            <div>
                                <div className="relative h-32 bg-zinc-900 rounded-xl p-2 flex items-center justify-center mb-3 border border-zinc-800 overflow-hidden">
                                    <Image
                                        src="/frontPage/Fiver certificate.webp"
                                        alt="Fiverr Top Rated Badge"
                                        width={160}
                                        height={90}
                                        className="object-contain max-h-28 transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase font-bold text-emerald-400 bg-black/80 px-2 py-1 rounded border border-emerald-500/40">
                                            <Maximize2 size={11} /> View
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-wider block">
                                    FIVERR TOP RATED
                                </span>
                                <span className="text-xs text-white font-bold block mt-0.5">
                                    Verified Freelance Development
                                </span>
                            </div>
                        </div>

                        {/* Wix Partner */}
                        <div
                            onClick={() => setSelectedCertificate({
                                title: "Wix Studio Partner Accreditation",
                                image: "/frontPage/wix-partner.webp",
                                alt: "Wix Studio Partner Badge",
                                category: "Partnership",
                                caption: "Certified Pioneer Level Partner for advanced Wix Studio web development."
                            })}
                            className="group p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-blue-500/60 transition-all flex flex-col justify-between shadow-md cursor-pointer transform hover:-translate-y-1"
                        >
                            <div>
                                <div className="relative h-32 bg-zinc-900 rounded-xl p-2 flex items-center justify-center mb-3 border border-zinc-800 overflow-hidden">
                                    <Image
                                        src="/frontPage/wix-partner.webp"
                                        alt="Wix Studio Partner Badge"
                                        width={160}
                                        height={90}
                                        className="object-contain max-h-28 transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase font-bold text-blue-400 bg-black/80 px-2 py-1 rounded border border-blue-500/40">
                                            <Maximize2 size={11} /> View
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[10px] font-mono font-black text-blue-400 uppercase tracking-wider block">
                                    WIX STUDIO PARTNER
                                </span>
                                <span className="text-xs text-white font-bold block mt-0.5">
                                    Pioneer Level Partner
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Accurate Engineering Capability Statement */}
                    <div className="p-5 rounded-xl bg-zinc-900/80 border border-yellow-500/30 text-zinc-200 text-xs font-normal leading-relaxed flex items-start gap-3 shadow-lg">
                        <Shield className="text-[#FFE81B] shrink-0 mt-0.5" size={18} />
                        <div>
                            <span className="text-white font-bold block mb-1 uppercase tracking-wider text-xs">
                                Compliance & Security Capability:
                            </span>
                            Depending on project requirements, systems can be designed with technical controls and workflows intended to support applicable regulatory and security requirements including HIPAA, PCI-DSS, SOC 2 Type II, GDPR and India DPDP Act.
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                16. GLOBAL REACH
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/40">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7">
                            <Reveal>
                                <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                    GLOBAL PRESENCE
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white mb-4">
                                    BUILT IN INDIA. WORKING WITH THE WORLD.
                                </h2>
                                <p className="text-zinc-200 text-sm md:text-base font-normal leading-relaxed mb-6">
                                    From our base in Indore, Kiaan Technology works with businesses, founders and technology partners across India and international markets.
                                </p>
                            </Reveal>

                            <Reveal delay={0.1}>
                                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 shadow-md">
                                        <span className="text-[9px] text-[#FFE81B] uppercase font-bold block mb-1">HEADQUARTERS</span>
                                        <span className="text-white font-black text-sm block">Indore, MP, India</span>
                                    </div>
                                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 shadow-md">
                                        <span className="text-[9px] text-[#FFE81B] uppercase font-bold block mb-1">MARKET REACH</span>
                                        <span className="text-white font-black text-sm block">India + International</span>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <div className="lg:col-span-5">
                            <Reveal delay={0.2}>
                                <div className="p-8 rounded-2xl bg-zinc-950 border border-yellow-500/30 text-center flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,232,27,0.1)]">
                                    <Globe2 size={56} className="text-[#FFE81B] mb-4 stroke-[1.5] drop-shadow-[0_0_15px_rgba(255,232,27,0.3)]" />
                                    <h3 className="text-lg font-display uppercase text-white mb-2">
                                        International Project Delivery
                                    </h3>
                                    <p className="text-zinc-300 text-xs font-normal max-w-xs leading-relaxed">
                                        Engineering solutions with cross-timezone collaboration, English fluency and robust version-controlled deployment pipelines.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                17. COMPANY GALLERY (CONFIGURABLE)
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                            <div>
                                <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                    COMPANY CULTURE & ASSETS
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                    INSIDE KIAAN TECHNOLOGY
                                </h2>
                            </div>
                            {/* Category Filter Pills */}
                            <div className="flex flex-wrap gap-1.5">
                                {['All', 'Founder', 'Team', 'Office', 'Awards', 'Celebrations'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveGalleryTab(tab)}
                                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                                            activeGalleryTab === tab
                                                ? "bg-[#FFE81B] text-black font-black shadow-[0_0_15px_rgba(255,232,27,0.3)]"
                                                : "bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredGallery.map((item) => {
                            const hasImage = Boolean(item.image);
                            return (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        if (hasImage) {
                                            setSelectedCertificate({
                                                title: item.title,
                                                image: item.image!,
                                                alt: item.alt,
                                                category: item.category,
                                                caption: item.caption
                                            });
                                        }
                                    }}
                                    className={`group relative rounded-2xl bg-zinc-950 border border-zinc-800/90 overflow-hidden flex flex-col justify-between transition-all shadow-md ${
                                        hasImage
                                            ? "cursor-pointer hover:border-[#FFE81B]/60 hover:shadow-[0_0_30px_rgba(255,232,27,0.15)] transform hover:-translate-y-1"
                                            : ""
                                    }`}
                                >
                                    <div className="relative h-48 w-full bg-zinc-900 flex items-center justify-center p-4 overflow-hidden">
                                        {item.image ? (
                                            <>
                                                <Image
                                                    src={item.image}
                                                    alt={item.alt}
                                                    width={340}
                                                    height={200}
                                                    className="object-contain max-h-40 transition-transform duration-500 group-hover:scale-105"
                                                />
                                                {/* Hover Overlay with Preview Pill */}
                                                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFE81B] text-black text-[11px] font-black uppercase tracking-wider shadow-[0_0_20px_rgba(255,232,27,0.5)] transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                        <Maximize2 size={13} />
                                                        Preview
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 w-full h-full border border-dashed border-zinc-800 rounded-xl">
                                                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-[#FFE81B] mb-2.5 shadow-[0_0_15px_rgba(255,232,27,0.12)]">
                                                    <Camera size={20} />
                                                </div>
                                                <span className="text-xs font-mono font-black text-white uppercase tracking-wider block mb-1">
                                                    UPLOADING SOON
                                                </span>
                                                <span className="text-[10px] font-mono text-zinc-400 uppercase">
                                                    {item.placeholderNote || "Asset Pending Upload"}
                                                </span>
                                            </div>
                                        )}
                                        <span className="absolute top-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/80 border border-zinc-700 text-[#FFE81B] uppercase font-bold z-10">
                                            {item.category}
                                        </span>
                                    </div>
                                    <div className="p-4 border-t border-zinc-900 bg-zinc-950 flex flex-col justify-between flex-1">
                                        <div>
                                            <h3 className="text-xs font-bold uppercase text-white tracking-wide mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-zinc-300 text-xs font-light leading-relaxed">
                                                {item.caption}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                18. KIAAN IN NUMBERS
            ========================================================================= */}
            <section className="py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/40">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="text-center mb-10">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                SCALE & IMPACT
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                KIAAN IN NUMBERS
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { value: "2022", label: "FOUNDED" },
                            { value: "40–60", label: "TEAM MEMBERS" },
                            { value: "2,000+", label: "CLIENTS SERVED" },
                            { value: "5,000+", label: "PROJECTS COMPLETED" },
                            { value: "GLOBAL", label: "DELIVERY REACH" },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-zinc-950 border border-yellow-500/20 text-center flex flex-col items-center justify-center hover:border-yellow-500/60 transition-all shadow-[0_0_20px_rgba(255,232,27,0.05)]">
                                <span className="text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-tight text-[#FFE81B] font-black mb-1 drop-shadow-[0_0_15px_rgba(255,232,27,0.3)]">
                                    {stat.value}
                                </span>
                                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-300 uppercase">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                19. WHY BUSINESSES WORK WITH KIAAN
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80">
                <div className="max-w-6xl mx-auto">
                    <Reveal>
                        <div className="mb-10">
                            <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-2">
                                THE KIAAN ADVANTAGE
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white">
                                WHY BUSINESSES WORK WITH KIAAN
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            "ONE TEAM FROM IDEA TO DEPLOYMENT",
                            "FRONTEND + BACKEND + MOBILE + AI",
                            "READY-MADE + CUSTOM DEVELOPMENT OPTIONS",
                            "SOURCE CODE DELIVERY WHERE INCLUDED",
                            "FLEXIBLE ENGAGEMENT MODELS",
                            "GLOBAL PROJECT DELIVERY",
                            "DEDICATED DEVELOPMENT PARTNERSHIPS",
                            "POST-LAUNCH SUPPORT",
                            "TRANSPARENT PROJECT COMMUNICATION",
                        ].map((point, idx) => (
                            <Reveal key={idx} delay={idx * 0.03}>
                                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 hover:border-yellow-500/40 transition-all flex items-center gap-3 shadow-md">
                                    <CheckCircle2 size={18} className="text-[#FFE81B] shrink-0" />
                                    <span className="text-xs font-bold uppercase tracking-wide text-white">
                                        {point}
                                    </span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                20. 2030 VISION (BUILDING A GLOBAL SOFTWARE & AI ECOSYSTEM)
            ========================================================================= */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950/80 via-black to-zinc-950/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <Reveal>
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <span className="text-xs font-mono font-black tracking-[0.35em] uppercase text-[#FFE81B] block mb-3">
                                OUR 2030 VISION
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-6">
                                BUILDING A GLOBAL SOFTWARE & AI ECOSYSTEM.
                            </h2>
                            <div className="space-y-4 text-zinc-200 text-sm md:text-base font-normal leading-relaxed">
                                <p>
                                    By 2030, Kiaan Technology aims to become a globally trusted technology partner for businesses seeking software, SaaS, AI automation, intelligent business systems, dedicated development teams and technology partnerships.
                                </p>
                                <p className="text-zinc-300">
                                    We are building toward a future where businesses do not need multiple disconnected technology vendors. From ready-made software and custom development to dedicated engineering teams and AI agents, our goal is to provide the technology businesses need to build, automate, operate and scale through one ecosystem.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Large Statement Banner */}
                    <Reveal delay={0.2}>
                        <div className="my-10 p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border-2 border-yellow-500/40 text-center shadow-[0_0_50px_rgba(255,232,27,0.15)]">
                            <span className="text-xl sm:text-3xl md:text-4xl font-display uppercase tracking-wider text-white block font-black leading-tight">
                                BUILD. AUTOMATE. OPERATE. SCALE.
                            </span>
                            <span className="text-xs sm:text-base font-mono font-black uppercase tracking-[0.3em] text-[#FFE81B] block mt-3">
                                UNDER ONE TECHNOLOGY ECOSYSTEM.
                            </span>
                        </div>
                    </Reveal>

                    {/* 6 Direction Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {[
                            "READY-TO-USE SOFTWARE",
                            "CUSTOM SOFTWARE & SAAS",
                            "AI-POWERED BUSINESS SYSTEMS",
                            "AI AGENTS & AUTOMATION",
                            "GLOBAL DEVELOPMENT PARTNERSHIPS",
                            "LONG-TERM TECHNOLOGY SUPPORT",
                        ].map((pillar, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-yellow-500/40 text-center flex flex-col items-center justify-center transition-all shadow-md">
                                <span className="text-xs font-mono font-bold uppercase tracking-tight text-white">
                                    {pillar}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                21. DEVELOPMENT PARTNERSHIP CTA
            ========================================================================= */}
            <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800/80 bg-zinc-950/60">
                <div className="max-w-6xl mx-auto text-center">
                    <Reveal>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white mb-4">
                            HAVE THE CLIENTS? WE HAVE THE TECHNOLOGY TEAM.
                        </h2>
                        <p className="text-zinc-200 text-xs sm:text-sm md:text-base font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
                            Kiaan Technology works with software companies, agencies, consultants and businesses looking for reliable development capacity through dedicated teams, offshore development and white-label partnerships.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href="/white-label-partnership">
                                <Button className="h-13 px-7 bg-[#FFE81B] text-black font-black uppercase text-xs tracking-widest hover:bg-white shadow-[0_0_20px_rgba(255,232,27,0.3)] transition-all cursor-pointer">
                                    BECOME A DEVELOPMENT PARTNER
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="h-13 px-7 border-zinc-700 bg-zinc-900 hover:border-yellow-500 text-white font-black uppercase text-xs tracking-widest transition-all cursor-pointer">
                                    HIRE DEVELOPERS
                                </Button>
                            </Link>
                            <Link href="/schedule">
                                <Button variant="outline" className="h-13 px-7 border-zinc-800 bg-zinc-900/80 hover:border-zinc-500 text-zinc-200 hover:text-white font-mono uppercase text-xs tracking-wider transition-all cursor-pointer">
                                    TALK TO OUR TEAM
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>


            {/* =========================================================================
                22. FINAL CTA SECTION & INTERNAL ROUTE LINKS
            ========================================================================= */}
            <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
                <div className="max-w-4xl mx-auto text-center relative z-10 mb-14">
                    <Reveal>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-4">
                            LET&apos;S BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE81B] to-amber-400">WHAT&apos;S NEXT.</span>
                        </h2>
                        <p className="text-zinc-200 text-sm md:text-base font-normal max-w-xl mx-auto mb-8 leading-relaxed">
                            Have a software product, AI automation idea or technology requirement? Let&apos;s discuss how Kiaan Technology can help turn it into a production-ready solution.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href="/start-project">
                                <Button className="h-14 px-8 bg-gradient-to-r from-[#FFE81B] to-yellow-400 text-black font-black uppercase text-xs tracking-[0.2em] shadow-[0_0_35px_rgba(255,232,27,0.35)] hover:brightness-110 transition-all cursor-pointer">
                                    START YOUR PROJECT
                                </Button>
                            </Link>
                            <Link href="/schedule">
                                <Button variant="outline" className="h-14 px-8 border-zinc-700 bg-zinc-900 hover:border-yellow-500 text-white font-black uppercase text-xs tracking-[0.2em] transition-all cursor-pointer">
                                    BOOK A CONSULTATION
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* Internal Route Navigation Strip */}
                <div className="max-w-6xl mx-auto pt-10 border-t border-zinc-900">
                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#FFE81B] block mb-4 text-center sm:text-left">
                        EXPLORE KIAAN TECHNOLOGY
                    </span>
                    <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                        {[
                            { label: 'Software Demos', href: '/demo' },
                            { label: 'Industry Solutions', href: '/solutions' },
                            { label: 'Custom Software', href: '/services' },
                            { label: 'Case Studies', href: '/case-studies' },
                            { label: 'White-Label Partnership', href: '/white-label-partnership' },
                            { label: 'Pricing Plans', href: '/pricing' },
                            { label: 'Schedule Call', href: '/schedule' },
                            { label: 'Contact Us', href: '/contact' },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-yellow-500/60 hover:text-[#FFE81B] transition-all font-semibold"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ Fullscreen Certificate / Award Lightbox Modal ═══ */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
                        onClick={() => setSelectedCertificate(null)}
                    >
                        {/* Backdrop blur */}
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-4xl w-full max-h-[95vh] z-10 flex flex-col my-auto"
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                            {/* Modal Container with Gold Gradient Border */}
                            <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-yellow-500/60 via-amber-400/40 to-yellow-600/60 shadow-[0_0_60px_rgba(255,232,27,0.25)] overflow-hidden">
                                <div className="relative bg-zinc-950 rounded-2xl overflow-hidden flex flex-col max-h-[92vh]">
                                    {/* Modal Header */}
                                    <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900/60">
                                        <div className="flex items-center gap-3 min-w-0 pr-4">
                                            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-[#FFE81B] shrink-0">
                                                <Award size={18} />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-sm sm:text-base font-display uppercase tracking-tight text-white truncate">
                                                        {selectedCertificate.title}
                                                    </h3>
                                                    {selectedCertificate.category && (
                                                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/80 border border-zinc-700 text-[#FFE81B] uppercase font-bold shrink-0">
                                                            {selectedCertificate.category}
                                                        </span>
                                                    )}
                                                </div>
                                                {selectedCertificate.caption && (
                                                    <p className="text-[11px] text-zinc-400 truncate hidden sm:block">
                                                        {selectedCertificate.caption}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Actions: Close */}
                                        <div className="flex items-center shrink-0">
                                            <button
                                                onClick={() => setSelectedCertificate(null)}
                                                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                                                aria-label="Close"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Modal Image Area */}
                                    <div className="relative p-4 sm:p-6 bg-black/80 flex items-center justify-center overflow-auto max-h-[75vh]">
                                        <Image
                                            src={selectedCertificate.image}
                                            alt={selectedCertificate.alt}
                                            width={1200}
                                            height={900}
                                            className="block max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl transition-transform"
                                            priority
                                        />
                                    </div>

                                    {/* Modal Footer */}
                                    {selectedCertificate.caption && (
                                        <div className="px-5 py-2.5 bg-zinc-900/40 border-t border-zinc-800/60 text-center sm:text-left">
                                            <p className="text-xs text-zinc-400 font-light">
                                                {selectedCertificate.caption}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
