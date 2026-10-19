export interface TimeTrackingProject {
    id: string;
    name: string;
    department: 'Engineering' | 'Design & UX' | 'Sales & Marketing' | 'Product Management';
    clientName: string;
    isClientBillableDefault: boolean;
    hourlyRateUSD: number;
}

export interface TimeEntry {
    entryId: string;
    userId: string;
    userName: string;
    projectId: string;
    projectName: string;
    department: string;
    description: string;
    tags: string[]; // e.g., ['#coding', '#meeting']
    isBillable: boolean;
    startTimeIST: string;
    endTimeIST?: string;
    rawDurationMinutes: number;
    roundedDurationMinutes: number; // Rounded to min 15-min increments
    hourlyRateUSD: number;
    totalAmountUSD: number;
    status: 'Running' | 'Completed' | 'Discarded Idle';
}

export interface WeeklyManagerReport {
    weekEndingDateIST: string;
    totalHoursLogged: number;
    totalBillableHours: number;
    totalNonBillableHours: number;
    billableUtilizationPercent: number;
    totalBillableAmountUSD: number;
    departmentBreakdown: Array<{
        department: string;
        loggedHours: number;
        billableHours: number;
        utilizationRate: number;
    }>;
}

export interface MonthlyClientBillingExport {
    billingMonth: string; // e.g., "July 2026"
    clientName: string;
    invoiceId: string;
    lineItems: Array<{
        projectName: string;
        taskDescription: string;
        roundedHours: number;
        hourlyRateUSD: number;
        lineTotalUSD: number;
    }>;
    totalInvoiceAmountUSD: number;
    exportFormat: 'CSV' | 'JSON';
}

export const departmentProjects: TimeTrackingProject[] = [
    { id: "proj-01", name: "Enterprise Custom AI Assistant", department: "Engineering", clientName: "HealthSakhi AI", isClientBillableDefault: true, hourlyRateUSD: 120 },
    { id: "proj-02", name: "PGX Payment Gateway Integration", department: "Engineering", clientName: "PGX Payments", isClientBillableDefault: true, hourlyRateUSD: 110 },
    { id: "proj-03", name: "Internal Devops & CI/CD Refactor", department: "Engineering", clientName: "Internal / Kiaan", isClientBillableDefault: false, hourlyRateUSD: 0 },
    { id: "proj-04", name: "StudyFirst CRM Wireframes & UI", department: "Design & UX", clientName: "StudyFirst CRM", isClientBillableDefault: true, hourlyRateUSD: 95 },
    { id: "proj-05", name: "Q3 Niche Newsletter Campaign", department: "Sales & Marketing", clientName: "Internal / Marketing", isClientBillableDefault: false, hourlyRateUSD: 0 },
    { id: "proj-06", name: "State of AI 2026 Architecture", department: "Product Management", clientName: "Enterprise Research", isClientBillableDefault: true, hourlyRateUSD: 130 }
];

export const availableTags = [
    "#coding",
    "#meeting",
    "#architecture",
    "#code-review",
    "#debugging",
    "#client-call",
    "#planning",
    "#testing"
];

// Helper: Round raw minutes up to nearest 15-minute increment (min 15 mins)
export function roundToNearest15Min(rawMinutes: number): number {
    if (rawMinutes <= 0) return 15;
    return Math.ceil(rawMinutes / 15) * 15;
}

// Auto Tag Billable Status based on project type and tag category
export function autoTagBillableStatus(project: TimeTrackingProject, tags: string[]): boolean {
    // Internal projects or pure admin tags are non-billable
    if (!project.isClientBillableDefault) return false;
    if (tags.includes('#admin') || tags.includes('#internal-sync')) return false;
    return true;
}

// Detect Idle User Warning (after 5 minutes of no activity)
export function checkIdleWarning(idleMinutes: number): { isIdleAlertTriggered: boolean; message: string } {
    const isIdle = idleMinutes >= 5;
    return {
        isIdleAlertTriggered: isIdle,
        message: isIdle
            ? `⚠️ Idle Alert: You have been inactive for ${idleMinutes} mins. Timer paused automatically.`
            : `Active recording in progress.`
    };
}

// Evaluate 11:00 AM IST Slack Timer Reminder
export function evaluate11AmSlackReminder(
    currentTimeIST: Date,
    hasActiveTimerRunning: boolean,
    hasLoggedEntriesToday: boolean
): { shouldSendSlackPing: boolean; slackMessage?: string } {
    const hours = currentTimeIST.getHours();
    const minutes = currentTimeIST.getMinutes();
    
    // Trigger window at 11:00 AM IST
    const is11AmWindow = (hours === 11 && minutes < 10);

    if (is11AmWindow && !hasActiveTimerRunning && !hasLoggedEntriesToday) {
        return {
            shouldSendSlackPing: true,
            slackMessage: `⏰ *Daily Reminder (11:00 AM IST)*: Please start your timer in Toggl/Clockify for today's Core Hours!`
        };
    }

    return { shouldSendSlackPing: false };
}

// Process and Normalize Time Entry
export function processTimeEntry(
    userId: string,
    userName: string,
    project: TimeTrackingProject,
    description: string,
    tags: string[],
    rawDurationMinutes: number,
    startTimeIST: Date
): TimeEntry {
    const roundedMinutes = roundToNearest15Min(rawDurationMinutes);
    const isBillable = autoTagBillableStatus(project, tags);
    const hourlyRate = isBillable ? project.hourlyRateUSD : 0;
    const roundedHours = roundedMinutes / 60;
    const totalAmount = roundedHours * hourlyRate;

    return {
        entryId: `te-${Date.now()}`,
        userId,
        userName,
        projectId: project.id,
        projectName: project.name,
        department: project.department,
        description,
        tags,
        isBillable,
        startTimeIST: startTimeIST.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }),
        rawDurationMinutes,
        roundedDurationMinutes: roundedMinutes,
        hourlyRateUSD: hourlyRate,
        totalAmountUSD: totalAmount,
        status: 'Completed'
    };
}

// Generate Weekly Manager Report
export function generateWeeklyManagerReport(entries: TimeEntry[], weekEndingDateIST: string): WeeklyManagerReport {
    let totalHoursLogged = 0;
    let totalBillableHours = 0;
    let totalNonBillableHours = 0;
    let totalBillableAmountUSD = 0;

    const deptMap: Record<string, { logged: number; billable: number }> = {
        'Engineering': { logged: 0, billable: 0 },
        'Design & UX': { logged: 0, billable: 0 },
        'Sales & Marketing': { logged: 0, billable: 0 },
        'Product Management': { logged: 0, billable: 0 }
    };

    entries.forEach(entry => {
        const hours = entry.roundedDurationMinutes / 60;
        totalHoursLogged += hours;
        if (entry.isBillable) {
            totalBillableHours += hours;
            totalBillableAmountUSD += entry.totalAmountUSD;
        } else {
            totalNonBillableHours += hours;
        }

        if (deptMap[entry.department]) {
            deptMap[entry.department].logged += hours;
            if (entry.isBillable) {
                deptMap[entry.department].billable += hours;
            }
        }
    });

    const billableUtilizationPercent = totalHoursLogged > 0 ? (totalBillableHours / totalHoursLogged) * 100 : 0;

    const departmentBreakdown = Object.keys(deptMap).map(dept => {
        const logged = deptMap[dept].logged;
        const billable = deptMap[dept].billable;
        return {
            department: dept,
            loggedHours: logged,
            billableHours: billable,
            utilizationRate: logged > 0 ? (billable / logged) * 100 : 0
        };
    });

    return {
        weekEndingDateIST,
        totalHoursLogged,
        totalBillableHours,
        totalNonBillableHours,
        billableUtilizationPercent: Math.round(billableUtilizationPercent * 10) / 10,
        totalBillableAmountUSD,
        departmentBreakdown
    };
}

// Generate Monthly Client Billing Export
export function generateMonthlyClientBillingExport(
    clientName: string,
    billingMonth: string,
    entries: TimeEntry[]
): MonthlyClientBillingExport {
    const clientEntries = entries.filter(e => e.isBillable);

    const lineItems = clientEntries.map(e => ({
        projectName: e.projectName,
        taskDescription: e.description,
        roundedHours: e.roundedDurationMinutes / 60,
        hourlyRateUSD: e.hourlyRateUSD,
        lineTotalUSD: e.totalAmountUSD
    }));

    const totalInvoiceAmountUSD = lineItems.reduce((acc, curr) => acc + curr.lineTotalUSD, 0);

    return {
        billingMonth,
        clientName,
        invoiceId: `INV-${clientName.substring(0, 3).toUpperCase()}-${billingMonth.replace(" ", "-").toUpperCase()}`,
        lineItems,
        totalInvoiceAmountUSD,
        exportFormat: 'CSV'
    };
}
