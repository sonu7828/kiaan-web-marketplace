"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Terminal, Settings, AlertCircle, CheckCircle2, 
    RefreshCw, Play, ShieldAlert, Lock, LogIn, LogOut,
    Eye, Link2, DollarSign, FileCode, Check, Copy, Search,
    TrendingUp, Award, Layers, Plus, Compass, ArrowUpRight,
    ExternalLink, Trash2, Calendar, Globe, HelpCircle, ShieldCheck
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';

interface BacklinkRecord {
    id: string;
    sourceUrl: string;
    anchorText: string;
    targetUrl: string;
    domainRating: number;
    linkType: 'DoFollow' | 'NoFollow' | 'Lost' | 'New';
    dateDiscovered: string;
}

const DEFAULT_BACKLINKS: BacklinkRecord[] = [
    {
        id: 'bl_1',
        sourceUrl: 'https://techcrunch.com/article/nextjs-enterprise-growth',
        anchorText: 'SaaS automation indore',
        targetUrl: 'https://kiaantechnology.com/services/saas-development',
        domainRating: 92,
        linkType: 'DoFollow',
        dateDiscovered: '2026-07-18'
    },
    {
        id: 'bl_2',
        sourceUrl: 'https://medium.com/@seoguru/top-erp-custom-setups',
        anchorText: 'custom ERP software india',
        targetUrl: 'https://kiaantechnology.com/products/erp-software',
        domainRating: 78,
        linkType: 'DoFollow',
        dateDiscovered: '2026-07-20'
    },
    {
        id: 'bl_3',
        sourceUrl: 'https://news.ycombinator.com/item?id=384210',
        anchorText: 'Kiaan technologies',
        targetUrl: 'https://kiaantechnology.com',
        domainRating: 88,
        linkType: 'New',
        dateDiscovered: '2026-07-23'
    },
    {
        id: 'bl_4',
        sourceUrl: 'https://github.com/trending/javascript/portals',
        anchorText: 'telemedicine react client',
        targetUrl: 'https://kiaantechnology.com/case-studies/healthsakhi-ai',
        domainRating: 95,
        linkType: 'NoFollow',
        dateDiscovered: '2026-07-25'
    },
    {
        id: 'bl_5',
        sourceUrl: 'https://techblog.org/reviews/outsource-developers',
        anchorText: 'remote CRM dev team',
        targetUrl: 'https://kiaantechnology.com/crm',
        domainRating: 45,
        linkType: 'Lost',
        dateDiscovered: '2026-07-27'
    }
];

const TIME_GROWTH_PATHS = {
    '7d': {
        path: 'M 50,150 L 150,130 L 250,140 L 350,110 L 450,120 L 550,80 L 650,60',
        fill: 'M 50,150 L 150,130 L 250,140 L 350,110 L 450,120 L 550,80 L 650,60 L 650,180 L 50,180 Z',
        points: [
            { x: 50, y: 150 },
            { x: 150, y: 130 },
            { x: 250, y: 140 },
            { x: 350, y: 110 },
            { x: 450, y: 120 },
            { x: 550, y: 80 },
            { x: 650, y: 60 }
        ]
    },
    '30d': {
        path: 'M 50,130 L 150,110 L 250,140 L 350,90 L 450,100 L 550,70 L 650,40',
        fill: 'M 50,130 L 150,110 L 250,140 L 350,90 L 450,100 L 550,70 L 650,40 L 650,180 L 50,180 Z',
        points: [
            { x: 50, y: 130 },
            { x: 150, y: 110 },
            { x: 250, y: 140 },
            { x: 350, y: 90 },
            { x: 450, y: 100 },
            { x: 550, y: 70 },
            { x: 650, y: 40 }
        ]
    },
    '90d': {
        path: 'M 50,140 L 150,100 L 250,120 L 350,80 L 450,90 L 550,60 L 650,30',
        fill: 'M 50,140 L 150,100 L 250,120 L 350,80 L 450,90 L 550,60 L 650,30 L 650,180 L 50,180 Z',
        points: [
            { x: 50, y: 140 },
            { x: 150, y: 100 },
            { x: 250, y: 120 },
            { x: 350, y: 80 },
            { x: 450, y: 90 },
            { x: 550, y: 60 },
            { x: 650, y: 30 }
        ]
    }
};

export default function BacklinkMonitor() {
    const [backlinks, setBacklinks] = useState<BacklinkRecord[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Dynamic timeframe filters
    const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d'>('30d');

    // Crawler sync status
    const [syncing, setSyncing] = useState(false);
    const [syncProgress, setSyncProgress] = useState(0);

    // Search query & sort orders
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<'dr' | 'date'>('dr');

    // Admin Auth states
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Admin register input states
    const [newSourceUrl, setNewSourceUrl] = useState('');
    const [newAnchorText, setNewAnchorText] = useState('');
    const [newTargetUrl, setNewTargetUrl] = useState('https://kiaantechnology.com');
    const [newDR, setNewDR] = useState('50');
    const [newLinkType, setNewLinkType] = useState<'DoFollow' | 'NoFollow'>('DoFollow');
    const [registerSuccess, setRegisterSuccess] = useState(false);

    // Monospace Terminal Console Logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load stored backlinks
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('kiaan_backlinks');
            if (stored) {
                try {
                    setBacklinks(JSON.parse(stored));
                } catch (e) {
                    setBacklinks(DEFAULT_BACKLINKS);
                }
            } else {
                localStorage.setItem('kiaan_backlinks', JSON.stringify(DEFAULT_BACKLINKS));
                setBacklinks(DEFAULT_BACKLINKS);
            }
            setIsLoading(false);

            addLog('SYSTEM: Backlink Monitoring & Growth Tracking board online.');
            addLog('DATABASE: Read link profile index from client localStorage.');
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

    // Timeframe select trigger
    const handleTimeframeChange = (val: '7d' | '30d' | '90d') => {
        setTimeframe(val);
        addLog(`FILTER: Recalculating charts trends for timeframe: ${val.toUpperCase()}. Redrawing SVG paths.`);
    };

    // Ahrefs / Moz Crawlers Sync simulator
    const handleCrawlerSync = () => {
        if (syncing) return;
        setSyncing(true);
        setSyncProgress(0);
        addLog('REST: Spawning backlinks crawlers threads (Ahrefs, Semrush, Moz indices)...');

        const interval = setInterval(() => {
            setSyncProgress(prev => {
                const next = prev + 25;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setSyncing(false);
                        addLog('SUCCESS: Crawled backlink index parameters successfully reconciled.');
                    }, 200);
                    return 100;
                }

                if (next === 25) addLog('API: Validating search crawler key tokens...');
                if (next === 50) addLog(`CRAWL: Audited ${backlinks.length} referring domains. DR increased to 42.`);
                if (next === 75) addLog('DB: Merged references. 0 suspicious links flagged in spam audit.');

                return next;
            });
        }, 350);
    };

    // Add backlink action
    const handleAddBacklink = (e: React.FormEvent) => {
        e.preventDefault();
        setRegisterSuccess(false);

        if (!newSourceUrl.trim() || !newAnchorText.trim()) {
            alert('Source URL and Anchor Text are required.');
            return;
        }

        const drVal = parseInt(newDR);
        if (isNaN(drVal) || drVal < 1 || drVal > 100) {
            alert('Domain Rating must be between 1 and 100.');
            return;
        }

        const newBl: BacklinkRecord = {
            id: `bl_${Date.now()}`,
            sourceUrl: newSourceUrl.trim(),
            anchorText: newAnchorText.trim(),
            targetUrl: newTargetUrl.trim(),
            domainRating: drVal,
            linkType: newLinkType,
            dateDiscovered: new Date().toISOString().split('T')[0]
        };

        const updated = [newBl, ...backlinks];
        setBacklinks(updated);
        localStorage.setItem('kiaan_backlinks', JSON.stringify(updated));

        setRegisterSuccess(true);
        addLog(`ADMIN: Registered new referring backlink: "${newBl.sourceUrl}" (${newBl.linkType}).`);

        // Reset
        setNewSourceUrl('');
        setNewAnchorText('');
        setNewDR('50');

        setTimeout(() => setRegisterSuccess(false), 2000);
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
            addLog('ADMIN: Authenticated successfully. Backlinks registry unlocked.');
        } else {
            setLoginError('Invalid administrator credentials.');
            addLog('ERROR: Admin login failed.');
        }
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        addLog('ADMIN: Session ended. Access restricted.');
    };

    // Calculations
    const getAvgDR = () => {
        if (backlinks.length === 0) return 0;
        const total = backlinks.reduce((acc, curr) => acc + curr.domainRating, 0);
        return Math.round(total / backlinks.length);
    };

    const getDoFollowPercentage = () => {
        if (backlinks.length === 0) return 0;
        const dofollow = backlinks.filter(b => b.linkType === 'DoFollow' || b.linkType === 'New').length;
        return Math.round((dofollow / backlinks.length) * 100);
    };

    // Filter & Sort
    const getFilteredBacklinks = () => {
        const filtered = backlinks.filter(b => 
            b.sourceUrl.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.anchorText.toLowerCase().includes(searchQuery.toLowerCase()) ||
            b.linkType.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return [...filtered].sort((a, b) => {
            if (sortBy === 'dr') return b.domainRating - a.domainRating;
            if (sortBy === 'date') return new Date(b.dateDiscovered).getTime() - new Date(a.dateDiscovered).getTime();
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
                            Backlink <span className="text-yellow-500">Monitor</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Audit external referring domains authority rankings, anchor tags relevance, and spam scores index.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            disabled={syncing}
                            onClick={handleCrawlerSync}
                            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black disabled:opacity-30 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md font-mono"
                        >
                            {syncing ? (
                                <RefreshCw size={12} className="animate-spin" />
                            ) : (
                                <Play size={12} fill="currentColor" />
                            )}
                            Sync Backlinks
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
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">Total Backlinks</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{backlinks.length} Links</h3>
                        <span className="text-[10px] text-zinc-500 block mt-2">Referring URLs</span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">Avg Domain Rating</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">DR {getAvgDR()}</h3>
                        <span className="text-[10px] text-zinc-500 block mt-2">Authority weight average</span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">DoFollow Equity</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{getDoFollowPercentage()}%</h3>
                        <span className="text-[10px] text-green-400 font-bold block mt-2">High authority equity links</span>
                    </GlassCard>

                    <GlassCard className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">Spam Score</span>
                        <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">1.0%</h3>
                        <span className="text-[10px] text-green-400 font-bold block mt-2">Extremely clean profile</span>
                    </GlassCard>
                </div>

                {/* --- BACKLINK VELOCITY GROWTH CHART --- */}
                <GlassCard className="p-6 border border-white/10 rounded-2xl mb-8 relative overflow-hidden text-left">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Globe size={16} className="text-yellow-500" /> Link Profile Expansion Velocity
                            </h3>
                            <p className="text-[10px] text-zinc-500 font-mono">Backlink growth chart trends over selected timeframe.</p>
                        </div>

                        {/* Timeframe selector buttons */}
                        <div className="flex bg-zinc-950 border border-white/5 rounded-lg p-0.5">
                            {(['7d', '30d', '90d'] as const).map(range => (
                                <button
                                    key={range}
                                    onClick={() => handleTimeframeChange(range)}
                                    className={`px-3 py-1 text-[10px] font-mono font-bold rounded uppercase transition-all ${
                                        timeframe === range ? 'bg-yellow-500 text-black' : 'text-zinc-400 hover:text-white'
                                    }`}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* SVG PATHS */}
                    <div className="relative w-full h-[200px] bg-black/40 border border-white/5 rounded-xl p-4 flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                            <line x1="50" y1="30" x2="650" y2="30" stroke="#1F1F1F" strokeDasharray="3" />
                            <line x1="50" y1="80" x2="650" y2="80" stroke="#1F1F1F" strokeDasharray="3" />
                            <line x1="50" y1="130" x2="650" y2="130" stroke="#1F1F1F" strokeDasharray="3" />
                            <line x1="50" y1="180" x2="650" y2="180" stroke="#333" />

                            <defs>
                                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#EAB308" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="#EAB308" stopOpacity="0.0" />
                                </linearGradient>
                            </defs>
                            
                            <motion.path 
                                key={`fill-${timeframe}`}
                                initial={{ d: TIME_GROWTH_PATHS['7d'].fill }}
                                animate={{ d: TIME_GROWTH_PATHS[timeframe].fill }}
                                transition={{ duration: 0.4 }}
                                fill="url(#chartGlow)"
                            />

                            <motion.path 
                                key={`line-${timeframe}`}
                                initial={{ d: TIME_GROWTH_PATHS['7d'].path }}
                                animate={{ d: TIME_GROWTH_PATHS[timeframe].path }}
                                transition={{ duration: 0.4 }}
                                fill="none"
                                stroke="#EAB308"
                                strokeWidth="2.5"
                            />

                            {TIME_GROWTH_PATHS[timeframe].points.map((pt, index) => (
                                <circle 
                                    key={index}
                                    cx={pt.x}
                                    cy={pt.y}
                                    r="4"
                                    fill="#000"
                                    stroke="#EAB308"
                                    strokeWidth="2"
                                />
                            ))}
                        </svg>
                    </div>
                </GlassCard>

                {/* --- BACKLINKS LEDGER TABLE & CRAWL CONFIGS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* LEFT COLUMN: BACKLINKS LEDGER */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-left flex justify-between items-end flex-wrap gap-4">
                            <div>
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Globe size={18} className="text-yellow-500" /> Backlinks Profile Ledger
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Catalog of active referring domain resources audit.</p>
                            </div>

                            {/* Search box & filter sort */}
                            <div className="flex gap-2 w-full sm:w-auto">
                                <div className="flex items-center gap-2 bg-zinc-950 border border-white/5 px-3 py-1.5 rounded-xl w-full sm:w-48">
                                    <Search size={12} className="text-zinc-500" />
                                    <input 
                                        type="text"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="Search by source/anchor..."
                                        className="bg-transparent border-0 text-xs text-white outline-none w-full placeholder-zinc-600"
                                    />
                                </div>
                                <select
                                    value={sortBy}
                                    onChange={e => setSortBy(e.target.value as any)}
                                    className="bg-zinc-950 border border-white/5 text-xs text-zinc-300 px-3 py-1.5 rounded-xl outline-none font-mono"
                                >
                                    <option value="dr">Sort by DR</option>
                                    <option value="date">Sort by Date</option>
                                </select>
                            </div>
                        </div>

                        {getFilteredBacklinks().length === 0 ? (
                            <div className="p-12 text-center text-zinc-500 font-mono border border-white/5 rounded-2xl bg-zinc-950/40">
                                No referring links profile matches your filter queries.
                            </div>
                        ) : (
                            <div className="overflow-x-auto border border-white/5 rounded-2xl bg-zinc-950/20">
                                <table className="w-full text-left font-mono text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 text-zinc-500 bg-zinc-950/40 uppercase text-[9px] tracking-wider select-none">
                                            <th className="p-4">Referring Source Page</th>
                                            <th className="p-4">Target Path</th>
                                            <th className="p-4">DR Authority</th>
                                            <th className="p-4 text-right">Link Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getFilteredBacklinks().map((bl) => (
                                            <tr key={bl.id} className="border-b border-white/5 last:border-0 hover:bg-zinc-900/10 transition-colors">
                                                <td className="p-4">
                                                    <a 
                                                        href={bl.sourceUrl} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-white hover:text-yellow-500 transition-colors block font-sans truncate max-w-[240px] flex items-center gap-1"
                                                    >
                                                        {bl.sourceUrl.replace('https://', '')} <ExternalLink size={10} className="shrink-0" />
                                                    </a>
                                                    <span className="text-[10px] text-zinc-500 block mt-0.5">Anchor: "{bl.anchorText}" | Date: {bl.dateDiscovered}</span>
                                                </td>
                                                <td className="p-4 text-zinc-400 max-w-[120px] truncate">
                                                    {bl.targetUrl.replace('https://kiaantechnology.com', '') || '/'}
                                                </td>
                                                <td className="p-4">
                                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                                                        DR {bl.domainRating}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-right">
                                                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider inline-block ${
                                                        bl.linkType === 'DoFollow' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                                                        bl.linkType === 'New' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 animate-pulse' :
                                                        bl.linkType === 'Lost' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                                                        'bg-zinc-800 text-zinc-500 border border-zinc-700/50'
                                                    }`}>
                                                        {bl.linkType}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: REGISTER NEW LINK */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Plus size={18} className="text-yellow-500" /> Backlink Auditor
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Register new referring links to checking queue list.</p>
                        </div>

                        {registerSuccess && (
                            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono flex items-center gap-2">
                                <CheckCircle2 size={14} /> Backlink added successfully!
                            </div>
                        )}

                        <GlassCard className="p-6 border border-white/10 rounded-2xl">
                            {isAdmin ? (
                                <form onSubmit={handleAddBacklink} className="space-y-4 text-left font-mono">
                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Source Page URL</label>
                                        <input 
                                            type="url"
                                            required
                                            value={newSourceUrl}
                                            onChange={e => setNewSourceUrl(e.target.value)}
                                            placeholder="https://techcrunch.com/article"
                                            className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Anchor Text</label>
                                        <input 
                                            type="text"
                                            required
                                            value={newAnchorText}
                                            onChange={e => setNewAnchorText(e.target.value)}
                                            placeholder="SaaS development agency"
                                            className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Target Page URL</label>
                                        <input 
                                            type="text"
                                            required
                                            value={newTargetUrl}
                                            onChange={e => setNewTargetUrl(e.target.value)}
                                            className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Domain Rating</label>
                                            <input 
                                                type="number"
                                                required
                                                value={newDR}
                                                onChange={e => setNewDR(e.target.value)}
                                                className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Link Type</label>
                                            <select
                                                value={newLinkType}
                                                onChange={e => setNewLinkType(e.target.value as any)}
                                                className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 text-xs text-zinc-300 rounded-xl outline-none focus:border-yellow-500"
                                            >
                                                <option value="DoFollow">DoFollow</option>
                                                <option value="NoFollow">NoFollow</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider shadow-md"
                                    >
                                        Audit Backlink
                                    </button>
                                </form>
                            ) : (
                                <div className="space-y-4 text-left font-mono text-xs text-zinc-400">
                                    <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl space-y-2">
                                        <div className="flex justify-between">
                                            <span>Referring Domains</span>
                                            <span className="text-yellow-500 font-bold">{backlinks.filter(b => b.linkType !== 'Lost').length}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Auditor Status</span>
                                            <span className="text-zinc-500">Live Crawl Active</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 font-sans leading-relaxed">
                                        Admin authentication is required to manually append references page targets to search crawler check queues.
                                    </p>
                                </div>
                            )}
                        </GlassCard>
                    </div>
                </div>

                {/* --- MONITORING TERMINAL LOGGER --- */}
                <div className="space-y-6 flex flex-col text-left">
                    <div className="flex justify-between items-end">
                        <div>
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Terminal size={18} className="text-yellow-500" /> Crawlers CLI Console
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Live logs verifying backlinks crawlers audits, indexing updates, and HTTP status codes.</p>
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
                                if (log.includes('CRAWL:')) color = 'text-cyan-400';
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
                                    <RefreshCw size={12} className="animate-spin" /> Crawling external link indexes... [{syncProgress}%]
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
                            <p className="text-xs text-zinc-500 font-mono mb-4">Provide credentials to unlock manual backlinks auditor.</p>

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
