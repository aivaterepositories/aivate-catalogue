'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Award } from 'lucide-react';

export const EduLearnHero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -100]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const stats = [
        { icon: Users, value: 50000, label: 'Active Students', suffix: '+' },
        { icon: Award, value: 5000, label: 'Courses', suffix: '+' },
        { icon: TrendingUp, value: 98, label: 'Success Rate', suffix: '%' }
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-edulearn-light/30 to-slate-50">
            {/* Animated Background Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-edulearn-primary/20 to-edulearn-primary/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-edulearn-accent/20 to-edulearn-accent/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-edulearn-primary/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                />
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-edulearn-primary/20 shadow-lg"
                        >
                            <Sparkles className="w-4 h-4 text-edulearn-primary" />
                            <span className="text-sm font-semibold text-slate-700">Trusted by 50,000+ learners worldwide</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="text-6xl lg:text-7xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-slate-900">Transform Your</span>
                            <br />
                            <span className="text-mint">
                                Future Today
                            </span>
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            className="text-xl text-gray-600 leading-relaxed max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Master in-demand skills with world-class instructors.
                            Learn at your own pace, earn recognized certificates, and
                            join a thriving community of learners.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(13, 148, 136, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-edulearn-primary to-edulearn-secondary text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Start Learning Free
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/80 backdrop-blur-md border-2 border-edulearn-primary/30 text-edulearn-primary rounded-2xl font-bold text-lg hover:border-edulearn-primary transition-all duration-300"
                            >
                                Explore Courses
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-6 pt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="flex items-center justify-center mb-2">
                                        <stat.icon className="w-5 h-5 text-edulearn-primary" />
                                    </div>
                                    <div className="text-3xl font-bold text-slate-900">
                                        {stat.value.toLocaleString()}{stat.suffix}
                                    </div>
                                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        style={{ y: y1 }}
                        className="relative"
                    >
                        <motion.div
                            style={{
                                rotateY: mousePosition.x,
                                rotateX: -mousePosition.y
                            }}
                            className="relative perspective-1000"
                        >
                            {/* Main Card */}
                            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                                    alt="Students learning"
                                    className="w-full h-64 object-cover rounded-2xl mb-6"
                                />

                                {/* Floating Achievement Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute -right-6 top-1/4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-100 max-w-[200px]"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-edulearn-primary to-edulearn-secondary flex items-center justify-center">
                                            <Award className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-semibold">Achievement</div>
                                            <div className="text-sm font-bold text-slate-900">Course Complete!</div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating Progress Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 }}
                                    className="absolute -left-6 bottom-1/4 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-100"
                                >
                                    <div className="text-xs text-gray-500 font-semibold mb-2">Learning Progress</div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-edulearn-primary to-edulearn-secondary"
                                                initial={{ width: 0 }}
                                                animate={{ width: "75%" }}
                                                transition={{ delay: 1.2, duration: 1 }}
                                            />
                                        </div>
                                        <span className="text-sm font-bold text-slate-900">75%</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-edulearn-primary/10 to-edulearn-secondary/10 rounded-full blur-3xl" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
