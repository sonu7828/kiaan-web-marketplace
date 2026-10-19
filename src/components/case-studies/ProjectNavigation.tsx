import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { caseStudiesData } from '@/data/caseStudiesData';

interface ProjectNavigationProps {
  currentSlug: string;
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ currentSlug }) => {
  const currentIndex = caseStudiesData.findIndex((study) => study.slug === currentSlug);

  if (currentIndex === -1) return null;

  // Calculate prev and next with wrap-around
  const prevIndex = (currentIndex - 1 + caseStudiesData.length) % caseStudiesData.length;
  const nextIndex = (currentIndex + 1) % caseStudiesData.length;

  const prevProject = caseStudiesData[prevIndex];
  const nextProject = caseStudiesData[nextIndex];

  return (
    <nav 
      aria-label="Case Study Navigation" 
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-900 pt-12 mt-16"
    >
      {/* Previous Link */}
      <Link
        href={`/case-studies/${prevProject.slug}`}
        className="group flex flex-col p-6 bg-zinc-950 border border-white/5 hover:border-yellow-500/20 transition-all duration-300 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-yellow-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Previous Project
        </span>
        <span className="text-lg font-display uppercase text-white group-hover:text-yellow-500 transition-colors">
          {prevProject.title}
        </span>
        <span className="text-[10px] text-zinc-600 font-semibold tracking-wider mt-1">
          {prevProject.client} • {prevProject.category}
        </span>
      </Link>

      {/* Next Link */}
      <Link
        href={`/case-studies/${nextProject.slug}`}
        className="group flex flex-col p-6 bg-zinc-950 border border-white/5 hover:border-yellow-500/20 transition-all duration-300 text-right relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-yellow-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 flex items-center justify-end gap-2">
          Next Project <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </span>
        <span className="text-lg font-display uppercase text-white group-hover:text-yellow-500 transition-colors">
          {nextProject.title}
        </span>
        <span className="text-[10px] text-zinc-600 font-semibold tracking-wider mt-1">
          {nextProject.client} • {nextProject.category}
        </span>
      </Link>
    </nav>
  );
};
