"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, MessageSquare, CheckCircle2, ArrowRight, ArrowLeft, ChevronRight, Users } from 'lucide-react';
import { Button } from '@/components/Button';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { trackGAEvent, trackGTMEvent } from '@/utils/analytics';
import { getStoredUTMParams } from '@/utils/utm';

const EMAILJS_SERVICE_ID = 'service_opc05wm';
const EMAILJS_TEMPLATE_ID = 'template_jpwu4pp';
const EMAILJS_PUBLIC_KEY = 'zXyGNtU81gEw6BmhH';
export default function SchedulePage() {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        discuss: ''
    });

    const dates = Array.from({ length: 14 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i + 1);
        return {
            day: d.getDate(),
            weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
            month: d.toLocaleDateString('en-US', { month: 'short' }),
            full: d
        };
    });

    const timeSlots = [
        "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
        "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
    ];

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleBookingSubmit = async () => {
        if (selectedDate === null || !selectedTime || isSubmitting) return;

        setIsSubmitting(true);
        setSubmitError('');

        const chosenDate = dates[selectedDate];
        const utm = getStoredUTMParams();

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name || 'N/A',
                    email: formData.email || 'N/A',
                    company: 'Schedule Booking',
                    contact_number: formData.whatsapp || 'N/A',
                    contact_method: 'WhatsApp / Email',
                    industry: 'Mentorship / Counseling',
                    project_type: 'Counseling Session',
                    features: 'N/A',
                    vision: formData.discuss || 'N/A',
                    budget: 'N/A',
                    timeline: `${chosenDate.weekday}, ${chosenDate.day} ${chosenDate.month} at ${selectedTime}`,
                    submitted_at: new Date().toLocaleString(),
                    message: [
                        `Booking Type: Counseling Session`,
                        `Name: ${formData.name || 'N/A'}`,
                        `Email: ${formData.email || 'N/A'}`,
                        `WhatsApp: ${formData.whatsapp || 'N/A'}`,
                        `Selected Date: ${chosenDate.weekday}, ${chosenDate.day} ${chosenDate.month}`,
                        `Selected Time: ${selectedTime}`,
                        `Discussion Topic: ${formData.discuss || 'N/A'}`,
                        `UTM Source: ${utm?.utm_source || 'Direct/None'}`,
                        `UTM Medium: ${utm?.utm_medium || 'Direct/None'}`,
                        `UTM Campaign: ${utm?.utm_campaign || 'Direct/None'}`,
                        `UTM Term: ${utm?.utm_term || 'Direct/None'}`,
                        `UTM Content: ${utm?.utm_content || 'Direct/None'}`,
                        `Referral Code: ${utm?.ref || 'None'}`
                    ].join('\n')
                },
                EMAILJS_PUBLIC_KEY
            );

            try {
                await fetch('/api/leads/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        leadType: 'contact',
                        leadSource: 'website_contact',
                        fullName: formData.name,
                        email: formData.email,
                        phone: formData.whatsapp,
                        serviceInterest: 'Counseling Session',
                        projectTimeline: `${chosenDate.weekday}, ${chosenDate.day} ${chosenDate.month} at ${selectedTime}`,
                        message: formData.discuss || 'Counseling Session',
                        sourcePage: '/schedule'
                    })
                });
            } catch (err) {
                console.warn('Backend schedule lead sync notice:', err);
            }

            trackGAEvent('form_submit', 'Lead Generation', 'Schedule Call Booking');
            trackGTMEvent('form_submit', { form_name: 'Schedule Call Booking', date: `${chosenDate.weekday}, ${chosenDate.day} ${chosenDate.month}`, time: selectedTime });
            setStep(4);
        } catch {
            setSubmitError('Booking send nahi ho paayi. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isCurrentStepValid = () => {
        if (step === 1) return selectedDate !== null;
        if (step === 2) return selectedTime !== null;
        if (step === 3) return formData.name && formData.email && formData.whatsapp;
        return true;
    };

    return (
        <div className="bg-black min-h-screen pt-32 pb-36 selection:bg-yellow-500 selection:text-black overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Progress Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <Link href="/internship">
                            <button className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                                <ArrowLeft size={16} /> Back to Internships
                            </button>
                        </Link>
                    </motion.div>

                    <h1 className="text-3xl md:text-5xl font-display uppercase text-white mb-4 leading-none">
                        Book Your <span className="text-yellow-500">Counseling</span> Session
                    </h1>
                    <p className="text-zinc-500 uppercase text-[10px] font-black tracking-[0.4em]">
                        Step {step < 4 ? step : '3'} of 3: {step === 1 ? 'Select Date' : step === 2 ? 'Select Time' : 'Your Details'}
                    </p>

                    <div className="w-full h-1 bg-zinc-900 mt-8 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-yellow-500"
                            animate={{ width: `${(Math.min(step, 3) / 3) * 100}%` }}
                            transition={{ type: 'spring', damping: 20 }}
                        />
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3"
                        >
                            {dates.map((date, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedDate(i)}
                                    className={`p-4 border transition-all flex flex-col items-center gap-1 group ${selectedDate === i
                                        ? 'bg-yellow-500 border-yellow-500 text-black'
                                        : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:border-zinc-700 hover:text-white'
                                        }`}
                                >
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{date.weekday}</span>
                                    <span className="text-2xl font-display leading-none my-1">{date.day}</span>
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{date.month}</span>
                                </button>
                            ))}
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                        >
                            {timeSlots.map((time, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedTime(time)}
                                    className={`p-6 border transition-all text-center group ${selectedTime === time
                                        ? 'bg-yellow-500 border-yellow-500 text-black'
                                        : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:border-zinc-700 hover:text-white'
                                        }`}
                                >
                                    <Clock size={16} className={`mx-auto mb-2 ${selectedTime === time ? 'text-black' : 'text-yellow-500'}`} />
                                    <span className="text-xs font-black uppercase tracking-[0.2em]">{time}</span>
                                </button>
                            ))}
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 block ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-black border border-zinc-800 p-5 text-white outline-none focus:border-yellow-500 transition-all font-light"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 block ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-black border border-zinc-800 p-5 text-white outline-none focus:border-yellow-500 transition-all font-light"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 block ml-1">WhatsApp Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91 00000 00000"
                                    value={formData.whatsapp}
                                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                    className="w-full bg-black border border-zinc-800 p-5 text-white outline-none focus:border-yellow-500 transition-all font-light"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600 block ml-1">What do you want to discuss? (Optional)</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your career goals..."
                                    value={formData.discuss}
                                    onChange={(e) => setFormData({ ...formData, discuss: e.target.value })}
                                    className="w-full bg-black border border-zinc-800 p-5 text-white outline-none focus:border-yellow-500 transition-all font-light resize-none"
                                />
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-yellow-500 text-black p-12 md:p-20 text-center space-y-8"
                        >
                            <div className="flex justify-center">
                                <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-yellow-500">
                                    <CheckCircle2 size={48} />
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display uppercase leading-none">
                                Booking Confirmed!
                            </h2>
                            <p className="text-black/80 font-bold uppercase tracking-widest text-sm max-w-md mx-auto">
                                We've scheduled your call for {selectedDate !== null && dates[selectedDate].day} {selectedDate !== null && dates[selectedDate].month} at {selectedTime}.
                            </p>
                            <div className="pt-8">
                                <Link href="/internship">
                                    <Button className="bg-black text-white hover:bg-zinc-900 h-14 px-10 rounded-none text-xs font-black uppercase tracking-widest">
                                        Back to Internships
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {submitError && step < 4 && (
                    <div className="mt-6 border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        {submitError}
                    </div>
                )}

                {/* Navigation Buttons */}
                {step < 4 && (
                    <div className="mt-12 mb-12 flex items-center justify-between gap-6">
                        {step > 1 ? (
                            <button
                                onClick={prevStep}
                                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-all text-xs font-black uppercase tracking-[0.2em]"
                            >
                                <ArrowLeft size={16} /> Previous
                            </button>
                        ) : <div />}

                        <Button
                            disabled={!isCurrentStepValid() || isSubmitting}
                            onClick={() => {
                                if (!isCurrentStepValid()) return;
                                if (step === 3) {
                                    void handleBookingSubmit();
                                    return;
                                }
                                nextStep();
                            }}
                            className={`h-14 px-10 rounded-none font-black uppercase tracking-[0.2em] text-xs flex items-center gap-4 transition-all ${isCurrentStepValid() && !isSubmitting
                                ? 'bg-yellow-500 text-black hover:scale-105 active:scale-95'
                                : '!border !border-zinc-800 !bg-zinc-950 !text-white cursor-not-allowed'
                                }`}
                        >
                            {step === 3 ? (isSubmitting ? 'Sending Booking...' : 'Confirm Booking') : 'Next Step'} <ArrowRight size={16} />
                        </Button>
                    </div>
                )}
            </div>

            {/* Side Info Panel */}
            {step < 4 && (
                <div className="hidden lg:block absolute top-[240px] right-10 max-w-[240px]">
                    <div className="bg-zinc-950 border border-zinc-900 p-6 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center text-black">
                                <Users size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Mentorship</p>
                                <p className="text-white font-bold text-xs">Direct with Seniors</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-yellow-500">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Session</p>
                                <p className="text-white font-bold text-xs">30 Min Deep-Dive</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
