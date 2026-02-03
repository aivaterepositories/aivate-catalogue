import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { dashboards } from "@/data/dashboards";

export default function DashboardSystemsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-indigo dark:text-mint hover:text-mint dark:hover:text-mint/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo dark:text-mint mb-4 transition-colors duration-300">
            Dashboard Systems Portfolio
          </h1>
          <p className="text-lg text-slate/70 dark:text-white/70 max-w-2xl mx-auto transition-colors duration-300">
            Powerful admin panels and backoffice systems for managing your business
          </p>
        </header>

        {/* Project Carousel */}
        <ProjectCard projects={dashboards} type="dashboard" />

        {/* Instructions */}
        <div className="mt-12 p-6 bg-gradient-to-br from-mint/10 to-indigo/10 dark:from-mint/5 dark:to-indigo/5 rounded-2xl border border-indigo/10 dark:border-mint/20">
          <h3 className="text-lg font-bold text-indigo dark:text-mint mb-2">
            💡 How to add your projects
          </h3>
          <p className="text-slate/70 dark:text-white/70 text-sm">
            Edit <code className="px-2 py-1 bg-white/50 dark:bg-slate/50 rounded">data/dashboards.ts</code> and replace the placeholder data with your Vercel URLs and project information.
          </p>
        </div>
      </div>
    </div>
  );
}
