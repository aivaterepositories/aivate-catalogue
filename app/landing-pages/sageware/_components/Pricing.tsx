'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams',
    monthlyPrice: 49,
    annualPrice: 34,
    features: [
      '5 data sources',
      '10 custom dashboards',
      '50GB data storage',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    description: 'For growing teams',
    monthlyPrice: 149,
    annualPrice: 104,
    popular: true,
    features: [
      'Unlimited data sources',
      'Unlimited dashboards',
      '500GB data storage',
      'AI-powered insights',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    custom: true,
    features: [
      'Unlimited everything',
      'Dedicated account manager',
      'Custom integrations',
      '99.99% SLA guarantee',
      '24/7 phone support',
    ],
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
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
              Pricing Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 font-heading">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Start free, scale as you grow. All plans include 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 cursor-pointer ${
                  !isAnnual
                    ? 'bg-white text-blue-950 shadow-sm'
                    : 'text-slate-600 hover:text-blue-950'
                }`}
                aria-pressed={!isAnnual}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 cursor-pointer ${
                  isAnnual
                    ? 'bg-white text-blue-950 shadow-sm'
                    : 'text-slate-600 hover:text-blue-950'
                }`}
                aria-pressed={isAnnual}
              >
                Annual{' '}
                <span className="text-blue-600 text-sm ml-1">(Save 30%)</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'border-2 border-blue-600 shadow-2xl scale-105 bg-white'
                  : plan.name === 'Enterprise'
                  ? 'bg-blue-950 text-white border border-gray-700'
                  : 'border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6 mt-2">
                <h3
                  className={`text-2xl font-bold mb-2 font-heading ${
                    plan.name === 'Enterprise' ? 'text-white' : 'text-blue-950'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`${
                    plan.name === 'Enterprise' ? 'text-gray-300' : 'text-slate-600'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                {plan.custom ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">Custom</span>
                  </div>
                ) : (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-5xl font-bold ${
                          plan.popular ? 'text-blue-950' : 'text-blue-950'
                        }`}
                      >
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span
                        className={`${
                          plan.name === 'Enterprise' ? 'text-gray-400' : 'text-slate-600'
                        }`}
                      >
                        /month
                      </span>
                    </div>
                    <p
                      className={`text-sm mt-2 ${
                        plan.name === 'Enterprise' ? 'text-gray-400' : 'text-slate-500'
                      }`}
                    >
                      Up to {plan.name === 'Starter' ? '5' : '20'} users
                    </p>
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.name === 'Enterprise' ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    />
                    <span
                      className={`${
                        plan.name === 'Enterprise' ? 'text-gray-300' : 'text-slate-700'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#trial"
                className={`block w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  plan.popular
                    ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg focus-visible:ring-amber-500'
                    : plan.name === 'Enterprise'
                    ? 'bg-white hover:bg-gray-100 text-blue-950 focus-visible:ring-white'
                    : 'bg-white hover:bg-blue-50 text-blue-900 border-2 border-blue-600 focus-visible:ring-blue-600'
                }`}
              >
                {plan.custom ? 'Contact Sales' : 'Start Free Trial'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
