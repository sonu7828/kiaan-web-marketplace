"use client";

import { Button } from '@/components/Button'
import Link from 'next/link'
import { Monitor, ShieldCheck, Server, Activity, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/Reveal'
import React, { useEffect, useCallback } from 'react';
import { saasCategories, generateSlug } from '@/data/navigation';

const getCategoryDesc = (title: string) => {
    if (title === "Business & Company") return "Empower your organization with our Enterprise Software Systems. As a premier SaaS Development Company India, we build scalable platforms for HR and team management.";
    if (title === "Accounting & Finance") return "Secure and compliant financial Custom Software Solutions. Automate billing, invoicing, and ledgers with high-performance engineering.";
    if (title === "Sales & Marketing") return "Drive revenue with AI-powered marketing tools. Engineered by a top CRM Software Development Company for maximum lead conversion.";
    if (title === "Customer Support") return "Transform client experiences with intelligent ticketing. Scalable Custom Software Solutions for modern support teams.";
    if (title === "Retail & Inventory") return "Omnichannel retail and stock management systems. We are a leading ERP Software Development Company delivering high-volume POS architectures.";
    if (title === "Healthcare & Clinic") return "HIPAA-compliant medical platforms and telemedicine SaaS. Robust Enterprise Software Systems for modern clinics and hospitals.";
    if (title === "Real Estate") return "Next-generation property management and tenant portals. Custom SaaS Development Company India delivering end-to-end real estate software.";
    return `High-performance Custom Software Solutions for ${title}. Built by a leading SaaS Development Company India for global scale.`;
}

export default function SaaSProducts() {
    useEffect(() => {
        // Restore scroll position when returning from a product page
        const savedScroll = sessionStorage.getItem('productsScrollPosition');
        if (savedScroll) {
            // Small timeout ensures the DOM has painted before scrolling
            setTimeout(() => {
                window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
            }, 10);
            sessionStorage.removeItem('productsScrollPosition');
        }
    }, []);

    const handleProductClick = useCallback(() => {
        sessionStorage.setItem('productsScrollPosition', window.scrollY.toString());
    }, []);

    return (
        <div className="bg-black text-white min-h-screen selection:bg-yellow-500 selection:text-black overflow-x-hidden">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full animated-grid opacity-[0.07]" />
                <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-yellow-500 opacity-[0.03] blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-yellow-500 opacity-[0.03] blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Step 1: Redesigned DEMO ARENA Hero Section */}
            <section className="w-full bg-black relative border-b border-white/5 pt-10 pb-12 md:pt-14 md:pb-20 flex flex-col items-center justify-center text-center">
                {/* Subtle premium gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 to-black z-0"></div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center"
                    >
                        <Reveal overflow="visible">
                            <div className="inline-flex items-center gap-3 bg-zinc-900 text-yellow-500 text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2.5 mb-8 rounded-full border border-white/10 cyber-glow-yellow">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                                Product Showcase
                            </div>
                        </Reveal>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
                            EXPLORE THE <br />
                            <span className="text-yellow-500 shadow-yellow-500/20 drop-shadow-2xl">PRODUCT DEMO ARENA</span>
                        </h1>

                        <p className="text-zinc-100 text-lg md:text-xl font-light max-w-3xl mx-auto mb-10 leading-relaxed italic border-l-2 border-yellow-500/50 pl-8">
                            Experience live enterprise SaaS solutions built by a leading <strong className="text-white font-bold">Custom Software Development Company in India</strong>. Zero-downtime, bank-grade secure environments.
                        </p>

                        <Link href="/demo">
                            <Button className="bg-yellow-500 text-black hover:bg-white font-black tracking-[0.2em] uppercase px-14 py-8 text-sm md:text-base rounded-none border-none transition-all duration-500 shadow-[0_0_40px_rgba(234,179,8,0.2)] hover:shadow-[0_0_60px_rgba(234,179,8,0.4)] mb-12 flex items-center gap-4 group">
                                ENTER DEMO ARENA
                                <Monitor size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </Link>

                        {/* Trust Indicators */}
                        <div className="flex overflow-x-auto md:flex-wrap justify-center gap-8 md:gap-14 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-300 scrollbar-hide py-4 border-y border-white/5">
                            <div className="flex items-center gap-3 group cursor-default">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-bubble" />
                                <span className="group-hover:text-white transition-colors">Live Production Environment</span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-default">
                                <ShieldCheck size={16} className="text-zinc-300 group-hover:text-yellow-500 transition-colors" />
                                <span className="group-hover:text-white transition-colors">Bank-Grade Security</span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-default">
                                <Server size={16} className="text-zinc-300 group-hover:text-yellow-500 transition-colors" />
                                <span className="group-hover:text-white transition-colors">Enterprise Infrastructure</span>
                            </div>
                            <div className="flex items-center gap-3 group cursor-default">
                                <Activity size={16} className="text-zinc-300 group-hover:text-yellow-500 transition-colors" />
                                <span className="group-hover:text-white transition-colors">99.99% Guaranteed Uptime</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Step 2: Structured Product Sections Aligned with Dropdown Hierarchy */}
            <div className="pt-16 pb-24">
                {saasCategories.map((category, idx) => {
                    return (
                        <section key={idx} className="container mx-auto px-6 mb-28 last:mb-12 relative z-10">
                            {/* Industry Header & SEO Description */}
                            <div className="mb-12 max-w-4xl">
                                <Reveal overflow="visible">
                                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
                                        {category.title}
                                    </h2>
                                    <p className="text-zinc-100 text-base md:text-lg leading-relaxed font-light italic border-l-2 border-yellow-500 pl-8 w-full md:w-3/4 bg-white/[0.04] py-4 rounded-r-lg">
                                        {getCategoryDesc(category.title)}
                                    </p>
                                </Reveal>
                            </div>

                            {/* Standard Subcategory Module Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {category.items.map((item, itemIdx) => (
                                    <Reveal key={itemIdx} delay={itemIdx * 0.05} width="100%" overflow="visible">
                                        <Link
                                            href={`/products/${generateSlug(item)}`}
                                            onClick={handleProductClick}
                                            className="group relative bg-zinc-900/40 border border-white/5 p-8 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 hover:bg-zinc-800/40 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.15)] flex flex-col justify-between overflow-hidden min-h-[180px]"
                                        >
                                            {/* Decorative Background Icon */}
                                            <div className="absolute -top-4 -right-4 p-4 opacity-[0.02] group-hover:opacity-10 transition-all duration-700 group-hover:scale-125 group-hover:rotate-6">
                                                <Server size={100} />
                                            </div>

                                            <div className="relative z-10">
                                                <div className="flex items-start gap-5 mb-6">
                                                    <div className="w-12 h-12 rounded-none bg-black border border-white/10 flex flex-shrink-0 items-center justify-center group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-500 shadow-2xl group-hover:rotate-3">
                                                        <Activity size={20} className="text-yellow-500 group-hover:text-black transition-colors" />
                                                    </div>
                                                    <h4 className="text-white text-lg font-display uppercase tracking-wider group-hover:text-yellow-500 transition-colors leading-none pt-2 pr-6">{item}</h4>
                                                </div>
                                            </div>

                                            {/* Minimal Explore link */}
                                            <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-white/10 group-hover:border-yellow-500/20 transition-colors">
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-200 group-hover:text-yellow-500 transition-colors">
                                                    Deploy Module
                                                </span>
                                                <span className="text-zinc-200 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all duration-500">
                                                    <ArrowRight size={18} />
                                                </span>
                                            </div>

                                            {/* Accent Light */}
                                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/0 to-transparent group-hover:via-yellow-500/50 transition-all duration-500"></div>
                                        </Link>
                                    </Reveal>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    )
}

