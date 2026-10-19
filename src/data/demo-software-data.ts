/**
 * ══════════════════════════════════════════════════════════════
 * KIAAN TECHNOLOGY — DEMO ARENA SOFTWARE DATASET
 * ══════════════════════════════════════════════════════════════
 * Canonical data source for the /demo/ marketplace page.
 * Extracted from the original monolithic page.tsx.
 *
 * 86 live demo entries · 15 normalized public categories
 * ══════════════════════════════════════════════════════════════
 */

import type { LucideIcon } from 'lucide-react';
import {
  Activity, Home, Car, ShoppingBag, Truck, DollarSign,
  Utensils, Briefcase, Shield, Users, ClipboardList,
  MousePointer2, Layers, Cpu, Calendar, Settings,
  CheckSquare, CheckCircle2, HardHat, GraduationCap, Pencil, MessageSquare,
  // Sidebar category icons
  LayoutGrid, Stethoscope, Building2, BarChart3, Landmark,
  Users2, Scale, Hammer, PartyPopper, Dumbbell, Sprout,
  Boxes, HeartHandshake,
  // Additional icons for new software
  Plane, Trophy, Shirt, ShoppingCart, Wrench, Disc
} from 'lucide-react';

// ═══════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════

export interface DetailedFeature {
  title: string;
  description: string;
}

export interface HowItWorksStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  infrastructure: string[];
  integrations: string[];
}

export interface DemoSoftware {
  id: number;
  section: string;
  name: string;
  category: string;
  normalizedCategory: string;
  desc: string;
  link: string;
  youtube: string;
  color: string;
  glow: string;
  icon: LucideIcon;
  type: string;
  status: string;
  features: string[];
  detailedFeatures: DetailedFeature[];
  howItWorks: HowItWorksStep[];
  topSelling: boolean;
  techStack: TechStack;
  hasCredentials?: boolean;
  credentials?: { password: string; roles: { title: string; email: string }[] };
  documentUrl?: string;
  documentName?: string;
}

export interface CategoryConfig {
  name: string;
  slug: string;
  icon: LucideIcon;
}

// ═══════════════════════════════════════════════
// CATEGORY NORMALIZATION
// ═══════════════════════════════════════════════

const SECTION_CATEGORY_MAP: Record<string, string> = {
  property: 'Property & Real Estate',
  healthcare: 'Healthcare & Medical',
  crm: 'CRM & Sales',
  accounting: 'Finance & Accounting',
  insurance: 'Finance & Accounting',
  logistics: 'Logistics & Fleet',
  hrm: 'HR & Employee',
  education: 'Education & EdTech',
  erp: 'ERP & Business Operations',
  legal: 'Legal & Compliance',
  construction: 'Construction & Field Service',
  booking: 'Events & Entertainment',
  sports: 'Sports & Fitness',
  salon: 'Retail & Specialized',
  service: 'Business Services',
  agriculture: 'Agriculture & Farming',
};

/** Per-item overrides where section doesn't match the correct normalized category */
const ITEM_CATEGORY_OVERRIDES: Record<number, string> = {
  56: 'Business Services', // Export Management Software — not "Retail & Specialized"
};

function normalizeCategory(section: string, id: number): string {
  return ITEM_CATEGORY_OVERRIDES[id] || SECTION_CATEGORY_MAP[section] || 'Other';
}

// ═══════════════════════════════════════════════
// SIDEBAR CATEGORIES (15 + "All Software")
// ═══════════════════════════════════════════════

export const SIDEBAR_CATEGORIES: CategoryConfig[] = [
  { name: 'All Software', slug: 'all', icon: LayoutGrid },
  { name: 'Property & Real Estate', slug: 'property', icon: Building2 },
  { name: 'HR & Employee', slug: 'hr', icon: Users2 },
  { name: 'Healthcare & Medical', slug: 'healthcare', icon: Stethoscope },
  { name: 'CRM & Sales', slug: 'crm', icon: BarChart3 },
  { name: 'Finance & Accounting', slug: 'finance', icon: Landmark },
  { name: 'Logistics & Fleet', slug: 'logistics', icon: Truck },
  { name: 'Education & EdTech', slug: 'education', icon: GraduationCap },
  { name: 'ERP & Business Operations', slug: 'erp', icon: Boxes },
  { name: 'Legal & Compliance', slug: 'legal', icon: Scale },
  { name: 'Construction & Field Service', slug: 'construction', icon: Hammer },
  { name: 'Events & Entertainment', slug: 'events', icon: PartyPopper },
  { name: 'Sports & Fitness', slug: 'sports', icon: Dumbbell },
  { name: 'Retail & Specialized', slug: 'retail', icon: ShoppingBag },
  { name: 'Business Services', slug: 'services', icon: HeartHandshake },
  { name: 'Agriculture & Farming', slug: 'agriculture', icon: Sprout },
];

// ═══════════════════════════════════════════════
// RAW SOFTWARE DATA (86 entries)
// ═══════════════════════════════════════════════

interface RawSoftware extends Omit<DemoSoftware, 'normalizedCategory'> {}

const rawSoftwareList: RawSoftware[] = [
  // ────────────── PROPERTY & REAL ESTATE (9) ──────────────
  {
    id: 223, section: 'property', name: 'Society Maintenance Management Software',
    category: 'Property / Real Estate / Rental Management',
    desc: 'Residential housing society and gated community platform for maintenance dues billing, visitor security passes, and amenity booking.',
    link: 'https://society-maintenance-service.kiaansoftwaredemo.shop', youtube: 'https://youtu.be/7lcNzVhZQQQ?si=Ya1g7aMpYBrQKZew', documentUrl: '/documents/demo-docs/society-maintenance-management-software.docx', documentName: 'Society Maintenance Management Software Specification',
    color: 'from-indigo-500 to-blue-600', glow: 'rgba(99, 102, 241, 0.4)', icon: Home, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Automated Maintenance Invoicing', 'Guard Gatepass & Visitor Logs', 'Clubhouse & Amenity Booking'],
    detailedFeatures: [
      { title: 'Maintenance Invoicing & Dues', description: 'Automated monthly/quarterly maintenance bill generation with late fee rules and UPI payment gateway.' },
      { title: 'Digital Security Gate', description: 'Visitor pre-approvals, delivery boy verification codes, and domestic staff attendance tracking.' },
      { title: 'Resident Helpdesk & Polls', description: 'Lodge plumbing/electrical maintenance tickets and vote in society AGM resolutions digitally.' }
    ],
    howItWorks: [
      { icon: Home, title: 'Setup Society, Flats & Resident Registry', description: 'Configure towers, flat units, owner/tenant profiles, domestic staff, and allocated vehicle parking slots.' },
      { icon: DollarSign, title: 'Automated Maintenance Invoicing & Dues', description: 'Auto-generate monthly maintenance dues, send instant WhatsApp/SMS bills with UPI QR codes, and track payment ledgers.' },
      { icon: Shield, title: 'Digital Gate Security & Amenity Operations', description: 'Guards verify visitors via digital passcodes while residents book clubhouses, tennis courts, and raise maintenance tickets.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'WhatsApp API'] }
  },
  {
    id: 216, section: 'property', name: 'Rental Property Management Software',
    category: 'Property / Real Estate / Rental Management',
    desc: 'End-to-end rental property lifecycle management for landlords, property managers, and real estate firms with lease tracking and rent automation.',
    link: 'https://real-estate-property.kiaansoftwaredemo.shop/', youtube: 'https://youtu.be/MWlpy3y1g8o?si=IYQKHPqq8nthvD8J', documentUrl: '/documents/demo-docs/rental-property-management-software.docx', documentName: 'Rental Property Management Software Specification',
    color: 'from-blue-500 to-cyan-500', glow: 'rgba(59, 130, 246, 0.4)', icon: Home, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Digital Lease Contract Builder', 'Automated Rent Collection', 'Maintenance Ticket System'],
    detailedFeatures: [
      { title: 'Lease Contract Builder', description: 'Customizable tenancy agreement templates with automatic rent escalation clauses and digital signatures.' },
      { title: 'Automated Rent Ledger', description: 'Auto-generates monthly rent entries, tracks payments/dues, and sends overdue reminders via SMS and email.' },
      { title: 'Tenant Screening Module', description: 'Verify applicant identity, previous landlord references, employment letter, and credit background check.' }
    ],
    howItWorks: [
      { icon: Building2, title: 'Portfolio & Unit Configuration', description: 'Register buildings, floor plans, individual flats, commercial spaces, and set rental pricing with deposit policies.' },
      { icon: Users, title: 'Digital Tenant Onboarding & E-Lease', description: 'Screen tenant applicants, upload identity KYC documents, and generate digital lease contracts with auto-escalation clauses.' },
      { icon: DollarSign, title: 'Automated Rent Invoicing & Work Orders', description: 'Schedule monthly rent ledgers, auto-dispatch overdue notices, process online payments, and route maintenance work orders.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'SMS API'] }
  },
  {
    id: 202, section: 'property', name: 'Real Estate CRM Software',
    category: 'Property / Real Estate / Rental Management',
    desc: 'Real estate lead management and property listing CRM for brokers, developers, and agencies with follow-up automation and site visit scheduling.',
    link: 'https://property-ui.kiaansoftwaredemo.shop/#/login', youtube: 'https://youtu.be/Y_O3rMIPO64?si=CW9UdJ6HU6kN6dBH', documentUrl: '/documents/demo-docs/real-estate-crm-software.docx', documentName: 'Real Estate CRM Software Specification',
    color: 'from-emerald-500 to-cyan-600', glow: 'rgba(16, 185, 129, 0.4)', icon: Home, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Property Listing Showcase', 'Buyer Lead Pipeline', 'Site Visit Calendar'],
    detailedFeatures: [
      { title: 'Multi-Channel Lead Capture', description: 'Auto-import leads from 99acres, MagicBricks, website chatbot forms, and walk-in registrations.' },
      { title: 'Property Comparison Engine', description: 'Side-by-side carpet area, per-sqft price, floor plan, and amenity comparison for prospective buyers.' },
      { title: 'Brokerage & Commission Ledger', description: 'Track developer brokerage slabs, sub-broker splits, and payment milestone releases.' }
    ],
    howItWorks: [
      { icon: Home, title: 'Multi-Channel Property & Listing Setup', description: 'Upload property inventory, unit photos, pricing tiers, and sync availability across sales channels and web portals.' },
      { icon: Users, title: 'Lead Capture, Pipeline & Site Visits', description: 'Capture buyer inquiries, automatically score leads, and schedule guided site visits with real-time agent calendar sync.' },
      { icon: CheckCircle2, title: 'Deal Closing, E-Contracts & Commissions', description: 'Process reservation deposits, manage digital sale agreements, and automate commission splits for brokers.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['99acres API', 'WhatsApp API'] }
  },
  {
    id: 52, section: 'property', name: 'Landlord Property Management Software',
    category: 'Property / Real Estate / Rental Management',
    desc: 'Multi-property landlord dashboard for rental income tracking, tenant communication, lease renewal management, and expense monitoring.',
    link: 'https://property-peach-management.softwaredemolive.live', youtube: 'https://youtu.be/u00_ZxLSaiM', documentUrl: '/documents/demo-docs/landlord-property-management-software.docx', documentName: 'Landlord Property Management Software Specification',
    color: 'from-violet-500 to-purple-600', glow: 'rgba(139, 92, 246, 0.4)', icon: Home, type: 'Software', status: 'Live', topSelling: true,
    features: ['Multi-Property Dashboard', 'Rent vs Expense Tracking', 'Tenant Communication Hub'],
    detailedFeatures: [
      { title: 'Portfolio Overview Dashboard', description: 'View all properties, occupancy rates, rent collection status, and monthly P&L at a single glance.' },
      { title: 'Income & Expense Ledger', description: 'Track rental income, maintenance costs, property tax, insurance premiums, and net yield calculation.' },
      { title: 'Document Vault', description: 'Store property registration papers, tenant agreements, insurance policies, and tax receipts securely.' }
    ],
    howItWorks: [
      { icon: Home, title: 'Register Properties & Multi-Unit Portfolio', description: 'Centralize residential and commercial property assets, unit details, purchase valuations, and current occupancy.' },
      { icon: DollarSign, title: 'Automated Rental Ledgers & Expense Tracking', description: 'Track monthly rental deposits, property taxes, insurance premiums, utility bills, and monitor net operating ROI.' },
      { icon: CheckCircle2, title: 'Tenant Self-Service & Lease Renewals', description: 'Handle tenant maintenance requests with photo proof, track repair costs, and automate lease renewal notices.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'Cloud Storage'] }
  },
  {
    id: 30, section: 'property', name: 'Tenant Management Software',
    category: 'Property / Real Estate / Rental Management',
    desc: 'Tenant-focused portal for lease management, rent payment tracking, maintenance requests, and landlord-tenant communication.',
    link: 'https://property1.kiaansoftware.com', youtube: 'https://youtu.be/QcZrhCyk4KI?si=9R6SRxWD-7mAjLdE', documentUrl: '/documents/demo-docs/tenant-management-software.docx', documentName: 'Tenant Management Software Specification',
    color: 'from-teal-400 to-emerald-600', glow: 'rgba(20, 184, 166, 0.4)', icon: Users, type: 'Software', status: 'Live', topSelling: true,
    features: ['Online Rent Payment & Receipts', 'Maintenance Request Portal', 'Digital Lease Agreements'],
    detailedFeatures: [
      { title: 'Tenant Self-Service Portal', description: 'Tenants view lease terms, download rent receipts, and submit maintenance complaints online.' },
      { title: 'Rent Payment Automation', description: 'Integrated payment gateway for UPI, net banking, and auto-debit standing instructions.' },
      { title: 'Communication & Notices', description: 'Digital notice board for building announcements, water shutoff alerts, and parking rule updates.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Tenant Profile & KYC Verification', description: 'Register tenant credentials, upload identity proofs, verify employer references, and sign tenancy agreements digitally.' },
      { icon: DollarSign, title: 'One-Click Online Rent & Utility Payments', description: 'Receive automated rent alerts, pay securely via UPI, cards or net banking, and download instant GST payment receipts.' },
      { icon: Settings, title: 'Maintenance Desk & Notice Board', description: 'Lodge plumbing/electrical maintenance complaints with status tracking and receive digital building announcements.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Razorpay', 'Twilio'] }
  },
  {
    id: 59, section: 'property', name: 'Real Estate Rental Management Software',
    category: 'Property / Real Estate / Rental Management',
    desc: 'Enterprise rental management platform with multi-branch property portfolios, agent commission tracking, and advanced lease analytics.',
    link: 'http://propertythree.softwaredemolive.live', youtube: 'https://youtu.be/PLNUvCQUiSI', documentUrl: '/documents/demo-docs/real-estate-rental-management-software.docx', documentName: 'Real Estate Rental Management Software Specification',
    color: 'from-cyan-400 to-blue-600', glow: 'rgba(6, 182, 212, 0.4)', icon: Home, type: 'Software', status: 'Live', topSelling: true,
    features: ['Branch-Level Property Portfolio', 'Agent Commission Splits', 'Lease Expiry Dashboard'],
    detailedFeatures: [
      { title: 'Multi-Branch Hierarchy', description: 'Manage head office, regional branches, and field agents under a unified organizational tree.' },
      { title: 'Commission Automation', description: 'Calculate agent commissions on closed deals based on configurable tiered percentage slabs.' },
      { title: 'Advanced Lease Analytics', description: 'Lease expiry heatmaps, vacancy cost projections, and rent escalation trend forecasting.' }
    ],
    howItWorks: [
      { icon: Building2, title: 'Multi-Branch Property Portfolio Setup', description: 'Organize properties across regional branch offices, property managers, and field agents under a unified hierarchy.' },
      { icon: Briefcase, title: 'Lead Allocation & Agent Deal Tracking', description: 'Assign inquiries to branch agents, log physical site viewings, and track the complete deal progression pipeline.' },
      { icon: DollarSign, title: 'Lease Expiry Analytics & Revenue Splits', description: 'Monitor upcoming lease expirations, forecast vacancy rates, and disburse tiered commission payouts to agents.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'Email API'] }
  },
  {
    id: 76, section: 'property', name: 'Cloud Property Management Software',
    category: 'Property / Real Estate / Rental Management',
    desc: 'Cloud-native property management SaaS with role-based multi-tenant architecture, automated workflows, and white-label support.',
    link: 'https://propety5.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/cloud-property-management-software.docx', documentName: 'Cloud Property Management Software Specification',
    color: 'from-sky-400 to-blue-600', glow: 'rgba(56, 189, 248, 0.4)', icon: Home, type: 'Software', status: 'Live', topSelling: true,
    features: ['Multi-Tenant Cloud Architecture', 'Automated Workflow Engine', 'White-Label Branding'],
    detailedFeatures: [
      { title: 'Multi-Tenant SaaS Core', description: 'Each property management company gets an isolated workspace with custom branding and domain.' },
      { title: 'Workflow Automation', description: 'Trigger lease renewal emails, rent escalation notices, and inspection reminders automatically.' },
      { title: 'API-First Integration', description: 'REST APIs for connecting with accounting software, payment gateways, and IoT smart lock systems.' }
    ],
    howItWorks: [
      { icon: Cpu, title: 'Provision Multi-Tenant Cloud Workspace', description: 'Deploy an isolated cloud workspace with custom company branding, custom domains, and role-based staff permissions.' },
      { icon: Home, title: 'Bulk Import Properties & Lease Ledger', description: 'Seamlessly migrate properties, units, tenant histories, and active lease records using smart CSV/API data import.' },
      { icon: CheckCircle2, title: 'Automate Operations & Smart Lock IoT', description: 'Set automated rent collection workflows, trigger escalation notices, and integrate smart lock access codes.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Stripe', 'SendGrid'] }
  },


  {
    id: 244, section: 'property', name: 'Property Management Software',
    category: 'Property / Real Estate / Rental Management',
    desc: 'Modern residential and commercial property management system for portfolio occupancy, lease administration, rent collection, and repairs.',
    link: 'https://property-door.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/property-management-owner-finance.docx', documentName: 'Property Management Software Specification',
    color: 'from-indigo-500 to-violet-600', glow: 'rgba(99, 102, 241, 0.4)', icon: Building2, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Building & Unit Inventory Ledger', 'Automated Lease & Rent Invoicing', 'Tenant Maintenance Helpdesk'],
    detailedFeatures: [
      { title: 'Portfolio & Unit Occupancy Overview', description: 'Track entire property complexes, floor layouts, individual units, tenant assignments, and real-time occupancy statistics.' },
      { title: 'Automated Rent Billing & Ledgers', description: 'Auto-generate monthly rent invoices, calculate late fee penalties, and provide tenant payment history statements.' },
      { title: 'Maintenance Work Order Dispatch', description: 'Tenants submit maintenance requests with photos, property managers assign contractors, and track repair cost logs.' }
    ],
    howItWorks: [
      { icon: Building2, title: 'Property & Unit Registration', description: 'Configure building assets, floor plans, flat numbers, amenity allotments, and rental pricing parameters.' },
      { icon: Users, title: 'Tenant Onboarding & Lease Agreements', description: 'Upload tenant identity documents, configure lease dates, and set up automated monthly rent invoicing.' },
      { icon: DollarSign, title: 'Rent Reconciliation & Maintenance Resolution', description: 'Collect rent via digital gateways, dispatch repair contractors for issues, and track net property earnings.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'Twilio'] }
  },

  // ────────────── HR & EMPLOYEE (4) ──────────────
  {
    id: 226, section: 'hrm', name: 'Smart Workforce Management Software',
    category: 'HRM / Employee / HCM Software',
    desc: 'Intelligent workforce management platform with GPS geofencing mobile attendance, real-time field staff tracking, roster scheduling, and automated payroll.',
    link: 'https://hrms-attendance-location.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/employee-management-software.docx', documentName: 'Smart Workforce Management Software Specification',
    color: 'from-blue-600 to-indigo-600', glow: 'rgba(59, 130, 246, 0.4)', icon: Users, type: 'Web App', status: 'Live', topSelling: true,
    features: ['GPS Geofenced Attendance', 'Field Workforce Live Tracking', 'Dynamic Rosters & Payroll'],
    detailedFeatures: [
      { title: 'Geofenced Mobile Clock-In', description: 'Accurate attendance verification using smartphone GPS geofencing, selfie biometrics, and anti-spoofing controls.' },
      { title: 'Field Staff Live Tracking', description: 'Real-time location monitoring, client visit verification, route history playback, and automated travel allowance calculation.' },
      { title: 'Dynamic Shift & Roster Scheduling', description: 'Create rotating shifts, manage overtime policies, track break hours, and balance team availability with automated alerts.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Install & Setup Workforce App', description: 'Field and office employees install the mobile app with location verification and face check-in.' },
      { icon: Calendar, title: 'Manage Shifts & Live Locations', description: 'Supervisors assign daily tasks, track route movements in real-time, and manage instant leave requests.' },
      { icon: CheckCircle2, title: 'Auto-Sync Payroll & Reports', description: 'Export geoverified working hours, overtime, and field travel allowances directly into salary computation.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Google Maps API', 'Biometric SDK'] }
  },
  {
    id: 233, section: 'hrm', name: 'Payroll & HR Management Software',
    category: 'HRM / Employee / HCM Software',
    desc: 'Comprehensive cloud payroll automation and employee management system with automated salary disbursement, PF/ESI/TDS tax compliance, and self-service payslip portals.',
    link: 'https://payroll-demo.kiaansoftware.com', youtube: '',
    documentUrl: '/public/documents/demo-docs/payroll-hrm-employee-management.docx', documentName: 'Payroll & HR Management Software Specification',
    color: 'from-violet-500 to-indigo-600', glow: 'rgba(139, 92, 246, 0.4)', icon: Users, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Automated Salary Batch Processing', 'PF, ESI & TDS Statutory Compliance', 'Employee Self-Service Payslip Vault'],
    detailedFeatures: [
      { title: 'Salary Structure & Deductions', description: 'Configure basic pay, HRA, special allowances, PF, ESI, gratuity, and customized tax slabs effortlessly.' },
      { title: 'One-Click Payroll Run', description: 'Auto-calculate monthly wages based on biometric attendance, overtime, leave deductions, and bonus payouts.' },
      { title: 'Tax Declarations & Form 16', description: 'Digital investment proof submission, automated tax computation, and one-click bulk Form-16 PDF generation.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Define Salary Structures & Tax Slabs', description: 'Configure basic pay, HRA, special allowances, PF, ESI, gratuity, and custom tax brackets for various designations.' },
      { icon: Calendar, title: 'Sync Biometrics & Run Monthly Payroll', description: 'Import biometric and geo-attendance logs to calculate overtime, leave deductions, and compute payroll in one click.' },
      { icon: CheckCircle2, title: 'Automated Bank Payouts & Payslips', description: 'Generate direct NEFT/RTGS bank disbursement files and deliver password-protected digital payslips to employee vaults.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Direct Bank Transfer API', 'Income Tax Portal'] }
  },
  {
    id: 45, section: 'hrm', name: 'Employee Management Software',
    category: 'HRM / Employee / HCM Software',
    desc: 'Unified employee lifecycle management platform from hiring to exit with attendance biometrics, payroll automation, and performance appraisals.',
    link: 'https://employee-management-system.softwaredemolive.live', youtube: 'https://youtu.be/Y2P2uPCVO4Y', documentUrl: '/documents/demo-docs/employee-management-software.docx', documentName: 'Employee Management Software Specification',
    color: 'from-purple-500 to-pink-600', glow: 'rgba(168, 85, 247, 0.4)', icon: Users, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Biometric Attendance & GPS Tracking', 'Automated Payroll & Tax Filing', 'Employee Self-Service Portal'],
    detailedFeatures: [
      { title: 'Biometric & Geo-Attendance', description: 'Multi-mode attendance capturing via fingerprint, facial recognition, and GPS-based mobile check-in for field staff.' },
      { title: 'Payroll Processing Engine', description: 'Automatic salary computation with PF, ESI, TDS deductions, bonus calculations, and payslip generation.' },
      { title: 'Performance Management', description: 'KRA/KPI setup, quarterly reviews, 360-degree feedback, and bell curve normalization for appraisals.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Digital Employee Onboarding & Hierarchy', description: 'Build employee master profiles with document KYC, department tags, designation, and reporting manager hierarchy.' },
      { icon: Calendar, title: 'Biometric & Geo-Fenced Attendance', description: 'Capture staff check-ins via fingerprint, facial recognition or GPS mobile app with live shift roster scheduling.' },
      { icon: DollarSign, title: 'Performance Review & Salary Processing', description: 'Track quarterly KPI/KRA ratings, process monthly payroll with statutory compliance, and manage exit clearances.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Biometric SDK', 'Payment Gateway'] }
  },
  {
    id: 73, section: 'hrm', name: 'HR Management Software',
    category: 'HRM / Employee / HCM Software',
    desc: 'Strategic human resource management software for recruitment, employee engagement, training programs, and organizational development.',
    link: 'https://hrm.softwaredemolive.live', youtube: '', documentUrl: '/documents/demo-docs/hr-management-software.docx', documentName: 'HR Management Software Specification',
    color: 'from-fuchsia-500 to-purple-700', glow: 'rgba(192, 38, 211, 0.4)', icon: Briefcase, type: 'Software', status: 'Live', topSelling: true,
    features: ['Recruitment & ATS Pipeline', 'Training & Certification Tracker', 'Employee Engagement Surveys'],
    detailedFeatures: [
      { title: 'Applicant Tracking System', description: 'Post job openings, screen resumes, schedule interviews, and generate offer letters from a unified recruitment dashboard.' },
      { title: 'Learning & Development', description: 'Assign training modules, track certification completions, and manage skill-gap assessments for career growth.' },
      { title: 'Org Chart & Succession Planning', description: 'Visual organizational hierarchy with succession candidate mapping and leadership pipeline analytics.' }
    ],
    howItWorks: [
      { icon: Briefcase, title: 'Define HR Policies', description: 'Configure leave policies, shift rosters, probation rules, and exit formalities for the organization.' },
      { icon: Users, title: 'Recruit & Onboard', description: 'Publish job descriptions, shortlist candidates through ATS, and execute digital onboarding checklists.' },
      { icon: CheckCircle2, title: 'Engage & Retain Talent', description: 'Run engagement surveys, analyze attrition trends, and implement retention strategies.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['LinkedIn API', 'Email API'] }
  },

  // ────────────── CRM & SALES (5) ──────────────
  {
    id: 236, section: 'crm', name: 'WhatsApp CRM & Customer Management Software',
    category: 'Loan / Finance / Accounting / Sales',
    desc: 'Official WhatsApp Business API CRM featuring team shared inbox, automated broadcast campaigns, smart chatbots, deal pipeline tracking, and customer contact management.',
    link: 'https://whatsapp-crm.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/sales-crm-software.docx', documentName: 'WhatsApp CRM & Customer Management Software Specification',
    color: 'from-emerald-500 to-green-600', glow: 'rgba(34, 197, 94, 0.4)', icon: MessageSquare, type: 'Web App', status: 'Live', topSelling: true,
    features: ['WhatsApp Team Shared Inbox', 'Automated Drip & Broadcasts', 'No-Code Chatbot Workflows'],
    detailedFeatures: [
      { title: 'Multi-Agent Shared Inbox', description: 'Centralized WhatsApp number for multiple agents with role-based chats, quick replies, and internal notes.' },
      { title: 'Targeted Broadcast Campaigns', description: 'Send approved WhatsApp template notifications, promotional offers, and order alerts at scale with analytics.' },
      { title: 'Interactive Chatbot Builder', description: 'Automate FAQ replies, lead qualification forms, and routing to live human agents 24/7.' }
    ],
    howItWorks: [
      { icon: MessageSquare, title: 'Connect WhatsApp API', description: 'Link official WhatsApp Business account and invite team members to the shared console.' },
      { icon: ClipboardList, title: 'Engage & Broadcast', description: 'Launch segment campaigns, manage customer inquiries, and qualify incoming prospects.' },
      { icon: CheckCircle2, title: 'Track Deals & Retain', description: 'Sync chat conversations with CRM contact histories and close sales faster.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['WhatsApp Cloud API', 'Webhook Engine'] }
  },
  {
    id: 225, section: 'crm', name: 'Business CRM Software',
    category: 'Loan / Finance / Accounting / Sales',
    desc: 'Enterprise business CRM with AI-powered lead scoring, sales pipeline automation, customer 360° profiles, and revenue forecasting.',
    link: 'https://english-crm.kiaansoftware.com', youtube: 'https://youtu.be/LYcqlb6wg5Q',
    documentUrl: '/public/documents/demo-docs/enterprise-business-erp.docx', documentName: 'Business CRM Software Specification',
    color: 'from-amber-400 to-orange-500', glow: 'rgba(251, 191, 36, 0.4)', icon: Briefcase, type: 'Web App', status: 'Live', topSelling: true,
    features: ['AI Lead Scoring & Routing', 'Visual Sales Pipeline', 'Customer 360° View'],
    detailedFeatures: [
      { title: 'AI-Powered Lead Intelligence', description: 'Machine learning model scores inbound leads based on engagement signals, company fit, and conversion probability.' },
      { title: 'Drag-and-Drop Deal Pipeline', description: 'Visual Kanban board for managing deals through qualification, proposal, negotiation, and closed-won stages.' },
      { title: 'Revenue Forecasting Dashboard', description: 'Weighted pipeline projections, quota attainment tracking, and monthly/quarterly revenue trend charts.' }
    ],
    howItWorks: [
      { icon: Briefcase, title: 'Capture & Score Leads', description: 'Import leads from web forms, trade shows, and referrals; AI assigns priority scores automatically.' },
      { icon: ClipboardList, title: 'Manage Sales Pipeline', description: 'Move deals through custom stages, attach proposals, and set task reminders for follow-ups.' },
      { icon: DollarSign, title: 'Close & Forecast Revenue', description: 'Convert deals to customers, generate invoices, and analyze win/loss trends for forecasting.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Email API', 'Calendar API'] }
  },
  {
    id: 75, section: 'crm', name: 'Sales CRM Software',
    category: 'Loan / Finance / Accounting / Sales',
    desc: 'Sales-focused CRM platform for field sales teams with territory mapping, quotation builder, and real-time sales leaderboards.',
    link: 'https://sales-managment1.kiaansoftware.com', youtube: 'https://youtu.be/TN_GGroRzcM', documentUrl: '/documents/demo-docs/sales-crm-software.docx', documentName: 'Sales CRM Software Specification',
    color: 'from-orange-500 to-red-600', glow: 'rgba(249, 115, 22, 0.4)', icon: DollarSign, type: 'Software', status: 'Live', topSelling: true,
    features: ['Territory & Route Planning', 'Digital Quotation Builder', 'Sales Gamification Leaderboard'],
    detailedFeatures: [
      { title: 'Territory Management', description: 'Define sales territories by geography, assign field reps, and track coverage with GPS heatmaps.' },
      { title: 'Quotation & Proposal Engine', description: 'Build branded proposals with product catalogs, volume discounts, and digital acceptance workflows.' },
      { title: 'Gamification & Contests', description: 'Real-time leaderboards, sales target challenges, badges, and incentive payout dashboards.' }
    ],
    howItWorks: [
      { icon: DollarSign, title: 'Set Sales Targets', description: 'Define monthly/quarterly revenue targets by team, territory, and individual sales representative.' },
      { icon: MousePointer2, title: 'Track Field Activity', description: 'Field reps log client visits, check-in via GPS, and submit visit reports with photo evidence.' },
      { icon: CheckCircle2, title: 'Analyze & Optimize', description: 'Review conversion funnels, identify bottlenecks, and reallocate resources to high-potential territories.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Google Maps', 'WhatsApp API'] }
  },
  {
    id: 29, section: 'crm', name: 'Sales & Inventory Management Software',
    category: 'Loan / Finance / Accounting / Sales',
    desc: 'Unified sales order processing and inventory management system with barcode scanning, purchase orders, and multi-warehouse stock control.',
    link: 'https://product-selling.kiaansoftware.com', youtube: '',
    documentUrl: '/public/documents/demo-docs/service-sales-inventory-management.docx', documentName: 'Sales & Inventory Management Software Specification',
    color: 'from-lime-400 to-green-600', glow: 'rgba(132, 204, 22, 0.4)', icon: ShoppingBag, type: 'Software', status: 'Live', topSelling: true,
    features: ['Barcode Inventory Scanning', 'Purchase Order Automation', 'Multi-Warehouse Stock Sync'],
    detailedFeatures: [
      { title: 'Barcode & SKU Management', description: 'Generate and print barcodes for products, scan for instant stock lookup, and manage variant SKUs.' },
      { title: 'Purchase Order Workflow', description: 'Create POs, track supplier deliveries, manage goods received notes (GRN), and reconcile invoices.' },
      { title: 'Real-Time Stock Dashboard', description: 'Live inventory levels across warehouses with low-stock alerts and reorder point automation.' }
    ],
    howItWorks: [
      { icon: ShoppingBag, title: 'Product Catalog & Barcode SKU Setup', description: 'Catalog items with variants, batch numbers, tax rates, and generate printable barcode labels for inventory scanning.' },
      { icon: ClipboardList, title: 'Sales Order Processing & Invoicing', description: 'Generate POS receipts, wholesale sales orders, auto-deduct warehouse stock, and create GST-compliant tax invoices.' },
      { icon: Layers, title: 'Multi-Warehouse Sync & Purchase Orders', description: 'Monitor real-time inventory across branches, set automated low-stock reorder points, and reconcile supplier POs.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Barcode Scanner', 'Payment Gateway'] }
  },

  {
    id: 241, section: 'crm', name: 'CRM & Marketing Automation Software',
    category: 'CRM / Sales / Marketing Management',
    desc: 'Agentic CRM and marketing automation software for multi-channel lead capture, visual deal pipelines, email sequences, and customer analytics.',
    link: 'https://plus-hubspot-ui.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/hipaa-compliant-healthcare-crm.docx', documentName: 'CRM & Marketing Automation Software Specification',
    color: 'from-emerald-500 to-teal-600', glow: 'rgba(16, 185, 129, 0.4)', icon: BarChart3, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Kanban Sales Pipeline & Deals', 'Omnichannel Marketing Drips', 'Agentic Lead Scoring & Insights'],
    detailedFeatures: [
      { title: 'Visual Deal Pipeline & Stage Automation', description: 'Drag-and-drop opportunity cards across deal stages with automatic task triggers, SLA timers, and probability weighting.' },
      { title: 'Automated Email & Marketing Workflows', description: 'Build complex behavioral drip campaigns, personalized newsletters, and event-based triggers that nurture prospects hands-free.' },
      { title: 'Lead Scoring & Customer 360', description: 'Unified customer timeline displaying website visits, email opens, call notes, ticket history, and predictive buying signals.' }
    ],
    howItWorks: [
      { icon: BarChart3, title: 'Inbound Lead Capture & Segmentation', description: 'Ingest leads from forms, ads, and chat widgets into segmented lists categorized by industry, intent, and deal size.' },
      { icon: MessageSquare, title: 'Automated Drips & SDR Task Dispatch', description: 'Nurture prospects with targeted email sequences while generating calendar reminders for sales reps.' },
      { icon: CheckCircle2, title: 'Deal Closing & Revenue Attribution', description: 'Move qualified opportunities to closed-won, generate contracts, and evaluate marketing channel ROI.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['SendGrid', 'Twilio'] }
  },

  // ────────────── HEALTHCARE & MEDICAL (12) ──────────────
  {
    id: 22, section: 'healthcare', name: 'Physiotherapy Clinic Management Software',
    category: 'Healthcare / Clinic / Medical Software',
    desc: 'Physiotherapy, rehabilitation, and sports medicine clinic management with exercise prescription, progress tracking, and appointment scheduling.',
    link: 'https://deephysio-clinic.kiaansoftware.com', youtube: '', documentUrl: '/documents/demo-docs/physiotherapy-clinic-management-software.docx', documentName: 'Physiotherapy Clinic Management Software Specification',
    color: 'from-teal-400 to-emerald-600', glow: 'rgba(20, 184, 166, 0.4)', icon: Activity, type: 'Software', status: 'Live', topSelling: true,
    features: ['Exercise Prescription Builder', 'Patient Progress Timeline', 'Therapist Appointment Calendar'],
    detailedFeatures: [
      { title: 'Exercise Prescription Engine', description: 'Build custom rehab exercise plans with video demonstrations, sets/reps, and progression milestones.' },
      { title: 'Patient Recovery Tracker', description: 'Visual timeline of pain scores, range of motion measurements, and functional test results across sessions.' },
      { title: 'Multi-Therapist Scheduling', description: 'Book appointments by therapist specialty, treatment room, and equipment availability.' }
    ],
    howItWorks: [
      { icon: Activity, title: 'Patient Consultation & Pain Assessment', description: 'Record initial injury history, posture evaluations, pain visual analog scale (VAS), and functional mobility limits.' },
      { icon: ClipboardList, title: 'Custom Exercise Protocol Prescription', description: 'Build tailored rehabilitation plans with HD exercise videos, sets, reps, and treatment frequency milestones.' },
      { icon: CheckCircle2, title: 'Progress Tracking & Electronic Billing', description: 'Log session recovery notes, measure range-of-motion gains, and generate session packages or insurance invoices.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Calendar API', 'Payment Gateway'] }
  },
  {
    id: 203, section: 'healthcare', name: 'HIPAA Compliant Healthcare Software',
    category: 'Healthcare / Clinic / Medical Software',
    desc: 'HIPAA-compliant electronic health records (EHR) platform with patient portal, clinical documentation, and insurance claims processing.',
    link: 'http://msbi.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/hipaa-compliant-healthcare-software.docx', documentName: 'HIPAA Compliant Healthcare Software Specification',
    color: 'from-blue-500 to-cyan-500', glow: 'rgba(59, 130, 246, 0.4)', icon: Shield, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Encrypted EHR Records', 'Patient Self-Service Portal', 'Insurance Claims EDI'],
    detailedFeatures: [
      { title: 'HIPAA-Compliant EHR', description: 'AES-256 encrypted patient records with role-based access control, audit trails, and data retention policies.' },
      { title: 'Patient Portal', description: 'Patients view lab results, request prescription refills, message providers, and manage appointments online.' },
      { title: 'Claims Management', description: 'Electronic claims submission (EDI 837), real-time eligibility verification, and ERA payment posting.' }
    ],
    howItWorks: [
      { icon: Shield, title: 'Encrypted Patient Intake & Consent', description: 'Collect patient health history, digital HIPAA consents, and insurance details through secure AES-256 encrypted forms.' },
      { icon: ClipboardList, title: 'Clinical Encounters & Electronic Health Records', description: 'Document patient encounters with SOAP templates, ICD-10 diagnostic codes, lab test orders, and e-prescriptions.' },
      { icon: DollarSign, title: 'EDI Insurance Claims & Patient Portal', description: 'Submit electronic medical claims (EDI 837), track reimbursement statuses, and share lab reports via patient portal.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS HIPAA'], integrations: ['HL7 FHIR', 'Payment Gateway'] }
  },
  {
    id: 212, section: 'healthcare', name: 'Dental Clinic Management Software',
    category: 'Healthcare / Clinic / Medical Software',
    desc: 'Modern dental practice management software with interactive tooth charts, treatment planning, digital X-ray integration, and insurance billing.',
    link: 'https://dental-clinic.kiaansoftwaredemo.shop', youtube: 'https://youtu.be/5cffPUi9kHo?si=YtfKkxKCaTMSBR0u', documentUrl: '/documents/demo-docs/dental-clinic-management-software.docx', documentName: 'Dental Clinic Management Software Specification',
    color: 'from-cyan-400 to-teal-600', glow: 'rgba(34, 211, 238, 0.4)', icon: Activity, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Interactive Dental Chart', 'Treatment Plan Builder', 'Digital X-Ray Viewer'],
    detailedFeatures: [
      { title: 'Visual Tooth Chart', description: 'Interactive dental chart with per-tooth condition notes, treatment history, and planned procedures.' },
      { title: 'Treatment Planning Module', description: 'Create multi-visit treatment plans with procedure codes, estimated costs, and patient consent signatures.' },
      { title: 'Imaging Integration', description: 'View and annotate digital X-rays, intraoral photos, and 3D scans directly within patient records.' }
    ],
    howItWorks: [
      { icon: Activity, title: 'Interactive Dental Charting & Examination', description: 'Record tooth-by-tooth conditions, missing teeth, cavities, and periodontal pocket depths on a 3D dental chart.' },
      { icon: ClipboardList, title: 'Treatment Plan Builder & Cost Estimates', description: 'Create multi-visit dental procedure plans, attach digital X-rays/photos, and provide transparent cost estimates.' },
      { icon: DollarSign, title: 'Chair Scheduling, Billing & Dental Lab Orders', description: 'Allocate dental chairs to doctors, track custom crown/bridge lab orders, and collect payments with invoice receipts.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['DICOM Viewer', 'Payment Gateway'] }
  },
  {
    id: 67, section: 'healthcare', name: 'Dentist Management Software',
    category: 'Healthcare / Clinic / Medical Software',
    desc: 'Solo and group dental practice management with appointment booking, procedure tracking, inventory for dental supplies, and patient recall system.',
    link: 'http://dentist.softwaredemolive.live', youtube: 'https://youtu.be/X5ZWlXK5pEA?si=wmip1K2rpvluLr2n', documentUrl: '/documents/demo-docs/dentist-management-software.docx', documentName: 'Dentist Management Software Specification',
    color: 'from-emerald-400 to-teal-600', glow: 'rgba(52, 211, 153, 0.4)', icon: Activity, type: 'Software', status: 'Live', topSelling: true,
    features: ['Smart Appointment Scheduler', 'Dental Supply Inventory', 'Patient Recall Automation'],
    detailedFeatures: [
      { title: 'Appointment Scheduling', description: 'Chair-based scheduling with procedure duration estimation, doctor availability, and automated reminders.' },
      { title: 'Supply Chain Management', description: 'Track dental materials, instruments, disposables, and set auto-reorder levels with supplier management.' },
      { title: 'Patient Recall System', description: 'Automated 6-month checkup reminders, birthday greetings, and treatment follow-up notifications.' }
    ],
    howItWorks: [
      { icon: Calendar, title: 'Chair-Based Appointment Scheduling', description: 'Schedule patient visits by dentist specialization, chair availability, and estimated clinical procedure time.' },
      { icon: Activity, title: 'Clinical Treatment Notes & Supply Inventory', description: 'Document dental treatments, capture before-and-after photos, and track dental consumables with auto-reordering.' },
      { icon: CheckCircle2, title: 'Automated Patient Recalls & Invoicing', description: 'Trigger automated 6-month dental checkup reminders via SMS/WhatsApp and generate instant itemized receipts.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['SMS Gateway', 'Payment Gateway'] }
  },
  {
    id: 44, section: 'healthcare', name: 'Clinic Management Software',
    category: 'Healthcare / Clinic / Medical Software',
    desc: 'Modern multispecialty OPD clinic and doctor consultation management with digital e-prescriptions, queue management, and pharmacy billing.',
    link: 'https://clinic-pro.softwaredemolive.live', youtube: '',
    documentUrl: '/public/documents/demo-docs/clinic-management-software.docx', documentName: 'Clinic Management Software Specification',
    color: 'from-emerald-500 to-green-600', glow: 'rgba(16, 185, 129, 0.4)', icon: Activity, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Digital E-Prescriptions', 'OPD Token Queue System', 'Integrated Pharmacy & Billing'],
    detailedFeatures: [
      { title: 'Digital Prescription Writer', description: 'Doctors select medications from drug database with dosage, frequency, duration, and interaction warnings.' },
      { title: 'OPD Queue Management', description: 'Token-based patient queue display with estimated wait times and SMS notifications.' },
      { title: 'Pharmacy & Dispensing', description: 'Linked dispensary module that pulls prescription items, checks stock, and generates pharmacy bills.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Patient Registration & OPD Token Queue', description: 'Register walk-in and online patients, record vital signs, and assign digital queue tokens to doctor consultation rooms.' },
      { icon: Activity, title: 'Doctor Consultation & E-Prescriptions', description: 'Review medical history, record clinical diagnosis, and generate digital prescriptions from a drug database with dosage rules.' },
      { icon: DollarSign, title: 'Dispensary Billing & Diagnostic Orders', description: 'Auto-route prescriptions to the in-house pharmacy, order lab tests, and process consolidated OPD billing.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['WhatsApp API', 'Payment Gateway'] }
  },
  {
    id: 68, section: 'healthcare', name: 'Hospital Inventory Management Software',
    category: 'Healthcare / Clinic / Medical Software',
    desc: 'Hospital supply chain and medical inventory management system for pharmaceuticals, surgical equipment, and consumable tracking.',
    link: 'https://hopistal-inventry.softwaredemolive.live', youtube: 'https://youtu.be/pRsKBBtknXA', documentUrl: '/documents/demo-docs/hospital-inventory-management-software.docx', documentName: 'Hospital Inventory Management Software Specification',
    color: 'from-blue-400 to-indigo-600', glow: 'rgba(96, 165, 250, 0.4)', icon: Layers, type: 'Software', status: 'Live', topSelling: true,
    features: ['Medical Supply Chain Tracking', 'Expiry Date Monitoring', 'Department-Wise Consumption'],
    detailedFeatures: [
      { title: 'Pharmaceutical Inventory', description: 'Batch-wise medicine tracking with expiry alerts, FIFO dispensing, and controlled substance registers.' },
      { title: 'Equipment Asset Registry', description: 'Track medical devices, calibration schedules, AMC contracts, and depreciation for capital assets.' },
      { title: 'Consumption Analytics', description: 'Department-wise consumption reports, wastage analysis, and vendor performance scorecards.' }
    ],
    howItWorks: [
      { icon: Layers, title: 'Pharmaceutical & Medical Supply Receiving', description: 'Record incoming medicines and surgical equipment, verify batch expiry dates, and catalog stock under FIFO rules.' },
      { icon: ClipboardList, title: 'Department Requisitions & Ward Dispensing', description: 'Fulfill department material requests (ICU, OT, OPD, Emergency) with digital authorization and barcode tracking.' },
      { icon: CheckCircle2, title: 'Expiry Monitoring & Low-Stock Auto-PO', description: 'Receive proactive alerts for expiring batches, minimize waste, and generate automated purchase orders for low inventory.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Barcode Scanner', 'ERP Connector'] }
  },
  {
    id: 37, section: 'healthcare', name: "Women's Health & Wellness Management Software",
    category: 'Healthcare / Clinic / Medical Software',
    desc: 'Women-focused healthcare platform for OB/GYN clinics, fertility centers, prenatal care, and wellness programs with cycle tracking.',
    link: 'http://healthsakhis.kiaansoftware.com', youtube: '', documentUrl: '/documents/demo-docs/women-s-health-wellness-management-software.docx', documentName: "Women's Health & Wellness Management Software Specification",
    color: 'from-pink-400 to-rose-600', glow: 'rgba(244, 114, 182, 0.4)', icon: Activity, type: 'Software', status: 'Live', topSelling: true,
    features: ['Prenatal Care Timeline', 'Fertility Treatment Tracker', 'Cycle & Wellness Monitoring'],
    detailedFeatures: [
      { title: 'Prenatal Journey Tracker', description: 'Week-by-week pregnancy milestones, ultrasound scheduling, and birth plan documentation.' },
      { title: 'Fertility Clinic Module', description: 'IVF/IUI cycle tracking, hormone level charts, egg retrieval scheduling, and embryo grading records.' },
      { title: 'Wellness Programs', description: 'Nutrition plans, prenatal yoga scheduling, postpartum support groups, and mental health screening.' }
    ],
    howItWorks: [
      { icon: Activity, title: 'Care Registration & Cycle Profile', description: 'Onboard patients for OB/GYN, fertility, or wellness programs with customized menstrual, hormonal, and medical history.' },
      { icon: Calendar, title: 'Prenatal Milestones & Fertility Tracking', description: 'Track pregnancy progress week-by-week, ultrasound scan appointments, IVF cycle hormones, and doctor clinical consultations.' },
      { icon: CheckCircle2, title: 'Nutrition, Wellness & Tele-Consults', description: 'Prescribe dietary plans, schedule prenatal yoga or pelvic floor therapy, and conduct secure telehealth video check-ins.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Wearable API', 'Telehealth'] }
  },
  {
    id: 77, section: 'healthcare', name: 'Telehealth Management Software',
    category: 'Telemedicine / Tele Healthcare',
    desc: 'Enterprise telehealth platform with HD video consultations, AI symptom triage, e-prescriptions, and remote patient monitoring dashboards.',
    link: 'https://telehealthcare.softwaredemolive.live', youtube: 'https://youtu.be/-tQxWReuR9Q?si=5CspwSTeKgYEG1ew', documentUrl: '/documents/demo-docs/telehealth-management-software.docx', documentName: 'Telehealth Management Software Specification',
    color: 'from-violet-500 to-purple-600', glow: 'rgba(139, 92, 246, 0.4)', icon: Cpu, type: 'Software', status: 'Live', topSelling: true,
    features: ['HD Video Consultations', 'AI Symptom Pre-Screening', 'Remote Vitals Monitoring'],
    detailedFeatures: [
      { title: 'Video Consultation Engine', description: 'WebRTC-based HD video calls with screen sharing, in-call notes, and session recording capabilities.' },
      { title: 'AI Symptom Checker', description: 'Patients describe symptoms via guided questionnaire; AI triages urgency and suggests specialist type.' },
      { title: 'Remote Monitoring Dashboard', description: 'View connected device data (BP, glucose, SpO2) in real-time and set threshold alerts for care teams.' }
    ],
    howItWorks: [
      { icon: Calendar, title: 'Online Doctor Discovery & Slot Booking', description: 'Patients select doctor specialty, review consultation fees, check available calendar slots, and pay online.' },
      { icon: Activity, title: 'HD Video Consultation & EHR Access', description: 'Conduct secure WebRTC video calls with split-screen medical records, live vitals review, and clinical chat.' },
      { icon: CheckCircle2, title: 'Instant E-Prescriptions & Follow-Up Reminders', description: 'Issue digital signed prescriptions directly to the patient app and automate follow-up review reminders.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['WebRTC', 'IoT Gateway'] }
  },
  {
    id: 80, section: 'healthcare', name: 'Telemedicine Management Software',
    category: 'Telemedicine / Tele Healthcare',
    desc: 'Multi-specialty telemedicine platform with virtual waiting rooms, provider credentialing, and integrated lab order workflows.',
    link: 'https://tele-managment.softwaredemolive.live', youtube: 'https://youtu.be/y8NM6iA7Lhg',
    documentUrl: '/public/documents/demo-docs/telehealth-management.docx', documentName: 'Telemedicine Management Software Specification',
    color: 'from-cyan-500 to-blue-600', glow: 'rgba(6, 182, 212, 0.4)', icon: Activity, type: 'Software', status: 'Live', topSelling: true,
    features: ['Virtual Waiting Room', 'Provider Credentialing', 'Lab Order Integration'],
    detailedFeatures: [
      { title: 'Virtual Waiting Room', description: 'Patients check in online and wait in a branded virtual lobby with estimated wait times and queue position.' },
      { title: 'Provider Directory', description: 'Searchable specialist directory with credentials, languages spoken, availability slots, and patient ratings.' },
      { title: 'E-Lab Orders', description: 'Physicians order lab tests during virtual visits; results automatically attach to patient EHR upon completion.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Patient Onboarding & Symptom Triage', description: 'Patients enter primary symptoms, upload existing medical reports, and choose immediate on-demand or scheduled consults.' },
      { icon: Activity, title: 'Virtual Clinic Encounter & File Sharing', description: 'Doctors connect via browser video room, review diagnostic PDFs, and consult with integrated clinical notes.' },
      { icon: DollarSign, title: 'Digital Prescriptions & Payment Settlement', description: 'Deliver instant pharmacy-ready prescriptions to patient dashboard and settle doctor payout splits automatically.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Twilio Video', 'Lab API'] }
  },
  {
    id: 222, section: 'healthcare', name: 'Medical Practice Management Software',
    category: 'EV / Specialized Healthcare',
    desc: 'Comprehensive medical practice operations platform with multi-location management, provider scheduling, and revenue cycle management.',
    link: 'http://medicare.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/medical-practice-management-software.docx', documentName: 'Medical Practice Management Software Specification',
    color: 'from-teal-500 to-cyan-600', glow: 'rgba(20, 184, 166, 0.4)', icon: Activity, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Multi-Location Practice View', 'Provider Schedule Optimizer', 'Revenue Cycle Dashboard'],
    detailedFeatures: [
      { title: 'Multi-Site Management', description: 'Unified dashboard across multiple clinic locations with shared patient records and consolidated reporting.' },
      { title: 'Smart Scheduling', description: 'AI-optimized provider schedules based on appointment types, procedure durations, and patient preferences.' },
      { title: 'Revenue Cycle Management', description: 'End-to-end billing workflow from charge capture to payment posting with denial management analytics.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Multi-Provider Schedule & Patient Intake', description: 'Manage appointments across multi-specialty doctors, treatment rooms, and diagnostic equipment with automated SMS reminders.' },
      { icon: ClipboardList, title: 'Electronic Health Records & Clinical Orders', description: 'Document clinical encounters with customizable specialty templates, order lab tests, and record vitals seamlessly.' },
      { icon: DollarSign, title: 'Medical Billing & Insurance Copay Collection', description: 'Generate patient invoices, collect copays, submit insurance claims with CPT/ICD codes, and track aging receivables.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['EHR API', 'Clearinghouse'] }
  },
  {
    id: 100, section: 'healthcare', name: 'Clinic Appointment Management Software',
    category: 'EV / Specialized Healthcare',
    desc: 'Patient appointment scheduling and clinic workflow management system with SMS/WhatsApp reminders and doctor availability optimization.',
    link: 'https://ev-clinic.softwaredemolive.live', youtube: '',
    documentUrl: '/public/documents/demo-docs/medical-practice-billing.docx', documentName: 'Clinic Appointment Management Software Specification',
    color: 'from-green-400 to-emerald-600', glow: 'rgba(74, 222, 128, 0.4)', icon: Calendar, type: 'Software', status: 'Live', topSelling: true,
    features: ['Online Appointment Booking', 'Doctor Availability Matrix', 'SMS & WhatsApp Reminders'],
    detailedFeatures: [
      { title: 'Patient Self-Booking', description: 'Patients book appointments online by selecting specialty, doctor, date, and preferred time slot.' },
      { title: 'Doctor Roster Management', description: 'Configure weekly availability, block vacation dates, and manage emergency slot reservations.' },
      { title: 'Automated Reminders', description: 'Send appointment confirmations and reminders via SMS, WhatsApp, and email with cancellation links.' }
    ],
    howItWorks: [
      { icon: Calendar, title: 'Set Doctor Availability', description: 'Define consultation hours, slot duration, maximum patients per slot, and break times.' },
      { icon: Users, title: 'Patients Book Online', description: 'Patients select doctor, view available slots, and confirm booking with instant digital confirmation.' },
      { icon: CheckCircle2, title: 'Check-In & Consult', description: 'Front desk marks arrival, doctor sees queue, and completes consultation with digital notes.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['WhatsApp API', 'SMS Gateway'] }
  },

  {
    id: 247, section: 'healthcare', name: 'Doctor Clinic Management Software',
    category: 'Healthcare / Clinic / Medical Software',
    desc: 'Comprehensive clinic and outpatient management platform for appointment scheduling, electronic medical records (EMR), and digital e-prescriptions.',
    link: 'http://doctor-clinic.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/clinic-management-software.docx', documentName: 'Doctor Clinic Management Software Specification',
    color: 'from-teal-500 to-emerald-600', glow: 'rgba(20, 184, 166, 0.4)', icon: Stethoscope, type: 'Web App', status: 'Live', topSelling: true,
    features: ['OPD Appointment & Token Queue Display', 'Electronic Medical Records (EMR) & Vitals', 'Digital E-Prescription & Consultation Bills'],
    detailedFeatures: [
      { title: 'OPD Scheduling & Live Waiting Room Queue', description: 'Manage patient appointments, doctor consultation slots, walk-in tokens, and digital waiting area queue displays.' },
      { title: 'Electronic Medical Records (EMR)', description: 'Maintain detailed patient case histories, vital sign charts, past diagnoses, allergy alerts, and uploaded lab reports.' },
      { title: 'E-Prescriptions & Consultation Billing', description: 'One-click prescription pad with dosage instructions, medicine library, and consultation fee billing with payment receipts.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Patient Registration & Token Queuing', description: 'Reception logs patient demographic info, collects consultation fee, and assigns live OPD waiting queue token.' },
      { icon: Stethoscope, title: 'Doctor Consultation & Electronic Charting', description: 'Doctor reviews past visits, logs symptoms, vital signs, and types clinical diagnoses on secure EMR screens.' },
      { icon: CheckCircle2, title: 'E-Prescription & Follow-Up Reminders', description: 'Generate digital prescription delivered instantly via WhatsApp, deduct clinic pharmacy stock, and schedule follow-ups.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['WhatsApp API', 'Payment Gateway'] }
  },

  // ────────────── LOGISTICS & FLEET (6) ──────────────
  {
    id: 64, section: 'logistics', name: 'Logistics Management Software',
    category: 'Logistics / Transport / Warehouse',
    desc: 'End-to-end logistics operations platform with shipment tracking, route optimization, proof of delivery, and carrier management.',
    link: 'http://logistic.softwaredemolive.live', youtube: 'https://youtu.be/gK3Q8ypyMy0?si=icDwcdTQsI_j_wqV', documentUrl: '/documents/demo-docs/logistics-management-software.docx', documentName: 'Logistics Management Software Specification',
    color: 'from-cyan-500 to-blue-600', glow: 'rgba(6, 182, 212, 0.4)', icon: Truck, type: 'Software', status: 'Live', topSelling: true,
    features: ['Real-Time Shipment Tracking', 'Route Optimization Engine', 'Digital Proof of Delivery'],
    detailedFeatures: [
      { title: 'Shipment Tracking Dashboard', description: 'GPS-based real-time tracking of all shipments with estimated delivery times and delay alerts.' },
      { title: 'Route Planning & Optimization', description: 'AI-powered route suggestions considering traffic, fuel costs, delivery windows, and vehicle capacity.' },
      { title: 'Electronic POD', description: 'Drivers capture digital signatures, photos, and timestamps at delivery points for instant confirmation.' }
    ],
    howItWorks: [
      { icon: Truck, title: 'Create Shipment Order', description: 'Enter pickup/delivery addresses, package dimensions, and select service type (express/standard).' },
      { icon: ClipboardList, title: 'Assign & Dispatch', description: 'System assigns optimal vehicle and driver based on route, capacity, and delivery schedule.' },
      { icon: CheckCircle2, title: 'Track & Confirm Delivery', description: 'Monitor real-time GPS position, receive delivery confirmation with digital POD and photo proof.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Google Maps', 'GPS Tracker'] }
  },
  {
    id: 215, section: 'logistics', name: 'Warehouse Management Software',
    category: 'Logistics / Transport / Warehouse',
    desc: 'Smart warehouse operations platform with bin location management, pick-pack-ship workflows, and real-time inventory visibility.',
    link: 'https://warehouse-management-new.kiaansoftwaredemo.shop', youtube: 'https://youtu.be/EN0o6pZojh4?si=VbYVuOabT82HAOgb', documentUrl: '/documents/demo-docs/warehouse-management-software.docx', documentName: 'Warehouse Management Software Specification',
    color: 'from-amber-500 to-orange-600', glow: 'rgba(245, 158, 11, 0.4)', icon: Layers, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Bin Location Mapping', 'Pick-Pack-Ship Workflow', 'Barcode/RFID Scanning'],
    detailedFeatures: [
      { title: 'Warehouse Layout Designer', description: 'Visual warehouse map with zones, aisles, racks, and bin locations for optimized storage allocation.' },
      { title: 'Order Fulfillment Engine', description: 'Automated pick lists, wave planning, packing station workflows, and shipping label generation.' },
      { title: 'Inventory Accuracy', description: 'Cycle counting schedules, variance reporting, and RFID/barcode verification for 99.9% accuracy.' }
    ],
    howItWorks: [
      { icon: Layers, title: 'Inbound ASN & Putaway Location Mapping', description: 'Scan incoming pallet barcodes against purchase orders and generate optimized warehouse bin/rack putaway routes.' },
      { icon: ClipboardList, title: 'Pick-Pack-Ship Order Fulfillment', description: 'Generate wave/batch picking lists on mobile handheld scanners, verify picked items, and print packing slips.' },
      { icon: Truck, title: 'Dispatch Manifest & Real-Time Stock Sync', description: 'Assign shipments to logistics couriers, print shipping labels, and sync inventory levels across all sales channels.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Barcode Scanner', 'Shipping API'] }
  },
  {
    id: 78, section: 'logistics', name: 'Cloud Warehouse Management Software',
    category: 'Logistics / Transport / Warehouse',
    desc: 'Cloud-based 3PL warehouse management system with multi-client support, billing by storage/handling, and e-commerce integration.',
    link: 'https://wmsnew.kiaansoftware.com', youtube: 'https://youtu.be/XmV2ZngDIKA?si=JHNPHt85COpHs-AU', documentUrl: '/documents/demo-docs/cloud-warehouse-management-software.docx', documentName: 'Cloud Warehouse Management Software Specification',
    color: 'from-indigo-500 to-blue-600', glow: 'rgba(99, 102, 241, 0.4)', icon: Layers, type: 'Software', status: 'Live', topSelling: true,
    features: ['Multi-Client 3PL Support', 'Storage & Handling Billing', 'E-Commerce Channel Integration'],
    detailedFeatures: [
      { title: '3PL Client Management', description: 'Separate inventory views per client with dedicated billing, SLA tracking, and custom reports.' },
      { title: 'Activity-Based Billing', description: 'Charge clients per pallet stored, orders picked, items handled, and value-added services performed.' },
      { title: 'Channel Integration', description: 'Connect with Shopify, Amazon, WooCommerce for auto-syncing orders and inventory levels.' }
    ],
    howItWorks: [
      { icon: Cpu, title: 'Multi-Warehouse Hierarchy Configuration', description: 'Map central distribution centers, regional hubs, and local dark stores with zone, aisle, and bin coordinate systems.' },
      { icon: Layers, title: 'Real-Time Stock Movement & Batch Control', description: 'Track inventory movements via RFID/barcodes with strict FIFO/FEFO batch controls to prevent stock shrinkage.' },
      { icon: CheckCircle2, title: 'Fulfillment Analytics & Low-Stock Alerts', description: 'Monitor picker efficiency, space utilization heatmaps, and set automated supplier reorder purchase triggers.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Shopify API', 'Amazon MWS'] }
  },
  {
    id: 55, section: 'logistics', name: 'Truck Fleet Management Software',
    category: 'Logistics / Transport / Warehouse',
    desc: 'Commercial truck fleet operations and dispatch management with GPS tracking, fuel monitoring, driver HOS compliance, and maintenance scheduling.',
    link: 'https://tuck-managment.softwaredemolive.live', youtube: 'https://youtu.be/o-p1Ldive9Q?si=yxJ0RIi-8dk7yU9A', documentUrl: '/documents/demo-docs/truck-fleet-management-software.docx', documentName: 'Truck Fleet Management Software Specification',
    color: 'from-blue-500 to-indigo-700', glow: 'rgba(59, 130, 246, 0.4)', icon: Truck, type: 'Software', status: 'Live', topSelling: true,
    features: ['Live GPS Fleet Tracking', 'Driver Hours-of-Service (HOS)', 'Preventive Maintenance Scheduler'],
    detailedFeatures: [
      { title: 'Fleet GPS Tracking', description: 'Real-time vehicle positions, speed monitoring, geofence alerts, and historical route playback.' },
      { title: 'Driver Compliance', description: 'Hours-of-service logging, license expiry tracking, safety violation records, and training certifications.' },
      { title: 'Maintenance Management', description: 'Schedule oil changes, tire rotations, brake inspections based on mileage triggers and calendar intervals.' }
    ],
    howItWorks: [
      { icon: Truck, title: 'Vehicle Registry & Driver Document Compliance', description: 'Catalog trucks, trailers, capacity limits, driver commercial licenses, permits, and set automated fitness expiry alerts.' },
      { icon: Calendar, title: 'Trip Dispatch & Live GPS Telematics', description: 'Assign freight consignments to drivers, optimize highway routes, and monitor live vehicle speeds and GPS locations.' },
      { icon: DollarSign, title: 'Fuel Logging, Fastag Tolls & Driver Payouts', description: 'Track diesel fill-ups, automated Fastag toll charges, maintenance work orders, and settle trip freight balance payouts.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['GPS Telematics', 'Fuel Card API'] }
  },
  {
    id: 218, section: 'logistics', name: 'Car Rental Management Software',
    category: 'Logistics / Transport / Warehouse',
    desc: 'Self-drive and chauffeur-driven car rental platform with fleet availability calendar, dynamic pricing, and digital rental agreements.',
    link: 'http://car-drive.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/car-rental-management-software.docx', documentName: 'Car Rental Management Software Specification',
    color: 'from-purple-500 to-indigo-600', glow: 'rgba(168, 85, 247, 0.4)', icon: Car, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Real-Time Fleet Availability', 'Dynamic Pricing Engine', 'Digital Rental Agreements'],
    detailedFeatures: [
      { title: 'Fleet Availability Calendar', description: 'Visual booking timeline showing vehicle availability, bookings, maintenance blocks, and cleaning slots.' },
      { title: 'Dynamic Pricing', description: 'Surge pricing during peak seasons, weekend premiums, long-term rental discounts, and coupon management.' },
      { title: 'Damage Assessment', description: 'Pre-trip and post-trip vehicle condition checklists with photo documentation and damage deposit handling.' }
    ],
    howItWorks: [
      { icon: Car, title: 'Browse & Select Vehicle', description: 'Customers filter by car type, transmission, fuel, and pickup location from available fleet.' },
      { icon: Calendar, title: 'Book & Sign Agreement', description: 'Select rental dates, choose insurance add-ons, and sign digital rental agreement with e-KYC.' },
      { icon: CheckCircle2, title: 'Pickup, Drive & Return', description: 'Collect vehicle at location, drive during rental period, and return with automated inspection.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Stripe', 'Google Maps'] }
  },
  {
    id: 26, section: 'logistics', name: 'Field Service Management Software',
    category: 'Logistics / Transport / Warehouse',
    desc: 'Mobile-first field service dispatch platform for HVAC, plumbing, and electrical contractors with work order management and route optimization.',
    link: 'http://mordern-service.kiaansoftware.com', youtube: '', documentUrl: '/documents/demo-docs/field-service-management-software.docx', documentName: 'Field Service Management Software Specification',
    color: 'from-orange-400 to-red-500', glow: 'rgba(251, 146, 60, 0.4)', icon: Settings, type: 'Software', status: 'Live', topSelling: true,
    features: ['Smart Dispatch & Scheduling', 'Mobile Technician App', 'Parts Inventory & Invoicing'],
    detailedFeatures: [
      { title: 'Intelligent Dispatch', description: 'Auto-assign service calls to nearest available technician based on skills, location, and workload.' },
      { title: 'Technician Mobile App', description: 'Field workers view job details, navigate to sites, capture photos, log time, and collect payments on-site.' },
      { title: 'Service Agreement Management', description: 'Manage AMC/warranty contracts, schedule preventive maintenance visits, and track SLA compliance.' }
    ],
    howItWorks: [
      { icon: ClipboardList, title: 'Customer Service Ticket Booking', description: 'Log incoming service requests for plumbing, HVAC, electrical, or appliance repair with customer location details.' },
      { icon: Users, title: 'Smart Technician Dispatch & GPS Routing', description: 'Auto-assign service jobs to the nearest field technician based on skill set, availability, and traffic distance.' },
      { icon: CheckCircle2, title: 'On-Site Mobile Invoicing & Proof of Work', description: 'Technicians upload before-and-after repair photos, capture customer digital signatures, and collect payments on-site.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Google Maps', 'Payment Gateway'] }
  },

  // ────────────── FINANCE & ACCOUNTING (5 — includes Insurance) ──────────────
  {
    id: 213, section: 'accounting', name: 'Accounting Management Software',
    category: 'Loan / Finance / Accounting / Sales',
    desc: 'GST-compliant double-entry accounting software with automated invoicing, bank reconciliation, and multi-branch financial reporting.',
    link: 'https://accounting-new.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/accounting-management-software.docx', documentName: 'Accounting Management Software Specification',
    color: 'from-emerald-400 to-teal-600', glow: 'rgba(52, 211, 153, 0.4)', icon: DollarSign, type: 'Web App', status: 'Live', topSelling: true,
    features: ['GST-Ready Invoicing', 'Bank Reconciliation', 'Multi-Branch P&L Reports'],
    detailedFeatures: [
      { title: 'GST Invoice Engine', description: 'Generate CGST/SGST/IGST compliant invoices with HSN codes, e-way bills, and GSTR filing data.' },
      { title: 'Bank Reconciliation', description: 'Import bank statements, auto-match transactions, and identify unreconciled entries for review.' },
      { title: 'Financial Statements', description: 'Auto-generate Balance Sheet, P&L Statement, Cash Flow Statement, and Trial Balance reports.' }
    ],
    howItWorks: [
      { icon: DollarSign, title: 'Chart of Accounts & Company Profile Setup', description: 'Configure double-entry general ledgers, bank accounts, customer/vendor profiles, and state GST tax rules.' },
      { icon: ClipboardList, title: 'Sales Invoicing, POS Billing & Purchases', description: 'Create GST-compliant tax invoices, record vendor purchase bills, track credit notes, and reconcile bank feeds.' },
      { icon: CheckCircle2, title: 'Financial Statements & GSTR Return Reports', description: 'Generate real-time Trial Balances, Trading & P&L statements, Balance Sheets, and export GSTR-1 & 3B ready JSON/Excel.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Bank API', 'GST Portal'] }
  },
  {
    id: 232, section: 'accounting', name: 'Loan & Credit Management Software',
    category: 'Loan / Finance / Accounting / Sales',
    desc: '100% digital personal loan origination and credit line platform with instant credit limit assessment, paperless e-KYC, flexible tenure EMI schedules, and automated disbursals.',
    link: 'https://loan-credit-management.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/intelligent-loan-management.docx', documentName: 'Loan & Credit Management Software Specification',
    color: 'from-amber-500 to-yellow-600', glow: 'rgba(245, 158, 11, 0.4)', icon: Landmark, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Instant Digital Credit Limits', 'Paperless e-KYC & Underwriting', 'Automated EMI Disbursals'],
    detailedFeatures: [
      { title: 'Credit Limit & Risk Engine', description: 'Instant eligibility scoring using bank statement analysis, credit bureau score checks, and algorithmic risk profiling.' },
      { title: 'Digital Onboarding & e-KYC', description: 'Frictionless Aadhaar/PAN verification, video KYC verification, and digital NACH mandate setup for automatic repayments.' },
      { title: 'Flexible Credit Line & EMIs', description: 'Revolving line of credit with drawdown on demand, flexible payback tenures, and transparent interest calculations.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Loan Application Intake & KYC Credit Check', description: 'Collect borrower KYC documents, verify bank statements, evaluate credit scores, and configure customized interest schemes.' },
      { icon: ClipboardList, title: 'Loan Sanction, Disbursal & EMI Schedule', description: 'Calculate reducing/flat interest EMI amortization schedules, approve sanctions, and disburse loan funds to borrower accounts.' },
      { icon: DollarSign, title: 'Automated EMI Recovery & NPA Alerts', description: 'Process recurring NACH/e-Mandate auto-debits, track overdue collections, send payment reminders, and flag NPA risks.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Credit Bureau API', 'e-NACH Mandate', 'Razorpay'] }
  },
  {
    id: 234, section: 'accounting', name: 'AI-Powered Banking Management Software',
    category: 'Loan / Finance / Accounting / Sales',
    desc: 'Intelligent digital banking and fintech operating platform featuring AI fraud detection, automated multi-currency treasury reconciliation, smart customer KYC, and real-time ledger intelligence.',
    link: 'https://ai-banking.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/loan-credit-management.docx', documentName: 'AI-Powered Banking Management Software Specification',
    color: 'from-blue-600 to-cyan-500', glow: 'rgba(6, 182, 212, 0.4)', icon: Landmark, type: 'Web App', status: 'Live', topSelling: true,
    features: ['AI Transaction Fraud Detection', 'Automated Multi-Currency Reconciliation', 'Smart Digital Customer Onboarding'],
    detailedFeatures: [
      { title: 'AI Risk & Anomaly Scoring', description: 'Machine learning algorithms continuously inspect transaction velocity to intercept unauthorized wire activities.' },
      { title: 'Core Banking Ledger & Treasury', description: 'High-throughput double-entry core ledger processing micro-transactions with zero balance discrepancies.' },
      { title: 'Paperless Digital e-KYC', description: 'Biometric face matching, instant sanctions screening, and automated AML compliance checks.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Onboard Digital Customers', description: 'Customers complete paperless identity verification with automated fraud and credit screening.' },
      { icon: Landmark, title: 'Process Secure Transactions', description: 'Real-time clearing engine executes domestic and cross-border transfers under AI fraud surveillance.' },
      { icon: CheckCircle2, title: 'Reconcile & Audit', description: 'Consolidated end-of-day balances settle automatically with instant regulatory audit reporting.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js', 'Python'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Core Banking API', 'SWIFT / FedNow'] }
  },
  {
    id: 42, section: 'accounting', name: 'Loan Management Software',
    category: 'Loan / Finance / Accounting / Sales',
    desc: 'End-to-end loan origination, underwriting, disbursement, and collection management platform for NBFCs, microfinance, and lending institutions.',
    link: 'http://loanfistdemo.kiaansoftware.com', youtube: '',
    documentUrl: '/public/documents/demo-docs/intelligent-loan-management.docx', documentName: 'Loan Management Software Specification',
    color: 'from-amber-400 to-yellow-600', glow: 'rgba(251, 191, 36, 0.4)', icon: Landmark, type: 'Software', status: 'Live', topSelling: true,
    features: ['Loan Origination Workflow', 'EMI Calculator & Scheduler', 'Collection Agent Tracking'],
    detailedFeatures: [
      { title: 'Loan Application Processing', description: 'Digital loan application with document uploads, credit score checks, and automated eligibility assessment.' },
      { title: 'EMI Management', description: 'Flexible EMI schedules with pre-closure calculations, penalty computation, and moratorium period handling.' },
      { title: 'Collections Module', description: 'Field agent assignment, collection route planning, payment receipt generation, and NPA classification.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Borrower Onboarding & Risk Assessment', description: 'Intake personal, business, or mortgage loan applications with automated KYC document verification and underwriting scorecards.' },
      { icon: DollarSign, title: 'Loan Disbursal & Repayment Ledger', description: 'Generate loan agreements, disburse loan capital, and maintain real-time repayment ledgers with principal/interest breakdown.' },
      { icon: CheckCircle2, title: 'Collection Management & Recovery Notices', description: 'Track daily/monthly collection agents, generate automated overdue reminder notices, and manage legal loan settlement workflows.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Credit Bureau API', 'Payment Gateway'] }
  },
  {
    id: 24, section: 'insurance', name: 'Insurance Agency Management Software',
    category: 'Insurance Software',
    desc: 'Insurance policy administration, agent commission calculation, underwriting workflows, and claims adjudication platform.',
    link: 'https://insurance-managmenet.kiaansoftware.com', youtube: 'https://youtu.be/9UYygrk2mho?si=Hoa4vf8b7SUD5DYT', documentUrl: '/documents/demo-docs/insurance-agency-management-software.docx', documentName: 'Insurance Agency Management Software Specification',
    color: 'from-blue-600 to-indigo-700', glow: 'rgba(37, 99, 235, 0.4)', icon: Shield, type: 'Software', status: 'Live', topSelling: true,
    features: ['Policy Lifecycle Management', 'Automated Agent Commissions', 'Digital Claims Adjudication'],
    detailedFeatures: [
      { title: 'Multi-Line Policy Engine', description: 'Manage Health, Motor, Life, and Property policies with flexible premium payment frequencies.' },
      { title: 'Agent Hierarchy & Commissions', description: 'Automated commission splits for brokers, sub-agents, and direct sales teams.' },
      { title: 'End-to-End Claims Processing', description: 'Digital claim intimation, surveyor report uploads, deductible calculations, and settlement approval.' }
    ],
    howItWorks: [
      { icon: Shield, title: 'Policy Catalog & Multi-Insurer Onboarding', description: 'Configure life, health, motor, and commercial insurance products across multiple insurance company partners.' },
      { icon: Users, title: 'Client Policy Portfolio & Premium Tracking', description: 'Maintain complete client profiles, active insurance policies, policy renewal dates, and payment premium schedules.' },
      { icon: DollarSign, title: 'Automated Renewal Reminders & Commission Slabs', description: 'Send WhatsApp/email renewal alerts to clients and automate sub-agent commission distribution ledgers.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js', 'Spring Boot'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'SMS Gateway'] }
  },

  // ────────────── ERP & BUSINESS OPERATIONS (9) ──────────────
  {
    id: 228, section: 'erp', name: 'Project Management Software',
    category: 'ERP / Business / SaaS Platforms',
    desc: 'Comprehensive project management and tracking platform with sprint planning, Kanban task boards, milestone tracking, resource allocation, and team collaboration.',
    link: 'https://project-managment.kiaantechnology.com', youtube: '',
    documentUrl: '/public/documents/demo-docs/contractor-project-management.docx', documentName: 'Project Management Software Specification',
    color: 'from-blue-500 to-indigo-600', glow: 'rgba(59, 130, 246, 0.4)', icon: ClipboardList, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Kanban Boards & Sprint Planning', 'Milestone & Deadline Tracking', 'Team Workload & Resource Allocation'],
    detailedFeatures: [
      { title: 'Agile & Kanban Task Boards', description: 'Interactive drag-and-drop task workflows with custom statuses, priority tags, subtasks, and checklists.' },
      { title: 'Sprint & Milestone Roadmap', description: 'Gantt timeline visualization, milestone deliverables, dependency mapping, and automated project progress tracking.' },
      { title: 'Resource & Workload Management', description: 'Monitor team capacity, track billable hours, assign project deliverables, and avoid team bottlenecks.' }
    ],
    howItWorks: [
      { icon: ClipboardList, title: 'Create Project & Define Sprints', description: 'Setup project scope, milestones, sprint goals, and invite cross-functional team members.' },
      { icon: CheckSquare, title: 'Assign & Track Tasks', description: 'Team members update task status on Kanban boards with attachments, comments, and time logs.' },
      { icon: CheckCircle2, title: 'Monitor Progress & Deliver', description: 'Track sprint burndown, analyze team velocity, and deliver client milestones on schedule.' }
    ],
    techStack: { frontend: ['React', 'Bootstrap'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Email Gateway', 'Cloud Storage'] }
  },
  {
    id: 229, section: 'erp', name: 'Smart Manufacturing System',
    category: 'ERP / Business / SaaS Platforms',
    desc: 'Intelligent manufacturing execution system (MES) and industrial IoT platform with real-time shop floor telemetry, smart factory automation, BOM management, and predictive maintenance.',
    link: 'https://smart-manufacturing-system.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/smart-manufacturing-erp.docx', documentName: 'Smart Manufacturing System Specification',
    color: 'from-amber-500 to-orange-600', glow: 'rgba(245, 158, 11, 0.4)', icon: Cpu, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Real-Time Shop Floor Telemetry', 'Multi-Level BOM & Work Orders', 'Predictive Equipment Maintenance'],
    detailedFeatures: [
      { title: 'Shop Floor & Machine Telemetry', description: 'Real-time machinery status tracking, cycle time metrics, overall equipment effectiveness (OEE), and line downtime alerts.' },
      { title: 'Multi-Level BOM & Work Orders', description: 'Interactive bill of materials, stage-by-stage assembly line routing, raw material consumption, and yield optimization.' },
      { title: 'Predictive Quality & Maintenance', description: 'Automated defect detection, preventive service schedules, machine sensor diagnostics, and audit compliance trails.' }
    ],
    howItWorks: [
      { icon: Cpu, title: 'Bill of Materials (BOM) & Work Center Setup', description: 'Define multi-level product recipes, raw material consumption ratios, routing steps, and manufacturing workstation capacities.' },
      { icon: Layers, title: 'Production Order Scheduling & Shop Floor Control', description: 'Create production batches, track work-in-progress (WIP) stages on the factory floor, and log machine uptime.' },
      { icon: CheckCircle2, title: 'Quality Inspection & Finished Goods Release', description: 'Perform in-process quality stage checks, track scrap/rejections, and transfer approved finished goods to warehouse stock.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Industrial IoT Gateway', 'ERP Connector'] }
  },
  {
    id: 230, section: 'erp', name: 'Coffee Shop ERP & Management Software',
    category: 'ERP / Business / SaaS Platforms',
    desc: 'End-to-end cafe & coffee shop ERP platform covering bean roasting, inventory tracking, recipe cost management, multi-outlet sales, and cafe POS operations.',
    link: 'https://cofee-erp.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/business-accounting-inventory-gst.docx', documentName: 'Coffee Shop ERP & Management Software Specification',
    color: 'from-amber-600 to-yellow-700', glow: 'rgba(217, 119, 6, 0.4)', icon: Utensils, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Cafe POS & Recipe Costing', 'Roastery Batch & Inventory', 'Multi-Outlet Sales Analytics'],
    detailedFeatures: [
      { title: 'POS & Order Processing', description: 'Quick-service counter billing, barista KDS order routing, table management, and integrated loyalty rewards.' },
      { title: 'Recipe & Ingredient Costing', description: 'Granular BOM for specialty beverages, milk and bean yield tracking, wastage logs, and real-time margin analysis.' },
      { title: 'Multi-Outlet Supply Chain', description: 'Central commissary production, automated store replenishment, stock transfers, and consolidated franchise P&L.' }
    ],
    howItWorks: [
      { icon: Utensils, title: 'Setup Menu & Recipes', description: 'Configure specialty drinks, roasts, recipe proportions, add-ons, and pricing across all cafe locations.' },
      { icon: ClipboardList, title: 'Manage Daily Orders & POS', description: 'Cashiers ring up sales swiftly while orders dispatch immediately to barista bar display screens.' },
      { icon: CheckCircle2, title: 'Analyze Roastery & Profits', description: 'Track raw bean depletion, monitor outlet revenue trends, and optimize overall beverage profitability.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'Thermal Receipt Printer'] }
  },
  {
    id: 235, section: 'erp', name: 'Supplier & Vendor Management Software',
    category: 'ERP / Business / SaaS Platforms',
    desc: 'Collaborative supplier bridge and procurement portal managing vendor onboarding, automated RFQ bidding, purchase order tracking, quality inspections, and three-way invoice matching.',
    link: 'https://link-supplier-bridge.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/warehouse-inventory-management.docx', documentName: 'Supplier & Vendor Management Software Specification',
    color: 'from-emerald-500 to-teal-600', glow: 'rgba(16, 185, 129, 0.4)', icon: Briefcase, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Vendor Self-Service Onboarding', 'Automated RFQ & Purchase Orders', '3-Way Invoice Matching & Approvals'],
    detailedFeatures: [
      { title: 'Vendor Portal & Compliance Vault', description: 'Self-service supplier registration, GST/tax certification uploads, NDA management, and supplier ratings.' },
      { title: 'RFQ e-Bidding & Purchase Orders', description: 'Publish tenders, collect competitive vendor quotes, compare pricing matrices, and issue binding POs.' },
      { title: 'GRN & Invoice Matching', description: 'Match purchase order, goods received note (GRN), and vendor invoice seamlessly to avoid overbilling.' }
    ],
    howItWorks: [
      { icon: Briefcase, title: 'Invite & Verify Suppliers', description: 'Suppliers register online, upload compliance certificates, and enter approved vendor master lists.' },
      { icon: ClipboardList, title: 'Float RFQs & Issue POs', description: 'Procurement teams request quotes, evaluate bids, and convert winner bids into purchase orders.' },
      { icon: CheckCircle2, title: 'Receive Goods & Settle', description: 'Verify warehouse deliveries against GRN and approve vendor payments with 3-way automated matching.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['ERP Connector', 'Accounting Gateway'] }
  },
  {
    id: 21, section: 'erp', name: 'Business Operations Management Software',
    category: 'ERP / Business / SaaS Platforms',
    desc: 'Integrated business operations ERP covering procurement, production planning, quality control, and dispatch with real-time dashboard analytics.',
    link: 'https://cloveo.kiaansoftware.com', youtube: '',
    documentUrl: '/public/documents/demo-docs/enterprise-business-erp.docx', documentName: 'Business Operations Management Software Specification',
    color: 'from-indigo-400 to-violet-600', glow: 'rgba(129, 140, 248, 0.4)', icon: Briefcase, type: 'Software', status: 'Live', topSelling: true,
    features: ['Procurement & Vendor Management', 'Production Planning & Scheduling', 'Quality Control Checkpoints'],
    detailedFeatures: [
      { title: 'Procurement Module', description: 'Purchase requisitions, vendor comparison, PO generation, GRN, and three-way invoice matching.' },
      { title: 'Production Planning', description: 'Bill of materials (BOM), production scheduling, shop floor tracking, and finished goods management.' },
      { title: 'Quality Assurance', description: 'Incoming inspection, in-process quality checks, final QA sign-off, and non-conformance reports.' }
    ],
    howItWorks: [
      { icon: Briefcase, title: 'Configure Business Modules', description: 'Setup company structure, financial year, tax rules, and enable required operational modules.' },
      { icon: ClipboardList, title: 'Run Daily Operations', description: 'Process sales orders, trigger production, manage inventory movements, and track shipments.' },
      { icon: CheckCircle2, title: 'Analyze & Optimize', description: 'Review operational dashboards, identify bottlenecks, and optimize resource utilization.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Tally', 'Payment Gateway'] }
  },
  {
    id: 220, section: 'erp', name: 'Vending Machine Management Software',
    category: 'ERP / Business / SaaS Platforms',
    desc: 'IoT-connected vending machine fleet management with real-time inventory alerts, cashless payments, and remote machine health diagnostics.',
    link: 'http://vending-machine.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/vending-machine-management-software.docx', documentName: 'Vending Machine Management Software Specification',
    color: 'from-green-400 to-emerald-600', glow: 'rgba(74, 222, 128, 0.4)', icon: Cpu, type: 'Web App', status: 'Live', topSelling: true,
    features: ['IoT Machine Monitoring', 'Cashless Payment Integration', 'Inventory Refill Alerts'],
    detailedFeatures: [
      { title: 'Machine Fleet Dashboard', description: 'Real-time status of all vending machines showing online/offline, stock levels, and revenue.' },
      { title: 'Cashless Payment Hub', description: 'UPI, card tap, and mobile wallet payment acceptance with instant settlement reporting.' },
      { title: 'Predictive Restocking', description: 'AI-driven demand forecasting to optimize refill routes and minimize out-of-stock incidents.' }
    ],
    howItWorks: [
      { icon: Cpu, title: 'Vending Machine Registry & Planogram Mapping', description: 'Configure smart vending machines by location, assign machine serial numbers, and setup slot-level product planograms.' },
      { icon: Truck, title: 'Restock Route Optimization & Driver Dispatch', description: 'Monitor real-time inventory levels per coil slot and generate optimized daily restocking routes for field drivers.' },
      { icon: DollarSign, title: 'Cash Collection Reconcile & Telemetry Data', description: 'Track cashless digital payments, reconcile driver cash collection bags, and review high-margin product sales analytics.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS IoT'], integrations: ['UPI', 'IoT Gateway'] }
  },
  {
    id: 62, section: 'erp', name: 'Multi-Tenant SaaS Management Software',
    category: 'ERP / Business / SaaS Platforms',
    desc: 'White-label multi-tenant SaaS platform builder with subscription billing, tenant isolation, feature flagging, and usage analytics.',
    link: 'http://multi-tenant-saas.softwaredemolive.live', youtube: '', documentUrl: '/documents/demo-docs/multi-tenant-saas-management-software.docx', documentName: 'Multi-Tenant SaaS Management Software Specification',
    color: 'from-violet-500 to-purple-700', glow: 'rgba(139, 92, 246, 0.4)', icon: Layers, type: 'Software', status: 'Live', topSelling: true,
    features: ['Multi-Tenant Architecture', 'Subscription & Usage Billing', 'Feature Flag Management'],
    detailedFeatures: [
      { title: 'Tenant Provisioning', description: 'Automated tenant workspace creation with isolated databases, custom domains, and branding options.' },
      { title: 'Subscription Engine', description: 'Flexible pricing plans with trial periods, add-ons, usage-based metering, and automated invoicing.' },
      { title: 'Admin Super Dashboard', description: 'Platform owner view of all tenants, MRR/ARR metrics, churn analytics, and system health monitors.' }
    ],
    howItWorks: [
      { icon: Layers, title: 'Configure SaaS Platform', description: 'Define subscription tiers, feature permissions, API rate limits, and white-label branding.' },
      { icon: Users, title: 'Onboard Tenants', description: 'New customers sign up, select plan, and get instantly provisioned isolated workspace.' },
      { icon: DollarSign, title: 'Bill & Scale', description: 'Automated recurring billing, usage metering, upgrade/downgrade handling, and churn prevention.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Stripe', 'SendGrid'] }
  },
  {
    id: 207, section: 'erp', name: 'Manufacturing ERP Software',
    category: 'ERP / Business / SaaS Platforms',
    desc: 'Discrete and process manufacturing ERP with BOM management, shop floor execution, MRP planning, and quality traceability.',
    link: 'https://dog-treat-erp.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/manufacturing-erp-software.docx', documentName: 'Manufacturing ERP Software Specification',
    color: 'from-orange-500 to-amber-600', glow: 'rgba(249, 115, 22, 0.4)', icon: Settings, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Bill of Materials (BOM)', 'Shop Floor Execution', 'Material Requirement Planning (MRP)'],
    detailedFeatures: [
      { title: 'Multi-Level BOM', description: 'Define raw materials, sub-assemblies, and finished goods with routing operations and work center assignments.' },
      { title: 'Production Orders', description: 'Convert sales orders to production orders, track WIP, and manage batch/lot traceability.' },
      { title: 'MRP Engine', description: 'Calculate material requirements based on demand forecasts, safety stock levels, and lead times.' }
    ],
    howItWorks: [
      { icon: Layers, title: 'Production Planning & Material Requirements (MRP)', description: 'Forecast product demand, calculate raw material requirements, and generate procurement purchase orders for suppliers.' },
      { icon: Cpu, title: 'Shop Floor Execution & Assembly Tracking', description: 'Monitor shift production targets, machine cycle times, operator logs, and track work order completion across assembly lines.' },
      { icon: CheckCircle2, title: 'Quality Audits, Batch Costing & Final Dispatch', description: 'Inspect finished product tolerances, calculate true unit batch costs (materials + labor), and pack for client shipping.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Barcode Scanner', 'Tally'] }
  },
  {
    id: 27, section: 'erp', name: 'Business ERP Software',
    category: 'ERP / Business / SaaS Platforms',
    desc: 'Unified small-to-medium business ERP covering sales, purchases, inventory, accounts, and HR modules in a single integrated platform.',
    link: 'https://oddo-sh.kiaansoftware.com', youtube: 'https://youtu.be/26imULq6r5E?si=bqc1BqDXXk6fAIn3', documentUrl: '/documents/demo-docs/business-erp-software.docx', documentName: 'Business ERP Software Specification',
    color: 'from-blue-500 to-purple-600', glow: 'rgba(59, 130, 246, 0.4)', icon: Briefcase, type: 'Software', status: 'Live', topSelling: true,
    features: ['Unified Business Modules', 'Role-Based Access Control', 'Customizable Dashboards'],
    detailedFeatures: [
      { title: 'Integrated Module Suite', description: 'Sales, Purchase, Inventory, Accounting, HR, and CRM modules sharing a unified database.' },
      { title: 'Workflow Automation', description: 'Configurable approval workflows for purchase orders, leave requests, and expense claims.' },
      { title: 'Business Intelligence', description: 'Drag-and-drop dashboard builder with KPI widgets, trend charts, and exportable reports.' }
    ],
    howItWorks: [
      { icon: Briefcase, title: 'Unified Business Modules Configuration', description: 'Interlink CRM, procurement, warehouse, manufacturing, sales, and accounting modules within a single corporate database.' },
      { icon: ClipboardList, title: 'Cross-Departmental Workflow Automation', description: 'Convert approved sales quotations into sales orders, trigger inventory allocations, and schedule manufacturing runs.' },
      { icon: DollarSign, title: 'Consolidated Financials & Executive BI', description: 'Generate real-time P&L statements, monitor department expense budgets, and view 360-degree operational dashboards.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Tally', 'Payment Gateway'] }
  },

  // ────────────── LEGAL & COMPLIANCE (4) ──────────────
  {
    id: 219, section: 'legal', name: 'Case Management Software',
    category: 'Legal / Case / Compliance Software',
    desc: 'Legal case management platform for law firms with matter tracking, court date calendaring, document management, and time billing.',
    link: 'http://case-management.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/case-management-software.docx', documentName: 'Case Management Software Specification',
    color: 'from-amber-400 to-yellow-600', glow: 'rgba(251, 191, 36, 0.4)', icon: Briefcase, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Matter & Case Tracking', 'Court Date Calendar', 'Legal Time Billing'],
    detailedFeatures: [
      { title: 'Case Lifecycle Management', description: 'Track cases from intake through filing, discovery, hearings, and final disposition with status updates.' },
      { title: 'Court Calendar Integration', description: 'Sync court dates, filing deadlines, and statute limitations with lawyer and staff calendars.' },
      { title: 'Time & Expense Billing', description: 'Track billable hours per attorney, generate client invoices, and manage retainer accounts.' }
    ],
    howItWorks: [
      { icon: Scale, title: 'Case Matter Intake & Client Profiling', description: 'Register new litigation or corporate legal matters with client details, opposing counsel, court jurisdiction, and case numbers.' },
      { icon: Calendar, title: 'Court Hearing Diary & Document Repository', description: 'Maintain automated court hearing calendars, track cause lists, and store legal briefs, evidence files, and case petitions.' },
      { icon: DollarSign, title: 'Billable Hours Logging & Retainer Invoicing', description: 'Track lawyers\' billable minutes, record out-of-pocket case expenses, and generate professional retainer invoices.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Calendar API', 'Document Management'] }
  },
  {
    id: 41, section: 'legal', name: 'Legal Case Management Software',
    category: 'Legal / Case / Compliance Software',
    desc: 'Corporate legal department and litigation management platform with contract lifecycle management, compliance tracking, and legal research tools.',
    link: 'https://legal-case-ui.softwaredemolive.live/login', youtube: 'https://youtu.be/1tE-jrlkzpE?si=synzdeUtWqjoJPiL', documentUrl: '/documents/demo-docs/legal-case-management-software.docx', documentName: 'Legal Case Management Software Specification',
    color: 'from-yellow-400 to-amber-500', glow: 'rgba(250, 204, 21, 0.4)', icon: Briefcase, type: 'Software', status: 'Live', topSelling: true,
    features: ['Contract Lifecycle Management', 'Regulatory Compliance Tracker', 'Legal Research Library'],
    detailedFeatures: [
      { title: 'Contract Management', description: 'Draft, review, negotiate, and execute contracts with version control and obligation tracking.' },
      { title: 'Compliance Dashboard', description: 'Monitor regulatory requirements, track compliance tasks, and maintain audit-ready documentation.' },
      { title: 'Precedent Research', description: 'Searchable database of case precedents, legal opinions, and statutory references for research.' }
    ],
    howItWorks: [
      { icon: Scale, title: 'Matter Creation & Conflict of Interest Check', description: 'Open legal case files, run automated conflict checks against existing client databases, and assign associate counsel.' },
      { icon: ClipboardList, title: 'Legal Workflow Stages & Task Delegation', description: 'Break cases into discovery, drafting, filing, and trial stages with strict deadline tracking and internal task assignments.' },
      { icon: CheckCircle2, title: 'Client Case Portal & Secure Communications', description: 'Provide clients with secure portal access to review case progress, download filed court orders, and approve legal fees.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['E-Signature', 'Document Management'] }
  },
  {
    id: 70, section: 'legal', name: 'Quality Management Software',
    category: 'Legal / Case / Compliance Software',
    desc: 'ISO-compliant quality management system with document control, CAPA workflows, internal audit scheduling, and non-conformance tracking.',
    link: 'http://qualitymanagement.softwaredemolive.live', youtube: 'https://youtu.be/N8aRxi9Cvj8?si=hxjD5uxYJHxB7r7d', documentUrl: '/documents/demo-docs/quality-management-software.docx', documentName: 'Quality Management Software Specification',
    color: 'from-teal-400 to-cyan-600', glow: 'rgba(45, 212, 191, 0.4)', icon: CheckSquare, type: 'Software', status: 'Live', topSelling: true,
    features: ['ISO Document Control', 'CAPA Workflow Engine', 'Internal Audit Scheduler'],
    detailedFeatures: [
      { title: 'Document Control System', description: 'Version-controlled SOPs, work instructions, and forms with review/approval workflows and distribution tracking.' },
      { title: 'CAPA Management', description: 'Corrective and Preventive Action workflows with root cause analysis, action plans, and effectiveness verification.' },
      { title: 'Audit Management', description: 'Schedule internal audits, assign auditors, record findings, and track corrective action closure.' }
    ],
    howItWorks: [
      { icon: Shield, title: 'Quality Standards & Inspection Checklists', description: 'Define ISO/GMP compliance parameters, quality testing benchmarks, tolerance ranges, and sampling inspection rules.' },
      { icon: CheckCircle2, title: 'In-Line Inspection & Defect Logging', description: 'Quality auditors record batch inspections on tablet devices, photograph non-conformances, and flag quarantine items.' },
      { icon: ClipboardList, title: 'CAPA Root Cause Analysis & Audit Reports', description: 'Initiate Corrective and Preventive Action (CAPA) tickets, conduct 5-Why root cause investigations, and generate audit logs.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Email API', 'Document Management'] }
  },

  {
    id: 238, section: 'legal', name: 'Immigration Case Management Software',
    category: 'Legal / Case / Compliance Software',
    desc: 'Specialized legal platform for immigration attorneys and visa consultants managing EB-2 NIW, work permits, petition dossiers, and USCIS milestones.',
    link: 'https://immigration-case-management.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/documents/demo-docs/immigration-case-management-software.docx', documentName: 'Immigration Case Management Software Specification',
    color: 'from-amber-500 to-yellow-600', glow: 'rgba(245, 158, 11, 0.4)', icon: Scale, type: 'Web App', status: 'Live', topSelling: true,
    features: ['EB-2 NIW & Visa Petition Stages', 'Client Evidence & Document Vault', 'USCIS Receipt & Deadline Tracking'],
    detailedFeatures: [
      { title: 'Petition Workflow & Milestones', description: 'Step-by-step case tracking from preliminary evaluation and labor certification to USCIS filing and final green card adjudication.' },
      { title: 'Evidence & Document Checklist Vault', description: 'Automated client checklists for recommendation letters, publication citations, degree equivalencies, and sworn translations.' },
      { title: 'USCIS Status & RFE Deadline Alerts', description: 'Real-time tracking of case receipt numbers, automated RFE deadline countdowns, and consular appointment reminders.' }
    ],
    howItWorks: [
      { icon: Briefcase, title: 'Client Intake & Visa Eligibility Audit', description: 'Onboard petitioners, evaluate qualification criteria for EB-2 NIW, O-1, or H-1B, and generate document requirements.' },
      { icon: ClipboardList, title: 'Evidence Collection & Petition Assembly', description: 'Review reference letters, research statements, and legal briefs through secure collaboration workflows.' },
      { icon: CheckCircle2, title: 'USCIS Filing & Case Adjudication', description: 'Track USCIS receipt notices, handle RFEs within strict deadlines, and prepare petitioners for consular interviews.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Cloud Storage', 'Document Vault'] }
  },

  // ────────────── EDUCATION & EDTECH (5) ──────────────
  {
    id: 205, section: 'education', name: 'School Management Software',
    category: 'Education / LMS / Hostel / Student Software',
    desc: 'K-12 school ERP with student admissions, online gradebook, timetable scheduling, fee management, and parent-teacher communication portal.',
    link: 'https://school-management.kiaansoftwaredemo.shop', youtube: 'https://youtu.be/LqSIaWM6cTw?si=_ieDlbhPtWaRic0n', documentUrl: '/documents/demo-docs/school-management-software.docx', documentName: 'School Management Software Specification',
    color: 'from-blue-500 to-indigo-600', glow: 'rgba(59, 130, 246, 0.4)', icon: GraduationCap, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Online Admissions & Enrollment', 'Digital Gradebook & Report Cards', 'Fee Collection & Receipt Generation'],
    detailedFeatures: [
      { title: 'Admissions Module', description: 'Online application forms, entrance test scheduling, merit list generation, and enrollment confirmation.' },
      { title: 'Academic Management', description: 'Class/section setup, subject allocation, teacher assignment, timetable generation, and exam scheduling.' },
      { title: 'Parent Portal', description: 'Parents view attendance, grades, homework, fee dues, and communicate with teachers through the app.' }
    ],
    howItWorks: [
      { icon: GraduationCap, title: 'Student Admission & Academic Setup', description: 'Process digital admissions, register student KYC, allocate classes, sections, house groups, and assign teachers.' },
      { icon: Calendar, title: 'Daily Attendance, Timetable & Exams', description: 'Record student attendance via biometric/mobile app, build academic timetables, and conduct online/offline examinations.' },
      { icon: DollarSign, title: 'Automated Fee Counter & Report Cards', description: 'Send automated school fee dues alerts, collect fees with receipt generation, and compile CBSE/ICSE grade report cards.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'SMS API'] }
  },
  {
    id: 204, section: 'education', name: 'Hostel Management Software',
    category: 'Education / LMS / Hostel / Student Software',
    desc: 'University and PG hostel accommodation management with room allocation, mess billing, visitor tracking, and complaint resolution.',
    link: 'https://hostel-management.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/hostel-management-software.docx', documentName: 'Hostel Management Software Specification',
    color: 'from-purple-500 to-indigo-600', glow: 'rgba(168, 85, 247, 0.4)', icon: Home, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Smart Room Allocation', 'Mess Menu & Billing', 'Visitor Entry & Exit Logs'],
    detailedFeatures: [
      { title: 'Room Allocation Engine', description: 'Automated room assignment based on gender, year, preferences, and occupancy optimization.' },
      { title: 'Mess Management', description: 'Weekly menu planning, meal attendance tracking, rebate calculations, and vendor payment processing.' },
      { title: 'Security & Discipline', description: 'Visitor logs, late entry tracking, leave approvals, and disciplinary incident recording.' }
    ],
    howItWorks: [
      { icon: Home, title: 'Building, Room & Bed Inventory Setup', description: 'Configure hostel blocks, floors, AC/Non-AC rooms, bed allocations, and define monthly rental and deposit tariffs.' },
      { icon: Users, title: 'Student Resident Onboarding & Biometrics', description: 'Register student KYC, capture guardian emergency contacts, assign hostel beds, and configure biometric gate access.' },
      { icon: DollarSign, title: 'Monthly Rent, Mess Billing & Gate Passes', description: 'Auto-generate monthly room rent and meal dues, collect payments online, and approve digital student night-out passes.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Biometric SDK', 'Payment Gateway'] }
  },
  {
    id: 74, section: 'education', name: 'Learning Management System (LMS) Software',
    category: 'Education / LMS / Hostel / Student Software',
    desc: 'Enterprise learning management system for online courses, certifications, assessments, and employee training with SCORM/xAPI compliance.',
    link: 'https://lms.softwaredemolive.live', youtube: '', documentUrl: '/documents/demo-docs/learning-management-system-lms-software.docx', documentName: 'Learning Management System (LMS) Software Specification',
    color: 'from-amber-400 to-orange-600', glow: 'rgba(251, 191, 36, 0.4)', icon: GraduationCap, type: 'Software', status: 'Live', topSelling: true,
    features: ['Course Builder & Content Library', 'Online Assessments & Certificates', 'SCORM/xAPI Compliance'],
    detailedFeatures: [
      { title: 'Course Authoring Studio', description: 'Create multimedia courses with video lectures, quizzes, assignments, and discussion forums.' },
      { title: 'Assessment Engine', description: 'Timed examinations, question banks, auto-grading, and plagiarism detection for academic integrity.' },
      { title: 'Learning Analytics', description: 'Track learner progress, completion rates, quiz scores, and generate compliance training reports.' }
    ],
    howItWorks: [
      { icon: GraduationCap, title: 'Create Course Content', description: 'Upload video lectures, create quizzes, design assignments, and organize into learning modules.' },
      { icon: Users, title: 'Enroll Learners', description: 'Assign courses to individuals or groups, set deadlines, and enable self-enrollment options.' },
      { icon: CheckCircle2, title: 'Assess & Certify', description: 'Learners complete modules, take assessments, and receive auto-generated certificates upon passing.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Video CDN', 'SCORM Engine'] }
  },
  {
    id: 65, section: 'education', name: 'Student Recruitment Management Software',
    category: 'Education / LMS / Hostel / Student Software',
    desc: 'Overseas education consultancy and student recruitment CRM for university applications, visa processing, and study abroad counselling.',
    link: 'https://studentrecruitmentvisa.softwaredemolive.live', youtube: '', documentUrl: '/documents/demo-docs/student-recruitment-management-software.docx', documentName: 'Student Recruitment Management Software Specification',
    color: 'from-indigo-500 to-purple-600', glow: 'rgba(99, 102, 241, 0.4)', icon: GraduationCap, type: 'Software', status: 'Live', topSelling: true,
    features: ['University Program Finder', 'Student Application Pipeline', 'Embassy Visa Stage Tracking'],
    detailedFeatures: [
      { title: 'Global University Directory', description: 'Search thousands of degree programs by country, tuition fees, IELTS requirements, and intakes.' },
      { title: 'Application Document Vault', description: 'Upload academic transcripts, SOPs, LORs, and passport copies with checklist verification.' },
      { title: 'Agent Commission Tracker', description: 'Track university commission payouts and sub-agent revenue sharing splits.' }
    ],
    howItWorks: [
      { icon: GraduationCap, title: 'Prospective Student Inquiry & Profile Evaluation', description: 'Capture study abroad inquiries, evaluate academic eligibility, test scores (IELTS/TOEFL), and shortlist universities.' },
      { icon: ClipboardList, title: 'University Application Submission', description: 'Prepare admission applications, review SOPs and recommendation letters, and track offer letter admissions from partner colleges.' },
      { icon: CheckCircle2, title: 'Visa Filing, Mock Interviews & Commission Slabs', description: 'Manage embassy visa document checklists, conduct mock visa interviews, and calculate university partner commissions.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['WhatsApp API', 'Document Verification'] }
  },
  {
    id: 224, section: 'education', name: 'Visa Consultation Management Software',
    category: 'Education / LMS / Hostel / Student Software',
    desc: 'End-to-end student visa, immigration consultation, and global university application tracking portal with appointment booking and document vault.',
    link: 'https://visa-consultation.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/student-visa-consultation.docx', documentName: 'Visa Consultation Management Software Specification',
    color: 'from-blue-500 to-indigo-600', glow: 'rgba(59, 130, 246, 0.4)', icon: GraduationCap, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Visa Application Workflow', 'Consultant Appointment Booking', 'Secure Document Vault'],
    detailedFeatures: [
      { title: 'Visa Application Workflow', description: 'Step-by-step visa processing pipeline with stage tracking, checklist validation, and embassy interview prep.' },
      { title: 'Consultant Appointment Booking', description: 'Schedule 1-on-1 virtual or in-person counseling sessions with certified immigration advisors.' },
      { title: 'Secure Document Vault', description: 'Encrypted document uploads for passports, transcripts, financial proofs, and automated verification status.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Applicant Consultation & Country Profiling', description: 'Register visa applicants (Student, Work, Tourist, PR), assess country criteria (Canada, UK, USA, AUS), and assign counselors.' },
      { icon: ClipboardList, title: 'Document Verification & Case Preparation', description: 'Review financial proof, employment records, biometric appointments, and prepare consulate visa submission packets.' },
      { icon: DollarSign, title: 'Milestone Fee Billing & Visa Grant Updates', description: 'Collect stage-wise consultancy service fees, send automated application status notifications, and celebrate visa approvals.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Calendar API', 'Payment Gateway'] }
  },

  // ────────────── CONSTRUCTION & FIELD SERVICE (6) ──────────────
  {
    id: 48, section: 'construction', name: 'Garage & Workshop Management Software',
    category: 'Construction / Workshop / Maintenance',
    desc: 'Automotive repair workshop and garage ERP for job card creation, spare part inventory, mechanic job tracking, and service billing.',
    link: 'https://garage-workshop.softwaredemolive.live', youtube: 'https://youtu.be/OHgJG7cYHko?si=dTveD3jZiTglhEh4', documentUrl: '/documents/demo-docs/garage-workshop-management-software.docx', documentName: 'Garage & Workshop Management Software Specification',
    color: 'from-amber-500 to-red-600', glow: 'rgba(245, 158, 11, 0.4)', icon: Settings, type: 'Software', status: 'Live', topSelling: true,
    features: ['Vehicle Digital Job Card', 'Spare Parts Stock & POS', 'Mechanic Labor & Commission Logs'],
    detailedFeatures: [
      { title: 'Digital Job Card Creation', description: 'Log vehicle license plate, chassis number, fuel level, customer complaints, and photos of scratches.' },
      { title: 'Parts Estimation & Approval', description: 'Send digital WhatsApp estimates for part replacements and labor charges for customer approval.' },
      { title: 'Service History & Reminders', description: 'Maintain vehicle service logs and automate next service oil-change SMS reminders.' }
    ],
    howItWorks: [
      { icon: HardHat, title: 'Vehicle Check-In & Digital Job Card Creation', description: 'Record customer complaints, odometer reading, fuel level, initial physical scratches, and generate digital job cards.' },
      { icon: Settings, title: 'Technician Bay Assignment & Spare Parts Issue', description: 'Assign repair jobs to mechanics, pull spare parts from store inventory with barcode scanning, and log labor hours.' },
      { icon: DollarSign, title: 'Quality Testing, Final Billing & Vehicle Handover', description: 'Complete final road test inspection checklist, generate GST repair invoice with warranty terms, and deliver vehicle.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['WhatsApp API', 'Payment Gateway'] }
  },
  {
    id: 209, section: 'construction', name: 'Contractor Management Software',
    category: 'Construction / Workshop / Maintenance',
    desc: 'Field service and subcontractor job dispatch platform for electrical, plumbing, HVAC, and trade contractors.',
    link: 'http://mini-contactor.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/contractor-management-software.docx', documentName: 'Contractor Management Software Specification',
    color: 'from-yellow-400 to-amber-500', glow: 'rgba(251, 191, 36, 0.4)', icon: HardHat, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Job Dispatch & Work Orders', 'Mobile Technician App', 'Instant Invoicing & Payments'],
    detailedFeatures: [
      { title: 'Work Order Pipeline', description: 'Create and assign field jobs with site address, photos, and trade requirements.' },
      { title: 'Material & Labor Tracking', description: 'Log parts used, labor hours worked, and job completion checklists on-site.' },
      { title: 'Digital Sign-off & Invoicing', description: 'Capture customer signatures and generate itemized invoices immediately after completion.' }
    ],
    howItWorks: [
      { icon: Hammer, title: 'Project Scope, BOQ & Cost Estimation', description: 'Build project bills of quantities (BOQ), calculate labor and material estimates, and generate client contractual proposals.' },
      { icon: Users, title: 'Subcontractor Scheduling & Daily Site Logs', description: 'Assign field trades (carpentry, electrical, plumbing), track daily site work progress, and record labor muster rolls.' },
      { icon: DollarSign, title: 'Milestone Billing & Expense Reconcile', description: 'Submit milestone progress claims, approve subcontractor invoices, track material deliveries, and maintain project gross margins.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Stripe', 'Twilio SMS'] }
  },
  {
    id: 28, section: 'construction', name: 'Painting Contractor Management Software',
    category: 'Construction / Workshop / Maintenance',
    desc: 'Residential and commercial painting contractor platform for square-footage color estimation, paint inventory, and crew scheduling.',
    link: 'https://painting.kiaansoftware.com', youtube: 'https://youtu.be/R1oAtSIR3Vk?si=THhwUfhOKx4V997p', documentUrl: '/documents/demo-docs/painting-contractor-management-software.docx', documentName: 'Painting Contractor Management Software Specification',
    color: 'from-teal-400 to-blue-500', glow: 'rgba(20, 184, 166, 0.4)', icon: Pencil, type: 'Software', status: 'Live', topSelling: true,
    features: ['Wall Area & Coat Estimator', 'Paint & Primer Material Calculation', 'Crew Shift & Site Timeline'],
    detailedFeatures: [
      { title: 'Instant Painting Estimator', description: 'Calculate exact liters of primer and topcoat needed based on wall area, doors, and windows.' },
      { title: 'Color Palette Visualizer', description: 'Help clients pick interior/exterior color palettes and sheen finishes with digital swatches.' },
      { title: 'Project Milestone Tracking', description: 'Track surface prep, priming, first coat, finish coat, and final client sign-off.' }
    ],
    howItWorks: [
      { icon: Pencil, title: 'Site Measurement & Paint Quotation Builder', description: 'Measure interior/exterior wall square footage, select paint brands and finishes, and generate instant branded client quotes.' },
      { icon: Users, title: 'Crew Allocation & Color Scheme Approval', description: 'Finalize client color swatches, schedule painting crew teams, order primer/paint gallons, and track job timelines.' },
      { icon: CheckCircle2, title: 'Final Touchup Inspection & Payment Collection', description: 'Conduct final walkthrough checklist with client, resolve touchup items, capture completion sign-off, and collect payment.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['PDF Generator', 'Stripe'] }
  },
  {
    id: 206, section: 'construction', name: 'Construction Company Website',
    category: 'Construction / Workshop / Maintenance',
    desc: 'High-impact commercial construction, architecture, and infrastructure project management platform with site tracking and RFP requests.',
    link: 'https://construction-landingpage.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/construction-management-pro.docx', documentName: 'Construction Company Website Specification',
    color: 'from-orange-500 to-amber-500', glow: 'rgba(249, 115, 22, 0.4)', icon: HardHat, type: 'Website', status: 'Live', topSelling: true,
    features: ['Commercial Project Showcase', 'Blueprint & Scope Estimator', 'Client Tender & Bid Portal'],
    detailedFeatures: [
      { title: 'Architectural Portfolio', description: 'Showcase high-rise, commercial, and industrial projects with high-resolution drone photo galleries.' },
      { title: 'Estimates & RFPs', description: 'Guided client inquiry system to capture square footage, project timeline, and architectural budget tier.' },
      { title: 'Milestone Tracking', description: 'Live construction milestone updates, safety compliance certifications, and subcontractor management.' }
    ],
    howItWorks: [
      { icon: HardHat, title: 'Construction Project & Site Plan Setup', description: 'Upload architectural blueprints, define construction phase milestones, set safety compliance rules, and assign site engineers.' },
      { icon: Hammer, title: 'Material Inward & Daily Progress Reports (DPR)', description: 'Record cement/steel deliveries, log equipment operating hours, track concrete pouring, and submit daily site progress photos.' },
      { icon: DollarSign, title: 'Client RA Billing & Contractor Certificates', description: 'Generate running account (RA) bills based on measured work completed, manage retention funds, and verify vendor payouts.' }
    ],
    techStack: { frontend: ['React', 'Next.js'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['Vercel', 'AWS'], integrations: [] }
  },

  {
    id: 245, section: 'construction', name: 'Mobile Workshop Management Software',
    category: 'Construction / Workshop / Maintenance',
    desc: 'On-demand mobile mechanic and roadside assistance platform for GPS technician dispatch, digital vehicle inspection, and on-site billing.',
    link: 'https://mobile-workshop.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/automotive-workshop-management.docx', documentName: 'Mobile Workshop Management Software Specification',
    color: 'from-orange-500 to-amber-600', glow: 'rgba(249, 115, 22, 0.4)', icon: Wrench, type: 'Web App', status: 'Live', topSelling: true,
    features: ['GPS Van Dispatch & Live Routing', 'Mobile Vehicle Inspection Job Cards', 'Van Spare Parts Stock & Mobile POS'],
    detailedFeatures: [
      { title: 'Live Technician GPS Dispatch', description: 'Locate breakdown locations, match nearest service vans, and guide technicians with turn-by-turn navigation.' },
      { title: 'Digital Multi-Point Inspection Sheets', description: 'Mobile tablet inspection checklists for battery health, tyre tread, brake wear, engine diagnostics, and photo proof.' },
      { title: 'On-Site Parts Billing & Mobile POS', description: 'Deduct replacement parts from van inventory, compute labor hours, and generate on-the-spot GST invoices.' }
    ],
    howItWorks: [
      { icon: Truck, title: 'Breakdown Call & GPS Dispatch', description: 'Customer requests roadside service; system routes nearest available mobile mechanic van to the breakdown spot.' },
      { icon: Wrench, title: 'On-Site Inspection & Digital Job Card', description: 'Technician runs diagnostics on tablet, records required spare parts, and gets instant customer authorization.' },
      { icon: DollarSign, title: 'Job Completion & On-Site Mobile Billing', description: 'Work is verified, instant digital invoice is sent via SMS, and payment is collected on-site via card or UPI.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Google Maps API', 'Mobile POS'] }
  },
  {
    id: 246, section: 'construction', name: 'Tyre Shop & Service Management Software',
    category: 'Construction / Workshop / Maintenance',
    desc: 'Specialized tyre dealership and fitment center software for tyre size catalogs, wheel alignment job cards, and manufacturer warranty tracking.',
    link: 'https://tyre.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/documents/demo-docs/tyre-shop-and-service-management-software.docx', documentName: 'Tyre Shop & Service Management Software Specification',
    color: 'from-red-500 to-rose-600', glow: 'rgba(239, 68, 68, 0.4)', icon: Disc, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Tyre Size & Tread Inventory Matrix', 'Wheel Alignment & Balancing Job Cards', 'DOT Serial & Warranty Registration'],
    detailedFeatures: [
      { title: 'Tyre Size & Brand Inventory Matrix', description: 'Filter inventory by width, aspect ratio, rim diameter, speed index, tread pattern, and brands like Michelin, Goodyear, MRF.' },
      { title: 'Service Bay Scheduling & Job Cards', description: 'Assign vehicles to hydraulic bays for tyre replacement, 3D computer wheel alignment, wheel balancing, and nitrogen inflation.' },
      { title: 'DOT Serial Number & Warranty Tracking', description: 'Scan manufacturing date DOT codes, register manufacturer warranties digitally, and schedule tyre rotation reminders.' }
    ],
    howItWorks: [
      { icon: Disc, title: 'Tyre Inventory & Stock Inward', description: 'Log tyre shipments by brand, size, pattern, and unique DOT manufacturing serial codes into the system.' },
      { icon: Wrench, title: 'Fitment Selection & Bay Allocation', description: 'Match customer vehicle specs to compatible tyres, assign technician bay, and queue wheel alignment.' },
      { icon: CheckCircle2, title: 'Service Sign-Off & Digital Warranty', description: 'Record wheel alignment readings, generate tax invoice, and issue customer digital tyre warranty certificate.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Barcode Scanner', 'SMS API'] }
  },

  // ────────────── SPORTS & FITNESS (2) ──────────────
  {
    id: 214, section: 'sports', name: 'Sports Turf Management Software',
    category: 'Gym / Sports / Turf Software',
    desc: 'Live turf, court, and sports arena booking system with slot scheduling, split payments, floodlight automation, and league management.',
    link: 'http://turf-new.kiaansoftwaredemo.shop', youtube: 'https://youtu.be/-KuxJBX0WS8?si=b2KrNu1jrYtIS9ST', documentUrl: '/documents/demo-docs/sports-turf-management-software.docx', documentName: 'Sports Turf Management Software Specification',
    color: 'from-green-400 to-emerald-600', glow: 'rgba(34, 197, 94, 0.4)', icon: Activity, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Real-Time Slot Matrix', 'Split Billing & Upfront Deposit', 'Multi-Sport Court Scheduling'],
    detailedFeatures: [
      { title: 'Visual Slot Matrix', description: 'Interactive time-slot grid with dynamic peak/off-peak pricing and rain-out cancellations.' },
      { title: 'Group Split Payments', description: 'Allow team captains to share payment links among team members for group cost sharing.' },
      { title: 'Tournament & League Manager', description: 'Automate knockout brackets, round-robin fixtures, point tables, and top scorer logs.' }
    ],
    howItWorks: [
      { icon: Dumbbell, title: 'Turf & Court Slot Configuration', description: 'Define cricket turf, football pitch, or badminton court slots, set peak/non-peak hourly pricing, and configure lighting fees.' },
      { icon: Calendar, title: 'Online Booking & Instant Slot Reservation', description: 'Players check live slot availability on web/mobile, book preferred time slots, pay advance tokens, and receive booking QR codes.' },
      { icon: CheckCircle2, title: 'Gate Check-In & Tournament Management', description: 'Staff scan player QR code at entry, organize weekend tournaments, manage live leaderboards, and sell sports refreshments.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Razorpay', 'WhatsApp Bot'] }
  },
  {
    id: 63, section: 'sports', name: 'Gym Management Software',
    category: 'Gym / Sports / Turf Software',
    desc: 'Gym, fitness studio, and crossfit box management software for member subscriptions, trainer bookings, and biometrics turnstiles.',
    link: 'http://gym.softwaredemolive.live', youtube: 'https://youtu.be/WYKlyKrNQjg?si=kEeImRK4CHIIVwdA', documentUrl: '/documents/demo-docs/gym-management-software.docx', documentName: 'Gym Management Software Specification',
    color: 'from-red-500 to-amber-600', glow: 'rgba(239, 68, 68, 0.4)', icon: Activity, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Member Subscription Plans', 'Biometric Turnstile Access', 'Personal Trainer Class Scheduling'],
    detailedFeatures: [
      { title: 'Membership & Renewal Engine', description: 'Monthly, quarterly, and annual gym plans with auto-renewal alerts and freeze options.' },
      { title: 'Access Control Integration', description: 'Connect with RFID turnstiles and biometric fingerprint scanners for gym entry.' },
      { title: 'Diet & Workout Planner', description: 'Trainers assign workout routines and diet charts directly to member mobile apps.' }
    ],
    howItWorks: [
      { icon: Dumbbell, title: 'Membership Package & Trainer Setup', description: 'Define monthly, quarterly, and annual gym packages, personal training sessions, group class schedules, and trainer commissions.' },
      { icon: Users, title: 'Member Onboarding & Biometric Access', description: 'Register new members with fitness goals, medical declarations, process membership fee payments, and sync biometric gate turnstiles.' },
      { icon: CheckCircle2, title: 'Workout Plans, Attendance & Renewals', description: 'Assign diet and workout schedules via mobile app, monitor daily gym check-ins, and trigger automated membership renewal alerts.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Biometric SDK', 'Payment Gateway'] }
  },

  // ────────────── RETAIL & SPECIALIZED (6) ──────────────
  {
    id: 231, section: 'salon', name: 'Fashion & Clothing E-Commerce Software',
    category: 'Specialized Retail / Spa / Salon Platforms',
    desc: 'Modern omnichannel apparel and fashion e-commerce operating system for size/color variant catalog, order fulfillment, flash sales, and return management.',
    link: 'https://clothing-e-commerce.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/toy-store-rental-marketplace.docx', documentName: 'Fashion & Clothing E-Commerce Software Specification',
    color: 'from-pink-500 to-rose-600', glow: 'rgba(244, 63, 94, 0.4)', icon: ShoppingBag, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Variant Catalog (Size & Color)', 'Fast Checkout & Payment Gateways', 'Return & Exchange Management'],
    detailedFeatures: [
      { title: 'Apparel Variant Matrix', description: 'Multi-dimensional SKU management for apparel sizes, color swatches, seasonal collections, and live stock sync.' },
      { title: 'High-Conversion Checkout', description: 'One-click checkout, guest checkout, UPI/card gateway integrations, automated abandoned cart recovery, and discount coupons.' },
      { title: 'Order & Return Lifecycle', description: 'Automated reverse logistics, customer return portal, size exchange processing, and courier API tracking.' }
    ],
    howItWorks: [
      { icon: ShoppingBag, title: 'Launch Apparel Catalog', description: 'Upload seasonal fashion lines with high-res lookbooks, size charts, variant swatches, and pricing tiers.' },
      { icon: ClipboardList, title: 'Process Customer Orders', description: 'Real-time order routing, automated warehouse pick-and-pack slips, and courier shipping label generation.' },
      { icon: CheckCircle2, title: 'Manage Returns & Scale', description: 'Handle size exchanges effortlessly, monitor customer lifetime value, and scale sales through built-in marketing tools.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Razorpay / Stripe', 'Shiprocket Logistics'] }
  },
  {
    id: 71, section: 'salon', name: 'Salon Management Software',
    category: 'Creative / Design / Specialized Business',
    desc: 'Luxury salon, beauty parlor, and spa management software for stylist appointments, service packages, and retail inventory POS.',
    link: 'https://salon.softwaredemolive.live/', youtube: 'https://youtu.be/8Z-K_ujvPzo?si=sPvK3VhyNUBBhf2h', documentUrl: '/documents/demo-docs/salon-management-software.docx', documentName: 'Salon Management Software Specification',
    color: 'from-pink-500 to-rose-600', glow: 'rgba(236, 72, 153, 0.4)', icon: Users, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Stylist Appointment Calendar', 'Customer Loyalty & Membership', 'POS Billing & Commission Split'],
    detailedFeatures: [
      { title: 'Interactive Stylist Chair Booking', description: 'Schedule haircuts, spa treatments, coloring sessions by stylist and service duration.' },
      { title: 'Customer Profile & Treatment History', description: 'Maintain client hair color formulas, skin sensitivities, past visits, and birthday discounts.' },
      { title: 'Stylist Commission Payroll', description: 'Automate stylist commission splits on services completed and retail shampoo/product sales.' }
    ],
    howItWorks: [
      { icon: ShoppingBag, title: 'Service Menu & Stylist Roster Setup', description: 'Catalog hair, skin, and spa services with treatment durations, package pricing, and assign stylists to stations.' },
      { icon: Calendar, title: 'Smart Appointment Booking & Walk-Ins', description: 'Schedule client appointments online or handle front-desk walk-ins, assigning requested stylists and treatment rooms.' },
      { icon: DollarSign, title: 'POS Express Billing, Tips & Loyalty Points', description: 'Process quick bills with stylist commission splits, apply loyalty reward discounts, and send automated review requests.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['SMS Gateway', 'Payment Gateway'] }
  },
  {
    id: 211, section: 'salon', name: 'Contractor Project Management Software',
    category: 'Creative / Design / Specialized Business',
    desc: 'Interactive 3D configurator and sales consultation platform for custom outdoor BBQ islands, kitchens, and luxury patio living spaces.',
    link: 'https://outdoor-kitchen.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/contractor-project-management-software.docx', documentName: 'Contractor Project Management Software Specification',
    color: 'from-emerald-500 to-teal-600', glow: 'rgba(16, 185, 129, 0.4)', icon: Utensils, type: 'Website', status: 'Live', topSelling: true,
    features: ['Modular Layout Builder', 'Material & Finish Catalog', 'Instant Quote Estimator'],
    detailedFeatures: [
      { title: 'Modular Unit Designer', description: 'Select grill models, pizza ovens, under-counter refrigeration, and custom storage cabinets.' },
      { title: 'Stone & Countertop Finishes', description: 'High-definition preview of granite, porcelain, and stone cladding textures.' },
      { title: 'Direct Contractor Handover', description: 'Generate comprehensive dimensional blueprints and itemized BOMs for local installation teams.' }
    ],
    howItWorks: [
      { icon: Hammer, title: 'Design Consultation & Custom 3D Scope', description: 'Capture backyard dimensions, client outdoor kitchen preferences (grills, countertops, appliances), and create project proposals.' },
      { icon: ClipboardList, title: 'Material Procurement & Masonry Scheduling', description: 'Order stone, stainless steel drawers, and outdoor appliances, schedule masonry and gas fitting teams with timeline milestones.' },
      { icon: CheckCircle2, title: 'Installation Inspection & Final Handover', description: 'Perform gas line pressure tests, verify countertop sealing, provide appliance warranties, and collect final milestone payments.' }
    ],
    techStack: { frontend: ['Next.js', 'Three.js'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['Vercel'], integrations: ['PDF Generator'] }
  },
  {
    id: 35, section: 'salon', name: 'Toy Store Inventory Management Software',
    category: 'Creative / Design / Specialized Business',
    desc: 'Omnichannel toy retail ERP with barcode inventory, age-group categorization, warranty tracking, and POS checkout.',
    link: 'https://toy-ui.kiaansoftware.com', youtube: 'https://youtu.be/j7JFxjNuZ3g?si=IOo-SgX3quGcYEti', documentUrl: '/documents/demo-docs/toy-store-inventory-management-software.docx', documentName: 'Toy Store Inventory Management Software Specification',
    color: 'from-amber-400 to-orange-500', glow: 'rgba(245, 158, 11, 0.4)', icon: ShoppingBag, type: 'Software', status: 'Live', topSelling: true,
    features: ['Age & Category Indexing', 'Fast Barcode POS Billing', 'Safety & Warranty Tracking'],
    detailedFeatures: [
      { title: 'Toy Product Catalog', description: 'Organize by brand, age group, safety certificates, battery requirements, and variant SKUs.' },
      { title: 'Point of Sale (POS)', description: 'Rapid barcode scan checkout, customer loyalty rewards, and gift receipt generation.' },
      { title: 'Inventory Replenishment', description: 'Low stock alerts and automatic supplier purchase orders for high-demand holiday items.' }
    ],
    howItWorks: [
      { icon: ShoppingBag, title: 'Toy Catalog & Subscription Plans Setup', description: 'Catalog educational toys, board games, and ride-ons with age categories, hygiene inspection badges, and rental price tiers.' },
      { icon: Calendar, title: 'Parent Toy Reservation & Home Delivery', description: 'Parents select toys on monthly subscription or individual rental, choose doorstep delivery dates, and make online payments.' },
      { icon: CheckCircle2, title: 'Toy Return, Sanitization & Stock Restock', description: 'Pickup returned toys, conduct thorough UV sanitization and safety inspections, and restock items for the next child borrower.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['POS Scanner', 'Thermal Printer'] }
  },

  {
    id: 240, section: 'salon', name: 'Pet Products E-Commerce Software',
    category: 'Retail / E-Commerce / Store Management',
    desc: 'Modern e-commerce platform for pet supplies, food, grooming essentials, and subscription care boxes with breed-specific filtering.',
    link: 'https://e-commerce-dog-bucket.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/documents/demo-docs/pet-products-e-commerce-software.docx', documentName: 'Pet Products E-Commerce Software Specification',
    color: 'from-amber-400 to-orange-500', glow: 'rgba(251, 146, 60, 0.4)', icon: ShoppingBag, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Breed & Dietary Filtering Engine', 'Autoship Recurring Subscriptions', 'Multi-Warehouse Inventory & Dispatch'],
    detailedFeatures: [
      { title: 'Pet-Specific Catalog & Recommendations', description: 'Filter pet foods and accessories by animal species, breed size, life stage, dietary sensitivities, and organic certifications.' },
      { title: 'Autoship & Repeat Box Subscriptions', description: 'Enable pet parents to schedule auto-deliveries of monthly food bags, flea preventatives, and treat buckets with subscription discounts.' },
      { title: 'Fulfillment & Courier Logistics', description: 'Automated pick-pack-ship workflows, multi-warehouse stock allocations, and real-time package delivery tracking.' }
    ],
    howItWorks: [
      { icon: ShoppingBag, title: 'Catalog & Pet Profile Setup', description: 'Upload pet food, toys, and healthcare supplies organized by animal type, breed size, and nutritional diet.' },
      { icon: Users, title: 'Shopping & Subscription Checkout', description: 'Pet parents choose one-time purchases or subscribe for automated recurring deliveries with card/UPI payments.' },
      { icon: Truck, title: 'Warehouse Fulfillment & Live Tracking', description: 'Orders route to the closest hub, generate courier labels, and dispatch with SMS/WhatsApp delivery updates.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'Shiprocket'] }
  },
  {
    id: 243, section: 'salon', name: 'E-Commerce Management Software',
    category: 'Retail / E-Commerce / Store Management',
    desc: 'Enterprise multi-category e-commerce platform and concierge ordering system with centralized catalog, vendor management, and VIP support.',
    link: 'https://all-ecommerce-services.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/documents/demo-docs/e-commerce-management-software.docx', documentName: 'E-Commerce Management Software Specification',
    color: 'from-rose-500 to-pink-600', glow: 'rgba(244, 63, 94, 0.4)', icon: ShoppingCart, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Multi-Vendor Product Catalog', 'Omnichannel Inventory Synchronization', 'Concierge & VIP Order Fulfillment'],
    detailedFeatures: [
      { title: 'Multi-Vendor Product Marketplace', description: 'Unified catalog supporting thousands of products, rich media galleries, brand storefronts, and flexible category trees.' },
      { title: 'Real-Time Stock & Warehouse Sync', description: 'Centralized inventory pool synchronizing stock levels across multiple fulfillment centers and third-party vendor warehouses.' },
      { title: 'VIP Concierge & White-Glove Support', description: 'Dedicated concierge service for bespoke orders, gift packaging, urgent deliveries, and customized enterprise procurement.' }
    ],
    howItWorks: [
      { icon: ShoppingCart, title: 'Marketplace & Inventory Cataloging', description: 'Upload curated products, configure multi-tier pricing, set tax rules, and onboard authorized brand vendors.' },
      { icon: Users, title: 'Cart Checkout & Secure Payment', description: 'Shoppers place orders via desktop or mobile with multi-currency payment gateways and coupon validation.' },
      { icon: Truck, title: 'Order Routing & Doorstep Fulfillment', description: 'Orders route to the nearest warehouse, generate courier dispatch slips, and provide live shipment tracking.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'Shiprocket'] }
  },

  // ────────────── BUSINESS SERVICES (5 — includes Export) ──────────────
  {
    id: 56, section: 'salon', name: 'Export Management Software',
    category: 'Export / Analytics / Miscellaneous',
    desc: 'International export-import trade documentation, custom container tracking, proforma invoicing, and letter of credit (LC) management.',
    link: 'https://workana-export.softwaredemolive.live', youtube: '', documentUrl: '/documents/demo-docs/export-management-software.docx', documentName: 'Export Management Software Specification',
    color: 'from-emerald-500 to-teal-700', glow: 'rgba(16, 185, 129, 0.4)', icon: Layers, type: 'Software', status: 'Live', topSelling: true,
    features: ['Export Documentation (Packing List/Invoice)', 'Letter of Credit (LC) Compliance', 'Container Shipping Live Tracking'],
    detailedFeatures: [
      { title: 'Export Trade Documentation', description: 'Generate Proforma Invoices, Commercial Invoices, Packing Lists, and Certificate of Origin.' },
      { title: 'Shipping Line & Container Status', description: 'Track Bill of Lading (BL) numbers, port arrival ETAs, and customs clearance status.' },
      { title: 'Foreign Exchange & Hedging', description: 'Multi-currency invoicing with exchange rate hedging and export incentive tracking.' }
    ],
    howItWorks: [
      { icon: Briefcase, title: 'Export Contract & Commodity RFQ Management', description: 'Record international buyer purchase contracts, commodity quality specifications, Incoterms (FOB/CIF), and multi-currency pricing.' },
      { icon: ClipboardList, title: 'Shipping Documentation & Container Booking', description: 'Generate commercial invoices, packing lists, certificates of origin, Phytosanitary certificates, and book cargo containers.' },
      { icon: DollarSign, title: 'Letter of Credit (LC) & Bank Remittance', description: 'Track Letter of Credit compliance milestones, submit shipping documents to banks, and reconcile foreign exchange payments.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Shipping Line APIs', 'Currency Feeds'] }
  },
  {
    id: 43, section: 'service', name: 'Online Survey Management Software',
    category: 'Survey / Queue / Service Platforms',
    desc: 'Advanced digital survey builder, offline field questionnaire app, and real-time statistical analytics platform.',
    link: 'http://surveymate.kiaansoftware.com', youtube: 'https://youtu.be/AmPq7C8m9jQ?si=muEO9sLnTz4QL7NA', documentUrl: '/documents/demo-docs/online-survey-management-software.docx', documentName: 'Online Survey Management Software Specification',
    color: 'from-indigo-400 to-purple-600', glow: 'rgba(99, 102, 241, 0.4)', icon: ClipboardList, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Conditional Skip Logic Builder', 'Offline GPS-Tagged Data Entry', 'Real-Time Cross-Tab Analytics'],
    detailedFeatures: [
      { title: 'Drag-and-Drop Survey Builder', description: 'Multiple choice, Likert scales, matrix tables, rating sliders, and logic branching rules.' },
      { title: 'Field Agent Mobile Collector', description: 'Collect survey responses without internet connection with automatic GPS coordinates and audio logs.' },
      { title: 'Live Dashboard & SPSS Export', description: 'Instant frequency distributions, sentiment breakdown, and export to CSV, Excel, and SPSS.' }
    ],
    howItWorks: [
      { icon: MessageSquare, title: 'Interactive Survey & Logic Builder', description: 'Design multi-page surveys with branching logic, NPS score rating scales, file uploads, and demographic screeners.' },
      { icon: Users, title: 'Target Audience Distribution & Panels', description: 'Distribute survey campaigns via web links, email lists, or verified respondent panels with fraud detection controls.' },
      { icon: CheckCircle2, title: 'Real-Time Analytics & Report Exports', description: 'Analyze response distributions, cross-tabulations, sentiment breakdown, and export data directly to Excel, CSV, or SPSS.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Excel Export', 'Google Sheets'] }
  },
  {
    id: 53, section: 'service', name: 'Queue Management Software',
    category: 'Survey / Queue / Service Platforms',
    desc: 'Smart digital queue, token dispensing, multi-counter display, and customer wait-time analytics system for banks, clinics, and service centers.',
    link: 'https://queue-managment.softwaredemolive.live', youtube: 'https://youtu.be/zkwK_hrgkvI?si=qRgN4gVeXSPnx6TM',
    documentUrl: '/public/documents/demo-docs/online-survey-research-platform.docx', documentName: 'Queue Management Software Specification',
    color: 'from-cyan-400 to-blue-600', glow: 'rgba(6, 182, 212, 0.4)', icon: Users, type: 'Software', status: 'Live', topSelling: true,
    features: ['Digital Token Kiosk & SMS Token', 'Multi-Counter Calling Terminal', 'Audio Announcement & Display Screen'],
    detailedFeatures: [
      { title: 'Touch Kiosk & Virtual Queue', description: 'Customers select service category at touch kiosk or scan QR code to wait in virtual queue.' },
      { title: 'Operator Calling Console', description: 'Counter staff call next token, recall, transfer to other department, or mark no-show.' },
      { title: 'Waiting Lounge Screen Display', description: 'Full-HD television display showing current serving tokens, counter numbers, and audio chime.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Dispense Token to Customer', description: 'Customer picks service category and receives printed token ticket or SMS token link.' },
      { icon: Cpu, title: 'Counter Staff Calls Next', description: 'Agent clicks next customer on their terminal; screen chimes and displays token number.' },
      { icon: CheckCircle2, title: 'Serve & Measure SLA', description: 'System records serving time, wait duration, and overall staff efficiency metrics.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js', 'Socket.io'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Thermal Printer SDK', 'Text-to-Speech'] }
  },
  {
    id: 69, section: 'service', name: 'Recruitment & Placement Management Software',
    category: 'Survey / Queue / Service Platforms',
    desc: 'Staffing agency, HR headhunting, and candidate recruitment platform with resume parsing, interview rounds, and client invoicing.',
    link: 'http://placementservice.softwaredemolive.live', youtube: 'https://youtu.be/o4VZ8LRNkSo?si=gAgCN4sLkYrCZbJ6',
    documentUrl: '/documents/demo-docs/recruitment-and-placement-management-software.docx', documentName: 'Recruitment & Placement Management Software Specification',
    color: 'from-blue-600 to-indigo-700', glow: 'rgba(37, 99, 235, 0.4)', icon: Briefcase, type: 'Software', status: 'Live', topSelling: true,
    features: ['Resume Parser & Skill Search', 'Candidate Pipeline Kanban', 'Client Placement Invoicing'],
    detailedFeatures: [
      { title: 'AI Resume Indexing', description: 'Automatically extract candidate skills, experience years, education, and current CTC from PDF resumes.' },
      { title: 'Recruitment Pipeline Matrix', description: 'Track candidates through screening, technical interview, client round, offer, and joining.' },
      { title: 'Placement Fee Billing', description: 'Generate recruitment fee invoices based on candidate annual CTC percentage upon joining.' }
    ],
    howItWorks: [
      { icon: Briefcase, title: 'Post Client Job Openings', description: 'Create job descriptions with required skills, experience bracket, and commission terms.' },
      { icon: Users, title: 'Source & Match Candidates', description: 'Match candidate resumes against job criteria and schedule client interview rounds.' },
      { icon: DollarSign, title: 'Candidate Joining & Invoicing', description: 'Confirm candidate joining date and issue recruitment commission invoice to client.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Resume Parser', 'Email API'] }
  },

  {
    id: 242, section: 'service', name: 'Laundry Management Software',
    category: 'Business Services / Facilities Management',
    desc: 'End-to-end laundry and dry cleaning operations platform with garment barcode tagging, wash-stage tracking, and home delivery dispatch.',
    link: 'https://laundry-management-system.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/documents/demo-docs/laundry-management-software.docx', documentName: 'Laundry Management Software Specification',
    color: 'from-cyan-500 to-blue-500', glow: 'rgba(6, 182, 212, 0.4)', icon: Shirt, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Garment Barcode Tagging & Scan', 'Wash, Dry & Press Cycle Tracking', 'Home Pickup & Delivery Routing'],
    detailedFeatures: [
      { title: 'Waterproof Garment Barcode Tagging', description: 'Print durable barcode tags per article to prevent mixed clothes, track fabric care labels, and record pre-existing stains.' },
      { title: 'Multi-Stage Workflow Monitor', description: 'Live status boards for sorting, chemical washing, delicate dry cleaning, steam pressing, and final QC inspection.' },
      { title: 'Doorstep Pickup & Delivery Dispatch', description: 'Assign drivers for laundry collection, send automated ready-for-delivery WhatsApp alerts, and collect POS payments.' }
    ],
    howItWorks: [
      { icon: Shirt, title: 'Order Intake & Garment Tagging', description: 'Log customer clothes, inspect fabric conditions, and attach waterproof thermal barcode tags to each item.' },
      { icon: Settings, title: 'Washing, Dry Cleaning & Steam Press', description: 'Plant operators scan barcodes as garments move through washer machines, specialized dry cleaning, and finishing.' },
      { icon: Truck, title: 'Packaging & Doorstep Delivery', description: 'Package items by hanger or fold, notify customers via SMS/WhatsApp, and record digital proof of delivery.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Thermal Printer', 'WhatsApp API'] }
  },

  // ────────────── EVENTS & ENTERTAINMENT (6) ──────────────
  {
    id: 201, section: 'booking', name: 'Boat & Jet Ski Rental Booking Software',
    category: 'Event / Travel / Entertainment',
    desc: 'Luxury yacht, speed boat, and jet-ski rental reservation platform with real-time slot scheduling, captain addons, and fleet management.',
    link: 'http://boat-jet-booking.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/boat-jet-ski-rental-booking-software.docx', documentName: 'Boat & Jet Ski Rental Booking Software Specification',
    color: 'from-cyan-400 to-blue-600', glow: 'rgba(6, 182, 212, 0.4)', icon: Activity, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Vessel Fleet Showcase', 'Hourly / Daily Slot Booking', 'Captain & Equipment Addons'],
    detailedFeatures: [
      { title: 'Vessel Fleet Showcase', description: 'Display premium boats, yachts, and jet skis with high-res galleries, specs, and passenger capacities.' },
      { title: 'Real-Time Slot Booking', description: 'Live availability calendar with instant slot confirmation, deposit handling, and digital boarding passes.' },
      { title: 'Fleet & Safety Operations', description: 'Captain allocation, safety gear checklists, and rental timeline tracking for marina operators.' }
    ],
    howItWorks: [
      { icon: ShoppingBag, title: 'Fleet Listing & Rental Slot Setup', description: 'Catalog yachts, catamarans, jet skis, and speedboats with passenger capacity, hourly/full-day rates, and captain inclusions.' },
      { icon: Calendar, title: 'Online Reservation & Digital Boarding Pass', description: 'Tourists choose departure dates, select available rental time slots, pay booking deposits, and get instant digital boarding passes.' },
      { icon: CheckCircle2, title: 'Dock Check-In & Coast Guard Clearance', description: 'Marina staff verify client ID and boarding QR code at dock, conduct safety briefings, log life jackets, and record trip return.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Stripe', 'Weather API'] }
  },
  {
    id: 47, section: 'booking', name: 'Event Management Software',
    category: 'Event / Travel / Entertainment',
    desc: 'Corporate conference, concert, and wedding event planning suite with guest RSVP, floor plan seating, and vendor milestone tracking.',
    link: 'https://event-management.softwaredemolive.live', youtube: 'https://youtu.be/WXFBK117hq8?si=olRlF_0aFhn43hyr', documentUrl: '/documents/demo-docs/event-management-software.docx', documentName: 'Event Management Software Specification',
    color: 'from-purple-500 to-pink-600', glow: 'rgba(147, 51, 234, 0.4)', icon: Calendar, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Digital Guest RSVP & Ticketing', 'Interactive Table Seating Chart', 'Vendor Budget & Task Timeline'],
    detailedFeatures: [
      { title: 'Event Ticketing & Passes', description: 'Create tiered VIP/General tickets, custom registration questionnaires, and QR code badges.' },
      { title: 'Table & Seating Planner', description: 'Drag-and-drop banquet tables, stage positioning, and guest seat allocations.' },
      { title: 'Vendor & Budget Tracker', description: 'Manage caterers, decorators, audio-visual crew, and track payment deposit schedules.' }
    ],
    howItWorks: [
      { icon: PartyPopper, title: 'Event Creation & Ticket Tier Setup', description: 'Publish concerts, conferences, or festivals with venue seat maps, early-bird and VIP ticket tiers, and promotional discount codes.' },
      { icon: Calendar, title: 'Online Ticket Sales & QR Pass Issuance', description: 'Attendees purchase tickets through secure payment gateways and receive unique anti-counterfeit QR code tickets on WhatsApp/Email.' },
      { icon: CheckCircle2, title: 'High-Speed Gate Scanning & Organizer Payout', description: 'Event security scans attendee QR tickets via mobile scanner app for fast entry, and organizers receive automated ticket sales payouts.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Stripe', 'QR Scanner SDK'] }
  },
  {
    id: 20, section: 'booking', name: 'Carnival Management Software',
    category: 'Event / Travel / Entertainment',
    desc: 'Theme park, carnival, and family entertainment center ERP for RFID wristband ticketing, ride queues, and arcade game credits.',
    link: 'https://carnival-management.kiaansoftware.com', youtube: '',
    documentUrl: '/public/documents/demo-docs/event-ticketing-management.docx', documentName: 'Carnival Management Software Specification',
    color: 'from-fuchsia-500 to-purple-600', glow: 'rgba(217, 70, 239, 0.4)', icon: Activity, type: 'Software', status: 'Live', topSelling: true,
    features: ['RFID Wristband Cashless POS', 'Ride Safety & Wait Times', 'Game Credit & Redemption Desk'],
    detailedFeatures: [
      { title: 'Cashless RFID Ecosystem', description: 'Top-up wristbands for gate entry, roller coaster access, food stalls, and midway games.' },
      { title: 'Live Queue & Capacity Control', description: 'Monitor real-time ride throughput, queue wait times, and safety inspection cycles.' },
      { title: 'Arcade Prize Redemption', description: 'Digital ticket counting and prize inventory reconciliation at redemption counters.' }
    ],
    howItWorks: [
      { icon: Activity, title: 'Issue RFID Wristbands', description: 'Visitors receive waterproof RFID wristbands loaded with entry passes and credit balances.' },
      { icon: MousePointer2, title: 'Tap to Ride & Play', description: 'Guests tap turnstiles to board rides and play arcade games with zero cash needed.' },
      { icon: DollarSign, title: 'Manage Park Revenue', description: 'Operators monitor real-time stall earnings, ride popularity, and automated daily P&L.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['RFID Reader SDK', 'Payment Gateway'] }
  },
  {
    id: 221, section: 'booking', name: 'Wedding Photography Website',
    category: 'Event / Travel / Entertainment',
    desc: 'High-end photography, cinematography studio booking, client proofing galleries, and production milestone management suite.',
    link: 'http://wedding-photography-website.kiaansoftwaredemo.shop', youtube: '', documentUrl: '/documents/demo-docs/wedding-photography-website.docx', documentName: 'Wedding Photography Website Specification',
    color: 'from-pink-500 to-rose-600', glow: 'rgba(236, 72, 153, 0.4)', icon: Activity, type: 'Website', status: 'Live', topSelling: true,
    features: ['Client Photo Proofing Gallery', 'Event Date & Crew Booking', 'Milestone Invoicing & Contracts'],
    detailedFeatures: [
      { title: 'Private Proofing Galleries', description: 'Password-protected high-res photo galleries where couples favorite, comment, and order prints.' },
      { title: 'Shoot Schedule & Crew Allocator', description: 'Assign lead photographers, drone operators, and editors across multi-day wedding schedules.' },
      { title: 'Digital Contracts & Deposits', description: 'Pre-wedding consultation booking, electronic agreement signing, and payment stage reminders.' }
    ],
    howItWorks: [
      { icon: Users, title: 'Photographer Portfolio & Package Setup', description: 'Create branded client-facing portfolio websites, showcase high-res photo albums, and configure wedding coverage packages.' },
      { icon: Calendar, title: 'Wedding Date Booking & Client Contract', description: 'Couples select wedding dates, sign digital photography contracts with delivery timelines, and pay advance booking retainers.' },
      { icon: CheckCircle2, title: 'AI Client Proofing Gallery & Final Delivery', description: 'Upload raw and edited wedding photo galleries, let couples favorite photos with AI face search, and deliver digital downloads.' }
    ],
    techStack: { frontend: ['Next.js', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['Vercel', 'AWS S3'], integrations: ['Stripe', 'Cloudinary'] }
  },

  {
    id: 237, section: 'booking', name: 'Travel Agency Management Software',
    category: 'Event / Travel / Entertainment',
    desc: 'All-in-one travel agency platform for customized tour itinerary design, multi-vendor bookings, voucher generation, and travel CRM.',
    link: 'https://travel.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/documents/demo-docs/travel-agency-management-software.docx', documentName: 'Travel Agency Management Software Specification',
    color: 'from-sky-500 to-blue-600', glow: 'rgba(14, 165, 233, 0.4)', icon: Plane, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Day-Wise Tour Itinerary Builder', 'Hotel, Flight & Cab Booking Hub', 'Traveler Vouchers & Payment Ledgers'],
    detailedFeatures: [
      { title: 'Custom Tour & Itinerary Builder', description: 'Craft multi-day tour packages with flight timings, sightseeing schedules, hotel vouchers, and automated pricing calculations.' },
      { title: 'Multi-Vendor Reservation Hub', description: 'Centralize supplier confirmations, room block allocations, coach transport bookings, and partner commission tracking.' },
      { title: 'Traveler Invoicing & Vouchers', description: 'Generate GST-compliant trip invoices, installment payment schedules, and branded PDF travel vouchers with QR verification.' }
    ],
    howItWorks: [
      { icon: Plane, title: 'Destination & Tour Package Cataloging', description: 'Set up destinations, seasonal packages, hotel room allocations, and tiered transport pricing.' },
      { icon: Users, title: 'Inquiry Intake & Custom Itinerary Design', description: 'Capture traveler requests, tailor custom day-by-day itineraries, and send quotes with payment milestones.' },
      { icon: CheckCircle2, title: 'Booking Confirmation & Travel Passes', description: 'Process client payments, auto-generate confirmed travel vouchers, and issue flight/hotel confirmation slips.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'WhatsApp API'] }
  },
  {
    id: 239, section: 'booking', name: 'Club & Event Management Software',
    category: 'Event / Travel / Entertainment',
    desc: 'Championship sports club and event management platform for competition registration, real-time leaderboards, member passes, and ticketing.',
    link: 'https://event-club-management.kiaansoftwaredemo.shop', youtube: '',
    documentUrl: '/public/documents/demo-docs/sports-turf-facility-management.docx', documentName: 'Club & Event Management Software Specification',
    color: 'from-purple-500 to-indigo-600', glow: 'rgba(168, 85, 247, 0.4)', icon: Trophy, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Competition & Tournament Registry', 'Digital Member Passports & Badges', 'Live Scoring & Public Leaderboard'],
    detailedFeatures: [
      { title: 'Tournament Entry & Division Management', description: 'Manage event divisions, heat draws, competitor eligibility, and online registration fees with automated digital ticket passes.' },
      { title: 'Club Membership & Credentialing', description: 'Annual member renewals, digital membership QR badges, competitor licensing, and club facility booking.' },
      { title: 'Real-Time Scoring & Leaderboards', description: 'Official score recording by ringside judges, live digital bracket progression, and championship record archiving.' }
    ],
    howItWorks: [
      { icon: Calendar, title: 'Season Schedule & Championship Setup', description: 'Configure tournament circuits, age/skill divisions, entry rules, registration deadlines, and fee tiers.' },
      { icon: Users, title: 'Competitor Entry & Digital Pass Delivery', description: 'Participants register online, verify club credentials, pay entry fees, and receive barcode event passes.' },
      { icon: Trophy, title: 'Live Scorekeeping & Leaderboard Publishing', description: 'Referees enter live scores, system calculates rank standings instantly, and prints official certificates.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['AWS'], integrations: ['Payment Gateway', 'QR Code Engine'] }
  },

  // ────────────── AGRICULTURE & FARMING (2) ──────────────
  {
    id: 38, section: 'agriculture', name: 'Farm Management Software',
    category: 'Agriculture / Farming Software',
    desc: 'End-to-end agricultural supply chain ERP connecting farmers, produce aggregators, cold storage facilities, and wholesale mandi buyers.',
    link: 'http://freewayagro.kiaansoftware.com', youtube: 'https://youtu.be/CxZs4Od3jcg?si=2HS0UkkPz_urXD_b', documentUrl: '/documents/demo-docs/farm-management-software.docx', documentName: 'Farm Management Software Specification',
    color: 'from-green-500 to-emerald-700', glow: 'rgba(34, 197, 94, 0.4)', icon: Layers, type: 'Software', status: 'Live', topSelling: true,
    features: ['Farm Produce Aggregation', 'Quality Grading & Moisture Logs', 'Direct Mandi Auction Sync'],
    detailedFeatures: [
      { title: 'Farmer Crop Registry', description: 'Maintain farm acreage, crop sowing cycles, estimated harvest dates, and yield estimates.' },
      { title: 'Quality Grading at Farm Gate', description: 'Standardized grading parameters for moisture, grain size, and visual purity at collection centers.' },
      { title: 'Transparent Farmer Payouts', description: 'Automated weight bridge integration with instant direct bank transfer (DBT) to farmer accounts.' }
    ],
    howItWorks: [
      { icon: Layers, title: 'Onboard Farmers & Crops', description: 'Register harvest batches with crop variety, expected tonnage, and harvesting schedule.' },
      { icon: CheckSquare, title: 'Grade & Weigh at Hub', description: 'Weigh produce on integrated digital scales and record lab quality parameters.' },
      { icon: DollarSign, title: 'Sell to Wholesalers & Pay', description: 'Distribute produce to FMCG buyers and transfer settlement funds to farmers instantly.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['PostgreSQL'], infrastructure: ['AWS'], integrations: ['Weighbridge SDK', 'Payment Gateway'] }
  },
  {
    id: 40, section: 'agriculture', name: 'Tractor Rental Management Software',
    category: 'Agriculture / Farming Software',
    desc: 'On-demand agricultural machinery, tractor, and harvester rental marketplace with GPS geofencing and hourly implement billing.',
    link: 'https://tractorlink.netlify.app/farmer', youtube: 'https://youtu.be/upiDyLlWbwg?si=hjQSUr9KtZPY2VBd', documentUrl: '/documents/demo-docs/tractor-rental-management-software.docx', documentName: 'Tractor Rental Management Software Specification',
    color: 'from-lime-500 to-green-600', glow: 'rgba(132, 204, 22, 0.4)', icon: Truck, type: 'Web App', status: 'Live', topSelling: true,
    features: ['Tractor & Equipment Booking', 'Acreage-Based Hourly Billing', 'GPS Acreage & Fuel Monitoring'],
    detailedFeatures: [
      { title: 'Farm Equipment Marketplace', description: 'Browse rotary tillers, seed drills, combine harvesters, and high-horsepower tractors for hire.' },
      { title: 'Slot & Acreage Booking', description: 'Schedule machines by the hour or per acre of farmland with verified local operators.' },
      { title: 'Owner Fleet Dashboard', description: 'Track machine working hours, diesel consumption, maintenance alerts, and payout history.' }
    ],
    howItWorks: [
      { icon: Truck, title: 'Agricultural Machinery & Implement Catalog', description: 'Catalog tractors, combine harvesters, laser levelers, and rotavators with horsepower ratings and hourly/per-acre pricing.' },
      { icon: Calendar, title: 'Farmer Slot Booking & Driver Assignment', description: 'Farmers schedule equipment hire by land acreage or service date; machinery owner confirms availability and assigns certified driver.' },
      { icon: CheckCircle2, title: 'GPS Acreage Tracking & Escrow Payment', description: 'Monitor worked acreage and machine operating hours via GPS telematics, and settle rental payments securely through escrow.' }
    ],
    techStack: { frontend: ['React', 'Tailwind CSS'], backend: ['Node.js'], database: ['MongoDB'], infrastructure: ['Netlify', 'AWS'], integrations: ['GPS Telematics', 'UPI'] }
  },
];

// ═══════════════════════════════════════════════
// EXPORTED SOFTWARE LIST (with normalizedCategory)
// ═══════════════════════════════════════════════

export const softwareList: DemoSoftware[] = rawSoftwareList.map(item => ({
  ...item,
  normalizedCategory: normalizeCategory(item.section, item.id),
}));

// ═══════════════════════════════════════════════
// DEFAULT SORT ORDER (mirrors original priority)
// ═══════════════════════════════════════════════

export const DEFAULT_PRIORITY_ORDER: number[] = [
  223, 216, 202, 52, 30, 59, 76, 244,
  226, 233, 45, 73,
  236, 225, 75, 29,
  22, 203, 212, 67, 44, 68, 37, 77, 80, 222, 100, 247,
  64, 215, 78, 55, 218, 26,
  213, 232, 234, 42, 241,
  228, 229, 230, 235, 21, 220, 62, 207, 27, 245, 246,
  219, 41, 70, 238,
  205, 204, 74, 65, 224,
  48, 209, 28, 206,
  24,
  214, 63,
  231, 71, 211, 35, 240, 243,
  56,
  201, 47, 20, 221, 237, 239,
  43, 53, 69, 242,
  38, 40,
];

// ═══════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════

/** Total count of all demo software entries */
export const totalSoftwareCount = softwareList.length;

/** Count of unique normalized categories (excluding "All Software") */
export const uniqueCategoryCount = new Set(softwareList.map(s => s.normalizedCategory)).size;

/** Get the count of software in each normalized category from a given filtered list */
export function getCategoryCounts(filteredList: DemoSoftware[]): Map<string, number> {
  const counts = new Map<string, number>();
  counts.set('All Software', filteredList.length);
  for (const cat of SIDEBAR_CATEGORIES) {
    if (cat.slug !== 'all') {
      counts.set(cat.name, filteredList.filter(s => s.normalizedCategory === cat.name).length);
    }
  }
  return counts;
}

// ═══════════════════════════════════════════════
// SMART SEARCH: SEMANTIC CLUSTERS & TYPO MAPPINGS
// ═══════════════════════════════════════════════

const TYPO_MAP: Record<string, string> = {
  managment: 'management',
  mangement: 'management',
  mngment: 'management',
  softwear: 'software',
  softwar: 'software',
  softwere: 'software',
  clinc: 'clinic',
  clnic: 'clinic',
  hospitl: 'hospital',
  hopsital: 'hospital',
  acounting: 'accounting',
  acount: 'accounting',
  accoutning: 'accounting',
  apointment: 'appointment',
  appoinment: 'appointment',
  properti: 'property',
  proprty: 'property',
  propery: 'property',
  atendance: 'attendance',
  attendence: 'attendance',
  payrol: 'payroll',
  paroll: 'payroll',
  inventry: 'inventory',
  invetory: 'inventory',
  vehical: 'vehicle',
  vihicle: 'vehicle',
  resturant: 'restaurant',
  restaurent: 'restaurant',
  ecom: 'ecommerce',
  whatapp: 'whatsapp',
  watsapp: 'whatsapp',
  whatsap: 'whatsapp',
  turff: 'turf',
  hostal: 'hostel',
  doc: 'doctor',
  docs: 'doctor',
  docter: 'doctor',
  saloon: 'salon',
  shaadi: 'wedding',
  shadi: 'wedding',
  vivah: 'wedding',
  kheti: 'agriculture',
  krishi: 'agriculture',
  tankhwah: 'salary',
};

interface SemanticCluster {
  triggers: string[];
  keywords: string[];
}

const SEMANTIC_CLUSTERS: SemanticCluster[] = [
  {
    triggers: ['doctor', 'dr', 'docter', 'doc', 'docs', 'patient', 'patients', 'medical', 'medicine', 'medicines', 'dawa', 'dawakhana', 'health', 'healthcare', 'treatment', 'opd', 'prescription', 'consultation', 'clinic', 'clinics', 'hospital', 'hospitals', 'dentist', 'dental', 'teeth', 'tooth', 'physio', 'physiotherapy', 'rehab', 'rehabilitation', 'therapy', 'pain', 'ayurveda', 'homeopathy', 'ortho', 'telehealth', 'telemedicine', 'wellness'],
    keywords: ['clinic', 'medical', 'healthcare', 'hospital', 'doctor', 'physiotherapy', 'dental', 'dentist', 'telehealth', 'telemedicine', 'wellness', 'physiotherapy clinic', 'pathology', 'pharmacy']
  },
  {
    triggers: ['teeth', 'tooth', 'dental', 'dentist', 'ortho', 'braces', 'oral', 'cavity', 'root canal'],
    keywords: ['dental', 'dentist']
  },
  {
    triggers: ['physio', 'physiotherapy', 'rehab', 'rehabilitation', 'therapy', 'pain', 'spine', 'joint'],
    keywords: ['physiotherapy', 'clinic', 'medical']
  },
  {
    triggers: ['property', 'properties', 'real estate', 'realtor', 'broker', 'flat', 'flats', 'apartment', 'apartments', 'society', 'building', 'buildings', 'builder', 'builders', 'housing', 'resident', 'residents', 'gated community', 'landlord', 'tenant', 'tenants', 'rent', 'rental', 'rentals', 'lease', 'leasing', 'tenancy', 'pg', 'room', 'rooms', 'plots', 'plot', 'makaan', 'ghar'],
    keywords: ['property', 'society maintenance', 'rental property', 'real estate', 'landlord', 'tenant', 'real estate rental', 'cloud property']
  },
  {
    triggers: ['rent', 'rental', 'rentals', 'tenant', 'tenants', 'landlord', 'lease', 'leasing', 'tenancy', 'pg', 'room'],
    keywords: ['rental property', 'tenant', 'landlord', 'real estate rental', 'property']
  },
  {
    triggers: ['society', 'apartment', 'apartments', 'flat', 'flats', 'resident', 'residents', 'gatekeeper', 'guard', 'visitor pass'],
    keywords: ['society maintenance', 'rental property', 'property']
  },
  {
    triggers: ['hr', 'hrm', 'hrms', 'hcm', 'employee', 'employees', 'staff', 'worker', 'workers', 'workforce', 'payroll', 'salary', 'salaries', 'pay', 'payout', 'wages', 'tankhwah', 'attendance', 'leave', 'leaves', 'timesheet', 'biometric', 'geofence', 'geofencing', 'hiring', 'recruitment', 'recruit', 'interview', 'applicant', 'ats', 'job', 'jobs', 'roster', 'shift', 'shifts'],
    keywords: ['workforce', 'payroll', 'employee', 'hr management', 'recruitment', 'hrm', 'smart workforce']
  },
  {
    triggers: ['loan', 'loans', 'credit', 'bank', 'banking', 'finance', 'financial', 'emi', 'borrow', 'lending', 'lender', 'interest', 'fintech'],
    keywords: ['loan', 'credit', 'banking', 'finance', 'accounting']
  },
  {
    triggers: ['accounting', 'accounts', 'accountant', 'ca', 'munim', 'billing', 'bill', 'bills', 'invoice', 'invoicing', 'gst', 'tax', 'taxes', 'vat', 'ledger', 'balance sheet', 'bookkeeping', 'expense', 'expenses', 'audit'],
    keywords: ['accounting', 'sales & inventory', 'coffee shop erp', 'society maintenance', 'finance']
  },
  {
    triggers: ['crm', 'leads', 'lead', 'sales', 'selling', 'client', 'clients', 'customer', 'customers', 'pipeline', 'funnel', 'deals', 'deal', 'prospect', 'prospects', 'telecaller', 'cold call', 'followup', 'follow up'],
    keywords: ['crm', 'sales crm', 'business crm', 'whatsapp crm', 'marketing automation', 'sales & inventory']
  },
  {
    triggers: ['whatsapp', 'chat', 'chats', 'messaging', 'broadcast', 'inbox', 'chatbot', 'bot', 'sms'],
    keywords: ['whatsapp crm', 'marketing automation']
  },
  {
    triggers: ['logistics', 'transport', 'transportation', 'fleet', 'truck', 'trucks', 'lorry', 'cargo', 'freight', 'shipping', 'delivery', 'dispatch', 'courier', 'gps', 'driver', 'drivers', 'vehicle tracking', 'route'],
    keywords: ['logistics', 'truck fleet', 'warehouse', 'car rental', 'field service']
  },
  {
    triggers: ['warehouse', 'wms', 'godown', 'storage', 'inventory', 'stock', 'stocks', 'supply', 'goods', 'sku', 'barcode'],
    keywords: ['warehouse', 'cloud warehouse', 'hospital inventory', 'toy store inventory', 'sales & inventory', 'logistics']
  },
  {
    triggers: ['car', 'cars', 'vehicle', 'vehicles', 'automobile', 'auto', 'mechanic', 'garage', 'workshop', 'repair', 'repairs', 'servicing', 'service center', 'tyre', 'tyres', 'tire', 'puncture', 'wheel', 'bike', 'motor', 'scooter'],
    keywords: ['garage & workshop', 'mobile workshop', 'tyre shop', 'car rental', 'truck fleet']
  },
  {
    triggers: ['school', 'schools', 'college', 'colleges', 'university', 'student', 'students', 'pupil', 'teacher', 'teachers', 'classes', 'tuition', 'coaching', 'education', 'edtech', 'lms', 'course', 'courses', 'exam', 'exams', 'marks', 'admission', 'admissions', 'fee', 'fees', 'vidyalaya'],
    keywords: ['school', 'learning management', 'hostel', 'student recruitment', 'visa consultation']
  },
  {
    triggers: ['hostel', 'hostels', 'dormitory', 'dorm', 'mess', 'warden', 'pg', 'paying guest', 'room sharing'],
    keywords: ['hostel management', 'school management']
  },
  {
    triggers: ['legal', 'law', 'laws', 'lawyer', 'lawyers', 'advocate', 'advocates', 'attorney', 'court', 'case', 'cases', 'litigation', 'law firm', 'vakil'],
    keywords: ['legal case', 'case management', 'immigration case', 'quality management']
  },
  {
    triggers: ['visa', 'visas', 'immigration', 'passport', 'abroad', 'foreign', 'embassy', 'overseas', 'pr'],
    keywords: ['visa consultation', 'immigration case', 'student recruitment']
  },
  {
    triggers: ['construction', 'contractor', 'contractors', 'builder', 'renovation', 'civil', 'architecture', 'architect', 'painting', 'paint', 'painter', 'plumber', 'electrician', 'interior'],
    keywords: ['contractor', 'painting contractor', 'construction company', 'contractor project']
  },
  {
    triggers: ['gym', 'gyms', 'fitness', 'workout', 'trainer', 'trainers', 'exercise', 'bodybuilding', 'crossfit', 'weight', 'yoga'],
    keywords: ['gym management', 'sports turf']
  },
  {
    triggers: ['turf', 'sports', 'cricket', 'box cricket', 'football', 'badminton', 'ground', 'court booking', 'stadium'],
    keywords: ['sports turf', 'gym management']
  },
  {
    triggers: ['salon', 'saloon', 'parlour', 'parlor', 'beauty', 'spa', 'hair', 'haircut', 'styling', 'barber', 'makeup', 'massage'],
    keywords: ['salon management', 'fashion & clothing']
  },
  {
    triggers: ['ecommerce', 'e-commerce', 'shop', 'shopping', 'store', 'cart', 'buy', 'sell', 'products', 'online store', 'retail'],
    keywords: ['e-commerce', 'fashion & clothing', 'pet products', 'toy store']
  },
  {
    triggers: ['cloth', 'clothes', 'clothing', 'fashion', 'apparel', 'wear', 'shirt', 'dress', 'boutique', 'garment', 'garments', 'textile'],
    keywords: ['fashion & clothing', 'e-commerce']
  },
  {
    triggers: ['pet', 'pets', 'dog', 'dogs', 'puppy', 'cat', 'cats', 'animal', 'veterinary', 'vet'],
    keywords: ['pet products', 'e-commerce']
  },
  {
    triggers: ['toy', 'toys', 'kids', 'children', 'child', 'baby', 'games'],
    keywords: ['toy store', 'e-commerce']
  },
  {
    triggers: ['hotel', 'hotels', 'travel', 'trip', 'trips', 'tour', 'tours', 'tourism', 'holiday', 'holidays', 'flight', 'resort', 'vacation', 'yacht', 'boat', 'jet ski'],
    keywords: ['travel agency', 'boat & jet ski', 'event management', 'club & event']
  },
  {
    triggers: ['wedding', 'weddings', 'shaadi', 'shadi', 'marriage', 'vivah', 'photography', 'photo', 'photographer', 'studio', 'bride', 'groom', 'matrimony'],
    keywords: ['wedding photography', 'event management', 'club & event']
  },
  {
    triggers: ['event', 'events', 'carnival', 'party', 'fair', 'ticket', 'tickets', 'festival', 'club', 'nightclub', 'pub', 'dj'],
    keywords: ['event management', 'carnival management', 'club & event', 'wedding photography']
  },
  {
    triggers: ['farm', 'farming', 'farmer', 'farmers', 'kisan', 'kisaan', 'krishi', 'kheti', 'agriculture', 'agri', 'crop', 'crops', 'tractor', 'tractors', 'harvest', 'cultivation', 'fertilizer', 'seeds'],
    keywords: ['farm management', 'tractor rental']
  },
  {
    triggers: ['laundry', 'dry clean', 'dryclean', 'washing', 'ironing', 'dhobi', 'clothes cleaning'],
    keywords: ['laundry management']
  },
  {
    triggers: ['survey', 'surveys', 'feedback', 'poll', 'polls', 'review', 'reviews', 'nps', 'questionnaire', 'form'],
    keywords: ['online survey', 'queue management']
  },
  {
    triggers: ['queue', 'queues', 'token', 'tokens', 'waiting', 'line', 'counter', 'crowd', 'kiosk'],
    keywords: ['queue management', 'online survey']
  },
  {
    triggers: ['coffee', 'cafe', 'restaurant', 'restaurants', 'food', 'pos', 'dining', 'beverage', 'kitchen', 'order', 'menu', 'table'],
    keywords: ['coffee shop erp', 'business operations']
  },
  {
    triggers: ['vending', 'kiosk', 'dispenser', 'snack machine', 'beverage machine'],
    keywords: ['vending machine', 'business operations']
  },
  {
    triggers: ['factory', 'manufacturing', 'plant', 'production', 'assembly', 'supply chain', 'vendor', 'supplier', 'erp', 'enterprise', 'operations', 'procurement'],
    keywords: ['manufacturing erp', 'smart manufacturing', 'supplier & vendor', 'business erp', 'multi-tenant saas']
  }
];

/** Search software against multiple fields with semantic matching, typo tolerance, and smart relevance weighting */
export function searchSoftware(list: DemoSoftware[], query: string): DemoSoftware[] {
  if (!query || !query.trim()) return list;
  const rawQ = query.toLowerCase().trim();
  const rawTerms = rawQ.split(/\s+/).filter(Boolean);

  // Apply typo correction
  const terms = rawTerms.map(t => TYPO_MAP[t] || t);

  // Discover semantic keyword expansions from query triggers
  const expandedKeywords = new Set<string>();
  for (const t of [...rawTerms, ...terms]) {
    for (const cluster of SEMANTIC_CLUSTERS) {
      if (cluster.triggers.some(tr => tr === t || (t.length >= 3 && (tr.startsWith(t) || t.startsWith(tr))))) {
        cluster.keywords.forEach(k => expandedKeywords.add(k.toLowerCase()));
      }
    }
  }

  const scored = list.map(item => {
    let score = 0;
    const nameLower = item.name.toLowerCase();
    const catLower = (item.normalizedCategory || '').toLowerCase();
    const origCatLower = (item.category || '').toLowerCase();
    const secLower = (item.section || '').toLowerCase();
    const descLower = (item.desc || '').toLowerCase();
    const featsLower = (item.features || []).map(f => f.toLowerCase()).join(' ');
    const detailedFeatsLower = (item.detailedFeatures || []).map(df => `${df.title} ${df.description}`.toLowerCase()).join(' ');
    const howItWorksLower = (item.howItWorks || []).map(h => `${h.title} ${h.description}`.toLowerCase()).join(' ');
    const techStackLower = Object.values(item.techStack || {}).flat().join(' ').toLowerCase();
    const docNameLower = (item.documentName || '').toLowerCase();

    // 1. Exact full query phrase match (Highest Priority)
    if (nameLower.includes(rawQ)) score += 200;
    if (nameLower.startsWith(rawQ)) score += 60;
    if (catLower.includes(rawQ) || origCatLower.includes(rawQ) || secLower.includes(rawQ)) score += 120;
    if (featsLower.includes(rawQ)) score += 60;
    if (detailedFeatsLower.includes(rawQ)) score += 45;
    if (descLower.includes(rawQ)) score += 35;
    if (howItWorksLower.includes(rawQ) || techStackLower.includes(rawQ) || docNameLower.includes(rawQ)) score += 20;

    // 2. Individual term matches (Exact & Typo-corrected)
    let matchedTermsCount = 0;
    for (const term of terms) {
      let termMatched = false;
      if (nameLower.includes(term)) {
        score += 50;
        termMatched = true;
      }
      if (catLower.includes(term) || origCatLower.includes(term)) {
        score += 35;
        termMatched = true;
      }
      if (featsLower.includes(term)) {
        score += 25;
        termMatched = true;
      }
      if (detailedFeatsLower.includes(term)) {
        score += 20;
        termMatched = true;
      }
      if (descLower.includes(term)) {
        score += 15;
        termMatched = true;
      }
      if (howItWorksLower.includes(term) || techStackLower.includes(term) || docNameLower.includes(term)) {
        score += 10;
        termMatched = true;
      }
      if (termMatched) matchedTermsCount++;
    }

    // High bonus if all typed terms matched
    if (terms.length > 1 && matchedTermsCount === terms.length) {
      score += 90;
    }

    // 3. Semantic keyword cluster boost (e.g. searching "doctor" boosts Clinic/Medical/Telehealth/Dental)
    for (const kw of expandedKeywords) {
      if (nameLower.includes(kw)) {
        score += 45;
      }
      if (catLower.includes(kw) || origCatLower.includes(kw)) {
        score += 30;
      }
      if (featsLower.includes(kw)) {
        score += 20;
      }
      if (descLower.includes(kw)) {
        score += 15;
      }
      if (howItWorksLower.includes(kw) || techStackLower.includes(kw)) {
        score += 10;
      }
    }

    return { item, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.item);
}

/** YouTube URL to embed URL converter */
export function getYouTubeEmbedUrl(url: string): string {
  if (!url) return '';
  try {
    let match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (match?.[1]) return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    match = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
    if (match?.[1]) return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    match = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
    if (match?.[1]) return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    if (url.includes('youtube.com/embed/')) return url;
    return url;
  } catch {
    return url;
  }
}

// ═══════════════════════════════════════════════
// DUPLICATE URL AUDIT NOTE
// ═══════════════════════════════════════════════
// The following demo URLs are shared by multiple entries:
//
// 1. http://dentist.softwaredemolive.live
//    → id:212 "Dental Clinic Management Software"
//    → id:67  "Dentist Management Software"
//    AUDIT: id:212 focuses on interactive dental charts + X-ray imaging.
//           id:67 focuses on appointment scheduling + supply inventory + patient recall.
//           BOTH kept per owner instruction. Different feature emphasis, same demo URL.
//
// 2. URLs verified at data extraction time. Broken URL testing
//    should be performed at build/QA stage.
// ═══════════════════════════════════════════════
