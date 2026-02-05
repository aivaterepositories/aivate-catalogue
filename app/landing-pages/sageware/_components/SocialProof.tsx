'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Sageware cut our reporting time from 6 hours to 15 minutes. Game changer.",
    author: "Sarah Chen",
    role: "VP of Analytics",
    company: "TechCorp",
    rating: 5,
    metric: "96% time saved",
  },
  {
    quote: "Finally, an analytics tool that doesn't require a PhD to operate.",
    author: "Marcus Johnson",
    role: "Data Director",
    company: "RetailMax",
    rating: 5,
    metric: "$2M saved annually",
  },
  {
    quote: "The AI predictions caught 3 critical issues before they impacted revenue.",
    author: "Emily Rodriguez",
    role: "Head of BI",
    company: "FinanceFlow",
    rating: 5,
    metric: "3x faster decisions",
  },
];

export function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
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
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Fira Code, monospace' }}
          >
            Loved by Data Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what data leaders are saying.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/80 border border-gray-200 rounded-3xl p-12 md:p-16 shadow-2xl relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-indigo-600" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 leading-tight">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-gray-900 text-lg mb-1">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                </div>
              </div>

              {/* Metric Badge */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-700 font-bold text-sm">
                  {testimonials[activeIndex].metric}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-200 rounded-full cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-indigo-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </div>

        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-center text-gray-500 text-sm uppercase tracking-wide mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {['TechCorp', 'DataFlow', 'RetailMax', 'FinanceFlow', 'CloudSync', 'NexGen'].map(
              (company) => (
                <div
                  key={company}
                  className="text-2xl font-bold text-gray-600"
                  style={{ fontFamily: 'Fira Code, monospace' }}
                >
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
