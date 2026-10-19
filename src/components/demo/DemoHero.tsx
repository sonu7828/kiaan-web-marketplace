'use client';

import { Reveal } from '@/components/Reveal';
import { Sparkles } from 'lucide-react';
import { totalSoftwareCount, uniqueCategoryCount } from '@/data/demo-software-data';

export default function DemoHero() {
  return (
    <section className="relative z-10 pt-20 sm:pt-24 pb-4 sm:pb-6">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        {/* Single Row Layout: Left = Headings, Right = Stats Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 w-full">
          {/* LEFT SIDE: Eyebrow, Heading & Subtitle */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 min-w-0">
            {/* Eyebrow */}
            <Reveal>
              <div className="inline-flex items-center gap-1.5 text-[#FFE81B] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] px-3.5 py-1.5 border border-[#FFE81B]/25 bg-[#FFE81B]/[0.05] rounded-full mb-3 cursor-default">
                <Sparkles size={12} className="opacity-90" />
                LIVE SOFTWARE DEMOS
              </div>
            </Reveal>

            {/* H1 */}
            <Reveal delay={0.05}>
              <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-display uppercase tracking-tight mb-2.5 leading-tight">
                <span className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                  EXPLORE OUR{' '}
                </span>
                <span className="bg-gradient-to-r from-[#FFE81B] via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  SOFTWARE DEMOS
                </span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={0.1}>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
                Browse <span className="text-white font-medium">{totalSoftwareCount}+ live, ready-to-use software systems</span> across {uniqueCategoryCount} industries. Search by name, category, or feature — then view a live demo instantly.
              </p>
            </Reveal>
          </div>

          {/* RIGHT SIDE: 3 Compact Stats Cards */}
          <div className="w-full lg:w-auto shrink-0">
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
              <Reveal delay={0.15}>
                <div className="flex flex-col items-center justify-center py-4 px-4 sm:py-5 sm:px-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800/90 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.5)] min-w-[105px] sm:min-w-[130px]">
                  <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums leading-none mb-1.5">
                    {totalSoftwareCount}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-zinc-400 font-semibold uppercase tracking-wider text-center">
                    Live Demos
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col items-center justify-center py-4 px-4 sm:py-5 sm:px-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800/90 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.5)] min-w-[105px] sm:min-w-[130px]">
                  <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums leading-none mb-1.5">
                    {uniqueCategoryCount}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-zinc-400 font-semibold uppercase tracking-wider text-center">
                    Categories
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex flex-col items-center justify-center py-4 px-4 sm:py-5 sm:px-6 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800/90 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.5)] min-w-[105px] sm:min-w-[130px]">
                  <span className="text-xl sm:text-2xl font-bold text-[#FFE81B] leading-none mb-1.5">
                    YES
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-zinc-400 font-semibold uppercase tracking-wider text-center">
                    Customizable
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
