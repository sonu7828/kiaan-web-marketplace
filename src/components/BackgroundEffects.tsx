"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useCallback } from "react";
import React from "react";

const BackgroundEffectsInner = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        let rafId: number | null = null;
        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            lastX = e.clientX - 200;
            lastY = e.clientY - 200;

            if (rafId === null) {
                rafId = requestAnimationFrame(() => {
                    mouseX.set(lastX);
                    mouseY.set(lastY);
                    rafId = null;
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafId !== null) cancelAnimationFrame(rafId);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* 1. Static Noise / Grain Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            ></div>

            {/* 2. Interactive Mouse Spotlight */}
            <motion.div
                className="absolute bg-white/5 rounded-full blur-3xl will-change-transform"
                style={{
                    x: springX,
                    y: springY,
                    width: 350,
                    height: 350,
                    mixBlendMode: "overlay",
                }}
            />

            {/* 3. Drifting Orbs — reduced sizes for less GPU memory */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] will-change-transform"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute top-3/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px] will-change-transform"
                animate={{
                    x: [0, -70, 30, 0],
                    y: [0, 60, -40, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[120px] will-change-transform"
                animate={{
                    rotate: [0, 360]
                }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
};

export const BackgroundEffects = React.memo(BackgroundEffectsInner);
