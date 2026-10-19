import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Joint Webinar: Custom ERP/CRM Meets Automated Document Workflows | Kiaan Technology',
    description: 'Register for the live joint webinar by Kiaan Technology & SignFlow. Learn how to integrate custom CRM/ERP platforms with digital signature workflows to boost efficiency.',
    keywords: 'enterprise automation webinar, custom ERP integration, digital signature API, CRM workflow automation, SignFlow Kiaan Technology, business process automation India',
    alternates: {
        canonical: 'https://kiaantechnology.com/webinar',
    },
    openGraph: {
        title: 'Joint Webinar: Custom ERP/CRM Meets Automated Document Workflows',
        description: 'Live Session: Learn to bridge the gap between custom enterprise systems and automated document workflows. August 18, 2026.',
        url: 'https://kiaantechnology.com/webinar',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
