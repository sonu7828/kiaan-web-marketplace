import type { Metadata } from "next";
import { NicheServicePage } from '@/components/NicheServicePage';
import { solutionsData } from '@/data/solutionsData';

export const metadata: Metadata = {
    title: "ERP & CRM Software Development India | Kiaan Technology",
    description: "Custom-built ERP & CRM software for Indian enterprises. Automate operations, sales workflows & customer engagement with Kiaan Technology. Request a free demo.",
    keywords: "ERP Software Development, Custom ERP Development, CRM Software Development Company, Enterprise Resource Planning Software, Business Process Automation, ERP Customization Services, CRM Implementation Services, Modular ERP Solutions",
    openGraph: {
        title: "ERP & CRM Software Development India | Kiaan Technology",
        description: "Custom-built ERP & CRM for Indian enterprises — automate operations, sales workflows & customer engagement.",
        url: "https://kiaantechnology.com/services/erp-crm-solutions",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "ERP CRM Software Development - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "ERP & CRM Software Development India | Kiaan Technology",
        description: "Custom ERP & CRM software for Indian enterprises — automate operations & customer engagement.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function ERPCRMPage() {
    const data = solutionsData['erp-crm'];
    return <NicheServicePage {...data} slug="services/erp-crm-solutions" />;
}
