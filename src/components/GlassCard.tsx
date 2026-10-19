import React from 'react';

// This component has been repurposed to match the new "Neo-Brutalist" theme.
// Despite the name 'GlassCard' (kept for compatibility), it now renders a solid, high-contrast card.

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    variant?: 'default' | 'red' | 'plain';
}

export const GlassCard = ({
    children,
    className = '',
    hoverEffect = true,
}: GlassCardProps) => {
    const baseStyles = "bg-zinc-900 border border-zinc-800 transition-all duration-300 relative overflow-hidden group"

    const hoverStyles = hoverEffect
        ? "hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#EAB308] hover:border-yellow-500 hover:bg-black"
        : ""

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className} rounded-none`}>
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-yellow-500/20 group-hover:border-t-yellow-500 transition-colors"></div>

            {children}
        </div>
    )
}
