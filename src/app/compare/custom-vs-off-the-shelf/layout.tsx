import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Software vs Off-the-Shelf: Full Comparison 2025 | Kiaan Technology',
    description: 'Compare custom software development vs off-the-shelf SaaS solutions. Detailed analysis of cost, scalability, data security, customization, and long-term ROI for Indian enterprises.',
    keywords: 'custom software vs off the shelf, custom development vs SaaS, build vs buy software, custom software benefits, off the shelf software disadvantages, enterprise software comparison India, custom ERP vs off the shelf ERP',
    alternates: {
        canonical: 'https://kiaantechnology.com/compare/custom-vs-off-the-shelf',
    },
    openGraph: {
        title: 'Custom Software vs Off-the-Shelf: Full Comparison | Kiaan Technology',
        description: 'Data-driven guide comparing custom software development vs off-the-shelf SaaS — cost, scalability, data security & ROI analysis.',
        url: 'https://kiaantechnology.com/compare/custom-vs-off-the-shelf',
        type: 'article',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
