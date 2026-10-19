import React from 'react';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import { Rocket, Box, Network, Bot, Settings, Search, Code2, ArrowRight } from 'lucide-react';

export default function MethodologyPage() {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black pt-32 pb-16">

            {/* HEROS SECTION */}
            <section className="relative px-6 py-20 lg:py-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(234,179,8,0.1),_transparent_50%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 bg-zinc-900 border border-yellow-500/20 px-6 py-2 mb-8">
                            <Rocket size={14} className="text-yellow-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
                                Proprietary Engineering IP
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-[0.9] mb-8">
                            The Kiaan <br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(234,179,8,1)' }}>
                                Velocity Protocol
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <p className="text-lg md:text-2xl text-zinc-300 font-light leading-relaxed mb-10 max-w-4xl mx-auto italic">
                            How we build autonomous enterprise software 3x faster than traditional agencies, without writing technical debt.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* THE PROBLEM WITH AGENCIES */}
            <section className="py-24 px-6 relative bg-zinc-950">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <h2 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.5em] mb-4">The Custom Software Lie</h2>
                        <h3 className="text-3xl md:text-5xl font-display uppercase tracking-tighter mb-8">Why "From Scratch" <span className="text-zinc-600">is a Scam.</span></h3>

                        <div className="space-y-6 text-zinc-400 font-light leading-relaxed border-l-2 border-zinc-800 pl-6">
                            <p>
                                90% of enterprise software applications share the same foundational architecture: Authentication, Role-based access control, billing engines, database routing, and API limits.
                            </p>
                            <p>
                                When a traditional agency bills you $150/hour to build an application "from scratch," they are charging you to reinvent the core plumbing that has already been perfected thousands of times. They drag out Phase 1 for six months just laying bricks.
                            </p>
                            <p className="text-white font-medium italic">
                                At Kiaan Technology, we decoupled the plumbing from the business logic.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* THE PROTOCOL STAGES */}
            <section className="py-24 px-6 relative border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-4">The 4-Stage <span className="text-yellow-500">Engine</span></h2>
                            <p className="text-zinc-400 font-light tracking-wide uppercase text-[10px]">How we execute the Protocol.</p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Stage 1 */}
                        <Reveal delay={0.1}>
                            <div className="border border-white/10 bg-black p-10 h-full relative group hover:border-yellow-500/50 transition-colors">
                                <div className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-8">Stage 01</div>
                                <Search className="text-yellow-500 mb-6" size={32} />
                                <h3 className="text-2xl font-display uppercase tracking-tighter text-white mb-4">The Architecture Audit</h3>
                                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                                    Before we write code, our architects conduct a deep-dive X-Ray of your legacy systems. We map exactly what needs decoupling and design the target microservice ecosystem. We guarantee a fixed-fee proposal based on this blueprint.
                                </p>
                                <div className="text-[10px] uppercase font-bold text-yellow-500 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> Eliminates Scope Creep
                                </div>
                            </div>
                        </Reveal>

                        {/* Stage 2 */}
                        <Reveal delay={0.2}>
                            <div className="border border-white/10 bg-black p-10 h-full relative group hover:border-yellow-500/50 transition-colors">
                                <div className="text-[10px] uppercase font-black tracking-[widest] text-zinc-600 mb-8">Stage 02</div>
                                <Box className="text-yellow-500 mb-6" size={32} />
                                <h3 className="text-2xl font-display uppercase tracking-tighter text-white mb-4">Core Infrastructure Injection</h3>
                                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                                    Instead of building from scratch, we inject our proprietary library of serverless microservices. Identity management, RBAC, payment gateways, and highly-scalable database schemas are deployed on Day 1, saving 500+ hours of billable bloat.
                                </p>
                                <div className="text-[10px] uppercase font-bold text-yellow-500 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> Deploys 5x Faster
                                </div>
                            </div>
                        </Reveal>

                        {/* Stage 3 */}
                        <Reveal delay={0.3}>
                            <div className="border border-white/10 bg-black p-10 h-full relative group hover:border-yellow-500/50 transition-colors">
                                <div className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-8">Stage 03</div>
                                <Bot className="text-yellow-500 mb-6" size={32} />
                                <h3 className="text-2xl font-display uppercase tracking-tighter text-white mb-4">Custom AI Business Logic</h3>
                                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                                    This is where your specific "secret sauce" is coded. Because the plumbing is handled, 90% of our engineering brainpower is spent writing the custom machine learning models, predictive algorithms, and complex integrations that actually make your company money.
                                </p>
                                <div className="text-[10px] uppercase font-bold text-yellow-500 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> Pure ROI Focus
                                </div>
                            </div>
                        </Reveal>

                        {/* Stage 4 */}
                        <Reveal delay={0.4}>
                            <div className="border border-white/10 bg-black p-10 h-full relative group hover:border-yellow-500/50 transition-colors">
                                <div className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-8">Stage 04</div>
                                <Network className="text-yellow-500 mb-6" size={32} />
                                <h3 className="text-2xl font-display uppercase tracking-tighter text-white mb-4">Architecture as a Service (AaaS)</h3>
                                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">
                                    Launch is not the end. We transition into a dedicated engineering pod under a strict Service Level Agreement (SLA). We continuously monitor nodes, patch security vulnerabilities, and fine-tune your autonomous workflows to ensure zero downtime.
                                </p>
                                <div className="text-[10px] uppercase font-bold text-yellow-500 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> Guaranteed 99.9% Uptime
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* VISUAL WORKFLOW INFOGRAPHIC SECTION */}
            <section className="py-24 px-6 border-t border-white/5 bg-zinc-950">
                <div className="max-w-5xl mx-auto text-center">
                    <Reveal>
                        <h2 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.5em] mb-4">Operational Architecture</h2>
                        <h3 className="text-3xl md:text-5xl font-display uppercase tracking-tighter mb-12">The Development <span className="text-zinc-600">Workflow Visualized</span></h3>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="border border-white/10 bg-black p-4 md:p-8 max-w-4xl mx-auto shadow-2xl">
                            <img
                                src="/images/development-process-optimized.webp"
                                alt="Kiaan Technology Software Development Process Infographic"
                                width={1024}
                                height={1024}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>


            {/* CALL TO ACTION */}
            <section className="py-24 px-6 bg-yellow-500 text-black text-center">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-8 leading-tight font-black">
                            Experience the Protocol.
                        </h2>
                        <p className="text-xl font-medium mb-10 max-w-2xl mx-auto">
                            Deploy highly scalable enterprise software without the standard agency friction. Enter Phase 1 today.
                        </p>
                        <Link href="/architecture-audit">
                            <Button className="h-16 px-12 bg-black text-white hover:bg-white hover:text-black rounded-none font-black uppercase text-sm tracking-[0.2em] transition-all flex items-center gap-4 mx-auto">
                                Request Architecture Audit <ArrowRight size={16} />
                            </Button>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
