'use client';

import { Zap, Brain, Shield, Puzzle, Clock, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export function BentoFeatures() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Sub-100ms query response times on datasets with billions of rows.',
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      borderColor: 'border-amber-200 dark:border-amber-800',
      span: 'lg:col-span-2',
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Predictive analytics and anomaly detection powered by machine learning.',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      borderColor: 'border-purple-200 dark:border-purple-800',
      span: 'lg:col-span-1',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified with bank-level encryption.',
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      span: 'lg:col-span-1',
    },
    {
      icon: Puzzle,
      title: '1000+ Integrations',
      description: 'Connect seamlessly with Salesforce, HubSpot, AWS, and more.',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      span: 'lg:col-span-2',
    },
    {
      icon: Clock,
      title: 'Real-Time Dashboards',
      description: 'Custom dashboards that update in milliseconds as your data changes.',
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/30',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      span: 'lg:col-span-1',
    },
    {
      icon: Headphones,
      title: '24/7 Expert Support',
      description: 'Get help from our team with 90-second average response time.',
      color: 'text-rose-600 dark:text-rose-400',
      bgColor: 'bg-rose-50 dark:bg-rose-950/30',
      borderColor: 'border-rose-200 dark:border-rose-800',
      span: 'lg:col-span-1',
    },
  ];

  return (
    <section id="features" className="py-24 px-4 bg-white dark:bg-slate-950">
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
            Everything you need to scale
          </h2>
          <p
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.6' }}
          >
            Powerful features designed for modern data teams
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${feature.span} group cursor-pointer`}
              >
                <div
                  className={`h-full p-8 ${feature.bgColor} border ${feature.borderColor} rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className={`w-12 h-12 ${feature.bgColor} border ${feature.borderColor} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-slate-600 dark:text-slate-400"
                    style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.6' }}
                  >
                    {feature.description}
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
