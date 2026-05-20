'use client';

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BookOpen, Users, Award, TrendingUp, Clock, Shield } from 'lucide-react';

const features = [
    {
        icon: BookOpen,
        title: 'Expert-Led Courses',
        description: 'Learn from industry professionals with real-world experience',
        gradient: 'from-teal-500 to-emerald-500',
        bgGradient: 'from-teal-50 to-emerald-50'
    },
    {
        icon: Users,
        title: 'Vibrant Community',
        description: 'Connect with 50,000+ learners and grow together',
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
        icon: Award,
        title: 'Recognized Certificates',
        description: 'Earn credentials valued by top employers worldwide',
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 to-pink-50'
    },
    {
        icon: TrendingUp,
        title: 'Career Growth',
        description: 'Track your progress and achieve your professional goals',
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-50'
    },
    {
        icon: Clock,
        title: 'Learn at Your Pace',
        description: 'Flexible schedules that fit your lifestyle',
        gradient: 'from-green-500 to-teal-500',
        bgGradient: 'from-green-50 to-teal-50'
    },
    {
        icon: Shield,
        title: 'Lifetime Access',
        description: 'Once enrolled, access your courses forever',
        gradient: 'from-indigo-500 to-blue-500',
        bgGradient: 'from-indigo-50 to-blue-50'
    }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className="group relative"
        >
            <div className={`relative h-full bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-10 blur-xl`} />
                </div>

                {/* Icon Container */}
                <motion.div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />

                    {/* Sparkle Effect */}
                    <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>

                {/* Content */}
                <div className="relative">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-edulearn-primary group-hover:to-edulearn-secondary transition-all duration-300">
                        {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                    </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
        </motion.div>
    );
};

export const EduLearnFeatures: React.FC = () => {
    return (
        <section className="relative py-20 px-6 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #14B8A6 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
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
                        <div className="w-2 h-2 rounded-full bg-edulearn-primary animate-pulse" />
                        <span className="text-sm font-semibold text-edulearn-primary">Why Choose EduLearn</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
                    >
                        Everything You Need to{' '}
                        <span className="text-mint">
                            Succeed
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Join thousands of learners who have transformed their careers with our comprehensive platform
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
