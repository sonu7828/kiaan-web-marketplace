import React from 'react';
import { Globe, Zap, Shield, Database, Layout, ArrowRight, CheckCircle2, Star, Target, Award } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { IndustrySolutions } from '@/components/home/IndustrySolutions';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Software Development Company in India | ERP, SaaS & AI | Kiaan",
    description: "Leading custom software development company in India. We build high-performance ERP, CRM, SaaS & AI automation software. Get a free consultation & quote today!",
    keywords: "Custom Software Development Company India, ERP Software Development, CRM Development Company, SaaS Development India, Business Automation Software",
    robots: "index, follow",
    openGraph: {
        title: "Custom Software Development Company India | Kiaan Technology",
        description: "Trusted custom software development company in India — ERP, CRM, SaaS and industry-specific software solutions.",
        url: "https://kiaantechnology.com/software-development-company-india",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "Custom Software Development Company India - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software Development Company India | Kiaan Technology",
        description: "Trusted custom software development company in India offering ERP, CRM, SaaS solutions.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function SoftwareDevelopmentIndia() {
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
                                "name": "Software Development Company in India",
                                "item": "https://kiaantechnology.com/software-development-company-india"
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
                                "name": "How much does custom software development cost in India?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The cost of custom software development in India depends on complexity and scale, typically ranging from $15,000 to over $100,000 for enterprise solutions."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Why choose the best custom software development company in India?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The best custom software development company in India provides senior engineering talent, transparent pricing, and world-class communication standards."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What are your SaaS product development services India strengths?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We specialize in building multi-tenant cloud architectures using modern stacks like MERN and Next.js for global scalability."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you offer custom healthcare software development company expertise?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we build HIPAA-compliant healthcare platforms and electronic health records (EHR) systems with bank-grade security."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What real estate software development services do you provide?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We provide property management systems, CRM for real estate, and smart building automation hubs integrated with IoT."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you help build custom CRM system for business?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We help build custom CRM systems for business efficiency, integrating unique sales workflows and automated lead tracking."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How can I hire dedicated software developers India?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You can hire dedicated software developers India through project-based models or dedicated team augmentation for seamless collaboration."
                                }
                            }
                        ]
                    })
                }}
            />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-500/5 via-transparent to-transparent opacity-50" />
                <div className="container mx-auto px-4 relative z-10">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-500/20 text-white text-[10px] font-black uppercase tracking-widest mb-8">
                            <Globe size={12} className="text-yellow-500" />
                            Premier Web Application Development Company in India
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter mb-8 max-w-5xl">
                            Custom Software <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">Development Company in India</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mb-12 leading-relaxed font-light">
                            Kiaan Technology is a premier <strong>Custom Software Development Company in India</strong>, providing top-tier <strong>Custom Software Solutions</strong>. As a leading <strong>SaaS Development Company India</strong>, we excel in <Link href="/erp" className="text-white hover:text-yellow-500 underline underline-offset-4 decoration-zinc-800">Custom ERP Development</Link> and <strong>CRM Software Development Company</strong> needs, delivering world-class enterprise systems.
                        </p>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/start-project">
                                <Button className="bg-white text-black px-10 py-5 text-lg font-bold uppercase rounded-none border-none shadow-[8px_8px_0_rgba(255,193,7,0.5)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                    Consult our Experts
                                </Button>
                            </Link>
                            <Link href="/case-studies">
                                <Button variant="outline" className="px-10 py-5 text-lg font-bold uppercase rounded-none border-zinc-800 hover:bg-zinc-900 text-white">
                                    View Portolio
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
                                <h2 className="text-4xl md:text-5xl font-display uppercase mb-8 text-white">Custom Software Solutions for Modern Businesses</h2>
                                <div className="prose prose-invert prose-lg max-w-none text-zinc-300 space-y-6">
                                    <p>
                                        India's reputation as a global software powerhouse is well-earned, and Kiaan Technology represents the pinnacle of this expertise. As a leading <strong>Software Development Company in India</strong>, we provide end-to-end engineering services and robust <strong>Custom Software Solutions</strong> to clients across North America, Europe, and Asia.
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white uppercase mt-12 mb-4 leading-tight">ERP, CRM & SaaS Development Services</h2>
                                    <p>
                                        Our <strong>Custom Software Development in India</strong> is defined by precision, scalability, and performance. We specialize in **Industry Specific Software Development**, including **POS Software Development**, <Link href="/pos" className="text-white hover:text-yellow-500 underline underline-offset-4 decoration-zinc-800">Smart Accounting Software</Link>, and **Inventory Management Software** solutions. Kiaan Technology isn't just another agency; we are your strategic <strong>SaaS Development Company India</strong>.
                                    </p>
                                    <p>
                                        We are recognized as a trusted <strong>ERP Software Development Company</strong>, providing advanced **Business Automation Software** for large-scale organizations. Our processes follow international standards, ensuring that every piece of software we deliver is modular, secure, and ready for global scale.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-none relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-white" />
                                            <h4 className="text-xl font-bold text-white mb-4">India Delivery Center</h4>
                                            <p className="text-sm">Cost-effective, high-quality delivery following the best industry practices and time-zone aligned communication.</p>
                                        </div>
                                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-none relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500" />
                                            <h4 className="text-xl font-bold text-white mb-4">Certified Engineers</h4>
                                            <p className="text-sm">Our team consists of senior developers certified in AWS, Google Cloud, and specialized full-stack technologies.</p>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white uppercase mt-12 mb-4">The Best Startup MVP Development & Outsourcing</h3>
                                    <p>
                                        If you're looking for <strong>Offshore Software Development in India</strong>, Kiaan Technology provides a seamless engagement model. We offer both project-based delivery and dedicated team augmentation. Our <strong>IT Outsourcing Indore</strong> office serves as a central hub for high-quality, cost-optimized engineering.
                                    </p>
                                    <p>
                                        We specialize in the MERN stack (MongoDB, Express, React, Node.js), Python, and mobile development (Flutter/React Native), ensuring that your tech stack is modern and future-proof.
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
                            <div className="p-8 bg-zinc-900 text-white mb-8 border border-zinc-800">
                                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight text-yellow-500 underline underline-offset-8">India Tech Hub</h3>
                                <p className="mb-8 font-medium">Access senior Indian developers for **Cloud Based Business Software** at 40% less than local onshore costs.</p>
                                <Link href="/contact">
                                    <Button className="w-full bg-white text-black hover:bg-yellow-500 rounded-none border-none py-6 font-bold uppercase tracking-widest text-sm transition-colors">
                                        Hire a Team
                                    </Button>
                                </Link>
                            </div>
                            <div className="p-8 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
                                <h4 className="text-sm font-black uppercase text-zinc-500 mb-6 tracking-[0.2em]">India Presence</h4>
                                <div className="space-y-4">
                                    {['Central HQ: Indore', 'Sales Branch: Delhi/NCR', 'Project Center: India-Wide', 'Cloud Servers: Mumbai AWS Region'].map((loc) => (
                                        <div key={loc} className="flex items-center gap-3 text-zinc-300 font-medium">
                                            <Target size={16} className="text-yellow-500" />
                                            {loc}
                                        </div>
                                    ))}
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
                        <h2 className="text-4xl md:text-5xl font-display uppercase mb-4">Why Choose Kiaan Technology</h2>
                        <p className="text-zinc-400">Common questions about working with a Software Company in India.</p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "How much does custom software development cost in India?", a: "The question of how much does custom software development cost in India depends on project complexity, tech stack, and scale. Generally, costs range from $15,000 for MVPs to over $100,000 for enterprise systems. At Kiaan Technology, we provide transparent pricing models that balance high-quality engineering with the cost-efficiency typical of the Indian market, ensuring maximum ROI for your business." },
                            { q: "Why is Kiaan Technology considered the best custom software development company in India?", a: "Kiaan Technology is widely recognized as the best custom software development company in India due to our commitment to engineering excellence and client success. We combine deep technical expertise in modern stacks with a boutique approach to client support. Our portfolio of successful global deployments and highly satisfied enterprise clients reinforces our position as a premier technology partner." },
                            { q: "What are your SaaS product development services India strengths?", a: "Our SaaS product development services India team focuses on building multi-tenant, scalable, and high-performance cloud architectures. We cover everything from neural SaaS architecture to high-throughput APIs. By leveraging modern frameworks like MERN and Next.js, we ensure your SaaS platform is ready for global scale, zero-downtime performance, and rapid user acquisition." },
                            { q: "Do you act as a custom healthcare software development company?", a: "Yes, we operate as a specialized custom healthcare software development company, building HIPAA-compliant platforms and patient management systems. We understand the critical nature of data security in health-tech. Our engineers develop robust solutions that streamline clinical workflows, enhance patient engagement, and ensure seamless interoperability between various medical data systems." },
                            { q: "What real estate software development services do you offer?", a: "We provide comprehensive real estate software development services tailored to modern property managers and developers. Our solutions include access registry systems, global resident directories, and smart building automation hubs. By integrating IoT and high-performance analytics, we help real estate businesses optimize their operations and provide a premium, tech-enabled experience." },
                            { q: "Can you help us build custom CRM system for business needs?", a: "To build custom CRM system for business efficiency, we analyze your unique sales workflows and customer touchpoints. Unlike off-the-shelf solutions, our custom CRMs are built to scale with your specific operational needs, integrating bank-grade security and automated lead tracking. We ensure your team has the exact tools required to drive growth." },
                            { q: "How can I hire dedicated software developers India from your team?", a: "You can easily hire dedicated software developers India through our flexible engagement models. We offer both project-based delivery and staff augmentation, providing access to senior engineers certified in AWS, Python, and Full-Stack development. Our teams operate with significant time-zone overlap, facilitating real-time collaboration and ensuring that your offshore development feels seamless." }
                        ].map((faq, i) => (
                            <div key={i} className="p-6 bg-zinc-900/30 border border-zinc-800 hover:border-white/30 transition-colors group">
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
            <section className="py-24 bg-white text-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-display uppercase mb-8 leading-none">Start Your Custom Software Project</h2>
                    <Link href="/contact">
                        <Button className="bg-black text-white px-12 py-6 text-xl font-bold uppercase rounded-none border-none hover:bg-zinc-900 transition-all">
                            Get Free Consultation
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
