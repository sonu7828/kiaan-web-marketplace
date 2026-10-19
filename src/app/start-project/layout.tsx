import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Start Your Custom Software Project | Kiaan Technology',
    description: 'Share your software project requirements with Kiaan Technology for custom development, SaaS, ERP, CRM, mobile or AI automation planning.',
    openGraph: { title: 'Start Your Custom Software Project | Kiaan Technology', description: 'Share your custom software, SaaS, ERP, CRM, mobile or automation requirements.', url: '/start-project/', siteName: 'Kiaan Technology', type: 'website' },
    twitter: { card: 'summary_large_image', title: 'Start Your Software Project | Kiaan Technology', description: 'Share your software requirements with Kiaan Technology.' },
};

export default function StartProjectLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
