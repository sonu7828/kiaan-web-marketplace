# Client Onboarding Checklist (Notion Template Setup)

A 30-item, 4-phase standard onboarding framework for Kiaan Technology client accounts. Designed to be imported directly into Notion as a Database Template.

> [!NOTE]
> This document contains both the **30-item checklist table** and the **Notion Database Properties & Formula Codes** to automate target dates and 24h overdue alert notifications.

---

## 🛠️ Notion Database Properties Definition

To build this checklist in Notion, create a new Database with the following properties:

1. **Task Name** (`Title` property)
2. **Phase** (`Select` property) - Values: `1. Pre-Kickoff`, `2. Kickoff`, `3. Execution`, `4. Governance`
3. **Status** (`Status` property) - Values: `Not Started`, `In Progress`, `Blocked`, `Done`
4. **Owner** (`Person` property) - Assignee (AM, PM, Developer, Lead)
5. **Kickoff Date** (`Date` property) - Shared base date for the project kickoff.
6. **Offset (Days)** (`Number` property) - Relative days before or after Kickoff (-ve or +ve).
7. **Target Date** (`Formula` property) - Auto-calculates task deadline.
8. **Overdue Status** (`Formula` property) - Triggers warning alerts if incomplete past SLA.

---

## 🧪 Notion Formula Code Blocks

### 1. Target Date Formula (Auto-Dates)
Calculates the absolute deadline by adding the `Offset (Days)` to the base `Kickoff Date`:

```js
dateAdd(prop("Kickoff Date"), prop("Offset (Days)"), "days")
```

### 2. Overdue Alert Formula (24h Overdue Alerts)
Displays a warning indicator (`🚨 OVERDUE`) if the current date is 24 hours past the `Target Date` and the status is not marked as `Done`:

```js
if(
  empty(prop("Target Date")), 
  "", 
  if(
    prop("Status") == "Done", 
    "✅ Complete", 
    if(
      dateBetween(now(), prop("Target Date"), "hours") > 24, 
      "🚨 OVERDUE", 
      "⏳ In Progress"
    )
  )
)
```

---

## 📋 The 30-Item Onboarding Checklist

| ID | Phase | Task Name | Owner | Offset (Days) | SLA Target |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **01** | `1. Pre-Kickoff` | Contract execution & countersignatures | Sales/AM | -5 | 24 Hours |
| **02** | `1. Pre-Kickoff` | Mutual NDA signing & record filing | Sales/AM | -5 | 24 Hours |
| **03** | `1. Pre-Kickoff` | Client profile setup in billing & invoicing tool | Finance | -4 | 24 Hours |
| **04** | `1. Pre-Kickoff` | Provision shared Slack Connect channel | PM | -4 | 12 Hours |
| **05** | `1. Pre-Kickoff` | Setup secure shared Google Drive folder | PM | -4 | 12 Hours |
| **06** | `1. Pre-Kickoff` | Brand guidelines, logos, and fonts collection | Lead Designer | -3 | 48 Hours |
| **07** | `1. Pre-Kickoff` | Technical access request (existing source code/servers) | Tech Lead | -3 | 48 Hours |
| **08** | `1. Pre-Kickoff` | Provision third-party API keys (Stripe, Twilio, AWS) | Tech Lead | -2 | 48 Hours |
| **09** | `1. Pre-Kickoff` | Create client account files inside CRM database | PM | -2 | 24 Hours |
| **10** | `1. Pre-Kickoff` | Send Welcome Pack Email containing PM/AM contact cards | AM | -2 | 12 Hours |
| **11** | `2. Kickoff` | Introduce core roles (AM, PM, Tech Lead, QA) | AM | 0 | Kickoff Day |
| **12** | `2. Kickoff` | Establish official communication rules and SLA boundaries | PM | 0 | Kickoff Day |
| **13** | `2. Kickoff` | Setup recurring weekly milestone review calendar slots | PM | 0 | Kickoff Day |
| **14** | `2. Kickoff` | Formulate project success KPIs and targets | AM | 1 | 24 Hours |
| **15** | `2. Kickoff` | Align milestone roadmap and target sprint plans | PM | 1 | 24 Hours |
| **16** | `2. Kickoff` | Document project risk assessment & mitigation strategies | Tech Lead | 2 | 48 Hours |
| **17** | `2. Kickoff` | Review scope change request boundaries | PM | 2 | 24 Hours |
| **18** | `2. Kickoff` | Capture kickoff survey metrics for SLA reference | AM | 3 | 48 Hours |
| **19** | `3. Execution` | Initialize GitHub repository & apply branch protections | Tech Lead | 4 | 24 Hours |
| **20** | `3. Execution` | Setup CI/CD build scripts (ESLint, Prettier, Types) | DevOps | 4 | 24 Hours |
| **21** | `3. Execution` | Deploy staging build environments (Vercel/AWS ECS) | DevOps | 5 | 24 Hours |
| **22** | `3. Execution` | Set up configuration secrets in environment vaults | Tech Lead | 5 | 12 Hours |
| **23** | `3. Execution` | Deliver System Architecture & DB schema blueprint | Tech Lead | 6 | 72 Hours |
| **24** | `3. Execution` | Populate database seed scripts & initial mock inputs | Developers | 7 | 48 Hours |
| **25** | `3. Execution` | Verify initial pipeline checkout builds successfully | DevOps | 7 | 24 Hours |
| **26** | `4. Governance` | Run Sprint Demo & Retrospective reviews (bi-weekly) | PM | 14 | Bi-Weekly |
| **27** | `4. Governance` | Send Mid-Project customer satisfaction (CSAT) survey | AM | 30 | Mid-Project |
| **28** | `4. Governance` | Reconcile monthly project budget & billing invoice | Finance | 30 | Monthly |
| **29** | `4. Governance` | Perform monthly Core Web Vitals & security code audits | QA Lead | 30 | Monthly |
| **30** | `4. Governance` | Deliver final hand-off verification sign-off | AM | 60 | Go-Live |

---

## 🚨 SLA Escalation Process for Overdue Items

If a task shows the `🚨 OVERDUE` status:

1. **AM/PM Notification:** Notion auto-notifies the assignee and the Account Manager immediately.
2. **Escalation Trigger (24h past deadline):** If the status remains `🚨 OVERDUE` for more than 24 hours, the **Project Manager** must arrange a sync call with the assignee to unblock dependencies.
3. **Weekly Governance Report:** All overdue items are logged in the weekly status sheet sent to the Director of Operations.
