"use client";

import React, { useState } from "react";
import { Download, Check, X, ShieldAlert, Award, FileCode, CheckCircle, ExternalLink } from "lucide-react";

export default function ProposalTemplatePageClient() {
  const [activePage, setActivePage] = useState<number>(1);

  const proposalPages = [
    { num: 1, title: "1. Cover Page", detail: "Kiaan Technology corporate branding header. Contains client company name, project title reference, date of submission, and sales representative contact details." },
    { num: 2, title: "2. Executive Summary", detail: "High-level description of client vision. Summarizes the custom engineering scope and expected timeline benefits." },
    { num: 3, title: "3. Problem Statement", detail: "Diagnoses client's architectural bottlenecks (e.g. system lag, high AWS billing, technical debt backlogs)." },
    { num: 4, title: "4. Proposed Solution", detail: "Detailed introduction to the Kiaan Velocity Protocol (modular serverless integrations, certified senior developer leads)." },
    { num: 5, title: "5. Project Scope & Deliverables", detail: "Outlines feature requirements: database mappings, user panels, dashboard reporting parameters." },
    { num: 6, title: "6. Project Timeline & Gantt Chart", detail: "Week-by-week delivery calendar from Day 1 kick-offs to production release handovers." },
    { num: 7, title: "7. Technology Stack Specs", detail: "Defines backend, frontend, database, and hosting environments (e.g., Next.js, Node.js, AWS serverless)." },
    { num: 8, title: "8. Quality Assurance & Testing SLA", detail: "Defines testing protocols, automated script coverage, CI/CD pipes, and post-release support SLAs." },
    { num: 9, title: "9. Pricing & Investment Tiers", detail: "Comprehensive pricing matrix detailing Essential, Professional, and Enterprise packages." },
    { num: 10, title: "10. Milestone Payments", detail: "Standard 25% payment checkpoints tied to verifiable project stages (e.g. Scope, Beta, Release, Handover)." },
    { num: 11, title: "11. ROI & Business Impact Metrics", detail: "Projects capital efficiency improvements, server bill reductions, and speed-to-market calculations." },
    { num: 12, title: "12. Terms & Conditions", detail: "IP ownership specifications, NDA terms, confidentiality agreements, and termination clauses." },
    { num: 13, title: "13. DocuSign E-Signature", detail: "Dedicated HelloSign/DocuSign anchor cards for both client and Kiaan stakeholders." }
  ];

  const pricingTiers = [
    {
      name: "Essential Tier",
      price: "$40,000 - $60,000",
      desc: "For scaling startups needing custom SaaS MVPs built on modular backend pipes.",
      popular: false,
      features: ["Certified developer lead", "5 core serverless blocks", "Manual QA testing", "30 days post-launch support"]
    },
    {
      name: "Professional Tier",
      price: "$80,000 - $150,000",
      desc: "Our most chosen tier for growing mid-market enterprises looking for deep CRM/ERP custom builds.",
      popular: true,
      features: ["Dedicated tech lead + 2 senior devs", "Unlimited serverless modules", "Automated QA pipelines", "90 days premium SLA support", "API performance tuning audits"]
    },
    {
      name: "Enterprise Tier",
      price: "$200,000 - $500,000+",
      desc: "Zero-compromise custom architectures for multinational operations requiring SOC2/HIPAA configurations.",
      popular: false,
      features: ["Custom dedicated engineering squad", "Bespoke database architectures", "Full SOC 2 / HIPAA compliance audits", "1-year 24/7 dedicated support SLA"]
    }
  ];

  const milestones = [
    { step: "Milestone 1: Project Kick-off & Architecture Spec", pct: "25%", trigger: "Due upon signature of mutual agreement and project setup initiation." },
    { step: "Milestone 2: Beta Launch & UI/UX Integration", pct: "25%", trigger: "Due upon client review of working frontend interface layout on staging servers." },
    { step: "Milestone 3: Database & Backend Code Complete", pct: "25%", trigger: "Due upon verification of all custom database systems API integrations." },
    { step: "Milestone 4: Production Handover & SLA Signing", pct: "25%", trigger: "Due upon deploying finalized build packages to client cloud account." }
  ];

  const handleDownloadTemplate = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Kiaan Technology Corporate B2B Proposal", 20, 30);

    doc.setFontSize(14);
    doc.text("1. Document Structure (12-15 Pages)", 20, 50);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    proposalPages.forEach((p, idx) => {
      doc.text(`- Page ${p.num}: ${p.title}`, 25, 60 + idx * 8);
    });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("2. Investment & Tiers Matrix", 20, 170);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    pricingTiers.forEach((t, idx) => {
      doc.text(`- ${t.name}: Price: ${t.price} | Popular: ${t.popular ? "YES" : "NO"}`, 25, 180 + idx * 10);
    });

    doc.save("kiaan-b2b-proposal-template.pdf");
  };

  return (
    <div className="space-y-16 text-left">
      {/* Download Action */}
      <section className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex items-center gap-3">
          <Award size={24} className="text-yellow-500 shrink-0" />
          <div className="text-left">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Proposal Package</h4>
            <p className="text-[10px] text-zinc-500 font-mono">Download standard proposal document layouts.</p>
          </div>
        </div>
        <button
          onClick={handleDownloadTemplate}
          className="w-full sm:w-auto px-5 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md font-mono cursor-pointer"
        >
          <Download size={12} /> Download Proposal PDF
        </button>
      </section>

      {/* 12-Page Outline Interactive Viewer */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Pages menu */}
        <div className="md:col-span-4 bg-zinc-950/40 border border-white/5 rounded-2xl p-4 space-y-1 max-h-[400px] overflow-y-auto font-mono text-xs">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest block px-2 mb-2 font-bold select-none">Proposal Pages Outline</span>
          {proposalPages.map((p) => (
            <button
              key={p.num}
              onClick={() => setActivePage(p.num)}
              className={`w-full text-left px-3 py-2 rounded-lg font-bold transition-all uppercase cursor-pointer ${
                activePage === p.num ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20" : "text-zinc-400 hover:text-white border border-transparent"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Selected Page details */}
        <div className="md:col-span-8 bg-zinc-950/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-yellow-500 font-mono uppercase tracking-widest block mb-1">Page {activePage} Specifications</span>
            <h3 className="text-lg font-bold text-white font-mono uppercase mb-4 border-b border-white/5 pb-2">
              {proposalPages[activePage - 1].title}
            </h3>
            <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed font-sans normal-case">
              {proposalPages[activePage - 1].detail}
            </p>
          </div>
          <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-zinc-500 mt-6">
            <span>DocuSign e-signature tags pre-anchored on this layout page.</span>
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Investment Pricing Matrix</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Pricing tiers optimized for different organizational sizes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`bg-zinc-950/40 border rounded-2xl p-6 flex flex-col justify-between relative ${
                tier.popular ? "border-yellow-500" : "border-white/5"
              }`}
            >
              {tier.popular && (
                <span className="absolute top-3 right-3 bg-yellow-500 text-black text-[9px] font-black font-mono px-2 py-0.5 rounded-full uppercase tracking-wider select-none">
                  Most Popular
                </span>
              )}
              <div>
                <h4 className="text-sm font-bold text-white font-mono uppercase mb-1">{tier.name}</h4>
                <div className="text-lg font-bold text-yellow-500 font-mono mb-4">{tier.price}</div>
                <p className="text-xs text-zinc-400 font-sans normal-case leading-relaxed mb-6">{tier.desc}</p>
                <ul className="space-y-2.5">
                  {tier.features.map((f, i) => (
                    <li key={i} className="flex gap-2 text-xs font-sans text-zinc-400 normal-case leading-relaxed">
                      <Check size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestone payment structure */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">25% Milestone Schedule</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Verified milestones payment allocation criteria.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m) => (
            <div key={m.step} className="bg-zinc-950/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="text-2xl font-bold text-yellow-500 font-mono mb-2">{m.pct}</div>
                <h4 className="text-xs font-bold text-white uppercase font-mono mb-2">{m.step}</h4>
                <p className="text-[10px] text-zinc-500 font-sans normal-case leading-relaxed">{m.trigger}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI integration & DocuSign card */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 text-left space-y-4">
          <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-wider border-b border-white/5 pb-2">Business ROI Projections</h4>
          <ul className="space-y-3 text-xs font-mono text-zinc-400">
            <li className="flex justify-between">
              <span>Time-to-Market Reduction:</span>
              <span className="text-white">Up to 60% Faster</span>
            </li>
            <li className="flex justify-between">
              <span>Cloud Server Cost Savings:</span>
              <span className="text-white">Average 40% Reduction</span>
            </li>
            <li className="flex justify-between">
              <span>Technical Debt Mitigation:</span>
              <span className="text-white">Zero-Debt Handover SLA</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 text-left flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-wider border-b border-white/5 pb-2 mb-3">E-Signature Integrations</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans normal-case mb-4">
              All proposals include embedded signature anchors compatible with DocuSign and HelloSign APIs. Send and execute templates instantly.
            </p>
          </div>
          <a
            href="https://docusign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-zinc-900 hover:bg-zinc-800 text-xs font-black uppercase text-white font-mono rounded-xl border border-white/5 transition-all"
          >
            Open DocuSign Portal <ExternalLink size={12} />
          </a>
        </div>
      </section>
    </div>
  );
}
