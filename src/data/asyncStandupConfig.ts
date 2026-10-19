export interface StandupQuestion {
    id: number;
    questionText: string;
    placeholderText: string;
    required: boolean;
}

export interface StandupSchedule {
    cronExpression: string; // e.g. "0 10 * * 1-5" (10:00 AM IST Mon-Fri)
    timeZone: string; // "Asia/Kolkata (IST)"
    daysActive: string[];
    triggerTimeIST: string;
    skipHolidays: boolean;
    holidayList: string[]; // YYYY-MM-DD format
}

export interface StandupUserResponse {
    userId: string;
    userName: string;
    userRole: string;
    team: 'Frontend' | 'Backend' | 'DevOps' | 'AI & Data' | 'QA & Testing' | 'Design';
    submittedAt: string;
    yesterdayAccomplishments: string;
    todayFocus: string;
    blockers: string;
    isBlocked: boolean;
    taggedManager?: string;
    slackFormattedPost: string;
}

export interface StandupBotConfig {
    botName: string;
    slackChannel: string; // "#daily-standups"
    webhookUrl: string;
    managerTagIfBlocked: string; // "@engineering-manager"
    blockedKeywords: string[];
    schedule: StandupSchedule;
    questions: StandupQuestion[];
}

export const asyncStandupConfig: StandupBotConfig = {
    botName: "Geekbot / Kiaan Async Standup Bot",
    slackChannel: "#daily-standups",
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    managerTagIfBlocked: "@engineering-manager",
    blockedKeywords: ["blocked", "stuck", "issue", "help", "delay", "waiting for", "error", "unable", "dependency"],

    schedule: {
        cronExpression: "0 10 * * 1-5",
        timeZone: "Asia/Kolkata (IST)",
        daysActive: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        triggerTimeIST: "10:00 AM IST",
        skipHolidays: true,
        holidayList: [
            "2026-01-26", // Republic Day
            "2026-03-04", // Holi
            "2026-08-15", // Independence Day
            "2026-10-02", // Gandhi Jayanti
            "2026-11-08", // Diwali
            "2026-12-25"  // Christmas
        ]
    },

    questions: [
        {
            id: 1,
            questionText: "What did you accomplish yesterday?",
            placeholderText: "Brief bullet points of completed tickets or commits...",
            required: true
        },
        {
            id: 2,
            questionText: "What will you focus on today?",
            placeholderText: "Today's primary goals and PR submissions...",
            required: true
        },
        {
            id: 3,
            questionText: "Are there any blockers or obstacles in your way?",
            placeholderText: "Type 'None' or describe any issue blocking progress...",
            required: true
        }
    ]
};

// Helper function to detect if user response contains a blocker keyword
export function processStandupResponse(
    userId: string,
    userName: string,
    userRole: string,
    team: 'Frontend' | 'Backend' | 'DevOps' | 'AI & Data' | 'QA & Testing' | 'Design',
    yesterday: string,
    today: string,
    blockerText: string
): StandupUserResponse {
    const isBlocked = asyncStandupConfig.blockedKeywords.some(keyword =>
        blockerText.toLowerCase().includes(keyword)
    ) && blockerText.toLowerCase() !== "none" && blockerText.toLowerCase() !== "no blockers";

    const taggedManager = isBlocked ? asyncStandupConfig.managerTagIfBlocked : undefined;

    const slackFormattedPost = `
*Daily Standup — ${userName}* (${userRole} • _${team}_)
*1. Yesterday:* ${yesterday}
*2. Today:* ${today}
*3. Blockers:* ${isBlocked ? `⚠️ *BLOCKED:* ${blockerText} cc: ${taggedManager}` : `✅ ${blockerText}`}
`.trim();

    return {
        userId,
        userName,
        userRole,
        team,
        submittedAt: new Date().toISOString(),
        yesterdayAccomplishments: yesterday,
        todayFocus: today,
        blockers: blockerText,
        isBlocked,
        taggedManager,
        slackFormattedPost
    };
}

// Generate 50+ Test Users Standup Responses Simulator
export function generate50UserTestResults(): StandupUserResponse[] {
    const teams: Array<'Frontend' | 'Backend' | 'DevOps' | 'AI & Data' | 'QA & Testing' | 'Design'> = [
        'Frontend', 'Backend', 'DevOps', 'AI & Data', 'QA & Testing', 'Design'
    ];

    const sampleUserNames = [
        "Aarav Sharma", "Priya Patel", "Rohan Gupta", "Neha Singh", "Vikram Verma",
        "Ananya Rao", "Siddharth Joshi", "Kavya Nair", "Aditya Kapoor", "Pooja Mehta",
        "Rahul Saxena", "Sneha Iyer", "Devansh Malhotra", "Riya Sen", "Karan Ahuja",
        "Ishita Banerjee", "Manish Choudhury", "Tanvi Kulkarni", "Amitabh Roy", "Shweta Deshmukh",
        "Nikhil Bhat", "Meera Agarwal", "Harshvardhan Rana", "Divya Menon", "Yash Singhal",
        "Bhavna Reddy", "Chirag Trivedi", "Garima Pandey", "Varun Bhatia", "Simran Gill",
        "Abhinav Jain", "Tara Kashyap", "Gaurav Shrivastav", "Nisha Bose", "Kunal D'Souza",
        "Shruti Nambiar", "Mayank Thapar", "Richa Sethi", "Deepak Pillai", "Sonali Kulkarni",
        "Ayush Rastogi", "Radhika Merchant", "Tarun Bajaj", "Swati Mahajan", "Tushar Merchant",
        "Preeti Sundaram", "Uday Chopra", "Vandana Shekhawat", "Wasim Akram", "Zoya Akhtar"
    ];

    return sampleUserNames.map((name, index) => {
        const team = teams[index % teams.length];
        const isBlockedUser = index % 7 === 0; // Simulate 1 in 7 users having a blocker

        const yesterday = `Completed ticket TECH-${100 + index} for ${team} microservice pipeline.`;
        const today = `Working on PR review for module TECH-${200 + index} and API tests.`;
        const blockerText = isBlockedUser
            ? `Stuck on AWS IAM permission error in staging environment. Need access to KMS keys.`
            : `None. Everything is on schedule.`;

        return processStandupResponse(
            `USR-${1000 + index}`,
            name,
            `${team} Engineer`,
            team,
            yesterday,
            today,
            blockerText
        );
    });
}
