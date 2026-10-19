"use client";
import React from 'react';
import { Rocket, Layers, Users } from 'lucide-react';
import { NicheServicePage } from '@/components/NicheServicePage';

export default function POSPage() {
    return (
        <NicheServicePage
            title="POS SYSTEMS"
            subTitle="POS"
            mainKeyword="POS SaaS software"
            slug="pos"
            keywords={["retail POS system online", "Billing Cloud", "Barcode API", "Hardware Sync"]}
            desc="Power your retail empire with high-speed POS SaaS software. A retail POS system online that works even when your internet doesn't."
            colorClass="text-yellow-500"
            bgClass="bg-yellow-500"
            stats={[
                { val: "Snap", label: "Billing" },
                { val: "Offline", label: "Mode Ready" },
                { val: "50+", label: "Gateway Integrations" },
                { val: "Real-time", label: "Stock Sync" }
            ]}
            features={[
                {
                    icon: "Rocket",
                    title: "Cloud Billing",
                    desc: "Lightning fast POS SaaS software designed for high-volume grocery and fashion retail.",
                    items: ["Barcode Ready", "Multi-payment", "Invoice Design"]
                },
                {
                    icon: "Layers",
                    title: "Stock Brain",
                    desc: "Advanced inventory system inside your retail POS system online with low-stock alerts.",
                    items: ["SKU Management", "Stock Transfers", "Expiry Alerts"]
                },
                {
                    icon: "Users",
                    title: "loyalty tech",
                    desc: "Integrated customer loyalty modules in your POS system to keep your shoppers coming back.",
                    items: ["Reward Points", "Coupons", "Purchase History"]
                }
            ]}
            faqs={[
                {
                    question: "Does the POS software support offline mode?",
                    answer: "Yes, our retail POS system online features a robust offline mode. You can continue scanning barcodes, adding products to cart, and generating invoices without internet connectivity. Once the connection is restored, the database auto-syncs with the cloud."
                },
                {
                    question: "Can I integrate my existing barcode scanners and billing hardware?",
                    answer: "Absolutely. Our cloud billing interface integrates out-of-the-box with standard USB and Bluetooth barcode scanners, thermal receipt printers, cash drawers, and customer-facing displays through simple API/hardware sync configurations."
                },
                {
                    question: "How does real-time stock sync work across multiple locations?",
                    answer: "The POS system communicates continuously with our central inventory brain. Whenever a transaction occurs at any store or cashier terminal, the system updates inventory levels instantly across all locations, preventing double-selling."
                }
            ]}
            internalLinks={[
                { label: 'ERP Systems', href: '/erp' },
                { label: 'CRM Software', href: '/crm' },
                { label: 'Inventory Management', href: '/products/inventory-system' },
                { label: 'Retail & E-commerce', href: '/industries/retail-technology' },
                { label: 'Custom Software', href: '/services/custom-software-development' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Product Demo', href: '/demo' },
                { label: 'Pricing Plans', href: '/pricing' },
            ]}
        />
    );
}
