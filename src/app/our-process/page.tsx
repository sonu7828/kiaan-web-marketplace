"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    MessageSquare, Compass, Layers, Code2,
    FlaskConical, Rocket, ArrowRight, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { SocialProofBar } from '@/components/SocialProofBar';

/* ─── Process Steps Data ─────────────────────────────────────────────── */

const steps = [
    {
        number: '01',
        phase: 'Discovery',
        title: 'Discovery & Consultation',
        icon: MessageSquare,
        color: 'text-yellow-500',
        borderColor: 'border-yellow-500',
        bgGlow: 'bg-yellow-500/5',
        duration: '1–2 Days',
        deliverable: 'Project Brief + Scope Document',
        description:
            'We begin with a deep-dive strategy session to understand your business goals, technical constraints, and success metrics. Zero fluff — just structured discovery that eliminates ambiguity before a single line of code is written.',
        bullets: [
            'Business goal alignment session',
            'Technical feasibility assessment',
            'Stakeholder requirement mapping',
            'Risk identification & mitigation plan',
        ],
    },
    {
        number: '02',
        phase: 'Blueprint',
        title: 'Architecture & Blueprint',
        icon: Compass,
        color: 'text-yellow-500',
        borderColor: 'border-yellow-500',
        bgGlow: 'bg-yellow-500/5',
        duration: '3–5 Days',
        deliverable: 'System Architecture Document + Tech Stack',
        description:
            'Our senior architects design the full system topology — database schemas, API contracts, infrastructure layout, and security layers — before development begins. Architecture mistakes are the most expensive to fix later.',
        bullets: [
            'Microservices vs monolith decision',
            'Database schema & ERD design',
            'API endpoint specification (OpenAPI)',
            'Cloud infrastructure design (AWS/GCP)',
        ],
    },
    {
        number: '03',
        phase: 'Design',
        title: 'UI/UX Design & Prototype',
        icon: Layers,
        color: 'text-yellow-500',
        borderColor: 'border-yellow-500',
        bgGlow: 'bg-yellow-500/5',
        duration: '5–10 Days',
        deliverable: 'Figma Prototype + Design System',
        description:
            'We build high-fidelity interactive prototypes in Figma before touching code. You see and feel the product before development investment is made. Pixel-perfect, accessible, and performance-optimized from day one.',
        bullets: [
            'Wireframes → High-fidelity mockups',
            'Interactive Figma prototype',
            'Component design system',
            'Client approval gate before dev',
        ],
    },
    {
        number: '04',
        phase: 'Development',
        title: 'Engineering & Development',
        icon: Code2,
        color: 'text-yellow-500',
        borderColor: 'border-yellow-500',
        bgGlow: 'bg-yellow-500/5',
        duration: '4–12 Weeks',
        deliverable: 'Staging Environment + Weekly Sprint Reports',
        description:
            'Agile 2-week sprints with daily standups, a living staging environment, and weekly video demos. You see real progress every week — not just status updates. Our engineers write clean, documented, testable code.',
        bullets: [
            '2-week agile sprints with demos',
            'CI/CD pipeline from day one',
            'Living staging URL throughout dev',
            'Code review & pair programming',
        ],
    },
    {
        number: '05',
        phase: 'QA & Testing',
        title: 'Quality Assurance & Testing',
        icon: FlaskConical,
        color: 'text-yellow-500',
        borderColor: 'border-yellow-500',
        bgGlow: 'bg-yellow-500/5',
        duration: '1–2 Weeks',
        deliverable: 'QA Report + Bug-Free Build',
        description:
            'Every feature is tested against automated unit tests, integration tests, and manual UAT before deployment. We simulate production load, edge cases, and security attack vectors. Nothing ships with known defects.',
        bullets: [
            'Automated unit & integration tests',
            'User acceptance testing (UAT)',
            'Performance & load testing',
            'Security vulnerability scanning',
        ],
    },
    {
        number: '06',
        phase: 'Launch',
        title: 'Deployment & Ongoing Support',
        icon: Rocket,
        color: 'text-yellow-500',
        borderColor: 'border-yellow-500',
        bgGlow: 'bg-yellow-500/5',
        duration: 'Ongoing',
        deliverable: 'Production Deployment + SLA Agreement',
        description:
            'Zero-downtime blue-green deployment with rollback capability. Post-launch we provide 30 days of free monitoring, bug fixes, and hypercare support. Long-term retainer and maintenance plans available.',
        bullets: [
            'Blue-green production deployment',
            '30 days free post-launch hypercare',
            'SLA-backed monitoring & uptime',
            'Retainer & feature roadmap options',
        ],
    },
];

/* ─── Step Card Component ────────────────────────────────────────────── */

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });
    const Icon = step.icon;
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className="relative">
            {/* Connector line between steps (hidden for last) */}
            {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-full w-px h-8 bg-gradient-to-b from-yellow-500/40 to-transparent z-10" />
            )}

            <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border border-zinc-900 bg-zinc-950 group hover:border-yellow-500/20 transition-colors duration-500 overflow-hidden`}
            >
                {/* Number / Phase side */}
                <div className={`relative p-6 md:p-8 flex flex-col justify-between border-b lg:border-b-0 ${isEven ? 'lg:border-r' : 'lg:order-last lg:border-l'} border-zinc-900 ${step.bgGlow}`}>
                    {/* Glow blob */}
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-yellow-500/10 transition-colors" />

                    <div className="relative z-10">
                        {/* Phase + number row */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[9px] font-black uppercase tracking-[0.35em] text-zinc-600 border border-zinc-800 px-2.5 py-1">
                                Phase {step.number}
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-yellow-500/60">
                                {step.phase}
                            </span>
                        </div>

                        {/* Icon */}
                        <div className="w-12 h-12 border border-zinc-800 bg-black flex items-center justify-center mb-5 group-hover:border-yellow-500/40 transition-colors">
                            <Icon size={22} className="text-yellow-500" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-display uppercase tracking-tighter text-white leading-tight mb-3 group-hover:text-yellow-500 transition-colors">
                            {step.title}
                        </h3>

                        <p className="text-xs text-zinc-500 font-light leading-relaxed">
                            {step.description}
                        </p>
                    </div>

                    {/* Duration + Deliverable */}
                    <div className="relative z-10 mt-6 pt-4 border-t border-zinc-900 grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[8px] font-black uppercase tracking-widest text-zinc-600 mb-1">Timeline</p>
                            <p className="text-xs font-bold text-white">{step.duration}</p>
                        </div>
                        <div>
                            <p className="text-[8px] font-black uppercase tracking-widest text-zinc-600 mb-1">Deliverable</p>
                            <p className="text-[10px] font-bold text-yellow-500 leading-tight">{step.deliverable}</p>
                        </div>
                    </div>
                </div>

                {/* Bullets side */}
                <div className={`p-6 md:p-8 flex flex-col justify-center ${!isEven ? 'lg:order-first' : ''}`}>
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-5">
                        What Happens Here
                    </p>
                    <ul className="space-y-3">
                        {step.bullets.map((bullet, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                                className="flex items-start gap-3 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors"
                            >
                                <CheckCircle2 size={14} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span className="font-light">{bullet}</span>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Step number watermark */}
                    <div className="mt-auto pt-6 flex justify-end">
                        <span className="text-[80px] font-display font-black text-zinc-900 leading-none select-none">
                            {step.number}
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

/* ─── Process Timeline Strip ─────────────────────────────────────────── */

const ProcessStrip = () => (
    <div className="relative flex items-center justify-between mb-16 overflow-x-auto pb-2 gap-0">
        {/* Background connecting line */}
        <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent hidden md:block" />

        {steps.map((step, i) => {
            const Icon = step.icon;
            return (
                <div key={step.number} className="flex flex-col items-center gap-2 flex-1 min-w-[80px] relative z-10">
                    <div className="w-10 h-10 bg-black border border-zinc-800 flex items-center justify-center group-hover:border-yellow-500 transition-colors">
                        <Icon size={16} className="text-yellow-500" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600 text-center whitespace-nowrap">
                        {step.phase}
                    </span>
                    {i < steps.length - 1 && (
                        <ArrowRight size={10} className="text-zinc-700 absolute right-0 top-3 hidden md:block" />
                    )}
                </div>
            );
        })}
    </div>
);

/* ─── Main Page ──────────────────────────────────────────────────────── */

export default function OurProcessPage() {
    return (
        <div className="bg-black text-white min-h-screen selection:bg-yellow-500 selection:text-black pt-24 pb-20">
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-yellow-500/4 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-yellow-500/3 blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-5xl">

                {/* ── Hero ── */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
                    >
                        How We Work
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-6xl xl:text-7xl font-display uppercase tracking-tighter leading-none mb-6"
                    >
                        Our 6-Step <br />
                        <span className="text-yellow-500">Engineering Process</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl border-l-2 border-yellow-500 pl-4 mb-8 font-light"
                    >
                        A transparent, structured methodology from the first discovery call to post-launch support. No black boxes — you have full visibility at every phase.
                    </motion.p>

                    {/* Quick stat strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="flex flex-wrap gap-6 mb-8"
                    >
                        {[
                            { value: '10 Weeks', label: 'Average Delivery' },
                            { value: '250+', label: 'Projects Shipped' },
                            { value: '0', label: 'Missed Deadlines' },
                            { value: '24h', label: 'Response Time' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center px-5 py-3 border border-zinc-900 bg-zinc-950">
                                <p className="text-lg font-display text-yellow-500 uppercase tracking-tighter leading-none">{stat.value}</p>
                                <p className="text-[8px] font-black uppercase tracking-widest text-zinc-600 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ── Timeline Navigation Strip ── */}
                <ProcessStrip />

                {/* ── Step Cards ── */}
                <div className="space-y-4 mb-20">
                    {steps.map((step, i) => (
                        <StepCard key={step.number} step={step} index={i} />
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <div className="border border-yellow-500/20 bg-zinc-950 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-500/3 pointer-events-none" />
                    <div className="relative z-10">
                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-yellow-500 mb-4">
                            Ready to Start?
                        </p>
                        <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tighter text-white mb-4">
                            Let's Build <span className="text-yellow-500">Together</span>
                        </h2>
                        <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto font-light">
                            Book a free 30-minute discovery call. We'll map your project to our process and give you a realistic timeline and budget estimate.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center mb-6">
                            <Link
                                href="/book-demo"
                                className="inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors"
                            >
                                Book Discovery Call <ArrowRight size={14} />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 border border-zinc-700 text-zinc-400 px-8 py-4 text-xs font-black uppercase tracking-widest hover:border-yellow-500/50 hover:text-yellow-500 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                        <SocialProofBar variant="transparent" className="justify-center" />
                    </div>
                </div>
            </div>
        </div>
    );
}
