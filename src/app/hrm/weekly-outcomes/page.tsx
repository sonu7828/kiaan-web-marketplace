"use client";

import React, { useState, useEffect } from 'react';
import { 
    Calendar, CheckCircle, ChevronRight, User, Plus, Trash2, 
    Link as LinkIcon, RefreshCw, BarChart2, AlertCircle, ArrowLeft, ArrowRight, ShieldAlert 
} from 'lucide-react';
import Link from 'next/link';

/* ─── Mock Data for Employees ───────────────────────────────────────── */

interface Outcome {
    id: string;
    title: string;
    metric: string;
    status: 'Pending' | 'In Progress' | 'Completed' | 'Blocked';
    ticketId: string;
    selfScore: number; // 0.0 to 1.0
    managerScore: number; // 0.0 to 1.0
}

interface Employee {
    id: string;
    name: string;
    role: string;
    department: string;
    avatar: string;
    outcomes: Outcome[];
}

const initialEmployees: Employee[] = [
    {
        id: 'emp-1',
        name: 'Aarav Mehta',
        role: 'Senior Frontend Engineer',
        department: 'Engineering',
        avatar: 'AM',
        outcomes: [
            {
                id: 'out-11',
                title: 'Optimize Next.js image loading and assets caching for LCP reduction under 2.2s',
                metric: 'LCP metric < 2.2s (Current: 2.6s)',
                status: 'Completed',
                ticketId: 'PR #142',
                selfScore: 1.0,
                managerScore: 1.0
            },
            {
                id: 'out-12',
                title: 'Build reusable SocialProofBar component and inject near all website page CTAs',
                metric: '100% components covered, verified responsive',
                status: 'Completed',
                ticketId: 'JIRA-408',
                selfScore: 1.0,
                managerScore: 0.9
            },
            {
                id: 'out-13',
                title: 'Fix will-change CSS memory leaks inside Reveal motion modules',
                metric: 'Zero frame-rate drops during scrolling actions',
                status: 'In Progress',
                ticketId: 'PR #145',
                selfScore: 0.7,
                managerScore: 0.7
            }
        ]
    },
    {
        id: 'emp-2',
        name: 'Priya Sharma',
        role: 'Lead UI/UX Architect',
        department: 'Design',
        avatar: 'PS',
        outcomes: [
            {
                id: 'out-21',
                title: 'Deliver interactive Figma mockup for the 6-step engineering process page',
                metric: 'Signed off by product lead (100% complete)',
                status: 'Completed',
                ticketId: 'FIGMA-99',
                selfScore: 1.0,
                managerScore: 1.0
            },
            {
                id: 'out-22',
                title: 'Conduct heuristic evaluation of custom comparison matrix screens',
                metric: 'Identify 5 crucial UX recommendations',
                status: 'Completed',
                ticketId: 'JIRA-412',
                selfScore: 0.9,
                managerScore: 0.8
            },
            {
                id: 'out-23',
                title: 'Design typography rules for the print-optimized PDF One-Pagers',
                metric: 'Verified margins and styles under A4 constraints',
                status: 'Completed',
                ticketId: 'JIRA-415',
                selfScore: 1.0,
                managerScore: 1.0
            }
        ]
    },
    {
        id: 'emp-3',
        name: 'Rohan Das',
        role: 'DevOps & Infrastructure Lead',
        department: 'Infrastructure',
        avatar: 'RD',
        outcomes: [
            {
                id: 'out-31',
                title: 'Configure automated sitemap generation hook on new route commits',
                metric: 'Sitemap updates in under 2 minutes post-merge',
                status: 'Completed',
                ticketId: 'JIRA-501',
                selfScore: 1.0,
                managerScore: 1.0
            },
            {
                id: 'out-32',
                title: 'Enable preconnect caching layer headers for Calendly widgets',
                metric: 'Reduce network latency for static requests by 150ms',
                status: 'In Progress',
                ticketId: 'PR #122',
                selfScore: 0.6,
                managerScore: 0.5
            },
            {
                id: 'out-33',
                title: 'Clean Next.js server-development cache lock build script conflicts',
                metric: 'Zero locking errors during concurrent dev server starts',
                status: 'Blocked',
                ticketId: 'JIRA-505',
                selfScore: 0.2,
                managerScore: 0.0
            }
        ]
    }
];

const lifecycleStages = [
    { day: 'Monday', title: 'Set Outcomes', desc: 'Define 3-5 SMART outcomes & targets' },
    { day: 'Wednesday', title: 'Mid-Week Check', desc: 'Review progress and update notes' },
    { day: 'Friday', title: 'Self-Assess', desc: 'Input self-score and add PR/Ticket link' },
    { day: 'Next Monday', title: 'Manager Score', desc: 'Review, final score & archive outcomes' }
];

export default function WeeklyOutcomesPage() {
    const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
    const [selectedEmpId, setSelectedEmpId] = useState<string>('emp-1');
    const [currentDay, setCurrentDay] = useState<string>('Friday'); // default simulation day

    // Get current active employee
    const activeEmployee = employees.find(e => e.id === selectedEmpId) || employees[0];

    // Auto-calculate team completion %
    // Team completion % = Average of all final manager scores (converted to %) across all outcomes
    const calculateTeamCompletion = () => {
        let totalOutcomes = 0;
        let totalScoreSum = 0;

        employees.forEach(emp => {
            emp.outcomes.forEach(out => {
                totalOutcomes++;
                totalScoreSum += out.managerScore;
            });
        });

        if (totalOutcomes === 0) return 0;
        return Math.round((totalScoreSum / totalOutcomes) * 100);
    };

    // Calculate individual completion %
    const calculateIndividualCompletion = (emp: Employee) => {
        if (emp.outcomes.length === 0) return 0;
        const total = emp.outcomes.reduce((acc, curr) => acc + curr.managerScore, 0);
        return Math.round((total / emp.outcomes.length) * 100);
    };

    // Handle updating fields in the outcome list
    const handleOutcomeChange = (outcomeId: string, field: keyof Outcome, value: any) => {
        setEmployees(prev => prev.map(emp => {
            if (emp.id !== selectedEmpId) return emp;
            return {
                ...emp,
                outcomes: emp.outcomes.map(out => {
                    if (out.id !== outcomeId) return out;
                    return { ...out, [field]: value };
                })
            };
        }));
    };

    // Add new outcome (Limit to 3-5 outcomes)
    const handleAddOutcome = () => {
        if (activeEmployee.outcomes.length >= 5) {
            alert('A maximum of 5 weekly outcomes are allowed to maintain SMART focus.');
            return;
        }

        const newOutcome: Outcome = {
            id: `out-new-${Date.now()}`,
            title: '',
            metric: '',
            status: 'Pending',
            ticketId: '',
            selfScore: 0.0,
            managerScore: 0.0
        };

        setEmployees(prev => prev.map(emp => {
            if (emp.id !== selectedEmpId) return emp;
            return {
                ...emp,
                outcomes: [...emp.outcomes, newOutcome]
            };
        }));
    };

    // Remove outcome (Limit to min 3 outcomes)
    const handleRemoveOutcome = (outcomeId: string) => {
        if (activeEmployee.outcomes.length <= 3) {
            alert('A minimum of 3 weekly outcomes is required for accountability.');
            return;
        }

        setEmployees(prev => prev.map(emp => {
            if (emp.id !== selectedEmpId) return emp;
            return {
                ...emp,
                outcomes: emp.outcomes.filter(out => out.id !== outcomeId)
            };
        }));
    };

    // Simulate saving settings
    const [isSaving, setIsSaving] = useState(false);
    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            alert('OKR dashboard changes updated successfully and synced with HR database!');
        }, 800);
    };

    return (
        <div className="bg-black text-white min-h-screen pt-24 pb-20 selection:bg-yellow-500 selection:text-black">
            {/* Ambient background glow */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/3 blur-[120px] rounded-full" />
                <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-yellow-500/2 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 max-w-6xl">
                
                {/* ── Header ── */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-zinc-900 pb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-[9px] font-black uppercase tracking-[0.25em] mb-4">
                            HRMS Performance Suite
                        </div>
                        <h1 className="text-3xl md:text-5xl font-display uppercase tracking-tighter text-white">
                            Weekly Outcomes &amp; <span className="text-yellow-500">OKR Portal</span>
                        </h1>
                        <p className="text-zinc-400 text-xs mt-2 font-light max-w-xl">
                            Continuous weekly alignment portal. Set SMART outcomes on Monday, check Wednesday, self-assess on Friday, and manager reviews on the following Monday.
                        </p>
                    </div>

                    {/* Team Completion Metric Panel */}
                    <div className="flex items-center gap-5 bg-zinc-950 border border-zinc-900 px-6 py-4 shrink-0 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 blur-2xl rounded-full" />
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-yellow-500">
                            <BarChart2 size={24} />
                        </div>
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Team Completion Rate</p>
                            <p className="text-3xl font-display text-white mt-0.5">
                                {calculateTeamCompletion()}%
                            </p>
                            <div className="w-28 h-1.5 bg-zinc-900 rounded-full mt-1 overflow-hidden">
                                <div 
                                    className="h-full bg-yellow-500 transition-all duration-500" 
                                    style={{ width: `${calculateTeamCompletion()}%` }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Top Control Bar: Employee Picker & Day Simulator ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                    
                    {/* Employee Selector */}
                    <div className="lg:col-span-2 bg-zinc-950 border border-zinc-900 p-6 flex flex-wrap items-center gap-4">
                        <div className="w-full mb-2">
                            <label className="text-[9px] font-black uppercase tracking-wider text-zinc-500">
                                Select Employee Profile
                            </label>
                        </div>
                        {employees.map(emp => (
                            <button
                                key={emp.id}
                                onClick={() => setSelectedEmpId(emp.id)}
                                className={`flex items-center gap-3 px-4 py-3 border transition-all text-left min-w-[200px] flex-1 ${
                                    selectedEmpId === emp.id 
                                    ? 'border-yellow-500/40 bg-yellow-500/5 text-white' 
                                    : 'border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700 hover:text-white'
                                }`}
                            >
                                <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-black uppercase text-yellow-500">
                                    {emp.avatar}
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="text-xs font-black leading-none truncate">{emp.name}</h3>
                                    <p className="text-[9px] text-zinc-500 truncate mt-1">{emp.role}</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="text-[10px] font-display text-yellow-500">
                                        {calculateIndividualCompletion(emp)}%
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Day Simulator (changes edit permissions dynamically) */}
                    <div className="bg-zinc-950 border border-zinc-900 p-6">
                        <label className="text-[9px] font-black uppercase tracking-wider text-zinc-500 block mb-3">
                            Simulate OKR Lifecycle Day
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {['Monday', 'Wednesday', 'Friday', 'Next Monday'].map(day => (
                                <button
                                    key={day}
                                    onClick={() => setCurrentDay(day)}
                                    className={`py-2 px-3 text-[10px] font-black uppercase tracking-wider border transition-all ${
                                        currentDay === day
                                        ? 'bg-yellow-500 text-black border-yellow-500'
                                        : 'border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700'
                                    }`}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                        <p className="text-[9px] text-zinc-500 font-light mt-3 leading-relaxed">
                            💡 Changing the simulated day dynamically locks/unlocks edit permissions based on standard OKR schedules.
                        </p>
                    </div>

                </div>

                {/* ── Active Lifecycle Stage Bar ── */}
                <div className="bg-zinc-950 border border-zinc-900 p-6 mb-10 overflow-x-auto">
                    <div className="flex items-center justify-between min-w-[700px] gap-4">
                        {lifecycleStages.map((stage, idx) => {
                            const isActive = currentDay === stage.day;
                            const isPast = 
                                (currentDay === 'Wednesday' && idx > 0) ||
                                (currentDay === 'Friday' && idx > 1) ||
                                (currentDay === 'Next Monday' && idx > 2);

                            return (
                                <div 
                                    key={stage.day} 
                                    className={`flex-1 flex items-start gap-3 p-3 border transition-colors ${
                                        isActive 
                                        ? 'border-yellow-500 bg-yellow-500/5' 
                                        : isPast 
                                            ? 'border-zinc-800 bg-zinc-900/10 opacity-70' 
                                            : 'border-zinc-900 opacity-40'
                                    }`}
                                >
                                    <div className={`w-6 h-6 border flex items-center justify-center text-[10px] font-black shrink-0 ${
                                        isActive ? 'border-yellow-500 text-yellow-500' : 'border-zinc-800 text-zinc-500'
                                    }`}>
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className={`text-xs font-black uppercase tracking-wider ${isActive ? 'text-yellow-500' : 'text-white'}`}>
                                            {stage.title}
                                        </h3>
                                        <p className="text-[9px] text-zinc-500 mt-1 leading-tight">{stage.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Active Employee Weekly Outcomes ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* List of outcomes (Left/Mid) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-display uppercase tracking-tight">
                                Weekly OKRs ({activeEmployee.outcomes.length} of max 5)
                            </h2>
                            {currentDay === 'Monday' && (
                                <button
                                    onClick={handleAddOutcome}
                                    className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-yellow-500 hover:text-white transition-colors"
                                >
                                    <Plus size={14} /> Add Outcome
                                </button>
                            )}
                        </div>

                        {activeEmployee.outcomes.map((out, index) => {
                            // Define permissions dynamically based on the simulated day
                            const canEditScope = currentDay === 'Monday';
                            const canEditProgress = currentDay === 'Wednesday' || currentDay === 'Friday';
                            const canEditSelfScore = currentDay === 'Friday';
                            const canEditManagerScore = currentDay === 'Next Monday';

                            return (
                                <div 
                                    key={out.id} 
                                    className="border border-zinc-900 bg-zinc-950 p-6 relative overflow-hidden group hover:border-zinc-800 transition-colors"
                                >
                                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors" />

                                    {/* Line Header */}
                                    <div className="flex items-center justify-between gap-4 mb-4">
                                        <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500">
                                            Outcome #{index + 1}
                                        </span>
                                        <div className="flex items-center gap-3">
                                            {/* Status Badge */}
                                            {canEditProgress ? (
                                                <select
                                                    value={out.status}
                                                    onChange={(e) => handleOutcomeChange(out.id, 'status', e.target.value)}
                                                    className="bg-black border border-zinc-800 px-2 py-1 text-[9px] font-bold text-yellow-500 uppercase tracking-widest focus:outline-none"
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="In Progress">In Progress</option>
                                                    <option value="Completed">Completed</option>
                                                    <option value="Blocked">Blocked</option>
                                                </select>
                                            ) : (
                                                <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 border ${
                                                    out.status === 'Completed' ? 'border-emerald-600 bg-emerald-500/10 text-emerald-500' :
                                                    out.status === 'In Progress' ? 'border-yellow-600 bg-yellow-500/10 text-yellow-500' :
                                                    out.status === 'Blocked' ? 'border-rose-600 bg-rose-500/10 text-rose-500' :
                                                    'border-zinc-800 bg-zinc-900 text-zinc-500'
                                                }`}>
                                                    {out.status}
                                                </span>
                                            )}

                                            {/* Delete Button (Monday only) */}
                                            {canEditScope && (
                                                <button 
                                                    onClick={() => handleRemoveOutcome(out.id)}
                                                    className="text-zinc-600 hover:text-rose-500 transition-colors"
                                                    title="Delete outcome"
                                                >
                                                    <Trash2 size={13} />
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* SMART Outcome Title input/render */}
                                    <div className="mb-4">
                                        <label className="text-[8px] font-black uppercase tracking-widest text-zinc-600 block mb-1">
                                            SMART Weekly Outcome
                                        </label>
                                        {canEditScope ? (
                                            <input
                                                type="text"
                                                value={out.title}
                                                onChange={(e) => handleOutcomeChange(out.id, 'title', e.target.value)}
                                                placeholder="e.g. Reduce website core landing LCP metric below 2.2 seconds"
                                                className="w-full bg-black border border-zinc-800 px-3 py-2 text-xs font-medium text-white focus:border-yellow-500 focus:outline-none"
                                            />
                                        ) : (
                                            <p className="text-xs text-white font-medium">{out.title || 'No outcome scope defined'}</p>
                                        )}
                                    </div>

                                    {/* Metric target input/render */}
                                    <div className="mb-4">
                                        <label className="text-[8px] font-black uppercase tracking-widest text-zinc-600 block mb-1">
                                            Measurable Metric / Target
                                        </label>
                                        {canEditScope ? (
                                            <input
                                                type="text"
                                                value={out.metric}
                                                onChange={(e) => handleOutcomeChange(out.id, 'metric', e.target.value)}
                                                placeholder="e.g. PageSpeed Insights load output under 2.2s (baseline: 2.6s)"
                                                className="w-full bg-black border border-zinc-800 px-3 py-2 text-xs font-medium text-white focus:border-yellow-500 focus:outline-none"
                                            />
                                        ) : (
                                            <p className="text-xs text-zinc-400 font-light">{out.metric || 'No metric targets defined'}</p>
                                        )}
                                    </div>

                                    {/* Bottom row: Ticket Link & Scores */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-zinc-900/60">
                                        
                                        {/* Ticket/PR Link */}
                                        <div>
                                            <label className="text-[8px] font-black uppercase tracking-widest text-zinc-600 block mb-1">
                                                PR / Ticket ID
                                            </label>
                                            {canEditSelfScore ? (
                                                <div className="flex items-center">
                                                    <span className="bg-zinc-900 border border-r-0 border-zinc-800 px-2 py-2 text-zinc-600 text-xs">
                                                        <LinkIcon size={12} />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value={out.ticketId}
                                                        onChange={(e) => handleOutcomeChange(out.id, 'ticketId', e.target.value)}
                                                        placeholder="e.g. PR #142"
                                                        className="w-full bg-black border border-zinc-800 px-2 py-2 text-xs font-medium text-white focus:border-yellow-500 focus:outline-none"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1.5 mt-1">
                                                    <LinkIcon size={11} className="text-yellow-500" />
                                                    {out.ticketId ? (
                                                        <a
                                                            href={`https://github.com/kiaan-technology/workspace/pull/${out.ticketId.replace(/\D/g, '')}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-xs font-bold text-yellow-500 hover:underline"
                                                        >
                                                            {out.ticketId}
                                                        </a>
                                                    ) : (
                                                        <span className="text-xs text-zinc-600 italic">No link submitted</span>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        {/* Self Score */}
                                        <div>
                                            <label className="text-[8px] font-black uppercase tracking-widest text-zinc-600 block mb-1">
                                                Self Score (Friday)
                                            </label>
                                            {canEditSelfScore ? (
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="range"
                                                        min="0.0"
                                                        max="1.0"
                                                        step="0.1"
                                                        value={out.selfScore}
                                                        onChange={(e) => handleOutcomeChange(out.id, 'selfScore', parseFloat(e.target.value))}
                                                        className="w-full accent-yellow-500 h-1"
                                                    />
                                                    <span className="text-xs font-black text-white w-8 text-right bg-zinc-900 px-1.5 py-0.5 rounded">
                                                        {out.selfScore.toFixed(1)}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="w-16 h-2 bg-zinc-900 rounded overflow-hidden">
                                                        <div className="h-full bg-zinc-700" style={{ width: `${out.selfScore * 100}%` }} />
                                                    </div>
                                                    <span className="text-xs font-bold text-zinc-300">
                                                        {out.selfScore.toFixed(1)} / 1.0
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Manager Score */}
                                        <div>
                                            <label className="text-[8px] font-black uppercase tracking-widest text-zinc-600 block mb-1">
                                                Manager Score
                                            </label>
                                            {canEditManagerScore ? (
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="range"
                                                        min="0.0"
                                                        max="1.0"
                                                        step="0.1"
                                                        value={out.managerScore}
                                                        onChange={(e) => handleOutcomeChange(out.id, 'managerScore', parseFloat(e.target.value))}
                                                        className="w-full accent-yellow-500 h-1"
                                                    />
                                                    <span className="text-xs font-black text-white w-8 text-right bg-zinc-900 px-1.5 py-0.5 rounded">
                                                        {out.managerScore.toFixed(1)}
                                                    </span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="w-16 h-2 bg-zinc-900 rounded overflow-hidden">
                                                        <div className="h-full bg-yellow-500" style={{ width: `${out.managerScore * 100}%` }} />
                                                    </div>
                                                    <span className="text-xs font-black text-yellow-500">
                                                        {out.managerScore.toFixed(1)} / 1.0
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            );
                        })}

                        {/* Save Actions Button */}
                        <div className="pt-4 flex justify-end">
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors"
                            >
                                <RefreshCw size={14} className={isSaving ? 'animate-spin' : ''} />
                                {isSaving ? 'Saving Changes...' : 'Save & Sync OKRs'}
                            </button>
                        </div>
                    </div>

                    {/* OKR Rules Sidebar / Info Panel (Right) */}
                    <div className="space-y-6">
                        
                        {/* Summary Stats Card */}
                        <div className="border border-zinc-900 bg-zinc-950 p-6">
                            <h3 className="text-sm font-black uppercase tracking-wider text-white border-b border-zinc-900 pb-3 mb-4">
                                Scorecard: {activeEmployee.name}
                            </h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-zinc-500 font-light">Employee self-score avg:</span>
                                        <span className="font-bold text-zinc-300">
                                            {(activeEmployee.outcomes.reduce((acc, curr) => acc + curr.selfScore, 0) / activeEmployee.outcomes.length || 0).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="w-full h-1 bg-zinc-900 rounded overflow-hidden">
                                        <div 
                                            className="h-full bg-zinc-600 transition-all duration-300"
                                            style={{ width: `${(activeEmployee.outcomes.reduce((acc, curr) => acc + curr.selfScore, 0) / activeEmployee.outcomes.length || 0) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-zinc-500 font-light">Final manager score avg:</span>
                                        <span className="font-bold text-yellow-500">
                                            {(activeEmployee.outcomes.reduce((acc, curr) => acc + curr.managerScore, 0) / activeEmployee.outcomes.length || 0).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="w-full h-1 bg-zinc-900 rounded overflow-hidden">
                                        <div 
                                            className="h-full bg-yellow-500 transition-all duration-300"
                                            style={{ width: `${(activeEmployee.outcomes.reduce((acc, curr) => acc + curr.managerScore, 0) / activeEmployee.outcomes.length || 0) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-zinc-900 grid grid-cols-2 gap-4">
                                    <div className="text-center bg-black border border-zinc-900 p-2">
                                        <p className="text-[8px] font-black uppercase text-zinc-600">Total OKRs</p>
                                        <p className="text-xl font-display text-white mt-0.5">{activeEmployee.outcomes.length}</p>
                                    </div>
                                    <div className="text-center bg-black border border-zinc-900 p-2">
                                        <p className="text-[8px] font-black uppercase text-zinc-600">Completed</p>
                                        <p className="text-xl font-display text-emerald-500 mt-0.5">
                                            {activeEmployee.outcomes.filter(o => o.status === 'Completed').length}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SMART OKR Validation Rules */}
                        <div className="border border-zinc-900 bg-zinc-950 p-6">
                            <h3 className="text-sm font-black uppercase tracking-wider text-white border-b border-zinc-900 pb-3 mb-4">
                                OKR Validation Rules
                            </h3>
                            
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <AlertCircle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-black uppercase text-zinc-300">3–5 Outcomes Target</p>
                                        <p className="text-[10px] text-zinc-500 font-light mt-0.5">
                                            Each employee is restricted to a maximum of 5 targets to maintain weekly focus.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <AlertCircle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-black uppercase text-zinc-300">Link PR / Ticket ID</p>
                                        <p className="text-[10px] text-zinc-500 font-light mt-0.5">
                                            All outcomes scored above 0.0 must be validated by linking a corresponding PR number or JIRA issue.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <AlertCircle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-black uppercase text-zinc-300">Dynamic Lock Schedule</p>
                                        <p className="text-[10px] text-zinc-500 font-light mt-0.5">
                                            Monday defines scope, Wednesday locks scope edits, Friday locks work, and next Monday allows manager review only.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
