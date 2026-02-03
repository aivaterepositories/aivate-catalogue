import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LandingPagesPage() {
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
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo dark:text-mint mb-4 transition-colors duration-300">
            Landing Pages Portfolio
          </h1>
          <p className="text-lg text-slate/70 dark:text-white/70 max-w-2xl mx-auto transition-colors duration-300">
            Beautiful, conversion-focused landing pages built with modern web technologies
          </p>
        </header>

        {/* Coming Soon */}
        <div className="bg-gradient-to-br from-mint/10 to-indigo/10 dark:from-mint/5 dark:to-indigo/5 rounded-2xl p-12 text-center border border-indigo/10 dark:border-mint/20 transition-all duration-300">
          <h2 className="text-2xl font-bold text-slate dark:text-mint mb-4 transition-colors duration-300">Coming Soon</h2>
          <p className="text-slate/60 dark:text-white/60 transition-colors duration-300">
            Portfolio projects will be showcased here
          </p>
        </div>
      </div>
    </div>
  );
}
