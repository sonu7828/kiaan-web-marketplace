import type { Metadata } from "next";
import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';

export const metadata: Metadata = {
    title: "Legacy System Modernization Services India | Kiaan",
    description: "Transform monolithic legacy systems into cloud-native microservices without disruption. Expert legacy modernization for enterprises across India — Kiaan Technology.",
    keywords: "Legacy System Modernization, Monolith to Microservices, Cloud Migration, API Wrapping, Data Modernization, Legacy Software Refactoring",
    openGraph: {
        title: "Legacy System Modernization Services India | Kiaan Technology",
        description: "Transform monolithic legacy systems into cloud-native microservices — expert modernization for enterprises across India.",
        url: "https://kiaantechnology.com/solutions/legacy-modernization",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "Legacy Modernization - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Legacy System Modernization | Kiaan Technology",
        description: "Transform monolithic legacy systems into cloud-native microservices without disruption.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function LegacyModernizationPage() {
    const data = solutionsData['legacy-modernization'];
    return <NicheServicePage {...data} slug="legacy-modernization" />;
}
