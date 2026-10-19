import React from 'react';

export default function IndustriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <div className="container mx-auto px-6 pb-12 pt-8 border-t border-zinc-900/50 text-zinc-600 text-xs font-light text-right">
                Last Updated: July 2026
            </div>
        </>
    );
}
