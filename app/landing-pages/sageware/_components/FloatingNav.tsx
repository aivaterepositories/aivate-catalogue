'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function FloatingNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl"
    >
      <div className="backdrop-blur-md bg-white/80 border border-slate-200 rounded-2xl px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: 'JetBrains Mono, monospace' }}>S</span>
            </div>
            <span className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              Sageware
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200">
              Services
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Get Started
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
