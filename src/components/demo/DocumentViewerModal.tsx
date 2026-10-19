'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, FileText, ArrowRight, MessageCircle, ShieldCheck
} from 'lucide-react';
import type { DemoSoftware } from '@/data/demo-software-data';
import demoDocsDataRaw from '@/data/demo-documents-data.json';

interface DocBlock {
  type: string;
  text?: string;
  rows?: string[][];
}

interface StructuredDoc {
  id: number;
  softwareName: string;
  title: string;
  subtitle: string;
  documentName: string;
  documentUrl: string;
  rawLines?: string[];
  blocks?: DocBlock[];
  totalParagraphs?: number;
}

const docsMap: Record<number, StructuredDoc> = demoDocsDataRaw as unknown as Record<number, StructuredDoc>;

interface DocumentViewerModalProps {
  software: DemoSoftware | null;
  isOpen: boolean;
  onClose: () => void;
  onViewDemo: (software: DemoSoftware) => void;
}

export default function DocumentViewerModal({
  software,
  isOpen,
  onClose,
  onViewDemo,
}: DocumentViewerModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open and clean restore on close
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

  if (!isOpen || !software || !mounted) return null;

  const doc = docsMap[software.id];
  const blocks = doc?.blocks || [];

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100002] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
        {/* Backdrop (sits on top of navbar and bottom awards bar) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/92 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-4xl max-h-[86vh] sm:max-h-[88vh] flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 overflow-hidden my-auto"
        >
          {/* Top Bar / Header */}
          <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-zinc-800/80 bg-zinc-900/70 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#FFE81B]/10 border border-[#FFE81B]/30 flex items-center justify-center shrink-0">
                <FileText size={16} className="text-[#FFE81B]" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FFE81B] block">
                  Original Specification Document
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                  {software.name}
                </h3>
              </div>
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close document viewer"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Scrollable Document Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-zinc-300 select-text">
            <div className="max-w-3xl mx-auto space-y-5">
                {blocks.length > 0 ? (
                  blocks.map((block, idx) => {
                    const text = block.text || '';

                    // 1. Company Brand Header
                    if (block.type === 'brand') {
                      return (
                        <div key={idx} className="pt-2 pb-1 border-b border-zinc-800/60 flex items-center justify-between">
                          <span className="text-[11px] font-black tracking-[0.2em] text-[#FFE81B] uppercase">
                            {text}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                            Official Release
                          </span>
                        </div>
                      );
                    }

                    // 2. Headings (e.g. 1. What We Provide, 2. Technology Stack, 6. FAQ)
                    if (block.type === 'heading') {
                      return (
                        <div key={idx} className="pt-5 pb-2 border-b border-zinc-800">
                          <h2 className="text-base sm:text-lg font-sans font-bold text-white tracking-tight flex items-center gap-2">
                            <span className="w-1.5 h-4 rounded bg-[#FFE81B]" />
                            {text}
                          </h2>
                        </div>
                      );
                    }

                    // 3. Subheadings
                    if (block.type === 'subheading') {
                      return (
                        <h3 key={idx} className="text-sm font-bold text-zinc-100 pt-2 tracking-tight">
                          {text}
                        </h3>
                      );
                    }

                    // 4. Bullets (Exact text with clean bullet dot)
                    if (block.type === 'bullet') {
                      return (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 pl-1 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFE81B]/80 shrink-0 mt-2" />
                          <span className="flex-1">{text}</span>
                        </div>
                      );
                    }

                    // 5. FAQ Question
                    if (block.type === 'faq_question') {
                      return (
                        <div key={idx} className="pt-3">
                          <div className="flex items-start gap-2 text-xs sm:text-sm font-bold text-amber-300 leading-snug">
                            <span className="text-[#FFE81B] font-black">Q:</span>
                            <span>{text}</span>
                          </div>
                        </div>
                      );
                    }

                    // 6. Tables
                    if (block.type === 'table' && block.rows) {
                      return (
                        <div key={idx} className="my-3 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/40">
                          <table className="w-full text-xs text-left text-zinc-300">
                            <tbody>
                              {block.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-800/60 last:border-0 hover:bg-zinc-800/20">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className={`p-3 ${rIdx === 0 ? 'font-bold text-white bg-zinc-900/60' : ''}`}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }

                    // 7. Regular Paragraphs
                    return (
                      <p key={idx} className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                        {text}
                      </p>
                    );
                  })
                ) : (
                  /* Fallback if document has no extracted blocks */
                  <div className="space-y-6 py-6 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-[#FFE81B]">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white mb-2">{software.name}</h2>
                      <p className="text-xs text-zinc-400 max-w-lg mx-auto leading-relaxed">
                        {software.desc}
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-left max-w-md mx-auto space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFE81B]">
                        Included Features
                      </span>
                      {software.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFE81B]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          {/* Modal Footer (Always visible, sits on top of bottom bar) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 sm:px-6 py-4 border-t border-zinc-800/80 bg-zinc-900/90 shrink-0">
            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <ShieldCheck size={14} className="text-[#FFE81B]" />
              <span>Full original specification — No parts omitted</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/919752100980?text=${encodeURIComponent(
                  `Hi Kiaan Team, I reviewed the full specification for "${software.name}". I would like to discuss deployment and customization.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-[#FFE81B]/50 text-zinc-200 hover:text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                <MessageCircle size={13} className="text-[#25D366]" />
                Inquire on WhatsApp
              </a>

              <button
                onClick={() => {
                  onClose();
                  onViewDemo(software);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFE81B] text-black text-xs font-black uppercase tracking-wider hover:bg-white transition-all cursor-pointer shadow-[0_0_20px_rgba(255,232,27,0.2)]"
              >
                Experience Live Demo
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
