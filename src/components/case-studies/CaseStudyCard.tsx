"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Cpu,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  Tag,
  Building2,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Types ──────────────────────────────────────────────────────────────── */

export interface CaseStudyCardResult {
  /** Short label, e.g. "Speed Increase" */
  label: string;
  /** Display value, e.g. "+50%" */
  value: string;
}

export interface CaseStudyCardProps {
  /** Unique id used for `href` and a11y anchors */
  id?: string;
  /** Project / product name */
  projectName: string;
  /** Industry / domain, e.g. "FinTech" */
  industry: string;
  /** Brief description of the core problem */
  challenge: string;
  /** High-level description of what was built */
  solution: string;
  /** Array of technology names */
  technologies: string[];
  /** Array of result metrics */
  results: CaseStudyCardResult[];
  /** Optional hero image src */
  image?: string;
  /** Optional descriptive alt text for hero image */
  imageAlt?: string;
  /** Optional href for "View Details" button. Defaults to "#" */
  href?: string;
  /** Optional index for stagger animations */
  index?: number;
  /** Optional accent colour class override (default: yellow-500) */
  accentClass?: string;
  /** Author name */
  authorName?: string;
  /** Author designation */
  authorDesignation?: string;
}

/* ─── Accent colour map ──────────────────────────────────────────────────── */

const accentGradients: Record<string, string> = {
  'yellow-500': 'from-yellow-500 to-amber-400',
  'cyan-500': 'from-cyan-500 to-blue-500',
  'violet-500': 'from-violet-500 to-purple-600',
  'emerald-500': 'from-emerald-500 to-teal-500',
  'rose-500': 'from-rose-500 to-pink-600',
};

/* ─── Helper sub-components ─────────────────────────────────────────────── */

const SectionLabel: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => (
  <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-2">
    <span className="text-yellow-500/70">{icon}</span>
    {label}
  </div>
);

/* ─── Main component ─────────────────────────────────────────────────────── */

/**
 * CaseStudyCard
 * Self-contained card displaying full case study details.
 * Supports an inline accordion to expand/collapse the challenge & solution copy.
 * Reusable — driven entirely by props, no backend connection.
 */
export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  projectName,
  industry,
  challenge,
  solution,
  technologies,
  results,
  image,
  imageAlt,
  href = '#',
  index = 0,
  accentClass = 'yellow-500',
  authorName,
  authorDesignation,
}) => {
  const [expanded, setExpanded] = useState(false);
  const gradientClass =
    accentGradients[accentClass] ?? accentGradients['yellow-500'];
  const cardId = id ?? projectName.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.article
      id={`case-study-card-${cardId}`}
      aria-label={`Case study: ${projectName}`}
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="group relative flex flex-col bg-zinc-950 border border-white/5 overflow-hidden
                 hover:border-yellow-500/30 transition-all duration-500 contain-card"
    >
      {/* ── Gradient top accent line ── */}
      <div
        aria-hidden="true"
        className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${gradientClass}`}
      />

      {/* ── Corner arrow accent ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-0 h-0
                   border-l-[30px] border-l-transparent
                   border-t-[30px] border-t-yellow-500/10
                   group-hover:border-t-yellow-500/30 transition-colors"
      />

      {/* ── Hero image ── */}
      {image && (
        <div className="aspect-video w-full overflow-hidden relative">
          <img
            src={image}
            alt={imageAlt || `${projectName} - Enterprise Software Project Screenshot`}
            width={1024}
            height={1024}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
          {/* Industry badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[9px] font-black text-yellow-500 uppercase tracking-widest">
            {industry}
          </div>
        </div>
      )}

      {/* ── Card body ── */}
      <div className="flex flex-col flex-grow p-6 gap-5">

        {/* Project name + industry (shown when no image) */}
        <div>
          {!image && (
            <div className="flex items-center gap-2 mb-3">
              <Building2 size={12} className="text-yellow-500/60" aria-hidden="true" />
              <span className="text-[9px] font-black text-yellow-500/80 uppercase tracking-widest">
                {industry}
              </span>
            </div>
          )}
          <h3 className="text-xl md:text-2xl font-display uppercase text-white leading-tight
                         group-hover:text-yellow-500 transition-colors duration-300">
            {projectName}
          </h3>
        </div>

        {/* ── Accordion: Challenge & Solution ── */}
        <div className="border border-white/5 divide-y divide-white/5">
          {/* Always-visible challenge summary */}
          <div className="p-4">
            <SectionLabel icon={<AlertTriangle size={10} />} label="Challenge" />
            <p className="text-zinc-500 text-sm font-light leading-relaxed line-clamp-2" dangerouslySetInnerHTML={{ __html: challenge }} />
          </div>
 
          {/* Expandable section */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="expanded-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.38, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <div className="p-4">
                  <SectionLabel icon={<Lightbulb size={10} />} label="Solution" />
                  <p className="text-zinc-500 text-sm font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: solution }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <button
            id={`case-study-card-toggle-${cardId}`}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={`case-study-card-solution-${cardId}`}
            className="w-full flex items-center justify-between px-4 py-2.5
                       text-[9px] font-black uppercase tracking-widest
                       text-zinc-600 hover:text-yellow-500 hover:bg-zinc-900/60
                       transition-all duration-200"
          >
            {expanded ? 'Hide Solution' : 'View Solution'}
            {expanded ? <ChevronUp size={12} aria-hidden="true" /> : <ChevronDown size={12} aria-hidden="true" />}
          </button>
        </div>

        {/* ── Technologies ── */}
        <div>
          <SectionLabel icon={<Cpu size={10} />} label="Technologies Used" />
          <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
            {technologies.map((tech) => (
              <span
                key={tech}
                role="listitem"
                className="px-2.5 py-1 text-[9px] font-black uppercase tracking-wider
                           bg-zinc-900 border border-zinc-800 text-zinc-400
                           group-hover:border-yellow-500/20 group-hover:text-zinc-300
                           transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Results ── */}
        <div>
          <SectionLabel icon={<BarChart3 size={10} />} label="Results" />
          <div
            className="grid grid-cols-2 gap-px bg-white/5 border border-white/5"
            role="list"
            aria-label="Project results"
          >
            {results.map((r) => (
              <div
                key={r.label}
                role="listitem"
                className="bg-zinc-950 p-3 flex flex-col gap-0.5
                           group/result hover:bg-zinc-900/70 transition-colors"
              >
                <span className="text-lg font-display text-white group-hover/result:text-yellow-500 transition-colors">
                  {r.value}
                </span>
                <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Author Byline ── */}
        {authorName && (
          <div className="text-[10px] text-zinc-500 font-light leading-relaxed tracking-wide">
            Case Study by <span className="text-zinc-300 font-medium">{authorName}</span>, {authorDesignation} at Kiaan Technology
          </div>
        )}

        {/* ── View Details CTA ── */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <Link
            href={href}
            id={`case-study-card-view-${cardId}`}
            className="group/btn inline-flex items-center gap-2
                       text-[10px] font-black uppercase tracking-widest
                       text-zinc-500 hover:text-yellow-500
                       transition-colors duration-300"
            aria-label={`View details for ${projectName}`}
          >
            View Details
            <ArrowUpRight
              size={14}
              aria-hidden="true"
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default CaseStudyCard;
