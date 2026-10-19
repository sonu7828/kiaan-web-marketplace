"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Terminal, Settings, AlertCircle, CheckCircle2, 
    RefreshCw, Play, ShieldAlert, Lock, LogIn, LogOut,
    Eye, Link2, DollarSign, FileCode, Check, Copy, MousePointer, 
    Video, Compass, BarChart2
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';

interface ClarityState {
    clarityId: string;
    hotjarId: string;
    recodingActive: boolean;
    heatmapsActive: boolean;
}

const DEFAULT_STATE: ClarityState = {
    clarityId: 'p68w2nvc',
    hotjarId: '5088291',
    recodingActive: true,
    heatmapsActive: true
};

export default function HeatmapsDebugger() {
    const [state, setState] = useState<ClarityState>(DEFAULT_STATE);
    const [isLoading, setIsLoading] = useState(true);

    // Active loaders states
    const [clarityActive, setClarityActive] = useState(false);
    const [hotjarActive, setHotjarActive] = useState(false);

    // Form inputs
    const [clarityIdInput, setClarityIdInput] = useState('');
    const [hotjarIdInput, setHotjarIdInput] = useState('');
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [saveSuccess, setSaveSuccess] = useState(false);

    // Admin Auth State
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Simulated heatmaps click coordinate state
    const [heatclicks, setHeatclicks] = useState<{ x: number; y: number; label: string; date: string }[]>([]);

    // Monospace Terminal Console Logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load initial configurations
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('kiaan_heatmap_tracking_state');
            if (stored) {
                try {
                    const parsed = JSON.parse(stored);
                    setState(parsed);
                    setClarityIdInput(parsed.clarityId);
                    setHotjarIdInput(parsed.hotjarId);
                } catch (e) {
                    setState(DEFAULT_STATE);
                }
            } else {
                localStorage.setItem('kiaan_heatmap_tracking_state', JSON.stringify(DEFAULT_STATE));
                setClarityIdInput(DEFAULT_STATE.clarityId);
                setHotjarIdInput(DEFAULT_STATE.hotjarId);
            }

            setIsLoading(false);
            addLog('SYSTEM: Microsoft Clarity & Hotjar coordinate diagnostics board online.');
            verifyActiveScripts();
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

    const verifyActiveScripts = () => {
        let clarVal = false;
        let hjVal = false;

        if (typeof window !== 'undefined') {
            clarVal = typeof (window as any).clarity === 'function';
            hjVal = typeof (window as any).hj === 'function';
        }

        setClarityActive(clarVal);
        setHotjarActive(hjVal);

        addLog(`TEST: Checking Microsoft Clarity container script... ${clarVal ? 'RESOLVED (Active)' : 'UNRESOLVED (Inactive)'}`);
        addLog(`TEST: Checking Hotjar site tracker script... ${hjVal ? 'RESOLVED (Active)' : 'UNRESOLVED (Inactive)'}`);
    };

    // Save Configurations
    const handleSaveSettings = (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});
        setSaveSuccess(false);

        const errors: Record<string, string> = {};
        if (!clarityIdInput.trim() || !/^[a-z0-9]{8,12}$/.test(clarityIdInput.trim())) {
            errors.clarityId = 'Microsoft Clarity Project ID must be an alphanumeric string of 8-12 chars.';
        }
        if (!hotjarIdInput.trim() || !/^\d{6,10}$/.test(hotjarIdInput.trim())) {
            errors.hotjarId = 'Hotjar Site ID must be a numeric string of 6-10 digits.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            addLog('ERROR: Clarity/Hotjar script IDs update rejected due to validation errors.');
            return;
        }

        const updated = {
            ...state,
            clarityId: clarityIdInput.trim(),
            hotjarId: hotjarIdInput.trim()
        };

        setState(updated);
        localStorage.setItem('kiaan_heatmap_tracking_state', JSON.stringify(updated));
        setSaveSuccess(true);
        addLog(`SYSTEM: Tracker settings updated. Clarity ID: ${clarityIdInput}, Hotjar Site ID: ${hotjarIdInput}`);

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
            addLog('ADMIN: Authenticated successfully. Settings configuration panel unlocked.');
        } else {
            setLoginError('Invalid administrator credentials.');
            addLog('ERROR: Admin login failed.');
        }
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        addLog('ADMIN: Session ended. Access restricted to default views.');
    };

    // Click mock heatmap grid capture coordinates
    const handleCaptureClick = (e: React.MouseEvent<HTMLDivElement>, label: string) => {
        const bounds = e.currentTarget.getBoundingClientRect();
        const x = Math.round(e.clientX - bounds.left);
        const y = Math.round(e.clientY - bounds.top);

        const newClick = {
            x,
            y,
            label,
            date: new Date().toLocaleTimeString()
        };

        // Save locally
        setHeatclicks(prev => [newClick, ...prev].slice(0, 10));

        // Trigger simulated script pushes
        if (typeof window !== 'undefined') {
            if ((window as any).clarity) {
                (window as any).clarity('event', `click_${label.toLowerCase().replace(/\s+/g, '_')}`, { x, y });
            }
            if ((window as any).hj) {
                (window as any).hj('trigger', `click_${label.toLowerCase().replace(/\s+/g, '_')}`);
            }
        }

        addLog(`CAPTURE: Heatmap click mapped at (${x}px, ${y}px) on target element: "${label}".`);
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
                            Heatmaps & <span className="text-yellow-500">Recordings</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Test session recordings triggers, verify heatmap coordinates click tracking, and validate script IDs.
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

                {/* --- SCRIPT SCRIPTS LOAD STATUS --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Microsoft Clarity</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{state.clarityId}</h3>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-bold font-mono uppercase inline-block w-fit mt-2 ${
                            clarityActive ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20 animate-pulse'
                        }`}>
                            Status: {clarityActive ? 'Active' : 'Container Inactive'}
                        </span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Hotjar Site ID</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{state.hotjarId}</h3>
                        <span className={`px-2 py-0.5 rounded text-[8px] font-bold font-mono uppercase inline-block w-fit mt-2 ${
                            hotjarActive ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20 animate-pulse'
                        }`}>
                            Status: {hotjarActive ? 'Active' : 'Site Inactive'}
                        </span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Session Recordings</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">ENABLED</h3>
                        <span className="px-2 py-0.5 rounded text-[8px] bg-zinc-900 border border-zinc-800 text-zinc-500 font-bold font-mono uppercase inline-block w-fit mt-2">
                            MS Clarity Tag
                        </span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">Heatmaps State</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">CNAME MAPPED</h3>
                        <span className="px-2 py-0.5 rounded text-[8px] bg-zinc-900 border border-zinc-800 text-zinc-500 font-bold font-mono uppercase inline-block w-fit mt-2">
                            Active Trigger
                        </span>
                    </GlassCard>
                </div>

                {/* --- MAIN PAGE CONTENT GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* LEFT COLUMN: VISUAL MOCKUP FOR COORDINATES INJECTION */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Compass size={18} className="text-yellow-500" /> Interactive Heatmap Simulator
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Click anywhere inside the card sections below to log mouse coordinate points.</p>
                        </div>

                        {/* MOCKUP PAGE GRID FOR CLICKS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Card Mockup A: Hero Banner */}
                            <div 
                                onClick={(e) => handleCaptureClick(e, 'Hero CTA Area')}
                                className="cursor-crosshair select-none"
                            >
                                <GlassCard className="p-6 border border-white/10 hover:border-yellow-500/40 rounded-2xl relative overflow-hidden group min-h-[160px] flex flex-col justify-between text-left">
                                    <div className="absolute inset-0 bg-yellow-500/[0.01] group-hover:bg-yellow-500/[0.03] transition-colors" />
                                    <div>
                                        <span className="text-[8px] font-mono text-yellow-500/80 uppercase tracking-widest">Zone: Hero</span>
                                        <h4 className="text-base font-bold text-white mt-1">Accelerate Operations</h4>
                                        <p className="text-[10px] text-zinc-500 mt-1 leading-normal">
                                            We design custom automated systems for high-growth SaaS corporations.
                                        </p>
                                    </div>
                                    <div className="mt-4 px-3 py-1 bg-yellow-500 hover:bg-yellow-400 text-black text-[9px] font-black uppercase tracking-wider rounded-lg w-fit transition-all pointer-events-none">
                                        Book Live Demo
                                    </div>
                                </GlassCard>
                            </div>

                            {/* Card Mockup B: Features grid */}
                            <div 
                                onClick={(e) => handleCaptureClick(e, 'Features Grid Area')}
                                className="cursor-crosshair select-none"
                            >
                                <GlassCard className="p-6 border border-white/10 hover:border-cyan-500/40 rounded-2xl relative overflow-hidden group min-h-[160px] flex flex-col justify-between text-left">
                                    <div className="absolute inset-0 bg-cyan-500/[0.01] group-hover:bg-cyan-500/[0.03] transition-colors" />
                                    <div>
                                        <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest">Zone: Feature Showcase</span>
                                        <h4 className="text-base font-bold text-white mt-1">Multi-Tenant Setup</h4>
                                        <p className="text-[10px] text-zinc-500 mt-1 leading-normal">
                                            Subdomain mapping, database segregation, and custom branding integrations.
                                        </p>
                                    </div>
                                    <span className="text-[9px] font-mono text-zinc-400 block mt-4 pointer-events-none">
                                        Read Documentation →
                                    </span>
                                </GlassCard>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CONFIG SETTINGS */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Settings size={18} className="text-yellow-500" /> Tracking Mappings
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Configure tracking script variables.</p>
                        </div>

                        {saveSuccess && (
                            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono flex items-center gap-2">
                                <CheckCircle2 size={14} /> Tracking IDs saved successfully!
                            </div>
                        )}

                        <GlassCard className="p-6 border border-white/10 rounded-2xl">
                            {isAdmin ? (
                                <form onSubmit={handleSaveSettings} className="space-y-4 text-left">
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Clarity Project ID</label>
                                        <input 
                                            type="text"
                                            value={clarityIdInput}
                                            onChange={e => setClarityIdInput(e.target.value)}
                                            className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.clarityId ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                        />
                                        {formErrors.clarityId && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.clarityId}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Hotjar Site ID</label>
                                        <input 
                                            type="text"
                                            value={hotjarIdInput}
                                            onChange={e => setHotjarIdInput(e.target.value)}
                                            className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.hotjarId ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                        />
                                        {formErrors.hotjarId && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.hotjarId}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-zinc-900 border border-white/10 hover:border-yellow-500 text-white py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md"
                                    >
                                        Update Configurations
                                    </button>
                                </form>
                            ) : (
                                <div className="space-y-4 text-left font-mono text-xs text-zinc-400">
                                    <div className="space-y-1">
                                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Clarity Project Key</span>
                                        <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl text-zinc-300">
                                            {state.clarityId}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Hotjar Site ID</span>
                                        <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl text-zinc-300">
                                            {state.hotjarId}
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 font-sans leading-relaxed pt-2">
                                        To modify project credentials, authenticate as administrator using the Admin Login option at the top.
                                    </p>
                                </div>
                            )}
                        </GlassCard>
                    </div>
                </div>

                {/* --- COORDINATE HISTORY & REALTIME TERMINAL --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT COLUMN: COORDINATE HISTORY CAPTURES */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <MousePointer size={18} className="text-yellow-500" /> Click Log History
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Breakdown of mouse coordinates recorded on targets.</p>
                        </div>

                        <GlassCard className="p-5 border border-white/10 rounded-2xl h-[280px] overflow-y-auto scrollbar-hide text-left">
                            {heatclicks.length === 0 ? (
                                <p className="text-[10px] font-mono text-zinc-500">No clicks tracked. Click coordinates grids above to map coordinates.</p>
                            ) : (
                                <div className="space-y-3 font-mono text-xs">
                                    {heatclicks.map((cl, idx) => (
                                        <div key={idx} className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0 text-zinc-400">
                                            <div>
                                                <span className="text-white font-bold block">{cl.label}</span>
                                                <span className="text-[9px] text-zinc-500">{cl.date}</span>
                                            </div>
                                            <span className="text-yellow-500 font-bold shrink-0">
                                                X: {cl.x}px, Y: {cl.y}px
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </GlassCard>
                    </div>

                    {/* RIGHT COLUMN: CLI LOGGER */}
                    <div className="lg:col-span-2 space-y-6 flex flex-col">
                        <div className="flex justify-between items-end">
                            <div className="text-left">
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Terminal size={18} className="text-yellow-500" /> Clarity & Hotjar Terminal
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Live console output verifying script loads and heatmap clicks mappings.</p>
                            </div>
                            <button 
                                onClick={clearLogs}
                                className="text-[10px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest"
                            >
                                Clear Console
                            </button>
                        </div>

                        <div className="flex-1 bg-[#030303] border border-white/10 rounded-2xl p-5 font-mono text-[11px] text-zinc-400 h-[280px] overflow-y-auto flex flex-col justify-between scrollbar-hide shadow-inner text-left">
                            <div className="space-y-1">
                                {logs.map((log, idx) => {
                                    let color = 'text-zinc-400';
                                    if (log.includes('SUCCESS:')) color = 'text-green-400';
                                    if (log.includes('ERROR:')) color = 'text-red-400';
                                    if (log.includes('WARNING:')) color = 'text-yellow-500';
                                    if (log.includes('SYSTEM:')) color = 'text-zinc-500';
                                    if (log.includes('ADMIN:')) color = 'text-cyan-400';
                                    if (log.includes('CAPTURE:')) color = 'text-purple-400';
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
                            <p className="text-xs text-zinc-500 font-mono mb-4">Provide credentials to unlock organizer configs.</p>

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
