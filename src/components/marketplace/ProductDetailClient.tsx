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
  Sparkles,
  Layers,
  ArrowRight,
  X,
  MessageSquare,
  Mail,
  Check,
  Info,
} from 'lucide-react';
import {
  formatINR,
  getProductBySlug,
  type MarketplaceProduct,
} from '@/data/marketplace-software-data';

interface ProductDetailClientProps {
  slug: string;
}

export default function ProductDetailClient({ slug }: ProductDetailClientProps) {
  const product = getProductBySlug(slug);
  if (!product) return null;

  const IconComponent = product.icon;

  // License state: 'single' | 'multi'
  const [selectedLicense, setSelectedLicense] = useState<'single' | 'multi'>('single');

  // Optional add-ons
  const [includeDeployment, setIncludeDeployment] = useState(false);
  const [includeSupport, setIncludeSupport] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerCompany, setBuyerCompany] = useState('');
  const [buyerNotes, setBuyerNotes] = useState('');

  // Add-on pricing (sample placeholders)
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

  return (
    <div
      className="min-h-screen font-sans selection:bg-[#9CEE69] selection:text-black"
      style={{ backgroundColor: '#121316', color: '#F8FAFC' }}
    >
      {/* ─── Breadcrumb ─── */}
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

      {/* ─── Main Two-Column Container ─── */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ═══════════════════════════════════════════════
              LEFT COLUMN: 65% (8 COLS ON LG)
              Technical Breakdown & Deliverables Showcase
             ═══════════════════════════════════════════════ */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* 1. Header & Title Block */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {/* Category Badge */}
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                  style={{
                    backgroundColor: 'rgba(156,238,105,0.1)',
                    color: '#9CEE69',
                    border: '1px solid rgba(156,238,105,0.25)',
                  }}
                >
                  {product.category}
                </span>

                {/* Readiness Badge */}
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                  style={{
                    backgroundColor:
                      product.readiness === 'full-stack'
                        ? 'rgba(156,238,105,0.12)'
                        : 'rgba(148,163,184,0.12)',
                    color: product.readiness === 'full-stack' ? '#9CEE69' : '#94A3B8',
                    border: `1px solid ${product.readiness === 'full-stack' ? 'rgba(156,238,105,0.25)' : 'rgba(148,163,184,0.2)'}`,
                  }}
                >
                  {product.readiness === 'full-stack' ? (
                    <>
                      <Package size={11} /> Full-Stack Source Code
                    </>
                  ) : (
                    <>
                      <Monitor size={11} /> Frontend Application
                    </>
                  )}
                </span>
              </div>

              {/* Title & Headline */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border"
                  style={{
                    background: `linear-gradient(135deg, ${product.colorFrom}25, ${product.colorTo}25)`,
                    borderColor: `${product.colorFrom}45`,
                  }}
                >
                  <IconComponent size={28} style={{ color: product.colorFrom }} />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-display uppercase tracking-tight leading-snug mb-1">
                    {product.name}
                  </h1>
                  <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
                    {product.headline}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t" style={{ borderColor: '#2D323E' }}>
                <span className="text-[11px] font-bold uppercase tracking-wider mr-1" style={{ color: '#64748B' }}>
                  Technologies:
                </span>
                {product.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg"
                    style={{
                      backgroundColor: '#222630',
                      border: '1px solid #2D323E',
                      color: '#F8FAFC',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Live Interactive Sandbox / Demo Banner */}
            <div
              className="rounded-2xl p-6 sm:p-8 relative overflow-hidden"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#F8FAFC' }}>
                      Live Demo Sandbox Available
                    </span>
                  </div>
                  <p className="text-xs max-w-lg leading-relaxed" style={{ color: '#94A3B8' }}>
                    Experience the complete working interface, operational flows, and dashboard capabilities in our live interactive sandbox.
                  </p>
                </div>

                <Link
                  href={product.demoUrl || '/demo/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-95 shrink-0"
                  style={{
                    backgroundColor: '#222630',
                    border: '1px solid #9CEE69',
                    color: '#9CEE69',
                  }}
                >
                  <span>Launch Live Demo in New Window</span>
                  <ExternalLink size={14} />
                </Link>
              </div>

              <div
                className="mt-4 pt-3 flex items-center gap-2 text-[11px] border-t"
                style={{ borderColor: 'rgba(255,255,255,0.05)', color: '#64748B' }}
              >
                <Info size={13} className="shrink-0" />
                <span>Sandbox environment features test data. No live financial or personal records are accessed.</span>
              </div>
            </div>

            {/* 3. Deep Feature Breakdown */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Layers size={18} style={{ color: '#9CEE69' }} />
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                  Core Modules & Capabilities
                </h2>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: '#94A3B8' }}>
                {product.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl transition-colors"
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

            {/* 4. Verified Deliverables & File Manifest (VS Code Style) */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <FileCode2 size={18} style={{ color: '#9CEE69' }} />
                  <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                    Included Deliverables Manifest
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
                Only verified software files and documented schemas are bundled into your private handover archive:
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
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                  System Requirements & Hosting
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
          </div>

          {/* ═══════════════════════════════════════════════
              RIGHT COLUMN: 35% (4 COLS ON LG)
              Sticky License Selector & Order Box
             ═══════════════════════════════════════════════ */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
            {/* 1. Main Purchase Box */}
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

              {/* Title & Sample Notice */}
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
                  *One-time license fee in INR. No recurring royalites.
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

              {/* Optional Service Add-ons */}
              <div className="space-y-3 mb-6 pt-4 border-t" style={{ borderColor: '#2D323E' }}>
                <span className="text-[11px] font-bold uppercase tracking-wider block" style={{ color: '#F8FAFC' }}>
                  Optional Services:
                </span>

                {/* Add-on 1: Deployment */}
                <label
                  className="flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors border"
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
                    <p className="text-[10px]" style={{ color: '#64748B' }}>
                      Complete installation on your AWS/VPS/cPanel server.
                    </p>
                  </div>
                </label>

                {/* Add-on 2: Support */}
                <label
                  className="flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors border"
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
                    <p className="text-[10px]" style={{ color: '#64748B' }}>
                      Senior developer advisory & priority bug fixing.
                    </p>
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

              {/* Primary Action Button */}
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

              <p className="text-[10px] text-center mt-2.5" style={{ color: '#64748B' }}>
                Direct engineering delivery • Verification before payment
              </p>
            </div>

            {/* 2. Item Specifications Table */}
            <div
              className="rounded-2xl p-5"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#F8FAFC' }}>
                Handover Specifications
              </h3>
              <dl className="space-y-2.5 text-xs">
                <div className="flex justify-between pb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <dt style={{ color: '#64748B' }}>Version</dt>
                  <dd className="font-semibold" style={{ color: '#F8FAFC' }}>v2.4.0 (Latest Release)</dd>
                </div>
                <div className="flex justify-between pb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <dt style={{ color: '#64748B' }}>Documentation</dt>
                  <dd className="font-semibold" style={{ color: '#F8FAFC' }}>Included (PDF & Setup)</dd>
                </div>
                <div className="flex justify-between pb-2 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <dt style={{ color: '#64748B' }}>License Grant</dt>
                  <dd className="font-semibold" style={{ color: '#9CEE69' }}>Formal Commercial</dd>
                </div>
                <div className="flex justify-between">
                  <dt style={{ color: '#64748B' }}>Delivery Method</dt>
                  <dd className="font-semibold" style={{ color: '#F8FAFC' }}>Direct Engineering Handover</dd>
                </div>
              </dl>
            </div>

            {/* 3. Verified Engineering Trust Seals */}
            <div
              className="rounded-2xl p-5 space-y-3"
              style={{
                backgroundColor: '#1C1F26',
                border: '1px solid #2D323E',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(156,238,105,0.1)', color: '#9CEE69' }}>
                  <ShieldCheck size={16} />
                </div>
                <div className="text-xs">
                  <span className="font-bold block" style={{ color: '#F8FAFC' }}>Verified Kiaan Architecture</span>
                  <span className="text-[10px]" style={{ color: '#64748B' }}>Directly architected & maintained</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(156,238,105,0.1)', color: '#9CEE69' }}>
                  <Headphones size={16} />
                </div>
                <div className="text-xs">
                  <span className="font-bold block" style={{ color: '#F8FAFC' }}>Direct Engineer Support</span>
                  <span className="text-[10px]" style={{ color: '#64748B' }}>Assistance from core developers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          ASSISTED PURCHASE MODAL
         ═══════════════════════════════════════════════ */}
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
