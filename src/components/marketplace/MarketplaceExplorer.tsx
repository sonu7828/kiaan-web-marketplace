'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, ExternalLink, ArrowRight, Package, Monitor, X, ChevronDown, Check, ShoppingCart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MARKETPLACE_PRODUCTS,
  MARKETPLACE_CATEGORIES,
  formatINR,
  type MarketplaceProduct,
} from '@/data/marketplace-software-data';

// ═══════════════════════════════════════════════
// MARKETPLACE PRODUCT CARD (CodeCanyon-Style)
// ═══════════════════════════════════════════════

interface MarketplaceCardProps {
  product: MarketplaceProduct;
  isInCart: boolean;
  onToggleCart: () => void;
}

function MarketplaceCard({
  product,
  isInCart,
  onToggleCart,
}: MarketplaceCardProps) {
  const IconComponent = product.icon;
  const previewUrl = product.demoUrl || '/demo/';

  return (
    <div
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

      {/* ─── 1. Product Thumbnail / Poster ─── */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-[#16181D]">
        {/* Link to detail page covering the poster */}
        <Link
          href={`/marketplace/${product.slug}/`}
          className="absolute inset-0 z-0 block cursor-pointer"
          aria-label={`View details for ${product.name}`}
        >
          {/* Atmospheric Background & Glow */}
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{
              background: `radial-gradient(ellipse at 50% 30%, ${product.colorFrom}25 0%, transparent 70%), linear-gradient(135deg, ${product.colorFrom}15, ${product.colorTo}10)`,
            }}
          />

          {/* Subtle Architectural Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Software Window / Interface Mockup Graphic */}
          <div className="absolute inset-x-3 sm:inset-x-4 top-4 sm:top-5 bottom-3 sm:bottom-4 flex flex-col items-center justify-center">
            {/* Mini Window Frame */}
            <div
              className="w-full max-w-[220px] rounded-xl border p-2.5 sm:p-3 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg"
              style={{
                backgroundColor: 'rgba(28, 31, 38, 0.75)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                boxShadow: `0 8px 30px ${product.glow}`,
              }}
            >
              {/* Window controls bar */}
              <div className="w-full flex items-center justify-between pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 border-b border-white/5">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/70" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-[7.5px] uppercase tracking-wider text-slate-400 font-mono font-medium truncate max-w-[120px]">
                  {product.slug}.kiaan
                </span>
              </div>

              {/* Centerpiece Icon & Glow */}
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border my-0.5 sm:my-1 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${product.colorFrom}30, ${product.colorTo}30)`,
                  borderColor: `${product.colorFrom}50`,
                }}
              >
                <IconComponent size={22} style={{ color: product.colorFrom }} />
              </div>

              {/* Headline badge */}
              <span className="text-[8.5px] sm:text-[9px] font-semibold text-slate-300 truncate max-w-[170px] text-center mt-1">
                {product.category}
              </span>
            </div>
          </div>
        </Link>

        {/* Top-Left: Readiness Badge */}
        <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
          <span
            className="inline-flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-md"
            style={{
              backgroundColor:
                product.readiness === 'full-stack' ? 'rgba(156,238,105,0.15)' : 'rgba(148,163,184,0.15)',
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

      {/* ─── 2. Card Body ─── */}
      <div className="flex flex-col flex-1 p-3.5 sm:p-4">
        {/* Title (Link to Detail Page) */}
        <Link
          href={`/marketplace/${product.slug}/`}
          className="font-bold text-xs sm:text-[13px] leading-snug tracking-tight mb-1 text-[#F8FAFC] hover:text-[#9CEE69] transition-colors duration-200 line-clamp-1 block"
          title={product.name}
        >
          {product.name}
        </Link>

        {/* Subline: Author & Category (CodeCanyon reference: "by ... in ...") */}
        <div className="text-[10px] sm:text-[10.5px] mb-2 truncate" style={{ color: '#94A3B8' }}>
          by <span style={{ color: '#F8FAFC' }} className="font-medium">Kiaan Technology</span> in{' '}
          <span style={{ color: '#94A3B8' }}>{product.category}</span>
        </div>

        {/* Description (Link to Detail Page) */}
        <Link
          href={`/marketplace/${product.slug}/`}
          className="text-[11px] leading-relaxed mb-3 line-clamp-2 transition-colors duration-200 hover:text-slate-300 block min-h-[32px]"
          style={{ color: '#94A3B8' }}
        >
          {product.headline}
        </Link>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[8.5px] font-semibold px-1.5 py-0.5 rounded"
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

        {/* Spacer to push actions to bottom */}
        <div className="mt-auto" />

        {/* ─── 3. Bottom Meta & Actions Row (CodeCanyon Style) ─── */}
        <div className="pt-3 border-t" style={{ borderColor: '#2D323E' }}>
          <div className="flex items-end justify-between gap-2">
            {/* Left: Price + Rating + Sales */}
            <div className="flex flex-col min-w-0">
              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span className="text-base sm:text-lg font-bold tracking-tight" style={{ color: '#9CEE69' }}>
                  {formatINR(product.pricing.singleLicense)}
                </span>
                {product.pricing.isSamplePrice && (
                  <span className="text-[8.5px] italic" style={{ color: '#64748B' }}>
                    Sample
                  </span>
                )}
              </div>

              {/* Rating Stars (Rule 6 Empty State) */}
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={10}
                      className="text-[#475569] stroke-[1.5]"
                    />
                  ))}
                </div>
                <span className="text-[9.5px]" style={{ color: '#64748B' }}>
                  (0)
                </span>
              </div>

              {/* Sales Count (Rule 6 Empty State) */}
              <span className="text-[9.5px] mt-0.5 block" style={{ color: '#64748B' }}>
                0 Sales
              </span>
            </div>

            {/* Right: Actions (Cart & Live Preview) */}
            <div className="flex items-center gap-1.5 shrink-0">
              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleCart();
                }}
                title={isInCart ? 'Remove from cart' : 'Add to cart'}
                aria-label={isInCart ? 'Remove from cart' : 'Add to cart'}
                className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
                style={{
                  backgroundColor: isInCart ? 'rgba(156,238,105,0.12)' : '#16181D',
                  borderColor: isInCart ? '#9CEE69' : '#2D323E',
                  color: isInCart ? '#9CEE69' : '#94A3B8',
                }}
              >
                {isInCart ? <Check size={14} /> : <ShoppingCart size={14} />}
              </button>

              {/* Live Preview Button */}
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="h-9 px-2.5 sm:px-3 rounded-lg flex items-center justify-center gap-1 text-[11px] font-semibold border transition-all duration-200 cursor-pointer shrink-0 hover:bg-white/[0.04] active:scale-95"
                style={{
                  borderColor: '#2D323E',
                  color: '#F8FAFC',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#9CEE69';
                  e.currentTarget.style.color = '#9CEE69';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2D323E';
                  e.currentTarget.style.color = '#F8FAFC';
                }}
              >
                <span>Live Preview</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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

  // Minimal frontend-only local state (no backend persistence)
  const [cartIds, setCartIds] = useState<Set<string>>(new Set());
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerToast = (msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleToggleCart = (product: MarketplaceProduct) => {
    setCartIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        triggerToast(`Removed "${product.name}" from cart`);
      } else {
        next.add(product.id);
        triggerToast(`Added "${product.name}" to cart`);
      }
      return next;
    });
  };

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
              <MarketplaceCard
                key={product.id}
                product={product}
                isInCart={cartIds.has(product.id)}
                onToggleCart={() => handleToggleCart(product)}
              />
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

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-2xl backdrop-blur-md border text-xs font-semibold max-w-sm pointer-events-none"
            style={{
              backgroundColor: 'rgba(28, 31, 38, 0.95)',
              borderColor: 'rgba(156, 238, 105, 0.4)',
              color: '#F8FAFC',
              boxShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 20px rgba(156,238,105,0.15)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#9CEE69] shrink-0" />
            <span className="truncate">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
