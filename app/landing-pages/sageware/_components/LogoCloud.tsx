'use client';

import { motion } from 'framer-motion';

export function LogoCloud() {
  const companies = [
    'Stripe',
    'Netflix',
    'Airbnb',
    'Uber',
    'Spotify',
    'Adobe',
  ];

  return (
    <section className="py-16 px-4 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
            Trusted by industry leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-2xl font-bold text-slate-400" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
                {company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
