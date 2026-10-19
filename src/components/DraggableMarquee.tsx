"use client";

import React, { useRef, useEffect, useState } from 'react';

interface DraggableMarqueeProps {
    children: React.ReactNode;
    speed?: number; // speed in pixels per frame, e.g., 0.5
    reverse?: boolean;
}

export function DraggableMarquee({ children, speed = 0.6, reverse = false }: DraggableMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    
    const isInteracting = useRef(false);
    const isProgrammaticScroll = useRef(false);
    const interactionTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationFrameId: number;
        let lastTimestamp = 0;

        const step = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const elapsed = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (!isInteracting.current && !isPaused) {
                const directionMultiplier = reverse ? -1 : 1;
                // scale speed by frame rate (assuming ~60fps / 16.67ms base)
                const elapsedScale = elapsed ? elapsed / 16.666 : 1;
                const dist = speed * elapsedScale * directionMultiplier;
                
                let nextScrollLeft = container.scrollLeft + dist;
                const halfScrollWidth = container.scrollWidth / 2;

                if (reverse) {
                    if (nextScrollLeft <= 0) {
                        nextScrollLeft = halfScrollWidth;
                    }
                } else {
                    if (nextScrollLeft >= halfScrollWidth) {
                        nextScrollLeft = 0;
                    }
                }

                isProgrammaticScroll.current = true;
                container.scrollLeft = nextScrollLeft;
            }
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(animationFrameId);
            if (interactionTimeout.current) clearTimeout(interactionTimeout.current);
        };
    }, [isPaused, speed, reverse]);

    // Track user interaction to temporarily pause auto-scroll
    const handleStartInteraction = () => {
        isInteracting.current = true;
        if (interactionTimeout.current) clearTimeout(interactionTimeout.current);
    };

    const handleEndInteraction = () => {
        if (interactionTimeout.current) clearTimeout(interactionTimeout.current);
        interactionTimeout.current = setTimeout(() => {
            isInteracting.current = false;
            // Smoothly snap or align within bounds
            const container = containerRef.current;
            if (container) {
                const halfScrollWidth = container.scrollWidth / 2;
                if (container.scrollLeft >= halfScrollWidth) {
                    isProgrammaticScroll.current = true;
                    container.scrollLeft -= halfScrollWidth;
                } else if (container.scrollLeft < 0) {
                    isProgrammaticScroll.current = true;
                    container.scrollLeft += halfScrollWidth;
                }
            }
        }, 2500); // Resume auto-scroll after 2.5 seconds of no user interaction
    };

    // Handle scroll events (covers wheel, trackpad swipes, mobile touch momentum)
    const handleScroll = () => {
        if (isProgrammaticScroll.current) {
            isProgrammaticScroll.current = false;
            return;
        }
        // This is a user-initiated scroll
        handleStartInteraction();
        handleEndInteraction();
    };

    // Handle desktop mouse click-and-drag scroll
    const handleMouseDown = (e: React.MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        handleStartInteraction();

        const startX = e.pageX - container.offsetLeft;
        const scrollLeft = container.scrollLeft;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!isInteracting.current) return;
            const x = moveEvent.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5; // Drag speed multiplier
            isProgrammaticScroll.current = true;
            container.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            handleEndInteraction();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            ref={containerRef}
            className="w-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            style={{
                WebkitOverflowScrolling: 'touch',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
                setIsPaused(false);
                handleEndInteraction();
            }}
            onTouchStart={handleStartInteraction}
            onTouchEnd={handleEndInteraction}
            onMouseDown={handleMouseDown}
            onScroll={handleScroll}
        >
            <div className="flex gap-6 w-max py-2">
                {children}
            </div>
        </div>
    );
}
