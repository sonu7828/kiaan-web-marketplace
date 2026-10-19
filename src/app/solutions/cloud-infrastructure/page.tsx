import type { Metadata } from "next";
import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';

export const metadata: Metadata = {
    title: "Cloud Infrastructure & DevOps Services India | Kiaan",
    description: "Resilient, scalable cloud-native infrastructure — Kubernetes orchestration, DevOps automation & CI/CD pipelines for global enterprises. Build with Kiaan Technology.",
    keywords: "Cloud Native Infrastructure, Kubernetes, AWS, Azure, Serverless, DevOps Automation, Scalable Cloud, Infrastructure as Code",
    openGraph: {
        title: "Cloud Infrastructure & DevOps Services India | Kiaan Technology",
        description: "Resilient, scalable cloud-native infrastructure — Kubernetes, DevOps automation & CI/CD pipelines for enterprises.",
        url: "https://kiaantechnology.com/solutions/cloud-infrastructure",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "Cloud Infrastructure Services - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Infrastructure & DevOps Services | Kiaan Technology",
        description: "Resilient cloud-native infrastructure — Kubernetes, DevOps automation & CI/CD pipelines.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function CloudInfrastructurePage() {
    const data = solutionsData['cloud-infrastructure'];
    return <NicheServicePage {...data} slug="cloud-infrastructure" />;
}
