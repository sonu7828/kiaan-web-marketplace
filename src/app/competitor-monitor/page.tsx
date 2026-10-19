"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal, RefreshCw, Play, Lock, LogIn, LogOut,
    Search, TrendingUp, Plus, ExternalLink, Globe,
    CheckCircle2, AlertCircle, Eye, Shield, Zap,
    BarChart3, Users, ArrowUpRight, ArrowDownRight, Minus,
    Bell, Activity, Code, DollarSign, Target, Layers
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import React from 'react';

/* ─────────────────── Types ─────────────────── */

interface CompetitorProfile {
    id: string;
    name: string;
    domain: string;
    domainRating: number;
    monthlyTraffic: string;
    techStack: string[];
    backlinks: number;
    status: 'Active' | 'Paused' | 'Alert';
    pricingTiers: { starter: number; pro: number; enterprise: number };
}

interface KeywordOverlap {
    keyword: string;
    kiaanPosition: number;
    competitorName: string;
    competitorPosition: number;
    delta: number;
    volume: number;
}

interface AlertEvent {
    id: string;
    timestamp: string;
    competitor: string;
    type: 'pricing' | 'backlink' | 'tech' | 'traffic' | 'page';
    message: string;
}

/* ─────────────────── Seed Data ─────────────────── */

const DEFAULT_COMPETITORS: CompetitorProfile[] = [
    {
        id: 'comp_1',
        name: 'TechForge Solutions',
        domain: 'techforgesolutions.com',
        domainRating: 58,
        monthlyTraffic: '45K',
        techStack: ['React', 'Node.js', 'AWS', 'MongoDB'],
        backlinks: 1240,
        status: 'Active',
        pricingTiers: { starter: 49, pro: 149, enterprise: 499 }
    },
    {
        id: 'comp_2',
        name: 'CloudNine Digital',
        domain: 'cloudninedigital.io',
        domainRating: 52,
        monthlyTraffic: '32K',
        techStack: ['Vue.js', 'Python', 'GCP', 'PostgreSQL'],
        backlinks: 890,
        status: 'Active',
        pricingTiers: { starter: 39, pro: 129, enterprise: 449 }
    },
    {
        id: 'comp_3',
        name: 'PixelCraft Agency',
        domain: 'pixelcraftagency.com',
        domainRating: 45,
        monthlyTraffic: '28K',
        techStack: ['Next.js', 'Django', 'Azure', 'Redis'],
        backlinks: 650,
        status: 'Alert',
        pricingTiers: { starter: 59, pro: 179, enterprise: 599 }
    },
    {
        id: 'comp_4',
        name: 'NovaSoft Labs',
        domain: 'novasoftlabs.in',
        domainRating: 38,
        monthlyTraffic: '18K',
        techStack: ['Angular', 'Java', 'AWS', 'MySQL'],
        backlinks: 420,
        status: 'Paused',
        pricingTiers: { starter: 29, pro: 99, enterprise: 349 }
    }
];

const DEFAULT_KEYWORDS: KeywordOverlap[] = [
    { keyword: 'custom software development india', kiaanPosition: 3, competitorName: 'TechForge Solutions', competitorPosition: 7, delta: 4, volume: 2400 },
    { keyword: 'saas development company', kiaanPosition: 5, competitorName: 'CloudNine Digital', competitorPosition: 4, delta: -1, volume: 1800 },
    { keyword: 'erp software indore', kiaanPosition: 1, competitorName: 'NovaSoft Labs', competitorPosition: 12, delta: 11, volume: 880 },
    { keyword: 'crm solutions for startups', kiaanPosition: 8, competitorName: 'PixelCraft Agency', competitorPosition: 6, delta: -2, volume: 1400 },
    { keyword: 'mobile app development agency', kiaanPosition: 4, competitorName: 'TechForge Solutions', competitorPosition: 3, delta: -1, volume: 3200 },
    { keyword: 'ai automation software', kiaanPosition: 2, competitorName: 'CloudNine Digital', competitorPosition: 9, delta: 7, volume: 2100 },
    { keyword: 'enterprise web application', kiaanPosition: 6, competitorName: 'PixelCraft Agency', competitorPosition: 5, delta: -1, volume: 1600 },
    { keyword: 'white label software partner', kiaanPosition: 3, competitorName: 'NovaSoft Labs', competitorPosition: 15, delta: 12, volume: 720 },
];

const DEFAULT_ALERTS: AlertEvent[] = [
    { id: 'al_1', timestamp: '2026-07-29T08:12:00Z', competitor: 'TechForge Solutions', type: 'pricing', message: 'Pro plan price dropped from $179 → $149. Aggressive repositioning detected.' },
    { id: 'al_2', timestamp: '2026-07-28T14:30:00Z', competitor: 'PixelCraft Agency', type: 'page', message: 'New landing page detected: /services/ai-chatbot-integration. Expanding AI service offerings.' },
    { id: 'al_3', timestamp: '2026-07-27T09:45:00Z', competitor: 'CloudNine Digital', type: 'backlink', message: 'Gained 42 new backlinks in 24h. Possible PR campaign or guest post surge.' },
    { id: 'al_4', timestamp: '2026-07-26T16:20:00Z', competitor: 'NovaSoft Labs', type: 'tech', message: 'Tech stack change detected: Migrated from Angular to Next.js. Major replatform underway.' },
    { id: 'al_5', timestamp: '2026-07-25T11:00:00Z', competitor: 'TechForge Solutions', type: 'traffic', message: 'Monthly traffic spiked +18% (38K → 45K). Likely SEO or paid campaign gains.' },
];

const KIAAN_BACKLINKS = 1580;
const KIAAN_DR = 42;
const KIAAN_PRICING = { starter: 0, pro: 99, enterprise: 399 };

/* ─────────────────── SVG Chart Data ─────────────────── */

const TRAFFIC_CHART: Record<string, { kiaan: string; competitor: string; kiaanFill: string; competitorFill: string; points: { x: number; ky: number; cy: number }[] }> = {
    '7d': {
        kiaan: 'M 50,120 L 150,100 L 250,110 L 350,90 L 450,95 L 550,70 L 650,55',
        competitor: 'M 50,130 L 150,140 L 250,125 L 350,135 L 450,120 L 550,110 L 650,95',
        kiaanFill: 'M 50,120 L 150,100 L 250,110 L 350,90 L 450,95 L 550,70 L 650,55 L 650,180 L 50,180 Z',
        competitorFill: 'M 50,130 L 150,140 L 250,125 L 350,135 L 450,120 L 550,110 L 650,95 L 650,180 L 50,180 Z',
        points: [
            { x: 50, ky: 120, cy: 130 }, { x: 150, ky: 100, cy: 140 }, { x: 250, ky: 110, cy: 125 },
            { x: 350, ky: 90, cy: 135 }, { x: 450, ky: 95, cy: 120 }, { x: 550, ky: 70, cy: 110 }, { x: 650, ky: 55, cy: 95 }
        ]
    },
    '30d': {
        kiaan: 'M 50,130 L 150,110 L 250,95 L 350,80 L 450,85 L 550,60 L 650,40',
        competitor: 'M 50,140 L 150,130 L 250,135 L 350,115 L 450,110 L 550,100 L 650,85',
        kiaanFill: 'M 50,130 L 150,110 L 250,95 L 350,80 L 450,85 L 550,60 L 650,40 L 650,180 L 50,180 Z',
        competitorFill: 'M 50,140 L 150,130 L 250,135 L 350,115 L 450,110 L 550,100 L 650,85 L 650,180 L 50,180 Z',
        points: [
            { x: 50, ky: 130, cy: 140 }, { x: 150, ky: 110, cy: 130 }, { x: 250, ky: 95, cy: 135 },
            { x: 350, ky: 80, cy: 115 }, { x: 450, ky: 85, cy: 110 }, { x: 550, ky: 60, cy: 100 }, { x: 650, ky: 40, cy: 85 }
        ]
    },
    '90d': {
        kiaan: 'M 50,145 L 150,120 L 250,100 L 350,75 L 450,70 L 550,50 L 650,30',
        competitor: 'M 50,150 L 150,140 L 250,130 L 350,120 L 450,105 L 550,95 L 650,80',
        kiaanFill: 'M 50,145 L 150,120 L 250,100 L 350,75 L 450,70 L 550,50 L 650,30 L 650,180 L 50,180 Z',
        competitorFill: 'M 50,150 L 150,140 L 250,130 L 350,120 L 450,105 L 550,95 L 650,80 L 650,180 L 50,180 Z',
        points: [
            { x: 50, ky: 145, cy: 150 }, { x: 150, ky: 120, cy: 140 }, { x: 250, ky: 100, cy: 130 },
            { x: 350, ky: 75, cy: 120 }, { x: 450, ky: 70, cy: 105 }, { x: 550, ky: 50, cy: 95 }, { x: 650, ky: 30, cy: 80 }
        ]
    }
};

/* ═══════════════════ COMPONENT ═══════════════════ */

export default function CompetitorMonitor() {
    const [competitors, setCompetitors] = useState<CompetitorProfile[]>([]);
    const [keywords] = useState<KeywordOverlap[]>(DEFAULT_KEYWORDS);
    const [alerts] = useState<AlertEvent[]>(DEFAULT_ALERTS);
    const [isLoading, setIsLoading] = useState(true);

    const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d'>('30d');
    const [syncing, setSyncing] = useState(false);
    const [syncProgress, setSyncProgress] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<'dr' | 'traffic' | 'backlinks'>('dr');

    // Admin
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Register form
    const [newName, setNewName] = useState('');
    const [newDomain, setNewDomain] = useState('');
    const [newDR, setNewDR] = useState('40');
    const [newTraffic, setNewTraffic] = useState('10K');
    const [newTech, setNewTech] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState(false);

    // Terminal
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('kiaan_competitors');
            if (stored) {
                try { setCompetitors(JSON.parse(stored)); } catch { setCompetitors(DEFAULT_COMPETITORS); }
            } else {
                localStorage.setItem('kiaan_competitors', JSON.stringify(DEFAULT_COMPETITORS));
                setCompetitors(DEFAULT_COMPETITORS);
            }
            setIsLoading(false);
            addLog('SYSTEM: Competitor Intelligence Dashboard online.');
            addLog('DATABASE: Loaded competitor profiles from client storage.');
        }
    }, []);

    useEffect(() => {
        consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    const addLog = (message: string) => {
        const ts = new Date().toISOString().split('T')[1].slice(0, 8);
        setLogs(prev => [...prev, `[${ts}] ${message}`]);
    };

    const clearLogs = () => {
        setLogs([`[${new Date().toISOString().split('T')[1].slice(0, 8)}] SYSTEM: Console cleared.`]);
    };

    /* ─── Crawler Sync Simulator ─── */
    const handleCrawlerSync = () => {
        if (syncing) return;
        setSyncing(true);
        setSyncProgress(0);
        addLog('CRAWL: Initiating competitor domain scans across Ahrefs, SEMrush, BuiltWith indices...');

        const steps = [
            'API: Authenticating crawler API tokens...',
            `SCAN: Scanning ${competitors.length} competitor domains for pricing page changes...`,
            'TECH: Running BuiltWith fingerprint detection on competitor stacks...',
            'BACKLINKS: Comparing referring domain counts & DR authority shifts...',
            'KEYWORDS: Cross-referencing SERP overlap with competitor keyword portfolios...',
            'ALERTS: Evaluating change deltas and generating alert events...',
            'SUCCESS: Full competitor intelligence sync completed. All profiles refreshed.'
        ];

        let step = 0;
        const interval = setInterval(() => {
            if (step < steps.length) {
                addLog(steps[step]);
                setSyncProgress(Math.round(((step + 1) / steps.length) * 100));
                step++;
            } else {
                clearInterval(interval);
                setSyncing(false);
            }
        }, 400);
    };

    /* ─── Admin Auth ─── */
    const handleAdminLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');
        if (adminEmail === 'admin@kiaan.tech' && adminPassword === 'admin123') {
            setIsAdmin(true);
            setShowAdminLogin(false);
            setAdminEmail('');
            setAdminPassword('');
            addLog('ADMIN: Authenticated. Competitor registry unlocked.');
        } else {
            setLoginError('Invalid administrator credentials.');
            addLog('ERROR: Admin login failed — bad credentials.');
        }
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        addLog('ADMIN: Session ended.');
    };

    /* ─── Add Competitor ─── */
    const handleAddCompetitor = (e: React.FormEvent) => {
        e.preventDefault();
        setRegisterSuccess(false);
        if (!newName.trim() || !newDomain.trim()) { alert('Name and Domain are required.'); return; }
        const dr = parseInt(newDR);
        if (isNaN(dr) || dr < 1 || dr > 100) { alert('DR must be between 1 and 100.'); return; }

        const newComp: CompetitorProfile = {
            id: `comp_${Date.now()}`,
            name: newName.trim(),
            domain: newDomain.trim(),
            domainRating: dr,
            monthlyTraffic: newTraffic.trim() || '0',
            techStack: newTech.split(',').map(t => t.trim()).filter(Boolean),
            backlinks: 0,
            status: 'Active',
            pricingTiers: { starter: 0, pro: 0, enterprise: 0 }
        };

        const updated = [newComp, ...competitors];
        setCompetitors(updated);
        localStorage.setItem('kiaan_competitors', JSON.stringify(updated));
        setRegisterSuccess(true);
        addLog(`ADMIN: Registered new competitor "${newComp.name}" (${newComp.domain}).`);
        setNewName(''); setNewDomain(''); setNewDR('40'); setNewTraffic('10K'); setNewTech('');
        setTimeout(() => setRegisterSuccess(false), 2500);
    };

    /* ─── Computed helpers ─── */
    const avgCompDR = competitors.length > 0 ? Math.round(competitors.reduce((s, c) => s + c.domainRating, 0) / competitors.length) : 0;
    const activeAlerts = alerts.filter(a => a.type === 'pricing' || a.type === 'traffic').length;

    const getFilteredCompetitors = () => {
        const filtered = competitors.filter(c =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.status.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return [...filtered].sort((a, b) => {
            if (sortBy === 'dr') return b.domainRating - a.domainRating;
            if (sortBy === 'backlinks') return b.backlinks - a.backlinks;
            return parseInt(b.monthlyTraffic) - parseInt(a.monthlyTraffic);
        });
    };

    const getAlertIcon = (type: string) => {
        switch (type) {
            case 'pricing': return <DollarSign size={12} className="text-yellow-500" />;
            case 'backlink': return <Layers size={12} className="text-cyan-400" />;
            case 'tech': return <Code size={12} className="text-purple-400" />;
            case 'traffic': return <TrendingUp size={12} className="text-green-400" />;
            case 'page': return <Globe size={12} className="text-blue-400" />;
            default: return <Bell size={12} className="text-zinc-400" />;
        }
    };

    const chartData = TRAFFIC_CHART[timeframe];

    /* ═══════════════════ RENDER ═══════════════════ */

    return (
        <main className="min-h-screen bg-black text-white relative pt-24 pb-12 font-sans overflow-x-hidden">
            {/* Ambient glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">

                {/* ═══ HEADER ═══ */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/5 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-2">
                            Competitor <span className="text-yellow-500">Intelligence</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Monitor competitor domains, pricing shifts, backlink gaps, keyword overlaps, and technology changes in real time.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button disabled={syncing} onClick={handleCrawlerSync}
                            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black disabled:opacity-30 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md font-mono">
                            {syncing ? <RefreshCw size={12} className="animate-spin" /> : <Play size={12} fill="currentColor" />}
                            Sync Competitors
                        </button>
                        {isAdmin ? (
                            <button onClick={handleAdminLogout}
                                className="px-4 py-2 border border-zinc-800 hover:border-red-500 text-zinc-400 hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 font-mono">
                                <LogOut size={12} /> Log Out
                            </button>
                        ) : (
                            <button onClick={() => setShowAdminLogin(true)}
                                className="px-4 py-2 bg-zinc-900 border border-white/10 hover:border-yellow-500 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 font-mono">
                                <LogIn size={12} /> Admin
                            </button>
                        )}
                    </div>
                </div>

                {/* ═══ STATS RIBBON ═══ */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 font-mono">
                    {[
                        { label: 'Competitors Tracked', value: `${competitors.length}`, sub: 'Active profiles', icon: <Users size={14} className="text-yellow-500" /> },
                        { label: 'Avg Competitor DR', value: `DR ${avgCompDR}`, sub: `Kiaan: DR ${KIAAN_DR}`, icon: <Shield size={14} className="text-yellow-500" /> },
                        { label: 'Keyword Overlaps', value: `${keywords.length}`, sub: 'Shared SERP terms', icon: <Target size={14} className="text-yellow-500" /> },
                        { label: 'Active Alerts', value: `${activeAlerts}`, sub: 'Pricing & traffic', icon: <Bell size={14} className="text-yellow-500" /> },
                    ].map((stat, i) => (
                        <GlassCard key={i} className="p-4 border border-white/10 rounded-2xl text-left">
                            <div className="flex items-center gap-2 mb-1">
                                {stat.icon}
                                <span className="text-[9px] text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                            </div>
                            <h3 className="text-xl font-display font-black text-white uppercase">{stat.value}</h3>
                            <span className="text-[10px] text-zinc-500 block mt-1">{stat.sub}</span>
                        </GlassCard>
                    ))}
                </div>

                {/* ═══ TRAFFIC COMPARISON SVG CHART ═══ */}
                <GlassCard className="p-6 border border-white/10 rounded-2xl mb-8 relative overflow-hidden text-left">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Activity size={16} className="text-yellow-500" /> Traffic Comparison — Kiaan vs. Top Competitor
                            </h3>
                            <p className="text-[10px] text-zinc-500 font-mono">Dual-line trend chart comparing organic traffic velocity.</p>
                        </div>
                        <div className="flex bg-zinc-950 border border-white/5 rounded-lg p-0.5">
                            {(['7d', '30d', '90d'] as const).map(range => (
                                <button key={range} onClick={() => { setTimeframe(range); addLog(`FILTER: Chart redrawn for ${range} timeframe.`); }}
                                    className={`px-3 py-1 text-[10px] font-mono font-bold rounded uppercase transition-all ${timeframe === range ? 'bg-yellow-500 text-black' : 'text-zinc-400 hover:text-white'}`}>
                                    {range}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative w-full h-[200px] bg-black/40 border border-white/5 rounded-xl p-4">
                        <svg className="w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="none">
                            <line x1="50" y1="30" x2="650" y2="30" stroke="#1F1F1F" strokeDasharray="3" />
                            <line x1="50" y1="80" x2="650" y2="80" stroke="#1F1F1F" strokeDasharray="3" />
                            <line x1="50" y1="130" x2="650" y2="130" stroke="#1F1F1F" strokeDasharray="3" />
                            <line x1="50" y1="180" x2="650" y2="180" stroke="#333" />

                            <defs>
                                <linearGradient id="kiaanGlow" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#EAB308" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#EAB308" stopOpacity="0.0" />
                                </linearGradient>
                                <linearGradient id="compGlow" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.12" />
                                    <stop offset="100%" stopColor="#EF4444" stopOpacity="0.0" />
                                </linearGradient>
                            </defs>

                            <motion.path key={`kf-${timeframe}`} initial={{ opacity: 0 }} animate={{ opacity: 1, d: chartData.kiaanFill }} transition={{ duration: 0.5 }} fill="url(#kiaanGlow)" />
                            <motion.path key={`cf-${timeframe}`} initial={{ opacity: 0 }} animate={{ opacity: 1, d: chartData.competitorFill }} transition={{ duration: 0.5 }} fill="url(#compGlow)" />
                            <motion.path key={`kl-${timeframe}`} animate={{ d: chartData.kiaan }} transition={{ duration: 0.5 }} fill="none" stroke="#EAB308" strokeWidth="2.5" />
                            <motion.path key={`cl-${timeframe}`} animate={{ d: chartData.competitor }} transition={{ duration: 0.5 }} fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="6 3" />

                            {chartData.points.map((pt, i) => (
                                <React.Fragment key={i}>
                                    <circle cx={pt.x} cy={pt.ky} r="3.5" fill="#000" stroke="#EAB308" strokeWidth="2" />
                                    <circle cx={pt.x} cy={pt.cy} r="3" fill="#000" stroke="#EF4444" strokeWidth="1.5" />
                                </React.Fragment>
                            ))}
                        </svg>

                        {/* Legend */}
                        <div className="absolute bottom-2 right-4 flex items-center gap-4 text-[10px] font-mono">
                            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-yellow-500 inline-block rounded" /> Kiaan Technology</span>
                            <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-red-500 inline-block rounded border-dashed" /> Top Competitor</span>
                        </div>
                    </div>
                </GlassCard>

                {/* ═══ COMPETITOR PROFILES TABLE ═══ */}
                <div className="mb-8 text-left">
                    <div className="flex justify-between items-end flex-wrap gap-4 mb-4">
                        <div>
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Eye size={18} className="text-yellow-500" /> Competitor Profiles
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Tracked competitor domains, authority, traffic, and tech stacks.</p>
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                            <div className="flex items-center gap-2 bg-zinc-950 border border-white/5 px-3 py-1.5 rounded-xl w-full sm:w-48">
                                <Search size={12} className="text-zinc-500" />
                                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                                    placeholder="Search competitors..." className="bg-transparent border-0 text-xs text-white outline-none w-full placeholder-zinc-600" />
                            </div>
                            <select value={sortBy} onChange={e => setSortBy(e.target.value as any)}
                                className="bg-zinc-950 border border-white/5 text-xs text-zinc-300 px-3 py-1.5 rounded-xl outline-none font-mono">
                                <option value="dr">Sort by DR</option>
                                <option value="backlinks">Sort by Backlinks</option>
                                <option value="traffic">Sort by Traffic</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto border border-white/5 rounded-2xl bg-zinc-950/20">
                        <table className="w-full text-left font-mono text-xs border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-zinc-500 bg-zinc-950/40 uppercase text-[9px] tracking-wider select-none">
                                    <th className="p-4">Competitor</th>
                                    <th className="p-4">DR</th>
                                    <th className="p-4">Traffic</th>
                                    <th className="p-4">Backlinks</th>
                                    <th className="p-4">Tech Stack</th>
                                    <th className="p-4 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getFilteredCompetitors().map(c => (
                                    <tr key={c.id} className="border-b border-white/5 last:border-0 hover:bg-zinc-900/10 transition-colors">
                                        <td className="p-4">
                                            <span className="text-white font-sans font-medium block">{c.name}</span>
                                            <a href={`https://${c.domain}`} target="_blank" rel="noopener noreferrer"
                                                className="text-[10px] text-zinc-500 hover:text-yellow-500 transition-colors flex items-center gap-0.5 mt-0.5">
                                                {c.domain} <ExternalLink size={8} />
                                            </a>
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${c.domainRating >= KIAAN_DR ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                                                DR {c.domainRating}
                                            </span>
                                        </td>
                                        <td className="p-4 text-zinc-300">{c.monthlyTraffic}/mo</td>
                                        <td className="p-4 text-zinc-300">{c.backlinks.toLocaleString()}</td>
                                        <td className="p-4">
                                            <div className="flex gap-1 flex-wrap">
                                                {c.techStack.slice(0, 3).map((t, i) => (
                                                    <span key={i} className="px-1.5 py-0.5 text-[9px] bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50">{t}</span>
                                                ))}
                                                {c.techStack.length > 3 && <span className="text-[9px] text-zinc-600">+{c.techStack.length - 3}</span>}
                                            </div>
                                        </td>
                                        <td className="p-4 text-right">
                                            <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider inline-block ${
                                                c.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                                c.status === 'Alert' ? 'bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse' :
                                                'bg-zinc-800 text-zinc-500 border border-zinc-700/50'
                                            }`}>{c.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ═══ PRICING COMPARISON + BACKLINK GAP ═══ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Pricing Comparison */}
                    <GlassCard className="p-6 border border-white/10 rounded-2xl text-left">
                        <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                            <DollarSign size={16} className="text-yellow-500" /> Pricing Comparison Matrix
                        </h3>
                        <p className="text-[10px] text-zinc-500 font-mono mb-4">Kiaan vs. competitors across plan tiers.</p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left font-mono text-xs border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-zinc-500 uppercase text-[9px] tracking-wider">
                                        <th className="p-3">Company</th>
                                        <th className="p-3">Starter</th>
                                        <th className="p-3">Pro</th>
                                        <th className="p-3">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-yellow-500/20 bg-yellow-500/5">
                                        <td className="p-3 text-yellow-500 font-bold">Kiaan Technology</td>
                                        <td className="p-3 text-white">{KIAAN_PRICING.starter === 0 ? 'Free' : `$${KIAAN_PRICING.starter}`}</td>
                                        <td className="p-3 text-white">${KIAAN_PRICING.pro}</td>
                                        <td className="p-3 text-white">${KIAAN_PRICING.enterprise}</td>
                                    </tr>
                                    {competitors.filter(c => c.pricingTiers.pro > 0).map(c => (
                                        <tr key={c.id} className="border-b border-white/5 hover:bg-zinc-900/10">
                                            <td className="p-3 text-zinc-300">{c.name}</td>
                                            <td className="p-3 text-zinc-400">${c.pricingTiers.starter}</td>
                                            <td className="p-3 text-zinc-400">${c.pricingTiers.pro}</td>
                                            <td className="p-3 text-zinc-400">${c.pricingTiers.enterprise}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>

                    {/* Backlink Gap Analysis */}
                    <GlassCard className="p-6 border border-white/10 rounded-2xl text-left">
                        <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                            <BarChart3 size={16} className="text-yellow-500" /> Backlink Gap Analysis
                        </h3>
                        <p className="text-[10px] text-zinc-500 font-mono mb-4">Kiaan backlink count vs. each competitor.</p>

                        <div className="space-y-3">
                            {/* Kiaan bar */}
                            <div>
                                <div className="flex justify-between text-[10px] font-mono mb-1">
                                    <span className="text-yellow-500 font-bold">Kiaan Technology</span>
                                    <span className="text-zinc-400">{KIAAN_BACKLINKS.toLocaleString()} links</span>
                                </div>
                                <div className="w-full h-4 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                                    <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.8, delay: 0.1 }}
                                        className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full" />
                                </div>
                            </div>
                            {/* Competitor bars */}
                            {competitors.map((c, i) => {
                                const pct = Math.min((c.backlinks / KIAAN_BACKLINKS) * 100, 100);
                                return (
                                    <div key={c.id}>
                                        <div className="flex justify-between text-[10px] font-mono mb-1">
                                            <span className="text-zinc-400">{c.name}</span>
                                            <span className="text-zinc-500">{c.backlinks.toLocaleString()} links</span>
                                        </div>
                                        <div className="w-full h-4 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                                            <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.8, delay: 0.15 * (i + 1) }}
                                                className={`h-full rounded-full ${c.backlinks >= KIAAN_BACKLINKS ? 'bg-gradient-to-r from-red-700 to-red-400' : 'bg-gradient-to-r from-zinc-700 to-zinc-500'}`} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </GlassCard>
                </div>

                {/* ═══ KEYWORD OVERLAP TABLE ═══ */}
                <div className="mb-8 text-left">
                    <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                        <Target size={18} className="text-yellow-500" /> Keyword Overlap Tracker
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mb-4">Shared SERP keywords — position comparison and ranking deltas.</p>

                    <div className="overflow-x-auto border border-white/5 rounded-2xl bg-zinc-950/20">
                        <table className="w-full text-left font-mono text-xs border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-zinc-500 bg-zinc-950/40 uppercase text-[9px] tracking-wider select-none">
                                    <th className="p-4">Keyword</th>
                                    <th className="p-4">Kiaan Pos.</th>
                                    <th className="p-4">Competitor</th>
                                    <th className="p-4">Comp. Pos.</th>
                                    <th className="p-4">Volume</th>
                                    <th className="p-4 text-right">Delta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {keywords.map((kw, i) => (
                                    <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-zinc-900/10 transition-colors">
                                        <td className="p-4 text-white font-sans">{kw.keyword}</td>
                                        <td className="p-4">
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                                                #{kw.kiaanPosition}
                                            </span>
                                        </td>
                                        <td className="p-4 text-zinc-400">{kw.competitorName}</td>
                                        <td className="p-4 text-zinc-400">#{kw.competitorPosition}</td>
                                        <td className="p-4 text-zinc-500">{kw.volume.toLocaleString()}</td>
                                        <td className="p-4 text-right">
                                            <span className={`flex items-center gap-0.5 justify-end text-[10px] font-bold ${kw.delta > 0 ? 'text-green-400' : kw.delta < 0 ? 'text-red-400' : 'text-zinc-500'}`}>
                                                {kw.delta > 0 ? <ArrowUpRight size={10} /> : kw.delta < 0 ? <ArrowDownRight size={10} /> : <Minus size={10} />}
                                                {kw.delta > 0 ? '+' : ''}{kw.delta}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ═══ ALERTS FEED + ADMIN REGISTER ═══ */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Alerts Feed */}
                    <div className="lg:col-span-2 text-left">
                        <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                            <Bell size={18} className="text-yellow-500" /> Competitor Change Alerts
                        </h3>
                        <p className="text-xs text-zinc-500 font-mono mb-4">Detected changes across competitor pricing, backlinks, pages, and tech stacks.</p>

                        <div className="space-y-3">
                            {alerts.map(alert => (
                                <GlassCard key={alert.id} className="p-4 border border-white/10 rounded-xl flex items-start gap-3">
                                    <div className="mt-0.5 shrink-0">{getAlertIcon(alert.type)}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                                            <span className="text-[10px] font-mono text-zinc-500">{new Date(alert.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                                            <span className="px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50">{alert.type}</span>
                                        </div>
                                        <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                                            <span className="text-white font-medium">{alert.competitor}:</span> {alert.message}
                                        </p>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Admin Register */}
                    <div className="lg:col-span-1 text-left">
                        <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                            <Plus size={18} className="text-yellow-500" /> Add Competitor
                        </h3>
                        <p className="text-xs text-zinc-500 font-mono mb-4">Register new competitor profiles to the monitoring queue.</p>

                        {registerSuccess && (
                            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono flex items-center gap-2 mb-4">
                                <CheckCircle2 size={14} /> Competitor added successfully!
                            </div>
                        )}

                        <GlassCard className="p-6 border border-white/10 rounded-2xl">
                            {isAdmin ? (
                                <form onSubmit={handleAddCompetitor} className="space-y-4 font-mono">
                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Company Name</label>
                                        <input type="text" required value={newName} onChange={e => setNewName(e.target.value)} placeholder="Acme Corp"
                                            className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Domain</label>
                                        <input type="text" required value={newDomain} onChange={e => setNewDomain(e.target.value)} placeholder="acmecorp.com"
                                            className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Domain Rating</label>
                                            <input type="number" required value={newDR} onChange={e => setNewDR(e.target.value)}
                                                className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Est. Traffic</label>
                                            <input type="text" value={newTraffic} onChange={e => setNewTraffic(e.target.value)} placeholder="10K"
                                                className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Tech Stack (comma-separated)</label>
                                        <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)} placeholder="React, Node.js, AWS"
                                            className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none" />
                                    </div>
                                    <button type="submit"
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider shadow-md">
                                        Add to Monitoring
                                    </button>
                                </form>
                            ) : (
                                <div className="space-y-4 font-mono text-xs text-zinc-400">
                                    <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl space-y-2">
                                        <div className="flex justify-between"><span>Profiles Loaded</span><span className="text-yellow-500 font-bold">{competitors.length}</span></div>
                                        <div className="flex justify-between"><span>Scan Status</span><span className="text-zinc-500">Idle</span></div>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 font-sans leading-relaxed">
                                        Admin authentication required to add new competitor profiles to the monitoring queue.
                                    </p>
                                </div>
                            )}
                        </GlassCard>
                    </div>
                </div>

                {/* ═══ CRAWLER TERMINAL ═══ */}
                <div className="space-y-4 text-left">
                    <div className="flex justify-between items-end">
                        <div>
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Terminal size={18} className="text-yellow-500" /> Intelligence CLI Console
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Live logs from competitor crawlers, API syncs, and alert generators.</p>
                        </div>
                        <button onClick={clearLogs} className="text-[10px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest">Clear</button>
                    </div>

                    <div className="bg-[#030303] border border-white/10 rounded-2xl p-5 font-mono text-[11px] text-zinc-400 h-[220px] overflow-y-auto scrollbar-hide shadow-inner">
                        <div className="space-y-1">
                            {logs.map((log, idx) => {
                                let color = 'text-zinc-400';
                                if (log.includes('SUCCESS:')) color = 'text-green-400';
                                if (log.includes('ERROR:')) color = 'text-red-400';
                                if (log.includes('SYSTEM:')) color = 'text-zinc-500';
                                if (log.includes('DATABASE:')) color = 'text-purple-400';
                                if (log.includes('CRAWL:')) color = 'text-yellow-500';
                                if (log.includes('API:')) color = 'text-zinc-500';
                                if (log.includes('ADMIN:')) color = 'text-cyan-400';
                                if (log.includes('SCAN:')) color = 'text-blue-400';
                                if (log.includes('TECH:')) color = 'text-purple-400';
                                if (log.includes('BACKLINKS:')) color = 'text-cyan-400';
                                if (log.includes('KEYWORDS:')) color = 'text-orange-400';
                                if (log.includes('ALERTS:')) color = 'text-red-400';
                                if (log.includes('FILTER:')) color = 'text-zinc-500';
                                return <div key={idx} className={`${color} leading-relaxed break-all`}>{log}</div>;
                            })}
                            {syncing && (
                                <div className="text-yellow-500 animate-pulse flex items-center gap-2 mt-2">
                                    <RefreshCw size={12} className="animate-spin" /> Scanning competitor domains... [{syncProgress}%]
                                </div>
                            )}
                            <div ref={consoleEndRef} />
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ ADMIN LOGIN MODAL ═══ */}
            <AnimatePresence>
                {showAdminLogin && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-zinc-950 border border-white/10 p-6 rounded-2xl w-full max-w-sm relative text-left">
                            <h4 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Lock size={16} className="text-yellow-500" /> Admin Authentication
                            </h4>
                            <p className="text-xs text-zinc-500 font-mono mb-4">Authenticate to manage competitor registry.</p>

                            {loginError && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl font-mono mb-4">{loginError}</div>
                            )}

                            <form onSubmit={handleAdminLogin} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Admin Email</label>
                                    <input type="email" required value={adminEmail} onChange={e => setAdminEmail(e.target.value)} placeholder="admin@kiaan.tech"
                                        className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Password</label>
                                    <input type="password" required value={adminPassword} onChange={e => setAdminPassword(e.target.value)} placeholder="••••••••"
                                        className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500" />
                                </div>
                                <div className="flex gap-3 pt-2">
                                    <button type="button" onClick={() => setShowAdminLogin(false)}
                                        className="flex-1 py-2.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl text-xs font-bold transition-all font-mono">Cancel</button>
                                    <button type="submit"
                                        className="flex-1 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md">Log In</button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}
