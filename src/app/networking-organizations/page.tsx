"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, ShieldAlert, Settings, Calendar, MapPin, Plus, 
    Trash2, Send, Terminal, Lock, CheckCircle2, ChevronDown, 
    ChevronUp, AlertCircle, RefreshCw, LogIn, LogOut, Briefcase, Mail, Phone
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';

interface NetworkOrg {
    id: string;
    name: string;
    location: string;
    membershipFee: string;
    totalMembers: number;
    contactEmail: string;
    status: 'Active' | 'Suspended';
}

interface NetworkMember {
    id: string;
    orgId: string;
    name: string;
    email: string;
    phone: string;
    designation: string;
    dateJoined: string;
}

interface NetworkEvent {
    id: string;
    orgId: string;
    title: string;
    date: string;
    venue: string;
}

const DEFAULT_ORGS: NetworkOrg[] = [
    {
        id: 'org_1',
        name: 'TiE Indore Chapter',
        location: 'Indore, India',
        membershipFee: '$500/year',
        totalMembers: 142,
        contactEmail: 'info@tieindore.org',
        status: 'Active'
    },
    {
        id: 'org_2',
        name: 'Indore Tech Chamber',
        location: 'Indore, India',
        membershipFee: '$200/year',
        totalMembers: 88,
        contactEmail: 'hello@indoretech.org',
        status: 'Active'
    },
    {
        id: 'org_3',
        name: 'BNI Apex Chapter',
        location: 'Indore, India',
        membershipFee: '$800/year',
        totalMembers: 64,
        contactEmail: 'bni@apexindore.in',
        status: 'Active'
    }
];

const DEFAULT_EVENTS: NetworkEvent[] = [
    {
        id: 'evt_1',
        orgId: 'org_1',
        title: 'Capital Investors Pitch 2026',
        date: 'Sept 18, 2026 | 06:00 PM',
        venue: 'Marriott Hotel, Indore'
    },
    {
        id: 'evt_2',
        orgId: 'org_2',
        title: 'Indore Founders Roundtable',
        date: 'Oct 11, 2026 | 05:00 PM',
        venue: 'Kiaan Tech Innovation Cafe'
    },
    {
        id: 'evt_3',
        orgId: 'org_3',
        title: 'Apex Business Breakfast',
        date: 'Oct 24, 2026 | 08:00 AM',
        venue: 'Sayaji Hotel, Indore'
    }
];

export default function NetworkingOrganizations() {
    const [orgs, setOrgs] = useState<NetworkOrg[]>([]);
    const [members, setMembers] = useState<NetworkMember[]>([]);
    const [events, setEvents] = useState<NetworkEvent[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Admin Auth State
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Accordions
    const [expandedOrgId, setExpandedOrgId] = useState<string | null>(null);

    // Membership Form Inputs
    const [selectedOrgId, setSelectedOrgId] = useState('');
    const [memberName, setMemberName] = useState('');
    const [memberEmail, setMemberEmail] = useState('');
    const [memberPhone, setMemberPhone] = useState('');
    const [memberDesignation, setMemberDesignation] = useState('');
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [regSuccess, setRegSuccess] = useState(false);

    // Admin Add Org Form Inputs
    const [newOrgName, setNewOrgName] = useState('');
    const [newOrgLocation, setNewOrgLocation] = useState('Indore, India');
    const [newOrgFee, setNewOrgFee] = useState('$500/year');
    const [newOrgEmail, setNewOrgEmail] = useState('');
    const [addOrgError, setAddOrgError] = useState('');
    const [showAddOrgModal, setShowAddOrgModal] = useState(false);

    // Reminder dispatcher indicators
    const [isSendingReminders, setIsSendingReminders] = useState(false);
    const [reminderProgress, setReminderProgress] = useState(0);

    // Monospace Terminal Console Logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load initial states from Local Storage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Organizations Setup
            const storedOrgs = localStorage.getItem('kiaan_networking_orgs');
            if (storedOrgs) {
                try {
                    setOrgs(JSON.parse(storedOrgs));
                } catch (e) {
                    setOrgs(DEFAULT_ORGS);
                }
            } else {
                localStorage.setItem('kiaan_networking_orgs', JSON.stringify(DEFAULT_ORGS));
                setOrgs(DEFAULT_ORGS);
            }

            // Members Setup
            const storedMembers = localStorage.getItem('kiaan_network_members');
            if (storedMembers) {
                try {
                    setMembers(JSON.parse(storedMembers));
                } catch (e) {
                    setMembers([]);
                }
            } else {
                localStorage.setItem('kiaan_network_members', JSON.stringify([]));
                setMembers([]);
            }

            // Events Setup
            const storedEvents = localStorage.getItem('kiaan_network_events');
            if (storedEvents) {
                try {
                    setEvents(JSON.parse(storedEvents));
                } catch (e) {
                    setEvents(DEFAULT_EVENTS);
                }
            } else {
                localStorage.setItem('kiaan_network_events', JSON.stringify(DEFAULT_EVENTS));
                setEvents(DEFAULT_EVENTS);
            }

            setIsLoading(false);
            addLog('SYSTEM: Networking Organization module initialized.');
            addLog('DATABASE: Read organization files from local storage schema.');
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

    // Admin Auth Actions
    const handleAdminLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');

        if (adminEmail === 'admin@kiaan.tech' && adminPassword === 'admin123') {
            setIsAdmin(true);
            setShowAdminLogin(false);
            setAdminEmail('');
            setAdminPassword('');
            addLog('ADMIN: Authenticated successfully. Organizer privileges unlocked.');
        } else {
            setLoginError('Invalid administrator credentials.');
            addLog('ERROR: Admin login failed - incorrect username/password combination.');
        }
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        addLog('ADMIN: Session ended. Access restricted to default views.');
    };

    // Register Member Actions
    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});
        setRegSuccess(false);

        const errors: Record<string, string> = {};
        if (!selectedOrgId) {
            errors.selectedOrg = 'Please select a networking organization to join.';
        }
        if (!memberName.trim() || memberName.trim().length < 3) {
            errors.memberName = 'Full Name must be at least 3 characters.';
        }
        if (!memberEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(memberEmail)) {
            errors.memberEmail = 'Please provide a valid contact email.';
        }
        if (!memberPhone || memberPhone.trim().length < 6) {
            errors.memberPhone = 'Please provide a valid contact number (min 6 digits).';
        }
        if (!memberDesignation.trim()) {
            errors.memberDesignation = 'Designation/Job Title is required.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            addLog('ERROR: Membership rejected due to validation errors.');
            return;
        }

        const targetedOrg = orgs.find(og => og.id === selectedOrgId);
        if (!targetedOrg) return;

        // Perform member increment calculations
        const updatedOrgs = orgs.map(og => {
            if (og.id === targetedOrg.id) {
                return {
                    ...og,
                    totalMembers: og.totalMembers + 1
                };
            }
            return og;
        });

        const newMember: NetworkMember = {
            id: 'mem_' + Date.now(),
            orgId: selectedOrgId,
            name: memberName.trim(),
            email: memberEmail.trim(),
            phone: memberPhone.trim(),
            designation: memberDesignation.trim(),
            dateJoined: new Date().toISOString()
        };

        const updatedMembers = [...members, newMember];

        // Save states
        setOrgs(updatedOrgs);
        setMembers(updatedMembers);
        localStorage.setItem('kiaan_networking_orgs', JSON.stringify(updatedOrgs));
        localStorage.setItem('kiaan_network_members', JSON.stringify(updatedMembers));

        setRegSuccess(true);
        addLog(`SUCCESS: Contact ${memberName} registered as member of ${targetedOrg.name}.`);
        
        // Reset fields
        setMemberName('');
        setMemberEmail('');
        setMemberPhone('');
        setMemberDesignation('');
    };

    // Admin CRUD Org Actions
    const handleAddOrg = (e: React.FormEvent) => {
        e.preventDefault();
        setAddOrgError('');

        if (!newOrgName.trim() || !newOrgLocation.trim() || !newOrgEmail.trim()) {
            setAddOrgError('All fields are required.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newOrgEmail.trim())) {
            setAddOrgError('Please provide a valid corporate contact email.');
            return;
        }

        const newOrg: NetworkOrg = {
            id: 'org_' + Date.now(),
            name: newOrgName.trim(),
            location: newOrgLocation.trim(),
            membershipFee: newOrgFee.trim(),
            totalMembers: 0,
            contactEmail: newOrgEmail.trim(),
            status: 'Active'
        };

        const updatedOrgs = [...orgs, newOrg];
        setOrgs(updatedOrgs);
        localStorage.setItem('kiaan_networking_orgs', JSON.stringify(updatedOrgs));

        addLog(`ADMIN: Created new networking organization "${newOrg.name}" in portal database.`);
        
        // Reset Inputs
        setNewOrgName('');
        setNewOrgLocation('Indore, India');
        setNewOrgFee('$500/year');
        setNewOrgEmail('');
        setShowAddOrgModal(false);
    };

    const handleDeleteOrg = (id: string) => {
        if (!confirm('Are you sure you want to delete this organization? This will also purge local memberships & events.')) return;
        
        const targeted = orgs.find(og => og.id === id);
        if (!targeted) return;

        const updatedOrgs = orgs.filter(og => og.id !== id);
        const updatedMembers = members.filter(mb => mb.orgId !== id);
        const updatedEvents = events.filter(ev => ev.orgId !== id);

        setOrgs(updatedOrgs);
        setMembers(updatedMembers);
        setEvents(updatedEvents);
        localStorage.setItem('kiaan_networking_orgs', JSON.stringify(updatedOrgs));
        localStorage.setItem('kiaan_network_members', JSON.stringify(updatedMembers));
        localStorage.setItem('kiaan_network_events', JSON.stringify(updatedEvents));

        addLog(`ADMIN: Purged organization "${targeted.name}" and all associated metadata records.`);
    };

    // Dispatch Reminders Simulator
    const handleSendReminders = () => {
        if (members.length === 0 && DEFAULT_ORGS.reduce((acc, curr) => acc + curr.totalMembers, 0) === 0) {
            alert('No registered members found.');
            return;
        }

        setIsSendingReminders(true);
        setReminderProgress(0);
        addLog('NOTIFICATION: Preparing batch event alerts for networking circles (Email & SMS)...');

        const interval = setInterval(() => {
            setReminderProgress(prev => {
                const next = prev + 25;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsSendingReminders(false);
                        addLog(`SUCCESS: Outbox dispatch complete. Notifications sent to members directory.`);
                    }, 200);
                    return 100;
                }

                // Log details on intervals
                if (next === 25) addLog('NOTIFICATION: Compiling weekly meetups calendars and target locations...');
                if (next === 50) {
                    const sampleEmail = members.length > 0 ? members[0].email : 'delegate@tieindore.org';
                    addLog(`NOTIFICATION: Delivering schedule checklist to target: ${sampleEmail}`);
                }
                if (next === 75) addLog('NOTIFICATION: Syncing carrier SMS gateway payloads...');

                return next;
            });
        }, 300);
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
                            Networking <span className="text-yellow-500">Organizations</span>
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm max-w-2xl font-mono">
                            Manage chambers, catalog local corporate contacts, view session schedules, and log reminders.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {isAdmin ? (
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setShowAddOrgModal(true)}
                                    className="px-3.5 py-1.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1 transition-all shadow-md"
                                >
                                    <Plus size={13} /> Add Chamber
                                </button>
                                <button 
                                    onClick={handleAdminLogout}
                                    className="px-3 py-1.5 border border-zinc-800 hover:border-red-500 text-zinc-400 hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1 font-mono"
                                >
                                    <LogOut size={11} /> Log Out Admin
                                </button>
                            </div>
                        ) : (
                            <button 
                                onClick={() => setShowAdminLogin(true)}
                                className="px-3.5 py-1.5 bg-zinc-900 border border-white/10 hover:border-yellow-500 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 font-mono"
                            >
                                <LogIn size={12} /> Admin Login
                            </button>
                        )}
                    </div>
                </div>

                {/* --- STATS RIBBON --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-left">
                    {[
                        { label: 'Total Chambers', val: `${orgs.length} Chapters`, desc: 'Active networking organizations' },
                        { label: 'Members Base', val: `${orgs.reduce((acc, curr) => acc + curr.totalMembers, 0)} Contacts`, desc: 'Enrolled directory contacts' },
                        { label: 'Scheduled Meets', val: `${events.length} Sessions`, desc: 'Upcoming calendar events' },
                        { label: 'Scope Mode', val: isAdmin ? 'Administrator' : 'General Public', desc: 'Active operation layout' }
                    ].map((stat, idx) => (
                        <GlassCard key={idx} className="p-3 border border-white/10 rounded-xl">
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-0.5">{stat.label}</span>
                            <h3 className="text-lg font-display font-black text-white uppercase mb-0.5">{stat.val}</h3>
                            <span className="text-[10px] text-zinc-400 font-sans block">{stat.desc}</span>
                        </GlassCard>
                    ))}
                </div>

                {/* --- MAIN PAGE CONTENT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-4">
                    {/* LEFT COLUMN: ORGANIZATIONS CONTAINER */}
                    <div className="lg:col-span-2 space-y-3">
                        <div className="text-left flex justify-between items-end">
                            <div>
                                <h3 className="text-base font-bold font-mono text-white uppercase tracking-wider mb-0.5 flex items-center gap-2">
                                    <Users size={16} className="text-yellow-500" /> Active Directories
                                </h3>
                                <p className="text-[11px] text-zinc-500 font-mono">List of local chapters, business groups, and technology chambers.</p>
                            </div>
                        </div>

                        {orgs.length === 0 ? (
                            <div className="p-12 text-center text-zinc-500 font-mono border border-white/5 rounded-2xl bg-zinc-950/40">
                                No networking organizations found. Log in as admin to register chambers.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {orgs.map((org) => {
                                    const isExpanded = expandedOrgId === org.id;
                                    const orgEvents = events.filter(ev => ev.orgId === org.id);
                                    return (
                                        <GlassCard key={org.id} className="p-5 border border-white/10 rounded-2xl relative overflow-hidden">
                                            <div className="flex justify-between items-start gap-4">
                                                <div className="flex-1">
                                                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider font-mono uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                                                        {org.membershipFee} • {org.totalMembers} Members
                                                    </span>
                                                    <h4 className="text-lg font-bold text-white font-mono mt-2 mb-1">{org.name}</h4>
                                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400 font-sans mt-2">
                                                        <span className="flex items-center gap-1.5"><MapPin size={13} className="text-yellow-500" /> {org.location}</span>
                                                        <span className="flex items-center gap-1.5"><Mail size={13} className="text-yellow-500" /> {org.contactEmail}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 shrink-0">
                                                    <button
                                                        onClick={() => setExpandedOrgId(isExpanded ? null : org.id)}
                                                        className="p-1.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-all"
                                                        title="Show Sessions Schedule"
                                                    >
                                                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                                    </button>
                                                    {isAdmin && (
                                                        <button
                                                            onClick={() => handleDeleteOrg(org.id)}
                                                            className="p-1.5 border border-zinc-800 hover:border-red-500 text-zinc-500 hover:text-red-500 rounded-lg transition-all"
                                                            title="Delete Organization"
                                                        >
                                                            <Trash2 size={14} />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Sessions accordion content */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="border-t border-white/5 pt-4 mt-4 space-y-3">
                                                            <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Upcoming Sessions</h5>
                                                            {orgEvents.length === 0 ? (
                                                                <p className="text-[10px] font-mono text-zinc-500">No scheduled sessions for this chapter.</p>
                                                            ) : (
                                                                orgEvents.map((evt) => (
                                                                    <div key={evt.id} className="flex gap-4 text-xs font-mono py-1.5 border-l-2 border-yellow-500/20 pl-4 relative">
                                                                        <div className="absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                                                        <div className="w-[140px] shrink-0 text-yellow-500 font-bold">{evt.date}</div>
                                                                        <div className="flex-1">
                                                                            <strong className="text-white block font-sans">{evt.title}</strong>
                                                                            <span className="text-[10px] text-zinc-500">Location: {evt.venue}</span>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </GlassCard>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* RIGHT COLUMN: MEMBERSHIP WIZARD */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Briefcase size={18} className="text-yellow-500" /> Enroll Contact
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Register new membership profiles directly.</p>
                        </div>

                        {regSuccess && (
                            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono flex items-center gap-2">
                                <CheckCircle2 size={14} /> Contact profile enrolled! Check logs.
                            </div>
                        )}

                        <GlassCard className="p-6 border border-white/10 rounded-2xl">
                            <form onSubmit={handleRegisterSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Select Chamber</label>
                                    <select
                                        value={selectedOrgId}
                                        onChange={e => {
                                            setSelectedOrgId(e.target.value);
                                            if (formErrors.selectedOrg) {
                                                const copy = { ...formErrors };
                                                delete copy.selectedOrg;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        className={`w-full px-3.5 py-2.5 bg-zinc-950 border ${formErrors.selectedOrg ? 'border-red-500' : 'border-white/5'} text-xs text-white rounded-xl outline-none cursor-pointer focus:border-yellow-500`}
                                    >
                                        <option value="">-- Select Chapter --</option>
                                        {orgs.map(org => (
                                            <option key={org.id} value={org.id}>
                                                {org.name} ({org.totalMembers} members)
                                            </option>
                                        ))}
                                    </select>
                                    {formErrors.selectedOrg && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.selectedOrg}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Full Name</label>
                                    <input 
                                        type="text"
                                        value={memberName}
                                        onChange={e => {
                                            setMemberName(e.target.value);
                                            if (formErrors.memberName) {
                                                const copy = { ...formErrors };
                                                delete copy.memberName;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="Thomas Anderson"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.memberName ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.memberName && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.memberName}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Email Address</label>
                                    <input 
                                        type="email"
                                        value={memberEmail}
                                        onChange={e => {
                                            setMemberEmail(e.target.value);
                                            if (formErrors.memberEmail) {
                                                const copy = { ...formErrors };
                                                delete copy.memberEmail;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="neo@metacortex.net"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.memberEmail ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.memberEmail && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.memberEmail}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Phone Number</label>
                                    <input 
                                        type="text"
                                        value={memberPhone}
                                        onChange={e => {
                                            setMemberPhone(e.target.value);
                                            if (formErrors.memberPhone) {
                                                const copy = { ...formErrors };
                                                delete copy.memberPhone;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="+91 98765 43210"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.memberPhone ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.memberPhone && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.memberPhone}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Job Title / Designation</label>
                                    <input 
                                        type="text"
                                        value={memberDesignation}
                                        onChange={e => {
                                            setMemberDesignation(e.target.value);
                                            if (formErrors.memberDesignation) {
                                                const copy = { ...formErrors };
                                                delete copy.memberDesignation;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="Principal Systems Engineer"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.memberDesignation ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.memberDesignation && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.memberDesignation}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md shadow-yellow-500/10"
                                >
                                    Enroll Member Pass
                                </button>
                            </form>
                        </GlassCard>
                    </div>
                </div>

                {/* --- REMINDERS BROADCAST & CLI EXECUTION LOG CONSOLE --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT COLUMN: REMINDERS CONTROLLER */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Send size={18} className="text-yellow-500" /> Reminder Broadcaster
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Send scheduled session notifications to all directory contacts.</p>
                        </div>

                        <GlassCard className="p-6 border border-white/10 rounded-2xl space-y-4 text-xs font-mono text-left">
                            <div className="space-y-1">
                                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Notification Channels</span>
                                <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl space-y-2">
                                    <div className="flex justify-between items-center text-zinc-300">
                                        <span>HTML Email Dispatch</span>
                                        <span className="text-green-400 font-bold">READY</span>
                                    </div>
                                    <div className="flex justify-between items-center text-zinc-300">
                                        <span>SMS Carrier Alerts</span>
                                        <span className="text-green-400 font-bold">READY</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                disabled={isSendingReminders}
                                onClick={handleSendReminders}
                                className="w-full bg-zinc-900 border border-white/10 hover:border-yellow-500 disabled:opacity-20 text-white py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider flex items-center justify-center gap-1.5 shadow-md font-mono"
                            >
                                {isSendingReminders ? (
                                    <RefreshCw size={12} className="animate-spin" />
                                ) : (
                                    <Send size={12} />
                                )}
                                Dispatch reminders now
                            </button>
                        </GlassCard>
                    </div>

                    {/* RIGHT COLUMN: CLI LOGS CONSOLE */}
                    <div className="lg:col-span-2 space-y-6 flex flex-col">
                        <div className="flex justify-between items-end">
                            <div className="text-left">
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Terminal size={18} className="text-yellow-500" /> Database Execution Console
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Audits of membership enrollments, calendar alerts, and admin writes.</p>
                            </div>
                            <button 
                                onClick={clearLogs}
                                className="text-[10px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest"
                            >
                                Clear Console
                            </button>
                        </div>

                        {/* Monospace console box */}
                        <div className="flex-1 bg-[#030303] border border-white/10 rounded-2xl p-5 font-mono text-[11px] text-zinc-400 h-[280px] overflow-y-auto flex flex-col justify-between scrollbar-hide shadow-inner">
                            <div className="space-y-1">
                                {logs.map((log, idx) => {
                                    let color = 'text-zinc-400';
                                    if (log.includes('SUCCESS:')) color = 'text-green-400';
                                    if (log.includes('ERROR:')) color = 'text-red-400';
                                    if (log.includes('WARNING:')) color = 'text-yellow-500';
                                    if (log.includes('SYSTEM:')) color = 'text-zinc-500';
                                    if (log.includes('ADMIN:')) color = 'text-cyan-400';
                                    if (log.includes('DATABASE:')) color = 'text-purple-400';
                                    return (
                                        <div key={idx} className={`${color} leading-relaxed break-all`}>
                                            {log}
                                        </div>
                                    );
                                })}
                                {isSendingReminders && (
                                    <div className="text-yellow-500 animate-pulse flex items-center gap-2 mt-2">
                                        <RefreshCw size={12} className="animate-spin" /> Batch dispatch in progress... [{reminderProgress}%]
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
                            <p className="text-xs text-zinc-500 font-mono mb-4">Provide authorization keys to unlock organizer privileges.</p>

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

            {/* --- ADMIN CREATE ORG MODAL DIALOG --- */}
            <AnimatePresence>
                {showAddOrgModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-zinc-950 border border-white/10 p-6 rounded-2xl w-full max-w-md relative text-left"
                        >
                            <h4 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Plus size={16} className="text-yellow-500" /> Create Chamber
                            </h4>
                            <p className="text-xs text-zinc-500 font-mono mb-4">Add a new networking organization to the portal directories.</p>

                            {addOrgError && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl font-mono mb-4">
                                    {addOrgError}
                                </div>
                            )}

                            <form onSubmit={handleAddOrg} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Chamber Name</label>
                                    <input 
                                        type="text"
                                        required
                                        value={newOrgName}
                                        onChange={e => setNewOrgName(e.target.value)}
                                        placeholder="TiE Indore Chapter"
                                        className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Location Chapter</label>
                                        <input 
                                            type="text"
                                            required
                                            value={newOrgLocation}
                                            onChange={e => setNewOrgLocation(e.target.value)}
                                            placeholder="Indore, India"
                                            className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Annual Membership Fee</label>
                                        <input 
                                            type="text"
                                            required
                                            value={newOrgFee}
                                            onChange={e => setNewOrgFee(e.target.value)}
                                            placeholder="$500/year"
                                            className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Contact Corporate Email</label>
                                    <input 
                                        type="email"
                                        required
                                        value={newOrgEmail}
                                        onChange={e => setNewOrgEmail(e.target.value)}
                                        placeholder="info@tieindore.org"
                                        className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                    />
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddOrgModal(false)}
                                        className="flex-1 py-2.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl text-xs font-bold transition-all font-mono"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md"
                                    >
                                        Create Chamber
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
