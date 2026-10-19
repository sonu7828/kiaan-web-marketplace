import { NicheServicePage } from '@/components/NicheServicePage';
import type { Metadata } from 'next';

const data = {
    title: "Custom HIPAA-Compliant Patient Portal Development",
    subTitle: "Patient Portal",
    mainKeyword: "HIPAA Compliant Patient Portal Development",
    keywords: [
        "healthcare software development India",
        "custom patient portal",
        "secure medical app developers"
    ],
    desc: "Secure, scalable, and fully compliant patient portal development. We engineer platforms that prioritize patient data security and streamline clinical workflows.",
    features: [
        {
            title: "EHR / EMR Integration",
            desc: "Seamless synchronization with Epic, Cerner, and HL7/FHIR standards.",
            icon: "Database",
            items: ["Real-time Sync", "HL7/FHIR Standards", "Legacy System Migration"]
        },
        {
            title: "Bank-Grade Security",
            desc: "End-to-end encryption ensuring 100% HIPAA compliance.",
            icon: "ShieldCheck",
            items: ["AES-256 Encryption", "Role-Based Access", "Audit Logging"]
        },
        {
            title: "Telehealth Ready",
            desc: "Built-in secure messaging and WebRTC video infrastructure.",
            icon: "Smartphone",
            items: ["Secure Messaging", "WebRTC Video", "Push Notifications"]
        }
    ],
    stats: [
        { val: "100%", label: "HIPAA Compliant", desc: "Built to stringent healthcare standards" },
        { val: "0", label: "Data Breaches", desc: "Military-grade encryption protocols" },
        { val: "10+", label: "EHR Integrations", desc: "Epic, Cerner, Allscripts, and custom" },
        { val: "24/7", label: "Audit Logging", desc: "Continuous security monitoring" }
    ],
    faqs: [
        {
            question: "How do you ensure HIPAA compliance?",
            answer: "We utilize AWS HIPAA-eligible services, implement AES-256 encryption at rest and in transit, enforce strict IAM role-based access controls, and maintain comprehensive audit logs. Our architecture is designed from the ground up to meet and exceed regulatory standards."
        },
        {
            question: "Can you integrate the portal with our existing EHR?",
            answer: "Yes, we specialize in HL7 and FHIR interoperability standards. We seamlessly integrate custom patient portals with major EHR systems like Epic, Cerner, Athenahealth, and legacy custom databases."
        },
        {
            question: "How long does it take to develop a custom patient portal?",
            answer: "A standard highly secure MVP typically takes 12-16 weeks depending on the complexity of EHR integrations and specific workflow requirements. We provide a detailed architectural roadmap before kicking off development."
        }
    ],
    internalLinks: [
        { label: "Telemedicine Platform Development", href: "/products/telemedicine-platform" },
        { label: "AWS Cloud Infrastructure", href: "/solutions/cloud-infrastructure" },
        { label: "Healthcare Solutions Overview", href: "/industries/healthcare-software" }
    ],
    painPoints: [
        {
            title: "Data Silos & Poor Interoperability",
            desc: "Struggling to sync patient data across legacy EHR systems and modern interfaces."
        },
        {
            title: "Security & Compliance Risks",
            desc: "The constant threat of costly data breaches and failing HIPAA audits due to outdated architecture."
        },
        {
            title: "Frustrating Patient Experience",
            desc: "Low patient engagement caused by clunky, outdated, and unresponsive legacy portals."
        }
    ],
    useCases: [
        {
            title: "Secure Messaging & Lab Results",
            desc: "Automating secure delivery of PHI to patients directly through an encrypted mobile-first portal."
        },
        {
            title: "Online Appointment Booking",
            desc: "Reducing administrative overhead with self-service scheduling synced to the clinic's master calendar."
        },
        {
            title: "Digital Intake Forms",
            desc: "Capturing critical patient history securely before they even arrive at the waiting room."
        }
    ],
    colorClass: "text-red-500",
    bgClass: "bg-red-500",
    longTailKeywords: [
        "hire hipaa compliant developers",
        "custom patient portal development cost",
        "ehr integration company"
    ],
    locationKeywords: ["India", "USA", "Global"]
};

export const metadata: Metadata = {
    title: `${data.title} | Kiaan Technology`,
    description: data.desc,
    keywords: [...data.keywords, ...(data.longTailKeywords || []), ...(data.locationKeywords || [])].join(', '),
    openGraph: {
        title: `${data.title} | Kiaan Technology`,
        description: data.desc,
        url: 'https://kiaantechnology.com/solutions/healthcare/patient-portal',
        siteName: 'Kiaan Technology',
        type: 'website',
    },
    alternates: {
    },
};

export default function PatientPortalPage() {
    return <NicheServicePage {...data} slug="healthcare/patient-portal" />;
}
