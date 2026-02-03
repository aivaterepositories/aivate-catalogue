import Link from "next/link";
import { Globe, LayoutDashboard, Workflow } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-300">
      {/* Header */}
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-indigo-mint bg-clip-text text-transparent">
          Aivate Catalogue
        </h1>
        <p className="text-lg md:text-2xl text-slate dark:text-mint/80 font-light max-w-2xl transition-colors duration-300">
          Premium Solutions for Modern Digital Business
        </p>
      </header>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full">
        <NavigationCard
          href="/landing-pages"
          icon={<Globe className="w-8 h-8" />}
          title="Landing Pages"
          description="Beautiful, conversion-focused landing pages built with modern web technologies"
        />
        <NavigationCard
          href="/dashboard-systems"
          icon={<LayoutDashboard className="w-8 h-8" />}
          title="Dashboard Systems"
          description="Powerful admin panels and backoffice systems for managing your business"
        />
        <NavigationCard
          href="/workflow-automation"
          icon={<Workflow className="w-8 h-8" />}
          title="Workflow Automation"
          description="Intelligent n8n workflows that streamline your operations and boost productivity"
        />
      </div>

      {/* Footer */}
      <footer className="mt-16 text-slate/60 dark:text-white/60 text-sm transition-colors duration-300">
        © 2026 Aivate. All rights reserved.
      </footer>
    </div>
  );
}

interface NavigationCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function NavigationCard({ href, icon, title, description }: NavigationCardProps) {
  return (
    <Link href={href}>
      <div className="group relative bg-white dark:bg-slate/50 rounded-2xl p-8 border-2 border-indigo/10 dark:border-mint/20 hover:border-indigo dark:hover:border-mint transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col">
        {/* Gradient Background on Hover */}
        <div className="absolute inset-0 bg-gradient-indigo-mint opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center h-full">
          {/* Icon */}
          <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-indigo-mint flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            {icon}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-indigo dark:text-mint mb-3 group-hover:scale-105 transition-all duration-300">
            {title}
          </h2>

          {/* Description */}
          <p className="text-slate/70 dark:text-white/70 leading-relaxed flex-grow transition-colors duration-300">
            {description}
          </p>

          {/* Arrow Indicator */}
          <div className="mt-6 text-indigo dark:text-mint font-semibold group-hover:translate-x-2 transition-all duration-300 flex items-center gap-2">
            View Portfolio
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Hover Shadow */}
        <div className="absolute inset-0 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
      </div>
    </Link>
  );
}
