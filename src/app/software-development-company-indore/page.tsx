import React from 'react';
import { Code, Zap, Globe, Shield, TrendingUp, ArrowRight, CheckCircle2, Star, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { IndustrySolutions } from '@/components/home/IndustrySolutions';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Software Development Company in Indore | Custom Solutions - Kiaan Technology",
    description: "Leading software development company in Indore offering custom software development, enterprise solutions, and expert IT consulting. Transform your business with Kiaan Technology.",
    openGraph: {
        title: "Software Development Company in Indore | Kiaan Technology",
        description: "Leading software development company in Indore — custom software, enterprise solutions & IT consulting.",
        url: "https://kiaantechnology.com/software-development-company-indore",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "Software Development Company Indore - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development Company in Indore | Kiaan Technology",
        description: "Leading software development company in Indore — custom software, enterprise solutions & IT consulting.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function SoftwareDevelopmentIndore() {
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
                                "name": "Software Development Company in Indore",
                                "item": "https://kiaantechnology.com/software-development-company-indore"
                            }
                        ]
                    })
                }}
            />

            {/* FAQ Schema */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does custom software development cost in Indore?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Costs vary based on complexity, features, and platform requirements. At Kiaan Technology, we provide transparent pricing models ranging from fixed-bid projects to dedicated team augmentation, ensuring you get the best ROI for your investment in Indore."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does it take to build a software product?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "MVP development usually takes 8-12 weeks, while complex enterprise systems can take 6+ months. We use Agile methodologies to provide incremental updates and maintain full transparency throughout the build."
                                }
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
                            <Star size={12} fill="currentColor" />
                            Top Rated Software Development Company in Indore
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-8 max-w-5xl">
                            Software Development <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Company in Indore</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mb-12 leading-relaxed font-light">
                            Kiaan Technology is Indore’s premier destination for high-performance software engineering. We build scalable, enterprise-grade solutions that empower businesses to dominate their respective markets.
                        </p>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/start-project">
                                <Button className="bg-yellow-500 text-black px-10 py-5 text-lg font-bold uppercase rounded-none border-none shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                    Start Your Project
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" className="px-10 py-5 text-lg font-bold uppercase rounded-none border-zinc-800 hover:bg-zinc-900 text-white">
                                    Explore Services
                                </Button>
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Long Form SEO Content Section */}
            <section className="py-20 bg-zinc-950/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-8">
                            <Reveal>
                                <h2 className="text-4xl md:text-5xl font-display uppercase mb-8 text-white">Indore’s Hub for <span className="text-yellow-500">Innovation</span> & Excellence</h2>
                                <div className="prose prose-invert prose-lg max-w-none text-zinc-300 space-y-6">
                                    <p>
                                        In the rapidly evolving digital landscape, choosing the right <strong>Software Development Company in Indore</strong> is critical for your business's success. Indore has emerged as a significant IT hub in India, and Kiaan Technology stands at the forefront of this technological revolution. We don't just write code; we architect solutions that solve real-world business challenges.
                                    </p>
                                    <h3 className="text-2xl font-bold text-white uppercase mt-12 mb-4">Why Businesses Trust Kiaan Technology in Indore</h3>
                                    <p>
                                        As a leading <strong>IT Company in Indore</strong>, we understand the local market dynamics while maintaining global standards of delivery. Our approach to <strong>Custom Software Development in Indore</strong> is rooted in deep technical expertise and a commitment to quality. We specialize in building robust platforms using the MERN stack, Python, and advanced cloud architectures.
                                    </p>
                                    <p>
                                        Our team of expert developers in Indore focuses on <strong>Digital Transformation</strong>, ensuring that your legacy systems are modernized for the future. Whether you are a startup looking for an <strong>App Development Company in Indore</strong> or an established enterprise needing complex <strong>ERP Software Development</strong>, our specialized workflows ensure zero-downtime deployment and maximum performance.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-none relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
                                            <h4 className="text-xl font-bold text-white mb-4">Scalable Architectures</h4>
                                            <p className="text-sm">We design systems that grow with your user base, utilizing AWS and GCP native services for global availability.</p>
                                        </div>
                                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-none relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />
                                            <h4 className="text-xl font-bold text-white mb-4">Security First</h4>
                                            <p className="text-sm">Implementation of bank-grade security protocols, OAuth2, and encrypted data layers to protect your intellectual property.</p>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white uppercase mt-12 mb-4">Comprehensive IT Solutions in Indore</h3>
                                    <p>
                                        Our service portfolio as an <strong>IT Company in Indore</strong> covers the entire software development lifecycle (SDLC). From initial discovery and UI/UX prototyping to full-stack development and DevOps, we provide a seamless experience. Our <strong>Web Development Indore</strong> services are optimized for speed, SEO, and conversion, helping you capture more leads and engage users effectively.
                                    </p>
                                    <p>
                                        We are also recognized as a top <strong>SaaS Development Company in Indore</strong>, helping entrepreneurs launch B2B and B2C platforms with rapid iterations. Our knowledge of microservices architecture allows us to build modules that are independent yet perfectly synced.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Sidebar Stats/CTA */}
                        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                            <div className="p-8 bg-yellow-500 text-black mb-8">
                                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">Need a custom solution?</h3>
                                <p className="mb-8 font-medium">Get a detailed feasibility report and specialized development timeline within 48 hours.</p>
                                <Link href="/contact">
                                    <Button className="w-full bg-black text-white hover:bg-zinc-900 rounded-none border-none py-6 font-bold uppercase tracking-widest text-sm">
                                        Talk to an Expert
                                    </Button>
                                </Link>
                            </div>
                            <div className="p-8 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                                <h4 className="text-sm font-black uppercase text-zinc-500 mb-6 tracking-[0.2em]">Regional Stats</h4>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end border-b border-zinc-800 pb-2">
                                        <span className="text-zinc-400 font-medium">Projects in Indore</span>
                                        <span className="text-2xl font-display text-white">150+</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-zinc-800 pb-2">
                                        <span className="text-zinc-400 font-medium">SaaS Platforms Launched</span>
                                        <span className="text-2xl font-display text-white">45+</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-zinc-800 pb-2">
                                        <span className="text-zinc-400 font-medium">Expert Developers</span>
                                        <span className="text-2xl font-display text-white">60+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reusable Industry Solutions */}
            <IndustrySolutions />

            {/* FAQ Section */}
            <section className="py-20 bg-black border-t border-zinc-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">Common Questions</h2>
                        <p className="text-zinc-400">Everything you need to know about working with Indore's top software team.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "How much does custom software development cost in Indore?", a: "Costs vary based on complexity, features, and platform requirements. At Kiaan Technology, we provide transparent pricing models ranging from fixed-bid projects to dedicated team augmentation, ensuring you get the best ROI for your investment in Indore." },
                            { q: "How long does it take to build a software product?", a: "MVP development usually takes 8-12 weeks, while complex enterprise systems can take 6+ months. We use Agile methodologies to provide incremental updates and maintain full transparency throughout the build." },
                            { q: "Do you provide post-launch maintenance for businesses in Indore?", a: "Absolutely. We offer comprehensive support and maintenance packages, including server monitoring, security updates, and performance optimization to ensure your software remains ahead of the curve." },
                            { q: "Is Kiaan Technology the best IT company in Indore for startups?", a: "Kiaan Technology is highly rated for startups because of our focus on scalable architecture and rapid MVP development. We help startups in Indore secure their technical foundation to handle thousands of concurrent users from day one." },
                            { q: "What technologies do you specialize in?", a: "Our core stack includes React, Next.js, Node.js, Python/Django, and Flutter. We also specialize in AI integrations and cloud-native development for enterprise applications." }
                        ].map((faq, i) => (
                            <div key={i} className="p-6 bg-zinc-900/30 border border-zinc-800 hover:border-yellow-500/30 transition-colors group">
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
            <section className="py-24 bg-yellow-500 text-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-display uppercase mb-8 leading-none">Ready to Build the Future in Indore?</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-12 font-medium">
                        Don't let technical limitations hold your business back. Partner with Indore's most innovative IT team today.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/contact">
                            <Button className="bg-black text-white px-12 py-6 text-xl font-bold uppercase rounded-none border-none hover:bg-zinc-900 transition-all">
                                Request a Quote
                            </Button>
                        </Link>
                        <Link href="tel:+911234567890">
                            <Button variant="outline" className="border-black text-black px-12 py-6 text-xl font-bold uppercase rounded-none hover:bg-black hover:text-white transition-all">
                                Call for Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

