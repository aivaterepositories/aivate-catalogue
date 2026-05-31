'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ArrowUpRight, X, ChevronRight, ImageIcon } from 'lucide-react';
import { Portfolio } from '@/types';
import { PortfolioSearch } from './PortfolioSearch';
import { TechStackFilter } from './TechStackFilter';
import { ImageLightbox } from './ImageLightbox';

interface PortfolioGridEnhancedProps {
    portfolios: Portfolio[];
}

const categoryColors: Record<string, string> = {
    Healthcare: 'from-violet-500 to-purple-600',
    SaaS: 'from-indigo-500 to-blue-600',
    EdTech: 'from-teal-500 to-emerald-600',
    Analytics: 'from-cyan-500 to-blue-600',
    'E-Commerce': 'from-amber-500 to-orange-600',
    Hospitality: 'from-amber-600 to-orange-700',
    Fitness: 'from-lime-500 to-green-600',
    Legal: 'from-blue-700 to-indigo-800',
    Restaurant: 'from-orange-500 to-red-600',
    Dashboard: 'from-cyan-600 to-blue-700',
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
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 120,
            damping: 18,
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

export function PortfolioGridEnhanced({ portfolios }: PortfolioGridEnhancedProps) {
    const [selectedProject, setSelectedProject] = useState<Portfolio | null>(null);
    const [categoryFilter, setCategoryFilter] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [lightboxImages, setLightboxImages] = useState<string[] | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // Extract unique technologies from all portfolios
    const allTechnologies = useMemo(() => {
        const techSet = new Set<string>();
        portfolios.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
        return Array.from(techSet).sort();
    }, [portfolios]);

    // Extract unique categories
    const categories = useMemo(
        () => ['All', ...Array.from(new Set(portfolios.map((p) => p.category)))],
        [portfolios]
    );

    // Multi-filter logic
    const filtered = useMemo(() => {
        let result = portfolios;

        // Category filter
        if (categoryFilter !== 'All') {
            result = result.filter((p) => p.category === categoryFilter);
        }

        // Tech stack filter
        if (selectedTechs.length > 0) {
            result = result.filter((p) =>
                selectedTechs.every((tech) => p.technologies.includes(tech))
            );
        }

        // Search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.title.toLowerCase().includes(query) ||
                    p.subtitle.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query) ||
                    p.technologies.some((t) => t.toLowerCase().includes(query))
            );
        }

        return result;
    }, [portfolios, categoryFilter, selectedTechs, searchQuery]);

    const handleTechToggle = (tech: string) => {
        setSelectedTechs((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
        );
    };

    const handleClearTechFilters = () => {
        setSelectedTechs([]);
    };

    const openLightbox = (images: string[], startIndex: number = 0) => {
        setLightboxImages(images);
        setLightboxIndex(startIndex);
    };

    const closeLightbox = () => {
        setLightboxImages(null);
        setLightboxIndex(0);
    };

    return (
        <>
            {/* Search Bar */}
            <div className="mb-8">
                <PortfolioSearch onSearch={setSearchQuery} />
            </div>

            {/* Category Filter */}
            <motion.div
                className="flex flex-wrap justify-center gap-3 mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategoryFilter(cat)}
                        className={`px-5 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 border ${
                            categoryFilter === cat
                                ? 'bg-mint text-slate-950 border-transparent shadow-lg shadow-mint/25'
                                : 'border-white/10 text-slate-400 hover:text-white hover:border-mint/30 bg-white/5'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            {/* Tech Stack Filter */}
            <div className="mb-12">
                <TechStackFilter
                    technologies={allTechnologies}
                    selectedTechs={selectedTechs}
                    onToggle={handleTechToggle}
                    onClearAll={handleClearTechFilters}
                />
            </div>

            {/* Results Count */}
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <p className="text-sm text-slate-500 font-medium">
                    Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
                    {(categoryFilter !== 'All' || selectedTechs.length > 0 || searchQuery) && (
                        <span className="text-mint"> (filtered)</span>
                    )}
                </p>
            </motion.div>

            {/* Portfolio Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key={`${categoryFilter}-${selectedTechs.join(',')}-${searchQuery}`}
            >
                {filtered.map((project, index) => (
                    <PortfolioCard
                        key={project.id}
                        project={project}
                        index={index}
                        onSelect={() => setSelectedProject(project)}
                        onImageClick={() => openLightbox([project.image])}
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
                    <p className="text-slate-400 text-lg font-semibold">No projects match your filters</p>
                    <p className="text-slate-500 text-sm mt-2">
                        Try adjusting your category, technology, or search criteria.
                    </p>
                    <button
                        onClick={() => {
                            setCategoryFilter('All');
                            setSelectedTechs([]);
                            setSearchQuery('');
                        }}
                        className="mt-6 px-6 py-2 rounded-xl bg-mint/10 border border-mint/20 text-mint font-semibold hover:bg-mint/20 transition-all duration-200"
                    >
                        Clear All Filters
                    </button>
                </motion.div>
            )}

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                        onImageClick={() => openLightbox([selectedProject.image])}
                    />
                )}
            </AnimatePresence>

            {/* Image Lightbox */}
            <AnimatePresence>
                {lightboxImages && (
                    <ImageLightbox
                        images={lightboxImages}
                        currentIndex={lightboxIndex}
                        onClose={closeLightbox}
                        onNavigate={setLightboxIndex}
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
    onImageClick,
}: {
    project: Portfolio;
    index: number;
    onSelect: () => void;
    onImageClick: () => void;
}) {
    const gradient = categoryColors[project.category] || 'from-indigo-500 to-purple-600';
    const status = statusConfig[project.status];

    return (
        <motion.article
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group cursor-pointer relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl hover:border-mint/30 hover:shadow-mint/10 transition-colors duration-300"
        >
            {/* Image Container */}
            <div
                className="relative aspect-[16/10] overflow-hidden"
                onClick={(e) => {
                    e.stopPropagation();
                    onImageClick();
                }}
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Category badge */}
                <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${gradient} text-white shadow-lg`}
                >
                    {project.category}
                </div>

                {/* Status badge */}
                <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-semibold border ${status.color} flex items-center gap-1.5 backdrop-blur-sm`}
                >
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`} />
                    {status.label}
                </div>

                {/* Image zoom indicator */}
                <motion.div
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                >
                    <ImageIcon className="w-4 h-4" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-5" onClick={onSelect}>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-mint transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-xs text-mint/70 font-semibold mb-3 uppercase tracking-wide">
                    {project.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-2.5 py-1 rounded-lg bg-mint/5 border border-mint/20 text-xs text-mint font-semibold">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>

                {/* View Details CTA */}
                <div className="mt-4 flex items-center gap-2 text-sm text-mint font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </div>
            </div>
        </motion.article>
    );
}

/* ─────────────────── Detail Modal ─────────────────── */

function ProjectModal({
    project,
    onClose,
    onImageClick,
}: {
    project: Portfolio;
    onClose: () => void;
    onImageClick: () => void;
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
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <motion.div
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all duration-200 group"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
                </button>

                {/* Hero Image */}
                <div
                    className="relative aspect-video overflow-hidden rounded-t-2xl cursor-pointer group"
                    onClick={onImageClick}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                    {/* Zoom indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white font-semibold text-sm flex items-center gap-2">
                            <ImageIcon className="w-4 h-4" />
                            Click to enlarge
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 -mt-16 relative">
                    <div
                        className={`inline-block px-3 py-1 rounded-lg text-xs font-bold bg-gradient-to-r ${gradient} text-white mb-4 shadow-lg`}
                    >
                        {project.category}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {project.title}
                    </h2>
                    <p className="text-mint/70 font-semibold uppercase text-sm tracking-wide mb-4">
                        {project.subtitle}
                    </p>
                    <p className="text-slate-300 leading-relaxed text-base mb-8">{project.description}</p>

                    {/* Highlights */}
                    <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                            Key Highlights
                        </h4>
                        <div className="space-y-3">
                            {project.highlights.map((highlight) => (
                                <div key={highlight} className="flex items-start gap-3 text-slate-300">
                                    <ChevronRight className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
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
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mint text-slate-950 font-bold hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-mint/25"
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
