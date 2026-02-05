'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroGlass() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-white">
      {/* Animated Background - Much Darker for Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Dark overlay for additional contrast */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative max-w-4xl w-full"
      >
        <div className="backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/10 border border-white/30 rounded-full text-white text-sm font-medium mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>Trusted by 10,000+ Data Teams Worldwide</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl"
            style={{ fontFamily: 'Fira Code, monospace', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
          >
            Turn Data Into
            <br />
            <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
              Decisions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl drop-shadow-lg"
            style={{ fontFamily: 'Fira Sans, sans-serif', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
          >
            AI-powered business intelligence that processes millions of data points
            in milliseconds. No code required.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#demo"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              style={{ fontFamily: 'Fira Sans, sans-serif' }}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              style={{ fontFamily: 'Fira Sans, sans-serif' }}
            >
              See How It Works
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 pt-8 border-t border-white/20 grid grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg" style={{ fontFamily: 'Fira Code, monospace', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                &lt;100ms
              </div>
              <div className="text-sm text-white/90 drop-shadow-md">Query Speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg" style={{ fontFamily: 'Fira Code, monospace', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                99.9%
              </div>
              <div className="text-sm text-white/90 drop-shadow-md">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1 drop-shadow-lg" style={{ fontFamily: 'Fira Code, monospace', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                2.5M+
              </div>
              <div className="text-sm text-white/90 drop-shadow-md">Reports Daily</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/80 text-sm drop-shadow-md">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
