"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, ChevronRight } from 'lucide-react';

interface WhatsAppBookingButtonProps {
    phoneNumber?: string;
    className?: string;
    variant?: 'primary' | 'outline';
}

/**
 * WhatsAppBookingButton Component
 * 
 * Provides a high-conversion call to action for the WhatsApp Booking Automation flow.
 */
export const WhatsAppBookingButton: React.FC<WhatsAppBookingButtonProps> = ({
    phoneNumber = "919752100980",
    className = "",
    variant = 'primary'
}) => {
    const message = "Hi Kiaan Tech! I'd like to book an appointment for a service.";
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const baseStyles = "relative flex items-center justify-center gap-3 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 group overflow-hidden";

    const variants = {
        primary: "bg-[#25D366] text-white hover:bg-[#22c35e] shadow-[0_10px_20px_-10px_rgba(37,211,102,0.5)]",
        outline: "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
    };

    return (
        <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            <span className="relative z-10 flex items-center gap-2">
                <MessageSquare size={18} className="animate-pulse" />
                Book on WhatsApp
            </span>

            <ChevronRight
                size={16}
                className="relative z-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            />
        </motion.a>
    );
};

export default WhatsAppBookingButton;
