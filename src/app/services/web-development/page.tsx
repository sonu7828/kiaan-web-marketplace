import type { Metadata } from "next";
import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';

export const metadata: Metadata = {
    title: "Web App Development Services India | Kiaan Technology",
    description: "Enterprise web application development in India — scalable apps, SaaS platforms & cloud-native solutions. SEO-optimised. Contact Kiaan Technology today.",
    keywords: "Web Application Development, Custom Web Development, Enterprise Web Development, SaaS Web Development, Cloud-Based Web Applications, Enterprise Web Platform Development, API-First Web Development, Web Performance Optimization Services",
    openGraph: {
        title: "Web App Development Services India | Kiaan Technology",
        description: "Enterprise web application development — scalable apps, SaaS platforms & cloud-native solutions.",
        url: "https://kiaantechnology.com/services/web-development",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "Web Development Services - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Web App Development Services India | Kiaan Technology",
        description: "Enterprise web development — scalable apps, SaaS platforms & cloud-native solutions by Kiaan Technology.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function WebDevelopmentPage() {
    const data = solutionsData['web-development'];
    return <NicheServicePage {...data} slug="services/web-development" />;
}
