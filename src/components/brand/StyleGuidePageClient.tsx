"use client";

import React from "react";
import { Download, ExternalLink, Sparkles, Check, X, ShieldAlert, Award, FileCode } from "lucide-react";

export default function StyleGuidePageClient() {
  const colors = [
    {
      name: "Kiaan Yellow",
      hex: "#FFE81B",
      rgb: "rgb(255, 232, 27)",
      cmyk: "0, 9, 89, 0",
      wcag: "4.5:1 (Compliant on Dark Backgrounds)",
      bg: "#FFE81B",
      text: "#000000"
    },
    {
      name: "Pure Black",
      hex: "#000000",
      rgb: "rgb(0, 0, 0)",
      cmyk: "0, 0, 0, 100",
      wcag: "21:1 (Compliant on Soft White)",
      bg: "#000000",
      text: "#FFFFFF"
    },
    {
      name: "Deep Zinc",
      hex: "#18181B",
      rgb: "rgb(24, 24, 27)",
      cmyk: "11, 11, 0, 89",
      wcag: "16.2:1 (Compliant on Soft White)",
      bg: "#18181B",
      text: "#FFFFFF"
    },
    {
      name: "Soft White",
      hex: "#FFFFFF",
      rgb: "rgb(255, 255, 255)",
      cmyk: "0, 0, 0, 0",
      wcag: "21:1 (Compliant on Pure Black)",
      bg: "#FFFFFF",
      text: "#000000"
    }
  ];

  const logoRules = {
    clearSpace: "Logo clear space must be equal to 50% of the logo height on all four sides. No overlapping typography or icons are allowed inside this safety buffer zone.",
    minSize: "Web: 100px wide. Print: 1.25 inches wide. Sizes smaller than these limit readable details of the geometric grid accents.",
    donts: [
      "Do not stretch, squeeze, or skew the proportions of the logotype.",
      "Do not change the logo colors or apply unauthorized gradients.",
      "Do not separate the symbol badge from the company lettering on public facing assets."
    ]
  };

  const copyGuidelines = {
    voice: "Active, direct, and architecture-focused. We present engineering facts instead of corporate fluff.",
    bannedWords: ["Synergy", "Paradigm Shift", "Revolutionary", "Cutting-edge", "Disruptive", "Out-of-the-box", "Empower"],
    examples: [
      { wrong: "We leverage cutting-edge paradigms to empower our customers.", correct: "We build serverless microservices to reduce page load times." },
      { wrong: "Our disruptive platform generates synergy across teams.", correct: "Our CRM syncs lead pipelines with outbound APIs." }
    ]
  };

  const handleDownloadPdf = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Kiaan Technology Brand Style Guide", 20, 30);
    
    doc.setFontSize(14);
    doc.text("1. Core Brand Colors", 20, 50);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    colors.forEach((c, idx) => {
      doc.text(`- ${c.name}: Hex ${c.hex} | RGB: ${c.rgb} | CMYK: ${c.cmyk} | WCAG: ${c.wcag}`, 25, 60 + idx * 10);
    });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("2. Logo Rules", 20, 110);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`- Clear Space: ${logoRules.clearSpace}`, 25, 120, { maxWidth: 160 });
    doc.text(`- Min Size: ${logoRules.minSize}`, 25, 140);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("3. Tone of Voice Standards", 20, 160);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`- Banned buzzwords: ${copyGuidelines.bannedWords.join(", ")}`, 25, 170);
    doc.text(`- Guideline: Use active voice and concrete developer facts.`, 25, 180);

    doc.save("kiaan-brand-style-guide.pdf");
  };

  const handleDownloadPpt = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.text("Kiaan Technology Corporate PPT Template", 20, 30);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Includes slide templates for:", 20, 45);
    doc.text("- Title Slide (Dark theme with yellow accents)", 25, 55);
    doc.text("- Content Slide (Clean grid lines, 16px body copy)", 25, 65);
    doc.text("- Fact Sheet Layout (Tabular corporate data)", 25, 75);
    doc.save("kiaan-corporate-ppt.pdf");
  };

  return (
    <div className="space-y-16 text-left">
      {/* Downloads bar */}
      <section className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex items-center gap-3">
          <Award size={24} className="text-yellow-500 shrink-0" />
          <div className="text-left">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Official Assets Pack</h4>
            <p className="text-[10px] text-zinc-500 font-mono">Download Brand standards documents directly.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <button
            onClick={handleDownloadPdf}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md font-mono cursor-pointer"
          >
            <Download size={12} /> Brand PDF
          </button>
          <button
            onClick={handleDownloadPpt}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all font-mono cursor-pointer"
          >
            <Download size={12} /> PPT Template
          </button>
          <a
            href="https://figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-4 py-2.5 border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 text-purple-400 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all font-mono"
          >
            Figma link <ExternalLink size={12} />
          </a>
        </div>
      </section>

      {/* Typography specs */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Typography Standards</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans normal-case">
            Our typography hierarchy is built on web accessibility standards. We use large geometric headlines (H1/H2) contrasted with highly readable sans-serif typefaces for structural descriptions.
          </p>
        </div>

        <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 space-y-6">
          <div className="border-b border-white/5 pb-4">
            <span className="text-[10px] text-zinc-500 font-mono uppercase block mb-2">H1 Header Style (48px / Bold)</span>
            <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white leading-none">
              GEOMETRIC HEADLINE
            </h2>
          </div>
          <div>
            <span className="text-[10px] text-zinc-500 font-mono uppercase block mb-2">Body Content Style (16px / Light)</span>
            <p className="text-base text-zinc-300 font-light leading-relaxed normal-case">
              This is a standard body copy presentation. It maintains a 1.6x line-height ratio to guarantee comfortable reading formats.
            </p>
          </div>
        </div>
      </section>

      {/* WCAG Color ratios */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">WCAG Color Specifications</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Official color hex codes, RGB, CMYK ratios, and WCAG contrast check metrics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {colors.map((color) => (
            <div
              key={color.hex}
              className="bg-zinc-950/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-full h-12 rounded-lg border border-white/10 mb-4"
                  style={{ backgroundColor: color.hex }}
                />
                <h4 className="text-xs font-bold text-white mb-2 uppercase font-mono">{color.name}</h4>
                <div className="space-y-1.5 text-[10px] font-mono text-zinc-400">
                  <div className="flex justify-between">
                    <span>HEX:</span>
                    <span>{color.hex}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RGB:</span>
                    <span>{color.rgb}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CMYK:</span>
                    <span>{color.cmyk}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-1.5 mt-1.5 text-yellow-500 font-bold">
                    <span>WCAG Ratio:</span>
                    <span>{color.wcag}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Placement rules */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Logo Guidelines</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Sizing limits and clear space standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 text-left">
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Check size={14} /> Clear Space</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans normal-case">{logoRules.clearSpace}</p>
          </div>
          <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 text-left">
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Check size={14} /> Minimum Size</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans normal-case">{logoRules.minSize}</p>
          </div>
          <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 border-l-red-500/30 border-l-2 text-left">
            <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 flex items-center gap-1.5"><X size={14} /> Don'ts</h4>
            <ul className="space-y-1.5 text-xs text-zinc-400 list-disc pl-4 font-sans normal-case">
              {logoRules.donts.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Writing copy guidelines */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Tone & Voice Guidelines</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Official guidelines for editorial copywriting.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 bg-zinc-950/40 border border-white/5 rounded-2xl p-6 text-left space-y-4">
            <div>
              <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-1 flex items-center gap-1.5"><Sparkles size={12} /> Brand Voice</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans normal-case">{copyGuidelines.voice}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 flex items-center gap-1.5"><ShieldAlert size={12} /> Banned Buzzwords</h4>
              <div className="flex flex-wrap gap-1.5">
                {copyGuidelines.bannedWords.map((word) => (
                  <span key={word} className="px-2 py-0.5 bg-red-500/10 text-red-400 border border-red-500/20 text-[9px] font-mono rounded">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-8 bg-zinc-950/40 border border-white/5 rounded-2xl p-6 text-left">
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">Examples</h4>
            <div className="space-y-4">
              {copyGuidelines.examples.map((ex, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 bg-red-500/5 border border-red-500/10 text-zinc-500 rounded-xl leading-relaxed">
                    <span className="text-[9px] text-red-400 font-bold block mb-1">DONT:</span>
                    "{ex.wrong}"
                  </div>
                  <div className="p-3 bg-green-500/5 border border-green-500/10 text-zinc-300 rounded-xl leading-relaxed">
                    <span className="text-[9px] text-green-400 font-bold block mb-1">DO:</span>
                    "{ex.correct}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
