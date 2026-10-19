"use client";

import { usePathname } from 'next/navigation';

export default function CanonicalLink() {
    const pathname = usePathname();
    // Normalize path to exclude trailing slashes
    const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
    const canonicalUrl = `https://kiaantechnology.com${cleanPath}`;

    return (
        <link rel="canonical" href={canonicalUrl} />
    );
}
