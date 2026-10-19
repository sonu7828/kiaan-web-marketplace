"use client";

import React from 'react';
import { PhoneCall, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { CTASection } from '@/components/case-studies/CTASection';
import type { CTASectionProps } from '@/components/case-studies/CTASection';

/* ─── Props ──────────────────────────────────────────────────────────────── */

/**
 * All props from CTASection are available as overrides.
 * Default values are pre-wired to the "Need a Similar Solution?" use-case.
 */
export type ContactCTAProps = Partial<CTASectionProps>;

/* ─── Defaults specific to this variant ─────────────────────────────────── */

const defaultFeatures = [
  { icon: <ShieldCheck size={12} />, label: 'Confidential & free consultation' },
  { icon: <Zap size={12} />,         label: 'Response within 24 hours' },
  { icon: <Rocket size={12} />,      label: 'Dedicated project manager' },
  { icon: <PhoneCall size={12} />,   label: 'No commitment required' },
];

/* ─── Component ──────────────────────────────────────────────────────────── */

/**
 * ContactCTA
 *
 * A reusable "Need a Similar Solution?" call-to-action banner.
 * Wraps the existing CTASection with preset copy tailored for
 * inviting businesses to reach out for custom software development.
 *
 * All CTASection props can be overridden via spread — no duplication.
 *
 * @example
 * // Default usage — ready to drop on any page
 * <ContactCTA />
 *
 * @example
 * // Override just the headline accent
 * <ContactCTA headlineAccent="Your Vision" />
 */
export const ContactCTA: React.FC<ContactCTAProps> = (props) => (
  <CTASection
    tagText="Let's Build Together"
    headlinePrimary="Need a "
    headlineAccent="Similar Solution?"
    description="Whether you're scaling an existing system or launching something entirely new, our engineers are ready to turn your ideas into production-ready software — on time, on budget, and built to last."
    features={defaultFeatures}
    primaryCtaLabel="Contact Us"
    primaryCtaHref="/contact"
    secondaryCtaLabel="Book Consultation"
    secondaryCtaHref="/schedule"
    {...props}
  />
);

export default ContactCTA;
