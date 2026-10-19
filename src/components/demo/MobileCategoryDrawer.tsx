'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { CategoryConfig } from '@/data/demo-software-data';

interface MobileCategoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: CategoryConfig[];
  categoryCounts: Map<string, number>;
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function MobileCategoryDrawer({
  isOpen, onClose, categories, categoryCounts, selectedCategory, onSelect,
}: MobileCategoryDrawerProps) {
  const handleSelect = useCallback((name: string) => {
    onSelect(name);
    onClose();
  }, [onSelect, onClose]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 max-h-[75vh] bg-zinc-950 border-t border-zinc-800 rounded-t-2xl overflow-hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 350 }}
          >
            {/* Handle + Header */}
            <div className="sticky top-0 z-10 bg-zinc-950 border-b border-zinc-800/60 px-5 pt-3 pb-4">
              <div className="w-10 h-1 rounded-full bg-zinc-700 mx-auto mb-4" />
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
                  Software Categories
                </h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Category List */}
            <div className="overflow-y-auto max-h-[calc(75vh-80px)] p-3 pb-8">
              <div className="flex flex-col gap-1">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat.name;
                  const count = categoryCounts.get(cat.name) ?? 0;
                  const IconComponent = cat.icon;

                  return (
                    <button
                      key={cat.slug}
                      onClick={() => handleSelect(cat.name)}
                      className={`group flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#FFE81B]/15 border border-[#FFE81B]/35 text-white'
                          : 'border border-transparent text-white hover:bg-white/[0.05]'
                      }`}
                    >
                      <IconComponent
                        size={16}
                        className={`shrink-0 ${isSelected ? 'text-[#FFE81B]' : 'text-zinc-400 group-hover:text-[#FFE81B]'}`}
                      />
                      <span className={`text-xs flex-1 text-white ${isSelected ? 'font-black' : 'font-semibold'}`}>
                        {cat.name}
                      </span>
                      <span className={`text-[10px] font-bold tabular-nums px-2 py-0.5 rounded-md ${
                        isSelected
                          ? 'bg-[#FFE81B] text-black font-black'
                          : 'bg-zinc-800/80 text-zinc-300 border border-zinc-700/60'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
