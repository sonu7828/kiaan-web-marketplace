"use client";

import React, { useState } from 'react';
import { glossaryTerms } from '@/data/glossaryData';
import { BookOpen, Search, ArrowRight, Layers, Tag } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';

const categories = ["All", "Cloud & Products", "Enterprise Software", "Emerging Tech", "Software Engineering", "SEO & Digital"];

export default function GlossaryPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredTerms = glossaryTerms.filter(item => {
        const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              item.details.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-yellow-500 selection:text-black pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* Header */}
                <div className="mb-16 text-center md:text-left">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 bg-zinc-900 border border-yellow-500/20 px-6 py-2 mb-8">
                            <BookOpen size={14} className="text-yellow-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
                                Knowledge Base
                            </span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none mb-6">
                            Enterprise <span className="text-yellow-500">Glossary</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
                            Master the terminology of modern cloud systems. Clear, technical explanations of SaaS architectures, business automation pipelines, and enterprise databases.
                        </p>
                    </Reveal>
                </div>

                {/* Filters Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 items-center">
                    {/* Search Input */}
                    <div className="md:col-span-4 relative">
                        <input 
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search terms..."
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-none h-12 pl-12 pr-4 text-sm focus:outline-none focus:border-yellow-500/50 transition-colors"
                        />
                        <Search className="absolute left-4 top-3.5 text-zinc-600" size={16} />
                    </div>

                    {/* Categories filters */}
                    <div className="md:col-span-8 flex flex-wrap gap-2 justify-start md:justify-end">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${
                                    selectedCategory === cat 
                                    ? 'bg-yellow-500 border-yellow-500 text-black' 
                                    : 'bg-transparent border-white/5 text-zinc-500 hover:border-white/20 hover:text-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Terms List Grid */}
                <div className="grid grid-cols-1 gap-6">
                    {filteredTerms.length > 0 ? (
                        filteredTerms.map((item, idx) => (
                            <Reveal key={item.term} delay={idx * 0.05}>
                                <div className="border border-white/5 bg-zinc-950/80 p-8 hover:border-yellow-500/20 transition-all duration-500 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-[3px] h-full bg-zinc-900 group-hover:bg-yellow-500 transition-colors" />
                                    
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                        <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight text-white group-hover:text-yellow-500 transition-colors">
                                            {item.term}
                                        </h2>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-900 text-zinc-500 text-[9px] font-black uppercase tracking-widest border border-zinc-800">
                                            <Tag size={10} /> {item.category}
                                        </span>
                                    </div>

                                    <p className="text-zinc-300 text-base font-medium leading-relaxed mb-4">
                                        {item.definition}
                                    </p>

                                    <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8">
                                        {item.details}
                                    </p>

                                    {item.relatedServices.length > 0 && (
                                        <div className="pt-6 border-t border-zinc-900 flex flex-wrap gap-6 items-center">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 flex items-center gap-2">
                                                <Layers size={12} /> Related Solutions:
                                            </span>
                                            <div className="flex gap-4">
                                                {item.relatedServices.map(svc => (
                                                    <Link 
                                                        key={svc.url} 
                                                        href={svc.url}
                                                        className="text-xs font-bold text-yellow-500 hover:text-white transition-colors flex items-center gap-1"
                                                    >
                                                        {svc.name} <ArrowRight size={12} />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Reveal>
                        ))
                    ) : (
                        <div className="text-center py-20 border border-dashed border-zinc-800 text-zinc-500 font-light">
                            No terms found matching your filters.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
