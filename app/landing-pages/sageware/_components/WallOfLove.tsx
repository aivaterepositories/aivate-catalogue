'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function WallOfLove() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Analytics',
      company: 'TechCorp',
      avatar: 'SC',
      content: 'Sageware reduced our dashboard load times from 30 seconds to under 100ms. The AI predictions caught a revenue leak we never would have found manually.',
      metric: '96% time saved',
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO',
      company: 'RetailMax',
      avatar: 'MJ',
      content: 'The real-time capabilities are game-changing. We can now react to trends as they happen, not days later.',
      metric: '$2M saved annually',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Data Director',
      company: 'FinanceFlow',
      avatar: 'ER',
      content: 'Best BI tool we\'ve used. The setup was painless, and the support team is incredibly responsive.',
      metric: '3x faster insights',
    },
    {
      name: 'David Park',
      role: 'Head of Operations',
      company: 'LogiTech',
      avatar: 'DP',
      content: 'The integration library is comprehensive. We connected all our data sources in under an hour.',
      metric: '10 tools replaced',
    },
    {
      name: 'Lisa Thompson',
      role: 'CEO',
      company: 'GrowthLabs',
      avatar: 'LT',
      content: 'Sageware pays for itself. The insights we\'ve gained have directly led to better product decisions.',
      metric: '450% ROI',
    },
    {
      name: 'James Wilson',
      role: 'Analytics Lead',
      company: 'DataDrive',
      avatar: 'JW',
      content: 'The AI anomaly detection caught a critical issue before it became a major problem. Worth every penny.',
      metric: 'Issue prevented',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4"
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
          >
            Loved by data teams
          </h2>
          <p
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.6' }}
          >
            See what our customers have to say
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="h-full p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p
                  className="text-slate-700 dark:text-slate-300 mb-4"
                  style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.6' }}
                >
                  "{testimonial.content}"
                </p>

                {/* Metric Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-full mb-4">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-950 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-slate-50 text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
