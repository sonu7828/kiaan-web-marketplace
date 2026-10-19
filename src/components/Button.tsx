import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}: ButtonProps) => {
    const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
    const variants = {
        primary: "bg-white text-zinc-900 font-semibold shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 border border-transparent",
        secondary: "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600",
        outline: "bg-transparent text-white border border-white/20 hover:bg-white/10 hover:border-white/40",
        ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
    }

    return (
        <button className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`} {...props}>
            {children}
        </button>
    )
}

