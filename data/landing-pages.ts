import { LandingPage } from '@/types';

export const landingPages: LandingPage[] = [
  {
    id: 1,
    title: "SaaS Landing - Placeholder",
    description: "SaaS product landing page with feature showcase and pricing",
    vercelUrl: "https://example.com",
    image: "https://placehold.co/1200x800/1E40AF/FFFFFF?text=Landing+Page+1",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
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
