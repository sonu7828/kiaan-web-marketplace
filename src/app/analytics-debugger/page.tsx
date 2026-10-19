"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Terminal, Settings, AlertCircle, CheckCircle2, 
    RefreshCw, Play, ShieldAlert, Lock, LogIn, LogOut,
    Eye, Link2, DollarSign, FileCode, Check, Copy
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';
import { trackGAEvent, trackGTMEvent } from '@/utils/analytics';

interface TrackingState {
    ga4Id: string;
    gtmId: string;
    facebookPixelId: string;
    linkedinPartnerId: string;
    eventsDispatched: number;
}

const DEFAULT_STATE: TrackingState = {
    ga4Id: 'G-Y9H9T9S8PN',
    gtmId: 'GTM-WCMW8NVC',
    facebookPixelId: 'fb_pixel_9752100980',
    linkedinPartnerId: 'li_partner_882910',
    eventsDispatched: 0
};

export default function AnalyticsDebugger() {
    const [state, setState] = useState<TrackingState>(DEFAULT_STATE);
    const [isLoading, setIsLoading] = useState(true);

    // Live script checks
    const [ga4Active, setGa4Active] = useState(false);
    const [gtmActive, setGtmActive] = useState(false);

    // Form inputs
    const [gaIdInput, setGaIdInput] = useState('');
    const [gtmIdInput, setGtmIdInput] = useState('');
    const [fbPixelInput, setFbPixelInput] = useState('');
    const [liPartnerInput, setLiPartnerInput] = useState('');
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [saveSuccess, setSaveSuccess] = useState(false);

    // Admin Auth State
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // dataLayer inspector state
    const [dataLayerStack, setDataLayerStack] = useState<any[]>([]);

    // Outgoing simulator states
    const [firingType, setFiringType] = useState<'pageview' | 'click' | 'conversion' | null>(null);

    // Monospace Terminal Console Logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load initial states
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('kiaan_analytics_tracking_state');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    setState(parsed);
                    setGaIdInput(parsed.ga4Id);
                    setGtmIdInput(parsed.gtmId);
                    setFbPixelInput(parsed.facebookPixelId);
                    setLiPartnerInput(parsed.linkedinPartnerId);
                } catch (e) {
                    setState(DEFAULT_STATE);
                }
            } else {
                localStorage.setItem('kiaan_analytics_tracking_state', JSON.stringify(DEFAULT_STATE));
                setGaIdInput(DEFAULT_STATE.ga4Id);
                setGtmIdInput(DEFAULT_STATE.gtmId);
                setFbPixelInput(DEFAULT_STATE.facebookPixelId);
                setLiPartnerInput(DEFAULT_STATE.linkedinPartnerId);
            }

            // Sync dynamic datalayer stack preview
            if (window.dataLayer) {
                setDataLayerStack([...window.dataLayer]);
            }

            setIsLoading(false);

            // Print initial checks
            addLog('SYSTEM: GA4 and GTM tracking verification board online.');
            verifyActiveScripts();
        }
    }, []);

    // Scroll CLI terminal
    useEffect(() => {
        consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    // Periodically sync dataLayer context
    useEffect(() => {
        const timer = setInterval(() => {
            if (typeof window !== 'undefined' && window.dataLayer) {
                if (window.dataLayer.length !== dataLayerStack.length) {
                    setDataLayerStack([...window.dataLayer]);
                }
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [dataLayerStack]);

    const addLog = (message: string) => {
        const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
        setLogs(prev => [...prev, `[${timestamp}] ${message}`]);
    };

    const clearLogs = () => {
        setLogs([`[${new Date().toISOString().split('T')[1].slice(0, 8)}] SYSTEM: Logs console cleared.`]);
    };

    const verifyActiveScripts = () => {
        let gaVal = false;
        let gtmVal = false;

        if (typeof window !== 'undefined') {
            gaVal = typeof window.gtag === 'function';
            gtmVal = (window as any).google_tag_manager !== undefined;
        }

        setGa4Active(gaVal);
        setGtmActive(gtmVal);

        addLog(`TEST: Checking Google Analytics script... ${gaVal ? 'RESOLVED (Active)' : 'UNRESOLVED (Inactive)'}`);
        addLog(`TEST: Checking Google Tag Manager container... ${gtmVal ? 'RESOLVED (Active)' : 'UNRESOLVED (Inactive)'}`);
    };

    // Save Settings
    const handleSaveSettings = (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});
        setSaveSuccess(false);

        const errors: Record<string, string> = {};
        if (!gaIdInput.trim() || !/^G-[A-Z0-9]+$/.test(gaIdInput.trim())) {
            errors.ga4Id = 'GA4 Measurement ID must match standard G-XXXXXXXXXX structure.';
        }
        if (!gtmIdInput.trim() || !/^GTM-[A-Z0-9]+$/.test(gtmIdInput.trim())) {
            errors.gtmId = 'GTM Container ID must match standard GTM-XXXXXXX structure.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            addLog('ERROR: Custom GA4/GTM settings rejected due to formatting errors.');
            return;
        }

        const updated = {
            ...state,
            ga4Id: gaIdInput.trim(),
            gtmId: gtmIdInput.trim(),
            facebookPixelId: fbPixelInput.trim() || 'N/A',
            linkedinPartnerId: liPartnerInput.trim() || 'N/A'
        };

        setState(updated);
        localStorage.setItem('kiaan_analytics_tracking_state', JSON.stringify(updated));
        setSaveSuccess(true);
        addLog(`SYSTEM: Integration properties updated. GA4 ID: ${gaIdInput}, GTM ID: ${gtmIdInput}`);

        setTimeout(() => setSaveSuccess(false), 3000);
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
            addLog('ADMIN: Authenticated successfully. Measurement settings unlocked.');
        } else {
            setLoginError('Invalid administrator credentials.');
            addLog('ERROR: Admin login failed - incorrect password.');
        }
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        addLog('ADMIN: Session ended. Access restricted to default views.');
    };

    // Event Simulators
    const simulateEvent = (type: 'pageview' | 'click' | 'conversion') => {
        setFiringType(type);
        addLog(`DISPATCH: Bundling analytics tracking payload for simulator event: ${type.toUpperCase()}...`);

        setTimeout(() => {
            let eventName = '';
            let gaParams: [string, string, string, number?] = ['', '', ''];
            let gtmParams: Record<string, any> = {};

            if (type === 'pageview') {
                eventName = 'page_view';
                gaParams = ['page_view', 'User Interaction', 'pricing_plans_page'];
                gtmParams = {
                    page_path: '/pricing',
                    page_title: 'Pricing Plans & SaaS Tiers',
                    visitor_type: 'prospective_client'
                };
            } else if (type === 'click') {
                eventName = 'link_click';
                gaParams = ['click', 'User Interaction', 'start_project_button'];
                gtmParams = {
                    click_url: 'https://kiaan.technology/start-project',
                    click_text: 'Start Project',
                    element_id: 'btn-hero-start'
                };
            } else {
                eventName = 'purchase_conversion';
                gaParams = ['purchase', 'Revenue Conversion', 'Enterprise SaaS Subscription', 1200];
                gtmParams = {
                    transaction_id: 'trans_ref_' + Math.floor(Math.random() * 90000 + 10000),
                    value: 1200.00,
                    currency: 'USD',
                    item_name: 'Enterprise SaaS Suite'
                };
            }

            // Track using the utility file
            trackGAEvent(gaParams[0], gaParams[1], gaParams[2], gaParams[3]);
            trackGTMEvent(eventName, gtmParams);

            // Update local datalayer inspector state
            if (typeof window !== 'undefined' && window.dataLayer) {
                setDataLayerStack([...window.dataLayer]);
            }

            setState(prev => {
                const nextCount = prev.eventsDispatched + 1;
                const updated = { ...prev, eventsDispatched: nextCount };
                localStorage.setItem('kiaan_analytics_tracking_state', JSON.stringify(updated));
                return updated;
            });

            setFiringType(null);
            addLog(`SUCCESS: Dispatched event payload. dataLayer stack length: ${window.dataLayer?.length || 0}.`);
        }, 800);
    };

    const handleCopy = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        addLog(`SYSTEM: Copied ${type} to clipboard.`);
        alert(`${type} copied to clipboard!`);
    };

    return (
        <main className="min-h-screen bg-black text-white relative pt-24 pb-12 font-sans overflow-x-hidden">
            {/* Ambient backgrounds */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/5 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-2">
                            Analytics & <span className="text-yellow-500">GTM Debugger</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Verify tag load scopes, inspect GTM dataLayer variables, test custom events, and validate IDs.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {isAdmin ? (
                            <button 
                                onClick={handleAdminLogout}
                                className="px-4 py-2 border border-zinc-800 hover:border-red-500 text-zinc-400 hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 font-mono"
                            >
                                <LogOut size={12} /> Log Out Admin
                            </button>
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

                {/* --- LOAD STATUS RIBBON --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Google Analytics (GA4)</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{state.ga4Id}</h3>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-bold font-mono uppercase inline-block w-fit mt-2 ${
                            ga4Active ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20 animate-pulse'
                        }`}>
                            Status: {ga4Active ? 'Loaded' : 'Script Inactive'}
                        </span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Google Tag Manager (GTM)</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{state.gtmId}</h3>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-bold font-mono uppercase inline-block w-fit mt-2 ${
                            gtmActive ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20 animate-pulse'
                        }`}>
                            Status: {gtmActive ? 'Loaded' : 'Container Inactive'}
                        </span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Facebook Pixel ID</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5 truncate">{state.facebookPixelId}</h3>
                        <span className="px-2 py-0.5 rounded text-[8px] bg-zinc-900 border border-zinc-800 text-zinc-500 font-bold font-mono uppercase inline-block w-fit mt-2">
                            Status: Mapped
                        </span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Events Dispatched</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{state.eventsDispatched} Events</h3>
                        <span className="px-2 py-0.5 rounded text-[8px] bg-zinc-900 border border-zinc-800 text-zinc-500 font-bold font-mono uppercase inline-block w-fit mt-2">
                            Counter Check
                        </span>
                    </GlassCard>
                </div>

                {/* --- MAIN PAGE CONTENT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* LEFT COLUMN: EVENT SIMULATOR & SETTINGS */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* SIMULATOR CARD */}
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Play size={18} className="text-yellow-500" /> Event Simulator
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Trigger tracking scripts manually and check dataLayer outputs.</p>
                        </div>

                        <GlassCard className="p-5 border border-white/10 rounded-2xl space-y-3">
                            {[
                                { id: 'pageview' as const, name: 'Simulate Page View', desc: 'Fires page_view matching /pricing path', icon: <Eye size={14} className="text-cyan-400" /> },
                                { id: 'click' as const, name: 'Simulate Button Click', desc: 'Fires link_click tracking events', icon: <Link2 size={14} className="text-yellow-500" /> },
                                { id: 'conversion' as const, name: 'Simulate Conversion', desc: 'Fires purchase event carrying $1,200 values', icon: <DollarSign size={14} className="text-green-400" /> }
                            ].map((sim) => {
                                const active = firingType === sim.id;
                                return (
                                    <button
                                        key={sim.id}
                                        disabled={firingType !== null}
                                        onClick={() => simulateEvent(sim.id)}
                                        className="w-full p-4 bg-zinc-950/40 border border-white/5 hover:border-yellow-500 text-left rounded-xl transition-all flex items-center justify-between gap-3 text-xs disabled:opacity-30 group"
                                    >
                                        <div>
                                            <strong className="text-white block font-mono flex items-center gap-2">
                                                {sim.icon} {sim.name}
                                            </strong>
                                            <span className="text-[10px] text-zinc-500 font-sans mt-0.5 block">{sim.desc}</span>
                                        </div>

                                        {active ? (
                                            <RefreshCw size={13} className="animate-spin text-yellow-500 shrink-0" />
                                        ) : (
                                            <Play size={12} className="text-zinc-500 group-hover:text-yellow-500 shrink-0" />
                                        )}
                                    </button>
                                );
                            })}
                        </GlassCard>

                        {/* CONFIGURATION FORM */}
                        {isAdmin && (
                            <div className="space-y-6 pt-2">
                                <div className="text-left">
                                    <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                        <Settings size={18} className="text-yellow-500" /> Scripts Settings
                                    </h3>
                                    <p className="text-xs text-zinc-500 font-mono">Modify measurement identifiers in layout headers.</p>
                                </div>

                                {saveSuccess && (
                                    <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono flex items-center gap-2">
                                        <CheckCircle2 size={14} /> Tracking IDs saved successfully!
                                    </div>
                                )}

                                <GlassCard className="p-6 border border-white/10 rounded-2xl">
                                    <form onSubmit={handleSaveSettings} className="space-y-4">
                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">GA4 Measurement ID</label>
                                            <input 
                                                type="text"
                                                value={gaIdInput}
                                                onChange={e => setGaIdInput(e.target.value)}
                                                className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.ga4Id ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                            />
                                            {formErrors.ga4Id && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.ga4Id}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">GTM Container ID</label>
                                            <input 
                                                type="text"
                                                value={gtmIdInput}
                                                onChange={e => setGtmIdInput(e.target.value)}
                                                className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.gtmId ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                            />
                                            {formErrors.gtmId && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.gtmId}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Facebook Pixel ID (Optional)</label>
                                            <input 
                                                type="text"
                                                value={fbPixelInput}
                                                onChange={e => setFbPixelInput(e.target.value)}
                                                className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-zinc-900 border border-white/10 hover:border-yellow-500 text-white py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md"
                                        >
                                            Update Script Configurations
                                        </button>
                                    </form>
                                </GlassCard>
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: GTM DATALAYER STACK INSPECTOR */}
                    <div className="lg:col-span-2 space-y-6 flex flex-col">
                        <div className="flex justify-between items-end">
                            <div className="text-left">
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <FileCode size={18} className="text-yellow-500" /> Live dataLayer Inspector
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Dynamic, pretty-printed representation of browser window.dataLayer stack.</p>
                            </div>
                            <button
                                onClick={() => handleCopy(JSON.stringify(dataLayerStack, null, 2), 'dataLayer Stack JSON')}
                                className="text-[10px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest flex items-center gap-1"
                            >
                                <Copy size={11} /> Copy JSON
                            </button>
                        </div>

                        {/* dataLayer Preview Box */}
                        <div className="flex-1 bg-[#030303] border border-white/10 rounded-2xl p-5 font-mono text-xs text-zinc-400 h-[480px] overflow-y-auto scrollbar-hide shadow-inner text-left">
                            <pre className="text-[11px] leading-relaxed select-text text-yellow-500/95 overflow-x-auto">
                                {JSON.stringify(dataLayerStack, null, 2)}
                            </pre>
                        </div>
                    </div>
                </div>

                {/* --- API LOGS TERMINAL --- */}
                <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Terminal size={18} className="text-yellow-500" /> Analytics Execution Terminal
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Verification checks, click intercepts, and event tags execution streams.</p>
                        </div>
                        <button 
                            onClick={clearLogs}
                            className="text-[10px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest"
                        >
                            Clear Console
                        </button>
                    </div>

                    {/* Monospace terminal console logger */}
                    <div className="bg-[#030303] border border-white/10 rounded-2xl p-5 font-mono text-[11px] text-zinc-400 h-[220px] overflow-y-auto flex flex-col justify-between scrollbar-hide shadow-inner text-left">
                        <div className="space-y-1">
                            {logs.map((log, idx) => {
                                let color = 'text-zinc-400';
                                if (log.includes('SUCCESS:')) color = 'text-green-400';
                                if (log.includes('ERROR:')) color = 'text-red-400';
                                if (log.includes('WARNING:')) color = 'text-yellow-500';
                                if (log.includes('SYSTEM:')) color = 'text-zinc-500';
                                if (log.includes('ADMIN:')) color = 'text-cyan-400';
                                if (log.includes('DISPATCH:')) color = 'text-purple-400';
                                if (log.includes('TEST:')) color = 'text-purple-400';
                                return (
                                    <div key={idx} className={`${color} leading-relaxed break-all`}>
                                        {log}
                                    </div>
                                );
                            })}
                            <div ref={consoleEndRef} />
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
                            <p className="text-xs text-zinc-500 font-mono mb-4">Provide authorization keys to unlock organizer settings.</p>

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
