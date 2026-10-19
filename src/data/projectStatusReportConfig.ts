export type RAGStatus = 'GREEN' | 'AMBER' | 'RED';

export interface MilestoneRAG {
    milestoneId: string;
    title: string;
    dueDateIST: string;
    completionPercentage: number;
    ragStatus: RAGStatus;
    statusSummary: string;
}

export interface BudgetVsActualHours {
    projectId: string;
    projectName: string;
    clientName: string;
    budgetedHours: number;
    actualHoursLogged: number; // Auto pulled from Toggl/Clockify
    varianceHours: number;
    budgetUtilizedPercent: number;
    isOverBudget: boolean;
}

export interface JiraGitHubBugMetrics {
    openBugsCritical: number;
    openBugsHigh: number;
    openBugsMediumLow: number;
    totalOpenBugs: number;
    bugsResolvedThisWeek: number;
    meanTimeToResolutionHours: number;
}

export interface ProjectRisk {
    riskId: string;
    description: string;
    severity: 'High' | 'Medium' | 'Low';
    mitigationStrategy: string;
    owner: string;
}

export interface WeeklyStatusReport {
    reportId: string;
    clientName: string;
    projectName: string;
    reportDateIST: string;
    overallRAG: RAGStatus;
    milestones: MilestoneRAG[];
    hoursTracking: BudgetVsActualHours;
    bugMetrics: JiraGitHubBugMetrics;
    activeRisks: ProjectRisk[];
    nextWeekPriorities: string[];
    internalNotesPrivate?: string; // Private internal comments (removed in client-safe view)
}

export interface ClientSafeStatusReport {
    reportTitle: string;
    clientName: string;
    reportDateIST: string;
    overallHealthBadge: RAGStatus;
    milestonesSummary: MilestoneRAG[];
    hoursLoggedSummary: {
        budgetedHours: number;
        actualHoursLogged: number;
        completionProgressPercent: number;
    };
    qualityAndBugsSummary: {
        totalOpenIssues: number;
        resolvedThisWeek: number;
        qualityRating: string;
    };
    keyRisksAndMitigations: Array<{
        description: string;
        actionPlan: string;
    }>;
    upcomingDeliverables: string[];
}

export const sampleProjectsStatusData: WeeklyStatusReport[] = [
    {
        reportId: "rep-2026-w30-hs",
        clientName: "HealthSakhi AI",
        projectName: "HealthSakhi AI Telemedicine Platform",
        reportDateIST: "2026-07-31 (Friday 5:00 PM IST)",
        overallRAG: "GREEN",
        milestones: [
            {
                milestoneId: "m1",
                title: "HIPAA Compliant Data Pipeline & Encrypted Storage",
                dueDateIST: "2026-08-05",
                completionPercentage: 95,
                ragStatus: "GREEN",
                statusSummary: "Finalizing security audit logs and encryption verification."
            },
            {
                milestoneId: "m2",
                title: "AI Voice Bot Symptom Checker Integration",
                dueDateIST: "2026-08-15",
                completionPercentage: 70,
                ragStatus: "GREEN",
                statusSummary: "LLM fine-tuning complete; testing response latency."
            },
            {
                milestoneId: "m3",
                title: "WebRTC Video Consultation Module",
                dueDateIST: "2026-08-25",
                completionPercentage: 40,
                ragStatus: "AMBER",
                statusSummary: "Minor latency issue on 3G network simulation being optimized."
            }
        ],
        hoursTracking: {
            projectId: "proj-01",
            projectName: "HealthSakhi AI Telemedicine",
            clientName: "HealthSakhi AI",
            budgetedHours: 400,
            actualHoursLogged: 285,
            varianceHours: 115,
            budgetUtilizedPercent: 71.25,
            isOverBudget: false
        },
        bugMetrics: {
            openBugsCritical: 0,
            openBugsHigh: 2,
            openBugsMediumLow: 5,
            totalOpenBugs: 7,
            bugsResolvedThisWeek: 14,
            meanTimeToResolutionHours: 4.2
        },
        activeRisks: [
            {
                riskId: "r1",
                description: "Third-party SMS Gateway API rate limits during peak usage",
                severity: "Medium",
                mitigationStrategy: "Implemented dual-provider fallback (Twilio + AWS SNS)",
                owner: "DevOps Team"
            }
        ],
        nextWeekPriorities: [
            "Complete WebRTC fallback server configuration",
            "Conduct load testing with 5,000 concurrent patient sessions",
            "Deliver Staging build for client UAT sign-off"
        ],
        internalNotesPrivate: "INTERNAL ONLY: Team margins on track at 42%. Developer overtime was approved for WebRTC optimization."
    }
];

// Friday 5:00 PM IST Delivery Scheduler Check
export function checkFriday5PmDeliveryWindow(currentTimeIST: Date): { shouldAutoSend: boolean; deliveryChannel: string } {
    const day = currentTimeIST.getDay(); // 5 = Friday
    const hours = currentTimeIST.getHours();
    const minutes = currentTimeIST.getMinutes();

    const isFriday5Pm = (day === 5 && hours === 17 && minutes < 15);

    return {
        shouldAutoSend: isFriday5Pm,
        deliveryChannel: isFriday5Pm
            ? "Slack (#project-updates), Email Digest & Client Executive Portal"
            : "Standby until Friday 5:00 PM IST"
    };
}

// Generate Client-Safe View (Strips internal dev notes & internal cost margins)
export function generateClientSafeReport(report: WeeklyStatusReport): ClientSafeStatusReport {
    return {
        reportTitle: `Weekly Executive Status Report - ${report.projectName}`,
        clientName: report.clientName,
        reportDateIST: report.reportDateIST,
        overallHealthBadge: report.overallRAG,
        milestonesSummary: report.milestones,
        hoursLoggedSummary: {
            budgetedHours: report.hoursTracking.budgetedHours,
            actualHoursLogged: report.hoursTracking.actualHoursLogged,
            completionProgressPercent: Math.round((report.hoursTracking.actualHoursLogged / report.hoursTracking.budgetedHours) * 100)
        },
        qualityAndBugsSummary: {
            totalOpenIssues: report.bugMetrics.totalOpenBugs,
            resolvedThisWeek: report.bugMetrics.bugsResolvedThisWeek,
            qualityRating: report.bugMetrics.openBugsCritical === 0 ? "Excellent (0 Critical Blockers)" : "Attention Needed"
        },
        keyRisksAndMitigations: report.activeRisks.map(r => ({
            description: r.description,
            actionPlan: r.mitigationStrategy
        })),
        upcomingDeliverables: report.nextWeekPriorities
    };
}
