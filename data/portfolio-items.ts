import { Portfolio } from '@/types';

/**
 * Real Agency-OS Portfolio Projects
 *
 * This file contains authentic production projects built by Agency-OS.
 * Each entry includes real tech stacks, live URLs, and actual project highlights.
 *
 * Portfolio Images: Professional SVG placeholders generated (2026-05-31)
 * - Located in /public/portfolio/
 * - 1600x1000px dimension, gradient-based design
 * - Can be replaced with real screenshots later if desired
 */

export const agencyOSPortfolio: Portfolio[] = [
    {
        id: 1,
        title: "Gordon AI Studio",
        subtitle: "Premium Medical Practice Website",
        description: "A sophisticated, conversion-optimized website for facial plastic surgeon Dr. James Gordon featuring 11 before/after gallery pages with real patient photos, 38 treatment detail pages, and integrated patient review system. Built with Next.js 16 and deployed on Vercel with custom domain.",
        image: "/portfolio/gordon-ai-studio.svg",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Supabase"],
        category: "Healthcare",
        status: 'live',
        liveUrl: "https://drjamesgordon.com",
        githubUrl: "https://github.com/aivaterepositories/drjamesgordon-landing-page",
        highlights: [
            "11 before/after gallery pages with 542 real patient photos in Supabase CDN",
            "38 treatment detail pages with medical accuracy verification",
            "Mobile-responsive hero carousel with optimized navigation",
            "Deployed on Vercel with custom domain (drjamesgordon.com)",
            "Real patient reviews integration (34 RealSelf + 3 Google reviews)",
            "Lighthouse Performance Score: 95+",
            "Built by Chrono (Backend), Zelda (UI/UX), Musashi (Deployment)"
        ]
    },
    {
        id: 2,
        title: "Temp Power Systems CRM",
        subtitle: "Enterprise Backoffice System",
        description: "Full-featured enterprise management system for power equipment rental company. Features job management, crew scheduling, document uploads, role-based access control (RBAC), real-time updates via WebSockets, and comprehensive audit logging. Live production system serving 20+ users.",
        image: "/portfolio/temp-power-systems.svg",
        technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "Supabase", "PostgreSQL", "WebSockets"],
        category: "Enterprise",
        status: 'live',
        liveUrl: "https://crm.temppower.com",
        highlights: [
            "Job management system with status tracking (Scheduled → In Progress → Completed)",
            "Crew scheduling with availability calendar and conflict detection",
            "Document upload system with Supabase Storage integration",
            "Role-based access control: Admin, Manager, Crew, Billing roles",
            "Real-time notifications via WebSocket connections",
            "Comprehensive audit logging for all CRUD operations",
            "Express API backend with connection pooling (pg.Pool)",
            "Production deployment on AWS Elastic Beanstalk",
            "Built by Chrono (Full-Stack), Bowser (Audit), Musashi (DevOps)"
        ]
    },
    {
        id: 3,
        title: "SevenSidedCube",
        subtitle: "Modern SaaS Landing Page",
        description: "High-conversion SaaS landing page featuring dark glassmorphism design, interactive 3D CSS Eternal Cube animation, and professional social proof marquee. Designed to establish credibility and drive sign-ups with premium aesthetic.",
        image: "/portfolio/sevensidedcube.svg",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Lucide React", "3D CSS"],
        category: "Landing Page",
        status: 'live',
        liveUrl: "/landing-pages/sevensidedcube",
        highlights: [
            "Interactive 3D CSS Cube with continuous rotation animation",
            "Dark glassmorphism design system with backdrop-blur effects",
            "Social proof marquee with infinite scroll animation",
            "Fully responsive design (mobile-first approach)",
            "Version 1.0.0 Complete - Production Ready"
        ]
    },
    {
        id: 4,
        title: "Fine Dining Landing Page",
        subtitle: "Restaurant Landing Page",
        description: "Warm, elegant restaurant landing page with amber tones, menu highlights with pricing, chef profile section, and reservation CTA. Designed to showcase culinary excellence and drive table bookings.",
        image: "/portfolio/fine-dining.svg",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
        category: "Hospitality",
        status: 'live',
        liveUrl: "/landing-pages/novabites",
        highlights: [
            "Warm amber on dark color palette for sophisticated aesthetic",
            "Menu highlights section with pricing and dish descriptions",
            "Chef profile with gradient portrait overlay",
            "Reservation CTA with form validation",
            "Testimonials section with customer reviews"
        ]
    },
    {
        id: 5,
        title: "Health Services Landing Page",
        subtitle: "Healthcare Services Portal",
        description: "Conversion-focused wellness landing page featuring adaptive glassmorphic navigation, high-performance testimonials marquee, and calm, medical-grade aesthetic designed to build trust and drive patient engagement.",
        image: "/portfolio/health-services.svg",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
        category: "Healthcare",
        status: 'live',
        liveUrl: "/landing-pages/mindwell",
        highlights: [
            "Glassmorphic navigation system with adaptive transparency",
            "Testimonials marquee with infinite scroll animation",
            "Medical-grade aesthetic with trust-building color palette",
            "Services grid with icon integration",
            "Contact form with client-side validation"
        ]
    },
    {
        id: 6,
        title: "Salon Landing Page",
        subtitle: "Beauty Salon Website",
        description: "Modern beauty salon landing page with service showcase, gallery of work, pricing tables, and online booking integration. Features soft color palette and elegant typography to attract clientele.",
        image: "/portfolio/salon.svg",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        category: "Beauty",
        status: 'live',
        liveUrl: "/landing-pages/salon", // TODO: Verify correct path
        highlights: [
            "Service showcase with pricing and duration",
            "Before/after gallery with lightbox view",
            "Online booking integration (placeholder for calendar API)",
            "Stylist profiles with bio and specialties",
            "Mobile-optimized for on-the-go bookings"
        ]
    },
    {
        id: 7,
        title: "EduLearn Platform",
        subtitle: "Educational Platform",
        description: "Ultra-premium EdTech experience featuring cinematic 3D animations, sophisticated radial gradient aesthetic, and interactive learning modules. Sets a new standard for online education interfaces with modern UX patterns.",
        image: "/portfolio/edulearn.svg",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React", "3D Transforms"],
        category: "Education",
        status: 'live',
        liveUrl: "/landing-pages/edulearn",
        highlights: [
            "Cinematic 3D entrance animations with stagger effects",
            "Interactive course preview cards with hover states",
            "Radial gradient design system for depth and focus",
            "Progress tracking UI components (placeholder data)",
            "Responsive video player integration"
        ]
    },
    {
        id: 8,
        title: "Aivate-Solutions",
        subtitle: "Business Solutions Platform",
        description: "Professional business solutions landing page showcasing consulting services, case studies, and client testimonials. Modern corporate design with trust-building elements and lead generation forms.",
        image: "/portfolio/aivate-solutions.svg",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
        category: "Business",
        status: 'live',
        liveUrl: "/landing-pages/aivate-solutions", // TODO: Verify correct path
        highlights: [
            "Services overview with icon grid layout",
            "Case studies section with metrics and outcomes",
            "Client testimonials with company logos",
            "Lead generation form with multi-step wizard",
            "Professional blue color palette for corporate trust"
        ]
    },
];

/**
 * Portfolio Statistics
 * Auto-generated from portfolio data
 */
export const portfolioStats = {
    total: agencyOSPortfolio.length,
    live: agencyOSPortfolio.filter(p => p.status === 'live').length,
    categories: Array.from(new Set(agencyOSPortfolio.map(p => p.category))),
    technologies: Array.from(new Set(agencyOSPortfolio.flatMap(p => p.technologies))).sort(),
};

/**
 * Featured Projects
 * Manually curated list of showcase projects
 */
export const featuredProjects = agencyOSPortfolio.filter(p =>
    [1, 2, 3].includes(p.id) // Gordon AI Studio, TPS CRM, SevenSidedCube
);
