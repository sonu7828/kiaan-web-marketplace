import { totalSoftwareCount, uniqueCategoryCount } from '@/data/demo-software-data';
import { Reveal } from '@/components/Reveal';

export default function DemoStats() {
  return (
    <section className="relative z-10 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
          <Reveal delay={0.3}>
            <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/70 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display tabular-nums">
                {totalSoftwareCount}
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-wider text-center mt-1">
                Live Software Demos
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/70 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white font-display tabular-nums">
                {uniqueCategoryCount}
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-wider text-center mt-1">
                Software Categories
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/70 backdrop-blur-sm">
              <span className="text-lg sm:text-xl md:text-2xl font-black text-[#FFE81B] font-display leading-tight">
                YES
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-wider text-center mt-1">
                Customizable
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
