"use client";
import React from 'react';
import { Users, Layers, Shield } from 'lucide-react';
import { NicheServicePage } from '@/components/NicheServicePage';

export default function CRMPage() {
    return (
        <NicheServicePage
            title="CRM SYSTEMS"
            subTitle="CRM"
            mainKeyword="CRM SaaS software"
            slug="crm"
            keywords={["customer management SaaS", "online CRM system", "Sales Automation", "Lead Tracking"]}
            desc="Dominate your customer relationships with our high-performance CRM SaaS software. Built for global scale and precision lead management."
            colorClass="text-yellow-500"
            bgClass="bg-yellow-500"
            stats={[
                { val: "99.9%", label: "Lead Precision" },
                { val: "15min", label: "Sync Speed" },
                { val: "256-bit", label: "Data Security" },
                { val: "Global", label: "Connectivity" }
            ]}
            features={[
                {
                    icon: "Users",
                    title: "Client Portal",
                    desc: "Enterprise-grade customer management SaaS with dedicated white-label portals for your clients.",
                    items: ["Secure Login", "Real-time Chat", "Document Sharing"]
                },
                {
                    icon: "Layers",
                    title: "Pipeline Logic",
                    desc: "Customizable sales funnels inside our online CRM system that adapt to your specific workflow.",
                    items: ["Visual Boards", "Automated Tasks", "Revenue Forecast"]
                },
                {
                    icon: "Shield",
                    title: "Data Integrity",
                    desc: "Military-grade encryption for all your sensitive customer data and transaction history.",
                    items: ["GDPR Compliant", "Audit Logs", "IP Whitelisting"]
                }
            ]}
            faqs={[
                {
                    question: "How does the sales automation feature work in this CRM?",
                    answer: "Our CRM features intelligent automated pipelines. When a lead is captured from web forms or APIs, the system immediately scores it, assigns it to counselors based on predefined logic, and triggers automatic email and WhatsApp drip sequences."
                },
                {
                    question: "Can we customize the CRM pipelines and workflows?",
                    answer: "Yes. The CRM system is built with a highly flexible visual board setup. You can customize sales stages, drag-and-drop leads, define automated transition rules, and build unique reports tailored to your company's workflows."
                },
                {
                    question: "Does the CRM SaaS software support role-based access control?",
                    answer: "Absolutely. You can define custom roles (e.g., manager, team lead, agent, counselor) with specific view and edit permissions, ensuring that sensitive lead information and customer databases are secured."
                }
            ]}
            internalLinks={[
                { label: 'ERP Systems', href: '/erp' },
                { label: 'HRM Software', href: '/hrm' },
                { label: 'POS & Billing', href: '/pos' },
                { label: 'SaaS Development', href: '/services/saas-development' },
                { label: 'Custom Software', href: '/services/custom-software-development' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Our Products', href: '/products' },
                { label: 'Request Demo', href: '/demo' },
            ]}
        />
    );
}
