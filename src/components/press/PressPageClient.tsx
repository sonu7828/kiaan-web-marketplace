"use client";

import { Download, Mail, Copy, Check, Phone } from "lucide-react";
import React, { useState } from "react";

export default function PressPageClient() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const colors = [
    { name: "Kiaan Yellow (Primary)", hex: "#FFE81B", desc: "For highlights, call-to-actions, and main accents." },
    { name: "Pure Black", hex: "#000000", desc: "Primary page background layer." },
    { name: "Dark Zinc", hex: "#18181B", desc: "Card frames, section borders, and secondary panels." },
    { name: "Soft White", hex: "#FFFFFF", desc: "Body headings and major typography layout." }
  ];

  const boilerplates = [
    {
      label: "100-Word Version",
      text: "Kiaan Technology is a premier custom enterprise software and SaaS development agency specializing in AI-driven business automation, scalable cloud infrastructures, and high-performance CRM/ERP integrations. Headquartered in India, with operations spanning three continents, Kiaan Technology decouples standard engineering architectures to deliver serverless, secure microservices up to three times faster than traditional agencies. Backed by certified experts, Kiaan Technology works with both rapidly scaling startups and global enterprises to build zero-compromise digital solutions that drive measurable ROI and 99.9% operational uptime."
    },
    {
      label: "250-Word Version",
      text: "Kiaan Technology is an ISO-certified next-generation software engineering company that simplifies and accelerates digital transformation for enterprises globally. Specializing in high-performance cloud architectures, custom ERP/CRM ecosystems, and artificial intelligence implementations, Kiaan Technology operates on a proprietary engineering model known as the Kiaan Velocity Protocol. This protocol decouples foundational infrastructure components (like auth, security compliance, and payments) from core business logic, enabling senior engineers to inject pre-tested, highly scalable serverless microservices on Day 1. The result is custom enterprise software delivered 3x faster, with zero technical debt and a fixed-fee delivery guarantee. Working from state-of-the-art developer hubs in Indore, India, Kiaan's team consists of senior certified developers in AWS, Azure, Google Cloud, and complex full-stack web/mobile application frameworks. By focusing engineering efforts on custom business logic rather than rebuilding standard backend pipes, Kiaan Technology ensures maximum capital efficiency and top-tier code quality. The company stands behind its products with industry-leading SLAs, offering 24/7 dedicated support, proactive serverless node monitoring, and security patches to guarantee 99.99% operational uptime. From VC-backed SaaS startups to multinational supply chains and logistics leaders, Kiaan Technology is the trusted technological backbone for companies looking to scale their business operations sustainably in the digital age."
    },
    {
      label: "500-Word Version",
      text: "Kiaan Technology is a globally operating, ISO-certified software development and consulting agency that stands at the forefront of the modern custom software revolution. Founded on the principle that traditional software development cycles are bloated with repetitive, non-differentiated engineering tasks, Kiaan Technology has pioneered a modular, high-velocity approach to building custom SaaS, CRM, ERP, and AI-driven products. Rather than building core components from scratch, the company leverages a proprietary codebase of serverless infrastructure blocks, allowing clients to skip months of baseline development and deploy finished applications in weeks instead of quarters. Operating globally with operations spanning three continents, Kiaan Technology serves as a dedicated technology partner to growing startups and established enterprises alike. The company's engineering methodology, the Kiaan Velocity Protocol, relies on decoupling baseline operational plumbing from customized business logic. This ensures that 90% of development hours are allocated directly to creating competitive advantages—such as customized machine learning models, predictive databases, and bespoke third-party integrations—rather than rebuilding standard login cards or subscription portals. Kiaan's extensive service catalog covers full-stack web development, cross-platform mobile apps (React Native and Flutter), custom enterprise database design, serverless microservice migrations, and AI workflow automation. The agency's core strength lies in its developer talent; Kiaan maintains a strict talent acquisition policy, hiring top-tier full-stack engineers and certified cloud solutions architects (AWS, GCP, and Azure). This high concentration of senior talent enables the company to deliver robust, secure, and clean code that passes rigorous security audits (HIPAA, SOC 2, and PCI compliance). Beyond software creation, Kiaan Technology operates a dedicated 'Architecture as a Service' (AaaS) model, acting as an outsourced, on-demand engineering division for its partners. This includes round-the-clock serverless node maintenance, database tuning, auto-scaling configuration, and security monitoring. Through its specialized training divisions and professional internships, the company also actively contributes to the local technology ecosystem in Indore, India, training the next generation of full-stack developers in modern framework principles. By combining high-velocity engineering, total cost of ownership transparency, and a relentless focus on client ROI, Kiaan Technology continues to set a new benchmark for what businesses should expect from custom software partners."
    }
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex).then(() => {
      setCopiedColor(hex);
      setTimeout(() => setCopiedColor(null), 2000);
    });
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  const handleDownloadLogos = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    doc.setFont("Helvetica", "bold");
    doc.text("Kiaan Technology Logo Pack Placeholder", 20, 30);
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Official assets pack includes:", 20, 45);
    doc.text("- kiaan-logo-dark.png (High-Res PNG for dark layouts)", 25, 55);
    doc.text("- kiaan-logo-light.png (High-Res PNG for light layouts)", 25, 65);
    doc.text("- kiaan-logo.svg (Scalable vector file)", 25, 75);
    doc.text("- kiaan-brand-guidelines.pdf (Official usage specs)", 25, 85);
    doc.text("In a production environment, this triggers a ZIP compilation download.", 20, 110);
    doc.save("kiaan-logo-pack.pdf");
  };

  return (
    <div className="space-y-16 text-left">
      {/* 1. Logos Download Section */}
      <section className="bg-zinc-950/40 border border-white/5 rounded-2xl p-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Logo & Brand Assets Pack</h3>
            <p className="text-xs text-zinc-400 max-w-xl font-sans normal-case leading-relaxed">
              Official Kiaan Technology logotype bundle. Contains print and web-ready file formats including high-resolution transparent PNG, vector SVG, and EPS formats for both dark and light setups.
            </p>
          </div>
          <button
            onClick={handleDownloadLogos}
            className="w-full md:w-auto shrink-0 px-6 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md font-mono cursor-pointer"
            aria-label="Download Logo Pack ZIP"
          >
            <Download size={14} /> Download Logo Pack (ZIP)
          </button>
        </div>
      </section>

      {/* 2. Color Palettes Section */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Brand Color Codes</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Official hex palettes codes used across Kiaan's digital channels.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
                <h4 className="text-xs font-bold text-white mb-1 uppercase font-mono">{color.name}</h4>
                <p className="text-[10px] text-zinc-500 font-sans normal-case leading-relaxed mb-4">{color.desc}</p>
              </div>
              <button
                onClick={() => handleCopyColor(color.hex)}
                className="w-full flex items-center justify-center gap-1.5 py-2 bg-zinc-900 hover:bg-zinc-800 text-[10px] text-zinc-400 hover:text-white font-mono rounded-lg border border-white/5 transition-all cursor-pointer"
              >
                {copiedColor === color.hex ? (
                  <>
                    <Check size={11} className="text-green-400" /> COPIED!
                  </>
                ) : (
                  <>
                    <Copy size={11} /> COPY HEX ({color.hex})
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Boilerplate Section */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Company Boilerplate</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Standard descriptions of Kiaan Technology for press releases, articles, and profiles.</p>
        </div>

        <div className="space-y-6">
          {boilerplates.map((bp) => (
            <div
              key={bp.label}
              className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono font-bold text-yellow-500 uppercase tracking-widest">
                  {bp.label}
                </span>
                <button
                  onClick={() => handleCopyText(bp.text, bp.label)}
                  className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-white/5 rounded-lg text-[9px] font-mono text-zinc-400 hover:text-white transition-all flex items-center gap-1 cursor-pointer"
                >
                  {copiedText === bp.label ? (
                    <>
                      <Check size={10} className="text-green-400" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={10} /> Copy Text
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs md:text-sm text-zinc-300 font-light leading-relaxed font-sans normal-case">
                {bp.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Fact Sheet Section */}
      <section className="space-y-6">
        <div>
          <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider">Kiaan Fast Facts</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Reference sheet for general corporate statistics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 text-left">
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">Quick Stats</h4>
            <ul className="space-y-3 text-xs font-mono text-zinc-400">
              <li className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                <span>Founded</span>
                <span className="text-white">2022</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                <span>Headquarters</span>
                <span className="text-white">Indore, MP, India</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                <span>Global Hubs</span>
                <span className="text-white">India, USA, MENA</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                <span>ISO Certification</span>
                <span className="text-white">ISO 9001:2015</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                <span>Core Competencies</span>
                <span className="text-white font-sans text-right max-w-[200px]">Enterprise SaaS, Custom ERP, Cloud Microservices, AI Workflows</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 text-left">
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">Media Relations</h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans normal-case mb-6">
              For interview requests, executive commentary, or official statements, reach out to our media relations desk.
            </p>
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shrink-0">
                  <Mail size={12} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-500 uppercase tracking-wider">Press Email</span>
                  <a href="mailto:media@kiaantechnology.com" className="text-zinc-200 hover:text-yellow-500 transition-colors">media@kiaantechnology.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shrink-0">
                  <Phone size={12} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-zinc-500 uppercase tracking-wider">Press Phone</span>
                  <a href="tel:+919752100980" className="text-zinc-200 hover:text-yellow-500 transition-colors">+91 97521 00980</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
