"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import Script from 'next/script';

// Helper to format segment slug with merged route mapping
const formatSlug = (slug: string): string => {
    const customMappings: Record<string, string> = {
        'services': 'Services',
        'industries': 'Industries',
        'case-studies': 'Case Studies',
        'solutions': 'Solutions',
        'products': 'Products',
        'ai-products': 'AI Products',
        'demo': 'Demo Arena',
        'internship': 'Training & Internship',
        'healthcare-software': 'Healthcare Software Development',
        'fintech-software': 'Fintech Software Development',
        'retail-technology': 'Retail Technology',
        'custom-software-development': 'Custom Software Development',
        'saas-development': 'SaaS Development',
        'ai-automation': 'AI & Automation',
        'web-development': 'Web Development',
        'mobile-app-development': 'Mobile App Development',
        'erp-crm-solutions': 'ERP & CRM Solutions',
        'study-first-info-crm': 'Study First Info CRM',
        'healthsakhi-ai': 'HealthSakhi AI',
        'pgx-payment-gateway': 'PGX Payment Gateway',
        'ui-ux': 'UI/UX Design',
        'hrm': 'HRM Solutions',
        'pos': 'POS Solutions',
        'about': 'About Us',
        'why-us': 'Why Us',
        'it-company-indore': 'IT Company in Indore',
        'software-development-company-indore': 'Software Development Company in Indore',
        'saas-development-company-indore': 'SaaS Development Company in Indore',
        'web-development-company-indore': 'Web Development Company in Indore',
        'software-development-company-india': 'Software Development Company in India',
        'refund-policy': 'Refund Policy',
        'cancellation-policy': 'Cancellation Policy',
        'privacy': 'Privacy Policy',
        'terms': 'Terms of Service',
        'cookie-policy': 'Cookie Policy',
        'saas-subscription-policy': 'SaaS Subscription Policy',
        'security-policy': 'Security & Data Protection Policy',
        'grievance-policy': 'Grievance Redressal Policy',
    };

    if (customMappings[slug]) {
        return customMappings[slug];
    }

    return slug
        .replace(/[-_]+/g, ' ')
        .split(' ')
        .map(word => {
            const lower = word.toLowerCase();
            if (lower === 'and') return '&';
            if (lower === 'saas') return 'SaaS';
            if (lower === 'erp') return 'ERP';
            if (lower === 'crm') return 'CRM';
            if (lower === 'it') return 'IT';
            if (lower === 'ai') return 'AI';
            if (lower === 'lms') return 'LMS';
            if (lower === 'pos') return 'POS';
            if (lower === 'ats') return 'ATS';
            if (lower === 'hr') return 'HR';
            if (lower === 'hris') return 'HRIS';
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
};

export function Breadcrumbs() {
    const pathname = usePathname();
    
    if (
        !pathname ||
        pathname === '/' ||
        pathname === '/about' ||
        pathname.startsWith('/about/') ||
        pathname === '/blog' ||
        pathname.startsWith('/blog/') ||
        pathname === '/demo' ||
        pathname.startsWith('/demo/') ||
        pathname === '/marketplace' ||
        pathname.startsWith('/marketplace/')
    ) {
        return null;
    }

    // Split path into segments and filter out empty strings
    const segments = pathname.split('/').filter(Boolean);

    // Build the items list for visual render and schema markup
    const nonNavigablePaths = new Set([
        '/global', '/industries', '/compare', '/podcast/embed',
        '/products/category', '/solutions/fintech', '/solutions/industry', '/tools'
    ]);

    const itemList: Array<Record<string, string | number>> = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kiaantechnology.com"
        }
    ];

    let currentPath = '';
    const breadcrumbItems = segments.map((segment, index) => {
        currentPath += `/${segment}`;
        const name = formatSlug(segment);
        const position = index + 2;
        
        // For the schema, define the full URL
        const schemaItem: Record<string, string | number> = {
            "@type": "ListItem",
            "position": position,
            "name": name
        };
        if (!nonNavigablePaths.has(currentPath)) {
            schemaItem.item = `https://kiaantechnology.com${currentPath}`;
        }
        itemList.push(schemaItem);

        const isLast = index === segments.length - 1;

        return {
            name,
            path: currentPath,
            isLast,
            isNavigable: !nonNavigablePaths.has(currentPath)
        };
    });

    return (
        <div className="relative z-40 bg-zinc-950/20 border-b border-zinc-900/50 py-3 mt-0">
            <div className="container mx-auto px-6 flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 flex-wrap gap-y-1">
                <Link href="/" className="hover:text-yellow-500 transition-colors flex items-center gap-1.5 py-1">
                    <Home size={12} className="text-zinc-400 group-hover:text-yellow-500" />
                    <span>Home</span>
                </Link>
                {breadcrumbItems.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                        <ChevronRight size={10} className="mx-2 text-zinc-700" />
                        {item.isLast || !item.isNavigable ? (
                            <span className="text-yellow-500 py-1 select-none">{item.name}</span>
                        ) : (
                            <Link href={item.path} className="hover:text-yellow-500 transition-colors py-1">
                                {item.name}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            
            {/* Dynamic Breadcrumb Schema Markup */}
            <Script
                id={`dynamic-breadcrumb-schema-${segments.join('-')}`}
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": itemList
                    })
                }}
            />
        </div>
    );
}
