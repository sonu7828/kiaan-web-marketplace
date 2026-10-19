import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

export function SaasChecklistCTA({ compact = false }: { compact?: boolean }) {
    return <section className={compact ? 'mb-8' : 'container relative z-10 mx-auto mb-6 px-6'}>
        <div className="border border-yellow-500/30 bg-zinc-950 p-5 md:flex md:items-center md:justify-between md:p-7">
            <div className="flex items-start gap-4">
                <div className="hidden border border-yellow-500/30 bg-yellow-500/10 p-3 text-yellow-500 sm:block"><Download size={22}/></div>
                <div><p className="text-[10px] font-black uppercase tracking-[.25em] text-yellow-500">Free SaaS Resource</p><h2 className="mt-1 font-display text-2xl uppercase text-white">Free SaaS Development Checklist</h2><p className="mt-1 text-sm text-zinc-400">Planning a SaaS product? Download our practical checklist before starting development.</p></div>
            </div>
            <Link href="/resources/saas-development-checklist" className="mt-5 inline-flex shrink-0 items-center gap-2 bg-yellow-500 px-5 py-3 text-xs font-black uppercase text-black hover:bg-yellow-400 md:ml-6 md:mt-0">Download Free Checklist <ArrowRight size={15}/></Link>
        </div>
    </section>;
}
