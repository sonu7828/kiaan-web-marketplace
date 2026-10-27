import type { Metadata } from 'next';
import MarketplaceCartView from '@/components/marketplace/MarketplaceCartView';

export const metadata: Metadata = {
  title: 'Shopping Cart | Software Marketplace — Kiaan Technology',
  description:
    'Review your selected enterprise software packages, choose single or multi-deployment commercial licenses, and request verified source-code handover from Kiaan Technology.',
  alternates: {
    canonical: 'https://kiaantechnology.com/marketplace/cart/',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MarketplaceCartPage() {
  return <MarketplaceCartView />;
}
