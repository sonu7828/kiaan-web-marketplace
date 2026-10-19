"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowLeft, ArrowRight, Check, Rocket, CheckCircle2, 
    Shield, Award, Handshake, Users, Mail, Phone, Globe, FileText
} from 'lucide-react';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import React from 'react';
import emailjs from '@emailjs/browser';

interface PartnerFormData {
    partnerTier: 'Referral' | 'Reseller' | 'Technology' | '';
    name: string;
    company: string;
    email: string;
    phone: string;
    website: string;
    vision: string;
}

const EMAILJS_SERVICE_ID = 'service_opc05wm';
const EMAILJS_TEMPLATE_ID = 'template_jpwu4pp';
const EMAILJS_PUBLIC_KEY = 'zXyGNtU81gEw6BmhH';

export default function PartnerProgram() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [formData, setFormData] = useState<PartnerFormData>({
        partnerTier: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        website: '',
        vision: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const totalSteps = 4;

    const nextStep = () => {
        if (validateStep()) {
            setStep(s => s + 1);
        }
    };

    const prevStep = () => setStep(s => s - 1);

    const updateData = (key: keyof PartnerFormData, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
        if (errors[key]) {
            setErrors(prev => {
                const copy = { ...prev };
                delete copy[key];
                return copy;
            });
        }
    };

    const validateStep = () => {
        const stepErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.partnerTier) {
                stepErrors.partnerTier = 'Please select a partnership tier to continue.';
            }
        } else if (step === 2) {
            if (!formData.name.trim() || formData.name.trim().length < 3) {
                stepErrors.name = 'Full Name must be at least 3 characters.';
            }
            if (!formData.company.trim()) {
                stepErrors.company = 'Company name is required.';
            }
        } else if (step === 3) {
            if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                stepErrors.email = 'A valid email address is required.';
            }
            if (!formData.phone || formData.phone.trim().length < 6) {
                stepErrors.phone = 'A valid contact number is required (min 6 digits).';
            }
            if (formData.website && !/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(formData.website)) {
                stepErrors.website = 'Please provide a valid website URL (or leave blank).';
            }
            if (!formData.vision.trim() || formData.vision.trim().length < 10) {
                stepErrors.vision = 'Please describe your business model / vision (min 10 characters).';
            }
        }

        setErrors(stepErrors);
        return Object.keys(stepErrors).length === 0;
    };

    const buildTemplateParams = () => ({
        name: formData.name || 'N/A',
        company: formData.company || 'N/A',
        email: formData.email || 'N/A',
        contact_number: formData.phone || 'N/A',
        contact_method: 'Email',
        project_type: `Partner Application: ${formData.partnerTier} Tier`,
        industry: 'Partnership Program',
        features: `Website: ${formData.website || 'N/A'}`,
        vision: formData.vision || 'N/A',
        budget: 'N/A',
        timeline: 'N/A',
        submitted_at: new Date().toLocaleString(),
        message: [
            `Name: ${formData.name || 'N/A'}`,
            `Company: ${formData.company || 'N/A'}`,
            `Email: ${formData.email || 'N/A'}`,
            `Phone: ${formData.phone || 'N/A'}`,
            `Website: ${formData.website || 'N/A'}`,
            `Partnership Tier: ${formData.partnerTier || 'N/A'}`,
            `Business Vision: ${formData.vision || 'N/A'}`
        ].join('\n')
    });

    const handleSubmitApplication = async () => {
        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmitError('');

        try {
            // 1. Send Email Notification via EmailJS
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                buildTemplateParams(),
                EMAILJS_PUBLIC_KEY
            );

            // 2. Save to local localStorage database
            if (typeof window !== 'undefined') {
                const existing = localStorage.getItem('kiaan_partner_applications') || '[]';
                let parsed = [];
                try {
                    parsed = JSON.parse(existing);
                } catch (e) {
                    parsed = [];
                }
                const newApplication = {
                    id: 'app_' + Date.now(),
                    ...formData,
                    dateSubmitted: new Date().toISOString()
                };
                parsed.push(newApplication);
                localStorage.setItem('kiaan_partner_applications', JSON.stringify(parsed));
            }

            // 3. Set Step to Success Screen
            setStep(4);
        } catch (error) {
            console.error('EmailJS partnership submission failed', error);
            setSubmitError('Email application submission failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDownloadSummary = async () => {
        const { jsPDF } = await import('jspdf');
        const doc = new jsPDF();

        // Header Card Design
        doc.setFillColor(0, 0, 0);
        doc.rect(0, 0, 210, 45, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.text("KIAAN TECHNOLOGY", 20, 25);
        doc.setFontSize(11);
        doc.setTextColor(234, 179, 8); // Yellow accent
        doc.text("GLOBAL PARTNERSHIP PROGRAM", 20, 32);

        doc.setDrawColor(234, 179, 8);
        doc.setLineWidth(1);
        doc.line(20, 36, 120, 36);

        // Body Text
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(18);
        doc.text("APPLICATION RECEIPT", 20, 60);

        doc.setFontSize(10);
        doc.setTextColor(120, 120, 120);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 67);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);

        let yPos = 80;
        const addSection = (title: string, value: string) => {
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }
            doc.setFont("helvetica", "bold");
            doc.text(`${title}:`, 20, yPos);
            doc.setFont("helvetica", "normal");
            const splitValue = doc.splitTextToSize(value || 'N/A', 140);
            doc.text(splitValue, 60, yPos);
            yPos += (splitValue.length * 7) + 5;
        };

        addSection("APPLICANT NAME", formData.name);
        addSection("COMPANY", formData.company);
        addSection("EMAIL", formData.email);
        addSection("PHONE", formData.phone);
        addSection("WEBSITE", formData.website);
        
        yPos += 5;
        addSection("PARTNER TIER", `${formData.partnerTier} Partner`);

        // Business Vision Section
        if (yPos > 250) { doc.addPage(); yPos = 20; }
        doc.setFont("helvetica", "bold");
        doc.text("PARTNERSHIP VISION & PROPOSAL:", 20, yPos);
        yPos += 8;
        doc.setFont("helvetica", "normal");
        const visionLines = doc.splitTextToSize(formData.vision, 170);
        doc.text(visionLines, 20, yPos);
        yPos += (visionLines.length * 7) + 15;

        // Footer layout
        const pageCount = (doc as any).internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(10);
            doc.setTextColor(150, 150, 150);
            doc.text("www.kiaantechnology.com | Together We Architect the Future", 105, 287, { align: 'center' });
        }

        doc.save(`Partnership_Application_${formData.name.replace(/\s+/g, '_')}.pdf`);
    };

    return (
        <main className="min-h-screen bg-black text-white relative pt-6 lg:pt-8 pb-10 font-sans overflow-x-hidden">
            {/* Ambient Lighting Background */}
            <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
                {/* --- HEADER --- */}
                {step < 4 && (
                    <div className="text-center mb-5">
                        <Reveal>
                            <h1 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white mb-2">
                                Join Kiaan <span className="text-yellow-500">Partner Program</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-zinc-400 text-xs md:text-sm max-w-2xl mx-auto font-mono leading-relaxed">
                                Help businesses digitize operations with custom SaaS, ERP, CRM, and enterprise AI. Earn recurring commissions, access resale discounts, and scale co-branded setups.
                            </p>
                        </Reveal>
                    </div>
                )}

                {/* --- STEP PROGRESS BAR --- */}
                {step < 4 && (
                    <div className="mb-5 max-w-xl mx-auto">
                        <div className="flex justify-between items-center relative">
                            {/* Line behind */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-zinc-800 z-0"></div>
                            <div 
                                className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-yellow-500 z-0 transition-all duration-500"
                                style={{ width: `${((step - 1) / (totalSteps - 2)) * 100}%` }}
                            ></div>

                            {[1, 2, 3].map((num) => (
                                <div 
                                    key={num}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold relative z-10 transition-all duration-500 ${
                                        step > num 
                                            ? 'bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]' 
                                            : step === num 
                                                ? 'bg-black border-2 border-yellow-500 text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.2)]'
                                                : 'bg-zinc-950 border-2 border-zinc-800 text-zinc-600'
                                    }`}
                                >
                                    {step > num ? <Check size={13} className="stroke-[3px]" /> : num}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-[9.5px] font-mono text-zinc-500 uppercase tracking-widest mt-1.5 px-1">
                            <span>Tier Setup</span>
                            <span className="text-center">Company Profile</span>
                            <span className="text-right">Vision Details</span>
                        </div>
                    </div>
                )}

                {/* --- FORM WORKFLOW WIZARD --- */}
                <div className="max-w-2xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -15 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* STEP 1: PARTNER TIER SELECTION */}
                            {step === 1 && (
                                <div className="space-y-3.5">
                                    <div className="text-center sm:text-left mb-1">
                                        <h3 className="text-base font-bold font-mono text-white uppercase tracking-wider mb-0.5">Step 1: Choose Your Partnership Path</h3>
                                        <p className="text-[11px] text-zinc-500 font-mono">Select a program tier that aligns with your distribution model.</p>
                                        {errors.partnerTier && <p className="text-xs text-red-500 font-mono mt-1">{errors.partnerTier}</p>}
                                    </div>

                                    <div className="grid grid-cols-1 gap-2.5">
                                        {[
                                            {
                                                id: 'Referral' as const,
                                                title: 'Referral Partner',
                                                desc: 'Recommend Kiaan software or custom enterprise designs to your client network. Easiest path to recurring revenue.',
                                                badge: '15% Commission (Recurring)',
                                                features: ['No monthly minimum deals', 'Marketing materials & referral links', 'Direct tracking dashboards']
                                            },
                                            {
                                                id: 'Reseller' as const,
                                                title: 'Reseller Partner',
                                                desc: 'Package and sell Kiaan SaaS products directly to clients, setting your own pricing margins and retaining customer ownership.',
                                                badge: '25% - 35% Wholesale Discount',
                                                features: ['Co-branded landing pages', 'Tiered margin setups', 'First-line support assistance']
                                            },
                                            {
                                                id: 'Technology' as const,
                                                title: 'Technology Integrator',
                                                desc: 'Architect integrations and API connectors linking Kiaan solutions to other custom software and CRM/ERP channels.',
                                                badge: 'Shared Revenue & APIs',
                                                features: ['Developer sandbox systems', 'Joint client integration pipelines', 'Priority technical APIs']
                                            }
                                        ].map((tier) => {
                                            const isSelected = formData.partnerTier === tier.id;
                                            return (
                                                <div 
                                                    key={tier.id}
                                                    onClick={() => updateData('partnerTier', tier.id)}
                                                    className={`p-5 rounded-2xl bg-zinc-950/40 backdrop-blur-md border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                                                        isSelected 
                                                            ? 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)] scale-[1.01]' 
                                                            : 'border-white/5 hover:border-white/10 hover:bg-zinc-900/10'
                                                    }`}
                                                >
                                                    <div className="flex justify-between items-start mb-3">
                                                        <div>
                                                            <h4 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                                                                {tier.id === 'Referral' && <Users size={16} className="text-yellow-500" />}
                                                                {tier.id === 'Reseller' && <Handshake size={16} className="text-cyan-400" />}
                                                                {tier.id === 'Technology' && <Award size={16} className="text-purple-500" />}
                                                                {tier.title}
                                                            </h4>
                                                            <p className="text-xs text-zinc-400 mt-1 font-sans leading-relaxed">{tier.desc}</p>
                                                        </div>
                                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider font-mono ${
                                                            tier.id === 'Referral' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                                                            tier.id === 'Reseller' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                                                            'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                                        }`}>
                                                            {tier.badge}
                                                        </span>
                                                    </div>

                                                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 border-t border-white/5 pt-3 text-[10px] font-mono text-zinc-500">
                                                        {tier.features.map((feat, idx) => (
                                                            <li key={idx} className="flex items-center gap-1.5">
                                                                <CheckCircle2 size={11} className="text-yellow-500/80 shrink-0" />
                                                                <span className="line-clamp-1">{feat}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: CONTACT & COMPANY DETAILS */}
                            {step === 2 && (
                                <div className="space-y-6">
                                    <div className="text-center sm:text-left mb-2">
                                        <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1">Step 2: Contact Information</h3>
                                        <p className="text-xs text-zinc-500 font-mono">Tell us about yourself and the company you represent.</p>
                                    </div>

                                    <GlassCard className="p-6 border border-white/10 rounded-2xl space-y-4">
                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Full Name</label>
                                            <input 
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={e => updateData('name', e.target.value)}
                                                placeholder="Arthur Dent"
                                                className={`w-full px-3.5 py-2 bg-zinc-950 border ${errors.name ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all`}
                                            />
                                            {errors.name && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Company Name</label>
                                            <input 
                                                type="text"
                                                required
                                                value={formData.company}
                                                onChange={e => updateData('company', e.target.value)}
                                                placeholder="Megadodo Publications Ltd"
                                                className={`w-full px-3.5 py-2 bg-zinc-950 border ${errors.company ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all`}
                                            />
                                            {errors.company && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.company}</p>}
                                        </div>
                                    </GlassCard>
                                </div>
                            )}

                            {/* STEP 3: VISION, CHANNELS & SUBMIT */}
                            {step === 3 && (
                                <div className="space-y-6">
                                    <div className="text-center sm:text-left mb-2">
                                        <h3 className="text-lg font-bold font-mono text-white uppercase tracking-wider mb-1">Step 3: Verification details</h3>
                                        <p className="text-xs text-zinc-500 font-mono">Fill contact lines and business objectives before final submission.</p>
                                    </div>

                                    {submitError && (
                                        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl font-mono">
                                            {submitError}
                                        </div>
                                    )}

                                    <GlassCard className="p-6 border border-white/10 rounded-2xl space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Email Address</label>
                                                <input 
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={e => updateData('email', e.target.value)}
                                                    placeholder="arthur@megadodo.net"
                                                    className={`w-full px-3.5 py-2 bg-zinc-950 border ${errors.email ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all`}
                                                />
                                                {errors.email && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.email}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Phone Number</label>
                                                <input 
                                                    type="text"
                                                    required
                                                    value={formData.phone}
                                                    onChange={e => updateData('phone', e.target.value)}
                                                    placeholder="+1-555-4242"
                                                    className={`w-full px-3.5 py-2 bg-zinc-950 border ${errors.phone ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all`}
                                                />
                                                {errors.phone && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.phone}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Website / Corporate URL (Optional)</label>
                                            <input 
                                                type="text"
                                                value={formData.website}
                                                onChange={e => updateData('website', e.target.value)}
                                                placeholder="https://www.megadodo.net"
                                                className={`w-full px-3.5 py-2 bg-zinc-950 border ${errors.website ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all`}
                                            />
                                            {errors.website && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.website}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">Vision, Audience & Target Clients</label>
                                            <textarea 
                                                required
                                                value={formData.vision}
                                                onChange={e => updateData('vision', e.target.value)}
                                                placeholder="Please explain how you plan to distribute, resell, or refer Kiaan SaaS platforms, and your target client base..."
                                                rows={4}
                                                className={`w-full px-3.5 py-2 bg-zinc-950 border ${errors.vision ? 'border-red-500' : 'border-white/5'} focus:border-yellow-500 text-sm text-white rounded-xl outline-none transition-all resize-none`}
                                            />
                                            {errors.vision && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.vision}</p>}
                                        </div>
                                    </GlassCard>
                                </div>
                            )}

                            {/* STEP 4: SUCCESS SUMMARY SCREEN */}
                            {step === 4 && (
                                <div className="text-center space-y-6 pt-6">
                                    <div className="inline-flex items-center justify-center p-4 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 rounded-full mb-2">
                                        <CheckCircle2 size={48} className="animate-pulse" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-display uppercase tracking-tight text-white mb-2">
                                            Application Received!
                                        </h2>
                                        <p className="text-zinc-400 text-sm max-w-md mx-auto font-mono">
                                            Thank you, <strong className="text-white">{formData.name}</strong>. Our Partner Relations board has logged your application for the <strong className="text-yellow-500">{formData.partnerTier}</strong> tier.
                                        </p>
                                    </div>

                                    <div className="bg-zinc-950/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-md mx-auto text-left font-mono text-xs text-zinc-400 space-y-2.5">
                                        <h4 className="text-white font-bold uppercase tracking-wider mb-2 text-center pb-2 border-b border-white/5">Submitted Profile</h4>
                                        <div className="flex justify-between">
                                            <span>Company:</span>
                                            <strong className="text-white">{formData.company}</strong>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Tier Requested:</span>
                                            <strong className="text-yellow-500">{formData.partnerTier} Partner</strong>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Status:</span>
                                            <strong className="text-green-400 uppercase tracking-widest">Pending Review</strong>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Contact Email:</span>
                                            <strong className="text-zinc-300">{formData.email}</strong>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                        <button
                                            onClick={handleDownloadSummary}
                                            className="px-6 py-3 bg-zinc-900 border border-white/10 hover:border-yellow-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all font-mono"
                                        >
                                            <FileText size={14} className="text-yellow-500" /> Download Application PDF
                                        </button>
                                        <Button
                                            onClick={() => {
                                                setFormData({
                                                    partnerTier: '',
                                                    name: '',
                                                    company: '',
                                                    email: '',
                                                    phone: '',
                                                    website: '',
                                                    vision: ''
                                                });
                                                setStep(1);
                                            }}
                                            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl text-xs font-black uppercase shadow-lg shadow-yellow-500/20"
                                        >
                                            Submit Another Application
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* --- WIZARD BUTTON CONTROLS --- */}
                            {step < 4 && (
                                <div className="flex justify-between items-center pt-6 mt-6 border-t border-white/5">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        disabled={step === 1 || isSubmitting}
                                        className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl text-xs font-bold flex items-center gap-1.5 disabled:opacity-20 disabled:hover:border-zinc-800 transition-all font-mono"
                                    >
                                        <ArrowLeft size={12} /> Back
                                    </button>

                                    {step === 3 ? (
                                        <button
                                            type="button"
                                            onClick={handleSubmitApplication}
                                            disabled={isSubmitting}
                                            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2.5 rounded-xl text-xs font-black uppercase flex items-center gap-1.5 transition-all shadow-lg shadow-yellow-500/20 disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <>Sending Proposal...</>
                                            ) : (
                                                <>Submit Application <Rocket size={12} /></>
                                            )}
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2.5 rounded-xl text-xs font-black uppercase flex items-center gap-1.5 transition-all shadow-lg shadow-yellow-500/20"
                                        >
                                            Next Step <ArrowRight size={12} />
                                        </button>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
}
