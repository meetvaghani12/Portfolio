export const projectsData = [
    {
        id: 1,
        name: 'Vedrix – Academic Plagiarism Detection Platform 🧠',
        description: "Vedrix is a Turnitin-style academic content verification platform that processes PDF and Word files using NLP techniques and LLMs for deep content analysis. It leverages the Google Search API for real-time similarity detection, helping to identify potential plagiarism. Built with a secure Django backend, the platform features Two-Factor Authentication (2FA), Google OAuth login, and robust file parsing/tokenization workflows.",
        tools: [
            'Django', 'TypeScript', 'LLMs', 'Google Search API', 
            'PDF/Doc Parsing', 'Tokenization', 'Google OAuth', '2FA'
        ],
        code: 'https://github.com/meetvaghani12/vedrix',
        demo: 'https://vedrix.vercel.app',
        image: '/projects/vedrix.png'
    },
   {
    id: 2,
    name: 'VIXILABS - AI Text-to-Video Generation Platform',
    description: "VIXILABS is a cutting-edge AI-powered platform that converts text into high-quality, professional videos in real-time. Designed for creators, educators, and marketers, it supports multiple formats like MP4, GIF, and WebM. With powerful features like secure authentication (JWT, 2FA, Google OAuth), advanced analytics, team collaboration, and responsive design, VIXILABS offers a seamless experience. Built using modern technologies and best practices, it ensures speed, security, and scalability across all devices.",
    tools: [
        'React 18', 'TypeScript', 'Vite', 'Express.js', 'Node.js',
        'PostgreSQL', 'Prisma ORM', 'Redis',
        'JWT', 'Google OAuth', '2FA', 'Helmet',
        'Tailwind CSS', 'Shadcn UI', 'Radix UI', 'Lucide React',
        'React Query', 'React Router DOM', 'React Hook Form', 'Zod',
        'Multer', 'Supertest', 'Nodemailer',
        'Recharts', 'date-fns', 'Sonner',
        'Text-to-Video Generation Model', 'Hugging Face Inference API'
    ],
    code: '',
    demo: '',
    image: '/projects/vixilabs.png'
},

    {
        id: 3,
        name: 'AnveshaCode – AI-Powered Code Review SaaS',
        description: "AnveshaCode (अन्वेषा) is an intelligent, full-stack SaaS platform that automates code reviews using LLMs and autonomous agents. It analyzes entire codebases, detects issues, and recommends smart improvements. Built with Next.js 15 and TypeScript, the platform supports advanced features like JWT-based authentication, Stripe subscriptions, PDF and QR generation, dark mode, and real-time notifications. It integrates Redis caching, Azure AI, Google OAuth, and uses PostgreSQL via Prisma ORM for robust data handling.",
        tools: [
            'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'React Hook Form',
            'Zod', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'bcrypt',
            'Helmet', 'Stripe', 'Redis', 'Nodemailer', 'Resend', 'Azure AI', 'Google Auth',
            'LLMs', 'Multer', 'Morgan', 'react-markdown', '@react-pdf/renderer', 
            'qrcode.react', 'recharts', 'embla-carousel-react'
        ],
        code: 'https://github.com/meetvaghani12/AnveshaCode',
        demo: 'https://anvesha-code.vercel.app/',
        image: '/projects/anveshacode.png'
    },
    
    {
        id: 4,
        name: 'HomePraise – Smart Real Estate Platform 🏡',
        description: "HomePraise is an AI-powered real estate SaaS platform for buying, selling, and evaluating properties. It features machine learning-based price predictions, LLM-generated property descriptions, AI-driven loan insights, and interactive property listings via Google Maps. The platform also offers tiered subscription plans with Stripe integration, and secure authentication via Google OAuth. Designed for both accuracy and user experience, it transforms how users engage with real estate platforms.",
        tools: [
            'Next.js', 'PostgreSQL', 'Google Maps API', 'Google OAuth', 
            'Stripe', 'Tailwind CSS', 'LLMs', 'Machine Learning', 'Reinforcement Learning'
        ],
        code: 'https://github.com/meetvaghani12/HomePraise',
        demo: '',
        image: '/projects/homepraise.png'
    },
    {
    id: 5,
    name: 'Diagnosely - Your AI-Powered Medical Assistant',
    description: "Diagnosely is a modern web application that enables users to analyze medical documents such as receipts, lab reports, and prescriptions through AI-powered text extraction, providing comprehensive summaries, key findings, medication analysis, and follow-up recommendations. It features an interactive AI medical chat for personalized health guidance and terminology clarification. Users benefit from secure document storage, real-time data synchronization, and a responsive dashboard, with HIPAA-compliant data handling and end-to-end encryption ensuring robust security and privacy.",
    tools: ['React.js', 'TypeScript', 'Node.js', 'Express', 'PostgraceSql', 'Tesseract.js', 'LLM Models', 'shadcn/ui', 'PDF Processing'],
    code: 'https://github.com/meetvaghani12/Diagnosely',
    demo: 'https://diagnosely.vercel.app',
    image: '/projects/diagnosely.png'
},
    
   {
        id: 6,
        name: 'GenMode – Gen-Z Translator 🚀',
        description: "GenMode is a modern AI-powered web app that translates regular text into authentic Gen-Z lingo. Users can choose from unique personas like TikToker, Meme Lord, or BookTok Queen to tailor their translations. It features a responsive and elegant UI, secure authentication, history tracking, and seamless copy/share functionality. Powered by OpenRouter AI and Supabase, GenMode delivers fast, fun, and contextual Gen-Z translations with real-time updates.",
        tools: [
            'React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'shadcn/ui', 'Lucide React',
            'React Router', 'React Query', 'Supabase', 'OpenRouter AI', 
            'ESLint', 'PostCSS', 'SWC', 'Radix UI'
        ],
        code: 'https://github.com/meetvaghani12/GenMode',
        demo: 'https://genmode.vercel.app/',
        image: '/projects/genmode.png'
    },
   

    {
        id: 7,
        name: 'fluxdrop – Modern File & Text Sharing Platform',
        description: "fluxdrop is a modern and secure platform for sharing files and text, similar to WeTransfer. It allows users to upload files or notes and generate shareable download links. The platform includes authentication, optional file expiry, and premium features through Stripe payments. With a clean, responsive UI and scalable backend, fluxdrop ensures easy and efficient content sharing for both free and premium users.",
        tools: [
            'React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express.js',
            'MongoDB', 'PostgreSQL', 'JWT', 'NextAuth.js', 'Stripe'
        ],
        code: 'https://github.com/your-username/fluxdrop',
        demo: 'https://flux-drop.vercel.app/',
        image: '/projects/flexdrop.png'
    },
    {
        id: 8,
        name: 'VaghaniGPT – Multi-Model AI Chat Application 🔮',
        description: "VaghaniGPT is a secure, full-featured AI chat platform that supports multi-model interaction with GPT-4.1, Google Gemini, and DeepSeek. It includes robust authentication mechanisms like Google OAuth and two-factor OTP-based email login. Users can chat with different models, manage full chat history, and switch between past sessions with ease. The app is built for both performance and security, ensuring a smooth and private conversational experience.",
        tools: [
            'Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma',
            'JWT', 'Email OTP', 'Google OAuth', 'OpenAI GPT-4.1', 'Google Gemini', 'DeepSeek'
        ],
        code: 'https://github.com/meetvaghani12/VaghaniGpt',
        demo: '',
        image: '/projects/vaghanigpt.png'
    },
     {
        id: 9,
        name: 'Eventopia – Real-time Event Ticketing Platform',
        description: "Eventopia is a real-time event ticketing platform that enables secure, scalable ticket sales using technologies like Next.js 14, Convex, Stripe Connect, and Clerk. It offers smart queue management, live ticket updates, automated refund processing, QR-based digital tickets, and rich analytics for organizers. Designed with a modern, mobile-first UI, it ensures smooth experiences for both attendees and organizers, with real-time interactions and accessibility baked in.",
        tools: [
            'Next.js 14', 'Convex', 'Clerk', 'Stripe Connect', 'TailwindCSS',
            'shadcn/ui', 'React', 'TypeScript', 'Stripe Webhooks', 'Vercel',
            'ESLint', 'Animated Transitions', 'Rate Limiting', 'Toast Notifications'
        ],
        code: 'https://github.com/meetvaghani12/Eventopia',
        demo: 'https://evenopia.vercel.app/',
        image: '/projects/eventopia.png'
    },
   
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },