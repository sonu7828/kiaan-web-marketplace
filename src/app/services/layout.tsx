import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Software Development Services India | Kiaan Technology",
    description: "Full-suite enterprise software services — custom ERP, CRM, SaaS, AI automation & mobile apps for Indian businesses. Get a free proposal from Kiaan Technology.",
    alternates: {
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <div className="container mx-auto px-6 py-2 text-zinc-600 text-[10px] font-light text-right border-t border-zinc-900/40">
                Last Updated: July 2026
            </div>
        </>
    );
}
