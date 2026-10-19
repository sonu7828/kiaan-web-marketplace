'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Sparkles, ChevronDown, ChevronUp, Code2, Briefcase, Radio } from 'lucide-react'

// Marquee Component
const Marquee = () => (
    <div className="overflow-hidden bg-[#FFE81B] py-3.5 border-y-2 border-black select-none">
        <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
                <span key={i} className="text-2xl md:text-4xl font-display font-black uppercase text-black mx-6 tracking-tight flex items-center gap-4">
                    LET'S WORK TOGETHER <span className="text-lg">✦</span> START YOUR PROJECT <span className="text-lg">✦</span>
                </span>
            ))}
        </div>
    </div>
)

export const Footer = () => {
    const [isToolsExpanded, setIsToolsExpanded] = useState(false)

    return (
        <footer className="relative bg-[#080808] text-white overflow-hidden border-t border-zinc-900">
            {/* Top subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FFE81B]/40 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[20px] bg-[#FFE81B]/10 blur-xl pointer-events-none"></div>

            <Marquee />

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-14 pb-10 max-w-[1400px]">
                
                {/* 1. Main 5-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-12">
                    
                    {/* Brand Column (Span 2) */}
                    <div className="lg:col-span-2 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-block group mb-4">
                                <h3 className="text-3xl lg:text-4xl font-display uppercase text-white tracking-tighter font-black">
                                    KIAAN <span className="text-[#FFE81B] group-hover:drop-shadow-[0_0_20px_rgba(255,232,27,0.5)] transition-all">TECHNOLOGY</span>
                                </h3>
                            </Link>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md mb-6 font-light">
                                Engineering the future of <span className="text-white font-medium">Enterprise Intelligence</span>. We architect scalable, high-performance digital ecosystems that empower global market leaders to dominate their industry.
                            </p>
                            
                            {/* Live Operations Indicator */}
                            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 font-medium mb-6 backdrop-blur-md shadow-inner">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>24/7 Production Support • Global Delivery</span>
                            </div>
                        </div>

                        {/* Social Links & Quick CTA */}
                        <div className="flex items-center gap-3 pt-2">
                            {[
                                { 
                                    label: 'Instagram', 
                                    href: 'https://www.instagram.com/kiaan_technology4/',
                                    icon: <Instagram className="w-4 h-4" />
                                },
                                { 
                                    label: 'LinkedIn', 
                                    href: 'https://www.linkedin.com/company/89547261/',
                                    icon: <Linkedin className="w-4 h-4" />
                                }
                            ].map(({ label, href, icon }, i) => (
                                <Link key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${label}`}>
                                    <div className="w-10 h-10 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#FFE81B] hover:border-[#FFE81B]/50 hover:bg-zinc-800/80 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
                                        {icon}
                                    </div>
                                </Link>
                            ))}
                            <Link 
                                href="/start-project" 
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFE81B]/10 border border-[#FFE81B]/30 hover:border-[#FFE81B] text-[#FFE81B] hover:bg-[#FFE81B] hover:text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(255,232,27,0.1)]"
                            >
                                <Sparkles size={13} />
                                Start Project
                            </Link>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#FFE81B] mb-5 border-b border-[#FFE81B]/20 pb-2 w-fit">
                            Services
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { name: 'Custom Software', href: '/services/custom-software-development' },
                                { name: 'SaaS Development', href: '/services/saas-development' },
                                { name: 'AI & Automation', href: '/services/ai-automation' },
                                { name: 'ERP & CRM Solutions', href: '/services/erp-crm-solutions' },
                                { name: 'Web Development', href: '/services/web-development' },
                                { name: 'Mobile Applications', href: '/services/mobile-app-development' },
                                { name: 'UI/UX Product Design', href: '/solutions/ui-ux' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xs md:text-sm text-zinc-400 hover:text-white transition-colors flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-[#FFE81B] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries Column */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#FFE81B] mb-5 border-b border-[#FFE81B]/20 pb-2 w-fit">
                            Industries
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { name: 'Healthcare & Telehealth', href: '/industries/healthcare-software' },
                                { name: 'Fintech & Banking', href: '/industries/fintech-software' },
                                { name: 'Retail & POS Tech', href: '/industries/retail-technology' },
                                { name: 'Real Estate SaaS', href: '/solutions/real-estate' },
                                { name: 'Logistics & Fleet ERP', href: '/solutions/logistics' },
                                { name: 'Hospitality Software', href: '/solutions/hospitality' },
                                { name: 'EdTech & School ERP', href: '/solutions/education' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xs md:text-sm text-zinc-400 hover:text-white transition-colors flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-[#FFE81B] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#FFE81B] mb-5 border-b border-[#FFE81B]/20 pb-2 w-fit">
                            Company
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Live Demo Arena', href: '/demo' },
                                { name: 'Case Studies', href: '/case-studies' },
                                { name: 'Training & Internship', href: '/internship' },
                                { name: 'Engineering Blog', href: '/blog' },
                                { name: 'Client Referral Program', href: '/referral' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-xs md:text-sm text-zinc-400 hover:text-white transition-colors flex items-center group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-[#FFE81B] transition-all duration-300 mr-0 group-hover:mr-2"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#FFE81B] mb-5 border-b border-[#FFE81B]/20 pb-2 w-fit">
                            Contact
                        </h4>
                        <ul className="space-y-3.5">
                            <li className="flex items-start gap-3 text-xs md:text-sm text-zinc-400 group">
                                <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:text-[#FFE81B] group-hover:border-[#FFE81B]/50 transition-all shrink-0">
                                    <Mail size={13} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Email</span>
                                    <a href="mailto:info@kiaantechnology.com" className="hover:text-white text-xs transition-colors break-all">
                                        info@kiaantechnology.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-xs md:text-sm text-zinc-400 group">
                                <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:text-[#FFE81B] group-hover:border-[#FFE81B]/50 transition-all shrink-0">
                                    <Phone size={13} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Call / WhatsApp</span>
                                    <a href="tel:+919752100980" className="hover:text-white text-xs transition-colors">
                                        +91 97521 00980
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-xs md:text-sm text-zinc-400 group">
                                <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:text-[#FFE81B] group-hover:border-[#FFE81B]/50 transition-all shrink-0">
                                    <MapPin size={13} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Location</span>
                                    <span className="text-zinc-300 text-xs">Indore, MP, India</span>
                                </div>
                            </li>
                            <li className="pt-1">
                                <Link 
                                    href="/schedule" 
                                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 text-xs font-semibold text-zinc-300 hover:text-white transition-all duration-300"
                                >
                                    Book 1-on-1 Call <ArrowRight size={12} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2. Expandable "Resources, Tools & Ecosystem Directory" */}
                <div className="mb-10 rounded-xl border border-zinc-800/80 bg-zinc-950/60 overflow-hidden backdrop-blur-md">
                    <button
                        onClick={() => setIsToolsExpanded(!isToolsExpanded)}
                        className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-zinc-900/50 transition-colors text-left group"
                        aria-expanded={isToolsExpanded}
                    >
                        <div className="flex items-center gap-3">
                            <span className="p-1.5 rounded-md bg-[#FFE81B]/10 text-[#FFE81B] border border-[#FFE81B]/20">
                                <Sparkles size={14} />
                            </span>
                            <span className="text-xs md:text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">
                                Explore Resources, Developer Tools & Growth Assets
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                                25 Direct Hubs
                            </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-[#FFE81B] font-semibold">
                            <span>{isToolsExpanded ? 'Hide Directory' : 'View All'}</span>
                            {isToolsExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                        </div>
                    </button>

                    {isToolsExpanded && (
                        <div className="p-6 border-t border-zinc-900/80 bg-black/40 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeIn">
                            
                            {/* Sub-Category A: Developer & Analytics Utilities */}
                            <div>
                                <h5 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-300 mb-3.5 pb-1.5 border-b border-zinc-800">
                                    <Code2 size={13} className="text-[#FFE81B]" /> Developer & Analytics Tools
                                </h5>
                                <ul className="grid grid-cols-1 gap-2">
                                    {[
                                        { name: 'Analytics Dashboard', href: '/analytics-dashboard' },
                                        { name: 'Analytics Debugger', href: '/analytics-debugger' },
                                        { name: 'Heatmaps Debugger', href: '/heatmaps-debugger' },
                                        { name: 'UTM Debugger', href: '/utm-debugger' },
                                        { name: 'SEO Keyword Tracker', href: '/seo-keyword-tracker' },
                                        { name: 'Backlink Monitor', href: '/backlink-monitor' },
                                        { name: 'Competitor Monitor', href: '/competitor-monitor' },
                                        { name: 'Lead Source Reports', href: '/lead-source-reports' }
                                    ].map((tool) => (
                                        <li key={tool.name}>
                                            <Link href={tool.href} className="text-xs text-zinc-400 hover:text-[#FFE81B] transition-colors flex items-center gap-1.5 py-0.5 group/link">
                                                <span className="text-zinc-600 group-hover/link:text-[#FFE81B] text-[10px]">›</span>
                                                {tool.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Sub-Category B: Business, Sales & Partnership Hub */}
                            <div>
                                <h5 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-300 mb-3.5 pb-1.5 border-b border-zinc-800">
                                    <Briefcase size={13} className="text-[#FFE81B]" /> Sales & Partnership Hub
                                </h5>
                                <ul className="grid grid-cols-1 gap-2">
                                    {[
                                        { name: 'Partner Program', href: '/partner-program' },
                                        { name: 'White-Label Partnership', href: '/white-label-partnership' },
                                        { name: 'Affiliate Program', href: '/affiliate-program' },
                                        { name: 'HubSpot Integration', href: '/hubspot-integration' },
                                        { name: 'Zapier Integration', href: '/zapier-integration' },
                                        { name: 'Proposal Template', href: '/proposal-template' },
                                        { name: 'Sales Scripts & Playbooks', href: '/sales-scripts' },
                                        { name: 'Ideal Customer Profile (ICP)', href: '/icp-document' },
                                        { name: 'Pricing & Tiers', href: '/pricing' }
                                    ].map((tool) => (
                                        <li key={tool.name}>
                                            <Link href={tool.href} className="text-xs text-zinc-400 hover:text-[#FFE81B] transition-colors flex items-center gap-1.5 py-0.5 group/link">
                                                <span className="text-zinc-600 group-hover/link:text-[#FFE81B] text-[10px]">›</span>
                                                {tool.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Sub-Category C: Media, Culture & Assets */}
                            <div>
                                <h5 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-300 mb-3.5 pb-1.5 border-b border-zinc-800">
                                    <Radio size={13} className="text-[#FFE81B]" /> Media, Spotlight & Assets
                                </h5>
                                <ul className="grid grid-cols-1 gap-2">
                                    {[
                                        { name: '📰 Press Kit & Media', href: '/press' },
                                        { name: 'Video Testimonials', href: '/video-testimonials' },
                                        { name: 'Founder Intro & Vision', href: '/founder-intro' },
                                        { name: 'Day in the Life Series', href: '/day-in-the-life' },
                                        { name: '🎨 Brand Style Guide', href: '/brand-style-guide' },
                                        { name: '✉️ Email Signatures', href: '/email-signatures' },
                                        { name: 'Industry Events', href: '/industry-events' },
                                        { name: 'Networking Organizations', href: '/networking-organizations' }
                                    ].map((tool) => (
                                        <li key={tool.name}>
                                            <Link href={tool.href} className="text-xs text-zinc-400 hover:text-[#FFE81B] transition-colors flex items-center gap-1.5 py-0.5 group/link">
                                                <span className="text-zinc-600 group-hover/link:text-[#FFE81B] text-[10px]">›</span>
                                                {tool.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* 4. Bottom Legal & Copyright Bar */}
                <div className="mt-6 pt-6 border-t border-zinc-900/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <div className="order-2 md:order-1 tracking-tight text-center md:text-left">
                        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> <span className="text-zinc-300 font-bold uppercase tracking-wider">KIAAN TECHNOLOGY PRIVATE LIMITED</span>. All rights reserved.
                    </div>
                    <div className="flex flex-col gap-2 order-1 md:order-2 text-xs md:items-end w-full md:w-auto">
                        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3.5 gap-y-1.5">
                            <Link href="/privacy" prefetch={false} className="text-zinc-400 hover:text-[#FFE81B] transition-colors">Privacy Policy</Link>
                            <span className="text-zinc-700">|</span>
                            <Link href="/terms" prefetch={false} className="text-zinc-400 hover:text-[#FFE81B] transition-colors">Terms of Service</Link>
                            <span className="text-zinc-700">|</span>
                            <Link href="/refund-policy" prefetch={false} className="text-zinc-400 hover:text-[#FFE81B] transition-colors">Refund Policy</Link>
                            <span className="text-zinc-700">|</span>
                            <Link href="/cancellation-policy" prefetch={false} className="text-zinc-400 hover:text-[#FFE81B] transition-colors">Cancellation Policy</Link>
                            <span className="text-zinc-700">|</span>
                            <Link href="/disclaimer" prefetch={false} className="text-zinc-400 hover:text-[#FFE81B] transition-colors">Disclaimer</Link>
                        </div>
                        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3.5 gap-y-1.5">
                            <Link href="/cookie-policy" prefetch={false} className="text-zinc-400 hover:text-[#FFE81B] transition-colors">Cookie Policy</Link>
                            <span className="text-zinc-700">|</span>
                            <Link href="/saas-subscription-policy" prefetch={false} className="text-zinc-400 hover:text-[#FFE81B] transition-colors">SaaS Subscription Policy</Link>
                            <span className="text-zinc-700">|</span>
                            <Link href="/security-policy" prefetch={false} className="text-zinc-400 hover:text-[#FFE81B] transition-colors">Security & Data Protection</Link>
                            <span className="text-zinc-700">|</span>
                            <Link href="/grievance-policy" prefetch={false} className="text-zinc-400 hover:text-[#FFE81B] transition-colors">Grievance Redressal</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle radial glow at the bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,232,27,0.02)_0%,_transparent_70%)] pointer-events-none"></div>
        </footer>
    )
}
