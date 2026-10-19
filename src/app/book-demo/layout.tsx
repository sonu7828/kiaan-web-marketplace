import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book a Free Demo | Kiaan Technology — Custom Software & ERP',
    description: 'Schedule a free 30-minute demo with Kiaan Technology engineers. See our ERP, CRM, SaaS, and custom software solutions live. Instant booking with automatic confirmation.',
    keywords: 'book software demo, free consultation Kiaan Technology, schedule ERP demo, CRM demo booking, custom software consultation India, book call Indore software company',
    alternates: {
        canonical: 'https://kiaantechnology.com/book-demo',
    },
    openGraph: {
        title: 'Book a Free Software Demo | Kiaan Technology',
        description: 'Schedule a free 30-min live demo with our engineers. See ERP, CRM & SaaS platforms in action. Instant calendar booking.',
        url: 'https://kiaantechnology.com/book-demo',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
