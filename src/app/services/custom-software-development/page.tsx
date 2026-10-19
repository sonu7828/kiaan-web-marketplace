import type { Metadata } from "next";
import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';
import { VendorScorecardCTA } from '@/components/VendorScorecardCTA';

export const metadata: Metadata = {
    title: "Custom Software Development Services India | Kiaan Technology",
    description: "End-to-end custom software development — enterprise apps, APIs & integrations. Built to scale for Indian businesses. Request your free project consultation.",
    keywords: "Custom Software Development, Enterprise Application Development, API Development, Software Integration Services, Bespoke Software Solutions, Custom Business Software India",
    openGraph: {
        title: "Custom Software Development Services India | Kiaan Technology",
        description: "End-to-end custom software — enterprise apps, APIs & integrations built to scale for Indian businesses.",
        url: "https://kiaantechnology.com/services/custom-software-development",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "Custom Software Development - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software Development Services India | Kiaan Technology",
        description: "End-to-end custom software — enterprise apps, APIs & integrations built to scale.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function CustomSoftwarePage() {
    const data = solutionsData['custom-software'];
    return <><NicheServicePage {...data} slug="services/custom-software-development" /><VendorScorecardCTA /></>;
}
