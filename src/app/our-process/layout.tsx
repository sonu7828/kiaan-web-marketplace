import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Development Process | How We Build Software — Kiaan Technology',
    description: 'Explore Kiaan Technology\'s 6-step engineering process: Discovery, Architecture, Design, Development, QA Testing, and Launch. Transparent, agile, and deadline-driven.',
    keywords: 'software development process, agile development workflow, custom software methodology, how Kiaan Technology works, software project process India',
    alternates: {
        canonical: 'https://kiaantechnology.com/our-process',
    },
    openGraph: {
        title: 'Our 6-Step Engineering Process | Kiaan Technology',
        description: 'From discovery call to post-launch support — a transparent, structured methodology for building enterprise software on time and on budget.',
        url: 'https://kiaantechnology.com/our-process',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
