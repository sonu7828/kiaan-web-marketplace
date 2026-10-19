"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    RefreshCw, CheckCircle, XCircle, Settings, ShieldAlert,
    Terminal, Link2, Copy, Power, ExternalLink, Key, ToggleLeft, 
    ToggleRight, Database, Play, AlertCircle, Check
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';

// Struct definitions
interface SyncStats {
    lastSynced: string;
    syncedCount: number;
    healthScore: number;
    errorsCount: number;
}

interface HubSpotState {
    isConnected: boolean;
    accessToken: string;
    refreshToken: string;
    tokenExpiry: number; // in seconds
    clientId: string;
    clientSecret: string;
    developerKey: string;
    webhookSecret: string;
    contactsSync: SyncStats;
    companiesSync: SyncStats;
    dealsSync: SyncStats;
    webhookEvents: string[];
}

const DEFAULT_STATE: HubSpotState = {
    isConnected: false,
    accessToken: '',
    refreshToken: '',
    tokenExpiry: 0,
    clientId: 'hub_client_id_97521',
    clientSecret: '••••••••••••••••••••••••',
    developerKey: 'pat-na-127e2a9b-439d-403a-8f12-925c9c7c6048',
    webhookSecret: 'whsec_kiaan_hubspot_882910',
    contactsSync: { lastSynced: 'N/A', syncedCount: 0, healthScore: 100, errorsCount: 0 },
    companiesSync: { lastSynced: 'N/A', syncedCount: 0, healthScore: 100, errorsCount: 0 },
    dealsSync: { lastSynced: 'N/A', syncedCount: 0, healthScore: 100, errorsCount: 0 },
    webhookEvents: ['contact.created', 'deal.won']
};

export default function HubSpotIntegration() {
    const [state, setState] = useState<HubSpotState>(DEFAULT_STATE);
    const [isLoading, setIsLoading] = useState(true);
    
    // UI flows toggles
    const [oauthPopupOpen, setOauthPopupOpen] = useState(false);
    const [oauthStep, setOauthStep] = useState(1);
    const [oauthSelectedAccount, setOauthSelectedAccount] = useState('');
    
    // Sync progress indicators
    const [syncingType, setSyncingType] = useState<'contacts' | 'companies' | 'deals' | null>(null);
    const [syncProgress, setSyncProgress] = useState(0);

    // Forms error tracking
    const [clientIdInput, setClientIdInput] = useState('');
    const [clientSecretInput, setClientSecretInput] = useState('');
    const [devKeyInput, setDevKeyInput] = useState('');
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [saveSuccess, setSaveSuccess] = useState(false);

    // Terminal console logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load initial state
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = localStorage.getItem('kiaan_hubspot_integration_state');
            if (data) {
                try {
                    const parsed = JSON.parse(data);
                    setState(parsed);
                    setClientIdInput(parsed.clientId);
                    setClientSecretInput(parsed.clientSecret);
                    setDevKeyInput(parsed.developerKey);
                } catch (e) {
                    setState(DEFAULT_STATE);
                }
            } else {
                localStorage.setItem('kiaan_hubspot_integration_state', JSON.stringify(DEFAULT_STATE));
                setClientIdInput(DEFAULT_STATE.clientId);
                setClientSecretInput(DEFAULT_STATE.clientSecret);
                setDevKeyInput(DEFAULT_STATE.developerKey);
            }
            setIsLoading(false);
            
            // Initial log messages
            addLog('SYSTEM: Initialization check completed.');
            addLog('SYSTEM: Configuration state loaded from database localStorage.');
            if (data && JSON.parse(data).isConnected) {
                addLog('OAUTH: HubSpot OAuth handshake token verified. Status: Connected.');
            } else {
                addLog('OAUTH: No active OAuth credentials detected. Status: Disconnected.');
            }
        }
    }, []);

    // Auto-scroll CLI console
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

    const saveStateToStorage = (updatedState: HubSpotState) => {
        setState(updatedState);
        if (typeof window !== 'undefined') {
            localStorage.setItem('kiaan_hubspot_integration_state', JSON.stringify(updatedState));
        }
    };

    // OAuth Connect Actions
    const handleConnectClick = () => {
        if (!clientIdInput || !clientSecretInput) {
            setFormErrors({ form: 'Please save Client ID and Client Secret in settings first.' });
            addLog('ERROR: OAuth request failed - Missing Client ID/Secret credentials.');
            return;
        }
        setFormErrors({});
        setOauthStep(1);
        setOauthPopupOpen(true);
        addLog('OAUTH: Initiating secure OAuth scope verification sequence...');
    };

    const handleGrantAccess = () => {
        setOauthStep(2); // Redirect loader step
        addLog('OAUTH: Authorization code granted. Redirecting to callback handler...');
        
        setTimeout(() => {
            const updated = {
                ...state,
                isConnected: true,
                accessToken: 'access_token_hs_' + Math.random().toString(36).substr(2, 9),
                refreshToken: 'refresh_token_hs_' + Math.random().toString(36).substr(2, 9),
                tokenExpiry: 3600
            };
            saveStateToStorage(updated);
            setOauthPopupOpen(false);
            addLog('OAUTH: Access token exchanged successfully. Access scope: contacts, companies, deals.');
            addLog('SYSTEM: HubSpot webhook channels activated.');
        }, 1500);
    };

    const handleDisconnect = () => {
        if (!confirm('Are you sure you want to disconnect your HubSpot CRM connection?')) return;
        const updated = {
            ...state,
            isConnected: false,
            accessToken: '',
            refreshToken: '',
            tokenExpiry: 0
        };
        saveStateToStorage(updated);
        addLog('OAUTH: Access tokens revoked. HubSpot CRM connection terminated.');
    };

    // Sync Actions
    const handleSync = (type: 'contacts' | 'companies' | 'deals') => {
        if (!state.isConnected) {
            alert('Please connect your HubSpot CRM account before initiating data sync.');
            addLog(`ERROR: Sync rejected - HubSpot CRM is not authenticated.`);
            return;
        }
        
        setSyncingType(type);
        setSyncProgress(0);
        addLog(`SYNC: Starting data synchronization process for category: ${type.toUpperCase()}...`);

        // Interval to progress loader
        const interval = setInterval(() => {
            setSyncProgress(prev => {
                const next = prev + 10;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        // Complete sync calculations
                        const recordSyncCount = Math.floor(Math.random() * 50) + 15;
                        const errorCount = Math.random() > 0.85 ? 1 : 0;
                        const health = errorCount > 0 ? 94.5 : 100;
                        
                        const syncObj: SyncStats = {
                            lastSynced: new Date().toLocaleString(),
                            syncedCount: recordSyncCount,
                            healthScore: health,
                            errorsCount: errorCount
                        };

                        const updated = {
                            ...state,
                            [`${type}Sync`]: syncObj
                        } as HubSpotState;

                        saveStateToStorage(updated);
                        setSyncingType(null);
                        addLog(`SYNC: Completed syncing ${recordSyncCount} ${type} items. Errors: ${errorCount}. Health: ${health}%.`);
                        if (errorCount > 0) {
                            addLog(`WARNING: 1 deal object failed mapping checks (Code HS-422: Missing email handle).`);
                        }
                    }, 200);
                    return 100;
                }
                
                // Add console logs matching progress checkpoints
                if (next === 30) addLog(`SYNC: Fetching payloads from HubSpot CRM REST endpoint...`);
                if (next === 60) addLog(`SYNC: Performing relational database mapping and schema validations...`);
                if (next === 90) addLog(`SYNC: Appending new records to local storage schema...`);

                return next;
            });
        }, 150);
    };

    // Save Credentials Form
    const handleSaveSettings = (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});
        setSaveSuccess(false);

        const errors: Record<string, string> = {};
        if (!clientIdInput.trim() || clientIdInput.trim().length < 5) {
            errors.clientId = 'Client ID must be at least 5 characters.';
        }
        if (!clientSecretInput.trim() || clientSecretInput.trim().length < 8) {
            errors.clientSecret = 'Client Secret must be at least 8 characters.';
        }
        if (!devKeyInput.trim() || !devKeyInput.startsWith('pat-')) {
            errors.developerKey = 'Developer token must be a valid Private App Token starting with "pat-".';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            addLog('ERROR: Settings save rejected due to input validation failures.');
            return;
        }

        const updated = {
            ...state,
            clientId: clientIdInput.trim(),
            clientSecret: clientSecretInput.trim(),
            developerKey: devKeyInput.trim()
        };

        saveStateToStorage(updated);
        setSaveSuccess(true);
        addLog('SYSTEM: Settings saved. Developer API Key and private client secrets updated.');
        
        setTimeout(() => setSaveSuccess(false), 3000);
    };

    // Webhooks event triggers
    const toggleWebhookEvent = (event: string) => {
        let events = [...state.webhookEvents];
        if (events.includes(event)) {
            events = events.filter(e => e !== event);
            addLog(`WEBHOOK: Unsubscribed event: ${event}`);
        } else {
            events.push(event);
            addLog(`WEBHOOK: Subscribed event: ${event}`);
        }
        saveStateToStorage({ ...state, webhookEvents: events });
    };

    const regenerateSecret = () => {
        const nextSecret = 'whsec_hs_' + Math.random().toString(36).substr(2, 10);
        saveStateToStorage({ ...state, webhookSecret: nextSecret });
        addLog('WEBHOOK: Signing key regenerated successfully.');
    };

    const handleCopy = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        addLog(`SYSTEM: Copied ${type} to clipboard.`);
        alert(`${type} copied to clipboard!`);
    };

    return (
        <main className="min-h-screen bg-black text-white relative pt-6 lg:pt-8 pb-10 font-sans overflow-x-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 border-b border-white/5 pb-3">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white mb-1">
                            HubSpot CRM <span className="text-yellow-500">Integration</span>
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm max-w-2xl font-mono">
                            OAuth Connection, Contact/Company/Deal Sync Pipelines, and Webhook Logging.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {state.isConnected ? (
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-[11px] font-bold rounded-full flex items-center gap-1 font-mono">
                                    <CheckCircle size={11} /> CONNECTED
                                </span>
                                <button 
                                    onClick={handleDisconnect}
                                    className="px-3 py-1.5 border border-zinc-800 hover:border-red-500 text-zinc-400 hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1"
                                >
                                    <Power size={11} /> Disconnect
                                </button>
                            </div>
                        ) : (
                            <button 
                                onClick={handleConnectClick}
                                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shadow-yellow-500/20"
                            >
                                <Link2 size={13} /> Connect HubSpot
                            </button>
                        )}
                    </div>
                </div>

                {/* --- MAIN DASHBOARD SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-4">
                    {/* LEFT COLUMN: SETTINGS FORM (Client ID, Secret, API key) */}
                    <div className="lg:col-span-1 space-y-3">
                        <div className="text-left">
                            <h3 className="text-base font-bold font-mono text-white uppercase tracking-wider mb-0.5 flex items-center gap-2">
                                <Settings size={16} className="text-yellow-500" /> Integration Settings
                            </h3>
                            <p className="text-[11px] text-zinc-500 font-mono">Manage API keys and OAuth secrets required for handshakes.</p>
                        </div>

                        {saveSuccess && (
                            <div className="p-2.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono flex items-center gap-2">
                                <CheckCircle size={13} /> Credentials saved successfully!
                            </div>
                        )}

                        {formErrors.form && (
                            <div className="p-2.5 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl font-mono flex items-center gap-2">
                                <AlertCircle size={13} /> {formErrors.form}
                            </div>
                        )}

                        <GlassCard className="p-4 border border-white/10 rounded-2xl">
                            <form onSubmit={handleSaveSettings} className="space-y-3">
                                <div>
                                    <label className="block text-[9.5px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Client ID</label>
                                    <input 
                                        type="text"
                                        value={clientIdInput}
                                        onChange={e => setClientIdInput(e.target.value)}
                                        placeholder="Enter OAuth Client ID"
                                        className={`w-full px-3 py-1.5 bg-zinc-950 border ${formErrors.clientId ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.clientId && <p className="text-[9.5px] text-red-500 font-mono mt-1">{formErrors.clientId}</p>}
                                </div>

                                <div>
                                    <label className="block text-[9.5px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Client Secret</label>
                                    <input 
                                        type="password"
                                        value={clientSecretInput}
                                        onChange={e => setClientSecretInput(e.target.value)}
                                        placeholder="••••••••••••••••"
                                        className={`w-full px-3 py-1.5 bg-zinc-950 border ${formErrors.clientSecret ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.clientSecret && <p className="text-[9.5px] text-red-500 font-mono mt-1">{formErrors.clientSecret}</p>}
                                </div>

                                <div>
                                    <label className="block text-[9.5px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Private App Token (Developer Key)</label>
                                    <div className="relative">
                                        <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={13} />
                                        <input 
                                            type="text"
                                            value={devKeyInput}
                                            onChange={e => setDevKeyInput(e.target.value)}
                                            placeholder="pat-na-xxxxxxx"
                                            className={`w-full pl-8 pr-3 py-1.5 bg-zinc-950 border ${formErrors.developerKey ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-[11px] text-white rounded-xl outline-none transition-all`}
                                        />
                                    </div>
                                    {formErrors.developerKey && <p className="text-[9.5px] text-red-500 font-mono mt-1 leading-normal">{formErrors.developerKey}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-zinc-900 border border-white/10 hover:border-yellow-500 text-white py-2 rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md"
                                >
                                    Save Settings
                                </button>
                            </form>
                        </GlassCard>
                    </div>

                    {/* MIDDLE COLUMN: DATA SYNC SYSTEM */}
                    <div className="lg:col-span-2 space-y-3">
                        <div className="text-left">
                            <h3 className="text-base font-bold font-mono text-white uppercase tracking-wider mb-0.5 flex items-center gap-2">
                                <Database size={16} className="text-yellow-500" /> Data Sync Pipelines
                            </h3>
                            <p className="text-[11px] text-zinc-500 font-mono">Synchronize HubSpot relational records into your SaaS workspace database.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {[
                                {
                                    id: 'contacts' as const,
                                    name: 'Contacts Sync',
                                    desc: 'User metadata, emails, activity lines, and customer details mapping.',
                                    stats: state.contactsSync
                                },
                                {
                                    id: 'companies' as const,
                                    name: 'Companies Sync',
                                    desc: 'Corporate domains, organization profiles, and client accounts grouping.',
                                    stats: state.companiesSync
                                },
                                {
                                    id: 'deals' as const,
                                    name: 'Deals Sync',
                                    desc: 'Sales funnels, revenue projections, subscription values, and contract tags.',
                                    stats: state.dealsSync
                                }
                            ].map((pipeline) => {
                                const isSyncing = syncingType === pipeline.id;
                                return (
                                    <GlassCard key={pipeline.id} className="p-5 border border-white/10 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
                                                {pipeline.name}
                                                {pipeline.stats.errorsCount > 0 && (
                                                    <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] font-bold rounded">
                                                        WARN
                                                    </span>
                                                )}
                                            </h4>
                                            <p className="text-xs text-zinc-400 font-sans mt-0.5 leading-relaxed">{pipeline.desc}</p>
                                            
                                            {/* Sync status numbers bar */}
                                            <div className="grid grid-cols-3 gap-2 mt-4 text-[10px] font-mono text-zinc-500 border-t border-white/5 pt-3">
                                                <div>
                                                    <span>Last Sync:</span>
                                                    <p className="text-zinc-300 font-bold mt-0.5">{pipeline.stats.lastSynced?.split(',')[1] || 'Never'}</p>
                                                </div>
                                                <div>
                                                    <span>Synced Count:</span>
                                                    <p className="text-zinc-300 font-bold mt-0.5">{pipeline.stats.syncedCount} records</p>
                                                </div>
                                                <div>
                                                    <span>Health:</span>
                                                    <p className={`font-bold mt-0.5 ${pipeline.stats.healthScore < 100 ? 'text-red-400' : 'text-green-400'}`}>{pipeline.stats.healthScore}%</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="shrink-0 w-full sm:w-auto flex flex-col items-stretch sm:items-end gap-2">
                                            <button
                                                disabled={isSyncing || !state.isConnected}
                                                onClick={() => handleSync(pipeline.id)}
                                                className="bg-yellow-500 hover:bg-yellow-400 text-black disabled:opacity-20 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md shadow-yellow-500/10"
                                            >
                                                {isSyncing ? (
                                                    <RefreshCw size={12} className="animate-spin" />
                                                ) : (
                                                    <Play size={12} />
                                                )}
                                                Sync Now
                                            </button>
                                        </div>
                                    </GlassCard>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* --- WEBHOOKS SETUPS & LIVE CLI LOGGER --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {/* LEFT COLUMN: WEBHOOK SETUP */}
                    <div className="lg:col-span-1 space-y-3">
                        <div className="text-left">
                            <h3 className="text-base font-bold font-mono text-white uppercase tracking-wider mb-0.5 flex items-center gap-2">
                                <Link2 size={16} className="text-yellow-500" /> Webhook Integrations
                            </h3>
                            <p className="text-[11px] text-zinc-500 font-mono">Configure webhook subscriptions for live updates.</p>
                        </div>

                        <GlassCard className="p-4 border border-white/10 rounded-2xl space-y-3 text-xs font-mono">
                            <div>
                                <label className="block text-[9.5px] text-zinc-500 uppercase tracking-widest mb-1">Target Endpoint URL</label>
                                <div className="flex bg-zinc-950 border border-white/5 rounded-xl px-3 py-1.5 justify-between items-center gap-2">
                                    <span className="text-[11px] text-zinc-400 truncate">https://kiaantechnology.com/api/webhooks/hubspot/</span>
                                    <button 
                                        onClick={() => handleCopy('https://kiaantechnology.com/api/webhooks/hubspot/', 'Webhook URL')}
                                        className="text-zinc-500 hover:text-yellow-500"
                                        title="Copy Endpoint"
                                    >
                                        <Copy size={13} />
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[9.5px] text-zinc-500 uppercase tracking-widest mb-1">Webhook Signing Secret</label>
                                <div className="flex bg-zinc-950 border border-white/5 rounded-xl px-3 py-1.5 justify-between items-center gap-2">
                                    <span className="text-[11px] text-zinc-400 truncate">{state.webhookSecret}</span>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={regenerateSecret}
                                            className="text-zinc-500 hover:text-yellow-500"
                                            title="Regenerate"
                                        >
                                            <RefreshCw size={13} />
                                        </button>
                                        <button 
                                            onClick={() => handleCopy(state.webhookSecret, 'Signing Secret')}
                                            className="text-zinc-500 hover:text-yellow-500"
                                            title="Copy Secret"
                                        >
                                            <Copy size={13} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Subscriptions toggles */}
                            <div className="border-t border-white/5 pt-3 space-y-2">
                                <label className="block text-[9.5px] text-zinc-500 uppercase tracking-widest mb-1">Event Subscriptions</label>
                                
                                {[
                                    { id: 'contact.created', label: 'Contact Created' },
                                    { id: 'contact.deleted', label: 'Contact Deleted' },
                                    { id: 'company.updated', label: 'Company Updated' },
                                    { id: 'deal.won', label: 'Deal Closed/Won' }
                                ].map((event) => {
                                    const active = state.webhookEvents.includes(event.id);
                                    return (
                                        <div key={event.id} className="flex justify-between items-center py-0.5">
                                            <span className="text-[11px] text-zinc-300">{event.label}</span>
                                            <button 
                                                onClick={() => toggleWebhookEvent(event.id)}
                                                className={`text-zinc-400 transition-colors ${active ? 'text-yellow-500' : 'hover:text-white'}`}
                                            >
                                                {active ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </GlassCard>
                    </div>

                    {/* RIGHT COLUMN: CLI LOGS CONSOLE */}
                    <div className="lg:col-span-2 space-y-3 flex flex-col">
                        <div className="flex justify-between items-end">
                            <div className="text-left">
                                <h3 className="text-base font-bold font-mono text-white uppercase tracking-wider mb-0.5 flex items-center gap-2">
                                    <Terminal size={16} className="text-yellow-500" /> API Execution Terminal
                                </h3>
                                <p className="text-[11px] text-zinc-500 font-mono">Live synchronization outputs and API webhook triggers stream.</p>
                            </div>
                            <button 
                                onClick={clearLogs}
                                className="text-[9.5px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest"
                            >
                                Clear Console
                            </button>
                        </div>

                        {/* Monospace terminal console container */}
                        <div className="flex-1 bg-[#030303] border border-white/10 rounded-2xl p-5 font-mono text-[11px] text-zinc-400 h-[280px] overflow-y-auto flex flex-col justify-between scrollbar-hide shadow-inner">
                            <div className="space-y-1">
                                {logs.map((log, index) => {
                                    let color = 'text-zinc-400';
                                    if (log.includes('SUCCESS:')) color = 'text-green-400';
                                    if (log.includes('ERROR:')) color = 'text-red-400';
                                    if (log.includes('WARNING:')) color = 'text-yellow-500';
                                    if (log.includes('SYSTEM:')) color = 'text-zinc-500';
                                    if (log.includes('OAUTH:')) color = 'text-cyan-400';
                                    return (
                                        <div key={index} className={`${color} leading-relaxed break-all`}>
                                            {log}
                                        </div>
                                    );
                                })}
                                {syncingType && (
                                    <div className="text-yellow-500 animate-pulse flex items-center gap-2 mt-2">
                                        <RefreshCw size={12} className="animate-spin" /> Syncing in progress... [{syncProgress}%]
                                    </div>
                                )}
                                <div ref={consoleEndRef} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SIMULATED HUBSPOT OAUTH CONSENT DIALOG --- */}
            <AnimatePresence>
                {oauthPopupOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white text-zinc-900 p-6 rounded-2xl w-full max-w-md shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative"
                        >
                            {/* HubSpot Header branding */}
                            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-zinc-200">
                                <div className="w-8 h-8 rounded bg-[#FF7A59] flex items-center justify-center text-white font-black text-sm">
                                    h
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-zinc-900 leading-tight">HubSpot Authentication</h4>
                                    <span className="text-[10px] text-zinc-500 font-mono">secure.hubspot.com/oauth/v2/authorize</span>
                                </div>
                            </div>

                            {/* OAUTH STEP 1: SELECT ACCOUNT & GRANT ACCES */}
                            {oauthStep === 1 && (
                                <div className="space-y-5 text-sm">
                                    <div className="p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl">
                                        <p className="text-xs text-zinc-600">
                                            <strong className="text-zinc-900">Kiaan Technology App</strong> is requesting permission to access your HubSpot CRM account credentials.
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wide">Choose CRM Portal Account</label>
                                        <select 
                                            value={oauthSelectedAccount}
                                            onChange={e => setOauthSelectedAccount(e.target.value)}
                                            className="w-full px-3 py-2 bg-white border border-zinc-300 focus:border-[#FF7A59] text-xs text-zinc-800 rounded-xl outline-none cursor-pointer"
                                        >
                                            <option value="">-- Choose Account Portal --</option>
                                            <option value="kiaan_tech_portal">Kiaan Technology (Portal ID: 42376031)</option>
                                            <option value="test_sandbox">Developer Sandbox Portal (Portal ID: 882910)</option>
                                        </select>
                                    </div>

                                    {/* Permissions Scopes List */}
                                    <div>
                                        <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-wide mb-2">Requested Scopes & Permissions</label>
                                        <ul className="space-y-2 text-xs text-zinc-600 font-mono">
                                            <li className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                    <Check size={10} className="stroke-[3px]" />
                                                </div>
                                                <span>contacts (read/write contacts data)</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                    <Check size={10} className="stroke-[3px]" />
                                                </div>
                                                <span>companies (read/write corporate records)</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                    <Check size={10} className="stroke-[3px]" />
                                                </div>
                                                <span>deals (read/write deals & pipeline sales)</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex gap-3 pt-3">
                                        <button
                                            type="button"
                                            onClick={() => setOauthPopupOpen(false)}
                                            className="flex-1 py-2.5 border border-zinc-300 hover:bg-zinc-50 text-zinc-500 hover:text-zinc-800 rounded-xl text-xs font-bold transition-all"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            disabled={!oauthSelectedAccount}
                                            onClick={handleGrantAccess}
                                            className="flex-1 py-2.5 bg-[#FF7A59] hover:bg-[#ff6c44] text-white disabled:opacity-30 rounded-xl text-xs font-bold transition-all shadow-md"
                                        >
                                            Connect Portal
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* OAUTH STEP 2: DYNAMIC REDIRECT SPINNER */}
                            {oauthStep === 2 && (
                                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                                    <RefreshCw className="animate-spin text-[#FF7A59]" size={36} />
                                    <div>
                                        <h5 className="font-bold text-zinc-900 text-sm">Authorizing Callback URL</h5>
                                        <p className="text-zinc-500 text-xs mt-1">Exchanging authorization code for token keys...</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}
