'use client';

import { useState, FormEvent } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function TrialCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate API call - replace with Supabase integration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Integrate with Supabase
    // const { data, error } = await supabase.from('trials').insert({ email });

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="trial" className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-12 lg:p-16 text-center shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 font-heading">
            Start Your Free 14-Day Trial
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            No credit card required. Full access to all Professional features. Cancel anytime.
          </p>

          {/* Sign-up Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="trial-email" className="sr-only">
                  Work email address
                </label>
                <input
                  type="email"
                  id="trial-email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  disabled={isSubmitting || isSuccess}
                  className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus-visible:border-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/20 transition-all duration-200 text-blue-950 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-describedby={error ? 'email-error' : undefined}
                />
                {error && (
                  <p id="email-error" className="text-red-600 text-sm mt-2 text-left">
                    {error}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white rounded-lg font-semibold transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 whitespace-nowrap disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Starting...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Success!</span>
                  </>
                ) : (
                  'Start Free Trial'
                )}
              </button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-600" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
