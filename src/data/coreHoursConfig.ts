export interface CoreHoursUserPresence {
    userId: string;
    userName: string;
    userEmail: string;
    managerSlackId: string;
    isApprovedOOO: boolean;
    oooReason?: string;
    lastHeartbeatIST: string; // ISO string in IST
    minutesOfflineInCoreHours: number;
    slackStatus: string;
    slackStatusEmoji: string;
    attendanceLogStatus: 'Present & Compliant' | 'Offline Alert Sent' | 'Approved OOO' | 'National Holiday';
}

export interface CalendarMeetingRequest {
    meetingId: string;
    title: string;
    organizerEmail: string;
    scheduledTimeIST: string;
    durationMinutes: number;
    isInsideCoreHours: boolean;
    isUrgentOverride: boolean;
    actionTaken: 'Accepted' | 'Declined - Outside Core Hours (10 AM - 2 PM IST)';
}

export const coreHoursConfig = {
    timeZone: "Asia/Kolkata (IST)",
    coreHoursStartIST: "10:00:00",
    coreHoursEndIST: "14:00:00",
    maxOfflineToleranceMinutes: 15,
    autoSlackStatusCoreHours: {
        text: "In Core Hours (10 AM - 2 PM IST)",
        emoji: ":green_circle:"
    },
    autoSlackStatusDeepWork: {
        text: "Async Deep Work / Focus Time",
        emoji: ":keyboard:"
    },
    autoSlackStatusOOO: {
        text: "On Approved Leave / OOO",
        emoji: ":palm_tree:"
    },
    nationalHolidaysIST: [
        "2026-01-26", // Republic Day
        "2026-03-04", // Holi
        "2026-08-15", // Independence Day
        "2026-10-02", // Gandhi Jayanti
        "2026-11-08", // Diwali
        "2026-12-25"  // Christmas
    ]
};

// Helper: Check if a given IST date string falls within Core Hours (10 AM - 2 PM IST)
export function isWithinCoreHours(dateIST: Date): boolean {
    const hours = dateIST.getHours();
    const minutes = dateIST.getMinutes();
    const currentMinutes = hours * 60 + minutes;
    const startMinutes = 10 * 60; // 10:00 AM
    const endMinutes = 14 * 60;   // 02:00 PM

    const day = dateIST.getDay();
    const isWeekend = (day === 0 || day === 6);

    return !isWeekend && currentMinutes >= startMinutes && currentMinutes < endMinutes;
}

// Evaluate Calendar Meeting Invites (Blocks meetings outside 10 AM - 2 PM IST)
export function evaluateCalendarMeeting(
    meetingId: string,
    title: string,
    organizerEmail: string,
    scheduledTimeIST: Date,
    durationMinutes: number,
    isUrgentOverride: boolean = false
): CalendarMeetingRequest {
    const insideCore = isWithinCoreHours(scheduledTimeIST);
    const accept = insideCore || isUrgentOverride;

    return {
        meetingId,
        title,
        organizerEmail,
        scheduledTimeIST: scheduledTimeIST.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }),
        durationMinutes,
        isInsideCoreHours: insideCore,
        isUrgentOverride,
        actionTaken: accept ? 'Accepted' : 'Declined - Outside Core Hours (10 AM - 2 PM IST)'
    };
}

// Evaluate User Online Presence & Alert Manager if Offline >15 min
export function evaluatePresenceAndAlerts(
    user: CoreHoursUserPresence,
    currentTimeIST: Date
): CoreHoursUserPresence {
    const dateStr = currentTimeIST.toISOString().split('T')[0];
    const isHoliday = coreHoursConfig.nationalHolidaysIST.includes(dateStr);

    if (isHoliday) {
        return {
            ...user,
            slackStatus: "National Holiday",
            slackStatusEmoji: ":flag-in:",
            attendanceLogStatus: "National Holiday"
        };
    }

    if (user.isApprovedOOO) {
        return {
            ...user,
            slackStatus: coreHoursConfig.autoSlackStatusOOO.text,
            slackStatusEmoji: coreHoursConfig.autoSlackStatusOOO.emoji,
            attendanceLogStatus: "Approved OOO"
        };
    }

    const inCore = isWithinCoreHours(currentTimeIST);

    if (inCore) {
        if (user.minutesOfflineInCoreHours > coreHoursConfig.maxOfflineToleranceMinutes) {
            return {
                ...user,
                slackStatus: "Offline / Away",
                slackStatusEmoji: ":warning:",
                attendanceLogStatus: "Offline Alert Sent"
            };
        } else {
            return {
                ...user,
                slackStatus: coreHoursConfig.autoSlackStatusCoreHours.text,
                slackStatusEmoji: coreHoursConfig.autoSlackStatusCoreHours.emoji,
                attendanceLogStatus: "Present & Compliant"
            };
        }
    } else {
        return {
            ...user,
            slackStatus: coreHoursConfig.autoSlackStatusDeepWork.text,
            slackStatusEmoji: coreHoursConfig.autoSlackStatusDeepWork.emoji,
            attendanceLogStatus: "Present & Compliant"
        };
    }
}
