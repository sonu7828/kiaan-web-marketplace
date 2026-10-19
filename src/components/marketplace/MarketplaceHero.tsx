'use client';

import { Reveal } from '@/components/Reveal';
import { Store, Shield, Headphones } from 'lucide-react';
import { totalMarketplaceProducts } from '@/data/marketplace-software-data';

export default function MarketplaceHero() {
  return (
    <section className="relative z-10 pt-[80px] sm:pt-[88px] pb-4 sm:pb-6">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 w-full">
          {/* Left: Headings */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 min-w-0">
            {/* Eyebrow */}
            <Reveal>
              <div
                className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full mb-3 cursor-default"
                style={{
                  color: '#9CEE69',
                  border: '1px solid rgba(156, 238, 105, 0.3)',
                  backgroundColor: 'rgba(156, 238, 105, 0.08)',
                }}
              >
                <Store size={12} className="opacity-90" />
                SOFTWARE MARKETPLACE
              </div>
            </Reveal>

            {/* H1 */}
            <Reveal delay={0.05}>
              <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-display uppercase tracking-tight mb-2.5 leading-tight">
                <span className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                  ENTERPRISE SOFTWARE{' '}
                </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #9CEE69, #86EFAC, #4ADE80)',
                  }}
                >
                  & SOURCE CODE
                </span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.1}>
              <p className="text-xs sm:text-sm font-light leading-relaxed max-w-xl" style={{ color: '#94A3B8' }}>
                Browse verified software packages from{' '}
                <span className="font-medium" style={{ color: '#F8FAFC' }}>Kiaan Technology</span>.
                Each package includes source code, documentation, and a commercial license —
                delivered directly by our engineering team.
              </p>
            </Reveal>
          </div>

          {/* Right: Stats Cards */}
          <div className="w-full lg:w-auto shrink-0">
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
              <Reveal delay={0.15}>
                <div
                  className="flex flex-col items-center justify-center py-4 px-4 sm:py-5 sm:px-6 rounded-2xl backdrop-blur-xl min-w-[105px] sm:min-w-[130px]"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(28,31,38,0.9), rgba(18,19,22,0.9))',
                    border: '1px solid #2D323E',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  }}
                >
                  <span
                    className="text-2xl sm:text-3xl font-bold tabular-nums leading-none mb-1.5"
                    style={{ color: '#F8FAFC' }}
                  >
                    {totalMarketplaceProducts}
                  </span>
                  <span
                    className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-center"
                    style={{ color: '#94A3B8' }}
                  >
                    Packages
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div
                  className="flex flex-col items-center justify-center py-4 px-4 sm:py-5 sm:px-6 rounded-2xl backdrop-blur-xl min-w-[105px] sm:min-w-[130px]"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(28,31,38,0.9), rgba(18,19,22,0.9))',
                    border: '1px solid #2D323E',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  }}
                >
                  <Shield size={22} style={{ color: '#9CEE69' }} className="mb-1.5" />
                  <span
                    className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-center"
                    style={{ color: '#94A3B8' }}
                  >
                    Licensed
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div
                  className="flex flex-col items-center justify-center py-4 px-4 sm:py-5 sm:px-6 rounded-2xl backdrop-blur-xl min-w-[105px] sm:min-w-[130px]"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(28,31,38,0.9), rgba(18,19,22,0.9))',
                    border: '1px solid #2D323E',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                  }}
                >
                  <Headphones size={22} style={{ color: '#9CEE69' }} className="mb-1.5" />
                  <span
                    className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-center"
                    style={{ color: '#94A3B8' }}
                  >
                    Direct Support
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
