"use client";

import React, { useState } from "react";
import { Copy, Check, Eye, Code, User, Briefcase, Mail, Phone, Calendar, Link as LinkIcon } from "lucide-react";

export default function SignaturesPageClient() {
  const [activeTab, setActiveTab] = useState<"Leadership" | "Sales" | "Tech" | "General">("Leadership");
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<"preview" | "html">("preview");

  // State fields to make signatures customizable
  const [name, setName] = useState("Suraj Kumar");
  const [title, setTitle] = useState("Chief Technology Officer");
  const [phone, setPhone] = useState("+91 97521 00980");
  const [email, setEmail] = useState("suraj.k@kiaantechnology.com");
  const [calendly, setCalendly] = useState("https://calendly.com/kiaantech");
  const [github, setGithub] = useState("https://github.com/surajkiaan");
  const [photoUrl, setPhotoUrl] = useState("https://kiaantechnology.com/frontPage/ISO%20certificate.jpg"); // Fallback mock photo

  const companyLogo = "https://kiaantechnology.com/logo.png";
  const websiteUrl = "https://kiaantechnology.com";

  // Generate clean inline CSS HTML template matching constraints (max 600px, dark mode tested, table-based)
  const getSignatureHtml = () => {
    const isLeadership = activeTab === "Leadership";
    const isSales = activeTab === "Sales";
    const isTech = activeTab === "Tech";

    return `<table cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff; background-color: #000000; border: 1px solid #1f1f1f; border-radius: 12px; overflow: hidden; padding: 24px; width: 100%;">
  <tr>
    <td style="vertical-align: top;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
        <tr>
          ${
            isLeadership && photoUrl
              ? `<td style="vertical-align: top; width: 90px; padding-right: 20px;">
            <img src="${photoUrl}" alt="${name}" width="80" height="80" style="border-radius: 50%; object-cover: cover; display: block; border: 2px solid #FFE81B;" />
          </td>`
              : ""
          }
          <td style="vertical-align: top; text-align: left;">
            <h2 style="margin: 0 0 4px 0; font-size: 18px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.5px; text-transform: uppercase;">${name}</h2>
            <p style="margin: 0 0 16px 0; font-size: 13px; color: #FFE81B; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">${title}</p>
            
            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px; line-height: 1.8;">
              <tr>
                <td style="color: #888888; width: 60px; font-weight: bold; text-transform: uppercase; font-family: monospace;">Phone:</td>
                <td><a href="tel:${phone.replace(/\s+/g, "")}" style="color: #FFFFFF; text-decoration: none; font-weight: 500;">${phone}</a></td>
              </tr>
              <tr>
                <td style="color: #888888; width: 60px; font-weight: bold; text-transform: uppercase; font-family: monospace;">Email:</td>
                <td><a href="mailto:${email}" style="color: #FFFFFF; text-decoration: none; font-weight: 500;">${email}</a></td>
              </tr>
              <tr>
                <td style="color: #888888; width: 60px; font-weight: bold; text-transform: uppercase; font-family: monospace;">Web:</td>
                <td><a href="${websiteUrl}" target="_blank" rel="noopener noreferrer" style="color: #FFE81B; text-decoration: none; font-weight: 600;">kiaantechnology.com</a></td>
              </tr>
              ${
                isSales && calendly
                  ? `<tr>
                <td style="color: #888888; width: 60px; font-weight: bold; text-transform: uppercase; font-family: monospace;">Meet:</td>
                <td><a href="${calendly}" target="_blank" rel="noopener noreferrer" style="color: #4facfe; text-decoration: underline; font-weight: bold;">Schedule a Call (Calendly)</a></td>
              </tr>`
                  : ""
              }
              ${
                isTech && github
                  ? `<tr>
                <td style="color: #888888; width: 60px; font-weight: bold; text-transform: uppercase; font-family: monospace;">Code:</td>
                <td><a href="${github}" target="_blank" rel="noopener noreferrer" style="color: #a78bfa; text-decoration: none; font-weight: bold;">github.com/profile</a></td>
              </tr>`
                  : ""
              }
            </table>
          </td>
          <td style="vertical-align: top; text-align: right; width: 120px; padding-left: 10px;">
            <img src="${companyLogo}" alt="Kiaan Technology Logo" width="100" style="display: block; margin-bottom: 12px; margin-left: auto;" />
            <table cellpadding="0" cellspacing="0" border="0" style="margin-left: auto;">
              <tr>
                <td style="padding: 0 4px;"><a href="https://linkedin.com/company/89547261/" target="_blank" rel="noopener noreferrer" style="color: #888888; text-decoration: none; font-size: 11px; font-weight: bold;">LN</a></td>
                <td style="color: #333333; font-size: 10px;">|</td>
                <td style="padding: 0 4px;"><a href="https://github.com/kiaantech" target="_blank" rel="noopener noreferrer" style="color: #888888; text-decoration: none; font-size: 11px; font-weight: bold;">GH</a></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 20px; border-top: 1px solid #1f1f1f; margin-top: 20px;">
      <p style="margin: 0; font-size: 9px; line-height: 1.4; color: #555555; text-align: justify; font-sans: sans-serif;">
        <strong>CONFIDENTIALITY & GDPR COMPLIANCE NOTE:</strong> The contents of this email message and any attachments are intended solely for the addressee(s) and may contain confidential and/or privileged information. If you are not the intended recipient, please notify the sender immediately and delete this message. Kiaan Technology processes personal data in accordance with our Privacy Policy and General Data Protection Regulation (GDPR) standards.
      </p>
    </td>
  </tr>
</table>`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getSignatureHtml()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
      {/* 1. Customizer Controls Panel — 4 cols */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-zinc-950/40 border border-white/5 rounded-2xl p-6 space-y-4 font-mono text-xs">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Briefcase size={16} className="text-yellow-500" /> Customize Fields
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Job Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3.5 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
              />
            </div>

            {activeTab === "Leadership" && (
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Photo URL</label>
                <input
                  type="text"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  className="w-full px-3.5 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
                />
              </div>
            )}

            {activeTab === "Sales" && (
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Calendly Link</label>
                <input
                  type="text"
                  value={calendly}
                  onChange={(e) => setCalendly(e.target.value)}
                  className="w-full px-3.5 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
                />
              </div>
            )}

            {activeTab === "Tech" && (
              <div>
                <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">GitHub URL</label>
                <input
                  type="text"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  className="w-full px-3.5 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Visual Output Board — 8 cols */}
      <div className="lg:col-span-8 space-y-6">
        {/* Tier switcher tabs */}
        <div className="flex flex-wrap gap-2 bg-zinc-950 border border-white/5 rounded-xl p-1 font-mono text-xs">
          {(["Leadership", "Sales", "Tech", "General"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-bold transition-all uppercase cursor-pointer ${
                activeTab === tab ? "bg-yellow-500 text-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* View Mode controls & copy CTA */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex bg-zinc-950 border border-white/5 rounded-lg p-0.5 font-mono text-[10px] tracking-wider">
            <button
              onClick={() => setViewMode("preview")}
              className={`px-3 py-1.5 rounded flex items-center gap-1 cursor-pointer ${
                viewMode === "preview" ? "bg-zinc-800 text-white font-bold" : "text-zinc-500 hover:text-white"
              }`}
            >
              <Eye size={12} /> Preview
            </button>
            <button
              onClick={() => setViewMode("html")}
              className={`px-3 py-1.5 rounded flex items-center gap-1 cursor-pointer ${
                viewMode === "html" ? "bg-zinc-800 text-white font-bold" : "text-zinc-500 hover:text-white"
              }`}
            >
              <Code size={12} /> Source HTML
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md font-mono cursor-pointer"
          >
            {copied ? (
              <>
                <Check size={12} /> Copied!
              </>
            ) : (
              <>
                <Copy size={12} /> Copy Code
              </>
            )}
          </button>
        </div>

        {/* Visual Box */}
        <div className="bg-zinc-950/20 border border-white/5 rounded-2xl p-6 min-h-[220px] flex items-center justify-center relative overflow-hidden">
          {viewMode === "preview" ? (
            <div
              className="w-full max-w-[550px] overflow-hidden"
              dangerouslySetInnerHTML={{ __html: getSignatureHtml() }}
            />
          ) : (
            <textarea
              readOnly
              value={getSignatureHtml()}
              className="w-full h-72 bg-black border border-white/5 rounded-xl p-4 font-mono text-[10px] leading-relaxed text-zinc-400 outline-none resize-none focus:border-white/10"
            />
          )}
        </div>

        {/* Support note */}
        <div className="p-4 bg-zinc-950/40 border border-white/5 rounded-xl text-xs text-zinc-500 font-sans leading-relaxed">
          <p className="font-bold text-zinc-400 mb-1">Dark Mode & Client compatibility verified:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Tested in Gmail, Apple Mail, and Outlook (Desktop & Web clients).</li>
            <li>Fully inline CSS rules used to avoid dynamic asset filtering.</li>
            <li>Contained within 600px width limit constraints to prevent clipping on mobile viewports.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
