import type { Metadata } from 'next';
import { SaasChecklistPage } from './SaasChecklistPage';
import { SAAS_FAQS } from '@/components/lead-magnets/LeadMagnetSections';
import { leadMagnetSchema } from '@/lib/leadMagnetSchema';

export const metadata: Metadata = {
    title: 'Free SaaS Development Checklist | Kiaan Technology',
    description: 'Download Kiaan Technology’s free SaaS Development Checklist covering idea validation, MVP planning, multi-tenant architecture, security, billing, testing, deployment and launch readiness.',
    alternates: { canonical: '/resources/saas-development-checklist/' },
    openGraph:{title:'Free SaaS Development Checklist | Kiaan Technology',description:'Plan your SaaS idea, MVP, architecture, security, billing and launch readiness.',url:'/resources/saas-development-checklist/',siteName:'Kiaan Technology',type:'article'},
    twitter:{card:'summary_large_image',title:'Free SaaS Development Checklist',description:'A practical SaaS planning and launch-readiness checklist.'}
};

export default function Page() {
    const schema=leadMagnetSchema({path:'/resources/saas-development-checklist/',name:'SaaS Development Checklist',description:metadata.description as string,faqs:SAAS_FAQS,type:'DigitalDocument'});
    return <><script type="application/ld+json"dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><SaasChecklistPage /></>;
}
