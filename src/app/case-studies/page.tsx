"use client";

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Zap, Target, BarChart3, Globe, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import React, { useState } from 'react';
import { Button } from '@/components/Button';
import Link from 'next/link';

import { caseStudiesData } from '@/data/caseStudiesData';
import { DraggableMarquee } from '@/components/DraggableMarquee';
import { JsonLd } from '@/components/seo/JsonLd';

const categories = ['All', 'SaaS', 'Web', 'Mobile', 'Enterprise', 'AI'];

const reviews = [
    { text: "Professional Team. Have excellent experience in Web App development. I highly recommend them :)", author: "adc_mr", designation: "Bahrain · 1 month ago", gradient: "from-amber-500 to-orange-600" },
    { text: "Very professional. He got my website done in one day I highly recommend.", author: "zeemee80", designation: "United States · 1 month ago", gradient: "from-violet-500 to-purple-600" },
    { text: "Kiaan and his team absolutely nailed it! They took the wireframe I had in my head and brought it to life, exactly as I envisioned. I'm so grateful for their care and precision — this team is top-tier!", author: "truman42lewis", designation: "United States · 2 months ago", gradient: "from-cyan-500 to-blue-600" },
    { text: "Did a wonderful job! It's a long term project. They understand concept and vision. Will continue to work with them to complete full scope.", author: "hillfamilybiz", designation: "United States · 2 months ago", gradient: "from-emerald-500 to-teal-600" },
    { text: "My experience working with this company is very great, I highly recommend everyone to work with this amazing team. Because everything is smooth by working with them, and they have experts in software development — whatever you have in mind they can build it with professionalism.", author: "hansdjabs", designation: "Rwanda · 3 months ago", gradient: "from-rose-500 to-pink-600" },
    { text: "10/10 great service, honest and reliability will use again. Thank you so much.", author: "shak1000", designation: "United Kingdom · 4 months ago", gradient: "from-yellow-500 to-amber-600" },
    { text: "Great team, was very patient with me and my requirements, went beyond my expectations.", author: "oscarmunyimani", designation: "South Africa · 4 months ago", gradient: "from-indigo-500 to-blue-600" },
    { text: "I'm pleased that everything went so quickly and was very professional. The contact was super friendly and helpful. I will definitely use them again, as I have several projects underway. Great job.", author: "chilli", designation: "Germany · 5 months ago", gradient: "from-fuchsia-500 to-purple-600" },
    { text: "This is a great software developer, always there for you, very helpful, amazing — thank you very much.", author: "salehyasin", designation: "United Kingdom · 5 months ago", gradient: "from-amber-500 to-orange-600" },
    { text: "Thanks for your excellent work. You have done an outstanding job, and I truly appreciate your professionalism and dedication. Your attention to detail and commitment to delivering high-quality results are commendable.", author: "nastilai", designation: "Portugal · 6 months ago", gradient: "from-violet-500 to-purple-600" },
    { text: "Very impressed with the service provided by this team of developers. From start to finish, every step of the process was smooth, professional and attentive. Their team not only made sure all our needs were met, but also provided innovative ideas that really helped improve the end result.", author: "nonnyexon", designation: "Ukraine · 6 months ago", gradient: "from-cyan-500 to-blue-600" },
    { text: "This is my first time to work with him and I appreciate.", author: "sacrelelu", designation: "Ivory Coast · 7 months ago", gradient: "from-emerald-500 to-teal-600" },
    { text: "There are still some problems with delivery due to some issues but I was promised they will address those issues after delivery. Other than that I am creating exactly what I wanted to create — no compromise in that part at all. Thank you for the hard work, I really appreciate.", author: "serdarkarasulu", designation: "United Arab Emirates · 7 months ago", gradient: "from-rose-500 to-pink-600" },
    { text: "Kiaan Tech truly shines! Their attention to detail and professionalism exceeded all expectations in software development. Plus, their proactive communication made working with them a breeze. Highly recommend!", author: "nalko0", designation: "Kuwait · 8 months ago", gradient: "from-yellow-500 to-amber-600" },
    { text: "Kiaan Tech truly excelled in software development, showcasing outstanding professionalism and code expertise! Their timely delivery and polite communication were impressive. I was blown away when I saw the work. Can't recommend them enough!", author: "is62aonaz", designation: "United States · 8 months ago", gradient: "from-indigo-500 to-blue-600" },
    { text: "This is the first part of a multi-stage project. I am fairly satisfied with the initial progress. I am looking to have the second phase worked on so that we can get the finalized project off the ground.", author: "dylansmith411", designation: "Sint Maarten · 9 months ago", gradient: "from-fuchsia-500 to-purple-600" },
    { text: "Very good team and great software delivered, I recommend 100% for your app projects. The team was able to understand my need and transform my idea into the app I needed. They go far to exceed expectations and improve the value. Thank you again!", author: "alexglimmer", designation: "Indonesia · 9 months ago", gradient: "from-amber-500 to-orange-600" },
    { text: "Kiaan Tech truly impressed with their professionalism and code expertise, delivering a product that exceeded expectations. Working with them was a breeze, thanks to their language fluency and quick responsiveness.", author: "createwebdev", designation: "United Kingdom · 10 months ago", gradient: "from-violet-500 to-purple-600" },
    { text: "Kiaan Tech truly blew me away with their code expertise and exceptional professionalism! Their proactive communication and deep understanding made working together a breeze. A fantastic experience overall — I'm thrilled to recommend them!", author: "maanindersin874", designation: "United Kingdom · 10 months ago", gradient: "from-cyan-500 to-blue-600" },
    { text: "Kiaan Tech nailed it! Their professionalism and attention to detail made the software development process smooth and seamless. Additionally, their quick responsiveness and timely delivery were spot on, making it a pleasure to work with them.", author: "ashima_malik", designation: "United States · 11 months ago", gradient: "from-emerald-500 to-teal-600" },
    { text: "Kiaan Tech truly excels in software development! They exceeded expectations with their attention to detail and delivered a bug-free product. Their politeness and deep understanding made working with them a pleasure. Highly recommended!", author: "mirwais_kh", designation: "United States · 11 months ago", gradient: "from-rose-500 to-pink-600" },
    { text: "I so appreciate how I was informed and consulted in the development of videos and blogs. I felt very comfortable sharing my ideas and giving feedback. They received feedback extremely well and were amazingly quick to integrate them.", author: "zumbawithsusiev", designation: "United States · 1 year ago", gradient: "from-yellow-500 to-amber-600" },
    { text: "Kiaan Tech delivered excellent software development work with keen attention to detail and impeccable documentation, ensuring a bug-free result. Working with them was a breeze; their language fluency and cooperative spirit made the project run smoothly.", author: "alexandra_techl", designation: "United Arab Emirates · 1 year ago", gradient: "from-indigo-500 to-blue-600" },
];

export default function CaseStudies() {
    const [filter, setFilter] = useState('All');

    const filteredStudies = filter === 'All'
        ? caseStudiesData
        : caseStudiesData.filter(study => {
            if (study.type?.toLowerCase() === filter.toLowerCase()) return true;
            if (filter === 'Mobile' && (study.category?.toLowerCase().includes('mobile') || study.technologies?.includes('React Native') || study.slug === 'healthsakhi-ai')) return true;
            if (filter === 'Enterprise' && (study.category?.toLowerCase().includes('crm') || study.category?.toLowerCase().includes('enterprise') || study.slug === 'study-first-info-crm' || study.slug === 'pgx-payment-gateway')) return true;
            if (filter === 'SaaS' && (study.category?.toLowerCase().includes('saas') || study.type === 'SaaS')) return true;
            if (filter === 'AI' && (study.category?.toLowerCase().includes('ai') || study.type === 'AI')) return true;
            if (filter === 'Web' && (study.type === 'Web' || study.category?.toLowerCase().includes('web') || study.category?.toLowerCase().includes('gateway'))) return true;
            return false;
        });

    return (
        <div className="bg-black min-h-screen pt-6 lg:pt-8 pb-10 selection:bg-yellow-500 selection:text-black">
            <JsonLd 
                data={{
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Kiaan Technology",
                    "url": "https://kiaantechnology.com",
                    "logo": "https://kiaantechnology.com/logo.webp",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5",
                        "reviewCount": `${reviews.length}`
                    },
                    "review": reviews.map(r => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": r.author },
                        "datePublished": "2024-01-01",
                        "reviewBody": r.text,
                        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
                    }))
                }}
            />
            {/* Last Updated Freshness Signal */}
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl pt-1 pb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                <span>Page Last Updated:</span>
                <span className="text-white">July 29, 2026</span>
                <span className="w-1 h-1 rounded-full bg-yellow-500 mx-1" />
                <span>Verified by Kiaan Technology</span>
            </div>

            {/* Featured Section */}
            <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-6">
                <div className="glass-panel p-5 md:p-8 border-yellow-500/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />

                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="flex-1 space-y-4">
                            <Reveal>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-black text-[9px] font-black uppercase tracking-widest">
                                    <Target size={12} /> Featured Impact
                                </div>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <h2 className="text-2xl md:text-4xl font-display uppercase leading-tight tracking-tighter">
                                    Revolutionizing <br />
                                    <span className="text-yellow-500">Global Finance</span>
                                </h2>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <p className="text-sm md:text-base text-zinc-400 font-light max-w-xl leading-relaxed italic border-l-2 border-yellow-500/30 pl-4">
                                    "Kiaan Technology transformed our legacy engine into a high-frequency powerhouse. We've seen a 50% jump in execution speed across 40+ countries."
                                </p>
                            </Reveal>
                            <Reveal delay={0.6}>
                                <div className="flex gap-8 pt-1">
                                    <div>
                                        <div className="text-xl md:text-2xl font-display text-white mb-0.5">50%</div>
                                        <div className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">Speed Increase</div>
                                    </div>
                                    <div>
                                        <div className="text-xl md:text-2xl font-display text-white mb-0.5">Zero</div>
                                        <div className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">Downtime Migrated</div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="flex-1 w-full relative">
                            <Reveal delay={0.4}>
                                <div className="aspect-video relative overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                        alt="Enterprise Logistics Cloud Engine Architecture - Kiaan Technology Case Study"
                                        loading="lazy"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Header Section */}
            <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-4">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[9px] font-bold uppercase tracking-[0.2em] text-yellow-500 mb-2">
                            <Zap size={12} /> Case Archive
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-3xl md:text-5xl font-display uppercase tracking-tighter text-white mb-3">
                            Engineering <span className="text-yellow-500">Masterpieces</span>
                        </h1>
                    </Reveal>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${filter === cat
                                    ? 'bg-yellow-500 border-yellow-500 text-black'
                                    : 'bg-transparent border-white/10 text-zinc-500 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <AnimatePresence mode="popLayout">
                        {filteredStudies.map((study) => (
                            <Link
                                href={`/case-studies/${study.slug}`}
                                key={study.title}
                                className="block group h-full"
                            >
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                    className="bg-zinc-950 border border-white/5 overflow-hidden hover:border-yellow-500/30 transition-all duration-500 flex flex-col h-full rounded-lg"
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <div className="absolute top-3 left-3 z-20 px-2.5 py-0.5 bg-black/80 backdrop-blur-md border border-white/10 text-[8.5px] font-black text-yellow-500 uppercase tracking-widest">
                                            {study.category}
                                        </div>
                                        <img
                                            src={study.image}
                                            alt={`Case study interface for ${study.title}`}
                                            width={1024}
                                            height={1024}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
                                    </div>

                                    <div className="p-4 space-y-3 flex flex-col flex-grow justify-between">
                                        <div>
                                            <div className="text-[9px] text-zinc-600 font-black uppercase tracking-widest mb-1.5 flex items-center gap-2">
                                                {study.client} <span className="w-3 h-[1px] bg-zinc-800" /> <span className="text-yellow-500/80">{study.stats}</span>
                                            </div>
                                            <h3 className="text-lg font-display uppercase text-white leading-tight group-hover:text-yellow-500 transition-colors">
                                                {study.title}
                                            </h3>
                                            <p className="text-zinc-500 text-xs leading-relaxed font-light line-clamp-3 italic mt-2">
                                                "{study.desc}"
                                            </p>
                                        </div>
                                        <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-auto">
                                            <div className="text-[9px] uppercase font-bold text-zinc-600 tracking-wider">Result: <span className="text-zinc-400 italic font-medium">{study.result}</span></div>
                                            <ArrowUpRight className="text-zinc-700 group-hover:text-yellow-500 transition-colors" size={16} />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Premium Reviews Section */}
            <section className="py-6 pb-4 relative overflow-hidden">
                {/* Colorful background glow effects */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/8 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/8 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />
                
                {/* Centered heading */}
                <div className="text-center mb-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tighter text-white mb-2">
                        What Our Partners{' '}
                        <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">Say</span>
                    </h2>
                    <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-full mt-2" />
                </div>

                {/* Edge fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none hidden md:block" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none hidden md:block" />

                {/* Row 1 — scrolls left */}
                <div className="relative w-full mb-4">
                    <DraggableMarquee speed={0.6} reverse={false}>
                        {[...reviews, ...reviews].map((rev, i) => (
                            <div 
                                key={`r1-${i}`} 
                                className="w-[340px] md:w-[400px] shrink-0 relative group"
                            >
                                {/* Gradient top border accent */}
                                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${rev.gradient} rounded-t`} />
                                <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/[0.06] p-5 md:p-6 flex flex-col justify-between h-full hover:border-white/10 transition-all duration-500 hover:bg-zinc-900/60">
                                    {/* Star rating */}
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, s) => (
                                            <svg key={s} className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-zinc-300 text-xs leading-relaxed font-light mb-4">
                                        &ldquo;{rev.text}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${rev.gradient} flex items-center justify-center text-white text-xs font-black shadow-lg`}>
                                            {rev.author[0]}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-white">{rev.author}</div>
                                            <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">{rev.designation}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </DraggableMarquee>
                </div>

                {/* Row 2 — scrolls right */}
                <div className="relative w-full">
                    <DraggableMarquee speed={0.6} reverse={true}>
                        {[...reviews.slice(12), ...reviews.slice(0, 12), ...reviews.slice(12), ...reviews.slice(0, 12)].map((rev, i) => (
                            <div 
                                key={`r2-${i}`} 
                                className="w-[340px] md:w-[400px] shrink-0 relative group"
                            >
                                {/* Gradient top border accent */}
                                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${rev.gradient} rounded-t`} />
                                <div className="bg-zinc-950/80 backdrop-blur-xl border border-white/[0.06] p-5 md:p-6 flex flex-col justify-between h-full hover:border-white/10 transition-all duration-500 hover:bg-zinc-900/60">
                                    {/* Star rating */}
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(5)].map((_, s) => (
                                            <svg key={s} className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-zinc-300 text-xs leading-relaxed font-light mb-4">
                                        &ldquo;{rev.text}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${rev.gradient} flex items-center justify-center text-white text-xs font-black shadow-lg`}>
                                            {rev.author[0]}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-white">{rev.author}</div>
                                            <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">{rev.designation}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </DraggableMarquee>
                </div>
            </section>

            {/* Methodology / Why Us Section */}
            <section className="container mx-auto px-4 sm:px-6 max-w-7xl mt-4">
                <div className="border border-white/5 bg-zinc-900/20 backdrop-blur-3xl overflow-hidden relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/5">
                        <div className="p-6 md:p-8 border-r border-white/5 space-y-4">
                            <Reveal>
                                <h2 className="text-2xl md:text-4xl font-display uppercase leading-none tracking-tighter">
                                    The Kiaan <br />
                                    <span className="text-yellow-500 underline decoration-1 underline-offset-8">Methodology</span>
                                </h2>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p className="text-zinc-500 text-xs md:text-sm font-light leading-relaxed italic">
                                    We don't just write code. We architect dominance. Our process is rooted in military-grade precision and creative madness.
                                </p>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <Link href="/start-project">
                                    <Button className="bg-white text-black rounded-none px-8 h-10 text-[10px] font-black uppercase tracking-widest hover:bg-yellow-500 transition-all">
                                        Partner With Us
                                    </Button>
                                </Link>
                            </Reveal>
                        </div>
                        <div className="p-6 md:p-8 grid grid-cols-2 gap-4 bg-zinc-950/40">
                            <div className="space-y-2">
                                <Globe className="text-yellow-500 mb-2" size={20} />
                                <h4 className="text-[11px] font-black uppercase tracking-widest">Global Scale</h4>
                                <p className="text-[9px] text-zinc-600 uppercase leading-relaxed font-bold">Solutions deployed in 25+ countries across 6 continents.</p>
                            </div>
                            <div className="space-y-2">
                                <ShieldCheck className="text-yellow-500 mb-2" size={20} />
                                <h4 className="text-[11px] font-black uppercase tracking-widest">Air-Tight Sec</h4>
                                <p className="text-[9px] text-zinc-600 uppercase leading-relaxed font-bold">Military-grade protection for every line of code.</p>
                            </div>
                            <div className="space-y-2">
                                <BarChart3 className="text-yellow-500 mb-2" size={20} />
                                <h4 className="text-[11px] font-black uppercase tracking-widest">ROI Focused</h4>
                                <p className="text-[9px] text-zinc-600 uppercase leading-relaxed font-bold">Average 40% efficiency boost post-implementation.</p>
                            </div>
                            <div className="space-y-2">
                                <Zap className="text-yellow-500 mb-2" size={20} />
                                <h4 className="text-[11px] font-black uppercase tracking-widest">Hyper Speed</h4>
                                <p className="text-[9px] text-zinc-600 uppercase leading-relaxed font-bold">Sub-second performance even under extreme load.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
