/**
 * Unified Analytics Utility for Google Analytics 4 (GA4) and Google Tag Manager (GTM)
 * Kiaan Technology Enterprise Automation
 */

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

/**
 * Dispatches a custom GA4 event tracking payload
 * @param action Event name (e.g. 'click', 'form_submit')
 * @param category Category grouping label (e.g. 'Lead Generation')
 * @param label Details label describing event specificity
 * @param value Optional numerical tracking amount (e.g. contract size)
 */
export const trackGAEvent = (
    action: string, 
    category: string, 
    label: string, 
    value?: number
) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
            send_to: 'G-Y9H9T9S8PN' // Explicit target to avoid mapping conflicts
        });
        console.log(`[GA4 Event] Dispatched: ${action} - Cat: ${category} - Lbl: ${label} - Val: ${value || 'none'}`);
    } else {
        console.warn('[GA4 Event] Skipping - window.gtag script not instantiated on page context.');
    }
};

/**
 * Appends a custom payload transaction onto the GTM dataLayer stack
 * @param event Custom GTM trigger event name (matches triggers configured in container GTM)
 * @param data Optional parameters mapping variables
 */
export const trackGTMEvent = (
    event: string, 
    data: Record<string, any> = {}
) => {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event,
            ...data
        });
        console.log(`[GTM Event] Pushed onto dataLayer: ${event} - Payload:`, data);
    } else {
        console.warn('[GTM Event] Skipping - dataLayer context not found (SSR execution environment).');
    }
};
