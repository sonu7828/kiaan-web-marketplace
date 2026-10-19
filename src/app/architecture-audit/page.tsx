import React from 'react';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import { FileSearch, Lock, Database, Code2, Zap, ArrowRight, CheckSquare, Shield } from 'lucide-react';

export default function ArchitectureAuditPage() {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black pt-32 pb-16">

            {/* HERO */}
            <section className="relative px-6 py-20 lg:py-32 overflow-hidden border-b border-zinc-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,_rgba(234,179,8,0.08)_0%,_transparent_50%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <Reveal>
                            <div className="inline-flex items-center gap-3 bg-zinc-900 border border-yellow-500/20 px-6 py-2 mb-8">
                                <FileSearch size={14} className="text-yellow-500" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
                                    High-Ticket Discovery (Phase 1)
                                </span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-[0.9] mb-8">
                                The Enterprise <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Architecture Audit</span>.
                            </h1>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-6 font-display italic tracking-tight">
                                Never blindly commit to a $100k+ software build.
                            </p>
                            <p className="text-base text-zinc-400 font-light leading-relaxed mb-10 border-l-2 border-zinc-800 pl-4">
                                Our $2,500 Technical Discovery Workshop acts as an X-Ray for your legacy tech debt. Before a single line of code is written, our elite architects map the exact AI microservices required to scale your enterprise, eliminating the risk of mid-project failure.
                            </p>
                        </Reveal>

                        <Reveal delay={0.6}>
                            <div className="flex items-center gap-6">
                                <Link href="/contact">
                                    <Button className="h-16 px-10 bg-yellow-500 text-black hover:bg-white rounded-none font-black uppercase text-sm tracking-[0.2em] shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                        Secure Your Audit
                                    </Button>
                                </Link>
                                <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-600">
                                    Flat Fee: $2,500 USD
                                </span>
                            </div>
                        </Reveal>
                    </div>

                    {/* Report Graphic */}
                    <Reveal delay={0.5}>
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto hidden lg:block border border-white/5 bg-zinc-950 p-8">
                            <div className="absolute top-4 right-4 text-[10px] uppercase font-black tracking-widest text-zinc-600 border border-zinc-800 px-3 py-1">RESTRICTED DOCUMENT</div>
                            <div className="absolute bottom-4 right-4 text-[10px] uppercase font-black tracking-widest text-yellow-500 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                                Blueprint Generated
                            </div>

                            <div className="mt-12 space-y-6">
                                <div className="flex items-center gap-4 opacity-50">
                                    <Database size={24} className="text-zinc-500" />
                                    <div className="h-4 w-48 bg-zinc-900 rounded" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <Zap size={24} className="text-yellow-500" />
                                    <div className="h-4 w-64 bg-zinc-800 rounded" />
                                </div>
                                <div className="flex items-center gap-4 opacity-75">
                                    <Lock size={24} className="text-zinc-400" />
                                    <div className="h-4 w-32 bg-zinc-900 rounded" />
                                </div>

                                <div className="mt-12 border-t border-zinc-800 pt-8">
                                    <div className="h-2 w-full bg-zinc-900 mb-2" />
                                    <div className="h-2 w-3/4 bg-zinc-900 mb-2" />
                                    <div className="h-2 w-5/6 bg-zinc-900 mb-6" />

                                    <div className="inline-block bg-yellow-500/10 text-yellow-500 text-[10px] font-black tracking-widest uppercase px-4 py-2 border border-yellow-500/20">
                                        Approved for Execution
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* WHAT YOU GET */}
            <section className="py-24 px-6 relative bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="text-center mb-20">
                            <h2 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.5em] mb-4">The Deliverables</h2>
                            <h3 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-4">Inside The <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,1)' }}>Blueprint</span></h3>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: "01", icon: Database, title: "Tech Stack Mapping", text: "We analyze your legacy systems and define the exact cloud-native microservices, databases, and LLM integrations required." },
                            { step: "02", icon: Lock, title: "Risk & Compliance Audit", text: "We architect the security protocols. Ensuring SOC2 readiness, HIPAA compliance, and data sovereignty before a single module is built." },
                            { step: "03", icon: Code2, title: "Execution Roadmap", text: "A phase-by-phase timeline with fixed-fee pricing for the core build. No hourly estimation tricks. A hard delivery guarantee." }
                        ].map((item, idx) => (
                            <Reveal key={idx} delay={idx * 0.2}>
                                <div className="bg-black border border-white/5 p-10 relative overflow-hidden h-full flex flex-col group hover:border-yellow-500/50 transition-colors">
                                    <div className="text-8xl font-display font-black text-white/5 absolute -top-4 -right-4 select-none group-hover:text-yellow-500/10 transition-colors">{item.step}</div>
                                    <item.icon className="text-zinc-600 mb-8" size={32} />
                                    <h4 className="text-xl font-bold uppercase tracking-widest text-white mb-4">{item.title}</h4>
                                    <p className="text-zinc-400 font-light text-sm leading-relaxed mb-auto">
                                        {item.text}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE GUARANTEE */}
            <section className="py-24 px-6 border-t border-white/5 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <Shield className="text-yellow-500 mx-auto mb-8 animate-pulse" size={48} />
                        <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tighter mb-8 max-w-2xl mx-auto leading-tight">
                            Credit Applied to Your <br /> Core Build.
                        </h2>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed mb-12">
                            The Architecture Audit is the mandatory Phase 1 for all Kiaan Technology enterprise engagements. However, if you choose to proceed with our engineering pod for the Phase 2 Execution Build, the entire $2,500 audit fee is credited towards your project.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button className="h-16 px-12 bg-white text-black hover:bg-yellow-500 rounded-none font-black uppercase text-sm tracking-[0.2em] transition-all flex items-center gap-4">
                                    Start Phase 1 <ArrowRight size={16} />
                                </Button>
                            </Link>
                        </div>
                        <p className="mt-8 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                            Subject to engineering pod availability.
                        </p>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
