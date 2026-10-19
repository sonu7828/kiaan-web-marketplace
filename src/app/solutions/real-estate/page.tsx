import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';
import type { Metadata } from 'next';

const data = solutionsData['real-estate'];

export const metadata: Metadata = {
    title: data.metaTitle || 'Real Estate Solutions | Kiaan Technology',
    description: data.metaDescription || data.desc,
    keywords: [...(data.longTailKeywords || []), ...(data.locationKeywords || [])].join(', '),
    openGraph: {
        title: data.metaTitle || 'Real Estate Solutions | Kiaan Technology',
        description: data.metaDescription || data.desc,
        url: 'https://kiaantechnology.com/solutions/real-estate',
        siteName: 'Kiaan Technology',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: data.metaTitle || 'Real Estate Solutions | Kiaan Technology',
        description: data.metaDescription || data.desc,
    },
    alternates: {
    },
};

export default function RealEstatePage() {
    return <NicheServicePage {...data} slug="real-estate" />;
}
