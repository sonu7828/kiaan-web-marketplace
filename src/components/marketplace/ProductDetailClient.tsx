'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ExternalLink,
  Package,
  Monitor,
  CheckCircle2,
  ShieldCheck,
  FileCode2,
  Server,
  Headphones,
  ArrowRight,
  X,
  MessageSquare,
  Mail,
  Check,
  Star,
  Layers,
  HelpCircle,
  ShoppingBag,
  ShoppingCart,
} from 'lucide-react';
import {
  formatINR,
  getProductBySlug,
  type MarketplaceProduct,
} from '@/data/marketplace-software-data';
import { useCart } from '@/context/CartContext';

interface ProductDetailClientProps {
  slug: string;
}

export default function ProductDetailClient({ slug }: ProductDetailClientProps) {
  const product = getProductBySlug(slug);
  if (!product) return null;

  const IconComponent = product.icon;

  // Active tab state: 'overview' | 'features' | 'deliverables' | 'faq'
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'deliverables' | 'faq'>('overview');

  // License state: 'single' | 'multi'
  const [selectedLicense, setSelectedLicense] = useState<'single' | 'multi'>('single');

  // Optional add-ons
  const [includeDeployment, setIncludeDeployment] = useState(false);
  const [includeSupport, setIncludeSupport] = useState(false);

  // Cart state
  const { addToCart, isInCart, removeFromCart } = useCart();

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerCompany, setBuyerCompany] = useState('');
  const [buyerNotes, setBuyerNotes] = useState('');

  // Add-on pricing
  const DEPLOYMENT_PRICE = 4999;
  const SUPPORT_PRICE = 6999;

  const basePrice =
    selectedLicense === 'single'
      ? product.pricing.singleLicense
      : product.pricing.multiLicense;

  const addOnsTotal =
    (includeDeployment ? DEPLOYMENT_PRICE : 0) +
    (includeSupport ? SUPPORT_PRICE : 0);

  const totalPrice = basePrice + addOnsTotal;

  // Build WhatsApp inquiry message
  const generateWhatsAppUrl = () => {
    const licenseName =
      selectedLicense === 'single'
        ? 'Single Production License'
        : 'Multi-Deployment License';

    const addOnsList: string[] = [];
    if (includeDeployment) addOnsList.push(`Cloud Deployment Setup (₹${DEPLOYMENT_PRICE.toLocaleString('en-IN')})`);
    if (includeSupport) addOnsList.push(`Extended Engineering Support (₹${SUPPORT_PRICE.toLocaleString('en-IN')})`);

    const message = `Hello Kiaan Technology Team,

I am interested in licensing:
*Product:* ${product.name}
*License Tier:* ${licenseName} (₹${basePrice.toLocaleString('en-IN')})
${addOnsList.length > 0 ? `*Add-ons:* ${addOnsList.join(', ')}\n` : ''}*Calculated Total:* ₹${totalPrice.toLocaleString('en-IN')}

*Buyer Details:*
Name: ${buyerName || 'Not provided'}
Email: ${buyerEmail || 'Not provided'}
Phone/WhatsApp: ${buyerPhone || 'Not provided'}
Company: ${buyerCompany || 'Not provided'}
${buyerNotes ? `Notes: ${buyerNotes}\n` : ''}
Please share invoice details and code delivery handover timeline.`;

    return `https://wa.me/919993356066?text=${encodeURIComponent(message)}`;
  };

  // Build Mailto link
  const generateMailtoUrl = () => {
    const subject = `License Request: ${product.name} [${selectedLicense === 'single' ? 'Single' : 'Multi'} License]`;
    const licenseName =
      selectedLicense === 'single'
        ? 'Single Production License'
        : 'Multi-Deployment License';

    const body = `Hello Kiaan Technology Engineering Desk,

I would like to request source code licensing for:
Product: ${product.name}
License Tier: ${licenseName} (₹${basePrice.toLocaleString('en-IN')})
Total Price: ₹${totalPrice.toLocaleString('en-IN')}

Buyer Details:
Name: ${buyerName || 'Not provided'}
Email: ${buyerEmail || 'Not provided'}
Phone/WhatsApp: ${buyerPhone || 'Not provided'}
Company: ${buyerCompany || 'Not provided'}
${buyerNotes ? `Notes: ${buyerNotes}\n` : ''}
Please confirm deliverable verification and commercial licensing documents.`;

    return `mailto:contact@kiaantechnology.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const scrollToTab = (tab: 'overview' | 'features' | 'deliverables' | 'faq') => {
    setActiveTab(tab);
    const element = document.getElementById(`tab-${tab}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className="min-h-screen font-sans selection:bg-[#9CEE69] selection:text-black pt-0"
      style={{ backgroundColor: '#121316', color: '#F8FAFC' }}
    >
      {/* ─── 1. Breadcrumb ─── */}
      <nav aria-label="Breadcrumb" className="border-b" style={{ borderColor: '#2D323E' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] py-3.5">
          <ol className="flex items-center flex-wrap gap-2 text-xs" style={{ color: '#94A3B8' }}>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight size={12} style={{ color: '#64748B' }} />
            <li>
              <Link href="/marketplace/" className="hover:text-white transition-colors">
                Marketplace
              </Link>
            </li>
            <ChevronRight size={12} style={{ color: '#64748B' }} />
            <li>
              <span style={{ color: '#94A3B8' }}>{product.category}</span>
            </li>
            <ChevronRight size={12} style={{ color: '#64748B' }} />
            <li className="font-medium truncate max-w-[220px] sm:max-w-md" style={{ color: '#9CEE69' }}>
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* ─── 2. Codester-Style Product Header (Screenshot 1) ─── */}
      <section className="border-b" style={{ borderColor: '#2D323E', backgroundColor: '#16181D' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            {/* Product Icon / Logo Box */}
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shrink-0 border"
              style={{
                background: `linear-gradient(135deg, ${product.colorFrom}25, ${product.colorTo}25)`,
                borderColor: `${product.colorFrom}50`,
                boxShadow: `0 8px 24px ${product.glow}`,
              }}
            >
              <IconComponent size={34} style={{ color: product.colorFrom }} />
            </div>

            {/* Title, Headline & Ratings/Status Bar */}
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-1.5" style={{ color: '#F8FAFC' }}>
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm leading-relaxed mb-3 max-w-3xl" style={{ color: '#94A3B8' }}>
                {product.headline}
              </p>

              {/* Meta row: Stars, Review Count, Verified Status */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                {/* 5 Stars */}
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={13} className="text-[#475569] stroke-[1.5]" />
                    ))}
                  </div>
                  <span className="text-[11px]" style={{ color: '#94A3B8' }}>
                    0 reviews
                  </span>
                </div>

                <span style={{ color: '#2D323E' }}>•</span>

                {/* Recently Updated / Verified Architecture Badge */}
                <div className="inline-flex items-center gap-1.5 text-[11px] font-medium" style={{ color: '#9CEE69' }}>
                  <CheckCircle2 size={13} />
                  <span>Verified Architecture</span>
                </div>

                <span style={{ color: '#2D323E' }}>•</span>

                {/* Readiness Badge */}
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: product.readiness === 'full-stack' ? 'rgba(156,238,105,0.12)' : 'rgba(148,163,184,0.12)',
                    color: product.readiness === 'full-stack' ? '#9CEE69' : '#94A3B8',
                    border: `1px solid ${product.readiness === 'full-stack' ? 'rgba(156,238,105,0.25)' : 'rgba(148,163,184,0.2)'}`,
                  }}
                >
                  {product.readiness === 'full-stack' ? <><Package size={10} /> Full-Stack</> : <><Monitor size={10} /> Frontend</>}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Navigation Tabs Bar (Screenshot 1: Overview, Features, Deliverables, Support/FAQ) ─── */}
        <div className="border-t" style={{ borderColor: '#2D323E' }}>
          <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] flex items-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar">
            {[
              { id: 'overview' as const, label: 'Overview' },
              { id: 'features' as const, label: 'Features & Modules' },
              { id: 'deliverables' as const, label: 'Included Files' },
              { id: 'faq' as const, label: 'Support & FAQ' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToTab(tab.id)}
                  className={`py-3.5 px-1 sm:px-2 text-xs sm:text-sm font-semibold border-b-2 transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'border-[#9CEE69] text-[#9CEE69]'
                      : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. Main Product Layout (Two Columns) ─── */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ═══════════════════════════════════════════════
              LEFT COLUMN: 65% (8 COLS ON LG)
             ═══════════════════════════════════════════════ */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* 1. Large Product Poster / Preview Banner (Screenshot 1) */}
            <div
              id="tab-overview"
              className="rounded-2xl overflow-hidden border relative"
              style={{
                backgroundColor: '#1C1F26',
                borderColor: '#2D323E',
              }}
            >
              {/* Aspect Ratio 16:9 Banner Mockup */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B0D11] border-b border-[#2D323E]">
                {product.thumbnailUrl ? (
                  <div className="relative w-full h-full overflow-hidden group">
                    <img
                      src={product.thumbnailUrl}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Subtle inner edge sheen for crisp showcase frame */}
                    <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] pointer-events-none" />

                    {/* Category pill on top-right of image */}
                    <div className="absolute top-4 right-4 z-10 pointer-events-none">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md shadow-lg"
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
                    {/* Glow & Atmospheric Gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at 60% 40%, ${product.colorFrom}30 0%, transparent 70%), linear-gradient(135deg, ${product.colorFrom}15, ${product.colorTo}10)`,
                      }}
                    />

                    {/* Subtle Grid Overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage:
                          'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }}
                    />

                    {/* Centered Software Frame Mockup */}
                    <div className="absolute inset-x-6 top-8 bottom-6 flex flex-col items-center justify-center">
                      <div
                        className="w-full max-w-[420px] rounded-2xl border p-5 sm:p-6 flex flex-col items-center justify-center backdrop-blur-md"
                        style={{
                          backgroundColor: 'rgba(28, 31, 38, 0.85)',
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                          boxShadow: `0 16px 50px ${product.glow}`,
                        }}
                      >
                        {/* Window Controls */}
                        <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                          </div>
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">
                            {product.slug}.kiaan
                          </span>
                        </div>

                        {/* App Icon */}
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center border my-2"
                          style={{
                            background: `linear-gradient(135deg, ${product.colorFrom}35, ${product.colorTo}35)`,
                            borderColor: `${product.colorFrom}60`,
                          }}
                        >
                          <IconComponent size={32} style={{ color: product.colorFrom }} />
                        </div>

                        <h2 className="text-sm sm:text-base font-bold text-center mt-2 line-clamp-1" style={{ color: '#F8FAFC' }}>
                          {product.name}
                        </h2>
                        <span className="text-xs text-center text-slate-400 mt-0.5 line-clamp-1">
                          {product.headline}
                        </span>

                        {/* Tech chips inside banner */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
                          {product.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[9px] font-semibold px-2 py-0.5 rounded"
                              style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                                color: '#94A3B8',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Action Bar Directly Below Poster (Screenshot 1: Live Demo, Handover Request) */}
              <div
                className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-t"
                style={{ borderColor: '#2D323E', backgroundColor: '#16181D' }}
              >
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* Live Demo Action Button */}
                  <a
                    href={product.demoUrl || '/demo/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-md"
                    style={{
                      backgroundColor: '#2563eb',
                      color: '#FFFFFF',
                    }}
                  >
                    <ExternalLink size={13} />
                    <span>Live Demo Sandbox</span>
                  </a>

                  {/* Request Code Action */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:bg-white/5 active:scale-95 border cursor-pointer"
                    style={{
                      borderColor: '#2D323E',
                      color: '#F8FAFC',
                      backgroundColor: '#222630',
                    }}
                  >
                    <ShoppingBag size={13} style={{ color: '#9CEE69' }} />
                    <span>Inquire / Request Handover</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs" style={{ color: '#94A3B8' }}>
                  <ShieldCheck size={15} style={{ color: '#9CEE69' }} />
                  <span>Verified Production Codebase</span>
                </div>
              </div>
            </div>

            {/* 2. Overview & Detailed Description (Screenshot 2) */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-3" style={{ color: '#F8FAFC' }}>
                Platform Overview
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
                {product.description}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
                Engineered with high standards of maintainability, modular separation of concerns, and clean schema boundaries.
                Delivered as a turnkey source code package with database migrations, API documentation, and environment configuration templates ready for immediate deployment.
              </p>
            </div>

            {/* 3. Core Modules & Capabilities (Screenshot 3) */}
            <div
              id="tab-features"
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Layers size={18} style={{ color: '#9CEE69' }} />
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide" style={{ color: '#F8FAFC' }}>
                  Core Modules & Feature Breakdown
                </h2>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
                Comprehensive operational capabilities designed for end-to-end multi-tenant enterprise requirements:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl"
                    style={{
                      backgroundColor: '#222630',
                      border: '1px solid #2D323E',
                    }}
                  >
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: '#9CEE69' }} />
                    <span className="text-xs font-medium leading-relaxed" style={{ color: '#F8FAFC' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Included Deliverables Manifest (VS Code Tree) */}
            <div
              id="tab-deliverables"
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileCode2 size={18} style={{ color: '#9CEE69' }} />
                  <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide" style={{ color: '#F8FAFC' }}>
                    Included Files & Package Manifest
                  </h2>
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: 'rgba(156,238,105,0.1)',
                    color: '#9CEE69',
                  }}
                >
                  Verified Handover
                </span>
              </div>

              <p className="text-xs leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
                The following repository artifacts and verified schemas are included in the distribution archive:
              </p>

              <div
                className="rounded-xl p-4 font-mono text-xs overflow-x-auto"
                style={{
                  backgroundColor: '#16181D',
                  border: '1px solid #2D323E',
                }}
              >
                <div className="flex items-center gap-2 mb-3 pb-2 border-b" style={{ borderColor: '#2D323E' }}>
                  <Package size={14} style={{ color: '#9CEE69' }} />
                  <span className="font-bold text-slate-300">📦 {product.slug}-distribution-archive/</span>
                </div>
                <div className="flex flex-col gap-2 pl-2">
                  {product.includedFiles.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300">
                      <span style={{ color: '#64748B' }}>├──</span>
                      <FileCode2 size={13} style={{ color: '#38BDF8' }} />
                      <span>{file}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-slate-300">
                    <span style={{ color: '#64748B' }}>└──</span>
                    <ShieldCheck size={13} style={{ color: '#9CEE69' }} />
                    <span style={{ color: '#9CEE69' }}>COMMERCIAL-LICENSE-GRANT.pdf</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. System Requirements */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Server size={18} style={{ color: '#9CEE69' }} />
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide" style={{ color: '#F8FAFC' }}>
                  System Requirements & Hosting Specifications
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {product.requirements.map((req, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl flex flex-col justify-center"
                    style={{
                      backgroundColor: '#222630',
                      border: '1px solid #2D323E',
                    }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#64748B' }}>
                      Requirement {idx + 1}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: '#F8FAFC' }}>
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. FAQ & Support Section (Tab FAQ) */}
            <div
              id="tab-faq"
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle size={18} style={{ color: '#9CEE69' }} />
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide" style={{ color: '#F8FAFC' }}>
                  Frequently Asked Questions & Support
                </h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    q: 'How is the source code delivered?',
                    a: 'Upon purchase confirmation, your package is provided via a secure private Git repository transfer or direct encrypted archive download containing full, unminified source code.',
                  },
                  {
                    q: 'Can I customize and rebrand this software for my clients?',
                    a: 'Yes. Both Single and Multi-deployment licenses grant 100% white-label rights, allowing full rebranding, customization, and client deployments.',
                  },
                  {
                    q: 'What level of developer support is available?',
                    a: 'Direct engineering support is available directly from Kiaan Technology core developers for setup guidance, environment configuration, and architectural orientation.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl"
                    style={{
                      backgroundColor: '#222630',
                      border: '1px solid #2D323E',
                    }}
                  >
                    <h3 className="text-xs sm:text-sm font-bold mb-1.5" style={{ color: '#F8FAFC' }}>
                      {item.q}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              RIGHT SIDEBAR: 35% (4 COLS ON LG) (Codester Screenshots 1 & 2)
             ═══════════════════════════════════════════════ */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
            {/* Panel 1: Commercial Licensing & Purchase Box (Screenshot 1) */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: 'linear-gradient(to right, #9CEE69, #86EFAC)',
                }}
              />

              {/* Title, Price & Sample Badge */}
              <div className="mb-5">
                <span className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: '#94A3B8' }}>
                  Commercial Licensing
                </span>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-2xl sm:text-3xl font-bold tabular-nums" style={{ color: '#F8FAFC' }}>
                    {formatINR(totalPrice)}
                  </span>
                  <span
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: 'rgba(156,238,105,0.1)',
                      color: '#9CEE69',
                      border: '1px solid rgba(156,238,105,0.25)',
                    }}
                  >
                    Sample Price
                  </span>
                </div>
                <span className="text-[10px] block mt-1" style={{ color: '#64748B' }}>
                  *One-time license fee in INR. No recurring royalties.
                </span>
              </div>

              {/* License Tier Radio Selector */}
              <div className="space-y-3 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: '#F8FAFC' }}>
                  Select License Tier:
                </span>

                {/* Tier 1: Single Production License */}
                <label
                  onClick={() => setSelectedLicense('single')}
                  className="flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all duration-200 border"
                  style={{
                    backgroundColor: selectedLicense === 'single' ? '#222630' : '#16181D',
                    borderColor: selectedLicense === 'single' ? '#9CEE69' : '#2D323E',
                  }}
                >
                  <input
                    type="radio"
                    name="licenseTier"
                    checked={selectedLicense === 'single'}
                    onChange={() => setSelectedLicense('single')}
                    className="mt-1 accent-[#9CEE69] focus:ring-[#9CEE69]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold" style={{ color: '#F8FAFC' }}>
                        Single Production License
                      </span>
                      <span className="text-xs font-bold tabular-nums" style={{ color: '#9CEE69' }}>
                        {formatINR(product.pricing.singleLicense)}
                      </span>
                    </div>
                    <p className="text-[11px] leading-tight" style={{ color: '#94A3B8' }}>
                      1 live commercial deployment or client project. Full readable source code.
                    </p>
                  </div>
                </label>

                {/* Tier 2: Multi-Deployment License */}
                <label
                  onClick={() => setSelectedLicense('multi')}
                  className="flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all duration-200 border"
                  style={{
                    backgroundColor: selectedLicense === 'multi' ? '#222630' : '#16181D',
                    borderColor: selectedLicense === 'multi' ? '#9CEE69' : '#2D323E',
                  }}
                >
                  <input
                    type="radio"
                    name="licenseTier"
                    checked={selectedLicense === 'multi'}
                    onChange={() => setSelectedLicense('multi')}
                    className="mt-1 accent-[#9CEE69] focus:ring-[#9CEE69]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold" style={{ color: '#F8FAFC' }}>
                        Multi-Deployment License
                      </span>
                      <span className="text-xs font-bold tabular-nums" style={{ color: '#9CEE69' }}>
                        {formatINR(product.pricing.multiLicense)}
                      </span>
                    </div>
                    <p className="text-[11px] leading-tight" style={{ color: '#94A3B8' }}>
                      Up to 5 internal or client deployments for the same entity.
                    </p>
                  </div>
                </label>
              </div>

              {/* Codester-Style Value Props Checklist (Screenshot 1) */}
              <div className="space-y-2 mb-5 pt-3 border-t text-xs" style={{ borderColor: '#2D323E' }}>
                <div className="flex items-center gap-2">
                  <Check size={14} className="shrink-0" style={{ color: '#9CEE69' }} />
                  <span style={{ color: '#F8FAFC' }}>Direct Engineering Handover</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="shrink-0" style={{ color: '#9CEE69' }} />
                  <span style={{ color: '#F8FAFC' }}>Complete Unminified Source Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="shrink-0" style={{ color: '#9CEE69' }} />
                  <span style={{ color: '#F8FAFC' }}>Commercial License Agreement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="shrink-0" style={{ color: '#9CEE69' }} />
                  <span style={{ color: '#F8FAFC' }}>Verified Architectural Quality</span>
                </div>
              </div>

              {/* Optional Service Add-ons */}
              <div className="space-y-2.5 mb-5 pt-3 border-t" style={{ borderColor: '#2D323E' }}>
                <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: '#F8FAFC' }}>
                  Optional Services:
                </span>

                <label
                  className="flex items-start gap-2.5 p-2.5 rounded-xl cursor-pointer transition-colors border"
                  style={{
                    backgroundColor: includeDeployment ? '#222630' : '#16181D',
                    borderColor: includeDeployment ? 'rgba(156,238,105,0.5)' : '#2D323E',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={includeDeployment}
                    onChange={(e) => setIncludeDeployment(e.target.checked)}
                    className="mt-1 rounded accent-[#9CEE69] focus:ring-[#9CEE69]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold" style={{ color: '#F8FAFC' }}>
                        Cloud Deployment Setup
                      </span>
                      <span className="text-xs font-bold tabular-nums" style={{ color: '#94A3B8' }}>
                        +{formatINR(DEPLOYMENT_PRICE)}
                      </span>
                    </div>
                  </div>
                </label>

                <label
                  className="flex items-start gap-2.5 p-2.5 rounded-xl cursor-pointer transition-colors border"
                  style={{
                    backgroundColor: includeSupport ? '#222630' : '#16181D',
                    borderColor: includeSupport ? 'rgba(156,238,105,0.5)' : '#2D323E',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={includeSupport}
                    onChange={(e) => setIncludeSupport(e.target.checked)}
                    className="mt-1 rounded accent-[#9CEE69] focus:ring-[#9CEE69]"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold" style={{ color: '#F8FAFC' }}>
                        60 Days Priority Support
                      </span>
                      <span className="text-xs font-bold tabular-nums" style={{ color: '#94A3B8' }}>
                        +{formatINR(SUPPORT_PRICE)}
                      </span>
                    </div>
                  </div>
                </label>
              </div>

              {/* Price Calculation Summary */}
              <div className="p-3.5 rounded-xl mb-5 space-y-1.5" style={{ backgroundColor: '#16181D', border: '1px solid #2D323E' }}>
                <div className="flex justify-between text-xs" style={{ color: '#94A3B8' }}>
                  <span>Base License</span>
                  <span className="tabular-nums font-mono">{formatINR(basePrice)}</span>
                </div>
                {addOnsTotal > 0 && (
                  <div className="flex justify-between text-xs" style={{ color: '#94A3B8' }}>
                    <span>Optional Add-ons</span>
                    <span className="tabular-nums font-mono">+{formatINR(addOnsTotal)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs font-bold pt-2 border-t" style={{ borderColor: '#2D323E', color: '#F8FAFC' }}>
                  <span>Total Investment</span>
                  <span className="tabular-nums font-mono text-sm" style={{ color: '#9CEE69' }}>
                    {formatINR(totalPrice)}
                  </span>
                </div>
              </div>

              {/* Primary Action Button (Screenshot 1: Big Buy / Handover Request Button) */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg cursor-pointer"
                style={{
                  backgroundColor: '#9CEE69',
                  color: '#000000',
                  boxShadow: '0 4px 20px rgba(156,238,105,0.3)',
                }}
              >
                <span>Request Source Code & License</span>
                <ArrowRight size={14} />
              </button>

              {/* Add to Cart / View Cart Secondary Actions */}
              <div className="mt-2.5 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (isInCart(product.id)) {
                      removeFromCart(product.id);
                    } else {
                      addToCart(product, selectedLicense);
                    }
                  }}
                  className="flex-1 py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border transition-all duration-200 cursor-pointer active:scale-95"
                  style={{
                    backgroundColor: isInCart(product.id) ? 'rgba(156,238,105,0.14)' : 'rgba(255,255,255,0.03)',
                    borderColor: isInCart(product.id) ? '#9CEE69' : '#2D323E',
                    color: isInCart(product.id) ? '#9CEE69' : '#F8FAFC',
                  }}
                >
                  {isInCart(product.id) ? (
                    <>
                      <Check size={14} />
                      <span>In Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={14} />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                {isInCart(product.id) && (
                  <Link
                    href="/marketplace/cart"
                    className="py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer hover:brightness-110 active:scale-95"
                    style={{
                      backgroundColor: '#9CEE69',
                      color: '#000000',
                    }}
                  >
                    <span>View Cart</span>
                    <ArrowRight size={13} />
                  </Link>
                )}
              </div>

              <p className="text-[10px] text-center mt-2.5" style={{ color: '#64748B' }}>
                Direct engineering delivery • Verification before payment
              </p>
            </div>

            {/* Panel 2: Codester-Style Information Panel (Screenshot 2) */}
            <div
              className="rounded-2xl p-5"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3.5" style={{ color: '#F8FAFC' }}>
                Product Information
              </h3>
              <dl className="space-y-2.5 text-xs">
                <div className="flex justify-between pb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <dt style={{ color: '#64748B' }}>Category</dt>
                  <dd className="font-semibold" style={{ color: '#F8FAFC' }}>{product.category}</dd>
                </div>
                <div className="flex justify-between pb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <dt style={{ color: '#64748B' }}>Architecture</dt>
                  <dd className="font-semibold" style={{ color: '#9CEE69' }}>
                    {product.readiness === 'full-stack' ? 'Full-Stack Source Code' : 'Frontend Application'}
                  </dd>
                </div>
                <div className="flex justify-between pb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <dt style={{ color: '#64748B' }}>Tech Stack</dt>
                  <dd className="font-semibold text-right truncate max-w-[180px]" style={{ color: '#F8FAFC' }}>
                    {product.techStack.join(', ')}
                  </dd>
                </div>
                <div className="flex justify-between pb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <dt style={{ color: '#64748B' }}>Files Included</dt>
                  <dd className="font-semibold" style={{ color: '#F8FAFC' }}>
                    {product.includedFiles.length} Package Modules
                  </dd>
                </div>
                <div className="pt-1">
                  <dt className="mb-2" style={{ color: '#64748B' }}>Tags</dt>
                  <dd className="flex flex-wrap gap-1">
                    {product.techStack.concat([product.category]).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-medium px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: '#222630',
                          border: '1px solid #2D323E',
                          color: '#94A3B8',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Panel 3: Author / Engineering Desk (Screenshot 2 bottom) */}
            <div
              className="rounded-2xl p-5"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0"
                  style={{
                    backgroundColor: 'rgba(156,238,105,0.15)',
                    color: '#9CEE69',
                    border: '1px solid rgba(156,238,105,0.3)',
                  }}
                >
                  KT
                </div>
                <div>
                  <h4 className="text-xs font-bold" style={{ color: '#F8FAFC' }}>
                    Kiaan Technology
                  </h4>
                  <span className="text-[10px]" style={{ color: '#64748B' }}>
                    Enterprise Software & Platform Engineering
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t text-xs" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} style={{ color: '#9CEE69' }} />
                  <span style={{ color: '#94A3B8' }}>Verified Engineering Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones size={14} style={{ color: '#9CEE69' }} />
                  <span style={{ color: '#94A3B8' }}>Direct Core Developer Handover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 4. Assisted Purchase Modal (Preserved Functionality) ─── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            className="relative w-full max-w-lg rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            style={{
              backgroundColor: '#1C1F26',
              border: '1px solid #2D323E',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: '#9CEE69' }}>
                Direct Order Verification
              </span>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight" style={{ color: '#F8FAFC' }}>
                Request Code & Licensing
              </h3>
              <p className="text-xs mt-1" style={{ color: '#94A3B8' }}>
                Submit your project details to receive the verified handover package, quotation, and commercial agreement.
              </p>
            </div>

            {/* Selected Package Summary */}
            <div className="p-3.5 rounded-xl mb-5 space-y-1.5" style={{ backgroundColor: '#16181D', border: '1px solid #2D323E' }}>
              <div className="text-xs font-bold" style={{ color: '#F8FAFC' }}>
                {product.name}
              </div>
              <div className="flex justify-between text-xs" style={{ color: '#94A3B8' }}>
                <span>Tier: {selectedLicense === 'single' ? 'Single Production' : 'Multi-Deployment'}</span>
                <span className="font-mono text-[#9CEE69] font-bold">{formatINR(totalPrice)}</span>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold mb-1" style={{ color: '#F8FAFC' }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#16181D] border focus:outline-none focus:border-[#9CEE69] text-white placeholder-slate-500"
                  style={{ borderColor: '#2D323E' }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: '#F8FAFC' }}>
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#16181D] border focus:outline-none focus:border-[#9CEE69] text-white placeholder-slate-500"
                    style={{ borderColor: '#2D323E' }}
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: '#F8FAFC' }}>
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#16181D] border focus:outline-none focus:border-[#9CEE69] text-white placeholder-slate-500"
                    style={{ borderColor: '#2D323E' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold mb-1" style={{ color: '#F8FAFC' }}>
                  Company / Project Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Enterprises"
                  value={buyerCompany}
                  onChange={(e) => setBuyerCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#16181D] border focus:outline-none focus:border-[#9CEE69] text-white placeholder-slate-500"
                  style={{ borderColor: '#2D323E' }}
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold mb-1" style={{ color: '#F8FAFC' }}>
                  Custom Requirements / Deployment Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific hosting setup, database preferences, or custom module requirements..."
                  value={buyerNotes}
                  onChange={(e) => setBuyerNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#16181D] border focus:outline-none focus:border-[#9CEE69] text-white placeholder-slate-500 resize-none"
                  style={{ borderColor: '#2D323E' }}
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 space-y-2.5">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] active:scale-95 shadow-md"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#000000',
                  }}
                >
                  <MessageSquare size={15} />
                  <span>Send Order via WhatsApp</span>
                </a>

                <a
                  href={generateMailtoUrl()}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:bg-white/5 active:scale-95"
                  style={{
                    backgroundColor: '#222630',
                    border: '1px solid #2D323E',
                    color: '#F8FAFC',
                  }}
                >
                  <Mail size={15} />
                  <span>Email Engineering Desk</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
