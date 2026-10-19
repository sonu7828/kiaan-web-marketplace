// scripts/generate-rss.mjs
// Run with: node scripts/generate-rss.mjs
// Add to package.json scripts: "prebuild": "node scripts/generate-rss.mjs"

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Podcast Data (mirrored from src/data/podcastData.ts) ────────────────────
const podcastShow = {
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

const podcastEpisodes = [
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
    embedUrl: "https://kiaantechnology.com/podcast/embed/ep-001",
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
    embedUrl: "https://kiaantechnology.com/podcast/embed/ep-002",
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
    embedUrl: "https://kiaantechnology.com/podcast/embed/ep-003",
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
    embedUrl: "https://kiaantechnology.com/podcast/embed/ep-004",
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
    embedUrl: "https://kiaantechnology.com/podcast/embed/ep-005",
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
    embedUrl: "https://kiaantechnology.com/podcast/embed/ep-006",
  },
];

// ── RSS Generation ──────────────────────────────────────────────────────────

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const sorted = [...podcastEpisodes].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

const items = sorted
  .map((ep) => {
    const pubDate = new Date(ep.publishedAt).toUTCString();
    const h = Math.floor(ep.durationSeconds / 3600).toString().padStart(2, "0");
    const m = Math.floor((ep.durationSeconds % 3600) / 60).toString().padStart(2, "0");
    const s = (ep.durationSeconds % 60).toString().padStart(2, "0");
    const durationStr = `${h}:${m}:${s}`;
    const byteSize = Math.floor((ep.durationSeconds * 128000) / 8);

    return `    <item>
      <title>${escapeXml(ep.title)}</title>
      <link>https://kiaantechnology.com/podcast/${ep.id}</link>
      <guid isPermaLink="true">https://kiaantechnology.com/podcast/${ep.id}</guid>
      <description><![CDATA[${ep.description}]]></description>
      <content:encoded><![CDATA[${ep.longDescription}]]></content:encoded>
      <enclosure url="${escapeXml(ep.audioUrl)}" type="audio/mpeg" length="${byteSize}" />
      <pubDate>${pubDate}</pubDate>
      <itunes:title>${escapeXml(ep.title)}</itunes:title>
      <itunes:summary><![CDATA[${ep.description}]]></itunes:summary>
      <itunes:duration>${durationStr}</itunes:duration>
      <itunes:episode>${ep.episode}</itunes:episode>
      <itunes:season>${ep.season}</itunes:season>
      <itunes:episodeType>full</itunes:episodeType>
      <itunes:explicit>${podcastShow.explicit ? "true" : "false"}</itunes:explicit>
      ${ep.guestName ? `<itunes:author>${escapeXml(ep.guestName)}</itunes:author>` : ""}
    </item>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(podcastShow.title)}</title>
    <link>${podcastShow.websiteUrl}</link>
    <description><![CDATA[${podcastShow.description}]]></description>
    <language>${podcastShow.language}</language>
    <copyright>${escapeXml(podcastShow.copyright)}</copyright>
    <managingEditor>${escapeXml(podcastShow.email)} (${escapeXml(podcastShow.author)})</managingEditor>
    <webMaster>${escapeXml(podcastShow.email)}</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${podcastShow.feedUrl}" rel="self" type="application/rss+xml" />
    <itunes:author>${escapeXml(podcastShow.author)}</itunes:author>
    <itunes:summary><![CDATA[${podcastShow.description}]]></itunes:summary>
    <itunes:owner>
      <itunes:name>${escapeXml(podcastShow.author)}</itunes:name>
      <itunes:email>${escapeXml(podcastShow.email)}</itunes:email>
    </itunes:owner>
    <itunes:image href="https://kiaantechnology.com${podcastShow.imageUrl}" />
    <image>
      <url>https://kiaantechnology.com${podcastShow.imageUrl}</url>
      <title>${escapeXml(podcastShow.title)}</title>
      <link>${podcastShow.websiteUrl}</link>
    </image>
    <itunes:category text="${escapeXml(podcastShow.category)}" />
    <itunes:explicit>${podcastShow.explicit ? "true" : "false"}</itunes:explicit>
    <itunes:type>episodic</itunes:type>
${items}
  </channel>
</rss>`;

// Write to public folder so it's served as a static file
const outputPath = join(__dirname, "..", "public", "podcast", "rss.xml");
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, xml, "utf8");

console.log(`✅  RSS feed generated → public/podcast/rss.xml (${sorted.length} episodes)`);
