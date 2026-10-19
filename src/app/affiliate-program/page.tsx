"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, ShieldAlert, Settings, Calendar, DollarSign, Plus, 
    Trash2, Send, Terminal, Lock, CheckCircle2, ChevronDown, 
    ChevronUp, AlertCircle, RefreshCw, LogIn, LogOut, FileText, Link2, Copy, Percent, Play
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';

interface Affiliate {
    id: string;
    name: string;
    email: string;
    payoutChannel: 'PayPal' | 'Stripe' | 'Bank Transfer';
    payoutAddress: string;
    website: string;
    referralLink: string;
    clicks: number;
    conversions: number;
    unpaidCommission: number;
    dateJoined: string;
}

interface ReferralRecord {
    id: string;
    affiliateName: string;
    leadName: string;
    packagePurchased: string;
    contractValue: number;
    commissionEarned: number;
    status: 'Pending' | 'Paid';
    date: string;
}

const DEFAULT_AFFILIATES: Affiliate[] = [
    {
        id: 'aff_1',
        name: 'Apex Marketing Agency',
        email: 'partners@apexmarketing.net',
        payoutChannel: 'PayPal',
        payoutAddress: 'billing@apexmarketing.net',
        website: 'https://www.apexmarketing.net',
        referralLink: 'https://kiaan.technology/?ref=aff_apex_120',
        clicks: 1240,
        conversions: 56,
        unpaidCommission: 340,
        dateJoined: '2026-01-15T09:00:00Z'
    },
    {
        id: 'aff_2',
        name: 'Zenith SaaS Blogs',
        email: 'editors@zenithblogs.com',
        payoutChannel: 'Stripe',
        payoutAddress: 'acct_1N82a9b439d',
        website: 'https://www.zenithblogs.com',
        referralLink: 'https://kiaan.technology/?ref=aff_zenith_882',
        clicks: 840,
        conversions: 22,
        unpaidCommission: 200,
        dateJoined: '2026-03-22T10:30:00Z'
    }
];

const DEFAULT_REFERRALS: ReferralRecord[] = [
    {
        id: 'ref_1',
        affiliateName: 'Apex Marketing Agency',
        leadName: 'Thomas Anderson',
        packagePurchased: 'Enterprise CRM Suite',
        contractValue: 1200,
        commissionEarned: 240,
        status: 'Pending',
        date: '2026-07-25 | 11:30 AM'
    },
    {
        id: 'ref_2',
        affiliateName: 'Apex Marketing Agency',
        leadName: 'Sarah Connor',
        packagePurchased: 'AI Lead scoring Tool',
        contractValue: 500,
        commissionEarned: 100,
        status: 'Pending',
        date: '2026-07-28 | 04:15 PM'
    },
    {
        id: 'ref_3',
        affiliateName: 'Zenith SaaS Blogs',
        leadName: 'Morpheus Johnson',
        packagePurchased: 'Vanguard ERP Setup',
        contractValue: 1000,
        commissionEarned: 200,
        status: 'Pending',
        date: '2026-07-29 | 09:45 AM'
    }
];

export default function AffiliateProgram() {
    const [affiliates, setAffiliates] = useState<Affiliate[]>([]);
    const [referrals, setReferrals] = useState<ReferralRecord[]>([]);
    const [commissionRate, setCommissionRate] = useState(20); // default 20%
    const [isLoading, setIsLoading] = useState(true);

    // Admin Auth State
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Accordions
    const [expandedAffId, setExpandedAffId] = useState<string | null>(null);

    // Registration Form Inputs
    const [affName, setAffName] = useState('');
    const [affEmail, setAffEmail] = useState('');
    const [affChannel, setAffChannel] = useState<'PayPal' | 'Stripe' | 'Bank Transfer'>('PayPal');
    const [affPayoutAddress, setAffPayoutAddress] = useState('');
    const [affWebsite, setAffWebsite] = useState('');
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [regSuccess, setRegSuccess] = useState(false);
    const [generatedLink, setGeneratedLink] = useState('');

    // Admin Commission Settings
    const [rateInput, setRateInput] = useState('20');
    const [rateError, setRateError] = useState('');
    const [payoutProcessing, setPayoutProcessing] = useState(false);
    const [payoutProgress, setPayoutProgress] = useState(0);

    // Monospace Terminal Console Logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load initial states from Local Storage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Affiliates Setup
            const storedAffiliates = localStorage.getItem('kiaan_affiliates');
            if (storedAffiliates) {
                try {
                    setAffiliates(JSON.parse(storedAffiliates));
                } catch (e) {
                    setAffiliates(DEFAULT_AFFILIATES);
                }
            } else {
                localStorage.setItem('kiaan_affiliates', JSON.stringify(DEFAULT_AFFILIATES));
                setAffiliates(DEFAULT_AFFILIATES);
            }

            // Referrals Setup
            const storedReferrals = localStorage.getItem('kiaan_affiliate_referrals');
            if (storedReferrals) {
                try {
                    setReferrals(JSON.parse(storedReferrals));
                } catch (e) {
                    setReferrals(DEFAULT_REFERRALS);
                }
            } else {
                localStorage.setItem('kiaan_affiliate_referrals', JSON.stringify(DEFAULT_REFERRALS));
                setReferrals(DEFAULT_REFERRALS);
            }

            // Commission Rate Setup
            const storedRate = localStorage.getItem('kiaan_affiliate_rate');
            if (storedRate) {
                setCommissionRate(parseInt(storedRate) || 20);
                setRateInput(storedRate);
            } else {
                localStorage.setItem('kiaan_affiliate_rate', '20');
            }

            setIsLoading(false);
            addLog('SYSTEM: Affiliate Program module online.');
            addLog('DATABASE: Configuration ledger read from localStorage.');
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
            addLog('ADMIN: Authenticated successfully. Commission & Payout configurations unlocked.');
        } else {
            setLoginError('Invalid administrator credentials.');
            addLog('ERROR: Admin login failed - incorrect username/password combination.');
        }
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        addLog('ADMIN: Session ended. Access restricted to default views.');
    };

    // Register Affiliate Actions
    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});
        setRegSuccess(false);
        setGeneratedLink('');

        const errors: Record<string, string> = {};
        if (!affName.trim() || affName.trim().length < 3) {
            errors.affName = 'Affiliate Name must be at least 3 characters.';
        }
        if (!affEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(affEmail)) {
            errors.affEmail = 'Please provide a valid contact email.';
        }
        if (!affPayoutAddress.trim()) {
            errors.affPayoutAddress = 'Payment account billing address is required.';
        }
        if (affWebsite && !/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(affWebsite)) {
            errors.affWebsite = 'Please provide a valid promotional URL.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            addLog('ERROR: Registration rejected due to validation errors.');
            return;
        }

        const cleanWebsite = affWebsite.trim().startsWith('http') ? affWebsite.trim() : 'https://' + affWebsite.trim();
        const shortSuffix = Math.random().toString(36).substr(2, 4);
        const refLink = `https://kiaan.technology/?ref=aff_${affName.toLowerCase().replace(/\s+/g, '_')}_${shortSuffix}`;

        const newAffiliate: Affiliate = {
            id: 'aff_' + Date.now(),
            name: affName.trim(),
            email: affEmail.trim(),
            payoutChannel: affChannel,
            payoutAddress: affPayoutAddress.trim(),
            website: cleanWebsite || 'N/A',
            referralLink: refLink,
            clicks: 0,
            conversions: 0,
            unpaidCommission: 0,
            dateJoined: new Date().toISOString()
        };

        const updatedAffiliates = [...affiliates, newAffiliate];
        setAffiliates(updatedAffiliates);
        localStorage.setItem('kiaan_affiliates', JSON.stringify(updatedAffiliates));

        setRegSuccess(true);
        setGeneratedLink(refLink);
        addLog(`SUCCESS: New affiliate account registered: ${affName}. Referral link generated.`);
        
        // Reset fields
        setAffName('');
        setAffEmail('');
        setAffPayoutAddress('');
        setAffWebsite('');
    };

    // Admin Payout Run Actions
    const handleProcessPayouts = () => {
        const pendingAmount = referrals.filter(rf => rf.status === 'Pending').reduce((acc, curr) => acc + curr.commissionEarned, 0);
        if (pendingAmount === 0) {
            alert('No pending unpaid commissions found.');
            return;
        }

        setPayoutProcessing(true);
        setPayoutProgress(0);
        addLog('DATABASE: Initiating batch payout reconciliation cycle...');

        const interval = setInterval(() => {
            setPayoutProgress(prev => {
                const next = prev + 25;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        // Mark all referrals paid
                        const updatedReferrals = referrals.map(rf => ({ ...rf, status: 'Paid' as const }));
                        const updatedAffiliates = affiliates.map(af => ({ ...af, unpaidCommission: 0 }));

                        setReferrals(updatedReferrals);
                        setAffiliates(updatedAffiliates);
                        localStorage.setItem('kiaan_affiliate_referrals', JSON.stringify(updatedReferrals));
                        localStorage.setItem('kiaan_affiliates', JSON.stringify(updatedAffiliates));

                        setPayoutProcessing(false);
                        addLog(`SUCCESS: Payout run finished. Paid out a total of $${pendingAmount} to active partners.`);
                        addLog('DATABASE: Reset pending commissions records.');
                    }, 200);
                    return 100;
                }

                if (next === 25) addLog('DATABASE: Calculating billing channels breakdown...');
                if (next === 50) addLog('REST: Creating bank API transaction payloads...');
                if (next === 75) addLog('SUCCESS: Ledger ledger payouts file generated.');

                return next;
            });
        }, 300);
    };

    // Update global rate
    const handleUpdateRate = (e: React.FormEvent) => {
        e.preventDefault();
        setRateError('');

        const val = parseInt(rateInput);
        if (isNaN(val) || val < 5 || val > 50) {
            setRateError('Commission percentage must be between 5% and 50%.');
            return;
        }

        setCommissionRate(val);
        localStorage.setItem('kiaan_affiliate_rate', val.toString());
        addLog(`ADMIN: Base recurring affiliate commission rate updated to ${val}%.`);
    };

    const handleDeleteAffiliate = (id: string) => {
        if (!confirm('Are you sure you want to delete this affiliate? This purges their clicks analytics.')) return;
        const targeted = affiliates.find(af => af.id === id);
        if (!targeted) return;

        const updatedAffs = affiliates.filter(af => af.id !== id);
        const updatedRefs = referrals.filter(rf => rf.affiliateName !== targeted.name);

        setAffiliates(updatedAffs);
        setReferrals(updatedRefs);
        localStorage.setItem('kiaan_affiliates', JSON.stringify(updatedAffs));
        localStorage.setItem('kiaan_affiliate_referrals', JSON.stringify(updatedRefs));

        addLog(`ADMIN: Purged affiliate account "${targeted.name}" and associated transaction lists.`);
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        addLog('SYSTEM: Copied referral link to clipboard.');
        alert('Referral link copied to clipboard!');
    };

    return (
        <main className="min-h-screen bg-black text-white relative pt-24 pb-12 font-sans overflow-x-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/5 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-2">
                            Affiliate <span className="text-yellow-500">Program</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Refer clients, track click conversions, audit recurring commission payouts, and manage accounts.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {isAdmin ? (
                            <div className="flex items-center gap-3">
                                <button
                                    disabled={payoutProcessing}
                                    onClick={handleProcessPayouts}
                                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black disabled:opacity-20 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
                                >
                                    {payoutProcessing ? (
                                        <RefreshCw size={12} className="animate-spin" />
                                    ) : (
                                        <DollarSign size={12} />
                                    )}
                                    Process Payouts
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

                {/* --- STATS ANALYTICS RIBBON --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
                    {[
                        { label: 'Total Clicks', val: `${affiliates.reduce((acc, curr) => acc + curr.clicks, 0)} Clicks`, desc: 'Referral link visits' },
                        { label: 'Conversions', val: `${affiliates.reduce((acc, curr) => acc + curr.conversions, 0)} Signups`, desc: 'Successful conversions count' },
                        { label: 'Conversion Rate', val: `${affiliates.reduce((acc, curr) => acc + curr.clicks, 0) > 0 ? (affiliates.reduce((acc, curr) => acc + curr.conversions, 0) / affiliates.reduce((acc, curr) => acc + curr.clicks, 0) * 100).toFixed(1) : 0}%`, desc: 'Average conversion score' },
                        { label: 'Pending Payouts', val: `$${referrals.filter(rf => rf.status === 'Pending').reduce((acc, curr) => acc + curr.commissionEarned, 0)}`, desc: `Calculated at base ${commissionRate}% rate` }
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
                    {/* LEFT COLUMN: ACTIVE AFFILIATES LIST */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-left flex justify-between items-end">
                            <div>
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Users size={18} className="text-yellow-500" /> Active Partners
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Enrolled affiliate marketers, agencies, and bloggers.</p>
                            </div>
                        </div>

                        {affiliates.length === 0 ? (
                            <div className="p-12 text-center text-zinc-500 font-mono border border-white/5 rounded-2xl bg-zinc-950/40">
                                No affiliate profiles registered. Join using the enrollment form.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {affiliates.map((aff) => {
                                    const isExpanded = expandedAffId === aff.id;
                                    const affRefs = referrals.filter(rf => rf.affiliateName === aff.name);
                                    return (
                                        <GlassCard key={aff.id} className="p-5 border border-white/10 rounded-2xl relative overflow-hidden">
                                            <div className="flex justify-between items-start gap-4">
                                                <div className="flex-1">
                                                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider font-mono uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                                        {aff.payoutChannel} ({aff.payoutAddress})
                                                    </span>
                                                    <h4 className="text-lg font-bold text-white font-mono mt-2 mb-1">{aff.name}</h4>
                                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400 font-sans mt-2">
                                                        <span className="flex items-center gap-1.5"><FileText size={13} className="text-yellow-500" /> {aff.website}</span>
                                                        <span className="flex items-center gap-1.5"><DollarSign size={13} className="text-yellow-500" /> Unpaid: ${aff.unpaidCommission}</span>
                                                    </div>
                                                    
                                                    {/* Copy Link Row */}
                                                    <div className="flex items-center gap-2 mt-3 font-mono text-[9px] bg-zinc-950 border border-white/5 px-2.5 py-1.5 rounded-lg text-zinc-500 w-fit select-none">
                                                        <Link2 size={10} className="text-yellow-500" />
                                                        <span className="truncate max-w-[200px] sm:max-w-xs">{aff.referralLink}</span>
                                                        <button onClick={() => handleCopy(aff.referralLink)} className="text-zinc-400 hover:text-yellow-500 ml-1.5">
                                                            <Copy size={11} />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 shrink-0">
                                                    <button
                                                        onClick={() => setExpandedAffId(isExpanded ? null : aff.id)}
                                                        className="p-1.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-all"
                                                        title="Show Referrals Conversion"
                                                    >
                                                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                                    </button>
                                                    {isAdmin && (
                                                        <button
                                                            onClick={() => handleDeleteAffiliate(aff.id)}
                                                            className="p-1.5 border border-zinc-800 hover:border-red-500 text-zinc-500 hover:text-red-500 rounded-lg transition-all"
                                                            title="Purge Affiliate"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Referrals list accordion */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="border-t border-white/5 pt-4 mt-4 space-y-3">
                                                            <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Conversions History</h5>
                                                            {affRefs.length === 0 ? (
                                                                <p className="text-[10px] font-mono text-zinc-500">No conversions recorded for this referral link.</p>
                                                            ) : (
                                                                affRefs.map((rf) => (
                                                                    <div key={rf.id} className="flex justify-between items-center text-xs font-mono py-1.5 border-b border-white/5 last:border-0 text-zinc-400">
                                                                        <div>
                                                                            <strong className="text-white block font-sans">{rf.leadName}</strong>
                                                                            <span className="text-[10px] text-zinc-500">{rf.packagePurchased} • Value: ${rf.contractValue}</span>
                                                                        </div>
                                                                        <div className="text-right">
                                                                            <span className="text-yellow-500 font-bold block">+${rf.commissionEarned}</span>
                                                                            <span className={`text-[9px] uppercase tracking-wider font-bold ${
                                                                                rf.status === 'Paid' ? 'text-green-400' : 'text-amber-500'
                                                                            }`}>{rf.status}</span>
                                                                        </div>
                                                                    </div>
                                                                ))
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

                    {/* RIGHT COLUMN: REGISTRATION WIZARD */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Link2 size={18} className="text-yellow-500" /> Apply Partner
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Submit details to generate your affiliate token.</p>
                        </div>

                        {regSuccess && (
                            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono space-y-2">
                                <p className="font-bold flex items-center gap-1.5"><CheckCircle2 size={14} /> Registered successfully!</p>
                                <div className="p-2 bg-black border border-white/5 rounded text-[9px] break-all">
                                    {generatedLink}
                                </div>
                            </div>
                        )}

                        <GlassCard className="p-6 border border-white/10 rounded-2xl">
                            <form onSubmit={handleRegisterSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Affiliate Name</label>
                                    <input 
                                        type="text"
                                        value={affName}
                                        onChange={e => {
                                            setAffName(e.target.value);
                                            if (formErrors.affName) {
                                                const copy = { ...formErrors };
                                                delete copy.affName;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="Thomas Anderson"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.affName ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.affName && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.affName}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Contact Email</label>
                                    <input 
                                        type="email"
                                        value={affEmail}
                                        onChange={e => {
                                            setAffEmail(e.target.value);
                                            if (formErrors.affEmail) {
                                                const copy = { ...formErrors };
                                                delete copy.affEmail;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="neo@metacortex.net"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.affEmail ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.affEmail && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.affEmail}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Payout Method</label>
                                    <select
                                        value={affChannel}
                                        onChange={e => setAffChannel(e.target.value as any)}
                                        className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 text-xs text-white rounded-xl outline-none cursor-pointer focus:border-yellow-500"
                                    >
                                        <option value="PayPal">PayPal</option>
                                        <option value="Stripe">Stripe</option>
                                        <option value="Bank Transfer">Bank Transfer</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Payment Billing Address / Account ID</label>
                                    <input 
                                        type="text"
                                        value={affPayoutAddress}
                                        onChange={e => {
                                            setAffPayoutAddress(e.target.value);
                                            if (formErrors.affPayoutAddress) {
                                                const copy = { ...formErrors };
                                                delete copy.affPayoutAddress;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="acct_xxxxxxxx or billing@paypal.com"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.affPayoutAddress ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.affPayoutAddress && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.affPayoutAddress}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Website / Promo Channel (Optional)</label>
                                    <input 
                                        type="text"
                                        value={affWebsite}
                                        onChange={e => {
                                            setAffWebsite(e.target.value);
                                            if (formErrors.affWebsite) {
                                                const copy = { ...formErrors };
                                                delete copy.affWebsite;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="https://www.metacortex.net"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.affWebsite ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.affWebsite && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.affWebsite}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md shadow-yellow-500/10"
                                >
                                    Enroll Affiliate Token
                                </button>
                            </form>
                        </GlassCard>
                    </div>
                </div>

                {/* --- COMMISSION CONTROLLER & MONOSPACE TERMINAL CONSOLE LOGGER --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT COLUMN: COMMISSION ADJUSTMENT */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Percent size={18} className="text-yellow-500" /> Commission Rules
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Modify global analytics parameters for payout margins.</p>
                        </div>

                        <GlassCard className="p-6 border border-white/10 rounded-2xl space-y-4 text-xs font-mono text-left">
                            {isAdmin ? (
                                <form onSubmit={handleUpdateRate} className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Base Commission Rate</label>
                                        <div className="flex gap-2">
                                            <input 
                                                type="number"
                                                required
                                                value={rateInput}
                                                onChange={e => setRateInput(e.target.value)}
                                                className="w-20 px-3 py-1.5 bg-zinc-950 border border-white/5 text-xs text-white rounded-xl outline-none"
                                            />
                                            <button 
                                                type="submit"
                                                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-1.5 rounded-xl text-xs font-bold font-mono shadow-md"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                        {rateError && <p className="text-[9px] text-red-500 font-mono mt-1">{rateError}</p>}
                                    </div>
                                </form>
                            ) : (
                                <div className="space-y-2">
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Standard Commission Margins</span>
                                    <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl space-y-1.5">
                                        <div className="flex justify-between text-zinc-300">
                                            <span>Base Recurring Rate</span>
                                            <span className="text-yellow-500 font-bold">{commissionRate}%</span>
                                        </div>
                                        <div className="flex justify-between text-zinc-300">
                                            <span>Validation Duration</span>
                                            <span className="text-zinc-500">60 Days cookie</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </GlassCard>
                    </div>

                    {/* RIGHT COLUMN: CLI LOGGER */}
                    <div className="lg:col-span-2 space-y-6 flex flex-col">
                        <div className="flex justify-between items-end">
                            <div className="text-left">
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Terminal size={18} className="text-yellow-500" /> Commission Ledger Console
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Live logs of click allocations, conversion triggers, and payout runs.</p>
                            </div>
                            <button 
                                onClick={clearLogs}
                                className="text-[10px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest"
                            >
                                Clear Console
                            </button>
                        </div>

                        <div className="flex-1 bg-[#030303] border border-white/10 rounded-2xl p-5 font-mono text-[11px] text-zinc-400 h-[280px] overflow-y-auto flex flex-col justify-between scrollbar-hide shadow-inner">
                            <div className="space-y-1">
                                {logs.map((log, idx) => {
                                    let color = 'text-zinc-400';
                                    if (log.includes('SUCCESS:')) color = 'text-green-400';
                                    if (log.includes('ERROR:')) color = 'text-red-400';
                                    if (log.includes('WARNING:')) color = 'text-yellow-500';
                                    if (log.includes('SYSTEM:')) color = 'text-zinc-500';
                                    if (log.includes('ADMIN:')) color = 'text-cyan-400';
                                    if (log.includes('DATABASE:')) color = 'text-purple-400';
                                    if (log.includes('REST:')) color = 'text-zinc-500';
                                    return (
                                        <div key={idx} className={`${color} leading-relaxed break-all`}>
                                            {log}
                                        </div>
                                    );
                                })}
                                {payoutProcessing && (
                                    <div className="text-yellow-500 animate-pulse flex items-center gap-2 mt-2">
                                        <RefreshCw size={12} className="animate-spin" /> Reconciling ledger payouts... [{payoutProgress}%]
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
                            <p className="text-xs text-zinc-500 font-mono mb-4">Provide authorization keys to unlock organizer privileges.</p>

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
        </main>
    );
}
