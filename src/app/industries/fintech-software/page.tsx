import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';
import type { Metadata } from 'next';

const data = solutionsData['finance'];

export const metadata: Metadata = {
    title: data.metaTitle || 'Finance Solutions | Kiaan Technology',
    description: data.metaDescription || data.desc,
    keywords: [...(data.longTailKeywords || []), ...(data.locationKeywords || [])].join(', '),
    openGraph: {
        title: data.metaTitle || 'Finance Solutions | Kiaan Technology',
        description: data.metaDescription || data.desc,
        url: 'https://kiaantechnology.com/industries/fintech-software/',
        siteName: 'Kiaan Technology',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: data.metaTitle || 'Finance Solutions | Kiaan Technology',
        description: data.metaDescription || data.desc,
    },
    alternates: {
    },
};

export default function FinancePage() {
    return <NicheServicePage {...data} slug="industries/fintech-software" />;
}
