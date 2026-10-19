import MarketplaceHero from '@/components/marketplace/MarketplaceHero';
import MarketplaceExplorer from '@/components/marketplace/MarketplaceExplorer';
import Link from 'next/link';
import { ArrowRight, Code2, Headphones, ShieldCheck, Sparkles } from 'lucide-react';

export default function MarketplacePage() {
  return (
    <div
      className="relative min-h-screen font-sans selection:bg-[#9CEE69] selection:text-black overflow-hidden"
      style={{
        backgroundColor: '#121316',
        color: '#F8FAFC',
      }}
    >
      {/* ─── Background Ambient Grid & Soft Gold Atmospheric Glows ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle graphite grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 65% 50% at 50% 0%, #000 70%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 50% at 50% 0%, #000 70%, transparent 100%)',
          }}
        />

        {/* Ambient lime green / deep charcoal glows */}
        <div
          className="absolute top-[-10%] left-[-8%] w-[45%] h-[40%] rounded-full blur-[160px] pointer-events-none"
          style={{ backgroundColor: 'rgba(156, 238, 105, 0.05)' }}
        />
        <div
          className="absolute top-[20%] right-[-10%] w-[40%] h-[45%] rounded-full blur-[170px] pointer-events-none"
          style={{ backgroundColor: 'rgba(99, 102, 241, 0.04)' }}
        />
        <div
          className="absolute bottom-[10%] left-[20%] w-[50%] h-[35%] rounded-full blur-[180px] pointer-events-none"
          style={{ backgroundColor: 'rgba(156, 238, 105, 0.03)' }}
        />
      </div>

      {/* ─── 1. Marketplace Hero (Single-Row / Stats) ─── */}
      <MarketplaceHero />

      {/* ─── 2. Interactive Marketplace Catalog (Client Component: Search + Filters + Product Cards) ─── */}
      <MarketplaceExplorer />

      {/* ─── 3. Verified Engineering Assurance Banner ─── */}
      <section className="relative z-10 py-12 border-t" style={{ borderColor: '#2D323E' }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div
            className="rounded-2xl p-6 sm:p-8 lg:p-10"
            style={{
              backgroundColor: '#1C1F26',
              border: '1px solid #2D323E',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Pillar 1 */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: 'rgba(156, 238, 105, 0.1)',
                    border: '1px solid rgba(156, 238, 105, 0.25)',
                    color: '#9CEE69',
                  }}
                >
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: '#F8FAFC' }}>
                    Production-Grade Codebases
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
                    Clean, modular frontend and backend architectures with documented schemas, API controllers, and typed configurations.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: 'rgba(156, 238, 105, 0.1)',
                    border: '1px solid rgba(156, 238, 105, 0.25)',
                    color: '#9CEE69',
                  }}
                >
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: '#F8FAFC' }}>
                    Transparent Commercial Licensing
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
                    Clear Single and Multi-Deployment commercial terms with verified deliverables and explicit IP ownership rights.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: 'rgba(156, 238, 105, 0.1)',
                    border: '1px solid rgba(156, 238, 105, 0.25)',
                    color: '#9CEE69',
                  }}
                >
                  <Headphones size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: '#F8FAFC' }}>
                    Direct Engineering Handover
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
                    Source code delivery and setup assistance handled directly by senior software engineers from Kiaan Technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Custom Enterprise Software CTA ─── */}
      <section className="relative z-10 py-16 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div
            className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden text-center"
            style={{
              background: 'linear-gradient(135deg, #1C1F26 0%, #16181D 100%)',
              border: '1px solid #2D323E',
            }}
          >
            {/* Subtle glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[250px] rounded-full blur-[140px] pointer-events-none"
              style={{ backgroundColor: 'rgba(156, 238, 105, 0.08)' }}
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div
                className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-4"
                style={{
                  color: '#9CEE69',
                  border: '1px solid rgba(156, 238, 105, 0.3)',
                  backgroundColor: 'rgba(156, 238, 105, 0.08)',
                }}
              >
                <Sparkles size={12} />
                CUSTOM SOFTWARE ENGINEERING
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight mb-4 leading-tight">
                Need a Tailored System or Custom Module?
              </h2>

              <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: '#94A3B8' }}>
                Every package in our marketplace can be customized, extended, or fully integrated with your
                existing enterprise infrastructure by Kiaan Technology’s software engineering team.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg"
                  style={{
                    backgroundColor: '#9CEE69',
                    color: '#000000',
                    boxShadow: '0 4px 20px rgba(156, 238, 105, 0.3)',
                  }}
                >
                  <span>Request Custom Architecture Call</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href="/services/custom-software-development"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:bg-white/5 active:scale-95"
                  style={{
                    backgroundColor: '#222630',
                    border: '1px solid #2D323E',
                    color: '#F8FAFC',
                  }}
                >
                  <span>Explore Custom Development</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
