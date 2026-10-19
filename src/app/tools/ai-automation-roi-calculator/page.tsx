import type { Metadata } from 'next';
import { AIAutomationROICalculator } from '@/components/tools/AIAutomationROICalculator';
import { AI_FAQS } from '@/components/lead-magnets/LeadMagnetSections';import{leadMagnetSchema}from'@/lib/leadMagnetSchema';
export const metadata: Metadata = {
    title:'AI Automation ROI Calculator | Calculate Business Savings',
    description:'Use Kiaan Technology’s free AI Automation ROI Calculator to estimate hours saved, monthly cost reduction, annual savings, payback period and potential return on AI automation investment.',
    alternates:{canonical:'/tools/ai-automation-roi-calculator/'},
    openGraph:{title:'AI Automation ROI Calculator | Calculate Business Savings',description:'Estimate the time, operating cost and annual savings your business could achieve through AI automation.',url:'/tools/ai-automation-roi-calculator/',siteName:'Kiaan Technology',type:'website'},
    twitter:{card:'summary_large_image',title:'AI Automation ROI Calculator',description:'Calculate the potential ROI of AI automation for your business.'}
};
export default function Page(){const schema=leadMagnetSchema({path:'/tools/ai-automation-roi-calculator/',name:'AI Automation ROI Calculator',description:metadata.description as string,faqs:AI_FAQS,type:'WebApplication'});return <><script type="application/ld+json"dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><AIAutomationROICalculator/></>;}
