'use client';

import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

export function FinalCTAModern() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - TODO: Integrate with Supabase
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="demo" className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}
          >
            Ready to scale your data strategy?
          </h2>
          <p
            className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: '1.6' }}
          >
            Join 10,000+ teams making faster, smarter decisions with Sageware
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label htmlFor="cta-email" className="sr-only">
                  Work email
                </label>
                <input
                  type="email"
                  id="cta-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  disabled={isSubmitting || isSuccess}
                  className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus-visible:border-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Open Sans, sans-serif' }}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-700"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {isSubmitting ? (
                  'Starting...'
                ) : isSuccess ? (
                  'Success!'
                ) : (
                  <>
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                  </>
                )}
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-3">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </form>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white border border-slate-200 rounded-2xl"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Enterprise Security</h3>
              <p className="text-sm text-slate-600">
                SOC 2 Type II certified with bank-level encryption
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-white border border-slate-200 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">Quick Setup</h3>
              <p className="text-sm text-slate-600">
                Go from signup to first insight in under 5 minutes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-white border border-slate-200 rounded-2xl"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">No Risk</h3>
              <p className="text-sm text-slate-600">
                14-day free trial with 30-day money-back guarantee
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
