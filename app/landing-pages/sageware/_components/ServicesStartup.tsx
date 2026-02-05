'use client';

import { Rocket, TrendingUp, UserCog, Search, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export function ServicesStartup() {
  const services = [
    {
      icon: Rocket,
      title: 'MVP Development',
      description: 'Get to market faster with a functional, market-ready product.',
    },
    {
      icon: TrendingUp,
      title: 'Product Commercialization',
      description: 'Turn your MVP into a scalable, market-ready product.',
    },
    {
      icon: UserCog,
      title: 'Fractional CTO',
      description: 'Get technical leadership without the full-time cost.',
    },
    {
      icon: Search,
      title: 'Development Process Audit',
      description: 'Identify and address inefficiencies in your development workflows.',
    },
    {
      icon: Code,
      title: 'Codebase Audit',
      description: 'Ensure your foundation is clean, scalable, and ready to grow.',
    },
  ];

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}
          >
            For Startups
          </h2>
          <p
            className="text-xl text-slate-600 max-w-3xl"
            style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: '1.6' }}
          >
            Launch and scale your startup with expert technical guidance
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-full p-8 bg-white border border-slate-200 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-200">
                  <div className="w-12 h-12 bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-slate-600"
                    style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: '1.6' }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
