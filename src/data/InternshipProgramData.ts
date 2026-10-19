// Comprehensive data for all 40+ internship programs

export interface Project {
    name: string;
    description: string;
    tech: string[];
}

export interface CurriculumModule {
    module: string;
    topics: string[];
}

export interface InternshipProgram {
    id: string;
    title: string;
    category: string;
    duration: string;
    format: string;
    level: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string;
    hero: {
        tagline: string;
        description: string;
        highlights: string[];
    };
    curriculum: CurriculumModule[];
    liveProjects: Project[];
    prerequisites: string[];
    outcomes: string[];
    tools: string[];
    certification: string;
    isPaid: boolean;
    stipendInfo: string;
}

export const internshipProgramsData: Record<string, InternshipProgram> = {
    // WEB DEVELOPMENT PROGRAMS
    'full-stack-mern': {
        id: 'full-stack-mern',
        title: 'Full Stack Web Development Internship (MERN)',
        category: 'Web Development',
        duration: '6 Months',
        format: 'On-site',
        level: 'Beginner to Advanced',
        metaTitle: 'Full Stack MERN Internship | Kiaan Technology',
        metaDescription: 'Join our comprehensive Full Stack MERN internship. Learn MongoDB, Express, React, Node.js with live projects and certification.',
        keywords: 'full stack internship, MERN stack internship, web development internship',
        hero: {
            tagline: 'Master Modern Web Development',
            description: 'Build production-ready web applications using MongoDB, Express.js, React, and Node.js. Work on real SaaS projects and become a full-stack developer.',
            highlights: ['Live SaaS Projects', '6 Months Training', 'Industry Mentorship', 'Placement Support']
        },
        curriculum: [
            {
                module: 'Frontend Development',
                topics: ['React.js Fundamentals', 'Component Architecture', 'State Management (Redux)', 'React Hooks & Context API', 'Responsive UI Design', 'Tailwind CSS / Material-UI']
            },
            {
                module: 'Backend Development',
                topics: ['Node.js & Express.js', 'RESTful API Design', 'Authentication & Authorization (JWT)', 'Database Design & MongoDB', 'API Security Best Practices', 'File Upload & Storage']
            },
            {
                module: 'Full Stack Integration',
                topics: ['Frontend-Backend Integration', 'State Management with APIs', 'Real-time Features (Socket.io)', 'Payment Gateway Integration', 'Deployment (AWS/Vercel)', 'CI/CD Pipelines']
            },
            {
                module: 'Professional Skills',
                topics: ['Git & GitHub Workflow', 'Agile Development', 'Code Reviews', 'Testing (Jest, React Testing Library)', 'Documentation', 'Performance Optimization']
            }
        ],
        liveProjects: [
            {
                name: 'E-Commerce Platform',
                description: 'Build a complete online store with product management, cart, checkout, and payment integration.',
                tech: ['React', 'Node.js', 'MongoDB', 'Stripe API']
            },
            {
                name: 'SaaS Dashboard',
                description: 'Create a multi-tenant dashboard with role-based access control and analytics.',
                tech: ['React', 'Express', 'MongoDB', 'Chart.js']
            },
            {
                name: 'Social Media App',
                description: 'Develop a social platform with posts, comments, likes, and real-time notifications.',
                tech: ['React', 'Socket.io', 'Node.js', 'MongoDB']
            }
        ],
        prerequisites: [
            'Basic understanding of HTML, CSS, JavaScript',
            'Familiarity with programming concepts',
            'Laptop with 8GB+ RAM',
            'Willingness to learn and commit 20+ hours/week'
        ],
        outcomes: [
            'Build 3+ production-ready full-stack applications',
            'Master MERN stack development',
            'Create a professional GitHub portfolio',
            'Receive internship completion certificate',
            'Get resume and interview preparation',
            'Opportunity to join Kiaan Technology team'
        ],
        tools: ['VS Code', 'Git', 'Postman', 'MongoDB Compass', 'Chrome DevTools', 'Figma'],
        certification: 'Official Internship Certificate from Kiaan Technology',
        isPaid: false,
        stipendInfo: 'Performance-based stipend available for top performers'
    },

    'react-frontend': {
        id: 'react-frontend',
        title: 'React.js Frontend Internship',
        category: 'Web Development',
        duration: '4 Months',
        format: 'On-site',
        level: 'Beginner to Intermediate',
        metaTitle: 'React.js Frontend Internship | Kiaan Technology',
        metaDescription: 'Master React.js development with our comprehensive frontend internship. Build modern UIs with hooks, Redux, and component architecture.',
        keywords: 'react internship, frontend internship, react.js training',
        hero: {
            tagline: 'Become a React Expert',
            description: 'Master modern frontend development with React.js. Build stunning, performant user interfaces for web applications.',
            highlights: ['React 18+', 'Modern Hooks', 'State Management', 'Real Projects']
        },
        curriculum: [
            {
                module: 'React Fundamentals',
                topics: ['JSX & Components', 'Props & State', 'Event Handling', 'Conditional Rendering', 'Lists & Keys', 'Forms & Controlled Components']
            },
            {
                module: 'Advanced React',
                topics: ['React Hooks (useState, useEffect, useContext)', 'Custom Hooks', 'useReducer & Complex State', 'React Router', 'Code Splitting & Lazy Loading', 'Error Boundaries']
            },
            {
                module: 'State Management',
                topics: ['Context API', 'Redux Toolkit', 'Redux Thunk / Saga', 'Zustand / Jotai', 'State Management Patterns', 'Performance Optimization']
            },
            {
                module: 'UI & Styling',
                topics: ['Tailwind CSS', 'Styled Components', 'CSS Modules', 'Framer Motion Animations', 'Responsive Design', 'Accessibility (a11y)']
            }
        ],
        liveProjects: [
            {
                name: 'Task Management App',
                description: 'Build a Trello-like kanban board with drag-and-drop functionality.',
                tech: ['React', 'Redux', 'React Beautiful DnD', 'Tailwind']
            },
            {
                name: 'Movie Discovery Platform',
                description: 'Create a Netflix-style UI with API integration and advanced filtering.',
                tech: ['React', 'TMDB API', 'React Router', 'Framer Motion']
            }
        ],
        prerequisites: [
            'Strong JavaScript fundamentals',
            'Basic HTML & CSS knowledge',
            'Understanding of ES6+ features',
            'Laptop with 4GB+ RAM'
        ],
        outcomes: [
            'Build modern React applications',
            'Master component architecture',
            'Implement complex state management',
            'Create responsive, animated UIs',
            'Portfolio with 2+ React projects',
            'Internship certificate'
        ],
        tools: ['VS Code', 'React DevTools', 'Git', 'npm/yarn', 'Figma'],
        certification: 'React.js Frontend Development Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'nodejs-backend': {
        id: 'nodejs-backend',
        title: 'Node.js Backend Internship',
        category: 'Web Development',
        duration: '4 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'Node.js Backend Internship | Kiaan Technology',
        metaDescription: 'Learn backend development with Node.js, Express, MongoDB, and RESTful APIs. Build scalable server-side applications.',
        keywords: 'nodejs internship, backend internship, api development',
        hero: {
            tagline: 'Master Backend Development',
            description: 'Build robust, scalable backend systems with Node.js and Express. Learn API design, databases, and server architecture.',
            highlights: ['RESTful APIs', 'Database Design', 'Authentication', 'Cloud Deployment']
        },
        curriculum: [
            {
                module: 'Node.js Fundamentals',
                topics: ['Node.js Architecture', 'Modules & NPM', 'Asynchronous Programming', 'Event Loop', 'File System Operations', 'Streams & Buffers']
            },
            {
                module: 'Express.js & APIs',
                topics: ['Express Framework', 'Routing & Middleware', 'RESTful API Design', 'Request/Response Handling', 'Error Handling', 'API Versioning']
            },
            {
                module: 'Database & Authentication',
                topics: ['MongoDB & Mongoose', 'Schema Design', 'CRUD Operations', 'JWT Authentication', 'Password Hashing (bcrypt)', 'Session Management']
            },
            {
                module: 'Advanced Backend',
                topics: ['File Upload (Multer)', 'Email Integration', 'Payment Gateways', 'WebSockets', 'Caching (Redis)', 'API Security']
            }
        ],
        liveProjects: [
            {
                name: 'RESTful Blog API',
                description: 'Build a complete blog backend with authentication, CRUD operations, and image uploads.',
                tech: ['Node.js', 'Express', 'MongoDB', 'JWT']
            },
            {
                name: 'E-Commerce Backend',
                description: 'Create APIs for product management, cart, orders, and payment processing.',
                tech: ['Express', 'MongoDB', 'Stripe', 'Cloudinary']
            }
        ],
        prerequisites: [
            'Strong JavaScript knowledge',
            'Understanding of HTTP protocols',
            'Basic database concepts',
            'Command line familiarity'
        ],
        outcomes: [
            'Build production-ready APIs',
            'Master Node.js ecosystem',
            'Implement secure authentication',
            'Deploy to cloud platforms',
            'Backend development certificate',
            'Portfolio with API projects'
        ],
        tools: ['VS Code', 'Postman', 'MongoDB Compass', 'Git', 'Docker'],
        certification: 'Node.js Backend Development Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend for exceptional work'
    },

    'nextjs-saas': {
        id: 'nextjs-saas',
        title: 'Next.js SaaS Development Internship',
        category: 'Web Development',
        duration: '5 Months',
        format: 'On-site',
        level: 'Intermediate to Advanced',
        metaTitle: 'Next.js SaaS Internship | Kiaan Technology',
        metaDescription: 'Build modern SaaS applications with Next.js 14+. Learn server-side rendering, API routes, and full-stack development.',
        keywords: 'nextjs internship, saas development, full stack nextjs',
        hero: {
            tagline: 'Build Modern SaaS Products',
            description: 'Master Next.js to create high-performance, SEO-friendly SaaS applications with server-side rendering and API routes.',
            highlights: ['Next.js 14+', 'Server Components', 'API Routes', 'SaaS Architecture']
        },
        curriculum: [
            {
                module: 'Next.js Fundamentals',
                topics: ['App Router', 'Server & Client Components', 'File-based Routing', 'Data Fetching', 'Metadata & SEO', 'Image Optimization']
            },
            {
                module: 'Full Stack Next.js',
                topics: ['API Routes', 'Server Actions', 'Database Integration', 'Authentication (NextAuth)', 'Middleware', 'Route Handlers']
            },
            {
                module: 'SaaS Features',
                topics: ['Multi-tenancy', 'Subscription Billing (Stripe)', 'Role-based Access', 'Email Integration', 'File Storage', 'Analytics']
            },
            {
                module: 'Production & Deployment',
                topics: ['Vercel Deployment', 'Environment Variables', 'Performance Optimization', 'Caching Strategies', 'Monitoring', 'CI/CD']
            }
        ],
        liveProjects: [
            {
                name: 'SaaS CRM Platform',
                description: 'Build a complete CRM with authentication, subscriptions, and multi-tenant architecture.',
                tech: ['Next.js 14', 'Prisma', 'PostgreSQL', 'Stripe']
            },
            {
                name: 'Project Management Tool',
                description: 'Create a Trello-like SaaS with real-time updates and team collaboration.',
                tech: ['Next.js', 'MongoDB', 'Socket.io', 'NextAuth']
            }
        ],
        prerequisites: [
            'Strong React knowledge',
            'JavaScript/TypeScript proficiency',
            'Understanding of APIs and databases',
            'Basic backend concepts'
        ],
        outcomes: [
            'Build production SaaS applications',
            'Master Next.js framework',
            'Implement subscription billing',
            'Deploy scalable applications',
            'SaaS development certificate',
            'Professional portfolio'
        ],
        tools: ['VS Code', 'Vercel', 'Prisma Studio', 'Git', 'Stripe Dashboard'],
        certification: 'Next.js SaaS Development Certificate',
        isPaid: false,
        stipendInfo: 'Stipend available for top performers'
    },

    'uiux-figma': {
        id: 'uiux-figma',
        title: 'UI/UX Design + Figma Internship',
        category: 'Web Development',
        duration: '3 Months',
        format: 'On-site',
        level: 'Beginner to Intermediate',
        metaTitle: 'UI/UX Design Internship | Kiaan Technology',
        metaDescription: 'Learn UI/UX design with Figma. Create stunning interfaces, prototypes, and design systems for web and mobile apps.',
        keywords: 'ui ux internship, figma internship, design internship',
        hero: {
            tagline: 'Design Beautiful Experiences',
            description: 'Master UI/UX design principles and Figma to create stunning, user-friendly interfaces for modern applications.',
            highlights: ['Figma Mastery', 'Design Systems', 'Prototyping', 'Real Projects']
        },
        curriculum: [
            {
                module: 'Design Fundamentals',
                topics: ['Design Principles', 'Color Theory', 'Typography', 'Layout & Grid Systems', 'Visual Hierarchy', 'Accessibility']
            },
            {
                module: 'Figma Mastery',
                topics: ['Figma Interface', 'Components & Variants', 'Auto Layout', 'Prototyping', 'Design Systems', 'Collaboration Features']
            },
            {
                module: 'UX Design',
                topics: ['User Research', 'Wireframing', 'User Flows', 'Information Architecture', 'Usability Testing', 'Design Thinking']
            },
            {
                module: 'Advanced Design',
                topics: ['Responsive Design', 'Mobile UI Patterns', 'Micro-interactions', 'Animation Principles', 'Design Handoff', 'Developer Collaboration']
            }
        ],
        liveProjects: [
            {
                name: 'SaaS Dashboard Design',
                description: 'Design a complete dashboard interface with data visualization and responsive layouts.',
                tech: ['Figma', 'Design System', 'Prototyping']
            },
            {
                name: 'Mobile App UI',
                description: 'Create a full mobile app design with onboarding, navigation, and interactions.',
                tech: ['Figma', 'Mobile Patterns', 'Prototypes']
            }
        ],
        prerequisites: [
            'Basic design sense',
            'Computer with internet',
            'Willingness to learn',
            'Creative mindset'
        ],
        outcomes: [
            'Master Figma design tool',
            'Create professional UI designs',
            'Build design systems',
            'Develop UX research skills',
            'Portfolio with 3+ projects',
            'UI/UX certificate'
        ],
        tools: ['Figma', 'FigJam', 'Adobe Color', 'Unsplash', 'IconScout'],
        certification: 'UI/UX Design Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    // MOBILE APP DEVELOPMENT PROGRAMS
    'flutter-cross-platform': {
        id: 'flutter-cross-platform',
        title: 'Flutter Cross-Platform Internship',
        category: 'Mobile App Development',
        duration: '5 Months',
        format: 'On-site',
        level: 'Beginner to Advanced',
        metaTitle: 'Flutter Internship | Kiaan Technology',
        metaDescription: 'Learn Flutter development and build cross-platform mobile apps for iOS and Android with a single codebase.',
        keywords: 'flutter internship, mobile app internship, cross platform development',
        hero: {
            tagline: 'Build Apps for iOS & Android',
            description: 'Master Flutter to create beautiful, high-performance mobile applications for both iOS and Android platforms.',
            highlights: ['Cross-Platform', 'Native Performance', 'Beautiful UIs', 'Live Projects']
        },
        curriculum: [
            {
                module: 'Dart Programming',
                topics: ['Dart Syntax', 'OOP in Dart', 'Async Programming', 'Collections', 'Error Handling', 'Null Safety']
            },
            {
                module: 'Flutter Fundamentals',
                topics: ['Widgets & Layouts', 'State Management (Provider)', 'Navigation & Routing', 'Forms & Validation', 'Networking (HTTP)', 'Local Storage']
            },
            {
                module: 'Advanced Flutter',
                topics: ['BLoC Pattern', 'Riverpod', 'Animations', 'Custom Widgets', 'Platform Channels', 'Firebase Integration']
            },
            {
                module: 'App Development',
                topics: ['Push Notifications', 'Camera & Gallery', 'Maps Integration', 'Payment Gateways', 'App Deployment', 'Performance Optimization']
            }
        ],
        liveProjects: [
            {
                name: 'E-Commerce Mobile App',
                description: 'Build a full-featured shopping app with cart, payments, and order tracking.',
                tech: ['Flutter', 'Firebase', 'Stripe', 'Provider']
            },
            {
                name: 'Social Media App',
                description: 'Create a social platform with posts, stories, and real-time chat.',
                tech: ['Flutter', 'Firebase', 'BLoC', 'Cloud Firestore']
            }
        ],
        prerequisites: [
            'Basic programming knowledge',
            'Understanding of OOP concepts',
            'Computer with 8GB+ RAM',
            'Android Studio or VS Code'
        ],
        outcomes: [
            'Build cross-platform mobile apps',
            'Master Flutter & Dart',
            'Publish apps to stores',
            'Create professional portfolio',
            'Flutter development certificate',
            'Placement assistance'
        ],
        tools: ['Android Studio', 'VS Code', 'Flutter DevTools', 'Firebase Console', 'Git'],
        certification: 'Flutter Mobile Development Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend available'
    },

    'react-native': {
        id: 'react-native',
        title: 'React Native Mobile Internship',
        category: 'Mobile App Development',
        duration: '4 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'React Native Internship | Kiaan Technology',
        metaDescription: 'Build mobile apps with React Native. Learn cross-platform development using JavaScript and React.',
        keywords: 'react native internship, mobile development, app development internship',
        hero: {
            tagline: 'React for Mobile',
            description: 'Use your React skills to build native mobile applications for iOS and Android with React Native.',
            highlights: ['JavaScript', 'Native Performance', 'React Ecosystem', 'Real Apps']
        },
        curriculum: [
            {
                module: 'React Native Basics',
                topics: ['RN Components', 'Styling & Flexbox', 'Navigation (React Navigation)', 'Platform-specific Code', 'Debugging', 'Hot Reload']
            },
            {
                module: 'State & Data',
                topics: ['Redux Toolkit', 'Context API', 'AsyncStorage', 'API Integration', 'Data Persistence', 'State Management Patterns']
            },
            {
                module: 'Native Features',
                topics: ['Camera & Media', 'Geolocation', 'Push Notifications', 'Biometric Auth', 'Native Modules', 'Third-party Libraries']
            },
            {
                module: 'Production',
                topics: ['App Optimization', 'Testing', 'Build & Deployment', 'App Store Submission', 'CodePush', 'Analytics']
            }
        ],
        liveProjects: [
            {
                name: 'Food Delivery App',
                description: 'Build a complete food ordering app with real-time tracking and payments.',
                tech: ['React Native', 'Redux', 'Firebase', 'Maps']
            },
            {
                name: 'Fitness Tracker',
                description: 'Create a health app with workout tracking, charts, and notifications.',
                tech: ['React Native', 'AsyncStorage', 'Charts', 'Notifications']
            }
        ],
        prerequisites: [
            'Strong React knowledge',
            'JavaScript proficiency',
            'Basic mobile app concepts',
            'Mac (for iOS development) or Windows/Linux'
        ],
        outcomes: [
            'Build native mobile apps',
            'Master React Native',
            'Deploy to app stores',
            'Portfolio with 2+ apps',
            'React Native certificate',
            'Job placement support'
        ],
        tools: ['VS Code', 'Expo', 'React Native Debugger', 'Xcode/Android Studio', 'Git'],
        certification: 'React Native Development Certificate',
        isPaid: false,
        stipendInfo: 'Stipend for exceptional performers'
    },

    // AI-POWERED DEVELOPMENT PROGRAMS
    'ai-web-development': {
        id: 'ai-web-development',
        title: 'AI Web Application Development Internship',
        category: 'AI-Powered Development',
        duration: '6 Months',
        format: 'On-site',
        level: 'Intermediate to Advanced',
        metaTitle: 'AI Web Development Internship | Kiaan Technology',
        metaDescription: 'Build AI-powered web applications. Learn to integrate GPT, Claude, and other AI models into modern web apps.',
        keywords: 'AI web development internship, AI internship program, AI app development',
        hero: {
            tagline: 'Build Intelligent Web Apps',
            description: 'Create cutting-edge web applications powered by AI. Integrate GPT, Claude, and custom ML models into production apps.',
            highlights: ['AI Integration', 'LLM APIs', 'Smart Features', 'Real Projects']
        },
        curriculum: [
            {
                module: 'AI Fundamentals',
                topics: ['AI/ML Basics', 'LLM Overview', 'API Integration', 'Prompt Engineering', 'AI Ethics', 'Use Case Analysis']
            },
            {
                module: 'OpenAI Integration',
                topics: ['GPT API', 'Chat Completions', 'Function Calling', 'Embeddings', 'Fine-tuning', 'Token Management']
            },
            {
                module: 'Full Stack AI Apps',
                topics: ['Next.js + AI', 'Streaming Responses', 'Vector Databases', 'RAG Systems', 'AI Agents', 'Context Management']
            },
            {
                module: 'Advanced AI Features',
                topics: ['Image Generation (DALL-E)', 'Speech-to-Text', 'Text-to-Speech', 'AI Chatbots', 'Document Analysis', 'AI Workflows']
            }
        ],
        liveProjects: [
            {
                name: 'AI Content Generator',
                description: 'Build a SaaS platform for AI-powered content creation with templates and customization.',
                tech: ['Next.js', 'OpenAI API', 'Prisma', 'Stripe']
            },
            {
                name: 'Smart Document Analyzer',
                description: 'Create an app that analyzes documents using AI and extracts insights.',
                tech: ['React', 'GPT-4', 'Vector DB', 'RAG']
            },
            {
                name: 'AI Customer Support Bot',
                description: 'Develop an intelligent chatbot with context awareness and function calling.',
                tech: ['Node.js', 'OpenAI', 'WebSocket', 'MongoDB']
            }
        ],
        prerequisites: [
            'Strong web development skills (React/Node)',
            'Understanding of APIs',
            'Basic Python knowledge (helpful)',
            'Interest in AI/ML'
        ],
        outcomes: [
            'Build AI-powered applications',
            'Master LLM integration',
            'Implement RAG systems',
            'Create AI agents',
            'AI development certificate',
            'Portfolio with AI projects'
        ],
        tools: ['VS Code', 'OpenAI Playground', 'Pinecone', 'LangChain', 'Git'],
        certification: 'AI Web Development Certificate',
        isPaid: false,
        stipendInfo: 'Stipend available for top performers'
    },

    'ai-chatbot-llm': {
        id: 'ai-chatbot-llm',
        title: 'AI Chatbot & LLM Integration Internship',
        category: 'AI-Powered Development',
        duration: '4 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'AI Chatbot Internship | Kiaan Technology',
        metaDescription: 'Learn to build intelligent chatbots using GPT, Claude, and LangChain. Master conversational AI development.',
        keywords: 'AI chatbot internship, LLM integration, conversational AI',
        hero: {
            tagline: 'Build Intelligent Chatbots',
            description: 'Master the art of creating AI-powered chatbots and conversational interfaces using cutting-edge LLM technology.',
            highlights: ['GPT Integration', 'LangChain', 'Context Memory', 'Real Bots']
        },
        curriculum: [
            {
                module: 'Chatbot Fundamentals',
                topics: ['Conversational AI Basics', 'LLM Overview', 'Prompt Engineering', 'Chat Design Patterns', 'User Intent', 'Context Management']
            },
            {
                module: 'LLM Integration',
                topics: ['OpenAI API', 'Claude API', 'Streaming Responses', 'Function Calling', 'System Prompts', 'Temperature & Parameters']
            },
            {
                module: 'LangChain Framework',
                topics: ['LangChain Basics', 'Chains & Agents', 'Memory Systems', 'Vector Stores', 'Document Loaders', 'RAG Implementation']
            },
            {
                module: 'Production Chatbots',
                topics: ['Multi-turn Conversations', 'Context Windows', 'Error Handling', 'Rate Limiting', 'Analytics', 'Deployment']
            }
        ],
        liveProjects: [
            {
                name: 'Customer Support Bot',
                description: 'Build an AI assistant that handles customer queries with context awareness.',
                tech: ['LangChain', 'OpenAI', 'Pinecone', 'React']
            },
            {
                name: 'Knowledge Base Chatbot',
                description: 'Create a bot that answers questions from company documents using RAG.',
                tech: ['LangChain', 'GPT-4', 'Vector DB', 'Next.js']
            }
        ],
        prerequisites: [
            'JavaScript/Python knowledge',
            'Basic API understanding',
            'Interest in AI',
            'Problem-solving skills'
        ],
        outcomes: [
            'Build production chatbots',
            'Master LLM APIs',
            'Implement RAG systems',
            'Create conversational AI',
            'Chatbot development certificate',
            'Portfolio projects'
        ],
        tools: ['VS Code', 'LangChain', 'OpenAI Playground', 'Pinecone', 'Git'],
        certification: 'AI Chatbot Development Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    // DATA SCIENCE & ML PROGRAMS
    'machine-learning': {
        id: 'machine-learning',
        title: 'Machine Learning Engineering Internship',
        category: 'Data Science & Machine Learning',
        duration: '6 Months',
        format: 'On-site',
        level: 'Intermediate to Advanced',
        metaTitle: 'Machine Learning Internship | Kiaan Technology',
        metaDescription: 'Learn machine learning engineering. Build ML models, deploy them to production, and work on real-world AI projects.',
        keywords: 'machine learning internship, ML engineering, AI internship',
        hero: {
            tagline: 'Become an ML Engineer',
            description: 'Master machine learning algorithms, model training, and deployment. Build intelligent systems that learn from data.',
            highlights: ['ML Algorithms', 'Model Training', 'Production ML', 'Real Projects']
        },
        curriculum: [
            {
                module: 'ML Fundamentals',
                topics: ['Python for ML', 'NumPy & Pandas', 'Data Preprocessing', 'Feature Engineering', 'Train-Test Split', 'Model Evaluation']
            },
            {
                module: 'Supervised Learning',
                topics: ['Linear Regression', 'Logistic Regression', 'Decision Trees', 'Random Forests', 'SVM', 'Gradient Boosting (XGBoost)']
            },
            {
                module: 'Deep Learning',
                topics: ['Neural Networks', 'TensorFlow/PyTorch', 'CNNs', 'RNNs', 'Transfer Learning', 'Model Optimization']
            },
            {
                module: 'MLOps',
                topics: ['Model Deployment', 'FastAPI', 'Docker', 'Model Monitoring', 'CI/CD for ML', 'Cloud Deployment']
            }
        ],
        liveProjects: [
            {
                name: 'Predictive Analytics System',
                description: 'Build an ML system for sales forecasting with model deployment.',
                tech: ['Python', 'Scikit-learn', 'FastAPI', 'Docker']
            },
            {
                name: 'Image Classification App',
                description: 'Create a deep learning model for image recognition with web interface.',
                tech: ['TensorFlow', 'CNN', 'Flask', 'React']
            }
        ],
        prerequisites: [
            'Strong Python programming',
            'Mathematics (linear algebra, statistics)',
            'Basic ML concepts',
            'Computer with GPU (recommended)'
        ],
        outcomes: [
            'Build ML models from scratch',
            'Deploy models to production',
            'Master ML frameworks',
            'Work on real datasets',
            'ML Engineering certificate',
            'Portfolio with ML projects'
        ],
        tools: ['Jupyter', 'Python', 'TensorFlow', 'Scikit-learn', 'Docker', 'Git'],
        certification: 'Machine Learning Engineering Certificate',
        isPaid: false,
        stipendInfo: 'Stipend for exceptional work'
    },

    // SEO & DIGITAL GROWTH PROGRAMS
    'seo-internship': {
        id: 'seo-internship',
        title: 'Search Engine Optimization (SEO) Internship',
        category: 'SEO & Digital Growth',
        duration: '3 Months',
        format: 'On-site',
        level: 'Beginner to Intermediate',
        metaTitle: 'SEO Internship with Certificate | Kiaan Technology',
        metaDescription: 'Learn SEO from experts. Master on-page, off-page, and technical SEO. Get certified and boost website rankings.',
        keywords: 'SEO internship with certificate, digital marketing internship, SEO training',
        hero: {
            tagline: 'Master SEO & Rank #1',
            description: 'Learn proven SEO strategies to rank websites on Google. Master technical SEO, content optimization, and link building.',
            highlights: ['Google Rankings', 'Technical SEO', 'Content Strategy', 'Real Campaigns']
        },
        curriculum: [
            {
                module: 'SEO Fundamentals',
                topics: ['How Search Engines Work', 'Keyword Research', 'On-Page SEO', 'Meta Tags & Schema', 'Content Optimization', 'SEO Tools']
            },
            {
                module: 'Technical SEO',
                topics: ['Site Speed Optimization', 'Mobile SEO', 'Core Web Vitals', 'XML Sitemaps', 'Robots.txt', 'Structured Data']
            },
            {
                module: 'Off-Page SEO',
                topics: ['Link Building Strategies', 'Backlink Analysis', 'Guest Posting', 'Local SEO', 'Google My Business', 'Citation Building']
            },
            {
                module: 'Analytics & Reporting',
                topics: ['Google Analytics', 'Google Search Console', 'Rank Tracking', 'Traffic Analysis', 'Conversion Optimization', 'SEO Reporting']
            }
        ],
        liveProjects: [
            {
                name: 'Website SEO Audit',
                description: 'Perform comprehensive SEO audit and create optimization strategy.',
                tech: ['Ahrefs', 'SEMrush', 'Google Tools', 'Screaming Frog']
            },
            {
                name: 'Content Marketing Campaign',
                description: 'Plan and execute content strategy to improve organic rankings.',
                tech: ['Keyword Research', 'Content Writing', 'Link Building']
            }
        ],
        prerequisites: [
            'Basic understanding of websites',
            'Good writing skills',
            'Analytical mindset',
            'Interest in digital marketing'
        ],
        outcomes: [
            'Master SEO techniques',
            'Improve website rankings',
            'Conduct SEO audits',
            'Build backlink strategies',
            'SEO certificate',
            'Portfolio with case studies'
        ],
        tools: ['Google Analytics', 'Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog'],
        certification: 'SEO Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    // DEVOPS & CLOUD PROGRAMS
    'aws-cloud': {
        id: 'aws-cloud',
        title: 'Cloud Deployment & AWS Internship',
        category: 'DevOps & Cloud',
        duration: '4 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'AWS Cloud Internship | Kiaan Technology',
        metaDescription: 'Learn AWS cloud services and deployment. Master EC2, S3, Lambda, and cloud architecture.',
        keywords: 'AWS internship, cloud internship, DevOps internship',
        hero: {
            tagline: 'Master Cloud Computing',
            description: 'Learn to deploy and manage applications on AWS. Master cloud architecture, serverless, and DevOps practices.',
            highlights: ['AWS Services', 'Cloud Architecture', 'Serverless', 'Real Deployments']
        },
        curriculum: [
            {
                module: 'AWS Fundamentals',
                topics: ['AWS Overview', 'IAM & Security', 'EC2 Instances', 'S3 Storage', 'VPC & Networking', 'AWS CLI']
            },
            {
                module: 'Application Deployment',
                topics: ['Elastic Beanstalk', 'Load Balancers', 'Auto Scaling', 'RDS Databases', 'CloudFront CDN', 'Route 53']
            },
            {
                module: 'Serverless & Containers',
                topics: ['Lambda Functions', 'API Gateway', 'DynamoDB', 'ECS & Fargate', 'Docker on AWS', 'Serverless Framework']
            },
            {
                module: 'DevOps on AWS',
                topics: ['CodePipeline', 'CodeBuild', 'CodeDeploy', 'CloudWatch', 'Cost Optimization', 'Security Best Practices']
            }
        ],
        liveProjects: [
            {
                name: 'Full Stack App Deployment',
                description: 'Deploy a complete web application on AWS with auto-scaling and monitoring.',
                tech: ['EC2', 'RDS', 'S3', 'CloudFront', 'Load Balancer']
            },
            {
                name: 'Serverless API',
                description: 'Build and deploy a serverless REST API using Lambda and API Gateway.',
                tech: ['Lambda', 'API Gateway', 'DynamoDB', 'CloudWatch']
            }
        ],
        prerequisites: [
            'Basic Linux knowledge',
            'Understanding of web applications',
            'Command line familiarity',
            'Networking basics'
        ],
        outcomes: [
            'Deploy apps on AWS',
            'Master cloud services',
            'Implement CI/CD pipelines',
            'Optimize cloud costs',
            'AWS certificate',
            'Cloud portfolio'
        ],
        tools: ['AWS Console', 'AWS CLI', 'Terraform', 'Docker', 'Git'],
        certification: 'AWS Cloud Deployment Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    // --- ADDITIONAL WEB DEVELOPMENT PROGRAMS ---

    'vuejs-frontend-engineering-internship': {
        id: 'vuejs-frontend-engineering-internship',
        title: 'Vue.js Frontend Engineering Internship',
        category: 'Web Development',
        duration: '4 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'Vue.js Internship | Kiaan Technology',
        metaDescription: 'Master Vue.js 3 development. Build reactive web applications with Composition API, Pinia, and Nuxt.js.',
        keywords: 'vuejs internship, nuxtjs internship, frontend development',
        hero: {
            tagline: 'Master the Progressive Framework',
            description: 'Build robust, scalable frontend applications with Vue.js 3. Learn the Composition API, Pinia state management, and Nuxt.js for SSR.',
            highlights: ['Vue 3 Composition API', 'Nuxt.js SSR', 'Pinia Store', 'Real Projects']
        },
        curriculum: [
            {
                module: 'Vue.js Essentials',
                topics: ['Vue 3 Fundamentals', 'Composition API vs Options API', 'Reactivity System', 'Lifecycle Hooks', 'Directives', 'Event Handling']
            },
            {
                module: 'Advanced Vue & Ecosystem',
                topics: ['Pinia State Management', 'Vue Router', 'Transition & Animation', 'Provide/Inject Pattern', 'Composables', 'Teleport & Suspense']
            },
            {
                module: 'Nuxt.js Framework',
                topics: ['Nuxt 3 Fundamentals', 'File-based Routing', 'Server Side Rendering (SSR)', 'Data Fetching', 'Nuxt Modules', 'SEO Optimization']
            },
            {
                module: 'Testing & Performance',
                topics: ['Vitest & Vue Test Utils', 'E2E Testing with Cypress', 'Performance Optimization', 'Bundle Analysis', 'PWA with Vue', 'Deployment']
            }
        ],
        liveProjects: [
            {
                name: 'E-Commerce Dashboard',
                description: 'Build a comprehensive admin dashboard with data visualization and order management.',
                tech: ['Vue 3', 'Pinia', 'Tailwind CSS', 'Chart.js']
            },
            {
                name: 'Content Publishing Platform',
                description: 'Create a blog platform with SSR for SEO and markdown support.',
                tech: ['Nuxt 3', 'Nuxt Content', 'Tailwind Typography']
            }
        ],
        prerequisites: ['Strong JavaScript knowledge', 'HTML & CSS proficiency', 'Basic understanding of frameworks'],
        outcomes: ['Build scalable Vue applications', 'Master Nuxt.js framework', 'Manage complex state with Pinia', 'Implement SSR solutions'],
        tools: ['VS Code', 'Vue DevTools', 'Vite', 'Git', 'Postman'],
        certification: 'Vue.js Frontend Development Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'advanced-typescript-development-internship': {
        id: 'advanced-typescript-development-internship',
        title: 'Advanced TypeScript Development Internship',
        category: 'Web Development',
        duration: '3 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'TypeScript Internship | Kiaan Technology',
        metaDescription: 'Deep dive into TypeScript. Master generics, utility types, decorators, and advanced patterns for large-scale applications.',
        keywords: 'typescript internship, advanced javascript, type safety',
        hero: {
            tagline: 'Scale with Type Safety',
            description: 'Master advanced TypeScript concepts to build robust, type-safe, and scalable applications. Learn design patterns and best practices.',
            highlights: ['Advanced Types', 'Generics', 'Design Patterns', 'Type Narrowing']
        },
        curriculum: [
            {
                module: 'TypeScript Core',
                topics: ['Type Inference', 'Interfaces vs Types', 'Unions & Intersections', 'Enums & Tuples', 'Functions & Overloads', 'Type Assertions']
            },
            {
                module: 'Advanced Types',
                topics: ['Generics', 'Utility Types (Partial, Pick, Omit)', 'Mapped Types', 'Conditional Types', 'Template Literal Types', 'Type Guards']
            },
            {
                module: 'TypeScript in Practice',
                topics: ['TypeScript with React', 'TypeScript with Node.js', 'Declaration Files (.d.ts)', 'Configuration (tsconfig)', 'Migration Strategies', 'Strict Mode']
            },
            {
                module: 'Architecture & Patterns',
                topics: ['Design Patterns in TS', 'Dependency Injection', 'SOLID Principles', 'Monorepo Setup', 'Testing with TS', 'API Contract Design']
            }
        ],
        liveProjects: [
            {
                name: 'Type-Safe Component Library',
                description: 'Build a reusable React component library with strict typing and documentation.',
                tech: ['React', 'TypeScript', 'Storybook', 'Rollup']
            },
            {
                name: 'Backend API Framework',
                description: 'Create a lightweight backend framework with decorators and dependency injection.',
                tech: ['Node.js', 'TypeScript', 'Reflect Metadata', 'Express']
            }
        ],
        prerequisites: ['Proficiency in JavaScript (ES6+)', 'Basic TypeScript knowledge', 'Experience with a framework'],
        outcomes: ['Write production-grade TypeScript', 'Refactor JS codebase to TS', 'Build type-safe libraries', 'Master advanced patterns'],
        tools: ['VS Code', 'TypeScript Playground', 'Eslint', 'Prettier'],
        certification: 'Advanced TypeScript Development Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'progressive-web-apps-pwa-internship': {
        id: 'progressive-web-apps-pwa-internship',
        title: 'Progressive Web Apps (PWA) Internship',
        category: 'Web Development',
        duration: '3 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'PWA Internship | Kiaan Technology',
        metaDescription: 'Learn to build Progressive Web Apps (PWAs). Master service workers, offline capabilities, and installable web apps.',
        keywords: 'pwa internship, web app development, offline first',
        hero: {
            tagline: 'Web Apps with Native Feel',
            description: 'Transform web pages into installable applications. Master Service Workers, Manifest files, and offline storage strategies.',
            highlights: ['Service Workers', 'Offline Support', 'Push Notifications', 'Installability']
        },
        curriculum: [
            {
                module: 'PWA Fundamentals',
                topics: ['Web App Manifest', 'Service Worker Lifecycle', 'Cache Storage API', 'Fetch Event Handling', 'Install Prompts', 'Lighthouse Audits']
            },
            {
                module: 'Offline Strategies',
                topics: ['Cache First', 'Network First', 'Stale While Revalidate', 'IndexedDB Integration', 'Background Sync', 'Offline Fallbacks']
            },
            {
                module: 'Native Features',
                topics: ['Push Notifications', 'Web Share API', 'Geolocation API', 'Camera Access', 'File System Access', 'Payment Request API']
            },
            {
                module: 'Optimization & Deployment',
                topics: ['Performance Bugets', 'App Shell Architecture', 'Lazy Loading', 'Hosting (Vercel/Netlify)', 'Play Store Publishing (TWA)', 'Workbox Library']
            }
        ],
        liveProjects: [
            {
                name: 'Offline News Reader',
                description: 'Build a news aggregator that works completely offline with background syncing.',
                tech: ['HTML/CSS/JS', 'Service Workers', 'IndexedDB', 'News API']
            },
            {
                name: 'Expense Tracker PWA',
                description: 'Create an installable expense tracker with push notifications for budget alerts.',
                tech: ['React', 'Vite PWA Plugin', 'LocalStorage']
            }
        ],
        prerequisites: ['Strong JavaScript skills', 'Understanding of HTTP', 'Basic React/Vue knowledge'],
        outcomes: ['Build installable web apps', 'Implement offline capabilities', 'Master caching strategies', 'Publish PWAs to stores'],
        tools: ['Chrome DevTools', 'Lighthouse', 'Workbox', 'VS Code'],
        certification: 'PWA Development Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'graphql-api-design-internship': {
        id: 'graphql-api-design-internship',
        title: 'GraphQL & API Design Internship',
        category: 'Web Development',
        duration: '4 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'GraphQL Internship | Kiaan Technology',
        metaDescription: 'Master GraphQL API development. Learn schema design, resolvers, Apollo Server, and efficient data fetching.',
        keywords: 'graphql internship, api design, backend development',
        hero: {
            tagline: 'The Future of APIs',
            description: 'Stop over-fetching data. Master GraphQL to build flexible, efficient, and strongly-typed APIs for modern applications.',
            highlights: ['Schema Design', 'Apollo Server', 'Resolvers', 'Frontend Consumption']
        },
        curriculum: [
            {
                module: 'GraphQL Basics',
                topics: ['REST vs GraphQL', 'Schema Definition Language (SDL)', 'Queries & Mutations', 'Types & Enums', 'Input Types', 'GraphiQL Playground']
            },
            {
                module: 'Backend Implementation',
                topics: ['Apollo Server', 'Resolver Functions', 'Data Sources', 'Connecting to Databases', 'Authentication', 'Error Handling']
            },
            {
                module: 'Frontend Integration',
                topics: ['Apollo Client', 'useQuery & useMutation', 'Caching & Normalization', 'Fragments', 'Optimistic UI', 'Pagination']
            },
            {
                module: 'Advanced Topics',
                topics: ['Subscriptions (Real-time)', 'Schema Directives', 'Federation (Microservices)', 'Security & Performance', 'N+1 Problem', 'Batching']
            }
        ],
        liveProjects: [
            {
                name: 'Social Network API',
                description: 'Build a complex GraphQL API for a social platform with nested relationships.',
                tech: ['Apollo Server', 'Node.js', 'MongoDB', 'GraphQL']
            },
            {
                name: 'Real-time Chat App',
                description: 'Implement real-time messaging using GraphQL Subscriptions.',
                tech: ['React', 'Apollo Client', 'GraphQL Subscriptions', 'Redis']
            }
        ],
        prerequisites: ['Node.js & Express knowledge', 'Database fundamentals', 'Basic API understanding'],
        outcomes: ['Design scalable GraphQL schemas', 'Build efficient APIs', 'Integrate GraphQL on frontend', 'Solve N+1/performance issues'],
        tools: ['Apollo Studio', 'Postman', 'VS Code', 'MongoDB'],
        certification: 'GraphQL Development Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'web-performance-optimization-internship': {
        id: 'web-performance-optimization-internship',
        title: 'Web Performance Optimization Internship',
        category: 'Web Development',
        duration: '3 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'Web Performance Internship | Kiaan Technology',
        metaDescription: 'Learn to optimize web applications for speed. Master Core Web Vitals, lazy loading, caching, and bundle analysis.',
        keywords: 'web performance internship, speed optimization, frontend engineering',
        hero: {
            tagline: 'Make the Web Faster',
            description: 'Speed matters. Learn to analyze, profile, and optimize web applications for lightning-fast load times and smooth interactions.',
            highlights: ['Core Web Vitals', 'Bundle Optimization', 'Rendering Patterns', 'Profiling']
        },
        curriculum: [
            {
                module: 'Performance Metrics',
                topics: ['Core Web Vitals (LCP, FID, CLS)', 'Time to Interactive', 'First Contentful Paint', 'Lighthouse Scoring', 'User-centric Metrics', 'Real User Monitoring (RUM)']
            },
            {
                module: 'Asset Optimization',
                topics: ['Image Formats (WebP, AVIF)', 'Responsive Images', 'Font Loading Strategies', 'Video Optimization', 'Compression (Gzip/Brotli)', 'CDN Usage']
            },
            {
                module: 'Code Optimization',
                topics: ['Code Splitting', 'Tree Shaking', 'Lazy Loading Components', 'Critical CSS', 'JavaScript Execution Optimization', 'Memory Leaks']
            },
            {
                module: 'Rendering & Network',
                topics: ['SSR vs CSR vs SSG', 'Hydration Strategies', 'HTTP/2 & HTTP/3', 'Caching Policies', 'Prefetching & Preloading', 'Service Workers']
            }
        ],
        liveProjects: [
            {
                name: 'E-Commerce Speed Audit',
                description: 'Optimize a slow e-commerce site to achieve a 90+ Lighthouse score.',
                tech: ['Lighthouse', 'Webpack Bundle Analyzer', 'React', 'Next.js']
            },
            {
                name: 'Media Gallery Optimization',
                description: 'Build a high-performance image gallery with virtualization and lazy loading.',
                tech: ['Intersection Observer', 'Virtual List', 'Image CDN']
            }
        ],
        prerequisites: ['Strong React/JS knowledge', 'Understanding of browser rendering', 'Experience with build tools'],
        outcomes: ['Audit and improve site speed', 'Master Core Web Vitals', 'Optimize build configurations', 'Implement advanced caching'],
        tools: ['Chrome Performance Tab', 'Lighthouse', 'WebPageTest', 'Bundle Analyzer'],
        certification: 'Web Performance Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    // --- ADDITIONAL MOBILE APP DEVELOPMENT PROGRAMS ---

    'android-core-kotlin-internship': {
        id: 'android-core-kotlin-internship',
        title: 'Android Core (Kotlin) Internship',
        category: 'Mobile App Development',
        duration: '4 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'Android Kotlin Internship | Kiaan Technology',
        metaDescription: 'Master Android development with Kotlin. Build native apps with Jetpack Compose, Coroutines, and MVVM architecture.',
        keywords: 'android internship, kotlin internship, mobile app development',
        hero: {
            tagline: 'Build Modern Android Apps',
            description: 'Learn to build native Android applications using Kotlin and Jetpack Compose. Master modern Android development practices.',
            highlights: ['Jetpack Compose', 'Kotlin Coroutines', 'MVVM Architecture', 'Play Store']
        },
        curriculum: [
            {
                module: 'Kotlin Fundamentals',
                topics: ['Kotlin Syntax', 'Null Safety', 'Extension Functions', 'Coroutines', 'Flow', 'Collections']
            },
            {
                module: 'Modern Android UI',
                topics: ['Jetpack Compose Basics', 'State Management', 'Layouts & Modifiers', 'Material Design 3', 'Navigation Compose', 'Animations']
            },
            {
                module: 'Architecture & Data',
                topics: ['MVVM Pattern', 'Dependency Injection (Hilt)', 'Room Database', 'Retrofit for Networking', 'Repository Pattern', 'WorkManager']
            },
            {
                module: 'Advanced Features',
                topics: ['Background Services', 'Notifications', 'CameraX', 'Location Services', 'Testing (JUnit/Espresso)', 'App Publishing']
            }
        ],
        liveProjects: [
            {
                name: 'Music Player App',
                description: 'Build a music player with background playback and notification controls.',
                tech: ['Kotlin', 'ExoPlayer', 'Service', 'Room']
            },
            {
                name: 'News Reader',
                description: 'Create a news app with offline caching and search functionality.',
                tech: ['Jetpack Compose', 'Retrofit', 'Hilt', 'Room']
            }
        ],
        prerequisites: ['Java or basic Kotlin knowledge', 'Understanding of OOP', 'Android Studio installed'],
        outcomes: ['Build native Android apps', 'Master Jetpack Compose', 'Implement MVVM architecture', 'Publish apps to Play Store'],
        tools: ['Android Studio', 'Kotlin Playground', 'Postman', 'Git'],
        certification: 'Android Development Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'ios-development-swift-internship': {
        id: 'ios-development-swift-internship',
        title: 'iOS Development (Swift) Internship',
        category: 'Mobile App Development',
        duration: '4 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'iOS Swift Internship | Kiaan Technology',
        metaDescription: 'Learn iOS app development with Swift and SwiftUI. Build apps for iPhone and iPad with modern Apple technologies.',
        keywords: 'ios internship, swift internship, iphone app development',
        hero: {
            tagline: 'Build Apps for Apple Ecosystem',
            description: 'Master Swift and SwiftUI to create stunning applications for iOS. Learn Apple design principles and ecosystem tools.',
            highlights: ['Swift Mastery', 'SwiftUI', 'iOS Frameworks', 'App Store']
        },
        curriculum: [
            {
                module: 'Swift Programming',
                topics: ['Swift Basics', 'Optionals', 'Closures', 'Protocols & Delegates', 'Error Handling', 'Generics']
            },
            {
                module: 'SwiftUI & Interface',
                topics: ['SwiftUI Views', 'State & Binding', 'NavigationStack', 'Layout Systems', 'Charts & Graphics', 'Gestures']
            },
            {
                module: 'Data & Networking',
                topics: ['Core Data / SwiftData', 'URLSession', 'Codable', 'Concurrency (Async/Await)', 'MVVM in SwiftUI', 'CloudKit']
            },
            {
                module: 'Device Integration',
                topics: ['Camera & Photos', 'Core Location', 'Push Notifications', 'WidgetKit', 'App Clips', 'TestFlight Distribution']
            }
        ],
        liveProjects: [
            {
                name: 'Travel Companion App',
                description: 'Build a travel app with maps, location tracking, and photo journaling.',
                tech: ['SwiftUI', 'MapKit', 'Core Data', 'Core Location']
            },
            {
                name: 'Crypto Portfolio Tracker',
                description: 'Create a real-time crypto tracker with charts and alerts.',
                tech: ['Swift', 'Swift Charts', 'WebSocket', 'Background Tasks']
            }
        ],
        prerequisites: ['Mac computer (required)', 'Basic programming concepts', 'Interest in Apple ecosystem'],
        outcomes: ['Build native iOS apps', 'Master Swift & SwiftUI', 'Use Core Data & Networking', 'Publish to App Store'],
        tools: ['Xcode', 'Simulator', 'Instruments', 'Git'],
        certification: 'iOS Development Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'ai-powered-mobile-app-internship': {
        id: 'ai-powered-mobile-app-internship',
        title: 'AI-Powered Mobile App Internship',
        category: 'Mobile App Development',
        duration: '5 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'AI Mobile App Internship | Kiaan Technology',
        metaDescription: 'Build smart mobile apps with on-device AI. Integrate TensorFlow Lite, Core ML, and cloud AI APIs into mobile apps.',
        keywords: 'ai mobile app internship, ml on mobile, tensorflow lite',
        hero: {
            tagline: 'Intelligence on the Go',
            description: 'Learn to integrate Artificial Intelligence into mobile applications. Master on-device ML and cloud AI services for smarter apps.',
            highlights: ['On-Device ML', 'Cloud AI APIs', 'Smart Features', 'Computer Vision']
        },
        curriculum: [
            {
                module: 'Mobile AI Basics',
                topics: ['AI in Mobile', 'On-Device vs Cloud Inference', 'TensorFlow Lite Overview', 'Core ML Overview', 'Use Cases', 'performance Considerations']
            },
            {
                module: 'On-Device ML',
                topics: ['TFLite Implementation', 'Core ML Models', 'Image Classification', 'Object Detection', 'Audio Processing', 'Text Recognition']
            },
            {
                module: 'Cloud AI Integration',
                topics: ['Firebase ML', 'Google Cloud Vision API', 'AWS Rekognition', 'OpenAI API for Mobile', 'Speech-to-Text', 'Chat Interfaces']
            },
            {
                module: 'Full App Integration',
                topics: ['Model Optimization', 'Real-time Inference', 'Camera Integration', 'AR Features', 'User Experience for AI', 'Privacy & Security']
            }
        ],
        liveProjects: [
            {
                name: 'Plant Disease Detector',
                description: 'Build an app that identifies plant diseases from camera photos using on-device ML.',
                tech: ['Flutter/React Native', 'TFLite', 'Camera API', 'Offline Model']
            },
            {
                name: 'Voice Assistant App',
                description: 'Create a voice-controlled app with natural language understanding.',
                tech: ['Speech API', 'OpenAI API', 'Text-to-Speech', 'Mobile UI']
            }
        ],
        prerequisites: ['Strong mobile development skills (Flutter/RN/Native)', 'Basic ML understanding', 'Python knowledge (bonus)'],
        outcomes: ['Integrate ML models in apps', 'Build AI-powered features', 'Optimize models for mobile', 'Create smart user experiences'],
        tools: ['TensorFlow Lite', 'Core ML Tools', 'Firebase ML', 'VS Code/Xcode'],
        certification: 'AI Mobile App Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'mobile-ui-ux-specialist-internship': {
        id: 'mobile-ui-ux-specialist-internship',
        title: 'Mobile UI/UX Specialist Internship',
        category: 'Mobile App Development',
        duration: '3 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'Mobile UI/UX Internship | Kiaan Technology',
        metaDescription: 'Specialize in mobile app design. Master touch interactions, mobile patterns, and platform-specific guidelines (HIG/Material).',
        keywords: 'mobile ui ux internship, app design internship, mobile design',
        hero: {
            tagline: 'Design for Small Screens',
            description: 'Master the art of mobile app design. Learn platform guidelines, touch interactions, and create seamless mobile experiences.',
            highlights: ['Mobile Patterns', 'Interaction Design', 'Material & HIG', 'Prototyping']
        },
        curriculum: [
            {
                module: 'Mobile Design Principles',
                topics: ['Touch Targets', 'Thumb Zone', 'Navigation Patterns', 'Gestures & Haptics', 'Screen Densities', 'Responsive Layouts']
            },
            {
                module: 'Platform Guidelines',
                topics: ['Material Design 3 (Android)', 'Human Interface Guidelines (iOS)', 'Cross-Platform consistency', 'System Components', 'Typography & Color', 'Icons & Assets']
            },
            {
                module: 'Prototyping & Animation',
                topics: ['Interactive Prototypes', 'Smart Animate', 'Micro-interactions', 'Page Transitions', 'Loading States', 'Onboarding Flows']
            },
            {
                module: 'Design for Development',
                topics: ['Handover Process', 'Asset Export', 'Design Tokens', 'Dark Mode Design', 'Accessibility', 'Usability Testing on Device']
            }
        ],
        liveProjects: [
            {
                name: 'Fintech App Redesign',
                description: 'Redesign a complex banking app for better usability and modern aesthetics.',
                tech: ['Figma', 'Prototyping', 'Design System', 'User Testing']
            },
            {
                name: 'Health & Fitness App',
                description: 'Design a fitness tracking app with gamification elements and complex charts.',
                tech: ['Figma', 'UI Design', 'Interaction Design', 'Dark Mode']
            }
        ],
        prerequisites: ['Basic UI/UX knowledge', 'Familiarity with Figma', 'Interest in mobile apps'],
        outcomes: ['Design native-feeling mobile apps', 'Master Material & HIG', 'Create interactive prototypes', 'Prepare designs for developers'],
        tools: ['Figma', 'Figma Mirror', 'Material Design Kit', 'iOS UI Kit'],
        certification: 'Mobile UI/UX Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'firebase-mobile-integration-internship': {
        id: 'firebase-mobile-integration-internship',
        title: 'Firebase Mobile Integration Internship',
        category: 'Mobile App Development',
        duration: '3 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'Firebase Integration Internship | Kiaan Technology',
        metaDescription: 'Master Firebase for mobile apps. Learn Authentication, Firestore, Cloud Functions, and Analytics integration.',
        keywords: 'firebase internship, mobile backend, serverless mobile',
        hero: {
            tagline: 'Serverless Mobile Backend',
            description: 'Learn to build powerful mobile backends with Firebase. Master real-time databases, authentication, and cloud functions.',
            highlights: ['Firestore', 'Authentication', 'Cloud Functions', 'Analytics']
        },
        curriculum: [
            {
                module: 'Firebase Essentials',
                topics: ['Firebase Console', 'Project Setup', 'Authentication (Social, Phone)', 'Firestore Database Design', 'Real-time Database', 'Security Rules']
            },
            {
                module: 'App Services',
                topics: ['Cloud Storage', 'Cloud Functions', 'Hosting', 'App Check', 'Remote Config', 'Dynamic Links']
            },
            {
                module: 'Quality & Growth',
                topics: ['Crashlytics', 'Performance Monitoring', 'Google Analytics for Firebase', 'A/B Testing', 'Cloud Messaging (FCM)', 'In-App Messaging']
            },
            {
                module: 'Advanced Integration',
                topics: ['Extension Integration', 'Third-party APIs via Functions', 'Data Migration', 'Offline Persistence', 'Testing Emulator', 'Production Deployment']
            }
        ],
        liveProjects: [
            {
                name: 'Real-time Chat Application',
                description: 'Build a chat app with image sharing, online status, and push notifications.',
                tech: ['Firebase Auth', 'Firestore', 'Storage', 'FCM']
            },
            {
                name: 'Social Feed App',
                description: 'Create a social feed with likes, comments, and infinitely scrolling content.',
                tech: ['Firestore', 'Cloud Functions', 'Algolia Search', 'Analytics']
            }
        ],
        prerequisites: ['Mobile development basics (Flutter/RN)', 'JavaScript knowledge', 'Understanding of databases'],
        outcomes: ['Build scalable serverless backends', 'Implement real-time features', 'Secure app data', 'Monitor app performance'],
        tools: ['Firebase Console', 'VS Code', 'Postman', 'Firebase CLI'],
        certification: 'Firebase Integration Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    // --- ADDITIONAL AI-POWERED DEVELOPMENT PROGRAMS ---

    'ai-business-automation-internship': {
        id: 'ai-business-automation-internship',
        title: 'AI Business Automation Internship',
        category: 'AI-Powered Development',
        duration: '3 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'AI Automation Internship | Kiaan Technology',
        metaDescription: 'Learn to automate business processes using AI agents, Zapier/Make, and Python scripts. Build intelligent workflows.',
        keywords: 'ai automation internship, business process automation, ai agents',
        hero: {
            tagline: 'Automate Everything with AI',
            description: 'Master the art of business automation. innovative workflows using AI agents, no-code tools, and custom scripts to boost productivity.',
            highlights: ['AI Agents', 'Workflow Automation', 'No-Code Tools', 'Python Scripting']
        },
        curriculum: [
            {
                module: 'Automation Fundamentals',
                topics: ['Process Mapping', 'API Basics', 'Webhooks', 'Zapier & Make (Integromat)', 'Error Handling', 'JSON Data Structures']
            },
            {
                module: 'AI Agent Architectures',
                topics: ['AutoGPT Concepts', 'LangChain Agents', 'Tool Use', 'Memory & Context', 'Planning Capabilities', 'Autonomous Loops']
            },
            {
                module: 'Building Workflows',
                topics: ['Email Automation', 'CRM Integration', 'Social Media Auto-posting', 'Data Extraction', 'Report Generation', 'Slack/Discord Bots']
            },
            {
                module: 'Advanced Scripting',
                topics: ['Python Automation Scripts', 'Headless Browser (Selenium/Playwright)', 'Scheduling (Cron)', 'Cloud Functions', 'Error Monitoring']
            }
        ],
        liveProjects: [
            {
                name: 'Sales Outreach Bot',
                description: 'Build an automated system that finds leads, scrapes data, and drafts personalized emails.',
                tech: ['Python', 'LinkedIn API', 'OpenAI', 'Gmail API']
            },
            {
                name: 'Content Repurposing Workflow',
                description: 'Create a workflow that turns a YouTube video into a blog post, tweets, and newsletter.',
                tech: ['Make.com', 'Whisper API', 'GPT-4', 'Notion API']
            }
        ],
        prerequisites: ['Basic Python knowledge', 'Understanding of APIs', 'Logical thinking'],
        outcomes: ['Build autonomous agents', 'Automate complex workflows', 'Integrate multiple SaaS tools', 'Save 100+ hours of manual work'],
        tools: ['Make.com', 'Zapier', 'Python', 'Postman', 'OpenAI API'],
        certification: 'AI Automation Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'generative-ai-implementation-internship': {
        id: 'generative-ai-implementation-internship',
        title: 'Generative AI Implementation Internship',
        category: 'AI-Powered Development',
        duration: '4 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'Generative AI Internship | Kiaan Technology',
        metaDescription: 'Master Generative AI technologies. Work with Stable Diffusion, Midjourney API, and LLMs for creative applications.',
        keywords: 'generative ai internship, stable diffusion, llm applications',
        hero: {
            tagline: 'Create with Code',
            description: 'Dive deep into Generative AI. innovative applications using Image Generation models, Text-to-Speech, and Video synthesis tools.',
            highlights: ['Image Generation', 'Voice Synthesis', 'Video AI', 'Creative Coding']
        },
        curriculum: [
            {
                module: 'GenAI Landscape',
                topics: ['Diffusion Models', 'Transformer Architecture', 'GANs Overview', 'Multimodal Models', 'Prompt Engineering for Art', 'Ethics & Copyright']
            },
            {
                module: 'Image & Video Generation',
                topics: ['Stable Diffusion API', 'ControlNet', 'Midjourney Integration', 'RunwayML', 'Video Generation APIs', 'Image Inpainting']
            },
            {
                module: 'Audio & Speech',
                topics: ['Text-to-Speech (ElevenLabs)', 'Speech-to-Text (Whisper)', 'Music Generation', 'Voice Cloning', 'Audio Processing', 'Real-time Audio']
            },
            {
                module: 'Building GenAI Apps',
                topics: ['Gradio & Streamlit', 'API Wrapper Development', 'Queue Management', 'GPU Optimization', 'Cost Management', 'User Interfaces for AI']
            }
        ],
        liveProjects: [
            {
                name: 'AI Avatar Generator',
                description: 'Build a SaaS that generates professional headshots from selfies.',
                tech: ['Stable Diffusion', 'Dreambooth', 'Python', 'React']
            },
            {
                name: 'Podcast Summarizer & Dubber',
                description: 'Create an app that translates and dubs podcasts into different languages.',
                tech: ['Whisper', 'GPT-4', 'ElevenLabs', 'FFmpeg']
            }
        ],
        prerequisites: ['Python proficiency', 'Basic ML knowledge', 'Creativity'],
        outcomes: ['Build creative AI tools', 'Master diffusion models', 'Work with audio AI', 'Deploy GenAI applications'],
        tools: ['HuggingFace', 'Stable Diffusion', 'ElevenLabs', 'Gradio'],
        certification: 'Generative AI Developer Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'ai-enhanced-product-design-internship': {
        id: 'ai-enhanced-product-design-internship',
        title: 'AI-Enhanced Product Design Internship',
        category: 'AI-Powered Development',
        duration: '3 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'AI Product Design Internship | Kiaan Technology',
        metaDescription: 'Revolutionize product design with AI. Learn to use AI tools for wireframing, prototyping, and user research integration.',
        keywords: 'ai design internship, product design, ux ai resources',
        hero: {
            tagline: 'Design Smarter, Faster',
            description: 'Learn how AI is transforming product design. Use AI tools to accelerate prototyping, generate assets, and analyze user feedback.',
            highlights: ['AI Design Tools', 'Rapid Prototyping', 'User Research', 'Data-Driven Design']
        },
        curriculum: [
            {
                module: 'AI in Design Workflow',
                topics: ['AI for Ideation', 'Automated Wireframing', 'Color Palette Generation', 'Font Pairing AI', 'Copywriting for UI', 'Accessibility Scanning']
            },
            {
                module: 'Asset Generation',
                topics: ['Midjourney for UI Inspiration', 'Icon Generation', 'Stock Photo Replacement', '3D Asset Creation', 'Vector Generation', 'Texture Synthesis']
            },
            {
                module: 'User Research & Data',
                topics: ['Synthetic User Testing', 'Sentiment Analysis', 'Session Recording Analysis', 'Persona Generation', 'Journey Mapping with AI', 'Data Visualization']
            },
            {
                module: 'Future of Interfaces',
                topics: ['Conversational UI', 'Gesture Control', 'Adaptive Interfaces', 'Personalization Algorithms', 'Ethical Design', 'AI Handoff']
            }
        ],
        liveProjects: [
            {
                name: 'Adaptive Dashboard',
                description: 'Design a dashboard that rearranges itself based on user behavior analysis.',
                tech: ['Figma', 'Amplitude', 'AI Algorithms', 'React']
            },
            {
                name: 'AI Design System',
                description: 'Create a design system where components are generated and documented by AI.',
                tech: ['Storybook', 'GPT-4', 'Figma API', 'Tokens']
            }
        ],
        prerequisites: ['UI/UX Design basics', 'Figma knowledge', 'Open-mindedness'],
        outcomes: ['Accelerate design workflow', 'Use AI for asset creation', 'Implement data-driven design', 'Portfolio of AI-enhanced designs'],
        tools: ['Figma', 'Midjourney', 'Uizard', 'Galileo AI', 'ChatGPT'],
        certification: 'AI Product Design Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'openai-langchain-specialist-internship': {
        id: 'openai-langchain-specialist-internship',
        title: 'OpenAI & LangChain Specialist Internship',
        category: 'AI-Powered Development',
        duration: '4 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'LangChain Specialist Internship | Kiaan Technology',
        metaDescription: 'Become a LangChain expert. Master chains, agents, memory, and semantic search to build complex LLM applications.',
        keywords: 'langchain internship, openai internship, llm developer',
        hero: {
            tagline: 'Architect LLM Applications',
            description: 'Go beyond basic API calls. Master the LangChain framework to build complex, stateful, and agentic LLM applications.',
            highlights: ['Advanced LangChain', 'Custom Agents', 'Semantic Search', 'Production LLMs']
        },
        curriculum: [
            {
                module: 'LangChain Deep Dive',
                topics: ['LCEL (LangChain Expression Language)', 'Custom Chains', 'Output Parsers', 'Callbacks & Tracing', 'Model I/O', 'Caching']
            },
            {
                module: 'RAG Architectures',
                topics: ['Advanced Retrieval Strategies', 'Hybrid Search', 'Re-ranking', 'Parent Document Retriever', 'Self-Querying Retrievers', 'Knowledge Graphs']
            },
            {
                module: 'Agents & Tools',
                topics: ['ReAct Pattern', 'OpenAI Functions Agent', 'Plan-and-Execute Agents', 'Custom Tools Definition', 'Human-in-the-loop', 'Multi-Agent Systems']
            },
            {
                module: 'Production Engineering',
                topics: ['Evaluation (LangSmith)', 'Testing LLMs', 'Prompt Management', 'Rate Limiting', 'Streaming Architectures', 'Cost Optimization']
            }
        ],
        liveProjects: [
            {
                name: 'Legal Document Assistant',
                description: 'Build an agent capable of analyzing complex legal contracts and answering queries.',
                tech: ['LangChain', 'Pinecone', 'GPT-4', 'Unstructured.io']
            },
            {
                name: 'Autonomous Research Agent',
                description: 'Create an agent that browses the web, gathers information, and writes reports.',
                tech: ['LangChain', 'SerpApi', 'Puppeteer', 'Streamlit']
            }
        ],
        prerequisites: ['Strong Python/JS skills', 'Basic LLM knowledge', 'Backend experience'],
        outcomes: ['Master LangChain framework', 'Build complex agents', 'Implement production RAG', 'Expertise in LLM ops'],
        tools: ['LangChain', 'LangSmith', 'Pinecone', 'OpenAI', 'Python'],
        certification: 'LLM Application Architect Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'ai-software-engineering-internship': {
        id: 'ai-software-engineering-internship',
        title: 'AI Software Engineering Internship',
        category: 'AI-Powered Development',
        duration: '5 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'AI Software Engineer Internship | Kiaan Technology',
        metaDescription: 'Merge software engineering with AI. Build scalable AI infrastructure, optimize model serving, and manage AI lifecycles.',
        keywords: 'ai engineer internship, software engineering, ml infrastructure',
        hero: {
            tagline: 'Engineering for AI',
            description: 'Bridge the gap between data science and software engineering. Build robust infrastructure and scalable systems for AI applications.',
            highlights: ['AI Infrastructure', 'Scalable Systems', 'Model Serving', 'High Performance']
        },
        curriculum: [
            {
                module: 'Software Architecture for AI',
                topics: ['Microservices Pattern', 'Event-Driven Architecture', 'Queue Systems (Kafka/RabbitMQ)', 'Caching for AI', 'Database Selection', 'API Gateway']
            },
            {
                module: 'Model Serving',
                topics: ['TorchServe / TF Serving', 'Ray Serve', 'Triton Inference Server', 'Batch vs  Inference', 'Latency Optimization', 'Edge Computing']
            },
            {
                module: 'Data Engineering Basics',
                topics: ['ETL Pipelines', 'Data Warehousing', 'Feature Stores', 'Data Validation', 'Apache Airflow', 'Data Versioning (DVC)']
            },
            {
                module: 'DevOps for AI',
                topics: ['Containerization (Docker)', 'Orchestration (Kubernetes)', 'GPU Resource Management', 'Monitoring AI Systems', 'Alerting', 'Security']
            }
        ],
        liveProjects: [
            {
                name: 'High-Scale Inference API',
                description: 'Build a load-balanced API capable of serving millions of AI predictions per day.',
                tech: ['FastAPI', 'Kubernetes', 'Redis', 'Ray']
            },
            {
                name: 'Real-time Video Processing Pipeline',
                description: 'Create a pipeline for processing live video streams with AI models.',
                tech: ['Kafka', 'OpenCV', 'Python', 'WebRTC']
            }
        ],
        prerequisites: ['Strong coding skills', 'System design knowledge', 'Linux familiarity'],
        outcomes: ['Architect AI systems', 'Deploy scalable models', 'Manage data pipelines', 'Master MLOps tools'],
        tools: ['Docker', 'Kubernetes', 'Kafka', 'FastAPI', 'AWS'],
        certification: 'AI Software Engineering Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'automated-testing-with-ai-internship': {
        id: 'automated-testing-with-ai-internship',
        title: 'Automated Testing with AI Internship',
        category: 'AI-Powered Development',
        duration: '3 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'AI Testing Internship | Kiaan Technology',
        metaDescription: 'Revolutionize QA with AI. Learn to use AI for generating test cases, visual regression testing, and self-healing tests.',
        keywords: 'ai testing internship, automated testing, qa automation',
        hero: {
            tagline: 'Next-Gen Quality Assurance',
            description: 'Transform software testing with AI. Generate test cases automatically, implement self-healing scripts, and perform visual AI testing.',
            highlights: ['AI Test Generation', 'Visual AI Testing', 'Self-Healing Tests', 'QA Automation']
        },
        curriculum: [
            {
                module: 'Test Automation Basics',
                topics: ['Testing Pyramid', 'Unit vs Integration vs E2E', 'Selenium/Cypress', 'Page Object Model', 'CI Integration', 'Reporting']
            },
            {
                module: 'AI in Testing',
                topics: ['Generative AI for Test Cases', 'Self-Healing Selectors', 'Visual Regression (Applitools)', 'AI-driven Exploratory Testing', 'Test Data Generation', 'Log Analysis']
            },
            {
                module: 'Tools & Frameworks',
                topics: ['CodiumAI', 'Testim.io', 'Mabl', 'GitHub Copilot for Tests', 'Playwright + AI', 'Performance Testing with AI']
            },
            {
                module: 'Quality Engineering',
                topics: ['Continuous Testing', 'Defect Prediction', 'Root Cause Analysis', 'Quality Metrics', 'Shift-Left Testing', 'Reliability Engineering']
            }
        ],
        liveProjects: [
            {
                name: 'Self-Healing Test Suite',
                description: 'Build a robust E2E test suite that adapts to UI changes automatically.',
                tech: ['Playwright', 'AI Plugins', 'GitHub Actions', 'Reporting']
            },
            {
                name: 'Automated Bug Hunter',
                description: 'Create a bot that crawls the app and reports simple bugs and visual issues.',
                tech: ['Python', 'Selenium', 'OpenCV', 'Jira API']
            }
        ],
        prerequisites: ['Basic programming', 'QA concepts', 'Attention to detail'],
        outcomes: ['Implement AI testing', 'Reduce maintenance time', 'Catch bugs faster', 'Master modern QA tools'],
        tools: ['Cypress', 'Applitools', 'GitHub Copilot', 'Jira'],
        certification: 'AI QA Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'ai-data-infrastructure-internship': {
        id: 'ai-data-infrastructure-internship',
        title: 'AI Data Infrastructure Internship',
        category: 'AI-Powered Development',
        duration: '5 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'AI Data Infrastructure Internship | Kiaan Technology',
        metaDescription: 'Build the backbone of AI. Master vector databases, data lakes, feature stores, and high-performance data pipelines.',
        keywords: 'data infrastructure internship, vector database, data engineering',
        hero: {
            tagline: 'The Foundation of AI',
            description: 'AI needs data. Learn to architect and manage the specialized data infrastructure required for modern AI and ML workloads.',
            highlights: ['Vector Databases', 'Data Pipelines', 'Feature Stores', 'Big Data']
        },
        curriculum: [
            {
                module: 'Modern Data Stack',
                topics: ['Data Lakes vs Warehouses', 'Snowflake/Databricks', 'dbt (Data Build Tool)', 'Orchestration', 'Data Governance', 'Cost Management']
            },
            {
                module: 'Vector Databases',
                topics: ['Embeddings', 'Pinecone', 'Weaviate', 'Milvus', 'Indexing Strategies', 'Similarity Search Algorithms']
            },
            {
                module: 'Real-time Data',
                topics: ['Stream Processing', 'Apache Kafka', 'Flink', 'Spark Streaming', 'Change Data Capture (CDC)', 'Low-latency Pipelines']
            },
            {
                module: 'Feature Engineering Ops',
                topics: ['Feast Feature Store', 'Online vs Offline Store', 'Point-in-time Correctness', 'Data Quality Checks', 'Schema Evolution', 'Data Lineage']
            }
        ],
        liveProjects: [
            {
                name: 'RAG Knowledge Graph',
                description: 'Build a scalable knowledge base using vector DB and graph database integration.',
                tech: ['Neo4j', 'Pinecone', 'Python', 'LangChain']
            },
            {
                name: 'Real-time Fraud Detection Feeds',
                description: 'Ingest and process transaction data in milliseconds for ML inference.',
                tech: ['Kafka', 'Spark', 'Feast', 'Redis']
            }
        ],
        prerequisites: ['Strong SQL/Python', 'Database knowledge', 'Cloud basics'],
        outcomes: ['Architect data platforms', 'Manage vector stores', 'Build streaming pipelines', 'Support AI at scale'],
        tools: ['Pinecone', 'Kafka', 'dbt', 'Snowflake', 'AWS'],
        certification: 'AI Data Engineer Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'prompt-engineering-for-saas-internship': {
        id: 'prompt-engineering-for-saas-internship',
        title: 'Prompt Engineering for SaaS Internship',
        category: 'AI-Powered Development',
        duration: '3 Months',
        format: 'On-site',
        level: 'Beginner to Intermediate',
        metaTitle: 'Prompt Engineering Internship | Kiaan Technology',
        metaDescription: 'Master the art of prompting. Learn to design, optimize, and manage prompts for SaaS applications. No deep coding required.',
        keywords: 'prompt engineering internship, ai prompting, llm optimization',
        hero: {
            tagline: 'Speak AI Fluently',
            description: 'Unlock the full potential of LLMs. Learn scientific techniques for prompt design, evaluation, and optimization in production apps.',
            highlights: ['Advanced Prompting', 'Chain of Thought', 'Evaluation', 'Prompt Management']
        },
        curriculum: [
            {
                module: 'Prompting Fundamentals',
                topics: ['Zero-shot vs Few-shot', 'Role Prompting', 'Instruction Tuning', 'Parameters (Temp, Top-P)', 'Token Limits', 'Models Comparison']
            },
            {
                module: 'Advanced Techniques',
                topics: ['Chain of Thought (CoT)', 'Tree of Thoughts', 'ReAct', 'Self-Consistency', 'Generated Knowledge', 'Prompt Chaining']
            },
            {
                module: 'Prompt Engineering for Devs',
                topics: ['Structured Output (JSON)', 'Function Calling Prompts', 'System Messages', 'Managing Context', 'Handling Hallucinations', 'Security (Injection)']
            },
            {
                module: 'Ops & Evaluation',
                topics: ['Prompt Versioning', 'A/B Testing Prompts', 'Automated Evaluation', 'Dataset Creation', 'Fine-tuning Basics', 'Cost Estimation']
            }
        ],
        liveProjects: [
            {
                name: 'Vertical SaaS Copywriter',
                description: 'Design a system of prompts to generate high-quality marketing copy for a specific industry.',
                tech: ['OpenAI Playground', 'PromptLayer', 'Excel', 'Python']
            },
            {
                name: 'Educational Tutor Bot',
                description: 'Engineer prompts for a Socratic tutor that guides students without giving answers.',
                tech: ['Chat Interface', 'System Prompts', 'Evaluation Framework']
            }
        ],
        prerequisites: ['Strong English skills', 'Logical thinking', 'Basic technical understanding'],
        outcomes: ['Design production prompts', 'Evaluate LLM outputs', 'Optimize AI costs', 'Improve AI reliability'],
        tools: ['OpenAI Playground', 'Anthropic Console', 'PromptLayer', 'LangSmith'],
        certification: 'Professional Prompt Engineer Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    // --- ADDITIONAL DATA SCIENCE & ML PROGRAMS ---

    'deep-learning-neural-networks-internship': {
        id: 'deep-learning-neural-networks-internship',
        title: 'Deep Learning & Neural Networks Internship',
        category: 'Data Science & Machine Learning',
        duration: '5 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'Deep Learning Internship | Kiaan Technology',
        metaDescription: 'Master Deep Learning with PyTorch and TensorFlow. Build Neural Networks, CNNs, RNNs, and Transformers.',
        keywords: 'deep learning internship, neural networks, pytorch internship',
        hero: {
            tagline: 'Unlock the Power of Neurons',
            description: 'Dive into the depths of Artificial Intelligence. Build and train complex neural networks for vision, text, and generative tasks.',
            highlights: ['Neural Networks', 'PyTorch & TensorFlow', 'Computer Vision', 'Transformers']
        },
        curriculum: [
            {
                module: 'Neural Network Fundamentals',
                topics: ['Perceptrons', 'Backpropagation', 'Activation Functions', 'Optimizers (Adam, SGD)', 'Regularization', 'Loss Functions']
            },
            {
                module: 'Computer Vision Architectures',
                topics: ['CNNs (Convolutional Neural Networks)', 'ResNet', 'YOLO/SSD for Object Detection', 'Segmentation (U-Net)', 'Transfer Learning', 'Image Augmentation']
            },
            {
                module: 'Sequence Models',
                topics: ['RNNs & LSTMs', 'GRU', 'Attention Mechanism', 'Transformers (BERT/GPT concepts)', 'Time Series Forecasting', 'Seq2Seq']
            },
            {
                module: 'Advanced Training',
                topics: ['Hyperparameter Tuning', 'Distributed Training', 'Mixed Precision Training', 'Model Interpretability', 'Deployment', 'Research Paper Implementation']
            }
        ],
        liveProjects: [
            {
                name: 'Brain Tumor Detection',
                description: 'Build a CNN to detect tumors in MRI scans with high accuracy.',
                tech: ['PyTorch', 'Medical Imaging', 'CNN', 'FastAPI']
            },
            {
                name: 'Neural Style Transfer',
                description: 'Create an app that applies the artistic style of one image to another.',
                tech: ['TensorFlow', 'VGG19', 'Gradio', 'Python']
            }
        ],
        prerequisites: ['Strong Python', 'Calculus/Linear Algebra basics', 'ML fundamentals'],
        outcomes: ['Build deep neural networks', 'Read research papers', 'Train models on GPUs', 'Deploy DL models'],
        tools: ['PyTorch', 'TensorFlow', 'Jupyter', 'Google Colab/Kaggle', 'Weights & Biases'],
        certification: 'Deep Learning Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'nlp-natural-language-processing-internship': {
        id: 'nlp-natural-language-processing-internship',
        title: 'NLP (Natural Language Processing) Internship',
        category: 'Data Science & Machine Learning',
        duration: '4 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'NLP Internship | Kiaan Technology',
        metaDescription: 'Master Natural Language Processing. Work with Transformers, Hugging Face, BERT, and LLMs for text analysis.',
        keywords: 'nlp internship, text mining, computational linguistics',
        hero: {
            tagline: 'Teach Machines to Read',
            description: 'Master the art of processing human language. Build chatbots, sentiment analyzers, and summarization tools using SOTA models.',
            highlights: ['Hugging Face', 'Transformers', 'Text Analysis', 'Chatbots']
        },
        curriculum: [
            {
                module: 'Text Processing',
                topics: ['Tokenization', 'Stemming/Lemmatization', 'Stop Words', 'Regex', 'N-grams', 'TF-IDF']
            },
            {
                module: 'Traditional NLP',
                topics: ['Naive Bayes Classifier', 'Word Embeddings (Word2Vec, GloVe)', 'POS Tagging', 'Named Entity Recognition (NER)', 'Topic Modeling', 'Sentiment Analysis']
            },
            {
                module: 'Modern NLP with Transformers',
                topics: ['Attention is All You Need', 'BERT Architecture', 'Fine-tuning Transformers', 'Hugging Face Library', 'Hugging Face Datasets', 'Zero-shot Classification']
            },
            {
                module: 'LLM & Applications',
                topics: ['Prompting vs Fine-tuning', 'LoRA (Low-Rank Adaptation)', 'Evaluation Metrics (ROUGE/BLEU)', 'Vector Search for NLP', 'Building Chat Applications', 'Ethics in NLP']
            }
        ],
        liveProjects: [
            {
                name: 'Financial Sentiment Analyzer',
                description: 'Analyze financial news to predict market sentiment using BERT.',
                tech: ['Hugging Face', 'BloombergGPT (Concepts)', 'Python', 'Streamlit']
            },
            {
                name: 'Customer Support Auto-Responder',
                description: 'Build a smart email responder that creates drafts based on customer queries.',
                tech: ['OpenAI API', 'LangChain', 'Context Analysis', 'Flask']
            }
        ],
        prerequisites: ['Python proficiency', 'Basic ML knowledge', 'Interest in linguistics'],
        outcomes: ['Build NLP pipelines', 'Fine-tune Transformer models', 'Analyze text at scale', 'Create language-based apps'],
        tools: ['Hugging Face', 'Spacy', 'NLTK', 'PyTorch', 'Python'],
        certification: 'NLP Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'computer-vision-image-processing-internship': {
        id: 'computer-vision-image-processing-internship',
        title: 'Computer Vision & Image Processing Internship',
        category: 'Data Science & Machine Learning',
        duration: '4 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'Computer Vision Internship | Kiaan Technology',
        metaDescription: 'Learn Computer Vision with OpenCV and Deep Learning. Build real-time object detection, face recognition, and tracking systems.',
        keywords: 'computer vision internship, opencv internship, image processing',
        hero: {
            tagline: 'Give Sight to Machines',
            description: 'Teach computers to see and interpret the world. Build real-time systems for face recognition, object tracking, and automated inspection.',
            highlights: ['OpenCV', 'Object Detection', 'Face Recognition', 'Real-time Video']
        },
        curriculum: [
            {
                module: 'Image Processing Basics',
                topics: ['OpenCV Fundamentals', 'Color Spaces', 'Filters & Convolutions', 'Edge Detection', 'Histograms', 'Morphological Operations']
            },
            {
                module: 'Feature Detection',
                topics: ['Corner Detection', 'SIFT/SURF', 'Feature Matching', 'Homography', 'Image Stitching (Panorama)', 'Optical Flow']
            },
            {
                module: 'Deep Learning for Vision',
                topics: ['CNN Architectures', 'YOLO (You Only Look Once)', 'Semantic Segmentation', 'Instance Segmentation', 'Pose Estimation', 'Facial Landmark Detection']
            },
            {
                module: 'Video & Real-time',
                topics: ['Video Capture', 'Object Tracking algorithms', 'Background Subtraction', 'MediaPipe Framework', 'Optimizing for FPS', 'Edge Deployment']
            }
        ],
        liveProjects: [
            {
                name: 'Smart Parking System',
                description: 'Build a system that counts available parking spots in a video feed.',
                tech: ['OpenCV', 'YOLO', 'Python', 'Flask']
            },
            {
                name: 'Virtual Try-On',
                description: 'Create an AR application that lets users try on glasses or masks.',
                tech: ['MediaPipe', 'OpenCV', 'Python', 'AR Tech']
            }
        ],
        prerequisites: ['Python/C++ proficiency', 'Linear Algebra', 'Basic ML'],
        outcomes: ['Process images & video', 'Train object detectors', 'Build AR filters', 'Deploy vision systems'],
        tools: ['OpenCV', 'MediaPipe', 'YOLO', 'PyTorch', 'Roboflow'],
        certification: 'Computer Vision Engineer Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'data-analytics-visualization-internship': {
        id: 'data-analytics-visualization-internship',
        title: 'Data Analytics & Visualization Internship',
        category: 'Data Science & Machine Learning',
        duration: '3 Months',
        format: 'On-site',
        level: 'Beginner',
        metaTitle: 'Data Analytics Internship | Kiaan Technology',
        metaDescription: 'Become a Data Analyst. Master Excel, SQL, Power BI, and Python for data cleaning, analysis, and beautiful storytelling.',
        keywords: 'data analytics internship, business intelligence, tableau, power bi',
        hero: {
            tagline: 'Tell Stories with Data',
            description: 'Turn raw data into actionable insights. Master the tools needed to clean, analyze, and visualize data for business decision-making.',
            highlights: ['SQL Mastery', 'Power BI / Tableau', 'Python Analysis', 'Data Storytelling']
        },
        curriculum: [
            {
                module: 'Data Wrangling',
                topics: ['Advanced Excel', 'Data Cleaning with Python (Pandas)', 'Missing Data Handling', 'Data Transformation', 'Merge & Joins', 'Exploratory Data Analysis (EDA)']
            },
            {
                module: 'SQL for Analysts',
                topics: ['Complex Queries', 'Aggregations', 'Window Functions', 'Subqueries', 'CTEs', 'Database Design Basics']
            },
            {
                module: 'Visualization Tools',
                topics: ['Power BI Fundamentals', 'DAX', 'Tableau Basics', 'Dashboard Design Principles', 'Interactive Reports', 'Geospatial Data']
            },
            {
                module: 'Business Intelligence',
                topics: ['KPI Definitions', 'Cohort Analysis', 'Funnel Analysis', 'Retention Metrics', 'A/B Test Analysis', 'Presenting Insights']
            }
        ],
        liveProjects: [
            {
                name: 'E-Commerce Sales Dashboard',
                description: 'Create an interactive executive dashboard showing sales trends and customer segments.',
                tech: ['Power BI', 'SQL', 'Excel', 'DAX']
            },
            {
                name: 'Marketing Campaign Analysis',
                description: 'Analyze campaign performance data to recommend budget allocation.',
                tech: ['Python', 'Pandas', 'Seaborn', 'PPT']
            }
        ],
        prerequisites: ['Basic Math', 'Excel familiarity', 'Logical thinking'],
        outcomes: ['Analyze complex datasets', 'Build professional dashboards', 'Write advanced SQL', 'Drive business decisions'],
        tools: ['Power BI', 'Tableau', 'Excel', 'SQL', 'Pandas'],
        certification: 'Business Intelligence Analyst Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'predictive-modeling-saas-internship': {
        id: 'predictive-modeling-saas-internship',
        title: 'Predictive Modeling SaaS Internship',
        category: 'Data Science & Machine Learning',
        duration: '4 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'Predictive Modeling Internship | Kiaan Technology',
        metaDescription: 'Focus on Machine Learning for SaaS. Build churn prediction, CLV models, and recommendation engines.',
        keywords: 'predictive modeling internship, machine learning, saas metrics',
        hero: {
            tagline: 'Predict the Future',
            description: 'Apply Machine Learning specifically to SaaS problems. Build models to predict churn, calculate customer lifetime value, and recommend features.',
            highlights: ['Churn Prediction', 'LTV Modeling', 'Recommendations', 'Scikit-Learn']
        },
        curriculum: [
            {
                module: 'SaaS Metrics & Data',
                topics: ['MRR/ARR', 'Churn Rate', 'CAC vs LTV', 'Engagement Metrics', 'Time Series Data', 'Feature Engineering for SaaS']
            },
            {
                module: 'Classification Models',
                topics: ['Logistic Regression', 'Decision Trees', 'Random Forests', 'XGBoost/LightGBM', 'Model Evaluation (ROC-AUC)', 'Handling Imbalanced Data']
            },
            {
                module: 'Regression & Time Series',
                topics: ['Linear Regression', 'Forecasting MRR', 'ARIMA/Prophet', 'Survival Analysis', 'Customer Value Prediction', 'Seasonality']
            },
            {
                module: 'Personalization',
                topics: ['Collaborative Filtering', 'Content-based Filtering', 'Hybrid Recommenders', 'Segmentation (Clustering)', 'Next Best Action', 'Uplift Modeling']
            }
        ],
        liveProjects: [
            {
                name: 'Churn Prediction Engine',
                description: 'Build a model to flag high-risk customers before they cancel.',
                tech: ['XGBoost', 'Python', 'Flask', 'Typescript']
            },
            {
                name: 'Upgrade Recommender',
                description: 'Create a system that suggests the perfect plan upgrade for users.',
                tech: ['Scikit-Learn', 'Pandas', 'API', 'Docker']
            }
        ],
        prerequisites: ['Python skills', 'Stats basics', 'ML fundamentals'],
        outcomes: ['Solve SaaS business problems', 'Deploy predictive models', 'Analyze customer behavior', 'Master XGBoost/sklearn'],
        tools: ['Scikit-Learn', 'XGBoost', 'Prophet', 'Jupyter', 'Python'],
        certification: 'SaaS ML Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'big-data-engineering-internship': {
        id: 'big-data-engineering-internship',
        title: 'Big Data Engineering Internship',
        category: 'Data Science & Machine Learning',
        duration: '5 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'Big Data Internship | Kiaan Technology',
        metaDescription: 'Master Big Data technologies. Learn Hadoop, Spark, NoSQL databases, and build scalable data pipelines.',
        keywords: 'big data internship, data engineering, spark, hadoop',
        hero: {
            tagline: 'Handle Petabytes of Data',
            description: 'Learn the technologies behind massive scale data processing. Master the Hadoop ecosystem, Apache Spark, and distributed computing.',
            highlights: ['Apache Spark', 'Hadoop', 'NoSQL', 'Distributed Systems']
        },
        curriculum: [
            {
                module: 'Big Data Fundamentals',
                topics: ['Distributed Computing', 'Hadoop Ecosystem (HDFS, YARN)', 'MapReduce Concept', 'CAP Theorem', 'File Formats (Parquet/Avro)', 'Cloud Storage']
            },
            {
                module: 'Apache Spark',
                topics: ['Spark RDDs', 'Spark SQL', 'DataFrames', 'Spark Streaming', 'Optimization', 'Databricks Environment']
            },
            {
                module: 'NoSQL Databases',
                topics: ['MongoDB (Document)', 'Cassandra (Wide Column)', 'Redis (Key-Value)', 'Neo4j (Graph)', 'Database Selection', 'Scaling Strategies']
            },
            {
                module: 'Pipeline Orchestration',
                topics: ['Apache Airflow', 'DAG Design', 'Error Handling', 'Dependency Management', 'Monitoring', 'Backfilling']
            }
        ],
        liveProjects: [
            {
                name: 'Log Analysis Platform',
                description: 'Process terabytes of server logs to find anomalies in real-time.',
                tech: ['Spark Streaming', 'Kafka', 'Elasticsearch', 'Kibana']
            },
            {
                name: 'Data Lake Construction',
                description: 'Build a data lake architecture for a startup from scratch.',
                tech: ['AWS S3', 'Glue', 'Athena', 'Spark']
            }
        ],
        prerequisites: ['Strong coding (Python/Java/Scala)', 'SQL', 'Linux'],
        outcomes: ['Process big data', 'Optimize Spark jobs', 'Manage NoSQL DBs', 'Architect data lakes'],
        tools: ['Apache Spark', 'Hadoop', 'MongoDB', 'Airflow', 'AWS'],
        certification: 'Big Data Engineer Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'ai-model-deployment-mlops-internship': {
        id: 'ai-model-deployment-mlops-internship',
        title: 'AI Model Deployment (MLOps) Internship',
        category: 'Data Science & Machine Learning',
        duration: '4 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'MLOps Internship | Kiaan Technology',
        metaDescription: 'Take models to production. Learn Docker, Kubernetes, CI/CD for ML, and model monitoring.',
        keywords: 'mlops internship, model deployment, ml engineering',
        hero: {
            tagline: 'Productionize AI',
            description: 'Stop training models in notebooks. Learn the engineering discipline required to deploy, monitor, and maintain ML models in production.',
            highlights: ['Model Serving', 'CI/CD for ML', 'Monitoring', 'Docker & K8s']
        },
        curriculum: [
            {
                module: 'Packaging ML Models',
                topics: ['Pickle/Joblib', 'ONNX Format', 'Creating APIs (FastAPI/Flask)', 'Dockerizing Models', 'Environment Management', 'Dependencies']
            },
            {
                module: 'Orchestration & Serving',
                topics: ['Kubernetes Basics', 'Kubeflow', 'Serverless Inference', 'A/B Testing Strategies', 'Canary Deployments', 'Scalability']
            },
            {
                module: 'ML Pipelines',
                topics: ['Reproducibility', 'Experiment Tracking (MLflow)', 'Data Versioning', 'Automated Retraining', 'Continuous Training (CT)', 'Feature Stores']
            },
            {
                module: 'Monitoring & Maintenance',
                topics: ['Drift Detection (Data/Concept)', 'Performance Monitoring', 'Fairness & Bias Checks', 'Debugging Production Models', 'Cost Optimization', 'Governance']
            }
        ],
        liveProjects: [
            {
                name: 'End-to-End MLOps Platform',
                description: 'Build a platform where users upload data and get a deployed API endpoint.',
                tech: ['MLflow', 'FastAPI', 'Docker', 'React']
            },
            {
                name: 'Model Drift Monitor',
                description: 'Create a dashboard that alerts when model performance degrades.',
                tech: ['Prometheus', 'Grafana', 'Python', 'Evidently AI']
            }
        ],
        prerequisites: ['Python', 'Docker basics', 'ML knowledge'],
        outcomes: ['Deploy models to production', 'Build CI/CD for ML', 'Monitor AI capability', 'Master MLOps tools'],
        tools: ['Docker', 'Kubernetes', 'MLflow', 'FastAPI', 'AWS'],
        certification: 'MLOps Engineer Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    // --- ADDITIONAL SEO & DIGITAL GROWTH PROGRAMS ---

    'ai-driven-seo-automation-internship': {
        id: 'ai-driven-seo-automation-internship',
        title: 'AI-Driven SEO Automation Internship',
        category: 'SEO & Digital Growth',
        duration: '3 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'AI SEO Internship | Kiaan Technology',
        metaDescription: 'Revolutionize SEO with AI. Learn to automate keyword research, content generation, and technical audits using Python and AI tools.',
        keywords: 'ai seo internship, seo automation, programmatic seo',
        hero: {
            tagline: 'Rank #1 with AI',
            description: 'Learn to dominate search engines using AI and automation. Build programmatic SEO pages, automate audits, and optimize content at scale.',
            highlights: ['Programmatic SEO', 'AI Content', 'Technical Audits', 'Keyword Automation']
        },
        curriculum: [
            {
                module: 'Modern SEO Fundamentals',
                topics: ['Search Algorithms', 'Semantic Search', 'E-E-A-T Principles', 'Keyword Intent', 'On-Page vs Off-Page', 'Core Web Vitals']
            },
            {
                module: 'AI Content Strategy',
                topics: ['AI Writing Workflow', 'Fact-Checking AI', 'Content Clustering', 'Internal Linking Automation', 'Optimizing for Featured Snippets', 'Voice Search']
            },
            {
                module: 'Programmatic SEO',
                topics: ['Headless CMS', 'Template Design', 'Dataset Sourcing', 'Dynamic Page Generation', 'Indexing Strategies', 'Scale Management']
            },
            {
                module: 'Technical Automation',
                topics: ['Python for SEO', 'Log File Analysis', 'Automated Reporting', 'Schema Markup Generation', 'Sitemap Management', 'Broken Link Checkers']
            }
        ],
        liveProjects: [
            {
                name: 'Programmatic Directory',
                description: 'Build a directory site with 1000+ pages generated from a database.',
                tech: ['Next.js', 'Airtable', 'OpenAI API', 'Vercel']
            },
            {
                name: 'SEO Audit Tool',
                description: 'Create a Python script that crawls a site and identifies common SEO issues.',
                tech: ['Python', 'BeautifulSoup', 'Pandas', 'Streamlit']
            }
        ],
        prerequisites: ['Basic marketing knowledge', 'HTML/CSS basics', 'Interest in data'],
        outcomes: ['Build programmatic SEO sites', 'Automate content workflows', 'Audit sites with code', 'Master AI SEO tools'],
        tools: ['Semrush', 'Ahrefs', 'Screaming Frog', 'Python', 'ChatGPT'],
        certification: 'AI SEO Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'digital-marketing-strategy-internship': {
        id: 'digital-marketing-strategy-internship',
        title: 'Digital Marketing Strategy Internship',
        category: 'SEO & Digital Growth',
        duration: '3 Months',
        format: 'On-site',
        level: 'Beginner',
        metaTitle: 'Digital Marketing Internship | Kiaan Technology',
        metaDescription: 'Master the full digital marketing stack. Learn PPC, Social Media, Email Marketing, and Analytics for SaaS growth.',
        keywords: 'digital marketing internship, saas marketing, growth marketing',
        hero: {
            tagline: 'Drive Growth & Revenue',
            description: 'Learn the strategies that power modern businesses. Master PPC, Social Media, Email Marketing, and Analytics to drive real growth.',
            highlights: ['PPC Ads', 'Social Media', 'Email Automation', 'Analytics']
        },
        curriculum: [
            {
                module: 'Integrated Marketing',
                topics: ['Customer Personas', 'Value Proposition', 'Marketing Funnels', 'Channel Selection', 'Brand Storytelling', 'Competitor Analysis']
            },
            {
                module: 'Paid Acquisition',
                topics: ['Google Ads (Search/Display)', 'Facebook/Instagram Ads', 'LinkedIn Ads for B2B', 'Retargeting Strategies', 'Budget Management', 'Ad Copywriting']
            },
            {
                module: 'Organic Channels',
                topics: ['Social Media Strategy', 'Content Calendar', 'Community Management', 'Influencer Marketing', 'Viral Hoolks', 'LinkedIn Personal Branding']
            },
            {
                module: 'Conversion & Retention',
                topics: ['Landing Page Optimization', 'Email Marketing Flows', 'Lead Nurturing', 'CRM Management', 'A/B Testing', 'Customer Loyalty']
            }
        ],
        liveProjects: [
            {
                name: 'Ad Campaign Manager',
                description: 'Plan and execute a mock ad campaign with a $5000 virtual budget.',
                tech: ['Google Ads Editor', 'Facebook Ads Manager', 'Canva', 'Excel']
            },
            {
                name: 'Email Nurture Sequence',
                description: 'Design a 5-email onboarding sequence for a new SaaS user.',
                tech: ['Mailchimp/ConvertKit', 'Copywriting', 'Design', 'Automation']
            }
        ],
        prerequisites: ['Strong communication', 'Social media savvy', 'Creativity'],
        outcomes: ['Run profitable ad campaigns', 'Manage social communities', 'Build email engines', 'Analyze marketing data'],
        tools: ['Google Ads', 'Meta Business Suite', 'HubSpot', 'Canva', 'GA4'],
        certification: 'Digital Marketing Strategist Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'content-growth-engineering-internship': {
        id: 'content-growth-engineering-internship',
        title: 'Content Growth Engineering Internship',
        category: 'SEO & Digital Growth',
        duration: '3 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'Content Engineering Internship | Kiaan Technology',
        metaDescription: 'Merge content with engineering. Build interactive content, calculators, and tools that drive traffic and leads.',
        keywords: 'content engineering internship, interactive content, growth engineering',
        hero: {
            tagline: 'Content that Converts',
            description: 'Move beyond static blog posts. Build interactive calculators, quizzes, and tools that attract traffic and generate high-quality leads.',
            highlights: ['Interactive Tools', 'Viral Content', 'Lead Magnets', 'Engineering for Growth']
        },
        curriculum: [
            {
                module: 'Engineering as Marketing',
                topics: ['Side Project Marketing', 'Micro-tools', 'Calculators & Quizzes', 'Widgets & Plugins', 'Open Source Marketing', 'Utility Marketing']
            },
            {
                module: 'Building Interactive Content',
                topics: ['React Components for Content', 'Data Visualization', 'Dynamic Forms', 'PDF Generators', 'Gamified Elements', 'Embeddable Widgets']
            },
            {
                module: 'Distribution & Virality',
                topics: ['Product Hunt Launches', 'Hacker News / Reddit Strategy', 'Social Sharing Mechanisms', 'Viral Loops', 'Referral Systems', 'Embed Strategies']
            },
            {
                module: 'Lead Capture Optimization',
                topics: ['Gated Content', 'Progressive Profiling', 'Exit Intent', 'Sign-up Flows', 'Data Enrichment', 'API Integrations']
            }
        ],
        liveProjects: [
            {
                name: 'ROI Calculator',
                description: 'Build a dynamic ROI calculator for a SaaS product that generates a PDF report.',
                tech: ['React', 'Chart.js', 'jsPDF', 'Lead Capture']
            },
            {
                name: 'Quiz App for Leads',
                description: 'Create a "What type is your business?" quiz that segments users.',
                tech: ['Typeform Clone', 'React', 'Firebase', 'Email API']
            }
        ],
        prerequisites: ['Basic React/JS skills', 'Interest in marketing', 'UX awareness'],
        outcomes: ['Build marketing assets', 'Launch viral tools', 'Generate leads with code', 'Master growth loops'],
        tools: ['React', 'Next.js', 'Chart.js', 'Product Hunt', 'Figma'],
        certification: 'Growth Engineer Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'technical-seo-site-audit-internship': {
        id: 'technical-seo-site-audit-internship',
        title: 'Technical SEO & Site Audit Internship',
        category: 'SEO & Digital Growth',
        duration: '3 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'Technical SEO Internship | Kiaan Technology',
        metaDescription: 'Master the technical side of SEO. Learn crawling, indexing, structured data, core web vitals, and site architecture.',
        keywords: 'technical seo internship, site audit, web migration',
        hero: {
            tagline: 'Optimize the Engine',
            description: 'Dive deep into the technical infrastructure of websites. Ensure search engines can crawl, index, and understand content perfectly.',
            highlights: ['Crawling & Indexing', 'Site Architecture', 'Schema Markup', 'Core Web Vitals']
        },
        curriculum: [
            {
                module: 'Crawlability & Indexability',
                topics: ['Robots.txt', 'XML Sitemaps', 'Canonical Tags', 'Hreflang', 'Status Codes (3xx, 4xx, 5xx)', 'Rendering (JS SEO)']
            },
            {
                module: 'Site Architecture',
                topics: ['URL Structure', 'Internal Linking Logic', 'Taxonomy Design', 'Breadcrumbs', 'Pagination', 'Faceted Navigation']
            },
            {
                module: 'Structure Data & Rich Results',
                topics: ['JSON-LD', 'Schema Types (Product, Article, FAQ)', 'Knowledge Graph', 'Google Merchant Center', 'Validator Tools', 'Review Snippets']
            },
            {
                module: 'Migrations & Audits',
                topics: ['Site Migrations', 'Domain Changes', 'SSL/HTTPS', 'International SEO', 'Log File Analysis', 'Audit Checklists']
            }
        ],
        liveProjects: [
            {
                name: 'Full Site Audit',
                description: 'Perform a comprehensive technical audit of a large e-commerce site.',
                tech: ['Screaming Frog', 'Spreadsheets', 'Looker Studio', 'Audit Report']
            },
            {
                name: 'Migration Plan',
                description: 'Create a detailed plan for migrating a site from WordPress to Shopify without losing rank.',
                tech: ['Redirect Mapping', 'Risk Analysis', 'Staging Tests', 'Monitor']
            }
        ],
        prerequisites: ['HTML/Web basics', 'Analytical mindset', 'Attention to detail'],
        outcomes: ['Perform deep audits', 'Fix crawling issues', 'Implement schema', 'Manage complex migrations'],
        tools: ['Screaming Frog', 'Google Search Console', 'Ahrefs', 'Schema.org'],
        certification: 'Technical SEO Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'growth-hacking-for-saas-internship': {
        id: 'growth-hacking-for-saas-internship',
        title: 'Growth Hacking for SaaS Internship',
        category: 'SEO & Digital Growth',
        duration: '3 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'Growth Hacking Internship | Kiaan Technology',
        metaDescription: 'Learn rapid experimentation for growth. Master viral loops, cold outreach, LinkedIn automation, and unconventional marketing.',
        keywords: 'growth hacking internship, saas growth, startup marketing',
        hero: {
            tagline: 'Growth at Any Cost',
            description: 'Learn the unconventional tactics used by startups to grow fast. Master scraping, automation, viral loops, and data-driven experiments.',
            highlights: ['Rapid Experimentation', 'Scraping & Automation', 'Viral Mechanics', 'Cold Outreach']
        },
        curriculum: [
            {
                module: 'Growth Mindset',
                topics: ['North Star Metric', 'ICE Framework', 'High-Tempo Testing', 'Pirate Metrics (AARRR)', 'Product-Led Growth (PLG)', 'Viral Coefficient']
            },
            {
                module: 'Outbound Automation',
                topics: ['Lead Scraping', 'LinkedIn Automation', 'Cold Email Infrastructure', 'Deliverability', 'Personalization at Scale', 'Multi-channel Outreach']
            },
            {
                module: 'Viral Mechanics',
                topics: ['Referral Programs', 'Waitlists', 'Gamification', 'Network Effects', 'Social Proof', 'Friction reduction']
            },
            {
                module: 'Data & Analytics',
                topics: ['Tracking Plans', 'Event-based Analytics', 'Cohort Analysis', 'Attribution Models', 'Customer Journey Mapping', 'Retention Hacking']
            }
        ],
        liveProjects: [
            {
                name: 'Waitlist Launch',
                description: 'Design and launch a viral waitlist for a new product feature.',
                tech: ['Viral Loops', 'Landing Page', 'Email Sequence', 'Social Sharing']
            },
            {
                name: 'Automated Sales Pipeline',
                description: 'Build a system that scrapes leads and enriches them for sales.',
                tech: ['PhantomBuster', 'Hunter.io', 'HubSpot', 'Zapier']
            }
        ],
        prerequisites: ['Entrepreneurial spirit', 'Tech-savviness', 'Hustle mindset'],
        outcomes: ['Design viral loops', 'Automate lead gen', 'Run growth sprints', 'Analyze growth data'],
        tools: ['PhantomBuster', 'lemlist', 'Mixpanel', 'Viral Loops'],
        certification: 'Growth Hacker Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    // --- ADDITIONAL DEVOPS & CLOUD PROGRAMS ---

    'devops-engineering-docker-k8s-internship': {
        id: 'devops-engineering-docker-k8s-internship',
        title: 'DevOps Engineering (Docker/K8s) Internship',
        category: 'DevOps & Cloud',
        duration: '5 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'DevOps Internship | Kiaan Technology',
        metaDescription: 'Become a DevOps Engineer. Master Docker, Kubernetes, Jenkins, Terraform, and cloud infrastructure management.',
        keywords: 'devops internship, kubernetes internship, docker internship',
        hero: {
            tagline: 'Automate Infrastructure',
            description: 'Master the tools that power modern software. Learn Containerization, Orchestration, IaC, and CI/CD pipelines.',
            highlights: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD']
        },
        curriculum: [
            {
                module: 'Containerization',
                topics: ['Docker Basics', 'Dockerfiles', 'Image Optimization', 'Docker Compose', 'Multi-stage Builds', 'Container Security']
            },
            {
                module: 'Orchestration with K8s',
                topics: ['Kubernetes Architecture', 'Pods & Deployments', 'Services & Ingress', 'ConfigMaps & Secrets', 'Helm Charts', 'Cluster Administration']
            },
            {
                module: 'Infrastructure as Code',
                topics: ['Terraform Basics', 'State Management', 'Modules', 'Cloud Providers (AWS/GCP)', 'Ansible', 'Immutable Infrastructure']
            },
            {
                module: 'Monitoring & Logging',
                topics: ['Prometheus & Grafana', 'ELK Stack', 'Distributed Tracing', 'Alert Manager', 'SRE Principles', 'Incident Response']
            }
        ],
        liveProjects: [
            {
                name: 'High-Availability Cluster',
                description: 'Provision a production-ready Kubernetes cluster using Terraform.',
                tech: ['Terraform', 'EKS/GKE', 'Kubernetes', 'Helm']
            },
            {
                name: 'GitOps Pipeline',
                description: 'Implement a GitOps workflow using ArgoCD for automated deployments.',
                tech: ['ArgoCD', 'Git', 'Kubernetes', 'GitHub Actions']
            }
        ],
        prerequisites: ['Linux mastery', 'Networking basics', 'Coding skills'],
        outcomes: ['Manage K8s clusters', 'Write clean Terraform', 'Build robust CI/CD', 'Monitor production systems'],
        tools: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Ansible'],
        certification: 'DevOps Engineer Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'ci-cd-pipeline-automation-internship': {
        id: 'ci-cd-pipeline-automation-internship',
        title: 'CI/CD Pipeline Automation Internship',
        category: 'DevOps & Cloud',
        duration: '3 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'CI/CD Internship | Kiaan Technology',
        metaDescription: 'Focus on CI/CD. Learn to build automated build, test, and deployment pipelines using GitHub Actions, Jenkins, and GitLab CI.',
        keywords: 'ci/cd internship, jenkins internship, automation engineer',
        hero: {
            tagline: 'Ship Code Faster',
            description: 'Streamline the software delivery process. Learn to design and implement automated pipelines for continuous integration and deployment.',
            highlights: ['GitHub Actions', 'Jenkins', 'Automated Testing', 'Release Strategies']
        },
        curriculum: [
            {
                module: 'CI/CD Concepts',
                topics: ['Continuous Integration', 'Continuous Delivery vs Deployment', 'Pipeline Architecture', 'Artifact Management', 'Version Control Strategy', 'Branching Models']
            },
            {
                module: 'Pipeline Tools',
                topics: ['GitHub Actions Workflow', 'Jenkins Declarative Pipelines', 'GitLab CI/CD', 'CircleCI', 'Runners & Agents', 'Environment Variables']
            },
            {
                module: 'Automated Quality Gates',
                topics: ['Unit & Integration Tests in Pipeline', 'Linting & Formatting', 'Static Code Analysis (SonarQube)', 'Security Scanning (SAST)', 'Docker Image Scanning', 'Code Coverage']
            },
            {
                module: 'Deployment Strategies',
                topics: ['Blue-Green Deployment', 'Canary Releases', 'Rolling Updates', 'Feature Flags', 'Rollbacks', 'Database Migrations in CD']
            }
        ],
        liveProjects: [
            {
                name: 'Ultimate CI Pipeline',
                description: 'Build a pipeline with linting, testing, security checks, and artifact publishing.',
                tech: ['GitHub Actions', 'SonarQube', 'Docker Hub', 'Jest']
            },
            {
                name: 'Multi-Environment CD',
                description: 'Create a deployment pipeline that promotes code from Dev -> Staging -> Prod.',
                tech: ['Jenkins', 'AWS', 'Shell Scripting', 'Slack Notifications']
            }
        ],
        prerequisites: ['Git basics', 'Basic scripting', 'Understanding of SDLC'],
        outcomes: ['Build reliable pipelines', 'Automate testing', 'Implement zero-downtime deploys', 'Secure software supply chain'],
        tools: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'SonarQube'],
        certification: 'CI/CD Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Performance-based stipend'
    },

    'cloud-native-saas-infrastructure-internship': {
        id: 'cloud-native-saas-infrastructure-internship',
        title: 'Cloud-Native SaaS Infrastructure Internship',
        category: 'DevOps & Cloud',
        duration: '4 Months',
        format: 'On-site',
        level: 'Intermediate',
        metaTitle: 'Cloud Native Internship | Kiaan Technology',
        metaDescription: 'Build infrastructure for SaaS. Learn Serverless, Microservices, Multi-tenancy, and Cloud cost management.',
        keywords: 'cloud native internship, saas infrastructure, serverless architecture',
        hero: {
            tagline: 'Architect for the Cloud',
            description: 'Learn to build scalable infrastructure specifically for SaaS applications. Master serverless, multi-tenancy, and cloud-native patterns.',
            highlights: ['Serverless', 'Microservices', 'Multi-tenancy', 'Cloud Patterns']
        },
        curriculum: [
            {
                module: 'Cloud Native Pillars',
                topics: ['Microservices', 'Containers', 'DevOps', 'CI/CD', 'The 12-Factor App', 'Serverless Mindset']
            },
            {
                module: 'SaaS Architecture',
                topics: ['Database per Tenant', 'Shared Database', 'Schema per Tenant', 'Cognito/Auth0 for Multi-tenancy', 'API Gateway Strategies', 'Rate Limiting']
            },
            {
                module: 'Serverless Compute',
                topics: ['AWS Lambda / Azure Functions', 'Event-Driven Architecture', 'Step Functions', 'SQS/SNS Messaging', 'Serverless Databases (Aurora)', 'Cold Starts']
            },
            {
                module: 'Operations & FinOps',
                topics: ['Observability in Microservices', 'Distributed Tracing', 'Cloud Cost Management', 'Reserved Instances', 'Auto-scaling Policies', 'Disaster Recovery']
            }
        ],
        liveProjects: [
            {
                name: 'Multi-Tenant SaaS Boilerplate',
                description: 'Build the infrastructure for a SaaS with isolated tenant data and authentication.',
                tech: ['AWS CDK', 'Cognito', 'DynamoDB', 'Lambda']
            },
            {
                name: 'Event-Driven Order System',
                description: 'Create a serverless order processing system using events and queues.',
                tech: ['EventBridge', 'SQS', 'Lambda', 'Node.js']
            }
        ],
        prerequisites: ['Cloud basics (AWS/Azure)', 'Node.js/Python', 'Database knowledge'],
        outcomes: ['Architect cloud-native apps', 'Implement multi-tenancy', 'Optimize cloud costs', 'Build serverless systems'],
        tools: ['AWS CDK', 'Serverless Framework', 'Postman', 'AWS Console'],
        certification: 'Cloud Native Architect Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },

    'cybersecurity-devsecops-internship': {
        id: 'cybersecurity-devsecops-internship',
        title: 'Cybersecurity & DevSecOps Internship',
        category: 'DevOps & Cloud',
        duration: '4 Months',
        format: 'On-site',
        level: 'Advanced',
        metaTitle: 'DevSecOps Internship | Kiaan Technology',
        metaDescription: 'Secure the cloud. Learn ethical hacking, vulnerability scanning, secure coding, and integrating security into DevOps pipelines.',
        keywords: 'cybersecurity internship, devsecops internship, cloud security',
        hero: {
            tagline: 'Secure by Design',
            description: 'Integrate security into the development lifecycle. Learn to automate security checks, harden infrastructure, and protect applications.',
            highlights: ['Automated Security', 'Vulnerability Scanning', 'Secure Coding', 'Cloud Hardening']
        },
        curriculum: [
            {
                module: 'Security Fundamentals',
                topics: ['OWASP Top 10', 'CIA Triad', 'Authentication vs Authorization', 'Encryption (At Rest/In Transit)', 'Network Security', 'Identity Management']
            },
            {
                module: 'DevSecOps Tools',
                topics: ['SAST (Static Analysis)', 'DAST (Dynamic Analysis)', 'SCA (Software Composition Analysis)', 'Secret Management (Vault)', 'Container Security', 'Compliance as Code']
            },
            {
                module: 'Cloud Security',
                topics: ['IAM Policies', 'Security Groups', 'WAF (Web Application Firewall)', 'DDoS Protection', 'CloudTrail/Auditing', 'Zero Trust Architecture']
            },
            {
                module: 'Offensive Security Basics',
                topics: ['Penetration Testing Concepts', 'Kali Linux Basics', 'Metasploit Overview', 'Social Engineering', 'Reporting Vulnerabilities', 'Patch Management']
            }
        ],
        liveProjects: [
            {
                name: 'Secure Pipeline Implementation',
                description: 'Add automated security scanning to a CI/CD pipeline and block insecure builds.',
                tech: ['GitHub Actions', 'Trivy', 'SonarQube', 'OWASP ZAP']
            },
            {
                name: 'Vulnerable App Patching',
                description: 'Identify and fix vulnerabilities in a deliberately insecure web application.',
                tech: ['Juice Shop', 'Burp Suite', 'Python', 'Code Fixes']
            }
        ],
        prerequisites: ['Linux proficiency', 'Networking knowledge', 'Coding basics'],
        outcomes: ['Secure CI/CD pipelines', 'Audit cloud infrastructure', 'Fix common vulnerabilities', 'Implement DevSecOps culture'],
        tools: ['OWASP ZAP', 'Burp Suite', 'Snyk', 'Trivy', 'HashiCorp Vault'],
        certification: 'DevSecOps Specialist Certificate',
        isPaid: false,
        stipendInfo: 'Unpaid internship with certificate'
    },
};

export const getProgramBySlug = (slug: string | undefined): InternshipProgram | undefined => {
    if (!slug) return undefined;
    return internshipProgramsData[slug];
};
