import React from 'react';
import Link from 'next/link';
import {
    Home,
    Compass,
    Layers,
    Cpu,
    Briefcase,
    GraduationCap,
    Info,
    Mail,
    ArrowRight,
    ShieldAlert,
    Terminal,
    Sparkles
} from 'lucide-react';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';

export default function NotFound() {
    const quickLinks = [
        {
            title: "Home Gateway",
            desc: "Return to the main enterprise dashboard",
            href: "/",
            icon: Home,
            badge: "Main"
        },
        {
            title: "Our Services",
            desc: "AI automation & custom engineering",
            href: "/services",
            icon: Cpu,
            badge: "Tech"
        },
        {
            title: "Solutions Suite",
            desc: "ERP, CRM & industry automation",
            href: "/solutions",
            icon: Layers,
            badge: "Enterprise"
        },
        {
            title: "Case Archive",
            desc: "Verified client results & blueprints",
            href: "/case-studies",
            icon: Briefcase,
            badge: "Proof"
        },
        {
            title: "SaaS Products",
            desc: "Explore 100+ business modules",
            href: "/products",
            icon: Compass,
            badge: "Modules"
        },
        {
            title: "Internship Track",
            desc: "40+ specialized engineering tracks",
            href: "/internship",
            icon: GraduationCap,
            badge: "Career"
        },
        {
            title: "Engineering Protocol",
            desc: "Learn about Kiaan Tech architecture",
            href: "/about",
            icon: Info,
            badge: "About"
        },
        {
            title: "Contact Architect",
            desc: "Direct technical consultation",
            href: "/contact",
            icon: Mail,
            badge: "Support"
        }
    ];

    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-500 selection:text-black min-h-screen pt-28 pb-20 px-6 relative overflow-hidden flex flex-col justify-between">
            {/* Background Ambient FX */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(234,179,8,0.07)_0%,_transparent_60%)] pointer-events-none" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yellow-500/5 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-7xl w-full mx-auto relative z-10 my-auto">
                
                {/* Status Badge */}
                <div className="flex justify-center mb-6">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-yellow-500/30 px-5 py-2 rounded-full backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-yellow-500 flex items-center gap-2">
                                <ShieldAlert size={14} /> ERROR 404 // ROUTE_NOT_FOUND
                            </span>
                        </div>
                    </Reveal>
                </div>

                {/* Hero Glitch / 404 Big Display */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <Reveal delay={0.1}>
                        <div className="relative inline-block">
                            <h1 className="text-7xl sm:text-9xl md:text-[13rem] font-display uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-700 select-none">
                                404
                            </h1>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 blur-sm">
                                <span className="text-7xl sm:text-9xl md:text-[13rem] font-display uppercase tracking-tighter text-yellow-500">
                                    404
                                </span>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display uppercase tracking-tight text-white mb-4">
                            System Node <span className="text-yellow-500">Disconnected</span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mb-8">
                            The requested architectural route or endpoint does not exist or has been relocated within our enterprise cloud network.
                        </p>
                    </Reveal>

                    {/* Primary CTAs */}
                    <Reveal delay={0.4} width="100%">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                            <Link href="/" className="w-full sm:w-auto">
                                <Button className="h-14 px-8 bg-yellow-500 text-black hover:bg-white hover:text-black rounded-none font-black uppercase text-xs tracking-[0.2em] shadow-[4px_4px_0_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all w-full justify-center gap-3">
                                    <Home size={16} /> Return To Gateway
                                </Button>
                            </Link>
                            <Link href="/demo" className="w-full sm:w-auto">
                                <Button variant="outline" className="h-14 px-8 border-white/20 hover:border-yellow-500 text-white rounded-none font-black uppercase text-xs tracking-[0.2em] transition-all gap-3 w-full justify-center">
                                    <Sparkles size={16} className="text-yellow-500" /> Start A Project
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>

                {/* Section Divider with Header */}
                <div className="border-t border-white/10 pt-12 mt-12">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 block mb-1">
                                System Navigation Blueprints
                            </span>
                            <h3 className="text-xl md:text-2xl font-display uppercase text-white">
                                Explore Verified <span className="text-zinc-500">Destinations</span>
                            </h3>
                        </div>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-yellow-500 transition-colors group"
                        >
                            Need Custom Assistance? <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Navigation Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {quickLinks.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <Reveal key={idx} delay={0.1 * idx}>
                                    <Link href={item.href} className="block group h-full">
                                        <div className="p-6 bg-zinc-950/80 border border-white/5 hover:border-yellow-500/40 backdrop-blur-sm transition-all duration-500 h-full flex flex-col justify-between relative overflow-hidden group-hover:bg-zinc-900/60">
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/5 rounded-bl-full pointer-events-none group-hover:bg-yellow-500/10 transition-colors" />
                                            
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="w-10 h-10 bg-zinc-900 border border-white/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black group-hover:border-yellow-500 transition-all duration-300">
                                                        <IconComponent size={20} strokeWidth={1.5} />
                                                    </div>
                                                    <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 border border-white/10 bg-black/60 text-zinc-400 group-hover:border-yellow-500/40 group-hover:text-yellow-500 transition-colors">
                                                        {item.badge}
                                                    </span>
                                                </div>
                                                <h4 className="text-base font-display uppercase tracking-tight text-white mb-1 group-hover:text-yellow-500 transition-colors flex items-center gap-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                                                    {item.desc}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors pt-3 border-t border-white/5">
                                                Navigate Route <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform text-yellow-500" />
                                            </div>
                                        </div>
                                    </Link>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>

                {/* Direct CTA Banner */}
                <div className="mt-12 p-8 md:p-10 border border-yellow-500/20 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-full bg-yellow-500/5 blur-[80px] pointer-events-none" />
                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-2">
                                <Terminal size={14} /> Immediate Engineering Support
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display uppercase text-white tracking-tight">
                                Looking for a Specific <span className="text-yellow-500">Enterprise Solution?</span>
                            </h3>
                            <p className="text-zinc-400 text-xs md:text-sm font-light mt-1 max-w-2xl">
                                Speak directly with our Lead Solution Architects to discuss your custom software, AI workflow automation, or ERP integration roadmap.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 flex-shrink-0">
                            <Link href="/contact">
                                <Button className="h-12 px-6 bg-yellow-500 text-black hover:bg-white font-black uppercase text-xs tracking-widest rounded-none transition-all">
                                    Contact Us Now
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" className="h-12 px-6 border-white/20 hover:border-yellow-500 text-white font-black uppercase text-xs tracking-widest rounded-none transition-all">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Tagline */}
            <div className="max-w-7xl w-full mx-auto relative z-10 mt-12 text-center border-t border-white/5 pt-6">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
                    Kiaan Technology &copy; {new Date().getFullYear()} &middot; AI-Driven Business Automation & Digital Acceleration
                </p>
            </div>
        </div>
    );
}
