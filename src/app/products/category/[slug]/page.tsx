import {
    Rocket,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Users,
    CreditCard,
    UserCheck,
    Clock,
    Search,
    TrendingUp,
    Calendar,
    FileText,
    Shield,
    Database,
    Zap,
    Smartphone,
    MessageSquare,
    Globe,
    Activity,
    Lock,
    Cpu,
    Briefcase,
    BarChart3,
    Heart,
    Home,
    Truck,
    GraduationCap,
    HardHat,
    Scale
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { saasCategories, solutionCategories } from '@/data/navigation';
import type { Metadata } from 'next';

// Reusing generateSlug from Navbar logic or defining it here for consistency
const generateSlug = (item: string) => {
    return item.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[()]/g, '')
        .replace(/&/g, '')
        .replace(/\//g, '-')
        .replace(/--+/g, '-')
        .replace(/^-|-$/g, '');
}

const getIconForItem = (item: string) => {
    const iconMap: Record<string, any> = {
        // Business
        "CRM Software": ShieldCheck,
        "HRM Software": Users,
        "Payroll Management": CreditCard,
        "Employee Attendance": UserCheck,
        "Time Tracking": Clock,
        "Recruitment & ATS": Search,
        "Performance Platform": TrendingUp,
        "Workforce Scheduling": Calendar,
        "Leave Management": FileText,
        "HR Compliance Portal": Shield,

        // Accounting
        "Accounting SaaS": Database,
        "Invoice & Billing": CreditCard,
        "Subscription Billing": Zap,
        "Expense Tracking": TrendingUp,
        "Tax Compliance": Shield,

        // Marketing
        "Lead Management": Search,
        "Marketing Automation": Zap,
        "Email Campaigns": MessageSquare,
        "WhatsApp Marketing": Smartphone,

        // Support
        "Ticket Management": MessageSquare,
        "Live Chat Support": MessageSquare,
        "AI Chatbot Platform": Cpu,

        // Healthcare
        "Clinic Management": Heart,
        "Hospital System": Activity,
        "EMR/EHR SaaS": Lock,

        // Real Estate
        "Property Management": Home,
        "Tenant & Rent SaaS": Users,

        // Logistics
        "Transport Management": Truck,
        "Fleet Tracking": Globe,

        // Education
        "School Management": GraduationCap,

        // Construction
        "Project Management": HardHat,

        // Legal
        "Audit & Compliance": Scale,
        "Data Security": Lock
    };

    return iconMap[item] || Rocket;
};

const categoryData: Record<string, { title: string, items: string[], desc: string }> = {
    'business-company': {
        title: 'Business & Company',
        desc: 'Enterprise-grade tools to manage your workforce, attendance, and compliance with military-grade precision.',
        items: ["CRM Software", "HRM Software", "Payroll Management", "Employee Attendance", "Time Tracking", "Recruitment & ATS", "Performance Platform", "Workforce Scheduling", "Leave Management", "HR Compliance Portal"]
    },
    'accounting-finance': {
        title: 'Accounting & Finance',
        desc: 'Secure, high-performance financial systems designed for real-time ledger management and global tax compliance.',
        items: ["Accounting SaaS", "Invoice & Billing", "Subscription Billing", "Expense Tracking", "Tax Compliance", "P&L Reporting", "Ledger Management", "Payment Collection", "Accounts Payable", "Digital OCR Tool"]
    },
    'sales-marketing': {
        title: 'Sales & Marketing',
        desc: 'Accelerate your growth with intelligent automation, lead management, and conversion-optimized marketing engines.',
        items: ["Lead Management", "Marketing Automation", "Email Campaigns", "WhatsApp Marketing", "Sales Forecasting", "Loyalty Platform", "Proposal Generator", "Appointment Booking", "Feedback & Survey", "Referral Management"]
    },
    'customer-support': {
        title: 'Customer Support',
        desc: 'Deliver elite customer experiences with omnichannel support portals and AI-driven resolution tools.',
        items: ["Ticket Management", "Live Chat Support", "AI Chatbot Platform", "Call Center SaaS", "Omni-Channel Portal", "SMS Notification", "Self-Service KB", "Dispute Management"]
    },
    'retail-inventory': {
        title: 'Retail & Inventory',
        desc: 'Master your supply chain and storefronts with integrated POS systems and real-time inventory brains.',
        items: ["POS Software", "Inventory System", "Warehouse Management", "Order Management", "Retail ERP", "Supplier Management", "Stock Tracking Tool", "Multi-Store System", "Seller Panel SaaS", "Pricing & Discount"]
    },
    'healthcare-clinic': {
        title: 'Healthcare & Clinic',
        desc: 'Digitalizing patient care with secure EMR/EHR systems and streamlined clinical operations.',
        items: ["Clinic Management", "Hospital System", "EMR/EHR SaaS", "Pharmacy Management", "Laboratory System", "Queue Management", "Telemedicine Platform", "Medical Billing", "Doctor Scheduling", "Patient Portal"]
    },
    'real-estate': {
        title: 'Real Estate',
        desc: 'High-performance property management and rental automation for modern real estate leaders.',
        items: ["Property Management", "Tenant & Rent SaaS", "Contract Management", "Rental Accounting", "Real Estate CRM", "Facility Maintenance"]
    },
    'logistics-fleet': {
        title: 'Logistics & Fleet',
        desc: 'Optimizing movement at scale with AI-driven routing and real-time fleet visibility.',
        items: ["Transport Management", "Fleet Tracking", "Delivery Platform", "Courier Software", "Logistics ERP", "Trip Management", "Maintenance Tracker"]
    },
    'education': {
        title: 'Education',
        desc: 'The next generation of educational infrastructure, connecting campuses, students, and parents.',
        items: ["School Management", "Student Information", "Learning Management", "Online Course SaaS", "Coaching Software", "Examination System", "Parent Portal Tool"]
    },
    'construction-field': {
        title: 'Construction & Field',
        desc: 'Managing physical projects with digital precision. Site reports, document vaults, and job scheduling.',
        items: ["Project Management", "Daily Site Reports", "Document Vault", "Workshop Management", "Vehicle Rental SaaS", "Field Service Platform", "Job Scheduling"]
    },
    'legal-compliance': {
        title: 'Legal & Compliance',
        desc: 'Hardened systems for audit, digital signatures, and role-based data security.',
        items: ["Audit & Compliance", "Digital Signature", "Role-Based Access", "KYC Verification", "Data Security"]
    },
    'ai-automation': {
        title: 'AI & Automation',
        desc: 'Infusing every workflow with cognitive intelligence and autonomous decision-making power.',
        items: ["AI Document OCR", "AI Resume Screening", "AI Sales Assistant", "AI Business Analytics", "AI Workflow Tool", "AI CRM Auto-Update"]
    }
};
// Build a dynamic lookup that also includes solution category slugs
const getAllCategories = (): Record<string, { title: string, items: string[], desc: string }> => {
    const merged = { ...categoryData };

    // Add saasCategories to merged
    saasCategories.forEach(cat => {
        const slug = generateSlug(cat.title);
        if (!merged[slug]) {
            merged[slug] = {
                title: cat.title,
                desc: categoryData[slug]?.desc || 'Explore our comprehensive solutions designed for your industry.',
                items: cat.items
            };
        }
    });

    for (const cat of solutionCategories) {
        const slug = generateSlug(cat.title);
        if (!merged[slug]) {
            // Find matching base category by items overlap
            const baseMatch = Object.values(categoryData).find(
                base => base.items.length === cat.items.length && base.items[0] === cat.items[0]
            );
            merged[slug] = {
                title: cat.title,
                desc: baseMatch?.desc || 'Explore our comprehensive solutions designed for your industry.',
                items: cat.items
            };
        }
    }
    return merged;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const category = getAllCategories()[slug];
    if (!category) return {};
    const title = `${category.title} Software Solutions | Kiaan Technology`;
    const canonical = `/products/category/${slug}/`;
    return {
        title,
        description: category.desc,
        openGraph: { title, description: category.desc, url: canonical, siteName: 'Kiaan Technology', type: 'website' },
        twitter: { card: 'summary_large_image', title, description: category.desc },
    };
}

const productRouteOverrides: Record<string, string> = {
    'Accounting Software Development': '/products/accounting-saas',
    'Agency Management Software': '/products',
    'Algorithmic Trading Software': '/solutions/fintech/algorithmic-trading',
    'API Gateway Modernization': '/solutions/legacy-modernization',
    'AWS Cloud Architecture': '/solutions/cloud-infrastructure',
    'Banking Dashboard Software': '/solutions/fintech/secure-banking',
    'Billing Software Custom Development': '/products/invoice-billing',
    'Booking & Reservation Software': '/products/appointment-booking',
    'Car Rental SaaS System': '/products/vehicle-rental-saas',
    'Client Portal Software': '/products',
    'Clinic Management Software': '/products/clinic-management',
    'Cloud Re-engineering': '/solutions/cloud-infrastructure',
    'Construction Management Software': '/products/project-management',
    'Consultant CRM Software': '/products/crm-software',
    'Database Architecture Refactor': '/solutions/legacy-modernization',
    'DevOps & CI/CD Automation': '/solutions/cloud-infrastructure',
    'E-learning SaaS Platform': '/products/online-course-saas',
    'EMR Software Development': '/products/emr-ehr-saas',
    'Enterprise UX Audits': '/solutions/ui-ux',
    'Figma Design Systems': '/solutions/ui-ux',
    'Fleet Management System': '/products/fleet-tracking',
    'Fleet Tracking Software': '/products/fleet-tracking',
    'Garage Management Software': '/products/workshop-management',
    'Hospital Management System': '/products/hospital-system',
    'Hotel Management Software': '/products',
    'Hotel PMS Software': '/products',
    'Interactive Prototypes': '/solutions/ui-ux',
    'Inventory Management System': '/products/inventory-system',
    'Law Firm Management Software': '/products/contract-management',
    'LMS Software Development': '/products/learning-management',
    'Logistics Management Software': '/products/logistics-erp',
    'Medical Billing Software': '/products/medical-billing',
    'Mobile App Wireframing': '/solutions/ui-ux',
    'Monolith to Microservices': '/solutions/legacy-modernization',
    'Multi-store POS Software': '/products/multi-store-system',
    'Payment Gateway Integration': '/products/payment-collection',
    'Property Management System': '/products/property-management',
    'Real Estate CRM Software': '/products/real-estate-crm',
    'Real Estate Management Software': '/products/property-management',
    'Restaurant Management System': '/products',
    'Retail POS Software': '/products/pos-software',
    'School Management Software': '/products/school-management',
    'Serverless Microservices': '/solutions/cloud-infrastructure',
    'Student Management System': '/products/student-information',
    'Telemedicine Platform Development': '/products/telemedicine-platform',
    'Transport Management System': '/products/transport-management',
    'Vehicle Rental Management Software': '/products/vehicle-rental-saas',
    'Warehouse Management System': '/products/warehouse-management',
    'Zero Downtime Cloud Migration': '/solutions/cloud-infrastructure',
};

const getProductHref = (item: string) => productRouteOverrides[item] || `/products/${generateSlug(item)}`;

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const allCategories = getAllCategories();
    const data = allCategories[slug];

    if (!data) {
        notFound();
    }

    return (
        <div className="bg-black min-h-screen pt-8 pb-12 text-white overflow-x-hidden">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full animated-grid opacity-[0.07]" />
                <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-yellow-500 opacity-[0.03] blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-yellow-500 opacity-[0.03] blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <Reveal>
                    <div className="inline-block bg-yellow-500 text-black text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 mb-4 skew-x-[-15deg]">
                        Category Intelligence
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <h1 className="text-4xl md:text-6xl font-display tracking-tighter mb-4 leading-none">
                        {data.title} <br />
                        <span className="text-transparent text-stroke-white">Eco-System</span>
                    </h1>
                </Reveal>

                <Reveal delay={0.4} overflow="visible">
                    <p className="text-base text-zinc-100 font-light max-w-2xl mb-10 border-l-4 border-yellow-500/30 pl-8 leading-relaxed italic bg-white/[0.02] py-4 rounded-r-lg">
                        {data.desc}
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.items.map((item, idx) => {
                        const Icon = getIconForItem(item);

                        // Array of fixed colors for variety
                        const colors = [
                            { border: 'border-yellow-500/50', text: 'group-hover:text-yellow-500', bg: 'from-yellow-500/20', iconBg: 'group-hover:bg-yellow-500/10', iconBorder: 'group-hover:border-yellow-500/50', iconColor: 'group-hover:text-yellow-500' },
                            { border: 'border-blue-500/50', text: 'group-hover:text-blue-500', bg: 'from-blue-500/20', iconBg: 'group-hover:bg-blue-500/10', iconBorder: 'group-hover:border-blue-500/50', iconColor: 'group-hover:text-blue-500' },
                            { border: 'border-green-500/50', text: 'group-hover:text-green-500', bg: 'from-green-500/20', iconBg: 'group-hover:bg-green-500/10', iconBorder: 'group-hover:border-green-500/50', iconColor: 'group-hover:text-green-500' },
                            { border: 'border-red-500/50', text: 'group-hover:text-red-500', bg: 'from-red-500/20', iconBg: 'group-hover:bg-red-500/10', iconBorder: 'group-hover:border-red-500/50', iconColor: 'group-hover:text-red-500' },
                            { border: 'border-purple-500/50', text: 'group-hover:text-purple-500', bg: 'from-purple-500/20', iconBg: 'group-hover:bg-purple-500/10', iconBorder: 'group-hover:border-purple-500/50', iconColor: 'group-hover:text-purple-500' },
                            { border: 'border-cyan-500/50', text: 'group-hover:text-cyan-500', bg: 'from-cyan-500/20', iconBg: 'group-hover:bg-cyan-500/10', iconBorder: 'group-hover:border-cyan-500/50', iconColor: 'group-hover:text-cyan-500' },
                            { border: 'border-orange-500/50', text: 'group-hover:text-orange-500', bg: 'from-orange-500/20', iconBg: 'group-hover:bg-orange-500/10', iconBorder: 'group-hover:border-orange-500/50', iconColor: 'group-hover:text-orange-500' },
                            { border: 'border-pink-500/50', text: 'group-hover:text-pink-500', bg: 'from-pink-500/20', iconBg: 'group-hover:bg-pink-500/10', iconBorder: 'group-hover:border-pink-500/50', iconColor: 'group-hover:text-pink-500' },
                        ];

                        const colorSet = colors[idx % colors.length];

                        return (
                            <Reveal key={item} delay={0.05 * idx}>
                                <Link href={getProductHref(item)} className="group flex h-full">
                                    <div className={`bg-[#0c0c0c] border ${colorSet.border} p-10 transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-2 relative overflow-hidden w-full flex flex-col justify-between min-h-[340px] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]`}>
                                        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colorSet.bg} to-transparent opacity-10 group-hover:opacity-100 transition-opacity`} />

                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-8">
                                                <div className={`w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center ${colorSet.iconBg} ${colorSet.iconBorder} transition-all duration-500`}>
                                                    <Icon size={28} className={`text-zinc-300 ${colorSet.iconColor} transition-colors`} />
                                                </div>
                                                <span className="text-[11px] text-zinc-400 font-black uppercase tracking-[0.3em]">Protocol 0{idx + 1}</span>
                                            </div>

                                            <h3 className={`text-2xl font-display leading-[1.1] ${colorSet.text} transition-colors mb-4`}>
                                                {item}
                                            </h3>
                                            <p className="text-[13px] text-zinc-300 font-light leading-relaxed group-hover:text-zinc-100 transition-colors line-clamp-3">
                                                Elite enterprise module for {item.toLowerCase()}. Engineered for scale, security, and high-performance business intelligence.
                                            </p>
                                        </div>

                                        <div className="mt-10 flex items-center justify-between relative z-10">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 group-hover:text-white transition-colors flex items-center gap-2">
                                                VIEW SYSTEM <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            <div className="h-[1px] flex-grow mx-4 bg-white/5" />
                                            <div className="relative flex items-center justify-center">
                                                <div className={`absolute w-3 h-3 rounded-full ${colorSet.text.replace('group-hover:', '')} bg-current opacity-20 animate-ping`} />
                                                <div className={`w-2 h-2 rounded-full ${colorSet.text.replace('group-hover:', '')} bg-current`} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        );
                    })}
                </div>

                <div className="mt-10 pt-10 border-t border-white/5 text-center">
                    <Reveal>
                        <h2 className="text-3xl font-display mb-6 italic text-zinc-300">Need a custom variant for your specific needs?</h2>
                        <Link href="/contact">
                            <Button className="bg-red-600 text-white rounded-none border-none py-4 px-10 text-lg font-bold tracking-[0.2em] skew-x-[-10deg]">
                                <span className="skew-x-[10deg]">Talk to an Architect</span>
                            </Button>
                        </Link>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

export function generateStaticParams() {
    const allCategories = getAllCategories();
    return Object.keys(allCategories).map(slug => ({ slug }));
}
