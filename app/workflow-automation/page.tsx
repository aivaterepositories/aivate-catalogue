import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WorkflowCard } from "../components/WorkflowCard";
import { workflows } from "@/data/workflows";

export default function WorkflowAutomationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-4 md:p-8 transition-colors duration-300">
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
            Workflow Automation Portfolio
          </h1>
          <p className="text-lg text-slate-600/70 dark:text-white/70 max-w-2xl mx-auto transition-colors duration-300">
            Intelligent n8n workflows that streamline operations and boost productivity
          </p>
        </header>

        {/* Workflow Carousel */}
        <WorkflowCard workflows={workflows} />

        {/* Instructions */}
        <div className="mt-12 p-6 bg-gradient-to-br from-mint/10 to-indigo/10 dark:from-mint/5 dark:to-indigo/5 rounded-2xl border border-indigo/10 dark:border-mint/20">
          <h3 className="text-lg font-bold text-indigo dark:text-mint mb-2">
            💡 How to add your workflows
          </h3>
          <p className="text-slate/70 dark:text-white/70 text-sm">
            Edit <code className="px-2 py-1 bg-white/50 dark:bg-slate-900/50 rounded">data/workflows.ts</code> and replace the placeholder data with your n8n workflow screenshots and descriptions.
          </p>
        </div>
      </div>
    </div>
  );
}
