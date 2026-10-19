'use client';

import type { DemoSoftware } from '@/data/demo-software-data';
import { ArrowRight, ExternalLink, Youtube, FileText } from 'lucide-react';

interface DemoCardProps {
  software: DemoSoftware;
  onViewDemo: (software: DemoSoftware) => void;
  onViewFeatures: (software: DemoSoftware) => void;
  onViewHowItWorks: (software: DemoSoftware) => void;
  onWatchVideo: (software: DemoSoftware) => void;
  onViewDocument?: (software: DemoSoftware) => void;
}

export default function DemoCard({
  software,
  onViewDemo,
  onViewFeatures,
  onViewHowItWorks,
  onWatchVideo,
  onViewDocument,
}: DemoCardProps) {
  const IconComponent = software.icon;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-zinc-900/40 border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Top Row: Category + Video Badge (if available) + Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-800/70 border border-zinc-700/50 text-zinc-300 max-w-[60%] truncate">
            {software.normalizedCategory}
          </span>

          <div className="flex items-center gap-2 shrink-0">
            {/* YouTube Video Button (replaces LIVE badge when video available) */}
            {software.youtube && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onWatchVideo(software);
                }}
                suppressHydrationWarning
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 hover:border-red-500/60 text-red-400 hover:text-red-300 text-[9.5px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_12px_rgba(239,68,68,0.2)] hover:shadow-[0_0_18px_rgba(239,68,68,0.35)]"
                title="Watch Video Walkthrough"
              >
                <Youtube size={12} className="text-red-400" />
                <span>Watch Video</span>
              </button>
            )}
          </div>
        </div>

        {/* Title — Clean, highly legible font */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-800/70 border border-zinc-700/50 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#FFE81B]/40 transition-colors">
            <IconComponent size={15} className="text-zinc-400 group-hover:text-[#FFE81B] transition-colors" />
          </div>
          <h3 className="font-sans font-bold text-white text-[15px] sm:text-[16px] leading-snug tracking-tight line-clamp-2 min-h-[44px] group-hover:text-[#FFE81B] transition-colors">
            {software.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-2 mb-4">
          {software.desc}
        </p>

        {/* Key Features (2 max) */}
        <div className="flex flex-col gap-1.5 mb-5">
          {software.features.slice(0, 2).map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-[11px] text-zinc-300">
              <span className="w-1 h-1 rounded-full bg-[#FFE81B]/70 shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Spacer to push CTA to bottom */}
        <div className="mt-auto" />

        {/* Primary CTA */}
        <button
          type="button"
          onClick={() => onViewDemo(software)}
          suppressHydrationWarning
          className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-[11px] font-black uppercase tracking-widest text-black bg-[#FFE81B] hover:bg-white border border-[#FFE81B]/80 hover:border-white shadow-[0_0_20px_rgba(255,232,27,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer active:scale-[0.98]"
        >
          <ExternalLink size={12} />
          VIEW LIVE DEMO
        </button>

        {/* Secondary Links: Overview | How It Works */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-3 pt-3 border-t border-zinc-800/50">
          <button
            type="button"
            onClick={() => (onViewDocument ? onViewDocument(software) : onViewFeatures(software))}
            suppressHydrationWarning
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-300 hover:text-[#FFE81B] transition-colors cursor-pointer group/doc"
            title={`View official ${software.name} overview & specifications`}
          >
            <FileText size={11} className="text-[#FFE81B] group-hover/doc:scale-110 transition-transform" />
            Overview
            <ArrowRight size={10} className="text-zinc-500 group-hover/doc:text-[#FFE81B] transition-colors" />
          </button>
          
          <div className="w-px h-3 bg-zinc-800" />
          
          <button
            type="button"
            onClick={() => onViewHowItWorks(software)}
            suppressHydrationWarning
            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-[#FFE81B] transition-colors cursor-pointer"
          >
            How It Works
            <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </div>
  );
}
