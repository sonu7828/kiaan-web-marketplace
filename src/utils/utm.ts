export interface UTMParams {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    ref?: string;
    captured_at?: string;
}

/**
 * Parses query parameters on page load and saves UTM parameters to sessionStorage.
 */
export function parseAndStoreUTMParams(): UTMParams | null {
    if (typeof window === 'undefined') return null;

    try {
        const urlParams = new URLSearchParams(window.location.search);
        const utmKeys: (keyof UTMParams)[] = [
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_term',
            'utm_content',
            'ref'
        ];

        const captured: UTMParams = {};
        let hasParams = false;

        utmKeys.forEach(key => {
            const val = urlParams.get(key);
            if (val) {
                captured[key] = val;
                hasParams = true;
            }
        });

        if (hasParams) {
            captured.captured_at = new Date().toLocaleString();
            sessionStorage.setItem('kiaan_utm_parameters', JSON.stringify(captured));
            
            // Dispatch a custom event to notify components that UTM parameters were updated
            const event = new CustomEvent('kiaan_utm_updated', { detail: captured });
            window.dispatchEvent(event);

            // Also push parameters to GTM dataLayer if active
            const dataLayer = (window as any).dataLayer;
            if (Array.isArray(dataLayer)) {
                dataLayer.push({
                    event: 'utm_parameters_captured',
                    utm_details: captured
                });
            }

            return captured;
        }
    } catch (e) {
        console.error('Failed to parse UTM parameters', e);
    }

    return null;
}

/**
 * Retrieve stored UTM parameters from sessionStorage.
 */
export function getStoredUTMParams(): UTMParams | null {
    if (typeof window === 'undefined') return null;

    try {
        const stored = sessionStorage.getItem('kiaan_utm_parameters');
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.error('Failed to retrieve stored UTM parameters', e);
    }

    return null;
}

/**
 * Resets UTM tracking state in sessionStorage.
 */
export function clearStoredUTMParams(): void {
    if (typeof window === 'undefined') return;

    try {
        sessionStorage.removeItem('kiaan_utm_parameters');
        window.dispatchEvent(new CustomEvent('kiaan_utm_updated', { detail: null }));
    } catch (e) {
        console.error('Failed to clear stored UTM parameters', e);
    }
}
