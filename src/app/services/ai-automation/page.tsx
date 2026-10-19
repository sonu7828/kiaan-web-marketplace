import type { Metadata } from "next";
import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';
import { AIROICalculatorCTA } from '@/components/AIROICalculatorCTA';

export const metadata: Metadata = {
    title: "AI Automation Services India | Workflow & RPA | Kiaan",
    description: "AI-driven automation services that eliminate manual work. Intelligent workflow automation, RPA & process optimisation for Indian enterprises. Request a free demo.",
    keywords: "Business Automation Software, Workflow Automation Systems, Enterprise Automation Solutions, AI-Powered Automation Software, Process Automation Development, Robotic Process Automation Solutions, Intelligent Business Automation Tools",
    openGraph: {
        title: "AI Automation Services India | Workflow & RPA | Kiaan Technology",
        description: "AI-driven automation services — intelligent workflow automation, RPA & process optimisation for Indian enterprises.",
        url: "https://kiaantechnology.com/services/ai-automation",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "AI Automation Services - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI Automation Services India | Kiaan Technology",
        description: "AI-driven automation: intelligent workflow automation, RPA & process optimisation for Indian enterprises.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function AIAutomationPage() {
    const data = solutionsData['ai-automation'];
    return <><NicheServicePage {...data} slug="services/ai-automation" /><AIROICalculatorCTA /></>;
}
