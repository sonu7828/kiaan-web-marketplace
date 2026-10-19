"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import Link from 'next/link';
import { SocialProofBar } from '@/components/SocialProofBar';

/* ─── Types ──────────────────────────────────────────────────────────────── */

export interface CTASectionFeature {
  icon: React.ReactNode;
  label: string;
}

export interface CTASectionProps {
  /** Eyebrow badge text */
  tagText?: string;
  /** Main headline — white part */
  headlinePrimary?: string;
  /** Main headline — yellow accented part */
  headlineAccent?: string;
  /** Supporting paragraph */
  description?: string;
  /** Small trust/feature chips rendered below the description */
  features?: CTASectionFeature[];
  /** Primary button label */
  primaryCtaLabel?: string;
  /** Primary button href */
  primaryCtaHref?: string;
  /** Secondary button label */
  secondaryCtaLabel?: string;
  /** Secondary button href */
  secondaryCtaHref?: string;
  /** Optional additional className for the outer section */
  className?: string;
}

/* ─── Defaults ───────────────────────────────────────────────────────────── */

const defaultFeatures: CTASectionFeature[] = [
  { icon: <ShieldCheck size={12} />, label: 'No commitment required' },
  { icon: <Zap size={12} />, label: 'Response within 24 h' },
  { icon: <Rocket size={12} />, label: 'Dedicated project manager' },
];

/* ─── Component ──────────────────────────────────────────────────────────── */

/**
 * CTASection
 * Full-width call-to-action banner for use at the bottom of the /case-studies page.
 * Fully self-contained — no backend connection, all content is prop-driven.
 */
export const CTASection: React.FC<CTASectionProps> = ({
  tagText = 'Ready to Build?',
  headlinePrimary = 'Start Your',
  headlineAccent = 'Success Story',
  description =
    "Every masterpiece starts with a single conversation. Tell us your challenge and we'll engineer your competitive advantage — on time, on budget, no compromises.",
  features = defaultFeatures,
  primaryCtaLabel = 'Start a Project',
  primaryCtaHref = '/start-project',
  secondaryCtaLabel = 'Schedule a Call',
  secondaryCtaHref = '/schedule',
  className = '',
}) => {
  return (
    <section
      id="case-studies-cta"
      aria-label="Call to action — Start a project with Kiaan Technology"
      className={`relative w-full overflow-hidden bg-black py-6 md:py-8 ${className}`}
    >
      {/* ── Ambient glow effects ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Centre yellow glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[350px] bg-yellow-500/8 blur-[140px] rounded-full" />
        </div>
        {/* Edge purple hint */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-violet-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      {/* ── Top decorative border line ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent"
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="border border-white/5 bg-zinc-950/60 backdrop-blur-md p-6 md:p-8 relative overflow-hidden">

          {/* Inner corner glow accent */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/5 blur-[80px] rounded-full pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Heading, Description & Feature chips */}
            <div className="lg:col-span-7">
              {/* ── Eyebrow tag ── */}
              <Reveal>
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest mb-4"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Rocket size={12} aria-hidden="true" />
                  {tagText}
                </motion.div>
              </Reveal>

              {/* ── Headline ── */}
              <Reveal delay={0.15}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tighter text-white leading-tight mb-3">
                  {headlinePrimary}{' '}
                  <span className="text-yellow-500">{headlineAccent}</span>
                </h2>
              </Reveal>

              {/* ── Description ── */}
              <Reveal delay={0.3}>
                <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mb-4 border-l-2 border-yellow-500/30 pl-4 italic">
                  {description}
                </p>
              </Reveal>

              {/* ── Feature chips ── */}
              <Reveal delay={0.4}>
                <div
                  className="flex flex-wrap gap-2.5"
                  role="list"
                  aria-label="Why work with us"
                >
                  {features.map((feat) => (
                    <div
                      key={feat.label}
                      role="listitem"
                      className="inline-flex items-center gap-2 px-3 py-1.5
                                 border border-zinc-800 bg-zinc-900/60
                                 text-[9px] font-black uppercase tracking-wider text-zinc-400"
                    >
                      <span className="text-yellow-500" aria-hidden="true">
                        {feat.icon}
                      </span>
                      {feat.label}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Column: CTA Buttons & Social Proof (Fills the right side!) */}
            <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <Reveal delay={0.5}>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href={primaryCtaHref}
                    id="cta-section-primary-btn"
                    className="group inline-flex items-center justify-center gap-2
                               bg-yellow-500 text-black
                               text-xs font-black uppercase tracking-widest
                               px-6 py-3.5
                               transition-all duration-300
                               hover:bg-white hover:shadow-[0_0_40px_rgba(255,214,10,0.5)]
                               active:scale-95 text-center"
                  >
                    {primaryCtaLabel}
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>

                  <Link
                    href={secondaryCtaHref}
                    id="cta-section-secondary-btn"
                    className="inline-flex items-center justify-center gap-2
                               border border-white/20 text-white
                               text-xs font-black uppercase tracking-widest
                               px-6 py-3.5
                               transition-all duration-300
                               hover:border-yellow-500/50 hover:text-yellow-500
                               active:scale-95 text-center"
                  >
                    {secondaryCtaLabel}
                  </Link>
                </div>
              </Reveal>

              {/* ── Social Proof Bar ── */}
              <Reveal delay={0.65}>
                <SocialProofBar variant="transparent" className="mt-4 px-0" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom decorative border line ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"
      />
    </section>
  );
};

export default CTASection;
