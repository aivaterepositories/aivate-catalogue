'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap } from 'lucide-react';

const plans = [
    {
        name: 'Free',
        price: 0,
        description: 'Perfect for exploring',
        features: [
            'Access to 50+ free courses',
            'Community forum access',
            'Basic course certificates',
            'Mobile app access'
        ],
        cta: 'Get Started Free',
        popular: false,
        gradient: 'from-gray-500 to-gray-600',
        bgGradient: 'from-gray-50 to-gray-100'
    },
    {
        name: 'Pro',
        price: 29,
        description: 'For serious learners',
        features: [
            'Unlimited course access',
            'Premium certificates',
            'Priority support',
            'Downloadable resources',
            'Live Q&A sessions',
            'Career guidance'
        ],
        cta: 'Start Free Trial',
        popular: true,
        gradient: 'from-edulearn-primary to-edulearn-secondary',
        bgGradient: 'from-edulearn-light to-emerald-50'
    },
    {
        name: 'Team',
        price: 99,
        description: 'For organizations',
        features: [
            'Everything in Pro',
            'Up to 20 team members',
            'Team analytics dashboard',
            'Dedicated account manager',
            'Custom learning paths',
            'API access'
        ],
        cta: 'Contact Sales',
        popular: false,
        gradient: 'from-purple-600 to-pink-600',
        bgGradient: 'from-purple-50 to-pink-50'
    }
];

export const EduLearnPricing: React.FC = () => {
    return (
        <section className="relative py-20 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-edulearn-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
                    >
                        <Zap className="w-4 h-4 text-edulearn-primary" />
                        <span className="text-sm font-semibold text-slate-700">Flexible Pricing</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
                    >
                        Choose Your{' '}
                        <span className="text-mint">
                            Growth Path
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Unlock your potential with plans designed for individuals and teams
                    </motion.p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: plan.popular ? 1.02 : 1.05 }}
                            className={`relative ${plan.popular ? 'md:scale-110 z-10' : ''}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-edulearn-primary to-edulearn-secondary text-white text-sm font-bold shadow-lg">
                                        <Sparkles className="w-4 h-4" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className={`relative h-full rounded-3xl p-8 border-2 transition-all duration-500 ${plan.popular
                                ? 'bg-white border-edulearn-primary shadow-2xl'
                                : 'bg-white border-gray-200 shadow-lg hover:border-edulearn-primary/30'
                                }`}>
                                {/* Plan Header */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                    <p className="text-gray-600">{plan.description}</p>
                                </div>

                                {/* Price */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                                        <span className="text-gray-600">/month</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full py-4 rounded-2xl font-bold text-lg mb-8 transition-all duration-300 ${plan.popular
                                        ? 'bg-gradient-to-r from-edulearn-primary to-edulearn-secondary text-white shadow-lg hover:shadow-xl'
                                        : 'bg-white border-2 border-gray-200 text-slate-700 hover:border-edulearn-primary hover:text-edulearn-primary'
                                        }`}
                                >
                                    {plan.cta}
                                </motion.button>

                                {/* Features */}
                                <div className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + i * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                                                <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Decorative Gradient */}
                                {plan.popular && (
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-edulearn-primary/5 to-edulearn-secondary/5 pointer-events-none" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Money Back Guarantee */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm">
                        <Shield className="w-5 h-5 text-edulearn-primary" />
                        <span className="text-sm font-semibold text-gray-700">30-day money-back guarantee</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

function Shield(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );
}
