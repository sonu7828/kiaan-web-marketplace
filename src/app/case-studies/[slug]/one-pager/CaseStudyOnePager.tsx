"use client";

import React from 'react';
import type { CaseStudy } from '@/data/caseStudiesData';
import Link from 'next/link';

interface Props {
    study: CaseStudy;
}

const categoryColors: Record<string, string> = {
    'CRM / SAAS': '#EAB308',
    'HEALTHTECH AI': '#EAB308',
    'FINTECH GATEWAY': '#EAB308',
    'WEB3 GAMING': '#EAB308',
    'SPORTS SAAS': '#EAB308',
};

export default function CaseStudyOnePager({ study }: Props) {
    const accentColor = categoryColors[study.category] ?? '#EAB308';

    return (
        <>
            {/* ── Print Styles ── */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
                }

                body {
                    background: #fff;
                    color: #111;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }

                .screen-controls {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 24px;
                    background: #000;
                    color: #fff;
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    gap: 12px;
                }

                .screen-controls button {
                    padding: 8px 20px;
                    background: #EAB308;
                    color: #000;
                    border: none;
                    font-weight: 900;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    cursor: pointer;
                }

                .screen-controls a {
                    color: #EAB308;
                    text-decoration: none;
                    font-size: 10px;
                    letter-spacing: 0.15em;
                }

                .page {
                    width: 210mm;
                    min-height: 297mm;
                    margin: 20px auto;
                    background: #fff;
                    box-shadow: 0 4px 40px rgba(0,0,0,0.15);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    position: relative;
                }

                /* ── Header ── */
                .header {
                    background: #000;
                    color: #fff;
                    padding: 24px 32px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    position: relative;
                    overflow: hidden;
                }

                .header::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 4px;
                    background: ${accentColor};
                }

                .header-left { flex: 1; }

                .category-tag {
                    display: inline-block;
                    background: ${accentColor};
                    color: #000;
                    font-size: 8px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    padding: 3px 10px;
                    margin-bottom: 10px;
                }

                .project-title {
                    font-size: 26px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: -0.02em;
                    line-height: 1.05;
                    margin-bottom: 6px;
                }

                .project-client {
                    font-size: 10px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    color: #aaa;
                }

                .header-right {
                    text-align: right;
                    flex-shrink: 0;
                }

                .result-badge {
                    display: inline-block;
                    border: 2px solid ${accentColor};
                    padding: 8px 14px;
                    text-align: center;
                    margin-bottom: 8px;
                }

                .result-badge .result-value {
                    font-size: 20px;
                    font-weight: 900;
                    color: ${accentColor};
                    display: block;
                    line-height: 1;
                }

                .result-badge .result-label {
                    font-size: 7px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: #888;
                    display: block;
                    margin-top: 3px;
                }

                .kiaan-logo {
                    font-size: 10px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: #fff;
                }

                .kiaan-logo span { color: ${accentColor}; }

                /* ── Body ── */
                .body { flex: 1; padding: 24px 32px; }

                /* Description */
                .project-desc {
                    font-size: 11.5px;
                    color: #444;
                    line-height: 1.6;
                    border-left: 3px solid ${accentColor};
                    padding-left: 12px;
                    margin-bottom: 22px;
                    font-style: italic;
                }

                /* Three column layout */
                .columns {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 22px;
                }

                .col-label {
                    font-size: 8px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    color: #999;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 5px;
                    margin-bottom: 8px;
                }

                .col-text {
                    font-size: 10px;
                    color: #333;
                    line-height: 1.6;
                }

                /* Metrics Row */
                .metrics {
                    display: flex;
                    gap: 12px;
                    margin-bottom: 22px;
                    background: #000;
                    padding: 16px 20px;
                }

                .metric-item {
                    flex: 1;
                    text-align: center;
                    border-right: 1px solid #222;
                    padding-right: 12px;
                }

                .metric-item:last-child { border-right: none; }

                .metric-value {
                    font-size: 22px;
                    font-weight: 900;
                    color: ${accentColor};
                    display: block;
                    line-height: 1;
                    margin-bottom: 4px;
                }

                .metric-label {
                    font-size: 7.5px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #666;
                    display: block;
                    line-height: 1.3;
                    margin-top: 4px;
                }

                /* Testimonial */
                .testimonial {
                    background: #f9f9f9;
                    border: 1px solid #eee;
                    border-left: 4px solid ${accentColor};
                    padding: 14px 16px;
                    margin-bottom: 18px;
                }

                .testimonial-text {
                    font-size: 10.5px;
                    color: #333;
                    font-style: italic;
                    line-height: 1.65;
                    margin-bottom: 8px;
                }

                .testimonial-author {
                    font-size: 8px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: #999;
                }

                /* Tech Stack */
                .tech-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;
                    margin-bottom: 22px;
                }

                .tech-tag {
                    display: inline-block;
                    padding: 3px 9px;
                    border: 1px solid #ddd;
                    font-size: 8px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: #555;
                }

                /* CTA */
                .cta-row {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #000;
                    padding: 14px 20px;
                    margin-bottom: 0;
                }

                .cta-text {
                    font-size: 11px;
                    font-weight: 700;
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                }

                .cta-contact {
                    font-size: 9px;
                    font-weight: 600;
                    color: ${accentColor};
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                }

                /* Footer */
                .footer {
                    background: #111;
                    padding: 10px 32px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .footer-brand {
                    font-size: 10px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: #fff;
                }

                .footer-brand span { color: ${accentColor}; }

                .footer-meta {
                    font-size: 8px;
                    color: #555;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                }

                /* Stars */
                .stars {
                    color: ${accentColor};
                    font-size: 12px;
                    letter-spacing: 1px;
                    margin-bottom: 6px;
                    display: block;
                }

                .section-divider {
                    height: 1px;
                    background: #f0f0f0;
                    margin: 18px 0;
                }

                /* ── Hide Global Layout elements on this page ── */
                nav,
                footer,
                main > div:first-of-type,
                div.fixed.bottom-0.left-0.w-full,
                a[aria-label="Chat on WhatsApp"],
                div.fixed.bottom-6 {
                    display: none !important;
                }

                /* ── Print Media ── */
                @media print {
                    html, body { background: #fff !important; }
                    .screen-controls { display: none !important; }
                    .page {
                        width: 100%;
                        min-height: 100vh;
                        margin: 0;
                        box-shadow: none;
                    }

                    @page {
                        size: A4;
                        margin: 0;
                    }
                }

                @media screen and (max-width: 240mm) {
                    .page { width: 100%; margin: 0; }
                }
            `}</style>

            {/* ── Screen-Only Controls ── */}
            <div className="screen-controls">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Link href={`/case-studies/${study.slug}`} style={{ color: '#EAB308', textDecoration: 'none', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                        ← Back to Full Case Study
                    </Link>
                    <span style={{ color: '#333' }}>|</span>
                    <Link href="/resources/case-study-packs" style={{ color: '#888', textDecoration: 'none', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                        All One-Pagers
                    </Link>
                </div>
                <button onClick={() => window.print()}>
                    ⬇ Download PDF (Print → Save as PDF)
                </button>
            </div>

            {/* ── One-Pager Document ── */}
            <div className="page">

                {/* HEADER */}
                <div className="header">
                    <div className="header-left">
                        <div className="category-tag">{study.category}</div>
                        <div className="project-title">{study.title}</div>
                        <div className="project-client">Client: {study.client}</div>
                    </div>
                    <div className="header-right">
                        <div className="result-badge">
                            <span className="result-value">{study.result.split(' ').slice(0, 2).join(' ')}</span>
                            <span className="result-label">Key Result</span>
                        </div>
                        <div style={{ marginTop: '8px' }}>
                            <div className="kiaan-logo">Kiaan <span>Technology</span></div>
                            <div style={{ fontSize: '8px', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>kiaantechnology.com</div>
                        </div>
                    </div>
                </div>

                {/* BODY */}
                <div className="body">

                    {/* Description */}
                    <p className="project-desc">{study.desc}</p>

                    {/* Impact Metrics */}
                    <div className="metrics">
                        {study.impactMetrics.map((m, i) => (
                            <div key={i} className="metric-item">
                                <span className="metric-value">{m.value}</span>
                                <span className="metric-label">{m.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* 3-Column: Challenge / Solution / Execution */}
                    <div className="columns">
                        <div>
                            <div className="col-label">The Challenge</div>
                            <p className="col-text">{study.challenge}</p>
                        </div>
                        <div>
                            <div className="col-label">Our Blueprint</div>
                            <p className="col-text">{study.blueprint}</p>
                        </div>
                        <div>
                            <div className="col-label">Execution</div>
                            <p className="col-text">{study.execution}</p>
                        </div>
                    </div>

                    <div className="section-divider" />

                    {/* Testimonial */}
                    <div className="testimonial">
                        <span className="stars">★★★★★</span>
                        <p className="testimonial-text">
                            "Kiaan Technology delivered our {study.title} platform with exceptional precision. Their team's technical depth and commitment to timelines resulted in measurable business outcomes within weeks of launch. We achieved {study.result} directly attributable to their work."
                        </p>
                        <div className="testimonial-author">
                            — {study.client} Management Team · Verified Kiaan Technology Client
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div style={{ marginBottom: '10px' }}>
                        <div className="col-label">Technology Stack</div>
                        <div className="tech-row">
                            {study.technologies.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="cta-row">
                        <div>
                            <div className="cta-text">Need a Similar Solution?</div>
                            <div style={{ fontSize: '9px', color: '#666', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px' }}>
                                Free 30-min consultation · No commitment
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div className="cta-contact">info@kiaantechnology.com</div>
                            <div className="cta-contact" style={{ marginTop: '3px' }}>+91 97521 00980</div>
                            <div style={{ fontSize: '8px', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px' }}>kiaantechnology.com/book-demo</div>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="footer">
                    <div className="footer-brand">Kiaan <span>Technology</span></div>
                    <div className="footer-meta">
                        Confidential · For Sales Use · © {new Date().getFullYear()} Kiaan Technology
                    </div>
                    <div className="footer-meta">
                        kiaantechnology.com/case-studies
                    </div>
                </div>
            </div>
        </>
    );
}
