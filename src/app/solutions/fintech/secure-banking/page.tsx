import { NicheServicePage } from '@/components/NicheServicePage';
import type { Metadata } from 'next';

const data = {
    title: "Secure, High-Performance Banking Dashboard Development",
    subTitle: "Banking Dashboards",
    mainKeyword: "Custom banking dashboard development",
    keywords: [
        "fintech UI/UX design",
        "secure financial portal",
        "enterprise banking software"
    ],
    desc: "Transform complex financial data into intuitive, lightning-fast user experiences. We engineer enterprise banking dashboards with React and Angular, prioritizing bank-grade security and zero-latency data visualization.",
    features: [
        {
            title: "Bank-Grade Security",
            desc: "Military-grade encryption and architectural compliance for financial institutions.",
            icon: "ShieldCheck",
            items: ["SOC2 Compliance Mapping", "AES-256 Data Encryption", "Biometric / MFA Integration"]
        },
        {
            title: "Real-Time Visualization",
            desc: "Processing millions of data points into seamless, interactive charts with WebGL and D3.js.",
            icon: "BarChart3",
            items: ["D3.js / Highcharts", "WebSocket Push Updates", "Zero-Latency Rendering"]
        },
        {
            title: "Micro-Frontend React",
            desc: "Scalable frontend architecture allowing independent teams to update discrete dashboard modules.",
            icon: "Layers",
            items: ["React / Next.js", "Module Federation", "Atomic Design System"]
        }
    ],
    stats: [
        { val: "100%", label: "SOC2 Ready", desc: "Architected for rigorous compliance audits" },
        { val: "0.1s", label: "Render Time", desc: "Optimized for massive financial datasets" },
        { val: "A11Y", label: "Accessibility", desc: "WCAG 2.1 AA compliant UI components" },
        { val: "256-bit", label: "Encryption", desc: "End-to-end data protection" }
    ],
    faqs: [
        {
            question: "How do you ensure the frontend is secure against common vulnerabilities?",
            answer: "Our React and Angular architectures are built to strictly prevent XSS (Cross-Site Scripting) and CSRF (Cross-Site Request Forgery). We enforce strict Content Security Policies (CSP), utilize HttpOnly secure cookies for session management, and conduct automated OWASP vulnerability scanning during CI/CD."
        },
        {
            question: "Can your dashboards handle high-frequency data streams?",
            answer: "Yes. For dashboards requiring live market data or massive transaction volumes, we bypass standard REST polling. Instead, we implement optimized WebSocket connections combined with React Server Components or virtualized lists to render thousands of rows without dropping browser frames."
        },
        {
            question: "Do you provide UI/UX design services or just development?",
            answer: "We offer end-to-end services. Our dedicated Fintech UI/UX design team begins with wireframing and interactive prototyping in Figma, ensuring the complex financial data is presented intuitively before a single line of code is written."
        }
    ],
    internalLinks: [
        { label: "MERN Stack Development", href: "/services/web-development" },
        { label: "Algorithmic Trading Bots", href: "/solutions/fintech/algorithmic-trading" },
        { label: "Fintech Solutions Info", href: "/industries/fintech-software" }
    ],
    painPoints: [
        {
            title: "Clunky, Outdated Interfaces",
            desc: "Losing high-net-worth clients because your banking portal feels like it was built in 2005."
        },
        {
            title: "Browser Freezes",
            desc: "Dashboards that crash or freeze when attempting to load large transaction histories or complex charts."
        },
        {
            title: "Compliance Nightmares",
            desc: "Failing security audits because the frontend architecture lacks strict data handling protocols."
        }
    ],
    useCases: [
        {
            title: "Wealth Management Portals",
            desc: "Aggregating multiple asset classes (equities, crypto, real estate) into a single, comprehensive overview for wealth managers."
        },
        {
            title: "Corporate Treasury Dashboards",
            desc: "Providing CFOs with real-time liquidity analysis, FX exposure, and automated cash flow forecasting."
        },
        {
            title: "Neobank Mobile-First Web Apps",
            desc: "Delivering a seamless, app-like experience directly in the browser for modern digital banking customers."
        }
    ],
    colorClass: "text-indigo-500",
    bgClass: "bg-indigo-600",
    longTailKeywords: [
        "hire fintech react developers",
        "banking ui design company",
        "custom dashboard development for finance"
    ],
    locationKeywords: ["India", "Global", "USA", "UK", "Dubai"]
};

export const metadata: Metadata = {
    title: `${data.title} | Kiaan Technology`,
    description: data.desc,
    keywords: [...data.keywords, ...(data.longTailKeywords || []), ...(data.locationKeywords || [])].join(', '),
    openGraph: {
        title: `${data.title} | Kiaan Technology`,
        description: data.desc,
        url: 'https://kiaantechnology.com/solutions/fintech/secure-banking',
        siteName: 'Kiaan Technology',
        type: 'website',
    },
    alternates: {
    },
};

export default function SecureBankingPage() {
    return <NicheServicePage {...data} slug="fintech/secure-banking" />;
}
