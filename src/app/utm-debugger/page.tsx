"use client";

import { useState, useEffect, useRef } from 'react';
import { 
    Terminal, Settings, AlertCircle, CheckCircle2, 
    RefreshCw, Play, ShieldAlert, Lock, LogIn, LogOut,
    Eye, Link2, DollarSign, FileCode, Check, Copy, Share2,
    Compass, BarChart2, MousePointer, Info, ShieldCheck, Trash2
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';
import { getStoredUTMParams, clearStoredUTMParams, parseAndStoreUTMParams, UTMParams } from '@/utils/utm';

export default function UTMDebugger() {
    const [currentParams, setCurrentParams] = useState<UTMParams | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Form inputs for UTM link generator
    const [baseUrl, setBaseUrl] = useState('http://localhost:3000/contact');
    const [utmSource, setUtmSource] = useState('newsletter');
    const [utmMedium, setUtmMedium] = useState('email');
    const [utmCampaign, setUtmCampaign] = useState('summer_promo_2026');
    const [utmTerm, setUtmTerm] = useState('saas_development');
    const [utmContent, setUtmContent] = useState('banner_ad');
    const [refCode, setRefCode] = useState('aff_james99');

    // Generated URL State
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [copiedUrl, setCopiedUrl] = useState(false);

    // Monospace Terminal Console Logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load initial stored parameters
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = getStoredUTMParams();
            setCurrentParams(params);
            setIsLoading(false);

            addLog('SYSTEM: UTM Tracking & Campaign Simulator Console online.');
            if (params) {
                addLog(`DATABASE: Stored UTM session parameters loaded from sessionStorage.`);
            } else {
                addLog('DATABASE: No active campaign parameters stored in this browser session.');
            }

            // Listen for custom UTM updates
            const handleUpdate = (e: Event) => {
                const updated = (e as CustomEvent).detail;
                setCurrentParams(updated);
            };

            window.addEventListener('kiaan_utm_updated', handleUpdate);
            return () => {
                window.removeEventListener('kiaan_utm_updated', handleUpdate);
            };
        }
    }, []);

    // Autocompile campaign URL
    useEffect(() => {
        const queryParams = new URLSearchParams();
        if (utmSource.trim()) queryParams.set('utm_source', utmSource.trim());
        if (utmMedium.trim()) queryParams.set('utm_medium', utmMedium.trim());
        if (utmCampaign.trim()) queryParams.set('utm_campaign', utmCampaign.trim());
        if (utmTerm.trim()) queryParams.set('utm_term', utmTerm.trim());
        if (utmContent.trim()) queryParams.set('utm_content', utmContent.trim());
        if (refCode.trim()) queryParams.set('ref', refCode.trim());

        const queryStr = queryParams.toString();
        const fullUrl = queryStr ? `${baseUrl}?${queryStr}` : baseUrl;
        setGeneratedUrl(fullUrl);
    }, [baseUrl, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, refCode]);

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

    // Simulate Landing Action
    const handleSimulateLanding = () => {
        addLog(`ACTION: Mock landing triggered. Query string: "${generatedUrl.split('?')[1] || ''}"`);

        if (typeof window !== 'undefined') {
            const urlObj = new URL(generatedUrl);
            
            // Construct target parameters manually to write to storage
            const mockParams: UTMParams = {
                utm_source: urlObj.searchParams.get('utm_source') || undefined,
                utm_medium: urlObj.searchParams.get('utm_medium') || undefined,
                utm_campaign: urlObj.searchParams.get('utm_campaign') || undefined,
                utm_term: urlObj.searchParams.get('utm_term') || undefined,
                utm_content: urlObj.searchParams.get('utm_content') || undefined,
                ref: urlObj.searchParams.get('ref') || undefined,
                captured_at: new Date().toLocaleString()
            };

            sessionStorage.setItem('kiaan_utm_parameters', JSON.stringify(mockParams));
            
            // Dispatch event to sync state
            const event = new CustomEvent('kiaan_utm_updated', { detail: mockParams });
            window.dispatchEvent(event);

            // GTM Push mock
            const dataLayer = (window as any).dataLayer;
            if (Array.isArray(dataLayer)) {
                dataLayer.push({
                    event: 'utm_parameters_captured_mock',
                    utm_details: mockParams
                });
            }

            addLog(`SUCCESS: Parsed parameters stored in browser cache.`);
            addLog(`GTM: Mock pushed to GTM dataLayer stack: ${JSON.stringify(mockParams)}`);
        }
    };

    const handleClearStorage = () => {
        clearStoredUTMParams();
        addLog('ACTION: Purged all UTM tracking credentials from sessionStorage.');
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedUrl);
        setCopiedUrl(true);
        addLog('SYSTEM: Copied compiled campaign URL to clipboard.');
        setTimeout(() => setCopiedUrl(false), 2000);
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
                            UTM <span className="text-yellow-500">Debugger</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Generate marketing campaign links, monitor active UTM states, and verify lead sources queries tracking.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button 
                            onClick={handleClearStorage}
                            className="px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-red-500 hover:text-white text-zinc-400 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 font-mono"
                        >
                            <Trash2 size={12} /> Clear Cache
                        </button>
                    </div>
                </div>

                {/* --- SESSION PARAMETERS LEDGER --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left font-mono">
                    <GlassCard className="p-5 border border-white/10 rounded-2xl flex flex-col justify-between md:col-span-1 min-h-[140px]">
                        <div>
                            <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">Campaign Source</span>
                            <h3 className="text-lg font-bold text-white truncate">{currentParams?.utm_source || 'Direct / Organic'}</h3>
                        </div>
                        <span className="text-[10px] text-zinc-500 block mt-4">utm_source</span>
                    </GlassCard>

                    <GlassCard className="p-5 border border-white/10 rounded-2xl flex flex-col justify-between md:col-span-1 min-h-[140px]">
                        <div>
                            <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">Campaign Medium</span>
                            <h3 className="text-lg font-bold text-white truncate">{currentParams?.utm_medium || 'None'}</h3>
                        </div>
                        <span className="text-[10px] text-zinc-500 block mt-4">utm_medium</span>
                    </GlassCard>

                    <GlassCard className="p-5 border border-white/10 rounded-2xl flex flex-col justify-between md:col-span-1 min-h-[140px]">
                        <div>
                            <span className="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">Referral Partner</span>
                            <h3 className="text-lg font-bold text-white truncate">{currentParams?.ref || 'Direct / None'}</h3>
                        </div>
                        <span className="text-[10px] text-zinc-500 block mt-4">ref_code</span>
                    </GlassCard>
                </div>

                {/* --- MAIN PAGE CONTENT GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* LEFT COLUMN: URL BUILDER FORM */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Compass size={18} className="text-yellow-500" /> Campaign Link Builder
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Fill parameters to compile and simulate a tagged landing URL.</p>
                        </div>

                        <GlassCard className="p-6 border border-white/10 rounded-2xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left font-mono">
                                <div>
                                    <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Destination URL</label>
                                    <input 
                                        type="text"
                                        value={baseUrl}
                                        onChange={e => setBaseUrl(e.target.value)}
                                        className="w-full px-3 py-2 bg-zinc-950 border border-white/5 text-xs text-white rounded-xl outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Campaign Source</label>
                                    <input 
                                        type="text"
                                        value={utmSource}
                                        onChange={e => setUtmSource(e.target.value)}
                                        placeholder="google, newsletter"
                                        className="w-full px-3 py-2 bg-zinc-950 border border-white/5 text-xs text-white rounded-xl outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Campaign Medium</label>
                                    <input 
                                        type="text"
                                        value={utmMedium}
                                        onChange={e => setUtmMedium(e.target.value)}
                                        placeholder="cpc, banner, email"
                                        className="w-full px-3 py-2 bg-zinc-950 border border-white/5 text-xs text-white rounded-xl outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Campaign Name</label>
                                    <input 
                                        type="text"
                                        value={utmCampaign}
                                        onChange={e => setUtmCampaign(e.target.value)}
                                        placeholder="summer_sale"
                                        className="w-full px-3 py-2 bg-zinc-950 border border-white/5 text-xs text-white rounded-xl outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Campaign Term</label>
                                    <input 
                                        type="text"
                                        value={utmTerm}
                                        onChange={e => setUtmTerm(e.target.value)}
                                        placeholder="custom_software"
                                        className="w-full px-3 py-2 bg-zinc-950 border border-white/5 text-xs text-white rounded-xl outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5">Referral Partner Code</label>
                                    <input 
                                        type="text"
                                        value={refCode}
                                        onChange={e => setRefCode(e.target.value)}
                                        placeholder="aff_partner1"
                                        className="w-full px-3 py-2 bg-zinc-950 border border-white/5 text-xs text-white rounded-xl outline-none"
                                    />
                                </div>
                            </div>

                            {/* Compilation Result Display */}
                            <div className="mt-6 p-4 bg-zinc-950 border border-white/5 rounded-xl font-mono text-left">
                                <span className="block text-[9px] text-zinc-500 uppercase tracking-widest mb-2">Compiled Campaign Link</span>
                                <div className="flex gap-2 items-center bg-black/60 px-3 py-2.5 rounded-lg border border-white/5 text-xs text-zinc-300 break-all select-all">
                                    <Link2 size={14} className="text-yellow-500 shrink-0" />
                                    <span>{generatedUrl}</span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                    <button 
                                        onClick={copyToClipboard}
                                        className="flex-1 bg-zinc-900 hover:bg-zinc-800 border border-white/5 text-white py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                                    >
                                        {copiedUrl ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                                        {copiedUrl ? 'Copied Link' : 'Copy URL'}
                                    </button>
                                    <button 
                                        onClick={handleSimulateLanding}
                                        className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                                    >
                                        <Play size={12} fill="currentColor" /> Simulate Campaign Landing
                                    </button>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* RIGHT COLUMN: ACTIVE JSON VIEW */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <ShieldCheck size={18} className="text-yellow-500" /> Active Session State
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Real-time JSON values cached in the user storage.</p>
                        </div>

                        <GlassCard className="p-5 border border-white/10 rounded-2xl h-[330px] overflow-auto scrollbar-hide text-left">
                            {currentParams ? (
                                <div className="space-y-3 font-mono text-xs text-zinc-300 leading-normal">
                                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                                        <span className="text-zinc-500">utm_source</span>
                                        <span className="text-yellow-500 font-bold">{currentParams.utm_source || 'null'}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                                        <span className="text-zinc-500">utm_medium</span>
                                        <span className="text-yellow-500 font-bold">{currentParams.utm_medium || 'null'}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                                        <span className="text-zinc-500">utm_campaign</span>
                                        <span className="text-yellow-500 font-bold">{currentParams.utm_campaign || 'null'}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                                        <span className="text-zinc-500">utm_term</span>
                                        <span className="text-yellow-500 font-bold">{currentParams.utm_term || 'null'}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                                        <span className="text-zinc-500">utm_content</span>
                                        <span className="text-yellow-500 font-bold">{currentParams.utm_content || 'null'}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                                        <span className="text-zinc-500">ref_partner</span>
                                        <span className="text-yellow-500 font-bold">{currentParams.ref || 'null'}</span>
                                    </div>
                                    <div className="pt-2 text-[10px] text-zinc-500 italic flex items-center gap-1">
                                        <Info size={10} /> Captured at {currentParams.captured_at}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center font-mono text-xs text-zinc-500">
                                    <AlertCircle size={32} className="text-zinc-600 mb-3" />
                                    <span>No campaign landing recorded. Generate a link and simulate landing to view data.</span>
                                </div>
                            )}
                        </GlassCard>
                    </div>
                </div>

                {/* --- MONITORING LOG TERMINAL --- */}
                <div className="space-y-6 flex flex-col text-left">
                    <div className="flex justify-between items-end">
                        <div>
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Terminal size={18} className="text-yellow-500" /> UTM Diagnostic Terminal
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Live logs verifying search string parameters parsing and storage allocations.</p>
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
                                if (log.includes('ACTION:')) color = 'text-cyan-400';
                                if (log.includes('GTM:')) color = 'text-purple-400';
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
        </main>
    );
}
