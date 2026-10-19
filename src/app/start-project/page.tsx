"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, Rocket, CheckCircle2, LucideIcon } from 'lucide-react'
import { GlassCard } from '@/components/GlassCard'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import React from 'react';
import emailjs from '@emailjs/browser';
import { trackGAEvent, trackGTMEvent } from '@/utils/analytics';
import { getStoredUTMParams } from '@/utils/utm';
import Link from 'next/link';

const EMAILJS_SERVICE_ID = 'service_opc05wm';
const EMAILJS_TEMPLATE_ID = 'template_jpwu4pp';
const EMAILJS_PUBLIC_KEY = 'zXyGNtU81gEw6BmhH';

interface FormData {
    industry: string;
    projectType: string;
    features: string[];
    vision: string;
    budget: string;
    timeline: string;
    name: string;
    company: string;
    email: string;
    contactMethod: string;
    contactNumber: string;
}

export default function StartProject() {
    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const [formData, setFormData] = useState<FormData>({
        industry: '',
        projectType: '',
        features: [],
        vision: '',
        budget: '',
        timeline: '',
        name: '',
        company: '',
        email: '',
        contactMethod: 'Email',
        contactNumber: ''
    })

    const totalSteps = 6
    const nextStep = () => setStep(s => s + 1)
    const prevStep = () => setStep(s => s - 1)

    const updateData = (key: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }))
    }

    const toggleFeature = (feature: string) => {
        setFormData(prev => ({
            ...prev,
            features: prev.features.includes(feature)
                ? prev.features.filter(f => f !== feature)
                : [...prev.features, feature]
        }))
    }

    const buildTemplateParams = () => {
        const utm = getStoredUTMParams();
        return {
            name: formData.name || 'N/A',
            company: formData.company || 'N/A',
            email: formData.email || 'N/A',
            contact_number: formData.contactNumber || 'N/A',
            contact_method: formData.contactMethod || 'N/A',
            industry: formData.industry || 'N/A',
            project_type: formData.projectType || 'N/A',
            features: formData.features.length ? formData.features.join(', ') : 'None selected',
            vision: formData.vision || 'N/A',
            budget: formData.budget || 'N/A',
            timeline: formData.timeline || 'N/A',
            submitted_at: new Date().toLocaleString(),
            message: [
                `Name: ${formData.name || 'N/A'}`,
                `Company: ${formData.company || 'N/A'}`,
                `Email: ${formData.email || 'N/A'}`,
                `Contact Number: ${formData.contactNumber || 'N/A'}`,
                `Preferred Contact: ${formData.contactMethod || 'N/A'}`,
                `Industry: ${formData.industry || 'N/A'}`,
                `Project Type: ${formData.projectType || 'N/A'}`,
                `Features: ${formData.features.length ? formData.features.join(', ') : 'None selected'}`,
                `Project Vision: ${formData.vision || 'N/A'}`,
                `Budget: ${formData.budget || 'N/A'}`,
                `Timeline: ${formData.timeline || 'N/A'}`,
                `UTM Source: ${utm?.utm_source || 'Direct/None'}`,
                `UTM Medium: ${utm?.utm_medium || 'Direct/None'}`,
                `UTM Campaign: ${utm?.utm_campaign || 'Direct/None'}`,
                `UTM Term: ${utm?.utm_term || 'Direct/None'}`,
                `UTM Content: ${utm?.utm_content || 'Direct/None'}`,
                `Referral Code: ${utm?.ref || 'None'}`
            ].join('\n')
        };
    };

    const handleSubmitRequest = async () => {
        if (isSubmitting) return;

        setIsSubmitting(true)
        setSubmitError('')

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                buildTemplateParams(),
                EMAILJS_PUBLIC_KEY
            )
            trackGAEvent('form_submit', 'Lead Generation', 'Start Project Request');
            trackGTMEvent('form_submit', { form_name: 'Start Project Request', project_type: formData.projectType, budget: formData.budget });

            try {
                await fetch('/api/leads/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        leadType: 'start_project',
                        name: formData.name,
                        company: formData.company,
                        email: formData.email,
                        phone: formData.contactNumber,
                        contactMethod: formData.contactMethod,
                        industry: formData.industry,
                        projectType: formData.projectType,
                        features: formData.features,
                        vision: formData.vision,
                        budget: formData.budget,
                        timeline: formData.timeline,
                        sourcePage: '/start-project'
                    })
                });
            } catch (err) {
                console.warn('Backend start-project lead sync notice:', err);
            }

            setStep(7);
        } catch {
            setSubmitError('Request send nahi ho paayi. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleDownload = async () => {
        const { jsPDF } = await import('jspdf');
        const doc = new jsPDF();

        // Header
        doc.setFillColor(0, 0, 0);
        doc.rect(0, 0, 210, 40, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.text("KIAAN TECHNOLOGY", 20, 25);

        doc.setDrawColor(234, 179, 8); // Yellow
        doc.setLineWidth(1);
        doc.line(20, 32, 100, 32);

        // Body Header
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(18);
        doc.text("PROJECT SUMMARY", 20, 55);

        doc.setFontSize(10);
        doc.setTextColor(120, 120, 120);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 62);

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);

        let yPos = 75;
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

        addSection("CLIENT NAME", formData.name);
        addSection("COMPANY", formData.company);
        addSection("EMAIL", formData.email);
        addSection("PHONE", formData.contactNumber);
        addSection("METHOD", formData.contactMethod);

        yPos += 5;
        addSection("INDUSTRY", formData.industry);
        addSection("PROJECT TYPE", formData.projectType);

        // Features handling
        doc.setFont("helvetica", "bold");
        doc.text("FEATURES:", 20, yPos);
        doc.setFont("helvetica", "normal");
        const featuresText = formData.features.join(', ') || 'None selected';
        const featuresLines = doc.splitTextToSize(featuresText, 140);
        doc.text(featuresLines, 60, yPos);
        yPos += (featuresLines.length * 7) + 10;

        // Vision handling
        if (yPos > 250) { doc.addPage(); yPos = 20; }
        doc.setFont("helvetica", "bold");
        doc.text("PROJECT VISION:", 20, yPos);
        yPos += 8;
        doc.setFont("helvetica", "normal");
        const visionLines = doc.splitTextToSize(formData.vision, 170);
        doc.text(visionLines, 20, yPos);
        yPos += (visionLines.length * 7) + 15;

        // Financials
        if (yPos > 260) { doc.addPage(); yPos = 20; }
        addSection("BUDGET", formData.budget);
        addSection("TIMELINE", formData.timeline);

        // Footer
        const pageCount = (doc as any).internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(10);
            doc.setTextColor(150, 150, 150);
            doc.text("www.kiaantechnology.com | Empowering Digital Vision", 105, 287, { align: 'center' });
        }

        doc.save(`Project_Summary_${formData.name.replace(/\s+/g, '_')}.pdf`);
    }

    const isStepValid = () => {
        if (step === 1) {
            return formData.name.trim() !== '' &&
                formData.email.trim() !== '' &&
                formData.contactNumber.trim() !== '';
        }
        return true;
    }

    const StepTitle = ({ title, optional }: { title: string; optional?: boolean }) => (
        <div className="mb-3">
            <h2 className="text-xl md:text-2xl font-display uppercase tracking-tight text-white mb-1">
                {title}
                {optional && (
                    <span className="text-yellow-500/60 text-xs md:text-sm ml-2 tracking-[0.1em] font-black italic">
                        (OPTIONAL)
                    </span>
                )}
            </h2>
            <div className="w-12 h-0.5 bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
        </div>
    )

    // Define steps content
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-4">
                        <StepTitle title="Contact Details" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                { key: 'name', placeholder: 'Your Name', type: 'text' },
                                { key: 'company', placeholder: 'Company Name', type: 'text' },
                                { key: 'email', placeholder: 'Email Address', type: 'email' }
                            ].map((input) => (
                                <div key={input.key} className="space-y-1.5">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">{input.placeholder}</label>
                                    <input
                                        type={input.type}
                                        className="w-full bg-zinc-900 border-2 border-zinc-800 rounded-[10px] p-2.5 text-white focus:border-yellow-500 outline-none transition-all placeholder:text-zinc-700 text-sm font-light"
                                        value={formData[input.key as keyof FormData] as string}
                                        onChange={(e) => updateData(input.key as keyof FormData, e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                const form = e.currentTarget.closest('.space-y-4');
                                                if (form) {
                                                    const inputs = Array.from(form.querySelectorAll('input, select, textarea')) as HTMLElement[];
                                                    const index = inputs.indexOf(e.currentTarget as HTMLElement);
                                                    if (index !== -1 && index < inputs.length - 1) {
                                                        inputs[index + 1].focus();
                                                    }
                                                }
                                            }
                                        }}
                                        placeholder={input.key === 'name' ? 'Enter your name' : input.key === 'company' ? 'Enter company name' : 'Enter email address'}
                                    />
                                </div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-1.5"
                            >
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Contact Number</label>
                                <input
                                    type="tel"
                                    className="w-full bg-zinc-900 border-2 border-zinc-800 rounded-[10px] p-2.5 text-white focus:border-yellow-500 outline-none transition-all placeholder:text-zinc-700 text-sm font-light"
                                    value={formData.contactNumber}
                                    onChange={(e) => updateData('contactNumber', e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            const form = e.currentTarget.closest('.space-y-4');
                                            if (form) {
                                                const inputs = Array.from(form.querySelectorAll('input, select, textarea')) as HTMLElement[];
                                                const index = inputs.indexOf(e.currentTarget as HTMLElement);
                                                if (index !== -1 && index < inputs.length - 1) {
                                                    inputs[index + 1].focus();
                                                }
                                            }
                                        }
                                    }}
                                    placeholder="Enter contact number"
                                />
                            </motion.div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Preferred Contact</label>
                                <select
                                    className="w-full bg-zinc-900 border-2 border-zinc-800 rounded-[10px] p-2.5 text-zinc-200 focus:border-yellow-500 outline-none transition-all appearance-none cursor-pointer text-sm font-light"
                                    value={formData.contactMethod}
                                    onChange={(e) => updateData('contactMethod', e.target.value)}
                                >
                                    <option value="Email" className="bg-black">Official Email Address</option>
                                    <option value="WhatsApp" className="bg-black">Direct WhatsApp Message</option>
                                    <option value="Phone Call" className="bg-black">Standard Voice Call</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className="space-y-4">
                        <StepTitle title="Select Your Industry" />
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                            {['Healthcare', 'Fintech', 'Retail', 'Education', 'Real Estate', 'Logistics', 'Automotive', 'Hospitality', 'Other'].map((ind) => {
                                const isSelected = formData.industry === ind;
                                return (
                                    <div
                                        key={ind}
                                        onClick={() => updateData('industry', ind)}
                                        className={`p-3 md:p-4 rounded-[10px] border-2 cursor-pointer transition-all duration-300 text-center flex items-center justify-center font-black uppercase tracking-[0.1em] text-[10px] hover:-translate-y-1 ${isSelected
                                            ? 'border-yellow-500 bg-zinc-900 shadow-[inset_0_0_20px_rgba(234,179,8,0.2)] text-white scale-[1.02]'
                                            : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-yellow-500/40 hover:bg-zinc-900 hover:text-white'
                                            }`}
                                    >
                                        {ind}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )
            case 3:
                return (
                    <div className="space-y-4">
                        <StepTitle title="Project Type" />
                        <div className="grid grid-cols-2 gap-3">
                            {['Website', 'Mobile App', 'SaaS Platform', 'Dashboard', 'CRM / ERP ecosystem', 'Automation Suite'].map((type) => {
                                const isSelected = formData.projectType === type;
                                return (
                                    <div
                                        key={type}
                                        onClick={() => updateData('projectType', type)}
                                        className={`p-4 md:p-5 rounded-[12px] border-2 cursor-pointer transition-all duration-300 text-center font-black uppercase tracking-[0.15em] text-[10px] hover:-translate-y-1 ${isSelected
                                            ? 'border-yellow-500 bg-zinc-900 shadow-[inset_0_0_25px_rgba(234,179,8,0.2)] text-white scale-[1.02]'
                                            : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-yellow-500/40 hover:bg-zinc-900 hover:text-white'
                                            }`}
                                    >
                                        {type}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )
            case 4:
                return (
                    <div className="space-y-4">
                        <StepTitle title="Key Features" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {['User Authentication', 'Admin Dashboard', 'Payment Gateway', 'Booking System', 'Push Notifications', 'Real-time Chat', 'AI Integration', 'Advanced Analytics'].map((feature) => {
                                const isSelected = formData.features.includes(feature);
                                return (
                                    <div
                                        key={feature}
                                        onClick={() => toggleFeature(feature)}
                                        className={`p-2.5 rounded-[10px] border-2 cursor-pointer transition-all duration-300 flex items-center gap-3 hover:bg-zinc-900 ${isSelected
                                            ? 'border-yellow-500 bg-zinc-900 text-white shadow-lg'
                                            : 'border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700'
                                            }`}
                                    >
                                        <div className={`w-5 h-5 rounded-[4px] border-2 flex items-center justify-center transition-all duration-300 ${isSelected ? 'bg-yellow-500 border-yellow-500 text-black' : 'border-zinc-700'
                                            }`}>
                                            {isSelected && <Check size={14} strokeWidth={4} />}
                                        </div>
                                        <span className={`text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-zinc-400'}`}>{feature}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )
            case 5:
                return (
                    <div className="space-y-4">
                        <StepTitle title="Project Vision" />
                        <p className="text-zinc-400 text-sm font-light leading-relaxed mb-1">Describe your core idea, business goals, and audience.</p>
                        <div className="relative group">
                            <textarea
                                className="w-full h-24 bg-zinc-900/60 border-2 border-zinc-800 rounded-[12px] p-4 text-white focus:outline-none focus:border-yellow-500 transition-all duration-300 resize-none font-light text-base tracking-tight placeholder:text-zinc-700"
                                placeholder="I want to build a platform that..."
                                value={formData.vision}
                                onChange={(e) => updateData('vision', e.target.value)}
                            />
                            <div className="absolute inset-0 rounded-[12px] bg-yellow-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity"></div>
                        </div>
                    </div>
                )
            case 6:
                return (
                    <div className="space-y-4">
                        <StepTitle title="Budget & Delivery" />
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block ml-1">Investment Range</label>
                                <div className="space-y-2">
                                    {['$100 - $500', '$500 - $2k', '$2k - $5k', '$5k - $10k', '$10k+'].map((range) => {
                                        const isSelected = formData.budget === range;
                                        return (
                                            <div
                                                key={range}
                                                onClick={() => updateData('budget', range)}
                                                className={`p-2.5 rounded-[8px] border-2 cursor-pointer transition-all duration-300 font-black text-[10px] uppercase tracking-widest text-center ${isSelected
                                                    ? 'border-yellow-500 bg-yellow-500/10 text-white shadow-lg'
                                                    : 'border-zinc-800 bg-zinc-900/40 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                                                    }`}
                                            >
                                                {range}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 block ml-1">Required Timeline</label>
                                <div className="space-y-2">
                                    {['Urgent (<1 month)', '1-3 months', '3-6 months', 'Flexible Schedule'].map((time) => {
                                        const isSelected = formData.timeline === time;
                                        return (
                                            <div
                                                key={time}
                                                onClick={() => updateData('timeline', time)}
                                                className={`p-2.5 rounded-[8px] border-2 cursor-pointer transition-all duration-300 font-black text-[10px] uppercase tracking-widest text-center ${isSelected
                                                    ? 'border-yellow-500 bg-yellow-500/10 text-white shadow-lg'
                                                    : 'border-zinc-800 bg-zinc-900/40 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                                                    }`}
                                            >
                                                {time}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            default:
                return null
        }
    }

    if (step === 7) {
        return (
            <div className="container mx-auto px-6 py-12 flex justify-center items-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.12)_0%,_transparent_70%)] pointer-events-none"></div>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-xl w-full"
                >
                    <GlassCard className="text-center py-12 px-8 space-y-6 rounded-[30px] border-yellow-500/30 shadow-[0_0_60px_rgba(234,179,8,0.2)]">
                        <div className="w-20 h-20 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(234,179,8,0.4)]">
                            <CheckCircle2 size={40} strokeWidth={2} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-white leading-none">Request Received!</h2>
                        <p className="text-zinc-300 text-lg leading-relaxed font-light">
                            Thank you for sharing your project vision. Our lead engineers are mapping out your system architecture. Expect a detailed road map within <span className="text-yellow-500 font-black">24 hours</span>.
                        </p>
                        <div className="flex flex-col gap-3 pt-6">
                            <Button
                                onClick={handleDownload}
                                className="w-full h-14 bg-yellow-500 text-black font-black uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all shadow-[0_10px_20px_rgba(234,179,8,0.2)] text-sm"
                            >
                                Download Summary
                            </Button>
                            <Link href="/" className="inline-flex w-full h-14 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-yellow-500 font-black uppercase tracking-[0.2em] text-[10px] transition-colors">
                                Return Home
                            </Link>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="relative bg-black text-white pt-8 pb-12 overflow-hidden selection:bg-yellow-500 selection:text-black">
            {/* Background enhancement */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.05)_0%,_transparent_70%)] pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-2 flex flex-col items-center">
                    <Reveal>
                        <h1 className="text-3xl md:text-5xl font-display uppercase tracking-[0.05em] text-white mb-1 leading-none">
                            Start <span className="text-yellow-500">Your Project</span>
                        </h1>
                    </Reveal>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base md:text-lg text-white font-medium max-w-2xl mx-auto tracking-tight opacity-80"
                    >
                        Deploy your vision into our elite <span className="text-yellow-500 font-bold">engineering ecosystem</span>.
                    </motion.p>
                </div>

                {/* Progress Visualizer */}
                <div className="max-w-4xl mx-auto mb-1">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-100">System Processing</span>
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-yellow-500">Step {step} of {totalSteps}</span>
                    </div>
                    <div className="h-3 bg-zinc-900 border-2 border-zinc-800 rounded-full overflow-hidden relative shadow-inner">
                        <motion.div
                            className="h-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-500 relative"
                            initial={{ width: 0 }}
                            animate={{ width: `${(step / totalSteps) * 100}%` }}
                            transition={{ duration: 0.8, ease: "anticipate" }}
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-yellow-400 blur-xl rounded-full opacity-60"></div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                        </motion.div>
                    </div>
                </div>

                {/* Main Card Container */}
                <GlassCard className="relative bg-zinc-900/50 backdrop-blur-3xl border-2 border-zinc-800 rounded-[20px] min-h-[250px] flex flex-col justify-between p-4 md:pt-4 md:pb-5 md:px-6 shadow-[0_50px_120px_rgba(0,0,0,0.7)] group overflow-hidden max-w-5xl mx-auto">
                    {/* Yellow corner accent */}
                    <div className="absolute top-0 right-0 w-2 h-24 bg-yellow-500 origin-top shadow-[0_0_20px_rgba(234,179,8,0.5)]"></div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, scale: 0.98, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 1.02, x: -20 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="flex-grow pt-1"
                        >
                            {renderStep()}
                        </motion.div>
                    </AnimatePresence>

                    {submitError && (
                        <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                            {submitError}
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t-2 border-zinc-800/80 gap-4 mt-6">
                        <button
                            onClick={prevStep}
                            disabled={step === 1}
                            className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-zinc-500 hover:text-yellow-500 hover:translate-x-[-4px]'}`}
                        >
                            <ArrowLeft size={18} strokeWidth={3} /> Back
                        </button>
                        <div className="flex items-center gap-8">
                            {step > 1 && (
                                <button
                                    onClick={nextStep}
                                    className="text-white/40 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300"
                                >
                                    Skip Step
                                </button>
                            )}
                            <Button
                                onClick={() => {
                                    if (!isStepValid()) return;
                                    if (step === totalSteps) {
                                        void handleSubmitRequest()
                                        return
                                    }
                                    nextStep()
                                }}
                                disabled={!isStepValid() || isSubmitting}
                                className={`w-full md:w-auto h-12 px-8 rounded-full font-black uppercase tracking-[0.25em] text-sm flex items-center justify-center gap-4 transition-all duration-500 ${step === totalSteps
                                    ? 'bg-yellow-500 text-black hover:bg-white shadow-[0_0_40px_rgba(234,179,8,0.4)]'
                                    : 'bg-yellow-500 text-black hover:bg-white hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]'
                                    } translate-y-[0] ${!isStepValid() || isSubmitting ? 'opacity-30 cursor-not-allowed' : 'hover:translate-y-[-4px]'}`}
                            >
                                {step === totalSteps ? (isSubmitting ? 'Sending Request...' : 'Finalize Request') : 'Next Step'}
                                <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}
