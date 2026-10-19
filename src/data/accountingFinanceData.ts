import { ProductData } from './businessCompanyData';

export const accountingFinanceData: Record<string, ProductData> = {
    'accounting-saas': {
        id: 'accounting-saas',
        name: 'Accounting SaaS',
        title: 'Accounting SaaS',
        tagline: 'High-Fidelity Financial Control & Real-Time Ledger Intelligence',
        description: 'Modernize your financial core with Kiaan Accounting SaaS. A unified double-entry engine designed for complex global operations, ensuring total transparency and fiscal integrity.',
        mainKeyword: 'FINANCIAL INTEGRITY',
        keywords: [
            'Accounting SaaS',
            'Cloud Accounting Software',
            'Online Bookkeeping System',
            'Financial Management Platform',
            'Business Accounting Solution',
            'SaaS Finance Software',
            'Automated Accounting Tool',
            'Digital Accounting System',
            'SME Accounting Software',
            'Enterprise Accounting Platform',
            'cloud accounting software India',
            'online bookkeeping platform',
            'business accounting automation tool',
            'real time accounting dashboard',
            'small business accounting system',
            'accounting workflow automation software',
            'financial record management platform',
            'SaaS accounting solution',
            'digital bookkeeping system',
            'accounting reporting software',
            'automated financial entries system',
            'accounting data management tool',
            'cloud ledger software',
            'business finance tracking platform',
            'accounting analytics dashboard',
            'GST ready accounting SaaS',
            'accounting automation for startups',
            'secure accounting cloud solution',
            'multi user accounting software',
            'enterprise accounting management tool'
        ],
        features: [
            {
                title: 'Global Ledger Engine',
                desc: 'Manage multiple entities, currencies, and charts of accounts in a single real-time environment.',
                iconName: 'BookOpen',
                items: ['Multi-Book Accounting', 'Intercompany Eliminations', 'Automated Journal Entries', 'Consolidated Reporting']
            },
            {
                title: 'Intelligent Reconciliation',
                desc: 'AI-assisted bank matching that eliminates 90% of manual reconciliation effort.',
                iconName: 'Zap',
                items: ['Auto-Match Engine', 'Bank Feed Integration', 'Discrepancy Alerts', 'Bulk Approval Workflows']
            },
            {
                title: 'Fixed Asset Management',
                desc: 'Track and depreciate assets throughout their entire lifecycle automatically.',
                iconName: 'ShieldCheck',
                items: ['Depreciation Scheduling', 'Asset Disposal Logs', 'Valuation Tracking', 'Maintenance Alerts']
            }
        ],
        benefits: [
            { title: 'Faster Close', impact: 'Reduce month-end closing time by 60% with automated consolidations.' },
            { title: 'Audit Readiness', impact: 'Maintain a permanent, immutable trail for every financial transaction.' },
            { title: 'Strategic Insight', impact: 'Access real-time balance sheets and cash flow data on any device.' }
        ],
        useCases: [
            { scenario: 'Parent-Subsidiary Groups', solution: 'Consolidate multiple businesses into a single unified financial report.' },
            { scenario: 'Rapidly Growing Startups', solution: 'Scale from single-currency to multi-national operations without switching systems.' },
            { scenario: 'Audit-Heavy Industries', solution: 'Ensure 100% compliance with GAAP/IFRS standards with automated logging.' }
        ],
        integrations: ['SAP', 'Stripe', 'Plaid', 'Slack', 'Power BI']
    },
    'invoice-billing': {
        id: 'invoice-billing',
        name: 'Invoice & Billing',
        title: 'Invoice & Billing',
        tagline: 'Precision Invoicing & Accelerated Cash Flow Orchestration',
        description: 'Turn your billing process into a competitive advantage. Kiaan Invoicing automates the quote-to-cash cycle, reducing DSO and professionalizing your client interactions.',
        mainKeyword: 'CASH FLOW',
        keywords: [
            'Invoice Management Software',
            'Online Billing System',
            'Automated Invoicing Tool',
            'GST Billing Software',
            'Recurring Billing Platform',
            'Professional Invoice Generator',
            'Billing & Payment Software',
            'SaaS Billing Solution',
            'Digital Invoice System',
            'Small Business Billing Software',
            'online invoice generator software',
            'automated billing system',
            'GST billing software India',
            'recurring invoice automation tool',
            'digital invoice management platform',
            'billing workflow automation software',
            'invoice payment tracking system',
            'professional invoice creator tool',
            'billing analytics dashboard',
            'SaaS invoicing platform',
            'invoice reminder automation software',
            'proforma invoice generator system',
            'cloud billing solution',
            'invoice reporting tool',
            'billing compliance software India',
            'invoice approval workflow system',
            'multi currency billing platform',
            'digital payment invoice integration',
            'automated billing SaaS solution',
            'small business invoicing software'
        ],
        features: [
            {
                title: 'Dynamic Invoice Designer',
                desc: 'Create beautiful, brand-aligned invoices that clearly communicate value.',
                iconName: 'Layout',
                items: ['White-Labeling', 'Multi-Language Support', 'Line-Item Customization', 'Attachment Handling']
            },
            {
                title: 'Automated Reminders',
                desc: 'Gentle, automated follow-ups for overdue payments to maintain healthy cash flow.',
                iconName: 'Clock',
                items: ['Trigger-Based Emails', 'SMS Notifications', 'Late Fee Automation', 'Custom Dunning Sequences']
            },
            {
                title: 'Embedded Payments',
                desc: 'Let clients pay directly from the invoice with integrated credit card and bank transfer portals.',
                iconName: 'CreditCard',
                items: ['Apple/Google Pay Support', 'Instant ACH Processing', 'Split Payment Logic', 'Transaction Reconciliation']
            }
        ],
        benefits: [
            { title: 'Reduce DSO', impact: 'Get paid average 12 days faster with embedded payment links.' },
            { title: 'Zero Manual Entry', impact: 'Invoices sync instantly with your ledger and inventory systems.' },
            { title: 'Professional Image', impact: 'Build trust with clean, localized, and professional financial documents.' }
        ],
        useCases: [
            { scenario: 'Service Agencies', solution: 'Automate complex billable hours and milestones into clear client invoices.' },
            { scenario: 'Wholesale Distributors', solution: 'Manage high-volume B2B billing with custom credit terms and bulk processing.' },
            { scenario: 'Freelance Networks', solution: 'Provide individual contributors with a centralized billing and collection portal.' }
        ],
        integrations: ['Stripe', 'PayPal', 'Xero', 'FreshBooks', 'HubSpot']
    },
    'subscription-billing': {
        id: 'subscription-billing',
        name: 'Subscription Billing',
        title: 'Subscription Billing',
        tagline: 'SaaS-Grade Recurring Revenue & Churn Prevention Intelligence',
        description: 'Master the complexity of subscription economies. From tiered pricing to usage-based billing, Kiaan Subscription Billing ensures predictable revenue growth.',
        mainKeyword: 'RECURRING REVENUE',
        keywords: [
            'Subscription Management Software',
            'Recurring Payment System',
            'SaaS Subscription Billing',
            'Membership Billing Platform',
            'Automated Recurring Invoices',
            'Subscription Revenue Management',
            'Online Subscription Software',
            'SaaS Payment Automation',
            'Billing Cycle Management',
            'Subscription CRM Tool',
            'recurring billing management software',
            'subscription payment automation system',
            'SaaS subscription management platform',
            'membership billing solution',
            'automated renewal billing tool',
            'subscription revenue tracking system',
            'recurring invoice automation platform',
            'subscription lifecycle management software',
            'cloud subscription billing SaaS',
            'subscription analytics dashboard',
            'recurring payment gateway integration',
            'subscription plan management tool',
            'subscription revenue automation system',
            'customer subscription tracking software',
            'SaaS billing automation platform',
            'subscription churn tracking tool',
            'automated recurring payments software',
            'subscription compliance tracking system',
            'digital membership billing system',
            'subscription reporting dashboard'
        ],
        features: [
            {
                title: 'Flexible Pricing Engine',
                desc: 'Launch any pricing model: per-seat, usage-based, flat-rate, or hybrid.',
                iconName: 'Zap',
                items: ['Feature Gating', 'Tiered Units', 'Grandfathering Support', 'Add-on Management']
            },
            {
                title: 'Automated Proration',
                desc: 'Handle upgrades and downgrades mid-cycle with zero manual calculation.',
                iconName: 'BarChart3',
                items: ['Credit Balances', 'Cycle Alignment', 'Refund Orchestration', 'Trial Management']
            },
            {
                title: 'Strategic Dunning Management',
                desc: 'Recover failed payments automatically with smart retry logic and card updates.',
                iconName: 'ShieldCheck',
                items: ['Smart Retry (AI)', 'Card Expiry Warnings', 'Account Suspension Logic', 'Recovery Dashboards']
            }
        ],
        benefits: [
            { title: 'Increase LTV', impact: 'Reduce involuntary churn by 25% with automated payment recovery.' },
            { title: 'Sales Agility', impact: 'Deploy complex new pricing strategies in minutes, not months.' },
            { title: 'Revenue Accuracy', impact: 'Ensure complex usage data is accurately reflected in every bill.' }
        ],
        useCases: [
            { scenario: 'SaaS Platforms', solution: 'Manage thousands of monthly subscribers with varying usage and tiers.' },
            { scenario: 'Box Memberships', solution: 'Coordinate physical shipping cycles with billing renewal dates.' },
            { scenario: 'Cloud Infrastructure', solution: 'Accurately bill for granular resource consumption like storage or API calls.' }
        ],
        integrations: ['Stripe Billing', 'Chargebee', 'Recurly', 'AWS', 'Salesforce']
    },
    'expense-tracking': {
        id: 'expense-tracking',
        name: 'Expense Tracking',
        title: 'Expense Tracking',
        tagline: 'Total Spend Visibility & Automated Reimbursement Workflows',
        description: 'Eliminate receipt chaos. Kiaan Expense simplifies how your team spends money, ensuring every dollar is tracked, approved, and reconciled in seconds.',
        mainKeyword: 'SPEND MANAGEMENT',
        keywords: [
            'Expense Management Software',
            'Business Expense Tracker',
            'Online Expense Monitoring',
            'Expense Reporting Tool',
            'Company Expense Automation',
            'Receipt Management System',
            'Travel Expense Software',
            'Expense Analytics Platform',
            'Cloud Expense Tracker',
            'Finance Expense Solution',
            'business expense management software',
            'expense tracking automation tool',
            'digital expense reporting system',
            'company expense monitoring platform',
            'employee reimbursement software',
            'expense approval workflow system',
            'corporate expense analytics dashboard',
            'cloud expense management SaaS',
            'expense claim tracking software',
            'automated expense categorization tool',
            'small business expense tracker',
            'travel expense management system',
            'expense reporting automation platform',
            'financial expense control software',
            'expense audit tracking tool',
            'digital receipt management system',
            'expense compliance tracking software',
            'real time expense dashboard',
            'enterprise expense management tool',
            'business cost monitoring platform'
        ],
        features: [
            {
                title: 'Mobile Receipt Capture',
                desc: 'Snap a photo and let OCR extract merchant, date, and amount instantly.',
                iconName: 'Camera',
                items: ['Instant OCR Extraction', 'Auto-Categorization', 'Offline Mode', 'Email Forwarding Sync']
            },
            {
                title: 'Corporate Card Sync',
                desc: 'Real-time visibility into company spending with automated transaction matching.',
                iconName: 'CreditCard',
                items: ['Instant Feed Integration', 'Anomaly Detection', 'Zero-Debit Alerts', 'Statement Auto-Fetch']
            },
            {
                title: 'Multi-Level Approvals',
                desc: 'Route expenses based on department, amount, or project code for rapid sign-off.',
                iconName: 'UserCheck',
                items: ['Audit-Friendly Trails', 'Policy Violation Alerts', 'Manager Queues', 'Delegate Approvals']
            }
        ],
        benefits: [
            { title: 'Save Time', impact: 'Employees spend 80% less time on tedious expense reports.' },
            { title: 'Fraud Prevention', impact: 'Identify duplicate entries and policy violations automatically.' },
            { title: 'Tax Optimization', impact: 'Capture all deductible business expenses with zero leakage.' }
        ],
        useCases: [
            { scenario: 'Field Sales Teams', solution: 'Log travel and entertainment expenses on the go with high accuracy.' },
            { scenario: 'Project-Based Orgs', solution: 'Track spend against specific client budgets in real-time.' },
            { scenario: 'Non-Profits', solution: 'Maintain strict grant compliance with documented fund utilization.' }
        ],
        integrations: ['Expensify', 'Concur', 'QuickBooks', 'Amex', 'Brex']
    },
    'tax-compliance': {
        id: 'tax-compliance',
        name: 'Tax Compliance',
        title: 'Tax Compliance',
        tagline: 'Always-On Global Tax Intelligence & Automated Filing Readiness',
        description: 'Navigate the maze of local and international tax laws. Kiaan Tax Compliance automates calculations and prepares records for perfect filings every season.',
        mainKeyword: 'TAX AGILITY',
        keywords: [
            'Tax Management Software',
            'GST Compliance System',
            'Online Tax Filing Tool',
            'Corporate Tax Automation',
            'Tax Reporting Platform',
            'VAT Compliance Software',
            'Digital Tax Management',
            'Business Tax Calculator',
            'Regulatory Tax Software',
            'Tax Audit Management',
            'GST compliance software India',
            'tax filing automation system',
            'digital tax reporting platform',
            'business tax management tool',
            'automated GST return filing software',
            'tax calculation automation system',
            'tax analytics dashboard',
            'statutory tax compliance platform',
            'online tax reporting software',
            'tax audit management tool',
            'indirect tax management system',
            'corporate tax automation platform',
            'digital tax documentation software',
            'tax reconciliation system',
            'tax workflow automation tool',
            'business tax tracking software',
            'compliance ready tax solution',
            'tax data management platform',
            'real time tax reporting dashboard',
            'cloud tax compliance SaaS'
        ],
        features: [
            {
                title: 'Real-Time Tax Engine',
                desc: 'Calculate precise sales tax, VAT, or GST at the point of transaction globally.',
                iconName: 'Zap',
                items: ['Global Rate Database', 'Address Validation', 'Threshold Monitoring', 'Exemption Management']
            },
            {
                title: 'Audit-Ready Reporting',
                desc: 'Instantly generate detailed tax liability reports for any jurisdiction.',
                iconName: 'ClipboardCheck',
                items: ['Jurisdiction Mapping', 'Statutory Filing Files', 'YTD Liability Tracking', 'Reconciliation Summaries']
            },
            {
                title: 'Nexus Intelligence',
                desc: 'Monitor when and where you cross tax thresholds as your business expands.',
                iconName: 'ShieldCheck',
                items: ['Risk Maps', 'Registration Alerts', 'Historical Analysis', 'State-Level Detail']
            }
        ],
        benefits: [
            { title: 'Zero Penalties', impact: 'Avoid costly late fees and miscalculation fines with automated logic.' },
            { title: 'Global Readiness', impact: 'Sell into 100+ countries without hiring 100+ local tax consultants.' },
            { title: 'Peace of Mind', impact: 'Maintain a transparent, defensible tax trail for government audits.' }
        ],
        useCases: [
            { scenario: 'E-commerce Giants', solution: 'Handle varying tax rates across thousands of zip codes and countries.' },
            { scenario: 'Digital Goods SaaS', solution: 'Comply with complex EU VAT OSS and global digital service taxes.' },
            { scenario: 'Construction Firms', solution: 'Manage localized job-site tax rules across different municipalities.' }
        ],
        integrations: ['Avalara', 'TaxJar', 'Vertex', 'QuickBooks Desktop', 'Xero']
    },
    'pl-reporting': {
        id: 'pl-reporting',
        name: 'P&L Reporting',
        title: 'P&L Reporting',
        tagline: 'Real-Time Profitability Intelligence & Strategic Margin Analytics',
        description: 'Move beyond static spreadsheets. Kiaan P&L Reporting provides a living view of your business health, revealing hidden trends and margin opportunities.',
        mainKeyword: 'PROFIT INTELLIGENCE',
        keywords: [
            'Profit & Loss Reporting Software',
            'Financial Reporting Tool',
            'Income Statement Software',
            'Business Analytics Reporting',
            'Accounting Reports Platform',
            'P&L Dashboard System',
            'Financial Insights Software',
            'Automated Reporting Tool',
            'SaaS Reporting Solution',
            'Business Intelligence Finance',
            'profit and loss reporting software',
            'financial performance dashboard',
            'automated P&L statement generator',
            'revenue and expense reporting tool',
            'business financial summary system',
            'accounting performance analytics',
            'income statement automation platform',
            'financial insights reporting software',
            'P&L analytics dashboard',
            'real time profit monitoring system',
            'business earnings tracking tool',
            'financial KPI reporting platform',
            'automated financial reports software',
            'income analysis dashboard',
            'company profitability tracking system',
            'financial reporting automation SaaS',
            'P&L comparison reporting tool',
            'monthly financial reporting software',
            'business margin analysis platform',
            'cloud financial statement generator'
        ],
        features: [
            {
                title: 'Dimensional Profitability',
                desc: 'Slice and dice your P&L by product, region, department, or individual client.',
                iconName: 'BarChart3',
                items: ['Custom Tag Tracking', 'Drill-Down Graphics', 'Profit Centers', 'Direct Cost Mapping']
            },
            {
                title: 'Budget vs. Actuals',
                desc: 'Monitor variance in real-time to adjust spending before it impacts the bottom line.',
                iconName: 'Target',
                items: ['Variance Analysis', 'Forecasting Adjustments', 'Departmental Limits', 'Fiscal Year Comparisons']
            },
            {
                title: 'Predictive Dashboards',
                desc: 'AI-driven projections of future profits based on current sales and spend trajectories.',
                iconName: 'Zap',
                items: ['Trend Projection', 'Scenario Modeling', 'Cash Flow Forecasts', 'Executive Summaries']
            }
        ],
        benefits: [
            { title: 'Informed Decisions', impact: 'Base strategic moves on real-time profit data, not last month\'s reports.' },
            { title: 'Margin Optimization', impact: 'Identify low-margin segments and optimize resource allocation.' },
            { title: 'Investor Trust', impact: 'Provide stakeholders with clear, transparent, and professional business health views.' }
        ],
        useCases: [
            { scenario: 'Multi-Unit Retail', solution: 'Compare the profitability of individual store locations in real-time.' },
            { scenario: 'Manufacturing Plants', solution: 'Analyze the true cost of goods sold (COGS) including labor and waste.' },
            { scenario: 'Marketing Agencies', solution: 'Identify which service lines are driving the most net profit.' }
        ],
        integrations: ['NetSuite', 'Sage Intacct', 'Google Sheets', 'Tableau', 'Power BI']
    },
    'ledger-management': {
        id: 'ledger-management',
        name: 'Ledger Management',
        title: 'Ledger Management',
        tagline: 'Immutable General Ledger & Automated Chart of Accounts Control',
        description: 'The backbone of your financial data. Kiaan Ledger Management ensures your books are accurate, balanced, and ready for any level of corporate scrutiny.',
        mainKeyword: 'FISCAL CONTROL',
        keywords: [
            'General Ledger Software',
            'Ledger Accounting System',
            'Digital Ledger Management',
            'Financial Ledger Tool',
            'Accounting Ledger Automation',
            'Cloud Ledger Platform',
            'Double Entry Accounting System',
            'Business Ledger Solution',
            'Enterprise Ledger Software',
            'Online Bookkeeping Ledger',
            'general ledger management software',
            'digital ledger tracking system',
            'cloud ledger accounting platform',
            'financial ledger automation tool',
            'multi account ledger management system',
            'ledger reconciliation software',
            'accounting ledger dashboard',
            'automated journal entry system',
            'business ledger reporting tool',
            'online ledger bookkeeping software',
            'real time ledger tracking platform',
            'ledger analytics dashboard',
            'accounting journal management tool',
            'ledger compliance tracking software',
            'centralized ledger database system',
            'enterprise ledger management solution',
            'ledger entry automation platform',
            'accounting balance tracking tool',
            'cloud based ledger software',
            'financial record ledger system'
        ],
        features: [
            {
                title: 'Flexible COA Builder',
                desc: 'Design a chart of accounts that scales from small business to enterprise complexity.',
                iconName: 'Layout',
                items: ['Nested Account Levels', 'Custom Numbering', 'Account Mapping Logic', 'Multi-Entity COA']
            },
            {
                title: 'Automated Postings',
                desc: 'Sync transactions from sub-ledgers (AR/AP) to the General Ledger automatically.',
                iconName: 'Zap',
                items: ['Real-Time Sync', 'Validation Checks', 'Bulk Import/Export', 'Reverse Entry Logic']
            },
            {
                title: 'Balance Integrity Monitor',
                desc: 'Daily automated checks to ensure all books are perfectly balanced and reconciled.',
                iconName: 'ShieldCheck',
                items: ['Automated Trials', 'Discrepancy Reporting', 'Historical Snapshots', 'Close-of-Day Summaries']
            }
        ],
        benefits: [
            { title: 'Total Accuracy', impact: 'Eliminate human error in ledger balancing with automated validation.' },
            { title: 'Scalable Growth', impact: 'Add new entities and account lines without disrupting existing data.' },
            { title: 'Audit Efficiency', impact: 'Reduce audit prep time by having a structured, clean general ledger.' }
        ],
        useCases: [
            { scenario: 'Holding Companies', solution: 'Manage complex intercompany transfers and consolidated ledgers.' },
            { scenario: 'Public Companies', solution: 'Maintain high levels of SOX/FCA compliance with immutable logs.' },
            { scenario: 'Non-Profits', solution: 'Track restricted vs unrestricted funds across a complex mission structure.' }
        ],
        integrations: ['Microsoft Dynamics', 'SAP Business One', 'Oracle ERP', 'Workday', 'BlackLine']
    },
    'payment-collection': {
        id: 'payment-collection',
        name: 'Payment Collection',
        title: 'Payment Collection',
        tagline: 'Omni-Channel Revenue Intake & Global Settlement Orchestration',
        description: 'Remove friction from your customer payments. Kiaan Collection provides a unified portal for credit cards, bank transfers, and local payment methods globally.',
        mainKeyword: 'REVENUE INTAKE',
        keywords: [
            'Payment Collection Software',
            'Online Payment System',
            'Automated Payment Reminder',
            'Invoice Payment Tracker',
            'SaaS Payment Gateway System',
            'Digital Payment Management',
            'Customer Payment Collection Tool',
            'Recurring Payment Platform',
            'Business Payment Automation',
            'Secure Payment Processing',
            'online payment collection software',
            'automated payment reminder system',
            'accounts receivable management tool',
            'digital payment tracking platform',
            'customer payment follow up software',
            'payment reconciliation automation system',
            'secure payment processing SaaS',
            'invoice payment tracking dashboard',
            'recurring payment collection tool',
            'business payment management platform',
            'cloud payment monitoring software',
            'payment analytics dashboard',
            'digital transaction tracking system',
            'automated dues collection software',
            'customer billing payment system',
            'payment gateway integration tool',
            'enterprise payment automation platform',
            'outstanding payment tracking software',
            'revenue collection management system',
            'smart payment recovery tool'
        ],
        features: [
            {
                title: 'Unified Payment Gateway',
                desc: 'Accept payments via 50+ local methods including UPI, Pix, and SEPA.',
                iconName: 'CreditCard',
                items: ['Global Card Support', 'Digital Wallet Sync', 'ACH/Wire Transfers', 'Local Debit Schemes']
            },
            {
                title: 'Custom Payment Portals',
                desc: 'Give your clients a secure, branded space to pay invoices and manage cards.',
                iconName: 'ShieldCheck',
                items: ['Branded Branding', 'Mobile Optimization', 'Auto-Pay Enrollment', 'Receipt History']
            },
            {
                title: 'Instant Reconciliation',
                desc: 'Money collected is instantly matched to the corresponding invoice and ledger entry.',
                iconName: 'Zap',
                items: ['Transaction Mapping', 'Fee Tracking', 'Payout Orchestration', 'Refund Management']
            }
        ],
        benefits: [
            { title: 'Higher Conversion', impact: 'Reduce checkout friction and improve collection rates by 15%.' },
            { title: 'Security Compliance', impact: 'Offload PCI compliance risk with our secure, encrypted vaulting.' },
            { title: 'Instant Liquidity', impact: 'Accelerated payout cycles mean cash hits your bank account faster.' }
        ],
        useCases: [
            { scenario: 'Global SaaS', solution: 'Accept local payments in 30 countries with a single integration.' },
            { scenario: 'Property Management', solution: 'Collect rent automatically via tenant portals and ACH.' },
            { scenario: 'Edu-Tech Providers', solution: 'Manage tuition payments and installment plans securely online.' }
        ],
        integrations: ['Stripe', 'Adyen', 'Checkout.com', 'Razorpay', 'Square']
    },
    'accounts-payable': {
        id: 'accounts-payable',
        name: 'Accounts Payable',
        title: 'Accounts Payable',
        tagline: 'Vendor Relationship Optimization & Strategic Spend Orchestration',
        description: 'Take control of your outgoing cash flow. Kiaan AP automates the entire vendor payment journey from invoice capture to final disbursement.',
        mainKeyword: 'LIABILITY MANAGEMENT',
        keywords: [
            'Accounts Payable Software',
            'Vendor Payment System',
            'AP Automation Tool',
            'Invoice Approval Workflow',
            'Supplier Payment Management',
            'Payables Tracking Software',
            'Digital Accounts Payable',
            'Finance AP System',
            'Payment Authorization Platform',
            'Business Payables Automation',
            'vendor payment management software',
            'accounts payable automation system',
            'supplier invoice tracking tool',
            'AP workflow automation platform',
            'payable reconciliation software',
            'vendor billing management system',
            'digital payable approval system',
            'accounts payable dashboard',
            'invoice to payment automation software',
            'supplier payment scheduling tool',
            'payable compliance tracking platform',
            'automated vendor payment processing',
            'cloud accounts payable SaaS',
            'payable analytics dashboard',
            'business liability tracking software',
            'digital vendor ledger system',
            'AP reporting automation tool',
            'corporate payable management solution',
            'vendor expense monitoring software',
            'payment approval workflow system'
        ],
        features: [
            {
                title: 'Digital Invoice Capture',
                desc: 'Import vendor invoices via email or scan and let AI extract all key data points.',
                iconName: 'FileText',
                items: ['AI Data Extraction', 'Vendor Auto-Match', 'Duplicate Check', 'Attachment Vault']
            },
            {
                title: '2/3-Way Matching',
                desc: 'Automatically verify invoices against Purchase Orders and Delivery Notes.',
                iconName: 'CheckCircle',
                items: ['PO Synchronization', 'Inventory Receipt Link', 'Quantity Validation', 'Price Thresholds']
            },
            {
                title: 'Payment Orchestration',
                desc: 'Schedule and execute payments via ACH, Wire, or Virtual Card based on cash flow.',
                iconName: 'Zap',
                items: ['Bulk Payment Processing', 'Early Pay Discounts', 'Aging Reports', 'Approval Queues']
            }
        ],
        benefits: [
            { title: 'Avoid Overpayment', impact: 'Identify and block duplicate vendor invoices before payment.' },
            { title: 'Vendor Discounts', impact: 'Never miss an early-payment discount again with automated scheduling.' },
            { title: 'Fraud Mitigation', impact: 'Strengthen controls with multi-person payment authorization.' }
        ],
        useCases: [
            { scenario: 'Procurement-Heavy Orgs', solution: 'Handle thousands of supplier invoices with minimal manual effort.' },
            { scenario: 'Construction Projects', solution: 'Track subcontractor payments against specific project budgets.' },
            { scenario: 'Retail Operations', solution: 'Manage inventory payables across multiple distributors and brands.' }
        ],
        integrations: ['Bill.com', 'MineralTree', 'Tipalti', 'Oracle AP', 'SAP']
    },
    'digital-ocr-tool': {
        id: 'digital-ocr-tool',
        name: 'Digital OCR Tool',
        title: 'Digital OCR Tool',
        tagline: 'Cognitive Data Extraction & High-Accuracy Document Intelligence',
        description: 'Bridges the gap between physical paper and digital data. Our AI-powered OCR engine handles complex financial documents with human-level accuracy.',
        mainKeyword: 'DOCUMENT INTELLIGENCE',
        keywords: [
            'OCR Document Scanner Software',
            'AI OCR Platform',
            'Invoice OCR Automation',
            'Receipt Scanning Tool',
            'Document Digitization Software',
            'AI Data Extraction System',
            'Optical Character Recognition SaaS',
            'Smart Document Processing',
            'OCR for Accounting',
            'Automated Document Recognition',
            'document scanning automation software',
            'AI powered OCR system',
            'invoice data extraction tool',
            'receipt scanning platform',
            'automated document digitization software',
            'intelligent text recognition system',
            'OCR invoice processing tool',
            'digital document conversion platform',
            'scanned document data extraction',
            'AI document reading software',
            'smart OCR automation SaaS',
            'paper to digital conversion tool',
            'financial document OCR system',
            'automated data capture software',
            'document processing automation platform',
            'OCR analytics dashboard',
            'invoice scanning automation tool',
            'secure document digitization system',
            'AI text extraction platform',
            'enterprise OCR solution'
        ],
        features: [
            {
                title: 'Multi-Document Engine',
                desc: 'Extract data from invoices, IDs, bank statements, and hand-written logs.',
                iconName: 'Search',
                items: ['Financial Extraction', 'KYC Document Parsing', 'Custom Field Training', 'Table Structure Detection']
            },
            {
                title: 'Precision Accuracy',
                desc: 'Advanced neural networks that learn from corrections to achieve 99% accuracy.',
                iconName: 'Target',
                items: ['Confidence Scoring', 'Manual Review Loops', 'Semantic Verification', 'Auto-Correction']
            },
            {
                title: 'Secure API Export',
                desc: 'Push extracted data into your ERP, CRM, or database in real-time.',
                iconName: 'Zap',
                items: ['JSON/XML Webhooks', 'Direct DB Sync', 'ERP Connector', 'Bulk CSV Export']
            }
        ],
        benefits: [
            { title: 'Zero Typing', impact: 'Eliminate manual data entry for thousands of documents per hour.' },
            { title: 'Reduced Error', impact: 'Replace human fatigue with consistent, machine-precision extraction.' },
            { title: 'Instant Search', impact: 'Make your entire physical archive searchable and data-rich in seconds.' }
        ],
        useCases: [
            { scenario: 'Accounting Firms', solution: 'Digitize entire boxes of client receipts and bank statements instantly.' },
            { scenario: 'Logistics Companies', solution: 'Process thousands of shipping manifests and bills of lading daily.' },
            { scenario: 'Insurance Providers', solution: 'Extract data from complex medical claims and police reports at scale.' }
        ],
        integrations: ['AWS Textract', 'Google Document AI', 'Azure Form Recognizer', 'Dropbox', 'SharePoint']
    }
};
