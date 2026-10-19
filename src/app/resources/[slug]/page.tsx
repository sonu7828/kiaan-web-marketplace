import { resources, getResourceBySlug } from '@/data/resourcesData';
import ResourceDetailClient from './ResourceDetailClient';
import type { Metadata } from 'next';
import Link from 'next/link';

// Generate static params for all resource slugs
export function generateStaticParams() {
    return resources.map((resource) => ({
        slug: resource.slug,
    }));
}

// Generate SEO metadata per resource
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const resource = getResourceBySlug(slug);

    if (!resource) {
        return {
            title: 'Resource Not Found | Kiaan Technology',
            description: 'The requested resource could not be found.',
        };
    }

    return {
        title: resource.metaTitle,
        description: resource.metaDescription,
        keywords: resource.keywords.join(', '),
        robots: 'index, follow',
        alternates: {
            canonical: `/resources/${resource.slug}/`,
        },
        openGraph: {
            title: resource.metaTitle,
            description: resource.metaDescription,
            url: `https://kiaantechnology.com/resources/${resource.slug}`,
            siteName: 'Kiaan Technology',
            type: 'article',
            locale: 'en_IN',
            images: [
                {
                    url: resource.image,
                    width: 800,
                    height: 450,
                    alt: resource.title,
                }
            ],
        },
    };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const resource = getResourceBySlug(slug);

    if (!resource) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-display text-white uppercase mb-4">Resource Not Found</h1>
                    <p className="text-zinc-500 mb-8">The requested resource could not be found.</p>
                    <Link href="/resources" className="text-yellow-500 hover:text-yellow-400 uppercase font-black tracking-widest text-sm">
                        ← Back to Resources
                    </Link>
                </div>
            </div>
        );
    }

    // Get related resources
    const relatedResources = resource.relatedSlugs
        .map(slug => resources.find(r => r.slug === slug))
        .filter(Boolean);

    return <ResourceDetailClient resource={resource} relatedResources={relatedResources as any[]} />;
}
