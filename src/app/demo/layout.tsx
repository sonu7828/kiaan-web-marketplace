import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Software Demos | Business Software Solutions | Kiaan Technology',
  description:
    'Explore live software demos from Kiaan Technology across healthcare, real estate, CRM, finance, logistics, HR, education and other industries. Search ready-to-use software and request customization.',
  openGraph: {
    title: 'Live Software Demos | Business Software Solutions | Kiaan Technology',
    description:
      'Explore live software demos from Kiaan Technology across 15+ industries. Search ready-to-use software and request customization.',
    url: 'https://kiaantechnology.com/demo/',
    siteName: 'Kiaan Technology',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Software Demos | Kiaan Technology',
    description:
      'Explore 65+ ready-to-use live business software demos across healthcare, real estate, CRM, ERP, and more.',
  },
  alternates: {
    canonical: 'https://kiaantechnology.com/demo/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://kiaantechnology.com/demo/#webpage',
      url: 'https://kiaantechnology.com/demo/',
      name: 'Live Software Demos | Business Software Solutions | Kiaan Technology',
      description:
        'Explore live software demos from Kiaan Technology across healthcare, real estate, CRM, finance, logistics, HR, education and other industries.',
      breadcrumb: {
        '@id': 'https://kiaantechnology.com/demo/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://kiaantechnology.com/demo/#breadcrumb',
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
          name: 'Software Demos',
          item: 'https://kiaantechnology.com/demo/',
        },
      ],
    },
  ],
};

export default function DemoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
