import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { SaaSProductTemplate } from '@/components/SaaSProductTemplate';
import { businessCompanyData } from '@/data/businessCompanyData';
import { accountingFinanceData } from '@/data/accountingFinanceData';
import { salesMarketingData } from '@/data/salesMarketingData';
import { customerSupportData } from '@/data/customerSupportData';
import { retailInventoryData } from '@/data/retailInventoryData';
import { healthcareClinicData } from '@/data/healthcareClinicData';
import { realEstateData } from '@/data/realEstateData';
import { logisticsFleetData } from '@/data/logisticsFleetData';
import { educationData } from '@/data/educationData';
import { constructionFieldData } from '@/data/constructionFieldData';
import { legalComplianceData } from '@/data/legalComplianceData';
import { aiAutomationData } from '@/data/aiAutomationData';

const allSaaSData = {
    ...businessCompanyData,
    ...accountingFinanceData,
    ...salesMarketingData,
    ...customerSupportData,
    ...retailInventoryData,
    ...healthcareClinicData,
    ...realEstateData,
    ...logisticsFleetData,
    ...educationData,
    ...constructionFieldData,
    ...legalComplianceData,
    ...aiAutomationData
};

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = allSaaSData[slug];

    if (!product) {
        return {
            title: 'Product Not Found | Kiaan Enterprise',
        };
    }

    return {
        title: product.metaTitle || `${product.title} | Kiaan Enterprise Software`,
        description: product.description,
        keywords: [product.mainKeyword, ...product.keywords, 'Enterprise SaaS', 'Kiaan Technology'],
    };
}

export default async function SaaSProductPage({ params }: Props) {
    const { slug } = await params;
    const product = allSaaSData[slug];

    if (!product) {
        notFound();
    }

    return <SaaSProductTemplate data={product} />;
}

// Optional: Pre-generate paths for these pages for better performance
export async function generateStaticParams() {
    return Object.keys(allSaaSData).map((slug) => ({
        slug: slug,
    }));
}

// Tell Next.js: if a slug is NOT in generateStaticParams(), return 404 (don't crash)
export const dynamicParams = false;
