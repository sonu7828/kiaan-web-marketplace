"use client";

import React from 'react';
import Link from 'next/link';
import {
    Calendar, Clock, Shield, Zap, Users, CheckCircle2,
    ArrowRight, MessageSquare, Star, Video
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import dynamic from 'next/dynamic';

// Lazy load the Calendly widget to prevent server-side issues
const CalendlyWidget = dynamic(() => import('@/components/CalendlyWidget'), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-[700px] border border-zinc-900 bg-zinc-950">
            <div className="text-center space-y-4">
                <div className="w-8 h-8 border-2 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin mx-auto" />
                <p className="text-zinc-600 text-xs font-black uppercase tracking-widest">Loading Calendar...</p>
            </div>
        </div>
    ),
});

/* ─── IMPORTANT: Replace with your actual Calendly URL ──────────────
   Steps:
   1. Go to https://calendly.com and sign up / log in
   2. Create a new event type (e.g., "30-Min Software Demo")
   3. Copy your event URL (e.g., https://calendly.com/kiaantechnology/30min)
   4. Replace the CALENDLY_URL below with your actual URL
────────────────────────────────────────────────────────────────────── */
const CALENDLY_URL = 'https://calendly.com/kiaantechnology/software-demo';

const trustBadges = [
    { icon: Clock, label: '30-Min Session', sub: 'No time wasted' },
    { icon: Shield, label: 'No Commitment', sub: 'Free consultation' },
    { icon: Zap, label: 'Instant Confirm', sub: 'Auto email sent' },
    { icon: Video, label: 'Google Meet', sub: 'Or in-person' },
];

const whatYouGet = [
    'Live walkthrough of your requested software module (ERP, CRM, SaaS, etc.)',
    'Custom feature mapping to your exact business workflow',
    'Honest technical feasibility assessment — no overselling',
    'Rough timeline and investment estimate on the call',
    'Post-call follow-up with a written project proposal',
    'Direct access to our senior engineers, not sales reps',
];

const meetingTypes = [
    {
        icon: '🖥️',
        title: 'Product Demo',
        desc: 'See our ERP, CRM, HRM, POS, or SaaS platforms live with real data walkthrough.',
        duration: '30 min',
        popular: true,
    },
    {
        icon: '🎯',
        title: 'Project Consultation',
        desc: 'Deep-dive into your project requirements and get a technical architecture recommendation.',
        duration: '45 min',
        popular: false,
    },
    {
        icon: '💰',
        title: 'Pricing Discussion',
        desc: 'Understand investment ranges, payment plans, and ROI projections for your project.',
        duration: '20 min',
        popular: false,
    },
];

const testimonials = [
    {
        text: 'Booked a demo call and within 30 minutes had a complete clarity on exactly what I needed. The team was super prepared.',
        author: 'Rahul S.',
        role: 'Founder, HealthTech Startup'
    },
    {
        text: 'Impressed that senior engineers joined the call directly — not junior sales people. They understood our ERP needs immediately.',
        author: 'Priya M.',
        role: 'COO, Logistics Company'
    },
];

export default function BookDemoPage() {
    return (
        <div className="bg-black text-white min-h-screen selection:bg-yellow-500 selection:text-black pt-24">

            {/* ── Hero ── */}
            <section className="container mx-auto px-6 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left: Copy */}
                    <div>
                        <Reveal>
                            <div className="inline-flex items-center gap-2 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-6">
                                <Calendar size={12} /> Free 30-Min Demo
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none mb-6">
                                Book Your<br />
                                <span className="text-yellow-500">Free Demo</span>
                            </h1>
                            <p className="text-zinc-400 text-base leading-relaxed mb-8 border-l-2 border-yellow-500 pl-4 max-w-lg">
                                Schedule a <strong className="text-white">live demo call</strong> with our senior engineers — not sales reps. See your exact software requirement demonstrated in real-time. Instant calendar booking with automatic email confirmation.
                            </p>
                        </Reveal>

                        {/* Trust Badges */}
                        <Reveal delay={0.1}>
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {trustBadges.map(({ icon: Icon, label, sub }) => (
                                    <div key={label} className="flex items-center gap-3 p-3 border border-zinc-900 bg-zinc-950">
                                        <div className="p-2 bg-yellow-500/10 text-yellow-500">
                                            <Icon size={14} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-wider text-white">{label}</p>
                                            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">{sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        {/* What You Get */}
                        <Reveal delay={0.2}>
                            <div className="border border-zinc-900 bg-zinc-950 p-5 mb-8">
                                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-4">What Happens on the Call</p>
                                <ul className="space-y-2.5">
                                    {whatYouGet.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400 leading-snug">
                                            <CheckCircle2 size={12} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        {/* Testimonials */}
                        <Reveal delay={0.3}>
                            <div className="space-y-3">
                                {testimonials.map((t, i) => (
                                    <div key={i} className="p-4 border border-zinc-900 bg-zinc-950/50">
                                        <div className="flex gap-0.5 mb-2">
                                            {[...Array(5)].map((_, j) => (
                                                <Star key={j} size={10} className="text-yellow-500 fill-yellow-500" />
                                            ))}
                                        </div>
                                        <p className="text-xs text-zinc-400 italic leading-relaxed mb-2">"{t.text}"</p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">{t.author} · {t.role}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    {/* Right: Calendly Embed */}
                    <div>
                        <Reveal delay={0.1}>
                            <div className="border border-yellow-500/20 bg-zinc-950 overflow-hidden">
                                {/* Calendly Header */}
                                <div className="px-6 py-4 border-b border-zinc-900 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-yellow-500 text-black">
                                            <Calendar size={14} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-white">Schedule a Meeting</p>
                                            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Powered by Calendly</p>
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-yellow-500 border border-yellow-500/30 px-2 py-1">
                                        Free
                                    </div>
                                </div>

                                {/* Calendly Widget */}
                                <CalendlyWidget
                                    url={CALENDLY_URL}
                                    height={700}
                                    className="w-full"
                                />
                            </div>
                        </Reveal>

                        {/* Alternative: WhatsApp */}
                        <Reveal delay={0.2}>
                            <div className="mt-4 p-4 border border-zinc-900 bg-zinc-950 flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-white mb-1">Prefer WhatsApp?</p>
                                    <p className="text-[10px] text-zinc-600">Chat directly with our team for quick questions</p>
                                </div>
                                <a
                                    href="https://wa.me/919752100980?text=Hi%20Kiaan%20Team%2C%20I%20want%20to%20book%20a%20product%20demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0"
                                >
                                    <Button className="bg-[#25D366] text-black rounded-none h-10 px-5 text-xs font-black uppercase tracking-widest hover:bg-[#20bd5a] transition-all flex items-center gap-2 whitespace-nowrap">
                                        <MessageSquare size={12} /> WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ── Meeting Types ── */}
            <section className="container mx-auto px-6 mb-12">
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tighter mb-6">
                        Choose Your <span className="text-yellow-500">Session Type</span>
                    </h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {meetingTypes.map((type, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <div className={`p-5 border ${type.popular ? 'border-yellow-500/30 bg-zinc-950' : 'border-zinc-900 bg-zinc-950'} relative`}>
                                {type.popular && (
                                    <div className="absolute -top-3 left-4 bg-yellow-500 text-black text-[9px] font-black uppercase tracking-widest px-2 py-0.5">
                                        Most Popular
                                    </div>
                                )}
                                <div className="text-2xl mb-3">{type.icon}</div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-sm font-black uppercase tracking-wider text-white">{type.title}</h3>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-yellow-500 border border-yellow-500/30 px-2 py-0.5">
                                        {type.duration}
                                    </span>
                                </div>
                                <p className="text-xs text-zinc-500 leading-relaxed">{type.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="container mx-auto px-6 mb-12">
                <Reveal>
                    <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tighter mb-8">
                        How Booking <span className="text-yellow-500">Works</span>
                    </h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { step: '01', title: 'Pick a Slot', desc: 'Choose an available date and time from the calendar above.' },
                        { step: '02', title: 'Enter Details', desc: 'Fill in your name, email, and what software you want to demo.' },
                        { step: '03', title: 'Auto Confirm', desc: 'Receive instant email confirmation with Google Meet link.' },
                        { step: '04', title: 'Join the Call', desc: 'Our senior engineer joins with a live demo prepared for you.' },
                    ].map(({ step, title, desc }, i) => (
                        <Reveal key={i} delay={i * 0.06}>
                            <div className="relative p-5 border border-zinc-900 bg-zinc-950 group hover:border-yellow-500/30 transition-colors">
                                <div className="text-4xl font-display text-zinc-900 group-hover:text-yellow-500/20 transition-colors mb-3 leading-none">
                                    {step}
                                </div>
                                <h3 className="text-sm font-black uppercase tracking-wider text-white mb-2">{title}</h3>
                                <p className="text-xs text-zinc-600 leading-relaxed">{desc}</p>
                                {i < 3 && (
                                    <ArrowRight
                                        size={14}
                                        className="absolute top-1/2 -translate-y-1/2 -right-3 text-zinc-800 hidden md:block z-10"
                                    />
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── Internal Links ── */}
            <section className="container mx-auto px-6 pb-16 border-t border-zinc-900 pt-8">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-4">Related Pages</p>
                <div className="flex flex-wrap gap-2">
                    {[
                        { label: 'Product Demo Arena', href: '/demo' },
                        { label: 'Custom Software Development', href: '/services/custom-software-development' },
                        { label: 'ERP Systems', href: '/erp' },
                        { label: 'CRM Software', href: '/crm' },
                        { label: 'SaaS Development', href: '/services/saas-development' },
                        { label: 'Pricing Plans', href: '/pricing' },
                        { label: 'Case Studies', href: '/case-studies' },
                        { label: 'Contact Us', href: '/contact' },
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
        </div>
    );
}
