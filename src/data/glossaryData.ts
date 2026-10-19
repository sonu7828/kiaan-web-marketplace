export interface GlossaryTerm {
    term: string;
    definition: string;
    category: string;
    details: string;
    relatedServices: { name: string; url: string }[];
}

export const glossaryTerms: GlossaryTerm[] = [
    {
        term: "SaaS",
        definition: "Software as a Service — a cloud-based software delivery model where applications are hosted by a provider and accessed over the internet.",
        category: "Cloud & Products",
        details: "Multi-tenant architecture where customers access shared server space. SaaS applications eliminate local installation and simplify version management. Typical stack includes Next.js for high performance and PostgreSQL/Prisma for data security.",
        relatedServices: [
            { name: "SaaS Development", url: "/services/saas-development" },
            { name: "Custom Software", url: "/services/custom-software-development" }
        ]
    },
    {
        term: "ERP",
        definition: "Enterprise Resource Planning — centralized database systems that manage and integrate core business processes (finance, HR, supply chain).",
        category: "Enterprise Software",
        details: "Consolidates raw operations data from separate departments into a single system. Modern modular ERP systems utilize microservices to connect inventory databases with live sales modules to scale without performance drops.",
        relatedServices: [
            { name: "ERP & CRM Solutions", url: "/services/erp-crm-solutions" },
            { name: "Custom Software", url: "/services/custom-software-development" }
        ]
    },
    {
        term: "CRM",
        definition: "Customer Relationship Management — platforms designed to track, coordinate, and automate sales conversations, leads, and customer profiles.",
        category: "Enterprise Software",
        details: "Connects customer communication channels (such as WhatsApp API, emails, or web forms) to a unified dashboard. Built-in automation paths score lead priority to optimize counselor bandwidth.",
        relatedServices: [
            { name: "ERP & CRM Solutions", url: "/services/erp-crm-solutions" },
            { name: "SaaS Development", url: "/services/saas-development" }
        ]
    },
    {
        term: "AI Automation",
        definition: "Artificial Intelligence Automation — using machine learning models and large language models (LLMs) to perform complex operational tasks.",
        category: "Emerging Tech",
        details: "Leverages vernacular speech recognition, AI classification systems, and database routing rules to replace manual back-office tasks like PDF data scraping or clinic pre-screening.",
        relatedServices: [
            { name: "AI Automation Services", url: "/services/ai-automation" },
            { name: "AI Products", url: "/ai-products" }
        ]
    },
    {
        term: "RPA",
        definition: "Robotic Process Automation — technology that mimics human user actions on digital interfaces to automate repetitive workflows.",
        category: "Enterprise Software",
        details: "Advanced RPA 2.0 systems avoid fragile UI scraping in favor of secure, high-throughput API integrations to sync records between accounting software, CRM portals, and database warehouses.",
        relatedServices: [
            { name: "AI Automation Services", url: "/services/ai-automation" }
        ]
    },
    {
        term: "Microservices",
        definition: "An architectural style that structures an application as a collection of small, independent, and loosely coupled services.",
        category: "Software Engineering",
        details: "Each microservice performs a single, specialized function (e.g., authentication, payment gateway routing) and communicates via lightweight REST APIs or message brokers. This prevents single-point-of-failure errors.",
        relatedServices: [
            { name: "Web Development", url: "/services/web-development" },
            { name: "SaaS Development", url: "/services/saas-development" }
        ]
    },
    {
        term: "JSON-LD",
        definition: "JavaScript Object Notation for Linked Data — a structured data markup format that helps search engines understand the meaning of page content.",
        category: "SEO & Digital",
        details: "Injects machine-readable metadata schema templates (like FAQPage, Article, or ItemList) into the HTML source. Google parses this data to display rich snippets, enhancing search visibility and CTR.",
        relatedServices: [
            { name: "Web Development", url: "/services/web-development" }
        ]
    },
    {
        term: "Multi-Tenancy",
        definition: "A software architecture where a single instance of a software application serves multiple customers (tenants).",
        category: "Cloud & Products",
        details: "Every client shares the core application instance and data storage pool, but tenant databases are logically partitioned. This architecture underpins all high-scale B2B SaaS platforms to ensure simple maintenance.",
        relatedServices: [
            { name: "SaaS Development", url: "/services/saas-development" }
        ]
    }
];
