"use client";

import React, { useState, useEffect } from 'react';
import {
    ArrowLeft, ChevronRight, Mail, Phone, MapPin,
    Shield, Lock, Database, CreditCard, Layers,
    Clock, User, Trash2, Globe, FileText, UserCheck,
    RefreshCw, ExternalLink, Activity, Scale, AlertTriangle,
    ShieldCheck, Receipt, HelpCircle
} from 'lucide-react';
import Link from 'next/link';

// List of all sections for the Table of Contents
const sections = [
    { id: 'introduction', label: '1. Introduction', icon: ShieldCheck },
    { id: 'security-commitment', label: '2. Our Commitment', icon: Shield },
    { id: 'data-principles', label: '3. Data Principles', icon: Scale },
    { id: 'access-control', label: '4. Access Control', icon: UserCheck },
    { id: 'data-encryption', label: '5. Data Encryption', icon: Lock },
    { id: 'infrastructure-security', label: '6. Infrastructure Security', icon: Database },
    { id: 'backup-recovery', label: '7. Backup & Recovery', icon: RefreshCw },
    { id: 'incident-response', label: '8. Incident Response', icon: Activity },
    { id: 'customer-responsibilities', label: '9. Customer Duties', icon: User },
    { id: 'third-party', label: '10. Third-Party Services', icon: ExternalLink },
    { id: 'data-disposal', label: '11. Retention & Disposal', icon: Trash2 },
    { id: 'security-limitations', label: '12. Security Limitations', icon: AlertTriangle },
    { id: 'policy-updates', label: '13. Policy Updates', icon: RefreshCw },
    { id: 'contact-us', label: '14. Contact Us', icon: Mail },
];

export default function SecurityPolicyPage() {
    const [activeSection, setActiveSection] = useState('introduction');

    // Scroll spy to highlight active section in sidebar
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-15% 0px -75% 0px', // trigger when section is active in viewport
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((sec) => {
            const el = document.getElementById(sec.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Helper for smooth scrolling
    const handleScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
    };

    return (
        <div className="bg-black min-h-screen pt-32 pb-24 text-zinc-400 selection:bg-yellow-500 selection:text-black relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-500/3 blur-[180px] rounded-full -z-10" />

            <div className="mx-auto w-[95%] max-w-[95%]" style={{ paddingLeft: '1.5%', paddingRight: '1.5%' }}>
                {/* Unified Header & Back Nav Grid Row */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-center mb-12 border-b border-zinc-900 pb-8"
                >
                    {/* Left Column (Above Sidebar) */}
                    <div className="flex items-center pl-5">
                        <Link href="/">
                            <button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest group shrink-0 cursor-pointer">
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                            </button>
                        </Link>
                    </div>

                    {/* Right Column (Above Content) */}
                    <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                            <h1 className="text-2xl md:text-4xl font-display uppercase text-white leading-none">
                                Security & <span className="text-yellow-500">Data Protection</span>
                            </h1>
                            <div className="hidden sm:block w-[1px] h-5 bg-zinc-800" />
                            <div>
                                <span className="inline-block px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[9px] font-black uppercase tracking-[0.25em] rounded">
                                    Security & Protection
                                </span>
                            </div>
                        </div>

                        <div className="shrink-0 text-zinc-500 text-xs font-semibold tracking-wider uppercase">
                            Last Updated: <span className="text-white font-bold ml-1">June 2026</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">

                    {/* Left Sticky Table of Contents Sidebar */}
                    <aside className="hidden lg:block privacy-sidebar-scroll" style={{ position: 'sticky', top: '7rem', width: '280px', maxHeight: '460px', overflowY: 'auto' }}>
                        <div className="border-l border-zinc-900 pl-4 py-2 space-y-3">
                            {sections.map((sec) => {
                                const IconComponent = sec.icon;
                                const isActive = activeSection === sec.id;
                                return (
                                    <button
                                        key={sec.id}
                                        onClick={() => handleScrollTo(sec.id)}
                                        className={`w-full flex items-center gap-3 text-left py-1.5 px-3 rounded-md transition-all text-xs font-bold cursor-pointer group ${isActive
                                            ? 'text-yellow-500 bg-yellow-500/5 border-l-2 border-yellow-500 pl-2.5'
                                            : 'text-zinc-400 hover:text-zinc-200 border-l-2 border-transparent'
                                            }`}
                                    >
                                        <IconComponent size={14} className={`shrink-0 ${isActive ? 'text-yellow-500' : 'text-zinc-500 group-hover:text-zinc-400'}`} />
                                        <span className="truncate">{sec.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </aside>

                    {/* Right Main Content */}
                    <div className="w-full space-y-16" style={{ marginLeft: '0' }}>

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-32">
                            <div
                                className="border-l-2 border-yellow-500 pl-6 space-y-4"
                            >
                                <h2 className="text-white text-xl font-bold uppercase tracking-wider mb-2">1. Introduction</h2>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    Kiaan Technology Private Limited (&quot;Kiaan Technology&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting customer information, business records, personal data, and system integrity.
                                </p>
                                <p className="text-zinc-400 font-light leading-relaxed">
                                    This Security &amp; Data Protection Policy describes the security measures, safeguards, and practices implemented to protect information processed through our website, SaaS platforms, software products, enterprise applications, and related services.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Our Commitment to Security */}
                        <section id="security-commitment" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Shield className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">2. Our Commitment to Security</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                We take commercially reasonable measures to safeguard information against threats, alterations, and breaches. Our commitment centers on protecting details from:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-[10px] text-zinc-300 font-bold uppercase text-center">
                                {["Unauthorized Access", "Unauthorized Disclosure", "Data Loss", "Data Alteration", "Data Misuse", "Cybersecurity Threats", "System Abuse"].map((item, index) => (
                                    <div key={index} className="border border-zinc-900 bg-zinc-950/40 py-2.5 px-3 rounded flex items-center justify-center">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed mt-2">
                                Security protocols are deeply integrated into our underlying technology infrastructure, internal operational procedures, and day-to-day service delivery processes.
                            </p>
                        </section>

                        {/* Section 3: Data Protection Principles */}
                        <section id="data-principles" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Scale className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">3. Data Protection Principles</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology strictly adheres to the following core data protection principles during all operational processes:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Lawful Processing", desc: "Data is gathered and processed legally, transparently, and in good faith." },
                                    { title: "Data Minimization", desc: "We restrict data collection parameters solely to what is necessary for operations." },
                                    { title: "Purpose Limitation", desc: "Information is processed strictly for the specified reasons it was collected." },
                                    { title: "Accuracy & Care", desc: "Reasonable measures are enforced to keep record fields clean and up to date." },
                                    { title: "Security & Confidentiality", desc: "We utilize safeguards to prevent data corruption or leaking." },
                                    { title: "Controlled Access", desc: "System entry is restricted strictly on a need-to-know basis." }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-zinc-950/40 border border-zinc-900/60 p-4 rounded-md">
                                        <span className="w-5 h-5 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                            {index + 1}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-white font-bold text-xs uppercase tracking-wider mb-1">{item.title}</span>
                                            <span className="text-zinc-400 leading-relaxed">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4: Access Control */}
                        <section id="access-control" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <UserCheck className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">4. Access Control</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Access to software environments and database tables is restricted based on business duties. Security controls include:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-light">
                                {[
                                    { title: "Role-Based Access Control (RBAC)", desc: "Personnel access permissions are mapped strictly to job functions and operational needs." },
                                    { title: "User Authentication", desc: "Robust verification mechanisms and password standards for entry." },
                                    { title: "Logs & Permissions Management", desc: "Continuous permission auditing and login tracking records." }
                                ].map((item, index) => (
                                    <div key={index} className="bg-zinc-950/60 border border-zinc-900/80 p-5 rounded-lg flex flex-col justify-between hover:border-yellow-500/20 transition-colors">
                                        <div className="space-y-3">
                                            <h3 className="text-white font-bold uppercase tracking-wider">{item.title}</h3>
                                            <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed mt-2">
                                Only authorized personnel may access customer data environments where required for legitimate support or operational purposes.
                            </p>
                        </section>

                        {/* Section 5: Data Encryption */}
                        <section id="data-encryption" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Lock className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">5. Data Encryption</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Where appropriate, Kiaan Technology utilizes industry-standard encryption protocols to protect data integrity:
                            </p>
                            <ul className="space-y-3 list-disc pl-6 text-zinc-300 text-sm font-light">
                                <li><strong>SSL/TLS Encryption</strong>: Encrypts data in transit between user browsers and our cloud endpoints.</li>
                                <li><strong>Encrypted Communications</strong>: Pinned communication channels and encrypted transmission mechanisms.</li>
                                <li><strong>Encrypted Storage</strong>: Secure storage structures and database encryption standards where applicable.</li>
                            </ul>
                        </section>

                        {/* Section 6: Infrastructure Security */}
                        <section id="infrastructure-security" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Database className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">6. Infrastructure Security</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Our SaaS platforms and database hosting environments utilize cloud servers from top-tier providers. Infrastructure safety controls include:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-zinc-300 font-bold uppercase text-center mt-4">
                                {["Firewalls", "Network Monitoring", "Threat Detection", "Security Patches", "OS Hardening", "Physical Security"].map((item, index) => (
                                    <div key={index} className="border border-zinc-900 bg-zinc-950/40 py-2.5 px-3 rounded">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed mt-2">
                                Infrastructure parameters, cloud configurations, and safety policies are reviewed periodically and updated as industry standards evolve.
                            </p>
                        </section>

                        {/* Section 7: Backup and Recovery */}
                        <section id="backup-recovery" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">7. Backup and Recovery</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                To ensure data resilience, prevent database corruption, and support disaster recovery:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-light">
                                {[
                                    "Automated scheduled backups are executed periodically",
                                    "Standardized data recovery and restoration testing procedures",
                                    "Disaster recovery planning for primary hosting environments",
                                    "System state restoration mechanisms to mitigate downtime"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-2 bg-zinc-950/40 border border-zinc-900 p-4 rounded">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8: Monitoring and Incident Response */}
                        <section id="incident-response" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Activity className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">8. Monitoring and Incident Response</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                We monitor our cloud networks and software platforms for security anomalies and threat profiles:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                {[
                                    "Identifying active security threats and vulnerabilities",
                                    "Detecting unauthorized access attempts or suspicious IPs",
                                    "Monitoring system loads and database connection flags",
                                    "Mitigating potential service disruptions or DDoS threats"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 border-l-2 border-yellow-500/20 pl-4 py-1.5 bg-zinc-950/20">
                                        <ChevronRight size={14} className="text-yellow-500 shrink-0" />
                                        <span className="text-zinc-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-zinc-500 text-xs leading-relaxed mt-2">
                                Where security incidents are confirmed, Kiaan Technology executes containment, investigation, mitigation, and remediation plans in accordance with local regulations.
                            </p>
                        </section>

                        {/* Section 9: Customer Responsibilities */}
                        <section id="customer-responsibilities" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <User className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">9. Customer Responsibilities</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Customers play a critical role in preserving data safety. To keep accounts protected, users are responsible for:
                            </p>
                            <div className="bg-zinc-950 border border-zinc-900 p-6 rounded-lg space-y-3">
                                <p className="text-white text-sm font-bold uppercase tracking-wider">Required User Safeguards</p>
                                <ul className="space-y-2 text-zinc-400 text-xs list-disc pl-5 leading-relaxed">
                                    <li>Maintaining strong, unique passwords for all system profiles.</li>
                                    <li>Protecting account logins, tokens, and API access keys from leakage.</li>
                                    <li>Restricting unauthorized browser access and securing end-user devices.</li>
                                    <li>Reporting suspected security breaches or anomalous activities immediately.</li>
                                    <li>Maintaining independent backups of critical business data.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 10: Third-Party Services */}
                        <section id="third-party" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <ExternalLink className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">10. Third-Party Services</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Our services integrate with external providers (such as Payment processors, Cloud hosts, SMS/Email systems, and external APIs). While we choose reputable partners, Kiaan Technology does not control the independent security implementations of these third-party organizations. Users are advised to review policies of those partners.
                            </p>
                        </section>

                        {/* Section 11: Data Retention and Disposal */}
                        <section id="data-disposal" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <Trash2 className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">11. Data Retention and Disposal</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                We retain personal and business records only for as long as necessary to support services, fulfill contract agreements, maintain audit trails, or comply with legal rules. When data is no longer required, it may be securely deleted, overwritten, anonymized, or disposed of to prevent extraction.
                            </p>
                        </section>

                        {/* Section 12: Security Limitations */}
                        <section id="security-limitations" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <AlertTriangle className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">12. Security Limitations</h2>
                            </div>
                            <div className="bg-zinc-950 border border-zinc-900/80 p-8 rounded-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-xl rounded-full" />
                                <div className="space-y-4">
                                    <p className="text-zinc-300 font-bold uppercase tracking-wide text-xs">Security Disclaimer</p>
                                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                        While Kiaan Technology implements commercially reasonable security measures, no system, network, software application, cloud service, or internet data transmission can be guaranteed to be 100% secure. Users acknowledge that all online systems involve inherent security risks.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 13: Policy Updates */}
                        <section id="policy-updates" className="scroll-mt-32 space-y-6">
                            <div className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                                <RefreshCw className="text-yellow-500" size={24} />
                                <h2 className="text-2xl font-display uppercase text-white">13. Policy Updates</h2>
                            </div>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Kiaan Technology reserves the right to modify this Security &amp; Data Protection Policy at any time. Updated versions will be published on this page together with the revised effective date.
                            </p>
                            <p className="text-yellow-500 text-sm font-semibold tracking-wide bg-yellow-500/[0.02] border-l-2 border-yellow-500 pl-4 py-1.5">
                                Your continued use of our services after such updates constitutes acceptance of the revised policy.
                            </p>
                        </section>

                        {/* Section 14: Contact Us */}
                        <section id="contact-us" className="scroll-mt-32">
                            <div className="bg-yellow-500 text-black p-8 md:p-12 rounded-lg relative overflow-hidden shadow-2xl shadow-yellow-500/5">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[60px] rounded-full" />

                                <h2 className="text-3xl font-display uppercase mb-2 leading-none font-black text-zinc-950">14. Contact Us</h2>
                                <p className="font-bold mb-8 uppercase tracking-widest text-xs text-zinc-800">Kiaan Technology Private Limited</p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="flex items-center gap-4 bg-black/[0.04] p-4 rounded-md backdrop-blur-sm border border-black/5 hover:border-black/10 transition-colors">
                                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                            <Mail size={18} className="text-zinc-900" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Email</span>
                                            <a href="mailto:info@kiaantechnology.com" className="font-bold text-sm text-zinc-950 hover:underline">info@kiaantechnology.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-black/[0.04] p-4 rounded-md backdrop-blur-sm border border-black/5 hover:border-black/10 transition-colors">
                                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                            <Phone size={18} className="text-zinc-900" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Phone</span>
                                            <a href="tel:+919752100980" className="font-bold text-sm text-zinc-950 hover:underline">+91 97521 00980</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-black/[0.04] p-4 rounded-md backdrop-blur-sm border border-black/5 hover:border-black/10 transition-colors">
                                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                            <Globe size={18} className="text-zinc-900" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Website</span>
                                            <a href="https://kiaantechnology.com" target="_blank" rel="noopener noreferrer" className="font-bold text-sm text-zinc-950 hover:underline flex items-center gap-1">
                                                kiaantechnology.com <ExternalLink size={12} className="shrink-0" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-black/10 flex items-start gap-3">
                                    <MapPin size={18} className="text-zinc-900 shrink-0 mt-0.5" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Office Address</span>
                                        <span className="font-bold text-zinc-950 text-sm leading-relaxed">Indore, Madhya Pradesh, India</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                {/* Bottom Back Home Nav */}
                <div className="mt-20 text-center border-t border-zinc-950 pt-8">
                    <Link href="/">
                        <button className="text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2 mx-auto cursor-pointer group">
                            Back to Home <ChevronRight size={14} className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}
