'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50 -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              #1 AI-Powered Analytics Platform 2025
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-950 mb-6 leading-tight font-heading">
              Turn Data Into Decisions in{' '}
              <span className="text-blue-600">Real-Time</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Sageware combines advanced AI, predictive analytics, and intuitive dashboards
              to help businesses make smarter decisions faster. Join 10,000+ companies
              transforming their data strategy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#trial"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500"
              >
                Start Free 14-Day Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-blue-50 text-blue-900 border-2 border-blue-600 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Watch 2-Min Demo
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">10,000+</div>
                <div className="text-sm text-slate-600">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">2.5M+</div>
                <div className="text-sm text-slate-600">Reports Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">99.9%</div>
                <div className="text-sm text-slate-600">Uptime SLA</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-2xl p-6">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-4 bg-blue-200 rounded w-1/3 animate-pulse" />
                  <div className="flex gap-2">
                    <div className="h-4 w-4 bg-blue-300 rounded-full" />
                    <div className="h-4 w-4 bg-blue-400 rounded-full" />
                    <div className="h-4 w-4 bg-amber-400 rounded-full" />
                  </div>
                </div>

                {/* Chart */}
                <div className="h-48 bg-gradient-to-br from-blue-100 via-blue-50 to-amber-50 rounded-xl flex items-end justify-around p-4">
                  {[24, 32, 40, 36, 44].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height * 2}px` }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                      className={`w-12 rounded-t-lg ${
                        i === 2 ? 'bg-amber-500' : 'bg-blue-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">847</div>
                    <div className="text-xs text-slate-600">Active Users</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">$124K</div>
                    <div className="text-xs text-slate-600">Revenue</div>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-amber-600">+23%</div>
                    <div className="text-xs text-slate-600">Growth</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
