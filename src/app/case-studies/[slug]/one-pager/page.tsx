import { caseStudiesData } from '@/data/caseStudiesData';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CaseStudyOnePager from './CaseStudyOnePager';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return caseStudiesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudiesData.find((s) => s.slug === slug);
    if (!study) return {};
    return {
        title: `${study.title} — Case Study PDF | Kiaan Technology`,
        description: `Download the one-page case study for ${study.title}. See the challenge, solution, and measurable results delivered by Kiaan Technology.`,
        robots: 'noindex',
    };
}

export default async function OnePagerPage({ params }: PageProps) {
    const { slug } = await params;
    const study = caseStudiesData.find((s) => s.slug === slug);
    if (!study) notFound();
    return <CaseStudyOnePager study={study} />;
}
