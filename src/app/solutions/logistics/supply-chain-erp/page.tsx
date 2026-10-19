import { NicheServicePage } from '@/components/NicheServicePage';
import type { Metadata } from 'next';

const data = {
    title: "Next-Gen Supply Chain ERP Development for Global Logistics",
    subTitle: "Supply Chain ERP",
    mainKeyword: "Custom supply chain ERP development",
    keywords: [
        "logistics ERP software",
        "supply chain management software development",
        "enterprise logistics dashboard"
    ],
    desc: "Transform your logistics operations with predictive analytics, end-to-end visibility, and automated inventory management. We engineer highly scalable Supply Chain ERPs that replace fragmented legacy systems.",
    features: [
        {
            title: "End-to-End Visibility",
            desc: "Real-time tracking of assets from warehouse to last-mile delivery.",
            icon: "Globe",
            items: ["Real-time Asset Tracking", "Vendor Management Portals", "Multi-warehouse Sync"]
        },
        {
            title: "Predictive Analytics",
            desc: "AI-driven demand forecasting outperforming traditional forecasting models.",
            icon: "BarChart3",
            items: ["Demand Forecasting", "Inventory Automation", "Anomaly Detection"]
        },
        {
            title: "Legacy Migration",
            desc: "Zero-downtime transition from outdated monolithic ERPs to microservices.",
            icon: "RefreshCw",
            items: ["Zero-downtime Transition", "Data Cleansing", "Microservices Architecture"]
        }
    ],
    stats: [
        { val: "30%", label: "Efficiency Gain", desc: "Average operational cost reduction" },
        { val: "99.9%", label: "Uptime", desc: "Cloud-native highly available infrastructure" },
        { val: "100M+", label: "Daily API Calls", desc: "Designed for high-throughput logistics" },
        { val: "10x", label: "Faster Reporting", desc: "Real-time automated data dashboards" }
    ],
    faqs: [
        {
            question: "How do you handle legacy system data migration?",
            answer: "We utilize specialized ETL (Extract, Transform, Load) pipelines to safely cleanse and migrate your historical data. We architect a parallel run strategy, ensuring zero operational downtime as you transition from your legacy ERP."
        },
        {
            question: "Can your ERP integrate with our existing EDI systems?",
            answer: "Absolutely. We build robust API gateways and EDI (Electronic Data Interchange) modules that allow our modern ERPs to communicate seamlessly with your older trading partners, carriers, and 3PLs."
        },
        {
            question: "What is the typical timeline for an enterprise ERP rollout?",
            answer: "An enterprise-grade Supply Chain ERP typically deploys in phased rollouts over 6-9 months, starting with core operational modules (inventory, order management) and scaling into advanced BI and predictive analytics."
        }
    ],
    internalLinks: [
        { label: "MERN Stack Development", href: "/services/web-development" },
        { label: "Route Optimization Software", href: "/solutions/logistics/route-optimization" },
        { label: "Business Automation Intelligence", href: "/services/ai-automation" }
    ],
    painPoints: [
        {
            title: "Dangerous Blind Spots",
            desc: "Fragmented software ecosystems leading to invisible supply chain bottlenecks and delayed shipments."
        },
        {
            title: "Costly Stockouts & Overstock",
            desc: "Inaccurate demand forecasting forcing critical stockouts or tying up millions in dead inventory."
        },
        {
            title: "Manual Data Entry Errors",
            desc: "High operational overhead caused by repetitive, manual data entry across disconnected systems."
        }
    ],
    useCases: [
        {
            title: "Automated Reordering",
            desc: "Algorithms calculating precisely when to reorder based on lead times and predictive demand."
        },
        {
            title: "Global Shipment Tracking",
            desc: "A unified dashboard offering real-time status of ocean, air, and freight movements."
        },
        {
            title: "Supplier Performance Metrics",
            desc: "Automated scorecards tracking vendor on-time delivery rates and quality metrics."
        }
    ],
    colorClass: "text-blue-500",
    bgClass: "bg-blue-600",
    longTailKeywords: [
        "logistics software development company in india",
        "custom erp developers for supply chain",
        "cloud based logistics erp"
    ],
    locationKeywords: ["India", "Global", "USA"]
};

export const metadata: Metadata = {
    title: `${data.title} | Kiaan Technology`,
    description: data.desc,
    keywords: [...data.keywords, ...(data.longTailKeywords || []), ...(data.locationKeywords || [])].join(', '),
    openGraph: {
        title: `${data.title} | Kiaan Technology`,
        description: data.desc,
        url: 'https://kiaantechnology.com/solutions/logistics/supply-chain-erp',
        siteName: 'Kiaan Technology',
        type: 'website',
    },
    alternates: {
    },
};

export default function SupplyChainErpPage() {
    return <NicheServicePage {...data} slug="logistics/supply-chain-erp" />;
}
