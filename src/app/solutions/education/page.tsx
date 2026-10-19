import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';
import type { Metadata } from 'next';

const data = solutionsData['education'];

export const metadata: Metadata = {
    title: data.metaTitle || 'Education Solutions | Kiaan Technology',
    description: data.metaDescription || data.desc,
    keywords: [...(data.longTailKeywords || []), ...(data.locationKeywords || [])].join(', '),
    openGraph: {
        title: data.metaTitle || 'Education Solutions | Kiaan Technology',
        description: data.metaDescription || data.desc,
        url: 'https://kiaantechnology.com/solutions/education',
        siteName: 'Kiaan Technology',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: data.metaTitle || 'Education Solutions | Kiaan Technology',
        description: data.metaDescription || data.desc,
    },
    alternates: {
    },
};

export default function EducationPage() {
    return <NicheServicePage {...data} slug="education" />;
}
