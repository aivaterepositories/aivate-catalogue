'use client';

import { Zap, Lightbulb, Shield, Layout, Code, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: 'Real-Time Analytics',
    description: 'Process millions of data points per second. Get instant insights with sub-100ms query response times.',
  },
  {
    icon: Lightbulb,
    title: 'AI-Powered Predictions',
    description: 'Machine learning models predict trends, anomalies, and opportunities before they happen.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified. Bank-level encryption with role-based access control and audit logs.',
  },
  {
    icon: Layout,
    title: 'Custom Dashboards',
    description: 'Drag-and-drop builder with 100+ pre-built templates. Share dashboards with teams or embed anywhere.',
  },
  {
    icon: Code,
    title: '1000+ Integrations',
    description: 'Connect to Salesforce, HubSpot, PostgreSQL, MySQL, MongoDB, AWS, Google Cloud, and more.',
  },
  {
    icon: MessageCircle,
    title: '24/7 Expert Support',
    description: 'Live chat, email, and phone support with average response time under 90 seconds.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 font-heading">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powerful analytics tools designed for modern businesses
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-blue-950 mb-4 font-heading">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
