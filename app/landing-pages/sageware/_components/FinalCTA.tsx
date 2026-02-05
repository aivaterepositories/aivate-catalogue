'use client';

import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

export function FinalCTA() {
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
    <section id="demo" className="relative py-32 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: 'Fira Code, monospace' }}
          >
            Ready to Transform
            <br />
            Your Data Strategy?
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            Join 10,000+ teams making faster, smarter decisions with Sageware.
            Start your free trial today.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="final-email" className="sr-only">
                  Work email
                </label>
                <input
                  type="email"
                  id="final-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  disabled={isSubmitting || isSuccess}
                  className="w-full px-6 py-5 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-xl text-white placeholder-white/60 focus-visible:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white text-indigo-600 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ fontFamily: 'Fira Sans, sans-serif' }}
              >
                {isSubmitting ? (
                  'Starting...'
                ) : isSuccess ? (
                  'Success!'
                ) : (
                  <>
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
            >
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Enterprise Security</h3>
              <p className="text-white/70 text-sm">SOC 2 Type II certified with bank-level encryption</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
            >
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">Quick Setup</h3>
              <p className="text-white/70 text-sm">Go from signup to first insight in under 5 minutes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
            >
              <Award className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-white font-bold mb-2">No Risk</h3>
              <p className="text-white/70 text-sm">14-day free trial with 30-day money-back guarantee</p>
            </motion.div>
          </div>

          {/* Fine Print */}
          <p className="text-white/60 text-sm mt-8">
            No credit card required • Cancel anytime • Full feature access
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
