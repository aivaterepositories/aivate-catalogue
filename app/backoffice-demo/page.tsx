'use client';

import { motion } from 'framer-motion';
import {
    Database,
    Users,
    FileText,
    Calendar,
    Shield,
    Bell,
    Activity,
    ExternalLink,
    Github,
    CheckCircle2,
    Server,
    Lock,
    Zap
} from 'lucide-react';

/**
 * Backoffice Demo Page
 *
 * Showcases Temp Power Systems CRM as a generic "Enterprise Backoffice System"
 * Demonstrates full-featured management capabilities without client branding.
 *
 * TODO: Clone TPS CRM repository to create standalone demo version
 * TODO: Deploy demo version to separate subdomain (demo.aivate.net/backoffice)
 * TODO: Add video walkthrough or interactive screenshots
 */

export default function BackofficeDemoPage() {
    const features = [
        {
            icon: Database,
            title: "Job Management",
            description: "Track projects from quote to completion with status workflows, assignment tracking, and real-time updates.",
            color: "text-mint"
        },
        {
            icon: Users,
            title: "Crew Scheduling",
            description: "Assign crews to jobs with availability calendar, conflict detection, and automated notifications.",
            color: "text-indigo"
        },
        {
            icon: FileText,
            title: "Document Management",
            description: "Upload, organize, and share documents with secure cloud storage and version control.",
            color: "text-cyan-400"
        },
        {
            icon: Shield,
            title: "Role-Based Access Control",
            description: "Granular permissions system with Admin, Manager, Crew, and Billing roles. Secure by design.",
            color: "text-emerald-400"
        },
        {
            icon: Bell,
            title: "Real-Time Notifications",
            description: "WebSocket-powered live updates for job status changes, crew assignments, and system alerts.",
            color: "text-amber-400"
        },
        {
            icon: Activity,
            title: "Audit Logging",
            description: "Comprehensive activity tracking for compliance, debugging, and security monitoring.",
            color: "text-rose-400"
        }
    ];

    const techStack = [
        { name: "React 19", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Vite", icon: "⚡" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Express API", icon: "🚀" },
        { name: "Supabase", icon: "🗄️" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "WebSockets", icon: "🔌" }
    ];

    const metrics = [
        { label: "Active Users", value: "20+", icon: Users },
        { label: "Jobs Managed", value: "500+", icon: Database },
        { label: "Documents Stored", value: "1,200+", icon: FileText },
        { label: "Uptime", value: "99.9%", icon: Activity }
    ];

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
                <div className="absolute inset-0 bg-gradient-to-b from-indigo/10 via-transparent to-transparent" />

                <div className="relative max-w-6xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-mint/20 bg-mint/5 text-mint text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Server className="w-4 h-4" />
                        Enterprise Backoffice System
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Full-Featured
                        <br />
                        <span className="text-mint">Management System</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-slate-400 max-w-3xl mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        A production-grade backoffice system built for a power equipment rental company.
                        Features job management, crew scheduling, document uploads, role-based access control,
                        and real-time WebSocket updates. Currently serving 20+ users in live production.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a
                            href="https://crm.temppower.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mint text-slate-950 font-semibold hover:bg-mint/90 transition-colors duration-200"
                        >
                            <ExternalLink className="w-5 h-5" />
                            View Live System
                        </a>
                        <button
                            disabled
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold opacity-50 cursor-not-allowed"
                        >
                            <Github className="w-5 h-5" />
                            Private Repository
                        </button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Metrics Section */}
            <section className="px-6 py-12 border-y border-white/10 bg-slate-900/40">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={metric.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                            >
                                <metric.icon className="w-8 h-8 mx-auto mb-3 text-mint" />
                                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                                <div className="text-sm text-slate-400">{metric.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-center mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        Core Features
                    </motion.h2>
                    <motion.p
                        className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75 }}
                    >
                        Enterprise-grade functionality built with modern tech stack and best practices.
                    </motion.p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-mint/30 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <feature.icon className={`w-10 h-10 mb-4 ${feature.color}`} />
                                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="px-6 py-20 bg-slate-900/40">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-center mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        Technology Stack
                    </motion.h2>
                    <motion.p
                        className="text-center text-slate-400 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.25 }}
                    >
                        Built with industry-standard tools and frameworks
                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className="px-5 py-3 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-3"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.3 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-2xl">{tech.icon}</span>
                                <span className="text-white font-medium">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TODO Section */}
            <section className="px-6 py-20">
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
                                <h3 className="text-xl font-bold text-amber-400 mb-2">Coming Soon: Interactive Demo</h3>
                                <p className="text-slate-300 mb-4">
                                    We're preparing a standalone demo version of this backoffice system for hands-on exploration.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-400">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                        <span>Clone TPS CRM repository and remove client-specific branding</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                        <span>Deploy to demo subdomain (demo.aivate.net/backoffice)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                        <span>Add sample data and test accounts for exploration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                        <span>Record video walkthrough demonstrating key features</span>
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
