"use client";

import React, { useState, useMemo } from 'react';
import { Search, X, Filter, Sparkles, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/data/blogData';
import { BlogCard } from './BlogCard';

interface BlogExplorerClientProps {
    initialArticles: BlogPost[];
    categories: string[];
}

export function BlogExplorerClient({ initialArticles, categories }: BlogExplorerClientProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    // Combine category filter + live query search
    const filteredArticles = useMemo(() => {
        return initialArticles.filter((article) => {
            // Category check
            const matchesCategory =
                selectedCategory === 'ALL' ||
                article.category.toLowerCase() === selectedCategory.toLowerCase();

            // Search query check across title, excerpt, category, tags, author
            const query = searchQuery.trim().toLowerCase();
            if (!query) return matchesCategory;

            const matchesQuery =
                article.title.toLowerCase().includes(query) ||
                article.excerpt.toLowerCase().includes(query) ||
                article.category.toLowerCase().includes(query) ||
                article.author.toLowerCase().includes(query) ||
                (article.tags && article.tags.some(t => t.toLowerCase().includes(query)));

            return matchesCategory && matchesQuery;
        });
    }, [initialArticles, selectedCategory, searchQuery]);

    const isFilterActive = selectedCategory !== 'ALL' || searchQuery.trim().length > 0;

    const handleClearFilters = () => {
        setSearchQuery('');
        setSelectedCategory('ALL');
    };

    return (
        <div id="explore-insights" className="space-y-8">
            {/* Search & Topic Filter Controls */}
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 shadow-xl space-y-6">
                {/* Search Bar */}
                <div className="relative">
                    <label htmlFor="blog-search-input" className="sr-only">
                        Search software, AI, SaaS, CRM insights
                    </label>
                    <div className="relative flex items-center">
                        <Search
                            size={18}
                            className="absolute left-4 text-zinc-500 pointer-events-none"
                            aria-hidden="true"
                        />
                        <input
                            id="blog-search-input"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search software, AI, SaaS, CRM, architecture..."
                            className="w-full bg-zinc-900/90 border border-zinc-800 text-white placeholder-zinc-500 text-sm md:text-base rounded-xl pl-12 pr-10 py-3.5 focus:outline-none focus:border-yellow-500/60 focus:ring-1 focus:ring-yellow-500/30 transition-all font-normal"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3 p-1.5 text-zinc-400 hover:text-white rounded-lg transition-colors"
                                aria-label="Clear search text"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Category Navigation Pills */}
                <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="text-[11px] font-mono font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                            <Filter size={12} className="text-yellow-500" />
                            EXPLORE BY TOPIC
                        </span>

                        {isFilterActive && (
                            <button
                                type="button"
                                onClick={handleClearFilters}
                                className="text-[11px] font-mono text-yellow-400 hover:text-yellow-300 underline underline-offset-4 transition-colors font-bold"
                            >
                                Clear all filters
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => setSelectedCategory('ALL')}
                            className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 border ${
                                selectedCategory === 'ALL'
                                    ? 'bg-yellow-500 text-black border-yellow-500 font-black shadow-[0_0_15px_rgba(255,232,27,0.2)]'
                                    : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                            }`}
                        >
                            ALL ({initialArticles.length})
                        </button>

                        {categories.map((cat) => {
                            const count = initialArticles.filter(
                                (a) => a.category.toLowerCase() === cat.toLowerCase()
                            ).length;
                            const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();

                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 border ${
                                        isSelected
                                            ? 'bg-yellow-500 text-black border-yellow-500 font-black shadow-[0_0_15px_rgba(255,232,27,0.2)]'
                                            : 'bg-zinc-900/80 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                                    }`}
                                >
                                    {cat} {count > 0 && `(${count})`}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Result Counter & Active Filter Strip */}
                <div className="pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                    <div>
                        Showing <span className="text-white font-black">{filteredArticles.length}</span> of{' '}
                        <span className="text-white font-black">{initialArticles.length}</span> Insights
                        {selectedCategory !== 'ALL' && (
                            <span className="text-zinc-500">
                                {' '}in <strong className="text-yellow-400 font-bold">{selectedCategory}</strong>
                            </span>
                        )}
                        {searchQuery && (
                            <span className="text-zinc-500">
                                {' '}matching &ldquo;<strong className="text-white font-bold">{searchQuery}</strong>&rdquo;
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Articles Grid / Empty State */}
            {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {filteredArticles.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 px-6 bg-zinc-950 border border-zinc-800/80 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 flex items-center justify-center mx-auto mb-4">
                        <Search size={20} />
                    </div>
                    <h3 className="text-lg font-display uppercase tracking-tight text-white mb-2">
                        No Insights Found
                    </h3>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                        No articles matched your active search query and category combination. Try searching with different terms or reset your filters.
                    </p>
                    <button
                        type="button"
                        onClick={handleClearFilters}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-yellow-500 text-black text-xs font-mono font-black uppercase tracking-wider hover:bg-white transition-colors shadow-md"
                    >
                        CLEAR FILTERS & SHOW ALL
                    </button>
                </div>
            )}
        </div>
    );
}
