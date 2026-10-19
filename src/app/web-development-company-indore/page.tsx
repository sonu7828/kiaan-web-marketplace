import React from 'react';
import { Layout, Zap, Globe, Shield, Search, ArrowRight, CheckCircle2, Star, Smartphone, Laptop } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { IndustrySolutions } from '@/components/home/IndustrySolutions';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Web Development Company in Indore | Scalable Web Solutions - Kiaan Technology",
    description: "Expert web development company in Indore. We build high-performance, SEO-friendly websites and complex web applications using Next.js, React, and modern tech stacks.",
};

export default function WebDevelopmentIndore() {
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
                                "name": "Web Development Company in Indore",
                                "item": "https://kiaantechnology.com/web-development-company-indore"
                            }
                        ]
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent opacity-50" />
                <div className="container mx-auto px-4 relative z-10">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Laptop size={12} className="text-blue-500" />
                            Premium Web Development Company in Indore
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-8 max-w-5xl">
                            Web Development <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Company in Indore</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mb-12 leading-relaxed font-light">
                            High-speed, SEO-optimized, and conversion-focused web solutions. We are the leading Web Development Company in Indore, specializing in next-gen digital experiences.
                        </p>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/start-project">
                                <Button className="bg-blue-600 text-white px-10 py-5 text-lg font-bold uppercase rounded-none border-none shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                    Get Started
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" className="px-10 py-5 text-lg font-bold uppercase rounded-none border-zinc-800 hover:bg-zinc-900 text-white">
                                    Our Stack
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
                                <h2 className="text-4xl md:text-5xl font-display uppercase mb-8 text-white">Dominate the Web with <span className="text-blue-500">Expert Engineering</span></h2>
                                <div className="prose prose-invert prose-lg max-w-none text-zinc-300 space-y-6">
                                    <p>
                                        When searching for a <strong>Web Development Company in Indore</strong>, you need more than just a website. You need a digital asset that performs. Kiaan Technology specializes in <strong>Web Application Development in Indore</strong>, delivering high-speed sites that load in under 2 seconds and rank #1 on Google.
                                    </p>
                                    <h3 className="text-2xl font-bold text-white uppercase mt-12 mb-4">Mastering Modern Web Technologies</h3>
                                    <p>
                                        Our expertise as a <strong>Web Development Company in Indore</strong> spans across the most advanced frameworks. We utilize <strong>Next.js</strong> for server-side rendering, <strong>React</strong> for dynamic interfaces, and <strong>Tailwind CSS</strong> for pixel-perfect designs. This ensures your website is not only beautiful but also technically superior to your competitors.
                                    </p>
                                    <p>
                                        We are also a recognized <strong>E-commerce Development Company in Indore</strong>, building robust online stores that handle high traffic and complex payment integrations seamlessly. Our <strong>Custom Web Solutions</strong> are tailored to your specific business goals, whether it's lead generation, brand awareness, or direct sales.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-none relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                                            <h4 className="text-xl font-bold text-white mb-4">SEO Built-In</h4>
                                            <p className="text-sm">Every line of code is written with search engines in mind. We ensure semantic HTML, schema markup, and optimized metadata from the start.</p>
                                        </div>
                                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-none relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
                                            <h4 className="text-xl font-bold text-white mb-4">Mobile-First Design</h4>
                                            <p className="text-sm">Over 70% of web traffic is mobile. Our responsive designs ensure a flawless experience across all devices and screen sizes.</p>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white uppercase mt-12 mb-4">The Best Web Development in Indore</h3>
                                    <p>
                                        Our process differentiates us from any other <strong>IT Company in Indore</strong>. We start with a deep dive into your business requirements, followed by UI/UX wireframing that focuses on user flow and conversion. Our <strong>Full Stack Web Developers in Indore</strong> then bring the vision to life with clean, maintainable code.
                                    </p>
                                    <p>
                                        If you're looking for <strong>Web Design Indore</strong>, Kiaan Technology provides a unique blend of creative aesthetics and technical performance. We are committed to making you the digital leader in your industry.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                            <div className="p-8 bg-blue-600 text-white mb-8">
                                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Free SEO Audit</h3>
                                <p className="mb-8 font-medium">Is your current website losing you money? Get a free professional audit today.</p>
                                <Link href="/contact">
                                    <Button className="w-full bg-black text-white hover:bg-zinc-900 rounded-none border-none py-6 font-bold uppercase tracking-widest text-sm">
                                        Analyze My Site
                                    </Button>
                                </Link>
                            </div>
                            <div className="p-8 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                                <h4 className="text-sm font-black uppercase text-zinc-500 mb-6 tracking-[0.2em]">Our Tech Stack</h4>
                                <div className="space-y-4">
                                    {['Next.js / React', 'Node.js / Express', 'Tailwind CSS', 'PostgreSQL / MongoDB', 'AWS / Vercel', 'Python / Django'].map((tech) => (
                                        <div key={tech} className="flex items-center gap-3 text-zinc-300 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-black border-t border-zinc-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">Web FAQ</h2>
                        <p className="text-zinc-400">Common questions about Web Development in Indore.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "How much does a professional website cost in Indore?", a: "Website costs depend on functionality. A professional corporate site starts at a different price point than a complex e-commerce platform. Contact us for a precise quote tailored to your business in Indore." },
                            { q: "Will my website be mobile-friendly?", a: "Yes, every website we build as a top Web Development Company in Indore is 100% responsive and tested across all mobile and tablet devices." },
                            { q: "Do you provide hosting and domain services?", a: "We assist with the setup of high-performance hosting environments (AWS, Vercel, etc.) and domain management to ensure maximum uptime for your website." },
                            { q: "Can you redesign my existing Indore business website?", a: "Absolutely. We specialize in modernizing legacy websites with a focus on improving speed, SEO, and the overall user interface." }
                        ].map((faq, i) => (
                            <div key={i} className="p-6 bg-zinc-900/30 border border-zinc-800 hover:border-blue-500/30 transition-colors group">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                                    {faq.q}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-display uppercase mb-8 leading-none">Let's Build Your <br />Digital Identity</h2>
                    <Link href="/contact">
                        <Button className="bg-black text-white px-12 py-6 text-xl font-bold uppercase rounded-none border-none hover:bg-zinc-900 transition-all">
                            Request a Proposal
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
