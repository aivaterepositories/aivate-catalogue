'use client';

import { Check, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function PricingModern() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams',
      monthlyPrice: 49,
      annualPrice: 41,
      features: [
        'Up to 5 users',
        '5 data sources',
        '10 custom dashboards',
        'Basic integrations',
        'Email support',
        '7-day data retention',
      ],
    },
    {
      name: 'Professional',
      description: 'Most popular choice',
      monthlyPrice: 149,
      annualPrice: 104,
      features: [
        'Up to 20 users',
        'Unlimited data sources',
        'Unlimited dashboards',
        'AI-powered insights',
        'All 1000+ integrations',
        '24/7 priority support',
        'Advanced API access',
        '90-day data retention',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: null,
      annualPrice: null,
      features: [
        'Unlimited users',
        'Dedicated account manager',
        'Custom SLA agreements',
        'On-premise deployment',
        'White-label options',
        'Custom integrations',
        'Unlimited data retention',
        'Advanced security',
      ],
      custom: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-white">
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
            Simple, transparent pricing
          </h2>
          <p
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.6' }}
          >
            Choose the plan that's right for your team
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                !isAnnual
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 relative ${
                isAnnual
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-emerald-500 text-white text-xs font-bold rounded-full">
                -30%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer"
            >
              <div
                className={`h-full p-8 border rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular
                    ? 'border-indigo-600 bg-gradient-to-br from-indigo-50 to-purple-50
                    : 'border-slate-200 bg-white
                }`}
              >
                {/* Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold shadow-lg">
                    <Zap className="w-4 h-4 fill-white" strokeWidth={1.5} />
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3
                    className="text-2xl font-bold text-slate-900 mb-2"
                    style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {plan.custom ? (
                    <div>
                      <div className="text-4xl font-bold text-slate-900">Custom</div>
                      <div className="text-sm text-slate-600 mt-1">Contact sales</div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-slate-900">
                          ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-slate-600">/month</span>
                      </div>
                      {isAnnual && (
                        <div className="text-sm text-emerald-600 mt-1">
                          Billed annually (${plan.annualPrice! * 12}/year)
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={plan.custom ? '#contact' : '#demo'}
                  className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md mb-6 focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    plan.popular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white focus-visible:ring-indigo-600'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 focus-visible:ring-slate-900'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {plan.custom ? 'Contact Sales' : 'Start Free Trial'}
                </a>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'text-indigo-600 : 'text-emerald-600
                        }`}
                        strokeWidth={1.5}
                      />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm font-medium text-emerald-700">
              30-day money-back guarantee • No questions asked
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
