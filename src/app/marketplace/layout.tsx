import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Marketplace | Enterprise Source Code & Licenses — Kiaan Technology',
  description:
    'Browse production-grade enterprise software packages from Kiaan Technology. Explore source-code licensing options across healthcare, real estate, ERP, HRM, and more.',
  openGraph: {
    title: 'Software Marketplace | Enterprise Source Code & Licenses — Kiaan Technology',
    description:
      'Browse production-grade enterprise software packages with transparent licensing, verified deliverables, and direct engineering support from Kiaan Technology.',
    url: 'https://kiaantechnology.com/marketplace/',
    siteName: 'Kiaan Technology',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Marketplace | Kiaan Technology',
    description:
      'Explore enterprise source-code packages with verified deliverables and professional licensing from Kiaan Technology.',
  },
  alternates: {
    canonical: 'https://kiaantechnology.com/marketplace/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://kiaantechnology.com/marketplace/#webpage',
      url: 'https://kiaantechnology.com/marketplace/',
      name: 'Software Marketplace | Kiaan Technology',
      description:
        'Browse enterprise software packages with source-code licensing from Kiaan Technology.',
      breadcrumb: {
        '@id': 'https://kiaantechnology.com/marketplace/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://kiaantechnology.com/marketplace/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://kiaantechnology.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Marketplace',
          item: 'https://kiaantechnology.com/marketplace/',
        },
      ],
    },
  ],
};

export default function MarketplaceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
