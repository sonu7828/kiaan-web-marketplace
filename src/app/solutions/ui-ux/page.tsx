import type { Metadata } from "next";
import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';

export const metadata: Metadata = {
    title: "UI/UX Design Services India | SaaS & Web Apps | Kiaan",
    description: "Expert UI/UX design for SaaS platforms, web apps & mobile. User research, wireframing, prototyping & usability testing. Elevate your product with Kiaan Technology.",
    keywords: "UI/UX Design Services, SaaS UI Design, Web Application UI Design, User Experience Design, Product Design Services, SaaS Interface Optimization, UX Research and Strategy, Conversion-Focused Design Services",
    openGraph: {
        title: "UI/UX Design Services India | SaaS & Web Apps | Kiaan Technology",
        description: "Expert UI/UX design for SaaS platforms, web apps & mobile — user research, wireframing, prototyping & usability testing.",
        url: "https://kiaantechnology.com/solutions/ui-ux",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "UI UX Design Services - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "UI/UX Design Services India | Kiaan Technology",
        description: "Expert UI/UX design for SaaS platforms, web apps & mobile. Elevate your product with Kiaan Technology.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function UIUXPage() {
    const data = solutionsData['ui-ux'];
    return <NicheServicePage {...data} slug="ui-ux" />;
}
