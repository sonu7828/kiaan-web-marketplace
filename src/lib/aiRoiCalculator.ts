export const CURRENCIES = { USD: '$', INR: '₹', AED: 'د.إ', GBP: '£', EUR: '€' } as const;
export type Currency = keyof typeof CURRENCIES;

export interface ROIInputs {
    employees: number; weeklyHours: number; hourlyCost: number; workingWeeks: number;
    automationPercentage: number; productivityImprovement: number; monthlyErrorCost: number;
    errorReductionPercentage: number; implementationCost: number; monthlyRecurringCost: number;
}
export interface ROIResults {
    annualManualHours: number; currentAnnualLabourCost: number; directAnnualAutomatedHours: number;
    productivityHoursGained: number; annualHoursSaved: number; annualLabourSavings: number;
    annualErrorSavings: number; annualGrossSavings: number; annualRecurringAICost: number;
    firstYearTotalInvestment: number; firstYearNetBenefit: number; firstYearROI: number | null;
    monthlyGrossSavings: number; monthlyNetOngoingSavings: number; paybackMonths: number | null;
    threeYearNetValue: number;
}

export const DEFAULT_ROI_INPUTS: ROIInputs = { employees: 5, weeklyHours: 10, hourlyCost: 25, workingWeeks: 48, automationPercentage: 60, productivityImprovement: 20, monthlyErrorCost: 500, errorReductionPercentage: 50, implementationCost: 10000, monthlyRecurringCost: 500 };

export function calculateAIROI(i: ROIInputs): ROIResults {
    const annualManualHours = i.employees * i.weeklyHours * i.workingWeeks;
    const currentAnnualLabourCost = annualManualHours * i.hourlyCost;
    const directAnnualAutomatedHours = annualManualHours * (i.automationPercentage / 100);
    const remainingManualHours = annualManualHours - directAnnualAutomatedHours;
    const productivityHoursGained = remainingManualHours * (i.productivityImprovement / 100);
    const annualHoursSaved = Math.min(annualManualHours, directAnnualAutomatedHours + productivityHoursGained);
    const annualLabourSavings = annualHoursSaved * i.hourlyCost;
    const annualErrorSavings = i.monthlyErrorCost * 12 * (i.errorReductionPercentage / 100);
    const annualGrossSavings = annualLabourSavings + annualErrorSavings;
    const annualRecurringAICost = i.monthlyRecurringCost * 12;
    const firstYearTotalInvestment = i.implementationCost + annualRecurringAICost;
    const firstYearNetBenefit = annualGrossSavings - firstYearTotalInvestment;
    const firstYearROI = firstYearTotalInvestment > 0 ? (firstYearNetBenefit / firstYearTotalInvestment) * 100 : null;
    const monthlyGrossSavings = annualGrossSavings / 12;
    const monthlyNetOngoingSavings = monthlyGrossSavings - i.monthlyRecurringCost;
    const paybackMonths = i.implementationCost === 0 ? 0 : monthlyNetOngoingSavings > 0 ? i.implementationCost / monthlyNetOngoingSavings : null;
    const threeYearNetValue = annualGrossSavings * 3 - i.implementationCost - annualRecurringAICost * 3;
    return { annualManualHours, currentAnnualLabourCost, directAnnualAutomatedHours, productivityHoursGained, annualHoursSaved, annualLabourSavings, annualErrorSavings, annualGrossSavings, annualRecurringAICost, firstYearTotalInvestment, firstYearNetBenefit, firstYearROI, monthlyGrossSavings, monthlyNetOngoingSavings, paybackMonths, threeYearNetValue };
}

export function getROIInterpretation(r: ROIResults) {
    if (r.monthlyNetOngoingSavings <= 0) return 'Under the current assumptions, ongoing savings do not exceed recurring AI costs.';
    if ((r.firstYearROI ?? -1) >= 100) return 'Your current inputs indicate a strong automation opportunity. The projected savings may recover the implementation investment relatively quickly.';
    if ((r.firstYearROI ?? -1) >= 0) return 'Your inputs indicate potential value, but process selection, implementation scope and recurring costs should be reviewed carefully.';
    return 'The selected assumptions do not currently produce a positive first-year return. Consider starting with a smaller, high-volume process or reviewing implementation and recurring costs.';
}
