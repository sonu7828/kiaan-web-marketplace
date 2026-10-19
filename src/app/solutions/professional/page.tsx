import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';
import type { Metadata } from 'next';

const data = solutionsData['professional'];

export const metadata: Metadata = {
    title: data.metaTitle || 'Professional Services Solutions | Kiaan Technology',
    description: data.metaDescription || data.desc,
    keywords: [...(data.longTailKeywords || []), ...(data.locationKeywords || [])].join(', '),
    openGraph: {
        title: data.metaTitle || 'Professional Services Solutions | Kiaan Technology',
        description: data.metaDescription || data.desc,
        url: 'https://kiaantechnology.com/solutions/professional',
        siteName: 'Kiaan Technology',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: data.metaTitle || 'Professional Services Solutions | Kiaan Technology',
        description: data.metaDescription || data.desc,
    },
    alternates: {
    },
};

export default function ProfessionalPage() {
    return <NicheServicePage {...data} slug="professional" />;
}
