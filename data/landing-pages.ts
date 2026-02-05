import { LandingPage } from '@/types';

export const landingPages: LandingPage[] = [
  {
    id: 1,
    title: "Sageware - AI-Powered Business Intelligence",
    description: "Professional SaaS landing page for AI-powered analytics platform. Features real-time analytics, predictive insights, custom dashboards, and enterprise security. Includes pricing tiers, testimonials, and conversion-optimized design.",
    vercelUrl: "https://aivate-catalogue.vercel.app/landing-pages/sageware.html",
    image: "https://placehold.co/1200x800/0EA5E9/FFFFFF?text=Sageware+Analytics",
    technologies: ["HTML5", "Tailwind CSS", "Vanilla JavaScript"],
    category: "SaaS"
  },
  {
    id: 2,
    title: "E-commerce Landing - Placeholder",
    description: "E-commerce product landing page with shopping cart integration",
    vercelUrl: "https://example.com",
    image: "https://placehold.co/1200x800/99F6E4/0F172A?text=Landing+Page+2",
    technologies: ["React", "Tailwind CSS", "Stripe"],
    category: "E-commerce"
  },
  {
    id: 3,
    title: "Portfolio Landing - Placeholder",
    description: "Creative portfolio landing page for designers and developers",
    vercelUrl: "https://example.com",
    image: "https://placehold.co/1200x800/0F172A/99F6E4?text=Landing+Page+3",
    technologies: ["Next.js", "TypeScript", "Three.js"],
    category: "Portfolio"
  }
];
