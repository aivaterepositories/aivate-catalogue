'use client';

import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroModern() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                Trusted by 10,000+ data teams worldwide
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight"
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
            >
              Turn Data Into
              <br />
              <span className="text-indigo-600 dark:text-indigo-400">Decisions</span>
              <br />
              in Real-Time
            </h1>

            {/* Description */}
            <p
              className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed"
              style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.6' }}
            >
              AI-powered business intelligence that processes millions of data points in milliseconds. No code required.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50 border border-slate-200 dark:border-slate-700 rounded-xl font-semibold text-base transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div
                  className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  &lt;100ms
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Query Speed</div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  99.9%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Uptime SLA</div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  2.5M+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Reports Daily</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Screenshot Container with Shadow */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
              {/* Mock Dashboard UI */}
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                    <Zap className="w-4 h-4 text-emerald-500" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Live</span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="space-y-4">
                  {/* Large Chart */}
                  <div className="h-40 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">Revenue Growth</span>
                    </div>
                    {/* Simplified Line Chart */}
                    <div className="relative h-20">
                      <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                        <path
                          d="M0,60 L50,45 L100,50 L150,30 L200,35 L250,15 L300,20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-indigo-600 dark:text-indigo-400"
                        />
                        <path
                          d="M0,60 L50,45 L100,50 L150,30 L200,35 L250,15 L300,20 L300,80 L0,80 Z"
                          fill="currentColor"
                          className="text-indigo-100 dark:text-indigo-950 opacity-50"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Small Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3">
                      <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Total Users</div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-slate-50">24.5K</div>
                    </div>
                    <div className="h-20 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-3">
                      <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Conversion</div>
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">+12.3%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Performance</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-50">99.9% Uptime</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
