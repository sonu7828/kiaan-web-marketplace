'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle2, Download, Loader2 } from 'lucide-react';
import { PROJECT_STAGES } from '@/lib/saasChecklistLead';
import { ALL_LEAD_MAGNETS, InfoGrid, LeadMagnetFAQ, RelatedResources, ResourceBreadcrumbs, SAAS_FAQS } from '@/components/lead-magnets/LeadMagnetSections';

const PDF_URL = '/downloads/saas-development-checklist.pdf';
const inputClass = 'w-full border border-zinc-700 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20';
type FormFields = { fullName: string; email: string; phone: string; companyName: string; projectStage: string; consent: boolean; website: string };
type Errors = Partial<Record<keyof FormFields | 'form', string>>;

function track(event: string) {
    if (typeof window === 'undefined') return;
    const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
    dataLayer?.push({ event, lead_magnet_name: 'saas_development_checklist' });
}

export function SaasChecklistPage() {
    const [form, setForm] = useState<FormFields>({ fullName: '', email: '', phone: '', companyName: '', projectStage: '', consent: false, website: '' });
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const started = useRef(false);

    useEffect(() => { track('lead_magnet_page_view'); }, []);
    const markStarted = () => { if (!started.current) { started.current = true; track('lead_magnet_form_started'); } };
    const update = (key: keyof FormFields, value: string | boolean) => {
        markStarted(); setForm((current) => ({ ...current, [key]: value })); setErrors((current) => ({ ...current, [key]: undefined, form: undefined }));
    };

    const validate = () => {
        const next: Errors = {};
        if (form.fullName.trim().length < 2) next.fullName = 'Please enter your full name.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Please enter a valid business email.';
        const digits = form.phone.replace(/\D/g, '');
        if (digits.length < 7 || digits.length > 15) next.phone = 'Please enter a valid phone number (7–15 digits).';
        if (!form.projectStage) next.projectStage = 'Please select your project stage.';
        if (!form.consent) next.consent = 'Consent is required.';
        setErrors(next); return Object.keys(next).length === 0;
    };

    const download = () => {
        const link = document.createElement('a');
        link.href = PDF_URL; link.download = 'Kiaan-Technology-SaaS-Development-Checklist.pdf';
        document.body.appendChild(link); link.click(); link.remove(); track('lead_magnet_download');
    };

    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status === 'submitting' || !validate()) return;
        setStatus('submitting');
        try {
            const response = await fetch('/api/leads/saas-checklist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
            const data = await response.json() as { ok?: boolean; message?: string; errors?: Errors };
            if (!response.ok || !data.ok) { setErrors(data.errors || { form: data.message || 'Submission failed. Please try again.' }); setStatus('idle'); track('lead_magnet_submission_failed'); return; }
            setStatus('success'); track('lead_magnet_form_submitted'); window.setTimeout(download, 250);
        } catch {
            setErrors({ form: 'Unable to connect. Please check your connection and try again.' }); setStatus('idle'); track('lead_magnet_submission_failed');
        }
    }

    const benefits = ['Validate your SaaS idea and target market', 'Define the correct MVP feature scope', 'Plan secure multi-tenant architecture', 'Prepare subscriptions and recurring billing', 'Review testing, deployment and monitoring', 'Calculate your SaaS launch-readiness score', 'Follow a practical 30-60-90 day action plan'];
    const included = ['Product strategy and validation', 'MVP planning', 'User experience', 'Multi-tenant SaaS architecture', 'Security and compliance', 'Subscription billing', 'Development and QA', 'Deployment and monitoring', 'Analytics and customer success', 'Launch-readiness scoring', '30-60-90 day plan'];
    const audience = ['SaaS founders', 'Startup teams', 'SMEs digitising their services', 'Agencies launching SaaS products', 'Businesses replacing manual workflows', 'Companies modernising an existing platform'];

    return <div className="min-h-screen bg-black pb-16 pt-24 text-white">
        <main className="container mx-auto max-w-6xl px-5">
            <ResourceBreadcrumbs current="SaaS Development Checklist" />
            <section className="grid gap-8 border-b border-zinc-900 pb-12 lg:grid-cols-[1.08fr_.92fr] lg:items-start">
                <div className="pt-2">
                    <span className="inline-flex border border-yellow-500/50 bg-yellow-500/10 px-3 py-1.5 text-[10px] font-black tracking-[.25em] text-yellow-500">FREE SAAS RESOURCE</span>
                    <h1 className="mt-5 max-w-3xl font-display text-4xl uppercase leading-[.95] tracking-tighter md:text-6xl">Plan, Build and Launch Your <span className="text-yellow-500">SaaS Product</span> with Confidence</h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">Download our practical SaaS Development Checklist to validate your idea, define your MVP, plan a secure multi-tenant architecture and prepare your product for a successful launch.</p>
                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">{benefits.map((item) => <li key={item} className="flex gap-3 text-sm text-zinc-300"><Check className="mt-0.5 shrink-0 text-yellow-500" size={16} />{item}</li>)}</ul>
                    <p className="mt-7 border-l-2 border-yellow-500 pl-4 text-xs leading-5 text-zinc-500">Created by Kiaan Technology’s software development team for founders, startups and growing businesses planning to build a scalable SaaS platform.</p>
                </div>
                <div className="border border-zinc-800 bg-zinc-950 p-5 shadow-[6px_6px_0_0_#eab308] md:p-7">
                    {status === 'success' ? <div className="py-8 text-center" aria-live="polite">
                        <CheckCircle2 className="mx-auto mb-4 text-yellow-500" size={48} />
                        <h2 className="font-display text-3xl uppercase">Your SaaS Checklist Is Ready!</h2>
                        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-400">Thank you for your interest. Your download should begin automatically. Our team may contact you to understand your SaaS requirements.</p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <a href={PDF_URL} download="Kiaan-Technology-SaaS-Development-Checklist.pdf" onClick={() => track('lead_magnet_download')} className="inline-flex items-center justify-center gap-2 bg-yellow-500 px-5 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-yellow-400"><Download size={16}/>Download the Checklist Again</a>
                            <Link href="/contact" onClick={() => track('saas_consultation_cta_clicked')} className="inline-flex items-center justify-center border border-zinc-700 px-5 py-3 text-xs font-black uppercase tracking-wider hover:border-yellow-500">Book a Free Consultation</Link>
                        </div>
                    </div> : <>
                        <h2 className="font-display text-2xl uppercase">Get the Free Checklist</h2>
                        <p className="mb-5 mt-2 text-sm text-zinc-500">Complete the form for instant access.</p>
                        {errors.form && <div role="alert" className="mb-4 border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">{errors.form}</div>}
                        <form onSubmit={submit} noValidate className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field label="Full Name" name="fullName" error={errors.fullName}><input id="fullName" autoComplete="name" maxLength={100} value={form.fullName} onChange={(e) => update('fullName', e.target.value)} className={inputClass} aria-invalid={!!errors.fullName}/></Field>
                                <Field label="Business Email" name="email" error={errors.email}><input id="email" type="email" autoComplete="email" maxLength={254} value={form.email} onChange={(e) => update('email', e.target.value)} className={inputClass} aria-invalid={!!errors.email}/></Field>
                                <Field label="Phone Number" name="phone" error={errors.phone}><input id="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={25} value={form.phone} onChange={(e) => update('phone', e.target.value)} className={inputClass} aria-invalid={!!errors.phone}/></Field>
                                <Field label="Company Name (optional)" name="companyName"><input id="companyName" autoComplete="organization" maxLength={120} value={form.companyName} onChange={(e) => update('companyName', e.target.value)} className={inputClass}/></Field>
                            </div>
                            <Field label="Project Stage" name="projectStage" error={errors.projectStage}><select id="projectStage" value={form.projectStage} onChange={(e) => update('projectStage', e.target.value)} className={inputClass} aria-invalid={!!errors.projectStage}><option value="">Select your stage</option>{PROJECT_STAGES.map((stage) => <option key={stage}>{stage}</option>)}</select></Field>
                            <div className="absolute -left-[9999px]" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => update('website', e.target.value)}/></div>
                            <div><label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-zinc-400"><input type="checkbox" checked={form.consent} onChange={(e) => update('consent', e.target.checked)} className="mt-1 accent-yellow-500" aria-invalid={!!errors.consent}/><span>I agree that Kiaan Technology may contact me regarding my SaaS project and related services.</span></label>{errors.consent && <p role="alert" className="mt-1 text-xs text-red-400">{errors.consent}</p>}</div>
                            <button disabled={status === 'submitting'} className="flex w-full items-center justify-center gap-2 bg-yellow-500 px-5 py-4 text-xs font-black uppercase tracking-[.18em] text-black transition hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 disabled:cursor-not-allowed disabled:opacity-60">{status === 'submitting' ? <><Loader2 className="animate-spin" size={16}/>Submitting…</> : <>Download Free Checklist <ArrowRight size={16}/></>}</button>
                        </form>
                    </>}
                </div>
            </section>
            <section className="grid gap-5 py-10 md:grid-cols-2">
                <Info title="What Is Included in the Checklist?" items={included}/><Info title="Who Is This Checklist For?" items={audience}/>
            </section>
            <InfoGrid title="How to Use the Checklist" items={[{title:'1. Assess',description:'Review each planning, architecture, security and launch-readiness item against your current product idea.'},{title:'2. Prioritise',description:'Turn missing decisions into a focused MVP and technical planning backlog.'},{title:'3. Execute',description:'Use the 30-60-90 day plan to sequence validation, design, development, testing and launch preparation.'}]} />
            <LeadMagnetFAQ items={SAAS_FAQS}/>
            <section className="border border-zinc-800 bg-zinc-950 p-6 md:flex md:items-center md:justify-between md:p-8"><div><h2 className="font-display text-3xl uppercase">Need Help Building Your <span className="text-yellow-500">SaaS?</span></h2><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">Kiaan Technology can help you plan, design, develop, test and launch a secure and scalable SaaS platform.</p></div><Link href="/contact" onClick={() => track('saas_consultation_cta_clicked')} className="mt-5 inline-flex shrink-0 items-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase text-black hover:bg-yellow-500 md:ml-6 md:mt-0">Book a Free SaaS Consultation <ArrowRight size={15}/></Link></section>
            <p className="mt-4 text-center text-xs text-zinc-500">Explore our <Link href="/services/saas-development" className="text-yellow-500 hover:underline">SaaS development services</Link> or discuss your product with our software team.</p>
            <RelatedResources current="saas_development_checklist" items={ALL_LEAD_MAGNETS}/>
        </main>
    </div>;
}

function Field({ label, name, error, children }: { label: string; name: string; error?: string; children: React.ReactNode }) { return <div><label htmlFor={name} className="mb-1.5 block text-[10px] font-black uppercase tracking-widest text-zinc-400">{label}</label>{children}{error && <p id={`${name}-error`} role="alert" className="mt-1 text-xs text-red-400">{error}</p>}</div>; }
function Info({ title, items }: { title: string; items: string[] }) { return <article className="border border-zinc-900 bg-zinc-950 p-6"><h2 className="font-display text-2xl uppercase text-white">{title}</h2><ul className="mt-5 grid gap-3 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex gap-2 text-sm text-zinc-400"><Check size={15} className="mt-0.5 shrink-0 text-yellow-500"/>{item}</li>)}</ul></article>; }
