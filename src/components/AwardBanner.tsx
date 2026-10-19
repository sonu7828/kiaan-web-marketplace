"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AwardBanner() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [shimmerKey, setShimmerKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmerKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed bottom-0 left-0 w-full z-[9999] transform-gpu"
        style={{ WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden' }}
      >
        <div
          className="relative w-full overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            background: 'linear-gradient(90deg, #0f0d0b 0%, #1a1510 40%, #1e1812 70%, #1a1510 100%)',
            borderTop: '2px solid #c5a44e',
            boxShadow: '0 -6px 30px rgba(197, 164, 78, 0.28), 0 -12px 45px rgba(0,0,0,0.85)',
          }}
        >
          {/* Right diagonal stripe texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `repeating-linear-gradient(135deg, transparent, transparent 3px, rgba(255,255,255,0.02) 3px, rgba(255,255,255,0.02) 4px)`,
              maskImage: 'linear-gradient(to right, transparent 40%, black 70%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 40%, black 70%)',
            }}
          />

          {/* Warm spotlight */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(80,55,20,0.25), transparent 55%)' }}
          />

          <div className="relative mx-auto flex min-h-[52px] md:min-h-[58px] lg:min-h-[62px] max-w-[1700px] items-center py-2 md:py-2.5 px-3 sm:px-4 md:px-5 lg:px-6 transition-all duration-300 ease-in-out">

            {/* ═══ Left Badge Section ═══ */}
            <div
              className="mr-3 md:mr-4 lg:mr-5 flex items-center pr-3 md:pr-4 lg:pr-5 shrink-0 self-center"
              style={{ borderRight: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Badge with pulsing glow */}
              <div className="relative mr-3 flex flex-col items-center justify-center">
                {/* Animated glow behind badge */}
                <div
                  className="absolute inset-0 rounded-md"
                  style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.25), transparent 70%)',
                    animation: 'badgePulse 3s ease-in-out infinite',
                  }}
                />
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '6px',
                    border: '2px solid #c5a44e',
                    background: 'linear-gradient(135deg, rgba(197,164,78,0.15), rgba(197,164,78,0.03))',
                  }}
                >
                  <div className="flex flex-col items-center">
                    <Award size={16} strokeWidth={2} style={{ color: '#d4b85a' }} />
                    <span className="text-[9px] font-extrabold leading-none mt-0.5" style={{ color: '#d4b85a' }}>
                      2025
                    </span>
                  </div>
                  <div className="absolute -top-[2px] -left-[2px] w-[5px] h-[5px] rounded-full" style={{ background: '#c5a44e' }} />
                  <div className="absolute -top-[2px] -right-[2px] w-[5px] h-[5px] rounded-full" style={{ background: '#c5a44e' }} />
                  <div className="absolute -bottom-[2px] -left-[2px] w-[5px] h-[5px] rounded-full" style={{ background: '#c5a44e' }} />
                  <div className="absolute -bottom-[2px] -right-[2px] w-[5px] h-[5px] rounded-full" style={{ background: '#c5a44e' }} />
                </div>
              </div>

              {/* TECHBEHEMOTHS & AWARDS — equal sizing */}
              <div className="leading-none flex flex-col gap-[2px]">
                <div
                  className="text-[9px] md:text-[11px] font-extrabold tracking-[0.08em]"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #d4af37 0%, #f5d060 40%, #c5a44e 60%, #b8922a 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  TECHBEHEMOTHS
                </div>
                <div
                  className="text-[18px] md:text-[21px] font-black tracking-[0.02em] leading-none"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #e8dcc8 30%, #d4af37 65%, #b8922a 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  AWARDS
                </div>
              </div>
            </div>

            {/* Mobile spacer — visible ONLY on extreme narrow mobile (<480px) */}
            <div className="flex-1 mobile-spacer-block" />

            {/* ═══ Short Text — visible ONLY between 481px and 768px ═══ */}
            <div className="flex-1 px-2 text-center short-text-block">
              <div className="text-[12px] xs:text-[13px] font-semibold text-[#d4cdc4] tracking-wide leading-tight">
                Awarded for <span className="text-white font-bold">Graphic Design, ReactJs & UX/UI</span> Services
              </div>
            </div>

            {/* ═══ Main Full Text — visible ONLY above 768px ═══ */}
            <div className="flex-1 overflow-hidden full-text-block px-2">
              <div
                key={shimmerKey}
                className="relative leading-snug font-normal"
                style={{ color: '#d4cdc4' }}
              >
                {/* Shimmer overlay — slow sweep */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 0%, transparent 30%, rgba(212,175,55,0.18) 42%, rgba(255,215,0,0.35) 50%, rgba(212,175,55,0.18) 58%, transparent 70%, transparent 100%)',
                    animation: 'shimmerSweep 3.8s ease-in-out forwards',
                  }}
                />
                <span className="font-bold text-[14px] md:text-[15px] lg:text-[16px]" style={{ color: '#e8e2da' }}>
                  Kiaan Technology Private Limited Company
                </span>{" "}
                <span className="text-[13px] md:text-[14px] lg:text-[15px]">
                  is the 2025 Award-winning company in India for its
                </span>{" "}
                <span className="font-semibold text-[13px] md:text-[14px] lg:text-[15px]" style={{ color: '#e0d8ce' }}>Graphic Design</span>
                <span className="text-[13px] md:text-[14px] lg:text-[15px]">,{" "}</span>
                <span className="font-semibold text-[13px] md:text-[14px] lg:text-[15px]" style={{ color: '#e0d8ce' }}>ReactJs</span>
                <span className="text-[13px] md:text-[14px] lg:text-[15px]">{" "}and{" "}</span>
                <span className="font-semibold text-[12px] md:text-[13px] lg:text-[14px]" style={{ color: '#e0d8ce' }}>UX/UI Design</span>
                <span className="text-[12px] md:text-[13px] lg:text-[14px]">{" "}services</span>
              </div>
            </div>

            {/* ═══ View Certificate Button with shimmer ═══ */}
            <button
              onClick={() => setShowCertificate(true)}
              className="group ml-3 md:ml-5 mr-4 md:mr-0 shrink-0 relative flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-md text-[12px] md:text-[14px] font-extrabold tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #c5a44e, #a8882a)',
                color: '#0f0d0b',
                boxShadow: '0 2px 12px rgba(197,164,78,0.3)',
                border: '1px solid rgba(212,175,55,0.4)',
              }}
            >
              {/* Button shimmer */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                  animation: 'shimmerSweep 1.5s ease-in-out infinite',
                }}
              />
              <Award size={13} strokeWidth={2.5} className="relative z-10" />
              <span className="whitespace-nowrap relative z-10">View Certificate</span>
            </button>

          </div>
        </div>
      </motion.div>

      {/* Responsive Media Queries & Keyframes */}
      <style jsx global>{`
        @media (min-width: 769px) {
          .full-text-block { display: block !important; }
          .short-text-block { display: none !important; }
          .mobile-spacer-block { display: none !important; }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .full-text-block { display: none !important; }
          .short-text-block { display: block !important; }
          .mobile-spacer-block { display: none !important; }
        }
        @media (max-width: 480px) {
          .full-text-block { display: none !important; }
          .short-text-block { display: none !important; }
          .mobile-spacer-block { display: block !important; }
        }

        @keyframes shimmerSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @keyframes badgePulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>

      {/* ═══ Certificate Modal ═══ */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center"
            onClick={() => setShowCertificate(false)}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div
                className="p-1 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #d4af37, #a8882a, #d4af37, #c5a44e)',
                  boxShadow: '0 0 60px rgba(212,175,55,0.3), 0 0 120px rgba(212,175,55,0.1)',
                }}
              >
                <div className="relative bg-black rounded-md overflow-hidden">
                  <Image
                    src="/images/certificate-optimized.webp"
                    alt="TechBehemoths Award Certificate 2025 - Kiaan Technology"
                    width={900}
                    height={640}
                    className="block w-full h-auto max-h-[85vh] object-contain"
                  />
                </div>
              </div>

              <button
                onClick={() => setShowCertificate(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #d4af37, #a8882a)',
                  color: '#0f0d0b',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
                }}
                aria-label="Close certificate"
              >
                <X size={16} strokeWidth={3} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
