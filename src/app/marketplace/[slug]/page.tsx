import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getProductBySlug,
  getAllProductSlugs,
  MARKETPLACE_PRODUCTS,
} from '@/data/marketplace-software-data';
import ProductDetailClient from '@/components/marketplace/ProductDetailClient';

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return {
      title: 'Product Not Found — Kiaan Software Marketplace',
    };
  }

  const title = `${product.name} | Source Code & Commercial License — Kiaan Technology`;
  const description = `${product.headline}. Explore verified full-stack architecture, deliverables, and transparent commercial licensing from Kiaan Technology.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://kiaantechnology.com/marketplace/${product.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://kiaantechnology.com/marketplace/${product.slug}/`,
      siteName: 'Kiaan Technology',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // JSON-LD structured data for SoftwareApplication / Product
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    headline: product.headline,
    description: product.description,
    applicationCategory: product.category,
    operatingSystem: 'Cross-platform (Node.js, Web)',
    offers: {
      '@type': 'Offer',
      price: product.pricing.singleLicense,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'Organization',
      name: 'Kiaan Technology',
      url: 'https://kiaantechnology.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient slug={product.slug} />
    </>
  );
}
