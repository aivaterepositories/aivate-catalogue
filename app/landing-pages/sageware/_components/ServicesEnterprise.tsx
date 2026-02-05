'use client';

import { Building2, Globe, Layout, Database, Link2, CreditCard, Shield, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export function ServicesEnterprise() {
  const services = [
    {
      icon: Building2,
      title: 'Custom Software',
      description: 'Tailored enterprise-grade solutions to address your specific challenges.',
    },
    {
      icon: Globe,
      title: 'Web and Mobile Apps',
      description: 'Build powerful web and native mobile apps for your business.',
    },
    {
      icon: Layout,
      title: 'Custom Admin Interfaces',
      description: 'Enhance efficiency with enterprise-grade back-office systems.',
    },
    {
      icon: Database,
      title: 'Data Consolidation & Insights',
      description: 'Consolidate data with data lakes and data warehouses. See data in realtime.',
    },
    {
      icon: Link2,
      title: 'Enterprise Integration',
      description: 'Connect and unify your systems for smoother operations.',
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Streamlined, secure payment integrations for your business.',
    },
    {
      icon: Shield,
      title: 'System Support & Maintenance',
      description: 'Keep your systems secure, reliable, and up-to-date.',
    },
    {
      icon: Wrench,
      title: 'Project Rescue',
      description: 'Revive and complete struggling projects with precision.',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white">
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
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
          >
            For Enterprises
          </h2>
          <p
            className="text-xl text-slate-600 max-w-3xl"
            style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.6' }}
          >
            Enterprise-grade solutions designed to streamline operations and drive growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="h-full p-6 bg-slate-50 border border-slate-200 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200">
                  <div className="w-12 h-12 bg-indigo-100 border border-indigo-200 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-lg font-bold text-slate-900 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-slate-600 text-sm"
                    style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.6' }}
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
