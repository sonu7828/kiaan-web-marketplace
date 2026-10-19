"use client";

import React, { useEffect, useRef } from 'react';

interface CalendlyWidgetProps {
    url: string;
    height?: number;
    className?: string;
}

/**
 * CalendlyWidget — embeds a Calendly scheduling iframe inline.
 * Automatically loads the Calendly embed script on mount.
 *
 * Usage:
 *   <CalendlyWidget url="https://calendly.com/YOUR_USERNAME/30min" />
 */
export const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
    url,
    height = 700,
    className = '',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Inject Calendly widget CSS
        if (!document.getElementById('calendly-css')) {
            const link = document.createElement('link');
            link.id = 'calendly-css';
            link.rel = 'stylesheet';
            link.href = 'https://assets.calendly.com/assets/external/widget.css';
            document.head.appendChild(link);
        }

        // Inject Calendly widget JS
        if (!document.getElementById('calendly-js')) {
            const script = document.createElement('script');
            script.id = 'calendly-js';
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className={`calendly-inline-widget ${className}`}
            data-url={url}
            style={{ minWidth: '320px', height: `${height}px` }}
        />
    );
};

export default CalendlyWidget;
