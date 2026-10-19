"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Terminal, Settings, AlertCircle, CheckCircle2, 
    RefreshCw, Play, ShieldAlert, Lock, LogIn, LogOut,
    Eye, Link2, DollarSign, FileCode, Check, Copy, TrendingUp,
    Users, Search, Download, Calendar, Layers, ChevronRight,
    ArrowUpRight, Percent, BarChart
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';

interface LeadRecord {
    id: string;
    name: string;
    email: string;
    serviceRequested: string;
    budgetValue: number;
    source: string;
    status: 'Qualified' | 'Converted' | 'Contacted';
    dateAcquired: string;
}

interface SEOKeyword {
    keyword: string;
    clicks: number;
    impressions: number;
    ctr: number;
    position: number;
}

const DEFAULT_LEADS: LeadRecord[] = [
    {
        id: 'ld_1',
        name: 'Thomas Wayne',
        email: 'twayne@waynecorp.com',
        serviceRequested: 'MERN Custom SaaS',
        budgetValue: 1500,
        source: 'Google Search',
        status: 'Qualified',
        dateAcquired: '2026-07-20 | 11:30 AM'
    },
    {
        id: 'ld_2',
        name: 'Clara Oswald',
        email: 'clara@tardistravels.co.uk',
        serviceRequested: 'Enterprise ERP Setup',
        budgetValue: 2400,
        source: 'Affiliate Link',
        status: 'Converted',
        dateAcquired: '2026-07-22 | 04:15 PM'
    },
    {
        id: 'ld_3',
        name: 'Arthur Pendragon',
        email: 'arthur@camelotconsulting.org',
        serviceRequested: 'AI Automation Agent',
        budgetValue: 800,
        source: 'Google Search',
        status: 'Qualified',
        dateAcquired: '2026-07-25 | 09:45 AM'
    },
    {
        id: 'ld_4',
        name: 'Morgana Le Fay',
        email: 'morgana@avalontech.net',
        serviceRequested: 'API Customization',
        budgetValue: 1200,
        source: 'Direct Visit',
        status: 'Contacted',
        dateAcquired: '2026-07-27 | 02:20 PM'
    },
    {
        id: 'ld_5',
        name: 'Guinevere Vance',
        email: 'guinevere@lyonessestudios.com',
        serviceRequested: 'Web Development',
        budgetValue: 600,
        source: 'Partner Program',
        status: 'Contacted',
        dateAcquired: '2026-07-28 | 10:10 AM'
    }
];

const DEFAULT_KEYWORDS: SEOKeyword[] = [
    { keyword: 'enterprise workflow indore', clicks: 840, impressions: 3200, ctr: 26.2, position: 2.1 },
    { keyword: 'custom ERP software india', clicks: 620, impressions: 2800, ctr: 22.1, position: 3.4 },
    { keyword: 'telemedicine react portals', clicks: 430, impressions: 1900, ctr: 22.6, position: 4.2 },
    { keyword: 'SaaS product development indore', clicks: 310, impressions: 1500, ctr: 20.6, position: 5.6 }
];

const TIME_DATA_PATHS = {
    '7d': {
        path: 'M 50,150 L 150,120 L 250,140 L 350,90 L 450,110 L 550,60 L 650,40',
        fill: 'M 50,150 L 150,120 L 250,140 L 350,90 L 450,110 L 550,60 L 650,40 L 650,180 L 50,180 Z',
        impressions: '342k Clicks',
        avgCtr: '12.4%',
        leadsTotal: '42 Leads',
        points: [
            { x: 50, y: 150, val: 240 },
            { x: 150, y: 120, val: 310 },
            { x: 250, y: 140, val: 280 },
            { x: 350, y: 90, val: 420 },
            { x: 450, y: 110, val: 380 },
            { x: 550, y: 60, val: 560 },
            { x: 650, y: 40, val: 620 }
        ]
    },
    '30d': {
        path: 'M 50,130 L 150,110 L 250,150 L 350,80 L 450,120 L 550,70 L 650,50',
        fill: 'M 50,130 L 150,110 L 250,150 L 350,80 L 450,120 L 550,70 L 650,50 L 650,180 L 50,180 Z',
        impressions: '1.2M Clicks',
        avgCtr: '14.2%',
        leadsTotal: '184 Leads',
        points: [
            { x: 50, y: 130, val: 290 },
            { x: 150, y: 110, val: 340 },
            { x: 250, y: 150, val: 220 },
            { x: 350, y: 80, val: 490 },
            { x: 450, y: 120, val: 320 },
            { x: 550, y: 70, val: 510 },
            { x: 650, y: 50, val: 590 }
        ]
    },
    '90d': {
        path: 'M 50,140 L 150,100 L 250,130 L 350,70 L 450,100 L 550,50 L 650,30',
        fill: 'M 50,140 L 150,100 L 250,130 L 350,70 L 450,100 L 550,50 L 650,30 L 650,180 L 50,180 Z',
        impressions: '4.8M Clicks',
        avgCtr: '15.6%',
        leadsTotal: '592 Leads',
        points: [
            { x: 50, y: 140, val: 260 },
            { x: 150, y: 100, val: 390 },
            { x: 250, y: 130, val: 310 },
            { x: 350, y: 70, val: 540 },
            { x: 450, y: 100, val: 380 },
            { x: 550, y: 50, val: 610 },
            { x: 650, y: 30, val: 690 }
        ]
    }
};

export default function AnalyticsDashboard() {
    const [leads, setLeads] = useState<LeadRecord[]>([]);
    const [keywords, setKeywords] = useState<SEOKeyword[]>([]);
    const [leadsTarget, setLeadsTarget] = useState(500);
    const [isLoading, setIsLoading] = useState(true);

    // Active timeframe filter
    const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d'>('30d');

    // Admin Auth State
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Leads search query
    const [searchQuery, setSearchQuery] = useState('');

    // Configuration Inputs
    const [targetInput, setTargetInput] = useState('500');
    const [configSuccess, setConfigSuccess] = useState(false);

    // Simulated Report building state
    const [buildingReport, setBuildingReport] = useState(false);
    const [reportProgress, setReportProgress] = useState(0);

    // Monospace Terminal Console Logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load initial states from Local Storage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Leads Setup
            const storedLeads = localStorage.getItem('kiaan_analytics_leads');
            if (storedLeads) {
                try {
                    setLeads(JSON.parse(storedLeads));
                } catch (e) {
                    setLeads(DEFAULT_LEADS);
                }
            } else {
                localStorage.setItem('kiaan_analytics_leads', JSON.stringify(DEFAULT_LEADS));
                setLeads(DEFAULT_LEADS);
            }

            // Target Quota Setup
            const storedTarget = localStorage.getItem('kiaan_analytics_target');
            if (storedTarget) {
                setLeadsTarget(parseInt(storedTarget) || 500);
                setTargetInput(storedTarget);
            } else {
                localStorage.setItem('kiaan_analytics_target', '500');
            }

            setKeywords(DEFAULT_KEYWORDS);
            setIsLoading(false);

            addLog('SYSTEM: Analytics & Organic Traffic Dashboard online.');
            addLog('DATABASE: Read ledger data values from client local index.');
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

    // Filter Trigger
    const handleTimeframeChange = (val: '7d' | '30d' | '90d') => {
        setTimeframe(val);
        addLog(`FILTER: Recalculating charts trends for timeframe: ${val.toUpperCase()}. Redrawing SVG paths.`);
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
            addLog('ADMIN: Authenticated successfully. Dashboard metric variables unlocked.');
        } else {
            setLoginError('Invalid administrator credentials.');
            addLog('ERROR: Admin login failed - credentials mismatch.');
        }
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        addLog('ADMIN: Session ended. Access restricted to default views.');
    };

    const handleUpdateSettings = (e: React.FormEvent) => {
        e.preventDefault();
        setConfigSuccess(false);

        const val = parseInt(targetInput);
        if (isNaN(val) || val < 50 || val > 10000) {
            alert('Target quota must be between 50 and 10,000.');
            return;
        }

        setLeadsTarget(val);
        localStorage.setItem('kiaan_analytics_target', val.toString());
        setConfigSuccess(true);
        addLog(`ADMIN: Leads target target updated to ${val} acquisitions per quarter.`);
        
        setTimeout(() => setConfigSuccess(false), 2000);
    };

    // Simulated Report Run Action
    const handleGenerateReport = () => {
        setBuildingReport(true);
        setReportProgress(0);
        addLog('SYSTEM: Initiating automated SEO and Leads reconciliation cycle...');

        const interval = setInterval(() => {
            setReportProgress(prev => {
                const next = prev + 25;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setBuildingReport(false);
                        addLog('SUCCESS: Audit compilation complete. Analytics reports bundle downloaded (simulated PDF export).');
                    }, 200);
                    return 100;
                }

                if (next === 25) addLog('REST: Fetching keywords impressions stats from Search Console...');
                if (next === 50) addLog('DATABASE: Calculating CTR conversions ratios on client profiles...');
                if (next === 75) addLog('SUCCESS: Generated system integrity health score [98.6%].');

                return next;
            });
        }, 350);
    };

    // Filter leads on search query
    const getFilteredLeads = () => {
        return leads.filter(ld => 
            ld.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ld.serviceRequested.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ld.status.toLowerCase().includes(searchQuery.toLowerCase())
        );
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
                            Analytics <span className="text-yellow-500">Dashboard</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Monitor search engine visibility indexes, audit customer leads channels, and compile conversion metrics.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            disabled={buildingReport}
                            onClick={handleGenerateReport}
                            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black disabled:opacity-20 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md font-mono"
                        >
                            {buildingReport ? (
                                <RefreshCw size={12} className="animate-spin" />
                            ) : (
                                <Download size={12} />
                            )}
                            Compile Report
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

                {/* --- STATS ANALYTICS RIBBON --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
                    {[
                        { label: 'Organic Traffic', val: TIME_DATA_PATHS[timeframe].impressions, desc: 'Google impressions clicks', icon: <Search size={14} className="text-yellow-500" /> },
                        { label: 'Leads Received', val: TIME_DATA_PATHS[timeframe].leadsTotal, desc: 'Strategy call forms', icon: <Users size={14} className="text-yellow-500" /> },
                        { label: 'Conversion CTR', val: TIME_DATA_PATHS[timeframe].avgCtr, desc: 'Search position CTR rate', icon: <Percent size={14} className="text-yellow-500" /> },
                        { label: 'Quota Target', val: `${leads.length}/${leadsTarget}`, desc: 'Leads conversions score', icon: <BarChart size={14} className="text-yellow-500" /> }
                    ].map((stat, idx) => (
                        <GlassCard key={idx} className="p-4 border border-white/10 rounded-2xl flex flex-col justify-between">
                            <div>
                                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                                    {stat.icon} {stat.label}
                                </span>
                                <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{stat.val}</h3>
                            </div>
                            <span className="text-[10px] text-zinc-400 font-sans block mt-1.5">{stat.desc}</span>
                        </GlassCard>
                    ))}
                </div>

                {/* --- INTERACTIVE SVG CHART SECTION --- */}
                <GlassCard className="p-6 border border-white/10 rounded-2xl mb-8 relative overflow-hidden text-left">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <TrendingUp size={16} className="text-yellow-500" /> Search Performance Trends
                            </h3>
                            <p className="text-[10px] text-zinc-500 font-mono">Organic clicks trajectory mapped over target timeframe.</p>
                        </div>

                        {/* Date Range selectors */}
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

                    {/* SVG GRAPH RENDER */}
                    <div className="relative w-full h-[220px] bg-black/40 border border-white/5 rounded-xl p-4 flex items-center justify-center">
                        <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                            {/* Grids */}
                            <line x1="50" y1="30" x2="650" y2="30" stroke="#1F1F1F" strokeDasharray="3" />
                            <line x1="50" y1="80" x2="650" y2="80" stroke="#1F1F1F" strokeDasharray="3" />
                            <line x1="50" y1="130" x2="650" y2="130" stroke="#1F1F1F" strokeDasharray="3" />
                            <line x1="50" y1="180" x2="650" y2="180" stroke="#333" />

                            {/* Background fill gradient */}
                            <defs>
                                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#EAB308" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="#EAB308" stopOpacity="0.0" />
                                </linearGradient>
                            </defs>
                            
                            <motion.path 
                                key={`fill-${timeframe}`}
                                initial={{ d: TIME_DATA_PATHS['7d'].fill }}
                                animate={{ d: TIME_DATA_PATHS[timeframe].fill }}
                                transition={{ duration: 0.4 }}
                                fill="url(#chartGlow)"
                            />

                            {/* Vector line */}
                            <motion.path 
                                key={`line-${timeframe}`}
                                initial={{ d: TIME_DATA_PATHS['7d'].path }}
                                animate={{ d: TIME_DATA_PATHS[timeframe].path }}
                                transition={{ duration: 0.4 }}
                                fill="none"
                                stroke="#EAB308"
                                strokeWidth="2.5"
                            />

                            {/* Vector Dots */}
                            {TIME_DATA_PATHS[timeframe].points.map((pt, index) => (
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
                        
                        {/* Custom Axis Labels */}
                        <div className="absolute bottom-2 left-6 right-6 flex justify-between text-[8px] font-mono text-zinc-600 select-none">
                            <span>Interval Start</span>
                            <span>Interval Mid</span>
                            <span>Today</span>
                        </div>
                    </div>
                </GlassCard>

                {/* --- LEADS LEDGER TABLE & SEO KEYWORDS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* LEFT COLUMN: PIPELINE LEADS TABLE */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-left flex justify-between items-end flex-wrap gap-4">
                            <div>
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Users size={18} className="text-yellow-500" /> Conversions Ledger
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Catalog of recorded project leads submissions.</p>
                            </div>

                            {/* Search filter */}
                            <div className="flex items-center gap-2 bg-zinc-950 border border-white/5 px-3 py-1.5 rounded-xl w-full sm:w-60">
                                <Search size={12} className="text-zinc-500" />
                                <input 
                                    type="text"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    placeholder="Search by name or status..."
                                    className="bg-transparent border-0 text-xs text-white outline-none w-full placeholder-zinc-600"
                                />
                            </div>
                        </div>

                        {getFilteredLeads().length === 0 ? (
                            <div className="p-12 text-center text-zinc-500 font-mono border border-white/5 rounded-2xl bg-zinc-950/40">
                                No leads record matches your search query.
                            </div>
                        ) : (
                            <div className="overflow-x-auto border border-white/5 rounded-2xl bg-zinc-950/20">
                                <table className="w-full text-left font-mono text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10 text-zinc-500 bg-zinc-950/40 uppercase text-[9px] tracking-wider select-none">
                                            <th className="p-4">Contact</th>
                                            <th className="p-4">Service</th>
                                            <th className="p-4">Budget</th>
                                            <th className="p-4 text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getFilteredLeads().map((ld) => (
                                            <tr key={ld.id} className="border-b border-white/5 last:border-0 hover:bg-zinc-900/10 transition-colors">
                                                <td className="p-4">
                                                    <strong className="text-white block font-sans">{ld.name}</strong>
                                                    <span className="text-[10px] text-zinc-500 block mt-0.5">{ld.email}</span>
                                                </td>
                                                <td className="p-4 text-zinc-300">
                                                    {ld.serviceRequested}
                                                    <span className="text-[9px] text-zinc-600 block mt-0.5">{ld.source}</span>
                                                </td>
                                                <td className="p-4 text-yellow-500 font-bold">${ld.budgetValue}</td>
                                                <td className="p-4 text-right">
                                                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider inline-block ${
                                                        ld.status === 'Converted' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                                                        ld.status === 'Qualified' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                                                        'bg-zinc-800 text-zinc-500 border border-zinc-700/50'
                                                    }`}>
                                                        {ld.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: SEO KEYWORDS & POSITION */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Search size={18} className="text-yellow-500" /> Organic Keywords
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Top queries driving search impressions.</p>
                        </div>

                        <div className="space-y-3">
                            {keywords.map((kw) => (
                                <GlassCard key={kw.keyword} className="p-4 border border-white/10 rounded-2xl flex justify-between items-center text-left font-mono">
                                    <div>
                                        <h4 className="text-xs font-bold text-white mb-1 leading-normal truncate max-w-[160px]">{kw.keyword}</h4>
                                        <span className="text-[10px] text-zinc-500">Impressions: {kw.impressions}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-yellow-500 font-bold block text-xs">Pos: #{kw.position}</span>
                                        <span className="text-[9px] text-zinc-500">{kw.clicks} Clicks</span>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- CONFIGURATION CONTROLS & MONITORING LOG TERMINAL --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT COLUMN: TARGET SETTINGS */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Settings size={18} className="text-yellow-500" /> Dashboard Settings
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Modify target acquisition constraints.</p>
                        </div>

                        <GlassCard className="p-6 border border-white/10 rounded-2xl space-y-4 text-xs font-mono text-left">
                            {isAdmin ? (
                                <form onSubmit={handleUpdateSettings} className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Leads Target Target</label>
                                        <div className="flex gap-2">
                                            <input 
                                                type="number"
                                                required
                                                value={targetInput}
                                                onChange={e => setTargetInput(e.target.value)}
                                                className="w-24 px-3 py-1.5 bg-zinc-950 border border-white/5 text-xs text-white rounded-xl outline-none"
                                            />
                                            <button 
                                                type="submit"
                                                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-1.5 rounded-xl text-xs font-bold font-mono shadow-md"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                    {configSuccess && (
                                        <p className="text-[9px] text-green-400 font-mono mt-1 flex items-center gap-1">
                                            <CheckCircle2 size={10} /> Metrics target updated.
                                        </p>
                                    )}
                                </form>
                            ) : (
                                <div className="space-y-3">
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Dashboard metrics parameters</span>
                                    <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl space-y-2">
                                        <div className="flex justify-between text-zinc-300">
                                            <span>Leads Target</span>
                                            <span className="text-yellow-500 font-bold">{leadsTarget} Acquisitions</span>
                                        </div>
                                        <div className="flex justify-between text-zinc-300">
                                            <span>Traffic Multiplier</span>
                                            <span className="text-zinc-500">1.0x (Raw logs)</span>
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 font-sans leading-relaxed pt-1">
                                        Admin authentication is required to configure target parameters.
                                    </p>
                                </div>
                            )}
                        </GlassCard>
                    </div>

                    {/* RIGHT COLUMN: CLI LOGGER */}
                    <div className="lg:col-span-2 space-y-6 flex flex-col">
                        <div className="flex justify-between items-end">
                            <div className="text-left">
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Terminal size={18} className="text-yellow-500" /> Performance Terminal
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Live logs of DB reads, keywords intercepts, and reports compiles.</p>
                            </div>
                            <button 
                                onClick={clearLogs}
                                className="text-[10px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest"
                            >
                                Clear Console
                            </button>
                        </div>

                        {/* Monospace terminal console logger */}
                        <div className="flex-1 bg-[#030303] border border-white/10 rounded-2xl p-5 font-mono text-[11px] text-zinc-400 h-[280px] overflow-y-auto flex flex-col justify-between scrollbar-hide shadow-inner text-left">
                            <div className="space-y-1">
                                {logs.map((log, idx) => {
                                    let color = 'text-zinc-400';
                                    if (log.includes('SUCCESS:')) color = 'text-green-400';
                                    if (log.includes('ERROR:')) color = 'text-red-400';
                                    if (log.includes('WARNING:')) color = 'text-yellow-500';
                                    if (log.includes('SYSTEM:')) color = 'text-zinc-500';
                                    if (log.includes('ADMIN:')) color = 'text-cyan-400';
                                    if (log.includes('REST:')) color = 'text-zinc-500';
                                    if (log.includes('DATABASE:')) color = 'text-purple-400';
                                    if (log.includes('FILTER:')) color = 'text-purple-400';
                                    return (
                                        <div key={idx} className={`${color} leading-relaxed break-all`}>
                                            {log}
                                        </div>
                                    );
                                })}
                                {buildingReport && (
                                    <div className="text-yellow-500 animate-pulse flex items-center gap-2 mt-2">
                                        <RefreshCw size={12} className="animate-spin" /> Compiling diagnostics reports... [{reportProgress}%]
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
                            <p className="text-xs text-zinc-500 font-mono mb-4">Provide credentials to unlock metric quota configurations.</p>

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
