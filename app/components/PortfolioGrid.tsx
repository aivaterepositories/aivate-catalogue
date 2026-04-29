'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ArrowUpRight, X, ChevronRight } from 'lucide-react';
import { Portfolio } from '@/types';

interface PortfolioGridProps {
    portfolios: Portfolio[];
}

const categoryColors: Record<string, string> = {
    Healthcare: 'from-violet-500 to-purple-600',
    SaaS: 'from-indigo-500 to-blue-600',
    EdTech: 'from-teal-500 to-emerald-600',
    Analytics: 'from-cyan-500 to-blue-600',
    'E-Commerce': 'from-amber-500 to-orange-600',
};

const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
    live: { label: 'Live', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', dot: 'bg-emerald-400' },
    'in-progress': { label: 'In Progress', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20', dot: 'bg-amber-400' },
    concept: { label: 'Concept', color: 'bg-slate-500/10 text-slate-400 border-slate-500/20', dot: 'bg-slate-400' },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
            mass: 0.8,
        },
    },
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring' as const, stiffness: 300, damping: 25 },
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: { duration: 0.2 },
    },
};

export function PortfolioGrid({ portfolios }: PortfolioGridProps) {
    const [selectedProject, setSelectedProject] = useState<Portfolio | null>(null);
    const [filter, setFilter] = useState<string>('All');

    const categories = ['All', ...Array.from(new Set(portfolios.map((p) => p.category)))];
    const filtered = filter === 'All' ? portfolios : portfolios.filter((p) => p.category === filter);

    return (
        <>
            {/* Category Filter */}
            <motion.div
                className="flex flex-wrap justify-center gap-3 mb-12"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border ${filter === cat
                            ? 'bg-gradient-to-r from-indigo to-mint/80 text-white border-transparent shadow-lg shadow-indigo/25'
                            : 'border-white/10 text-slate-400 hover:text-white hover:border-mint/30 bg-white/5'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            {/* Portfolio Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={filter}
            >
                {filtered.map((project, index) => (
                    <PortfolioCard
                        key={project.id}
                        project={project}
                        index={index}
                        onSelect={() => setSelectedProject(project)}
                    />
                ))}
            </motion.div>

            {/* Empty State */}
            {filtered.length === 0 && (
                <motion.div
                    className="text-center py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Sparkles className="w-12 h-12 text-mint/40 mx-auto mb-4" />
                    <p className="text-slate-400 text-lg">No projects in this category yet.</p>
                    <p className="text-slate-500 text-sm mt-1">New showcases are always being added.</p>
                </motion.div>
            )}

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

/* ─────────────────── Portfolio Card ─────────────────── */

function PortfolioCard({
    project,
    index,
    onSelect,
}: {
    project: Portfolio;
    index: number;
    onSelect: () => void;
}) {
    const gradient = categoryColors[project.category] || 'from-indigo-500 to-purple-600';
    const status = statusConfig[project.status];

    return (
        <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            onClick={onSelect}
            className="group cursor-pointer relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:border-mint/30 hover:shadow-mint/10 transition-colors duration-300"
        >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Category badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradient} text-white shadow-lg`}>
                    {project.category}
                </div>

                {/* Status badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${status.color} flex items-center gap-1.5`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
                    {status.label}
                </div>

                {/* Hover CTA */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                >
                    <div className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm flex items-center gap-2 shadow-2xl">
                        View Details
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-mint transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-sm text-mint/70 font-medium mb-3">{project.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-5">
                    {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 rounded-lg bg-mint/5 border border-mint/20 text-xs text-mint font-medium">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

/* ─────────────────── Detail Modal ─────────────────── */

function ProjectModal({
    project,
    onClose,
}: {
    project: Portfolio;
    onClose: () => void;
}) {
    const gradient = categoryColors[project.category] || 'from-indigo-500 to-purple-600';

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <motion.div
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-3xl shadow-2xl"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all duration-200"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Hero Image */}
                <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 -mt-16 relative">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradient} text-white mb-4`}>
                        {project.category}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                        {project.title}
                    </h2>
                    <p className="text-mint/70 font-medium mb-4">{project.subtitle}</p>
                    <p className="text-slate-300 leading-relaxed mb-8">{project.description}</p>

                    {/* Highlights */}
                    <div className="mb-8">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                            Key Highlights
                        </h4>
                        <div className="space-y-3">
                            {project.highlights.map((highlight) => (
                                <div
                                    key={highlight}
                                    className="flex items-start gap-3 text-slate-300"
                                >
                                    <ChevronRight className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                            Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo to-mint/80 text-white font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-indigo/25"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Live
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-mint/30 transition-all duration-200"
                            >
                                <Github className="w-4 h-4" />
                                Source Code
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
