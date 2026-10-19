import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Software Development Pricing | Kiaan Technology',
    description: 'Review Kiaan Technology engagement and pricing options for custom software, SaaS, ERP, CRM, mobile applications and AI automation projects.',
    openGraph: { title: 'Custom Software Development Pricing | Kiaan Technology', description: 'Explore engagement and pricing options for custom software and automation projects.', url: '/pricing/', siteName: 'Kiaan Technology', type: 'website' },
    twitter: { card: 'summary_large_image', title: 'Software Development Pricing | Kiaan Technology', description: 'Explore engagement and pricing options for custom software projects.' },
};

export default function PricingLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
