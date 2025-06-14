export const projectsData = [
    {
        id: 1,
        name: 'Vedrix – Academic Plagiarism Detection Platform 🧠',
        description: "Vedrix is a Turnitin-style academic content verification platform that processes PDF and Word files using NLP techniques and LLMs for deep content analysis. It leverages the Google Search API for real-time similarity detection, helping to identify potential plagiarism. Built with a secure Django backend, the platform features Two-Factor Authentication (2FA), Google OAuth login, and robust file parsing/tokenization workflows.",
        tools: [
            'Django', 'TypeScript', 'LLMs', 'Google Search API', 
            'PDF/Doc Parsing', 'Tokenization', 'Google OAuth', '2FA'
        ],
        code: '',
        demo: '',
        image: '/projects/vedrix.png'
    },
    {
        id: 2,
        name: 'AnveshaCode – AI-Powered Code Review SaaS',
        description: "AnveshaCode (अन्वेषा) is an intelligent, full-stack SaaS platform that automates code reviews using LLMs and autonomous agents. It analyzes entire codebases, detects issues, and recommends smart improvements. Built with Next.js 15 and TypeScript, the platform supports advanced features like JWT-based authentication, Stripe subscriptions, PDF and QR generation, dark mode, and real-time notifications. It integrates Redis caching, Azure AI, Google OAuth, and uses PostgreSQL via Prisma ORM for robust data handling.",
        tools: [
            'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'React Hook Form',
            'Zod', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'bcrypt',
            'Helmet', 'Stripe', 'Redis', 'Nodemailer', 'Resend', 'Azure AI', 'Google Auth',
            'LLMs', 'Multer', 'Morgan', 'react-markdown', '@react-pdf/renderer', 
            'qrcode.react', 'recharts', 'embla-carousel-react'
        ],
        code: '',
        demo: '',
        image: '/projects/anveshacode.png'
    },
    {
        id: 3,
        name: 'GenMode – Gen-Z Translator 🚀',
        description: "GenMode is a modern AI-powered web app that translates regular text into authentic Gen-Z lingo. Users can choose from unique personas like TikToker, Meme Lord, or BookTok Queen to tailor their translations. It features a responsive and elegant UI, secure authentication, history tracking, and seamless copy/share functionality. Powered by OpenRouter AI and Supabase, GenMode delivers fast, fun, and contextual Gen-Z translations with real-time updates.",
        tools: [
            'React 18', 'TypeScript', 'Vite', 'TailwindCSS', 'shadcn/ui', 'Lucide React',
            'React Router', 'React Query', 'Supabase', 'OpenRouter AI', 
            'ESLint', 'PostCSS', 'SWC', 'Radix UI'
        ],
        code: '',
        demo: '',
        image: '/projects/genmode.png'
    },
    {
        id: 4,
        name: 'HomePraise – Smart Real Estate Platform 🏡',
        description: "HomePraise is an AI-powered real estate SaaS platform for buying, selling, and evaluating properties. It features machine learning-based price predictions, LLM-generated property descriptions, AI-driven loan insights, and interactive property listings via Google Maps. The platform also offers tiered subscription plans with Stripe integration, and secure authentication via Google OAuth. Designed for both accuracy and user experience, it transforms how users engage with real estate platforms.",
        tools: [
            'Next.js', 'PostgreSQL', 'Google Maps API', 'Google OAuth', 
            'Stripe', 'Tailwind CSS', 'LLMs', 'Machine Learning', 'Reinforcement Learning'
        ],
        code: '',
        demo: '',
        image: '/projects/homepraise.png'
    },
    {
        id: 5,
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
        id: 6,
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
    {
        id: 7,
        name: 'Stayinit- The Easy Way to Accommodation',
        description: "This project enables users to add accommodations like hostels and hotels, with machine learning algorithms offering real-time price suggestions based on location. It includes OTP-based authentication, secure email-based password recovery, and advanced filtering options. Google Maps API integration shows property locations and nearby landmarks. Docker ensures consistent deployment and scalability, while the app achieved excellent Google Lighthouse scores.",
        tools: ['Express', 'MongoDB', 'HTML', 'CSS', 'Java-Script','Python','Node Mailer', 'Node', 'Google-Maps-API',"Machine Learning Models"],
        code: '',
        demo: '',
        image: '/projects/stayinit.png'
    },
    {
        id: 8,
        name: 'FlexDrop – Modern File & Text Sharing Platform',
        description: "FlexDrop is a modern and secure platform for sharing files and text, similar to WeTransfer. It allows users to upload files or notes and generate shareable download links. The platform includes authentication, optional file expiry, and premium features through Stripe payments. With a clean, responsive UI and scalable backend, FlexDrop ensures easy and efficient content sharing for both free and premium users.",
        tools: [
            'React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express.js',
            'MongoDB', 'PostgreSQL', 'JWT', 'NextAuth.js', 'Stripe'
        ],
        code: 'https://github.com/your-username/flexdrop',
        demo: 'https://flux-drop.vercel.app/',
        image: '/projects/flexdrop.png'
    },
    {
        id: 9,
        name: 'FinLink- Secure and Real-Time Financial Transactions',
        description: "FinLink is a financial SaaS platform that integrates multiple bank accounts, offering real-time transaction updates and secure money transfers. It features ultra-secure SSR authentication, Plaid integration for seamless bank account linking, and Dwolla for efficient fund transfers. The platform ensures an enhanced user experience with real-time updates and detailed transaction history. Built with responsive design, it is fully compatible across all devices.",
        tools: ['Next.js', 'TypeScript', 'Appwrite', 'Plaid', 'Dwolla', 'React Hook Form', 'Zod', 'TailwindCSS', 'Chart.js', 'ShadCN', 'SSR Authentication', 'MongoDB', 'Docker'],
        code: '',
        demo: '',
        image: '/projects/finlink.png'
    }
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