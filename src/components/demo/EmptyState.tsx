'use client';

import { SearchX, RotateCcw, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface EmptyStateProps {
  searchQuery: string;
  selectedCategory: string;
  onClearFilters: () => void;
}

export default function EmptyState({ searchQuery, selectedCategory, onClearFilters }: EmptyStateProps) {
  return (
    <div className="py-20 px-6 flex flex-col items-center justify-center text-center rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
      <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-500 mb-5">
        <SearchX size={28} />
      </div>

      <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-white mb-2">
        No Software Found
      </h3>

      <p className="text-sm text-zinc-500 max-w-md mb-8 font-light leading-relaxed">
        {searchQuery && selectedCategory !== 'All Software'
          ? `No results match "${searchQuery}" in ${selectedCategory}.`
          : searchQuery
          ? `No results found for "${searchQuery}".`
          : `No software available in ${selectedCategory}.`}
        {' '}Try adjusting your filters or request a custom build.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={onClearFilters}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-700 hover:border-zinc-600 transition-all cursor-pointer"
        >
          <RotateCcw size={13} />
          Clear All Filters
        </button>
        <Link
          href="/start-project"
          className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFE81B] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(255,232,27,0.2)]"
        >
          Request Custom Software
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
