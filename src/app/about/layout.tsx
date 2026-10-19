import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Kiaan Technology | Software & AI Development Company",
    description: "Learn about Kiaan Technology Private Limited, founded in 2022 in Indore, India. Meet our founder, explore our team, journey, software development expertise, AI capabilities, achievements and global vision.",
    alternates: {
        canonical: "https://kiaantechnology.com/about",
    },
    openGraph: {
        title: "About Kiaan Technology | Software & AI Development Company",
        description: "Learn about Kiaan Technology Private Limited, founded in 2022 in Indore, India. Explore our team, journey, software development expertise, AI capabilities, and global vision.",
        url: "https://kiaantechnology.com/about",
        siteName: "Kiaan Technology",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Kiaan Technology | Software & AI Development Company",
        description: "Learn about Kiaan Technology Private Limited, founded in 2022 in Indore, India. Explore our team, journey, software expertise, AI capabilities, and global vision.",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
