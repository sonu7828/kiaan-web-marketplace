import type { Metadata } from "next";
import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';

export const metadata: Metadata = {
    title: "Mobile App Development Company India | iOS & Android | Kiaan",
    description: "Custom iOS & Android apps using Flutter & React Native. Enterprise-grade mobile solutions for startups and scale-ups across India. Build with Kiaan Technology — get a quote.",
    keywords: "Mobile App Development Company, iOS App Development, Android App Development, Cross-Platform App Development, Custom Mobile Application Development, Enterprise Mobile Solutions, Progressive Web App Development",
    openGraph: {
        title: "Mobile App Development Company India | iOS & Android | Kiaan Technology",
        description: "Custom iOS & Android apps using Flutter & React Native. Enterprise-grade mobile solutions for startups across India.",
        url: "https://kiaantechnology.com/services/mobile-app-development",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "Mobile App Development - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development Company India | Kiaan Technology",
        description: "Custom iOS & Android apps using Flutter & React Native — enterprise-grade mobile solutions.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function MobileDevelopmentPage() {
    const data = solutionsData['mobile-development'];
    return <NicheServicePage {...data} slug="services/mobile-app-development" />;
}
