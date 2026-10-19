'use client';

import { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Shield, Zap, Copy, Monitor, CheckCircle2, Star, ArrowRight,
  ExternalLink, Youtube, Sparkles, Layers, Activity, FileText
} from 'lucide-react';
import emailjs from '@emailjs/browser';

import {
  softwareList,
  totalSoftwareCount,
  SIDEBAR_CATEGORIES,
  DEFAULT_PRIORITY_ORDER,
  searchSoftware,
  getCategoryCounts,
  getYouTubeEmbedUrl,
  type DemoSoftware,
} from '@/data/demo-software-data';
import { trackGAEvent, trackGTMEvent } from '@/utils/analytics';
import { getStoredUTMParams } from '@/utils/utm';

import dynamic from 'next/dynamic';
import CategorySidebar from './CategorySidebar';
import MobileCategoryDrawer from './MobileCategoryDrawer';
import SearchToolbar from './SearchToolbar';
import DemoGrid from './DemoGrid';

const DocumentViewerModal = dynamic(() => import('./DocumentViewerModal'), {
  ssr: false,
});
const VideoModal = dynamic(() => import('./VideoModal'), {
  ssr: false,
});

const EMAILJS_SERVICE_ID = 'service_opc05wm';
const EMAILJS_TEMPLATE_ID = 'template_jpwu4pp';
const EMAILJS_PUBLIC_KEY = 'zXyGNtU81gEw6BmhH';

export default function DemoExplorerClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Filter & Search State
  const [selectedCategory, setSelectedCategory] = useState('All Software');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'default' | 'az'>('default');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Modals & Interaction State
  const [selectedSoftware, setSelectedSoftware] = useState<DemoSoftware | null>(null);
  const [modalState, setModalState] = useState<'hidden' | 'form' | 'selection' | 'success'>('hidden');
  const [infoModal, setInfoModal] = useState<{ project: DemoSoftware; type: 'features' | 'how-it-works' } | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<{ url: string; project: DemoSoftware } | null>(null);

  useEffect(() => {
    if (modalState !== 'hidden' || infoModal) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [modalState, infoModal]);
  const [activeDocModal, setActiveDocModal] = useState<DemoSoftware | null>(null);
  const [copiedContent, setCopiedContent] = useState<string | null>(null);

  // Lead Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formErrors, setFormErrors] = useState({ email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ═══════════════════════════════════════════════
  // FILTERING LOGIC
  // ═══════════════════════════════════════════════

  // 1. Sidebar counts = base dataset filtered by SEARCH QUERY ONLY
  const searchFilteredList = useMemo(() => {
    return searchSoftware(softwareList, searchQuery);
  }, [searchQuery]);

  const categoryCounts = useMemo(() => {
    return getCategoryCounts(searchFilteredList);
  }, [searchFilteredList]);

  // 2. Main grid = filtered by search query AND selected category
  const categoryFilteredList = useMemo(() => {
    if (selectedCategory === 'All Software') {
      return searchFilteredList;
    }
    return searchFilteredList.filter((s) => s.normalizedCategory === selectedCategory);
  }, [searchFilteredList, selectedCategory]);

  // 3. Apply sorting
  const finalSoftwareList = useMemo(() => {
    const list = [...categoryFilteredList];
    if (sortOrder === 'az') {
      return list.sort((a, b) => a.name.localeCompare(b.name));
    }
    // 'default'
    if (searchQuery.trim()) {
      // Keep relevance score sorting from searchSoftware
      return list;
    }
    return list.sort((a, b) => {
      const indexA = DEFAULT_PRIORITY_ORDER.indexOf(a.id);
      const indexB = DEFAULT_PRIORITY_ORDER.indexOf(b.id);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return 0;
    });
  }, [categoryFilteredList, sortOrder, searchQuery]);

  const hasActiveFilters = searchQuery.trim() !== '' || selectedCategory !== 'All Software';

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Software');
    setSortOrder('default');
  };

  // ═══════════════════════════════════════════════
  // LEAD CAPTURE & DEMO ACCESS FLOW
  // ═══════════════════════════════════════════════

  const handleSoftClick = (soft: DemoSoftware) => {
    // 1. Check if user has already unlocked demo access in this browser (30 days)
    if (typeof window !== 'undefined') {
      try {
        const storedAccess = localStorage.getItem('kiaan_demo_access');
        if (storedAccess) {
          const parsed = JSON.parse(storedAccess);
          const isExpired = parsed.expiry && Date.now() > parsed.expiry;
          if (!isExpired && parsed.unlocked) {
            // Already unlocked -> Directly open live demo!
            trackGAEvent('demo_open', 'Direct Access (Unlocked)', soft.name);
            trackGTMEvent('demo_open', {
              form_status: 'already_submitted',
              software_name: soft.name,
              category: soft.normalizedCategory,
            });

            if (soft.link) {
              const win = window.open(soft.link, '_blank');
              if (!win || win.closed || typeof win.closed === 'undefined') {
                window.location.href = soft.link;
              }
              return;
            } else {
              setSelectedSoftware(soft);
              setModalState('success');
              return;
            }
          }
        }
      } catch (err) {
        console.warn('Error reading demo access storage:', err);
      }
    }

    // 2. If not unlocked, check if we have prefill data
    let prefillName = '';
    let prefillEmail = '';
    let prefillPhone = '';
    if (typeof window !== 'undefined') {
      try {
        const savedUser = localStorage.getItem('kiaan_demo_user');
        if (savedUser) {
          const u = JSON.parse(savedUser);
          prefillName = u.name || '';
          prefillEmail = u.email || '';
          prefillPhone = u.phone || '';
        }
      } catch { }
    }

    setFormData({ name: prefillName, email: prefillEmail, phone: prefillPhone });
    setFormErrors({ email: '', phone: '' });
    setSelectedSoftware(soft);
    setModalState('form');
  };

  const closeModal = () => {
    setModalState('hidden');
    setFormData({ name: '', email: '', phone: '' });
    setFormErrors({ email: '', phone: '' });
    setTimeout(() => setSelectedSoftware(null), 300);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !selectedSoftware) return;

    let isValid = true;
    const errors = { email: '', phone: '' };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // Phone validation (10-15 digits, allows +, -, spaces)
    const phoneRegex = /^[\d\s\+\-\(\)]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number (10 digits).';
      isValid = false;
    }

    setFormErrors(errors);

    if (isValid) {
      setIsSubmitting(true);
      const utm = getStoredUTMParams();

      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            name: formData.name || 'N/A',
            email: formData.email || 'N/A',
            company: selectedSoftware.name || 'Live Demo Request',
            contact_number: formData.phone || 'N/A',
            contact_method: 'Phone / Email',
            industry: selectedSoftware.normalizedCategory || 'N/A',
            project_type: 'Live Demo Arena Access',
            features: selectedSoftware.features?.join(', ') || 'N/A',
            vision: selectedSoftware.desc || 'N/A',
            budget: 'N/A',
            timeline: 'Immediate',
            submitted_at: new Date().toLocaleString(),
            message: [
              `Live Demo Requested: ${selectedSoftware.name}`,
              `Name: ${formData.name}`,
              `Email: ${formData.email}`,
              `Phone: ${formData.phone}`,
              `Category: ${selectedSoftware.normalizedCategory}`,
              `Preview Link: ${selectedSoftware.link || 'N/A'}`,
              `UTM Source: ${utm?.utm_source || 'Direct/None'}`,
              `UTM Medium: ${utm?.utm_medium || 'Direct/None'}`,
              `UTM Campaign: ${utm?.utm_campaign || 'Direct/None'}`,
              `UTM Term: ${utm?.utm_term || 'Direct/None'}`,
              `UTM Content: ${utm?.utm_content || 'Direct/None'}`,
              `Referral Code: ${utm?.ref || 'None'}`,
            ].join('\n'),
          },
          EMAILJS_PUBLIC_KEY
        );

        try {
          await fetch('/api/leads/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              leadType: 'demo_request',
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              serviceInterest: selectedSoftware.name,
              sourcePage: '/demo',
            }),
          });
        } catch (err) {
          console.warn('Backend lead recording notice:', err);
        }

        // Save unlocked status for 30 days in localStorage
        if (typeof window !== 'undefined') {
          try {
            const accessData = {
              unlocked: true,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              unlockedAt: Date.now(),
              expiry: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 Days
            };
            localStorage.setItem('kiaan_demo_access', JSON.stringify(accessData));
            localStorage.setItem(
              'kiaan_demo_user',
              JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
              })
            );
          } catch (storageErr) {
            console.warn('Error writing demo access to storage:', storageErr);
          }
        }

        setModalState('selection');
        trackGAEvent('form_submit', 'Lead Generation', `Demo Request - ${selectedSoftware.name}`);
        trackGTMEvent('form_submit', {
          form_name: 'Demo Request',
          software_name: selectedSoftware.name,
          category: selectedSoftware.normalizedCategory,
        });
        setFormErrors({ email: '', phone: '' });
      } catch {
        setFormErrors({ email: 'Submission failed. Please try again.', phone: '' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleLaunchDemo = () => {
    if (selectedSoftware?.link) {
      const win = window.open(selectedSoftware.link, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = selectedSoftware.link;
      }
      closeModal();
    } else {
      setModalState('success');
    }
  };

  const copyToClipboard = (text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedContent(text);
      setTimeout(() => setCopiedContent(null), 2000);
    }
  };

  return (
    <section id="demo-explorer" className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[1400px] scroll-mt-24 pb-6 sm:pb-8">
      {/* 2-Column Marketplace Layout */}
      <div className="flex gap-8 items-start">
        {/* Left Sticky Sidebar (Desktop only) */}
        <CategorySidebar
          categories={SIDEBAR_CATEGORIES}
          categoryCounts={categoryCounts}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Right Main Grid & Search */}
        <div className="flex-1 min-w-0">
          <SearchToolbar
            query={searchQuery}
            onQueryChange={setSearchQuery}
            resultCount={finalSoftwareList.length}
            selectedCategory={selectedCategory}
            onClearFilters={handleClearFilters}
            hasActiveFilters={hasActiveFilters}
            onOpenDrawer={() => setIsDrawerOpen(true)}
          />

          <DemoGrid
            software={finalSoftwareList}
            onViewDemo={handleSoftClick}
            onViewFeatures={(soft) => setInfoModal({ project: soft, type: 'features' })}
            onViewHowItWorks={(soft) => setInfoModal({ project: soft, type: 'how-it-works' })}
            onWatchVideo={(soft) => setActiveVideoModal({ url: soft.youtube, project: soft })}
            onViewDocument={(soft) => setActiveDocModal(soft)}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onClearFilters={handleClearFilters}
          />

        </div>
      </div>

      {/* Mobile Category Drawer */}
      <MobileCategoryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        categories={SIDEBAR_CATEGORIES}
        categoryCounts={categoryCounts}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* ═══════════════════════════════════════════════
          LEAD CAPTURE MODAL
      ═══════════════════════════════════════════════ */}
      {isMounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {modalState !== 'hidden' && selectedSoftware && (
            <motion.div
              key="lead-modal-backdrop"
              className="fixed inset-0 z-[100002] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/92 backdrop-blur-xl"
                onClick={!isSubmitting ? closeModal : undefined}
              />

              {/* Step 1: Lead Form */}
              {modalState === 'form' && (
                <motion.div
                  key="lead-form-step"
                  initial={{ scale: 0.95, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 15 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className={`relative w-full my-auto max-h-[92vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl p-5 sm:p-8 z-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-left ${
                    selectedSoftware.hasCredentials ? 'max-w-3xl' : 'max-w-md'
                  }`}
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors bg-zinc-900 rounded-full p-1.5 border border-zinc-800 cursor-pointer"
                  >
                    <X size={15} />
                  </button>

                  <div className={`flex flex-col md:flex-row gap-6 ${selectedSoftware.hasCredentials ? 'md:gap-8' : ''}`}>
                    {/* Credentials Sidebar (if available) */}
                    {selectedSoftware.hasCredentials && (
                      <div className="md:w-[260px] flex-shrink-0 flex flex-col border-b md:border-b-0 md:border-r border-zinc-800/80 pb-6 md:pb-0 md:pr-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Zap size={14} className="text-[#FFE81B]" />
                          <h3 className="text-xs font-display uppercase tracking-widest text-white">Demo Credentials</h3>
                        </div>

                        <div className="flex flex-col gap-2 flex-1 overflow-y-auto pr-1">
                          {selectedSoftware.credentials?.roles.map((role, idx) => (
                            <div key={idx} className="flex flex-col gap-0.5 pb-2 border-b border-zinc-800/40 last:border-0">
                              <span className="text-[9px] uppercase font-bold tracking-widest text-[#FFE81B]">{role.title}</span>
                              <div
                                onClick={() => copyToClipboard(role.email)}
                                className="flex justify-between items-center cursor-pointer hover:bg-zinc-900 px-2 py-1 -mx-1 rounded transition-all"
                              >
                                <span className="text-[11px] font-mono text-zinc-300">{role.email}</span>
                                <Copy size={11} className="text-zinc-500 hover:text-white" />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="pt-3 mt-3 border-t border-zinc-800/80">
                          <div
                            onClick={() => copyToClipboard(selectedSoftware.credentials?.password || '')}
                            className="flex justify-between items-center cursor-pointer p-2 rounded-lg bg-zinc-900 border border-zinc-800"
                          >
                            <div className="flex flex-col">
                              <span className="text-[8px] text-zinc-500 uppercase tracking-widest font-bold">Password</span>
                              <span className="text-xs font-mono font-bold text-white">{selectedSoftware.credentials?.password}</span>
                            </div>
                            <Copy size={12} className="text-zinc-500 hover:text-white" />
                          </div>
                        </div>

                        {copiedContent && (
                          <p className="mt-2 text-[10px] text-emerald-400 font-bold uppercase tracking-wider text-center">
                            Copied to clipboard!
                          </p>
                        )}
                      </div>
                    )}

                    {/* Form Area */}
                    <div className="flex-1">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
                          <Shield size={12} className="text-[#FFE81B]" /> Live Demo Access
                        </div>
                        <h2 className="text-lg sm:text-xl font-sans font-bold text-white mb-1">
                          {selectedSoftware.name}
                        </h2>
                        <p className="text-xs text-zinc-400 font-light">
                          Enter your details once to unlock instant access to this demo and all other live software.
                        </p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-3.5">
                        <div>
                          <input
                            required
                            autoComplete="name"
                            type="text"
                            placeholder="Your Full Name *"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FFE81B]/70 transition-colors"
                          />
                        </div>
                        <div>
                          <input
                            required
                            autoComplete="email"
                            type="email"
                            placeholder="Work Email or Gmail *"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              setFormErrors({ ...formErrors, email: '' });
                            }}
                            className={`w-full bg-zinc-900/80 border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                              formErrors.email ? 'border-red-500/70 focus:border-red-500' : 'border-zinc-800 focus:border-[#FFE81B]/70'
                            }`}
                          />
                          {formErrors.email && (
                            <p className="text-[10px] text-red-400 mt-1 pl-1 font-semibold">{formErrors.email}</p>
                          )}
                        </div>
                        <div>
                          <input
                            required
                            autoComplete="tel"
                            type="tel"
                            placeholder="Phone / WhatsApp Number *"
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ ...formData, phone: e.target.value });
                              setFormErrors({ ...formErrors, phone: '' });
                            }}
                            className={`w-full bg-zinc-900/80 border rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors ${
                              formErrors.phone ? 'border-red-500/70 focus:border-red-500' : 'border-zinc-800 focus:border-[#FFE81B]/70'
                            }`}
                          />
                          {formErrors.phone && (
                            <p className="text-[10px] text-red-400 mt-1 pl-1 font-semibold">{formErrors.phone}</p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-2 bg-[#FFE81B] text-black hover:bg-white rounded-xl h-12 text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,232,27,0.2)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                              Unlocking Demo...
                            </>
                          ) : (
                            'Unlock Live Demo'
                          )}
                        </button>
                      </form>

                      <p className="text-[10px] text-zinc-500 text-center mt-3">
                        ✓ No spam · 30-day instant unlock across all {totalSoftwareCount} systems
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Confirmation / Direct Redirect */}
              {modalState === 'selection' && (
                <motion.div
                  key="lead-selection-step"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative w-full my-auto max-h-[92vh] overflow-y-auto max-w-md rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl p-8 z-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] text-center flex flex-col items-center"
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>

                  <div className="w-14 h-14 rounded-2xl bg-[#FFE81B]/10 border border-[#FFE81B]/30 flex items-center justify-center text-[#FFE81B] mb-5 shadow-[0_0_30px_rgba(255,232,27,0.15)]">
                    <Monitor size={26} />
                  </div>

                  <p className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.25em] mb-1.5">
                    Demo Access Unlocked
                  </p>
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-white mb-2">
                    {selectedSoftware.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mb-6">
                    Your access is active. Click below to launch the live environment in a new tab.
                  </p>

                  <button
                    type="button"
                    onClick={handleLaunchDemo}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-widest text-black bg-[#FFE81B] hover:bg-white shadow-[0_0_25px_rgba(255,232,27,0.25)] transition-all cursor-pointer"
                  >
                    Launch Live Demo
                    <ExternalLink size={14} />
                  </button>
                </motion.div>
              )}

              {/* Step 3: Success Confirmation (for no direct URL or fallback) */}
              {modalState === 'success' && (
                <motion.div
                  key="lead-success-step"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative w-full my-auto max-h-[92vh] overflow-y-auto max-w-md rounded-2xl border border-zinc-800 bg-zinc-950/95 backdrop-blur-2xl p-8 z-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-5 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-display uppercase tracking-tight text-white mb-2">
                    Access Provisioned
                  </h3>
                  <p className="text-zinc-400 text-xs font-light mb-6 leading-relaxed">
                    Demo access for <span className="text-white font-medium">{selectedSoftware.name}</span> has been confirmed. Our engineering team is preparing your sandbox environment.
                  </p>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white hover:bg-white hover:text-black rounded-xl h-11 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* ═══════════════════════════════════════════════
          FEATURES & HOW IT WORKS MODAL
      ═══════════════════════════════════════════════ */}
      {isMounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {infoModal && (
            <motion.div
              key="info-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100002] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/92 backdrop-blur-xl"
                onClick={() => setInfoModal(null)}
              />

              <motion.div
                key="info-modal-card"
                initial={{ scale: 0.94, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 15 }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                className="relative w-full my-auto max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950/98 backdrop-blur-2xl p-6 sm:p-8 z-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] no-scrollbar"
              >
                <button
                  type="button"
                  onClick={() => setInfoModal(null)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={14} />
                </button>

                {/* Header */}
                <div className="mb-6 pr-8">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 mb-2.5">
                    {infoModal.project.normalizedCategory}
                  </span>
                  <h2 className="text-lg sm:text-xl font-sans font-bold text-white mb-2">
                    {infoModal.project.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {infoModal.project.desc}
                  </p>
                </div>

                {/* View 1: Features */}
                {infoModal.type === 'features' && (
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {infoModal.project.detailedFeatures?.map((feat, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/70 hover:border-zinc-700 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-[#FFE81B]/10 border border-[#FFE81B]/20 flex items-center justify-center shrink-0 mt-0.5">
                              <Star size={13} className="text-[#FFE81B]" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{feat.title}</h4>
                              <p className="text-[11px] text-zinc-400 leading-relaxed font-light">{feat.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          const proj = infoModal.project;
                          setInfoModal(null);
                          handleSoftClick(proj);
                        }}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FFE81B] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-all cursor-pointer shadow-[0_0_20px_rgba(255,232,27,0.2)]"
                      >
                        View Live Demo
                        <ExternalLink size={13} />
                      </button>
                      {infoModal.project.documentUrl && (
                        <button
                          type="button"
                          onClick={() => {
                            const proj = infoModal.project;
                            setInfoModal(null);
                            setActiveDocModal(proj);
                          }}
                          className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-[#FFE81B]/50 text-zinc-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                          title="Read complete system overview & specifications"
                        >
                          <FileText size={14} className="text-[#FFE81B]" />
                          <span>Full Overview</span>
                        </button>
                      )}
                      {infoModal.project.youtube && (
                        <button
                          type="button"
                          onClick={() => {
                            const proj = infoModal.project;
                            setInfoModal(null);
                            setActiveVideoModal({ url: proj.youtube, project: proj });
                          }}
                          className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                        >
                          <Youtube size={15} className="text-red-400" />
                          Watch Video
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* View 2: How It Works */}
                {infoModal.type === 'how-it-works' && (
                  <div className="space-y-6">
                    <div className="relative">
                      {/* Connector line */}
                      <div className="absolute left-[21px] top-[24px] bottom-[24px] w-[1.5px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent" />

                      <div className="space-y-6">
                        {infoModal.project.howItWorks?.length ? (
                          infoModal.project.howItWorks.map((step, i) => {
                            const StepIcon = step.icon;
                            return (
                              <div key={i} className="relative flex items-start gap-4">
                                <div className="relative z-10 w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                                  <StepIcon size={18} className="text-[#FFE81B]" />
                                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[8px] font-black text-white">
                                    {i + 1}
                                  </div>
                                </div>

                                <div className="flex-1 pt-1">
                                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{step.description}</p>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="py-8 text-center text-zinc-500 text-xs">
                            Workflow steps are being finalized for this solution.
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          const proj = infoModal.project;
                          setInfoModal(null);
                          handleSoftClick(proj);
                        }}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FFE81B] text-black text-xs font-black uppercase tracking-widest hover:bg-white transition-all cursor-pointer shadow-[0_0_20px_rgba(255,232,27,0.2)]"
                      >
                        Experience This Live
                        <ArrowRight size={13} />
                      </button>

                      {infoModal.project.documentUrl && (
                        <button
                          type="button"
                          onClick={() => {
                            const proj = infoModal.project;
                            setInfoModal(null);
                            setActiveDocModal(proj);
                          }}
                          className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-[#FFE81B]/50 text-zinc-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                          title={`Read official ${infoModal.project.name} system overview & scope`}
                        >
                          <FileText size={15} className="text-[#FFE81B]" />
                          <span>Full Overview</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* ═══════════════════════════════════════════════
          YOUTUBE VIDEO MODAL
      ═══════════════════════════════════════════════ */}
      <VideoModal
        software={activeVideoModal?.project || null}
        videoUrl={activeVideoModal?.url || null}
        isOpen={!!activeVideoModal}
        onClose={() => setActiveVideoModal(null)}
      />

      {/* ═══════════════════════════════════════════════
          DOCUMENT VIEWER MODAL
      ═══════════════════════════════════════════════ */}
      <DocumentViewerModal
        software={activeDocModal}
        isOpen={!!activeDocModal}
        onClose={() => setActiveDocModal(null)}
        onViewDemo={handleSoftClick}
      />
    </section>
  );
}

