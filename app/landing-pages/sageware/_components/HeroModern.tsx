'use client';

import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroModern() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-white">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" strokeWidth={1.5} />
              <span className="text-sm font-medium text-emerald-700">
                Trusted by 10,000+ data teams worldwide
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}
            >
              Turn Data Into
              <br />
              <span className="text-blue-700">Decisions</span>
              <br />
              in Real-Time
            </h1>

            {/* Description */}
            <p
              className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed"
              style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: '1.6' }}
            >
              AI-powered business intelligence that processes millions of data points in milliseconds. No code required.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 rounded-xl font-semibold text-base transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div
                  className="text-3xl font-bold text-slate-900 mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  &lt;100ms
                </div>
                <div className="text-sm text-slate-600">Query Speed</div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-slate-900 mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  99.9%
                </div>
                <div className="text-sm text-slate-600">Uptime SLA</div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-slate-900 mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  2.5M+
                </div>
                <div className="text-sm text-slate-600">Reports Daily</div>
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50">
              {/* Mock Dashboard UI */}
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-slate-200">
                    <Zap className="w-4 h-4 text-emerald-500" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-slate-700">Live</span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="space-y-4">
                  {/* Large Chart */}
                  <div className="h-40 bg-white rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
                      <span className="text-sm font-semibold text-slate-900">Revenue Growth</span>
                    </div>
                    {/* Simplified Line Chart */}
                    <div className="relative h-20">
                      <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                        <path
                          d="M0,60 L50,45 L100,50 L150,30 L200,35 L250,15 L300,20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-blue-700"
                        />
                        <path
                          d="M0,60 L50,45 L100,50 L150,30 L200,35 L250,15 L300,20 L300,80 L0,80 Z"
                          fill="currentColor"
                          className="text-indigo-100 opacity-50"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Small Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white rounded-xl border border-slate-200 p-3">
                      <div className="text-xs text-slate-600 mb-1">Total Users</div>
                      <div className="text-2xl font-bold text-slate-900">24.5K</div>
                    </div>
                    <div className="h-20 bg-white rounded-xl border border-slate-200 p-3">
                      <div className="text-xs text-slate-600 mb-1">Conversion</div>
                      <div className="text-2xl font-bold text-emerald-600">+12.3%</div>
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
              className="absolute -bottom-4 -left-4 backdrop-blur-md bg-white/90 border border-slate-200 rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-slate-600">Performance</div>
                  <div className="text-sm font-bold text-slate-900">99.9% Uptime</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
