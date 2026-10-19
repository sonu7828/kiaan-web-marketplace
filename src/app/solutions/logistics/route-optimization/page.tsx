import { NicheServicePage } from '@/components/NicheServicePage';
import type { Metadata } from 'next';

const data = {
    title: "AI-Powered Route Optimization Software Development",
    subTitle: "Route Optimization",
    mainKeyword: "Route optimization software development",
    keywords: [
        "custom fleet management software",
        "AI route planning app",
        "logistics delivery routing"
    ],
    desc: "Slash fuel costs and increase daily deliveries with algorithmic route planning. We engineer custom fleet management systems utilizing AI and real-time mapping integrations.",
    features: [
        {
            title: "Algorithmic Routing",
            desc: "Reduce fuel consumption by dynamically calculating the absolute fastest multi-stop routes.",
            icon: "Brain",
            items: ["Multi-stop Sequencing", "Traffic-aware Adjustments", "Time-window Optimization"]
        },
        {
            title: "Live Fleet Tracking",
            desc: "Monitor your entire fleet via GPS with a unified dispatcher dashboard.",
            icon: "Smartphone",
            items: ["Real-time GPS Tracking", "Driver App Integration", "Proof of Delivery"]
        },
        {
            title: "Enterprise Mapping APIs",
            desc: "Deep integration with Google Maps, Mapbox, and OpenStreetMap for unparalleled accuracy.",
            icon: "Globe",
            items: ["Google Maps Integration", "Mapbox Matrices", "Custom Geofencing"]
        }
    ],
    stats: [
        { val: "25%", label: "Fuel Savings", desc: "Average reduction in fuel expenditure" },
        { val: "2x", label: "Driver Efficiency", desc: "Increase in daily successfully completed stops" },
        { val: "O.T.D", label: "On-Time Delivery", desc: "Radically improved customer satisfaction" },
        { val: "Zero", label: "Paper Manifests", desc: "Fully digitized driver workflows" }
    ],
    faqs: [
        {
            question: "Do you integrate with third-party mapping APIs?",
            answer: "Yes, we have deep architectural experience integrating with the Google Maps Platform (Directions API, Distance Matrix), Mapbox, and HERE Routing to build highly accurate enterprise routing engines."
        },
        {
            question: "Can the software handle dynamic rerouting?",
            answer: "Absolutely. If a new high-priority order arrives mid-shift, or if significant traffic events occur, our AI algorithms dynamically push optimized re-routes directly to the driver's mobile application in real-time."
        },
        {
            question: "How long does it take to develop custom route optimization software?",
            answer: "A robust MVP featuring driver applications, dispatcher dashboards, and basic algorithmic routing usually takes 10-14 weeks, depending significantly on the complexity of integrations with your existing order management system."
        }
    ],
    internalLinks: [
        { label: "Supply Chain ERP Systems", href: "/solutions/logistics/supply-chain-erp" },
        { label: "Data & AI Solutions", href: "/services/ai-automation" },
        { label: "Read Our AI Whitepaper", href: "/resources" }
    ],
    painPoints: [
        {
            title: "Crippling Fuel Overhead",
            desc: "Wasting millions annually on inefficient routing, idling, and unnecessary mileage."
        },
        {
            title: "Missed Delivery Windows",
            desc: "Furious customers and SLA penalties caused by inaccurate ETA calculations and poor dispatching."
        },
        {
            title: "Blind Dispatching",
            desc: "Total lack of visibility once a driver leaves the depot, relying on phone calls for updates."
        }
    ],
    useCases: [
        {
            title: "Last-Mile Delivery",
            desc: "Optimizing hundreds of small parcel drops per vehicle in dense urban environments."
        },
        {
            title: "Service Fleets",
            desc: "Routing HVAC or plumbing technicians dynamically based on emergency calls and skillsets."
        },
        {
            title: "Long-Haul Freight",
            desc: "Calculating optimal fuel stops, weigh stations, and driver rest periods across state lines."
        }
    ],
    colorClass: "text-amber-500",
    bgClass: "bg-amber-500",
    longTailKeywords: [
        "build google maps routing app",
        "logistics ai developers in india",
        "custom dispatch software development"
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
        url: 'https://kiaantechnology.com/solutions/logistics/route-optimization',
        siteName: 'Kiaan Technology',
        type: 'website',
    },
    alternates: {
    },
};

export default function RouteOptimizationPage() {
    return <NicheServicePage {...data} slug="logistics/route-optimization" />;
}
