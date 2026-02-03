import { Dashboard } from '@/types';

export const dashboards: Dashboard[] = [
  {
    id: 1,
    title: "CRM Dashboard - Placeholder",
    description: "Complete customer relationship management system with analytics",
    vercelUrl: "https://example.com", // Replace with your Vercel URL
    screenshots: [
      "https://placehold.co/1200x800/4F46E5/FFFFFF?text=Dashboard+1+-+Main",
      "https://placehold.co/1200x800/4F46E5/FFFFFF?text=Dashboard+1+-+Analytics"
    ],
    features: [
      "Customer Management",
      "Sales Pipeline",
      "Analytics Dashboard",
      "Task Management"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"]
  },
  {
    id: 2,
    title: "Admin Panel - Placeholder",
    description: "Comprehensive admin panel for managing users and content",
    vercelUrl: "https://example.com",
    screenshots: [
      "https://placehold.co/1200x800/99F6E4/0F172A?text=Dashboard+2+-+Users",
      "https://placehold.co/1200x800/99F6E4/0F172A?text=Dashboard+2+-+Settings"
    ],
    features: [
      "User Management",
      "Content Management",
      "Role-Based Access",
      "Activity Logs"
    ],
    technologies: ["Next.js", "MongoDB", "Express", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Analytics Platform - Placeholder",
    description: "Real-time analytics platform with data visualization",
    vercelUrl: "https://example.com",
    screenshots: [
      "https://placehold.co/1200x800/0F172A/99F6E4?text=Dashboard+3+-+Charts",
      "https://placehold.co/1200x800/0F172A/99F6E4?text=Dashboard+3+-+Reports"
    ],
    features: [
      "Real-time Data",
      "Custom Reports",
      "Data Export",
      "Team Collaboration"
    ],
    technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"]
  }
];
