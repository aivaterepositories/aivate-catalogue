import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LandingPagesPage() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-indigo hover:text-mint transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo mb-4">
            Landing Pages Portfolio
          </h1>
          <p className="text-lg text-slate/70 max-w-2xl mx-auto">
            Beautiful, conversion-focused landing pages built with modern web technologies
          </p>
        </header>

        {/* Coming Soon */}
        <div className="bg-gradient-to-br from-mint/10 to-indigo/10 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold text-slate mb-4">Coming Soon</h2>
          <p className="text-slate/60">
            Portfolio projects will be showcased here
          </p>
        </div>
      </div>
    </div>
  );
}
