"use client";

import React, { useState } from "react";
import { Download, Check, X, ShieldAlert, Award, FileCode } from "lucide-react";

export default function SalesScriptsPageClient() {
  const [activeTab, setActiveTab] = useState<"Discovery" | "Demo" | "Objections" | "Scorecard">("Discovery");

  const discoveryScript = {
    duration: "30-45 Minutes",
    outline: [
      { step: "1. Rapport & Set Agenda (0-5 Min)", detail: "Build brief professional rapport. Propose agenda: 10 mins about their stack, 20 mins diagnosing blockers, 10 mins next steps. Secure agreement." },
      { step: "2. SPIN Diagnostic (5-20 Min)", detail: "Situation: 'What database/cloud components power your main SaaS app?' Problem: 'Where are developers losing time?' Implication: 'How does deployment lag impact client release schedules?' Need-Payoff: 'If auth/payment integrations were modularized, how many dev hours are saved?'" },
      { step: "3. MEDDIC Qualification (20-30 Min)", detail: "Identify Economic Buyer, Decision Criteria, Decision Process, Identify Pain, and Metrics. 'Who owns budget approval?'" },
      { step: "4. Value Presentation & Close (30-45 Min)", detail: "Present Kiaan Velocity Protocol (modular blocks). Secure Next Steps with a calendar invite before ending the call." }
    ]
  };

  const demoScript = {
    duration: "45-60 Minutes",
    outline: [
      { step: "1. Pre-Demo Verification", detail: "Confirm participants list. Verify their core pain point collected from Discovery calls before launching demo." },
      { step: "2. Pain-First Live Presentation", detail: "Do not show general settings. Immediately show the solution to their biggest bottleneck (e.g., live database syncing or HIPAA compliance configuration)." },
      { step: "3. Technical Deep Dive", detail: "Walkthrough serverless architecture blocks, API payloads logs, and integration SDK documentation." },
      { step: "4. Closing & Proposal Agreement", detail: "Agree on the exact delivery timeline and set a specific date/time for the custom proposal review call." }
    ]
  };

  const objections = [
    { trigger: "Price is too high", path: "Acknowledge value -> Shift to license-free ROI -> Compare per-seat costs vs zero licensing fees." },
    { trigger: "Already have an in-house team", path: "Validate team -> Introduce co-development model -> Offer baseline modular blocks to clear their backlog." },
    { trigger: "Offshore development risk", path: "Highlight ISO 9001 certification -> Guarantee senior cloud-certified leads -> Standard SLAs with daily commit tracking." }
  ];

  const scorecardMetrics = [
    { metric: "Rapport & Agenda", target: "Agenda explicitly set and agreement secured.", weight: "15%" },
    { metric: "SPIN Diagnosis", target: "Implication and Need-Payoff questions asked.", weight: "30%" },
    { metric: "MEDDIC Criteria", target: "Economic buyer and decision processes identified.", weight: "25%" },
    { metric: "Calendar Close", target: "Next step meeting booked on call.", weight: "30%" }
  ];

  const handleDownloadPlaybook = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Kiaan Corporate Sales Playbook", 20, 30);

    doc.setFontSize(14);
    doc.text("1. Discovery Call Guide (30-45 min)", 20, 50);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    discoveryScript.outline.forEach((o, idx) => {
      doc.text(`- ${o.step}: ${o.detail}`, 25, 60 + idx * 15, { maxWidth: 160 });
    });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(14);
    doc.text("2. Demo Call Guide (45-60 min)", 20, 130);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    demoScript.outline.forEach((o, idx) => {
      doc.text(`- ${o.step}: ${o.detail}`, 25, 140 + idx * 15, { maxWidth: 160 });
    });

    doc.save("kiaan-sales-playbook.pdf");
  };

  return (
    <div className="space-y-16 text-left">
      {/* Action panel */}
      <section className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex items-center gap-3">
          <Award size={24} className="text-yellow-500 shrink-0" />
          <div className="text-left">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider">Playbook Resources</h4>
            <p className="text-[10px] text-zinc-500 font-mono">Download standard sales scripts guides.</p>
          </div>
        </div>
        <button
          onClick={handleDownloadPlaybook}
          className="w-full sm:w-auto px-5 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md font-mono cursor-pointer"
        >
          <Download size={12} /> Download Sales Playbook (PDF)
        </button>
      </section>

      {/* Tabs */}
      <section className="space-y-6">
        <div className="flex flex-wrap gap-2 bg-zinc-950 border border-white/5 rounded-xl p-1 font-mono text-xs">
          {(["Discovery", "Demo", "Objections", "Scorecard"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-bold transition-all uppercase cursor-pointer ${
                activeTab === tab ? "bg-yellow-500 text-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab} Call
            </button>
          ))}
        </div>

        {/* Tab contents */}
        <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 min-h-[300px]">
          {activeTab === "Discovery" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h4 className="text-sm font-bold text-white uppercase font-mono">Discovery Call Script Blueprint</h4>
                <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-[10px] font-mono rounded">
                  Target: {discoveryScript.duration}
                </span>
              </div>
              <div className="space-y-6">
                {discoveryScript.outline.map((o) => (
                  <div key={o.step} className="space-y-1.5">
                    <h5 className="text-xs font-bold text-yellow-500 font-mono uppercase">{o.step}</h5>
                    <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed font-sans normal-case">
                      {o.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Demo" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h4 className="text-sm font-bold text-white uppercase font-mono">Demo Presentation Guidelines</h4>
                <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-[10px] font-mono rounded">
                  Target: {demoScript.duration}
                </span>
              </div>
              <div className="space-y-6">
                {demoScript.outline.map((o) => (
                  <div key={o.step} className="space-y-1.5">
                    <h5 className="text-xs font-bold text-yellow-500 font-mono uppercase">{o.step}</h5>
                    <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed font-sans normal-case">
                      {o.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Objections" && (
            <div className="space-y-6 text-left">
              <h4 className="text-sm font-bold text-white uppercase font-mono border-b border-white/5 pb-3">Objection Handling Flowcharts</h4>
              <div className="space-y-4">
                {objections.map((obj) => (
                  <div key={obj.trigger} className="p-4 bg-black border border-white/5 rounded-xl space-y-2">
                    <span className="text-[10px] font-bold text-red-400 font-mono uppercase">Prospect Objection:</span>
                    <h5 className="text-xs font-bold text-white uppercase font-mono">"{obj.trigger}"</h5>
                    <div className="pt-2 border-t border-white/5 flex items-center gap-2 flex-wrap text-[10px] font-mono text-zinc-400">
                      <span className="text-yellow-500 font-bold">Action Flow:</span>
                      <span>{obj.path}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Scorecard" && (
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-white uppercase font-mono border-b border-white/5 pb-3">Call Audit Scorecard</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-zinc-500 uppercase text-[9px] tracking-wider select-none">
                      <th className="pb-3">Audit Metric Item</th>
                      <th className="pb-3">Target Standard</th>
                      <th className="pb-3 text-right">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scorecardMetrics.map((m) => (
                      <tr key={m.metric} className="border-b border-white/5 last:border-0 hover:bg-zinc-900/10 transition-colors">
                        <td className="py-3 font-bold text-white">{m.metric}</td>
                        <td className="py-3 text-zinc-400 font-sans normal-case">{m.target}</td>
                        <td className="py-3 text-right text-yellow-500 font-bold">{m.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
