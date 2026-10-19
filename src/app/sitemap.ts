import { MetadataRoute } from 'next';
import { caseStudiesData } from '@/data/caseStudiesData';
import { blogData } from '@/data/blogData';
import { resources } from '@/data/resourcesData';
import { podcastEpisodes } from '@/data/podcastData';
import { internshipProgramsData } from '@/data/InternshipProgramData';
import { saasCategories, solutionCategories } from '@/data/navigation';
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

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kiaantechnology.com';
    const entry = (route: string, priority = 0.7, changeFrequency: 'weekly' | 'monthly' = 'monthly') => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency,
        priority
    });

    // Core static routes
    const coreRoutes = [
        '',
        '/about',
        '/contact',
        '/pricing',
        '/resources',
        '/demo',
        '/schedule',
        '/privacy',
        '/terms',
        '/why-us',
        '/start-project',
        '/global/usa',
        '/global/uk',
        '/global/mena',
        '/ai-products',
        '/architecture-audit',
        '/blog',
        '/crm',
        '/erp',
        '/hrm',
        '/pos',
        '/methodology',
        '/software-development-company-india',
        '/software-development-company-indore',
        '/saas-development-company-indore',
        '/web-development-company-indore',
        '/it-company-indore'
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8
    }));

    // Service routes
    const services = [
        '/services',
        '/services/ai-automation',
        '/services/custom-software-development',
        '/services/erp-crm-solutions',
        '/services/mobile-app-development',
        '/services/saas-development',
        '/services/web-development'
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9
    }));

    // Solutions routes
    const solutions = [
        '/solutions',
        '/solutions/automotive',
        '/solutions/cloud-infrastructure',
        '/solutions/education',
        '/solutions/fintech/algorithmic-trading',
        '/solutions/fintech/secure-banking',
        '/solutions/hospitality',
        '/solutions/industry/healthcare',
        '/solutions/industry/real-estate',
        '/solutions/industry/automotive',
        '/solutions/industry/finance',
        '/solutions/industry/education',
        '/solutions/industry/logistics',
        '/solutions/industry/retail',
        '/solutions/industry/hospitality',
        '/solutions/industry/professional',
        '/solutions/legacy-modernization',
        '/solutions/logistics',
        '/solutions/professional',
        '/solutions/real-estate',
        '/solutions/ui-ux'
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8
    }));

    // Industries routes
    const industries = [
        '/industries/fintech-software',
        '/industries/healthcare-software',
        '/industries/healthcare-software/patient-portal',
        '/industries/retail-technology'
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8
    }));

    // Case Studies routes
    const caseStudiesRoot = {
        url: `${baseUrl}/case-studies`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9
    };

    const caseStudies = caseStudiesData.map(study => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7
    }));

    const verifiedPublicRoutes = [
        '/affiliate-program', '/book-demo', '/compare/custom-vs-off-the-shelf',
        '/day-in-the-life', '/founder-intro', '/industry-events', '/internship',
        '/our-process', '/partner-program', '/partners', '/podcast', '/press',
        '/products', '/referral', '/referral-agency-partnerships',
        '/resources/saas-development-checklist', '/tools/ai-automation-roi-calculator',
        '/tools/software-outsourcing-vendor-scorecard', '/video-testimonials',
        '/webinar', '/white-label-partnership'
    ].map(route => entry(route, 0.7, 'weekly'));

    const blogs = blogData.map(post => entry(`/blog/${post.slug}`));
    const resourcePages = resources.map(resource => entry(`/resources/${resource.slug}`));
    const podcasts = podcastEpisodes.map(episode => entry(`/podcast/${episode.id}`));
    const internships = Object.keys(internshipProgramsData).map(slug => entry(`/internship/${slug}`));

    const allProducts = {
        ...businessCompanyData, ...accountingFinanceData, ...salesMarketingData,
        ...customerSupportData, ...retailInventoryData, ...healthcareClinicData,
        ...realEstateData, ...logisticsFleetData, ...educationData,
        ...constructionFieldData, ...legalComplianceData, ...aiAutomationData
    };
    const products = Object.keys(allProducts).map(slug => entry(`/products/${slug}`));

    const generateSlug = (value: string) => value.toLowerCase()
        .replace(/\s+/g, '-').replace(/[()]/g, '').replace(/&/g, '')
        .replace(/\//g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
    const productCategories = [...saasCategories, ...solutionCategories]
        .map(category => generateSlug(category.title))
        .filter((slug, index, values) => values.indexOf(slug) === index)
        .map(slug => entry(`/products/category/${slug}`));

    const entries = [
        ...coreRoutes,
        ...services,
        ...solutions,
        ...industries,
        caseStudiesRoot,
        ...caseStudies,
        ...verifiedPublicRoutes,
        ...blogs,
        ...resourcePages,
        ...podcasts,
        ...internships,
        ...products,
        ...productCategories
    ];

    return Array.from(new Map(entries.map(item => [item.url, item])).values());
}
