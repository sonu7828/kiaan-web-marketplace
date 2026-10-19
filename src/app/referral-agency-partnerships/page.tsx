"use client";

import { useState, useEffect, useCallback } from 'react';
import { 
    Search, Plus, Edit, Trash2, Calendar, DollarSign, Users, Percent, 
    ChevronDown, ChevronUp, Bell, Lock, Unlock, Mail, Phone, Clock,
    AlertCircle, CheckCircle, XCircle, FileText, PlusCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock system date matching local metadata
const SYSTEM_TODAY = '2026-07-29';

interface Referral {
    referralId: string;
    clientName: string;
    dealValue: number;
    status: 'Lead' | 'Won' | 'Lost';
    dateCreated: string;
}

interface FollowUp {
    logId: string;
    date: string;
    notes: string;
    nextFollowUpDate: string;
}

interface Agency {
    id: string;
    name: string;
    type: 'Referral' | 'Reseller';
    status: 'Active' | 'Pending' | 'Suspended';
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    commissionRate: number;
    referrals: Referral[];
    followUps: FollowUp[];
    notes: string;
    dateCreated: string;
}

const SEED_DATA: Agency[] = [
    {
        id: "agency_01",
        name: "Apex Marketing Solutions",
        type: "Referral",
        status: "Active",
        contactName: "Jane Cooper",
        contactEmail: "jane@apexmarketing.com",
        contactPhone: "+1-555-0199",
        commissionRate: 15,
        referrals: [
            {
                referralId: "ref_01",
                clientName: "Nova Retail Inc.",
                dealValue: 12500,
                status: "Won",
                dateCreated: "2026-07-15T10:00:00Z"
            },
            {
                referralId: "ref_02",
                clientName: "Eco Logistics",
                dealValue: 8500,
                status: "Lead",
                dateCreated: "2026-07-28T14:30:00Z"
            }
        ],
        followUps: [
            {
                logId: "log_01",
                date: "2026-07-28T09:00:00Z",
                notes: "Reviewed new reseller tiered pricing. Client requested follow-up next week.",
                nextFollowUpDate: "2026-08-04T00:00:00Z"
            }
        ],
        notes: "Premium digital marketing agency based in NY. Focuses on e-commerce solutions.",
        dateCreated: "2026-07-10T12:00:00Z"
    },
    {
        id: "agency_02",
        name: "Zenith SaaS Resellers",
        type: "Reseller",
        status: "Active",
        contactName: "Michael Scott",
        contactEmail: "michael@zenithsaas.com",
        contactPhone: "+1-555-0245",
        commissionRate: 25,
        referrals: [
            {
                referralId: "ref_03",
                clientName: "Dunder Mifflin",
                dealValue: 45000,
                status: "Won",
                dateCreated: "2026-07-12T09:15:00Z"
            }
        ],
        followUps: [
            {
                logId: "log_02",
                date: "2026-07-29T10:00:00Z",
                notes: "Logged quarterly reseller review. Discussed expanding to HRM product stack.",
                nextFollowUpDate: "2026-07-29T00:00:00Z"
            }
        ],
        notes: "Enterprise software consultancy covering the Midwest region.",
        dateCreated: "2026-07-11T08:00:00Z"
    },
    {
        id: "agency_03",
        name: "Synergy Tech Partners",
        type: "Referral",
        status: "Pending",
        contactName: "Sarah Jenkins",
        contactEmail: "sarah@synergytech.io",
        contactPhone: "+1-555-0322",
        commissionRate: 10,
        referrals: [],
        followUps: [
            {
                logId: "log_03",
                date: "2026-07-26T11:00:00Z",
                notes: "Introductory meeting. Sent partnership proposal documents.",
                nextFollowUpDate: "2026-07-29T00:00:00Z"
            }
        ],
        notes: "Cloud migration and consulting firm interested in referral programs.",
        dateCreated: "2026-07-25T15:00:00Z"
    }
];

export default function ReferralAgencyPartnerships() {
    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    // Dashboard Data & Filters
    const [agencies, setAgencies] = useState<Agency[]>([]);
    const [totalAgenciesCount, setTotalAgenciesCount] = useState(0);
    const [page, setPage] = useState(1);
    const [limit] = useState(6); // Max 6 cards per page
    const [search, setSearch] = useState('');
    const [typeFilter, setTypeFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(true);

    // Dynamic expanded states
    const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

    // Agency Modal Form State
    const [agencyModalOpen, setAgencyModalOpen] = useState(false);
    const [editingAgency, setEditingAgency] = useState<Agency | null>(null);
    const [formName, setFormName] = useState('');
    const [formType, setFormType] = useState<'Referral' | 'Reseller'>('Referral');
    const [formStatus, setFormStatus] = useState<'Active' | 'Pending' | 'Suspended'>('Active');
    const [formContactName, setFormContactName] = useState('');
    const [formContactEmail, setFormContactEmail] = useState('');
    const [formContactPhone, setFormContactPhone] = useState('');
    const [formRate, setFormRate] = useState('10');
    const [formNotes, setFormNotes] = useState('');
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    // Inner detail logs form states
    const [newReferralName, setNewReferralName] = useState('');
    const [newReferralValue, setNewReferralValue] = useState('');
    const [newReferralStatus, setNewReferralStatus] = useState<'Lead' | 'Won' | 'Lost'>('Lead');
    const [referralErrors, setReferralErrors] = useState<string>('');

    const [newFollowUpNotes, setNewFollowUpNotes] = useState('');
    const [newFollowUpDate, setNewFollowUpDate] = useState('');
    const [followUpErrors, setFollowUpErrors] = useState<string>('');

    // Date Overdue Check
    const isOverdueOrToday = (dateStr: string) => {
        if (!dateStr) return false;
        const nextDate = new Date(dateStr);
        const today = new Date(SYSTEM_TODAY);
        nextDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        return nextDate <= today;
    };

    // Helper to get raw localStorage database
    const getLocalDB = (): Agency[] => {
        if (typeof window === 'undefined') return SEED_DATA;
        const data = localStorage.getItem('kiaan_agency_partnerships');
        if (!data) {
            localStorage.setItem('kiaan_agency_partnerships', JSON.stringify(SEED_DATA));
            return SEED_DATA;
        }
        try {
            return JSON.parse(data);
        } catch (e) {
            return SEED_DATA;
        }
    };

    const saveLocalDB = (data: Agency[]) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('kiaan_agency_partnerships', JSON.stringify(data));
        }
    };

    // Load function simulating API request
    const fetchAgencies = useCallback(() => {
        setIsLoading(true);
        // Simulate a minor 250ms API response latency for premium UX feel
        setTimeout(() => {
            let data = getLocalDB();

            // 1. Filter by Search Query
            if (search) {
                const query = search.toLowerCase();
                data = data.filter((item) => 
                    item.name.toLowerCase().includes(query) ||
                    item.contactName.toLowerCase().includes(query) ||
                    item.contactEmail.toLowerCase().includes(query)
                );
            }

            // 2. Filter by Type
            if (typeFilter && typeFilter !== 'All') {
                data = data.filter((item) => item.type === typeFilter);
            }

            // 3. Filter by Status
            if (statusFilter && statusFilter !== 'All') {
                data = data.filter((item) => item.status === statusFilter);
            }

            // Sort by Date Created desc
            data.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());

            // Pagination
            const total = data.length;
            const startIndex = (page - 1) * limit;
            const paginatedData = data.slice(startIndex, startIndex + limit);

            setAgencies(paginatedData);
            setTotalAgenciesCount(total);
            setIsLoading(false);
        }, 250);
    }, [search, typeFilter, statusFilter, page, limit]);

    // Check Auth Status from localStorage
    const checkAuthStatus = useCallback(() => {
        if (typeof window !== 'undefined') {
            const auth = localStorage.getItem('kiaan_admin_auth');
            setIsAuthenticated(auth === 'true');
        }
    }, []);

    // Initial triggers
    useEffect(() => {
        checkAuthStatus();
        fetchAgencies();
    }, [checkAuthStatus, fetchAgencies]);

    // Reset pagination when search or filters change
    useEffect(() => {
        setPage(1);
    }, [search, typeFilter, statusFilter]);

    // Auth Actions
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError('');

        if (loginEmail === 'admin@kiaan.tech' && loginPassword === 'admin123') {
            if (typeof window !== 'undefined') {
                localStorage.setItem('kiaan_admin_auth', 'true');
            }
            setIsAuthenticated(true);
            setLoginModalOpen(false);
            setLoginEmail('');
            setLoginPassword('');
        } else {
            setLoginError('Invalid credentials. Use admin@kiaan.tech / admin123');
        }
    };

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('kiaan_admin_auth', 'false');
        }
        setIsAuthenticated(false);
    };

    // Calculate dynamic stats from overall localStorage database for correct summary counts
    const dbSummary = getLocalDB();
    const totalWonRevenue = dbSummary.reduce((sum, current) => {
        const wonDeals = current.referrals?.filter(r => r.status === 'Won') || [];
        const value = wonDeals.reduce((subSum, r) => subSum + r.dealValue, 0);
        return sum + value;
    }, 0);

    const followUpAlerts = dbSummary.filter(a => 
        a.followUps?.some(f => isOverdueOrToday(f.nextFollowUpDate))
    );

    // Form Validators
    const validateAgencyForm = () => {
        const errors: Record<string, string> = {};
        if (!formName.trim() || formName.trim().length < 3) {
            errors.name = 'Agency Name must be at least 3 characters.';
        }
        if (!formContactName.trim() || formContactName.trim().length < 2) {
            errors.contactName = 'Primary contact name is required.';
        }
        if (!formContactEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formContactEmail)) {
            errors.contactEmail = 'A valid contact email address is required.';
        }
        if (!formContactPhone || formContactPhone.trim().length < 6) {
            errors.contactPhone = 'A valid phone number is required (min 6 digits).';
        }
        const rate = parseFloat(formRate);
        if (isNaN(rate) || rate < 0 || rate > 100) {
            errors.rate = 'Commission/discount rate must be a percentage between 0 and 100.';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // CRUD - Add/Edit Submit
    const handleAgencySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateAgencyForm()) return;

        let db = getLocalDB();

        if (editingAgency) {
            // Update
            db = db.map(item => {
                if (item.id === editingAgency.id) {
                    return {
                        ...item,
                        name: formName.trim(),
                        type: formType,
                        status: formStatus,
                        contactName: formContactName.trim(),
                        contactEmail: formContactEmail.trim(),
                        contactPhone: formContactPhone.trim(),
                        commissionRate: parseFloat(formRate),
                        notes: formNotes.trim()
                    };
                }
                return item;
            });
        } else {
            // Create
            const newAgency: Agency = {
                id: 'agency_' + Date.now(),
                name: formName.trim(),
                type: formType,
                status: formStatus,
                contactName: formContactName.trim(),
                contactEmail: formContactEmail.trim(),
                contactPhone: formContactPhone.trim(),
                commissionRate: parseFloat(formRate),
                referrals: [],
                followUps: [],
                notes: formNotes.trim(),
                dateCreated: new Date().toISOString()
            };
            db.push(newAgency);
        }

        saveLocalDB(db);
        setAgencyModalOpen(false);
        setEditingAgency(null);
        resetAgencyForm();
        fetchAgencies();
    };

    const resetAgencyForm = () => {
        setFormName('');
        setFormType('Referral');
        setFormStatus('Active');
        setFormContactName('');
        setFormContactEmail('');
        setFormContactPhone('');
        setFormRate('10');
        setFormNotes('');
        setFormErrors({});
    };

    const handleEditAgency = (agency: Agency) => {
        setEditingAgency(agency);
        setFormName(agency.name);
        setFormType(agency.type);
        setFormStatus(agency.status);
        setFormContactName(agency.contactName);
        setFormContactEmail(agency.contactEmail);
        setFormContactPhone(agency.contactPhone);
        setFormRate(agency.commissionRate.toString());
        setFormNotes(agency.notes);
        setFormErrors({});
        setAgencyModalOpen(true);
    };

    const handleDeleteAgency = (id: string) => {
        if (!confirm('Are you sure you want to remove this partner agency?')) return;
        let db = getLocalDB();
        db = db.filter(item => item.id !== id);
        saveLocalDB(db);
        fetchAgencies();
    };

    // Sub-records actions (Referral & Follow up)
    const handleAddReferralSubmit = (agencyId: string) => {
        setReferralErrors('');
        if (!newReferralName.trim() || newReferralName.trim().length < 2) {
            setReferralErrors('Referral Client Name must be at least 2 characters.');
            return;
        }
        const val = parseFloat(newReferralValue);
        if (isNaN(val) || val < 0) {
            setReferralErrors('Deal value must be a positive number.');
            return;
        }

        let db = getLocalDB();
        db = db.map(agency => {
            if (agency.id === agencyId) {
                const newReferral: Referral = {
                    referralId: 'ref_' + Date.now(),
                    clientName: newReferralName.trim(),
                    dealValue: val,
                    status: newReferralStatus,
                    dateCreated: new Date().toISOString()
                };
                return {
                    ...agency,
                    referrals: [...(agency.referrals || []), newReferral]
                };
            }
            return agency;
        });

        saveLocalDB(db);
        setNewReferralName('');
        setNewReferralValue('');
        setNewReferralStatus('Lead');
        fetchAgencies();
    };

    const handleAddFollowUpSubmit = (agencyId: string) => {
        setFollowUpErrors('');
        if (!newFollowUpNotes.trim() || newFollowUpNotes.trim().length < 3) {
            setFollowUpErrors('Follow-up note must be at least 3 characters.');
            return;
        }
        if (!newFollowUpDate) {
            setFollowUpErrors('Follow-up schedule date is required.');
            return;
        }

        let db = getLocalDB();
        db = db.map(agency => {
            if (agency.id === agencyId) {
                const newLog: FollowUp = {
                    logId: 'log_' + Date.now(),
                    date: new Date().toISOString(),
                    notes: newFollowUpNotes.trim(),
                    nextFollowUpDate: new Date(newFollowUpDate).toISOString()
                };
                return {
                    ...agency,
                    followUps: [...(agency.followUps || []), newLog]
                };
            }
            return agency;
        });

        saveLocalDB(db);
        setNewFollowUpNotes('');
        setNewFollowUpDate('');
        fetchAgencies();
    };

    // Calculate totals
    const totalPages = Math.ceil(totalAgenciesCount / limit) || 1;

    return (
        <main className="min-h-screen bg-black text-white relative pt-6 lg:pt-8 pb-10 font-sans overflow-x-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
                {/* --- 1. HEADER & AUTH BAR --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 border-b border-white/5 pb-3">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white mb-1">
                            Referral & Reseller <span className="text-yellow-500">Agencies</span>
                        </h1>
                        <p className="text-zinc-400 text-xs md:text-sm max-w-2xl font-mono">
                            System Date: {SYSTEM_TODAY} // Monitor affiliate commissions, referral pipelines, and reseller workflows.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        {isAuthenticated ? (
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-[11px] font-bold rounded-full flex items-center gap-1 font-mono">
                                    <Unlock size={11} /> ADMIN SESSION
                                </span>
                                <button 
                                    onClick={handleLogout}
                                    className="px-3 py-1.5 border border-zinc-800 hover:border-red-500 text-zinc-400 hover:text-white rounded-lg text-xs font-bold transition-all"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <button 
                                onClick={() => {
                                    setLoginError('');
                                    setLoginModalOpen(true);
                                }}
                                className="px-3.5 py-1.5 bg-zinc-900 border border-white/10 hover:border-yellow-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all font-mono"
                            >
                                <Lock size={12} className="text-yellow-500" /> Admin Access
                            </button>
                        )}
                    </div>
                </div>

                {/* --- 2. STATS PANELS --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-4">
                    <div className="bg-zinc-950/40 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center gap-3 hover:border-yellow-500/30 transition-all duration-300">
                        <div className="p-2.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-lg">
                            <Users size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Total Agencies</p>
                            <p className="text-xl font-bold text-white mt-0.5">{dbSummary.length}</p>
                        </div>
                    </div>

                    <div className="bg-zinc-950/40 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center gap-3 hover:border-yellow-500/30 transition-all duration-300">
                        <div className="p-2.5 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg">
                            <DollarSign size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Total Won Deals</p>
                            <p className="text-xl font-bold text-white mt-0.5">${totalWonRevenue.toLocaleString()}</p>
                        </div>
                    </div>

                    <div className="bg-zinc-950/40 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center gap-3 hover:border-yellow-500/30 transition-all duration-300">
                        <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 rounded-lg">
                            <Percent size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Active Resellers</p>
                            <p className="text-xl font-bold text-white mt-0.5">
                                {dbSummary.filter(a => a.type === 'Reseller' && a.status === 'Active').length}
                            </p>
                        </div>
                    </div>

                    <div className="bg-zinc-950/40 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center gap-3 hover:border-yellow-500/30 transition-all duration-300">
                        <div className="p-2.5 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg">
                            <Bell size={20} className={followUpAlerts.length > 0 ? "animate-bounce" : ""} />
                        </div>
                        <div>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Due Follow-ups</p>
                            <p className="text-2xl font-bold text-white mt-0.5">{followUpAlerts.length}</p>
                        </div>
                    </div>
                </div>

                {/* --- 3. DYNAMIC NOTIFICATIONS / ALERTS BANNER --- */}
                <AnimatePresence>
                    {followUpAlerts.length > 0 && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 mb-8 flex items-start gap-3.5"
                        >
                            <AlertCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                            <div>
                                <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wide">Action Required: Pending Follow-ups</h4>
                                <ul className="text-xs text-zinc-400 mt-1 space-y-1 list-disc pl-4 font-mono">
                                    {followUpAlerts.map(agency => {
                                        const overdueLogs = agency.followUps?.filter(f => isOverdueOrToday(f.nextFollowUpDate)) || [];
                                        const latestDate = overdueLogs[overdueLogs.length - 1]?.nextFollowUpDate?.split('T')[0] || SYSTEM_TODAY;
                                        return (
                                            <li key={agency.id}>
                                                Contact <strong className="text-white">{agency.contactName}</strong> at <strong className="text-yellow-500">{agency.name}</strong> (Scheduled: {latestDate}).
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* --- 4. FILTER BAR --- */}
                <div className="bg-zinc-950/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 mb-8 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
                    <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center flex-1">
                        <div className="relative flex-1">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                            <input 
                                type="text"
                                placeholder="Search agency name, email, contact..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-zinc-900/60 border border-white/5 focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all placeholder:text-zinc-600"
                            />
                        </div>

                        {/* Type Select Tabs */}
                        <div className="flex bg-zinc-900/80 border border-white/5 rounded-xl p-1 gap-1">
                            {['All', 'Referral', 'Reseller'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setTypeFilter(type)}
                                    className={`px-3.5 py-1 text-xs font-bold rounded-lg transition-all ${
                                        typeFilter === type 
                                            ? 'bg-yellow-500 text-black shadow-lg font-black' 
                                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* Status Select dropdown */}
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-zinc-500 font-mono hidden sm:inline">Status:</span>
                            <select 
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-3.5 py-1.5 bg-zinc-900 border border-white/5 text-zinc-300 text-xs rounded-xl outline-none focus:border-yellow-500 cursor-pointer"
                            >
                                <option value="All">All Statuses</option>
                                <option value="Active">Active</option>
                                <option value="Pending">Pending</option>
                                <option value="Suspended">Suspended</option>
                            </select>
                        </div>
                    </div>

                    {isAuthenticated && (
                        <button
                            onClick={() => {
                                resetAgencyForm();
                                setEditingAgency(null);
                                setAgencyModalOpen(true);
                            }}
                            className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all font-black uppercase shadow-lg shadow-yellow-500/20"
                        >
                            <Plus size={14} /> Add Partner Agency
                        </button>
                    )}
                </div>

                {/* --- 5. AGENCY CARDS GRID --- */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="h-64 bg-zinc-900/20 border border-white/5 animate-pulse rounded-2xl" />
                        ))}
                    </div>
                ) : agencies.length === 0 ? (
                    <div className="bg-zinc-950/20 border border-white/5 rounded-2xl py-16 text-center">
                        <FileText className="mx-auto text-zinc-700 mb-4" size={48} />
                        <h3 className="text-lg font-bold text-zinc-400 font-mono">No Partnerships Found</h3>
                        <p className="text-zinc-600 text-xs mt-1">Try adjusting your filters, query, or add a new agency partnership record.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {agencies.map((agency) => {
                            const isExpanded = expandedCardId === agency.id;
                            const hasActiveFollowUp = agency.followUps?.some(f => isOverdueOrToday(f.nextFollowUpDate));

                            return (
                                <motion.div
                                    layout="position"
                                    key={agency.id}
                                    className={`bg-zinc-950/40 backdrop-blur-md border rounded-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
                                        isExpanded ? 'border-yellow-500/40 shadow-[0_0_30px_rgba(234,179,8,0.08)] col-span-1 md:col-span-2 lg:col-span-3' : 'border-white/10 hover:border-white/20'
                                    }`}
                                >
                                    {/* Top Status & Info row */}
                                    <div className="p-6 pb-4">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-2">
                                                <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider font-mono ${
                                                    agency.type === 'Reseller' 
                                                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                                                        : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                                                }`}>
                                                    {agency.type}
                                                </span>
                                                <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider font-mono ${
                                                    agency.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                                    agency.status === 'Pending' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                                                    'bg-red-500/10 text-red-400 border border-red-500/20'
                                                }`}>
                                                    {agency.status}
                                                </span>
                                            </div>

                                            {hasActiveFollowUp && (
                                                <span className="flex h-2.5 w-2.5 relative">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 font-display uppercase">
                                            {agency.name}
                                        </h3>
                                        <p className="text-zinc-400 text-xs line-clamp-2 mb-4 font-mono leading-relaxed">
                                            {agency.notes || 'No notes defined for this agency partnership.'}
                                        </p>

                                        {/* Contact Details Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-500 font-mono mt-2 border-t border-white/5 pt-4">
                                            <div className="flex items-center gap-2">
                                                <Users size={12} className="text-zinc-600" />
                                                <span>Contact: <strong className="text-zinc-300">{agency.contactName}</strong></span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Mail size={12} className="text-zinc-600 animate-pulse" />
                                                <a href={`mailto:${agency.contactEmail}`} className="hover:text-yellow-500 hover:underline">{agency.contactEmail}</a>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone size={12} className="text-zinc-600" />
                                                <a href={`tel:${agency.contactPhone}`} className="hover:text-yellow-500">{agency.contactPhone}</a>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Percent size={12} className="text-zinc-600" />
                                                <span>{agency.type === 'Reseller' ? 'Reseller Discount' : 'Referral Commission'}: <strong className="text-yellow-500">{agency.commissionRate}%</strong></span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons & Expand Controls */}
                                    <div className="px-6 py-4 bg-zinc-950/20 border-t border-white/5 flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            {isAuthenticated && (
                                                <>
                                                    <button 
                                                        onClick={() => handleEditAgency(agency)}
                                                        className="p-2 hover:bg-zinc-800/80 border border-transparent hover:border-white/10 text-zinc-400 hover:text-white rounded-lg transition-all"
                                                        title="Edit Agency"
                                                    >
                                                        <Edit size={14} />
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDeleteAgency(agency.id)}
                                                        className="p-2 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 text-zinc-400 hover:text-red-500 rounded-lg transition-all"
                                                        title="Delete Agency"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </>
                                            )}
                                        </div>

                                        <button
                                            onClick={() => setExpandedCardId(isExpanded ? null : agency.id)}
                                            className="text-xs font-mono text-zinc-400 hover:text-yellow-500 flex items-center gap-1.5 py-1 px-2.5 rounded-lg hover:bg-white/5 transition-all"
                                        >
                                            {isExpanded ? (
                                                <>Collapse Panels <ChevronUp size={14} /></>
                                            ) : (
                                                <>Manage Workflows & Tracking ({agency.referrals?.length || 0}) <ChevronDown size={14} /></>
                                            )}
                                        </button>
                                    </div>

                                    {/* --- 6. EXPANDED WORKFLOW PANEL --- */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="border-t border-white/5 bg-zinc-950/60 overflow-hidden"
                                            >
                                                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                                                    {/* LEFT COLUMN: REFERRALS PIPELINE */}
                                                    <div className="border-r border-white/5 pr-0 lg:pr-8">
                                                        <div className="flex justify-between items-center mb-4">
                                                            <h4 className="text-sm font-bold font-mono text-white uppercase tracking-wider flex items-center gap-2">
                                                                <DollarSign size={16} className="text-yellow-500" /> Referrals / Resold Clients Pipeline
                                                            </h4>
                                                            <span className="text-[11px] font-mono text-zinc-500">
                                                                Total Value: ${agency.referrals?.reduce((s, r) => s + r.dealValue, 0).toLocaleString()}
                                                            </span>
                                                        </div>

                                                        {/* Referrals list */}
                                                        {(!agency.referrals || agency.referrals.length === 0) ? (
                                                            <p className="text-xs font-mono text-zinc-600 py-3 italic">No deals registered yet.</p>
                                                        ) : (
                                                            <div className="max-h-52 overflow-y-auto mb-4 border border-white/5 rounded-xl scrollbar-hide">
                                                                <table className="w-full text-left text-xs font-mono">
                                                                    <thead>
                                                                        <tr className="bg-zinc-900 text-zinc-500 border-b border-white/5">
                                                                            <th className="p-2.5">Client Name</th>
                                                                            <th className="p-2.5">Value</th>
                                                                            <th className="p-2.5">Status</th>
                                                                            <th className="p-2.5 text-right font-light">Added</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="divide-y divide-white/5">
                                                                        {agency.referrals.map((ref) => (
                                                                            <tr key={ref.referralId} className="hover:bg-white/5 text-zinc-300">
                                                                                <td className="p-2.5 font-bold">{ref.clientName}</td>
                                                                                <td className="p-2.5 text-yellow-500 font-bold">${ref.dealValue.toLocaleString()}</td>
                                                                                <td className="p-2.5">
                                                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                                                                        ref.status === 'Won' ? 'bg-green-500/10 text-green-400' :
                                                                                        ref.status === 'Lead' ? 'bg-yellow-500/10 text-yellow-500' :
                                                                                        'bg-red-500/10 text-red-500'
                                                                                    }`}>
                                                                                        {ref.status}
                                                                                    </span>
                                                                                </td>
                                                                                <td className="p-2.5 text-zinc-600 text-right">{ref.dateCreated?.split('T')[0]}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        )}

                                                        {/* Add Referral form */}
                                                        {isAuthenticated ? (
                                                            <div className="bg-zinc-900/50 p-4 border border-white/5 rounded-xl mt-4">
                                                                <h5 className="text-xs font-bold text-zinc-400 mb-3 flex items-center gap-1.5 uppercase font-mono">
                                                                    <PlusCircle size={13} /> Log New Client Deal
                                                                </h5>
                                                                {referralErrors && <p className="text-[10px] text-red-500 font-mono mb-2">{referralErrors}</p>}
                                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                                                    <input 
                                                                        type="text" 
                                                                        placeholder="Nova Corporation" 
                                                                        value={newReferralName}
                                                                        onChange={e => setNewReferralName(e.target.value)}
                                                                        className="px-2.5 py-1.5 bg-zinc-950 border border-white/5 rounded-lg text-xs outline-none focus:border-yellow-500"
                                                                    />
                                                                    <input 
                                                                        type="number" 
                                                                        placeholder="Deal Value ($)" 
                                                                        value={newReferralValue}
                                                                        onChange={e => setNewReferralValue(e.target.value)}
                                                                        className="px-2.5 py-1.5 bg-zinc-950 border border-white/5 rounded-lg text-xs outline-none focus:border-yellow-500"
                                                                    />
                                                                    <div className="flex gap-2">
                                                                        <select 
                                                                            value={newReferralStatus}
                                                                            onChange={e => setNewReferralStatus(e.target.value as any)}
                                                                            className="flex-1 px-2.5 py-1.5 bg-zinc-950 border border-white/5 rounded-lg text-xs outline-none cursor-pointer"
                                                                        >
                                                                            <option value="Lead">Lead</option>
                                                                            <option value="Won">Won</option>
                                                                            <option value="Lost">Lost</option>
                                                                        </select>
                                                                        <button 
                                                                            onClick={() => handleAddReferralSubmit(agency.id)}
                                                                            className="px-3 bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-bold rounded-lg transition-all"
                                                                        >
                                                                            Save
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <p className="text-[10px] text-zinc-600 font-mono italic">Authenticate to register new sales/referrals.</p>
                                                        )}
                                                    </div>

                                                    {/* RIGHT COLUMN: FOLLOW-UP LOGS */}
                                                    <div>
                                                        <h4 className="text-sm font-bold font-mono text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                                                            <Calendar size={16} className="text-yellow-500" /> Follow-Up Logs & Communications
                                                        </h4>

                                                        {(!agency.followUps || agency.followUps.length === 0) ? (
                                                            <p className="text-xs font-mono text-zinc-600 py-3 italic">No correspondence recorded.</p>
                                                        ) : (
                                                            <div className="max-h-52 overflow-y-auto mb-4 border border-white/5 rounded-xl p-3 space-y-3 scrollbar-hide">
                                                                {agency.followUps.map((log) => {
                                                                    const overdue = isOverdueOrToday(log.nextFollowUpDate);
                                                                    return (
                                                                        <div key={log.logId} className="p-3 bg-zinc-900/40 border border-white/5 rounded-lg">
                                                                            <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono mb-1.5">
                                                                                <span>Logged: {log.date?.split('T')[0]}</span>
                                                                                <span className={`px-2 py-0.5 rounded text-[9px] font-bold flex items-center gap-1 ${
                                                                                    overdue ? 'bg-red-500/10 text-red-500 border border-red-500/10' : 'bg-zinc-800 text-zinc-400'
                                                                                }`}>
                                                                                    <Clock size={10} /> Next Due: {log.nextFollowUpDate?.split('T')[0]}
                                                                                </span>
                                                                            </div>
                                                                            <p className="text-xs font-mono text-zinc-300 leading-relaxed">{log.notes}</p>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}

                                                        {/* Add Follow-Up Form */}
                                                        {isAuthenticated ? (
                                                            <div className="bg-zinc-900/50 p-4 border border-white/5 rounded-xl">
                                                                <h5 className="text-xs font-bold text-zinc-400 mb-3 flex items-center gap-1.5 uppercase font-mono">
                                                                    <PlusCircle size={13} /> Log New Correspondence
                                                                </h5>
                                                                {followUpErrors && <p className="text-[10px] text-red-500 font-mono mb-2">{followUpErrors}</p>}
                                                                <div className="flex flex-col gap-2.5">
                                                                    <textarea 
                                                                        placeholder="Notes on the follow-up meeting or call..." 
                                                                        rows={2}
                                                                        value={newFollowUpNotes}
                                                                        onChange={e => setNewFollowUpNotes(e.target.value)}
                                                                        className="w-full px-2.5 py-1.5 bg-zinc-950 border border-white/5 rounded-lg text-xs outline-none focus:border-yellow-500 resize-none"
                                                                    />
                                                                    <div className="flex gap-3">
                                                                        <div className="flex-1 flex items-center gap-2">
                                                                            <span className="text-[10px] font-mono text-zinc-500 uppercase whitespace-nowrap">Next Date:</span>
                                                                            <input 
                                                                                type="date" 
                                                                                value={newFollowUpDate}
                                                                                onChange={e => setNewFollowUpDate(e.target.value)}
                                                                                className="w-full px-2.5 py-1.5 bg-zinc-950 border border-white/5 rounded-lg text-xs outline-none focus:border-yellow-500 cursor-pointer text-zinc-300"
                                                                            />
                                                                        </div>
                                                                        <button 
                                                                            onClick={() => handleAddFollowUpSubmit(agency.id)}
                                                                            className="px-5 bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-bold rounded-lg transition-all"
                                                                        >
                                                                            Save Log
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <p className="text-[10px] text-zinc-600 font-mono italic">Authenticate to record contact follow-up logs.</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* --- 7. PAGINATION CONTROLS --- */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 font-mono text-xs">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(p => Math.max(1, p - 1))}
                            className="px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-lg hover:border-yellow-500 disabled:opacity-30 disabled:hover:border-white/10 transition-all"
                        >
                            Prev
                        </button>
                        <span className="text-zinc-400">
                            Page <strong className="text-white">{page}</strong> of <strong className="text-white">{totalPages}</strong>
                        </span>
                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                            className="px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-lg hover:border-yellow-500 disabled:opacity-30 disabled:hover:border-white/10 transition-all"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>

            {/* --- MODALS & DIALOGS --- */}

            {/* 1. ADMIN LOGIN MODAL */}
            <AnimatePresence>
                {loginModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-zinc-950 border border-white/10 p-6 rounded-2xl w-full max-w-sm shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
                        >
                            <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white mb-1">
                                Secure Admin Access
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono mb-4">Credentials: admin@kiaan.tech / admin123</p>

                            {loginError && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl mb-4 font-mono">
                                    {loginError}
                                </div>
                            )}

                            <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Email Address</label>
                                    <input 
                                        type="email"
                                        required
                                        value={loginEmail}
                                        onChange={e => setLoginEmail(e.target.value)}
                                        placeholder="admin@kiaan.tech"
                                        className="w-full px-3 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Password</label>
                                    <input 
                                        type="password"
                                        required
                                        value={loginPassword}
                                        onChange={e => setLoginPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full px-3 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all"
                                    />
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setLoginModalOpen(false)}
                                        className="flex-1 py-2 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl text-xs font-bold transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase transition-all"
                                    >
                                        Verify Auth
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* 2. AGENCY CREATE/EDIT MODAL */}
            <AnimatePresence>
                {agencyModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-zinc-950 border border-white/10 p-6 rounded-2xl w-full max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative max-h-[90vh] overflow-y-auto"
                        >
                            <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white mb-4">
                                {editingAgency ? 'Modify Partner Agency' : 'Register New Partner Agency'}
                            </h3>

                            {formErrors.form && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl mb-4 font-mono">
                                    {formErrors.form}
                                </div>
                            )}

                            <form onSubmit={handleAgencySubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Agency Name</label>
                                        <input 
                                            type="text"
                                            required
                                            value={formName}
                                            onChange={e => setFormName(e.target.value)}
                                            placeholder="Apex Marketing Ltd"
                                            className={`w-full px-3 py-2 bg-zinc-900 border ${formErrors.name ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all`}
                                        />
                                        {formErrors.name && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Partnership Type</label>
                                        <select 
                                            value={formType}
                                            onChange={e => setFormType(e.target.value as any)}
                                            className="w-full px-3 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-sm text-zinc-300 rounded-xl outline-none cursor-pointer"
                                        >
                                            <option value="Referral">Referral System (Commission-based)</option>
                                            <option value="Reseller">Reseller Workflow (Discount-based)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Status</label>
                                        <select 
                                            value={formStatus}
                                            onChange={e => setFormStatus(e.target.value as any)}
                                            className="w-full px-3 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-sm text-zinc-300 rounded-xl outline-none cursor-pointer"
                                        >
                                            <option value="Active">Active</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Suspended">Suspended</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">
                                            {formType === 'Reseller' ? 'Discount Rate (%)' : 'Commission Rate (%)'}
                                        </label>
                                        <input 
                                            type="number"
                                            required
                                            value={formRate}
                                            onChange={e => setFormRate(e.target.value)}
                                            placeholder="15"
                                            className={`w-full px-3 py-2 bg-zinc-900 border ${formErrors.rate ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all`}
                                        />
                                        {formErrors.rate && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.rate}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Primary Contact Name</label>
                                        <input 
                                            type="text"
                                            required
                                            value={formContactName}
                                            onChange={e => setFormContactName(e.target.value)}
                                            placeholder="Jane Cooper"
                                            className={`w-full px-3 py-2 bg-zinc-900 border ${formErrors.contactName ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all`}
                                        />
                                        {formErrors.contactName && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.contactName}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Contact Email</label>
                                        <input 
                                            type="email"
                                            required
                                            value={formContactEmail}
                                            onChange={e => setFormContactEmail(e.target.value)}
                                            placeholder="jane@apexmarketing.com"
                                            className={`w-full px-3 py-2 bg-zinc-900 border ${formErrors.contactEmail ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all`}
                                        />
                                        {formErrors.contactEmail && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.contactEmail}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Contact Phone</label>
                                        <input 
                                            type="text"
                                            required
                                            value={formContactPhone}
                                            onChange={e => setFormContactPhone(e.target.value)}
                                            placeholder="+1-555-0199"
                                            className={`w-full px-3 py-2 bg-zinc-900 border ${formErrors.contactPhone ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all`}
                                        />
                                        {formErrors.contactPhone && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.contactPhone}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1">Additional Notes</label>
                                    <textarea 
                                        value={formNotes}
                                        onChange={e => setFormNotes(e.target.value)}
                                        placeholder="Region cover, targeted products, tiers..."
                                        rows={3}
                                        className="w-full px-3 py-2 bg-zinc-900 border border-white/5 focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all resize-none"
                                    />
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setAgencyModalOpen(false)}
                                        className="flex-1 py-2.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl text-xs font-bold transition-all"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase transition-all"
                                    >
                                        {editingAgency ? 'Save Modifications' : 'Create Partnership'}
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
