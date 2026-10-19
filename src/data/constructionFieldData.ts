import { ProductData } from './businessCompanyData';

export const constructionFieldData: Record<string, ProductData> = {
    'project-management': {
        id: 'project-management',
        name: 'Project Management',
        title: 'Project Management',
        tagline: 'Precision Site Orchestration & Global Infrastructure Transparency',
        description: 'Take command of your construction projects. Kiaan PM connects HQ with the field, managing timelines, budgets, and safety in one industrial-grade platform.',
        mainKeyword: 'BUILDING EXCELLENCE',
        keywords: [
            'Construction Management Software',
            'Project Tracking System',
            'Site Management ERP',
            'SaaS Construction Platform',
            'Contractor Management Tool',
            'Budget Tracking Software',
            'Building Project CRM',
            'Construction ERP System',
            'Workforce Tracking Tool',
            'Infrastructure Management Software'
        ],
        features: [
            {
                title: 'Live Gantt & Timeline',
                desc: 'Coordinate hundreds of tasks across dozens of teams with real-time critical path analysis.',
                iconName: 'LayoutGrid',
                items: ['Critical Path Drag', 'Dependency Mapping', 'Milestone Tracking', 'Resource Allocation']
            },
            {
                title: 'Industrial Cost Control',
                desc: 'Track every dollar spent against your budget in real-time, with detailed variance analysis.',
                iconName: 'BarChart3',
                items: ['Budget vs Actual', 'Retention Math', 'PO Management', 'Profitability Forecasts']
            },
            {
                title: 'High-Integrity Safety Hub',
                desc: 'Maintain a 100% compliant site with automated safety checklists and incident reporting.',
                iconName: 'ShieldCheck',
                items: ['SWMS Vault', 'Incident Logging', 'Safety Meeting Logs', 'Compliance Alerts']
            }
        ],
        benefits: [
            { title: 'Avoid Cost Overruns', impact: 'Catch budget slippage early and stay on track with real-time financial visibility.' },
            { title: 'Faster Delivery', impact: 'Reduce project delays by 20% through better team coordination and dependency tracking.' },
            { title: 'Audit Ready', impact: 'Maintain a perfect digital record of every decision, photo, and safety check for years to come.' }
        ],
        useCases: [
            { scenario: 'High-Rise Construction', solution: 'Coordinate complex specialized teams and massive material flows across vertical sites.' },
            { scenario: 'Infrastructure Projects', solution: 'Manage long-distance roading or utility works with geo-tagged progress and reporting.' },
            { scenario: 'Interior Fit-outs', solution: 'Tackle tight deadlines and high-finish standards with precision scheduling and snag lists.' }
        ],
        integrations: ['Procore', 'Autodesk Construction Cloud', 'PlanGrid', 'Microsoft Project', 'Oracle Aconex']
    },
    'daily-site-reports': {
        id: 'daily-site-reports',
        name: 'Daily Site Reports',
        title: 'Daily Site Reports',
        tagline: 'Immutable Field Logs & Seamless Progress Photo Intelligence',
        description: 'The definitive daily record for your site. Kiaan Daily Reports makes it easy for supervisors to log progress, weather, and issues in seconds.',
        mainKeyword: 'SITE TRANSPARENCY',
        keywords: [
            'Daily Site Reporting Software',
            'Construction Report Tool',
            'Field Report Management',
            'SaaS Site Reporting Platform',
            'Work Progress Tracking',
            'Job Site Monitoring System',
            'Contractor Reporting Tool',
            'Site Audit Software',
            'Daily Activity Tracking',
            'Construction Log System'
        ],
        features: [
            {
                title: 'Rapid Mobile Entry',
                desc: 'Supervisors log labor, material deliveries, and progress in less than 5 minutes on their phone.',
                iconName: 'Smartphone',
                items: ['Voice-to-Text', 'Labor Headcounts', 'Material Arrivals', 'Equipment Logs']
            },
            {
                title: 'AI Photo Intelligence',
                desc: 'Automatically tag and organize site photos by date, location, and project stage.',
                iconName: 'Camera',
                items: ['GPS Tagging', 'Auto-Organize', 'Markup Tools', 'Time-Lapse Sync']
            },
            {
                title: 'Auto Weather Sync',
                desc: 'Automatically capture and log local weather conditions to justify weather-related delays.',
                iconName: 'CloudRain',
                items: ['Temperature Logs', 'Wind Speed Alerts', 'Daily Summary', 'Historical Proof']
            }
        ],
        benefits: [
            { title: 'Zero Data Loss', impact: 'Eliminate paper logs and lost notebooks with a centralized, instantly-available digital vault.' },
            { title: 'Legal Protection', impact: 'Maintain a bulletproof record of what happened on site every single day for dispute resolution.' },
            { title: 'Real-Time Insights', impact: 'HQ knows exactly what happened on site today before the supervisor even leaves the gate.' }
        ],
        useCases: [
            { scenario: 'Civil Engineering', solution: 'Track massive material movements and environmental conditions across large sites.' },
            { scenario: 'Residential Building', solution: 'Keep homeowners updated with professional, photo-rich daily progress summaries.' },
            { scenario: 'Mining & Excavation', solution: 'Log hourly volume movements and mechanical downtime in extreme environments.' }
        ],
        integrations: ['OpenWeather API', 'Google Photos', 'Dropbox', 'Slack', 'WhatsApp Business']
    },
    'document-vault': {
        id: 'document-vault',
        name: 'Document Vault',
        title: 'Document Vault',
        tagline: 'Industrial-Grade Drawing Control & Immutable Blueprints Sync',
        description: 'The source of truth for your technical drawings. Kiaan Document Vault ensure the field is always working from the latest approved revision.',
        mainKeyword: 'DRAWING INTEGRITY',
        keywords: [
            'Document Management Software',
            'Construction Document System',
            'Digital Document Vault',
            'SaaS File Management Tool',
            'Secure Document Storage',
            'Contract Document Platform',
            'Project File Management',
            'Cloud Document System',
            'File Sharing ERP',
            'Compliance Document Tool'
        ],
        features: [
            {
                title: 'Precision Revision Core',
                desc: 'Automatically supersede old drawings and notify all teams when a new version is released.',
                iconName: 'RefreshCw',
                items: ['Auto-Supersede', 'History Archive', 'Approval Workflows', 'QR-Code Stamps']
            },
            {
                title: 'Offline Field Access',
                desc: 'Field teams can view 2D and 3D architectural files even in locations with zero internet connectivity.',
                iconName: 'WifiOff',
                items: ['Local Persistence', 'Smart Sync', 'Large File Support', 'Vector Rendering']
            },
            {
                title: 'Transmittal Tracking',
                desc: 'Immutable proof of who received what document and when, ending "I didn\'t see it" disputes.',
                iconName: 'Send',
                items: ['Recipient Logs', 'Delivery Verification', 'Bulk Transmittals', 'Legal Export']
            }
        ],
        benefits: [
            { title: 'Zero Correction Waste', impact: 'Eliminate expensive rework caused by teams working from outdated drawing versions.' },
            { title: 'Faster Approvals', impact: 'Speed up the submittal and RFI process with integrated digital review tools.' },
            { title: 'Total Security', impact: 'Restrict sensitive architectural and engineering data to only those who need it.' }
        ],
        useCases: [
            { scenario: 'Industrial Plant Design', solution: 'Manage thousands of complex P&ID and technical drawings across global engineering teams.' },
            { scenario: 'Public Infrastructure', solution: 'Maintain strict document governance for bridge, rail, and tunnel projects.' },
            { scenario: 'Commercial Architecture', solution: 'Coordinate drawing releases between architects, engineers, and site contractors.' }
        ],
        integrations: ['AutoCAD', 'Revit', 'Bluebeam', 'SharePoint', 'Google Drive']
    },
    'workshop-management': {
        id: 'workshop-management',
        name: 'Workshop Management',
        title: 'Workshop Management',
        tagline: 'High-Efficiency Technical Service & Industrial Maintenance Orchestration',
        description: 'Streamline your repair and service center. Kiaan Workshop coordinates jobs, technicians, and parts with surgical precision.',
        mainKeyword: 'SERVICE VELOCITY',
        keywords: [
            'Workshop Management Software',
            'Repair Shop ERP',
            'Service Center Management',
            'SaaS Workshop Tool',
            'Vehicle Service Software',
            'Maintenance Job Tracking',
            'Spare Parts Management System',
            'Auto Workshop CRM',
            'Workshop Billing Software',
            'Garage Management System'
        ],
        features: [
            {
                title: 'Digital Job Card Flow',
                desc: 'Assign technical tasks and track time/parts used for every repair from start to finish.',
                iconName: 'Clipboard',
                items: ['Live Status Tracking', 'Time-Log Start/Stop', 'Parts Allocation', 'Quality Sign-off']
            },
            {
                title: 'Intelligent Technician Roster',
                desc: 'Allocate specialized technicians to jobs based on their specific skillsets and real-time availability.',
                iconName: 'Users',
                items: ['Skill Mapping', 'Workload Balancing', 'Schedule View', 'Performance KPIs']
            },
            {
                title: 'Parts & Spares Sync',
                desc: 'Automatically deduct parts from inventory as they are assigned to a job card to ensure billing accuracy.',
                iconName: 'LayoutGrid',
                items: ['Barcode Mapping', 'Low-Stock Alerts', 'Purchase Requisitions', 'Vendor Linking']
            }
        ],
        benefits: [
            { title: 'Higher Recovery', impact: 'Capture 100% of billable parts and labor with integrated real-time tracking.' },
            { title: 'Faster Turnaround', impact: 'Increase workshop throughput by 25% with better job sequencing and parts readiness.' },
            { title: 'Better CX', impact: 'Notify customers automatically as their repair progresses through various stages.' }
        ],
        useCases: [
            { scenario: 'Heavy Asset Repairs', solution: 'Coordinate massive engine rebuilds and technical maintenance for mining or construction fleets.' },
            { scenario: 'Commercial Garage Chains', solution: 'Centralize workshop management across dozens of regional service centers.' },
            { scenario: 'Specialized HVAC Services', solution: 'Manage complex preventative and reactive repair cycles for climate control systems.' }
        ],
        integrations: ['NetSuite', 'SAP Asset Manager', 'Zebra Technologies', 'QuickBooks', 'Xero']
    },
    'vehicle-rental-saas': {
        id: 'vehicle-rental-saas',
        name: 'Vehicle Rental SaaS',
        title: 'Vehicle Rental SaaS',
        tagline: 'Global Asset Monetization & High-Trust Fleet Rental Flow',
        description: 'Run a world-class rental operation. Kiaan Rental SaaS handles everything from online booking to digital contract signing and damage reports.',
        mainKeyword: 'RENTAL AUTOMATION',
        keywords: [
            'Vehicle Rental Software',
            'Car Rental Management System',
            'Fleet Rental Platform',
            'SaaS Rental Tool',
            'Booking Management Software',
            'Rental Billing System',
            'Transport Rental ERP',
            'Vehicle Hire Management',
            'Rental CRM System',
            'Fleet Rental Automation'
        ],
        features: [
            {
                title: 'Omni-Channel Booking',
                desc: 'A stunning, high-conversion reservation engine for your website and mobile apps.',
                iconName: 'MousePointer2',
                items: ['Real-time Availability', 'Tiered Pricing', 'Add-on Sales', 'Deposit Management']
            },
            {
                title: 'Digital Damage Portal',
                desc: 'Perform 360-degree vehicle inspections with photo proof before and after every rental period.',
                iconName: 'Camera',
                items: ['Photo Evidence Vault', 'Digital Check-sheet', 'GPS Timestamp', 'Tenant Sign-off']
            },
            {
                title: 'Automated Identity check',
                desc: 'Securely verify driver licenses and identities globally before the keys are even handed over.',
                iconName: 'UserCheck',
                items: ['Document OCR', 'Facial Match', 'Blacklist Checks', 'Instant Approvals']
            }
        ],
        benefits: [
            { title: 'Maximize Fleet Yield', impact: 'Identify winning vehicle categories and adjust prices dynamically to match demand.' },
            { title: 'Zero Damage Disputes', impact: 'Maintain an immutable digital record of vehicle condition to ensure fair damage recovery.' },
            { title: 'Paperless Freedom', impact: 'Eliminate manual paperwork and filing with 100% digital contracts and receipts.' }
        ],
        useCases: [
            { scenario: 'Global Car Rentals', solution: 'Coordinate thousands of vehicles across hundreds of airport and city locations.' },
            { scenario: 'Tool & Equipment Hire', solution: 'Manage high-value industrial asset rentals with specific technical checkouts.' },
            { scenario: 'Corporate Fleet Pools', solution: 'Handle internal company car sharing and allocation with ease.' }
        ],
        integrations: ['Stripe', 'Twilio', 'Onfido', 'Google Maps', 'NetSuite']
    },
    'field-service-platform': {
        id: 'field-service-platform',
        name: 'Field Service Platform',
        title: 'Field Service Platform',
        tagline: 'High-Velocity Technical Dispatch & Seamless Mobile Service Flow',
        description: 'Empower your mobile technicians. Kiaan Field Service coordinates scheduling, dispatch, and onsite completion for technical teams.',
        mainKeyword: 'SERVICE MOBILITY',
        keywords: [
            'Field Service Management Software',
            'Technician Scheduling Tool',
            'Service Dispatch System',
            'SaaS Field Platform',
            'On Site Service Tracking',
            'Maintenance Service Software',
            'Job Assignment System',
            'Service CRM Tool',
            'Field Workforce Management',
            'Mobile Service App'
        ],
        features: [
            {
                title: 'Strategic Dispatch Hub',
                desc: 'A high-performance command center for dispatchers to monitor the entire field team in real-time.',
                iconName: 'Navigation',
                items: ['Drag-and-Drop Scheduling', 'Proximity Dispatch', 'SLA Tracking', 'Emergency Reroute']
            },
            {
                title: 'Mobile Service Command',
                desc: 'A robust offline-ready app for technicians to view job details, manuals, and capture proof of work.',
                iconName: 'Smartphone',
                items: ['Digital Work Orders', 'Asset History Access', 'Photo/Signature Proof', 'Offline Forms']
            },
            {
                title: 'Automated Customer Alerts',
                desc: 'Keep clients in the loop with automated "technician on the way" alerts and live tracking links.',
                iconName: 'Bell',
                items: ['Live Map Sharing', 'ETA Prediction', 'Service Summary SMS', 'Follow-up Polls']
            }
        ],
        benefits: [
            { title: 'Increase First-Time Fix', impact: 'Equip technicians with full asset history and manuals to resolve issues on the first visit.' },
            { title: 'Lower Dispatch Costs', impact: 'Reduce travel time and fuel waste by dispatching the closest qualified tech every time.' },
            { title: 'Higher Customer Trust', impact: 'Provide a modern, transparent service experience with digital proof and real-time updates.' }
        ],
        useCases: [
            { scenario: 'Telecom Maintenance', solution: 'Coordinate rapid repairs and installations for massive regional networks.' },
            { scenario: 'Industrial HVAC Repair', solution: 'Manage recurring maintenance and emergency calls for climate-critical facilities.' },
            { scenario: 'Security Systems', solution: 'Ensure zero-downtime for life-safety systems with high-priority dispatch.' }
        ],
        integrations: ['ServiceNow', 'Salesforce Field Service', 'Twilio', 'Stripe Terminal', 'Zapier']
    },
    'job-scheduling': {
        id: 'job-scheduling',
        name: 'Job Scheduling',
        title: 'Job Scheduling',
        tagline: 'Precision Workforce Orchestration & Unified Field Availability Control',
        description: 'Master your team’s time. Kiaan Job Scheduling ensures that the right person is at the right place at the right time, every time.',
        mainKeyword: 'WORKFORCE PRECISION',
        keywords: [
            'Job Scheduling Software',
            'Workforce Scheduling System',
            'Shift Planning Platform',
            'SaaS Scheduler Tool',
            'Project Job Allocation',
            'Staff Scheduling ERP',
            'Task Assignment System',
            'Automated Schedule Tool',
            'Work Calendar Software',
            'Resource Scheduling Platform'
        ],
        features: [
            {
                title: 'Dynamic Resource Scheduler',
                desc: 'A visual, high-speed interface for planning days, weeks, or months of technical work.',
                iconName: 'Calendar',
                items: ['Color-Coded Skills', 'Constraint Management', 'Bulk Scheduling', 'View-Switching (Team/Map)']
            },
            {
                title: 'Real-Time Availability Sync',
                desc: 'Sync directly with team personal calendars to prevent scheduling conflicts and ensure work-life balance.',
                iconName: 'Shuffle',
                items: ['Google/Outlook Sync', 'Leave Logic', 'Public Holiday Check', 'Rest-Time Enforcement']
            },
            {
                title: 'Crew & Team Logic',
                desc: 'Group technicians into specific crews for complex jobs that require multiple skillsets or equipment.',
                iconName: 'Users',
                items: ['Crew Leader Logic', 'Asset Allocation', 'Shared Manifests', 'Collective Clock-in']
            }
        ],
        benefits: [
            { title: 'Zero Over-Scheduling', impact: 'Maintain a perfectly balanced workload to prevent technician burnout and project delays.' },
            { title: 'Maximized Utilization', impact: 'Fill every available slot with high-value work based on intelligent gap analysis.' },
            { title: 'Instant Mobile Update', impact: 'Field teams get a notification the second their schedule changes, reducing confusion.' }
        ],
        useCases: [
            { scenario: 'Plumbing & Electrical', solution: 'Manage dozens of service calls daily with geographic team distribution.' },
            { scenario: 'Cleaning Services', solution: 'Coordinate recurring residential and commercial cleaning jobs with specific crew allocations.' },
            { scenario: 'Home Healthcare', solution: 'Schedule nurse visits and therapist appointments with complex client requirements.' }
        ],
        integrations: ['Calendly', 'Google Calendar', 'Outlook', 'Slack', 'WhatsApp']
    }
};
