"use client";

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Reveal } from '@/components/Reveal'
import { resources } from '@/data/resourcesData'
import { ResourceCardMemo } from '@/components/ResourceCard'
import { SaasChecklistCTA } from '@/components/SaasChecklistCTA'
import { AIROICalculatorCTA } from '@/components/AIROICalculatorCTA'
import { VendorScorecardCTA } from '@/components/VendorScorecardCTA'

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-20 selection:bg-yellow-500 selection:text-black">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="max-w-4xl mb-12">
                        <Reveal>
                            <h5 className="text-yellow-500 font-black uppercase tracking-[0.4em] mb-4 text-sm flex items-center gap-3">
                                <span className="w-12 h-px bg-yellow-500" />
                                    Free Business Resources
                            </h5>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h1 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] text-white tracking-tighter mb-8">
                                Free Software <span className="text-zinc-800">&</span> AI <br />
                                <span className="text-yellow-500 italic">Business Resources</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed uppercase font-medium">
                                Practical tools and guides to help businesses plan software projects, calculate automation opportunities and evaluate development partners.
                            </p>
                        </Reveal>
                    </div>

                    <SaasChecklistCTA compact />
                    <AIROICalculatorCTA compact />
                    <VendorScorecardCTA compact />

                    {/* Resources Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {resources.map((res, idx) => (
                                <ResourceCardMemo key={res.id} res={res} idx={idx} />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
