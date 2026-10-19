import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import React from "react";
import StyleGuidePageClient from "@/components/brand/StyleGuidePageClient";

export const metadata: Metadata = {
  title: "Brand Style Guide & Assets | Kiaan Technology",
  description:
    "Official corporate brand guidelines for Kiaan Technology. Includes typography, WCAG colors ratios, voice and tone, logo rules, and templates.",
  keywords: "Kiaan Technology brand guide, style guide, logo rules, brand colors hex, corporate voice, typography standards",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "https://kiaantechnology.com/brand-style-guide",
  },
};

export default function StyleGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Brand Style Guide | Kiaan Technology",
            "description": "Official corporate brand guidelines for Kiaan Technology.",
            "publisher": {
              "@type": "Organization",
              "name": "Kiaan Technology",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kiaantechnology.com/logo.png"
              }
            }
          }),
        }}
      />

      <main className="min-h-screen bg-black text-white relative pt-24 pb-20 font-sans overflow-x-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/5 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-500/5 rounded-full blur-[150px] pointer-events-none z-0" />

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          {/* Back Nav */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-yellow-500 uppercase tracking-widest transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12 border-b border-white/5 pb-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-yellow-500/20 rounded-full bg-yellow-500/5 mb-5">
              <Sparkles size={12} className="text-yellow-500" />
              <span className="text-[10px] font-mono font-bold text-yellow-500 uppercase tracking-widest">Brand Standards</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-3">
              Brand <span className="text-yellow-500">Style Guide</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
              The official rules for representing the Kiaan Technology brand across web, print, mobile, and slide layouts.
            </p>
          </div>

          <StyleGuidePageClient />
        </div>
      </main>
    </>
  );
}
