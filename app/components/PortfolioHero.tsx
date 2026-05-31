'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Code2 } from 'lucide-react';

export function PortfolioHero() {
    return (
        <motion.header
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            {/* Badge */}
            <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-mint/20 bg-mint/5 text-mint text-sm font-medium tracking-wide uppercase"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <Sparkles className="w-4 h-4" />
                Agency-OS Portfolio
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Premium Digital
                <br />
                <span className="text-mint">
                    Experiences
                </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
                A curated collection of production-grade interfaces built with Agency-OS.
                From high-conversion landing pages to intelligent dashboard systems — each
                project showcases our commitment to pixel-perfect design and performance.
            </p>

            {/* Feature Pills */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300">
                    <Zap className="w-4 h-4 text-mint" />
                    <span className="font-medium">AI-Powered Development</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300">
                    <Code2 className="w-4 h-4 text-indigo" />
                    <span className="font-medium">Next.js 16 + TypeScript</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300">
                    <Sparkles className="w-4 h-4 text-mint" />
                    <span className="font-medium">Production-Ready Code</span>
                </div>
            </motion.div>
        </motion.header>
    );
}
