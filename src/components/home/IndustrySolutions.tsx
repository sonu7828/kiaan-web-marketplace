"use client";

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Activity, Building, Landmark, GraduationCap, Truck, ShoppingBag, ArrowRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface IndustryCardProps {
    title: string;
    desc: React.ReactNode;
    icon: LucideIcon;
    delay: number;
    href?: string;
}

const IndustryCard = ({ title, desc, icon: Icon, delay, href }: IndustryCardProps) => {
    // Removed useRef and useInView as per instruction
    // const ref = useRef<HTMLDivElement>(null)
    // const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            // ref={ref} // Removed ref
            initial={{ opacity: 0, y: 30 }}
            // animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} // Changed to whileInView
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // whileHover={{ y: -5 }} // Removed whileHover
            transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: delay
            }}
            className="group glass-panel p-8 relative overflow-hidden flex flex-col h-full border border-zinc-900 hover:border-yellow-500/30 transition-all duration-500 block cursor-pointer contain-card"
        >
            <Link href={href || "/blog"} className="absolute inset-0 z-0">
                <span className="sr-only">Go to {title}</span>
            </Link>

            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 group-hover:rotate-12 group-hover:scale-110 pointer-events-none">
                <Icon size={100} strokeWidth={0.5} />
            </div>

            <div className="relative z-10 pointer-events-none">
                <div
                    className="mb-8 p-4 bg-zinc-900 w-fit relative z-10 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500"
                >
                    <Icon size={32} />
                </div>

                <h3 className="text-2xl font-display uppercase mb-4 text-white group-hover:text-yellow-500 transition-colors relative z-10">
                    {title}
                </h3>

                <p className="text-zinc-500 leading-relaxed font-light mb-8 group-hover:text-zinc-300 transition-colors relative z-10">{desc}</p>
            </div>

            <div className="relative z-10 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-yellow-500 transition-all duration-500 mt-auto pointer-events-none">
                GET INDUSTRY INTEL <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
        </motion.div>
    )
}

const IndustryCardMemo = React.memo(IndustryCard)

const IndustrySolutionsInner = () => {
    const industries = [
        { title: "Healthcare Software Development", desc: <>HIPAA-compliant <Link href="/industries/healthcare-software" className="text-yellow-500 hover:underline cursor-pointer relative z-20 pointer-events-auto">patient portals</Link>, doctor-patient EHR systems &amp; telemedicine platforms for hospitals.</>, icon: Activity, href: "/industries/healthcare-software" },
        { title: "Real Estate Software Solutions", desc: "Advanced property management software, CRM for real estate & virtual tour integrations.", icon: Building, href: "/solutions/real-estate" },
        { title: "Fintech Software Development", desc: <>Secure <Link href="/industries/fintech-software" className="text-yellow-500 hover:underline cursor-pointer relative z-20 pointer-events-auto">banking dashboards</Link>, algorithmic trading bots &amp; payment gateway integration solutions.</>, icon: Landmark, href: "/industries/fintech-software" },
        { title: "Education Management Software", desc: "Custom LMS platforms, student performance tracking systems & virtual classroom solutions.", icon: GraduationCap, href: "/solutions/education" },
        { title: "Logistics Software Solutions", desc: "Fleet tracking, route optimization, warehouse management & supply chain ERP systems.", icon: Truck, href: "/solutions/logistics" },
        { title: "Retail Technology Solutions", desc: <>Smart POS systems, <Link href="/industries/retail-technology" className="text-yellow-500 hover:underline cursor-pointer relative z-20 pointer-events-auto">inventory management</Link>, e-commerce suites &amp; omni-channel retail software.</>, icon: ShoppingBag, href: "/industries/retail-technology" },
    ]

    return (
        <section className="py-6 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-display uppercase text-white mb-4"
                    >
                        Industry Specific Software Development
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-2xl mx-auto"
                    >
                        We deliver high-impact engineering for global market leaders. Our industry-specific software solutions are designed to optimize B2B workflows, ensure regulatory compliance, and drive digital-first growth at scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((item, index) => (
                        <IndustryCardMemo
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            icon={item.icon}
                            href={item.href}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const IndustrySolutions = React.memo(IndustrySolutionsInner)
