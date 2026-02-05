'use client';

import { ArrowRight, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroReal() {
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6"
            >
              <Code2 className="w-4 h-4 text-blue-700" strokeWidth={1.5} />
              <span className="text-sm font-medium text-blue-800">
                Based in the Philippines
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}
            >
              Craft Software That
              <br />
              <span className="text-blue-700">Drives Results</span>
            </h1>

            {/* Description */}
            <p
              className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed"
              style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: '1.6' }}
            >
              We deliver tailored software solutions designed to drive results. From robust enterprise systems to sleek, market-ready MVPs, our expertise ensures your software works seamlessly and scales effortlessly.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold text-base transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 rounded-xl font-semibold text-base transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                View Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div
                  className="text-3xl font-bold text-slate-900 mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Enterprise
                </div>
                <div className="text-sm text-slate-600">& Startup Solutions</div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold text-slate-900 mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Philippines
                </div>
                <div className="text-sm text-slate-600">Based & Operated</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Code/Development Illustration */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 p-8">
              <div className="space-y-4">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>

                {/* Code Lines */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-3">
                    <span className="text-slate-600">1</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-300"> solution</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-emerald-300">"tailored"</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-600">2</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-300"> approach</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-emerald-300">"pragmatic"</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-600">3</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-300"> delivery</span>
                    <span className="text-slate-400"> = </span>
                    <span className="text-emerald-300">"fast"</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-600">4</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-600">5</span>
                    <span className="text-purple-400">function</span>
                    <span className="text-yellow-300"> buildSoftware</span>
                    <span className="text-slate-400">(</span>
                    <span className="text-orange-300">requirements</span>
                    <span className="text-slate-400">) {</span>
                  </div>
                  <div className="flex gap-3 ml-6">
                    <span className="text-slate-600">6</span>
                    <span className="text-pink-400">  return</span>
                    <span className="text-blue-300"> scalable</span>
                    <span className="text-slate-400">.</span>
                    <span className="text-yellow-300">secure</span>
                    <span className="text-slate-400">().</span>
                    <span className="text-yellow-300">impactful</span>
                    <span className="text-slate-400">()</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-600">7</span>
                    <span className="text-slate-400">}</span>
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
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-blue-700" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-slate-600">Custom Solutions</div>
                  <div className="text-sm font-bold text-slate-900">Enterprise Ready</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
