"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, Pause, Maximize, Volume2, Subtitles,
    Sparkles, ArrowRight, Quote, Award, Globe,
    Users, Rocket, Target, Eye
} from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';

/* ─────────────────── Config ─────────────────── */

// Replace this with the actual founder intro YouTube video ID
const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ';
const YOUTUBE_THUMBNAIL = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&playsinline=1&enablejsapi=1`;

/* ═══════════════════ COMPONENT ═══════════════════ */

export default function FounderIntro() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    return (
        <main className="min-h-screen bg-black text-white relative pt-24 pb-20 font-sans overflow-x-hidden">
            {/* Ambient backgrounds */}
            <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] bg-yellow-500/8 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] bg-amber-500/8 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-yellow-600/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">

                {/* ═══ HEADER ═══ */}
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-yellow-500/20 rounded-full bg-yellow-500/5 mb-6">
                            <Sparkles size={12} className="text-yellow-500" />
                            <span className="text-[10px] font-mono font-bold text-yellow-500 uppercase tracking-widest">Message from the Founder</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white mb-4 leading-[0.9]">
                            Building the <span className="text-yellow-500">Future</span>
                            <br />
                            <span className="text-zinc-500">of Enterprise Software</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto font-mono leading-relaxed">
                            Hear directly from our founder about the vision, mission, and technology philosophy
                            driving Kiaan Technology&apos;s growth across 3 continents.
                        </p>
                    </div>
                </Reveal>

                {/* ═══ VIDEO PLAYER ═══ */}
                <Reveal delay={0.15}>
                    <div className="relative mb-16">
                        {/* Cinematic glow border */}
                        <div className="absolute -inset-[1px] bg-gradient-to-b from-yellow-500/30 via-yellow-500/5 to-transparent rounded-2xl pointer-events-none z-10" />
                        <div className="absolute -inset-[2px] bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent rounded-2xl blur-sm pointer-events-none z-0" />

                        {/* Player container */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 z-10">
                            {/* Top bar with controls hint */}
                            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950/90 border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Kiaan Technology · Founder Introduction</span>
                                <div className="flex items-center gap-3 text-zinc-600">
                                    <Subtitles size={12} className="hover:text-yellow-500 cursor-pointer transition-colors" />
                                    <Volume2 size={12} className="hover:text-yellow-500 cursor-pointer transition-colors" />
                                    <Maximize size={12} className="hover:text-yellow-500 cursor-pointer transition-colors" />
                                </div>
                            </div>

                            {/* Video area — 16:9 aspect ratio */}
                            <div className="relative aspect-video bg-black">
                                <AnimatePresence mode="wait">
                                    {!isPlaying ? (
                                        /* Thumbnail + Play button overlay */
                                        <motion.div
                                            key="thumbnail"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 cursor-pointer group"
                                            onClick={handlePlay}
                                        >
                                            {/* Loading skeleton */}
                                            {!thumbnailLoaded && (
                                                <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full border-2 border-zinc-700 flex items-center justify-center">
                                                        <Play size={24} className="text-zinc-700 ml-1" />
                                                    </div>
                                                </div>
                                            )}

                                            {/* YouTube thumbnail */}
                                            <img
                                                src={YOUTUBE_THUMBNAIL}
                                                alt="Kiaan Technology founder sharing the company's vision and engineering approach"
                                                className="w-full h-full object-cover"
                                                onLoad={() => setThumbnailLoaded(true)}
                                                loading="eager"
                                            />

                                            {/* Dark gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:from-black/60 group-hover:via-black/10 group-hover:to-black/20 transition-all duration-500" />

                                            {/* Centered Play Button */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="relative"
                                                >
                                                    {/* Pulse ring */}
                                                    <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-500/20 animate-ping" />

                                                    {/* Button */}
                                                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-500 flex items-center justify-center shadow-[0_0_60px_rgba(234,179,8,0.4)] group-hover:shadow-[0_0_80px_rgba(234,179,8,0.6)] transition-shadow duration-500">
                                                        <Play size={32} className="text-black ml-1.5" fill="currentColor" />
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Bottom info bar */}
                                            <div className="absolute bottom-0 inset-x-0 p-6">
                                                <div className="flex items-end justify-between">
                                                    <div>
                                                        <p className="text-white font-display text-lg md:text-2xl uppercase tracking-tight mb-1">Watch Our Founder&apos;s Vision</p>
                                                        <p className="text-zinc-400 text-xs font-mono">Click to play · Captions available · HD quality</p>
                                                    </div>
                                                    <div className="text-[10px] font-mono text-zinc-500 bg-black/50 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm">
                                                        4:32
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        /* YouTube iframe — only loads after click */
                                        <motion.div
                                            key="player"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0"
                                        >
                                            <iframe
                                                src={YOUTUBE_EMBED_URL}
                                                title="Founder Intro - Kiaan Technology"
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                loading="lazy"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Bottom progress bar accent */}
                            <div className="h-[2px] bg-zinc-900">
                                {isPlaying && (
                                    <motion.div
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 272, ease: 'linear' }}
                                        className="h-full bg-gradient-to-r from-yellow-500 to-amber-400"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* ═══ FOUNDER BIO SECTION ═══ */}
                <Reveal delay={0.2}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Founder Info */}
                        <div className="lg:col-span-2 text-left">
                            <div className="flex items-start gap-6 mb-8">
                                {/* Avatar placeholder */}
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                    <span className="text-2xl md:text-3xl font-display font-black text-black">SK</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight text-white mb-1">
                                        Suraj <span className="text-yellow-500">Kiaan</span>
                                    </h2>
                                    <p className="text-sm font-mono text-zinc-500 mb-3">Founder & CEO · Kiaan Technology</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed font-sans max-w-xl">
                                        A visionary technologist with deep expertise in enterprise SaaS architecture,
                                        AI-driven automation, and scalable cloud infrastructure. Under his leadership,
                                        Kiaan Technology has delivered 200+ custom software solutions across healthcare,
                                        fintech, logistics, and retail sectors spanning India, USA, UK, and the MENA region.
                                    </p>
                                </div>
                            </div>

                            {/* Quote */}
                            <GlassCard className="p-6 border border-yellow-500/10 rounded-2xl relative overflow-hidden">
                                <Quote size={40} className="absolute top-4 right-4 text-yellow-500/10" />
                                <blockquote className="text-zinc-300 text-sm md:text-base italic leading-relaxed font-sans relative z-10">
                                    &ldquo;We don&apos;t just build software — we engineer competitive advantages.
                                    Every line of code we write is designed to unlock revenue, reduce friction, and
                                    create experiences that make our clients&apos; customers say &lsquo;wow&rsquo;.
                                    That&apos;s the Kiaan standard.&rdquo;
                                </blockquote>
                                <p className="text-[10px] font-mono text-yellow-500 uppercase tracking-widest mt-4">— Suraj Kiaan, Founder & CEO</p>
                            </GlassCard>
                        </div>

                        {/* Key Vision Points */}
                        <div className="lg:col-span-1 space-y-3">
                            <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Target size={14} className="text-yellow-500" /> Vision & Mission
                            </h3>
                            {[
                                { icon: <Rocket size={16} className="text-yellow-500" />, title: 'Innovation First', desc: 'Pioneering AI, ML, and cloud-native architectures for enterprise scale.' },
                                { icon: <Globe size={16} className="text-yellow-500" />, title: 'Global Reach', desc: 'Serving clients across India, USA, UK, and MENA from our Indore HQ.' },
                                { icon: <Users size={16} className="text-yellow-500" />, title: 'Talent Engine', desc: '150+ skilled engineers trained in cutting-edge full-stack technologies.' },
                                { icon: <Award size={16} className="text-yellow-500" />, title: 'Quality Obsessed', desc: 'ISO-grade processes delivering 99.9% uptime and zero-defect releases.' },
                            ].map((item, i) => (
                                <GlassCard key={i} className="p-4 border border-white/5 rounded-xl text-left group hover:border-yellow-500/20 transition-all duration-300">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 shrink-0">{item.icon}</div>
                                        <div>
                                            <h4 className="text-xs font-bold font-mono text-white uppercase tracking-wider mb-0.5 group-hover:text-yellow-500 transition-colors">{item.title}</h4>
                                            <p className="text-[11px] text-zinc-500 font-sans leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* ═══ STATS BAR ═══ */}
                <Reveal delay={0.25}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 font-mono">
                        {[
                            { value: '200+', label: 'Projects Delivered', icon: <Rocket size={14} className="text-yellow-500" /> },
                            { value: '150+', label: 'Team Members', icon: <Users size={14} className="text-yellow-500" /> },
                            { value: '3', label: 'Continents Served', icon: <Globe size={14} className="text-yellow-500" /> },
                            { value: '99.9%', label: 'Client Satisfaction', icon: <Award size={14} className="text-yellow-500" /> },
                        ].map((stat, i) => (
                            <GlassCard key={i} className="p-5 border border-white/10 rounded-2xl text-center group hover:border-yellow-500/20 transition-all">
                                <div className="flex justify-center mb-2">{stat.icon}</div>
                                <h3 className="text-2xl md:text-3xl font-display font-black text-white group-hover:text-yellow-500 transition-colors">{stat.value}</h3>
                                <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mt-1">{stat.label}</span>
                            </GlassCard>
                        ))}
                    </div>
                </Reveal>

                {/* ═══ CTA ═══ */}
                <Reveal delay={0.3}>
                    <div className="text-center">
                        <GlassCard className="p-8 md:p-12 border border-white/10 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                            <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight text-white mb-3">
                                Ready to Build <span className="text-yellow-500">Something Great?</span>
                            </h3>
                            <p className="text-zinc-400 text-sm font-mono max-w-lg mx-auto mb-6">
                                Let&apos;s turn your vision into a market-leading product. Schedule a strategy call with our team.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link href="/schedule">
                                    <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase text-xs tracking-wider px-8 py-3 rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                        Schedule a Call <ArrowRight size={14} className="ml-1 inline" />
                                    </Button>
                                </Link>
                                <Link href="/about">
                                    <Button className="border border-white/10 hover:border-yellow-500/30 text-white font-bold uppercase text-xs tracking-wider px-8 py-3 rounded-xl">
                                        About Kiaan Technology
                                    </Button>
                                </Link>
                            </div>
                        </GlassCard>
                    </div>
                </Reveal>
            </div>
        </main>
    );
}
