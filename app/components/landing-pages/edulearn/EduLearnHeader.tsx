'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { EduLearnLogo } from './EduLearnLogo';

const navItems = [
    { name: 'Courses', href: '#courses' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' }
];

export const EduLearnHeader: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center gap-3 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    >
                        <EduLearnLogo className="w-10 h-10" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-edulearn-primary to-edulearn-secondary bg-clip-text text-transparent">
                            EduLearn
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-edulearn-primary font-semibold transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-edulearn-primary to-edulearn-secondary group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="text-gray-700 hover:text-edulearn-primary font-semibold transition-colors">
                            Sign In
                        </button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-edulearn-primary to-edulearn-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-700 hover:text-edulearn-primary transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-6 py-6 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-gray-700 hover:text-edulearn-primary font-semibold transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-4 space-y-3">
                                <button className="w-full py-3 text-gray-700 hover:text-edulearn-primary font-semibold transition-colors">
                                    Sign In
                                </button>
                                <button className="w-full py-3 bg-gradient-to-r from-edulearn-primary to-edulearn-secondary text-white rounded-xl font-semibold shadow-lg">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
