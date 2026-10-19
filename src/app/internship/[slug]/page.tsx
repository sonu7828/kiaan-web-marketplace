import { getProgramBySlug, internshipProgramsData } from '@/data/InternshipProgramData';
import InternshipProgramClient from '@/components/InternshipProgramClient';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return Object.keys(internshipProgramsData).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const program = getProgramBySlug(slug);

    if (!program) {
        return {
            title: 'Program Not Found | Kiaan Technology',
        };
    }

    return {
        title: program.metaTitle,
        description: program.metaDescription,
        keywords: program.keywords,
    };
}

export default async function InternshipProgramPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const program = getProgramBySlug(slug);

    return <InternshipProgramClient program={program} />;
}
