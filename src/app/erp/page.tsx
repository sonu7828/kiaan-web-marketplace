"use client";
import React from 'react';
import { Layers, Shield, Zap } from 'lucide-react';
import { NicheServicePage } from '@/components/NicheServicePage';

export default function ERPPage() {
    return (
        <NicheServicePage
            title="ERP SYSTEMS"
            subTitle="ERP"
            mainKeyword="ERP SaaS platform"
            slug="erp"
            keywords={["business ERP cloud system", "Enterprise Resource Planning", "Supply Chain tech", "Inventory AI"]}
            desc="Connect your entire enterprise with our battle-tested ERP SaaS platform. The ultimate business ERP cloud system for global operations."
            colorClass="text-yellow-500"
            bgClass="bg-yellow-500"
            stats={[
                { val: "Unlimited", label: "User Nodes" },
                { val: "100ms", label: "Query Speed" },
                { val: "Multi-Org", label: "Support" },
                { val: "Cloud", label: "Native" }
            ]}
            features={[
                {
                    icon: "Layers",
                    title: "Supply Chain",
                    desc: "End-to-end inventory and vendor management inside your custom business ERP cloud system.",
                    items: ["Stock Tracking", "PO Generation", "Vendor Portal"]
                },
                {
                    icon: "Shield",
                    title: "Fiscal Control",
                    desc: "Our ERP SaaS platform provides deep financial auditing and multi-currency accounting.",
                    items: ["GST/VAT Ready", "Balance Sheets", "Cost Centers"]
                },
                {
                    icon: "Zap",
                    title: "Core Logic",
                    desc: "Connect HR, Sales, and Inventory into one central brain for your entire business empire.",
                    items: ["Cross-Module Data", "Custom Dashboards", "Role Access"]
                }
            ]}
            faqs={[
                {
                    question: "What is an ERP SaaS platform?",
                    answer: "An ERP SaaS (Software as a Service) platform is a cloud-based business system that integrates all core departments — including finance, human resources, supply chain, inventory, and sales — into a single secure repository accessed via the internet."
                },
                {
                    question: "Can this ERP system handle multi-currency and multi-organization setups?",
                    answer: "Yes, our enterprise resource planning software supports complex corporate structures. You can manage multiple legal entities, subsidiaries, cost centers, and currencies, generating consolidated financial reports with dynamic tax translations."
                },
                {
                    question: "Is our data secure on your cloud ERP system?",
                    answer: "Security is our core priority. Our ERP platforms are designed with role-based access control (RBAC), end-to-end data encryption, audit logging, IP whitelisting, and are hosted on highly secure, SOC 2-compliant cloud architecture."
                }
            ]}
            internalLinks={[
                { label: 'CRM Systems', href: '/crm' },
                { label: 'HRM Software', href: '/hrm' },
                { label: 'Accounting & Finance', href: '/products/category/accounting-finance' },
                { label: 'Inventory Management', href: '/products/inventory-system' },
                { label: 'Custom Software Dev', href: '/services/custom-software-development' },
                { label: 'SaaS Development', href: '/services/saas-development' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Schedule Consultation', href: '/schedule' },
            ]}
        />
    );
}
