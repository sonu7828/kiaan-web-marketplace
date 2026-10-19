import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Software Development Resources & Guides | Kiaan Technology',
    description: 'Explore practical guides, reports and technology resources covering SaaS, ERP, CRM, cloud architecture, AI automation and software engineering.',
    openGraph: { title: 'Software Development Resources & Guides | Kiaan Technology', description: 'Practical SaaS, ERP, CRM, cloud, AI automation and software engineering resources.', url: '/resources/', siteName: 'Kiaan Technology', type: 'website' },
    twitter: { card: 'summary_large_image', title: 'Software Development Resources | Kiaan Technology', description: 'Practical SaaS, ERP, CRM, cloud and AI automation guides.' },
};

export default function ResourcesLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
