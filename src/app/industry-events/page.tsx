"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Calendar, MapPin, Users, Ticket, Plus, Trash2, 
    Send, Terminal, Lock, CheckCircle2, ChevronDown, 
    ChevronUp, AlertCircle, RefreshCw, LogIn, LogOut
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';

interface ConferenceEvent {
    id: string;
    title: string;
    date: string;
    location: string;
    price: string;
    totalSeats: number;
    availableSeats: number;
    status: 'Upcoming' | 'Ongoing' | 'Completed' | 'Sold Out';
    sessions: { time: string; title: string; speaker: string }[];
}

interface Registration {
    id: string;
    eventId: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    seatsBooked: number;
    dateRegistered: string;
}

const DEFAULT_EVENTS: ConferenceEvent[] = [
    {
        id: 'evt_1',
        title: 'Global AI Congress 2026',
        date: 'Sept 12, 2026 | 09:00 AM',
        location: 'Bangalore Tech Park, India',
        price: '$299',
        totalSeats: 150,
        availableSeats: 12,
        status: 'Upcoming',
        sessions: [
            { time: '09:00 AM - 10:30 AM', title: 'Keynote: Next-Gen Autonomous AI Agents', speaker: 'Dr. Ramesh Kumar (Kiaan AI Lab)' },
            { time: '11:00 AM - 12:30 PM', title: 'Panel: Scaling Enterprise LLM Architectures', speaker: 'Tech Leaders Panel' },
            { time: '02:00 PM - 03:30 PM', title: 'Hands-on: Custom Agents in Production Pipelines', speaker: 'Alok Mishra (Principal Architect)' }
        ]
    },
    {
        id: 'evt_2',
        title: 'SaaS Enterprise Summit 2026',
        date: 'Oct 05, 2026 | 10:00 AM',
        location: 'Indore Innovation Center (Hybrid)',
        price: 'Free',
        totalSeats: 80,
        availableSeats: 4,
        status: 'Upcoming',
        sessions: [
            { time: '10:00 AM - 11:30 AM', title: 'Fireside Chat: Zero to $10M ARR in India B2B', speaker: 'Suraj Kiaan (Founder, Kiaan Tech)' },
            { time: '12:00 PM - 01:30 PM', title: 'Workshop: Dynamic Webhook Automations at Scale', speaker: 'Neha Sen (Senior Developer)' }
        ]
    },
    {
        id: 'evt_3',
        title: 'Kiaan Developer Hackathon',
        date: 'Nov 20, 2026 | 08:00 AM',
        location: 'Kiaan Technology HQ, Indore',
        price: 'Free',
        totalSeats: 50,
        availableSeats: 22,
        status: 'Upcoming',
        sessions: [
            { time: '08:00 AM - 09:00 AM', title: 'Hackathon Briefing & API Sandbox Access', speaker: 'Dev Rel Board' },
            { time: '05:00 PM - 07:00 PM', title: 'Final Team Pitches & Jury Judging', speaker: 'Board Panel' }
        ]
    }
];

export default function IndustryEvents() {
    const [events, setEvents] = useState<ConferenceEvent[]>([]);
    const [registrations, setRegistrations] = useState<Registration[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Admin Auth State
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [showAdminLogin, setShowAdminLogin] = useState(false);
    const [loginError, setLoginError] = useState('');

    // Accordions
    const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

    // Registration Form Inputs
    const [selectedEventId, setSelectedEventId] = useState('');
    const [attendeeName, setAttendeeName] = useState('');
    const [attendeeEmail, setAttendeeEmail] = useState('');
    const [attendeePhone, setAttendeePhone] = useState('');
    const [attendeeCompany, setAttendeeCompany] = useState('');
    const [seatsToBook, setSeatsToBook] = useState(1);
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [regSuccess, setRegSuccess] = useState(false);

    // Admin Add Event Form Inputs
    const [newEventTitle, setNewEventTitle] = useState('');
    const [newEventDate, setNewEventDate] = useState('');
    const [newEventLocation, setNewEventLocation] = useState('');
    const [newEventPrice, setNewEventPrice] = useState('Free');
    const [newEventSeats, setNewEventSeats] = useState(100);
    const [addEventError, setAddEventError] = useState('');
    const [showAddEventModal, setShowAddEventModal] = useState(false);

    // Reminder simulator indicators
    const [isSendingReminders, setIsSendingReminders] = useState(false);
    const [reminderProgress, setReminderProgress] = useState(0);

    // Monospace Terminal Console Logs
    const [logs, setLogs] = useState<string[]>([]);
    const consoleEndRef = useRef<HTMLDivElement>(null);

    // Load initial states from Local Storage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Events list setup
            const storedEvents = localStorage.getItem('kiaan_managed_events');
            if (storedEvents) {
                try {
                    setEvents(JSON.parse(storedEvents));
                } catch (e) {
                    setEvents(DEFAULT_EVENTS);
                }
            } else {
                localStorage.setItem('kiaan_managed_events', JSON.stringify(DEFAULT_EVENTS));
                setEvents(DEFAULT_EVENTS);
            }

            // Registrations list setup
            const storedRegs = localStorage.getItem('kiaan_event_registrations');
            if (storedRegs) {
                try {
                    setRegistrations(JSON.parse(storedRegs));
                } catch (e) {
                    setRegistrations([]);
                }
            } else {
                localStorage.setItem('kiaan_event_registrations', JSON.stringify([]));
                setRegistrations([]);
            }

            setIsLoading(false);
            addLog('SYSTEM: Conference & Event Management module initialized.');
            addLog('DATABASE: Read events list from local storage schema.');
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
            addLog('ADMIN: Authenticated successfully. Extended operations unlocked.');
        } else {
            setLoginError('Invalid administrator credentials.');
            addLog('ERROR: Admin login failed - incorrect username/password combination.');
        }
    };

    const handleAdminLogout = () => {
        setIsAdmin(false);
        addLog('ADMIN: Session ended. Access restricted to default views.');
    };

    // Register Attendee Actions
    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors({});
        setRegSuccess(false);

        const errors: Record<string, string> = {};
        if (!selectedEventId) {
            errors.selectedEvent = 'Please select a conference to attend.';
        }
        if (!attendeeName.trim() || attendeeName.trim().length < 3) {
            errors.attendeeName = 'Full Name must be at least 3 characters.';
        }
        if (!attendeeEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(attendeeEmail)) {
            errors.attendeeEmail = 'Please provide a valid contact email.';
        }
        if (!attendeePhone || attendeePhone.trim().length < 6) {
            errors.attendeePhone = 'Please provide a valid contact number (min 6 digits).';
        }
        if (seatsToBook < 1 || seatsToBook > 10) {
            errors.seatsToBook = 'You can book between 1 and 10 seats per registration.';
        }

        // Validate seats availability
        const targetedEvent = events.find(ev => ev.id === selectedEventId);
        if (targetedEvent) {
            if (targetedEvent.availableSeats < seatsToBook) {
                errors.seatsToBook = `Only ${targetedEvent.availableSeats} seats are left for this event.`;
            }
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            addLog('ERROR: Registration rejected due to validation errors.');
            return;
        }

        if (!targetedEvent) return;

        // Perform Seat reservation calculations
        const updatedEvents = events.map(ev => {
            if (ev.id === targetedEvent.id) {
                const nextAvail = ev.availableSeats - seatsToBook;
                return {
                    ...ev,
                    availableSeats: nextAvail,
                    status: nextAvail === 0 ? 'Sold Out' as const : ev.status
                };
            }
            return ev;
        });

        const newRegistration: Registration = {
            id: 'reg_' + Date.now(),
            eventId: selectedEventId,
            name: attendeeName.trim(),
            email: attendeeEmail.trim(),
            phone: attendeePhone.trim(),
            company: attendeeCompany.trim() || 'N/A',
            seatsBooked: seatsToBook,
            dateRegistered: new Date().toISOString()
        };

        const updatedRegs = [...registrations, newRegistration];

        // Save states
        setEvents(updatedEvents);
        setRegistrations(updatedRegs);
        localStorage.setItem('kiaan_managed_events', JSON.stringify(updatedEvents));
        localStorage.setItem('kiaan_event_registrations', JSON.stringify(updatedRegs));

        setRegSuccess(true);
        addLog(`SUCCESS: Attendee ${attendeeName} registered for ${targetedEvent.title}. Seats reserved: ${seatsToBook}.`);
        
        // Reset fields
        setAttendeeName('');
        setAttendeeEmail('');
        setAttendeePhone('');
        setAttendeeCompany('');
        setSeatsToBook(1);
    };

    // Admin CRUD Event Actions
    const handleAddEvent = (e: React.FormEvent) => {
        e.preventDefault();
        setAddEventError('');

        if (!newEventTitle.trim() || !newEventDate.trim() || !newEventLocation.trim()) {
            setAddEventError('All text fields are required.');
            return;
        }

        if (newEventSeats < 5) {
            setAddEventError('Event must have at least 5 available seats.');
            return;
        }

        const newEvent: ConferenceEvent = {
            id: 'evt_' + Date.now(),
            title: newEventTitle.trim(),
            date: newEventDate.trim(),
            location: newEventLocation.trim(),
            price: newEventPrice.trim(),
            totalSeats: newEventSeats,
            availableSeats: newEventSeats,
            status: 'Upcoming',
            sessions: [
                { time: '10:00 AM - 11:30 AM', title: 'Introductory Session', speaker: 'TBD' },
                { time: '02:00 PM - 03:30 PM', title: 'Workshop & Q&A Panel', speaker: 'TBD' }
            ]
        };

        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
        localStorage.setItem('kiaan_managed_events', JSON.stringify(updatedEvents));

        addLog(`ADMIN: Created new event "${newEvent.title}" with capacity of ${newEvent.totalSeats} seats.`);
        
        // Reset Inputs
        setNewEventTitle('');
        setNewEventDate('');
        setNewEventLocation('');
        setNewEventPrice('Free');
        setNewEventSeats(100);
        setShowAddEventModal(false);
    };

    const handleDeleteEvent = (id: string) => {
        if (!confirm('Are you sure you want to delete this event? This will also purge related local registrations.')) return;
        
        const targeted = events.find(ev => ev.id === id);
        if (!targeted) return;

        const updatedEvents = events.filter(ev => ev.id !== id);
        const updatedRegs = registrations.filter(rg => rg.eventId !== id);

        setEvents(updatedEvents);
        setRegistrations(updatedRegs);
        localStorage.setItem('kiaan_managed_events', JSON.stringify(updatedEvents));
        localStorage.setItem('kiaan_event_registrations', JSON.stringify(updatedRegs));

        addLog(`ADMIN: Purged event "${targeted.title}" and its registration records.`);
    };

    // Dispatch Reminders Simulator
    const handleSendReminders = () => {
        if (registrations.length === 0) {
            alert('No registered attendees found. Please add a registration first.');
            addLog('WARNING: Reminder dispatcher canceled - no registrations recorded.');
            return;
        }

        setIsSendingReminders(true);
        setReminderProgress(0);
        addLog('NOTIFICATION: Preparing batch reminder alerts (Email & SMS queue)...');

        const interval = setInterval(() => {
            setReminderProgress(prev => {
                const next = prev + 25;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsSendingReminders(false);
                        addLog(`SUCCESS: Notification cycle complete. Sent alerts to ${registrations.length} registered delegates.`);
                    }, 200);
                    return 100;
                }

                // Log details on intervals
                if (next === 25) addLog('NOTIFICATION: Assembling templates and session schedules...');
                if (next === 50) {
                    const sample = registrations[Math.floor(Math.random() * registrations.length)];
                    addLog(`NOTIFICATION: Rendering email summary for recipient: ${sample.email}`);
                }
                if (next === 75) addLog('NOTIFICATION: Compiling carrier gateways for SMS triggers...');

                return next;
            });
        }, 300);
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
                            Events & <span className="text-yellow-500">Conferences</span>
                        </h1>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-mono">
                            Discover conferences, register attendee passes, track session schedules, and log system alerts.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {isAdmin ? (
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setShowAddEventModal(true)}
                                    className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md shadow-yellow-500/10"
                                >
                                    <Plus size={14} /> Add Event
                                </button>
                                <button 
                                    onClick={handleAdminLogout}
                                    className="px-4 py-2 border border-zinc-800 hover:border-red-500 text-zinc-400 hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 font-mono"
                                >
                                    <LogOut size={12} /> Log Out Admin
                                </button>
                            </div>
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

                {/* --- STATS RIBBON --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
                    {[
                        { label: 'Upcoming Events', val: `${events.length} Events`, desc: 'Active managed dates' },
                        { label: 'Passes Booked', val: `${registrations.reduce((acc, curr) => acc + curr.seatsBooked, 0)} Seats`, desc: 'Total confirmed registrations' },
                        { label: 'Seat Vacancies', val: `${events.reduce((acc, curr) => acc + curr.availableSeats, 0)} Left`, desc: 'Tickets remaining' },
                        { label: 'Auth Status', val: isAdmin ? 'Organizer' : 'Public View', desc: 'Active portal scopes' }
                    ].map((stat, idx) => (
                        <GlassCard key={idx} className="p-4 border border-white/10 rounded-2xl">
                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">{stat.label}</span>
                            <h3 className="text-xl font-display font-black text-white uppercase mb-0.5">{stat.val}</h3>
                            <span className="text-[10px] text-zinc-400 font-sans block">{stat.desc}</span>
                        </GlassCard>
                    ))}
                </div>

                {/* --- MAIN PAGE CONTENT --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* LEFT COLUMN: EVENTS CONTAINER */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-left flex justify-between items-end">
                            <div>
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Calendar size={18} className="text-yellow-500" /> Active Schedule Calendar
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">List of tech events, hybrid meetups, and developer hackathons.</p>
                            </div>
                        </div>

                        {events.length === 0 ? (
                            <div className="p-12 text-center text-zinc-500 font-mono border border-white/5 rounded-2xl bg-zinc-950/40">
                                No conferences found in database. Log in as admin to create events.
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {events.map((evt) => {
                                    const isExpanded = expandedEventId === evt.id;
                                    const isSoldOut = evt.availableSeats === 0;
                                    return (
                                        <GlassCard key={evt.id} className="p-5 border border-white/10 rounded-2xl relative overflow-hidden">
                                            {/* Top info row */}
                                            <div className="flex justify-between items-start gap-4">
                                                <div className="flex-1">
                                                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider font-mono uppercase ${
                                                        isSoldOut ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                                                    }`}>
                                                        {evt.price} • {isSoldOut ? 'Sold Out' : `${evt.availableSeats} Seats Left`}
                                                    </span>
                                                    <h4 className="text-lg font-bold text-white font-mono mt-2 mb-1">{evt.title}</h4>
                                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-400 font-sans mt-2">
                                                        <span className="flex items-center gap-1.5"><Calendar size={13} className="text-yellow-500" /> {evt.date}</span>
                                                        <span className="flex items-center gap-1.5"><MapPin size={13} className="text-yellow-500" /> {evt.location}</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 shrink-0">
                                                    <button
                                                        onClick={() => setExpandedEventId(isExpanded ? null : evt.id)}
                                                        className="p-1.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-all"
                                                        title="Show Sessions Schedule"
                                                    >
                                                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                                    </button>
                                                    {isAdmin && (
                                                        <button
                                                            onClick={() => handleDeleteEvent(evt.id)}
                                                            className="p-1.5 border border-zinc-800 hover:border-red-500 text-zinc-500 hover:text-red-500 rounded-lg transition-all"
                                                            title="Delete Event"
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
                                                            <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Sessions Timeline</h5>
                                                            {evt.sessions.map((ses, idx) => (
                                                                <div key={idx} className="flex gap-4 text-xs font-mono py-1.5 border-l-2 border-yellow-500/20 pl-4 relative">
                                                                    <div className="absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                                                    <div className="w-[140px] shrink-0 text-yellow-500 font-bold">{ses.time}</div>
                                                                    <div className="flex-1">
                                                                        <strong className="text-white block font-sans">{ses.title}</strong>
                                                                        <span className="text-[10px] text-zinc-500">Presenter: {ses.speaker}</span>
                                                                    </div>
                                                                </div>
                                                            ))}
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

                    {/* RIGHT COLUMN: REGISTRATION WIZARD */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Ticket size={18} className="text-yellow-500" /> Reserve Passes
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Book your seats for upcoming conferences.</p>
                        </div>

                        {regSuccess && (
                            <div className="p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-xl font-mono flex items-center gap-2">
                                <CheckCircle2 size={14} /> Registration completed! Check logs below.
                            </div>
                        )}

                        <GlassCard className="p-6 border border-white/10 rounded-2xl">
                            <form onSubmit={handleRegisterSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Select Conference</label>
                                    <select
                                        value={selectedEventId}
                                        onChange={e => {
                                            setSelectedEventId(e.target.value);
                                            if (formErrors.selectedEvent) {
                                                const copy = { ...formErrors };
                                                delete copy.selectedEvent;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        className={`w-full px-3.5 py-2.5 bg-zinc-950 border ${formErrors.selectedEvent ? 'border-red-500' : 'border-white/5'} text-xs text-white rounded-xl outline-none cursor-pointer focus:border-yellow-500`}
                                    >
                                        <option value="">-- Select Event --</option>
                                        {events.map(ev => (
                                            <option key={ev.id} value={ev.id} disabled={ev.availableSeats === 0}>
                                                {ev.title} ({ev.availableSeats} seats left)
                                            </option>
                                        ))}
                                    </select>
                                    {formErrors.selectedEvent && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.selectedEvent}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Full Name</label>
                                    <input 
                                        type="text"
                                        value={attendeeName}
                                        onChange={e => {
                                            setAttendeeName(e.target.value);
                                            if (formErrors.attendeeName) {
                                                const copy = { ...formErrors };
                                                delete copy.attendeeName;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="Thomas Anderson"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.attendeeName ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.attendeeName && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.attendeeName}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Email Address</label>
                                    <input 
                                        type="email"
                                        value={attendeeEmail}
                                        onChange={e => {
                                            setAttendeeEmail(e.target.value);
                                            if (formErrors.attendeeEmail) {
                                                const copy = { ...formErrors };
                                                delete copy.attendeeEmail;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="neo@metacortex.net"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.attendeeEmail ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.attendeeEmail && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.attendeeEmail}</p>}
                                </div>

                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Phone Number</label>
                                    <input 
                                        type="text"
                                        value={attendeePhone}
                                        onChange={e => {
                                            setAttendeePhone(e.target.value);
                                            if (formErrors.attendeePhone) {
                                                const copy = { ...formErrors };
                                                delete copy.attendeePhone;
                                                setFormErrors(copy);
                                            }
                                        }}
                                        placeholder="+91 98765 43210"
                                        className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.attendeePhone ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                    />
                                    {formErrors.attendeePhone && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.attendeePhone}</p>}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Company</label>
                                        <input 
                                            type="text"
                                            value={attendeeCompany}
                                            onChange={e => setAttendeeCompany(e.target.value)}
                                            placeholder="Meta Cortex"
                                            className="w-full px-3.5 py-2 bg-zinc-950 border border-white/5 focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Seats Count</label>
                                        <input 
                                            type="number"
                                            min={1}
                                            max={10}
                                            value={seatsToBook}
                                            onChange={e => {
                                                setSeatsToBook(parseInt(e.target.value) || 1);
                                                if (formErrors.seatsToBook) {
                                                    const copy = { ...formErrors };
                                                    delete copy.seatsToBook;
                                                    setFormErrors(copy);
                                                }
                                            }}
                                            className={`w-full px-3.5 py-2 bg-zinc-950 border ${formErrors.seatsToBook ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-xs text-white rounded-xl outline-none transition-all`}
                                        />
                                        {formErrors.seatsToBook && <p className="text-[10px] text-red-500 font-mono mt-1">{formErrors.seatsToBook}</p>}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2.5 rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md shadow-yellow-500/10"
                                >
                                    Book Pass Ticket
                                </button>
                            </form>
                        </GlassCard>
                    </div>
                </div>

                {/* --- REMINDER ALERTS DISPATCH & LIVE MONOSPACE TERMINAL LOGGER --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* LEFT COLUMN: REMINDERS CONTROLLER */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Send size={18} className="text-yellow-500" /> Reminder Broadcaster
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono">Send scheduled notifications to all registered attendee profiles.</p>
                        </div>

                        <GlassCard className="p-6 border border-white/10 rounded-2xl space-y-4 text-xs font-mono text-left">
                            <div className="space-y-1">
                                <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Notification Channels</span>
                                <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl space-y-2">
                                    <div className="flex justify-between items-center text-zinc-300">
                                        <span>Email Reminder (HTML Template)</span>
                                        <span className="text-green-400 font-bold">READY</span>
                                    </div>
                                    <div className="flex justify-between items-center text-zinc-300">
                                        <span>SMS Alert (SMS Gateway)</span>
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

                    {/* RIGHT COLUMN: CLI LOGS LOGGER */}
                    <div className="lg:col-span-2 space-y-6 flex flex-col">
                        <div className="flex justify-between items-end">
                            <div className="text-left">
                                <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                    <Terminal size={18} className="text-yellow-500" /> Database Execution Console
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">Audits of seat allocations, reminder dispatches, and admin database writes.</p>
                            </div>
                            <button 
                                onClick={clearLogs}
                                className="text-[10px] font-mono text-zinc-500 hover:text-yellow-500 uppercase tracking-widest"
                            >
                                Clear Console
                            </button>
                        </div>

                        {/* Monospace CLI Console box */}
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

            {/* --- ADMIN CREATE EVENT MODAL DIALOG --- */}
            <AnimatePresence>
                {showAddEventModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-zinc-950 border border-white/10 p-6 rounded-2xl w-full max-w-md relative text-left"
                        >
                            <h4 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Plus size={16} className="text-yellow-500" /> Create Tech Event
                            </h4>
                            <p className="text-xs text-zinc-500 font-mono mb-4">Add a new event profile to the public schedule portal.</p>

                            {addEventError && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl font-mono mb-4">
                                    {addEventError}
                                </div>
                            )}

                            <form onSubmit={handleAddEvent} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Event Title</label>
                                    <input 
                                        type="text"
                                        required
                                        value={newEventTitle}
                                        onChange={e => setNewEventTitle(e.target.value)}
                                        placeholder="Cyber Security Meetup 2026"
                                        className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Date & Time</label>
                                        <input 
                                            type="text"
                                            required
                                            value={newEventDate}
                                            onChange={e => setNewEventDate(e.target.value)}
                                            placeholder="Dec 04, 2026 | 09:00 AM"
                                            className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Venue Location</label>
                                        <input 
                                            type="text"
                                            required
                                            value={newEventLocation}
                                            onChange={e => setNewEventLocation(e.target.value)}
                                            placeholder="Indore HQ, India"
                                            className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Ticket Cost</label>
                                        <input 
                                            type="text"
                                            required
                                            value={newEventPrice}
                                            onChange={e => setNewEventPrice(e.target.value)}
                                            placeholder="Free or $99"
                                            className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Capacity Seats</label>
                                        <input 
                                            type="number"
                                            required
                                            min={5}
                                            value={newEventSeats}
                                            onChange={e => setNewEventSeats(parseInt(e.target.value) || 100)}
                                            className="w-full px-3.5 py-2 bg-black border border-white/5 text-xs text-white rounded-xl outline-none focus:border-yellow-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddEventModal(false)}
                                        className="flex-1 py-2.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl text-xs font-bold transition-all font-mono"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl text-xs font-black uppercase transition-all tracking-wider font-mono shadow-md"
                                    >
                                        Create Event
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
