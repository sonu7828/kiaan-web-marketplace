'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { MarketplaceProduct, getProductBySlug } from '@/data/marketplace-software-data';

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  headline: string;
  category: string;
  readiness: 'full-stack' | 'frontend-only';
  licenseTier: 'single' | 'multi';
  price: number;
  techStack: string[];
  addedAt: number;
}

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isHydrated: boolean;
  addToCart: (product: MarketplaceProduct, licenseTier?: 'single' | 'multi') => void;
  removeFromCart: (productId: string) => void;
  toggleCart: (product: MarketplaceProduct, licenseTier?: 'single' | 'multi') => boolean;
  isInCart: (productId: string) => boolean;
  updateLicense: (productId: string, tier: 'single' | 'multi') => void;
  clearCart: () => void;
  lastAdded: CartItem | null;
  clearLastAdded: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'kiaan_marketplace_cart_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [lastAdded, setLastAdded] = useState<CartItem | null>(null);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage whenever items change (after initial hydration)
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items, isHydrated]);

  const addToCart = (product: MarketplaceProduct, licenseTier: 'single' | 'multi' = 'single') => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.productId === product.id);
      const price =
        licenseTier === 'single'
          ? product.pricing.singleLicense
          : product.pricing.multiLicense;

      const newItem: CartItem = {
        productId: product.id,
        slug: product.slug,
        name: product.name,
        headline: product.headline,
        category: product.category,
        readiness: product.readiness,
        licenseTier,
        price,
        techStack: product.techStack,
        addedAt: Date.now(),
      };

      setLastAdded(newItem);

      if (existingIndex > -1) {
        // Update license tier and price if already in cart
        const updated = [...prev];
        updated[existingIndex] = newItem;
        return updated;
      }
      return [...prev, newItem];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  /**
   * Toggles product in cart. Returns true if added, false if removed.
   */
  const toggleCart = (product: MarketplaceProduct, licenseTier: 'single' | 'multi' = 'single'): boolean => {
    const exists = items.some((i) => i.productId === product.id);
    if (exists) {
      removeFromCart(product.id);
      return false;
    } else {
      addToCart(product, licenseTier);
      return true;
    }
  };

  const isInCart = (productId: string): boolean => {
    return items.some((i) => i.productId === productId);
  };

  const updateLicense = (productId: string, tier: 'single' | 'multi') => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.productId !== productId) return item;
        const product = getProductBySlug(item.slug);
        const newPrice = product
          ? tier === 'single'
            ? product.pricing.singleLicense
            : product.pricing.multiLicense
          : item.price;
        return {
          ...item,
          licenseTier: tier,
          price: newPrice,
        };
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const clearLastAdded = () => {
    setLastAdded(null);
  };

  const itemCount = items.length;

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  const value = {
    items,
    itemCount,
    subtotal,
    isHydrated,
    addToCart,
    removeFromCart,
    toggleCart,
    isInCart,
    updateLicense,
    clearCart,
    lastAdded,
    clearLastAdded,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
