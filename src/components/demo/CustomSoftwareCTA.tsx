import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function CustomSoftwareCTA() {
  return (
    <section className="relative z-10 border-t border-zinc-800/50 mt-6 sm:mt-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-black pointer-events-none" />
      <div className="container mx-auto px-4 pt-8 sm:pt-10 pb-12 sm:pb-16 flex flex-col items-center text-center relative z-10 max-w-2xl">
        {/* Eyebrow */}
        <Reveal>
          <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-zinc-500 mb-4">
            Can&apos;t find the exact software?
          </p>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.1}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight text-white mb-3 leading-tight">
            We Can{' '}
            <span className="bg-gradient-to-r from-[#FFE81B] to-amber-400 bg-clip-text text-transparent">
              Customize
            </span>{' '}
            or Build It For You
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-sm text-zinc-400 font-light max-w-lg mb-8 leading-relaxed">
            Every business is unique. If you need modifications to any of our existing demos or a completely custom-built solution, our team is ready to help.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/start-project"
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FFE81B] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(255,232,27,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.3)]"
            >
              REQUEST CUSTOM SOFTWARE
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-widest hover:border-zinc-500 hover:text-white hover:bg-white/[0.03] transition-all duration-300"
            >
              <MessageSquare size={13} />
              TALK TO OUR TEAM
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
