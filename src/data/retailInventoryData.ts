import { ProductData } from './businessCompanyData';

export const retailInventoryData: Record<string, ProductData> = {
    'pos-software': {
        id: 'pos-software',
        name: 'POS Software',
        title: 'POS Software',
        tagline: 'High-Velocity Checkout & Real-Time Unified Commerce Orchestration',
        description: 'Transform your point of sale into a growth engine. Kiaan POS bridges the gap between physical stores and digital inventory, providing a seamless checkout experience.',
        mainKeyword: 'RETAIL AGILITY',
        keywords: [
            'Point of Sale System',
            'Retail POS Software',
            'Billing POS Platform',
            'Cloud POS Solution',
            'Restaurant POS Software',
            'POS Inventory System',
            'Digital Billing Machine',
            'Retail Checkout Software',
            'POS ERP System',
            'SaaS POS Platform',
            'retail billing system software',
            'point of sale cloud solution',
            'smart checkout management system',
            'retail transaction processing platform',
            'POS sales analytics dashboard',
            'touch screen billing software',
            'POS with barcode integration',
            'store billing automation tool',
            'retail payment processing system',
            'cloud based POS India',
            'POS with inventory sync',
            'retail counter management software',
            'digital receipt generation platform',
            'multi terminal POS solution',
            'fast billing software for stores',
            'POS with GST compliance India',
            'retail sales reporting tool',
            'restaurant billing POS system',
            'POS SaaS platform India',
            'secure payment POS software'
        ],
        features: [
            {
                title: 'Hybrid Checkout Engine',
                desc: 'Support credit cards, digital wallets, UPI, and cash with instant split-payment logic.',
                iconName: 'CreditCard',
                items: ['NFC Tap-to-Pay', 'QR Code Payments', 'Multi-Terminal Sync', 'Digital Receipts']
            },
            {
                title: 'Infinite Offline Mode',
                desc: 'Never stop selling. Continue processing transactions without internet; data syncs automatically once back online.',
                iconName: 'ShieldCheck',
                items: ['Local Database Storage', 'Periodic Background Sync', 'Secure Cache Sync', 'Manual Data Export']
            },
            {
                title: 'Integrated CRM & Loyalty',
                desc: 'Identify repeat customers at checkout and apply loyalty points or personalized discounts instantly.',
                iconName: 'Users',
                items: ['Member Recognition', 'Point Redemption', 'Store Credit Management', 'Purchase History View']
            }
        ],
        benefits: [
            { title: 'Faster Lines', impact: 'Reduce average checkout time by 25% with optimized UI and hardware integration.' },
            { title: 'Unified Data', impact: 'Eliminate manual stock updates with 100% real-time inventory synchronization.' },
            { title: 'Actionable Insights', impact: 'Analyze peak sales hours and staff performance from a central dashboard.' }
        ],
        useCases: [
            { scenario: 'Fashion Boutiques', solution: 'Manage sizing variants and provide professional, branded digital receipts.' },
            { scenario: 'QSR & Coffee Shops', solution: 'Accelerate orders with modifier support and integrated kitchen display systems.' },
            { scenario: 'Pop-up Events', solution: 'Deploy portable iPad-based terminals with mobile connectivity for field sales.' }
        ],
        integrations: ['Square', 'Stripe Terminal', 'Shopify POS', 'Star Micronics', 'Honeywell']
    },
    'inventory-system': {
        id: 'inventory-system',
        name: 'Inventory System',
        title: 'Inventory System',
        tagline: 'Precision Stock Intelligence & Automated Supply Chain Transparency',
        description: 'Never lose a sale to an out-of-stock item. Kiaan Inventory provides real-time visibility across all your warehouses, stores, and digital channels.',
        mainKeyword: 'STOCK OPTIMIZATION',
        keywords: [
            'Inventory Management Software',
            'Stock Control System',
            'Warehouse Inventory Tool',
            'Inventory Tracking Platform',
            'SaaS Inventory Solution',
            'Product Stock Management',
            'Real-Time Inventory Software',
            'Business Inventory System',
            'Smart Stock Control',
            'Retail Inventory Tool',
            'stock control management software',
            'real time inventory tracking platform',
            'inventory monitoring automation tool',
            'warehouse stock control system',
            'product quantity tracking software',
            'inventory audit management platform',
            'stock movement tracking tool',
            'multi warehouse inventory system',
            'inventory analytics dashboard',
            'automated stock update software',
            'purchase and stock management tool',
            'inventory valuation tracking system',
            'cloud inventory management India',
            'digital stock register software',
            'inventory reorder alert system',
            'retail inventory automation platform',
            'centralized stock database system',
            'item level tracking software',
            'inventory reporting dashboard',
            'smart stock optimization tool'
        ],
        features: [
            {
                title: 'Multi-Location Control',
                desc: 'Track stock levels across hundreds of warehouses and retail stores from a single portal.',
                iconName: 'Globe',
                items: ['Inter-Store Transfers', 'Virtual Warehousing', 'Regional Allotments', 'Location-Based Pricing']
            },
            {
                title: 'Automated Reordering',
                desc: 'AI-driven alerts that notify you to restock based on sales velocity and lead times.',
                iconName: 'Zap',
                items: ['Smart Thresholds', 'Vendor Lead-Time Math', 'Auto-PO Generation', 'Past-Trend Modeling']
            },
            {
                title: 'Advanced Valuation',
                desc: 'Support FIFO, LIFO, and Weighted Average cost models for accurate financial reporting.',
                iconName: 'BarChart3',
                items: ['COGS Calculation', 'Stock Aging Reports', 'Write-off Management', 'Batch/Serial Tracking']
            }
        ],
        benefits: [
            { title: 'Zero Stockouts', impact: 'Reduce lost sales by 15% through predictive low-stock alerting.' },
            { title: 'Reduced Carrying Costs', impact: 'Optimize stock levels and reduce capital tied up in slow-moving inventory.' },
            { title: 'Accuracy & Trust', impact: 'Maintain 99.9% inventory accuracy with integrated barcode scanning.' }
        ],
        useCases: [
            { scenario: 'E-commerce Retailers', solution: 'Sync stock levels across website, Amazon, and physical showrooms.' },
            { scenario: 'Hardware Stores', solution: 'Manage thousands of SKUs and variants via granular category mapping.' },
            { scenario: 'B2B Wholesalers', solution: 'Track bulk movements and allocate stock for high-value future orders.' }
        ],
        integrations: ['Amazon Seller Central', 'Walmart Marketplace', 'QuickBooks', 'Xero', 'ShipStation']
    },
    'warehouse-management': {
        id: 'warehouse-management',
        name: 'Warehouse Management',
        title: 'Warehouse Management',
        tagline: 'High-Efficiency Fulfillment & Industrial-Grade Logistics Control',
        description: 'Optimize your floor space and picking routes. Kiaan WMS turns your warehouse into a high-performance fulfillment center.',
        mainKeyword: 'FULFILLMENT VELOCITY',
        keywords: [
            'Warehouse Management Software',
            'WMS System',
            'Warehouse Inventory Tracking',
            'Storage Management Tool',
            'Logistics Warehouse Platform',
            'Warehouse ERP System',
            'SaaS WMS Solution',
            'Stock Movement Tracking',
            'Warehouse Automation Tool',
            'Supply Chain Warehouse Software',
            'warehouse operations software',
            'storage management automation system',
            'warehouse inventory control platform',
            'goods receiving management tool',
            'warehouse logistics tracking software',
            'storage analytics dashboard',
            'warehouse workflow automation platform',
            'inventory bin tracking system',
            'warehouse dispatch management tool',
            'stock location tracking software',
            'warehouse reporting system',
            'fulfillment center management platform',
            'warehouse productivity monitoring tool',
            'storage audit tracking software',
            'cloud warehouse management solution',
            'order picking automation system',
            'warehouse capacity planning software',
            'warehouse barcode tracking tool',
            'digital warehouse control panel',
            'enterprise warehouse SaaS platform'
        ],
        features: [
            {
                title: 'Dynamic Bin Mapping',
                desc: 'Assign every SKU to a specific bin or shelf for 100% picking accuracy.',
                iconName: 'Map',
                items: ['Zone Setup', 'Aisle/Shelf Hierarchy', 'Velocity-Based Slotting', 'Cycle Count Management']
            },
            {
                title: 'Wave & Batch Picking',
                desc: 'Group orders together to reduce walking time and double fulfillment speed.',
                iconName: 'Zap',
                items: ['Route Optimization', 'Cluster Picking', 'Mobile Scanner App', 'Priority Queues']
            },
            {
                title: 'Quality Control Gateways',
                desc: 'Verify every item before packing with mandatory scan-checks to eliminate errors.',
                iconName: 'ShieldCheck',
                items: ['Weight Verification', 'Photo Proofing', 'Barcode Validation', 'Return Inspections']
            }
        ],
        benefits: [
            { title: 'Double Throughput', impact: 'Fulfill 2x more orders per shift with route-optimized picking.' },
            { title: 'Error-Free Shipping', impact: 'Reduce mis-shipments to near zero with multi-stage verification.' },
            { title: 'Labor Optimization', impact: 'Track staff performance KPIs and allocate labor during peak times.' }
        ],
        useCases: [
            { scenario: '3PL Providers', solution: 'Manage multiple client inventories within a single facility with strict segregation.' },
            { scenario: 'Consumer Electronics', solution: 'Full serial-number tracking for warranties and high-value security.' },
            { scenario: 'Cold Storage Food', solution: 'Manage FEFO (First-Expired-First-Out) logic for perishable goods.' }
        ],
        integrations: ['DHL', 'FedEx', 'UPS', 'NetSuite', 'SAP']
    },
    'order-management': {
        id: 'order-management',
        name: 'Order Management',
        title: 'Order Management',
        tagline: 'Omni-Channel Lifecycle Control & Seamless Multi-Store Fulfillment',
        description: 'Manage the entire journey of an order from "Purchase" to "Delivered". Mid-sized enterprises use Kiaan OMS to synchronize complex fulfillment logic.',
        mainKeyword: 'ORDER ORCHESTRATION',
        keywords: [
            'Order Management Software',
            'Order Tracking System',
            'Online Order Processing Tool',
            'Sales Order Platform',
            'E-commerce Order Management',
            'SaaS OMS System',
            'Order Fulfillment Software',
            'Customer Order Tracking',
            'Automated Order Processing',
            'Retail Order Software',
            'order processing automation software',
            'online order tracking system',
            'sales order management platform',
            'order fulfillment workflow tool',
            'order lifecycle management software',
            'customer order tracking dashboard',
            'digital order processing system',
            'order dispatch automation platform',
            'order status monitoring software',
            'multi channel order management tool',
            'purchase order tracking system',
            'order analytics reporting platform',
            'order integration management software',
            'real time order visibility system',
            'SaaS order management India',
            'automated order routing tool',
            'bulk order processing platform',
            'order confirmation automation system',
            'eCommerce order management software',
            'centralized order dashboard'
        ],
        features: [
            {
                title: 'Strategic Order Routing',
                desc: 'Automatically route orders to the warehouse or store closest to the customer to save shipping costs.',
                iconName: 'Shuffle',
                items: ['Geographic Logic', 'Stock-Availability Logic', 'Priority Stores', 'Split-Order Handling']
            },
            {
                title: 'Customer Return Portal',
                desc: 'Give your clients a branded space to initiate returns and generate shipping labels automatically.',
                iconName: 'RefreshCw',
                items: ['Returns Management', 'Automatic Approvals', 'Refund Sync', 'Reason Tracking']
            },
            {
                title: 'Order Status Intelligence',
                desc: 'Provide real-time, granular tracking updates to customers via Email, SMS, and Portal.',
                iconName: 'Activity',
                items: ['Milestone Tracking', 'Carrier API Integration', 'Branded Tracking Pages', 'Delay Alerts']
            }
        ],
        benefits: [
            { title: 'Lower Ship Costs', impact: 'Reduce shipping expenses by 15% through smarter warehouse routing.' },
            { title: 'Better CX', impact: 'Eliminate customer "where is my order" queries with proactive updates.' },
            { title: 'Inventory Protection', impact: 'Reserve stock instantly across channels to prevent double-selling.' }
        ],
        useCases: [
            { scenario: 'D2C Brands', solution: 'Manage high volumes across web stores and social marketplaces seamlessly.' },
            { scenario: 'Hybrid Retailers', solution: 'Enable "Buy Online, Pick Up in Store" (BOPIS) with real-time shop sync.' },
            { scenario: 'Subscription Boxes', solution: 'Plan and execute massive monthly shipping waves efficiently.' }
        ],
        integrations: ['ShipStation', 'AfterShip', 'Shopify', 'BigCommerce', 'Stripe']
    },
    'retail-erp': {
        id: 'retail-erp',
        name: 'Retail ERP',
        title: 'Retail ERP',
        tagline: 'End-to-End Enterprise Governance & Unified Retail Nervous System',
        description: 'Connect every department—from Finance and Procurement to POS and HR. Kiaan Retail ERP is the ultimate source of truth for large-scale retail operations.',
        mainKeyword: 'ENTERPRISE RETAIL',
        keywords: [
            'Retail ERP Software',
            'Retail Management System',
            'Store ERP Platform',
            'Retail Automation Tool',
            'SaaS Retail ERP Solution',
            'Retail Accounting Software',
            'Inventory ERP System',
            'Retail CRM Platform',
            'Multi-Store ERP Software',
            'Enterprise Retail System',
            'retail enterprise management software',
            'retail operations automation platform',
            'retail business ERP solution',
            'retail accounting integration system',
            'multi store ERP software',
            'retail financial management tool',
            'store performance analytics platform',
            'retail supply chain ERP system',
            'retail reporting dashboard',
            'cloud retail ERP India',
            'retail process automation software',
            'integrated retail management system',
            'retail admin control panel',
            'retail resource planning platform',
            'retail operations dashboard',
            'enterprise retail SaaS solution',
            'store inventory ERP software',
            'retail workflow automation tool',
            'centralized retail ERP system',
            'smart retail management platform'
        ],
        features: [
            {
                title: 'Unified Financial Core',
                desc: 'Consolidate sales from all regions into your general ledger in real-time.',
                iconName: 'BookOpen',
                items: ['Multi-Entity Accounting', 'Tax Compliance Engine', 'Audit-Ready Reporting', 'Cash Flow Forecasts']
            },
            {
                title: 'Strategic Procurement',
                desc: 'Centralize purchasing with vendor management, PO workflows, and contract tracking.',
                iconName: 'ClipboardList',
                items: ['Vendor Spend Analysis', 'Contract Lifecycle', 'Bulk Discounts', 'Quality Audits']
            },
            {
                title: 'Workforce Central',
                desc: 'Manage retail staff schedules, payroll, and commissions from a single portal.',
                iconName: 'Users',
                items: ['Commission Math', 'Shift Roster Sync', 'Payroll Integration', 'Performance KPIs']
            }
        ],
        benefits: [
            { title: 'Total Visibility', impact: 'One screen to see profit, stock, and labor costs across the entire org.' },
            { title: 'Regulatory Peace', impact: 'Automate complex retail tax rules and local statutory compliance.' },
            { title: 'Data-Driven Growth', impact: 'Identify winning product categories and expand with confidence.' }
        ],
        useCases: [
            { scenario: 'Supermarket Chains', solution: 'Manage thin-margin operations with high-volume procurement and waste tracking.' },
            { scenario: 'franchise Networks', solution: 'Standardize operations and financial reporting across hundreds of locations.' },
            { scenario: 'Global Luxury Groups', solution: 'Maintain brand consistency and consolidate multi-currency revenue streams.' }
        ],
        integrations: ['SAP S/4HANA', 'Oracle NetSuite', 'Microsoft Dynamics 365', 'Salesforce', 'Workday']
    },
    'supplier-management': {
        id: 'supplier-management',
        name: 'Supplier Management',
        title: 'Supplier Management',
        tagline: 'Vendor Relationship Optimization & Resilient Supply Chain Control',
        description: 'Lower costs and mitigate risks. Kiaan Supplier Management provides a structured portal for vendor onboarding, quality tracking, and performance analysis.',
        mainKeyword: 'VENDOR GOVERNANCE',
        keywords: [
            'Supplier Management Software',
            'Vendor Management System',
            'Procurement Software Platform',
            'Vendor Tracking Tool',
            'SaaS Supplier Solution',
            'Purchase Order Management',
            'Supplier CRM System',
            'Vendor Payment Tracking',
            'Procurement Automation Tool',
            'Supply Chain Vendor Software',
            'vendor management software',
            'supplier tracking system',
            'vendor onboarding platform',
            'supplier performance monitoring tool',
            'purchase vendor automation software',
            'supplier database management system',
            'vendor communication tracking platform',
            'supplier analytics dashboard',
            'vendor payment tracking software',
            'supplier contract management tool',
            'cloud vendor management solution',
            'supplier compliance monitoring system',
            'vendor reporting dashboard',
            'supplier procurement software',
            'vendor relationship management platform',
            'supplier billing integration tool',
            'vendor approval workflow system',
            'enterprise supplier management SaaS',
            'supplier documentation tracking software',
            'vendor performance evaluation platform'
        ],
        features: [
            {
                title: 'Digital Vendor Portal',
                desc: 'Give suppliers a secure space to upload invoices, certificates, and update lead times.',
                iconName: 'Lock',
                items: ['Self-Service Onboarding', 'Document Expiry Alerts', 'PO Acceptance', 'Payment History']
            },
            {
                title: 'Performance Scorecards',
                desc: 'Objectively rank suppliers based on lead-time accuracy, product quality, and price variance.',
                iconName: 'Target',
                items: ['Quality Defect Tracking', 'Delivery Variance', 'Price Benchmarking', 'SLA Monitoring']
            },
            {
                title: 'Chain-of-Custody Compliance',
                desc: 'Track sustainability certificates and regulatory documents for every part of your supply chain.',
                iconName: 'ShieldCheck',
                items: ['ESG Monitoring', 'ISO Certification Vault', 'Audit Logs', 'Regulatory Mapping']
            }
        ],
        benefits: [
            { title: 'Lower Procurement Cost', impact: 'Base negotiations on hard performance data and spend analysis.' },
            { title: 'Reduced Risk', impact: 'Identify high-risk suppliers before they cause a production shutdown.' },
            { title: 'Faster Onboarding', impact: 'Reduce time-to-onboard new vendors by 50% with automated workflows.' }
        ],
        useCases: [
            { scenario: 'Automotive Mfg', solution: 'Track thousands of precision components and vendor quality standards.' },
            { scenario: 'Pharma Retail', solution: 'Ensure all suppliers meet strict medical compliance and handling rules.' },
            { scenario: 'Construction Firms', solution: 'Manage dozens of subcontractors and equipment vendors per project.' }
        ],
        integrations: ['Ariba', 'Coupa', 'DocuSign', 'Jira', 'Slack']
    },
    'stock-tracking-tool': {
        id: 'stock-tracking-tool',
        name: 'Stock Tracking Tool',
        title: 'Stock Tracking Tool',
        tagline: 'Lightweight Inventory Intelligence & Simple Assets Control',
        description: 'Perfect for small teams and specialized departments. Kiaan Stock Tracking offers the power of industrial stock systems without the complexity.',
        mainKeyword: 'EASY STOCK CONTROL',
        keywords: [
            'Stock Tracking Software',
            'Real-Time Stock Monitoring',
            'Inventory Tracker Tool',
            'Product Quantity Tracking',
            'Warehouse Stock Software',
            'SaaS Stock System',
            'Retail Stock Control',
            'Automated Stock Alerts',
            'Inventory Analytics Tool',
            'Smart Stock Platform',
            'product stock monitoring software',
            'real time item tracking system',
            'stock movement automation platform',
            'inventory level monitoring tool',
            'barcode stock tracking software',
            'stock audit reporting dashboard',
            'digital stock control system',
            'stock reconciliation software',
            'warehouse item tracking platform',
            'stock analytics monitoring tool',
            'product availability tracking system',
            'multi location stock tracker',
            'stock reporting automation software',
            'inventory variance tracking platform',
            'retail stock visibility system',
            'stock performance dashboard',
            'product tracking SaaS solution',
            'stock update automation tool',
            'enterprise stock monitoring software',
            'centralized inventory tracking platform'
        ],
        features: [
            {
                title: 'Mobile-First Scanning',
                desc: 'Use your smartphone camera to scan barcodes and update stock levels on the fly.',
                iconName: 'Smartphone',
                items: ['iOS/Android Support', 'Batch Scanning', 'Flashlight Support', 'Offline Sync']
            },
            {
                title: 'Custom Label Creator',
                desc: 'Generate and print professional QR codes and barcodes for any item in seconds.',
                iconName: 'Printer',
                items: ['Multi-Size Support', 'Cloud Print Integration', 'Avery Template Sync', 'Batch Generation']
            },
            {
                title: 'Lending & Asset Tracking',
                desc: 'Track who has what item (e.g., tools, laptops, samples) and when it\'s due back.',
                iconName: 'UserCheck',
                items: ['Check-in/Check-out', 'Due Date Alerts', 'Condition Reports', 'Historical Logs']
            }
        ],
        benefits: [
            { title: 'Setup in Minutes', impact: 'Go from zero to a fully tracked inventory in less than an hour.' },
            { title: 'Zero Hardware Needed', impact: 'Replace expensive scanners with existing team mobile devices.' },
            { title: 'Team Collaboration', impact: 'Free up your time by letting the whole team update stock counts.' }
        ],
        useCases: [
            { scenario: 'Creative Studios', solution: 'Manage expensive cameras, lighting gear, and prop inventory.' },
            { scenario: 'IT Departments', solution: 'Track laptops, monitors, and cables assigned to employees.' },
            { scenario: 'Small E-commerce', solution: 'Organize warehouse shelves and monitor daily sales movement.' }
        ],
        integrations: ['Google Sheets', 'Excel Online', 'Slack', 'Dropbox', 'Zapier']
    },
    'multi-store-system': {
        id: 'multi-store-system',
        name: 'Multi-Store System',
        title: 'Multi-Store System',
        tagline: 'Chain-Level Orchestration & Global Retail Consistency',
        description: 'Scale your retail footprint with confidence. Kiaan Multi-Store provides centralized control over pricing, inventory, and staff across all your locations.',
        mainKeyword: 'CHAIN MANAGEMENT',
        keywords: [
            'Multi Store Management Software',
            'Chain Store ERP System',
            'Centralized Inventory Platform',
            'Multi Location POS Software',
            'SaaS Multi Store Tool',
            'Retail Chain Management',
            'Franchise Management System',
            'Store Network ERP',
            'Centralized Retail CRM',
            'Multi Branch Software',
            'multi outlet management software',
            'chain store management platform',
            'centralized store monitoring system',
            'branch level reporting dashboard',
            'multi location retail software',
            'store network management tool',
            'cross store inventory sync system',
            'multi branch billing platform',
            'retail chain automation software',
            'centralized store analytics dashboard',
            'store level sales monitoring system',
            'multi unit retail SaaS solution',
            'branch performance tracking software',
            'retail franchise management tool',
            'multi location POS integration',
            'store hierarchy management platform',
            'enterprise multi store software',
            'branch operations automation system',
            'centralized retail reporting tool',
            'multi store admin dashboard'
        ],
        features: [
            {
                title: 'Global Master Pricing',
                desc: 'Update prices across 100 stores with one click, or set regional pricing based on location tiers.',
                iconName: 'Tag',
                items: ['Regional Overrides', 'Markdown Management', 'Consistency Alerts', 'Currency Logic']
            },
            {
                title: 'Inter-Store Transfers',
                desc: 'Move stock from a slow-moving location to a high-demand store to prevent markdowns.',
                iconName: 'Shuffle',
                items: ['Transfer Requests', 'In-Transit Tracking', 'Electronic Delivery Notes', 'Auto-Replenish']
            },
            {
                title: 'Regional BI Analytics',
                desc: 'Compare store performance, foot traffic, and conversion rates across different territories.',
                iconName: 'BarChart3',
                items: ['Store Leaderboards', 'Heatmap Trends', 'Comparative P&L', 'Cluster Analysis']
            }
        ],
        benefits: [
            { title: 'Brand Consistency', impact: 'Ensure every store follows the same pricing and promotion strategy.' },
            { title: 'Inventory Efficiency', impact: 'Reduce company-wide stock levels by 20% through smart store-to-store transfers.' },
            { title: 'Centralized Control', impact: 'Manage a network of 1,000 stores with a small, lean head-office team.' }
        ],
        useCases: [
            { scenario: 'Global Retailers', solution: 'Standardize operations and pricing across different countries and regions.' },
            { scenario: 'Franchise Operators', solution: 'Provide individual owners with tools while maintaining head-office oversight.' },
            { scenario: 'Showroom Networks', solution: 'Display floor models and fulfill orders from central regional warehouses.' }
        ],
        integrations: ['Google Maps API', 'SAP', 'NetSuite', 'Adyen', 'Workday']
    },
    'seller-panel-saas': {
        id: 'seller-panel-saas',
        name: 'Seller Panel SaaS',
        title: 'Seller Panel SaaS',
        tagline: 'Marketplace Vendor Empowerment & High-Performance Merchant Portal',
        description: 'Build your own Amazon or Etsy. Kiaan Seller Panel provides your marketplace vendors with world-class tools to manage their catalogs and orders.',
        mainKeyword: 'MERCHANT SUCCESS',
        keywords: [
            'Seller Panel Software',
            'Marketplace Seller Dashboard',
            'Vendor Portal System',
            'SaaS Seller Platform',
            'Multi Vendor Management',
            'Seller Analytics Tool',
            'Online Marketplace Software',
            'Vendor Performance Dashboard',
            'E-commerce Seller CRM',
            'Seller Management System',
            'online seller dashboard software',
            'vendor portal management system',
            'marketplace seller management platform',
            'seller onboarding automation tool',
            'multi vendor SaaS solution',
            'seller order tracking software',
            'vendor sales analytics dashboard',
            'digital seller management system',
            'online marketplace admin panel',
            'seller performance monitoring tool',
            'multi vendor reporting platform',
            'eCommerce seller automation software',
            'vendor payout tracking system',
            'seller product listing management',
            'vendor billing integration tool',
            'seller commission tracking platform',
            'marketplace vendor dashboard SaaS',
            'seller analytics reporting software',
            'supplier portal automation system',
            'centralized vendor admin panel'
        ],
        features: [
            {
                title: 'Advanced Merchant Dashboard',
                desc: 'A dedicated, white-labeled home for your sellers to track sales, ratings, and payouts.',
                iconName: 'Layout',
                items: ['Revenue Metrics', 'Order Queues', 'Customer Requests', 'Inventory Health']
            },
            {
                title: 'Self-Service Catalog Management',
                desc: 'Empower sellers to upload products, manage variants, and set their own pricing/promotions.',
                iconName: 'FilePlus',
                items: ['Bulk Upload Support', 'Image Editor', 'Category Mapping', 'Description SEO']
            },
            {
                title: 'Automated Payout Engine',
                desc: 'Calculate marketplace commissions and automate payouts to sellers via bank transfer or wallet.',
                iconName: 'CreditCard',
                items: ['Commission Logic', 'Tax Withholding', 'Payout Schedules', 'Ledger Sync']
            }
        ],
        benefits: [
            { title: 'Scale Rapidly', impact: 'Onboard thousands of sellers with automated, self-service tools.' },
            { title: 'Zero Admin Overhead', impact: 'Offload catalog and order management to your sellers while keeping oversight.' },
            { title: 'Higher Retention', impact: 'Build seller loyalty with a professional, easy-to-use merchant experience.' }
        ],
        useCases: [
            { scenario: 'Multi-Vendor Marketplaces', solution: 'Coordinate hundreds of independent brands selling through a single site.' },
            { scenario: 'Service Marketplaces', solution: 'Allow consultants or tradies to manage their bookings and earnings.' },
            { scenario: 'Niche Community Markets', solution: 'Empower local artisans to reach a global audience with professional tools.' }
        ],
        integrations: ['Stripe Connect', 'Mangopay', 'Adyen for Platforms', 'Cloudinary', 'SendGrid']
    },
    'pricing-discount': {
        id: 'pricing-discount',
        name: 'Pricing & Discount',
        title: 'Pricing & Discount',
        tagline: 'Dynamic Margin Optimization & Strategic Promotion Orchestration',
        description: 'Master your margins. Kiaan Pricing & Discount enables complex promotional logic that drives sales while protecting your bottom line.',
        mainKeyword: 'REVENUE OPTIMIZATION',
        keywords: [
            'Pricing Management Software',
            'Discount Automation Tool',
            'Dynamic Pricing System',
            'Retail Pricing Platform',
            'SaaS Discount Engine',
            'Promotion Management Software',
            'Smart Pricing Analytics',
            'Retail Offer Automation',
            'Price Control System',
            'Sales Discount Management',
            'retail pricing management software',
            'discount rule automation system',
            'dynamic pricing platform',
            'promotional pricing management tool',
            'price adjustment automation software',
            'retail offer management system',
            'discount analytics dashboard',
            'bulk pricing configuration platform',
            'price change tracking software',
            'promotional campaign pricing tool',
            'real time pricing management system',
            'discount approval workflow software',
            'retail margin management platform',
            'offer performance tracking system',
            'multi store pricing control tool',
            'price optimization SaaS solution',
            'retail discount reporting dashboard',
            'coupon management automation system',
            'sales pricing analytics platform',
            'centralized pricing control software'
        ],
        features: [
            {
                title: 'Universal Discount Engine',
                desc: 'Launch any deal: BOGO, Tiered-Spends, Coupon Codes, or Category flash sales.',
                iconName: 'Tag',
                items: ['Stacking Logic', 'Usage Limits', 'Start/End Scheduling', 'Customer-Group Pricing']
            },
            {
                title: 'Dynamic AI Pricing',
                desc: 'Automatically adjust prices based on competitor data, stock levels, or time of day.',
                iconName: 'Zap',
                items: ['Competitor Scraping', 'Inventory Scarcity Logic', 'Time-of-Day Adjustments', 'Margin Protection Guards']
            },
            {
                title: 'Promotion Proofing',
                desc: 'Analyze the impact of a sale before you launch it with built-in profitability modeling.',
                iconName: 'BarChart3',
                items: ['Margin Simulation', 'Historical Performance Match', 'Cannibalization Analysis', 'Budget Capping']
            }
        ],
        benefits: [
            { title: 'Maximize Profit', impact: 'AI pricing identifies opportunities to increase prices during high demand.' },
            { title: 'Drive Volume', impact: 'Execute highly targeted promotions that move slow stock without losing money.' },
            { title: 'Customer Delight', impact: 'Provide personalized vouchers and tiered rewards that build loyalty.' }
        ],
        useCases: [
            { scenario: 'High-Volume E-comm', solution: 'Coordinate Black Friday mega-sales with complex stacking rules and server stability.' },
            { scenario: 'B2B Wholesale', solution: 'Manage different price-books for thousands of high-value contract customers.' },
            { scenario: 'Travel & Booking', solution: 'Deploy "Last Minute Deals" based on seat or room availability.' }
        ],
        integrations: ['Competera', 'Prisync', 'Shopify Plus', 'Magento', 'NetSuite']
    }
};
