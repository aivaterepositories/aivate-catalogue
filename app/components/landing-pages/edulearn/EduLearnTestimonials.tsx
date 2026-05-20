'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Frontend Developer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        quote: 'EduLearn completely transformed my career. I went from zero coding knowledge to landing a job as a full-stack developer in just 8 months.',
        rating: 5,
        course: 'Web Development Bootcamp'
    },
    {
        name: 'Michael Thompson',
        role: 'UX Designer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        quote: 'The UI/UX course was exactly what I needed. The projects were practical, and I built a portfolio that helped me get hired.',
        rating: 5,
        course: 'UI/UX Design Masterclass'
    },
    {
        name: 'Jessica Lee',
        role: 'Data Analyst',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
        quote: 'As a career changer, I was nervous about learning data science. EduLearn made it accessible and fun. The community support was incredible.',
        rating: 5,
        course: 'Data Science Fundamentals'
    },
    {
        name: 'Alex Rivera',
        role: 'Marketing Manager',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
        quote: 'The digital marketing course gave me the skills to grow my business. I saw a 300% increase in engagement within 3 months.',
        rating: 5,
        course: 'Digital Marketing Strategy'
    },
    {
        name: 'Emily Watson',
        role: 'Product Manager',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
        quote: 'EduLearn helped me transition into product management. The instructors are industry experts who truly care about student success.',
        rating: 5,
        course: 'Product Management Pro'
    },
    {
        name: 'David Park',
        role: 'Entrepreneur',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        quote: 'I learned everything I needed to launch my startup. The business courses are practical, actionable, and worth every penny.',
        rating: 5,
        course: 'Business Strategy Essentials'
    }
];

export const EduLearnTestimonials: React.FC = () => {
    return (
        <section className="relative py-20 px-6 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #14B8A6 1px, transparent 1px), linear-gradient(to bottom, #14B8A6 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edulearn-light border border-edulearn-primary/20 mb-6"
                    >
                        <Star className="w-4 h-4 text-edulearn-primary fill-edulearn-primary" />
                        <span className="text-sm font-semibold text-edulearn-primary">Student Success Stories</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
                    >
                        Loved by{' '}
                        <span className="text-mint">
                            Thousands
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        See how our students transformed their careers and achieved their goals
                    </motion.p>
                </div>

                {/* Testimonials Grid - NO CAROUSEL */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Quote className="w-16 h-16 text-edulearn-primary" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 + i * 0.05 }}
                                    >
                                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                                &quot;{testimonial.quote}&quot;
                            </p>

                            {/* Course Tag */}
                            <div className="inline-block px-3 py-1 rounded-full bg-edulearn-light border border-edulearn-primary/20 text-xs font-semibold text-edulearn-primary mb-6">
                                {testimonial.course}
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                                <div className="relative">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-lg"
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-edulearn-primary to-edulearn-secondary rounded-full border-2 border-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                                </div>
                            </div>

                            {/* Hover Gradient Border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-edulearn-primary to-edulearn-secondary opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
