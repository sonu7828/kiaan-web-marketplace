# KIAAN MARKETPLACE — MASTER PROJECT MEMORY

**Company:** Kiaan Technology  
**Purpose:** Software Marketplace, Source-Code Protection, Licensing and Customer Delivery  
**Status:** Planning and inventory audit before implementation

## 1. PROJECT OBJECTIVE

Build a single-seller software marketplace where Kiaan Technology sells its own verified software products and approved source-code packages.

Customers should be able to:
- Browse software products and view available demos.
- Review actual features, technical requirements, editions and deliverables.
- Purchase an approved license.
- Receive the authorized source-code package.
- Install the application and activate it using a license key.

Keep the initial implementation simple. Start with manual purchase verification and controlled delivery. Add automation only when explicitly approved.

## 2. MASTER SOURCE-CODE STORAGE

Use the following approach:

- Maintain a separate private GitHub repository for each software product.
- Keep original source code in repositories controlled by Kiaan Technology.
- Restrict repository access to authorized team members.
- Enable two-factor authentication for accounts with source-code access.
- Maintain separate, secure backups of repositories and release packages.
- Do not invite customers to internal master repositories.
- Do not use a live demo server as the only source-code backup.
- Keep production customer data and credentials out of commercial release packages.

Example repository names:

- `kiaantechnology/society-management`
- `kiaantechnology/hospital-management`
- `kiaantechnology/hrm-payroll`

These are naming examples only. Do not create repositories or move code without explicit approval.

## 3. CUSTOMER SOURCE-CODE DELIVERY

Use this initial workflow:

1. Customer visits `/marketplace`.
2. Customer selects a product and submits a purchase inquiry.
3. Kiaan confirms the required edition, deliverables, deployment requirements and applicable license.
4. Kiaan issues an approved quotation and verifies payment.
5. Kiaan creates a unique license record and license key.
6. The coding team prepares a clean, versioned ZIP package from the approved source code.
7. The team verifies the package and removes secrets, production credentials, private keys, customer data and unnecessary internal files.
8. Kiaan provides a restricted download link or another approved delivery method.
9. The customer installs the software and activates its license.
10. Kiaan records the customer/order reference, license, package version and delivery date.

A WhatsApp inquiry is not a completed purchase. Never deliver paid source code before payment is verified.

Initially, handle purchases and deliveries manually. Do not build automated checkout, automatic downloads or a customer portal unless explicitly approved.

## 4. SOURCE-CODE PROTECTION

Use these controls:

- Private GitHub repositories for master source code.
- Restricted access for developers and administrators.
- Clean, versioned ZIP packages for customers.
- Restricted download links and controlled delivery records.
- Secret scanning and dependency-license checks before release.
- Secure backups and regular access reviews.
- Unique license records for customer purchases.
- A written license defining permitted usage and redistribution restrictions.

Important limitations:

- Private GitHub protects the repository from unauthorized access, but cannot prevent an authorized recipient from copying code.
- Removing a customer's repository access does not delete copies already downloaded.
- Restricted download links control initial access but cannot prevent copying after download.
- License keys can control application access only to the extent that the software actually enforces the checks.
- Complete source code can potentially be copied, modified or redistributed by a recipient.
- No license key, ZIP password or license server can guarantee that distributed source code will never be stolen.

Do not promise absolute code-theft prevention.

## 5. LICENSE SYSTEM

The coding team is preparing software that opens or enables licensed functionality using a license key.

Plan for the following capabilities, subject to review of the actual architecture:

- Unique license keys associated with a product and purchase.
- Product edition and permitted usage.
- Defined deployment or activation limits.
- License activation and status validation.
- Activation history and administrative controls.
- Defined reactivation, migration, revocation and recovery procedures.
- Secure license-server credentials and signing secrets.
- Appropriate handling of network outages and offline operation.
- Minimal, secure logging without exposing license secrets.

Where technically appropriate, use a Kiaan-controlled license validation server for centralized authorization.

Do not assume that every product can use the same licensing architecture. Evaluate each product's frontend, backend and deployment model first.

Do not change the existing licensing implementation until the relevant code has been inspected and the exact implementation task has been approved.

## 6. RELEASE-PACKAGING CHECKLIST

Before preparing a commercial source-code package, verify:

- [ ] The exact source repository and release version are identified.
- [ ] Kiaan has the rights to distribute the included source code commercially.
- [ ] Frontend, backend and database components are accurately identified.
- [ ] Database schemas, migrations and seeds are included when applicable.
- [ ] Installation and configuration instructions are accurate.
- [ ] `.env.example` contains placeholders, not real secrets.
- [ ] Actual `.env` secrets, API keys, passwords and private keys are excluded.
- [ ] Production credentials, private customer data and unnecessary logs are excluded.
- [ ] Third-party dependency licenses and redistribution obligations are checked.
- [ ] Demo credentials and demo data are safe for distribution.
- [ ] A clean installation and relevant build or smoke tests have been performed.
- [ ] The package contains only the files promised in the product listing.
- [ ] Release notes and package version are recorded.
- [ ] The approved license and delivery method are documented.
- [ ] The release package and master repository are backed up securely.

Never claim a product is full-stack, production-ready or commercially distributable unless the relevant facts have been verified.

## 7. MARKETPLACE SCOPE

Initial decisions:

- Seller: Kiaan Technology only.
- Currency: INR only.
- Pricing: Custom pricing for each product, approved separately.
- Storefront route: `/marketplace`.
- Product detail route: `/marketplace/[slug]`.
- Existing Demo Arena route: `/demo`.

The existing `/demo` module must remain functionally unchanged.

Keep the Marketplace as a separate module. Do not alter Demo Arena components, data, styling or behavior as part of Marketplace work.

The initial proposed product list is only a candidate list. Actual availability must be confirmed through a software inventory audit.

Do not add third-party seller accounts, commissions, payouts or multi-currency functionality to the initial version.

## 8. PRODUCT INVENTORY AUDIT

Before choosing products for launch, audit the actual authorized repositories and available source-code locations.

For each product, verify:

- Actual frontend source code.
- Actual backend source code, if included.
- Database schema, migrations and seeds, if applicable.
- Documentation and installation requirements.
- Dependencies and third-party license obligations.
- Demo availability and safe guest access.
- Packaging readiness.
- Commercial redistribution rights and ownership permissions.
- Accurate product classification and included deliverables.
- Missing files, unresolved dependencies and release blockers.

A demo website or documentation file alone does not prove that a complete source-code package exists.

Use these status labels:

- **Ready for Commercial Packaging:** Evidence supports the required source files, permissions and packaging readiness.
- **Requires Preparation:** The product exists but has specific unresolved packaging or technical requirements.
- **Not Eligible / Not Verified:** Required source code, permissions or essential evidence is missing.

Mark unknown facts as `NOT VERIFIED`. Never invent prices, sales numbers, ratings, reviews, versions, features, demo credentials, commercial rights or readiness claims.

## 9. COMMERCIAL LICENSE TERMS

All license models and legal terms remain drafts until explicitly approved by Kiaan management.

Before sale, define:

- Permitted use and deployment limits.
- Whether modification is permitted.
- Whether contractors may access the code on the customer's behalf.
- Whether the software may be used to provide services to the customer's clients.
- Restrictions on resale, redistribution and sublicensing.
- Included and excluded deliverables.
- Installation responsibility and technical requirements.
- Support scope and update policy.
- Refund and cancellation terms.
- Third-party software and dependency obligations.

A software usage license is not the same as transferring intellectual property ownership. Any IP assignment or buyout requires a separate, explicitly approved agreement.

Do not assume CodeCanyon or Envato license terms automatically apply to Kiaan Marketplace.

Do not advertise lifetime updates, unlimited support, guaranteed compatibility or other unapproved promises.

## 10. ANTIGRAVITY WORKING RULES

These rules are mandatory for all work on this project:

1. Treat this document as persistent project memory, not blanket permission to modify code.
2. Work on one explicitly requested task at a time.
3. Inspect relevant source files and evidence before proposing changes.
4. Prefer audit/report-only work when the architecture, permissions or requirements are uncertain.
5. Implement only the exact phase or task explicitly approved by the user.
6. Do not automatically proceed to the next phase after completing a task.
7. Do not modify `/demo`, its components or its data.
8. Do not modify Marketplace routes, components, navigation, footer, datasets, licensing, payment workflows, APIs, databases, authentication or business logic unless the exact changes are approved.
9. Do not perform unrelated refactoring, redesigns, dependency upgrades, broad audits or cleanup.
10. Do not deploy, modify production systems or perform live actions without explicit authorization.
11. Do not install dependencies or change unrelated files.
12. Do not guess missing information or silently expand the scope.
13. If a repository, credential, permission, commercial decision or product fact is unavailable, report it as unverified and identify the minimum information required.
14. After approved implementation, report the exact files changed, relevant build/test commands, results and remaining blockers.
15. Preserve existing functionality and design unless the user explicitly requests a change.

## 11. CURRENT NEXT STEP: PHASE 1 — MARKETPLACE UI FOUNDATION

The approved next milestone is building the **Marketplace UI Foundation** with sample/configurable data:

1. **Scope of Phase 1 (UI Foundation First)**:
   - Construct the Marketplace navigation link, storefront catalog layout (`/marketplace`), and reusable product-detail template (`/marketplace/[slug]`).
   - Use clearly marked sample/placeholder pricing (e.g. `isSamplePrice: true`). Actual product, license tier, and add-on prices will be formally approved prior to commercial launch.
   - The deep software inventory audit will occur subsequently as physical packages become ready for deployment into the UI.

2. **Core Refinements Incorporated (Approved Standards)**:
   - **Sample Pricing Only**: Do not treat initial prices as fixed commercial guarantees. All pricing elements remain configurable placeholders.
   - **Muted Trust Claims**: Avoid unverified assertions like *"100% Original Code"*. Use neutral, verified engineering badges until repository IP audits are complete.
   - **Dual-Mode Live Preview**: Support iframe responsive preview bars where technically compatible; provide direct external sandbox links for websites protected by frame restrictions (`X-Frame-Options` / CSP).
   - **Safe & Conditional Demo Credentials**: Never expose production credentials or permanent admin passwords. Display guest sandbox credentials only when explicitly required by the product.
   - **Modular & Conditional Layouts**: Make UI sections (video walkthroughs, architecture diagrams, file tree manifests, tabs) optional so products without these assets adapt cleanly without empty containers.
   - **Provisional Delivery Timelines**: Replace rigid delivery SLAs with provisional wording: *"Delivery timeline confirmed after order verification"*.

Wait for explicit user approval before beginning any implementation step.


## 12. FINAL OPERATING PRINCIPLE

Keep the master source code private. Verify commercial distribution rights. Prepare clean release packages. Verify payment before delivery. Issue product-specific licenses. Use technically appropriate activation controls. Document the actual deliverables and license terms. Never claim that source-code theft is completely preventable.

**Always follow the exact requested scope. Make no unrelated changes. No implementation without explicit approval.**