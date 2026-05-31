import Link from "next/link";
import { Globe, LayoutDashboard, Workflow, Briefcase, ArrowRight, Server, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-mint/10 rounded-full blur-[100px] animate-pulse delay-1000" />

      {/* Hero Section */}
      <header className="text-center mb-16 md:mb-24 relative z-10 max-w-4xl mx-auto animate-fade-in-up">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-mint/20 bg-mint/5 text-mint text-sm font-medium tracking-wide uppercase animate-fade-in">
          Premium Digital Solutions
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white leading-tight">
          Crafting the <span className="text-transparent bg-clip-text bg-gradient-indigo-mint">Future</span> of <br className="hidden md:block" /> Digital Experience.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Aivate's curated portfolio of high-performance Landing Pages, Dashboard Systems, and Intelligent Automation.
        </p>
      </header>

      {/* Portfolio Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full relative z-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>

        {/* Card 1: Portfolio Showcase (Featured) */}
        <NavigationCard
          href="/portfolio"
          icon={<Briefcase className="w-8 h-8 text-white" />}
          title="Portfolio"
          description="Explore our curated showcase of premium digital experiences."
          gradient="from-mint to-teal-500"
          delay="0s"
        />

        {/* Card 2: Landing Pages */}
        <NavigationCard
          href="/landing-pages"
          icon={<Globe className="w-8 h-8 text-white" />}
          title="Landing Pages"
          description="Conversion-focused experiences built for speed and impact."
          gradient="from-indigo-500 to-purple-600"
          delay="0.1s"
        />

        {/* Card 3: Dashboards */}
        <NavigationCard
          href="/dashboard-systems"
          icon={<LayoutDashboard className="w-8 h-8 text-white" />}
          title="Dashboard Systems"
          description="Powerful admin interfaces designed for data mastery."
          gradient="from-blue-600 to-indigo-600"
          delay="0.2s"
        />

        {/* Card 4: Backoffice Demo (NEW) */}
        <NavigationCard
          href="/backoffice-demo"
          icon={<Server className="w-8 h-8 text-white" />}
          title="Backoffice Demo"
          description="Full-featured enterprise management system showcase."
          gradient="from-emerald-500 to-teal-600"
          delay="0.3s"
        />

        {/* Card 5: Automation Showcase (NEW) */}
        <NavigationCard
          href="/automation"
          icon={<Zap className="w-8 h-8 text-white" />}
          title="Automation"
          description="AI-powered n8n workflows that streamline operations."
          gradient="from-amber-500 to-orange-600"
          delay="0.4s"
        />

        {/* Card 6: Legacy Workflow Automation */}
        <NavigationCard
          href="/workflow-automation"
          icon={<Workflow className="w-8 h-8 text-white" />}
          title="Workflow Gallery"
          description="Seamless n8n integrations to power your operations."
          gradient="from-cyan-500 to-blue-600"
          delay="0.5s"
        />
      </div>

      {/* Footer */}
      <footer className="mt-24 text-slate-500 text-sm font-medium tracking-wider uppercase animate-fade-in" style={{ animationDelay: '0.5s' }}>
        © 2026 Aivate • Establish Your Presence
      </footer>
    </div>
  );
}

interface NavigationCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: string;
}

function NavigationCard({ href, icon, title, description, gradient, delay }: NavigationCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div
        className="glass-panel glass-card-hover h-full p-8 rounded-3xl relative overflow-hidden flex flex-col"
        style={{ animationDelay: delay }}
      >
        {/* Dynamic Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

        {/* Icon Box */}
        <div className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl font-display font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h2>
          <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed mb-8">
            {description}
          </p>
        </div>

        {/* Arrow (Bottom Right) */}
        <div className="mt-auto flex justify-end">
          <div className="p-2 rounded-full border border-white/10 group-hover:border-mint/50 group-hover:bg-mint/10 transition-all duration-300 text-slate-400 group-hover:text-mint">
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}
