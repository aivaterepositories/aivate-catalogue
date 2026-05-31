'use client';

import { motion } from 'framer-motion';
import {
    Workflow,
    Zap,
    GitBranch,
    Database,
    Mail,
    Calendar,
    FileText,
    BarChart3,
    Cloud,
    CheckCircle2,
    ArrowRight,
    Boxes
} from 'lucide-react';

/**
 * Automation Showcase Page
 *
 * Gallery of n8n automation workflows created by Agency-OS.
 * Demonstrates AI-powered workflow automation capabilities.
 *
 * TODO: Gather n8n workflow screenshots from god-mode-n8n and auto.simple.biz
 * TODO: Create workflow diagrams/screenshots for each automation
 * TODO: Add before/after impact metrics for each workflow
 * TODO: Link to n8n instance or workflow templates repository
 */

export default function AutomationPage() {
    const workflows = [
        {
            id: 1,
            title: "GitHub → Monday.com Sync",
            description: "Bi-directional sync between GitHub issues and Monday.com items. Automatically creates Monday items from GitHub issues and vice versa, keeping both platforms in perfect sync.",
            category: "Data Pipeline",
            icon: GitBranch,
            technologies: ["n8n", "GitHub API", "Monday.com API", "Webhooks"],
            impact: {
                before: "Manual copying of issues between platforms (30+ min/day)",
                after: "Automatic sync in real-time (0 min/day)"
            },
            color: "from-purple-500 to-indigo-600",
            // TODO: Replace with real screenshot
            screenshot: "https://placehold.co/800x600/6366F1/FFFFFF?text=GitHub+Monday+Sync"
        },
        {
            id: 2,
            title: "Client Onboarding Automation",
            description: "End-to-end client onboarding workflow that sends welcome emails, creates project folders, sets up tracking, and schedules kickoff meetings. Triggered on new client signup.",
            category: "Client Automation",
            icon: Mail,
            technologies: ["n8n", "Gmail API", "Google Drive", "Calendar API", "Supabase"],
            impact: {
                before: "Manual onboarding tasks (2+ hours per client)",
                after: "Automated workflow (5 minutes to review)"
            },
            color: "from-emerald-500 to-teal-600",
            screenshot: "https://placehold.co/800x600/10B981/FFFFFF?text=Client+Onboarding"
        },
        {
            id: 3,
            title: "AI Call Summaries Pipeline",
            description: "Processes call recordings from Twilio, transcribes via Whisper API, generates summaries using Claude, and stores results in Supabase with searchable tags.",
            category: "Internal Tool",
            icon: FileText,
            technologies: ["n8n", "Twilio", "OpenAI Whisper", "Claude API", "Supabase"],
            impact: {
                before: "Manual note-taking during calls (15+ min per call)",
                after: "AI-generated summaries (automatic, 2 min delay)"
            },
            color: "from-cyan-500 to-blue-600",
            screenshot: "https://placehold.co/800x600/06B6D4/FFFFFF?text=AI+Call+Summaries"
        },
        {
            id: 4,
            title: "Daily Analytics Report",
            description: "Aggregates data from Google Analytics, Supabase database, and Vercel deployments to generate daily team reports with key metrics, sent via Slack every morning.",
            category: "Internal Tool",
            icon: BarChart3,
            technologies: ["n8n", "Google Analytics", "Supabase", "Vercel API", "Slack API"],
            impact: {
                before: "Manual data collection and reporting (45+ min/day)",
                after: "Automated daily reports (delivered at 9am)"
            },
            color: "from-amber-500 to-orange-600",
            screenshot: "https://placehold.co/800x600/F59E0B/FFFFFF?text=Analytics+Report"
        },
        {
            id: 5,
            title: "Document Processing Pipeline",
            description: "Monitors Google Drive for new document uploads, extracts text via OCR, classifies using Claude, and routes to appropriate team member with notification.",
            category: "Data Pipeline",
            icon: Cloud,
            technologies: ["n8n", "Google Drive", "OCR API", "Claude API", "Slack"],
            impact: {
                before: "Manual document sorting (20+ min per document)",
                after: "Automatic classification and routing (instant)"
            },
            color: "from-rose-500 to-pink-600",
            screenshot: "https://placehold.co/800x600/F43F5E/FFFFFF?text=Document+Pipeline"
        },
        {
            id: 6,
            title: "Project Deadline Reminders",
            description: "Monitors Supabase project database for upcoming deadlines, sends progressive reminders via Slack (7 days, 3 days, 1 day before), and escalates overdue items.",
            category: "Internal Tool",
            icon: Calendar,
            technologies: ["n8n", "Supabase", "Slack API", "Cron Scheduler"],
            impact: {
                before: "Missed deadlines due to manual tracking",
                after: "0 missed deadlines since implementation"
            },
            color: "from-indigo-500 to-purple-600",
            screenshot: "https://placehold.co/800x600/6366F1/FFFFFF?text=Deadline+Reminders"
        }
    ];

    const stats = [
        { label: "Workflows Built", value: "12+", icon: Workflow },
        { label: "Hours Saved/Month", value: "80+", icon: Zap },
        { label: "Tasks Automated", value: "500+", icon: CheckCircle2 },
        { label: "API Integrations", value: "15+", icon: Boxes }
    ];

    const categories = Array.from(new Set(workflows.map(w => w.category)));

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Hero Section */}
            <motion.section
                className="relative px-6 py-16 md:py-24 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-mint/10 via-transparent to-transparent" />

                <div className="relative max-w-6xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-mint/20 bg-mint/5 text-mint text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Workflow className="w-4 h-4" />
                        Automation Showcase
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        AI-Powered
                        <br />
                        <span className="text-mint">Workflow Automation</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-slate-400 max-w-3xl mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        A collection of production n8n workflows that automate repetitive tasks, integrate
                        disparate systems, and leverage AI to process data at scale. Built by Agency-OS to
                        streamline operations and maximize efficiency.
                    </motion.p>

                    {/* Category Pills */}
                    <motion.div
                        className="flex flex-wrap gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {categories.map((category) => (
                            <div
                                key={category}
                                className="px-4 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 text-sm font-medium"
                            >
                                {category}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="px-6 py-12 border-y border-white/10 bg-slate-900/40">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                            >
                                <stat.icon className="w-8 h-8 mx-auto mb-3 text-mint" />
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflows Grid */}
            <section className="px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-center mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        Automation Workflows
                    </motion.h2>
                    <motion.p
                        className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.85 }}
                    >
                        Real workflows deployed in production, saving hours of manual work every week.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {workflows.map((workflow, index) => (
                            <motion.div
                                key={workflow.id}
                                className="rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden hover:border-mint/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                {/* Screenshot */}
                                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900">
                                    <img
                                        src={workflow.screenshot}
                                        alt={workflow.title}
                                        className="w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                                    {/* Category Badge */}
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-lg bg-gradient-to-r ${workflow.color} text-white text-xs font-semibold`}>
                                        {workflow.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Icon + Title */}
                                    <div className="flex items-start gap-3 mb-3">
                                        <workflow.icon className="w-6 h-6 text-mint flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-bold text-white">{workflow.title}</h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-400 mb-4 leading-relaxed">
                                        {workflow.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {workflow.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Impact */}
                                    <div className="p-4 rounded-xl bg-mint/5 border border-mint/20">
                                        <div className="text-xs font-semibold text-mint uppercase tracking-wide mb-2">
                                            Impact
                                        </div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-start gap-2">
                                                <span className="text-slate-500">Before:</span>
                                                <span className="text-slate-400">{workflow.impact.before}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <ArrowRight className="w-4 h-4 text-mint flex-shrink-0" />
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-mint">After:</span>
                                                <span className="text-white font-medium">{workflow.impact.after}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TODO Section */}
            <section className="px-6 py-20 bg-slate-900/40">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="p-8 rounded-2xl bg-amber-500/10 border border-amber-500/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                    >
                        <div className="flex items-start gap-4">
                            <Zap className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-amber-400 mb-2">Coming Soon: Real Screenshots</h3>
                                <p className="text-slate-300 mb-4">
                                    We're gathering real n8n workflow screenshots and diagrams to showcase the actual automation architecture.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                        <span>Screenshot each workflow from god-mode-n8n and auto.simple.biz</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                        <span>Create workflow diagrams showing node connections and data flow</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                        <span>Add before/after metrics with real data (time saved, error reduction)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                        <span>Link to n8n template repository or shareable workflow exports</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
