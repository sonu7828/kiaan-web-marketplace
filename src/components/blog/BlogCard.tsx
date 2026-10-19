import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, Bookmark } from 'lucide-react';
import { BlogPost, calculateReadingTime } from '@/data/blogData';

interface BlogCardProps {
    post: BlogPost;
    priority?: boolean;
    featuredStyle?: boolean;
}

export function BlogCard({ post, featuredStyle = false }: BlogCardProps) {
    const readingTime = calculateReadingTime(post.content, post.excerpt);

    return (
        <article className="group relative bg-zinc-950/80 border border-zinc-900 hover:border-yellow-500/40 rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(255,232,27,0.06)]">
            {/* Top Accent Line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500/0 group-hover:via-yellow-500/60 to-transparent transition-all duration-500" />

            <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
                <div>
                    {/* Meta Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-black uppercase tracking-wider text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-1 rounded-md">
                            <Bookmark size={10} className="text-yellow-400" />
                            {post.category}
                        </span>

                        <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-500">
                            <span className="flex items-center gap-1">
                                <Calendar size={12} className="text-zinc-600" />
                                {post.date}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-zinc-800" />
                            <span className="flex items-center gap-1 text-zinc-400">
                                <Clock size={12} className="text-yellow-500/80" />
                                {readingTime}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display uppercase tracking-tight text-white group-hover:text-yellow-400 transition-colors duration-300 mb-3 leading-snug">
                        <Link href={`/blog/${post.slug}`} className="block focus:outline-none focus:underline">
                            {post.title}
                        </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 font-normal">
                        {post.excerpt}
                    </p>
                </div>

                {/* Footer Meta & Action */}
                <div className="pt-4 border-t border-zinc-900/80 flex items-center justify-between mt-auto">
                    <div className="text-[11px] text-zinc-500 font-mono">
                        By <span className="text-zinc-300 font-medium">{post.author}</span>
                    </div>

                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-[11px] font-mono font-black uppercase tracking-widest text-zinc-300 group-hover:text-yellow-400 transition-colors"
                        aria-label={`Read article: ${post.title}`}
                    >
                        READ ARTICLE
                        <ArrowRight size={13} className="text-yellow-500 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
