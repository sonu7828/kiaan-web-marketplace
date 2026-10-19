import type { Metadata } from "next";
import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';
import { SaasChecklistCTA } from '@/components/SaasChecklistCTA';

export const metadata: Metadata = {
    title: "SaaS Development Company India | Cloud Platforms | Kiaan",
    description: "Build scalable multi-tenant SaaS platforms with Kiaan Technology. Cloud-native architecture, API-first design & global deployment for startups and enterprises. Get a quote.",
    keywords: "Custom SaaS Development, SaaS Product Development Services, Multi-Tenant SaaS Architecture, Cloud SaaS Development, SaaS Platform Development Company, SaaS MVP Development Company, White Label SaaS Development, SaaS DevOps Services",
    alternates: {
    },
    openGraph: {
        title: "SaaS Development Company India | Cloud Platforms | Kiaan Technology",
        description: "Build scalable multi-tenant SaaS platforms — cloud-native architecture, API-first design & global deployment.",
        url: "https://kiaantechnology.com/services/saas-development",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "SaaS Development - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "SaaS Development Company India | Kiaan Technology",
        description: "Build scalable multi-tenant SaaS platforms with Kiaan Technology — cloud-native, API-first.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function SaaSDevelopmentPage() {
    const data = solutionsData['saas-development'];
    return <>
        <NicheServicePage {...data} slug="services/saas-development" />
        <SaasChecklistCTA />
    </>;
}
