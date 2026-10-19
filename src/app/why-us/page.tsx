import React from 'react';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import { Shield, Zap, Target, Search, Clock, Cpu, Code, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhyUsPage() {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black pt-32 pb-16">

            {/* HEROS SECTION */}
            <section className="relative px-6 py-20 lg:py-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,_rgba(234,179,8,0.05)_0%,_transparent_50%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 bg-zinc-900 border border-yellow-500/20 px-6 py-2 mb-8">
                            <Target size={14} className="text-yellow-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
                                Competitive Domination
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-[0.9] mb-8 max-w-5xl">
                            We don't sell hours.<br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(234,179,8,1)' }}>
                                We architect velocity.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <p className="text-lg md:text-2xl text-zinc-300 font-light leading-relaxed mb-10 border-l-2 border-yellow-500 pl-6 max-w-3xl">
                            Traditional software agencies trap you in endless hourly billing cycles. Offshore factories deliver fragile, unscalable code. Kiaan Technology deploys pre-built enterprise AI ecosystems 3x faster than the industry standard.
                        </p>
                    </Reveal>

                    <Reveal delay={0.6}>
                        <div className="flex gap-4">
                            <Link href="/architecture-audit">
                                <Button className="h-16 px-10 bg-yellow-500 text-black hover:bg-white rounded-none font-black uppercase text-sm tracking-[0.2em] shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                    Book Technical Audit
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* THE NEW CATEGORY SECTION */}
            <section className="py-24 px-6 relative bg-zinc-950">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <Reveal>
                            <h2 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.5em] mb-12">The Agency Trap</h2>
                            <div className="space-y-6 text-2xl md:text-4xl font-display uppercase tracking-tighter leading-[1.1] text-zinc-300">
                                <p className="opacity-40 line-through">You don't need "React Developers".</p>
                                <p className="opacity-40 line-through">You don't need "Agile Story Points".</p>
                                <p className="text-white">You need <span className="text-yellow-500">Autonomous Architecture</span>.</p>
                            </div>
                        </Reveal>
                    </div>
                    <div>
                        <Reveal delay={0.2}>
                            <p className="text-base text-zinc-400 leading-relaxed font-light mb-8">
                                Mid-market enterprises are drowning in fragmented legacy systems. "Big Four" consulting firms charge $5M to tell you what's wrong. Cheap offshore dev shops fail to deliver architectural thinking, resulting in systems that collapse under scale.
                            </p>
                            <p className="text-base text-zinc-400 leading-relaxed font-light border-l-2 border-zinc-700 pl-4">
                                <strong>Kiaan Technology invented a new category.</strong> We act as your outsourced fractional CTO combined with an elite execution pod. We use proprietary, pre-built microservices (The Kiaan Velocity Protocol) to bypass the plumbing and build the exact AI logic your business needs to scale.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* COMPETITOR MATRIX */}
            <section className="py-24 px-6 border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-4">The <span className="text-yellow-500 text-transparent" style={{ WebkitTextStroke: '1px rgba(234,179,8,1)' }}>Matrix</span></h2>
                            <p className="text-zinc-400 font-light tracking-wide uppercase text-[10px]">How we systematically eliminate the competition.</p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                        {/* Competitor 1 */}
                        <Reveal delay={0.1}>
                            <div className="bg-black p-10 h-full flex flex-col">
                                <Search className="text-zinc-600 mb-6" size={32} />
                                <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-2">Local US/UK Agencies</h3>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mb-6">High Cost / Medium Speed</div>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8 flex-grow">
                                    Extremely expensive ($250+/hr). Often bureaucratic and slow. They build good software, but your ROI timeline is stretched over 18 months.
                                </p>
                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <div className="text-[10px] uppercase font-bold text-yellow-500 mb-2">The Kiaan Advantage</div>
                                    <p className="text-white text-sm font-light italic">Silicon Valley architecture at a globally agile, massive-margin price point.</p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Competitor 2 */}
                        <Reveal delay={0.2}>
                            <div className="bg-black p-10 h-full flex flex-col">
                                <Clock className="text-zinc-600 mb-6" size={32} />
                                <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-2">Large IT Firms (TCS, etc)</h3>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mb-6">Extreme Cost / Extreme Slow</div>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8 flex-grow">
                                    Massive corporate bloat. Outdated technology stacks. They are order-takers who bill millions for multi-year waterfall deployments that are obsolete upon launch.
                                </p>
                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <div className="text-[10px] uppercase font-bold text-yellow-500 mb-2">The Kiaan Advantage</div>
                                    <p className="text-white text-sm font-light italic">We deploy cutting-edge Serverless AI and Go in weeks, with zero corporate bloat.</p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Competitor 3 */}
                        <Reveal delay={0.3}>
                            <div className="bg-black p-10 h-full flex flex-col">
                                <Code className="text-zinc-600 mb-6" size={32} />
                                <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-2">Freelancers / Upwork</h3>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mb-6">Low Cost / Extreme Risk</div>
                                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8 flex-grow">
                                    Zero strategic business acumen. High project abandonment rate. They write code but fail to understand the underlying business model or security requirements.
                                </p>
                                <div className="mt-auto pt-6 border-t border-white/10">
                                    <div className="text-[10px] uppercase font-bold text-yellow-500 mb-2">The Kiaan Advantage</div>
                                    <p className="text-white text-sm font-light italic">Enterprise-grade SOC2/GDPR compliance guaranteed by strict SLAs.</p>
                                </div>
                            </div>
                        </Reveal>

                        {/* Us */}
                        <Reveal delay={0.4}>
                            <div className="bg-zinc-950 p-10 h-full flex flex-col relative overflow-hidden group">
                                <div className="absolute inset-0 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors" />
                                <Cpu className="text-yellow-500 mb-6 relative z-10 animate-pulse" size={32} />
                                <h3 className="text-xl font-bold uppercase tracking-widest text-yellow-500 mb-2 relative z-10">Kiaan Technology</h3>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-green-500 mb-6 relative z-10">High Velocity / High Margin</div>
                                <p className="text-zinc-300 text-sm font-light leading-relaxed mb-8 flex-grow relative z-10">
                                    We act as an outsourced fractional CTO pod. We aggressively optimize for your profit margins, utilizing proprietary AI infrastructure to slash development time.
                                </p>
                                <div className="mt-auto pt-6 border-t border-yellow-500/20 relative z-10">
                                    <div className="text-[10px] uppercase font-bold text-yellow-500 mb-2">The Ultimate Moat</div>
                                    <p className="text-white text-sm font-light italic">We don't sell code. We sell an autonomous, highly profitable business outcome.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* PRICING PSYCHOLOGY */}
            <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    <Reveal className="lg:w-1/2">
                        <div className="relative p-12 bg-black border border-white/10">
                            <Shield className="text-yellow-500 mb-8" size={48} />
                            <h2 className="text-4xl font-display uppercase tracking-tighter mb-6">Value + Velocity Pricing</h2>
                            <p className="text-lg text-zinc-400 font-light line-through mb-4">
                                $150/hr × 1000 hours = $150,000 (And takes 9 months)
                            </p>
                            <p className="text-2xl text-white font-bold mb-6">
                                The Proprietary AI Migration Module = $85,000
                            </p>
                            <p className="text-base text-zinc-400 font-light leading-relaxed">
                                Because we possess a massive library of pre-built, battle-tested microservices (Authentication, Payments, LLM wrappers, Multi-tenant DBs), we do not charge you to reinvent the wheel. We charge a fixed engagement fee for the *velocity* at which we deploy the precise business logic your enterprise needs.
                            </p>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-zinc-300">
                                    <CheckCircle2 className="text-green-500" size={16} /> Zero Hourly Bloat
                                </li>
                                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-zinc-300">
                                    <CheckCircle2 className="text-green-500" size={16} /> Predictable CapEx
                                </li>
                                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-zinc-300">
                                    <CheckCircle2 className="text-green-500" size={16} /> 3x Faster Deployment
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2} className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-8 leading-tight">
                            Ready to exit <br />
                            the <span className="text-red-500">legacy</span> trap?
                        </h2>
                        <p className="text-xl text-zinc-400 font-light mb-10">
                            Stop paying agencies to learn on your dime. Partner with an elite architectural squad and ship enterprise AI systems at startup speeds.
                        </p>
                        <Link href="/architecture-audit">
                            <Button className="h-16 px-10 bg-white text-black hover:bg-yellow-500 rounded-none font-black uppercase text-sm tracking-[0.2em] transition-all flex items-center gap-4">
                                View Technical Audit <ArrowRight size={16} />
                            </Button>
                        </Link>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
