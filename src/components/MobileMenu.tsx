"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, Rocket } from 'lucide-react';
import { Button } from './Button';
import { navLinks, generateSlug } from '@/data/navigation';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed inset-0 z-[49] bg-black pt-32 px-6 overflow-y-auto"
                >
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-white/5">
                                <Link
                                    href={link.href}
                                    className="flex items-center justify-between py-5 cursor-pointer group"
                                    onClick={(e) => {
                                        if ((link.level2 || link.subItems) && openMenu !== link.name) {
                                            e.preventDefault();
                                            setOpenMenu(link.name);
                                        } else {
                                            onClose();
                                        }
                                    }}
                                >
                                    <span className={`text-2xl font-display uppercase tracking-wider transition-colors ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) || openMenu === link.name
                                            ? 'text-yellow-500'
                                            : 'text-white'
                                        }`}>
                                        {link.name}
                                    </span>
                                    {(link.level2 || link.subItems) && (
                                        <ChevronDown
                                            className={`transition-transform duration-300 ${openMenu === link.name ? 'rotate-180 text-yellow-500' : 'text-zinc-600'}`}
                                            size={24}
                                        />
                                    )}
                                </Link>

                                <AnimatePresence>
                                    {openMenu === link.name && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden bg-white/5 mb-4"
                                        >
                                            {link.level2 ? (
                                                link.level2.map((cat: any) => (
                                                    link.name === 'Solutions' ? (
                                                        <Link
                                                            key={cat.title}
                                                            href={cat.href || `/solutions/${cat.slug || generateSlug(cat.title)}`}
                                                            className="block p-4 text-[11px] text-zinc-400 uppercase tracking-widest border-b border-white/5 last:border-none hover:text-white"
                                                            onClick={onClose}
                                                        >
                                                            {cat.title}
                                                        </Link>
                                                    ) : (
                                                        <div key={cat.title} className="p-4 border-b border-white/5 last:border-none">
                                                            <h4 className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-3">{cat.title}</h4>
                                                            <div className="flex flex-col gap-3">
                                                                {cat.items.map((item: any) => {
                                                                    const isIntern = link.href === '/internship';
                                                                    let href = '';
                                                                    let label = '';

                                                                    if (isIntern) {
                                                                        href = `/internship/${item.slug}`;
                                                                        label = item.title;
                                                                    } else if (link.name === 'Solutions') {
                                                                        href = cat.href || `/solutions/${cat.slug || generateSlug(cat.title)}`;
                                                                        label = typeof item === 'string' ? item : item.title;
                                                                    } else {
                                                                        href = `/products/${generateSlug(item)}`;
                                                                        label = item;
                                                                    }

                                                                    return (
                                                                        <Link
                                                                            key={label}
                                                                            href={href}
                                                                            className="text-[11px] text-zinc-400 uppercase tracking-wider hover:text-white"
                                                                            onClick={onClose}
                                                                        >
                                                                            {label}
                                                                        </Link>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    )
                                                ))
                                            ) : link.subItems ? (
                                                <div className="flex flex-col">
                                                    {link.subItems.map((item: any) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block p-4 text-[11px] text-zinc-400 uppercase tracking-widest border-b border-white/5 last:border-none hover:text-white"
                                                            onClick={onClose}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* Contact Link */}
                        <div className="border-b border-white/5">
                            <Link
                                href="/contact"
                                className={`flex items-center justify-between py-5 cursor-pointer ${pathname === '/contact' ? 'text-yellow-500' : 'text-white'}`}
                                onClick={onClose}
                            >
                                <span className="text-2xl font-display uppercase tracking-wider">Contact</span>
                            </Link>
                        </div>
                    </div>

                    {/* Launch Your Software CTA Button */}
                    <div className="mt-8 mb-24 px-1">
                        <Link href="/start-project" onClick={onClose} className="block group">
                            <div className="w-full bg-gradient-to-r from-red-600 via-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 active:scale-[0.98] text-white rounded-xl py-4 sm:py-4.5 px-6 font-bold uppercase tracking-wider shadow-[0_4px_25px_rgba(220,38,38,0.45)] transition-all duration-300 flex items-center justify-center gap-3 border border-red-500/30">
                                <Rocket className="w-5 h-5 text-yellow-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                <span className="text-sm sm:text-base font-extrabold tracking-widest text-center">Launch Your Software</span>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
