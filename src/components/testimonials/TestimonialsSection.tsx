"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { TestimonialCard } from './TestimonialCard';
import testimonialsJson from '@/data/testimonials.json';

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface Testimonial {
  id: string;
  name: string;
  company: string;
  designation: string;
  photo: string;
  rating: number;
  review: string;
}

/* ─── Props ──────────────────────────────────────────────────────────────── */

export interface TestimonialsSectionProps {
  /** Override the default dataset (useful for embedding on different pages) */
  testimonials?: Testimonial[];
  /** Maximum number of testimonials to show. Defaults to all. */
  limit?: number;
  /** Show section heading. Defaults to true. */
  showHeading?: boolean;
  /** Optional CTA link text. Set to empty string to hide. */
  ctaText?: string;
  /** Optional CTA href. */
  ctaHref?: string;
}

/* ─── Main component ─────────────────────────────────────────────────────── */

/**
 * TestimonialsSection
 * Full-width section that renders a responsive grid of TestimonialCards.
 * Reusable — can be placed on any page. Loads data from local JSON by default.
 */
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  limit,
  showHeading = true,
  ctaText = 'View All Testimonials',
  ctaHref = '/contact',
}) => {
  const data = testimonials ?? (testimonialsJson as Testimonial[]);
  const visible = limit ? data.slice(0, limit) : data;

  return (
    <section
      className="py-6 bg-black relative overflow-hidden border-t border-zinc-900"
      aria-label="Client Testimonials"
    >
      {/* ── Background texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* ── Ambient glow ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500/3 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* ── Section heading ── */}
        {showHeading && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500 mb-4">
                  <MessageSquareQuote size={12} aria-hidden="true" /> Client Voices
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-display uppercase text-white">
                  What Our <span className="text-yellow-500">Clients Say</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-zinc-500 font-light text-sm md:text-base max-w-lg mt-3 uppercase tracking-wide">
                  Real feedback from leaders who trusted us to build mission-critical software.
                </p>
              </Reveal>
            </div>

            {ctaText && (
              <Reveal delay={0.2}>
                <Link
                  href={ctaHref}
                  prefetch={true}
                  className="group inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-yellow-500 transition-colors whitespace-nowrap"
                >
                  {ctaText}{' '}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Reveal>
            )}
          </div>
        )}

        {/* ── Responsive grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visible.map((t, idx) => (
            <TestimonialCard
              key={t.id}
              id={t.id}
              name={t.name}
              company={t.company}
              designation={t.designation}
              photo={t.photo}
              rating={t.rating}
              review={t.review}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
