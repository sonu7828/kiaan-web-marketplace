import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = solutionsData[slug];
    if (!data) return {};
    const title = data.metaTitle || `${data.title} | Kiaan Technology`;
    const description = data.metaDescription || data.desc;
    const canonical = `/solutions/industry/${slug}/`;
    return {
        title,
        description,
        keywords: data.keywords,
        openGraph: { title, description, url: canonical, siteName: 'Kiaan Technology', type: 'website' },
        twitter: { card: 'summary_large_image', title, description },
    };
}

export default async function IndustrySolutionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = solutionsData[slug];

    if (!data) {
        notFound();
    }

    return <NicheServicePage {...data} slug={`solutions/industry/${slug}`} />;
}

export function generateStaticParams() {
    return [
        { slug: 'healthcare' },
        { slug: 'real-estate' },
        { slug: 'automotive' },
        { slug: 'retail' },
        { slug: 'logistics' },
        { slug: 'education' },
        { slug: 'finance' },
        { slug: 'hospitality' },
        { slug: 'professional' }
    ];
}
