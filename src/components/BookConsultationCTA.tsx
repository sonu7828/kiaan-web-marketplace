"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/kiaantechnology/software-demo';

// Don't show on booking/contact/confirmation pages
const HIDDEN_ON_PATHS = [
    '/book-demo',
    '/schedule',
    '/contact',
    '/demo',
    '/start-project',
    '/thank-you',
    '/success',
    '/confirmation'
];

declare global {
    interface Window {
        Calendly?: any;
    }
}

export function BookConsultationCTA() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setHasScrolled(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Load Calendly widget stylesheet
        if (!document.getElementById('calendly-css')) {
            const link = document.createElement('link');
            link.id = 'calendly-css';
            link.rel = 'stylesheet';
            link.href = 'https://assets.calendly.com/assets/external/widget.css';
            document.head.appendChild(link);
        }

        // Load Calendly widget script
        if (!document.getElementById('calendly-js')) {
            const script = document.createElement('script');
            script.id = 'calendly-js';
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBookingClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (window.Calendly) {
            window.Calendly.initPopupWidget({
                url: CALENDLY_URL
            });
        } else {
            // Fallback: open URL in a new tab if Calendly script fails
            window.open(CALENDLY_URL, '_blank');
        }
    };

    if (!mounted) return null;

    const isHidden = HIDDEN_ON_PATHS.some(p => pathname?.startsWith(p));
    if (isHidden) return null;

    return (
        <AnimatePresence>
            {hasScrolled && (
                <>
                    {/* ── Desktop View (Sticky Floating Button) ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="fixed bottom-6 right-6 z-[9998] hidden md:block"
                    >
                        <button
                            onClick={handleBookingClick}
                            className="flex items-center gap-3 bg-zinc-950 hover:bg-yellow-500 text-yellow-500 hover:text-black border border-yellow-500/50 hover:border-yellow-500 px-6 py-4 font-display uppercase tracking-widest text-xs rounded-none transition-all duration-300 transform active:scale-95 group shadow-[0_0_15px_rgba(234,179,8,0.15)] hover:shadow-[0_0_25px_rgba(234,179,8,0.55)] hover:scale-105"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75 group-hover:bg-black"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500 group-hover:bg-black"></span>
                            </span>
                            <span>Book a Free Consultation</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* ── Mobile View (Fixed Bottom Bar) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed bottom-0 left-0 right-0 w-full z-[9998] md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-yellow-500/20 px-5 py-4 flex items-center justify-between gap-4 shadow-[0_-4px_20px_rgba(0,0,0,0.8),_0_-1px_10px_rgba(234,179,8,0.1)]"
                    >
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-[0.2em] text-yellow-500">
                                <Sparkles size={10} /> Free Consultation
                            </div>
                            <span className="text-xs font-display uppercase text-white tracking-tight mt-0.5">
                                Talk to Our Engineers
                            </span>
                        </div>

                        <button
                            onClick={handleBookingClick}
                            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-3 font-black uppercase text-[10px] tracking-wider transition-all duration-300 transform active:scale-95 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
                        >
                            <Calendar size={12} />
                            <span>Book Now</span>
                        </button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
