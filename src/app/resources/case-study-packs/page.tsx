import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudiesData } from '@/data/caseStudiesData';
import { FileText, Download, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Case Study One-Pagers | Sales Kit — Kiaan Technology',
    description: 'Download professional one-page PDF case studies for the Kiaan Technology sales team. Concise project summaries with results, tech stack, and client testimonials.',
    robots: 'noindex, nofollow', // Internal sales doc — keep out of search index
};

const categoryEmoji: Record<string, string> = {
    'CRM / SAAS': '📊',
    'HEALTHTECH AI': '🏥',
    'FINTECH GATEWAY': '💳',
    'WEB3 GAMING': '🎮',
    'SPORTS SAAS': '⚽',
};

export default function CaseStudyPacksPage() {
    return (
        <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '100px 0 60px', fontFamily: 'sans-serif' }}>
            <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>

                {/* Header */}
                <div style={{ marginBottom: '48px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: '#EAB308', color: '#000',
                        fontSize: '10px', fontWeight: 900, textTransform: 'uppercase',
                        letterSpacing: '0.3em', padding: '4px 12px', marginBottom: '20px'
                    }}>
                        <FileText size={12} /> Sales Kit
                    </div>
                    <h1 style={{ fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '12px' }}>
                        Case Study <span style={{ color: '#EAB308' }}>One-Pagers</span>
                    </h1>
                    <p style={{ color: '#71717a', fontSize: '15px', lineHeight: 1.6, maxWidth: '560px', borderLeft: '2px solid #EAB308', paddingLeft: '16px' }}>
                        Professional A4 PDF one-pagers for each project — ready for client meetings, sales decks, and email pitches. Open any link → Press <strong style={{ color: '#fff' }}>Ctrl+P → Save as PDF</strong>.
                    </p>
                </div>

                {/* Instructions Banner */}
                <div style={{
                    background: '#18181b', border: '1px solid #27272a',
                    borderLeft: '4px solid #EAB308',
                    padding: '16px 20px', marginBottom: '36px',
                    display: 'flex', alignItems: 'flex-start', gap: '12px'
                }}>
                    <Download size={18} style={{ color: '#EAB308', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                        <p style={{ fontSize: '12px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4px' }}>
                            How to Download as PDF
                        </p>
                        <p style={{ fontSize: '12px', color: '#71717a', lineHeight: 1.6 }}>
                            1. Click <strong style={{ color: '#fff' }}>Open One-Pager</strong> on any project below.
                            &nbsp;2. Press <kbd style={{ background: '#27272a', color: '#EAB308', padding: '1px 6px', fontSize: '11px', border: '1px solid #3f3f46', borderRadius: '3px' }}>Ctrl+P</kbd> (or <kbd style={{ background: '#27272a', color: '#EAB308', padding: '1px 6px', fontSize: '11px', border: '1px solid #3f3f46', borderRadius: '3px' }}>⌘+P</kbd> on Mac).
                            &nbsp;3. Set <strong style={{ color: '#fff' }}>Destination → Save as PDF</strong>.
                            &nbsp;4. Set <strong style={{ color: '#fff' }}>Paper size → A4</strong> and <strong style={{ color: '#fff' }}>Margins → None</strong>.
                        </p>
                    </div>
                </div>

                {/* One-Pager Cards Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '16px', marginBottom: '48px' }}>
                    {caseStudiesData.map((study, i) => (
                        <div key={study.slug} style={{
                            background: '#09090b', border: '1px solid #27272a',
                            padding: '20px 22px',
                            position: 'relative', overflow: 'hidden',
                            transition: 'border-color 0.2s',
                        }}>
                            {/* Top accent */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#EAB308' }} />

                            {/* Category + Emoji */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                <span style={{ fontSize: '18px' }}>{categoryEmoji[study.category] ?? '📁'}</span>
                                <span style={{
                                    fontSize: '8px', fontWeight: 900, textTransform: 'uppercase',
                                    letterSpacing: '0.3em', color: '#EAB308',
                                    background: '#EAB30815', border: '1px solid #EAB30830',
                                    padding: '2px 8px'
                                }}>
                                    {study.category}
                                </span>
                            </div>

                            <h2 style={{ fontSize: '17px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.01em', color: '#fff', marginBottom: '6px' }}>
                                {study.title}
                            </h2>
                            <p style={{ fontSize: '11px', color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '12px' }}>
                                Client: {study.client}
                            </p>

                            <p style={{ fontSize: '12px', color: '#71717a', lineHeight: 1.6, marginBottom: '16px' }}>
                                {study.desc.slice(0, 110)}...
                            </p>

                            {/* Metrics Row */}
                            <div style={{ display: 'flex', gap: '12px', marginBottom: '18px', borderTop: '1px solid #18181b', paddingTop: '14px' }}>
                                {study.impactMetrics.slice(0, 3).map((m, j) => (
                                    <div key={j} style={{ flex: 1, textAlign: 'center' }}>
                                        <div style={{ fontSize: '16px', fontWeight: 900, color: '#EAB308', lineHeight: 1 }}>{m.value}</div>
                                        <div style={{ fontSize: '7px', fontWeight: 700, color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '3px' }}>{m.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <Link
                                    href={`/case-studies/${study.slug}/one-pager`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                                        background: '#EAB308', color: '#000',
                                        padding: '9px 16px',
                                        fontSize: '9px', fontWeight: 900,
                                        textTransform: 'uppercase', letterSpacing: '0.2em',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <Download size={11} /> Open One-Pager
                                </Link>
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                                        border: '1px solid #27272a', color: '#71717a',
                                        padding: '9px 14px',
                                        fontSize: '9px', fontWeight: 700,
                                        textTransform: 'uppercase', letterSpacing: '0.15em',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <ExternalLink size={10} /> Full Study
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div style={{ borderTop: '1px solid #18181b', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ fontSize: '10px', color: '#3f3f46', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                        Confidential · Kiaan Technology Internal Sales Kit · {new Date().getFullYear()}
                    </p>
                    <Link href="/case-studies" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        color: '#EAB308', fontSize: '10px', fontWeight: 700,
                        textTransform: 'uppercase', letterSpacing: '0.2em', textDecoration: 'none'
                    }}>
                        All Case Studies <ArrowRight size={12} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
