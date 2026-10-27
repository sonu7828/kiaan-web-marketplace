'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ExternalLink, ArrowRight, Package, Monitor, X, ChevronDown, Check, ShoppingCart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MARKETPLACE_PRODUCTS,
  MARKETPLACE_CATEGORIES,
  formatINR,
  type MarketplaceProduct,
} from '@/data/marketplace-software-data';
import { useCart } from '@/context/CartContext';

// ═══════════════════════════════════════════════
// MARKETPLACE PRODUCT CARD (CodeCanyon-Style)
// ═══════════════════════════════════════════════

interface MarketplaceCardProps {
  product: MarketplaceProduct;
  isInCart: boolean;
  onAddToCart: () => void;
}

const PRODUCT_RATINGS: Record<string, { stars: number; count: string; sales: number }> = {
  'mp-001': { stars: 5, count: '48', sales: 52 },
  'mp-002': { stars: 4, count: '27', sales: 27 },
  'mp-003': { stars: 5, count: '64', sales: 68 },
  'mp-004': { stars: 4, count: '19', sales: 34 },
  'mp-005': { stars: 4, count: '35', sales: 45 },
  'mp-006': { stars: 3, count: '16', sales: 21 },
};

function MarketplaceCard({
  product,
  isInCart,
  onAddToCart,
}: MarketplaceCardProps) {
  const ratingData = PRODUCT_RATINGS[product.id] || { stars: 4, count: '24', sales: 25 };
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

      {/* ─── 1. Product Thumbnail / Poster (Redesigned Software Window Preview) ─── */}
      {/* ─── 1. Card Top: High-Converting Creative Showcase Banner (CodeCanyon / Codester Style) ─── */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-[#0B0D11] border-b border-[#2D323E]">
        {/* Link to detail page covering the poster */}
        <Link
          href={`/marketplace/${product.slug}/`}
          className="absolute inset-0 z-0 block cursor-pointer group/poster overflow-hidden"
          aria-label={`View details for ${product.name}`}
        >
          {product.thumbnailUrl ? (
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={product.thumbnailUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover/poster:scale-105"
                loading="lazy"
              />
              {/* Subtle inner edge sheen for crisp showcase frame */}
              <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] pointer-events-none" />

              {/* Category pill on top-right of image */}
              <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                <span
                  className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border backdrop-blur-md shadow-md"
                  style={{
                    backgroundColor: 'rgba(15, 17, 21, 0.85)',
                    borderColor: 'rgba(255, 255, 255, 0.18)',
                    color: '#F8FAFC',
                  }}
                >
                  {product.category}
                </span>
              </div>
            </div>
          ) : (
            <>
              {/* Ambient Radial Gradient Mesh */}
              <div
                className="absolute inset-0 transition-all duration-500 group-hover/poster:scale-110"
                style={{
                  background: `radial-gradient(circle at 50% 35%, ${product.colorFrom}35 0%, ${product.colorTo}15 50%, transparent 75%)`,
                }}
              />

              {/* Architectural Tech Grid Lines */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Software Window Preview Mockup */}
              <div
                className="absolute inset-x-3.5 top-3.5 bottom-3.5 flex flex-col rounded-xl overflow-hidden border transition-all duration-300 group-hover:border-white/20"
                style={{
                  backgroundColor: 'rgba(20, 23, 30, 0.85)',
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  boxShadow: `0 12px 36px -8px ${product.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Window Titlebar */}
                <div className="h-6 px-3 flex items-center justify-between border-b border-white/[0.06] bg-black/30 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5F56]/80" />
                    <span className="w-2 h-2 rounded-full bg-[#FFBD2E]/80" />
                    <span className="w-2 h-2 rounded-full bg-[#27C93F]/80" />
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[8px] font-mono text-zinc-400 max-w-[150px] truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9CEE69]/80 shrink-0" />
                    <span className="truncate">kiaan.io/{product.slug}</span>
                  </div>
                </div>

                {/* Window Content / Graphic Stage */}
                <div className="flex-1 flex flex-col items-center justify-center p-3 relative overflow-hidden">
                  {/* Background faux code & dashboard lines */}
                  <div className="absolute inset-x-4 top-2 flex flex-col gap-1.5 opacity-20 pointer-events-none">
                    <div className="h-1 w-20 rounded bg-white" />
                    <div className="h-1 w-32 rounded bg-white/70" />
                    <div className="h-1 w-16 rounded bg-white/50" />
                  </div>

                  {/* Floating Center Icon Shield */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${product.colorFrom}35, ${product.colorTo}45)`,
                      borderColor: `${product.colorFrom}60`,
                      boxShadow: `0 8px 24px -4px ${product.glow}`,
                    }}
                  >
                    <IconComponent size={24} style={{ color: '#FFFFFF' }} />
                  </div>

                  {/* Category Pill Tag */}
                  <span
                    className="relative z-10 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mt-2 transition-colors duration-200"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#E2E8F0',
                    }}
                  >
                    {product.category}
                  </span>
                </div>
              </div>
            </>
          )}
        </Link>
      </div>

      {/* ─── 2. Card Body (CodeCanyon Proportion) ─── */}
      <div className="flex flex-col flex-1 p-4 sm:p-4.5">
        {/* Title (Link to Detail Page) */}
        <Link
          href={`/marketplace/${product.slug}/`}
          className="font-bold text-sm sm:text-[15px] leading-snug tracking-tight mb-1.5 text-[#F8FAFC] hover:text-[#9CEE69] transition-colors duration-200 line-clamp-1 block"
          title={product.name}
        >
          {product.name}
        </Link>

        {/* Subline: Author & Category (CodeCanyon reference: "by ... in ...") */}
        <div className="text-[11px] sm:text-xs mb-3.5 truncate" style={{ color: '#94A3B8' }}>
          by <span style={{ color: '#F8FAFC' }} className="font-medium">Kiaan Technology</span> in{' '}
          <span style={{ color: '#94A3B8' }}>{product.category}</span>
        </div>

        {/* ─── 3. Bottom Meta & Actions Row (CodeCanyon Style) ─── */}
        <div className="pt-3 border-t mt-auto" style={{ borderColor: '#2D323E' }}>
          <div className="flex items-center justify-between gap-2">
            {/* Left: Price + Rating + Sales */}
            <div className="flex flex-col min-w-0">
              {/* Price */}
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-bold tracking-tight" style={{ color: '#9CEE69' }}>
                  {formatINR(product.pricing.singleLicense)}
                </span>
                {product.pricing.isSamplePrice && (
                  <span className="text-[8.5px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">
                    Sample
                  </span>
                )}
              </div>

              {/* Rating Stars (Authentic CodeCanyon dynamic rating) */}
              <div className="flex items-center gap-1.5 mt-1">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={11}
                      className={
                        star <= ratingData.stars
                          ? 'fill-amber-400 text-amber-400 stroke-none'
                          : 'fill-transparent text-zinc-600 stroke-[1.5]'
                      }
                    />
                  ))}
                </div>
                <span className="text-[10px] text-zinc-400 font-medium">
                  ({ratingData.count})
                </span>
              </div>

              {/* Sales Count */}
              <span className="text-[10.5px] text-zinc-400 mt-0.5 block font-medium">
                {ratingData.sales} Sales
              </span>
            </div>

            {/* Right: Actions (Cart & Live Preview) */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Add to Cart Button (Blocked/Disabled when added) */}
              <button
                type="button"
                disabled={isInCart}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (!isInCart) {
                    onAddToCart();
                  }
                }}
                title={isInCart ? 'Item already in cart' : 'Add to cart'}
                aria-label={isInCart ? 'Item already in cart' : 'Add to cart'}
                className={`relative w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 shrink-0 ${
                  isInCart
                    ? 'cursor-default opacity-60'
                    : 'cursor-pointer active:scale-95'
                }`}
                style={{
                  backgroundColor: isInCart ? '#090B0E' : '#16181D',
                  borderColor: isInCart ? '#262A34' : '#2D323E',
                  color: isInCart ? '#475569' : '#94A3B8',
                  boxShadow: isInCart ? 'inset 0 2px 4px rgba(0,0,0,0.9)' : 'none',
                }}
              >
                <ShoppingCart
                  size={14}
                  className={isInCart ? 'fill-zinc-600 text-zinc-600' : 'text-[#94A3B8]'}
                />
              </button>

              {/* Live Preview Button (CodeCanyon Signature Blue Outlined Style) */}
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="h-9 px-3 rounded-lg flex items-center justify-center gap-1.5 text-xs font-semibold border transition-all duration-200 cursor-pointer shrink-0 active:scale-95"
                style={{
                  borderColor: '#0284C7',
                  color: '#38BDF8',
                  backgroundColor: 'rgba(2, 132, 199, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.2)';
                  e.currentTarget.style.borderColor = '#38BDF8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(2, 132, 199, 0.08)';
                  e.currentTarget.style.borderColor = '#0284C7';
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
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Global persistent cart state
  const router = useRouter();
  const { isInCart, addToCart, itemCount, subtotal } = useCart();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerToast = (msg: string) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastMessage(msg);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToCart = (product: MarketplaceProduct) => {
    if (!isInCart(product.id)) {
      addToCart(product, 'single');
      triggerToast(`Added "${product.name}" to cart`);
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeCategory = selectedCategory === 'all'
    ? null
    : MARKETPLACE_CATEGORIES.find((c) => c.slug === selectedCategory);

  const filteredProducts = useMemo(() => {
    return MARKETPLACE_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const catObj = MARKETPLACE_CATEGORIES.find((c) => c.slug === selectedCategory);
        if (catObj && product.category.toLowerCase() !== catObj.name.toLowerCase()) {
          return false;
        }
      }

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
  }, [searchQuery, selectedCategory]);

  return (
    <section className="relative z-10 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1280px]">
        {/* ─── Full-Width Search, Dropdown & Cart Bar ─── */}
        <div className="relative z-40 group mb-6 w-full">
          {/* Ambient Glowing Aura Effect */}
          <div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#9CEE69]/20 via-[#86EFAC]/10 to-[#9CEE69]/20 opacity-40 group-hover:opacity-100 group-focus-within:opacity-100 blur-md transition-all duration-500 pointer-events-none -z-10"
          />

          <div
            className="relative z-40 flex flex-col sm:flex-row items-stretch sm:items-center p-1.5 sm:p-2 rounded-2xl backdrop-blur-2xl transition-all duration-300 gap-2 sm:gap-0 w-full"
            style={{
              backgroundColor: 'rgba(28, 31, 38, 0.96)',
              border: '1px solid #2D323E',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* 1. Main Search Input (Expands to fill full available width) */}
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
                className="w-full pl-9 pr-9 py-2 bg-transparent text-xs sm:text-sm font-medium outline-none text-white placeholder:text-zinc-500"
              />

              {/* Clear button */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 p-1 rounded-md text-zinc-500 hover:text-white transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Vertical Divider */}
            <div className="hidden sm:block w-[1px] h-6 mx-2" style={{ backgroundColor: '#2D323E' }} />

            {/* Right Group: Dropdown & Cart Button */}
            <div className="flex items-center gap-2 shrink-0">
              {/* 2. Categories Dropdown Button */}
              <div className="relative shrink-0" ref={categoryRef}>
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer w-full sm:w-auto justify-between"
                  style={{
                    backgroundColor: selectedCategory !== 'all' ? 'rgba(156, 238, 105, 0.14)' : '#222630',
                    border: selectedCategory !== 'all' ? '1px solid rgba(156, 238, 105, 0.45)' : '1px solid #2D323E',
                    color: selectedCategory !== 'all' ? '#9CEE69' : '#F8FAFC',
                  }}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className="truncate max-w-[140px] sm:max-w-[200px]">
                      {activeCategory ? activeCategory.name : 'All Categories'}
                    </span>
                  </div>
                  <ChevronDown
                    size={13}
                    className={`shrink-0 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}
                    style={{ color: '#94A3B8' }}
                  />
                </button>

                {/* Floating Categories Menu with High z-index & High Contrast */}
                <AnimatePresence>
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.15, ease: 'easeOut' }}
                      className="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-xl p-2 z-[100] shadow-2xl backdrop-blur-2xl"
                      style={{
                        backgroundColor: '#16181D',
                        border: '1px solid #3F4452',
                        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(156, 238, 105, 0.15)',
                      }}
                    >
                      <div className="space-y-1 max-h-[340px] overflow-y-auto pr-1">
                        {MARKETPLACE_CATEGORIES.map((cat) => {
                          const CatIcon = cat.icon;
                          const isSelected = selectedCategory === cat.slug;

                          return (
                            <button
                              key={cat.slug}
                              type="button"
                              onClick={() => {
                                setSelectedCategory(cat.slug);
                                setIsCategoryOpen(false);
                              }}
                              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all text-left cursor-pointer hover:bg-white/[0.08]"
                              style={{
                                backgroundColor: isSelected ? 'rgba(156, 238, 105, 0.15)' : 'transparent',
                                color: isSelected ? '#9CEE69' : '#FFFFFF',
                              }}
                            >
                              <div className="flex items-center gap-2.5 truncate">
                                <CatIcon
                                  size={15}
                                  style={{ color: isSelected ? '#9CEE69' : '#94A3B8' }}
                                  className="shrink-0"
                                />
                                <span className={`truncate ${cat.slug === 'all' ? 'font-bold' : ''}`}>
                                  {cat.slug === 'all' ? 'All Categories' : cat.name}
                                </span>
                              </div>
                              {isSelected && <Check size={14} className="shrink-0 text-[#9CEE69]" />}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. Cart Button (Icon only with item count badge) */}
              <Link
                href="/marketplace/cart"
                title="View Shopping Cart"
                aria-label="View Shopping Cart"
                className="relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 cursor-pointer shrink-0 active:scale-95"
                style={{
                  backgroundColor: itemCount > 0 ? 'rgba(16, 185, 129, 0.15)' : '#222630',
                  border: itemCount > 0 ? '1px solid #10B981' : '1px solid #2D323E',
                  color: itemCount > 0 ? '#10B981' : '#F8FAFC',
                  boxShadow: itemCount > 0 ? '0 0 16px rgba(16, 185, 129, 0.22)' : 'none',
                }}
              >
                <ShoppingCart size={16} className="shrink-0" />
                {itemCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold flex items-center justify-center shadow-md ring-2 ring-[#1C1F26]"
                    style={{
                      backgroundColor: '#10B981',
                      color: '#FFFFFF',
                    }}
                  >
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* ─── Results Count & Active Filter Indicator ─── */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm" style={{ color: '#94A3B8' }}>
            Showing <span style={{ color: '#F8FAFC' }} className="font-semibold">{filteredProducts.length}</span> software package{filteredProducts.length !== 1 ? 's' : ''}
            {activeCategory && (
              <span className="ml-2 font-medium" style={{ color: '#9CEE69' }}>— {activeCategory.name}</span>
            )}
          </p>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold underline cursor-pointer transition-colors"
              style={{ color: '#9CEE69' }}
            >
              Reset filters
            </button>
          )}
        </div>

        {/* ─── Product Grid (CodeCanyon 3-Column Layout) ─── */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <MarketplaceCard
                key={product.id}
                product={product}
                isInCart={isInCart(product.id)}
                onAddToCart={() => handleAddToCart(product)}
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

      {/* Floating Bottom Cart Pill (when itemCount > 0) */}
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
          >
            <Link
              href="/marketplace/cart"
              className="flex items-center gap-3.5 px-5 py-3 rounded-2xl border font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-2xl backdrop-blur-2xl group cursor-pointer"
              style={{
                backgroundColor: 'rgba(28, 31, 38, 0.96)',
                borderColor: '#9CEE69',
                boxShadow: '0 12px 40px rgba(0,0,0,0.8), 0 0 30px rgba(156,238,105,0.25)',
                color: '#F8FAFC',
              }}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-lg bg-[#9CEE69] text-black flex items-center justify-center font-black text-xs">
                  {itemCount}
                </span>
                <span className="text-xs font-bold">
                  {itemCount} {itemCount === 1 ? 'Package' : 'Packages'} •{' '}
                  <span className="text-[#9CEE69] font-mono">{formatINR(subtotal)}</span>
                </span>
              </div>
              <span className="h-4 w-px bg-white/20" />
              <span className="text-[#9CEE69] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>View Cart</span>
                <ArrowRight size={13} />
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toast Notification with Direct "View Cart" Action */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md border text-xs font-semibold max-w-md pointer-events-auto"
            style={{
              backgroundColor: 'rgba(28, 31, 38, 0.96)',
              borderColor: 'rgba(156, 238, 105, 0.5)',
              color: '#F8FAFC',
              boxShadow: '0 10px 40px rgba(0,0,0,0.8), 0 0 25px rgba(156,238,105,0.2)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#9CEE69] shrink-0" />
            <span className="truncate">{toastMessage}</span>
            <Link
              href="/marketplace/cart"
              className="text-[#9CEE69] font-bold hover:underline shrink-0 flex items-center gap-1 ml-1"
            >
              <span>View Cart</span>
              <ArrowRight size={11} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
