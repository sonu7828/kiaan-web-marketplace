import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Business Software Products & SaaS Solutions | Kiaan Technology',
    description: 'Explore Kiaan Technology software products for CRM, HRM, finance, automation, operations and industry-specific business workflows.',
    openGraph: { title: 'Business Software Products & SaaS Solutions | Kiaan Technology', description: 'Explore software products for CRM, HRM, finance, automation and industry-specific business workflows.', url: '/products/', siteName: 'Kiaan Technology', type: 'website' },
    twitter: { card: 'summary_large_image', title: 'Business Software Products | Kiaan Technology', description: 'Explore CRM, HRM, finance, automation and industry-specific software products.' },
};

export default function ProductsLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
