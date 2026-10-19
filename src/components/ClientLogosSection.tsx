"use client";

import React from 'react';
import { Star } from 'lucide-react';

const reviewLinks = [
    { name: 'Trustpilot', url: 'https://www.trustpilot.com/review/kiaantechnology.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector' },
    { name: 'AmbitionBox', url: 'https://www.ambitionbox.com/reviews/kiaan-technology-reviews' },
    { name: 'Fiverr', url: 'https://www.fiverr.com/agencies/kiaantech' },
    { name: 'Glassdoor', url: 'https://www.glassdoor.co.in/Reviews/Kiaan-Technology-Reviews-E7371124.htm' },
    { name: 'TechBehemoths', url: 'https://techbehemoths.com/company/kiaan-technology-private-limited-company#:~:text=SAMCO%20Trading%20Application-,Reviews,-Write%20a%20Review' }
];

export const ClientLogosSection: React.FC = () => {
    return (
        <section
            aria-label="Review us on various platforms"
            className="relative pt-6 pb-10 border-y border-zinc-800 bg-black overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="text-center mb-6 relative z-10 flex flex-col items-center">
                    <div className="flex gap-1.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-[#FFE81B] text-[#FFE81B]" />
                        ))}
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-300">
                        Review Us On
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-3 md:gap-4">
                    {reviewLinks.map((platform) => (
                        <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full px-4 py-4 rounded-xl bg-white border border-white hover:border-[#FFE81B] hover:bg-[#FFE81B] transition-all duration-300 group shadow-md hover:shadow-[0_0_15px_rgba(255,232,27,0.4)]"
                        >
                            <span className="text-sm font-black text-black group-hover:text-black transition-colors whitespace-nowrap">
                                {platform.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogosSection;
