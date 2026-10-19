import { ProductData } from './businessCompanyData';

export const realEstateData: Record<string, ProductData> = {
    'property-management': {
        id: 'property-management',
        name: 'Property Management',
        title: 'Property Management',
        tagline: 'Precision Portfolio Orchestration & High-Yield Asset Intelligence',
        description: 'Maximize your property ROI with Kiaan Property Management. From residential complexes to commercial hubs, our unified platform streamlines operations and enhances tenant relationships.',
        mainKeyword: 'ASSET OPTIMIZATION',
        keywords: [
            'Property Management Software',
            'Real Estate Management System',
            'Rental Property ERP',
            'Property Automation Platform',
            'SaaS Property Tool',
            'Landlord Management Software',
            'Real Estate Admin System',
            'Property CRM Solution',
            'Asset Management Software',
            'Rental Tracking Platform',
            'rental property management software',
            'landlord management platform',
            'real estate operations system',
            'property admin automation tool',
            'building management SaaS solution',
            'rental portfolio tracking software',
            'tenant billing management system',
            'property income monitoring dashboard',
            'lease administration platform',
            'multi property management software',
            'real estate admin control panel',
            'residential property tracking system',
            'commercial property management tool',
            'rent collection automation software',
            'property accounting integration system',
            'cloud property management India',
            'real estate reporting dashboard',
            'property maintenance workflow platform',
            'real estate SaaS solution',
            'smart property administration software'
        ],
        features: [
            {
                title: 'Unified Portfolio Dashboard',
                desc: 'Real-time visibility into occupancy rates, pending payments, and maintenance status across all your properties.',
                iconName: 'Layout',
                items: ['Multi-Unit Mapping', 'Occupancy Trends', 'Yield Analysis', 'Lease Expiration Alerts']
            },
            {
                title: 'Automated Lease Management',
                desc: 'Digital contract generation with automated renewal alerts and secure cloud storage for every agreement.',
                iconName: 'FileText',
                items: ['E-Sign Integration', 'Renewal Triggers', 'Legal Template Library', 'Document Expiry Tracking']
            },
            {
                title: 'Intelligent Maintenance Hub',
                desc: 'Route repair requests from tenants directly to vetted contractors with real-time status tracking.',
                iconName: 'Wrench',
                items: ['Work Order Generation', 'Contractor Portal', 'Photo Documentation', 'Invoice Sync']
            }
        ],
        benefits: [
            { title: 'Lower Vacancy Rates', impact: 'Reduce turnaround time between tenants with automated listing and screening tools.' },
            { title: 'Higher Yield', impact: 'Base rent adjustments on real-time market data and comprehensive expense tracking.' },
            { title: 'Zero Late Fees', impact: 'Automate 100% of rent notices and follow-ups, ensuring consistent cash flow.' }
        ],
        useCases: [
            { scenario: 'Residential Apartments', solution: 'Manage thousands of units with centralized billing and community announcements.' },
            { scenario: 'Commercial Office Space', solution: 'Track complex multi-tenant lease structures, facility fees, and maintenance SLAs.' },
            { scenario: 'Student Housing', solution: 'Coordinate rapid move-in/move-out cycles and room-by-room maintenance.' }
        ],
        integrations: ['Zillow', 'DocuSign', 'Stripe', 'WhatsApp Business', 'NetSuite']
    },
    'tenant-rent-saas': {
        id: 'tenant-rent-saas',
        name: 'Tenant & Rent SaaS',
        title: 'Tenant & Rent SaaS',
        tagline: 'Frictionless Payment Collection & Seamless Tenant Communication',
        description: 'Empower your tenants and simplify your collection. Kiaan Tenant & Rent provides a professional mobile portal for payments, document access, and support.',
        mainKeyword: 'TENANT EXPERIENCE',
        keywords: [
            'Tenant Management Software',
            'Rent Collection System',
            'Rental Billing Platform',
            'SaaS Rent Management',
            'Lease Tracking Software',
            'Tenant Portal System',
            'Online Rent Payment Tool',
            'Property Rental CRM',
            'Rent Automation Software',
            'Rental Accounting Platform',
            'tenant self service portal software',
            'online rent payment platform',
            'tenant communication management system',
            'digital tenant dashboard',
            'rent payment tracking software',
            'tenant request management tool',
            'property resident portal platform',
            'tenant document access system',
            'lease agreement viewing portal',
            'rental account tracking dashboard',
            'maintenance request submission system',
            'tenant billing statement platform',
            'resident engagement software',
            'online tenant support system',
            'tenant payment history tracking tool',
            'cloud tenant portal solution',
            'apartment resident management system',
            'tenant notice communication platform',
            'secure tenant login dashboard',
            'rental resident SaaS solution'
        ],
        features: [
            {
                title: 'Mobile Payment Gateway',
                desc: 'Allow tenants to pay rent via credit card, bank transfer, or digital wallet with one tap.',
                iconName: 'CreditCard',
                items: ['Auto-Pay Enrollment', 'Partial Payment Logic', 'Instant Receipts', 'Late Fee Automation']
            },
            {
                title: 'Digital Key & Document Vault',
                desc: 'Tenants access their lease documents, insurance proofs, and move-in checklists securely online.',
                iconName: 'Lock',
                items: ['Lease Access', 'Compliance Upload', 'ID Verification', 'Check-in Photos']
            },
            {
                title: 'Community Announcements',
                desc: 'Broadcast emergency alerts or general property updates directly to tenant phones via app or SMS.',
                iconName: 'Bell',
                items: ['Priority Alerts', 'Maintenance Notices', 'Social Feed Control', 'Polls & Feedback']
            }
        ],
        benefits: [
            { title: 'Accelerated Cash Flow', impact: 'Get rent paid 5 days faster on average with automated mobile reminders.' },
            { title: 'Total Transparency', impact: 'Eliminate disputes with an immutable digital record of every payment and request.' },
            { title: 'Lower Support Burden', impact: 'Offload 60% of common queries with a comprehensive tenant self-service portal.' }
        ],
        useCases: [
            { scenario: 'Private Landlords', solution: 'Manage a small portfolio of properties with professional, high-trust payment tools.' },
            { scenario: 'Property Management Firms', solution: 'Provide a white-labeled mobile experience for thousands of managed tenants.' },
            { scenario: 'Co-living Spaces', solution: 'Manage individual room billing alongside shared community utility costs.' }
        ],
        integrations: ['Plaid', 'Adyen', 'Twilio', 'Firebase Messaging', 'Intercom']
    },
    'contract-management': {
        id: 'contract-management',
        name: 'Contract Management',
        title: 'Contract Management',
        tagline: 'Immutable Legal Lifecycle Control & High-Trust E-Sign Orchestration',
        description: 'Secure your agreements. Kiaan Contract Management provides a structured framework for drafting, signing, and auditing real estate legal documents.',
        mainKeyword: 'LEGAL INTEGRITY',
        keywords: [
            'Real Estate Contract Software',
            'Lease Agreement Management',
            'Contract Automation Tool',
            'Property Agreement System',
            'SaaS Contract Platform',
            'Legal Contract Tracking',
            'Rental Contract Management',
            'Digital Agreement Software',
            'Smart Contract CRM',
            'Real Estate Documentation System',
            'lease agreement management software',
            'rental contract tracking system',
            'lease lifecycle automation platform',
            'lease renewal management tool',
            'digital lease documentation system',
            'tenant contract management software',
            'lease compliance monitoring platform',
            'rental agreement automation tool',
            'lease payment schedule tracking system',
            'property contract reporting dashboard',
            'lease expiration alert software',
            'commercial lease management platform',
            'residential lease tracking system',
            'lease audit management tool',
            'property agreement SaaS solution',
            'lease analytics reporting software',
            'automated lease workflow system',
            'digital lease record management platform',
            'landlord lease dashboard tool',
            'lease administration automation software'
        ],
        features: [
            {
                title: 'Dynamic Template Engine',
                desc: 'Build legally-vetted templates for leases, NDAs, and purchase agreements with custom variables.',
                iconName: 'Layout',
                items: ['Clause Library', 'Auto-fill Tags', 'Version Control', 'Multi-Language Support']
            },
            {
                title: 'Industrial-Grade E-Sign',
                desc: 'Legally binding electronic signatures with full audit trails and IP/Device tracking.',
                iconName: 'PenTool',
                items: ['Multi-Signatory Flow', 'SMS/Email Verification', 'Blockchain Stamps', 'Audit Log History']
            },
            {
                title: 'Centralized Contract Vault',
                desc: 'Search, tag, and organize thousands of agreements in an encrypted, OCR-enabled cloud environment.',
                iconName: 'Search',
                items: ['Fuzzy Search', 'Auto-Tagging', 'Renewal Thresholds', 'Permission Control']
            }
        ],
        benefits: [
            { title: 'Zero Lost Documents', impact: 'Maintain a 100% digital, searchable archive of every legal commitment.' },
            { title: 'Faster Turnaround', impact: 'Reduce time-to-signature from days to minutes with mobile-friendly e-sign.' },
            { title: 'Compliance Safety', impact: 'Ensure all contracts meet local regulatory standards with pre-approved templates.' }
        ],
        useCases: [
            { scenario: 'Law Firms', solution: 'Coordinate complex multi-party real estate closings with detailed versioning.' },
            { scenario: 'Development Firms', solution: 'Manage hundreds of subcontractor agreements and purchase orders per project.' },
            { scenario: 'Global Retailers', solution: 'Standardize lease agreements across different regional jurisdictions centrally.' }
        ],
        integrations: ['Adobe Sign', 'DocuSign', 'Dropbox Sign', 'Google Drive', 'SharePoint']
    },
    'rental-accounting': {
        id: 'rental-accounting',
        name: 'Rental Accounting',
        title: 'Rental Accounting',
        tagline: 'Precision Fund Management & Automated Owner Distribution',
        description: 'Tackle the complexities of property finance. Kiaan Rental Accounting manages rent collection, service charges, and owner payouts with zero manual effort.',
        mainKeyword: 'FISCAL TRANSPARENCY',
        keywords: [
            'Rental Accounting Software',
            'Property Finance Management',
            'Rent Ledger System',
            'Landlord Accounting Tool',
            'SaaS Property Accounting',
            'Lease Financial Tracking',
            'Real Estate Finance Platform',
            'Income & Expense Tracker',
            'Rental P&L Software',
            'Property Tax Management',
            'online rent collection software',
            'automated rent payment system',
            'rental payment reminder platform',
            'tenant payment tracking dashboard',
            'recurring rent billing software',
            'rent receipt generation tool',
            'property income collection system',
            'digital rent payment platform',
            'late fee calculation software',
            'rent reconciliation automation tool',
            'rental dues monitoring dashboard',
            'multi property rent tracking system',
            'rent accounting integration software',
            'landlord payment management platform',
            'rent payment analytics dashboard',
            'rental billing automation SaaS',
            'tenant payment notification system',
            'property revenue tracking tool',
            'secure rent payment gateway integration',
            'real estate payment management software'
        ],
        features: [
            {
                title: 'Automated Owner Payouts',
                desc: 'Calculate management fees and expenses, then distribute net funds to owners with one click.',
                iconName: 'Zap',
                items: ['Split-Fund Logic', 'Fee Automation', 'Bank Feed Sync', 'Payout Summaries']
            },
            {
                title: 'Utility Bill-Back Engine',
                desc: 'Automatically calculate and invoice tenants for electricity, water, or gas based on meter reads.',
                iconName: 'BarChart3',
                items: ['Meter Read Sync', 'Usage Thresholds', 'Variable Surcharges', 'Group Billing']
            },
            {
                title: 'Fiscal Health Reporting',
                desc: 'Generate real-time P&L, balance sheets, and tax reports for individual properties or the entire portfolio.',
                iconName: 'Activity',
                items: ['Cash Flow Graphs', 'Yield Analysis', 'Tax Export (IRS/HMRC)', 'Performance Tables']
            }
        ],
        benefits: [
            { title: 'Eliminate Errors', impact: 'Direct bank feed synchronization eliminates manual reconciliation mistakes.' },
            { title: 'Owner Trust', impact: 'Provide professional, automated statements that build confidence and keep owners loyal.' },
            { title: 'Tax Readiness', impact: 'Maintain a perfect, categorized record of every expense for easy year-end filing.' }
        ],
        useCases: [
            { scenario: 'Management Agencies', solution: 'Scale to thousands of units while maintaining perfect trust-account accuracy.' },
            { scenario: 'HOA & Strata Managers', solution: 'Coordinate community levies, reserve funds, and maintenance budgets.' },
            { scenario: 'Investment Funds', solution: 'Analyze the granular financial performance of high-value commercial assets.' }
        ],
        integrations: ['Plaid', 'Xero', 'QuickBooks', 'Sage', 'Stripe Business']
    },
    'real-estate-crm': {
        id: 'real-estate-crm',
        name: 'Real Estate CRM',
        title: 'Real Estate CRM',
        tagline: 'High-Velocity Lead Intelligence & Predictive Deal Orchestration',
        description: 'Convert more leads into listings and sales. Kiaan Real Estate CRM manages your entire sales pipeline with AI-driven insights and automated follow-ups.',
        mainKeyword: 'SALES VELOCITY',
        keywords: [
            'Real Estate CRM Software',
            'Property Sales CRM',
            'Lead Management for Realtors',
            'Real Estate Automation Tool',
            'SaaS Realty CRM',
            'Agent Management Platform',
            'Property Deal Tracking',
            'Broker CRM System',
            'Real Estate Pipeline Software',
            'Housing Sales Platform',
            'real estate lead tracking software',
            'property sales CRM platform',
            'real estate client management system',
            'broker lead management tool',
            'property deal tracking dashboard',
            'real estate sales automation software',
            'realtor contact management platform',
            'property inquiry tracking system',
            'real estate marketing CRM tool',
            'buyer seller database management software',
            'real estate pipeline analytics dashboard',
            'property follow up automation platform',
            'real estate commission tracking system',
            'realtor workflow automation software',
            'property booking management platform',
            'real estate reporting analytics tool',
            'brokerage CRM SaaS solution',
            'property customer engagement system',
            'real estate conversion tracking software',
            'smart realtor CRM platform'
        ],
        features: [
            {
                title: 'Omni-Channel Lead Capture',
                desc: 'Automatically ingest inquiries from Zillow, Facebook, and your website into a single dashboard.',
                iconName: 'Download',
                items: ['Source Tracking', 'Auto-Reply Rules', 'Social Media Sync', 'Duplicate Prevention']
            },
            {
                title: 'Visual Deal Pipeline',
                desc: 'Track the status of every listing and sale with a drag-and-drop Kanban interface tailored for real estate.',
                iconName: 'LayoutGrid',
                items: ['Custom Stages', 'Probability Scoring', 'Task Reminders', 'Revenue Forecasts']
            },
            {
                title: 'Intelligent Follow-up Drip',
                desc: 'Nurture cold leads automatically with personalized SMS and Email sequences based on their property interests.',
                iconName: 'Zap',
                items: ['Behavioral Triggers', 'Niche Newsletters', 'Anniversary Checks', 'Sentiment Analysis']
            }
        ],
        benefits: [
            { title: 'Higher Conversion', impact: 'Acknowledge leads in seconds and follow up consistently to boost sales by 30%.' },
            { title: 'Total Agent Visibility', impact: 'Monitor individual performance and distribute leads fairly across your agency.' },
            { title: 'Listing Integrity', impact: 'Keep your property data synchronized across every marketing channel automatically.' }
        ],
        useCases: [
            { scenario: 'Regional Agencies', solution: 'Coordinate dozens of agents across multiple local territories with shared data.' },
            { scenario: 'New Developments', solution: 'Manage off-plan sales, VIP waitlists, and high-volume project inquiries.' },
            { scenario: 'Buyer\'s Agents', solution: 'Track specific client requirements and match them against upcoming off-market inventory.' }
        ],
        integrations: ['Zillow', 'Realtor.com', 'WhatsApp', 'Mailchimp', 'Salesforce']
    },
    'facility-maintenance': {
        id: 'facility-maintenance',
        name: 'Facility Maintenance',
        title: 'Facility Maintenance',
        tagline: 'Proactive Asset Protection & Industrial-Grade Service Orchestration',
        description: 'Keep your properties in peak condition. Kiaan Facility Maintenance coordinates repairs, inspections, and preventative tasks with surgical precision.',
        mainKeyword: 'SERVICE EXCELLENCE',
        keywords: [
            'Facility Management Software',
            'Property Maintenance System',
            'Building Maintenance Platform',
            'Asset Maintenance Tracking',
            'SaaS Facility Tool',
            'Service Request Management',
            'Maintenance Scheduling Software',
            'Property Service CRM',
            'Smart Maintenance System',
            'Real Estate Support Tool',
            'property maintenance management software',
            'repair request tracking system',
            'building maintenance automation platform',
            'tenant service request tool',
            'facility maintenance dashboard',
            'maintenance workflow automation software',
            'property repair ticket system',
            'maintenance task scheduling tool',
            'real estate service tracking platform',
            'digital maintenance reporting system',
            'vendor maintenance coordination software',
            'apartment repair management dashboard',
            'maintenance analytics reporting tool',
            'work order automation system',
            'property upkeep monitoring software',
            'facility issue tracking platform',
            'maintenance history management tool',
            'building repair workflow software',
            'landlord maintenance dashboard',
            'property service automation solution'
        ],
        features: [
            {
                title: 'Preventative Schedule',
                desc: 'Set and forget recurring inspections for HVAC, elevators, and life-safety systems.',
                iconName: 'Calendar',
                items: ['Recurring Triggers', 'Compliance Checklist', 'Mobile Logging', 'Maintenance History']
            },
            {
                title: 'Mobile Inspection App',
                desc: 'Empower field staff to log issues with photos, annotations, and GPS data instantly from their phone.',
                iconName: 'Smartphone',
                items: ['Photo Capture', 'Markups', 'Voice-to-Task', 'Offline Mode']
            },
            {
                title: 'Vendor SLA Monitor',
                desc: 'Track third-party contractor performance against defined response and resolution times.',
                iconName: 'Activity',
                items: ['Response Tracking', 'Quality Scoring', 'Invoice Verification', 'Expert Matching']
            }
        ],
        benefits: [
            { title: 'Lower Repair Costs', impact: 'Catch issues early through preventative care, avoiding expensive emergency calls.' },
            { title: 'Extend Asset Life', impact: 'Maintain mechanical systems properly to defer massive capital replacement costs.' },
            { title: 'Regulatory Safety', impact: 'Maintain perfect records for fire safety and building code compliance audits.' }
        ],
        useCases: [
            { scenario: 'Office Complexes', solution: 'Manage daily janitorial, security, and technical maintenance across massive floorspace.' },
            { scenario: 'Shopping Malls', solution: 'Coordinate specialty contractors for escalators, lighting, and HVAC systems.' },
            { scenario: 'Hotel Groups', solution: 'Ensure room standards are met and public areas are pristine with automated checklists.' }
        ],
        integrations: ['Procore', 'ServiceNow', 'Slack', 'WhatsApp', 'NetSuite']
    },
    'property-listings': {
        id: 'property-listings',
        name: 'Property Listings',
        title: 'Property Listings',
        tagline: 'High-Impact Portfolio Visibility & Global Listing Orchestration',
        description: 'Command the market with Kiaan Property Listings. Our intelligent catalog management system ensures your inventory is always synchronized, optimized, and ready for high-velocity conversion.',
        mainKeyword: 'LISTING PERFORMANCE',
        keywords: [
            'real estate listing management software',
            'property catalog management platform',
            'online property listing system',
            'real estate inventory dashboard',
            'property showcase automation tool',
            'listing approval workflow software',
            'real estate portfolio display platform',
            'property availability tracking system',
            'digital property showcase dashboard',
            'listing analytics reporting tool',
            'property upload management system',
            'real estate media gallery platform',
            'listing performance tracking software',
            'property brochure generation tool',
            'online real estate showcase platform',
            'centralized listing management SaaS',
            'property search integration system',
            'real estate catalog reporting software',
            'smart listing automation platform',
            'property advertisement management tool'
        ],
        features: [
            {
                title: 'Global Showcase Hub',
                desc: 'Manage and syndicate your entire property portfolio across global portals with a single click.',
                iconName: 'Layout',
                items: ['Multi-Portal Sync', 'Media Asset Vault', 'High-Res Galleries', 'Virtual Tour Support']
            },
            {
                title: 'Inventory Analytics',
                desc: 'Real-time tracking of listing performance, inquiry volumes, and unit availability across every development.',
                iconName: 'BarChart3',
                items: ['View Tracking', 'Lead Velocity', 'Stock Aging', 'Demand Heatmaps']
            }
        ],
        benefits: [
            { title: 'Faster Conversions', impact: 'Reduce time-on-market with professional, automated brochures and high-impact digital showcases.' },
            { title: 'Total Data Integrity', impact: 'Eliminate duplicate or outdated listings with a centralized, immutable source of truth.' }
        ],
        useCases: [
            { scenario: 'Large Developers', solution: 'Showcase thousands of units across multiple global project phases centrally.' },
            { scenario: 'Luxury Agencies', solution: 'Deliver curated, high-end property galleries that wow high-net-worth investors.' }
        ],
        integrations: ['Zillow', 'MagicBricks', 'Instagram Business', 'Google Maps', 'Meta Ads']
    },
    'insurance-tracking': {
        id: 'insurance-tracking',
        name: 'Insurance Tracking',
        title: 'Insurance Tracking',
        tagline: 'Precision Risk Mitigation & Automated Asset Protection Compliance',
        description: 'Never miss a renewal again. Kiaan Insurance Tracking provides a robust framework for monitoring policy compliance across your entire real estate portfolio.',
        mainKeyword: 'RISK COMPLIANCE',
        keywords: [
            'property insurance tracking software',
            'insurance policy management system',
            'real estate insurance compliance tool',
            'policy expiration monitoring platform',
            'insurance document tracking dashboard',
            'property risk management software',
            'insurance renewal alert system',
            'building insurance analytics platform',
            'policy coverage management tool',
            'insurance record automation software',
            'landlord insurance tracking system',
            'property protection compliance dashboard',
            'insurance reporting management tool',
            'policy documentation SaaS solution',
            'real estate insurance admin panel',
            'risk assessment tracking software',
            'property coverage monitoring platform',
            'insurance claim documentation system',
            'automated policy renewal workflow tool',
            'insurance lifecycle management software'
        ],
        features: [
            {
                title: 'Compliance Shield',
                desc: 'Automated monitoring of policy status and expiration dates for every asset in your portfolio.',
                iconName: 'ShieldCheck',
                items: ['Auto-Alerts', 'Document Vault', 'Audit History', 'Certificate Sync']
            },
            {
                title: 'Risk Analytics Hub',
                desc: 'Evaluate coverage gaps and liability exposure with industrial-grade risk assessment dashboards.',
                iconName: 'Activity',
                items: ['Coverage Mapping', 'Claim History', 'Renewal Forecasts', 'Liability Heatmaps']
            }
        ],
        benefits: [
            { title: 'Lower Liability', impact: 'Ensure 100% policy compliance to prevent costly uninsured losses and legal penalties.' },
            { title: 'Zero Missed Renewals', impact: 'Stay ahead of expirations with automated workflows that notify both agents and owners.' }
        ],
        useCases: [
            { scenario: 'Asset Managers', solution: 'Maintain strict insurance compliance for institutional-grade commercial portfolios.' },
            { scenario: 'HOA Management', solution: 'Coordinate specialized building insurance for sprawling residential communities and high-rises.' }
        ],
        integrations: ['RiskManagement API', 'DocuSign', 'Slack', 'Office 365', 'QuickBooks']
    }
};
