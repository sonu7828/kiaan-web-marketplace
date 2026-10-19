export interface BranchProtectionPolicy {
    branchName: string;
    requiredApprovals: number;
    requireSeniorApproval: boolean;
    requirePassCI: boolean;
    requireUpToDateBranch: boolean;
    blockAdminBypass: boolean;
    allowForcePushes: boolean;
    allowDeletions: boolean;
    maxPRLineLimit: number;
}

export interface PRReviewValidationResult {
    prNumber: number;
    title: string;
    author: string;
    totalLinesChanged: number;
    approvalCount: number;
    seniorApproved: boolean;
    ciStatus: 'Passed' | 'Failed' | 'Pending';
    isUpToDateWithTarget: boolean;
    canMerge: boolean;
    rejectionReasons: string[];
}

export const defaultMainBranchProtection: BranchProtectionPolicy = {
    branchName: "main",
    requiredApprovals: 2,
    requireSeniorApproval: true,
    requirePassCI: true,
    requireUpToDateBranch: true,
    blockAdminBypass: true,
    allowForcePushes: false,
    allowDeletions: false,
    maxPRLineLimit: 400
};

// Validate PR against Branch Protection & Line Limit Policy
export function validatePullRequestPolicy(
    prNumber: number,
    title: string,
    author: string,
    linesAdded: number,
    linesDeleted: number,
    approvals: Array<{ reviewer: string; isSeniorEngineer: boolean }>,
    ciStatus: 'Passed' | 'Failed' | 'Pending',
    isUpToDateWithTarget: boolean,
    policy: BranchProtectionPolicy = defaultMainBranchProtection
): PRReviewValidationResult {
    const totalLinesChanged = linesAdded + linesDeleted;
    const rejectionReasons: string[] = [];

    // 1. Max 400 lines per PR guard
    if (totalLinesChanged > policy.maxPRLineLimit) {
        rejectionReasons.push(`PR size exceeds ${policy.maxPRLineLimit} lines limit (Current: ${totalLinesChanged} lines). Please split into smaller PRs.`);
    }

    // 2. Minimum approvals count check
    if (approvals.length < policy.requiredApprovals) {
        rejectionReasons.push(`Requires at least ${policy.requiredApprovals} approvals (Current: ${approvals.length}).`);
    }

    // 3. Senior Engineer approval check
    const hasSeniorApproval = approvals.some(a => a.isSeniorEngineer);
    if (policy.requireSeniorApproval && !hasSeniorApproval) {
        rejectionReasons.push(`Requires approval from at least 1 Senior Engineer / CODEOWNER.`);
    }

    // 4. CI/CD Pass check
    if (policy.requirePassCI && ciStatus !== 'Passed') {
        rejectionReasons.push(`CI build & test pipeline must pass before merging (Current CI: ${ciStatus}).`);
    }

    // 5. Up-to-date branch check
    if (policy.requireUpToDateBranch && !isUpToDateWithTarget) {
        rejectionReasons.push(`Branch is out of date with ${policy.branchName}. Please rebase or merge target branch.`);
    }

    const canMerge = rejectionReasons.length === 0;

    return {
        prNumber,
        title,
        author,
        totalLinesChanged,
        approvalCount: approvals.length,
        seniorApproved: hasSeniorApproval,
        ciStatus,
        isUpToDateWithTarget,
        canMerge,
        rejectionReasons
    };
}
