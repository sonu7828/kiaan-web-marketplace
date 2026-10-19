"use client";

import { motion } from 'framer-motion'
import { Code, Server, Users, ArrowRight, LucideIcon } from 'lucide-react'
import { Button } from '../Button'
import Link from 'next/link'
import React from 'react';

interface TrainingCardProps {
    title: string;
    tags: string[];
    duration: string;
    icon: LucideIcon;
    delay: number;
}

const TrainingCard = ({ title, tags, duration, icon: Icon, delay }: TrainingCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: delay
            }}
            className="group relative glass-panel p-8 flex flex-col h-full hover:shadow-[0_15px_40px_-15px_rgba(234,179,8,0.15)] transition-all duration-500 will-change-transform overflow-hidden contain-card"
        >

            <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="p-4 bg-black border border-white/5 text-zinc-400 group-hover:text-yellow-500 group-hover:border-yellow-500/50 transition-all duration-500">
                    <Icon size={32} />
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-1">Duration</span>
                    <span className="text-sm font-display text-white">
                        {duration}
                    </span>
                </div>
            </div>

            <h3 className="text-2xl font-display uppercase text-white mb-6 group-hover:text-yellow-500 transition-colors duration-500 leading-tight">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-10 relative z-10">
                {tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-widest text-zinc-500 border border-white/5 px-2 py-1 bg-white/5 group-hover:border-yellow-500/20 group-hover:text-zinc-300 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>

            <Link href="/internship" className="mt-auto relative z-10">
                <Button className="w-full bg-white text-black hover:bg-yellow-500 font-black uppercase tracking-[0.2em] text-[10px] h-14 rounded-none border-none shadow-[4px_4px_0_rgba(161,161,170,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                    Explore Lab Track <ArrowRight size={14} className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
        </motion.div>
    )
}

const TrainingCardMemo = React.memo(TrainingCard)

const InternshipTrainingInner = () => {
    return (
        <section id="internship" className="scroll-mt-28 py-6 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white mb-6"
                    >
                        Kiaan Technology <br /> <span className="text-yellow-500">Innovation Lab</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        We don't just use top engineering talent; we forge it. Our internal incubator trains the next generation of full-stack developers while building experimental enterprise software.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <TrainingCardMemo
                        title="Advanced Frontend Internship"
                        tags={['React.js', 'Tailwind CSS', 'Framer Motion', 'Redux']}
                        duration="6 Months"
                        icon={Code}
                        delay={0.1}
                    />
                    <TrainingCardMemo
                        title="Backend Systems Training"
                        tags={['Node.js', 'Express', 'PostgreSQL', 'JWT Auth']}
                        duration="4 Months"
                        icon={Server}
                        delay={0.2}
                    />
                    <TrainingCardMemo
                        title="Full Stack MERN Bootcamp"
                        tags={['MongoDB', 'Express', 'React', 'Node.js']}
                        duration="3 Months"
                        icon={Users}
                        delay={0.3}
                    />
                </div>

                {/* Action Buttons (Repositioned Below) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
                >
                    <Link href="/internship">
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                            <div className="bg-white text-black px-10 py-5 font-black uppercase tracking-widest text-xs sm:text-sm flex items-center gap-4 relative overflow-hidden transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shadow-[8px_8px_0_rgba(255,255,255,0.1)]">
                                {/* Skewed Background */}
                                <div className="absolute inset-0 bg-white -skew-x-[12deg] -z-10 transform scale-110"></div>
                                <span className="relative">Join the Innovation Lab</span>
                                <Code size={18} className="text-black" />
                            </div>
                        </div>
                    </Link>

                    <Link href="/contact">
                        <button className="px-10 py-5 border border-zinc-800 text-yellow-500 hover:text-yellow-400 hover:border-yellow-500/50 transition-all font-black uppercase tracking-widest text-xs sm:text-sm bg-black/50 backdrop-blur-md flex items-center gap-3">
                            <Users size={18} /> Hire Our Graduates (B2B)
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export const InternshipTraining = React.memo(InternshipTrainingInner)
