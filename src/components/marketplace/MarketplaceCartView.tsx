'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShoppingCart,
  Trash2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Check,
  ExternalLink,
  Package,
  Sparkles,
  FileCode2,
  Headphones,
  CheckCircle2,
  MessageSquare,
  Mail,
  X,
  Server,
  Layers,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import {
  formatINR,
  MARKETPLACE_PRODUCTS,
  MarketplaceProduct,
  getProductBySlug,
} from '@/data/marketplace-software-data';

export default function MarketplaceCartView() {
  const {
    items,
    itemCount,
    subtotal,
    isHydrated,
    removeFromCart,
    updateLicense,
    clearCart,
    addToCart,
  } = useCart();

  // Handover Checkout Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerCompany, setBuyerCompany] = useState('');
  const [buyerNotes, setBuyerNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate WhatsApp Order Message
  const generateWhatsAppCheckoutUrl = () => {
    const itemsList = items
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.name}*\n   - License: ${
            item.licenseTier === 'single'
              ? 'Single Commercial License'
              : 'Multi-Deployment License'
          }\n   - Price: ${formatINR(item.price)}`
      )
      .join('\n\n');

    const message = `Hello Kiaan Technology Team,

I would like to order the following software package(s) from the Marketplace:

${itemsList}

*Cart Total:* ${formatINR(subtotal)}
*Total Packages:* ${itemCount}

*Buyer Details:*
Name: ${buyerName || 'Not provided'}
Email: ${buyerEmail || 'Not provided'}
Phone/WhatsApp: ${buyerPhone || 'Not provided'}
Company: ${buyerCompany || 'Not provided'}
${buyerNotes ? `Notes: ${buyerNotes}\n` : ''}
Please verify license availability, share quotation/invoice, and schedule source-code handover.`;

    return `https://wa.me/919993356066?text=${encodeURIComponent(message)}`;
  };

  const handleSubmitCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Open WhatsApp in new tab
    const url = generateWhatsAppCheckoutUrl();
    window.open(url, '_blank');
  };

  // Recommended products for empty state or cross-sell
  const recommendedProducts = MARKETPLACE_PRODUCTS.filter(
    (p) => !items.some((i) => i.productId === p.id)
  ).slice(0, 3);

  if (!isHydrated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center pt-24 pb-16">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#9CEE69] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs uppercase tracking-wider text-zinc-400">Loading your cart...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-6 sm:pt-8 pb-24 text-white relative">
      {/* Ambient background glow */}
      <div
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(156,238,105,0.08), transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-[1360px]">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs mb-6 text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/marketplace" className="hover:text-[#9CEE69] transition-colors">
            Marketplace
          </Link>
          <span>/</span>
          <span className="text-[#9CEE69] font-semibold">Shopping Cart</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#2D323E]">
          <div>
            <div
              className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-2.5"
              style={{
                color: '#9CEE69',
                border: '1px solid rgba(156, 238, 105, 0.3)',
                backgroundColor: 'rgba(156, 238, 105, 0.08)',
              }}
            >
              <ShoppingCart size={12} />
              <span>MARKETPLACE CART</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight text-white">
              Software Packages & Licenses{' '}
              <span className="text-[#9CEE69]">({itemCount})</span>
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
              Review your selected source code repositories, configure deployment licenses, and request engineering handover.
            </p>
          </div>

          {itemCount > 0 && (
            <button
              onClick={clearCart}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-red-400 transition-colors self-start md:self-auto cursor-pointer"
            >
              <Trash2 size={13} />
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {/* Cart Content: Empty State OR Populated State */}
        {itemCount === 0 ? (
          <div className="py-12">
            <div
              className="flex flex-col items-center justify-center p-8 sm:p-14 rounded-3xl text-center max-w-2xl mx-auto backdrop-blur-xl"
              style={{
                backgroundColor: 'rgba(28, 31, 38, 0.7)',
                border: '1px solid #2D323E',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  backgroundColor: 'rgba(156, 238, 105, 0.1)',
                  border: '1px solid rgba(156, 238, 105, 0.25)',
                  color: '#9CEE69',
                }}
              >
                <ShoppingCart size={36} />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-2">
                Your Marketplace Cart is Empty
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mb-8 max-w-md leading-relaxed">
                You haven&apos;t added any software packages to your cart yet. Explore our verified production-ready codebases with commercial licenses.
              </p>

              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg"
                style={{
                  backgroundColor: '#9CEE69',
                  color: '#000000',
                  boxShadow: '0 4px 20px rgba(156,238,105,0.3)',
                }}
              >
                <span>Browse Software Marketplace</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Recommended Products */}
            {recommendedProducts.length > 0 && (
              <div className="mt-16">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#9CEE69]" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                      Recommended Software Packages
                    </h3>
                  </div>
                  <Link
                    href="/marketplace"
                    className="text-xs font-semibold text-[#9CEE69] hover:underline flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendedProducts.map((p) => {
                    const PIcon = p.icon;
                    return (
                      <div
                        key={p.id}
                        className="rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:border-[#9CEE69]/50"
                        style={{
                          backgroundColor: '#1C1F26',
                          border: '1px solid #2D323E',
                        }}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9CEE69]">
                              <PIcon size={18} />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/5">
                              {p.readiness === 'full-stack' ? 'Full-Stack' : 'Frontend'}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1 line-clamp-1">
                            {p.name}
                          </h4>
                          <p className="text-xs text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                            {p.headline}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-[#2D323E]">
                          <span className="text-sm font-bold text-[#9CEE69]">
                            {formatINR(p.pricing.singleLicense)}
                          </span>
                          <button
                            onClick={() => addToCart(p, 'single')}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5"
                            style={{
                              backgroundColor: 'rgba(156,238,105,0.12)',
                              border: '1px solid #9CEE69',
                              color: '#9CEE69',
                            }}
                          >
                            <ShoppingCart size={12} />
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Populated Cart Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Cart Items (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => {
                const fullProduct = getProductBySlug(item.slug);
                const ItemIcon = fullProduct?.icon || Package;

                return (
                  <div
                    key={item.productId}
                    className="rounded-2xl p-5 sm:p-6 transition-all duration-200"
                    style={{
                      backgroundColor: '#1C1F26',
                      border: '1px solid #2D323E',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      {/* Left: Icon & Info */}
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: 'rgba(156, 238, 105, 0.1)',
                            border: '1px solid rgba(156, 238, 105, 0.25)',
                            color: '#9CEE69',
                          }}
                        >
                          <ItemIcon size={24} />
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-[#9CEE69] border border-white/5">
                              {item.readiness === 'full-stack' ? 'Full-Stack' : 'Frontend'}
                            </span>
                            <span className="text-[10px] font-medium text-zinc-400">
                              {item.category}
                            </span>
                          </div>

                          <Link
                            href={`/marketplace/${item.slug}`}
                            className="text-base sm:text-lg font-bold text-white hover:text-[#9CEE69] transition-colors line-clamp-1"
                          >
                            {item.name}
                          </Link>
                          <p className="text-xs text-zinc-400 mt-0.5 line-clamp-2">
                            {item.headline}
                          </p>
                        </div>
                      </div>

                      {/* Right: Price & Remove */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0">
                        <span className="text-lg sm:text-xl font-bold font-mono text-[#9CEE69] tabular-nums">
                          {formatINR(item.price)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          title="Remove item"
                          className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    {item.techStack.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 mb-4">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#222630] text-zinc-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* License Tier Selector */}
                    <div className="pt-4 border-t border-[#2D323E]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                        Selected Commercial License:
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {/* Single License */}
                        <label
                          onClick={() => updateLicense(item.productId, 'single')}
                          className="flex items-start gap-2.5 p-3 rounded-xl cursor-pointer transition-all border"
                          style={{
                            backgroundColor:
                              item.licenseTier === 'single' ? '#222630' : '#16181D',
                            borderColor:
                              item.licenseTier === 'single' ? '#9CEE69' : '#2D323E',
                          }}
                        >
                          <input
                            type="radio"
                            name={`license-${item.productId}`}
                            checked={item.licenseTier === 'single'}
                            onChange={() => updateLicense(item.productId, 'single')}
                            className="mt-1 accent-[#9CEE69]"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between text-xs font-bold text-white mb-0.5">
                              <span>Single License</span>
                              <span className="text-[#9CEE69] tabular-nums">
                                {fullProduct ? formatINR(fullProduct.pricing.singleLicense) : ''}
                              </span>
                            </div>
                            <p className="text-[10px] text-zinc-400 leading-tight">
                              1 commercial deployment or client project. Full source code.
                            </p>
                          </div>
                        </label>

                        {/* Multi License */}
                        <label
                          onClick={() => updateLicense(item.productId, 'multi')}
                          className="flex items-start gap-2.5 p-3 rounded-xl cursor-pointer transition-all border"
                          style={{
                            backgroundColor:
                              item.licenseTier === 'multi' ? '#222630' : '#16181D',
                            borderColor:
                              item.licenseTier === 'multi' ? '#9CEE69' : '#2D323E',
                          }}
                        >
                          <input
                            type="radio"
                            name={`license-${item.productId}`}
                            checked={item.licenseTier === 'multi'}
                            onChange={() => updateLicense(item.productId, 'multi')}
                            className="mt-1 accent-[#9CEE69]"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between text-xs font-bold text-white mb-0.5">
                              <span>Multi-Deployment</span>
                              <span className="text-[#9CEE69] tabular-nums">
                                {fullProduct ? formatINR(fullProduct.pricing.multiLicense) : ''}
                              </span>
                            </div>
                            <p className="text-[10px] text-zinc-400 leading-tight">
                              Up to 5 commercial client deployments. White-label rights.
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Deliverables summary strip */}
                    <div className="mt-3.5 pt-3 border-t border-white/[0.04] flex flex-wrap items-center gap-y-1 gap-x-4 text-[11px] text-zinc-400">
                      <span className="flex items-center gap-1 text-zinc-300">
                        <Check size={12} className="text-[#9CEE69]" /> Git Repository Transfer
                      </span>
                      <span className="flex items-center gap-1 text-zinc-300">
                        <Check size={12} className="text-[#9CEE69]" /> Verified ZIP Archive
                      </span>
                      <span className="flex items-center gap-1 text-zinc-300">
                        <Check size={12} className="text-[#9CEE69]" /> Setup Documentation
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Back to marketplace button */}
              <div className="pt-2">
                <Link
                  href="/marketplace"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-[#9CEE69] transition-colors"
                >
                  <ArrowLeft size={13} />
                  <span>Continue Browsing Marketplace Packages</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Order Summary & Checkout Card (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
              <div
                className="rounded-2xl p-6 relative overflow-hidden backdrop-blur-xl"
                style={{
                  backgroundColor: '#1C1F26',
                  border: '1px solid #2D323E',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                }}
              >
                {/* Accent top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: 'linear-gradient(to right, #9CEE69, #86EFAC, #4ADE80)',
                  }}
                />

                <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                  Order Summary
                </h3>

                {/* Breakdown List */}
                <div className="space-y-2.5 pb-4 border-b border-[#2D323E] text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>Software Packages</span>
                    <span className="font-semibold text-white">{itemCount} items</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Direct Engineering Handover</span>
                    <span className="text-[#9CEE69] font-semibold">Included (Free)</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Commercial License Document</span>
                    <span className="text-[#9CEE69] font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Delivery SLA</span>
                    <span className="font-medium text-white">2 - 4 Hours Handover</span>
                  </div>
                </div>

                {/* Subtotal Total */}
                <div className="py-4 border-b border-[#2D323E]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-white block">
                        Total Investment
                      </span>
                      <span className="text-[10px] text-zinc-400">One-time commercial license</span>
                    </div>
                    <span className="text-2xl font-bold font-mono text-[#9CEE69] tabular-nums">
                      {formatINR(subtotal)}
                    </span>
                  </div>
                </div>

                {/* Primary Checkout CTA */}
                <div className="space-y-2.5 pt-5">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg cursor-pointer"
                    style={{
                      backgroundColor: '#9CEE69',
                      color: '#000000',
                      boxShadow: '0 4px 20px rgba(156,238,105,0.3)',
                    }}
                  >
                    <span>Proceed to Handover & Checkout</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href={generateWhatsAppCheckoutUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all duration-200 hover:bg-white/[0.04] cursor-pointer"
                    style={{
                      borderColor: '#2D323E',
                      color: '#F8FAFC',
                    }}
                  >
                    <MessageSquare size={13} className="text-[#9CEE69]" />
                    <span>Instant WhatsApp Order</span>
                  </a>
                </div>

                <p className="text-[10px] text-center text-zinc-500 mt-4 leading-normal">
                  Kiaan Technology handles every deployment package directly with authorized commercial contracts.
                </p>
              </div>

              {/* Guarantees Box */}
              <div
                className="rounded-2xl p-5 text-xs space-y-2.5"
                style={{
                  backgroundColor: '#1C1F26',
                  border: '1px solid #2D323E',
                }}
              >
                <div className="flex items-center gap-2 text-white font-bold mb-1">
                  <ShieldCheck size={16} className="text-[#9CEE69]" />
                  <span>Kiaan Buyer Guarantees</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Check size={13} className="text-[#9CEE69] shrink-0" />
                  <span>100% Unminified readable source code</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Check size={13} className="text-[#9CEE69] shrink-0" />
                  <span>No runtime licensing fees or lock-in</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Check size={13} className="text-[#9CEE69] shrink-0" />
                  <span>Direct developer onboarding assistance</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Handover & Checkout Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            className="relative w-full max-w-lg rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl"
            style={{
              backgroundColor: '#1C1F26',
              border: '1px solid #2D323E',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Package size={18} className="text-[#9CEE69]" />
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide text-white">
                Request Code Handover & Invoice
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mb-6">
              Total Order: <span className="text-[#9CEE69] font-bold">{formatINR(subtotal)}</span> for {itemCount} package(s). Fill in your details below to finalize invoice and repository transfer.
            </p>

            <form onSubmit={handleSubmitCheckout} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#16181D] border border-[#2D323E] text-white focus:outline-none focus:border-[#9CEE69] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#16181D] border border-[#2D323E] text-white focus:outline-none focus:border-[#9CEE69] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#16181D] border border-[#2D323E] text-white focus:outline-none focus:border-[#9CEE69] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Company / Entity Name
                </label>
                <input
                  type="text"
                  value={buyerCompany}
                  onChange={(e) => setBuyerCompany(e.target.value)}
                  placeholder="Company Name (optional)"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#16181D] border border-[#2D323E] text-white focus:outline-none focus:border-[#9CEE69] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Delivery Requirements or Questions
                </label>
                <textarea
                  rows={2}
                  value={buyerNotes}
                  onChange={(e) => setBuyerNotes(e.target.value)}
                  placeholder="Need custom payment gateway, AWS setup, or custom branding..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#16181D] border border-[#2D323E] text-white focus:outline-none focus:border-[#9CEE69] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] active:scale-95 shadow-lg cursor-pointer"
                  style={{
                    backgroundColor: '#9CEE69',
                    color: '#000000',
                  }}
                >
                  <MessageSquare size={14} />
                  <span>Send Handover Request via WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-zinc-500">
                  Direct reply from our engineering leads within 30 minutes.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
