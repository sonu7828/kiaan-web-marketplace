import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Kiaan Technology | Get a Free Software Consultation",
    description: "Reach out to Kiaan Technology for custom software development, ERP, SaaS, AI automation & mobile apps. Get a free consultation for your project today.",
    alternates: {
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
