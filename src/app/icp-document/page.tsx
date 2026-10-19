import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import React from "react";
import IcpPageClient from "@/components/brand/IcpPageClient";

export const metadata: Metadata = {
  title: "Ideal Customer Profile (ICP) | Kiaan Technology",
  description:
    "Ideal Customer Profile (ICP) document for Kiaan Technology. Outlines targeted firmographics, key buyer personas, and psychographics.",
  keywords: "Kiaan Technology ICP, Ideal Customer Profile, target audience SaaS, B2B buyer persona, custom software marketing",
  robots: "noindex, nofollow",
};

export default function IcpPage() {
  return (
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
            <span className="text-[10px] font-mono font-bold text-yellow-500 uppercase tracking-widest">Strategy Deck</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-3">
            Ideal Customer <span className="text-yellow-500">Profile</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
            Kiaan Technology targeted enterprise segmentation, key buyer personas, and qualification metrics.
          </p>
        </div>

        <IcpPageClient />
      </div>
    </main>
  );
}
