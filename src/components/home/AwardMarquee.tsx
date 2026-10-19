"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const awards = [
    { name: "TechBehemoths 2025 Winner", img: "/frontPage/techbehemoths-award.webp", alt: "TechBehemoths 2025 Winner Award Certificate" },
    { name: "Glassdoor 5.0 Achiever", img: "/frontPage/glassdoor-award.webp", alt: "Glassdoor Top Workplace Award Badge" },
    { name: "Top Software Development Company", img: "/frontPage/Graphic Design.webp", alt: "Top Software Development Company Award" },
    { name: "Expert ReactJs Development", img: "/frontPage/ReactJs.webp", alt: "React.js logo" },
    { name: "Premium UI/UX Design", img: "/frontPage/UI design.webp", alt: "Premium UI/UX Design Award Showcase" },
];

export const AwardMarquee = () => {
    // Duplicate the awards array to create a seamless loop
    const duplicatedAwards = [...awards, ...awards, ...awards];

    return (
        <div className="w-full bg-zinc-950/50 py-12 border-y border-zinc-900 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            
            <div className="container mx-auto px-4 mb-8 text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 block mb-2">Global Recognition & Excellence</span>
                <h2 className="text-xl md:text-2xl font-display uppercase text-white">Award-Winning <span className="text-yellow-500">Technology Partner</span></h2>
            </div>

            <div className="flex overflow-hidden">
                <motion.div 
                    className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ 
                        duration: 30, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                >
                    {duplicatedAwards.map((award, i) => (
                        <div key={i} className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100">
                            <div className="relative w-32 h-32 md:w-40 md:h-40">
                                <Image
                                    src={award.img}
                                    alt={award.alt || `${award.name} - Excellence in Software Development Award`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="mt-4 text-[9px] font-bold uppercase tracking-widest text-zinc-600 group-hover:text-zinc-300">
                                {award.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
