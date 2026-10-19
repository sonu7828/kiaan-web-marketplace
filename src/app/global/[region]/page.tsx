import React from 'react';
import { notFound } from 'next/navigation';
import { globalMarkets } from '@/data/globalMarketsData';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import { Globe, Shield, Zap, CheckCircle2, Factory, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return globalMarkets.map((market) => ({
        region: market.id,
    }));
}

export function generateMetadata({ params }: { params: { region: string } }): Metadata {
    const market = globalMarkets.find((item) => item.id === params.region);
    if (!market) return {};
    const title = `Software Development for ${market.regionName} | Kiaan Technology`;
    const canonical = `/global/${market.id}/`;
    return {
        title,
        description: market.heroSubline,
        openGraph: { title, description: market.heroSubline, url: canonical, siteName: 'Kiaan Technology', type: 'website' },
        twitter: { card: 'summary_large_image', title, description: market.heroSubline },
    };
}

export default function RegionalLandingPage({ params }: { params: { region: string } }) {
    const market = globalMarkets.find((m) => m.id === params.region);

    if (!market) {
        notFound();
    }

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black pt-32">
            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,_rgba(234,179,8,0.1)_0%,_transparent_60%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Reveal>
                            <div className="inline-flex items-center gap-3 bg-zinc-900 border border-yellow-500/20 px-6 py-2 mb-8">
                                <Globe size={14} className="text-yellow-500" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
                                    {market.regionName} Division
                                </span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-[0.9] mb-8">
                                {market.heroHeadline.split('.')[0]}.<br />
                                <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
                                    {market.heroHeadline.split('.')[1] || 'Digital Acceleration'}
                                </span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-10 border-l-2 border-yellow-500 pl-6">
                                {market.heroSubline}
                            </p>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <Button className="h-16 px-10 bg-yellow-500 text-black hover:bg-white rounded-none font-black uppercase text-sm tracking-[0.2em] shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                        Request Architecture Audit
                                    </Button>
                                </Link>
                            </div>
                        </Reveal>

                        <Reveal delay={0.8}>
                            <p className="mt-8 text-xs font-black uppercase tracking-widest text-zinc-500">
                                {market.socialProof}
                            </p>
                        </Reveal>
                    </div>

                    {/* Architectural Graphic */}
                    <Reveal delay={0.5}>
                        <div className="relative h-[600px] hidden lg:block border border-white/5 bg-zinc-950/50 p-8">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] rounded-full" />
                            <div className="h-full w-full border border-zinc-800 flex flex-col justify-between p-6">
                                <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                                    <div className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Node Status</div>
                                    <div className="text-[10px] uppercase font-black tracking-widest text-green-500 flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Global Stable</div>
                                </div>
                                <div className="space-y-4 my-auto">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-16 bg-zinc-900 border border-zinc-800 flex items-center px-4 justify-between">
                                            <div className="flex items-center gap-4">
                                                <Zap className="text-yellow-500" size={16} />
                                                <div className="h-2 w-32 bg-zinc-800"></div>
                                            </div>
                                            <div className="h-2 w-8 bg-zinc-700 decoration-yellow-500"></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-right text-[10px] uppercase font-black tracking-widest text-zinc-600">
                                    {market.regionName} / Connected
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* COMPLIANCE & SECURITY */}
            <section className="py-24 px-6 border-t border-white/5 bg-zinc-950">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Reveal>
                        <div>
                            <Shield className="text-yellow-500 mb-8" size={48} />
                            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-6">
                                {market.complianceHighlight.title}
                            </h2>
                            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
                                {market.complianceHighlight.description}
                            </p>

                            <ul className="space-y-4">
                                {market.complianceHighlight.standards.map((std, i) => (
                                    <li key={i} className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-zinc-300">
                                        <CheckCircle2 className="text-yellow-500" size={20} />
                                        {std}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* REGIONAL CASE STUDY */}
                    <Reveal delay={0.2}>
                        <div className="border border-yellow-500/20 bg-black p-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[80px] group-hover:bg-yellow-500/10 transition-colors duration-700" />

                            <Factory className="text-zinc-700 mb-8" size={32} />

                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 mb-4">
                                Regional Case Study
                            </div>

                            <h3 className="text-3xl font-display uppercase tracking-tighter mb-4 text-white">
                                {market.caseStudyRef.title}
                            </h3>

                            <div className="text-5xl font-display text-transparent" style={{ WebkitTextStroke: '1px rgba(234,179,8,1)' }}>
                                {market.caseStudyRef.metric}
                            </div>

                            <p className="mt-6 text-zinc-400 font-light leading-relaxed border-t border-zinc-900 pt-6">
                                {market.caseStudyRef.description}
                            </p>

                            <Link href="/case-studies" className="mt-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 group-hover:text-yellow-500 transition-colors">
                                View Full Teardown <ChevronRight size={14} />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
