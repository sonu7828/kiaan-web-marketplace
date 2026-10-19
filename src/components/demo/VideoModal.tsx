'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Youtube, ExternalLink } from 'lucide-react';
import type { DemoSoftware } from '@/data/demo-software-data';
import { getYouTubeEmbedUrl } from '@/data/demo-software-data';

interface VideoModalProps {
  software: DemoSoftware | null;
  videoUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({
  software,
  videoUrl,
  isOpen,
  onClose,
}: VideoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open and guaranteed clean restore
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Guaranteed cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    document.body.style.overflow = '';
    onClose();
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!mounted || !isOpen || !software || !videoUrl) return null;

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return createPortal(
    <AnimatePresence mode="wait">
      <div className="fixed inset-0 z-[100002] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          key="video-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/92 backdrop-blur-md"
          onClick={handleClose}
        />

        {/* Modal Window */}
        <motion.div
          key="video-content"
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-6 z-10 shadow-[0_25px_80px_rgba(0,0,0,0.95)] my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-red-600/15 border border-red-500/30 flex items-center justify-center shrink-0">
                <Youtube size={18} className="text-red-500" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-sans font-bold text-white tracking-tight truncate">
                  {software.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 truncate">
                  {software.normalizedCategory} • Official Walkthrough
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Direct YouTube link */}
              <a
                href={software.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 text-xs font-semibold transition-all cursor-pointer"
                title="Open on YouTube"
              >
                <span>YouTube</span>
                <ExternalLink size={12} />
              </a>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close video modal"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* YouTube Iframe Player */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-zinc-800/80 shadow-inner">
            <iframe
              src={embedUrl}
              title={`${software.name} Walkthrough`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
