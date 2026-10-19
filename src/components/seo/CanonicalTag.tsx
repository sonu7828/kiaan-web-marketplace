"use client";

import { usePathname } from 'next/navigation';
import React from 'react';

export const CanonicalTag = () => {
    const pathname = usePathname();
    const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    const metadataCanonicalPaths = new Set([
        '/book-demo',
        '/brand-style-guide',
        '/compare/custom-vs-off-the-shelf',
        '/glossary',
        '/hrm/weekly-outcomes',
        '/our-process',
        '/podcast',
        '/press',
        '/resources/saas-development-checklist',
        '/tools/ai-automation-roi-calculator',
        '/tools/software-outsourcing-vendor-scorecard',
        '/webinar',
    ]);
    const hasMetadataCanonical = metadataCanonicalPaths.has(cleanPath)
        || cleanPath.startsWith('/blog/')
        || /^\/podcast\/ep-[^/]+$/.test(cleanPath)
        || (cleanPath.startsWith('/resources/') && cleanPath !== '/resources/case-study-packs');

    if (hasMetadataCanonical) return null;

    const canonicalUrl = `https://kiaantechnology.com${cleanPath}`;

    return <link rel="canonical" href={canonicalUrl} />;
};
