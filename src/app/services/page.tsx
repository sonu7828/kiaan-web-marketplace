"use client";

import React from 'react';
import {
    ArrowRight,
    Activity,
    Building,
    Landmark,
    GraduationCap,
    Truck,
    ShoppingBag,
    Car,
    DollarSign,
    Utensils,
    Briefcase,
    Database,
    Shield,
    Zap,
    Cpu
} from 'lucide-react';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/Button';
import { ContactCTA } from '@/components/shared/ContactCTA';

// Mock aggregation of data for visual display
const serviceCategories = [
    {
        title: "Healthcare Solutions",
        icon: Activity,
        color: "text-blue-500",
        borderColor: "border-blue-600/30",
        hoverBg: "hover:bg-blue-600/10",
        solutions: ["Clinic Management", "EMR Software", "Telemedicine", "Lab Systems"],
        link: "/industries/healthcare-software"
    },
    {
        title: "Real Estate & Property",
        icon: Building,
        color: "text-emerald-500",
        borderColor: "border-emerald-600/30",
        hoverBg: "hover:bg-emerald-600/10",
        solutions: ["Property Management", "Tenant SaaS", "Contract Mgmt", "Accounting"],
        link: "/solutions/real-estate"
    },
    {
        title: "Fintech & Finance",
        icon: Landmark,
        color: "text-yellow-500",
        borderColor: "border-yellow-600/30",
        hoverBg: "hover:bg-yellow-600/10",
        solutions: ["Accounting ERP", "Payroll Systems", "Banking Dashboards", "Trading Bots"],
        link: "/industries/fintech-software"
    },
    {
        title: "Education & LMS",
        icon: GraduationCap,
        color: "text-orange-500",
        borderColor: "border-orange-600/30",
        hoverBg: "hover:bg-orange-600/10",
        solutions: ["LMS Platforms", "School Management", "Exam Systems", "Academy SaaS"],
        link: "/solutions/education"
    },
    {
        title: "Logistics & Fleet",
        icon: Truck,
        color: "text-cyan-500",
        borderColor: "border-cyan-600/30",
        hoverBg: "hover:bg-cyan-600/10",
        solutions: ["Fleet Tracking", "Route Optimization", "Shipment ERP", "Warehouse Mgmt"],
        link: "/solutions/logistics"
    },
    {
        title: "Retail & E-commerce",
        icon: ShoppingBag,
        color: "text-pink-500",
        borderColor: "border-pink-600/30",
        hoverBg: "hover:bg-pink-600/10",
        solutions: ["Retail POS", "Inventory Management", "Billing Software", "Sales Tracking"],
        link: "/industries/retail-technology"
    },
    {
        title: "Automotive & Rental",
        icon: Car,
        color: "text-red-500",
        borderColor: "border-red-600/30",
        hoverBg: "hover:bg-red-600/10",
        solutions: ["Rental Management", "Garage Systems", "Fleet Analytics", "Workshop ERP"],
        link: "/solutions/automotive"
    },
    {
        title: "Hospitality & F&B",
        icon: Utensils,
        color: "text-amber-500",
        borderColor: "border-amber-600/30",
        hoverBg: "hover:bg-amber-600/10",
        solutions: ["Hotel PMS", "Restaurant POS", "Booking Systems", "Food Delivery"],
        link: "/solutions/hospitality"
    },
    {
        title: "AI & Automation",
        icon: Cpu,
        color: "text-purple-500",
        borderColor: "border-purple-600/30",
        hoverBg: "hover:bg-purple-600/10",
        solutions: ["Neural Architectures", "Workflow Bots", "Predictive Analytics", "Cognitive Apps"],
        link: "/services/ai-automation"
    },
    {
        title: "HRM Solutions",
        icon: Briefcase,
        color: "text-rose-500",
        borderColor: "border-rose-600/30",
        hoverBg: "hover:bg-rose-600/10",
        solutions: ["Payroll & Salary Tech", "Attendance Geo-Tracking", "Appraisal & KPI Systems", "AI Candidate ATS"],
        link: "/hrm"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-black text-white pt-5 lg:pt-8 pb-2 font-sans selection:bg-yellow-500 selection:text-black">
            {/* Header */}
            <section className="container mx-auto px-4 sm:px-6 max-w-7xl mb-4">
                <div className="border-b border-zinc-800 pb-4">
                    <Reveal>
                        <div className="inline-block bg-yellow-500 text-black text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-2">
                            Industrial Catalog v2.0
                        </div>
                    </Reveal>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <Reveal delay={0.2}>
                            <h1 className="text-3xl md:text-5xl font-display uppercase tracking-tighter leading-none">
                                <span className="text-white">ALL</span> <span className="text-yellow-500">SERVICES.</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className="text-xs md:text-sm text-zinc-300 max-w-xl font-light italic border-l-2 border-yellow-500 pl-4 lg:mb-0.5">
                                "We don't just provide software. We provide the digital dominance required to lead your industry in the age of AI."
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4 sm:px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-zinc-800 mb-4">
                {serviceCategories.map((category, idx) => (
                    <Link
                        key={idx}
                        href={category.link}
                        className={`group p-6 md:p-8 border-zinc-800 transition-all duration-500 ${idx % 3 !== 2 ? 'lg:border-r' : ''} ${idx >= 3 ? 'border-t' : ''} ${category.hoverBg} cursor-pointer relative overflow-hidden`}
                    >
                        {/* Visual Decoration */}
                        <div className="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                            <category.icon size={200} />
                        </div>

                        <div className="relative z-10">
                            <div className={`mb-6 p-3 w-fit border border-zinc-700 bg-black group-hover:border-yellow-500 transition-colors`}>
                                <category.icon size={24} className={`${category.color} group-hover:scale-110 transition-transform`} />
                            </div>

                            <h3 className="text-2xl font-display uppercase mb-4 group-hover:text-white transition-colors">
                                {category.title}
                            </h3>

                            <div className="space-y-2 mb-6">
                                {category.solutions.map((sol, sIdx) => (
                                    <div key={sIdx} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300">
                                        <div className="w-1 h-1 bg-zinc-700 rounded-full group-hover:bg-yellow-500" />
                                        {sol}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 group-hover:text-yellow-500 transition-all">
                                EXPLORE DOMAIN <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                ))}
            </section>

            {/* CTA Section */}
            <ContactCTA />



            {/* Global CSS Style tag for text stroke if not in globals.css */}
            <style jsx global>{`
        .text-stroke-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
        </div>
    );
}
