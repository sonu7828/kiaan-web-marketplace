'use client';

import type { CategoryConfig } from '@/data/demo-software-data';
import { Layers } from 'lucide-react';

interface CategorySidebarProps {
  categories: CategoryConfig[];
  categoryCounts: Map<string, number>;
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function CategorySidebar({
  categories,
  categoryCounts,
  selectedCategory,
  onSelect,
}: CategorySidebarProps) {
  return (
    <aside className="hidden lg:block w-[245px] xl:w-[265px] shrink-0 sticky top-20 xl:top-24 self-start z-30">
      {/* Outer Sleek Glowing Gradient Border Frame */}
      <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-b from-zinc-700/80 via-zinc-800/40 to-[#FFE81B]/30 shadow-[0_12px_40px_rgba(0,0,0,0.65)] group">
        {/* Ambient Top/Bottom Glow Accents */}
        <div className="absolute -top-1 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FFE81B]/40 to-transparent blur-[1px]" />
        
        {/* Inner Dark Glassmorphic Card */}
        <div className="rounded-[14.5px] bg-[#09090b]/95 border border-zinc-800/50 p-3 max-h-[calc(100vh-185px)] overflow-y-auto no-scrollbar backdrop-blur-2xl">
          {/* Header Row */}
          <div className="px-3 pt-2 pb-3 mb-1.5 flex items-center justify-between border-b border-zinc-800/70">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#FFE81B]/10 border border-[#FFE81B]/25 flex items-center justify-center">
                <Layers size={13} className="text-[#FFE81B]" />
              </div>
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                Categories
              </h2>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-900/90 text-[#FFE81B] border border-[#FFE81B]/25 font-mono shadow-[0_0_10px_rgba(255,232,27,0.1)]">
              {categories.length - 1}
            </span>
          </div>

          {/* Category List */}
          <nav className="flex flex-col gap-1 pt-1 pb-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              const count = categoryCounts.get(cat.name) ?? 0;
              const IconComponent = cat.icon;

              return (
                <button
                  key={cat.slug}
                  suppressHydrationWarning
                  onClick={() => onSelect(cat.name)}
                  className={`group/btn flex items-center gap-2.5 w-full px-3 py-2 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#FFE81B]/20 via-[#FFE81B]/10 to-transparent border border-[#FFE81B]/50 text-white shadow-[0_0_20px_rgba(255,232,27,0.12)]'
                      : 'border border-transparent text-white hover:bg-zinc-800/60 hover:border-zinc-700/60'
                  }`}
                >
                  <IconComponent
                    size={15}
                    className={`shrink-0 transition-colors ${
                      isSelected ? 'text-[#FFE81B]' : 'text-zinc-400 group-hover/btn:text-[#FFE81B]'
                    }`}
                  />
                  <span
                    className={`text-[11px] xl:text-xs text-white flex-1 truncate ${
                      isSelected ? 'font-black text-white' : 'font-semibold group-hover/btn:text-white'
                    }`}
                  >
                    {cat.name}
                  </span>
                  <span
                    className={`text-[9.5px] font-bold tabular-nums px-1.5 py-0.5 rounded-md shrink-0 transition-all ${
                      isSelected
                        ? 'bg-[#FFE81B] text-black font-black shadow-[0_0_8px_rgba(255,232,27,0.4)]'
                        : 'bg-zinc-800/90 text-zinc-300 group-hover/btn:text-white group-hover/btn:bg-zinc-700 border border-zinc-700/60'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
