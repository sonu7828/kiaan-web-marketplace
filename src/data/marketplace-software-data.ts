/**
 * ══════════════════════════════════════════════════════════════
 * KIAAN TECHNOLOGY — MARKETPLACE SOFTWARE DATASET
 * ══════════════════════════════════════════════════════════════
 * Placeholder data for the /marketplace/ storefront.
 * All prices are SAMPLE PLACEHOLDERS — not approved commercial rates.
 * All product details are illustrative examples for UI development.
 *
 * This file is completely independent from demo-software-data.ts.
 * ══════════════════════════════════════════════════════════════
 */

import type { LucideIcon } from 'lucide-react';
import {
  Home, Activity, Briefcase, Users, GraduationCap,
  ShoppingBag, Truck, Scale, Wrench, Stethoscope,
  Building2, LayoutGrid,
} from 'lucide-react';

// ═══════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════

export type ProductReadiness = 'full-stack' | 'frontend-only';

export interface MarketplaceProduct {
  /** Unique identifier */
  id: string;
  /** URL slug for /marketplace/[slug] */
  slug: string;
  /** Display name */
  name: string;
  /** One-line value proposition */
  headline: string;
  /** Industry category */
  category: string;
  /** Detailed description */
  description: string;
  /** Lucide icon reference */
  icon: LucideIcon;
  /** Gradient color from */
  colorFrom: string;
  /** Gradient color to */
  colorTo: string;
  /** Glow color rgba */
  glow: string;
  /** Technology stack tags */
  techStack: string[];
  /** Whether this is full-stack or frontend-only */
  readiness: ProductReadiness;
  /** Key features list */
  features: string[];
  /** What files are included — only list verified items */
  includedFiles: string[];
  /** System requirements */
  requirements: string[];
  /** External demo URL (if available) */
  demoUrl?: string;
  /** YouTube walkthrough URL (if available) */
  youtubeUrl?: string;
  /**
   * SAMPLE placeholder pricing in INR.
   * isSamplePrice is always true until management approves real prices.
   */
  pricing: {
    singleLicense: number;
    multiLicense: number;
    isSamplePrice: true;
  };
}

export interface MarketplaceCategory {
  name: string;
  slug: string;
  icon: LucideIcon;
}

// ═══════════════════════════════════════════════
// CATEGORIES
// ═══════════════════════════════════════════════

export const MARKETPLACE_CATEGORIES: MarketplaceCategory[] = [
  { name: 'All Software', slug: 'all', icon: LayoutGrid },
  { name: 'Property & Real Estate', slug: 'property', icon: Building2 },
  { name: 'Healthcare & Medical', slug: 'healthcare', icon: Stethoscope },
  { name: 'HR & Payroll', slug: 'hr', icon: Users },
  { name: 'Education & EdTech', slug: 'education', icon: GraduationCap },
  { name: 'Finance & Accounting', slug: 'finance', icon: Briefcase },
];

// ═══════════════════════════════════════════════
// PLACEHOLDER PRODUCT DATA
// These are illustrative samples for UI development.
// Real products will replace these after inventory audit.
// ═══════════════════════════════════════════════

export const MARKETPLACE_PRODUCTS: MarketplaceProduct[] = [
  {
    id: 'mp-001',
    slug: 'society-maintenance-management',
    name: 'Society Maintenance Management Software',
    headline: 'Complete housing society & gated community management platform',
    category: 'Property & Real Estate',
    description: 'Residential housing society and gated community platform for maintenance dues billing, visitor security passes, amenity booking, and resident communication.',
    icon: Home,
    colorFrom: '#6366f1',
    colorTo: '#3b82f6',
    glow: 'rgba(99, 102, 241, 0.25)',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    readiness: 'full-stack',
    features: [
      'Automated Maintenance Invoicing & Dues',
      'Digital Security Gate & Visitor Logs',
      'Clubhouse & Amenity Booking System',
      'Resident Helpdesk & Communication',
    ],
    includedFiles: [
      'Frontend Source (React + Tailwind CSS)',
      'Backend API (Node.js + Express)',
      'Database Configuration (MongoDB)',
      'Environment Setup Template (.env.example)',
    ],
    requirements: [
      'Node.js 18+ Runtime',
      'MongoDB 6+ Database',
      'npm or yarn package manager',
    ],
    pricing: { singleLicense: 24999, multiLicense: 49999, isSamplePrice: true },
  },
  {
    id: 'mp-002',
    slug: 'rental-property-management',
    name: 'Rental Property Management Software',
    headline: 'End-to-end rental lifecycle management for landlords & property managers',
    category: 'Property & Real Estate',
    description: 'Comprehensive rental property lifecycle management for landlords, property managers, and real estate firms with lease tracking, rent automation, and tenant communication.',
    icon: Building2,
    colorFrom: '#3b82f6',
    colorTo: '#06b6d4',
    glow: 'rgba(59, 130, 246, 0.25)',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    readiness: 'full-stack',
    features: [
      'Digital Lease Contract Builder',
      'Automated Rent Collection & Ledger',
      'Tenant Screening & KYC Module',
      'Maintenance Work Order Routing',
    ],
    includedFiles: [
      'Frontend Source (React + Tailwind CSS)',
      'Backend API (Node.js + Express)',
      'Database Configuration (MongoDB)',
      'Environment Setup Template (.env.example)',
    ],
    requirements: [
      'Node.js 18+ Runtime',
      'MongoDB 6+ Database',
      'npm or yarn package manager',
    ],
    pricing: { singleLicense: 24999, multiLicense: 49999, isSamplePrice: true },
  },
  {
    id: 'mp-003',
    slug: 'clinic-management-erp',
    name: 'Clinic & Hospital Management ERP',
    headline: 'Multi-specialty clinic management with patient records & billing',
    category: 'Healthcare & Medical',
    description: 'Full-featured healthcare management system for clinics, hospitals, and multi-specialty centers with patient records, appointment scheduling, billing, and inventory management.',
    icon: Stethoscope,
    colorFrom: '#10b981',
    colorTo: '#06b6d4',
    glow: 'rgba(16, 185, 129, 0.25)',
    techStack: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    readiness: 'full-stack',
    features: [
      'Electronic Patient Records (EMR)',
      'Appointment & Queue Management',
      'Pharmacy & Inventory Module',
      'Billing & Insurance Claims',
    ],
    includedFiles: [
      'Frontend Source (React + Tailwind CSS)',
      'Backend API (Node.js + Express)',
      'Database Schema & Migrations (MySQL)',
      'Environment Setup Template (.env.example)',
    ],
    requirements: [
      'Node.js 18+ Runtime',
      'MySQL 8+ Database',
      'npm or yarn package manager',
    ],
    pricing: { singleLicense: 29999, multiLicense: 59999, isSamplePrice: true },
  },
  {
    id: 'mp-004',
    slug: 'school-campus-management',
    name: 'School & Campus Management ERP',
    headline: 'End-to-end school administration, academics & parent communication',
    category: 'Education & EdTech',
    description: 'Comprehensive school management system covering student information, class scheduling, fee management, exam results, and parent communication portal.',
    icon: GraduationCap,
    colorFrom: '#f59e0b',
    colorTo: '#ef4444',
    glow: 'rgba(245, 158, 11, 0.25)',
    techStack: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    readiness: 'full-stack',
    features: [
      'Student Information System (SIS)',
      'Fee Management & Online Payment',
      'Exam & Report Card Generator',
      'Parent Communication Portal',
    ],
    includedFiles: [
      'Frontend Source (React + Tailwind CSS)',
      'Backend API (Node.js + Express)',
      'Database Schema & Migrations (MySQL)',
      'Environment Setup Template (.env.example)',
    ],
    requirements: [
      'Node.js 18+ Runtime',
      'MySQL 8+ Database',
      'npm or yarn package manager',
    ],
    pricing: { singleLicense: 19999, multiLicense: 39999, isSamplePrice: true },
  },
  {
    id: 'mp-005',
    slug: 'hrm-payroll-management',
    name: 'HRM & Payroll Management Software',
    headline: 'Complete HR lifecycle management with payroll, attendance & leaves',
    category: 'HR & Payroll',
    description: 'Enterprise human resource management system with employee onboarding, attendance tracking, leave management, payroll processing, and performance evaluation.',
    icon: Users,
    colorFrom: '#8b5cf6',
    colorTo: '#a855f7',
    glow: 'rgba(139, 92, 246, 0.25)',
    techStack: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    readiness: 'full-stack',
    features: [
      'Employee Onboarding & Directory',
      'Attendance & Biometric Integration',
      'Leave Management & Policies',
      'Payroll Processing & Payslips',
    ],
    includedFiles: [
      'Frontend Source (React + Tailwind CSS)',
      'Backend API (Node.js + Express)',
      'Database Schema & Migrations (MySQL)',
      'Environment Setup Template (.env.example)',
    ],
    requirements: [
      'Node.js 18+ Runtime',
      'MySQL 8+ Database',
      'npm or yarn package manager',
    ],
    pricing: { singleLicense: 24999, multiLicense: 49999, isSamplePrice: true },
  },
  {
    id: 'mp-006',
    slug: 'accounting-gst-inventory',
    name: 'Business Accounting & GST Inventory',
    headline: 'Comprehensive accounting, invoicing & GST-compliant inventory management',
    category: 'Finance & Accounting',
    description: 'Full-featured accounting software with GST-compliant invoicing, inventory management, purchase orders, expense tracking, and financial reporting dashboards.',
    icon: Briefcase,
    colorFrom: '#14b8a6',
    colorTo: '#0ea5e9',
    glow: 'rgba(20, 184, 166, 0.25)',
    techStack: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    readiness: 'full-stack',
    features: [
      'GST-Compliant Invoicing & Billing',
      'Inventory & Stock Management',
      'Purchase Order Workflow',
      'Financial Reports & Dashboard',
    ],
    includedFiles: [
      'Frontend Source (React + Tailwind CSS)',
      'Backend API (Node.js + Express)',
      'Database Schema & Migrations (MySQL)',
      'Environment Setup Template (.env.example)',
    ],
    requirements: [
      'Node.js 18+ Runtime',
      'MySQL 8+ Database',
      'npm or yarn package manager',
    ],
    pricing: { singleLicense: 19999, multiLicense: 39999, isSamplePrice: true },
  },
];

// ═══════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════

/** Get all unique category names from current products */
export function getActiveCategories(): string[] {
  const cats = new Set(MARKETPLACE_PRODUCTS.map(p => p.category));
  return Array.from(cats);
}

/** Find a product by its slug */
export function getProductBySlug(slug: string): MarketplaceProduct | undefined {
  return MARKETPLACE_PRODUCTS.find(p => p.slug === slug);
}

/** Get all product slugs (required for static export generateStaticParams) */
export function getAllProductSlugs(): string[] {
  return MARKETPLACE_PRODUCTS.map(p => p.slug);
}

/** Total product count */
export const totalMarketplaceProducts = MARKETPLACE_PRODUCTS.length;

/** Format INR price */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
