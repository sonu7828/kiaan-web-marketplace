"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';

interface HeroStat {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface CaseStudyHeroProps {
  /** Page eyebrow tag text */
  tagText?: string;
  /** Main headline — first part (white) */
  headlinePrimary?: string;
  /** Main headline — accented part (yellow) */
  headlineAccent?: string;
  /** Supporting paragraph below headline */
  subheading?: string;
  /** Array of up to 3 stat cards shown beneath the subheading */
  stats?: HeroStat[];
  /** Primary CTA label */
  ctaLabel?: string;
  /** Primary CTA href */
  ctaHref?: string;
  /** Secondary CTA label */
  secondaryCtaLabel?: string;
  /** Secondary CTA href */
  secondaryCtaHref?: string;
}

const defaultStats: HeroStat[] = [
  { label: 'Projects Delivered', value: '200+', icon: <TrendingUp size={16} /> },
  { label: 'Countries Served', value: '40+', icon: <Globe size={16} /> },
  { label: 'Satisfied Clients', value: '95%', icon: <Users size={16} /> },
];

/**
 * CaseStudyHero
 * Full-width hero section for the /case-studies page.
 * Fully self-contained — no backend connection required.
 */
export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  tagText = 'Impact Archive',
  headlinePrimary = 'Engineering',
  headlineAccent = 'Masterpieces',
  subheading = "We don't just build software — we architect competitive advantages. Every engagement below is a story of precision, grit, and measurable impact.",
  stats = defaultStats,
  ctaLabel = 'Explore All Case Studies',
  ctaHref = '#case-studies-grid',
  secondaryCtaLabel = 'Start Your Project',
  secondaryCtaHref = '/start-project',
}) => {
  return (
    <section
      id="case-study-hero"
      className="relative w-full overflow-hidden bg-black pt-32 pb-16 md:pt-28 md:pb-24"
      aria-label="Case Studies Hero"
    >
      {/* ── Background ambient glows ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-yellow-500/[0.06] blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-yellow-500/[0.04] blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-white/[0.03] blur-[100px] rounded-full" />
        {/* Animated grid overlay */}
        <div className="animated-grid absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        {/* ── Eyebrow tag ── */}
        <Reveal>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-black uppercase tracking-[0.2em] text-yellow-500 mb-8"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Zap size={14} aria-hidden="true" />
            {tagText}
          </motion.div>
        </Reveal>

        {/* ── Headline ── */}
        <Reveal delay={0.15}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase tracking-tighter text-white leading-none mb-6">
            {headlinePrimary}{' '}
            <span className="text-yellow-500 relative inline-block">
              {headlineAccent}
              {/* Yellow underline accent */}
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-500 to-amber-400" />
            </span>
          </h1>
        </Reveal>

        {/* ── Sub-heading ── */}
        <Reveal delay={0.3}>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
            {subheading}
          </p>
        </Reveal>

        {/* ── CTAs ── */}
        <Reveal delay={0.45}>
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Link
              href={ctaHref}
              id="case-study-hero-primary-cta"
              className="group inline-flex items-center gap-2 bg-yellow-500 text-black text-xs font-black uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(255,214,10,0.4)] active:scale-95"
            >
              {ctaLabel}
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
            <Link
              href={secondaryCtaHref}
              id="case-study-hero-secondary-cta"
              className="inline-flex items-center gap-2 border border-white/20 text-white text-xs font-black uppercase tracking-widest px-8 py-4 transition-all duration-300 hover:border-yellow-500/60 hover:text-yellow-500 active:scale-95"
            >
              {secondaryCtaLabel}
            </Link>
          </div>
        </Reveal>

        {/* ── Stats strip ── */}
        <Reveal delay={0.6}>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5"
            role="list"
            aria-label="Key metrics"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                role="listitem"
                className="bg-zinc-950 p-6 md:p-8 flex flex-col gap-2 group hover:bg-zinc-900/80 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
              >
                <div className="text-yellow-500/70 group-hover:text-yellow-500 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-display text-white group-hover:text-yellow-500 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudyHero;
