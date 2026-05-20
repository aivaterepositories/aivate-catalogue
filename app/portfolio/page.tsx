'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { portfolios } from '@/data/portfolios';

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-slate-950 p-4 md:p-8 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-30%] left-[-15%] w-[700px] h-[700px] bg-indigo/10 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-mint/8 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-mint hover:text-mint/80 transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    className="text-center mb-14 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-mint/20 bg-mint/5 text-mint text-sm font-medium tracking-wide uppercase">
                        <Sparkles className="w-4 h-4" />
                        Showcase
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
                        Our{' '}
                        <span className="text-mint">
                            Portfolio
                        </span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A curated collection of premium digital experiences — from conversion-focused
                        landing pages to intelligent dashboard systems.
                    </p>
                </motion.header>

                {/* Portfolio Grid */}
                <PortfolioGrid portfolios={portfolios} />

                {/* Footer */}
                <motion.footer
                    className="mt-24 text-center text-slate-500 text-sm font-medium tracking-wider uppercase pb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    © 2026 Aivate • Establish Your Presence
                </motion.footer>
            </div>
        </div>
    );
}
