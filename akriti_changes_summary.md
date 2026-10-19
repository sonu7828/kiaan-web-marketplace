# Akriti Kushwaha - Code Changes Summary

Yeh file Akriti Kushwaha ke dwara kiye gaye changes ko track karne ke liye hai. Isme code files ke links, Localhost validation links, aur Live production links details ke sath shamil hain.

---

## 🚀 1. New Features & Core Pages (Naye Pages aur UI)

Aapne project me new pages add kiye hain aur analytics/consultation CTA tracker codes set kiya hai:

| Sl. No. | Feature Page / Component | Local File Link | Localhost Link (Port 3000) | Live Production Link |
| :---: | :--- | :--- | :--- | :--- |
| 1 | **Partners Page** <br>*(Partner program info page)* | [partners/page.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/app/partners/page.tsx) | [http://localhost:3000/partners](http://localhost:3000/partners) | [Live Link](https://kiaantechnology.com/partners) |
| 2 | **Referral Page** <br>*(Referrals signup & details page)* | [referral/page.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/app/referral/page.tsx) | [http://localhost:3000/referral](http://localhost:3000/referral) | [Live Link](https://kiaantechnology.com/referral) |
| 3 | **As Seen On Section** <br>*(Trust logos on landing page)* | [AsSeenOnSection.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/components/home/AsSeenOnSection.tsx) | [http://localhost:3000/](http://localhost:3000/) | [Live Link](https://kiaantechnology.com/) |
| 4 | **Retargeting Tracker** <br>*(Visitor tracking pixels script)* | [RetargetingTracker.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/components/analytics/RetargetingTracker.tsx) | *Loads in background on all pages* | *Enabled Live* |
| 5 | **Calendly Consultation CTA** <br>*(Floating sticky widget & mobile bottom bar)* | [BookConsultationCTA.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/components/BookConsultationCTA.tsx) | *Loads on scroll on pages* | *Enabled Live* |

---

## 🎨 2. UI Restructuring & Bug Fixes (Purane Pages me Updates)

Aapne layouts clean kiye hain aur UI/compilation bugs fix kiye hain:

* **Not Found Page (404 Error page design cleanup):**
  - **Code Link:** [not-found.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/app/not-found.tsx)
  - **Localhost test:** [http://localhost:3000/some-invalid-page](http://localhost:3000/some-invalid-page)
  - **Live test:** [https://kiaantechnology.com/some-invalid-page](https://kiaantechnology.com/some-invalid-page)

* **Case Studies Layout & Polish:**
  - **Grid Page Code:** [case-studies/page.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/app/case-studies/page.tsx)
  - **Slug Details Page Code:** [case-studies/[slug]/page.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/app/case-studies/[slug]/page.tsx)
  - **Card UI Component:** [CaseStudyCard.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/components/case-studies/CaseStudyCard.tsx)
  - **Localhost URL:** [http://localhost:3000/case-studies](http://localhost:3000/case-studies)
  - **Live URL:** [https://kiaantechnology.com/case-studies](https://kiaantechnology.com/case-studies)

* **Common Layout & Footer logo fix:**
  - **Layout Code:** [layout.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/app/layout.tsx)
  - **Footer Component:** [Footer.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/components/Footer.tsx)

* **Blog Detail JSON-LD FAQ Schema & Blog Post Expansion:**
  - **Layout Code:** [blog/[slug]/page.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/app/blog/[slug]/page.tsx)
  - **Data Code:** [blogData.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/blogData.ts)
  - **Description:** Added structured JSON-LD FAQ schema for SEO optimizations on the "Questions to Ask Before Hiring a Software Company" blog post, and expanded/fully detailed the 25-point checklist article.
  - **Localhost URL:** [http://localhost:3000/blog/questions-to-ask-before-hiring-a-software-company](http://localhost:3000/blog/questions-to-ask-before-hiring-a-software-company)
  - **Live URL:** [https://kiaantechnology.com/blog/questions-to-ask-before-hiring-a-software-company](https://kiaantechnology.com/blog/questions-to-ask-before-hiring-a-software-company)

* **EmailJS Compilation Fixes on Form Pages:**
  - **Internship Code:** [internship/page.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/app/internship/page.tsx)
  - **Start Project Code:** [start-project/page.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/app/start-project/page.tsx)
  - **Description:** Fixed React/Next.js compilation errors due to missing EmailJS service, template, and public key variables.
  - **Localhost test:** [http://localhost:3000/internship](http://localhost:3000/internship) and [http://localhost:3000/start-project](http://localhost:3000/start-project)

---

## ⚡ 3. Image Optimization (Converting to WebP)

Lighthouse score improve karne ke liye, heavy `.png`/`.jpg` files ko remove karke optimized `.webp` formats use kiya:

* **Files Modified/Replaced:**
  * Certificates & Ambitionbox/Glassdoor logos are updated inside [public/frontPage/](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/public/frontPage) and [public/images/](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/public/images).
  * References are updated in:
    * [AwardBanner.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/components/AwardBanner.tsx)
    * [AwardMarquee.tsx](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/components/home/AwardMarquee.tsx)

---

## 📂 4. Marketing Campaign & Workflow Data Configs

Aapne features ko handle karne ke liye static constants/configs file define kiye hain:

* **Files Added:**
  * [g2ReviewCampaign.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/g2ReviewCampaign.ts) (G2 review setup data)
  * [referralProgramData.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/referralProgramData.ts) (Referral configurations)
  * [newsletterSponsorship.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/newsletterSponsorship.ts) (Newsletter settings)
  * [coreHoursConfig.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/coreHoursConfig.ts) (Operational timing constants)
  * [podcastGuesting.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/podcastGuesting.ts)
  * [emailNurtureSequence.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/emailNurtureSequence.ts)
  * [timeTrackingConfig.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/timeTrackingConfig.ts)
  * [projectStatusReportConfig.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/projectStatusReportConfig.ts)
  * [asyncStandupConfig.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/asyncStandupConfig.ts)
  * [awsPartnerApplication.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/awsPartnerApplication.ts)
  * [gcpPartnerApplication.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/gcpPartnerApplication.ts) (GCP Partner Program setup data)
  * [msPartnerApplication.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/msPartnerApplication.ts) (Microsoft Partner Program setup data)
  * [competitorBacklinkStrategy.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/competitorBacklinkStrategy.ts)
  * [contentFreshness.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/contentFreshness.ts)
  * [githubBranchProtectionConfig.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/githubBranchProtectionConfig.ts)
  * [infographicsOutreach.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/infographicsOutreach.ts)
  * [partnerProgramData.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/partnerProgramData.ts)
  * [retargetingCampaigns.ts](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/src/data/retargetingCampaigns.ts)

---

## 🛠️ 5. Repository & SEO/Verification Configuration

PR guidelines aur site search integrations/verification ko config karne ke liye files add kiye:
* **CODEOWNERS:** [`.github/CODEOWNERS`](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/.github/CODEOWNERS)
* **PR Template:** [`.github/PULL_REQUEST_TEMPLATE.md`](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/.github/PULL_REQUEST_TEMPLATE.md)
* **Bing Site Verification XML:** [`BingSiteAuth.xml`](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/BingSiteAuth.xml) (Bing Webmaster search crawler authentication)
* **Google Site Verification HTML:** [`googledc7bba9d9f700074.html`](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/googledc7bba9d9f700074.html) (Google Search Console search engine crawler authorization)
* **Index HTML & Layout references:** Updated search console scripts in [`index.html`](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/index.html) and layout configurations.

---

## 📦 6. Build & Deployment Optimization (Static Export for Hostinger)

Project ko Hostinger pe deploy karne ke liye aur static `out/` folder format me build karne ke liye Next.js configuration ko update kiya:
* **Next.js Static Export Config:** [next.config.mjs](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/next.config.mjs)
  * Added `output: 'export'` to generate fully optimized static HTML pages under `out/` directory, resolving server-side build issues on shared hosting.
* **Podcast RSS Feed LastBuildDate Update:** [public/podcast/rss.xml](file:///d:/Kiaan%20Work/kiaan%20project/Kiaan_Project/public/podcast/rss.xml)
  * Updated recent build compilation metadata.

---

## 📅 7. Timeline of Work (Day-wise Activity Log)

Aapne jin dates pe jo major tasks perform kiye hain, unka summary overview niche diya gaya hai:

* **July 28, 2026 (Day 1):**
  * **SEO integration:** Google Search Console aur Bing Webmaster tools ke validation setup files (`googledc7bba9d9f700074.html`, `BingSiteAuth.xml`) add kiye aur tracking reference check setup kiya.
* **July 30, 2026 (Day 2):**
  * **New features:** Core pages (Partners Page & Referral Page) ke routes and layouts setup kiye.
  * **Homepage updates:** 'As Seen On' section aur retargeting tracking tools set kiye.
  * **UI Restructuring & Bug Fixes:** 404 error template cleanup, case-studies list aur details slug path cleanups, and footer branding adjustments.
  * **Performance Optimizations:** Core banners aur partner logos ko PNG/JPG format se optimized `.webp` me convert aur link kiya.
  * **Marketing configurations:** Multi-module marketing configurations data files define aur link kiye.
* **July 31, 2026 (Day 3):**
  * **Calendly CTA:** Popup Calendly consultation scheduling floating widget & mobile responsive CTA design create/integrate kiya.
  * **Blog post upgrade:** "Questions to Ask Before Hiring" post content detail 25-point checklist structure complete kiya, and search ranking improvement ke liye JSON-LD FAQ schema integration page configure kiya.
  * **Compilation fixes:** Internship aur Start-Project page ki compile configurations and validation error keys adjust kiye.
  * **Build pipeline settings:** Hostinger static file generation fix (`output: 'export'`) update kiya.
