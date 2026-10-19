import React from 'react';
import { Star } from 'lucide-react';

interface SocialProofBarProps {
    /** 'dark' = zinc-950 bg (for dark CTA panels), 'transparent' = no bg */
    variant?: 'dark' | 'transparent';
    className?: string;
}

/**
 * SocialProofBar
 * Compact social proof strip with avatar stack, star rating, and client count.
 * Designed to sit directly below CTA buttons to increase conversion trust.
 *
 * @example
 * <SocialProofBar />
 * <SocialProofBar variant="transparent" />
 */
export const SocialProofBar: React.FC<SocialProofBarProps> = ({
    variant = 'dark',
    className = '',
}) => {
    const avatarColors = [
        'bg-yellow-500 text-black',
        'bg-zinc-700 text-white',
        'bg-white text-black',
        'bg-zinc-800 text-yellow-500',
    ];

    const avatarInitials = ['RS', 'PM', 'AK', 'NH'];

    return (
        <div
            className={`flex flex-wrap items-center gap-4 py-3 px-4 ${variant === 'dark' ? 'bg-zinc-900/60 border border-zinc-800/60' : ''} ${className}`}
            aria-label="Client social proof"
        >
            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2 flex-shrink-0" aria-hidden="true">
                {avatarInitials.map((init, i) => (
                    <div
                        key={i}
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-black border-2 border-black ${avatarColors[i]}`}
                        title={`Client ${init}`}
                    >
                        {init}
                    </div>
                ))}
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-black border-2 border-black bg-yellow-500/20 text-yellow-500">
                    +
                </div>
            </div>

            {/* Stars + Rating */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={11}
                            className="text-yellow-500 fill-yellow-500"
                            aria-hidden="true"
                        />
                    ))}
                </div>
                <span className="text-[10px] font-black text-yellow-500">4.9</span>
            </div>

            {/* Divider */}
            <span className="text-zinc-700 text-xs hidden sm:inline" aria-hidden="true">|</span>

            {/* Proof Text */}
            <p className="text-[10px] font-bold text-zinc-500 leading-tight">
                <span className="text-white font-black">250+</span> businesses trust Kiaan ·{' '}
                <span className="text-white font-black">Trustpilot</span> &amp; <span className="text-white font-black">Glassdoor</span> verified
            </p>
        </div>
    );
};

export default SocialProofBar;
