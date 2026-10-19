# KIAAN MARKETPLACE — VISUAL DESIGN & UI/UX MASTER MEMORY

**Company:** Kiaan Technology  
**Purpose:** UI/UX Design System, Visual Standards, Theme Guidelines and Layout Specifications for `/marketplace`  
**Companion Document:** `MarketPlace-Archietecture.md`  
**Status:** Approved Design Memory (No code modifications without explicit approval)

---

## 1. CORE VISUAL THEME & DESIGN TOKENS

The visual identity of Kiaan Marketplace is engineered to convey **high-end enterprise software engineering, stability, and premium software commerce**, completely distinct from generic template sites.

### 🎨 Color Palette & Surfaces
| Token / Layer | Hex Value | Purpose / Application |
| :--- | :--- | :--- |
| **Primary Background** | `#121316` to `#16181D` | Soft graphite/charcoal base. Warmer, more sophisticated and comfortable on the eyes than pitch black (`#000000`). |
| **Card / Surface (Base)** | `#1C1F26` | Deep slate-gray for product cards, sidebar containers, and module panels. |
| **Surface (Elevated / Hover)**| `#222630` | Lighter charcoal for card hover states, dropdown menus, and active modal dialogs. |
| **Card Borders & Dividers** | `#2D323E` (or `rgba(255,255,255,0.08)`) | 1px subtle, refined borders providing clean separation without high-contrast harsh lines. |
| **Primary Accent & CTAs** | `#EAB308` (Warm Architectural Gold) | High-contrast call-to-action buttons (`Get License`, `Request Code`), active category chips, and key price highlights. |
| **Accent Glow / Subtle Aura** | `rgba(234, 179, 8, 0.12)` | Subtle atmospheric glow behind primary CTA buttons and featured badges. |
| **Primary Typography** | `#F8FAFC` (Slate 50) | High-contrast readability for software headings, prices, and modal titles. |
| **Secondary Typography** | `#94A3B8` (Slate 400) | Technical specifications, feature descriptions, and secondary metadata. |
| **Muted Metadata** | `#64748B` (Slate 500) | Framework tags, license terms fine print, and timestamps. |

### 🚫 Strict Visual Guardrails:
- **No Pitch / Pure Black (#000000)** as the dominant flat background. Use layered graphite and charcoal.
- **No Neon Colors**: No radioactive greens, cyan neons, or jarring pinks.
- **No Random Bright Backgrounds**: Maintain consistent dark-graphite enterprise ambiance.
- **No Cluttered Grids**: Enforce comfortable, breathable spacing (24px to 32px padding).

---

## 2. NAVBAR INTEGRATION SPECIFICATION

The Marketplace entry will be exposed in the shared header (`src/components/Navbar.tsx`) with zero regression to existing navigation items:

### Position in Header:
```
[ KIAAN TECHNOLOGY ]   Home   Products   Marketplace ✦   Demo Arena   Services   Blog ...   [ Start Project ]
```
- **Location**: Positioned immediately adjacent to `Products` and `Demo Arena`.
- **Default State**: Clean muted slate text (`#94A3B8`), consistent with other top-level links.
- **Hover / Active State**: Smooth transition to Warm Gold (`#EAB308`) with a subtle bottom underline indicator.
- **Visual Badge**: A refined micro-pill tag `✦ NEW` or subtle gold dot indicator (`#EAB308`) to attract high-intent visitors without visual noise.

---

## 3. STOREFRONT CATALOG UI (`/marketplace`)

The storefront serves as the high-converting software showroom modeled on CodeCanyon's best conversion patterns.

### A. Hero & Search Toolbar:
- **Headline**: High-impact enterprise statement: *"Production-Ready Enterprise Software & Source Code Packages"*.
- **Sub-headline**: *"Architected, tested, and distributed directly by Kiaan Technology engineers."*
- **Live Search Bar**: Centralized input with instantaneous client-side keyword filtering.
- **Category Filter Pills**: Quick filter tags (`All Software`, `Property & Real Estate`, `Healthcare & ERP`, `Fintech & Banking`, `Logistics & Fleet`, `HRM & Payroll`) with warm gold active borders.

### B. Product Card Architecture:
Every software product card features:
1. **Aspect Ratio Thumbnail (16:10)**: Clean, high-resolution screenshot of the actual software dashboard with smooth hover zoom (1.02x scale).
2. **Deliverables Badge (Top Right of Image)**:
   - `Full-Stack Source Code` (Gold border + dark badge)
   - `Frontend Web Application` (Slate border + dark badge)
3. **Tech Stack Chips**: Muted pill badges showing actual verified frameworks (e.g. `React`, `Node.js`, `MySQL`, `MongoDB`).
4. **Product Title & One-Line Value Prop**: Crisp typography emphasizing the target industry.
5. **Configurable Sample INR Pricing**: Bold, legible price displayed with sample placeholder flag during development (e.g. `₹24,999` for Single Production License). Real commercial pricing configured upon management sign-off.
6. **Dual Action Buttons**:
   - 🖥️ **Live Preview** (Secondary outlined button with subtle border).
   - 🛒 **Get License / Details** (Solid warm gold `#EAB308` with black bold text).

---

## 4. TWO-COLUMN PRODUCT DETAIL PAGE (`/marketplace/[slug]`)

Modeled on high-converting B2B software sales layouts with **Modular & Conditional Components** (sections render only when verified product assets exist):

### A. Left Column (70% Width — Modular Technical Showcase):
1. **Software Title, Breadcrumb & Industry Tag**.
2. **Interactive Screenshot & Walkthrough Showcase**: High-res dashboard gallery.
3. **Conditional Tabbed Architecture** (Rendered only when corresponding data is available):
   - **Tab 1: Overview & Features** *(Always Present)*: Deep breakdown of core modules and business workflows.
   - **Tab 2: Included Files Manifest** *(Conditional)*: Rendered when a verified file/folder manifest is defined.
   - **Tab 3: System Requirements** *(Conditional)*: Rendered when server specifications (PHP/Node/DB) are documented.
   - **Tab 4: Demo Video** *(Conditional)*: Rendered only when a verified YouTube/walkthrough video is provided.

### B. Right Column (30% Width — Sticky License & Order Box):
1. **Sticky Position**: Stays anchored in viewport during documentation reading.
2. **Kiaan License Tier Radio Selector (Configurable Sample Placeholders)**:
   - 🔘 **Single Production License** (Sample: `₹24,999`) — 1 live domain or end-client use. Full readable source code included.
   - 🔘 **Multi-Deployment License** (Sample: `₹49,999`) — up to 3–5 internal deployments for same legal entity.
3. **Optional Service Add-ons (Checkboxes — Configurable)**:
   - `[ ]` **Server Deployment Assistance** (Sample: +₹4,999) — Complete cloud installation on customer AWS/cPanel/VPS.
   - `[ ]` **Extended Engineering Support** (Sample: +₹6,999) — 60 days priority bug fixes and developer guidance.
4. **Dynamic Total Calculation**: Real-time price summary in INR (₹).
5. **Primary CTA**: **"Request Source Code & License"** (Solid Gold `#EAB308` button with high-contrast text).
6. **Item Metadata Table**:
   - Released Version, Last Verified Date, Frameworks, Documentation Included (Yes), **Delivery Timing: Confirmed after order verification**.

---

## 5. DUAL-MODE LIVE PREVIEW ARCHITECTURE (`/marketplace/preview/[slug]`)

Because some software domains restrict iframe embedding via `X-Frame-Options` or `Content-Security-Policy`, the preview system implements a **Dual-Mode Architecture**:

### Mode A: Iframe-Compatible Demos (Responsive Frame Bar)
- **Top Sticky Bar (Height: 56px)**:
  - Left: Kiaan Logo + Software Name + Category breadcrumb.
  - Center: **Responsive Viewport Switchers**:
    - 🖥️ **Desktop** (100% width)
    - 📱 **Tablet** (768px centered container)
    - 📲 **Mobile** (375px centered container)
  - Right:
    - External Link icon ("Open in new tab")
    - Prominent Gold CTA: **"Purchase License"**
- **Bottom Canvas**: Clean sandbox iframe rendering the live demo.

### Mode B: Frame-Restricted Demos (Direct External Fallback)
- For external domains that reject iframes, bypass the embedded container and render a clean, high-contrast direct action:
  - **"Launch Live Demo in New Window"** (Opens external sandbox with clear indicator).
  - Maintains the on-page purchase and license selection controls without broken iframe errors.

---

## 6. 5 HIGH-IMPACT ARCHITECTURAL UI ENHANCEMENTS

These five features elevate the Marketplace into a world-class enterprise portal:

1. **Interactive File Tree Manifest UI (Conditional)**:
   - When verified package manifests exist, render a VS Code-style folder tree:
     ```
     📦 hospital-erp-v2.1/
     ├── 📁 frontend/ (Next.js 15, Tailwind v4, TypeScript)
     ├── 📁 backend/ (Node.js Express REST API)
     ├── 📁 database/ (schema.sql, seeds.sql, migrations/)
     └── 📄 DEPLOYMENT-GUIDE.pdf
     ```

2. **Architecture Blueprint Modal (Optional)**:
   - A 1-click modal showing a clean architecture block diagram:
     `Client (Next.js) ➔ REST API Gateway ➔ Node.js Controllers ➔ MySQL Database`.
   - Rendered only when an architecture diagram is documented for that product.

3. **Safe & Conditional Demo Credentials**:
   - Strictly restricted to approved public demo/guest accounts (never real passwords or production tokens).
   - Displayed **only** when the live demo requires authentication to explore.

4. **Assisted Purchase Modal with Pre-filled Invoicing**:
   - Clicking "Request License" opens a focused dialog capturing Buyer Name, Business Email, WhatsApp, and Company Name.
   - Dispatches a pre-formatted, professional inquiry directly to Kiaan's Sales Architect via WhatsApp and Email.

5. **Verified Engineering Trust Seals (Non-Exaggerated)**:
   - Clean, verified trust badges:
     - 🛡️ *Verified Kiaan Technology Architecture*
     - 📄 *Formal Commercial Licensing Available*
     - ⚡ *Direct Engineering Handover & Support*


---

## 7. REFERENCE UI MOCKUPS

High-fidelity conceptual mockups have been generated and archived in the project artifact directory:
- **Storefront Catalog UI**: `marketplace_catalog_mockup_1792068339272.jpg`
- **Product Detail Two-Column UI**: `marketplace_detail_mockup_1792068363281.jpg`

*(These mockups define the visual baseline for all future `/marketplace` front-end components).*
