"use client";

import { motion } from 'framer-motion'
import { Check, ArrowRight, Zap, Target, Rocket } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/Button'
import React from 'react';

export default function Pricing() {
    const plans = [
        {
            title: 'SaaS Starter',
            price: '$29',
            period: '/month',
            desc: 'For small businesses & startups',
            features: [
                { text: 'Core SaaS Dashboard', bold: true },
                { text: 'Basic User Analytics' },
                { text: 'Email Notifications' },
                { text: 'Up to 1,000 Users' },
                { text: 'Standard Support' }
            ],
            button: 'Start Free Trial',
            popular: false,
            icon: Rocket
        },
        {
            title: 'Pro Business',
            price: '$99',
            period: '/month',
            desc: 'For growing companies & agencies',
            features: [
                { text: 'Advanced AI Insights', bold: true },
                { text: 'Priority API Access' },
                { text: 'Custom White-labeling' },
                { text: 'Multi-team Collaboration' },
                { text: '24/7 Dedicated Support' }
            ],
            button: 'Launch Plan',
            popular: true,
            icon: Zap
        },
        {
            title: 'Enterprise',
            price: 'Custom',
            period: '',
            desc: 'For large industrial organizations',
            features: [
                { text: 'Full Source Access', bold: true },
                { text: 'SLA & Security Audit' },
                { text: 'On-premise Deployment' },
                { text: 'Unlimited Scalability' },
                { text: 'Dedicated Account Manager' }
            ],
            button: 'Talk to Sales',
            popular: false,
            icon: Target
        }
    ]

    return (
        <div className="relative bg-black min-h-screen text-white pt-32 pb-16 overflow-hidden selection:bg-yellow-500 selection:text-black">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_rgba(234,179,8,0.05)_0%,_transparent_60%)] pointer-events-none"></div>

            {/* Header Section */}
            <section className="relative z-10 container mx-auto px-6 mb-16 text-center">
                <Reveal>
                    <div className="inline-block bg-zinc-900 border border-zinc-800 text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2 mb-10 shadow-[4px_4px_0_rgba(234,179,8,0.2)]">
                        Strategic Investment
                    </div>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="relative inline-block mb-10">
                        <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            Smart Plans. <span className="text-yellow-500">Serious Growth.</span>
                        </h1>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
                    </div>
                </Reveal>
                <Reveal delay={0.4}>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
                        Transparent, performance-driven pricing for our enterprise software suites and custom engineering solutions.
                    </p>
                </Reveal>
            </section>

            {/* Pricing Cards */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.15,
                            delayChildren: 0.3
                        }
                    }
                }}
                className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch"
            >
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
                            }
                        }}
                        className={`group relative flex flex-col bg-zinc-900/40 backdrop-blur-md border rounded-[16px] p-10 transition-all duration-500 hover:-translate-y-4 ${plan.popular
                            ? 'border-yellow-500/50 shadow-[0_0_40px_rgba(234,179,8,0.15)] scale-105 z-20 md:py-14'
                            : 'border-zinc-800 hover:border-yellow-500/30'
                            }`}
                    >
                        {/* Status Strip for Popular */}
                        {plan.popular && (
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-yellow-500 rounded-t-[16px]"></div>
                        )}

                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[10px] font-black px-4 py-1.5 uppercase tracking-widest shadow-[0_0_20px_rgba(234,179,8,0.4)] whitespace-nowrap">
                                Most Chosen Plan
                            </div>
                        )}

                        <div className="mb-10">
                            <h3 className="text-2xl font-display uppercase text-white mb-2 tracking-tight">{plan.title}</h3>
                            <p className="text-zinc-500 text-sm font-light leading-relaxed">{plan.desc}</p>
                        </div>

                        <div className="mb-12 flex items-baseline gap-1">
                            <span className="text-6xl md:text-7xl font-display font-medium text-white tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                {plan.price}
                            </span>
                            {plan.period && (
                                <span className="text-xl text-zinc-500 font-light lowercase mt-auto mb-2 opacity-60">
                                    {plan.period}
                                </span>
                            )}
                        </div>

                        <div className="h-px bg-zinc-800/80 mb-10"></div>

                        <ul className="space-y-5 mb-12 flex-grow">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center rounded-sm">
                                        <Check size={12} className="text-yellow-500" />
                                    </div>
                                    <span className={`text-lg leading-snug tracking-tight ${feature.bold ? 'text-zinc-100 font-semibold' : 'text-zinc-400 font-light'}`}>
                                        {feature.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto">
                            <Button
                                className={`w-full h-16 rounded-full text-base font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 ${plan.popular
                                    ? 'bg-yellow-500 text-black hover:bg-white hover:text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]'
                                    : 'bg-transparent border-2 border-yellow-500/30 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:border-yellow-500'
                                    }`}
                            >
                                {plan.button} <ArrowRight size={18} />
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Custom Quote Section */}
            <section className="container mx-auto px-6 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-zinc-900/40 backdrop-blur-md border border-zinc-800 rounded-[24px] p-8 md:p-12 border-l-4 border-l-yellow-500 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
                >
                    <div className="relative z-10 text-left">
                        <h3 className="text-3xl font-display uppercase text-white mb-3 tracking-tighter">Need a Tailored Enterprise Quote?</h3>
                        <p className="text-zinc-400 text-lg font-light max-w-xl">
                            Get a precisely engineered estimate for your specific infrastructure and security requirements.
                            Our engineers are ready to build your custom package.
                        </p>
                    </div>
                    <Button className="relative z-10 px-10 h-16 rounded-full bg-yellow-500 text-black text-sm font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(234,179,8,0.2)] flex items-center gap-3">
                        Get Custom Quote <ArrowRight size={16} />
                    </Button>

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[100px] pointer-events-none"></div>
                </motion.div>
            </section>
        </div>
    )
}
