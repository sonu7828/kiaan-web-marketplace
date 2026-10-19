"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { resources } from '@/data/resourcesData';
import { ResourceCardMemo } from '@/components/ResourceCard';
import { Reveal } from '@/components/Reveal';

const ResourcesPreviewInner = () => {
    // Show only 3 latest resources
    const latestResources = resources.slice(0, 3);

    return (
        <section className="py-6 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 border-b border-zinc-800 pb-4">
                        <div>
                            <Reveal>
                                <h5 className="text-yellow-500 font-black uppercase tracking-[0.4em] mb-3 text-xs flex items-center gap-3">
                                    <span className="w-8 h-px bg-yellow-500" />
                                    Knowledge Hub
                                </h5>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h2 className="text-3xl md:text-4xl font-display uppercase text-white tracking-tighter">
                                    Latest <span className="text-yellow-500">Insights</span>
                                </h2>
                            </Reveal>
                        </div>
                        <Reveal delay={0.2}>
                            <Link
                                href="/resources"
                                className="mt-4 md:mt-0 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-yellow-500 transition-colors group"
                            >
                                View All Resources
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Reveal>
                    </div>

                    {/* 3 Resource Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestResources.map((res, idx) => (
                            <ResourceCardMemo key={res.id} res={res} idx={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const ResourcesPreview = React.memo(ResourcesPreviewInner);
