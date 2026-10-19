"use client";

import React, { useState } from 'react';
import { Lock, ArrowRight, CheckCircle2, Mail, Building, User, Laptop, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LeadCaptureFormProps {
    resourceName: string;
    onSuccess: () => void;
}

export function LeadCaptureForm({ resourceName, onSuccess }: LeadCaptureFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        challenge: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const res = await fetch('/api/leads/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    leadType: 'lead_magnet',
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    challenge: formData.challenge,
                    leadMagnet: resourceName,
                    sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/resources'
                })
            });

            const data = await res.json();
            if (!res.ok || !data.ok) {
                setErrorMessage(data.message || 'We could not unlock this guide. Please try again.');
                setIsSubmitting(false);
                return;
            }

            setIsSubmitting(false);
            setIsSuccess(true);

            setTimeout(() => {
                onSuccess();
            }, 1500);
        } catch {
            setErrorMessage('We could not unlock this guide. Please try again.');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="border border-yellow-500 bg-zinc-950 p-8 md:p-12 relative overflow-hidden mb-16">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />

            <div className="relative z-10">
                <AnimatePresence mode="wait">
                    {!isSuccess ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-yellow-500 text-black text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 flex items-center gap-2">
                                    <Lock size={12} />
                                    Premium Content
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tighter text-white mb-4">
                                Unlock This Full Guide
                            </h3>
                            <p className="text-zinc-400 text-sm mb-8 max-w-lg">
                                Access the complete insights for "{resourceName}". Enter your professional details below to unlock instant access.
                            </p>

                            {errorMessage && (
                                <div className="mb-4 border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
                                    {errorMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User size={16} className="text-zinc-600" />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full bg-zinc-900 border border-zinc-800 text-white pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail size={16} className="text-zinc-600" />
                                        </div>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Work Email"
                                            className="w-full bg-zinc-900 border border-zinc-800 text-white pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Building size={16} className="text-zinc-600" />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Company Name"
                                            className="w-full bg-zinc-900 border border-zinc-800 text-white pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Laptop size={16} className="text-zinc-600" />
                                        </div>
                                        <select
                                            required
                                            name="challenge"
                                            value={formData.challenge}
                                            onChange={handleChange}
                                            className="w-full bg-zinc-900 border border-zinc-800 text-white pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-yellow-500 transition-colors appearance-none"
                                        >
                                            <option value="" disabled>Biggest Tech Challenge?</option>
                                            <option value="cloud_migration">Cloud Migration & Architecture</option>
                                            <option value="app_scaling">Scaling Existing Applications</option>
                                            <option value="legacy_modernization">Legacy System Modernization</option>
                                            <option value="resource_shortage">Engineering Resource Shortage</option>
                                            <option value="business_automation">Business Process Automation</option>
                                            <option value="other">Other / Researching</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full mt-6 bg-yellow-500 text-black py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
                                            >
                                                <Zap size={16} />
                                            </motion.div>
                                            Authorizing...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Unlock Content Now <ArrowRight size={14} />
                                        </span>
                                    )}
                                </button>
                                <p className="text-[10px] text-zinc-600 text-center mt-4">
                                    By submitting, you agree to Kiaan Technology's Privacy Policy. We keep your data secure.
                                </p>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-6">
                                <CheckCircle2 size={32} className="text-yellow-500" />
                            </div>
                            <h3 className="text-2xl font-display uppercase tracking-tighter text-white mb-2">
                                Access Granted
                            </h3>
                            <p className="text-zinc-400 text-sm">
                                Preparing your content...
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
