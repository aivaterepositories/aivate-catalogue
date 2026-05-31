'use client';

import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

interface TechStackFilterProps {
    technologies: string[];
    selectedTechs: string[];
    onToggle: (tech: string) => void;
    onClearAll: () => void;
}

const techColorMap: Record<string, string> = {
    'Next.js': 'from-slate-600 to-slate-700',
    'React': 'from-cyan-500 to-blue-600',
    'TypeScript': 'from-blue-600 to-indigo-700',
    'Tailwind CSS': 'from-teal-500 to-cyan-600',
    'Framer Motion': 'from-pink-500 to-rose-600',
    'Supabase': 'from-emerald-500 to-teal-600',
    'PostgreSQL': 'from-blue-700 to-indigo-800',
    'Prisma': 'from-slate-700 to-gray-800',
    'Node.js': 'from-green-600 to-emerald-700',
    'Python': 'from-blue-500 to-yellow-500',
    'D3.js': 'from-orange-500 to-red-600',
    'Chart.js': 'from-pink-400 to-red-500',
    'Lucide React': 'from-violet-500 to-purple-600',
    '3D CSS': 'from-purple-600 to-indigo-700',
    '3D Transforms': 'from-indigo-600 to-purple-700',
    'WebSockets': 'from-amber-500 to-orange-600',
    'SVG Sparklines': 'from-blue-500 to-cyan-600',
};

export function TechStackFilter({ technologies, selectedTechs, onToggle, onClearAll }: TechStackFilterProps) {
    const hasSelection = selectedTechs.length > 0;

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                    <Filter className="w-4 h-4" />
                    <span>Filter by Technology</span>
                </div>

                {hasSelection && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={onClearAll}
                        className="text-xs text-mint hover:text-mint/80 font-medium transition-colors duration-200"
                    >
                        Clear All ({selectedTechs.length})
                    </motion.button>
                )}
            </div>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => {
                    const isSelected = selectedTechs.includes(tech);
                    const gradient = techColorMap[tech] || 'from-slate-600 to-slate-700';

                    return (
                        <motion.button
                            key={tech}
                            onClick={() => onToggle(tech)}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 border ${
                                isSelected
                                    ? `bg-gradient-to-r ${gradient} text-white border-transparent shadow-lg`
                                    : 'border-white/10 text-slate-400 hover:text-white hover:border-mint/30 bg-white/5 hover:bg-white/10'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tech}
                        </motion.button>
                    );
                })}
            </div>

            {/* Selection Summary */}
            {hasSelection && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-3 rounded-xl bg-mint/5 border border-mint/20"
                >
                    <p className="text-xs text-mint font-medium">
                        Filtering by: {selectedTechs.join(', ')}
                    </p>
                </motion.div>
            )}
        </motion.div>
    );
}
