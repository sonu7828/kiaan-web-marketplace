import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Schedule a Software Consultation | Kiaan Technology',
    description: 'Schedule a consultation with Kiaan Technology to discuss custom software, SaaS, ERP, CRM, cloud or AI automation requirements.',
    openGraph: { title: 'Schedule a Software Consultation | Kiaan Technology', description: 'Discuss your custom software, SaaS, ERP, CRM, cloud or AI automation requirements.', url: '/schedule/', siteName: 'Kiaan Technology', type: 'website' },
    twitter: { card: 'summary_large_image', title: 'Schedule a Software Consultation | Kiaan Technology', description: 'Discuss custom software and automation requirements with Kiaan Technology.' },
};

export default function ScheduleLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
