'use client';

import { useRef, useEffect } from 'react';
import { Search, X, RotateCcw, SlidersHorizontal, ChevronDown } from 'lucide-react';

interface SearchToolbarProps {
  query: string;
  onQueryChange: (value: string) => void;
  resultCount: number;
  selectedCategory: string;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  onOpenDrawer: () => void;
}

export default function SearchToolbar({
  query,
  onQueryChange,
  resultCount,
  selectedCategory,
  onClearFilters,
  hasActiveFilters,
  onOpenDrawer,
}: SearchToolbarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Ctrl + K or / to focus search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="mb-6">
      {/* Main Bar: Mobile Category Drawer + Search Bar + Right-side Status Pill */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Mobile Category Trigger */}
        <button
          onClick={onOpenDrawer}
          suppressHydrationWarning
          className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 text-xs font-bold uppercase tracking-wider hover:border-[#FFE81B]/40 hover:text-white transition-all cursor-pointer shrink-0"
        >
          <SlidersHorizontal size={14} className="text-[#FFE81B]" />
          <span>Categories</span>
          <ChevronDown size={12} />
        </button>

        {/* High-Tech Glowing Command Search Bar (Full Width) */}
        <div className="group/search relative p-[1.5px] rounded-2xl bg-gradient-to-r from-zinc-800 via-zinc-700/80 to-zinc-800 focus-within:from-[#FFE81B] focus-within:via-yellow-400 focus-within:to-amber-400 transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.5)] focus-within:shadow-[0_0_30px_rgba(255,232,27,0.22)] flex items-center flex-1 min-w-0">
          <div className="relative flex items-center w-full bg-[#09090b]/98 backdrop-blur-2xl rounded-[14.5px] px-3.5 py-1">
            {/* Search Icon with Accent Box */}
            <div className="w-8 h-8 rounded-xl bg-zinc-900/90 border border-zinc-800/90 flex items-center justify-center shrink-0 text-zinc-400 group-focus-within/search:text-[#FFE81B] group-focus-within/search:border-[#FFE81B]/40 group-focus-within/search:shadow-[0_0_12px_rgba(255,232,27,0.2)] transition-all">
              <Search size={15} />
            </div>

            {/* Input Field */}
            <input
              ref={inputRef}
              type="text"
              autoComplete="off"
              data-lpignore="true"
              data-1p-ignore="true"
              data-form-type="other"
              suppressHydrationWarning
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search software by name, industry, or feature..."
              className="w-full bg-transparent px-3 py-2.5 text-sm sm:text-[14.5px] text-white placeholder-zinc-500 font-medium outline-none"
            />

            {/* Right inside search: Clear button */}
            {query && (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => {
                    onQueryChange('');
                    inputRef.current?.focus();
                  }}
                  suppressHydrationWarning
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all cursor-pointer"
                  title="Clear search"
                >
                  <X size={13} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Side Status Pill: Showing software demos */}
        <div className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 h-[48px] rounded-2xl bg-zinc-900/90 border border-zinc-800/90 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-xl shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)] shrink-0" />
          <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium whitespace-nowrap">
            {query ? (
              <>
                <span>Found</span>
                <span className="text-[#FFE81B] font-bold tabular-nums text-[13px]">{resultCount}</span>
                <span>{resultCount === 1 ? 'solution' : 'solutions'}</span>
                {selectedCategory !== 'All Software' && (
                  <span className="text-zinc-400 text-[11px] truncate max-w-[120px]">in {selectedCategory}</span>
                )}
              </>
            ) : selectedCategory !== 'All Software' ? (
              <>
                <span>Showing</span>
                <span className="text-[#FFE81B] font-bold tabular-nums text-[13px]">{resultCount}</span>
                <span className="text-zinc-200">{selectedCategory}</span>
              </>
            ) : (
              <>
                <span>Showing all</span>
                <span className="text-white font-bold tabular-nums text-[13px]">{resultCount}</span>
                <span className="text-zinc-300">software demos</span>
              </>
            )}
          </div>

          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              suppressHydrationWarning
              className="ml-1 pl-2.5 border-l border-zinc-800 flex items-center gap-1 text-[11px] font-semibold text-zinc-400 hover:text-[#FFE81B] transition-colors cursor-pointer"
              title="Clear filters"
            >
              <RotateCcw size={11} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile-only status row */}
      <div className="sm:hidden mt-2.5 flex items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-xs text-zinc-400 font-medium">
            {query ? (
              <>
                Found <span className="text-[#FFE81B] font-bold tabular-nums">{resultCount}</span>{' '}
                {resultCount === 1 ? 'solution' : 'solutions'} matching &ldquo;{query}&rdquo;
              </>
            ) : selectedCategory !== 'All Software' ? (
              <>
                Showing <span className="text-[#FFE81B] font-bold tabular-nums">{resultCount}</span> {selectedCategory}
              </>
            ) : (
              <>
                Showing all <span className="text-white font-bold tabular-nums">{resultCount}</span> software demos
              </>
            )}
          </p>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-[#FFE81B] transition-colors cursor-pointer shrink-0"
          >
            <RotateCcw size={11} />
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
