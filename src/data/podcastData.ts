export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  audioUrl: string;
  duration: string; // "HH:MM:SS" or "MM:SS"
  durationSeconds: number;
  publishedAt: string; // ISO 8601
  season: number;
  episode: number;
  tags: string[];
  imageUrl: string;
  guestName?: string;
  guestTitle?: string;
  transcript?: string;
  // FIX Bug #13: embedUrl removed — always derivable as /podcast/embed/${id}
}

export interface PodcastShow {
  title: string;
  subtitle: string;
  description: string;
  author: string;
  email: string;
  imageUrl: string;
  websiteUrl: string;
  language: string;
  category: string;
  explicit: boolean;
  copyright: string;
  feedUrl: string;
}

export const podcastShow: PodcastShow = {
  title: "Kiaan Tech Talks",
  subtitle: "AI, SaaS & The Future of Business",
  description:
    "Deep dives into AI-driven software development, SaaS strategy, ERP/CRM implementation, and the future of enterprise technology. Hosted by the team at Kiaan Technology.",
  author: "Kiaan Technology",
  email: "hello@kiaantechnology.com",
  imageUrl: "/podcast/podcast-cover-optimized.webp",
  websiteUrl: "https://kiaantechnology.com/podcast",
  language: "en",
  category: "Technology",
  explicit: false,
  copyright: `© ${new Date().getFullYear()} Kiaan Technology. All rights reserved.`,
  feedUrl: "https://kiaantechnology.com/podcast/rss.xml",
};

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "ep-001",
    title: "AI-Driven SaaS Development in 2025",
    description:
      "How artificial intelligence is reshaping every layer of SaaS product development — from architecture to deployment.",
    longDescription:
      "In this debut episode, we sit down to explore how AI has fundamentally changed the way SaaS products are built, tested, and shipped. We cover everything from AI-assisted code generation to automated testing pipelines, and how Kiaan Technology is leveraging these tools for enterprise clients. We also discuss the real ROI of integrating AI into your development workflow and common pitfalls to avoid.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    duration: "42:15",
    durationSeconds: 2535,
    publishedAt: "2025-01-15T09:00:00Z",
    season: 1,
    episode: 1,
    tags: ["AI", "SaaS", "Development", "Automation"],
    imageUrl: "/podcast/ep-001-cover.jpg",
  },
  {
    id: "ep-002",
    title: "ERP vs. Custom Software: What Indian Enterprises Really Need",
    description:
      "A frank conversation on when to buy an off-the-shelf ERP and when a custom-built solution delivers a better ROI.",
    longDescription:
      "Off-the-shelf ERP systems promise a lot — but for growing Indian enterprises, do they deliver? We break down the real costs of SAP and Oracle implementations versus building custom ERP systems tailored to your industry. We cover case studies from manufacturing, retail, and logistics sectors and give you a decision framework to pick the right path.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    duration: "38:47",
    durationSeconds: 2327,
    publishedAt: "2025-02-01T09:00:00Z",
    season: 1,
    episode: 2,
    tags: ["ERP", "Enterprise", "Custom Software", "India"],
    imageUrl: "/podcast/ep-002-cover.jpg",
    guestName: "Rahul Sharma",
    guestTitle: "CTO, ManufactureIndia",
  },
  {
    id: "ep-003",
    title: "Building a CRM That Your Sales Team Will Actually Use",
    description:
      "CRM adoption rates are notoriously low. We dig into the UX, workflow, and data design principles that change this.",
    longDescription:
      "Statistics show that over 65% of sales reps say CRM tools are too complex. In this episode, we dissect the root causes of poor CRM adoption and share design principles for building CRMs that fit the user's workflow — not the other way around. Featuring learnings from Kiaan's own CRM implementations for B2B clients across India.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    duration: "51:03",
    durationSeconds: 3063,
    publishedAt: "2025-02-20T09:00:00Z",
    season: 1,
    episode: 3,
    tags: ["CRM", "Sales", "UX Design", "SaaS"],
    imageUrl: "/podcast/ep-003-cover.jpg",
    guestName: "Priya Mehta",
    guestTitle: "Head of Sales, TechScale India",
  },
  {
    id: "ep-004",
    title: "Scaling from 0 to 10,000 Users: Architecture Lessons Learned",
    description:
      "Real-world stories of what breaks at scale, and how to design software that handles 10x growth without a full rewrite.",
    longDescription:
      "Every SaaS founder has a story about the day their product broke under load. We share architectural patterns — microservices, event-driven design, database sharding, and caching strategies — that help software survive rapid growth. This episode includes real war stories from products we've built and scaled at Kiaan Technology.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    duration: "46:30",
    durationSeconds: 2790,
    publishedAt: "2025-03-10T09:00:00Z",
    season: 1,
    episode: 4,
    tags: ["Architecture", "Scaling", "Backend", "Cloud"],
    imageUrl: "/podcast/ep-004-cover.jpg",
  },
  {
    id: "ep-005",
    title: "The Hidden Cost of Technical Debt in Enterprise Software",
    description:
      "Technical debt isn't just a developer problem — it's a business risk. We quantify it and share strategies to manage it.",
    longDescription:
      "Most CTOs know technical debt exists. Few can put a number on what it costs. In this episode, we explore how to measure, communicate, and systematically pay down technical debt in enterprise environments. We cover refactoring strategies, when to rewrite vs. patch, and how to make the business case to leadership for investing in code quality.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    duration: "44:22",
    durationSeconds: 2662,
    publishedAt: "2025-03-28T09:00:00Z",
    season: 1,
    episode: 5,
    tags: ["Technical Debt", "Engineering", "Leadership", "Enterprise"],
    imageUrl: "/podcast/ep-005-cover.jpg",
    guestName: "Anil Verma",
    guestTitle: "VP Engineering, FinServe Technologies",
  },
  {
    id: "ep-006",
    title: "SaaS Pricing Models: Subscription, Usage-Based & Hybrid",
    description:
      "Choosing the wrong pricing model can kill a great SaaS product. We break down each model with real data.",
    longDescription:
      "Pricing is one of the highest-leverage decisions in any SaaS business. In this episode, we compare subscription, usage-based, and hybrid pricing models — diving into the math, the customer psychology, and the engineering implications of each. We share real examples from SaaS products we've built and what pricing changes drove the biggest revenue impacts.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    duration: "39:55",
    durationSeconds: 2395,
    publishedAt: "2025-04-15T09:00:00Z",
    season: 1,
    episode: 6,
    tags: ["SaaS", "Pricing", "Business", "Revenue"],
    imageUrl: "/podcast/ep-006-cover.jpg",
  },
];

export function getEpisodeById(id: string): PodcastEpisode | undefined {
  return podcastEpisodes.find((ep) => ep.id === id);
}

export function getLatestEpisodes(count: number = 3): PodcastEpisode[] {
  return [...podcastEpisodes]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, count);
}
