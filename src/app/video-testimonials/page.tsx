"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Play, Star, Quote, ArrowRight, ChevronLeft, ChevronRight,
    Users, Award, Sparkles, MessageSquareQuote, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { VIDEO_TESTIMONIALS, type VideoTestimonial } from '@/data/videoTestimonials';
import React from 'react';

/* ─── helpers ─── */
const ytThumb = (id: string) =>
    `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const ytEmbed = (id: string) =>
    `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1&playsinline=1`;

/* ─── Star renderer ─── */
const Stars = ({ rating }: { rating: number }) => (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                size={12}
                className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-zinc-700'}
            />
        ))}
    </div>
);

/* ═══════════════════ FEATURED PLAYER ═══════════════════ */
const FeaturedPlayer = ({ testimonial }: { testimonial: VideoTestimonial }) => {
    const [playing, setPlaying] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // Reset player when testimonial changes
    React.useEffect(() => { setPlaying(false); setLoaded(false); }, [testimonial.id]);

    return (
        <div className="relative">
            {/* Glow border */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-yellow-500/25 via-yellow-500/5 to-transparent rounded-2xl pointer-events-none z-10" />

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 z-10">
                {/* Top chrome bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950/90 border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest truncate max-w-xs">
                        {testimonial.name} · {testimonial.company}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-700">{testimonial.duration}</span>
                </div>

                {/* 16:9 Video Area */}
                <div className="relative aspect-video bg-black">
                    <AnimatePresence mode="wait">
                        {!playing ? (
                            <motion.div
                                key={`thumb-${testimonial.id}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="absolute inset-0 cursor-pointer group"
                                onClick={() => setPlaying(true)}
                            >
                                {/* Skeleton shimmer */}
                                {!loaded && (
                                    <div className="absolute inset-0 bg-zinc-900 animate-pulse" />
                                )}

                                <img
                                    src={ytThumb(testimonial.youtubeId)}
                                    alt={`${testimonial.name} video testimonial thumbnail`}
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                    onLoad={() => setLoaded(true)}
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:from-black/60 transition-all duration-500" />

                                {/* Play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-500/20 animate-ping" />
                                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-500 flex items-center justify-center shadow-[0_0_60px_rgba(234,179,8,0.35)] group-hover:shadow-[0_0_80px_rgba(234,179,8,0.55)] transition-shadow duration-500">
                                            <Play size={30} className="text-black ml-1.5" fill="currentColor" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Bottom info */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                                    <div>
                                        <p className="text-white font-display text-base md:text-lg uppercase tracking-tight">{testimonial.name}</p>
                                        <p className="text-zinc-400 text-[10px] font-mono">{testimonial.designation} · {testimonial.company}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        {testimonial.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="px-2 py-0.5 bg-black/60 backdrop-blur-sm text-[8px] font-mono text-zinc-400 border border-white/10 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={`iframe-${testimonial.id}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <iframe
                                    src={ytEmbed(testimonial.youtubeId)}
                                    title={`${testimonial.name} video testimonial`}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Progress accent */}
                <div className="h-[2px] bg-zinc-900">
                    {playing && (
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: parseFloat(testimonial.duration.replace(':', '.')) * 60, ease: 'linear' }}
                            className="h-full bg-gradient-to-r from-yellow-500 to-amber-400"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

/* ─── Carousel Thumb Card ─── */
const ThumbCard = ({
    t,
    isActive,
    onClick
}: {
    t: VideoTestimonial;
    isActive: boolean;
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        className={`relative flex-shrink-0 w-52 rounded-xl overflow-hidden border transition-all duration-300 group text-left ${isActive ? 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]' : 'border-white/5 hover:border-yellow-500/40'}`}
        aria-label={`View testimonial from ${t.name}`}
    >
        {/* Thumb image */}
        <div className="relative aspect-video bg-zinc-900">
            <img
                src={ytThumb(t.youtubeId)}
                alt={`${t.name} thumbnail`}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
            {/* Mini play badge */}
            <div className={`absolute inset-0 flex items-center justify-center`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-yellow-500' : 'bg-white/20 group-hover:bg-yellow-500/80'}`}>
                    <Play size={14} className={isActive ? 'text-black ml-0.5' : 'text-white ml-0.5'} fill="currentColor" />
                </div>
            </div>
            {/* Duration badge */}
            <span className="absolute bottom-1.5 right-1.5 text-[9px] font-mono text-white bg-black/70 px-1.5 py-0.5 rounded">
                {t.duration}
            </span>
        </div>
        {/* Name */}
        <div className="p-2.5 bg-zinc-950">
            <p className="text-[10px] font-bold text-white truncate">{t.name}</p>
            <p className="text-[9px] text-zinc-500 truncate">{t.company}</p>
        </div>
        {/* Active indicator */}
        {isActive && (
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-yellow-500" />
        )}
    </button>
);

/* ═══════════════════ MAIN PAGE ═══════════════════ */
export default function VideoTestimonialsPage() {
    const [activeIdx, setActiveIdx] = useState(0);
    const active = VIDEO_TESTIMONIALS[activeIdx];
    const carouselRef = React.useRef<HTMLDivElement>(null);

    const scrollCarousel = (dir: 'left' | 'right') => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({ left: dir === 'left' ? -220 : 220, behavior: 'smooth' });
    };

    const handlePrev = () => setActiveIdx(i => Math.max(0, i - 1));
    const handleNext = () => setActiveIdx(i => Math.min(VIDEO_TESTIMONIALS.length - 1, i + 1));

    return (
        <main className="min-h-screen bg-black text-white relative pt-24 pb-20 overflow-x-hidden font-sans">
            {/* Ambient glows */}
            <div className="absolute top-[-15%] left-[-15%] w-[60%] h-[60%] bg-yellow-500/8 rounded-full blur-[160px] pointer-events-none z-0" />
            <div className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[60%] bg-amber-500/8 rounded-full blur-[160px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">

                {/* ═══ HEADER ═══ */}
                <Reveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-yellow-500/20 rounded-full bg-yellow-500/5 mb-5">
                            <MessageSquareQuote size={12} className="text-yellow-500" />
                            <span className="text-[10px] font-mono font-bold text-yellow-500 uppercase tracking-widest">Client Success Stories</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-tight text-white mb-4 leading-[0.9]">
                            Hear From Our <span className="text-yellow-500">Clients</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto font-mono leading-relaxed">
                            Real leaders sharing their experience of partnering with Kiaan Technology to build mission-critical software.
                        </p>
                    </div>
                </Reveal>

                {/* ═══ STATS ROW ═══ */}
                <Reveal delay={0.1}>
                    <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto font-mono text-center">
                        {[
                            { value: `${VIDEO_TESTIMONIALS.length}`, label: 'Video Stories' },
                            { value: '200+', label: 'Projects Done' },
                            { value: '5.0★', label: 'Avg Rating' },
                        ].map((s, i) => (
                            <div key={i} className="py-3 border border-white/5 rounded-xl bg-zinc-950/40">
                                <div className="text-xl font-display font-black text-white">{s.value}</div>
                                <div className="text-[9px] text-zinc-500 uppercase tracking-widest mt-0.5">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* ═══ MAIN PLAYER + INFO ═══ */}
                <Reveal delay={0.15}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                        {/* Player — 7 cols */}
                        <div className="lg:col-span-7">
                            <FeaturedPlayer testimonial={active} key={active.id} />
                        </div>

                        {/* Client Info — 5 cols */}
                        <div className="lg:col-span-5 flex flex-col justify-center text-left">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-5"
                                >
                                    {/* Stars */}
                                    <Stars rating={active.rating} />

                                    {/* Quote */}
                                    <div className="relative">
                                        <Quote size={32} className="absolute -top-2 -left-2 text-yellow-500/15" />
                                        <p className="text-zinc-300 text-sm md:text-base leading-relaxed italic pl-4 border-l border-yellow-500/30">
                                            &ldquo;{active.review}&rdquo;
                                        </p>
                                    </div>

                                    {/* Client identity */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={active.photo}
                                            alt={`${active.name} Kiaan Technology video testimonial`}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-yellow-500/30"
                                            loading="lazy"
                                        />
                                        <div>
                                            <p className="text-white font-bold font-sans text-sm">{active.name}</p>
                                            <p className="text-zinc-500 text-[11px] font-mono">{active.designation}</p>
                                            <p className="text-yellow-500/70 text-[11px] font-mono font-bold">{active.company}</p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {active.tags.map(tag => (
                                            <span key={tag} className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider bg-zinc-900 text-zinc-400 border border-white/5 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Prev / Next nav */}
                                    <div className="flex items-center gap-3 pt-2">
                                        <button
                                            onClick={handlePrev}
                                            disabled={activeIdx === 0}
                                            className="w-9 h-9 rounded-full border border-white/10 hover:border-yellow-500 text-zinc-400 hover:text-white disabled:opacity-30 flex items-center justify-center transition-all"
                                            aria-label="Previous testimonial"
                                        >
                                            <ChevronLeft size={16} />
                                        </button>
                                        <span className="text-[10px] font-mono text-zinc-600">
                                            {activeIdx + 1} / {VIDEO_TESTIMONIALS.length}
                                        </span>
                                        <button
                                            onClick={handleNext}
                                            disabled={activeIdx === VIDEO_TESTIMONIALS.length - 1}
                                            className="w-9 h-9 rounded-full border border-white/10 hover:border-yellow-500 text-zinc-400 hover:text-white disabled:opacity-30 flex items-center justify-center transition-all"
                                            aria-label="Next testimonial"
                                        >
                                            <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </Reveal>

                {/* ═══ CAROUSEL THUMBNAIL ROW ═══ */}
                <Reveal delay={0.2}>
                    <div className="mb-14">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-bold font-mono text-white uppercase tracking-wider flex items-center gap-2">
                                <Users size={14} className="text-yellow-500" /> All Client Stories
                            </h2>
                            <div className="flex gap-2">
                                <button onClick={() => scrollCarousel('left')} className="w-7 h-7 rounded-full border border-white/10 hover:border-yellow-500 text-zinc-400 hover:text-white flex items-center justify-center transition-all" aria-label="Scroll left">
                                    <ChevronLeft size={14} />
                                </button>
                                <button onClick={() => scrollCarousel('right')} className="w-7 h-7 rounded-full border border-white/10 hover:border-yellow-500 text-zinc-400 hover:text-white flex items-center justify-center transition-all" aria-label="Scroll right">
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable carousel */}
                        <div
                            ref={carouselRef}
                            className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide"
                            style={{ scrollbarWidth: 'none' }}
                        >
                            {VIDEO_TESTIMONIALS.map((t, idx) => (
                                <ThumbCard
                                    key={t.id}
                                    t={t}
                                    isActive={idx === activeIdx}
                                    onClick={() => setActiveIdx(idx)}
                                />
                            ))}
                        </div>

                        {/* Dot indicators */}
                        <div className="flex justify-center gap-1.5 mt-4">
                            {VIDEO_TESTIMONIALS.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIdx(idx)}
                                    className={`rounded-full transition-all duration-300 ${idx === activeIdx ? 'w-5 h-1.5 bg-yellow-500' : 'w-1.5 h-1.5 bg-zinc-700 hover:bg-zinc-500'}`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* ═══ TRUST BADGES ═══ */}
                <Reveal delay={0.25}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
                        {[
                            { icon: <CheckCircle2 size={18} className="text-green-400" />, title: 'Verified Clients', desc: 'All testimonials come from real project partners, verified by contract.' },
                            { icon: <Award size={18} className="text-yellow-500" />, title: '5-Star Average', desc: 'Consistent 5-star feedback across 200+ delivered projects globally.' },
                            { icon: <Sparkles size={18} className="text-cyan-400" />, title: 'Real Results', desc: 'Every testimonial cites measurable outcomes: cost savings, revenue growth, efficiency gains.' },
                        ].map((item, i) => (
                            <GlassCard key={i} className="p-5 border border-white/5 rounded-2xl flex items-start gap-4 text-left group hover:border-yellow-500/20 transition-all">
                                <div className="mt-0.5 shrink-0">{item.icon}</div>
                                <div>
                                    <h3 className="text-xs font-bold font-mono text-white uppercase tracking-wider mb-1 group-hover:text-yellow-500 transition-colors">{item.title}</h3>
                                    <p className="text-[11px] text-zinc-500 font-sans leading-relaxed">{item.desc}</p>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </Reveal>

                {/* ═══ CTA ═══ */}
                <Reveal delay={0.3}>
                    <GlassCard className="p-8 md:p-12 border border-white/10 rounded-2xl text-center relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
                        <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight text-white mb-3">
                            Ready to Write Your <span className="text-yellow-500">Success Story?</span>
                        </h3>
                        <p className="text-zinc-400 text-sm font-mono max-w-lg mx-auto mb-6">
                            Join 200+ companies that trusted Kiaan Technology to deliver mission-critical software.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/schedule">
                                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase text-xs tracking-wider px-8 py-3 rounded-xl shadow-[0_0_30px_rgba(234,179,8,0.15)]">
                                    Schedule a Strategy Call <ArrowRight size={14} className="ml-1 inline" />
                                </Button>
                            </Link>
                            <Link href="/case-studies">
                                <Button className="border border-white/10 hover:border-yellow-500/30 text-white font-bold uppercase text-xs tracking-wider px-8 py-3 rounded-xl">
                                    View Case Studies
                                </Button>
                            </Link>
                        </div>
                    </GlassCard>
                </Reveal>
            </div>
        </main>
    );
}
