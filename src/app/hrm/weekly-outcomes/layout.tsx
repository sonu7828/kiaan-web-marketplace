import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Weekly Outcomes & OKR Planner | HRMS Solutions — Kiaan Technology',
    description: 'Track and manage weekly OKRs, SMART outcomes, and team completion metrics. Streamline employee performance monitoring, self-assessments, and manager reviews.',
    keywords: 'weekly outcomes tracker, OKR template dashboard, HRMS OKR tool, SMART outcomes performance, team completion calculator',
    alternates: {
        canonical: 'https://kiaantechnology.com/hrm/weekly-outcomes',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
