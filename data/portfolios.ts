import { Portfolio } from '@/types';

export const portfolios: Portfolio[] = [
    {
        id: 1,
        title: "MindWell Health",
        subtitle: "Premium Wellness Platform",
        description: "A conversion-focused wellness landing page featuring adaptive glassmorphic navigation, high-performance testimonials marquee, and a calm, medical-grade aesthetic designed to build trust and drive patient engagement.",
        image: "https://placehold.co/800x500/8B5CF6/FFFFFF?text=MindWell+Health",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
        category: "Healthcare",
        status: 'live',
        liveUrl: "/landing-pages/mindwell",
        highlights: [
            "Glassmorphic navigation system",
            "Testimonials marquee animation",
            "Medical-grade aesthetic design"
        ]
    },
    {
        id: 2,
        title: "Seven Sided Cube",
        subtitle: "SaaS Conversion Engine",
        description: "A high-conversion SaaS landing page featuring dark glassmorphism, an interactive 3D Eternal Cube, and a professional social proof marquee that establishes credibility and drives sign-ups.",
        image: "https://placehold.co/800x500/4F46E5/FFFFFF?text=Seven+Sided+Cube",
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Lucide React", "3D CSS"],
        category: "SaaS",
        status: 'live',
        liveUrl: "/landing-pages/sevensidedcube",
        highlights: [
            "Interactive 3D CSS Cube",
            "Dark glassmorphism design",
            "Social proof marquee"
        ]
    },
    {
        id: 3,
        title: "EduLearn Platform",
        subtitle: "Ultra-Premium EdTech",
        description: "An ultra-premium EdTech experience featuring cinematic 3D animations, a sophisticated radial gradient aesthetic, and deep interactive learning modules that set a new standard for online education.",
        image: "https://placehold.co/800x500/0D9488/FFFFFF?text=EduLearn+Platform",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React", "3D Transforms"],
        category: "EdTech",
        status: 'live',
        liveUrl: "/landing-pages/edulearn",
        highlights: [
            "Cinematic 3D entrance animations",
            "Interactive course previews",
            "Radial gradient design system"
        ]
    },
    {
        id: 4,
        title: "Aivate Analytics",
        subtitle: "Real-Time Intelligence Dashboard",
        description: "A powerful real-time analytics dashboard designed for data mastery, featuring interactive charts, high-density data visualization, and an intuitive command center for performance monitoring.",
        image: "https://placehold.co/800x500/0F172A/99F6E4?text=Aivate+Analytics",
        technologies: ["Next.js", "D3.js", "Tailwind CSS", "Chart.js", "WebSockets"],
        category: "Analytics",
        status: 'in-progress',
        highlights: [
            "Real-time WebSocket data feeds",
            "Interactive D3.js visualizations",
            "Command center layout"
        ]
    },
    {
        id: 5,
        title: "LuxeStay",
        subtitle: "Boutique Hotel Experience",
        description: "A warm, editorial landing page for a luxury boutique hotel with gold accents, serif typography, amenity showcases, and testimonial quotes.",
        image: "https://placehold.co/800x500/0d0b09/D4A853?text=LuxeStay",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
        category: "Hospitality",
        status: 'live',
        liveUrl: "/landing-pages/luxestay",
        highlights: [
            "Warm gold editorial aesthetic",
            "Full-bleed hero with gradient overlay",
            "Amenities grid with corner accents"
        ]
    },
    {
        id: 6,
        title: "FitForge",
        subtitle: "High-Energy Fitness Brand",
        description: "A bold, dark-mode gym landing page with electric lime accents, stat counter section, tiered membership pricing cards, and grain texture overlay.",
        image: "https://placehold.co/800x500/0a0a0a/BFFF00?text=FitForge",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
        category: "Fitness",
        status: 'live',
        liveUrl: "/landing-pages/fitforge",
        highlights: [
            "Electric lime on black palette",
            "Stat counters with icon accents",
            "Three-tier membership cards"
        ]
    },
    {
        id: 7,
        title: "Verde Legal",
        subtitle: "Professional Legal Authority",
        description: "A clean, authoritative law firm landing page with navy and brass palette, practice area grid, case results statistics, and consultation CTA.",
        image: "https://placehold.co/800x500/0f1520/C5A55A?text=Verde+Legal",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
        category: "Legal",
        status: 'live',
        liveUrl: "/landing-pages/verdelegal",
        highlights: [
            "Navy + brass authority palette",
            "Practice area quad-grid",
            "Track record statistics section"
        ]
    },
    {
        id: 8,
        title: "NovaBites",
        subtitle: "Contemporary Dining Experience",
        description: "A warm, elegant restaurant landing page with amber tones, menu highlights with pricing, chef profile section, and reservation CTA.",
        image: "https://placehold.co/800x500/1a1a1a/F59E0B?text=NovaBites",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
        category: "Restaurant",
        status: 'live',
        liveUrl: "/landing-pages/novabites",
        highlights: [
            "Warm amber on dark palette",
            "Menu highlights with pricing",
            "Chef profile with gradient portrait"
        ]
    },
    {
        id: 9,
        title: "Aivate CRM",
        subtitle: "Sales Pipeline Dashboard",
        description: "A dark-themed CRM backoffice mockup with sidebar navigation, KPI cards, kanban pipeline preview, and real-time activity feed.",
        image: "https://placehold.co/800x500/0c0f14/99F6E4?text=CRM+Dashboard",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
        category: "Dashboard",
        status: 'live',
        liveUrl: "/landing-pages/backoffice-crm",
        highlights: [
            "Sidebar + topbar layout",
            "KPI cards with trend indicators",
            "Kanban pipeline preview"
        ]
    },
    {
        id: 10,
        title: "HelpDesk",
        subtitle: "Support Ticket Management",
        description: "A ticket-centric helpdesk dashboard with priority badges, CSAT metrics, inbox-style ticket list, and status filtering.",
        image: "https://placehold.co/800x500/0e1117/34d399?text=HelpDesk",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
        category: "Dashboard",
        status: 'live',
        liveUrl: "/landing-pages/backoffice-helpdesk",
        highlights: [
            "Priority-coded ticket list",
            "CSAT and response time metrics",
            "Inbox-style ticket management"
        ]
    },
    {
        id: 11,
        title: "Analytics Platform",
        subtitle: "Web Analytics Dashboard",
        description: "A data-dense analytics dashboard with sparkline charts, traffic source breakdowns, top pages table, and date range controls.",
        image: "https://placehold.co/800x500/090b10/22d3ee?text=Analytics",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "SVG Sparklines"],
        category: "Dashboard",
        status: 'live',
        liveUrl: "/landing-pages/backoffice-analytics",
        highlights: [
            "SVG sparkline mini-charts",
            "Traffic source progress bars",
            "Top pages with change indicators"
        ]
    },
    {
        id: 12,
        title: "PeopleOS",
        subtitle: "HR Management System",
        description: "An HR dashboard with employee directory, department breakdown, leave tracking, and role-based status badges.",
        image: "https://placehold.co/800x500/0d0f14/a78bfa?text=PeopleOS",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
        category: "Dashboard",
        status: 'live',
        liveUrl: "/landing-pages/backoffice-hr",
        highlights: [
            "Employee directory with status badges",
            "Department breakdown bars",
            "Onboarding metrics"
        ]
    },
];
