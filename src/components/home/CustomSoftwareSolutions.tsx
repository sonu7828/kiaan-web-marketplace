"use client";

import { motion } from 'framer-motion'
import { Check, Settings, Terminal, Database, Cpu, LayoutDashboard, ArrowRight, LucideIcon, Building, Globe } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../Button'
import React from 'react';

const SolutionTile = ({ title, icon: Icon, delay }: { title: string; icon: LucideIcon; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group relative bg-zinc-900/50 border border-zinc-800 p-6 hover:border-yellow-500/50 transition-all duration-500 hover:bg-zinc-900 h-full contain-card"
    >
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon size={40} />
        </div>
        <div className="mb-4 text-yellow-500">
            <Icon size={28} />
        </div>
        <h3 className="text-white font-display uppercase text-lg mb-2 group-hover:text-yellow-500 transition-colors">
            {title}
        </h3>
    </motion.div>
)

const SolutionTileMemo = React.memo(SolutionTile)

const CustomSoftwareSolutionsInner = () => {
    const solutions = [
        { title: "Custom ERP Development", icon: Building },
        { title: "Scalable SaaS Architecture", icon: LayoutDashboard },
        { title: "Enterprise Web Engineering", icon: Globe },
        { title: "AI & Machine Learning", icon: Cpu },
        { title: "Cloud Native Infrastructure", icon: Terminal },
        { title: "Legacy Modernization", icon: Database }
    ];

    return (
        <section className="py-6 bg-zinc-950 relative overflow-x-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display uppercase text-white mb-4 leading-tight">
                                Enterprise Software <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Solutions in India</span>
                            </h2>
                            <p className="text-zinc-400 text-base md:text-lg border-y border-yellow-500/20 py-3 md:inline-block md:px-12 max-w-3xl">
                                Engineering high-performance <strong>custom enterprise systems</strong> designed for global scale, regulatory compliance, and digital-first growth.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {solutions.map((item, index) => (
                            <SolutionTileMemo
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link href="/start-project">
                                <Button className="bg-yellow-500 text-black px-12 py-5 text-xl font-bold uppercase rounded-none border-2 border-transparent hover:bg-black hover:text-yellow-500 hover:border-yellow-500 transition-all shadow-[6px_6px_0_black]">
                                    Request Custom Build <ArrowRight size={24} className="ml-3 inline-block" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export const CustomSoftwareSolutions = React.memo(CustomSoftwareSolutionsInner)
