"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Gift,
    Share2,
    CheckCircle2,
    Copy,
    Send,
    ArrowRight,
    LucideIcon,
    DollarSign,
    Award,
    Zap,
    HelpCircle,
    ShieldCheck,
    ChevronDown,
    Sparkles,
    MessageSquare
} from 'lucide-react';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { referralProgramData } from '@/data/referralProgramData';

export default function ReferralPage() {
    const [referrerName, setReferrerName] = useState('');
    const [referrerEmail, setReferrerEmail] = useState('');
    const [friendEmail, setFriendEmail] = useState('');
    const [copied, setCopied] = useState(false);
    const [inviteSent, setInviteSent] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Generated referral link
    const refCode = referrerName ? referrerName.toLowerCase().replace(/\s+/g, '-') + '-' + Math.floor(1000 + Math.random() * 9000) : 'partner-500';
    const referralLink = `https://kiaantechnology.com/start-project?ref=${refCode}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    const handleDirectInvite = (e: React.FormEvent) => {
        e.preventDefault();
        if (!friendEmail) return;
        setInviteSent(true);
        setTimeout(() => setInviteSent(false), 5000);
        setFriendEmail('');
    };

    // Social share links
    const shareText = encodeURIComponent(`Introduce your business to Kiaan Technology for enterprise software & AI automation. Use my referral link to get priority architecture auditing:`);
    const encodedUrl = encodeURIComponent(referralLink);

    const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`;
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`;
    const mailtoUrl = `mailto:${friendEmail}?subject=${encodeURIComponent("Recommended Software & AI Engineering Partner")}&body=${encodeURIComponent(`Hi,\n\nI wanted to connect you with Kiaan Technology for custom software development, AI automation, or ERP solutions. You can request a free architecture audit using my referral link below:\n\n${referralLink}\n\nBest regards,\n${referrerName || 'Your Technology Partner'}`)}`;

    return (
        <div className="bg-black text-white font-sans selection:bg-yellow-500 selection:text-black min-h-screen pt-28 pb-20 px-6 relative overflow-hidden">
            {/* Background Ambient Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(234,179,8,0.08)_0%,_transparent_65%)] pointer-events-none" />
            <div className="absolute top-1/3 -right-32 w-96 h-96 bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <Reveal>
                        <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-yellow-500/30 px-5 py-2 rounded-full backdrop-blur-md mb-8">
                            <Gift className="text-yellow-500" size={16} />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-yellow-500">
                                OFFICIAL REFERRAL PROGRAM // GET £500 CREDIT
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase tracking-tighter leading-[1.08] text-white mb-6">
                            Refer An Enterprise Client.<br />
                            <span className="text-yellow-500">Earn £500 Credit.</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-zinc-300 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
                            Introduce founders, executives, or CTOs to Kiaan Technology. Receive a <strong className="text-white">£500 service credit or direct cash payout</strong> for every successful client referral.
                        </p>
                    </Reveal>

                    {/* Quick Stats Badges */}
                    <Reveal delay={0.3} width="100%">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {[
                                { label: "Standard Reward", val: "£500" },
                                { label: "Enterprise Tier", val: "£1,500" },
                                { label: "Payout Window", val: "14 Days" },
                                { label: "Max Limit", val: "Unlimited" }
                            ].map((stat, i) => (
                                <div key={i} className="p-4 border border-white/10 bg-zinc-950/60 text-center">
                                    <div className="text-2xl md:text-3xl font-display text-yellow-500 mb-1">{stat.val}</div>
                                    <div className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>

                {/* Interactive Link & Sharing Hub */}
                <section className="mb-20">
                    <Reveal width="100%">
                        <div className="p-8 md:p-12 bg-zinc-950 border border-yellow-500/30 rounded-none relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/5 blur-[100px] pointer-events-none" />

                            <div className="max-w-3xl mx-auto">
                                <div className="text-center mb-8">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 block mb-2">
                                        Instant Link Generator
                                    </span>
                                    <h2 className="text-2xl md:text-4xl font-display uppercase tracking-tight">
                                        Generate Your Unique <span className="text-yellow-500">Referral Link</span>
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Sarah Jenkins"
                                            value={referrerName}
                                            onChange={(e) => setReferrerName(e.target.value)}
                                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            placeholder="e.g. sarah@company.com"
                                            value={referrerEmail}
                                            onChange={(e) => setReferrerEmail(e.target.value)}
                                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Generated Link Display Box */}
                                <div className="p-4 bg-black border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                                    <div className="font-mono text-xs text-yellow-500 truncate w-full sm:w-auto">
                                        {referralLink}
                                    </div>
                                    <Button
                                        onClick={handleCopy}
                                        className="h-11 px-6 bg-yellow-500 text-black hover:bg-white text-xs font-black uppercase tracking-widest rounded-none flex-shrink-0 transition-all gap-2"
                                    >
                                        {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                        {copied ? "Link Copied!" : "Copy Referral Link"}
                                    </Button>
                                </div>

                                {/* Social Sharing Options */}
                                <div className="border-t border-zinc-900 pt-6">
                                    <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center mb-4">
                                        One-Click Social Sharing Options
                                    </div>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white text-emerald-400 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2">
                                            <MessageSquare size={14} /> WhatsApp Share
                                        </a>
                                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-blue-950/60 border border-blue-500/30 hover:bg-blue-600 hover:text-white text-blue-400 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2">
                                            <Share2 size={14} /> LinkedIn Share
                                        </a>
                                        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-zinc-900 border border-zinc-700 hover:bg-white hover:text-black text-zinc-300 text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2">
                                            <Share2 size={14} /> Twitter / X
                                        </a>
                                    </div>
                                </div>

                                {/* Direct Email Invite Option */}
                                <div className="border-t border-zinc-900 pt-8 mt-8">
                                    <form onSubmit={handleDirectInvite} className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter your colleague's or client's email..."
                                            value={friendEmail}
                                            onChange={(e) => setFriendEmail(e.target.value)}
                                            className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                                        />
                                        <a
                                            href={friendEmail ? mailtoUrl : '#'}
                                            onClick={(e) => {
                                                if (!friendEmail) {
                                                    e.preventDefault();
                                                    alert("Please enter a valid email address first.");
                                                } else {
                                                    setInviteSent(true);
                                                    setTimeout(() => setInviteSent(false), 4000);
                                                }
                                            }}
                                        >
                                            <Button type="button" className="h-12 px-6 bg-zinc-800 text-white border border-zinc-700 hover:bg-yellow-500 hover:text-black text-xs font-black uppercase tracking-widest rounded-none transition-all w-full sm:w-auto gap-2">
                                                <Send size={14} /> Send Direct Email Invite
                                            </Button>
                                        </a>
                                    </form>

                                    {inviteSent && (
                                        <div className="mt-3 text-xs font-bold text-emerald-400 flex items-center gap-2">
                                            <CheckCircle2 size={14} /> Email client opened with your pre-configured referral template!
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </Reveal>
                </section>

                {/* How It Works (3 Steps) */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <Reveal>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 block mb-2">
                                Simple 3-Step Process
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight">
                                How The <span className="text-yellow-500">Program Works</span>
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {referralProgramData.howItWorks.map((step, idx) => (
                            <Reveal key={idx} delay={idx * 0.1}>
                                <div className="p-8 bg-zinc-950 border border-white/5 hover:border-yellow-500/40 transition-all duration-500 h-full relative group">
                                    <div className="text-4xl font-display text-yellow-500/30 group-hover:text-yellow-500 transition-colors mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-display uppercase text-white mb-3 group-hover:text-yellow-500 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* Reward Tiers */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <Reveal>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 block mb-2">
                                Transparent Payout Tiers
                            </span>
                            <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight">
                                Referral Reward <span className="text-yellow-500">Structure</span>
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {referralProgramData.tiers.map((tier, idx) => (
                            <Reveal key={idx} delay={idx * 0.15}>
                                <div className={`p-8 bg-zinc-950 border ${idx === 1 ? 'border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.15)]' : 'border-white/10'} transition-all h-full flex flex-col justify-between relative`}>
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-yellow-500 text-black">
                                                {tier.badge}
                                            </span>
                                            <Sparkles size={16} className="text-yellow-500" />
                                        </div>
                                        <h3 className="text-xl font-display uppercase text-white mb-2">{tier.name}</h3>
                                        <div className="text-3xl font-display text-yellow-500 mb-3">{tier.reward}</div>
                                        <div className="text-xs font-bold text-zinc-300 mb-4 pb-4 border-b border-zinc-900">
                                            {tier.qualifyingCriteria}
                                        </div>
                                        <p className="text-zinc-400 text-xs font-light leading-relaxed">
                                            {tier.description}
                                        </p>
                                    </div>
                                    <div className="mt-8 pt-4 border-t border-zinc-900">
                                        <Link href="/contact">
                                            <Button variant="outline" className="w-full h-11 text-xs font-black uppercase tracking-widest rounded-none border-white/20 hover:border-yellow-500 hover:text-yellow-500">
                                                Refer This Tier
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* Terms & Conditions & FAQs */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Terms */}
                    <div>
                        <Reveal>
                            <h3 className="text-2xl font-display uppercase tracking-tight text-white mb-6 flex items-center gap-3">
                                <ShieldCheck className="text-yellow-500" size={24} /> Terms & Governance
                            </h3>
                        </Reveal>
                        <div className="space-y-4">
                            {referralProgramData.termsAndConditions.map((term, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <div className="p-6 bg-zinc-950/60 border border-white/5">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-yellow-500 mb-2">{term.title}</h4>
                                        <p className="text-xs text-zinc-400 font-light leading-relaxed">{term.content}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* FAQs Accordion */}
                    <div>
                        <Reveal>
                            <h3 className="text-2xl font-display uppercase tracking-tight text-white mb-6 flex items-center gap-3">
                                <HelpCircle className="text-yellow-500" size={24} /> Frequently Asked Questions
                            </h3>
                        </Reveal>
                        <div className="space-y-4">
                            {referralProgramData.faqs.map((faq, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <div className="border border-white/10 bg-zinc-950/80 overflow-hidden">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className="w-full p-5 text-left flex items-center justify-between text-sm font-bold uppercase tracking-wider text-white hover:text-yellow-500 transition-colors"
                                        >
                                            <span>{faq.question}</span>
                                            <ChevronDown size={18} className={`transform transition-transform ${openFaq === i ? 'rotate-180 text-yellow-500' : 'text-zinc-500'}`} />
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === i && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="px-5 pb-5 text-xs text-zinc-400 font-light leading-relaxed border-t border-zinc-900 pt-3"
                                                >
                                                    {faq.answer}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Direct CTA */}
                <div className="p-10 border border-yellow-500/20 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden text-center max-w-4xl mx-auto">
                    <div className="absolute top-0 right-0 w-80 h-full bg-yellow-500/5 blur-[80px] pointer-events-none" />
                    <div className="relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500 block mb-2">
                            Have a Major Enterprise Deal?
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-white mb-4">
                            Speak Directly With Our <span className="text-yellow-500">Partner Lead</span>
                        </h2>
                        <p className="text-zinc-400 text-xs md:text-sm max-w-xl mx-auto font-light leading-relaxed mb-8">
                            Managing continuous client introductions or large enterprise tenders? We customize bespoke revenue share models for strategic technology partners.
                        </p>
                        <Link href="/contact">
                            <Button className="h-14 px-8 bg-yellow-500 text-black hover:bg-white text-xs font-black uppercase tracking-[0.2em] rounded-none transition-all">
                                Schedule Partner Briefing
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
