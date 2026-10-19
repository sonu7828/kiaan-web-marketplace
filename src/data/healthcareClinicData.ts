import { ProductData } from './businessCompanyData';

export const healthcareClinicData: Record<string, ProductData> = {
    'clinic-management': {
        id: 'clinic-management',
        name: 'Clinic Management',
        title: 'Clinic Management',
        tagline: 'Precision Practice Orchestration & Patient-First Care Delivery',
        description: 'Streamline your medical practice with Kiaan Clinic Management. From appointment booking to clinical notes, we provide everything needed for modern, efficient patient care.',
        mainKeyword: 'PRACTICE EFFICIENCY',
        keywords: [
            'Clinic Management Software',
            'OPD Management System',
            'Patient Appointment Software',
            'Clinic ERP Platform',
            'Medical Practice Software',
            'SaaS Clinic Solution',
            'Digital Clinic Management',
            'Healthcare CRM System',
            'Doctor Management Tool',
            'Small Clinic Software',
            'clinic administration system software',
            'medical practice automation platform',
            'outpatient management solution',
            'clinic workflow management tool',
            'doctor chamber management software',
            'patient visit tracking system',
            'clinic operations dashboard',
            'private practice management SaaS',
            'digital clinic record platform',
            'clinic billing integration system',
            'healthcare admin automation tool',
            'clinic reporting analytics software',
            'medical office management platform',
            'clinic data organization system',
            'healthcare service management tool',
            'cloud clinic software India',
            'doctor appointment control panel',
            'clinic performance monitoring dashboard',
            'multi doctor clinic management system',
            'smart clinic administration solution'
        ],
        features: [
            {
                title: 'Smart Appointment Scheduler',
                desc: 'Manage doctor availability across multiple rooms and optimize patient flow in real-time.',
                iconName: 'Calendar',
                items: ['Multi-Doctor Sync', 'Room Allocation', 'Automated SMS Reminders', 'Walk-in Handling']
            },
            {
                title: 'Digital Prescription Engine',
                desc: 'Generate legible, secure prescriptions with integrated drug-interaction alerts and pharmacy sync.',
                iconName: 'FileText',
                items: ['Standardized Templates', 'Drug Sensitivity Alerts', 'Dose Calculations', 'E-Sign Support']
            },
            {
                title: 'Clinical Encounter Notes',
                desc: 'Document patient visits rapidly with customizable templates designed for various specialties.',
                iconName: 'Clipboard',
                items: ['Medication History', 'Soap Note Templates', 'Vitals Tracking', 'Voice-to-Text Entry']
            }
        ],
        benefits: [
            { title: 'Zero Wait Times', impact: 'Reduce patient waiting periods by 40% with intelligent queue management.' },
            { title: 'Clinical Accuracy', impact: 'Improve patient safety with automated drug interaction and allergy checks.' },
            { title: 'Faster Documentation', impact: 'Reduce doctor paperwork time by 50% using specialty-specific templates.' }
        ],
        useCases: [
            { scenario: 'Specialist General Practices', solution: 'Manage high-volume patient intake and longitudinal care records seamlessly.' },
            { scenario: 'Dental Clinics', solution: 'Coordinate treatment plans, lab orders, and specific dental charting workflows.' },
            { scenario: 'Pediatric Centers', solution: 'Track growth charts, immunization schedules, and developmental milestones.' }
        ],
        integrations: ['Practo', 'Lybrate', 'WhatsApp Business', 'Google Calendar', 'Razorpay']
    },
    'hospital-system': {
        id: 'hospital-system',
        name: 'Hospital System',
        title: 'Hospital Management System',
        tagline: 'Industrial-Grade Enterprise Health Governance & Multi-Ward Control',
        description: 'The digital nervous system for modern hospitals. Kiaan HMS coordinates IPD, OPD, OT, and Diagnostics into a single high-performance unified platform.',
        mainKeyword: 'HOSPITAL EXCELLENCE',
        keywords: [
            'Hospital Management System',
            'HMS Software Platform',
            'Hospital ERP Solution',
            'Patient Management System',
            'Healthcare Administration Software',
            'SaaS Hospital Software',
            'Digital Hospital Platform',
            'Medical ERP System',
            'Hospital Billing Software',
            'Healthcare Management Tool'
        ],
        features: [
            {
                title: 'Integrated Ward Control',
                desc: 'Real-time visibility into bed occupancy, nursing assignments, and patient status across the facility.',
                iconName: 'Layout',
                items: ['Bed Availability Mapping', 'Nurse Shift Handover', 'Doctor Round Logs', 'Emergency Escalation']
            },
            {
                title: 'OT & Surgery Orchestration',
                desc: 'Coordinate surgical teams, operation theater availability, and post-op recovery resources.',
                iconName: 'Zap',
                items: ['Surgery Scheduling', 'Consumable Tracking', 'Pre-op Checklists', 'Anesthesia Logs']
            },
            {
                title: 'Centralized Billing Center',
                desc: 'Consolidate costs from pharmacy, lab, and ward into a final patient invoice automatically.',
                iconName: 'CreditCard',
                items: ['Insurance TPA Integration', 'Package Management', 'Refund/Deposit Logic', 'Audit-Ready Ledgers']
            }
        ],
        benefits: [
            { title: 'Operational Efficiency', impact: 'Eliminate manual paperwork and data entry silos across all hospital departments.' },
            { title: 'Enhanced Safety', impact: 'Maintain 100% medication accuracy with integrated barcoded wristband checks.' },
            { title: 'Financial Transparency', impact: 'Real-time tracking of consumables and revenue leakages across the facility.' }
        ],
        useCases: [
            { scenario: 'Multi-Specialty Hospitals', solution: 'Coordinate complex care journeys across Cardiology, Oncology, and ER departments.' },
            { scenario: 'Medical Colleges', solution: 'Manage student records and research data alongside high-volume clinical care.' },
            { scenario: 'Chain of Hospitals', solution: 'Consolidate data and reporting across multiple regional hospital locations.' }
        ],
        integrations: ['Azure Health Bot', 'SAP Health', 'Oracle Health (Cerner)', 'GE Healthcare', 'Philips Health']
    },
    'emr-ehr-saas': {
        id: 'emr-ehr-saas',
        name: 'EMR/EHR SaaS',
        title: 'EMR/EHR SaaS',
        tagline: 'Immutable Patient Data Storage & Global Interoperability Control',
        description: 'The gold standard for medical records. Kiaan EMR/EHR ensures longitudinal patient data is secure, accessible, and compliant with global health standards.',
        mainKeyword: 'DATA INTEROPERABILITY',
        keywords: [
            'EMR Software System',
            'EHR Management Platform',
            'Electronic Medical Records SaaS',
            'Digital Patient Records',
            'Cloud EMR Solution',
            'Healthcare Data Management',
            'Medical Record Automation',
            'EHR Compliance Software',
            'Patient History Tracking',
            'Secure Health Records System',
            'electronic patient record software',
            'digital medical records system',
            'EMR cloud platform India',
            'patient health data management tool',
            'secure medical record storage system',
            'doctor EMR dashboard software',
            'healthcare data documentation platform',
            'EMR with prescription integration',
            'patient case history tracking system',
            'HIPAA compliant EMR software',
            'medical chart management tool',
            'clinical documentation automation system',
            'hospital EMR SaaS solution',
            'digital health record analytics platform',
            'EMR reporting dashboard',
            'electronic health file management system',
            'clinic EMR integration software',
            'patient medical timeline tracking tool',
            'smart EMR automation platform',
            'secure healthcare data system'
        ],
        features: [
            {
                title: 'HL7 / FHIR Gateway',
                desc: 'Exchange medical data securely with other hospitals, labs, and insurance providers via global standards.',
                iconName: 'Share2',
                items: ['Standardized Data Export', 'Cross-System ID Sync', 'Secure API Access', 'Interop Profiles']
            },
            {
                title: 'Historical Patient Timeline',
                desc: 'A visual, scrollable history of every lab result, surgery, and prescription over a lifetime.',
                iconName: 'Clock',
                items: ['Graphic Trend Lines', 'Consolidated History', 'External Data Merge', 'Lifetime Record Vault']
            },
            {
                title: 'Decision Support AI',
                desc: 'Proactive alerts based on clinical data that flag potential risks or guideline deviations.',
                iconName: 'Brain',
                items: ['Alert Categorization', 'Dosage Guardrails', 'Guidelines Library', 'Risk Stratification']
            }
        ],
        benefits: [
            { title: 'Regulatory Compliance', impact: 'Maintain 100% HIPAA/GDPR health data compliance with automated encryption.' },
            { title: 'Better Outcomes', impact: 'Empower clinicians with all historical data points at the moment of care.' },
            { title: 'Paperless Freedom', impact: 'Securely store and retrieve millions of records in milliseconds from the cloud.' }
        ],
        useCases: [
            { scenario: 'Specialty Clinics', solution: 'Tailor EMR fields for chronic disease management like Diabetes or Asthma.' },
            { scenario: 'Health Information Exchanges', solution: 'Create a regional hub where multiple providers can share patient data safely.' },
            { scenario: 'Telemedicine Providers', solution: 'Ensure remote doctors have access to validated historical medical histories.' }
        ],
        integrations: ['Epic', 'Cerner', 'Amazon HealthLake', 'Google Cloud Healthcare', 'SNOMED CT']
    },
    'pharmacy-management': {
        id: 'pharmacy-management',
        name: 'Pharmacy Management',
        title: 'Pharmacy Management',
        tagline: 'Precision Inventory Control & Regulatory Compliance Guardrails',
        description: 'Control your stock, sales, and statutory requirements. Kiaan Pharmacy Management handles everything from expiry alerts to direct E-prescription integration.',
        mainKeyword: 'PHARMA INTEGRITY',
        keywords: [
            'Pharmacy Management Software',
            'Medical Store POS System',
            'Drug Inventory Software',
            'Pharmacy Billing Tool',
            'Medicine Stock Management',
            'SaaS Pharmacy Platform',
            'Retail Pharmacy ERP',
            'Prescription Management System',
            'Pharmacy CRM Tool',
            'Drug Sales Tracking Software',
            'pharmacy billing management software',
            'medical store automation system',
            'drug inventory tracking platform',
            'pharmacy POS integration software',
            'medicine stock control tool',
            'prescription billing system',
            'pharmacy purchase management software',
            'digital pharmacy reporting dashboard',
            'retail pharmacy SaaS solution',
            'pharmacy expiry tracking system',
            'drug batch management software',
            'pharmacy compliance monitoring tool',
            'cloud pharmacy software India',
            'medicine sales analytics platform',
            'pharmaceutical inventory system',
            'automated prescription processing tool',
            'pharmacy accounting integration software',
            'medical shop management dashboard',
            'drug stock optimization platform',
            'smart pharmacy management solution'
        ],
        features: [
            {
                title: 'Expiry & Batch Monitor',
                desc: 'Intelligent alerts that notify you months before expensive medication expires to prevent loss.',
                iconName: 'Bell',
                items: ['Batch-Wise Reporting', 'First-to-Expire Logic', 'Automated Returns', 'Stock Aging Alerts']
            },
            {
                title: 'Legal Compliance Vault',
                desc: 'Automated logging for scheduled and restricted drugs to meet stringent govt. audit rules.',
                iconName: 'ShieldCheck',
                items: ['Narcotic Sale Logs', 'Prescription Validation', 'Doctor ID Verification', 'Statutory Reports']
            },
            {
                title: 'Direct E-Rx Integration',
                desc: 'Receive prescriptions directly from doctors, reducing errors and speeding up dispensing.',
                iconName: 'Zap',
                items: ['Real-time Rx Feed', 'Digitized Stock Match', 'Automated Labelling', 'Patient Profile Sync']
            }
        ],
        benefits: [
            { title: 'Zero Expired Waste', impact: 'Reduce stock wastage by 20% with proactive batch-level management.' },
            { title: 'Audit Confidence', impact: 'Generate perfect statutory registers for regulatory bodies with one click.' },
            { title: 'Faster Dispensing', impact: 'Improve customer service with rapid barcode scanning and digital billing.' }
        ],
        useCases: [
            { scenario: 'Retail Pharmacy Chains', solution: 'Centralize inventory management and pricing across 100+ stores.' },
            { scenario: 'Hospital Pharmacies', solution: 'Seamlessly link inward floor requests with direct ward-side dispensing.' },
            { scenario: 'Online Med-Stores', solution: 'Manage high-volume home deliveries with integrated thermal label printing.' }
        ],
        integrations: ['Walgreens API', 'CVS Caremark', '1mg', 'Netmeds', 'GSTN']
    },
    'laboratory-system': {
        id: 'laboratory-system',
        name: 'Laboratory System',
        title: 'Laboratory System',
        tagline: 'High-Precision Result Intelligence & Seamless Diagnostic Workflow',
        description: 'From sample collection to digital report delivery. Kiaan Lab Management ensures accuracy and speed at every stage of the diagnostic journey.',
        mainKeyword: 'DIAGNOSTIC ACCURACY',
        keywords: [
            'Laboratory Management System',
            'LIMS Software Platform',
            'Diagnostic Lab Software',
            'Lab Test Management Tool',
            'Pathology Lab System',
            'SaaS Lab Solution',
            'Medical Lab ERP',
            'Lab Reporting Software',
            'Sample Tracking System',
            'Digital Lab Management',
            'diagnostic lab management software',
            'pathology lab automation system',
            'lab report generation platform',
            'medical test tracking software',
            'lab sample management tool',
            'laboratory billing integration system',
            'digital lab reporting dashboard',
            'pathology workflow automation platform',
            'lab inventory tracking software',
            'lab appointment scheduling system',
            'hospital lab analytics dashboard',
            'lab technician management tool',
            'medical test result automation system',
            'diagnostic center SaaS solution',
            'digital pathology reporting software',
            'laboratory compliance tracking system',
            'lab data management platform',
            'automated test result processing tool',
            'smart lab information system',
            'clinic lab integration software'
        ],
        features: [
            {
                title: 'Barcoded Sample Tracking',
                desc: 'Ensure 100% sample identity with unique barcoding and real-time transit monitoring.',
                iconName: 'Barcode',
                items: ['Vial Identification', 'Transporter Tracking', 'Collection Point Sync', 'Temperature Logging']
            },
            {
                title: 'Uni/Bi-Directional Interfacing',
                desc: 'Connect diagnostic machines directly to the software for zero-error result entry.',
                iconName: 'Zap',
                items: ['Analyzer Integration', 'Real-Time Result Fetch', 'Remote Calibration', 'QC Plotting']
            },
            {
                title: 'White-Label Patient Reports',
                desc: 'Generate beautiful, professional reports with QR coding for instant validation/download.',
                iconName: 'FileText',
                items: ['QR Validation', 'Custom Branding', 'Email/WhatsApp Delivery', 'Reference-Range Color Coding']
            }
        ],
        benefits: [
            { title: 'Eliminate Typing Errors', impact: 'Direct machine interfacing removes the risk of manual data entry mistakes.' },
            { title: 'Faster TAT', impact: 'Reduce Turnaround Time (TAT) by 35% with automated workflows and report delivery.' },
            { title: 'Patient Convenience', impact: 'Let patients download their reports via a secure WhatsApp linked portal instantly.' }
        ],
        useCases: [
            { scenario: 'Pathology Center', solution: 'Handle thousands of blood tests daily with automated validation and reporting.' },
            { scenario: 'Imaging & X-Ray Labs', solution: 'Integrate PAC/DICOM images directly into the patient report portal.' },
            { scenario: 'Research Institutions', solution: 'Maintain strict study protocols and large-scale data sets for clinical trials.' }
        ],
        integrations: ['Roche', 'Abbott', 'Sysmex', 'GE Healthcare (PAC)', 'PACS Sync']
    },
    'queue-management': {
        id: 'queue-management',
        name: 'Queue Management',
        title: 'Queue Management',
        tagline: 'Dynamic Patient Flow & Intelligent OPD Wait-Time Optimization',
        description: 'End the chaos of clinical waiting rooms. Kiaan Queue Management provides real-time visibility and virtual token systems that respect patient time.',
        mainKeyword: 'WAIT-TIME OPTIMIZATION',
        keywords: [
            'Queue Management Software',
            'Token Management System',
            'Patient Queue System',
            'Appointment Queue Tool',
            'Waiting Line Management',
            'Digital Token Display System',
            'SaaS Queue Platform',
            'Hospital Queue Automation',
            'Smart Queue Software',
            'Visitor Flow Management'
        ],
        features: [
            {
                title: 'Virtual Mobile Queuing',
                desc: 'Allow patients to join the queue via WhatsApp or App and arrive just in time for their turn.',
                iconName: 'Smartphone',
                items: ['Remote Token Issuance', 'Live Wait-Time Feed', 'Late-Arrival Logic', 'No-show Reordering']
            },
            {
                title: 'Clinic TV Dashboards',
                desc: 'Display current tokens and announcements on waiting room TVs to keep patients informed.',
                iconName: 'Tv',
                items: ['Multi-Doctor Support', 'Ad-Insertion Logic', 'Estimated Time Display', 'Emergency Alerts']
            },
            {
                title: 'Patient Flow Analytics',
                desc: 'Identify bottlenecks in your clinic operations with granular data on average consultation times.',
                iconName: 'Activity',
                items: ['Average Wait Stats', 'Peak Hour Analysis', 'Doctor Productivity Tracking', 'SLA Monitoring']
            }
        ],
        benefits: [
            { title: 'Stress-Free Patients', impact: 'Reduce perceived wait times by providing transparency and mobile freedom.' },
            { title: 'Social Distancing', impact: 'Manage room capacity by allowing patients to wait in their cars or nearby cafes.' },
            { title: 'Optimized Resources', impact: 'Allocate staff to busy departments based on real-time flow data.' }
        ],
        useCases: [
            { scenario: 'High-Volume OPDs', solution: 'Organize hundreds of daily patient visits across dozens of doctors.' },
            { scenario: 'Pharmacy Pickup', solution: 'Reduce congestion during peak medication collection hours.' },
            { scenario: 'Laboratory Collection', solution: 'Manage fasting vs non-fasting queues for efficient sample draw.' }
        ],
        integrations: ['WhatsApp Business', 'Apple TV', 'Android TV', 'Twilio', 'Firebase Cloud Messaging']
    },
    'telemedicine-platform': {
        id: 'telemedicine-platform',
        name: 'Telemedicine Platform',
        title: 'Telemedicine Platform',
        tagline: 'Borderless Virtual Care & High-Fidelity Clinical Consultation',
        description: 'Provide secure, high-quality healthcare from anywhere. Kiaan Telemedicine integrates HD video, EMR access, and digital billing into a single professional portal.',
        mainKeyword: 'VIRTUAL HEALTH',
        keywords: [
            'Telemedicine Software',
            'Online Doctor Consultation Platform',
            'Virtual Healthcare System',
            'Video Consultation Software',
            'Digital Health Platform',
            'SaaS Telehealth Solution',
            'Remote Patient Monitoring',
            'eClinic Software',
            'Online Medical Portal',
            'Telehealth CRM System'
        ],
        features: [
            {
                title: 'HD Encrypted Video',
                desc: 'Clinical-grade video consultation with peer-to-peer encryption for total patient privacy.',
                iconName: 'Video',
                items: ['Low-Bandwidth Optimization', 'Screen Annotation', 'In-Call File Sharing', 'Recording Consent Logic']
            },
            {
                title: 'In-Call EMR Access',
                desc: 'Doctors view patient history and write prescriptions without ever closing the video window.',
                iconName: 'Maximize',
                items: ['Split-Screen WorkView', 'Real-Time Note Sync', 'Historical Graph View', 'One-Click Refills']
            },
            {
                title: 'Integrated Payment Gateway',
                desc: 'Collect consultation fees securely before the virtual call begins with instant invoice generation.',
                iconName: 'CreditCard',
                items: ['Pre-Call Authorization', 'Refund Management', 'Insurance Verification', 'Global Currency Support']
            }
        ],
        benefits: [
            { title: 'Global Patient Reach', impact: 'Consult with patients regardless of geographic or physical barriers.' },
            { title: 'Zero Overhead', impact: 'Run a fully-functional clinic without the cost of physical real estate.' },
            { title: 'Better Follow-ups', impact: 'Improve patient compliance with easy, 10-minute remote check-ins.' }
        ],
        useCases: [
            { scenario: 'Mental Health Services', solution: 'Provide a safe, private space for remote therapy and counseling sessions.' },
            { scenario: 'Chronic Care Monitoring', solution: 'Perform regular follow-ups for diabetic or hypertensive patients remotely.' },
            { scenario: 'Rural Outreach', solution: 'Connect specialists in major cities to patients in remote village centers.' }
        ],
        integrations: ['Twilio Video', 'Daily.co', 'Agora', 'Stripe', 'Doxy.me']
    },
    'medical-billing': {
        id: 'medical-billing',
        name: 'Medical Billing',
        title: 'Medical Billing',
        tagline: 'Precision Claims Recovery & Unified Revenue Cycle Excellence',
        description: 'Maximize your practice revenue and eliminate claim rejections. Kiaan Medical Billing automates coding, submission, and insurance tracking with surgical precision.',
        mainKeyword: 'REVENUE CYCLE',
        keywords: [
            'Medical Billing Software',
            'Healthcare Billing System',
            'Insurance Claim Management Tool',
            'Hospital Billing ERP',
            'Patient Billing Platform',
            'SaaS Medical Billing',
            'Medical Invoice Management',
            'Insurance Processing Software',
            'Revenue Cycle Management',
            'Healthcare Payment System'
        ],
        features: [
            {
                title: 'AI Code Suggester',
                desc: 'Intelligent ICD-10 and CPT coding suggestions based on doctor clinical notes to maximize payout.',
                iconName: 'CheckCircle',
                items: ['Coding Validation', 'Modifier Recommendations', 'Compliance Checks', 'Code Search Library']
            },
            {
                title: 'Automated Claims Portal',
                desc: 'Submit claims electronically to hundreds of insurance providers with one click.',
                iconName: 'Zap',
                items: ['Direct Insurance Pipe', 'Real-Time Status Tracking', 'Error Correction Loops', 'Batch Submissions']
            },
            {
                title: 'Denial Intelligence',
                desc: 'Track why claims were rejected and automate the re-submission process with corrected data.',
                iconName: 'Activity',
                items: ['Root Cause Analysis', 'Re-submission Workflows', 'Aged Receivable Reports', 'Payer Comparison']
            }
        ],
        benefits: [
            { title: 'Increase Net Revenue', impact: 'Capture 15% more revenue by reducing coding errors and missed billable items.' },
            { title: 'Lower Rejection Rate', impact: 'Achieve 98% first-pass claim acceptance with built-in scrubbing logic.' },
            { title: 'Accelerated Cash Flow', impact: 'Get paid average 20 days faster through direct electronic remittance.' }
        ],
        useCases: [
            { scenario: 'Multi-Physician Groups', solution: 'Centralize billing for multiple specialists with complex shared revenue models.' },
            { scenario: 'Independent Labs', solution: 'Automate high-volume billing for insurance-reimbursed diagnostic tests.' },
            { scenario: 'Physiotherapy Centers', solution: 'Manage package-based insurance claims and individual session billing.' }
        ],
        integrations: ['ClaimMD', 'Waystar', 'Trizetto', 'QuickBooks', 'Xero']
    },
    'doctor-scheduling': {
        id: 'doctor-scheduling',
        name: 'Doctor Scheduling',
        title: 'Doctor Scheduling',
        tagline: 'High-Efficiency Roster Orchestration & Specialist Resource Control',
        description: 'Coordinate complex medical shifts and consultations. Kiaan Doctor Scheduling ensures specialist availability is always optimized across wards and clinics.',
        mainKeyword: 'RESOURCE PLANNING',
        keywords: [
            'Doctor Scheduling Software',
            'Physician Appointment System',
            'Medical Staff Scheduling Tool',
            'Clinic Calendar Software',
            'Hospital Roster Management',
            'SaaS Scheduling Platform',
            'Healthcare Shift Planner',
            'Doctor Availability Tracker',
            'Smart Medical Scheduler',
            'Appointment Automation System',
            'online doctor appointment booking software',
            'clinic scheduling management system',
            'patient booking automation tool',
            'hospital appointment tracking platform',
            'medical calendar management software',
            'automated appointment reminders system',
            'clinic slot allocation tool',
            'doctor availability scheduling software',
            'patient queue management platform',
            'digital booking dashboard healthcare',
            'teleconsultation appointment system',
            'clinic reservation automation tool',
            'appointment analytics reporting software',
            'hospital scheduling SaaS solution',
            'patient visit planning system',
            'medical booking workflow automation',
            'healthcare calendar sync platform',
            'clinic booking management India',
            'doctor schedule optimization software',
            'smart appointment management tool'
        ],
        features: [
            {
                title: 'Specialist Roster Engine',
                desc: 'Coordinate complex shifts for doctors across multiple clinic locations and hospital wards.',
                iconName: 'LayoutGrid',
                items: ['Rotation Management', 'On-Call Assignments', 'Vacation Coordination', 'Public Holiday Logic']
            },
            {
                title: 'Emergency Cover Swap',
                desc: 'Enable doctors to request and approve shift swaps directly from their mobile devices.',
                iconName: 'Shuffle',
                items: ['Instant Notifications', 'Manager Approvals', 'Peer-to-Peer Swaps', 'Coverage Safeguards']
            },
            {
                title: 'Clinical Capacity Guard',
                desc: 'Automatically block or release appointment slots based on the roster status in real-time.',
                iconName: 'ShieldCheck',
                items: ['Dynamic Slot Release', 'Sync to Patient App', 'Overbooking Alerts', 'Consultation Buffers']
            }
        ],
        benefits: [
            { title: 'Zero Overlaps', impact: 'Eliminate scheduling errors where a specialist is booked at two locations at once.' },
            { title: 'Reduce Burnout', impact: 'Maintain fair work-hour distribution with automated tracking and alerts.' },
            { title: 'Instant Updates', impact: 'Notify patients automatically if their doctor’s schedule changes unexpectedly.' }
        ],
        useCases: [
            { scenario: 'Large Hospitals', solution: 'Coordinate hundreds of nursing and doctor shifts across ER, ICU, and OPD.' },
            { scenario: 'Diagnostic Centers', solution: 'Schedule specialized technicians for MRI or CT scans based on machine availability.' },
            { scenario: 'Corporate Health', solution: 'Organize onsite doctor visits and health checks for large enterprise clients.' }
        ],
        integrations: ['Outlook', 'Google Calendar', 'Zendesk', 'Workday', 'Deputy']
    },
    'patient-portal': {
        id: 'patient-portal',
        name: 'Patient Portal',
        title: 'Patient Portal',
        tagline: 'Empowered Health Self-Service & Secure Record Personal Access',
        description: 'Deepen the patient relationship. Kiaan Patient Portal provides a secure, branded mobile and web experience for appointment booking, reports, and billing.',
        mainKeyword: 'PATIENT EMPOWERMENT',
        keywords: [
            'Patient Portal Software',
            'Online Patient Access System',
            'Healthcare Self Service Portal',
            'Medical Records Portal',
            'Appointment Booking Portal',
            'Patient Communication Platform',
            'SaaS Patient Portal',
            'Digital Health Access Tool',
            'Hospital Online Portal',
            'Secure Patient Dashboard'
        ],
        features: [
            {
                title: 'Self-Booking Gateway',
                desc: 'Patients choose their preferred doctor and time-slot without calling the clinic.',
                iconName: 'MousePointer2',
                items: ['Live Slot Visibility', 'Integrated Payments', 'Rescheduling/Cancellation', 'Preference Saving']
            },
            {
                title: 'Personal Health Vault',
                desc: 'A secure space for patients to view and download their entire medical history and lab results.',
                iconName: 'Lock',
                items: ['Secure File Access', 'History Timelines', 'Shareable Links', 'Encrypted Backups']
            },
            {
                title: 'Health Insight Feeds',
                desc: 'Personalized wellness tips and reminders for follow-ups or vaccinations based on health data.',
                iconName: 'Activity',
                items: ['Follow-up Alerts', 'Vaccine Reminders', 'Wellness Content', 'Direct Messaging']
            }
        ],
        benefits: [
            { title: 'Lower Phone Volume', impact: 'Reduce clinic call volume by 50% by moving booking and reporting online.' },
            { title: 'Higher Loyalty', impact: 'Provide a modern, digital-first experience that sets your practice apart.' },
            { title: 'Better Adherence', impact: 'Improve patient health outcomes through automated medication and checkup reminders.' }
        ],
        useCases: [
            { scenario: 'Modern Dental Clinics', solution: 'Allow patients to view treatment plans and pay installments online.' },
            { scenario: 'Diabetes Specialty Centers', solution: 'Build a community portal for glucose tracking and nutritional guidance.' },
            { scenario: 'Fertility Centers', solution: 'Provide a private, sensitive portal for managing complex treatment cycles and results.' }
        ],
        integrations: ['Apple Health', 'Google Fit', 'Stripe', 'Twilio', 'Firebase']
    }
};
