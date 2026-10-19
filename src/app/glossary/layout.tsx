import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Software & Technology Glossary | Kiaan Technology",
    description: "Definitions and explanations of core enterprise software terms. Learn about SaaS, ERP, CRM, AI automation, RPA, and multi-tenant architectures.",
    alternates: {
        canonical: "https://kiaantechnology.com/glossary",
    },
    openGraph: {
        title: "Software & Technology Glossary | Kiaan Technology",
        description: "Clear explanations of core tech terms. Master the basics of SaaS, ERP, CRM, and AI automation.",
        url: "https://kiaantechnology.com/glossary",
        siteName: "Kiaan Technology",
        type: "website",
    }
};

export default function GlossaryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
