"use client";

/**
 * /case-studies/components-demo
 *
 * Showcases the three new reusable UI components:
 *   - CaseStudyHero
 *   - CaseStudyCard
 *   - CTASection
 *
 * Uses placeholder content only — no backend connection.
 * The existing /case-studies/page.tsx is NOT modified.
 */

import React from 'react';
import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero';
import { CaseStudyCard, CaseStudyCardProps } from '@/components/case-studies/CaseStudyCard';
import { CTASection } from '@/components/case-studies/CTASection';
import { Reveal } from '@/components/Reveal';
import { Zap } from 'lucide-react';

/* ─── Placeholder card data ──────────────────────────────────────────────── */

const PLACEHOLDER_CARDS: CaseStudyCardProps[] = [
  {
    id: 'global-fintech',
    projectName: 'Global Fintech Platform',
    industry: 'FinTech',
    challenge:
      'A legacy monolithic system caused significant bottlenecks during peak trading hours, resulting in up to 30 % downtime and data loss risks across 40+ countries.',
    solution:
      'We architected a distributed, low-latency microservices backend using Go and gRPC, with a multi-region PostgreSQL cluster. A phased rollout ensured zero downtime during cutover.',
    technologies: ['Go', 'gRPC', 'PostgreSQL', 'Kubernetes', 'AWS', 'Redis'],
    results: [
      { label: 'Speed Increase', value: '+50%' },
      { label: 'System Uptime', value: '99.999%' },
      { label: 'Downtime Events', value: '0' },
      { label: 'Countries Live', value: '40+' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/case-studies',
    accentClass: 'yellow-500',
  },
  {
    id: 'healthcare-ai',
    projectName: 'Healthcare AI Management',
    industry: 'HealthTech',
    challenge:
      'Manual data entry and scheduling inefficiencies were costing 200+ clinics thousands of staff-hours annually, leading to burnout and patient dissatisfaction.',
    solution:
      'A custom AI automation engine integrating NLP models to parse medical documents combined with a predictive scheduling algorithm deployed on AWS.',
    technologies: ['Python', 'NLP', 'AWS Lambda', 'React', 'FastAPI', 'TensorFlow'],
    results: [
      { label: 'Admin Overhead', value: '-30%' },
      { label: 'Patient Wait', value: '-45%' },
      { label: 'Clinics Adopted', value: '200+' },
      { label: 'Accuracy', value: '97.4%' },
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/case-studies',
    accentClass: 'cyan-500',
  },
  {
    id: 'enterprise-erp',
    projectName: 'Enterprise ERP Revolution',
    industry: 'Manufacturing',
    challenge:
      'Fragmented legacy ERP systems across 12 countries prevented executives from getting a unified supply-chain view, causing millions in annual inventory waste.',
    solution:
      'A cloud-native architecture on AWS with loosely-coupled domain-driven APIs connected via an event-driven Kafka backbone, deployed iteratively over 14 months.',
    technologies: ['Node.js', 'Kafka', 'AWS', 'React', 'PostgreSQL', 'Docker'],
    results: [
      { label: 'Cost Reduction', value: '-40%' },
      { label: 'Data Latency', value: '<1 s' },
      { label: 'Inventory Waste', value: '-25%' },
      { label: 'Units Unified', value: '12' },
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/case-studies',
    accentClass: 'violet-500',
  },
  {
    id: 'saas-agency-flow',
    projectName: 'Automated Agency Flow',
    industry: 'SaaS / Agency',
    challenge:
      'The agency was losing clients during onboarding because manual contract generation and project setup took days, creating a poor first impression.',
    solution:
      'A serverless integration hub connecting Stripe, DocuSign, and Jira via AWS Lambda functions and a unified Next.js dashboard — delivered in 8 weeks.',
    technologies: ['Next.js', 'AWS Lambda', 'Stripe', 'DocuSign', 'Jira API', 'TypeScript'],
    results: [
      { label: 'Onboarding Time', value: '-80%' },
      { label: 'Manual Steps', value: '0' },
      { label: 'Client Satisfaction', value: '+40%' },
      { label: 'Delivery Time', value: '8 wks' },
    ],
    href: '/case-studies',
    accentClass: 'emerald-500',
  },
  {
    id: 'edtech-portal',
    projectName: 'Next-Gen EdTech Portal',
    industry: 'Education',
    challenge:
      'The legacy learning platform crashed when concurrent users exceeded 10,000, severely limiting expansion into the Asian market.',
    solution:
      'Migrated to a horizontally scalable Kubernetes cluster with Node.js microservices and a Redis caching layer for real-time exam state — 500k profiles moved in one weekend.',
    technologies: ['Kubernetes', 'Node.js', 'Redis', 'WebSockets', 'Next.js', 'GCP'],
    results: [
      { label: 'Concurrent Users', value: '1 M+' },
      { label: 'Crashes', value: '0' },
      { label: 'Video Latency', value: '-60%' },
      { label: 'User Profiles', value: '500k' },
    ],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/case-studies',
    accentClass: 'rose-500',
  },
  {
    id: 'logistics-hub',
    projectName: 'Logistics Core Hub',
    industry: 'Logistics',
    challenge:
      'Drivers in rural areas constantly lost connectivity, causing syncing errors and lost tracking data critical for SLA compliance with global clients.',
    solution:
      'A React Native mobile app built with WatermelonDB for reliable offline-first local storage and background sync, field-tested across 3 continents before global rollout.',
    technologies: ['React Native', 'WatermelonDB', 'Node.js', 'GraphQL', 'AWS', 'Maps API'],
    results: [
      { label: 'Delivery Failures', value: '0' },
      { label: 'Offline Resync', value: '<2 s' },
      { label: 'Driver Satisfaction', value: '98%' },
      { label: 'Active Drivers', value: '5 000+' },
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    href: '/case-studies',
    accentClass: 'yellow-500',
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CaseStudiesComponentsDemo() {
  return (
    <div className="bg-black min-h-screen selection:bg-yellow-500 selection:text-black">

      {/* ── 1. Hero ── */}
      <CaseStudyHero />

      {/* ── 2. Cards Grid ── */}
      <section
        id="case-studies-grid"
        className="container mx-auto px-6 py-16 md:py-20"
        aria-label="Case study cards grid"
      >
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-zinc-800 text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500">
              <Zap size={12} aria-hidden="true" />
              Selected Work
            </div>
            <div className="flex-1 h-px bg-white/5" />
          </div>
        </Reveal>

        {/* Responsive grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLACEHOLDER_CARDS.map((card, i) => (
            <CaseStudyCard key={card.id} {...card} index={i} />
          ))}
        </div>
      </section>

      {/* ── 3. CTA Section ── */}
      <CTASection />
    </div>
  );
}
