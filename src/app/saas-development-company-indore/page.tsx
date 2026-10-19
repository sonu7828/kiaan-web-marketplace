import React from 'react';
import { Layers, Zap, Globe, Shield, Database, ArrowRight, CheckCircle2, Star, Cpu, Server } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "SaaS Development Company in Indore | B2B SaaS Platforms - Kiaan Technology",
    description: "Premier SaaS development company in Indore. Specializing in multi-tenant architectures, cloud-native SaaS solutions, and scalable software products for global enterprises.",
};

export default function SaaSDevelopmentIndore() {
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
                                "name": "SaaS Development Company in Indore",
                                "item": "https://kiaantechnology.com/saas-development-company-indore"
                            }
                        ]
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-24 pb-20 overflow-hidden border-b border-zinc-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent opacity-50" />
                <div className="container mx-auto px-4 relative z-10">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Layers size={12} className="text-yellow-500" />
                            Specialized SaaS Development Company in Indore
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-8 max-w-5xl">
                            SaaS Development <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Company in Indore</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mb-12 leading-relaxed font-light">
                            Architecting the next generation of B2B and B2C software. We are Indore's leading SaaS Development Company, building scalable cloud platforms.
                        </p>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/start-project">
                                <Button className="bg-red-600 text-white px-10 py-5 text-lg font-bold uppercase rounded-none border-none shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                    Build Your SaaS
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="px-10 py-5 text-lg font-bold uppercase rounded-none border-zinc-800 hover:bg-zinc-900 text-white">
                                    Consultation
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
                                <h2 className="text-4xl md:text-5xl font-display uppercase mb-8 text-white">Enterprise-Grade <span className="text-red-600">SaaS Architecture</span></h2>
                                <div className="prose prose-invert prose-lg max-w-none text-zinc-300 space-y-6">
                                    <p>
                                        Building a successful Software-as-a-Service product requires a deep understanding of scalability, multi-tenancy, and security. As a premier <strong>SaaS Development Company in Indore</strong>, Kiaan Technology specializes in creating high-performance cloud applications that deliver value from day one.
                                    </p>
                                    <h3 className="text-2xl font-bold text-white uppercase mt-12 mb-4">Indore’s Hub for SaaS Infrastructure</h3>
                                    <p>
                                        Our <strong>SaaS Solutions in Indore</strong> are built on solid architectural foundations. We utilize microservices to ensure that each component of your platform can scale independently. Whether you're building an AI-powered analytics tool or a complex HR management system, our <strong>SaaS Platform Developers in Indore</strong> have the expertise to execute your vision.
                                    </p>
                                    <p>
                                        We are also a leading <strong>B2B SaaS Development Company in Indore</strong>, focusing on the unique requirements of enterprise clients, including advanced RBAC (Role-Based Access Control), SSO integration, and comprehensive API layers for third-party connectivity.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-none relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />
                                            <h4 className="text-xl font-bold text-white mb-4">Multi-Tenant Logic</h4>
                                            <p className="text-sm">Secure data isolation for thousands of users on a single infrastructure, ensuring privacy and performance for every client.</p>
                                        </div>
                                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-none relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
                                            <h4 className="text-xl font-bold text-white mb-4">Cloud Native</h4>
                                            <p className="text-sm">Leveraging AWS, Azure, and Google Cloud to provide zero-downtime availability and auto-scaling capabilities.</p>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white uppercase mt-12 mb-4">Why Choose Us for SaaS Development in Indore?</h3>
                                    <p>
                                        Kiaan Technology stands out among <strong>IT Companies in Indore</strong> for our iterative development process. we help you launch an MVP (Minimum Viable Product) quickly to test the market, followed by data-driven scale-ups. Our <strong>Custom SaaS Software</strong> is designed to reduce churn and maximize user lifetime value (LTV).
                                    </p>
                                    <p>
                                        From subscription management and billing system integration (Stripe, Razorpay) to advanced telemetry and logging, we cover all the technical bases so you can focus on building your business.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                            <div className="p-8 bg-red-600 text-white mb-8">
                                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Rapid MVP Launch</h3>
                                <p className="mb-8 font-medium">Have an idea? We can build and launch your core SaaS product in as little as 10 weeks.</p>
                                <Link href="/start-project">
                                    <Button className="w-full bg-black text-white hover:bg-zinc-900 rounded-none border-none py-6 font-bold uppercase tracking-widest text-sm">
                                        Get Pricing
                                    </Button>
                                </Link>
                            </div>
                            <div className="p-8 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                                <h4 className="text-sm font-black uppercase text-zinc-500 mb-6 tracking-[0.2em]">SaaS Features</h4>
                                <div className="space-y-4 text-sm font-medium">
                                    {['Multi-Tenant Database Design', 'Stripe / Subscription Sync', 'Custom Dashboard UI', 'API-First Architecture', 'SSO / SAML Authentication', 'Real-time Webhook Systems'].map((feat) => (
                                        <div key={feat} className="flex items-center gap-3 text-zinc-300">
                                            <CheckCircle2 size={16} className="text-red-600" />
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-red-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-display uppercase mb-8 leading-none">Scale Your SaaS <br />From Indore</h2>
                    <Link href="/contact">
                        <Button className="bg-black text-white px-12 py-6 text-xl font-bold uppercase rounded-none border-none hover:bg-zinc-900 transition-all">
                            Talk to a SaaS Architect
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
