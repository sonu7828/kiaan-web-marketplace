# Kiaan Technology Website — Complete Evidence-Based Audit

Audit scope: existing Next.js repository, source routes, components, configuration, public assets, styles, metadata, form/API architecture, dependencies, and existing static-export artifacts. This document is audit-only. It does not apply any implementation changes. Credential values, API keys, tokens, and passwords are omitted or shown as `[REDACTED]`.

## 1. Architecture Summary

- Framework: Next.js 15.1.7, React 19, and TypeScript.
- Routing: App Router under `src/app`; no active Pages Router was found.
- Deployment model: `output: 'export'` with `trailingSlash: true`, producing static HTML.
- Route scale: approximately 100 source page routes, expanded to 319 exported route directories through static parameters, especially internships, products, resources, case studies, podcasts, and regional pages.
- Component model: 109 files contain `"use client"`; many entire routes are client components.
- Styling: Tailwind CSS 4 through `@tailwindcss/postcss`, extensive utility classes, and a large `src/app/globals.css`.
- Animation: Framer Motion appears in 74 source locations, plus multiple CSS animations, marquees, glows, blur effects, scanlines, and fixed overlays.
- Icons: `lucide-react` is referenced across approximately 120 files.
- Images: mixed `next/image` and raw `<img>` usage. Next.js optimization is globally disabled with `images.unoptimized: true`.
- Fonts: self-hosted Fontsource Anton and Manrope. The existing export contains 66 font files totaling approximately 577 KB.
- SEO: root metadata, selected route layouts/page metadata, client canonical generation, JSON-LD, and duplicate generated/static sitemap and robots implementations.
- Forms: several routes submit through browser EmailJS and then attempt local `/api/leads` calls.
- Server code: four Node runtime POST route handlers and server-only HubSpot delivery logic.
- Rendering/caching: static generation/export; no operational SSR or ISR. Apache configuration supplies compression and long-lived static caching.
- Global runtime: Navbar, breadcrumbs, footer, award banner, retargeting, UTM tracking, WhatsApp/consultation UI, chat, and numerous analytics scripts are inherited site-wide.
- Security architecture: server-only HubSpot token access exists, but multiple admin/dashboard routes use client-side credential comparisons and browser storage as authorization/data persistence.

## 2. P0 Critical Issues

### Client-side administrator authentication is bypassable

- Priority: P0
- File path: `src/app/affiliate-program/page.tsx`, `src/app/analytics-dashboard/page.tsx`, `src/app/analytics-debugger/page.tsx`, `src/app/backlink-monitor/page.tsx`, `src/app/competitor-monitor/page.tsx`, `src/app/heatmaps-debugger/page.tsx`, `src/app/industry-events/page.tsx`, `src/app/lead-source-reports/page.tsx`, `src/app/networking-organizations/page.tsx`, `src/app/referral-agency-partnerships/page.tsx`, `src/app/seo-keyword-tracker/page.tsx`, `src/app/white-label-partnership/page.tsx`
- Component or route: Public dashboard and administrator interfaces.
- Problem: Authentication decisions are performed in downloadable client JavaScript using hardcoded credentials. Some routes persist authorization in `localStorage`.
- Evidence from repository: Direct email/password comparisons exist inside client pages; credential values are `[REDACTED]`. `src/app/referral-agency-partnerships/page.tsx` stores `kiaan_admin_auth=true`. Leads, events, memberships, keywords, and partnership records are also persisted locally.
- Impact: Any visitor can inspect the credential logic, manually set authorization state, forge or delete records, and impersonate an administrator. There is no trustworthy confidentiality, integrity, or audit trail.
- Recommended fix: Remove privileged behavior from public client bundles. Implement server-side authentication, authorization, secure sessions, protected APIs, server-owned persistence, and audit logging. Rotate any credentials used outside mock/demo contexts.
- Risk level: Critical; active security/design failure.

### Static deployment cannot execute the implemented form APIs

- Priority: P0
- File path: `next.config.mjs`, `src/app/api/leads/route.ts`, `src/app/api/leads/ai-roi/route.ts`, `src/app/api/leads/saas-checklist/route.ts`, `src/app/api/leads/vendor-scorecard/route.ts`, and all clients calling `/api/leads...`.
- Component or route: Contact, schedule, demo, internship, start-project, lead magnets, ROI calculator, and vendor scorecard.
- Problem: The application is configured as a static export, while its form endpoints declare the Node runtime and implement POST route handlers.
- Evidence from repository: `next.config.mjs` sets `output: 'export'`; all four route files declare `runtime = 'nodejs'` and export `POST`. At least nine form flows fetch `/api/leads/...`. The existing export contains static files, not an executable Next.js server API.
- Impact: API requests fail unless hosting independently supplies these endpoints. EmailJS may make some forms appear successful while CRM synchronization silently fails or is reduced to a warning.
- Recommended fix: Choose one deployment architecture: deploy Next.js with Node/serverless route support, or keep static export and move lead APIs to a separately deployed backend with explicit URLs, CORS rules, rate limiting, validation, and monitoring.
- Risk level: Critical; conversion and data-delivery reliability failure.

## 3. P1 Important Issues

### Credential-like material and browser-managed integration secrets

- Priority: P1
- File path: `.env.local`, `keys.txt`, `.env.example`, `src/app/hubspot-integration/page.tsx`, and EmailJS form pages.
- Component or route: Environment configuration and integrations.
- Problem: A root `keys.txt` and local environment file exist. The HubSpot integration page accepts, stores, and displays secret/token-like configuration in the browser. EmailJS identifiers are duplicated in client code.
- Evidence from repository: `.env.local` contains EmailJS variable names; `.env.example` names `EMAILJS_PRIVATE_KEY`; `keys.txt` is approximately 1.5 KB; HubSpot configuration includes a webhook-secret-like field and browser persistence. Actual values are `[REDACTED]`.
- Impact: Private material may leak through repository copies, browser storage, downloaded bundles, screenshots, or deployment artifacts.
- Recommended fix: Inventory and rotate real credentials, remove secret-bearing history where applicable, keep all private credentials server-only, and never persist OAuth/client secrets in `localStorage`.
- Risk level: High.

### Excessive client rendering and hydration

- Priority: P1
- File path: Most large `src/app/**/page.tsx` files, including `src/app/page.tsx`, `src/app/demo/page.tsx`, `src/app/internship/page.tsx`, policy pages, dashboards, services, solutions, products, and case studies.
- Component or route: Site-wide rendering boundaries.
- Problem: Predominantly static content is frequently placed inside full client components.
- Evidence from repository: 109 files contain `"use client"`; 324 `useState` and 68 `useEffect` occurrences were found. Legal pages of 30–52 KB are client components. Existing route chunks include homepage 38.3 KB, terms 41.8 KB, internship 52.7 KB, and demo 136.5 KB, excluding shared runtime.
- Impact: More JavaScript transfer, parsing, execution, hydration, INP risk, and slower development compilation.
- Recommended fix: Use server components by default and isolate only interactive widgets into narrow client islands.
- Risk level: High performance/maintainability risk.

### Global third-party script overload and duplicate GTM

- Priority: P1
- File path: `src/app/layout.tsx`
- Component or route: Root layout inherited by almost every route.
- Problem: The global layout loads a large tracking stack and declares Google Tag Manager twice with the same element ID.
- Evidence from repository: GTM appears with both `lazyOnload` and `afterInteractive`; GA4 is also initialized directly. Meta Pixel, Clarity, Hotjar, LinkedIn Insight, Trustpilot, Tidio, retargeting, and UTM logic are global.
- Impact: Duplicate events, added network/CPU cost, main-thread contention, consent/privacy complexity, and degraded mobile INP.
- Recommended fix: Consolidate analytics through one controlled loader, remove duplicate GTM/GA initialization, consent-gate optional tracking, and load route-specific integrations only where required.
- Risk level: High.

### Image optimization is disabled

- Priority: P1
- File path: `next.config.mjs` and raw-image pages/components under `src/app` and `src/components`.
- Component or route: Case studies, methodology, resources, testimonials, about, webinar, and partners.
- Problem: `images.unoptimized: true` disables normal Next.js responsive transformation despite AVIF/WebP and sizing configuration.
- Evidence from repository: Only six files import `next/image`; 26 raw `<img>` uses were found. Multiple raw images omit intrinsic dimensions. Several PNG assets range from approximately 470–718 KB. The case-study detail hero is explicitly lazy-loaded.
- Impact: LCP delay, mobile transfer cost, possible CLS, and wasted responsive-image configuration.
- Recommended fix: Re-enable optimization on compatible hosting or pre-generate responsive AVIF/WebP variants; add width/height or stable aspect ratios and accurate `sizes`; do not lazy-load LCP imagery.
- Risk level: High performance risk.

### Important routes inherit homepage metadata

- Priority: P1
- File path: `src/app/layout.tsx` and client routes without metadata layouts.
- Component or route: Demo, schedule, internship, dashboards, tools, pricing, products, solutions, and other public client routes.
- Problem: Client pages cannot export metadata and many lack adjacent server layouts containing route metadata.
- Evidence from repository: Only 54 page files define metadata or `generateMetadata`, plus a small number of metadata layouts. Existing export HTML gives `/demo`, `/schedule`, and `/internship` the homepage title.
- Impact: Duplicate titles/descriptions, weak query targeting, poorer click-through, and incorrect social previews.
- Recommended fix: Add server page/layout wrappers with unique title, description, canonical, Open Graph, Twitter, and robots intent for every indexable page.
- Risk level: High SEO risk.

### Sitemap and robots ownership is inconsistent

- Priority: P1
- File path: `src/app/sitemap.ts`, `public/sitemap.xml`, `src/app/robots.ts`, `public/robots.txt`
- Component or route: Crawl discovery and indexing.
- Problem: Generated and manually maintained versions coexist and differ.
- Evidence from repository: The existing export contains 319 route directories while the public sitemap contains 78 unique paths. Major internships, tools, integrations, policies, resources, and dashboard-like routes are missing. Generated `lastModified` values use build time. Static and generated robots disallow lists differ.
- Impact: Missing discovery, false freshness signals, accidental indexing of internal utilities, and maintenance drift.
- Recommended fix: Use one generated source for each artifact, derive entries from actual datasets, use real modification dates, and assign explicit index/noindex decisions.
- Risk level: High SEO risk.

### Missing Open Graph image

- Priority: P1
- File path: `src/app/layout.tsx`, expected asset `public/og-image.jpg`
- Component or route: Root Open Graph, Twitter, and schema metadata.
- Problem: Metadata references an asset that does not exist.
- Evidence from repository: `public/og-image.jpg` is absent while root metadata and schemas reference it.
- Impact: Broken social previews and invalid schema image references.
- Recommended fix: Add a correctly sized branded asset or point metadata to a valid existing image.
- Risk level: High marketing/SEO risk.

### Missing site-wide security headers

- Priority: P1
- File path: `public/.htaccess`, `next.config.mjs`
- Component or route: Static hosting response policy.
- Problem: Compression and cache rules exist, but general browser security headers are absent.
- Evidence from repository: No effective site-wide CSP, `frame-ancestors`, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS, or cross-origin policy. The CSP in `next.config.mjs` applies only to optimized SVG responses while image optimization is disabled.
- Impact: Weaker XSS containment, clickjacking defense, MIME protection, referrer privacy, and browser capability control.
- Recommended fix: Inventory required origins, roll out CSP in report-only mode, then enforce a deployment-level security-header policy.
- Risk level: High.

### Form abuse controls and consent behavior are incomplete

- Priority: P1
- File path: `src/app/api/leads/**/route.ts`, `src/lib/server/leadProcessor.ts`, and browser EmailJS pages.
- Component or route: Lead collection.
- Problem: Some validators and honeypots exist, but no visible centralized rate limiting, CAPTCHA/challenge, request-size controls, or origin enforcement exists. The general route can default consent to true.
- Evidence from repository: Public POST handlers invoke CRM/delivery logic; multipart handling lacks a visible request-size boundary; some routes submit directly through EmailJS and bypass server validation.
- Impact: Spam, CRM pollution, quota exhaustion, email abuse, and unreliable consent records.
- Recommended fix: Centralize server-side submission, require explicit consent, add rate limiting, size limits, bot defense, origin/CSRF design, logging, and retention rules.
- Risk level: High.

## 4. P2 Improvements

### Font payload is broader than required

- Priority: P2
- File path: `src/app/layout.tsx`, `src/app/globals.css`
- Component or route: Global typography.
- Problem: Five Manrope weights plus Anton are imported globally, while additional local-only `@font-face` declarations may overlap with Fontsource.
- Evidence from repository: Existing export contains 66 font files totaling approximately 577 KB across scripts and WOFF/WOFF2 formats.
- Impact: Additional generated assets and configuration complexity.
- Recommended fix: Restrict weights and language subsets, prefer WOFF2, validate font metrics, and remove conflicting/redundant declarations.
- Risk level: Medium.

### Persistent animation and paint cost

- Priority: P2
- File path: `src/app/globals.css`
- Component or route: Site-wide visual effects.
- Problem: Infinite grid, glitch, marquee, shimmer, float, pulse, scanline, blur, shadow, and `will-change` behavior can remain active.
- Evidence from repository: `neo-card` permanently declares `will-change`; multiple infinite keyframes and fixed scanline effects are globally defined.
- Impact: GPU/battery pressure and lower smoothness on low-end mobile devices.
- Recommended fix: Promote layers only during interaction, pause offscreen animation, implement `prefers-reduced-motion`, and reduce fixed full-screen effects.
- Risk level: Medium.

### Dataset HTML injection

- Priority: P2
- File path: `src/app/case-studies/[slug]/page.tsx`, `src/app/resources/[slug]/ResourceDetailClient.tsx`
- Component or route: Case-study blueprint and resource detail content.
- Problem: Dataset fields are passed to `dangerouslySetInnerHTML`.
- Evidence from repository: `study.blueprint` and resource HTML are directly injected.
- Impact: Lower current risk while data is trusted and bundled; becomes an XSS path if content moves to a CMS or external API.
- Recommended fix: Render structured React content or sanitize with a strict allowlist at the trust boundary.
- Risk level: Medium.

### Legacy Vite-era scaffolding remains

- Priority: P2
- File path: `vite.config.js`, `index.html`, `src/layouts/Layout.jsx`, `src/assets/react.svg`, `public/vite.svg`, `test-import.ts`
- Component or route: Project/tooling architecture.
- Problem: A parallel Vite-era structure remains beside the active Next.js application.
- Evidence from repository: Active scripts use Next.js; these Vite files are outside the active App Router architecture.
- Impact: Developer confusion, broader scanning/indexing, and uncertainty over deployment ownership.
- Recommended fix: After external usage is ruled out, remove or archive obsolete scaffolding in a separately approved cleanup.
- Risk level: Medium.

### Dependency and framework version skew

- Priority: P2
- File path: `package.json`, `package-lock.json`
- Component or route: Toolchain.
- Problem: Next.js 15.1.7 is paired with `@next/third-parties` 16.2.12; installed React/React DOM are 19.2.4 under broad semver declarations.
- Evidence from repository: Local installed versions were confirmed; `@next/third-parties` is referenced only by inactive-looking `src/layouts/Layout.jsx`.
- Impact: Compatibility ambiguity and future install drift.
- Recommended fix: Remove the verified-unused integration or align it with the active framework; pin strategically important framework versions after testing.
- Risk level: Medium.

### Lint is bypassed during builds

- Priority: P2
- File path: `next.config.mjs`, `package.json`, `eslint.config.mjs`
- Component or route: Quality gates.
- Problem: ESLint errors are ignored during builds and the script uses `next lint` with an ESLint 9 flat configuration.
- Evidence from repository: `eslint.ignoreDuringBuilds: true` is configured.
- Impact: Accessibility, hook, image, and semantic regressions can ship unnoticed.
- Recommended fix: Run ESLint directly in CI and restore enforcement after measuring the existing backlog.
- Risk level: Medium.

## 5. Development Performance Findings

- Priority: P1
- File path: Repository-wide, especially `src/app/page.tsx`, `src/app/demo/page.tsx`, `src/app/internship/page.tsx`, `src/data/InternshipProgramData.ts`, and `src/data/solutionsData.ts`.
- Component or route: Development server startup and cold route compilation.
- Problem: The reported 25-second startup, 27-second homepage compile, 29-second first request, and approximately 1,700 modules are high but plausible for this repository.
- Evidence from repository:
  - Approximately 254 source files, including 185 TSX and 63 TypeScript files.
  - Roughly 100 source page routes and hundreds of statically expanded variants.
  - 109 client files.
  - Framer Motion in 74 locations.
  - Lucide imports across approximately 120 files.
  - Homepage is a 54.7 KB client file.
  - Root layout imports six font styles and many global client components.
  - Tailwind scans all `src/**/*.{js,ts,jsx,tsx}` and root `index.html`.
  - Several individual files range from 50 KB to 195 KB.
  - Legacy Vite files add indexing and source-of-truth noise.
- Impact: Slow cold starts, route compilation, hot reload, and developer feedback cycles.
- Recommended fix: Reduce full-page client boundaries, split very large modules, remove verified legacy code, narrow motion/icon import surfaces, and measure cold versus warm compilation separately.
- Risk level: High developer-productivity risk.

Development compilation is not equivalent to production runtime. Windows filesystem behavior, antivirus scanning, disk speed, CPU, cold `.next` cache, and webpack behavior may add material time but cannot be proven from repository source alone.

## 6. Production Performance Findings

- Priority: P1
- File path: Existing `dist/dist` static-export artifacts and corresponding routes.
- Component or route: Homepage, demo, internship, about, schedule, contact, and global shared runtime.
- Problem: Important routes reference substantial HTML and JavaScript payloads before considering third-party downloads.
- Evidence from repository:

| Route | Exported HTML | Referenced local JavaScript |
|---|---:|---:|
| Homepage | 250.2 KB | 768 KB |
| Demo | 547.7 KB | 871.9 KB |
| Internship | 169.4 KB | 782.8 KB |
| About | 129.8 KB | 759.3 KB |
| Schedule | 76 KB | 738.3 KB |
| Contact | 74.2 KB | 737 KB |

These are raw referenced totals, not compressed transfer sizes and not proof every byte executes immediately. Shared chunks are cacheable.

### Core Web Vitals risks

- LCP: disabled image optimization, large PNG/JPG assets, remote imagery, global third-party connections, and some high-position images marked lazy.
- CLS: raw images without intrinsic dimensions, remote thumbnails, banners/overlays, and font swaps.
- INP: global analytics/chat, broad hydration, Framer Motion, large interactive pages, continuous animation, blur, and fixed overlays.
- Mobile: highest risk due to JS execution, animation, small text, large images, and competing global CTAs.
- Desktop: powerful devices may mask runtime cost, but unnecessary transfer and parsing remain.

Positive evidence includes static crawlable HTML, homepage below-fold dynamic imports, some lazy loading and aspect-ratio containers, lazy loading for some scripts, Apache gzip/caching, route splitting, self-hosted fonts, and no production source maps in the existing export.

- Impact: Slower initial rendering and interaction, especially on mobile and low-end devices.
- Recommended fix: Reduce shared/client JS, delay optional third parties, optimize imagery, split large interactive routes, and measure compressed/networked production behavior after architecture corrections.
- Risk level: High.

## 7. SEO Findings

### Positive foundations

- Priority: P2
- File path: `src/app/layout.tsx`, selected route layouts/pages, dynamic route pages.
- Component or route: Public site.
- Problem: Not applicable; these are positive foundations that should be preserved.
- Evidence from repository: Static HTML is crawlable; root metadata includes title, description, robots, Open Graph, Twitter, authors, and `metadataBase`; selected service/product/blog/podcast/case-study/location/tool routes have dedicated metadata; dynamic routes generally use `generateStaticParams`; images generally have alt text; podcast embeds use `noindex, nofollow`.
- Impact: Good baseline crawlability and structured search presentation.
- Recommended fix: Preserve while consolidating ownership and correcting inconsistencies.
- Risk level: Low.

### Duplicate metadata and encoding defects

- Priority: P1
- File path: `src/app/layout.tsx` and client routes without metadata wrappers.
- Component or route: Demo, schedule, internship, and other inherited routes.
- Problem: Root metadata is duplicated across unrelated pages; text contains mojibake such as `â€”`.
- Evidence from repository: Existing exported `/demo`, `/schedule`, and `/internship` HTML uses the homepage title. Encoding artifacts appear in exported/root content.
- Impact: Weak targeting, poor snippets, reduced trust, and incorrect social sharing.
- Recommended fix: Add unique server metadata per indexable route and normalize source-file encoding.
- Risk level: High.

### Crawl and indexing ambiguity

- Priority: P1
- File path: `src/app/sitemap.ts`, `public/sitemap.xml`, `src/app/robots.ts`, `public/robots.txt`
- Component or route: All public and utility routes.
- Problem: Sitemap coverage is incomplete and utility/admin-like pages lack explicit indexing intent.
- Evidence from repository: 319 exported route directories versus 78 sitemap paths. Debuggers, trackers, integration management, internal documents, one-pagers, embeds, and admin-like routes need explicit decisions.
- Impact: Important routes may not be discovered while low-value/private-looking routes may be indexed.
- Recommended fix: Generate a canonical route inventory and explicitly index or noindex each route class.
- Risk level: High.

### Content cannibalization and thin template risk

- Priority: P2
- File path: Homepage, About, Methodology, Our Process, Services, Solutions, Industries, local landing pages, and shared data templates.
- Component or route: Marketing and long-tail pages.
- Problem: Repeated themes and template-based pages may compete for the same terms or provide insufficient differentiation.
- Evidence from repository: Repeated emphasis on AI automation, enterprise software, SaaS, ERP/CRM, custom software, and development process across many routes.
- Impact: Keyword cannibalization, diluted internal relevance, and thin-content perception.
- Recommended fix: Define unique search intent and conversion purpose for every indexable page; consolidate overlapping content and strengthen evidence.
- Risk level: Medium.

## 8. Security Findings

### Browser storage is treated as trusted application state

- Priority: P0
- File path: Dashboard/admin-style pages and several product/lead flows.
- Component or route: Leads, events, networking, SEO data, partnerships, integrations, and authorization.
- Problem: `localStorage`/`sessionStorage` contain mutable records and authorization state.
- Evidence from repository: 92 localStorage and 16 sessionStorage pattern occurrences were found during the audit.
- Impact: Visitors can inspect, alter, forge, or delete state. Sensitive data can persist on shared devices.
- Recommended fix: Keep privileged/business records on authenticated server storage; reserve browser storage for non-sensitive presentation preferences.
- Risk level: Critical where authorization is involved; high elsewhere.

### XSS and unsafe HTML readiness

- Priority: P2
- File path: `src/app/layout.tsx`, schema-rendering pages, `src/app/case-studies/[slug]/page.tsx`, `src/app/resources/[slug]/ResourceDetailClient.tsx`.
- Component or route: Scripts, JSON-LD, and rich content.
- Problem: `dangerouslySetInnerHTML` is used broadly.
- Evidence from repository: 47 occurrences were found. Most are static scripts or `JSON.stringify` schema, while some inject dataset HTML.
- Impact: Trusted static schema is lower risk; externally managed rich content would create XSS exposure.
- Recommended fix: Consolidate inline scripts, sanitize rich HTML, and enforce CSP after third-party reduction.
- Risk level: Medium.

### Production leakage and errors

- Priority: P2
- File path: Existing export and source console usage.
- Component or route: Production diagnostics.
- Problem: Some console logging exists, but no production source maps were found.
- Evidence from repository: No `.map` files were present in the existing export; approximately 15 console-pattern occurrences were found.
- Impact: Source-map leakage risk is currently low; logs may still reveal operational details or clutter diagnostics.
- Recommended fix: Retain safe structured server logging, remove sensitive browser logs, and keep source-map publication intentional.
- Risk level: Low to medium.

### Dependency vulnerability status

- Priority: P2
- File path: `package.json`, `package-lock.json`
- Component or route: Dependency supply chain.
- Problem: Version compatibility was inspected, but no live vulnerability database query was performed.
- Evidence from repository: Installed framework and package versions were enumerated locally; version skew was confirmed.
- Impact: The lockfile cannot be declared vulnerability-free from this audit alone.
- Recommended fix: Run a dedicated, approved vulnerability audit and evaluate advisories against actual bundled/runtime usage before upgrades.
- Risk level: Unknown pending vulnerability scan.

## 9. Content / UI / Layout Findings

### Header, Navbar, and mobile navigation

- Priority: P2
- File path: `src/components/Navbar.tsx`, `src/components/MobileMenu.tsx`, `src/data/navigation.ts`
- Component or route: Global navigation.
- Problem: Navigation breadth, animation, and nested options can overwhelm users and increase global hydration.
- Evidence from repository: Navbar is a global client component using Framer Motion; mobile menu is dynamically imported.
- Impact: Cognitive load, keyboard/focus complexity, and global JS cost.
- Recommended fix: Simplify top-level hierarchy, preserve dynamic mobile loading, and test focus trap, Escape, restoration, submenu semantics, and touch targets.
- Risk level: Medium.

### Homepage and hero

- Priority: P1
- File path: `src/app/page.tsx` and `src/components/home/*`
- Component or route: `/`
- Problem: Long, visually intense, and CTA-dense client-rendered marketing experience.
- Evidence from repository: 54.7 KB client page; many dynamic sections, animations, schemas, state/effects, awards, process, resources, testimonials, case studies, industries, lead logic, and global overlays.
- Impact: Diluted conversion hierarchy, hydration cost, and mobile fatigue.
- Recommended fix: Server-render static sections, choose one primary and one secondary CTA, reduce overlapping proof/process sections, and reduce above-fold motion.
- Risk level: High.

### About

- Priority: P2
- File path: `src/app/about/page.tsx`, `src/app/about/layout.tsx`
- Component or route: `/about`
- Problem: Dense capability/process presentation and a remote founder video thumbnail without intrinsic dimensions.
- Evidence from repository: Full client page with a YouTube thumbnail loaded by raw `<img>`.
- Impact: Mobile density, CLS/LCP risk, and unverified enterprise/compliance claims.
- Recommended fix: Server-render static narrative, give media stable dimensions, and support claims with verifiable evidence.
- Risk level: Medium.

### Services, products, and software

- Priority: P2
- File path: `src/app/services/*`, `src/app/products/*`, `src/components/NicheServicePage.tsx`, `src/components/SaaSProductTemplate.tsx`
- Component or route: Service and product catalogs/details.
- Problem: Service/solution/product boundaries overlap; some routes are thin wrappers around large shared templates.
- Evidence from repository: Several route files have no literal H1 because the shared template supplies it; shared datasets are large and repeated across many generated pages.
- Impact: User confusion, SEO duplication, and uncertain distinction between existing products and custom capabilities.
- Recommended fix: Define clear taxonomy, product status, deliverables, audience, integrations, timeframe, deployment model, engagement/pricing model, and proof.
- Risk level: Medium.

### Portfolio and case studies

- Priority: P1
- File path: `src/app/case-studies/page.tsx`, `src/app/case-studies/[slug]/page.tsx`, `src/components/case-studies/*`, case-study images.
- Component or route: `/case-studies` and details.
- Problem: Strong proof content is burdened by oversized images, raw image use, and some incorrect lazy loading.
- Evidence from repository: Multiple 470–718 KB screenshots; raw `<img>`; detail hero marked lazy; blueprint HTML injection.
- Impact: LCP/transfer cost and content trust-boundary risk.
- Recommended fix: Optimize imagery, fix priority/sizing, and distinguish measured client results from illustrative claims.
- Risk level: High.

### Testimonials, statistics, and trust signals

- Priority: P2
- File path: `src/components/testimonials/*`, `src/app/video-testimonials/page.tsx`, `src/components/AwardBanner.tsx`, `src/components/ClientLogosSection.tsx`
- Component or route: Global trust content and testimonial routes.
- Problem: Remote thumbnails, animated cards, global award overlays, and claims without consistent source/date context.
- Evidence from repository: YouTube thumbnails use raw images; award banner is global; testimonial components animate and load client-side.
- Impact: Runtime cost and reduced trust if evidence is not verifiable.
- Recommended fix: Optimize thumbnails, verify permissions/attribution, provide source/date context, and avoid global trust overlays competing with page CTAs.
- Risk level: Medium.

### Process and methodology

- Priority: P2
- File path: `src/app/methodology/page.tsx`, `src/app/our-process/page.tsx`, `src/app/about/page.tsx`, `src/app/page.tsx`, `public/images/development-process.png`
- Component or route: Process sections and pages.
- Problem: Similar process content is repeated across several routes; the process image is 609.5 KB.
- Evidence from repository: Four major pages describe overlapping discovery/architecture/development/deployment steps.
- Impact: Content duplication and unnecessary image transfer.
- Recommended fix: Assign one canonical process page, summarize elsewhere, and replace the asset with responsive compressed formats.
- Risk level: Medium.

### Contact, demo, schedule, and booking

- Priority: P1
- File path: `src/app/contact/page.tsx`, `src/app/demo/page.tsx`, `src/app/schedule/page.tsx`, `src/app/book-demo/page.tsx`, corresponding layouts/components.
- Component or route: Conversion routes.
- Problem: Overlapping conversion routes, inconsistent metadata, duplicated EmailJS/API logic, and an exceptionally large demo experience.
- Evidence from repository: Demo is 195 KB source, 547.7 KB exported HTML, and 136.5 KB route JS. Demo and schedule inherit homepage metadata in the inspected export. Book-demo dynamically loads Calendly, but Calendly preconnect is global.
- Impact: Conversion confusion, form reliability problems, SEO duplication, and poor mobile interaction performance.
- Recommended fix: Define distinct route purposes or consolidate; split demo by product/use case; centralize form architecture; add unique metadata; load Calendly origins only where needed.
- Risk level: High.

### Internship

- Priority: P1
- File path: `src/app/internship/page.tsx`, `src/app/internship/[slug]/page.tsx`, `src/data/InternshipProgramData.ts`
- Component or route: Internship catalog, details, and application.
- Problem: Very large client implementation and dataset with many generated routes omitted from the sitemap.
- Evidence from repository: Page is 75.2 KB; data is 134.5 KB; existing route chunk is 52.7 KB; many individual internship exports are absent from sitemap; application duplicates EmailJS/API logic.
- Impact: Development compilation cost, mobile hydration, crawl discovery gaps, and unreliable applications.
- Recommended fix: Server-render catalog/content, split data, add unique role metadata and structured data, generate sitemap entries, and centralize application delivery.
- Risk level: High.

### Footer and legal pages

- Priority: P2
- File path: `src/components/Footer.tsx`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx`, and policy routes.
- Component or route: Global footer and legal content.
- Problem: Footer is client-rendered despite static content; legal pages are large client chunks and must match actual tracking/storage practices.
- Evidence from repository: Footer contains extensive links and Framer/client behavior; privacy and terms pages are approximately 46.2 KB and 51.7 KB source files.
- Impact: Global JS cost, dense navigation, and policy/implementation mismatch risk.
- Recommended fix: Server-render footer/legal copy, reduce link density, and reconcile policies with actual analytics, local storage, EmailJS, CRM, and retention behavior.
- Risk level: Medium.

### Accessibility

- Priority: P2
- File path: Repository-wide interactive components and pages.
- Component or route: Buttons, forms, menus, modals, images, and typography.
- Problem: Keyboard/focus behavior, label relationships, small typography, motion, and contrast need systematic testing.
- Evidence from repository: Aggregate scan found 286 buttons, 54 `aria-label` occurrences, 181 inputs, 174 labels, and 24 JSX images with 24 alt attributes. Font sizes such as 8.5px, 9.5px, and 10px are used.
- Impact: Reduced readability and operability for keyboard, low-vision, motion-sensitive, and mobile users.
- Recommended fix: Verify label/control relationships, icon-button names, focus handling, live regions, contrast, reduced motion, touch targets, and responsive typography.
- Risk level: Medium.

## 10. Largest Performance Contributors

### Source files

| File | Approximate size |
|---|---:|
| `src/app/demo/page.tsx` | 195 KB |
| `src/data/InternshipProgramData.ts` | 134.5 KB |
| `src/data/solutionsData.ts` | 76.6 KB |
| `src/app/internship/page.tsx` | 75.2 KB |
| `src/app/referral-agency-partnerships/page.tsx` | 72.1 KB |
| `src/app/page.tsx` | 54.7 KB |
| `src/app/industry-events/page.tsx` | 53.3 KB |
| `src/app/competitor-monitor/page.tsx` | 52.5 KB |
| `src/app/terms/page.tsx` | 51.7 KB |
| `src/app/white-label-partnership/page.tsx` | 50.5 KB |
| `src/app/networking-organizations/page.tsx` | 50.4 KB |
| `src/app/affiliate-program/page.tsx` | 46.8 KB |
| `src/app/lead-source-reports/page.tsx` | 46.3 KB |
| `src/app/privacy/page.tsx` | 46.2 KB |
| `src/data/resourcesData.ts` | 44.3 KB |
| `src/data/businessCompanyData.ts` | 43.8 KB |
| `src/app/backlink-monitor/page.tsx` | 41.9 KB |
| `src/app/hrm/weekly-outcomes/page.tsx` | 41.3 KB |
| `src/app/hubspot-integration/page.tsx` | 41.1 KB |
| `src/app/solutions/page.tsx` | 40.4 KB |
| `src/components/NicheServicePage.tsx` | 39.7 KB |

### Runtime/dependencies

- Priority: P1
- File path: `src/app/layout.tsx`, package imports throughout `src`.
- Component or route: Shared runtime.
- Problem: Broad Framer Motion, Lucide, analytics, chat, Fontsource, EmailJS, jsPDF, and global client component usage.
- Evidence from repository: Framer Motion in 74 locations; Lucide in approximately 120 files; six global font CSS imports; multiple global third-party scripts.
- Impact: Module count, compile cost, shared/route bundle weight, and main-thread work.
- Recommended fix: Narrow imports and usage, load heavy tools on intent, consolidate third parties, and move static content to server components.
- Risk level: High.

## 11. Oversized Images / Assets

| Asset | Approximate size | Finding |
|---|---:|---|
| `public/images/case-studies/playgroundx-lobby.png` | 717.9 KB | Oversized PNG screenshot |
| `public/podcast/podcast-cover.jpg` | 677.2 KB | Oversized JPEG cover |
| `public/images/crm_dashboard_mockup.png` | 614.4 KB | Oversized PNG mockup |
| `public/images/development-process.png` | 609.5 KB | Oversized raw process image |
| `public/images/pgx_gateway_mockup.png` | 582.9 KB | Oversized PNG mockup |
| `public/images/case-studies/crm-dashboard.png` | 543.1 KB | Oversized PNG screenshot |
| `public/images/case-studies/turf-calendar.png` | 539.4 KB | Oversized PNG screenshot |
| `public/images/case-studies/pgx-dashboard.png` | 514 KB | Oversized PNG screenshot |
| `public/images/case-studies/crm-analytics.png` | 504.3 KB | Oversized PNG screenshot |
| `public/images/healthsakhi_app_mockup.png` | 480.6 KB | Oversized PNG mockup |
| `public/images/case-studies/healthsakhi-chat.png` | 470.3 KB | Oversized PNG screenshot |
| `public/images/certificate.webp` | 313.2 KB | Large WebP certificate |
| `public/frontPage/Fiver certificate.webp` | 228.6 KB | Large badge/certificate |
| `public/frontPage/ISO certificate.webp` | 212.6 KB | Large badge/certificate |
| `public/frontPage/ambitionbox.webp` | 162.4 KB | Large award image |
| `public/frontPage/glassdoor-award.webp` | 153.7 KB | Large award image |

- Priority: P1
- File path: Assets above and their consuming components.
- Component or route: Case studies, homepage awards, methodology, products, podcast.
- Problem: Large raster assets are served without Next.js optimization or responsive variants.
- Evidence from repository: `images.unoptimized: true`; numerous raw `<img>` elements; several assets exceed 500 KB.
- Impact: Increased LCP, transfer, memory usage, and mobile decode time.
- Recommended fix: Produce responsive AVIF/WebP variants, preserve PNG only where transparency/detail requires it, set dimensions and `sizes`, and verify visual fidelity.
- Risk level: High.

## 12. Third-Party Script Problems

- Priority: P1
- File path: `src/app/layout.tsx`, `src/components/CalendlyWidget.tsx`, tracking components.
- Component or route: Global analytics, advertising, chat, trust, and scheduling.
- Problem: Too many third-party systems are global, GTM is duplicated, and GA may be initialized through multiple paths.
- Evidence from repository:
  - Two GTM script blocks with the same ID.
  - Direct GA4 loading/configuration.
  - Google Ads configuration.
  - Meta Pixel after interactive.
  - Microsoft Clarity after interactive.
  - Hotjar after interactive.
  - LinkedIn Insight after interactive.
  - Trustpilot invitation and widget bootstrap.
  - Tidio chat.
  - Global preconnects to origins not needed by every route, including Calendly.
- Impact: Duplicate data, CPU/network contention, INP risk, consent/privacy obligations, and difficult CSP enforcement.
- Recommended fix: Build a single consent-aware third-party loader, choose GTM or direct integrations deliberately, deduplicate events, route-scope widgets, and delay nonessential scripts until consent or intent.
- Risk level: High.

## 13. Client vs Server Component Problems

- Priority: P1
- File path: 109 client files, especially full pages and global components.
- Component or route: Site-wide rendering architecture.
- Problem: Client boundaries are much broader than the actual interactive surface.
- Evidence from repository: 109 `"use client"` files; 324 state hooks and 68 effects; legal and marketing pages are client components; Footer and Navbar are client components; several shared static templates are client-rendered because animation or minor interaction exists inside them.
- Impact: Hydration overhead, larger JS, lower INP, slower compilation, and harder metadata composition.
- Recommended fix:
  - Keep route pages/layouts server-side.
  - Move forms, carousels, menus, calculators, audio controls, and modals into small client islands.
  - Pass serializable data from server parents.
  - Use CSS for simple reveal/hover effects where appropriate.
  - Dynamically import heavy intent-driven tools such as jsPDF and audio/calculator interfaces.
- Risk level: High.

Likely server-component candidates include static sections of the homepage, Footer, legal/policy content, Services, About narrative, process content, case-study copy, product copy, industry pages, headings, cards, metadata/schema generation, and noninteractive resource content.

## 14. Form / EmailJS / HubSpot Architecture Problems

### Duplicate browser EmailJS and backend submission paths

- Priority: P1
- File path: `src/app/contact/page.tsx`, `src/app/demo/page.tsx`, `src/app/schedule/page.tsx`, `src/app/internship/page.tsx`, `src/app/start-project/page.tsx`, `src/app/partner-program/page.tsx`, related components and API routes.
- Component or route: Lead and application forms.
- Problem: Pages send via EmailJS in the browser and separately attempt backend synchronization.
- Evidence from repository: EmailJS constants and `emailjs.send` are duplicated across routes; API failures are sometimes caught and logged as warnings after browser email succeeds.
- Impact: Duplicate/inconsistent delivery, bypassed server validation, hard-to-debug failures, exposed service configuration, and inconsistent analytics/consent records.
- Recommended fix: Submit once to a server-owned lead endpoint; let the server perform validation, email notification, CRM synchronization, deduplication, and logging.
- Risk level: High.

### HubSpot server code is structurally safer but unreachable in static export

- Priority: P0
- File path: `src/lib/server/hubspot.ts`, `src/lib/server/leadDelivery.ts`, `src/lib/server/leadProcessor.ts`, API routes.
- Component or route: CRM delivery.
- Problem: Server-only token handling and validation exist, but the chosen deployment cannot execute them.
- Evidence from repository: `server-only` import, environment-owned HubSpot token, `cache: 'no-store'`, timeout controls, contact/deal processing; static export prevents Node route execution.
- Impact: Correct server logic may never run in production.
- Recommended fix: Deploy it on a supported server/serverless runtime or move it to a separate backend.
- Risk level: Critical.

### HubSpot integration UI handles secrets in the browser

- Priority: P0/P1
- File path: `src/app/hubspot-integration/page.tsx`
- Component or route: `/hubspot-integration`
- Problem: Client ID, client secret, private app token, and webhook-secret-like data are entered/generated/stored/displayed client-side.
- Evidence from repository: Secret/token state fields, browser persistence, copy/regenerate UI, and a hardcoded secret-like initial value `[REDACTED]`.
- Impact: No meaningful secret protection; visitors can inspect or modify configuration.
- Recommended fix: Remove from the public site and manage integrations through authenticated server-side administration and secret storage.
- Risk level: Critical if treated as real configuration; high if currently a mock.

## 15. Static Export / API Route / Deployment Architecture Findings

- Priority: P0
- File path: `next.config.mjs`, `public/.htaccess`, `src/app/api/leads/**/route.ts`, `scripts/*`, form clients.
- Component or route: Build, hosting, routing, forms, and CRM.
- Problem: The repository mixes a static-hosting architecture with Node runtime APIs.
- Evidence from repository:
  - `output: 'export'`.
  - `trailingSlash: true`.
  - Apache static rewrite/cache configuration.
  - Node runtime POST route handlers.
  - Client fetches to same-origin `/api/leads`.
  - Existing export consists of HTML/static assets.
- Impact: Forms and CRM endpoints are not part of the deployed static site. Caching/redirect behavior and application runtime assumptions are inconsistent.
- Recommended fix: Document and implement one target:
  1. Next.js server/serverless hosting with working route handlers and response headers; or
  2. Static export plus a separate API origin, explicit environment-specific endpoint configuration, CORS, rate limiting, monitoring, and failure handling.
- Risk level: Critical.

Static rendering remains appropriate for most marketing, service, industry, product, blog, case-study, podcast, legal, and internship content. SSR is not currently required for that content. ISR is unavailable in a pure static export. Dynamic datasets already use static parameters, but sitemap generation must cover the generated results accurately.

## 16. Potentially Unused Dependencies

### Strong evidence

| Dependency | Evidence | Recommendation |
|---|---|---|
| `clsx` | No source/config reference found beyond `package.json` | Verify and remove in approved cleanup |
| `tailwind-merge` | No source/config reference found beyond `package.json` | Verify and remove in approved cleanup |
| `@next/third-parties` | Referenced only by inactive-looking `src/layouts/Layout.jsx` | Remove if legacy layout is confirmed unused, or align with Next 15 |

### Conditional evidence

| Dependency | Evidence | Recommendation |
|---|---|---|
| `autoprefixer` | Installed, but active PostCSS config only loads `@tailwindcss/postcss` | Confirm generated browser support before removal |
| `sharp` | Normal runtime image optimization is disabled and output is static | Keep only if an external/future image build step requires it |

- Priority: P2
- File path: `package.json`, `package-lock.json`, referenced legacy files.
- Component or route: Dependency graph.
- Problem: Unused or ineffective dependencies add install/module overhead and version ambiguity.
- Evidence from repository: Reference searches above.
- Impact: Larger dependency surface and maintenance cost.
- Recommended fix: Remove only after isolated verification and regression testing.
- Risk level: Medium.

## 17. Broken Internal Links

- Priority: P2
- File path: Internal link usage across `src/app` and `src/components`; redirects in `public/.htaccess`.
- Component or route: Site-wide navigation and content links.
- Problem: No strong evidence of widespread missing literal internal route targets was found during the completed audit, but route ownership and redirect consistency remain risks.
- Evidence from repository: Literal internal href comparison did not identify clear unmatched static route targets. Apache redirects cover several restructured solution/case-study URLs. Dynamic links and datasets were not proven broken from literal matching.
- Impact: Current literal links appear broadly aligned, but broken links can still occur through dynamic data, stale redirect destinations, deployment differences, or sitemap-only URLs.
- Recommended fix: After implementation, run a rendered static-export link crawl and verify every redirect target, canonical, sitemap URL, dynamic dataset link, asset link, and external destination.
- Risk level: Low based on current evidence; medium if routes are consolidated or renamed.

Known URL architecture concerns, rather than confirmed broken literal links:

- `/search` is referenced by WebSite schema but no search route exists.
- Sitemap code includes questionable parent URLs such as `/global`, `/solutions/fintech`, and `/solutions/industry` relative to the actual dynamic/nested architecture.
- Redirect and canonical trailing-slash conventions should be made consistent.

## 18. Metadata / Canonical / Sitemap / Schema Problems

### Metadata duplication

- Priority: P1
- File path: `src/app/layout.tsx` and routes without metadata wrappers.
- Component or route: Demo, schedule, internship, and many client routes.
- Problem: Root homepage metadata is inherited by unrelated pages.
- Evidence from repository: Existing exported HTML confirms homepage title on demo, schedule, and internship.
- Impact: Duplicate snippets and weak targeting.
- Recommended fix: Add unique server metadata for every indexable route.
- Risk level: High.

### Canonical duplication and normalization mismatch

- Priority: P2
- File path: `src/components/seo/CanonicalTag.tsx`, `src/components/CanonicalLink.tsx`, route metadata files, `next.config.mjs`
- Component or route: All routes.
- Problem: Two client canonical components overlap metadata canonicals; client canonicals remove trailing slashes while hosting enforces them.
- Evidence from repository: Both components use `usePathname`; selected layouts separately define `alternates.canonical`; `trailingSlash: true` is configured.
- Impact: Maintenance drift and inconsistent URL signals.
- Recommended fix: Use Next.js server metadata as the single canonical source with a consistent trailing-slash policy.
- Risk level: Medium.

### Sitemap/robots duplication

- Priority: P1
- File path: `src/app/sitemap.ts`, `public/sitemap.xml`, `src/app/robots.ts`, `public/robots.txt`
- Component or route: Crawl controls.
- Problem: Two sources exist for each artifact and disagree.
- Evidence from repository: 319 export routes versus 78 sitemap paths; robots disallow lists differ.
- Impact: Unpredictable output and incomplete indexing control.
- Recommended fix: Keep one generated implementation for each and derive it from the route/content inventory.
- Risk level: High.

### Duplicate and conflicting structured data

- Priority: P1
- File path: `src/app/layout.tsx` and page-level schema blocks.
- Component or route: Site-wide schema.
- Problem: Organization and LocalBusiness are emitted multiple times; LocalBusiness address data conflicts; missing image and nonexistent search action are referenced.
- Evidence from repository: One LocalBusiness uses Sudama Nagar/452009; another uses Vijay Nagar/452010. `/og-image.jpg` is absent. WebSite schema targets `/search`, which has no route.
- Impact: Invalid/conflicting rich-result signals and reduced trust in structured data.
- Recommended fix: Create one authoritative Organization/LocalBusiness graph with verified address/contact data, valid assets, stable IDs, and only real actions. Add page-specific Service, SoftwareApplication, FAQ, Article, Breadcrumb, Podcast, and other schema only where supported by visible content.
- Risk level: High.

## 19. Exact Files Requiring Modification

Core architecture, configuration, metadata, security, performance, and UI files identified by the audit:

```text
package.json
package-lock.json
next.config.mjs
public/.htaccess
public/robots.txt
public/sitemap.xml
src/app/layout.tsx
src/app/globals.css
src/app/robots.ts
src/app/sitemap.ts
src/components/seo/CanonicalTag.tsx
src/components/CanonicalLink.tsx
src/components/GlobalClientComponents.tsx
src/components/Navbar.tsx
src/components/MobileMenu.tsx
src/components/Footer.tsx
src/components/AwardBanner.tsx
src/components/Breadcrumbs.tsx
src/components/analytics/RetargetingTracker.tsx
src/components/UTMTracker.tsx
src/components/LeadCaptureForm.tsx
src/components/InternshipProgramClient.tsx
src/components/CalendlyWidget.tsx
src/components/ResourceCard.tsx
src/components/NicheServicePage.tsx
src/components/ClientLogosSection.tsx
src/components/testimonials/TestimonialCard.tsx
src/components/case-studies/CaseStudyCard.tsx
src/components/case-studies/ProjectScreenshots.tsx
src/components/tools/AIAutomationROICalculator.tsx
src/components/tools/SoftwareOutsourcingVendorScorecard.tsx
src/app/page.tsx
src/app/about/page.tsx
src/app/demo/page.tsx
src/app/schedule/page.tsx
src/app/contact/page.tsx
src/app/internship/page.tsx
src/app/services/page.tsx
src/app/solutions/page.tsx
src/app/products/page.tsx
src/app/case-studies/page.tsx
src/app/case-studies/[slug]/page.tsx
src/app/methodology/page.tsx
src/app/start-project/page.tsx
src/app/partner-program/page.tsx
src/app/affiliate-program/page.tsx
src/app/analytics-dashboard/page.tsx
src/app/analytics-debugger/page.tsx
src/app/backlink-monitor/page.tsx
src/app/competitor-monitor/page.tsx
src/app/heatmaps-debugger/page.tsx
src/app/hubspot-integration/page.tsx
src/app/industry-events/page.tsx
src/app/lead-source-reports/page.tsx
src/app/networking-organizations/page.tsx
src/app/referral-agency-partnerships/page.tsx
src/app/seo-keyword-tracker/page.tsx
src/app/white-label-partnership/page.tsx
src/app/api/leads/route.ts
src/app/api/leads/ai-roi/route.ts
src/app/api/leads/saas-checklist/route.ts
src/app/api/leads/vendor-scorecard/route.ts
src/lib/server/hubspot.ts
src/lib/server/leadDelivery.ts
src/lib/server/leadProcessor.ts
public/images/case-studies/playgroundx-lobby.png
public/podcast/podcast-cover.jpg
public/images/crm_dashboard_mockup.png
public/images/development-process.png
public/images/pgx_gateway_mockup.png
public/images/case-studies/crm-dashboard.png
public/images/case-studies/turf-calendar.png
public/images/case-studies/pgx-dashboard.png
public/images/case-studies/crm-analytics.png
public/images/healthsakhi_app_mockup.png
```

Additional route metadata wrappers are required for every indexable client route currently inheriting root metadata.

Legacy files that should only be removed or archived after confirming they are unused:

```text
vite.config.js
index.html
src/layouts/Layout.jsx
src/assets/react.svg
public/vite.svg
test-import.ts
```

A valid social image is also required at the final selected path, currently expected as:

```text
public/og-image.jpg
```

## 20. Recommended Implementation Order

### Phase 1 — Security and deployment decision

1. Remove/isolate client-side admin behavior.
2. Inventory and rotate credentials.
3. Decide static export versus server/serverless deployment.
4. Establish authenticated administration and reliable form endpoints.
5. Add submission abuse controls.

### Phase 2 — Critical runtime defects

1. Remove duplicate GTM and redundant GA initialization.
2. Correct broken form/API delivery.
3. Remove browser-managed integration secrets.
4. Correct missing OG asset and conflicting global schema.

### Phase 3 — Global performance

1. Reduce third-party scripts.
2. Convert static global/page content to server components.
3. Split the demo and large dashboard routes.
4. Optimize oversized assets and LCP behavior.
5. Reduce font and animation cost.

### Phase 4 — Technical SEO

1. Add unique route metadata.
2. Consolidate canonicals.
3. Generate one sitemap and robots file.
4. Define index/noindex intent.
5. Correct schema and encoding defects.

### Phase 5 — Forms and CRM

1. Centralize submissions.
2. Enforce validation and consent.
3. Add rate limiting, bot protection, size limits, and monitoring.
4. Make email and CRM delivery server-owned and observable.

### Phase 6 — Content, accessibility, and conversion

1. Simplify service/solution/product taxonomy.
2. Reduce duplicated process and marketing content.
3. Clarify CTA hierarchy.
4. Strengthen evidence and trust signals.
5. Perform keyboard, contrast, motion, readability, and responsive testing.

### Phase 7 — Toolchain and cleanup

1. Align framework versions.
2. Remove verified unused packages and legacy files.
3. Restore linting/quality gates.
4. Run bundle, vulnerability, production, and regression analysis.

## 21. Risk Assessment

### Deployment risk

- Risk level: Critical.
- Changing static export to Node/serverless affects hosting, build/start commands, redirects, trailing slashes, caching, environment variables, API availability, and monitoring.
- Keeping static export while separating APIs introduces CORS, endpoint configuration, deployment coordination, and external failure modes.

### Authentication and data risk

- Risk level: Critical.
- Replacing local client admin behavior changes sessions, roles, authorization, persistence, audit logs, and existing browser-held data.
- Existing local records must not automatically be treated as trustworthy production data.

### Credential rotation risk

- Risk level: High.
- Rotating EmailJS, HubSpot, analytics, webhook, or integration credentials can temporarily stop email, CRM sync, analytics, or webhooks.

### Analytics risk

- Risk level: High.
- Removing duplicate GTM/GA can change session, page-view, conversion, retargeting, and attribution numbers. Current data may already be duplicated.

### CSP and security-header risk

- Risk level: High.
- Strict CSP can break GTM, GA, Meta, Clarity, Hotjar, LinkedIn, Trustpilot, Tidio, Calendly, YouTube, and inline scripts unless introduced in report-only mode and tuned.

### Server-component refactor risk

- Risk level: High.
- Converting pages can break `window`, `document`, storage, hooks, event handlers, Framer Motion, EmailJS, jsPDF, and other browser-only behavior unless isolated into explicit client islands.

### Image optimization risk

- Risk level: Medium.
- Format/crop changes can affect transparency, screenshot readability, static paths, visual quality, layout, LCP selection, and caches.

### SEO migration risk

- Risk level: High.
- Canonical, sitemap, metadata, redirects, and noindex changes can cause temporary indexing/ranking fluctuations or accidental route loss.

### UI and conversion risk

- Risk level: Medium.
- Simplifying overlays, chat, banners, and CTAs may change conversion volume and must be measured with corrected analytics.

### Dependency/legacy cleanup risk

- Risk level: Medium.
- Apparently unused packages or Vite files may still be referenced by undocumented external deployment processes.

### Content consolidation risk

- Risk level: Medium.
- Consolidating overlapping pages can affect keyword coverage and internal links; valuable intent must be preserved.

## Recommended Safe Optimization Phases

### Phase 1 — Security & deployment architecture

- Resolve client-side authentication, secret handling, API hosting, data ownership, and the static-export/server decision.

### Phase 2 — Critical bugs and duplicate scripts

- Correct form delivery, duplicate GTM/analytics initialization, invalid global schema, missing social assets, and other verified defects.

### Phase 3 — Speed / Core Web Vitals

- Reduce global scripts and shared client JavaScript, optimize LCP images, prevent CLS, improve INP, compress assets, and reduce animation/font cost.

### Phase 4 — Technical SEO

- Implement unique metadata, consolidated canonicals, accurate sitemap/robots, explicit index intent, validated schema, and correct encoding.

### Phase 5 — Server/Client component optimization

- Convert static content to server components and isolate menus, forms, calculators, media controls, and dashboards as small client islands.

### Phase 6 — Forms / CRM / Email architecture

- Centralize server validation, consent, email, CRM synchronization, deduplication, rate limiting, bot control, logging, and monitoring.

### Phase 7 — Content & UI/Layout improvements

- Simplify taxonomy and CTAs, reduce duplication, improve evidence, responsive readability, navigation, accessibility, and conversion flow.

### Phase 8 — Production build and regression testing

- Run approved dependency/security checks, production build analysis, bundle inspection, link/schema validation, responsive/keyboard testing, Lighthouse/Web Vitals measurement, form/CRM tests, and deployment rollback verification.
