"use client";

import React from "react";
import { Download, Check, X, ShieldAlert, Award, FileCode } from "lucide-react";

export default function IcpPageClient() {
  const firmographics = {
    employeeCount: "50 - 1,000 employees (Scale-up to mid-market enterprise)",
    revenue: "$10M - $500M ARR or annual budget scope",
    industries: "SaaS providers, Fintech, Healthtech, Logistics / Supply Chain",
    geography: "United States, United Kingdom, Canada, Australia"
  };

  const personas = [
    {
      title: "CTO / VP of Engineering",
      role: "Technical Evaluator & Owner",
      pains: [
        "Engineering backlog overloaded with core maintenance tasks instead of custom feature updates.",
        "Struggling to hire and retain senior full-stack developers in local regions.",
        "Technical debt slowing down overall platform velocity and increasing AWS costs."
      ]
    },
    {
      title: "Chief Executive Officer (CEO)",
      role: "Economic Buyer & Decision Maker",
      pains: [
        "Competitors releasing updates faster, leading to customer churn.",
        "High burn rate spent on non-differentiated infrastructure engineering.",
        "Missed market opportunities due to slow product launch times."
      ]
    },
    {
      title: "Engineering Manager",
      role: "Day-to-Day Coordinator",
      pains: [
        "Inconsistent code quality across remote junior developer hires.",
        "Difficulty scaling testing pipelines and setting up CI/CD workflows.",
        "Lack of modular blocks leading to developers repeating simple authentication or payment codes."
      ]
    }
  ];

  const psychographics = [
    { label: "Engineering Mindset", desc: "Values clean architecture, documentation, and performance over simple templates." },
    { label: "Capital Efficient", desc: "Prefers buying proven modular components to speed up time-to-market rather than rebuilding standard backend blocks." },
    { label: "Quality Driven", desc: "Willing to pay premium rates for certified, senior developers with proven SLAs." }
  ];

  const exclusions = [
    "Early-stage boot-strapped startups with <$100k total funding.",
    "B2C retail websites requiring basic WordPress templates or Shopify modifications.",
    "Organizations without a dedicated technical contact or project manager.",
    "Clients looking for cheap, low-cost offshore labor with no emphasis on code quality."
  ];

  const handleDownloadCheatSheet = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Kiaan ICP One-Page Cheat Sheet", 20, 30);

    doc.setFontSize(14);
    doc.text("1. Targeted Firmographics", 20, 50);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`- Employees: ${firmographics.employeeCount}`, 25, 60);
    doc.text(`- Revenue: ${firmographics.revenue}`, 25, 70);
    doc.text(`- Industries: ${firmographics.industries}`, 25, 80);

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("2. Key Buyer Personas", 20, 100);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    personas.forEach((p, idx) => {
      doc.text(`- ${p.title} (${p.role})`, 25, 110 + idx * 10);
    });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("3. Exclusion Criteria", 20, 150);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    exclusions.forEach((e, idx) => {
      doc.text(`- ${e}`, 25, 160 + idx * 10);
    });

    doc.save("kiaan-icp-one-page-sheet.pdf");
  };

  const handleDownloadDetailedPdf = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Kiaan Technology ICP Detailed Guide", 20, 30);

    doc.setFontSize(14);
    doc.text("1. Detailed Buyer Personas & Pain Points", 20, 50);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    
    let y = 60;
    personas.forEach((p) => {
      doc.setFont("Helvetica", "bold");
      doc.text(`${p.title} - Role: ${p.role}`, 25, y);
      doc.setFont("Helvetica", "normal");
      p.pains.forEach((pain) => {
        y += 8;
        doc.text(`* Pain: ${pain}`, 30, y, { maxWidth: 150 });
      });
      y += 15;
    });

    doc.save("kiaan-icp-detailed-guide.pdf");
  };

  return (
    <div className="space-y-16 text-left">
      {/* Downloads Section */}
      <section className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex items-center gap-3">
          <Award size={24} className="text-yellow-500 shrink-0" />
          <div className="text-left">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">ICP Assets Panel</h4>
            <p className="text-[10px] text-zinc-500 font-mono">Download structured target segmentation layouts.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <button
            onClick={handleDownloadCheatSheet}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md font-mono cursor-pointer"
          >
            <Download size={12} /> Cheat Sheet
          </button>
          <button
            onClick={handleDownloadDetailedPdf}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all font-mono cursor-pointer"
          >
            <Download size={12} /> Detailed PDF
          </button>
        </div>
      </section>

      {/* Firmographics Card */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Target Firmographics</h3>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans normal-case">
            Our outreach campaigns filter primarily by firmographic metrics to connect with scaling organizations that require customized enterprise integrations and certified cloud architects.
          </p>
        </div>

        <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 text-left">
          <ul className="space-y-4 text-xs font-mono text-zinc-400">
            <li className="flex justify-between border-b border-white/5 pb-2 last:border-0">
              <span className="text-zinc-500 uppercase tracking-wider">Company Size</span>
              <span className="text-white text-right max-w-[240px]">{firmographics.employeeCount}</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2 last:border-0">
              <span className="text-zinc-500 uppercase tracking-wider">Annual ARR</span>
              <span className="text-white text-right max-w-[240px]">{firmographics.revenue}</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2 last:border-0">
              <span className="text-zinc-500 uppercase tracking-wider">Target Verticals</span>
              <span className="text-white text-right max-w-[240px]">{firmographics.industries}</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2 last:border-0">
              <span className="text-zinc-500 uppercase tracking-wider">Geographic Region</span>
              <span className="text-white text-right max-w-[240px]">{firmographics.geography}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Personas Cards */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Key Buyer Personas</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Specific targets inside qualifying organizations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[9px] text-yellow-500 font-mono uppercase tracking-widest block mb-2">{persona.role}</span>
                <h4 className="text-sm font-bold text-white mb-4 uppercase font-mono">{persona.title}</h4>
                <ul className="space-y-3">
                  {persona.pains.map((p, idx) => (
                    <li key={idx} className="flex gap-2 text-xs font-sans text-zinc-400 normal-case leading-relaxed">
                      <span className="text-red-500 shrink-0">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Psychographics & Exclusions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Psychographics */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Psychographic Drivers</h3>
            <p className="text-xs text-zinc-500 font-mono mt-1">Decision mindset and purchasing values.</p>
          </div>

          <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 space-y-4">
            {psychographics.map((psy) => (
              <div key={psy.label} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <h4 className="text-xs font-bold text-white uppercase font-mono mb-1">{psy.label}</h4>
                <p className="text-xs text-zinc-400 font-sans normal-case leading-relaxed">{psy.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusions */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Exclusion Criteria (Anti-ICP)</h3>
            <p className="text-xs text-zinc-500 font-mono mt-1">Leads that fail qualification audits immediately.</p>
          </div>

          <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 space-y-3">
            {exclusions.map((e, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs font-mono text-zinc-400">
                <X size={14} className="text-red-500 shrink-0 mt-0.5" />
                <span>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
