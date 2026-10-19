"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

/* ─── Types ──────────────────────────────────────────────────────────────── */

export interface TestimonialCardProps {
  /** Unique identifier */
  id?: string;
  /** Client name */
  name: string;
  /** Company name */
  company: string;
  /** Role / designation */
  designation: string;
  /** Photo URL */
  photo: string;
  /** 1–5 star rating */
  rating: number;
  /** Review text */
  review: string;
  /** Stagger animation index */
  index?: number;
}

/* ─── Star renderer ──────────────────────────────────────────────────────── */

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < count ? 'fill-yellow-500 text-yellow-500' : 'text-zinc-700'}
        aria-hidden="true"
      />
    ))}
  </div>
);

/* ─── Main component ─────────────────────────────────────────────────────── */

/**
 * TestimonialCard
 * Displays a single client testimonial in a premium dark-glass card.
 * Fully reusable — driven entirely by props.
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  name,
  company,
  designation,
  photo,
  rating,
  review,
  index = 0,
}) => {
  const cardId = id ?? name.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.article
      id={`testimonial-${cardId}`}
      aria-label={`Testimonial from ${name}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group relative flex flex-col bg-zinc-950 border border-white/5 p-6 md:p-8
                 hover:border-yellow-500/30 transition-all duration-500 overflow-hidden"
    >
      {/* ── Top accent line ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-500/0 via-yellow-500/60 to-yellow-500/0
                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* ── Decorative quote icon ── */}
      <div aria-hidden="true" className="absolute top-4 right-4 text-zinc-800/40 group-hover:text-yellow-500/10 transition-colors duration-500">
        <Quote size={48} strokeWidth={1} />
      </div>

      {/* ── Rating ── */}
      <div className="mb-5 relative z-10">
        <Stars count={rating} />
      </div>

      {/* ── Review text ── */}
      <blockquote className="relative z-10 flex-grow mb-6">
        <p className="text-sm md:text-[15px] text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
          &ldquo;{review}&rdquo;
        </p>
      </blockquote>

      {/* ── Divider ── */}
      <div className="border-t border-white/5 pt-5 relative z-10">
        {/* ── Client info ── */}
        <div className="flex items-center gap-4">
          {/* Photo */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-yellow-500/40 transition-colors duration-500 flex-shrink-0">
            <img
              src={photo}
              alt={`${name} - ${designation} at ${company} - Kiaan Technology Client Testimonial`}
              loading="lazy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Name / role */}
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-white uppercase tracking-wide truncate group-hover:text-yellow-500 transition-colors duration-300">
              {name}
            </h4>
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.15em] truncate">
              {designation} &middot; {company}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default TestimonialCard;
