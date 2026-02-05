'use client';

import { X, Check, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  'Waiting hours for dashboards to load',
  'Juggling 10+ different analytics tools',
  'Missing critical business trends',
  'Paying for unused enterprise licenses',
];

const solutions = [
  'Sub-100ms query responses',
  'All-in-one unified platform',
  'AI detects patterns automatically',
  'Pay only for what you use',
];

export function ProblemSolution() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Fira Code, monospace' }}
          >
            Stop Struggling.<br />
            Start <span className="text-blue-700">Scaling</span>.
          </h2>
        </motion.div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Before - Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-xl bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    style={{ fontFamily: 'Fira Code, monospace' }}
                  >
                    Without Sageware
                  </h3>
                  <p className="text-gray-600 text-sm">Traditional analytics</p>
                </div>
              </div>

              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={problem}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{problem}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-medium text-sm">
                  Result: Slow decisions, lost opportunities, wasted budget
                </p>
              </div>
            </div>
          </motion.div>

          {/* After - Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-blue-200 rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full filter blur-3xl opacity-30" />

              <div className="flex items-center gap-3 mb-8 relative">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    style={{ fontFamily: 'Fira Code, monospace' }}
                  >
                    With Sageware
                  </h3>
                  <p className="text-blue-700 text-sm font-medium">AI-powered platform</p>
                </div>
              </div>

              <div className="space-y-4 relative">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-200"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900 font-medium">{solution}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg relative">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <p className="text-green-700 font-bold text-sm">
                    Result: 10x faster insights, 50% cost savings, 300% ROI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
            style={{ fontFamily: 'Fira Sans, sans-serif' }}
          >
            See the Difference Yourself
            <TrendingUp className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
