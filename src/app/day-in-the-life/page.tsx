"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, Pause, Maximize, Volume2, Subtitles,
    Sparkles, ArrowRight, Quote, Globe,
    Users, Target, Lightbulb, Coffee, HeartHandshake
} from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';

/* ─────────────────── Config ─────────────────── */

// Replace this with the actual "Day in the Life" YouTube video ID
const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ';
const YOUTUBE_THUMBNAIL = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&playsinline=1&enablejsapi=1`;

/* ═══════════════════ COMPONENT ═══════════════════ */

export default function DayInTheLife() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

    return (
        <main className="min-h-screen bg-black text-white relative pt-24 pb-20 overflow-x-hidden font-sans">
            {/* Ambient Backgrounds */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-yellow-500/5 rounded-full blur-[180px] pointer-events-none z-0" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-zinc-500/10 rounded-full blur-[150px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                
                {/* ═══ HEADER ═══ */}
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-yellow-500/20 rounded-full bg-yellow-500/5 mb-5">
                            <Coffee size={12} className="text-yellow-500" />
                            <span className="text-[10px] font-mono font-bold text-yellow-500 uppercase tracking-widest">Culture & Life</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white mb-6 leading-[0.9]">
                            A Day in the Life at <span className="text-yellow-500">Kiaan</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto font-mono leading-relaxed">
                            Step inside our engineering hubs. See how our teams collaborate, innovate, and build the scalable digital infrastructures that power global enterprises.
                        </p>
                    </div>
                </Reveal>

                {/* ═══ CINEMATIC PLAYER ═══ */}
                <Reveal delay={0.15}>
                    <div className="relative mb-20 max-w-5xl mx-auto">
                        {/* Glow Border */}
                        <div className="absolute -inset-[1px] bg-gradient-to-b from-yellow-500/30 via-yellow-500/5 to-transparent rounded-2xl pointer-events-none z-10" />

                        {/* Player Container */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl z-10">
                            
                            {/* macOS style title bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/90 border-b border-white/5 relative z-20">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                                </div>
                                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Day in the Life · Kiaan Technology</span>
                                <div className="flex items-center gap-3 text-zinc-600">
                                    <Subtitles size={12} className="hover:text-yellow-500 cursor-pointer transition-colors" />
                                    <Volume2 size={12} className="hover:text-yellow-500 cursor-pointer transition-colors" />
                                    <Maximize size={12} className="hover:text-yellow-500 cursor-pointer transition-colors" />
                                </div>
                            </div>

                            {/* 16:9 Video Area */}
                            <div className="relative aspect-video bg-black overflow-hidden group">
                                <AnimatePresence mode="wait">
                                    {!isPlaying ? (
                                        <motion.div
                                            key="thumbnail"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 cursor-pointer"
                                            onClick={() => setIsPlaying(true)}
                                        >
                                            {/* Skeleton Shimmer while thumbnail loads */}
                                            {!thumbnailLoaded && (
                                                <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
                                            )}
                                            
                                            <img
                                                src={YOUTUBE_THUMBNAIL}
                                                alt="A day in the life of the Kiaan Technology software development team"
                                                className={`w-full h-full object-cover transition-all duration-700 ${thumbnailLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                                                onLoad={() => setThumbnailLoaded(true)}
                                                loading="eager"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:from-black/60 transition-all duration-500" />

                                            {/* Big Play Button */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="relative"
                                                >
                                                    <div className="absolute inset-0 w-24 h-24 rounded-full bg-yellow-500/20 animate-ping" />
                                                    <div className="relative w-24 h-24 rounded-full bg-yellow-500 flex items-center justify-center shadow-[0_0_60px_rgba(234,179,8,0.4)] group-hover:shadow-[0_0_80px_rgba(234,179,8,0.6)] transition-shadow duration-500">
                                                        <Play size={32} className="text-black ml-2" fill="currentColor" />
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Bottom info bar */}
                                            <div className="absolute bottom-0 inset-x-0 p-6">
                                                <div className="flex items-end justify-between">
                                                    <div>
                                                        <p className="text-white font-display text-lg md:text-2xl uppercase tracking-tight mb-1">Experience Our Culture</p>
                                                        <p className="text-zinc-400 text-xs font-mono">Click to play · Captions available · HD quality</p>
                                                    </div>
                                                    <div className="text-[10px] font-mono text-zinc-500 bg-black/50 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm">
                                                        3:45
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
                                                title="Day in the Life at Kiaan Technology"
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Faux Progress Bar */}
                            <div className="h-[2px] bg-zinc-900 w-full overflow-hidden">
                                {isPlaying && (
                                    <motion.div
                                        initial={{ width: '0%' }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 225, ease: "linear" }}
                                        className="h-full bg-gradient-to-r from-yellow-500 to-amber-400"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* ═══ CULTURE HIGHLIGHTS ═══ */}
                <Reveal delay={0.25}>
                    <div className="mb-20">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-display uppercase tracking-tight text-white">
                                The <span className="text-yellow-500">Kiaan</span> Way
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    icon: <Lightbulb className="text-yellow-500" size={24} />,
                                    title: "Innovation First",
                                    desc: "We encourage bold ideas and rapid prototyping. Failure is just a stepping stone to the right architecture."
                                },
                                {
                                    icon: <Users className="text-blue-400" size={24} />,
                                    title: "Radical Collaboration",
                                    desc: "No silos. Engineers, designers, and strategists sit together to solve complex enterprise problems."
                                },
                                {
                                    icon: <HeartHandshake className="text-emerald-400" size={24} />,
                                    title: "Wellbeing & Balance",
                                    desc: "We believe in working hard, but also disconnecting. Flexible hours and wellness programs keep us sharp."
                                },
                                {
                                    icon: <Globe className="text-purple-400" size={24} />,
                                    title: "Global Impact",
                                    desc: "The code you write here powers businesses across 3 continents. Your work matters."
                                }
                            ].map((item, idx) => (
                                <GlassCard key={idx} className="p-6 border border-white/5 rounded-2xl group hover:border-yellow-500/30 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        {item.icon}
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-display uppercase text-white mb-2">{item.title}</h3>
                                    <p className="text-sm font-mono text-zinc-400 leading-relaxed">{item.desc}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* ═══ CTA SECTION ═══ */}
                <Reveal delay={0.3}>
                    <GlassCard className="p-10 md:p-14 border border-white/10 rounded-2xl text-center relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                        
                        <h3 className="text-2xl md:text-4xl font-display uppercase tracking-tight text-white mb-4">
                            Ready to Join the <span className="text-yellow-500">Team?</span>
                        </h3>
                        <p className="text-zinc-400 text-sm md:text-base font-mono max-w-2xl mx-auto mb-8">
                            Whether you're looking for an internship or your next big career move, we're always looking for talented engineers and creative minds.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/internship">
                                <Button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase text-xs tracking-wider px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.15)]">
                                    Explore Internships <ArrowRight size={14} className="ml-1 inline" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button className="w-full sm:w-auto border border-white/10 hover:border-yellow-500/30 text-white font-bold uppercase text-xs tracking-wider px-8 py-4 rounded-xl">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </GlassCard>
                </Reveal>

            </div>
        </main>
    );
}
