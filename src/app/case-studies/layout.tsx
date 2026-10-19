import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Software Development Case Studies & Success Stories | Kiaan Technology",
    description: "Explore Kiaan Technology's real-world project portfolio — custom CRM, AI health tech, fintech payment gateways, Web3 gaming platforms and SaaS solutions delivered for clients across India and globally.",
    keywords: "software development case studies, IT project portfolio, SaaS development India, custom CRM case study, AI software success stories, fintech development case study, web3 gaming platform, Kiaan Technology projects",
    alternates: {
    },
    openGraph: {
        title: "Software Development Case Studies | Kiaan Technology",
        description: "5 real-world engineering success stories — CRM, AI, fintech, Web3, and SaaS platforms. See how Kiaan Technology delivers measurable business impact.",
        url: "https://kiaantechnology.com/case-studies",
        siteName: "Kiaan Technology",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                width: 1200,
                height: 630,
                alt: "Kiaan Technology Case Studies"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Development Case Studies | Kiaan Technology",
        description: "5 real-world engineering success stories — CRM, AI, fintech, Web3, and SaaS platforms.",
    }
};

export default function CaseStudiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <div className="container mx-auto px-6 pb-12 pt-8 border-t border-zinc-900/50 text-zinc-600 text-xs font-light text-right">
                Last Updated: July 2026
            </div>
        </>
    );
}
