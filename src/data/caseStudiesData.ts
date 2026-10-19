import caseStudiesJson from './caseStudies.json';

export interface CaseStudy {
    slug: string;
    title: string;
    client: string;
    category: string;
    type: string;
    result: string;
    desc: string;
    image: string;
    imageAlt?: string;
    stats: string;
    challenge: string;
    blueprint: string;
    execution: string;
    impactMetrics: { label: string; value: string; }[];
    architectureImage?: string;
    screenshots?: string[];
    technologies: string[];
    authorName?: string;
    authorDesignation?: string;
}

export const caseStudiesData: CaseStudy[] = caseStudiesJson as CaseStudy[];
