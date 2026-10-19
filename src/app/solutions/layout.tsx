import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enterprise Software & Digital Transformation Solutions | Kiaan',
    description: 'Explore enterprise software solutions for cloud infrastructure, automation, fintech, healthcare, logistics, education and digital transformation.',
    openGraph: { title: 'Enterprise Software & Digital Transformation Solutions | Kiaan', description: 'Enterprise software solutions for cloud, automation and industry digital transformation.', url: '/solutions/', siteName: 'Kiaan Technology', type: 'website' },
    twitter: { card: 'summary_large_image', title: 'Enterprise Software Solutions | Kiaan Technology', description: 'Cloud, automation and industry digital transformation solutions.' },
};

export default function SolutionsLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
