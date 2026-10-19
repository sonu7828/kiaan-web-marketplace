# Kiaan Technology — Standard QA Checklist

Quality Assurance checklist guidelines to be filled out and signed off before any production release.

> [!CAUTION]
> **RELEASE GATING POLICY:** If any item classified as **`CRITICAL`** is marked as `Failed` or remains `Unchecked`, the deployment pipeline must be blocked automatically. No production release is permitted without a 100% Critical pass rate.

---

## 📋 QA Verification Matrix

*Every item must be verified by a designated QA tester and contain links to verification logs or screenshots.*

| ID | Category | Verification Test Item | Severity | Tester Name | Evidence Link / Log | Status |
| :--- | :--- | :--- | :---: | :--- | :--- | :---: |
| **01** | `Functional` | **Happy Path:** Core client user stories & conversion funnels complete successfully (e.g., booking form submission). | **CRITICAL** | | | `Unchecked` |
| **02** | `Functional` | **Edge Case:** Empty states, long text limits, and incorrect input formats handle without crashes. | **Standard** | | | `Unchecked` |
| **03** | `Functional` | Boundary value checks on all input fields (min/max characters, special symbols). | **Standard** | | | `Unchecked` |
| **04** | `Cross-Browser` | Layout rendering is pixel-perfect and animations run at 60fps on Google Chrome. | **CRITICAL** | | | `Unchecked` |
| **05** | `Cross-Browser` | Modal windows and SVG vector layouts render cleanly on Apple Safari (iOS/macOS). | **CRITICAL** | | | `Unchecked` |
| **06** | `Cross-Browser` | Grid modules, flex alignments, and font sizing load correctly on Mozilla Firefox. | **Standard** | | | `Unchecked` |
| **07** | `Cross-Browser` | Core client conversion triggers interact cleanly on Microsoft Edge. | **Standard** | | | `Unchecked` |
| **08** | `Mobile Responsive` | Responsive layout test on mobile viewport widths (390px, 412px) for overlaps. | **CRITICAL** | | | `Unchecked` |
| **09** | `Mobile Responsive` | Verify touch target buttons are minimum 44x44px for safe mobile finger taps. | **Standard** | | | `Unchecked` |
| **10** | `Mobile Responsive` | Check side drawer toggle actions and close gestures work on tablet screens (768px). | **Standard** | | | `Unchecked` |
| **11** | `Performance` | **First Load Speed:** Page fully interactive in under **3 seconds** (LCP < 2.5s) on standard 4G networks. | **CRITICAL** | | | `Unchecked` |
| **12** | `Performance` | **API Latency:** Dynamic database/API endpoint response times are under **500ms**. | **CRITICAL** | | | `Unchecked` |
| **13** | `Performance` | Check bundle chunk sizes and verify zero unused scripts are loaded in head. | **Standard** | | | `Unchecked` |
| **14** | `Security` | **SQL Injection (SQLi):** Escape inputs in dynamic search pages; verify query errors do not print data schemas. | **CRITICAL** | | | `Unchecked` |
| **15** | `Security` | **Cross-Site Scripting (XSS):** Validate and sanitize all raw HTML/rich-text content editor inputs. | **CRITICAL** | | | `Unchecked` |
| **16** | `Security` | Verify Auth session tokens expire after 24h idle; validate RBAC route gate blocks. | **CRITICAL** | | | `Unchecked` |
| **17** | `Security` | Test form inputs against malicious payload scripts to prevent database poisoning. | **Standard** | | | `Unchecked` |
| **18** | `Accessibility` | **WCAG AA:** Contrast ratios for text headers are minimum 4.5:1 against deep black background. | **CRITICAL** | | | `Unchecked` |
| **19** | `Accessibility` | Keyboard navigation checklist: interactive items (buttons/inputs) reachable via Tab key. | **Standard** | | | `Unchecked` |
| **20** | `Accessibility` | Check that all static images and logo vectors have logical `alt` text labels. | **Standard** | | | `Unchecked` |
| **21** | `Data Integrity` | Verify form submit payloads map correctly to DB structures with zero data omissions. | **CRITICAL** | | | `Unchecked` |
| **22** | `Data Integrity` | Test concurrent form submissions to verify database transaction locks prevent duplicates. | **Standard** | | | `Unchecked` |
| **23** | `Data Integrity` | Check state sync logic when users navigate backward/forward in browser history. | **Standard** | | | `Unchecked` |

---

## ✍️ QA Release Sign-Off Template

*Copy this block into the deployment ticket description before merging code.*

```markdown
### QA Sign-Off Status Report
- **Project Name:** ________________________
- **Release Version:** _____________________
- **Staging Test URL:** _____________________

#### Summary Metrics:
- [ ] Total Checked: ____ / 23
- [ ] CRITICAL Items Pass Rate: 100% (Required)
- [ ] Standard Items Pass Rate: ____ %

#### Signatures:
- Lead QA Auditor: __________________  Date: ____________
- Engineering Lead: ________________  Date: ____________
```
