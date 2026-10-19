import React from 'react';
import { notFound } from 'next/navigation';
import { blogData } from '@/data/blogData';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Tag, Zap, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';

export async function generateStaticParams() {
    return blogData.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;
    const post = blogData.find((p) => p.slug === slug);
    if (!post) return {};

    const dateObj = new Date(post.date);
    const validDate = isNaN(dateObj.getTime()) ? new Date().toISOString() : dateObj.toISOString();

    return {
        title: `${post.title} | Kiaan Technology Blog`,
        description: post.excerpt,
        alternates: {
            canonical: `https://kiaantechnology.com/blog/${post.slug}/`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://kiaantechnology.com/blog/${post.slug}/`,
            siteName: 'Kiaan Technology',
            type: 'article',
            publishedTime: validDate,
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
        }
    };
}

// Simple markdown renderer for the blog content
function renderContent(rawContent: string) {
    let processed = rawContent
        .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-display uppercase mt-12 mb-6 tracking-tight text-white">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-3xl md:text-4xl font-display uppercase mt-16 mb-8 tracking-tight text-white flex items-center gap-4"><span class="w-8 h-1 bg-yellow-500"></span>$1</h2>')
        .replace(/^> (.*$)/gim, '<blockquote class="border-l-2 border-yellow-500 pl-6 py-2 my-10 italic text-xl text-zinc-300 font-light bg-gradient-to-r from-yellow-500/10 to-transparent">$1</blockquote>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong class="text-white font-bold">$1</strong>')
        .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-yellow-500 hover:text-yellow-400 border-b border-yellow-500/30 hover:border-yellow-500 transition-colors">$1</a>');

    const blocks = processed.split(/\n\s*\n/);

    return blocks.map((block, i) => {
        const t = block.trim();
        if (!t) return null;
        if (t.startsWith('<h') || t.startsWith('<blockquote')) {
            return <div key={i} dangerouslySetInnerHTML={{ __html: t }} />;
        }
        if (t.match(/^\d+\.\s+/m) || t.match(/^-\s+/m)) { // match ordered or unordered list
            const listItems = t.split(/\n/).map(line => {
                const isOrdered = line.match(/^\d+\.\s+/);
                const isUnordered = line.match(/^-\s+/);
                if (isOrdered) {
                    return `<li class="pl-2 relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-2.5 before:w-1.5 before:h-1.5 before:bg-yellow-500 before:rotate-45">${line.replace(/^\d+\.\s+/, '')}</li>`;
                }
                if (isUnordered) {
                    return `<li class="pl-2 relative before:content-[''] before:absolute before:left-[-1.5rem] before:top-2.5 before:w-1.5 before:h-1.5 before:bg-yellow-500 before:rotate-45">${line.replace(/^-\s+/, '')}</li>`;
                }
                return line;
            }).join('');
            return <ul key={i} className="list-none pl-6 my-8 text-lg text-zinc-400 space-y-4 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: listItems }} />;
        }

        return <p key={i} className="text-lg text-zinc-400 font-light leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t }} />;
    });
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug;
    const post = blogData.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const dateObj = new Date(post.date);
    const validDate = isNaN(dateObj.getTime()) ? new Date().toISOString() : dateObj.toISOString();

    return (
        <article className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-yellow-500 selection:text-black">
            {/* Blog Post Schema */}
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "description": post.excerpt,
                    "datePublished": validDate,
                    "dateModified": validDate,
                    "author": {
                        "@type": "Person",
                        "name": post.author,
                        "jobTitle": post.role
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Kiaan Technology",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://kiaantechnology.com/logo.webp"
                        }
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://kiaantechnology.com/blog/${post.slug}/`
                    }
                }}
            />

            {/* FAQ Page Schema */}
            {post.slug === 'questions-to-ask-before-hiring-a-software-company' && (
                <JsonLd
                    data={{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What code coverage standard should a software agency support?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A standard development agency should support a minimum of 80% automated code coverage (Jest / Cypress) built into their CI/CD build compilation pipelines to prevent regression bugs."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is a Blue-Green deployment model?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A Blue-Green deployment is a release strategy that maintains two identical production environments (Blue and Green) to allow zero-downtime upgrades and instant rollbacks."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is a critical PR response SLA for software engineering?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "An elite engineering team holds a strict 24-hour SLA for peer pull request (PR) reviews to ensure development velocity is optimized."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How does Kiaan Technology handle intellectual property rights?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Kiaan Technology guarantees 100% intellectual property, repository code, database schema, and server ownership to clients from Day 1."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What security scanning tools are used in build pipelines?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We enforce static application security testing (SAST) and software composition analysis (SCA) using tools like Trivy and npm audit checks to detect vulnerabilities before release."
                                }
                            }
                        ]
                    }}
                />
            )}
            {/* Header Content */}
            <header className="container mx-auto px-6 mb-16 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center text-zinc-500 hover:text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-12 transition-colors">
                    <ArrowLeft size={14} className="mr-2" /> Back to Journals
                </Link>

                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
                    <span className="text-yellow-500 flex items-center gap-2"><Tag size={14} /> {post.category}</span>
                    <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                    <span className="flex items-center gap-2"><Calendar size={14} /> Published: {post.date}</span>
                    <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                    <span className="flex items-center gap-2">Last Updated: July 29, 2026</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display uppercase tracking-tighter leading-[1.1] mb-10">
                    {post.title}
                </h1>

                <div className="flex items-center gap-4 p-4 border border-zinc-900 bg-zinc-950/50 max-w-md">
                    <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                        <User size={20} className="text-zinc-500" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white tracking-wide">{post.author}</div>
                        <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">{post.role}</div>
                    </div>
                </div>
            </header>

            {/* Main Content Body */}
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-2xl text-zinc-300 font-light leading-relaxed mb-16 italic border-l border-zinc-800 pl-6">
                        {post.excerpt}
                    </p>

                    <div className="space-y-2">
                        {renderContent(post.content)}
                    </div>
                </div>

                {/* Post Footer CTA */}
                <div className="mt-24 p-10 border border-yellow-500/20 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[80px] group-hover:bg-yellow-500/20 transition-colors duration-500" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div className="flex-1">
                            <h3 className="text-2xl font-display uppercase tracking-tight text-white mb-2 flex items-center gap-3">
                                <Zap className="text-yellow-500" size={24} />
                                Ready to scale operations?
                            </h3>
                            <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                Our elite engineering team is standing by to map out a custom automation architecture that eliminates bottlenecks and drives massive ROI.
                            </p>
                        </div>
                        <div>
                            <Link href="/services">
                                <Button className="bg-yellow-500 text-black hover:bg-white text-xs font-black uppercase tracking-widest h-14 px-8 rounded-none transition-all flex items-center gap-3">
                                    Explore Solutions <ChevronRight size={16} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
