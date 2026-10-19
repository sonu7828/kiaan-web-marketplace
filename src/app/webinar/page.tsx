"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, Clock, User, Building2, CheckCircle2, ArrowRight,
    Play, Users, Sparkles, Star, ShieldCheck, Mail, Phone,
    Share2, AlertCircle, FileCheck2, Cpu
} from 'lucide-react';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { SocialProofBar } from '@/components/SocialProofBar';

// Speaker profiles data
const speakers = [
    {
        name: 'Abhishek Sharma',
        role: 'Lead Enterprise Architect',
        company: 'Kiaan Technology',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
        bio: 'Spearheads custom ERP and CRM architectures for enterprise clients across India, focusing on high-concurrency database systems and automated scaling.',
    },
    {
        name: 'Vikram Mehta',
        role: 'Chief Technology Officer',
        company: 'SignFlow SaaS',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
        bio: 'Pioneered SignFlow\'s military-grade account abstraction digital signature API. Expert in cryptographically secure document trails and compliance.',
    },
];

// Key takeaways/benefits list
const takeaways = [
    {
        title: 'Bridge the Integration Gap',
        desc: 'Learn how to natively embed legally-binding signatures directly inside your custom CRM and ERP pipelines without external page redirects.',
    },
    {
        title: 'Eliminate Manual Document Handling',
        desc: 'Automate vendor agreements, employee onboarding, NDAs, and purchase orders. Trigger signatures on milestone updates in your ERP.',
    },
    {
        title: 'Air-Tight Security & Compliance',
        desc: 'Understand the legal frameworks (IT Act India, GDPR) governing electronic signatures and how to store secure verification hashes.',
    },
    {
        title: 'Scale Operations, Cut Costs',
        desc: 'How automated workflows reduce contract execution times from 5 days to 6 minutes, cutting administrative operational costs by 70%.',
    },
];

export default function WebinarPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        designation: '',
        phone: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Set webinar target date: August 18, 2026, at 3:00 PM IST (GMT+5:30)
    useEffect(() => {
        const targetDate = new Date('2026-08-18T15:00:00+05:30').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network latency
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsRegistered(true);
        setIsSubmitting(false);
    };

    const scrollToForm = () => {
        document.getElementById('webinar-register-card')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-black text-white min-h-screen selection:bg-yellow-500 selection:text-black pt-24 pb-20 overflow-hidden relative">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-1/3 right-[-10%] w-[500px] h-[500px] bg-yellow-500/3 blur-[150px] rounded-full -z-10 animate-pulse" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* ── Section 1: Hero & Countdown ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em] rounded-none">
                                <Sparkles size={12} className="animate-pulse" /> Joint Live Webinar
                            </div>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display uppercase tracking-tighter leading-none">
                                Automating <br />
                                <span className="text-yellow-500">Enterprise Workflows</span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl border-l-2 border-yellow-500 pl-4 font-light">
                                <strong className="text-white font-bold">Kiaan Technology</strong> joins forces with <strong className="text-white font-bold">SignFlow SaaS</strong> to demonstrate how integrating electronic signature infrastructure directly into your custom ERP and CRM platforms eliminates bottlenecks and secures legal compliance.
                            </p>
                        </Reveal>

                        {/* Schedule Meta */}
                        <Reveal delay={0.4}>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <div className="flex items-center gap-3 px-4 py-3 bg-zinc-950 border border-zinc-900 rounded-none">
                                    <Calendar size={16} className="text-yellow-500" />
                                    <div>
                                        <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest leading-none mb-1">Date</p>
                                        <p className="text-xs font-bold text-white uppercase tracking-wider">August 18, 2026</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 px-4 py-3 bg-zinc-950 border border-zinc-900 rounded-none">
                                    <Clock size={16} className="text-yellow-500" />
                                    <div>
                                        <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest leading-none mb-1">Time</p>
                                        <p className="text-xs font-bold text-white uppercase tracking-wider">3:00 PM - 4:00 PM IST</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* CTA Buttons */}
                        <Reveal delay={0.5}>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <Button
                                    onClick={scrollToForm}
                                    className="bg-yellow-500 text-black hover:bg-white transition-colors h-14 px-8 rounded-none text-xs font-black uppercase tracking-widest flex items-center gap-3"
                                >
                                    Claim Your Spot <ArrowRight size={14} />
                                </Button>
                                <button
                                    onClick={scrollToForm}
                                    className="border border-zinc-800 text-zinc-400 hover:text-white hover:border-yellow-500/50 transition-all h-14 px-8 text-xs font-black uppercase tracking-widest"
                                >
                                    View Speaker Details
                                </button>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right: Countdown & Presenter Promo */}
                    <div className="lg:col-span-5">
                        <Reveal delay={0.2}>
                            <div className="glass-panel p-6 md:p-8 relative overflow-hidden border-yellow-500/20 bg-zinc-950/80">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-[50px] pointer-events-none" />

                                <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-6 text-center">
                                    Live Session Starts In
                                </h3>

                                {/* Timer Grid */}
                                <div className="grid grid-cols-4 gap-2 mb-8">
                                    {[
                                        { label: 'Days', value: timeLeft.days },
                                        { label: 'Hours', value: timeLeft.hours },
                                        { label: 'Mins', value: timeLeft.minutes },
                                        { label: 'Secs', value: timeLeft.seconds },
                                    ].map((t) => (
                                        <div key={t.label} className="text-center p-3 bg-black border border-zinc-900">
                                            <span className="text-2xl sm:text-3xl font-display text-yellow-500 block leading-none mb-1">
                                                {String(t.value).padStart(2, '0')}
                                            </span>
                                            <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600 block">
                                                {t.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-zinc-900 pt-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <FileCheck2 size={16} className="text-yellow-500" />
                                        <p className="text-xs text-zinc-400">Certificates of Attendance provided for all attendees</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Cpu size={16} className="text-yellow-500" />
                                        <p className="text-xs text-zinc-400">Live Q&A and technical architecture breakdown session</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* ── Section 2: Integration Grid (The Shared Benefits) ── */}
                <section className="mb-20">
                    <Reveal>
                        <h2 className="text-2xl md:text-4xl font-display uppercase tracking-tighter mb-10 text-center">
                            The Power of <span className="text-yellow-500">Integrated Systems</span>
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Column 1: Unintegrated */}
                        <Reveal>
                            <div className="border border-zinc-900 bg-zinc-950 p-6 md:p-8">
                                <h3 className="text-lg font-display text-zinc-500 uppercase tracking-tight mb-6 flex items-center gap-2">
                                    ❌ Siloed Document Processes
                                </h3>
                                <ul className="space-y-4 text-sm text-zinc-400 font-light">
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">●</span>
                                        ERP triggers a milestone, requiring contract signature. Staff must copy-paste details to an external signing site.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">●</span>
                                        Customer signs on external portal. Staff must manually check the portal to see if the signature has completed.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">●</span>
                                        Signed file downloaded manually and uploaded into CRM/ERP. High risk of data misplacement and human error.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">●</span>
                                        No unified search or status logs. Slowing down sales velocity and contract clearance cycles.
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Column 2: Integrated */}
                        <Reveal delay={0.1}>
                            <div className="border border-yellow-500/20 bg-zinc-950 p-6 md:p-8">
                                <h3 className="text-lg font-display text-yellow-500 uppercase tracking-tight mb-6 flex items-center gap-2">
                                    ✅ Kiaan &amp; SignFlow Integration
                                </h3>
                                <ul className="space-y-4 text-sm text-zinc-300 font-light">
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-500 mt-1">●</span>
                                        ERP triggers agreement dynamically via API using pre-stored client data. No manual data transfer needed.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-500 mt-1">●</span>
                                        Clients sign securely directly in your branding portal or WhatsApp. Webhooks instantly notify your CRM.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-500 mt-1">●</span>
                                        Legally binding document is stored securely in your private cloud with cryptographic hashes automatically locked.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-yellow-500 mt-1">●</span>
                                        System unlocks subsequent ERP milestones (like auto-invoicing) immediately upon client signature.
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* ── Section 3: Takeaways ── */}
                <section className="mb-20">
                    <Reveal>
                        <h2 className="text-2xl md:text-4xl font-display uppercase tracking-tighter mb-10">
                            What You Will <span className="text-yellow-500">Learn</span>
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {takeaways.map((item, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className="p-6 border border-zinc-900 bg-zinc-950 hover:border-yellow-500/30 transition-colors">
                                    <h3 className="text-sm font-black uppercase tracking-wider text-white mb-2">{item.title}</h3>
                                    <p className="text-xs text-zinc-500 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── Section 4: Speakers ── */}
                <section className="mb-20">
                    <Reveal>
                        <h2 className="text-2xl md:text-4xl font-display uppercase tracking-tighter mb-10 text-center">
                            The <span className="text-yellow-500">Speakers</span>
                        </h2>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {speakers.map((s, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="border border-zinc-900 bg-zinc-950 p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
                                    <img
                                        src={s.image}
                                        alt={`${s.name}, webinar speaker`}
                                        className="w-20 h-20 rounded-full border border-yellow-500/20 object-cover flex-shrink-0"
                                    />
                                    <div>
                                        <h3 className="text-lg font-black uppercase text-white tracking-wider leading-none mb-1">{s.name}</h3>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-4">{s.role} · {s.company}</p>
                                        <p className="text-xs text-zinc-400 leading-relaxed font-light">{s.bio}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* ── Section 5: Registration Form ── */}
                <section className="max-w-xl mx-auto" id="webinar-register-card">
                    <AnimatePresence mode="wait">
                        {!isRegistered ? (
                            /* ── Form Card ── */
                            <motion.div
                                key="form-container"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="glass-panel p-6 md:p-10 border-yellow-500/20 bg-zinc-950/70 backdrop-blur-md"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight text-white mb-2">
                                        Claim Your <span className="text-yellow-500">Seat Now</span>
                                    </h2>
                                    <p className="text-xs text-zinc-500 leading-relaxed uppercase font-bold tracking-wider">
                                        Free Live Access · Limited to 150 Attendees
                                    </p>
                                </div>

                                <form onSubmit={handleRegister} className="space-y-5">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter your name"
                                            className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-yellow-500 transition-all font-light text-sm"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="yourname@company.com"
                                            className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-yellow-500 transition-all font-light text-sm"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block ml-1">Company</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                placeholder="Company name"
                                                className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-yellow-500 transition-all font-light text-sm"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block ml-1">Designation</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.designation}
                                                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                                                placeholder="Job Title"
                                                className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-yellow-500 transition-all font-light text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block ml-1">WhatsApp / Phone Number</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+91 00000 00000"
                                            className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-yellow-500 transition-all font-light text-sm"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-yellow-500 text-black hover:bg-white transition-colors h-14 rounded-none text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? 'Registering Spot...' : 'Register For Live Webinar'}
                                    </Button>

                                    <SocialProofBar variant="transparent" className="mt-3 px-0" />
                                </form>
                            </motion.div>
                        ) : (
                            /* ── Success Card ── */
                            <motion.div
                                key="success-container"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-yellow-500 text-black p-10 md:p-14 text-center space-y-6 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-black" />

                                <div className="flex justify-center">
                                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-yellow-500">
                                        <CheckCircle2 size={32} />
                                    </div>
                                </div>

                                <h2 className="text-3xl font-display uppercase leading-none">
                                    Registration <br />Confirmed!
                                </h2>

                                <p className="text-black/80 font-bold uppercase tracking-wider text-xs max-w-sm mx-auto">
                                    Thank you, {formData.name}. We have saved your seat for the live session on **August 18, 2026, at 3:00 PM IST**.
                                </p>

                                <div className="border-t border-black/10 pt-6 space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-black/60 leading-none">
                                        Action Items
                                    </p>
                                    <div className="flex justify-center gap-3">
                                        <a
                                            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Joint+Webinar%3A+Custom+ERP%2FCRM+Meets+Automated+Document+Workflows&dates=20260818T093000Z%2F20260818T103000Z&details=Live+session+hosted+by+Kiaan+Technology+%26+SignFlow.+Learn+to+integrate+document+signing+workflows+into+custom+ERP%2FCRM+systems.&location=Google+Meet"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 border border-black text-[9px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                                        >
                                            📅 Add to Google Calendar
                                        </a>
                                    </div>
                                    <p className="text-[10px] text-black/60 max-w-xs mx-auto">
                                        A join link and calendar invite has been sent to your email: **{formData.email}**.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
            </div>
        </div>
    );
}
