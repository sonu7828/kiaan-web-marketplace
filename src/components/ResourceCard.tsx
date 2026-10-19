"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Resource, getResourceCTA } from '@/data/resourcesData';

// Reusable Resource Card component
export const ResourceCard = ({ res, idx }: { res: Resource; idx: number }) => (
    <Link
        href={res.customHref || `/resources/${res.slug}`}
        className="block group"
    >
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative bg-zinc-950 border border-zinc-900 overflow-hidden flex flex-col h-full contain-card"
        >
            {/* Card Header / Image */}
            <div className="aspect-video overflow-hidden relative border-b border-zinc-900">
                <img
                    src={res.image}
                    alt={`${res.title} - Software Engineering Resource`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
                />
                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.2em] px-2.5 py-1 border border-zinc-800">
                        {res.category}
                    </span>
                    <span className={`text-[8px] font-black uppercase tracking-[0.2em] px-2.5 py-1 border ${res.type === 'Whitepaper' ? 'bg-red-600 text-white border-red-600' : 'bg-yellow-500 text-black border-yellow-500'
                        }`}>
                        {res.type}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">{res.date}</span>
                    <span className="text-zinc-600 text-[8px] font-black uppercase tracking-widest">{res.readTime}</span>
                </div>
                <h3 className="text-sm font-display uppercase leading-tight text-white group-hover:text-yellow-500 transition-colors mb-3 line-clamp-2">
                    {res.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-auto uppercase line-clamp-3">
                    {res.description}
                </p>

                {/* Action */}
                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between">
                    <div className="text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors flex items-center gap-2">
                        {getResourceCTA(res.type)}
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                        <ArrowUpRight size={14} className="text-yellow-500" />
                    </div>
                </div>
            </div>
        </motion.div>
    </Link>
);

export const ResourceCardMemo = React.memo(ResourceCard);
