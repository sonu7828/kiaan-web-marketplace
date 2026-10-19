import React from 'react';
import { Shield, Zap, Globe, Database, Monitor, ArrowRight, CheckCircle2, Star, Server, Building2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { IndustrySolutions } from '@/components/home/IndustrySolutions';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "IT Company in Indore | Managed IT Services & Consulting - Kiaan Technology",
    description: "Full-service IT company in Indore offering managed IT services, infrastructure consulting, and cybersecurity solutions for growing businesses in MP.",
};

export default function ITCompanyIndore() {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black">
            {/* Breadcrumb Schema */}
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://kiaantechnology.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "IT Company in Indore",
                                "item": "https://kiaantechnology.com/it-company-indore"
                            }
                        ]
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent opacity-50" />
                <div className="container mx-auto px-4 relative z-10">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Building2 size={12} className="text-yellow-500" />
                            Largest IT Managed Services Provider in Indore
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-8 max-w-5xl">
                            IT Company <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">in Indore</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mb-12 leading-relaxed font-light">
                            Comprehensive Managed IT Services and Digital Solutions. We are the most trusted IT Company in Indore for end-to-end technology management.
                        </p>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/contact">
                                <Button className="bg-yellow-500 text-black px-10 py-5 text-lg font-bold uppercase rounded-none border-none shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                    Get IT Support
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" className="px-10 py-5 text-lg font-bold uppercase rounded-none border-zinc-800 hover:bg-zinc-900 text-white">
                                    All Services
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-zinc-950/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8">
                            <Reveal>
                                <h2 className="text-4xl md:text-5xl font-display uppercase mb-8 text-white">Complete <span className="text-yellow-500">IT Management</span> in Indore</h2>
                                <div className="prose prose-invert prose-lg max-w-none text-zinc-300 space-y-6">
                                    <p>
                                        In today’s technology-driven world, your business is only as strong as its IT infrastructure. As a premier <strong>IT Company in Indore</strong>, Kiaan Technology provides a 360-degree approach to technology, covering everything from custom software to managed IT services and cloud migration.
                                    </p>
                                    <h3 className="text-2xl font-bold text-white uppercase mt-12 mb-4">Why Businesses Partner with an Indore IT Company</h3>
                                    <p>
                                        Local businesses need a partner who can provide fast response times and deep technical knowledge. Kiaan Technology stands out among <strong>IT Service Providers in Indore</strong> by offering specialized consulting for digital transformation. We help you streamline operations, reduce overhead costs, and secure your data using advanced cybersecurity protocols.
                                    </p>
                                    <p>
                                        Our reputation as the <strong>Best IT Company in Indore</strong> is built on long-term partnerships. We don't just fix problems; we proactively manage your environment to prevent downtime. Our <strong>IT Solutions in Indore</strong> include cloud hosting management, network optimization, and 24/7 technical support.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-none relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
                                            <h4 className="text-xl font-bold text-white mb-4">Proactive Support</h4>
                                            <p className="text-sm">24/7 monitoring and response systems to ensure your business operations in Indore never stop.</p>
                                        </div>
                                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-none relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />
                                            <h4 className="text-xl font-bold text-white mb-4">Data Security</h4>
                                            <p className="text-sm">Industry-leading threat detection and data backup solutions to protect your Indore business from cyber attacks.</p>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white uppercase mt-12 mb-4">Indore IT Services for Every Scale</h3>
                                    <p>
                                        From small startups to large manufacturing units, our IT services in Indore are tailored to fit your specific needs. We are recognized as a top <strong>Enterprise IT Company in Indore</strong>, helping companies integrate advanced ERP systems and business automation software for maximum efficiency.
                                    </p>
                                    <p>
                                        If you're looking for <strong>IT Consulting in Indore</strong>, our senior architects are available for strategic roadmapping, helping you choose the right tech stack for your next five years of growth.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                            <div className="p-8 bg-yellow-500 text-black mb-8">
                                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Need Urgent IT Help?</h3>
                                <p className="mb-8 font-medium">Remote and on-site IT resolution for businesses in Indore. 4-hour SLA response time.</p>
                                <Link href="/contact">
                                    <Button className="w-full bg-black text-white hover:bg-zinc-900 rounded-none border-none py-6 font-bold uppercase tracking-widest text-sm">
                                        Emergency Contact
                                    </Button>
                                </Link>
                            </div>
                            <div className="p-8 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                                <h4 className="text-sm font-black uppercase text-zinc-500 mb-6 tracking-[0.2em]">Our IT Services</h4>
                                <div className="space-y-4 text-sm font-medium">
                                    {['Managed Cloud Hosting', 'Cybersecurity Audit', 'Network Setup & Optimization', 'Database Administration', 'SaaS Implementation', 'Custom IT Roadmapping'].map((svc) => (
                                        <div key={svc} className="flex items-center gap-3 text-zinc-300">
                                            <Shield size={16} className="text-yellow-500" />
                                            {svc}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-yellow-500 text-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-display uppercase mb-8 leading-none">Your Technology <br />Partner in Indore</h2>
                    <Link href="/contact">
                        <Button className="bg-black text-white px-12 py-6 text-xl font-bold uppercase rounded-none border-none hover:bg-zinc-900 transition-all">
                            Partner With Us
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
