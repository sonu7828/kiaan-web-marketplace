"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    ArrowRight, ChevronRight, Zap, Globe, Layers, Cpu, Code, Server, Activity,
    Shield, BarChart, Cloud, Database, Lock, Hexagon, Terminal, Workflow, Command,
    Heart, DollarSign, Car, Building2, Truck, GraduationCap, ShoppingCart, Hotel,
    Bitcoin, Users, Factory, Plane, Dumbbell, Rocket, Landmark
} from 'lucide-react';
import { industries, totalSolutions, totalIndustries } from '@/data/solutions-data';

// --- Reusable Cinematic Reveal ---
const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

// --- Expanded Technical Mock Highlights for SEO & Detail Richness ---
const getMockFeatures = (solName: string) => {
    if (solName.includes("Management") || solName.includes("System") || solName.includes("Suite") || solName.includes("Manager")) {
        return ["Role-Based Access Control (RBAC)", "Real-Time Analytical Reporting", "Automated Workflow Engines"];
    }
    if (solName.includes("Platform") || solName.includes("SaaS") || solName.includes("Boutique") || solName.includes("E-Commerce")) {
        return ["Multi-Tenant Cloud Cluster", "Secure AES-256 API Gateways", "Live Collaboration Sync"];
    }
    return ["Instant Database Indexing", "Responsive Admin Control Panel", "Infinite Horizontal Scaling"];
};

export default function SolutionsPage() {
    const { scrollYProgress } = useScroll();
    const yHeroBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacityHeroBg = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const [activeIndustry, setActiveIndustry] = useState(industries[0].slug);

    return (
        <div className="relative bg-[#020202] min-h-screen text-white font-sans selection:bg-[#FFE81B] selection:text-black overflow-hidden">
            
            {/* --- GLOBAL CINEMATIC BACKGROUND --- */}
            <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
                {/* Core ambient glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FFE81B]/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute top-[30%] left-[60%] w-[30vw] h-[30vw] bg-cyan-900/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            {/* --- 1. HERO SECTION --- */}
            <section className="relative z-10 pt-8 lg:pt-12 pb-2 lg:pb-4 overflow-visible">
                {/* Background mesh & grid for hero */}
                <motion.div style={{ y: yHeroBg, opacity: opacityHeroBg }} className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-b from-[#FFE81B]/10 via-cyan-500/5 to-transparent blur-[120px] rounded-[100%]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
                </motion.div>

                <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
                        
                        {/* Left Column: Typography & CTA */}
                        <div className="lg:col-span-6 z-10 relative">
                            <Reveal>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                                    <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                                    <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-300">Next-Gen Enterprise Cloud</span>
                                </div>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.04em] leading-[1.05] mb-4">
                                    <span className="text-white drop-shadow-2xl">Smart </span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE81B] via-yellow-300 to-amber-500 filter drop-shadow-[0_0_20px_rgba(255,232,27,0.2)]">Solutions</span><br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">For Every Industry</span>
                                </h1>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p className="text-sm md:text-base text-zinc-400 font-light max-w-xl leading-relaxed mb-6">
                                    Empower your enterprise with world-class <strong className="text-zinc-200 font-medium">CRM Software</strong>, <strong className="text-zinc-200 font-medium">ERP Solutions</strong>, and <strong className="text-zinc-200 font-medium">Business Automation</strong>. We architect scalable <strong className="text-zinc-200 font-medium">SaaS Platforms</strong>, <strong className="text-zinc-200 font-medium">Healthcare Software</strong>, <strong className="text-zinc-200 font-medium">Car Rental CRM</strong>, <strong className="text-zinc-200 font-medium">Loan Management Software</strong>, <strong className="text-zinc-200 font-medium">Real Estate ERP</strong>, <strong className="text-zinc-200 font-medium">Logistics Management</strong>, and <strong className="text-zinc-200 font-medium">AI Automation</strong> systems for the modern web.
                                </p>
                            </Reveal>
                            <Reveal delay={0.3}>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Link href="/schedule" className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black font-semibold rounded-lg overflow-hidden transition-transform active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,232,27,0.3)]">
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FFE81B] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <span className="relative flex items-center gap-2 text-sm tracking-wide group-hover:text-black transition-colors">
                                            Start Building <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                    <Link href="#architecture" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm tracking-wide shadow-lg">
                                        Explore Platforms
                                    </Link>
                                </div>
                            </Reveal>
                        </div>

                        {/* Right Column: Premium Industry Constellation Visual */}
                        <div className="lg:col-span-6 relative z-10 hidden lg:block h-[450px] w-full perspective-[1500px]">
                            {/* Ambient background glow - matched to brand yellow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFE81B]/5 blur-[140px] rounded-full" />
                            
                            <Reveal delay={0.4} className="relative w-full h-full">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    
                                    {/* 3D Rotating Grid Base */}
                                    <motion.div 
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-[800px] h-[800px] border border-white/[0.03] rounded-full border-dashed opacity-50"
                                        style={{ rotateX: '70deg' }}
                                    />

                                    {/* Industry Nodes Floating in 3D Space */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        
                                        {[
                                            { icon: Activity, label: "Healthcare", color: "text-rose-500", glow: "shadow-[0_0_30px_rgba(244,63,94,0.3)]", delay: 0, x: -200, y: -40, scale: 1.2 },
                                            { icon: Landmark, label: "Fintech", color: "text-emerald-500", glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]", delay: 0.2, x: 200, y: -40, scale: 1.1 },
                                            { icon: Building2, label: "Real Estate", color: "text-cyan-500", glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]", delay: 0.4, x: -160, y: 180, scale: 1.15 },
                                            { icon: ShoppingCart, label: "Retail", color: "text-amber-500", glow: "shadow-[0_0_30px_rgba(245,158,11,0.3)]", delay: 0.6, x: 160, y: 180, scale: 1.05 },
                                            { icon: GraduationCap, label: "EduTech", color: "text-indigo-500", glow: "shadow-[0_0_30_rgba(99,102,241,0.3)]", delay: 0.8, x: 0, y: -200, scale: 1.25 },
                                            { icon: Truck, label: "Logistics", color: "text-orange-500", glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]", delay: 1.0, x: 0, y: 200, scale: 1.1 },
                                            { icon: Database, label: "Core AI", color: "text-[#FFE81B]", glow: "shadow-[0_0_40px_rgba(255,232,27,0.4)]", delay: 1.2, x: 0, y: 0, scale: 1.4 },
                                            { icon: Factory, label: "Manufacturing", color: "text-purple-500", glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]", delay: 1.4, x: -280, y: 70, scale: 1.1 },
                                            { icon: Hotel, label: "Hospitality", color: "text-yellow-600", glow: "shadow-[0_0_30px_rgba(202,138,4,0.3)]", delay: 1.6, x: 280, y: 70, scale: 1.05 },
                                            { icon: Plane, label: "Aviation", color: "text-blue-400", glow: "shadow-[0_0_30px_rgba(96,165,250,0.3)]", delay: 1.8, x: -240, y: -160, scale: 1.1 },
                                            { icon: Car, label: "Automotive", color: "text-zinc-400", glow: "shadow-[0_0_30px_rgba(161,161,170,0.3)]", delay: 2.0, x: 240, y: -160, scale: 1.05 },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ 
                                                    opacity: 1, 
                                                    scale: item.scale,
                                                    x: item.x,
                                                    y: item.y,
                                                }}
                                                transition={{ 
                                                    type: "spring", 
                                                    stiffness: 100, 
                                                    damping: 20, 
                                                    delay: item.delay 
                                                }}
                                                className="absolute"
                                            >
                                                <motion.div
                                                    animate={{ 
                                                        y: [0, -15, 0],
                                                        rotate: [0, 5, 0]
                                                    }}
                                                    transition={{ 
                                                        duration: 4 + i, 
                                                        repeat: Infinity, 
                                                        ease: "easeInOut",
                                                        delay: i * 0.3
                                                    }}
                                                    className={`relative group cursor-pointer flex flex-col items-center gap-3`}
                                                >
                                                    {/* Outer Ring Glow */}
                                                    <div className={`absolute inset-[-12px] rounded-full bg-white/[0.02] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                                    
                                                    {/* Main Icon Container */}
                                                    <div className={`w-12 h-12 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center ${item.glow} group-hover:border-white/30 transition-all duration-300 relative z-10`}>
                                                        <item.icon className={`${item.color} w-6 h-6 group-hover:scale-110 transition-transform`} />
                                                    </div>

                                                    {/* Permanent Label */}
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors">
                                                            {item.label}
                                                        </span>
                                                        <motion.div 
                                                            animate={{ width: ['0%', '100%', '0%'] }}
                                                            transition={{ duration: 3, repeat: Infinity, delay: item.delay }}
                                                            className={`h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mt-1`}
                                                        />
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Central Data Pulse */}
                                    <motion.div 
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="absolute w-[400px] h-[400px] bg-[#FFE81B]/10 rounded-full blur-[80px] pointer-events-none"
                                    />
                                </div>
                            </Reveal>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 2. INTEGRATED INDUSTRY ECOSYSTEM (2-Row Selector & Live Showcase) --- */}
            <section id="architecture" className="relative z-10 pt-4 pb-8 lg:pb-10 border-y border-white/5 bg-[#010101]">
                <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                    
                    {/* Compact, On-Point Title */}
                    <div className="text-center mb-5">
                        <Reveal>
                            <h2 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-white uppercase tracking-[0.15em]">
                                Explore Solutions by <span className="text-[#FFE81B]">Industry</span>
                            </h2>
                        </Reveal>
                    </div>

                    {/* Premium 2-Row Horizontal Industry Grid Selector */}
                    <div className="mb-6">
                        <Reveal>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                                {industries.map((ind) => (
                                    <button
                                        key={ind.slug}
                                        onClick={() => setActiveIndustry(ind.slug)}
                                        style={{ 
                                            boxShadow: activeIndustry === ind.slug ? `0 0 30px ${ind.glow}` : 'none' 
                                        }}
                                        className={`group px-3 py-3 rounded-xl transition-all duration-500 flex flex-col items-center justify-center gap-2 border text-center relative overflow-hidden backdrop-blur-md min-h-[64px] ${
                                            activeIndustry === ind.slug 
                                                ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.03] text-white border-white/25 scale-[1.02] z-10' 
                                                : 'bg-gradient-to-b from-white/[0.02] to-white/[0.005] text-zinc-400 border-white/10 hover:text-white hover:border-white/20 hover:from-white/[0.04]'
                                        }`}
                                    >
                                        {/* Microscopic module counter on top-right */}
                                        <span className="absolute top-1.5 right-2 text-[9px] font-mono font-bold tracking-wider text-zinc-500 opacity-40 group-hover:opacity-80 transition-opacity">
                                            {ind.solutions.length.toString().padStart(2, '0')}
                                        </span>

                                        {/* Bottom active dynamic gradient indicator */}
                                        {activeIndustry === ind.slug && (
                                            <motion.div 
                                                layoutId="activeIndicator"
                                                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${ind.gradient}`}
                                            />
                                        )}
                                        
                                        {/* Focused, clean text styling */}
                                        <span className={`font-semibold text-xs tracking-wider uppercase leading-snug px-2 w-full transition-colors duration-300 ${activeIndustry === ind.slug ? ind.color : 'text-zinc-100 group-hover:text-white'}`}>
                                            {ind.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    {/* Dynamic Full-Width Content Display */}
                    <div className="relative min-h-[300px] w-full">
                        <AnimatePresence mode="wait">
                            {industries.map((ind) => ind.slug === activeIndustry && (
                                <motion.div
                                    key={ind.slug}
                                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full"
                                >
                                    {/* Industry Header Card */}
                                    <div className="relative p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md mb-4 overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${ind.gradient} opacity-[0.04] blur-[80px] rounded-full`} />
                                        
                                        <div className="max-w-2xl">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${ind.gradient} shadow-[0_0_30px_${ind.glow}] border border-white/10`}>
                                                    <ind.icon size={22} className="text-white" />
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight text-white">
                                                    {ind.name}
                                                </h3>
                                            </div>
                                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-0">
                                                {ind.desc}
                                            </p>
                                        </div>

                                        {/* Dynamic Right Side: Specialized Industry Tags */}
                                        <div className="flex-shrink-0 max-w-[450px] w-full md:w-[450px] flex flex-wrap gap-1.5 md:justify-end">
                                            {ind.seoKeywords.map((keyword, kIdx) => (
                                                <span 
                                                    key={kIdx} 
                                                    className="text-[8px] sm:text-[9px] font-sans font-bold tracking-wider px-2 py-1 rounded-md border border-white/10 bg-white/[0.01] text-zinc-100 hover:text-white hover:border-white/30 transition-all duration-300 uppercase shadow-sm select-none"
                                                >
                                                    {keyword}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 3-Column Grid of Software / Modules */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {ind.solutions.map((sol, idx) => (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                key={sol.id} 
                                                className="group relative p-5 rounded-xl border border-white/15 bg-zinc-950/40 backdrop-blur-md hover:border-white/30 hover:bg-white/[0.03] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[180px]"
                                            >
                                                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${ind.gradient} opacity-0 group-hover:opacity-[0.08] blur-[50px] transition-opacity duration-700 rounded-full`} />
                                                
                                                <div>
                                                    <h4 className="text-white text-base font-semibold mb-1.5 tracking-wide flex items-start gap-2">
                                                        <span className="text-xs font-mono text-zinc-400 mt-1">{(idx+1).toString().padStart(2,'0')}</span>
                                                        {sol.name}
                                                    </h4>
                                                    <p className="text-xs text-zinc-300 leading-relaxed pl-6 font-normal group-hover:text-white transition-colors mb-2">{sol.desc}</p>
                                                    
                                                    {/* Expanded Technical Highlights */}
                                                    <div className="pl-6 space-y-1 mb-2">
                                                        {getMockFeatures(sol.name).map((feat, fIdx) => (
                                                            <div key={fIdx} className="flex items-center gap-2 text-[10px] text-zinc-200 font-medium font-sans">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE81B] shadow-[0_0_6px_#FFE81B]" />
                                                                <span>{feat}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                
                                                <div className="mt-2 pl-6 flex items-center gap-4 relative z-10">
                                                    {sol.link ? (
                                                        <a 
                                                            href={sol.link} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer" 
                                                            className={`text-xs font-semibold ${ind.color} hover:text-white transition-colors flex items-center gap-1 group/link`}
                                                        >
                                                            Explore Platform 
                                                            <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                                        </a>
                                                    ) : (
                                                        <Link href={`/solutions/${ind.slug}/${sol.slug}`} className={`text-xs font-semibold ${ind.color} hover:text-white transition-colors flex items-center gap-1 group/link`}>
                                                            Explore Platform 
                                                            <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                                        </Link>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* --- 4. ENTERPRISE CORE FEATURES SHOWCASE --- */}
            <section className="relative z-10 py-8 lg:py-10 border-y border-white/5 bg-[#010101]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,232,27,0.03)_0%,transparent_70%)] pointer-events-none" />
                <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                    <div className="text-center mb-6">
                        <Reveal>
                            <h2 className="text-2xl md:text-4xl font-display font-medium tracking-tight mb-3">
                                Engineered for growth. <span className="text-zinc-500">Premium Integrations.</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-zinc-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
                                Every industry ecosystem comes pre-equipped with these robust enterprise-grade foundations to automate your business operations.
                            </p>
                        </Reveal>
                    </div>
 
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { title: 'Automated WhatsApp & SMS', icon: Zap, desc: 'Send automated booking alerts, invoice copies, and custom notification campaigns.', glow: 'rgba(34,197,94,0.1)' },
                            { title: 'Zero-Trust Role Security', icon: Lock, desc: 'Advanced role-based access control (RBAC) to restrict and secure sensitive records and accounts.', glow: 'rgba(239,68,68,0.1)' },
                            { title: 'Live Invoicing & Payments', icon: DollarSign, desc: 'Collect online payments instantly via Razorpay, Stripe, and automated UPI QR gateways.', glow: 'rgba(59,130,246,0.1)' },
                            { title: 'Real-Time Cloud Sync', icon: Cloud, desc: 'Ultra-high availability cloud replication keeping desktop, tablet, and mobile apps perfectly in sync.', glow: 'rgba(168,85,247,0.1)' },
                            { title: 'Analytics & Admin Insights', icon: BarChart, desc: 'Track sales patterns, client bookings, and worker performance with detailed analytics.', glow: 'rgba(234,179,8,0.1)' },
                            { title: 'Excel & PDF Export Engine', icon: Layers, desc: 'One-click financial and operation reports formatted for instant download and auditing.', glow: 'rgba(244,63,94,0.1)' },
                        ].map((feature, idx) => (
                            <Reveal key={idx} delay={idx * 0.05}>
                                <div className="group relative p-5 rounded-xl border border-white/15 bg-zinc-950/40 hover:bg-white/[0.03] hover:border-white/30 transition-all duration-500 overflow-hidden h-full">
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${feature.glow}, transparent 70%)` }} />
                                    <feature.icon size={24} className="text-zinc-400 group-hover:text-white mb-3 transition-colors relative z-10" />
                                    <h4 className="text-base font-bold text-white tracking-wide mb-2 relative z-10">{feature.title}</h4>
                                    <p className="text-xs text-zinc-300 leading-relaxed font-normal relative z-10">{feature.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
 
            {/* --- 5. BUSINESS STACK INTEGRATIONS --- */}
            <section className="relative z-10 py-8 lg:py-10 overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="lg:w-1/2">
                            <Reveal>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
                                    <Terminal size={14} className="text-zinc-400" />
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-300">Unified Workflow</span>
                                </div>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h2 className="text-2xl md:text-4xl font-display font-medium tracking-tight mb-4 leading-tight">
                                    Connects seamlessly with<br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">your daily business tools.</span>
                                </h2>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 max-w-lg font-normal">
                                    Our platform integrations enable deep sync with secure payment channels, mapping services, dynamic notifications, and robust cloud engines.
                                </p>
                            </Reveal>
                        </div>
                        
                        <div className="lg:w-1/2 w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                                { n: 'WhatsApp API', c: 'text-green-500' },
                                { n: 'Razorpay', c: 'text-blue-500' },
                                { n: 'Stripe', c: 'text-indigo-400' },
                                { n: 'Google Maps', c: 'text-red-500' },
                                { n: 'AWS Cloud', c: 'text-orange-400' },
                                { n: 'Firebase', c: 'text-yellow-500' },
                                { n: 'EmailJS', c: 'text-cyan-400' },
                                { n: 'SMS Gateways', c: 'text-pink-500' },
                            ].map((tech, i) => (
                                <Reveal key={tech.n} delay={i * 0.05}>
                                    <div className="aspect-square rounded-2xl border border-white/15 bg-zinc-950/40 flex flex-col items-center justify-center gap-2 hover:bg-white/[0.04] hover:border-white/30 transition-all duration-300 group cursor-default">
                                        <div className={`text-2xl md:text-3xl font-display font-bold ${tech.c} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                                            {tech.n.slice(0,1)}
                                        </div>
                                        <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-300 group-hover:text-white transition-colors text-center px-2">{tech.n}</span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- 6. MASSIVE CTA FOOTER --- */}
            <section className="relative z-10 pt-8 pb-12 lg:pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFE81B]/10 via-black to-black pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[350px] bg-[#FFE81B]/10 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative z-10">
                    <div className="border border-white/10 bg-zinc-950/60 backdrop-blur-md p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFE81B]/10 blur-[80px] rounded-full pointer-events-none" />
                        
                        <Reveal>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight mb-4 leading-[1.0]">
                                Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE81B] to-amber-500">future</span> of your industry.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="text-zinc-300 text-sm md:text-lg max-w-3xl mx-auto mb-8 font-light leading-relaxed">
                                Join the enterprises transforming their operations with our world-class software ecosystems. Let's discuss your architecture, automate redundant manual workflows, and scale your digital platform.
                            </p>
                        </Reveal>

                        {/* Enterprise Trust Badges */}
                        <Reveal delay={0.15}>
                            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                                {[
                                    'Zero Vendor Lock-in',
                                    '99.99% Cloud Uptime',
                                    'Dedicated Solution Architect',
                                    'ISO 27001 & SOC-2 Compliance',
                                    'Instant Scalability'
                                ].map((badge, bIdx) => (
                                    <span key={bIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-wider text-zinc-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/schedule" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-transform active:scale-95 shadow-[0_0_30px_rgba(255,232,27,0.25)] hover:bg-[#FFE81B] transition-colors">
                                    <span className="relative flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
                                        Schedule Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                                <Link href="/demo" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-black border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-sm uppercase tracking-wider">
                                    Explore Live Demos
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

        </div>
    );
}
