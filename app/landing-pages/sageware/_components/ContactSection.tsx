'use client';

import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - TODO: Integrate with actual contact form
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}
            >
              Let's Build Something
              <br />
              Great Together
            </h2>
            <p
              className="text-xl text-slate-600 mb-8"
              style={{ fontFamily: 'Open Sans, sans-serif', lineHeight: '1.6' }}
            >
              Looking for a partner who understands your challenges and delivers solutions that work? Get in touch today.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-700" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Email Us</div>
                  <a
                    href="mailto:hello@sageware.io"
                    className="text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    hello@sageware.io
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 border border-emerald-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Call Us</div>
                  <a
                    href="tel:+639617079255"
                    className="text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    +63 961 707 9255
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 border border-amber-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Visit Us</div>
                  <p className="text-slate-600 text-sm">
                    Unit 1015, 10th Floor, Parkway Corporate Center
                    <br />
                    Corporate Ave., Filinvest City, Alabang
                    <br />
                    Muntinlupa, 1780, Philippines
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}
              >
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus-visible:border-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus-visible:border-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    disabled={isSubmitting || isSuccess}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus-visible:border-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-700"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : isSuccess ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
