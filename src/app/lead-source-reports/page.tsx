"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal, RefreshCw, Play, Lock, LogIn, LogOut,
    Search, TrendingUp, Plus, ExternalLink, Globe,
    CheckCircle2, AlertCircle, Eye, Users, Zap,
    BarChart3, ArrowUpRight, ArrowDownRight, Minus,
    Bell, Activity, Mail, DollarSign, Target, FileText,
    Calendar, Phone, Briefcase, GraduationCap, MessageSquare
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import React from 'react';

/* ─────────────────── Types ─────────────────── */

interface LeadRecord {
    id: string;
    name: string;
    email: string;
    source: string;
    medium: string;
    campaign: string;
    formOrigin: 'Contact' | 'Demo' | 'Schedule' | 'Start-Project' | 'Internship';
    date: string;
    converted: boolean;
}

/* ─────────────────── Seed Data ─────────────────── */

const DEFAULT_LEADS: LeadRecord[] = [
    { id: 'ld_1', name: 'Rajesh Patel', email: 'rajesh@startup.io', source: 'google', medium: 'cpc', campaign: 'saas-launch-q3', formOrigin: 'Demo', date: '2026-07-28', converted: true },
    { id: 'ld_2', name: 'Priya Sharma', email: 'priya@techinc.com', source: 'linkedin', medium: 'social', campaign: 'enterprise-outreach', formOrigin: 'Schedule', date: '2026-07-27', converted: true },
    { id: 'ld_3', name: 'Amit Kumar', email: 'amit@cloudops.in', source: 'direct', medium: '(none)', campaign: '(none)', formOrigin: 'Contact', date: '2026-07-26', converted: false },
    { id: 'ld_4', name: 'Sarah Chen', email: 'sarah@globalfin.com', source: 'google', medium: 'organic', campaign: '(none)', formOrigin: 'Start-Project', date: '2026-07-25', converted: true },
    { id: 'ld_5', name: 'Vikram Singh', email: 'vikram@retailhub.co', source: 'referral', medium: 'partner', campaign: 'agency-referral', formOrigin: 'Demo', date: '2026-07-24', converted: false },
    { id: 'ld_6', name: 'Neha Gupta', email: 'neha@edtech.org', source: 'email', medium: 'newsletter', campaign: 'july-digest', formOrigin: 'Internship', date: '2026-07-23', converted: true },
    { id: 'ld_7', name: 'Michael Ross', email: 'michael@fintechlab.us', source: 'google', medium: 'cpc', campaign: 'crm-ads-july', formOrigin: 'Contact', date: '2026-07-22', converted: false },
    { id: 'ld_8', name: 'Ananya Reddy', email: 'ananya@healthco.in', source: 'linkedin', medium: 'social', campaign: 'healthcare-ai', formOrigin: 'Schedule', date: '2026-07-21', converted: true },
    { id: 'ld_9', name: 'David Kim', email: 'david@logisticspro.com', source: 'google', medium: 'organic', campaign: '(none)', formOrigin: 'Start-Project', date: '2026-07-20', converted: true },
    { id: 'ld_10', name: 'Ritu Jain', email: 'ritu@realtyworld.in', source: 'referral', medium: 'partner', campaign: 'builder-network', formOrigin: 'Demo', date: '2026-07-19', converted: false },
    { id: 'ld_11', name: 'James Wilson', email: 'james@saasco.io', source: 'direct', medium: '(none)', campaign: '(none)', formOrigin: 'Contact', date: '2026-07-18', converted: false },
    { id: 'ld_12', name: 'Kavita Nair', email: 'kavita@designstudio.com', source: 'email', medium: 'newsletter', campaign: 'july-digest', formOrigin: 'Internship', date: '2026-07-17', converted: true },
];

const SOURCE_COLORS: Record<string, { color: string; bg: string; border: string }> = {
    google: { color: '#34A853', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    linkedin: { color: '#0A66C2', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    direct: { color: '#A1A1AA', bg: 'bg-zinc-500/10', border: 'border-zinc-500/20' },
    referral: { color: '#F59E0B', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
    email: { color: '#8B5CF6', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
};

const FORM_ICONS: Record<string, React.ReactNode> = {
    'Contact': <MessageSquare size={14} className="text-yellow-500" />,
    'Demo': <Eye size={14} className="text-cyan-400" />,
    'Schedule': <Phone size={14} className="text-green-400" />,
    'Start-Project': <Briefcase size={14} className="text-purple-400" />,
    'Internship': <GraduationCap size={14} className="text-blue-400" />,
};

/* ═══════════════════ COMPONENT ═══════════════════ */

export default function LeadSourceReports() {
    const [leads, setLeads] = useState<LeadRecord[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d'>('30d');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<'date' | 'source' | 'form'>('date');
    const [syncing, setSyncing] = useState(false);
    const [syncProgress, setSyncProgress] = useState(0);

    // Admin
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Register
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newSource, setNewSource] = useState('google');
    const [newMedium, setNewMedium] = useState('organic');
    const [newCampaign, setNewCampaign] = useState('');
    const [newForm, setNewForm] = useState<LeadRecord['formOrigin']>('Contact');
    const [registerSuccess, setRegisterSuccess] = useState(false);

    // Terminal
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('kiaan_leads');
            if (stored) {
                try { setLeads(JSON.parse(stored)); } catch { setLeads(DEFAULT_LEADS); }
            } else {
                localStorage.setItem('kiaan_leads', JSON.stringify(DEFAULT_LEADS));
                setLeads(DEFAULT_LEADS);
            }
            setIsLoading(false);
            addLog('SYSTEM: Lead Source Reporting dashboard initialized.');
            addLog('DATABASE: Loaded lead attribution records from client storage.');
        }
    }, []);

    useEffect(() => { consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [logs]);

    const addLog = (msg: string) => {
        const ts = new Date().toISOString().split('T')[1].slice(0, 8);
        setLogs(prev => [...prev, `[${ts}] ${msg}`]);
    };
    const clearLogs = () => setLogs([`[${new Date().toISOString().split('T')[1].slice(0, 8)}] SYSTEM: Console cleared.`]);

    /* ─── Filtered leads by timeframe ─── */
    const getTimeFilteredLeads = () => {
        const now = new Date();
        const days = timeframe === '7d' ? 7 : timeframe === '30d' ? 30 : 90;
        const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
        return leads.filter(l => new Date(l.date) >= cutoff);
    };

    /* ─── Source aggregation ─── */
    const getSourceBreakdown = () => {
        const filtered = getTimeFilteredLeads();
        const sources: Record<string, { count: number; converted: number }> = {};
        filtered.forEach(l => {
            if (!sources[l.source]) sources[l.source] = { count: 0, converted: 0 };
            sources[l.source].count++;
            if (l.converted) sources[l.source].converted++;
        });
        return Object.entries(sources).sort((a, b) => b[1].count - a[1].count);
    };

    /* ─── Campaign aggregation ─── */
    const getCampaignBreakdown = () => {
        const filtered = getTimeFilteredLeads();
        const campaigns: Record<string, { count: number; converted: number }> = {};
        filtered.forEach(l => {
            const key = l.campaign || '(none)';
            if (!campaigns[key]) campaigns[key] = { count: 0, converted: 0 };
            campaigns[key].count++;
            if (l.converted) campaigns[key].converted++;
        });
        return Object.entries(campaigns).filter(([k]) => k !== '(none)').sort((a, b) => b[1].count - a[1].count);
    };

    /* ─── Form origin aggregation ─── */
    const getFormBreakdown = () => {
        const filtered = getTimeFilteredLeads();
        const forms: Record<string, number> = {};
        filtered.forEach(l => {
            forms[l.formOrigin] = (forms[l.formOrigin] || 0) + 1;
        });
        return Object.entries(forms).sort((a, b) => b[1] - a[1]);
    };

    /* ─── Stats ─── */
    const filteredLeads = getTimeFilteredLeads();
    const totalLeads = filteredLeads.length;
    const convertedLeads = filteredLeads.filter(l => l.converted).length;
    const conversionRate = totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0;
    const topSource = getSourceBreakdown()[0];
    const topCampaign = getCampaignBreakdown()[0];

    /* ─── SVG Donut Chart ─── */
    const renderDonut = () => {
        const breakdown = getSourceBreakdown();
        if (breakdown.length === 0) return null;
        const total = breakdown.reduce((s, [, v]) => s + v.count, 0);
        let cumulativePercent = 0;

        const segments = breakdown.map(([source, data]) => {
            const percent = data.count / total;
            const startAngle = cumulativePercent * 2 * Math.PI - Math.PI / 2;
            cumulativePercent += percent;
            const endAngle = cumulativePercent * 2 * Math.PI - Math.PI / 2;
            const largeArc = percent > 0.5 ? 1 : 0;

            const r = 80;
            const cx = 100, cy = 100;
            const x1 = cx + r * Math.cos(startAngle);
            const y1 = cy + r * Math.sin(startAngle);
            const x2 = cx + r * Math.cos(endAngle);
            const y2 = cy + r * Math.sin(endAngle);

            const color = SOURCE_COLORS[source]?.color || '#71717A';

            return (
                <path
                    key={source}
                    d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`}
                    fill={color}
                    fillOpacity={0.7}
                    stroke="#000"
                    strokeWidth="2"
                    className="transition-all hover:fill-opacity-100 cursor-pointer"
                >
                    <title>{`${source}: ${data.count} leads (${Math.round(percent * 100)}%)`}</title>
                </path>
            );
        });

        return (
            <svg viewBox="0 0 200 200" className="w-full h-full max-w-[200px]">
                {segments}
                <circle cx="100" cy="100" r="45" fill="#000" />
                <text x="100" y="95" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" fontFamily="monospace">{totalLeads}</text>
                <text x="100" y="115" textAnchor="middle" fill="#71717A" fontSize="9" fontFamily="monospace">TOTAL LEADS</text>
            </svg>
        );
    };

    /* ─── Form Origin Bar Chart ─── */
    const renderFormBars = () => {
        const breakdown = getFormBreakdown();
        const max = breakdown.length > 0 ? breakdown[0][1] : 1;
        return breakdown.map(([form, count]) => (
            <div key={form} className="flex items-center gap-3">
                <div className="w-28 flex items-center gap-1.5 shrink-0">
                    {FORM_ICONS[form]}
                    <span className="text-[10px] font-mono text-zinc-400 truncate">{form}</span>
                </div>
                <div className="flex-1 h-5 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(count / max) * 100}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"
                    />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 w-8 text-right">{count}</span>
            </div>
        ));
    };

    /* ─── Sync Simulator ─── */
    const handleCrawlerSync = () => {
        if (syncing) return;
        setSyncing(true);
        setSyncProgress(0);
        addLog('CRM: Initiating lead source data reconciliation...');
        const steps = [
            'API: Authenticating CRM API access tokens...',
            `QUERY: Fetching ${leads.length} lead records from attribution database...`,
            'UTM: Cross-referencing UTM parameters with GA4 session data...',
            'ATTRIBUTION: Mapping multi-touch attribution model paths...',
            'CAMPAIGN: Aggregating campaign performance metrics...',
            'FORMS: Reconciling form-level conversion funnels...',
            'SUCCESS: Lead source reconciliation complete. All attribution data refreshed.'
        ];
        let step = 0;
        const interval = setInterval(() => {
            if (step < steps.length) {
                addLog(steps[step]);
                setSyncProgress(Math.round(((step + 1) / steps.length) * 100));
                step++;
            } else { clearInterval(interval); setSyncing(false); }
        }, 400);
    };

    /* ─── Admin ─── */
    const handleAdminLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');
        if (adminEmail === 'admin@kiaan.tech' && adminPassword === 'admin123') {
            setIsAdmin(true); setShowAdminLogin(false); setAdminEmail(''); setAdminPassword('');
            addLog('ADMIN: Authenticated. Lead registry unlocked.');
        } else {
            setLoginError('Invalid credentials.'); addLog('ERROR: Admin login failed.');
        }
    };

    /* ─── Add Lead ─── */
    const handleAddLead = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newName.trim() || !newEmail.trim()) { alert('Name and Email required.'); return; }
        const newLead: LeadRecord = {
            id: `ld_${Date.now()}`, name: newName.trim(), email: newEmail.trim(),
            source: newSource, medium: newMedium, campaign: newCampaign || '(none)',
            formOrigin: newForm, date: new Date().toISOString().split('T')[0], converted: false
        };
        const updated = [newLead, ...leads];
        setLeads(updated);
        localStorage.setItem('kiaan_leads', JSON.stringify(updated));
        setRegisterSuccess(true);
        addLog(`ADMIN: Registered lead "${newLead.name}" from source: ${newLead.source}.`);
        setNewName(''); setNewEmail(''); setNewCampaign('');
        setTimeout(() => setRegisterSuccess(false), 2500);
    };

    /* ─── Table filtering ─── */
    const getFilteredLeads = () => {
        const filtered = filteredLeads.filter(l =>
            l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            l.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
            l.formOrigin.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return [...filtered].sort((a, b) => {
            if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime();
            if (sortBy === 'source') return a.source.localeCompare(b.source);
            return a.formOrigin.localeCompare(b.formOrigin);
        });
    };

    /* ═══════════════════ RENDER ═══════════════════ */

    return (
        <main className="min-h-screen bg-black text-white relative pt-24 pb-12 font-sans overflow-x-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">

                {/* ═══ HEADER ═══ */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/5 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-2">
                            Lead Source <span className="text-yellow-500">Reports</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Attribution analytics across acquisition channels, UTM campaigns, and form conversion funnels.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button disabled={syncing} onClick={handleCrawlerSync}
                            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black disabled:opacity-30 rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md font-mono">
                            {syncing ? <RefreshCw size={12} className="animate-spin" /> : <Play size={12} fill="currentColor" />}
                            Sync CRM Data
                        </button>
                        {isAdmin ? (
                            <button onClick={() => setIsAdmin(false)}
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

                {/* ═══ TIMEFRAME SELECTOR ═══ */}
                <div className="flex justify-end mb-6">
                    <div className="flex bg-zinc-950 border border-white/5 rounded-lg p-0.5">
                        {(['7d', '30d', '90d'] as const).map(range => (
                            <button key={range} onClick={() => { setTimeframe(range); addLog(`FILTER: Timeframe set to ${range}. Recalculating attribution.`); }}
                                className={`px-3 py-1 text-[10px] font-mono font-bold rounded uppercase transition-all ${timeframe === range ? 'bg-yellow-500 text-black' : 'text-zinc-400 hover:text-white'}`}>
                                {range}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ═══ STATS RIBBON ═══ */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 font-mono">
                    {[
                        { label: 'Total Leads', value: `${totalLeads}`, sub: `${convertedLeads} converted`, icon: <Users size={14} className="text-yellow-500" /> },
                        { label: 'Conversion Rate', value: `${conversionRate}%`, sub: `${convertedLeads}/${totalLeads} leads`, icon: <Target size={14} className="text-yellow-500" /> },
                        { label: 'Top Source', value: topSource ? topSource[0] : 'N/A', sub: topSource ? `${topSource[1].count} leads` : '', icon: <Globe size={14} className="text-yellow-500" /> },
                        { label: 'Top Campaign', value: topCampaign ? topCampaign[0] : 'N/A', sub: topCampaign ? `${topCampaign[1].count} leads` : '', icon: <Zap size={14} className="text-yellow-500" /> },
                    ].map((stat, i) => (
                        <GlassCard key={i} className="p-4 border border-white/10 rounded-2xl text-left">
                            <div className="flex items-center gap-2 mb-1">
                                {stat.icon}
                                <span className="text-[9px] text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                            </div>
                            <h3 className="text-xl font-display font-black text-white uppercase truncate">{stat.value}</h3>
                            <span className="text-[10px] text-zinc-500 block mt-1">{stat.sub}</span>
                        </GlassCard>
                    ))}
                </div>

                {/* ═══ DONUT CHART + CHANNEL CARDS ═══ */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Donut */}
                    <GlassCard className="p-6 border border-white/10 rounded-2xl text-left flex flex-col items-center justify-center">
                        <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-4 flex items-center gap-2 self-start">
                            <BarChart3 size={16} className="text-yellow-500" /> Source Distribution
                        </h3>
                        <div className="w-48 h-48">{renderDonut()}</div>
                        <div className="flex flex-wrap gap-2 mt-4 justify-center">
                            {getSourceBreakdown().map(([source]) => (
                                <span key={source} className="flex items-center gap-1 text-[9px] font-mono text-zinc-400">
                                    <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: SOURCE_COLORS[source]?.color || '#71717A' }} />
                                    {source}
                                </span>
                            ))}
                        </div>
                    </GlassCard>

                    {/* Channel Performance Cards */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Activity size={16} className="text-yellow-500" /> Channel Performance
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {getSourceBreakdown().map(([source, data]) => {
                                const rate = data.count > 0 ? Math.round((data.converted / data.count) * 100) : 0;
                                const sc = SOURCE_COLORS[source] || SOURCE_COLORS.direct;
                                return (
                                    <GlassCard key={source} className={`p-4 border rounded-xl text-left ${sc.border}`}>
                                        <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1 font-mono">{source}</span>
                                        <h4 className="text-lg font-display font-black text-white">{data.count} <span className="text-[10px] text-zinc-500 font-mono font-normal">leads</span></h4>
                                        <div className="flex items-center gap-1 mt-1">
                                            <span className={`text-[10px] font-bold font-mono ${rate >= 50 ? 'text-green-400' : rate >= 25 ? 'text-yellow-400' : 'text-red-400'}`}>
                                                {rate}% conv.
                                            </span>
                                            {rate >= 50 ? <ArrowUpRight size={10} className="text-green-400" /> : rate >= 25 ? <Minus size={10} className="text-yellow-400" /> : <ArrowDownRight size={10} className="text-red-400" />}
                                        </div>
                                    </GlassCard>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ═══ FORM ORIGIN BARS + CAMPAIGN TABLE ═══ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Form Origin */}
                    <GlassCard className="p-6 border border-white/10 rounded-2xl text-left">
                        <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                            <FileText size={16} className="text-yellow-500" /> Form Origin Analysis
                        </h3>
                        <p className="text-[10px] text-zinc-500 font-mono mb-4">Lead volume by form submission source.</p>
                        <div className="space-y-3">{renderFormBars()}</div>
                    </GlassCard>

                    {/* Campaign Attribution */}
                    <GlassCard className="p-6 border border-white/10 rounded-2xl text-left">
                        <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                            <Zap size={16} className="text-yellow-500" /> Campaign Attribution
                        </h3>
                        <p className="text-[10px] text-zinc-500 font-mono mb-4">UTM campaign performance breakdown.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left font-mono text-xs border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-zinc-500 uppercase text-[9px] tracking-wider">
                                        <th className="p-3">Campaign</th>
                                        <th className="p-3">Leads</th>
                                        <th className="p-3 text-right">Conv %</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getCampaignBreakdown().map(([campaign, data]) => (
                                        <tr key={campaign} className="border-b border-white/5 last:border-0">
                                            <td className="p-3 text-zinc-300">{campaign}</td>
                                            <td className="p-3 text-white font-bold">{data.count}</td>
                                            <td className="p-3 text-right">
                                                <span className={`text-[10px] font-bold ${data.count > 0 && Math.round((data.converted / data.count) * 100) >= 50 ? 'text-green-400' : 'text-yellow-400'}`}>
                                                    {data.count > 0 ? Math.round((data.converted / data.count) * 100) : 0}%
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {getCampaignBreakdown().length === 0 && (
                                        <tr><td colSpan={3} className="p-4 text-center text-zinc-600">No campaigns in timeframe.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </GlassCard>
                </div>

                {/* ═══ LEADS TABLE + ADMIN REGISTER ═══ */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Leads Table */}
                    <div className="lg:col-span-2 text-left">
                        <div className="flex justify-between items-end flex-wrap gap-4 mb-4">
                            <div>
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Users size={18} className="text-yellow-500" /> Lead Attribution Ledger
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Individual lead records with full source attribution.</p>
                            </div>
                            <div className="flex gap-2 w-full sm:w-auto">
                                <div className="flex items-center gap-2 bg-zinc-950 border border-white/5 px-3 py-1.5 rounded-xl w-full sm:w-48">
                                    <Search size={12} className="text-zinc-500" />
                                    <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="Search leads..." className="bg-transparent border-0 text-xs text-white outline-none w-full placeholder-zinc-600" />
                                </div>
                                <select value={sortBy} onChange={e => setSortBy(e.target.value as any)}
                                    className="bg-zinc-950 border border-white/5 text-xs text-zinc-300 px-3 py-1.5 rounded-xl outline-none font-mono">
                                    <option value="date">Sort by Date</option>
                                    <option value="source">Sort by Source</option>
                                    <option value="form">Sort by Form</option>
                                </select>
                            </div>
                        </div>

                        <div className="overflow-x-auto border border-white/5 rounded-2xl bg-zinc-950/20">
                            <table className="w-full text-left font-mono text-xs border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-zinc-500 bg-zinc-950/40 uppercase text-[9px] tracking-wider select-none">
                                        <th className="p-4">Lead</th>
                                        <th className="p-4">Source / Medium</th>
                                        <th className="p-4">Form</th>
                                        <th className="p-4 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getFilteredLeads().map(l => {
                                        const sc = SOURCE_COLORS[l.source] || SOURCE_COLORS.direct;
                                        return (
                                            <tr key={l.id} className="border-b border-white/5 last:border-0 hover:bg-zinc-900/10 transition-colors">
                                                <td className="p-4">
                                                    <span className="text-white font-sans font-medium block">{l.name}</span>
                                                    <span className="text-[10px] text-zinc-500 block mt-0.5">{l.email} · {l.date}</span>
                                                </td>
                                                <td className="p-4">
                                                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${sc.bg} ${sc.border} border`} style={{ color: sc.color }}>
                                                        {l.source}
                                                    </span>
                                                    <span className="text-[10px] text-zinc-600 block mt-0.5">{l.medium}{l.campaign !== '(none)' ? ` · ${l.campaign}` : ''}</span>
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex items-center gap-1">
                                                        {FORM_ICONS[l.formOrigin]}
                                                        <span className="text-zinc-400 text-[10px]">{l.formOrigin}</span>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-right">
                                                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider inline-block ${l.converted ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-zinc-800 text-zinc-500 border border-zinc-700/50'}`}>
                                                        {l.converted ? 'Converted' : 'Open'}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    {getFilteredLeads().length === 0 && (
                                        <tr><td colSpan={4} className="p-8 text-center text-zinc-600 font-mono">No leads match your filters.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Admin Register */}
                    <div className="lg:col-span-1 text-left">
                        <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                            <Plus size={18} className="text-yellow-500" /> Add Lead
                        </h3>
                        <p className="text-xs text-zinc-500 font-mono mb-4">Manually register lead records with source attribution.</p>

                        {registerSuccess && (
                            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono flex items-center gap-2 mb-4">
                                <CheckCircle2 size={14} /> Lead registered successfully!
                            </div>
                        )}

                        <GlassCard className="p-6 border border-white/10 rounded-2xl">
                            {isAdmin ? (
                                <form onSubmit={handleAddLead} className="space-y-3 font-mono">
                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Name</label>
                                        <input type="text" required value={newName} onChange={e => setNewName(e.target.value)} placeholder="John Doe"
                                            className="w-full px-3 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Email</label>
                                        <input type="email" required value={newEmail} onChange={e => setNewEmail(e.target.value)} placeholder="john@company.com"
                                            className="w-full px-3 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Source</label>
                                            <select value={newSource} onChange={e => setNewSource(e.target.value)}
                                                className="w-full px-3 py-2 bg-zinc-950 border border-white/5 text-xs text-zinc-300 rounded-xl outline-none focus:border-yellow-500">
                                                <option value="google">Google</option>
                                                <option value="linkedin">LinkedIn</option>
                                                <option value="direct">Direct</option>
                                                <option value="referral">Referral</option>
                                                <option value="email">Email</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Medium</label>
                                            <input type="text" value={newMedium} onChange={e => setNewMedium(e.target.value)}
                                                className="w-full px-3 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Campaign</label>
                                            <input type="text" value={newCampaign} onChange={e => setNewCampaign(e.target.value)} placeholder="(optional)"
                                                className="w-full px-3 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Form</label>
                                            <select value={newForm} onChange={e => setNewForm(e.target.value as any)}
                                                className="w-full px-3 py-2 bg-zinc-950 border border-white/5 text-xs text-zinc-300 rounded-xl outline-none focus:border-yellow-500">
                                                <option value="Contact">Contact</option>
                                                <option value="Demo">Demo</option>
                                                <option value="Schedule">Schedule</option>
                                                <option value="Start-Project">Start-Project</option>
                                                <option value="Internship">Internship</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit"
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider shadow-md mt-1">
                                        Register Lead
                                    </button>
                                </form>
                            ) : (
                                <div className="space-y-4 font-mono text-xs text-zinc-400">
                                    <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl space-y-2">
                                        <div className="flex justify-between"><span>Total Records</span><span className="text-yellow-500 font-bold">{leads.length}</span></div>
                                        <div className="flex justify-between"><span>CRM Status</span><span className="text-zinc-500">Synced</span></div>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 font-sans leading-relaxed">Admin authentication required to manually register lead records.</p>
                                </div>
                            )}
                        </GlassCard>
                    </div>
                </div>

                {/* ═══ TERMINAL ═══ */}
                <div className="space-y-4 text-left">
                    <div className="flex justify-between items-end">
                        <div>
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Terminal size={18} className="text-yellow-500" /> Attribution CLI Console
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Live logs from CRM sync, UTM reconciliation, and attribution engine.</p>
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
                                if (log.includes('CRM:')) color = 'text-yellow-500';
                                if (log.includes('API:')) color = 'text-zinc-500';
                                if (log.includes('ADMIN:')) color = 'text-cyan-400';
                                if (log.includes('QUERY:')) color = 'text-blue-400';
                                if (log.includes('UTM:')) color = 'text-orange-400';
                                if (log.includes('ATTRIBUTION:')) color = 'text-purple-400';
                                if (log.includes('CAMPAIGN:')) color = 'text-cyan-400';
                                if (log.includes('FORMS:')) color = 'text-green-400';
                                if (log.includes('FILTER:')) color = 'text-zinc-500';
                                return <div key={idx} className={`${color} leading-relaxed break-all`}>{log}</div>;
                            })}
                            {syncing && (
                                <div className="text-yellow-500 animate-pulse flex items-center gap-2 mt-2">
                                    <RefreshCw size={12} className="animate-spin" /> Reconciling lead attribution data... [{syncProgress}%]
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
                            <p className="text-xs text-zinc-500 font-mono mb-4">Authenticate to manage lead records.</p>
                            {loginError && <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl font-mono mb-4">{loginError}</div>}
                            <form onSubmit={handleAdminLogin} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Email</label>
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
