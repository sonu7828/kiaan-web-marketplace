"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

interface ProjectScreenshotsProps {
  screenshots?: string[];
  title: string;
}

export const ProjectScreenshots: React.FC<ProjectScreenshotsProps> = ({ screenshots, title }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!screenshots || screenshots.length === 0) return null;

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + screenshots.length) % screenshots.length : 0));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % screenshots.length : 0));

  return (
    <>
      <section className="space-y-8" aria-label="Project Screenshots">
        <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
          <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight flex items-center gap-4">
            <Camera className="text-yellow-500" size={24} /> Project Interface
          </h2>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 ml-auto">
            {screenshots.length} Screen{screenshots.length > 1 ? 's' : ''}
          </span>
        </div>

        <div className={`grid gap-6 ${screenshots.length === 1 ? 'grid-cols-1' : screenshots.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {screenshots.map((url, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <button
                onClick={() => openLightbox(index)}
                className="group relative aspect-video w-full overflow-hidden border border-zinc-800 bg-zinc-950 p-2 hover:border-yellow-500/30 transition-all duration-500 cursor-zoom-in"
                aria-label={`View ${title} screenshot ${index + 1}`}
              >
                <div className="w-full h-full overflow-hidden relative">
                  <Image
                    src={url}
                    alt={`${title} UI screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-yellow-500">
                      Click to expand — Screen {index + 1}
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            {lightboxIndex + 1} / {screenshots.length}
          </div>

          {/* Prev */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 text-zinc-400 hover:text-yellow-500 transition-colors z-10 p-3 border border-zinc-800 bg-zinc-950 hover:border-yellow-500/30"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[lightboxIndex]}
              alt={`${title} UI screenshot ${lightboxIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-zinc-400 hover:text-yellow-500 transition-colors z-10 p-3 border border-zinc-800 bg-zinc-950 hover:border-yellow-500/30"
              aria-label="Next screenshot"
            >
              <ChevronRight size={24} />
            </button>
          )}

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            {title} — Interface {lightboxIndex + 1}
          </div>
        </div>
      )}
    </>
  );
};
