'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, ExternalLink, ArrowRight, Package, Monitor, X, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MARKETPLACE_PRODUCTS,
  MARKETPLACE_CATEGORIES,
  formatINR,
  type MarketplaceProduct,
} from '@/data/marketplace-software-data';

// ═══════════════════════════════════════════════
// MARKETPLACE PRODUCT CARD
// ═══════════════════════════════════════════════

function MarketplaceCard({ product }: { product: MarketplaceProduct }) {
  const IconComponent = product.icon;

  return (
    <Link
      href={`/marketplace/${product.slug}/`}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: '#1C1F26',
        border: '1px solid #2D323E',
      }}
    >
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          boxShadow: `0 8px 40px ${product.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
        }}
      />

      {/* Gradient Header Strip */}
      <div
        className="relative h-28 sm:h-32 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${product.colorFrom}15, ${product.colorTo}15)`,
        }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Icon */}
        <div
          className="relative w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${product.colorFrom}25, ${product.colorTo}25)`,
            borderColor: `${product.colorFrom}40`,
          }}
        >
          <IconComponent size={22} style={{ color: product.colorFrom }} />
        </div>

        {/* Readiness Badge */}
        <div className="absolute top-2.5 right-2.5">
          <span
            className="inline-flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-md"
            style={{
              backgroundColor: product.readiness === 'full-stack' ? 'rgba(156,238,105,0.15)' : 'rgba(148,163,184,0.15)',
              color: product.readiness === 'full-stack' ? '#9CEE69' : '#94A3B8',
              border: `1px solid ${product.readiness === 'full-stack' ? 'rgba(156,238,105,0.3)' : 'rgba(148,163,184,0.2)'}`,
            }}
          >
            {product.readiness === 'full-stack' ? (
              <><Package size={9} /> Full-Stack</>
            ) : (
              <><Monitor size={9} /> Frontend</>
            )}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-3.5 sm:p-4">
        {/* Category Tag */}
        <span
          className="inline-flex self-start items-center text-[8.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2"
          style={{
            backgroundColor: 'rgba(255,255,255,0.04)',
            color: '#64748B',
            border: '1px solid #2D323E',
          }}
        >
          {product.category}
        </span>

        {/* Title */}
        <h3
          className="font-bold text-xs sm:text-[13px] leading-snug tracking-tight mb-1.5 transition-colors duration-300 line-clamp-2 min-h-[34px]"
          style={{ color: '#F8FAFC' }}
        >
          <span className="group-hover:text-[#9CEE69] transition-colors duration-300">
            {product.name}
          </span>
        </h3>

        {/* Headline */}
        <p className="text-[11px] leading-relaxed mb-3 line-clamp-2" style={{ color: '#94A3B8' }}>
          {product.headline}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-semibold px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                color: '#64748B',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="mt-auto" />

        {/* Price Row */}
        <div className="flex items-end justify-between mb-3 pt-2.5" style={{ borderTop: '1px solid #2D323E' }}>
          <div>
            <span className="text-[9px] uppercase tracking-wider font-medium block mb-0.5" style={{ color: '#64748B' }}>
              Starting from
            </span>
            <span className="text-base sm:text-lg font-bold" style={{ color: '#9CEE69' }}>
              {formatINR(product.pricing.singleLicense)}
            </span>
            {product.pricing.isSamplePrice && (
              <span className="text-[8.5px] block mt-0.5 italic" style={{ color: '#64748B' }}>
                Sample pricing
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1.5">
          {product.demoUrl && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(product.demoUrl, '_blank');
              }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              style={{
                color: '#94A3B8',
                border: '1px solid #2D323E',
                backgroundColor: 'transparent',
              }}
            >
              <ExternalLink size={11} />
              Preview
            </button>
          )}
          <div
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: '#9CEE69',
              color: '#000000',
              border: '1px solid #9CEE69',
            }}
          >
            <ArrowRight size={11} />
            Details
          </div>
        </div>
      </div>
    </Link>
  );
}

// ═══════════════════════════════════════════════
// MARKETPLACE EXPLORER (Main Client Component)
// ═══════════════════════════════════════════════

export default function MarketplaceExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedReadiness, setSelectedReadiness] = useState<'all' | 'full-stack' | 'frontend-only'>('all');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close category dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut Ctrl+K to focus search input
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeCat = MARKETPLACE_CATEGORIES.find((c) => c.slug === selectedCategory) || MARKETPLACE_CATEGORIES[0];
  const ActiveIcon = activeCat.icon;

  const filteredProducts = useMemo(() => {
    return MARKETPLACE_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const cat = MARKETPLACE_CATEGORIES.find(c => c.slug === selectedCategory);
        if (cat && product.category !== cat.name) return false;
      }

      // Readiness filter
      if (selectedReadiness !== 'all' && product.readiness !== selectedReadiness) return false;

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const searchable = [
          product.name,
          product.headline,
          product.category,
          product.description,
          ...product.techStack,
          ...product.features,
        ]
          .join(' ')
          .toLowerCase();
        if (!searchable.includes(q)) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedReadiness]);

  return (
    <section className="relative z-10 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        {/* ─── Unified Single-Row Search, Category Dropdown & Type Bar ─── */}
        <div className="relative group mb-6">
          {/* Ambient Glowing Aura Effect */}
          <div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#9CEE69]/20 via-[#86EFAC]/10 to-[#9CEE69]/20 opacity-40 group-hover:opacity-100 group-focus-within:opacity-100 blur-md transition-all duration-500 pointer-events-none -z-10"
          />

          <div
            className="relative flex flex-col sm:flex-row items-stretch sm:items-center p-1.5 sm:p-2 rounded-2xl backdrop-blur-2xl transition-all duration-300 gap-2 sm:gap-0"
            style={{
              backgroundColor: 'rgba(28, 31, 38, 0.94)',
              border: '1px solid #2D323E',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* 1. Category Dropdown Button */}
            <div className="relative shrink-0" ref={categoryRef}>
              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer w-full sm:w-auto justify-between"
                style={{
                  backgroundColor: selectedCategory !== 'all' ? 'rgba(156, 238, 105, 0.12)' : '#222630',
                  border: selectedCategory !== 'all' ? '1px solid rgba(156, 238, 105, 0.4)' : '1px solid #2D323E',
                  color: selectedCategory !== 'all' ? '#9CEE69' : '#F8FAFC',
                }}
              >
                <div className="flex items-center gap-2 truncate">
                  <ActiveIcon size={14} style={{ color: selectedCategory !== 'all' ? '#9CEE69' : '#94A3B8' }} />
                  <span className="truncate max-w-[150px] sm:max-w-[170px]">{activeCat.name}</span>
                </div>
                <ChevronDown
                  size={13}
                  className={`shrink-0 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}
                  style={{ color: '#94A3B8' }}
                />
              </button>

              {/* Floating Category Menu */}
              <AnimatePresence>
                {isCategoryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-0 top-full mt-2 w-64 rounded-xl p-1.5 z-50 backdrop-blur-2xl shadow-2xl"
                    style={{
                      backgroundColor: '#1C1F26',
                      border: '1px solid #2D323E',
                      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(156, 238, 105, 0.1)',
                    }}
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 mb-1" style={{ color: '#64748B' }}>
                      Select Category
                    </div>
                    <div className="space-y-0.5">
                      {MARKETPLACE_CATEGORIES.map((cat) => {
                        const CatIcon = cat.icon;
                        const isSelected = selectedCategory === cat.slug;
                        return (
                          <button
                            key={cat.slug}
                            onClick={() => {
                              setSelectedCategory(cat.slug);
                              setIsCategoryOpen(false);
                            }}
                            className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors text-left cursor-pointer"
                            style={{
                              backgroundColor: isSelected ? 'rgba(156, 238, 105, 0.12)' : 'transparent',
                              color: isSelected ? '#9CEE69' : '#94A3B8',
                            }}
                          >
                            <div className="flex items-center gap-2.5 truncate">
                              <CatIcon size={14} style={{ color: isSelected ? '#9CEE69' : '#64748B' }} />
                              <span className="truncate">{cat.name}</span>
                            </div>
                            {isSelected && <Check size={14} className="shrink-0" style={{ color: '#9CEE69' }} />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-[1px] h-6 mx-2" style={{ backgroundColor: '#2D323E' }} />

            {/* 2. Main Search Input (Expands) */}
            <div className="relative flex-1 flex items-center min-w-0">
              <Search
                size={16}
                className="absolute left-3 transition-colors duration-200 pointer-events-none"
                style={{ color: searchQuery ? '#9CEE69' : '#64748B' }}
              />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search software by name, category, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-16 py-2 bg-transparent text-xs sm:text-sm font-medium outline-none text-white placeholder:text-zinc-500"
              />

              {/* Right side: Clear button & Hotkey */}
              <div className="absolute right-2 flex items-center gap-1.5">
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 rounded-md text-zinc-500 hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={13} />
                  </button>
                )}
                <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#222630] border border-[#2D323E] text-zinc-400 select-none">
                  Ctrl K
                </kbd>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-[1px] h-6 mx-2" style={{ backgroundColor: '#2D323E' }} />

            {/* 3. Package Type / Readiness Pills */}
            <div className="flex items-center gap-1 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0" style={{ borderColor: '#2D323E' }}>
              {[
                { value: 'all' as const, label: 'All' },
                { value: 'full-stack' as const, label: 'Full-Stack' },
                { value: 'frontend-only' as const, label: 'Frontend' },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSelectedReadiness(opt.value)}
                  className="px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: selectedReadiness === opt.value ? 'rgba(156, 238, 105, 0.15)' : 'transparent',
                    border: selectedReadiness === opt.value ? '1px solid rgba(156, 238, 105, 0.35)' : '1px solid transparent',
                    color: selectedReadiness === opt.value ? '#9CEE69' : '#94A3B8',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Results Count & Active Filter Indicator ─── */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm" style={{ color: '#94A3B8' }}>
            Showing <span style={{ color: '#F8FAFC' }} className="font-semibold">{filteredProducts.length}</span> software package{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && (
              <span className="ml-2 font-medium" style={{ color: '#9CEE69' }}>in {activeCat.name}</span>
            )}
            {selectedReadiness !== 'all' && (
              <span className="ml-1 text-slate-400 font-medium">({selectedReadiness})</span>
            )}
          </p>
          {(selectedCategory !== 'all' || selectedReadiness !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedReadiness('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold underline cursor-pointer transition-colors"
              style={{ color: '#9CEE69' }}
            >
              Reset filters
            </button>
          )}
        </div>

        {/* ─── Product Grid (4 Columns) ─── */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4.5">
            {filteredProducts.map((product) => (
              <MarketplaceCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            className="flex flex-col items-center justify-center py-20 rounded-2xl"
            style={{
              backgroundColor: '#1C1F26',
              border: '1px solid #2D323E',
            }}
          >
            <Search size={40} style={{ color: '#2D323E' }} className="mb-4" />
            <h3 className="text-lg font-bold mb-2" style={{ color: '#F8FAFC' }}>
              No software found
            </h3>
            <p className="text-sm mb-4" style={{ color: '#64748B' }}>
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedReadiness('all');
              }}
              className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer transition-all"
              style={{
                backgroundColor: 'rgba(156,238,105,0.1)',
                border: '1px solid rgba(156,238,105,0.3)',
                color: '#9CEE69',
              }}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
