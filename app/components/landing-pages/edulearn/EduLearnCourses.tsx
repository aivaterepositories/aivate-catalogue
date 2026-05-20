'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Users, Clock, TrendingUp, Filter } from 'lucide-react';

const categories = ['All', 'Design', 'Development', 'Business', 'Marketing'];

const courses = [
    {
        id: 1,
        title: 'Advanced UI/UX Design Masterclass',
        instructor: 'Sarah Chen',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
        rating: 4.9,
        students: '12.5k',
        duration: '24 hours',
        price: 89,
        level: 'Advanced',
        color: 'from-purple-500 to-pink-500'
    },
    {
        id: 2,
        title: 'Full-Stack Web Development Bootcamp',
        instructor: 'Michael Torres',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
        rating: 4.8,
        students: '18.2k',
        duration: '40 hours',
        price: 129,
        level: 'Intermediate',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 3,
        title: 'Digital Marketing Strategy 2024',
        instructor: 'Emma Wilson',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
        rating: 4.7,
        students: '9.8k',
        duration: '16 hours',
        price: 79,
        level: 'Beginner',
        color: 'from-orange-500 to-red-500'
    },
    {
        id: 4,
        title: 'Business Analytics & Data Science',
        instructor: 'David Park',
        category: 'Business',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        rating: 4.9,
        students: '15.3k',
        duration: '32 hours',
        price: 149,
        level: 'Advanced',
        color: 'from-teal-500 to-emerald-500'
    },
    {
        id: 5,
        title: 'Mobile App Development with React Native',
        instructor: 'Lisa Anderson',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
        rating: 4.8,
        students: '11.2k',
        duration: '28 hours',
        price: 119,
        level: 'Intermediate',
        color: 'from-indigo-500 to-purple-500'
    },
    {
        id: 6,
        title: 'Brand Identity Design Fundamentals',
        instructor: 'Alex Rivera',
        category: 'Design',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
        rating: 4.7,
        students: '8.9k',
        duration: '18 hours',
        price: 69,
        level: 'Beginner',
        color: 'from-pink-500 to-rose-500'
    }
];

export const EduLearnCourses: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredCourses = selectedCategory === 'All'
        ? courses
        : courses.filter(course => course.category === selectedCategory);

    return (
        <section className="relative py-20 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-edulearn-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
                    >
                        <TrendingUp className="w-4 h-4 text-edulearn-primary" />
                        <span className="text-sm font-semibold text-slate-700">Popular Courses</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
                    >
                        Start Learning{' '}
                        <span className="text-mint">
                            Today
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Explore our most popular courses selected by industry experts
                    </motion.p>
                </div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                ? 'bg-gradient-to-r from-edulearn-primary to-edulearn-secondary text-white shadow-lg'
                                : 'bg-white text-gray-700 border border-gray-200 hover:border-edulearn-primary/30'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Courses Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                                    {/* Level Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-700">
                                        {course.level}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    {/* Category */}
                                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${course.color} text-white text-xs font-semibold`}>
                                        {course.category}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-edulearn-primary transition-colors">
                                        {course.title}
                                    </h3>

                                    {/* Instructor */}
                                    <p className="text-sm text-gray-600">
                                        by <span className="font-semibold text-slate-700">{course.instructor}</span>
                                    </p>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            <span className="font-bold text-slate-900">{course.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            <span>{course.students}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{course.duration}</span>
                                        </div>
                                    </div>

                                    {/* Price & CTA */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="text-3xl font-bold text-slate-900">
                                            ${course.price}
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-2 bg-gradient-to-r from-edulearn-primary to-edulearn-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                                        >
                                            Enroll Now
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};
