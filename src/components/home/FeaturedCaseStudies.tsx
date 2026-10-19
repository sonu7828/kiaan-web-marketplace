"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { caseStudiesData } from '@/data/caseStudiesData';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';

export const FeaturedCaseStudies: React.FC = () => {
  // Get the first three case studies
  const featuredStudies = caseStudiesData.slice(0, 3);

  const accentClasses = ['yellow-500', 'cyan-500', 'violet-500'];

  return (
    <section className="py-6 bg-black relative overflow-hidden border-t border-zinc-900" aria-label="Featured Case Studies">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500 mb-4">
                <Zap size={12} aria-hidden="true" /> Case Archives
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-display uppercase text-white">
                Featured <span className="text-yellow-500">Case Studies</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link href="/case-studies" prefetch={true} className="group inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-yellow-500 transition-colors mt-6 md:mt-0">
              Explore All Cases <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStudies.map((study, idx) => (
            <CaseStudyCard
              key={study.slug}
              projectName={study.title}
              industry={study.category}
              challenge={study.challenge}
              solution={study.blueprint}
              technologies={study.technologies}
              results={study.impactMetrics}
              image={study.image}
              imageAlt={study.imageAlt}
              href={`/case-studies/${study.slug}`}
              index={idx}
              accentClass={accentClasses[idx % accentClasses.length]}
              authorName={study.authorName}
              authorDesignation={study.authorDesignation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
