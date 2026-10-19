import {
    Activity, Home, ShoppingBag, Truck,
    DollarSign, Briefcase, Shield, Users, Calendar,
    CheckSquare, Star, Layers, Settings, Monitor,
    type LucideIcon
} from 'lucide-react'

// ── Solution type ──
export interface Solution {
    id: number
    name: string
    slug: string
    desc: string
    industrySlug: string
    link?: string
}

// ── Industry type ──
export interface Industry {
    slug: string
    name: string
    icon: LucideIcon
    color: string          // tailwind text color
    glow: string           // rgba glow
    gradient: string       // from-x to-y
    desc: string
    seoKeywords: string[]
    solutions: Solution[]
}

// ── Helper ──
const s = (id: number, name: string, desc: string, industrySlug: string, link?: string): Solution => ({
    id,
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    desc,
    industrySlug,
    link
})

// ═══════════════════════════════════════════
//  ALL 14 INDUSTRIES + 47 SOLUTIONS
// ═══════════════════════════════════════════

export const industries: Industry[] = [
    {
        slug: 'healthcare',
        name: 'Healthcare & Medical',
        icon: Activity,
        color: 'text-cyan-400',
        glow: 'rgba(34,211,238,0.35)',
        gradient: 'from-cyan-500 to-blue-600',
        desc: 'End-to-end healthcare platforms — from clinic management to telehealth and hospital-grade inventory systems.',
        seoKeywords: ['Healthcare Software Development', 'Hospital Management System', 'Clinic Management Software', 'Telemedicine Platform', 'Healthcare SaaS'],
        solutions: [
            s(1, 'Health Sakhi - Digital Health Assistant Platform', 'Healthcare outreach and service coordination platform.', 'healthcare', 'http://health-sakhi-demo.kiaansoftwaredemo.shop/'),
            s(2, 'Physiotherapy Clinic Management System', 'Clinic operations platform for appointments and patient care.', 'healthcare', 'https://deephysio-clinic.kiaansoftware.com'),
            s(3, 'Advanced Clinic Management System', 'Comprehensive clinic operations and patient lifecycle management.', 'healthcare', 'https://clinic-pro.softwaredemolive.live'),
            s(222, 'Medicare Hospital & Healthcare Management Platform', 'Modern hospital management system with doctor appointment booking, patient portal, and OPD/IPD workflows.', 'healthcare', 'https://medicare.kiaansoftwaredemo.shop'),
            s(6, 'Dental Clinic Management System', 'Advanced dental clinic operations and procedure tracking.', 'healthcare', 'http://dentist.softwaredemolive.live'),
            s(7, 'Hospital Inventory & Asset Management System', 'Comprehensive inventory and medical asset management for hospitals.', 'healthcare', 'https://hopistal-inventry.softwaredemolive.live'),
            s(58, 'Smart Hospital Management System', 'Complete hospital operations software covering OPD/IPD, pharmacy, pathology laboratory, imaging, and patient portals.', 'healthcare', 'https://hospitalui.softwaredemolive.live'),
        ],
    },
    {
        slug: 'fintech',
        name: 'Finance, Banking & Insurance',
        icon: DollarSign,
        color: 'text-emerald-400',
        glow: 'rgba(52,211,153,0.35)',
        gradient: 'from-emerald-500 to-teal-600',
        desc: 'Digital lending, insurance lifecycle management, and debt recovery platforms for modern financial enterprises.',
        seoKeywords: ['Loan Management Software', 'FinTech Platform', 'Lending Automation', 'Insurance CRM', 'Digital Lending Solution'],
        solutions: [
            s(8, 'Insurance Policy & Claims Management', 'Insurance policy administration and claims management system.', 'fintech', 'https://insurance-managmenet.kiaansoftware.com'),
            s(10, 'Digital Lending & Loan Automation Suite', 'Loan servicing and borrower workflow for end-to-end lending operations.', 'fintech', 'http://loanfistdemo.kiaansoftware.com/'),
            s(50, 'Accounting Management Software', 'Comprehensive business accounting, multi-ledger bookkeeping, and GST invoicing platform.', 'fintech', 'https://zirakbook-accounting.kiaansoftware.com'),
            s(59, 'Role-Based Loan Management System', 'Enterprise loan management system with role-based access for borrowers, loan officers, and underwriters.', 'fintech', 'https://loankpui.softwaredemolive.live'),
        ],
    },
    {
        slug: 'real-estate',
        name: 'Real Estate & PropTech',
        icon: Home,
        color: 'text-amber-400',
        glow: 'rgba(251,191,36,0.35)',
        gradient: 'from-amber-500 to-orange-600',
        desc: 'Property portfolio management, lease automation, tenant billing, and smart maintenance platforms.',
        seoKeywords: ['Property Management Software', 'Real Estate CRM', 'PropTech Platform', 'Tenant Management System', 'Rental Management Software'],
        solutions: [
            s(13, 'Property Management System', 'Property listing and management platform.', 'real-estate', 'https://property1.kiaansoftware.com'),
            s(15, 'Property & Rental Management Platform', 'Comprehensive property portfolio management and leasing suite.', 'real-estate', 'https://property-peach-management.softwaredemolive.live'),
            s(16, 'Advanced Property Management Suite', 'High-end property ecosystem for portfolio analytics and vendor coordination.', 'real-estate', 'https://propertythree.softwaredemolive.live'),
            s(223, 'Society Maintenance & Resident Service Portal', 'Comprehensive residential society, HOA maintenance billing, gate pass, and community management platform.', 'real-estate', 'https://society-maintenance-service.kiaansoftwaredemo.shop'),
            s(57, 'Construction Management Software', 'Comprehensive project scheduling, site reporting, document control, and resource management for developers and contractors.', 'real-estate', 'https://constructionui.softwaredemolive.live'),
        ],
    },
    {
        slug: 'logistics',
        name: 'Logistics, Supply Chain & Transport',
        icon: Truck,
        color: 'text-blue-400',
        glow: 'rgba(96,165,250,0.35)',
        gradient: 'from-blue-500 to-indigo-600',
        desc: 'Warehouse management, fleet tracking, export documentation, and supply chain visibility platforms.',
        seoKeywords: ['Logistics Software', 'Warehouse Management System', 'Fleet Tracking', 'Supply Chain Platform', 'Transport Management System'],
        solutions: [
            s(18, 'Truck Fleet & Transport Management System', 'End-to-end transport operations and real-time trip tracking.', 'logistics', 'https://tuck-managment.softwaredemolive.live'),
            s(19, 'Export Business & Trade Management System', 'International trade platform for export documentation and compliance.', 'logistics', 'https://workana-export.softwaredemolive.live'),
            s(20, 'Logistics & Supply Chain Management Platform', 'End-to-end supply chain visibility and logistics operations suite.', 'logistics', 'http://logistic.softwaredemolive.live'),
        ],
    },
    {
        slug: 'agriculture',
        name: 'Agriculture & Farming',
        icon: CheckSquare,
        color: 'text-lime-400',
        glow: 'rgba(163,230,53,0.35)',
        gradient: 'from-lime-500 to-green-600',
        desc: 'AgriTech platforms for supply chain coordination, equipment rental, and precision farming.',
        seoKeywords: ['AgriTech Platform', 'Farm Management Software', 'Agriculture Software', 'Equipment Rental Platform', 'Agro Supply Chain'],
        solutions: [
            s(21, 'Agro Supply Chain Management System', 'Agro operations and project management platform.', 'agriculture', 'http://freewayagro.kiaansoftware.com'),
            s(22, 'Tractor Rental & Fleet Management Platform', 'Farmer-facing portal for tractor services and agri workflows.', 'agriculture', 'https://tractorlink.netlify.app/farmer'),
            s(23, 'Smart Agriculture Equipment Rental Platform', 'Digital marketplace for smart farming equipment rental.', 'agriculture', 'https://tractorlink.netlify.app/farmer'),
        ],
    },
    {
        slug: 'human-resources',
        name: 'Human Resources',
        icon: Users,
        color: 'text-violet-400',
        glow: 'rgba(167,139,250,0.35)',
        gradient: 'from-violet-500 to-purple-600',
        desc: 'Complete HR ecosystems for payroll, recruitment, workforce management, and employee lifecycle.',
        seoKeywords: ['HR Software', 'Payroll Management', 'Recruitment Platform', 'Employee Management System', 'HRTech Solution'],
        solutions: [
            s(24, 'Workforce & Employee Management Suite', 'End-to-end workforce coordination and HR operations management.', 'human-resources', 'https://employee-management-system.softwaredemolive.live'),
            s(26, 'Recruitment & Placement Management System', 'End-to-end recruitment lifecycle and candidate placement platform.', 'human-resources', 'http://placementservice.softwaredemolive.live'),
        ],
    },
    {
        slug: 'professional-services',
        name: 'Laundry & Professional Services',
        icon: Settings,
        color: 'text-orange-400',
        glow: 'rgba(251,146,60,0.35)',
        gradient: 'from-orange-500 to-red-600',
        desc: 'Service business platforms for booking, job management, technician allocation, and customer operations.',
        seoKeywords: ['Laundry Management Software', 'Dry Cleaning CRM', 'Service Booking Software', 'Salon Management System', 'Workshop Management'],
        solutions: [
            s(27, 'Modern Service Business Management System', 'Service business management for bookings and operations.', 'professional-services', 'http://mordern-service.kiaansoftware.com'),
            s(28, 'Painting Service Booking & Job Management', 'Painting service management for leads, jobs, and billing.', 'professional-services', 'https://painting.kiaansoftware.com'),
            s(29, 'Garage & Workshop Management System', 'Digital workshop operations, job cards, and inventory management.', 'professional-services', 'https://garage-workshop.softwaredemolive.live'),
            s(30, 'Salon & Spa Management System', 'Premium salon and spa operations suite for wellness centers.', 'professional-services', 'https://salon.softwaredemolive.live/'),
            s(101, 'Smart Laundry & Dry Cleaning Operations Platform', 'End-to-end laundry operations, garment tracking, and automated billing system.', 'professional-services', 'https://premium-laundry01.netlify.app/'),
        ],
    },
    {
        slug: 'sports-fitness',
        name: 'Sports, Fitness & Wellness',
        icon: Star,
        color: 'text-rose-400',
        glow: 'rgba(251,113,133,0.35)',
        gradient: 'from-rose-500 to-pink-600',
        desc: 'Gym memberships, turf booking, fitness tracking, and sports analytics platforms.',
        seoKeywords: ['Gym Management Software', 'Sports Booking Platform', 'Fitness SaaS', 'Turf Booking System', 'Wellness Software'],
        solutions: [
            s(31, 'Turf Booking & Sports Facility Management', 'Turf booking and slot scheduling interface.', 'sports-fitness', 'https://turfui.kiaansoftware.com'),
            s(32, 'Gym & Fitness Management System', 'Comprehensive fitness operations suite for member tracking.', 'sports-fitness', 'https://gym.softwaredemolive.live'),
            s(33, 'Sports Betting & Odds Management Platform', 'Advanced sports betting analytics and real-time odds management.', 'sports-fitness', 'https://betting.softwaredemolive.live'),
        ],
    },
    {
        slug: 'retail-ecommerce',
        name: 'Retail & E-Commerce',
        icon: ShoppingBag,
        color: 'text-pink-400',
        glow: 'rgba(244,114,182,0.35)',
        gradient: 'from-pink-500 to-fuchsia-600',
        desc: 'Retail management, e-commerce storefronts, and product catalog platforms.',
        seoKeywords: ['Retail Software', 'E-Commerce Platform', 'POS System', 'Product Management', 'Online Store'],
        solutions: [
            s(100, 'FloraBloom - Online Flower Boutique', 'Premium floral boutique platform with elegant catalog, bouquet customization, and local delivery routing.', 'retail-ecommerce', 'https://flower-boutique01.netlify.app/'),
            s(34, 'Smart Toy Retail Management System', 'Toy business management and product showcase platform.', 'retail-ecommerce', 'https://toy-ui.kiaansoftware.com'),
            s(35, 'E-Commerce Sales Management Platform', 'Online product selling and order lifecycle platform.', 'retail-ecommerce', 'https://product-selling.kiaansoftware.com'),
        ],
    },
    {
        slug: 'education',
        name: 'Education & EdTech',
        icon: Monitor,
        color: 'text-yellow-400',
        glow: 'rgba(250,204,21,0.35)',
        gradient: 'from-yellow-500 to-amber-600',
        desc: 'Student recruitment, visa processing, digital libraries, and academic management platforms.',
        seoKeywords: ['EdTech Platform', 'Student Management System', 'LMS Software', 'Visa Processing System', 'Digital Library'],
        solutions: [
            s(36, 'Student Recruitment & Visa Processing System', 'Education consultancy platform for admissions and visa processing.', 'education', 'https://studentrecruitmentvisa.softwaredemolive.live'),
        ],
    },
    {
        slug: 'events-entertainment',
        name: 'Events & Entertainment',
        icon: Calendar,
        color: 'text-fuchsia-400',
        glow: 'rgba(232,121,249,0.35)',
        gradient: 'from-fuchsia-500 to-purple-600',
        desc: 'Event planning, carnival operations, venue booking, and attendee management platforms.',
        seoKeywords: ['Event Management Software', 'Venue Booking Platform', 'Carnival Management System', 'Event Planning Tool'],
        solutions: [
            s(221, 'Wedding Photography & Cinematography Studio', 'Luxury wedding photography showcase, portfolio gallery, and client booking platform.', 'events-entertainment', 'https://wedding-photography-website.kiaansoftwaredemo.shop'),
            s(38, 'Event & Carnival Operations Management', 'End-to-end carnival and event operations platform.', 'events-entertainment', 'https://carnival-management.kiaansoftware.com'),
            s(39, 'Event Planning & Operations Management System', 'Advanced planning and coordination for large-scale events.', 'events-entertainment', 'https://event-management.softwaredemolive.live/'),
        ],
    },
    {
        slug: 'legal-compliance',
        name: 'Legal & Compliance',
        icon: Shield,
        color: 'text-indigo-400',
        glow: 'rgba(129,140,248,0.35)',
        gradient: 'from-indigo-500 to-blue-600',
        desc: 'Legal case lifecycle management, audit platforms, and regulatory compliance systems.',
        seoKeywords: ['Legal Software', 'Case Management System', 'Compliance Platform', 'Quality Assurance Software', 'Law Firm Management'],
        solutions: [
            s(40, 'Legal Case & Law Firm Management System', 'Legal case lifecycle platform for firms to manage matters and hearings.', 'legal-compliance', 'https://legal-case-ui.softwaredemolive.live'),
            s(41, 'Quality Assurance & Compliance Management System', 'Industrial-grade quality monitoring and regulatory compliance.', 'legal-compliance', 'http://qualitymanagement.softwaredemolive.live'),
        ],
    },
    {
        slug: 'sales-crm',
        name: 'Sales & CRM',
        icon: Briefcase,
        color: 'text-red-400',
        glow: 'rgba(248,113,113,0.35)',
        gradient: 'from-red-500 to-rose-600',
        desc: 'Sales pipeline management, lead tracking, and team performance analytics platforms.',
        seoKeywords: ['CRM Software', 'Sales Management System', 'Lead Tracking Platform', 'Sales Pipeline Tool', 'Sales Analytics'],
        solutions: [
            s(48, 'English CRM & Language Institute Portal', 'Specialized CRM for language academies to manage student inquiries, enrollment, and batches.', 'sales-crm', 'https://english-crm.kiaansoftware.com'),
            s(80, 'AI Tele-Calling & CRM Suite', 'High-performance lead management and AI-driven tele-calling suite for outbound sales teams.', 'sales-crm', 'https://tele-managment.softwaredemolive.live'),
        ],
    },
    {
        slug: 'enterprise-saas',
        name: 'Enterprise SaaS & Automation',
        icon: Layers,
        color: 'text-sky-400',
        glow: 'rgba(56,189,248,0.35)',
        gradient: 'from-sky-500 to-cyan-600',
        desc: 'Multi-tenant SaaS, ERP, queue management, survey platforms, and business workflow automation.',
        seoKeywords: ['SaaS Platform', 'Enterprise Software', 'Multi-Tenant Architecture', 'Business Automation', 'ERP System'],
        solutions: [
            s(43, 'Business Operations Management Suite', 'Business workflow and operations management suite.', 'enterprise-saas', 'https://cloveo.kiaansoftware.com'),
            s(44, 'ERP & Business Workflow Management', 'Business operations software for integrated management.', 'enterprise-saas', 'https://oddo-sh.kiaansoftware.com'),
            s(45, 'Survey & Field Data Collection Platform', 'Advanced survey and feedback management for data collection.', 'enterprise-saas', 'http://surveymate.kiaansoftware.com/'),
            s(46, 'Smart Queue & Token Management System', 'Advanced digital queuing solution for customer flow management.', 'enterprise-saas', 'https://queue-managment.softwaredemolive.live'),
            s(47, 'Multi-Tenant SaaS Business Platform', 'Enterprise-grade multi-tenant architecture for scalable operations.', 'enterprise-saas', 'https://multi-tenant-saas.softwaredemolive.live'),
            s(49, 'SyncFlow Project & Workflow Suite', 'Interactive project board, task management, and team collaboration workspace inspired by Monday.com.', 'enterprise-saas', 'https://mondaydotcom.kiaansoftware.com'),
        ],
    },
]

// ── Derived helpers ──
export const totalSolutions = industries.reduce((sum, ind) => sum + ind.solutions.length, 0)
export const totalIndustries = industries.length

export const getIndustryBySlug = (slug: string) => industries.find(i => i.slug === slug)
export const getSolutionBySlug = (industrySlug: string, solutionSlug: string) => {
    const industry = getIndustryBySlug(industrySlug)
    return industry?.solutions.find(s => s.slug === solutionSlug)
}
