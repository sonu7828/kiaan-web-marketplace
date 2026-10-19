import type { Metadata } from "next";
import { NicheServicePage } from '@/components/NicheServicePage';

export const metadata: Metadata = {
    title: "Custom HRM Software Development Company | Kiaan Technology",
    description: "Kiaan Technology is a premier custom HRM software development company building secure, cloud-native HRMS portals, automated payroll systems, ATS recruitment bots, and employee management portals.",
    keywords: "Custom HRM Software Development, HRM Software Development Company, HRMS Software development, Automated Payroll ERP, Employee Management System India, HR Automation Software, Performance Appraisal Software, Cloud HRMS Solutions",
    alternates: {},
    openGraph: {
        title: "Custom HRM Software Development Company | Kiaan Technology",
        description: "Cloud-native HRMS portals, automated payroll systems, ATS recruitment bots & employee management portals — built by Kiaan Technology.",
        url: "https://kiaantechnology.com/hrm",
        siteName: "Kiaan Technology",
        images: [{ url: "https://kiaantechnology.com/og-image.jpg", width: 1200, height: 630, alt: "HRM Software Development - Kiaan Technology" }],
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom HRM Software Development Company | Kiaan Technology",
        description: "Cloud-native HRMS portals, automated payroll systems & ATS recruitment bots. Build with Kiaan Technology.",
        images: ["https://kiaantechnology.com/og-image.jpg"],
    },
};

export default function HRMPage() {
    return (
        <NicheServicePage
            title="ADVANCED HRM SYSTEMS & WORKFORCE SUITE"
            subTitle="HRM"
            mainKeyword="HRM SaaS Software"
            slug="hrm"
            colorClass="text-yellow-500"
            bgClass="bg-yellow-500"
            desc="Streamline your workforce with the industry's most advanced HRM SaaS software. Empower your human resource department with full-cycle HR automation engineered specifically for modern, remote-first teams and complex, multi-location enterprise operations. Our intelligent human capital suite unifies automated salary calculations, statutory compliance (PF, ESI, TDS), dynamic shift planning, real-time biometric API logs, continuous KRA/KPI evaluation systems, and AI-driven candidate recruitment pipelines into a single, high-performance cloud ecosystem. By eliminating tedious manual administration, we enable your organization to scale human operations, optimize operational costs, and drive strategic talent management with zero downtime."
            stats={[
                { val: "95%", label: "HR Automation Rate" },
                { val: "Zero", label: "Payroll Errors" },
                { val: "40%", label: "Recruitment Saved" },
                { val: "100%", label: "Tax Compliant" }
            ]}
            keywords={[
                "HRM Software Development",
                "Custom HR Portal Solutions",
                "AI Payroll & Attendance System",
                "Employee Management System India",
                "Performance Appraisal Software",
                "Cloud HRMS Solutions",
                "Enterprise HRM Software",
                "Recruitment AI & ATS"
            ]}
            features={[
                {
                    icon: "Users",
                    title: "Employee Directory & ESS",
                    desc: "Centralized digital repository securing workforce records, self-service portals, and role-based access control.",
                    items: ["Employee Self-Service (ESS)", "Secure Cloud Digital Files", "Role-Based Custom Portals", "Onboarding Workflows"]
                },
                {
                    icon: "Zap",
                    title: "Automated Payroll & Tax",
                    desc: "Flawless automated payroll engine calculating taxes, provident funds, and payouts with zero manual effort.",
                    items: ["Automated Tax Deduction", "Provident Fund & ESI Tech", "Custom Payout Structures", "Digital Paystub Generation"]
                },
                {
                    icon: "Clock",
                    title: "Attendance & Shift tracker",
                    desc: "Real-time tracking of employee presence, shifts, and leaves with biometric and geo-fencing integrations.",
                    items: ["Biometric API Integrations", "Geo-Fenced Clock-In", "Shift Rotation Scheduling", "Automated Leave Approval"]
                },
                {
                    icon: "Activity",
                    title: "Performance & appraisal",
                    desc: "Systematic evaluation of employee performance through custom KRA, KPI matrices, and 360-degree feedback.",
                    items: ["KRA & KPI Tracking", "Continuous Appraisal", "360-Degree Feedback", "Goal Alignment Dashboards"]
                },
                {
                    icon: "Rocket",
                    title: "AI Recruitment & ATS",
                    desc: "Transform candidate sourcing, interview scheduling, and screening using smart ATS and AI-driven automation.",
                    items: ["AI Applicant Tracking (ATS)", "Automated Interview Pipelines", "Skill Scoring Algorithms", "Digital Document Verification"]
                },
                {
                    icon: "BarChart3",
                    title: "HR Analytics & Strategic Reporting",
                    desc: "Comprehensive visual dashboards for attrition rates, workforce costs, and productivity tracking.",
                    items: ["Attrition Rate Analytics", "Workforce Cost Dashboards", "Departmental Productivity", "Custom Compliance Reports"]
                }
            ]}
            painPoints={[
                {
                    title: "Disconnected Payroll Systems",
                    desc: "Manual spreadsheet processing leads to high payout errors, payroll calculation delays, and compliance issues."
                },
                {
                    title: "Inaccurate Attendance Tracking",
                    desc: "Buddy-punching and remote team monitoring challenges result in payroll leakage and inaccurate billing reports."
                },
                {
                    title: "Inefficient Recruitment Cycles",
                    desc: "Sifting through hundreds of resumes manually delays onboarding and causes you to lose top talent to competitors."
                }
            ]}
            useCases={[
                {
                    title: "Enterprise Payroll & Payout Automation",
                    desc: "Automated payouts for a workforce of 1,000+ employees with varying shift timings, overtime pay scales, and performance-based commission metrics."
                },
                {
                    title: "Remote Team Geo-Fencing Attendance",
                    desc: "A mobile-first HR application allowing field sales and site-based engineering teams to register attendance securely via GPS-authenticated geofences."
                },
                {
                    title: "Structured KRA & Appraisal Pipeline",
                    desc: "A digital continuous appraisal workflow mapping corporate goals directly to employee performance scorecards with transparent quarterly review gates."
                }
            ]}
            faqs={[
                {
                    question: "What is custom HRM software development, and why does my business need it?",
                    answer: "Custom HRM (Human Resource Management) software development is the process of building a tailored HR platform designed specifically for your organization's unique workflows. Unlike off-the-shelf HR tools, a custom system integrates seamlessly with your existing databases, payroll structures, biometric devices, and company compliance rules, ensuring high efficiency and zero licensing constraints."
                },
                {
                    question: "How does the custom payroll automation ensure tax and statutory compliance?",
                    answer: "Our custom payroll engines are built to auto-calculate local taxes, provident funds (PF), professional tax (PT), ESI, and other statutory deductions based on your regional regulations. The system is updated dynamically with changing tax codes to ensure 100% compliance and zero processing errors."
                },
                {
                    question: "Can the HRM system integrate with biometric devices and geo-fencing for attendance?",
                    answer: "Yes. We develop custom biometric API endpoints that connect directly with your physical attendance machines. Additionally, we integrate GPS and geo-fencing algorithms in employee mobile apps to allow remote teams to safely clock-in and clock-out within designated client locations."
                },
                {
                    question: "Is our employee data secure on your custom cloud HRM system?",
                    answer: "Security is our highest priority. Our HRM platforms implement modern SOC 2-compliant data practices, including end-to-end SSL/TLS data encryption in transit, AES-256 encryption at rest, role-based access controls (RBAC), and multi-factor authentication (MFA) to safeguard sensitive personnel records."
                }
            ]}
            internalLinks={[
                { label: "OKR Weekly Outcomes Portal", href: "/hrm/weekly-outcomes" },
                { label: "Custom Software Solutions", href: "/services/custom-software-development" },
                { label: "ERP & CRM Platforms", href: "/services/erp-crm-solutions" },
                { label: "AI & Automation services", href: "/services/ai-automation" },
                { label: "SaaS Product Engineering", href: "/services/saas-development" }
            ]}
        />
    );
}
