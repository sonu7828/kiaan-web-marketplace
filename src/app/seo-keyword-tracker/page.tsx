"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Terminal, Settings, AlertCircle, CheckCircle2, 
    RefreshCw, Play, ShieldAlert, Lock, LogIn, LogOut,
    Eye, Link2, DollarSign, FileCode, Check, Copy, Search,
    TrendingUp, TrendingDown, Minus, BookOpen, Layers, Plus,
    Compass, ArrowUpRight, Award, HelpCircle
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';

interface KeywordRecord {
    id: string;
    keyword: string;
    searchVolume: number;
    currentPosition: number;
    previousPosition: number;
    impressions: number;
    ctr: number;
    status: 'Trending' | 'Stable' | 'Declining';
}

const DEFAULT_KEYWORDS: KeywordRecord[] = [
    {
        id: 'kw_1',
        keyword: 'enterprise workflow automation indore',
        searchVolume: 1200,
        currentPosition: 2.1,
        previousPosition: 4.5,
        impressions: 4200,
        ctr: 24.5,
        status: 'Trending'
    },
    {
        id: 'kw_2',
        keyword: 'custom ERP software development india',
        searchVolume: 2800,
        currentPosition: 3.4,
        previousPosition: 3.2,
        impressions: 3100,
        ctr: 18.2,
        status: 'Stable'
    },
    {
        id: 'kw_3',
        keyword: 'healthcare telemedicine react portals',
        searchVolume: 900,
        currentPosition: 4.8,
        previousPosition: 8.4,
        impressions: 1900,
        ctr: 22.4,
        status: 'Trending'
    },
    {
        id: 'kw_4',
        keyword: 'SaaS product development indore',
        searchVolume: 1500,
        currentPosition: 5.6,
        previousPosition: 5.4,
        impressions: 2100,
        ctr: 15.6,
        status: 'Stable'
    },
    {
        id: 'kw_5',
        keyword: 'custom CRM system integrations',
        searchVolume: 600,
        currentPosition: 11.2,
        previousPosition: 9.8,
        impressions: 850,
        ctr: 8.9,
        status: 'Declining'
    },
    {
        id: 'kw_6',
        keyword: 'next.js development agency',
        searchVolume: 3200,
        currentPosition: 14.5,
        previousPosition: 18.2,
        impressions: 5400,
        ctr: 10.4,
        status: 'Trending'
    }
];

export default function SEOKeywordTracker() {
    const [keywords, setKeywords] = useState<KeywordRecord[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Search Console API status
    const [syncing, setSyncing] = useState(false);
    const [syncProgress, setSyncProgress] = useState(0);

    // Search filter & sort state
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<'position' | 'volume' | 'impressions'>('position');

    // Admin Auth State
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Admin Keyword creation
    const [newKeywordName, setNewKeywordName] = useState('');
    const [newKeywordVolume, setNewKeywordVolume] = useState('500');
    const [newKeywordPos, setNewKeywordPos] = useState('10');
    const [registerSuccess, setRegisterSuccess] = useState(false);

    // Monospace Terminal Console Logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load stored keywords
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('kiaan_seo_keywords');
            if (stored) {
                try {
                    setKeywords(JSON.parse(stored));
                } catch (e) {
                    setKeywords(DEFAULT_KEYWORDS);
                }
            } else {
                localStorage.setItem('kiaan_seo_keywords', JSON.stringify(DEFAULT_KEYWORDS));
                setKeywords(DEFAULT_KEYWORDS);
            }
            setIsLoading(false);

            addLog('SYSTEM: SEO Keyword Rankings tracking board online.');
            addLog('DATABASE: Restored search index queries from browser localStorage.');
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

    // Google Search Console Sync Simulator
    const handleGSCSync = () => {
        if (syncing) return;
        setSyncing(true);
        setSyncProgress(0);
        addLog('REST: Initiating Google Search Console API synchronization cycle...');

        const interval = setInterval(() => {
            setSyncProgress(prev => {
                const next = prev + 20;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setSyncing(false);
                        addLog('SUCCESS: Search rankings dataset synced. Calculated avg position indices successfully.');
                    }, 200);
                    return 100;
                }

                if (next === 20) addLog('OAuth: Validated client security credentials for profile "info@kiaantechnology.com".');
                if (next === 40) addLog('API: Querying Google Search Console REST endpoints /searchanalytics/query...');
                if (next === 60) addLog(`API: Parsed keywords positions and impressions indices dataset.`);
                if (next === 80) addLog('DB: Merged search positions delta variations into client indexing tables.');

                return next;
            });
        }, 400);
    };

    // Register New Keyword
    const handleRegisterKeyword = (e: React.FormEvent) => {
        e.preventDefault();
        setRegisterSuccess(false);

        if (!newKeywordName.trim()) {
            alert('Keyword name is required.');
            return;
        }

        const vol = parseInt(newKeywordVolume);
        const pos = parseFloat(newKeywordPos);

        if (isNaN(vol) || vol <= 0) {
            alert('Please provide a valid search volume count.');
            return;
        }
        if (isNaN(pos) || pos < 1 || pos > 100) {
            alert('Position must be between 1 and 100.');
            return;
        }

        const newKw: KeywordRecord = {
            id: `kw_${Date.now()}`,
            keyword: newKeywordName.trim().toLowerCase(),
            searchVolume: vol,
            currentPosition: pos,
            previousPosition: pos, // default same
            impressions: Math.round(vol * (Math.random() * 2 + 1)), // mock impressions
            ctr: parseFloat((Math.random() * 15 + 5).toFixed(1)), // mock ctr
            status: 'Stable'
        };

        const updated = [...keywords, newKw];
        setKeywords(updated);
        localStorage.setItem('kiaan_seo_keywords', JSON.stringify(updated));

        setRegisterSuccess(true);
        addLog(`ADMIN: Added new query keyword to rank tracking checklist: "${newKw.keyword}".`);

        // Reset fields
        setNewKeywordName('');
        setNewKeywordVolume('500');
        setNewKeywordPos('10');

        setTimeout(() => setRegisterSuccess(false), 2000);
    };

    // Admin Auth actions
    const handleAdminLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');

        if (adminEmail === 'admin@kiaan.tech' && adminPassword === 'admin123') {
            setIsAdmin(true);
            setShowAdminLogin(false);
            setAdminEmail('');
            setAdminPassword('');
            addLog('ADMIN: Authenticated successfully. Keyword registries unlocked.');
        } else {
            setLoginError('Invalid administrator credentials.');
            addLog('ERROR: Admin login failed.');
        }
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        addLog('ADMIN: Session ended. Configuration access restricted.');
    };

    // Calculation summaries
    const getAvgPosition = () => {
        if (keywords.length === 0) return 0;
        const sum = keywords.reduce((acc, curr) => acc + curr.currentPosition, 0);
        return parseFloat((sum / keywords.length).toFixed(1));
    };

    const getTop3Count = () => {
        return keywords.filter(kw => kw.currentPosition <= 3.0).length;
    };

    const getTop10Count = () => {
        return keywords.filter(kw => kw.currentPosition <= 10.0).length;
    };

    // Filter & Sort ledger
    const getFilteredKeywords = () => {
        const filtered = keywords.filter(kw => 
            kw.keyword.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return [...filtered].sort((a, b) => {
            if (sortBy === 'position') return a.currentPosition - b.currentPosition;
            if (sortBy === 'volume') return b.searchVolume - a.searchVolume;
            if (sortBy === 'impressions') return b.impressions - a.impressions;
            return 0;
        });
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
                            Keyword <span className="text-yellow-500">Rankings</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Track Google Search Console keyword queries rankings positions, impressions, and relative position deltas.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            disabled={syncing}
                            onClick={handleGSCSync}
                            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black disabled:opacity-30 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md font-mono"
                        >
                            {syncing ? (
                                <RefreshCw size={12} className="animate-spin" />
                            ) : (
                                <Play size={12} fill="currentColor" />
                            )}
                            Sync Rankings
                        </button>

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

                {/* --- STATS SUMMARY RIBBON --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left font-mono">
                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">Keywords Tracked</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{keywords.length} Queries</h3>
                        <span className="text-[10px] text-zinc-500 block mt-2">Active checklists</span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">Avg Search Pos</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">#{getAvgPosition()}</h3>
                        <span className="text-[10px] text-zinc-500 block mt-2">Search position average</span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">In Top 3 Bounds</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{getTop3Count()} Keywords</h3>
                        <span className="text-[10px] text-green-400 font-bold block mt-2">High conversion visibility</span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">In Top 10 Bounds</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{getTop10Count()} Keywords</h3>
                        <span className="text-[10px] text-zinc-500 block mt-2">First page visibility</span>
                    </GlassCard>
                </div>

                {/* --- KEYWORD POSITION LEDGER TABLE --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* LEFT COLUMN: KEYWORDS INDEX TABLE */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-left flex justify-between items-end flex-wrap gap-4">
                            <div>
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Award size={18} className="text-yellow-500" /> Search Rankings Ledger
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Detailed listing of tracked organic query positions.</p>
                            </div>

                            {/* Search box & Sorter */}
                            <div className="flex gap-2 w-full sm:w-auto">
                                <div className="flex items-center gap-2 bg-zinc-950 border border-white/5 px-3 py-1.5 rounded-xl w-full sm:w-48">
                                    <Search size={12} className="text-zinc-500" />
                                    <input 
                                        type="text"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="Search query..."
                                        className="bg-transparent border-0 text-xs text-white outline-none w-full placeholder-zinc-600"
                                    />
                                </div>
                                <select
                                    value={sortBy}
                                    onChange={e => setSortBy(e.target.value as any)}
                                    className="bg-zinc-950 border border-white/5 text-xs text-zinc-300 px-3 py-1.5 rounded-xl outline-none font-mono"
                                >
                                    <option value="position">Sort by Position</option>
                                    <option value="volume">Sort by Volume</option>
                                    <option value="impressions">Sort by Impressions</option>
                                </select>
                            </div>
                        </div>

                        {getFilteredKeywords().length === 0 ? (
                            <div className="p-12 text-center text-zinc-500 font-mono border border-white/5 rounded-2xl bg-zinc-950/40">
                                No tracked keyword query matches your filter query.
                            </div>
                        ) : (
                            <div className="overflow-x-auto border border-white/5 rounded-2xl bg-zinc-950/20">
                                <table className="w-full text-left font-mono text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 text-zinc-500 bg-zinc-950/40 uppercase text-[9px] tracking-wider select-none">
                                            <th className="p-4">Keyword Query</th>
                                            <th className="p-4">Volume</th>
                                            <th className="p-4">Rank Position</th>
                                            <th className="p-4 text-right">Delta Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getFilteredKeywords().map((kw) => {
                                            const diff = parseFloat((kw.previousPosition - kw.currentPosition).toFixed(1));
                                            return (
                                                <tr key={kw.id} className="border-b border-white/5 last:border-0 hover:bg-zinc-900/10 transition-colors">
                                                    <td className="p-4">
                                                        <strong className="text-white block font-sans">{kw.keyword}</strong>
                                                        <span className="text-[10px] text-zinc-500 block mt-0.5">Impressions: {kw.impressions} | CTR: {kw.ctr}%</span>
                                                    </td>
                                                    <td className="p-4 text-zinc-300">{kw.searchVolume}</td>
                                                    <td className="p-4">
                                                        <span className="text-white font-bold text-sm">#{kw.currentPosition}</span>
                                                    </td>
                                                    <td className="p-4 text-right">
                                                        <div className="flex items-center justify-end gap-1">
                                                            {diff > 0 ? (
                                                                <span className="text-green-400 flex items-center font-bold text-[10px]">
                                                                    <TrendingUp size={10} className="mr-0.5" /> +{diff}
                                                                </span>
                                                            ) : diff < 0 ? (
                                                                <span className="text-red-500 flex items-center font-bold text-[10px]">
                                                                    <TrendingDown size={10} className="mr-0.5" /> {diff}
                                                                </span>
                                                            ) : (
                                                                <span className="text-zinc-500 flex items-center text-[10px]">
                                                                    <Minus size={10} className="mr-0.5" /> Stable
                                                                </span>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: ADMIN REGISTER FORM */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Plus size={18} className="text-yellow-500" /> Keyword Register
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Register query keywords to active checkpoints logs.</p>
                        </div>

                        {registerSuccess && (
                            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono flex items-center gap-2">
                                <CheckCircle2 size={14} /> Keyword added successfully!
                            </div>
                        )}

                        <GlassCard className="p-6 border border-white/10 rounded-2xl">
                            {isAdmin ? (
                                <form onSubmit={handleRegisterKeyword} className="space-y-4 text-left font-mono">
                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Keyword query</label>
                                        <input 
                                            type="text"
                                            required
                                            value={newKeywordName}
                                            onChange={e => setNewKeywordName(e.target.value)}
                                            placeholder="ai developer indore"
                                            className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Search Volume</label>
                                        <input 
                                            type="number"
                                            required
                                            value={newKeywordVolume}
                                            onChange={e => setNewKeywordVolume(e.target.value)}
                                            className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Current Rank Position</label>
                                        <input 
                                            type="number"
                                            step="0.1"
                                            required
                                            value={newKeywordPos}
                                            onChange={e => setNewKeywordPos(e.target.value)}
                                            className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider shadow-md"
                                    >
                                        Track Keyword
                                    </button>
                                </form>
                            ) : (
                                <div className="space-y-4 text-left font-mono text-xs text-zinc-400">
                                    <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl space-y-2">
                                        <div className="flex justify-between">
                                            <span>Tracking Quota</span>
                                            <span className="text-yellow-500 font-bold">Unlimited</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sync Source</span>
                                            <span className="text-zinc-500">Google Search Console API</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 font-sans leading-relaxed">
                                        To manually register a custom search query keyword to the tracking ledger, authenticate using Admin credentials.
                                    </p>
                                </div>
                            )}
                        </GlassCard>
                    </div>
                </div>

                {/* --- MONITORING TERMINAL CONSOLE --- */}
                <div className="space-y-6 flex flex-col text-left">
                    <div className="flex justify-between items-end">
                        <div>
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Terminal size={18} className="text-yellow-500" /> Rankings Sync Terminal
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Live logs verifying Search Console JSON fetches and query position checks.</p>
                        </div>
                        <button 
                            onClick={clearLogs}
                            className="text-[10px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest"
                        >
                            Clear Console
                        </button>
                    </div>

                    <div className="bg-[#030303] border border-white/10 rounded-2xl p-5 font-mono text-[11px] text-zinc-400 h-[220px] overflow-y-auto flex flex-col justify-between scrollbar-hide shadow-inner">
                        <div className="space-y-1">
                            {logs.map((log, idx) => {
                                let color = 'text-zinc-400';
                                if (log.includes('SUCCESS:')) color = 'text-green-400';
                                if (log.includes('ERROR:')) color = 'text-red-400';
                                if (log.includes('SYSTEM:')) color = 'text-zinc-500';
                                if (log.includes('DATABASE:')) color = 'text-purple-400';
                                if (log.includes('REST:')) color = 'text-yellow-500';
                                if (log.includes('OAuth:')) color = 'text-cyan-400';
                                if (log.includes('API:')) color = 'text-zinc-500';
                                if (log.includes('ADMIN:')) color = 'text-cyan-400';
                                return (
                                    <div key={idx} className={`${color} leading-relaxed break-all`}>
                                        {log}
                                    </div>
                                );
                            })}
                            {syncing && (
                                <div className="text-yellow-500 animate-pulse flex items-center gap-2 mt-2">
                                    <RefreshCw size={12} className="animate-spin" /> Synchronizing search console data... [{syncProgress}%]
                                </div>
                            )}
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
                            <p className="text-xs text-zinc-500 font-mono mb-4">Provide credentials to unlock manual search queries tracker.</p>

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
