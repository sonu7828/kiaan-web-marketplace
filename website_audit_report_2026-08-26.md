    # Kiaan Technology Website Audit Report
    **Date:** August 26, 2026  
    **Auditor:** Senior Website Developer (AI Pair Partner)  
    **Status:** Audit Completed  

    ---

    ## Executive Summary
    This document provides a deep, file-by-file technical audit of the Kiaan Technology website codebase. The audit is structured around four major optimization vectors: **Website Speed/Performance**, **SEO**, **Security**, and **Page Content/Layout**, followed by architectural findings and a risk assessment. 

    ---

    ## 1. Project Architecture Summary

    * **Frontend Framework:** Next.js `15.1.7` (React `19.0.0` App Router).
    * **Styling System:** Tailwind CSS `4.0.0` compiling via PostCSS (`@tailwindcss/postcss`). Custom theme utilities are defined globally in [`src/app/globals.css`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/globals.css).
    * **Routing System:** File-based App Router with trailing slashes enabled.
    * **Build Target:** Static HTML exports (`output: 'export'` in [`next.config.mjs`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/next.config.mjs)).
    * **Integrations:** Direct API calls to EmailJS (REST & Browser SDK) and HubSpot CRM v3.
    * **Legacy leftovers:** The project contains active folders/files from the original Vite setup (such as [`vite.config.js`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/vite.config.js), `index.html`, and a `dist/` folder) which are not used in production and should be pruned.

    ---

    ## 2. Speed & Performance Audit (Critical Problems)

    ### **[P0] Disabled Image Optimization (`unoptimized: true`) on Static Export**
    * **FILE:** [`next.config.mjs`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/next.config.mjs) (Line 18)
    * **COMPONENT:** Next.js native `next/image` handling.
    * **PROBLEM:** Image optimization is turned off globally because static exports (`output: 'export'`) do not support Next's default runtime optimization server. Raw heavy PNG/JPG assets are served in full resolution and size without optimization or modern formats (WebP/AVIF).
    * **IMPACT:** Severe LCP (Largest Contentful Paint) penalty and page load drag on mobile/desktop.
    * **RECOMMENDED FIX:** Keep `unoptimized: true` but run a build script to pre-compress all local images in `/public` to next-gen formats (WebP/AVIF), or use an external image CDN (like Cloudinary or Imgix).

    ### **[P1] Double Google Tag Manager (GTM) Script Execution**
    * **FILE:** [`src/app/layout.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/layout.tsx) (Lines 76–88 and 175–187)
    * **COMPONENT:** RootLayout template.
    * **PROBLEM:** The identical Google Tag Manager script tag (`id="gtm-script"`, Container ID: `GTM-WCMW8NVC`) is declared twice inside the layout: once using `strategy="lazyOnload"` and once with `strategy="afterInteractive"`.
    * **IMPACT:** Double-triggers page views (skewing marketing analytics) and loads the GTM script twice, causing CPU thread blocking.
    * **RECOMMENDED FIX:** Delete the first GTM block on lines 76–88 and maintain only the `afterInteractive` script.

    ### **[P1] Overuse of Client-Side Rendering ("use client" on pages)**
    * **FILE:** [`src/app/page.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/page.tsx) (Line 1), [`src/app/products/page.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/products/page.tsx) (Line 1), and almost all main routes.
    * **COMPONENT:** Page routing files.
    * **PROBLEM:** Placing `"use client"` at the very top of page components forces the entire page tree to compile into client-side JS bundles.
    * **IMPACT:** Bloats initial JavaScript bundle size, blocks the main thread during hydration, and renders the content client-side, negating SSR benefit.
    * **RECOMMENDED FIX:** Refactor pages to be Server Components by default, moving client-specific logic (forms, toggle states, carousels) into leaf-node client components.

    ### **[P1] Bloated Third-Party Script loading**
    * **FILE:** [`src/app/layout.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/layout.tsx)
    * **PROBLEM:** 10+ third-party trackers and widgets (GTM, GA4, Trustpilot, Facebook Pixel, MS Clarity, Hotjar, LinkedIn Insight, Tidio Chat) are loaded eagerly or immediately after interaction.
    * **IMPACT:** Heavy Total Blocking Time (TBT) and CPU thread lock, degrading Lighthouse speed score.
    * **RECOMMENDED FIX:** Delay non-critical tracking tools (such as Hotjar or Clarity) until the user scrolls, or bundle them under a single container manager.

    ---

    ## 3. SEO Audit

    ### **[P0] Trailing Slash / Canonical Link URL Mismatch**
    * **FILE:** [`src/components/seo/CanonicalTag.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/components/seo/CanonicalTag.tsx) (Line 8) and [`src/components/CanonicalLink.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/components/CanonicalLink.tsx) (Line 8).
    * **ISSUE:** `next.config.mjs` has `trailingSlash: true` active (forcing folders like `/about/`). However, the canonical link generator explicitly strips trailing slashes (linking to `/about`).
    * **IMPACT:** Self-referential canonical mismatch. Crawlers detect that the page `/about/` claims its canonical URL is `/about`, which redirects back to `/about/`. This creates search engine index confusion.
    * **RECOMMENDED FIX:** Update both components to match Next.js's configuration by keeping trailing slashes:
      ```typescript
      const cleanPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
      ```

    ### **[P1] Duplicate and Conflicting LocalBusiness Schemas**
    * **FILE:** [`src/app/layout.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/layout.tsx)
    * **ISSUE:** Two distinct `LocalBusiness` schemas are registered in the global layout layout tag, presenting conflicting addresses for the company:
      * Schema 1: Vijay Nagar, Indore, MP, 452010 (Lines 400-440).
      * Schema 2: Sudama Nagar, Indore, MP, 452009 (Lines 263-286).
    * **IMPACT:** Major crawl confusion for location-based search queries.
    * **RECOMMENDED FIX:** Keep only the primary corporate headquarters address and consolidate both schemas into a single location definition.

    ### **[P1] Missing Meta Tags on Key Client Pages**
    * **FILE:** [`src/app/page.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/page.tsx), [`src/app/products/page.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/products/page.tsx), etc.
    * **ISSUE:** Because these routes are labeled with `"use client"`, they cannot export static `metadata`. They omit titles and meta descriptions entirely.
    * **IMPACT:** They fallback to the generic global default title and description from `layout.tsx`, causing search engines to index duplicate metadata for completely different pages.
    * **RECOMMENDED FIX:** Convert page roots to Server Components, define the metadata schema, and import dynamic layouts as client sub-components.

    ### **[P2] Broken Footer Navigation Link**
    * **FILE:** [`src/components/Footer.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/components/Footer.tsx) (Line 102)
    * **ISSUE:** "UI/UX Product Design" redirects to `/services/ui-ux-design`, which results in a 404 (does not exist).
    * **IMPACT:** Broken internal link, harming user experience and site crawlability score.
    * **RECOMMENDED FIX:** Update URL destination to the correct endpoint: `/solutions/ui-ux`.

    ---

    ## 4. Security Audit

    ### **[P0] Hardcoded API/Authorization Tokens in Client Code**
    * **FILE:** [`src/app/zapier-integration/page.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/zapier-integration/page.tsx) (Lines 25–26)
    * **ISSUE:** The file contains a hardcoded developer API authorization key:
      ```typescript
      devToken: 'zk_live_9752100980_automation'
      ```
    * **IMPACT:** Because this is a client component, this key is bundled directly into the browser JS bundle, exposing it to any user inspecting the site.
    * **RECOMMENDED FIX:** Move this key into `.env.local` and perform token validations through a server-only API route.

    ### **[P1] Duplicate REST Calls & Exposed EmailJS Keys on the Client**
    * **FILE:** [`src/app/contact/page.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/contact/page.tsx) (Lines 10–12), `start-project/page.tsx` and others.
    * **ISSUE:** Forms perform dual dispatches: they send emails directly from the client using public keys, then sync to the backend.
    * **IMPACT:** Exposes public keys to the browser, facilitating potential spam attacks and duplicate email alerts.
    * **RECOMMENDED FIX:** Perform all email dispatches from server-side handlers (`/api/leads`).

    ### **[P1] Vulnerable External Anchors**
    * **FILE:** [`src/components/Footer.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/components/Footer.tsx) (Line 73) and others.
    * **ISSUE:** Links targeting external sites (`target="_blank"`) are missing the `rel="noopener noreferrer"` attribute.
    * **IMPACT:** Vulnerability to reverse tabnabbing attacks, allowing external pages to hijack the user's tab.
    * **RECOMMENDED FIX:** Append `rel="noopener noreferrer"` to all target-blank external links.

    ---

    ## 5. Page Content & Layout Audit

    ### **1. Rickroll Placeholder Video Integrations (Critical Placeholders)**
    * **Problem:** Multiple core pages showcase interactive video embeds but are hardcoded to the Rick Astley Rickroll video ID (`dQw4w9WgXcQ`).
    * **Affected Pages:**
      * **About Page:** [`src/app/about/page.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/about/page.tsx) (Line 70)
      * **Founder Intro Page:** [`src/app/founder-intro/page.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/founder-intro/page.tsx) (Line 18)
      * **Day in the Life Page:** [`src/app/day-in-the-life/page.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/day-in-the-life/page.tsx) (Line 18)
      * **Demo Arena Page:** [`src/app/demo/page.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/app/demo/page.tsx) (Lines 31, 57, 83)
      * **Video Testimonials:** [`src/data/videoTestimonials.ts`](file:///c:/Users/Kiaan technology/Desktop/kiaan-technology/kiaan website 26-08-26/src/data/videoTestimonials.ts) (Lines 24, 36, 48, 60, 72, 84)

    ### **2. Navbar Scroll Locking Glitch**
    * **Problem:** In [`src/components/Navbar.tsx`](file:///c:/Users/Kiaan%20technology/Desktop/kiaan-technology/kiaan%20website%2026-08-26/src/components/Navbar.tsx) (Lines 79-87), the navigation dropdown sets `document.body.style.overflow = 'hidden'` on hover.
    * **Impact:** Simply hovering over menu elements on desktop completely locks the page scroll. This feels extremely jarring for users.

    ### **3. Redundant Navbar Links**
    * **Problem:** "AI Automation" is linked in the main navbar row and also duplicated in the "Services" dropdown.

    ### **4. Duplicate Public Downloads**
    * **Problem:** In `/public/downloads/`, `saas-development-checklist.pdf` and `Kiaan_Technology_SaaS_Development_Checklist.pdf` are duplicate files with different names.

    ---

    ## 6. Largest Files & Assets

    These files contribute to the initial load and overall bundle weight of your website:

    1. **`dist (2)-8-25-26.zip`** (Project Root) — **17.9 MB** *(Unused file committed in workspace)*
    2. **`playgroundx-lobby.png`** (`/public/images/case-studies/`) — **735 KB** *(Uncompressed PNG)*
    3. **`podcast-cover.jpg`** (`/public/podcast/`) — **693 KB** *(Uncompressed cover image)*
    4. **`crm_dashboard_mockup.png`** (`/public/images/`) — **629 KB** *(Uncompressed PNG)*
    5. **`development-process.png`** (`/public/images/`) — **624 KB** *(Uncompressed PNG)*
    6. **`pgx_gateway_mockup.png`** (`/public/images/`) — **596 KB** *(Uncompressed PNG)*
    7. **`crm-dashboard.png`** (`/public/images/case-studies/`) — **556 KB** *(Uncompressed PNG)*
    8. **`turf-calendar.png`** (`/public/images/case-studies/`) — **552 KB** *(Uncompressed PNG)*

    ---

    ## 7. Recommended Optimization Order

    A safe, structured implementation sequence to optimize your website:

    * **Phase 1 — Critical performance:** Resolve the double GTM tag trigger in `layout.tsx`, clean up unused static assets and zip files, and fix the desktop scroll-locking hover glitch in `Navbar.tsx`.
    * **Phase 2 — Core Web Vitals:** Implement pre-compression for local images in `/public` to WebP/AVIF format and replace raw HTML `<img>` tags in components with optimized loaders.
    * **Phase 3 — Technical SEO:** Fix trailing slash canonical URL stripping in `CanonicalTag.tsx` and adjust the sitemap generator logic. Consolidate conflicting schema markups in `layout.tsx`.
    * **Phase 4 — On-page SEO/content:** Convert top-level client pages into Server Components to configure individual page `metadata` schemas. Fix the broken footer links.
    * **Phase 5 — Security hardening:** Remove hardcoded API tokens in `zapier-integration/page.tsx` and route all client form submissions purely through `/api/leads`. Apply security tags to external links.
    * **Phase 6 — UI/layout refinement:** Replace placeholder Rickroll video links with real customer recordings. Clean up duplicate files in `/public/downloads`.
    * **Phase 7 — Final regression audit:** Run production builds and test form submissions across all pages to ensure HubSpot CRM syncing operates correctly.

    ---

    ## 8. Risk Assessment

    * **Refactoring Page Roots to Server Components:**
      * *Risk:* High. Removing `"use client"` from pages means any hooks (like `useState`, `useEffect`) directly in the page file will throw compile-time errors. Stateful code must be carefully encapsulated into separate client components.
    * **Consolidating Schema Graphs:**
      * *Risk:* Low. Clean JSON-LD schemas will not impact UI rendering, only search engine crawlers.
    * **Removing Client-side EmailJS dispatches:**
      * *Risk:* Medium. Ensure the server-side lead processor handles validation, rate limiting, and response returns correctly to avoid form breaks.
    * **Changing Canonical URLs to include trailing slashes:**
      * *Risk:* Low/Medium. Temporarily impacts SEO crawling, but aligns canonical URLs with Next.js's native redirection rules.
