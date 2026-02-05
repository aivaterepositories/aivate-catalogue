'use client';

import { Zap, Settings, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: 'Pragmatic Approach',
      description: 'We focus on delivering value fast. Our development methods are designed to produce impactful results in the shortest time possible.',
      color: 'amber',
    },
    {
      icon: Settings,
      title: 'Tailored Solutions',
      description: 'Every project we take on is customized to fit your unique needs, whether it\'s improving workflows or building engaging consumer apps.',
      color: 'indigo',
    },
    {
      icon: Award,
      title: 'Trusted Expertise',
      description: 'With a deep understanding of both business and tech, we help companies scale and simplify operations through smart automation and insights.',
      color: 'emerald',
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
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
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
          >
            Why Choose Us?
          </h2>
          <p
            className="text-xl text-slate-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.6' }}
          >
            Partner with experts who understand your challenges
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const colorClasses = {
              amber: {
                icon: 'text-amber-600',
                bg: 'bg-amber-50',
                border: 'border-amber-200',
              },
              indigo: {
                icon: 'text-indigo-600',
                bg: 'bg-indigo-50',
                border: 'border-indigo-200',
              },
              emerald: {
                icon: 'text-emerald-600',
                bg: 'bg-emerald-50',
                border: 'border-emerald-200',
              },
            }[reason.color];

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${colorClasses.bg} ${colorClasses.border} border rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-8 h-8 ${colorClasses.icon}`} strokeWidth={1.5} />
                </div>
                <h3
                  className="text-2xl font-bold text-slate-900 mb-3"
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-slate-600"
                  style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.6' }}
                >
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
