"use client";

import { motion } from 'framer-motion'
import React, { useRef } from 'react';

interface RevealProps {
    children: React.ReactNode;
    width?: string;
    delay?: number;
    overflow?: "hidden" | "visible";
    className?: string;
}

const RevealInner = ({ children, width = "fit-content", delay = 0.1, overflow = "hidden", className }: RevealProps) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div className={className} style={{ position: "relative", width, overflow }}>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                    duration: 0.45,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1]
                }}
                // willChange applied only during animation; released after to free GPU memory
                style={{ WebkitBackfaceVisibility: "hidden" }}
                onAnimationStart={() => {
                    if (ref.current) ref.current.style.willChange = 'transform, opacity';
                }}
                onAnimationComplete={() => {
                    if (ref.current) ref.current.style.willChange = 'auto';
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export const Reveal = React.memo(RevealInner);

