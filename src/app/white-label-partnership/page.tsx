"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, ShieldAlert, Settings, Calendar, Globe, Plus, 
    Trash2, Send, Terminal, Lock, CheckCircle2, ChevronDown, 
    ChevronUp, AlertCircle, RefreshCw, LogIn, LogOut, Check,
    Paintbrush, HelpCircle, Laptop, RefreshCw as Spinner, Copy
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';

interface WhiteLabelPartner {
    id: string;
    brandName: string;
    customDomain: string;
    logoUrl: string;
    accentColor: string;
    supportEmail: string;
    status: 'Active' | 'Provisioning' | 'Suspended';
    dnsVerified: boolean;
    dateAdded: string;
}

const DEFAULT_PARTNERS: WhiteLabelPartner[] = [
    {
        id: 'wl_1',
        brandName: 'Vanguard Operations',
        customDomain: 'portal.vanguardops.com',
        logoUrl: 'https://kiaan.technology/assets/mock-logo-cyan.png',
        accentColor: '#0EA5E9',
        supportEmail: 'partner@vanguardops.com',
        status: 'Active',
        dnsVerified: true,
        dateAdded: '2026-02-10T12:00:00Z'
    },
    {
        id: 'wl_2',
        brandName: 'Acme Business Solutions',
        customDomain: 'cloud.acmesolutions.net',
        logoUrl: 'https://kiaan.technology/assets/mock-logo-pink.png',
        accentColor: '#F43F5E',
        supportEmail: 'operations@acmesolutions.net',
        status: 'Active',
        dnsVerified: true,
        dateAdded: '2026-05-14T09:30:00Z'
    }
];

export default function WhiteLabelPartnership() {
    const [partners, setPartners] = useState<WhiteLabelPartner[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Admin Auth State
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Accordions
    const [expandedPartnerId, setExpandedPartnerId] = useState<string | null>(null);

    // Branding Config Form Inputs
    const [brandName, setBrandName] = useState('My Custom SaaS');
    const [customDomain, setCustomDomain] = useState('portal.mybrand.com');
    const [logoUrl, setLogoUrl] = useState('https://kiaan.technology/assets/mock-logo-gold.png');
    const [accentColor, setAccentColor] = useState('#EAB308'); // Yellow default
    const [supportEmail, setSupportEmail] = useState('support@mybrand.com');
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [configSuccess, setConfigSuccess] = useState(false);

    // Admin Provision Form Inputs
    const [provName, setProvName] = useState('');
    const [provDomain, setProvDomain] = useState('');
    const [provLogo, setProvLogo] = useState('');
    const [provColor, setProvColor] = useState('#EAB308');
    const [provEmail, setProvEmail] = useState('');
    const [provError, setProvError] = useState('');
    const [showAddPartnerModal, setShowAddPartnerModal] = useState(false);

    // DNS checking simulator indicator
    const [isVerifyingDns, setIsVerifyingDns] = useState<string | null>(null);
    const [dnsProgress, setDnsProgress] = useState(0);

    // Monospace Terminal Console Logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load initial states from Local Storage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('kiaan_whitelabel_partners');
            if (stored) {
                try {
                    setPartners(JSON.parse(stored));
                } catch (e) {
                    setPartners(DEFAULT_PARTNERS);
                }
            } else {
                localStorage.setItem('kiaan_whitelabel_partners', JSON.stringify(DEFAULT_PARTNERS));
                setPartners(DEFAULT_PARTNERS);
            }
            setIsLoading(false);

            addLog('SYSTEM: White-Label Partnership panel online.');
            addLog('DATABASE: Read active white-label databases from localStorage.');
        }
    }, []);

    // Auto-scroll terminal console
    useEffect(() => {
        consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    const addLog = (message: string) => {
        const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
        setLogs(prev => [...prev, `[${timestamp}] ${message}`]);
    };

    const clearLogs = () => {
        setLogs([`[${new Date().toISOString().split('T')[1].slice(0, 8)}] SYSTEM: Logs console cleared.`]);
    };

    // Admin Auth Actions
    const handleAdminLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');

        if (adminEmail === 'admin@kiaan.tech' && adminPassword === 'admin123') {
            setIsAdmin(true);
            setShowAdminLogin(false);
            setAdminEmail('');
            setAdminPassword('');
            addLog('ADMIN: Authenticated successfully. Organizer provision settings unlocked.');
        } else {
            setLoginError('Invalid administrator credentials.');
            addLog('ERROR: Admin login failed - incorrect credentials.');
        }
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        addLog('ADMIN: Session ended. Access restricted to default views.');
    };

    // Save Branding Settings
    const handleSaveBranding = (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});
        setConfigSuccess(false);

        const errors: Record<string, string> = {};
        if (!brandName.trim() || brandName.trim().length < 3) {
            errors.brandName = 'App Brand Title must be at least 3 characters.';
        }
        if (!customDomain || !/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(customDomain)) {
            errors.customDomain = 'Please provide a valid custom domain map.';
        }
        if (!accentColor || !/^#[0-9a-fA-F]{6}$/.test(accentColor)) {
            errors.accentColor = 'Please provide a valid hex color code (e.g. #FF5500).';
        }
        if (!supportEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(supportEmail)) {
            errors.supportEmail = 'Please provide a valid brand support email.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            addLog('ERROR: Branding settings changes rejected due to validation errors.');
            return;
        }

        // Apply simulated DNS check and save
        addLog(`SYSTEM: Registering branding configuration for ${brandName}. Custom domain: ${customDomain}`);
        setConfigSuccess(true);
        setTimeout(() => setConfigSuccess(false), 3000);
    };

    // Admin Provision Partner Actions
    const handleAddPartner = (e: React.FormEvent) => {
        e.preventDefault();
        setProvError('');

        if (!provName.trim() || !provDomain.trim() || !provEmail.trim()) {
            setProvError('All fields are required.');
            return;
        }

        if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(provDomain.trim())) {
            setProvError('Invalid custom domain mapping format.');
            return;
        }

        if (!/^#[0-9a-fA-F]{6}$/.test(provColor.trim())) {
            setProvError('Invalid hex color format (e.g., #0EA5E9).');
            return;
        }

        const newPartner: WhiteLabelPartner = {
            id: 'wl_' + Date.now(),
            brandName: provName.trim(),
            customDomain: provDomain.trim(),
            logoUrl: provLogo.trim() || 'https://kiaan.technology/assets/mock-logo-gold.png',
            accentColor: provColor.trim(),
            supportEmail: provEmail.trim(),
            status: 'Active',
            dnsVerified: false,
            dateAdded: new Date().toISOString()
        };

        const updated = [...partners, newPartner];
        setPartners(updated);
        localStorage.setItem('kiaan_whitelabel_partners', JSON.stringify(updated));

        addLog(`ADMIN: Provisioned new white-label partner "${newPartner.brandName}" in portal database.`);
        
        // Reset Inputs
        setProvName('');
        setProvDomain('');
        setProvLogo('');
        setProvColor('#EAB308');
        setProvEmail('');
        setShowAddPartnerModal(false);
    };

    const handleDeletePartner = (id: string) => {
        if (!confirm('Are you sure you want to delete this white-label partner? This will purge branding styles.')) return;
        const targeted = partners.find(wl => wl.id === id);
        if (!targeted) return;

        const updated = partners.filter(wl => wl.id !== id);
        setPartners(updated);
        localStorage.setItem('kiaan_whitelabel_partners', JSON.stringify(updated));

        addLog(`ADMIN: Purged partner workspace profile "${targeted.brandName}".`);
    };

    // CNAME DNS Records Verification Simulator
    const handleVerifyDns = (id: string) => {
        const targeted = partners.find(wl => wl.id === id);
        if (!targeted) return;

        setIsVerifyingDns(id);
        setDnsProgress(0);
        addLog(`DNS: Verifying CNAME mapping configurations for custom domain: ${targeted.customDomain}...`);

        const interval = setInterval(() => {
            setDnsProgress(prev => {
                const next = prev + 25;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        const updated = partners.map(wl => {
                            if (wl.id === id) {
                                return { ...wl, dnsVerified: true };
                            }
                            return wl;
                        });

                        setPartners(updated);
                        localStorage.setItem('kiaan_whitelabel_partners', JSON.stringify(updated));
                        setIsVerifyingDns(null);
                        
                        addLog(`SUCCESS: CNAME DNS pointed correctly! CNAME target resolves to "cname.kiaan.technology".`);
                        addLog(`DATABASE: Subdomain provisioning active on partner portal.`);
                    }, 200);
                    return 100;
                }

                if (next === 25) addLog(`DNS: Querying registrar zone files for "${targeted.customDomain}"...`);
                if (next === 50) addLog(`DNS: Intercepting A/CNAME maps...`);
                if (next === 75) addLog(`DNS: Resolving server configurations...`);

                return next;
            });
        }, 300);
    };

    return (
        <main className="min-h-screen bg-black text-white relative pt-24 pb-12 font-sans overflow-x-hidden">
            {/* Ambient glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/5 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-2">
                            White-Label <span className="text-yellow-500">Partnership</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Map custom domains, inject brand logo URLs, customize CSS stylesheets, and manage provisioned portals.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {isAdmin ? (
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setShowAddPartnerModal(true)}
                                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
                                >
                                    <Plus size={14} /> Provision Partner
                                </button>
                                <button 
                                    onClick={handleAdminLogout}
                                    className="px-4 py-2 border border-zinc-800 hover:border-red-500 text-zinc-400 hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 font-mono"
                                >
                                    <LogOut size={12} /> Log Out Admin
                                </button>
                            </div>
                        ) : (
                            <button 
                                onClick={() => setShowAdminLogin(true)}
                                className="px-4 py-2 bg-zinc-900 border border-white/10 hover:border-yellow-500 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 font-mono"
                            >
                                <LogIn size={12} /> Admin Login
                            </button>
                        )}
                    </div>
                </div>

                {/* --- STATS RIBBON --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
                    {[
                        { label: 'Domains Mapped', val: `${partners.length} Domains`, desc: 'Active white-label routes' },
                        { label: 'Branded Portals', val: `${partners.filter(p => p.status === 'Active').length} Active`, desc: 'Provisioned tenant domains' },
                        { label: 'DNS Health Rate', val: `${partners.length > 0 ? (partners.filter(p => p.dnsVerified).length / partners.length * 100).toFixed(0) : 0}%`, desc: 'CNAME verification metrics' },
                        { label: 'Dashboard Scope', val: isAdmin ? 'Administrator' : 'Partner Workspace', desc: 'Current portal authorization' }
                    ].map((stat, idx) => (
                        <GlassCard key={idx} className="p-4 border border-white/10 rounded-2xl">
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">{stat.label}</span>
                            <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{stat.val}</h3>
                            <span className="text-[10px] text-zinc-400 font-sans block">{stat.desc}</span>
                        </GlassCard>
                    ))}
                </div>

                {/* --- MAIN PAGE CONTENT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* LEFT COLUMN: INTERACTIVE PREVIEW & CONFIG */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Paintbrush size={18} className="text-yellow-500" /> Branding Config & Live UI Preview
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Customize theme variables and instantly preview your branded application header.</p>
                        </div>

                        {/* LIVE PREVIEW CONTAINER */}
                        <GlassCard className="p-6 border border-white/10 rounded-2xl space-y-4">
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">Live UI Brand Preview</span>
                            
                            {/* App Header Mockup */}
                            <div className="border border-white/5 rounded-xl overflow-hidden bg-[#0A0A0A] font-sans">
                                {/* Header bar styled with accent color */}
                                <div 
                                    className="px-4 py-3 flex justify-between items-center transition-all duration-500 text-white"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold text-[10px]">
                                            ★
                                        </div>
                                        <span className="text-xs font-bold font-mono uppercase tracking-wider">{brandName}</span>
                                    </div>

                                    <div className="flex gap-3 text-[10px] opacity-90 font-mono">
                                        <span>Dashboard</span>
                                        <span>Analytics</span>
                                        <span>Settings</span>
                                    </div>
                                </div>

                                {/* Body Mockup */}
                                <div className="p-5 text-left space-y-2">
                                    <h5 className="text-xs font-bold text-white">Welcome back, Administrator</h5>
                                    <p className="text-[10px] text-zinc-500 leading-normal">
                                        This is a preview representation of your custom-branded portal environment mapping to <span className="text-yellow-500 font-mono">{customDomain}</span>. The primary navigation bar color matches your branding hex.
                                    </p>
                                    <div className="flex justify-between text-[9px] text-zinc-600 font-mono pt-3 border-t border-white/5 mt-3">
                                        <span>Support Line: {supportEmail}</span>
                                        <span>© {new Date().getFullYear()} {brandName} Inc.</span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>

                        {/* BRANDING FORM */}
                        {configSuccess && (
                            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono flex items-center gap-2">
                                <CheckCircle2 size={14} /> Branding preferences verified and saved.
                            </div>
                        )}

                        <GlassCard className="p-6 border border-white/10 rounded-2xl">
                            <form onSubmit={handleSaveBranding} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Brand App Name</label>
                                    <input 
                                        type="text"
                                        value={brandName}
                                        onChange={e => setBrandName(e.target.value)}
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.brandName ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.brandName && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.brandName}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Custom Domain Mapping</label>
                                    <input 
                                        type="text"
                                        value={customDomain}
                                        onChange={e => setCustomDomain(e.target.value)}
                                        placeholder="portal.mybrand.com"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.customDomain ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.customDomain && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.customDomain}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Logo URL (Icon)</label>
                                    <input 
                                        type="text"
                                        value={logoUrl}
                                        onChange={e => setLogoUrl(e.target.value)}
                                        className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Accent Color (Hex)</label>
                                    <div className="flex gap-2">
                                        <input 
                                            type="color"
                                            value={accentColor}
                                            onChange={e => setAccentColor(e.target.value)}
                                            className="w-8 h-8 rounded-lg cursor-pointer bg-zinc-950 border border-white/5 pr-0 pl-0 pt-0 pb-0"
                                        />
                                        <input 
                                            type="text"
                                            value={accentColor}
                                            onChange={e => setAccentColor(e.target.value)}
                                            className={`flex-1 px-3.5 py-2 bg-zinc-950 border ${formErrors.accentColor ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                        />
                                    </div>
                                    {formErrors.accentColor && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.accentColor}</p>}
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Support Desk Email Address</label>
                                    <input 
                                        type="email"
                                        value={supportEmail}
                                        onChange={e => setSupportEmail(e.target.value)}
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.supportEmail ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.supportEmail && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.supportEmail}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="sm:col-span-2 bg-zinc-900 border border-white/10 hover:border-yellow-500 text-white py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md"
                                >
                                    Apply App Branding
                                </button>
                            </form>
                        </GlassCard>
                    </div>

                    {/* RIGHT COLUMN: PROVISIONED WORKSPACES LIST */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Laptop size={18} className="text-yellow-500" /> Provisioned Portals
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Catalog of active white-labeled organizations.</p>
                        </div>

                        {partners.length === 0 ? (
                            <div className="p-12 text-center text-zinc-500 font-mono border border-white/5 rounded-2xl bg-zinc-950/40">
                                No active portals mapped. Log in as admin to provision workspaces.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {partners.map((partner) => {
                                    const isExpanded = expandedPartnerId === partner.id;
                                    const verifying = isVerifyingDns === partner.id;
                                    return (
                                        <GlassCard key={partner.id} className="p-4 border border-white/10 rounded-2xl relative overflow-hidden">
                                            <div className="flex justify-between items-start gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span 
                                                            className="w-2.5 h-2.5 rounded-full" 
                                                            style={{ backgroundColor: partner.accentColor }} 
                                                            title="Accent Color Accent"
                                                        />
                                                        <h4 className="text-sm font-bold text-white font-mono">{partner.brandName}</h4>
                                                    </div>
                                                    <span className="text-[10px] text-zinc-400 font-mono block mt-1.5">{partner.customDomain}</span>
                                                    
                                                    {/* DNS verified indicator status */}
                                                    <span className={`px-2 py-0.5 rounded text-[8px] font-bold font-mono uppercase inline-block mt-3 ${
                                                        partner.dnsVerified ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                                                    }`}>
                                                        CNAME: {partner.dnsVerified ? 'POINTED' : 'UNRESOLVED'}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2 shrink-0">
                                                    <button
                                                        onClick={() => setExpandedPartnerId(isExpanded ? null : partner.id)}
                                                        className="p-1 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-all"
                                                        title="Show Configuration Properties"
                                                    >
                                                        {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                                    </button>
                                                    {isAdmin && (
                                                        <button
                                                            onClick={() => handleDeletePartner(partner.id)}
                                                            className="p-1 border border-zinc-800 hover:border-red-500 text-zinc-500 hover:text-red-500 rounded-lg transition-all"
                                                            title="Purge Provision Portal"
                                                        >
                                                            <Trash2 size={12} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Details Accordions */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="border-t border-white/5 pt-3 mt-3 space-y-2 text-[10px] font-mono text-zinc-500 text-left">
                                                            <div className="flex justify-between">
                                                                <span>Support Email:</span>
                                                                <span className="text-zinc-300">{partner.supportEmail}</span>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span>Accent Theme:</span>
                                                                <span className="text-zinc-300 uppercase">{partner.accentColor}</span>
                                                            </div>
                                                            
                                                            {!partner.dnsVerified && (
                                                                <button
                                                                    disabled={verifying}
                                                                    onClick={() => handleVerifyDns(partner.id)}
                                                                    className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-20 text-black py-1.5 rounded-lg text-[9px] font-black uppercase transition-all tracking-wider flex items-center justify-center gap-1 mt-2 shadow-md"
                                                                >
                                                                    {verifying ? (
                                                                        <Spinner size={10} className="animate-spin" />
                                                                    ) : (
                                                                        <Globe size={10} />
                                                                    )}
                                                                    Verify CNAME DNS
                                                                </button>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </GlassCard>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                {/* --- DNS INSTRUCTIONS & LIVE CLI LOGGER --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT COLUMN: DNS CNAMES TARGET SETUP */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Globe size={18} className="text-yellow-500" /> DNS Instructions
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Mapping custom domain records to Kiaan Technology SaaS servers.</p>
                        </div>

                        <GlassCard className="p-6 border border-white/10 rounded-2xl space-y-4 text-xs font-mono text-left">
                            <div className="space-y-1">
                                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">CNAME Target URL</span>
                                <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl flex justify-between items-center text-zinc-300">
                                    <span>cname.kiaan.technology</span>
                                    <button 
                                        onClick={() => {
                                            navigator.clipboard.writeText('cname.kiaan.technology');
                                            addLog('SYSTEM: Copied CNAME target url to clipboard.');
                                            alert('CNAME Target copied!');
                                        }}
                                        className="text-zinc-500 hover:text-yellow-500"
                                        title="Copy CNAME Target"
                                    >
                                        <Copy size={12} />
                                    </button>
                                </div>
                            </div>
                            <p className="text-[10px] text-zinc-500 font-sans leading-relaxed">
                                To complete domain mapping, register a CNAME record in your registrar (GoDaddy, Cloudflare, etc.) pointed to the target target above.
                            </p>
                        </GlassCard>
                    </div>

                    {/* RIGHT COLUMN: CLI LOGS CONSOLE */}
                    <div className="lg:col-span-2 space-y-6 flex flex-col">
                        <div className="flex justify-between items-end">
                            <div className="text-left">
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Terminal size={18} className="text-yellow-500" /> DNS & Branding Console
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Live logs of DNS CNAME mapping verification cycles and assets injection.</p>
                            </div>
                            <button 
                                onClick={clearLogs}
                                className="text-[10px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest"
                            >
                                Clear Console
                            </button>
                        </div>

                        {/* Monospace terminal console logger */}
                        <div className="flex-1 bg-[#030303] border border-white/10 rounded-2xl p-5 font-mono text-[11px] text-zinc-400 h-[280px] overflow-y-auto flex flex-col justify-between scrollbar-hide shadow-inner">
                            <div className="space-y-1">
                                {logs.map((log, idx) => {
                                    let color = 'text-zinc-400';
                                    if (log.includes('SUCCESS:')) color = 'text-green-400';
                                    if (log.includes('ERROR:')) color = 'text-red-400';
                                    if (log.includes('WARNING:')) color = 'text-yellow-500';
                                    if (log.includes('SYSTEM:')) color = 'text-zinc-500';
                                    if (log.includes('ADMIN:')) color = 'text-cyan-400';
                                    if (log.includes('DNS:')) color = 'text-purple-400';
                                    if (log.includes('DATABASE:')) color = 'text-purple-400';
                                    return (
                                        <div key={idx} className={`${color} leading-relaxed break-all`}>
                                            {log}
                                        </div>
                                    );
                                })}
                                {isVerifyingDns && (
                                    <div className="text-yellow-500 animate-pulse flex items-center gap-2 mt-2">
                                        <Spinner size={12} className="animate-spin" /> Verifying registrar zone files... [{dnsProgress}%]
                                    </div>
                                )}
                                <div ref={consoleEndRef} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- ADMIN AUTH MODAL DIALOG --- */}
            <AnimatePresence>
                {showAdminLogin && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-zinc-950 border border-white/10 p-6 rounded-2xl w-full max-w-sm relative text-left"
                        >
                            <h4 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Lock size={16} className="text-yellow-500" /> Admin Authentication
                            </h4>
                            <p className="text-xs text-zinc-500 font-mono mb-4">Provide authorization credentials to provision workspaces.</p>

                            {loginError && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl font-mono mb-4">
                                    {loginError}
                                </div>
                            )}

                            <form onSubmit={handleAdminLogin} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Admin Email</label>
                                    <input 
                                        type="email"
                                        required
                                        value={adminEmail}
                                        onChange={e => setAdminEmail(e.target.value)}
                                        placeholder="admin@kiaan.tech"
                                        className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Security Password</label>
                                    <input 
                                        type="password"
                                        required
                                        value={adminPassword}
                                        onChange={e => setAdminPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                    />
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowAdminLogin(false)}
                                        className="flex-1 py-2.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl text-xs font-bold transition-all font-mono"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* --- ADMIN PROVISION PARTNER MODAL DIALOG --- */}
            <AnimatePresence>
                {showAddPartnerModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-zinc-950 border border-white/10 p-6 rounded-2xl w-full max-w-md relative text-left"
                        >
                            <h4 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Plus size={16} className="text-yellow-500" /> Provision Portal
                            </h4>
                            <p className="text-xs text-zinc-500 font-mono mb-4">Register a new white-labeled tenant workspace record.</p>

                            {provError && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl font-mono mb-4">
                                    {provError}
                                </div>
                            )}

                            <form onSubmit={handleAddPartner} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Partner Brand Title</label>
                                    <input 
                                        type="text"
                                        required
                                        value={provName}
                                        onChange={e => setProvName(e.target.value)}
                                        placeholder="Delta Consulting"
                                        className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Custom Domain Mapping</label>
                                        <input 
                                            type="text"
                                            required
                                            value={provDomain}
                                            onChange={e => setProvDomain(e.target.value)}
                                            placeholder="portal.deltaconsulting.com"
                                            className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Theme Color (Hex)</label>
                                        <div className="flex gap-2">
                                            <input 
                                                type="color"
                                                value={provColor}
                                                onChange={e => setProvColor(e.target.value)}
                                                className="w-8 h-8 rounded-lg cursor-pointer bg-zinc-950 border border-white/5"
                                            />
                                            <input 
                                                type="text"
                                                required
                                                value={provColor}
                                                onChange={e => setProvColor(e.target.value)}
                                                placeholder="#0EA5E9"
                                                className="flex-1 px-3 py-1.5 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Logo URL (Optional)</label>
                                        <input 
                                            type="text"
                                            value={provLogo}
                                            onChange={e => setProvLogo(e.target.value)}
                                            placeholder="https://..."
                                            className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Support Desk Email</label>
                                        <input 
                                            type="email"
                                            required
                                            value={provEmail}
                                            onChange={e => setProvEmail(e.target.value)}
                                            placeholder="support@deltaconsulting.com"
                                            className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddPartnerModal(false)}
                                        className="flex-1 py-2.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl text-xs font-bold transition-all font-mono"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md"
                                    >
                                        Provision Portal
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}
