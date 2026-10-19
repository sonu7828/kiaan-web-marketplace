import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Software Development Internship Program | Kiaan Technology',
    description: 'Explore practical software, AI, cloud, mobile, design and digital growth internship tracks with project-based training at Kiaan Technology.',
    openGraph: { title: 'Software Development Internship Program | Kiaan Technology', description: 'Practical software, AI, cloud, mobile and design internship tracks.', url: '/internship/', siteName: 'Kiaan Technology', type: 'website' },
    twitter: { card: 'summary_large_image', title: 'Technology Internship Program | Kiaan Technology', description: 'Explore practical software, AI, cloud, mobile and design internship tracks.' },
};

export default function InternshipLayout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
