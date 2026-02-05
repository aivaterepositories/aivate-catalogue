'use client';

import { Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function SimplePricing() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Fira Code, monospace' }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            No hidden fees. No surprises. Just powerful analytics.
          </p>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 rounded-full filter blur-3xl" />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-8">
              <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span className="text-sm font-medium">Most Popular Choice</span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-2xl font-medium">$</span>
                <span
                  className="text-7xl md:text-8xl font-bold"
                  style={{ fontFamily: 'Fira Code, monospace' }}
                >
                  149
                </span>
                <span className="text-2xl font-medium">/month</span>
              </div>
              <p className="text-white/80">
                Per organization • Unlimited users • Cancel anytime
              </p>
            </div>

            {/* Features */}
            <div className="max-w-md mx-auto space-y-4 mb-10">
              {[
                'Unlimited data sources & dashboards',
                'AI-powered predictive analytics',
                'Sub-100ms query performance',
                'SOC 2 Type II security',
                '1000+ pre-built integrations',
                '24/7 priority support',
                'Advanced API access',
                'Custom white-labeling',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-3 text-left"
                >
                  <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              href="#demo"
              className="inline-flex items-center justify-center px-12 py-5 bg-white text-indigo-600 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              style={{ fontFamily: 'Fira Sans, sans-serif' }}
            >
              Start 14-Day Free Trial
            </motion.a>

            <p className="text-white/70 text-sm mt-4">
              No credit card required • Full access • Setup in 5 minutes
            </p>
          </div>
        </motion.div>

        {/* Enterprise Option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-8 bg-gray-50 border border-gray-200 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Fira Code, monospace' }}>
            Need Enterprise Features?
          </h3>
          <p className="text-gray-600 mb-4">
            Custom SLAs, dedicated support, on-premise deployment, and more.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold transition-colors duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
          >
            Talk to Sales
          </a>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-2 text-gray-600"
        >
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="font-medium">30-day money-back guarantee • No questions asked</span>
        </motion.div>
      </div>
    </section>
  );
}
