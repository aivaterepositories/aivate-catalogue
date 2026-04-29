'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Heart } from 'lucide-react';

const footerLinks = {
    'Courses': ['Web Development', 'Data Science', 'UI/UX Design', 'Digital Marketing', 'Business'],
    'Company': ['About Us', 'Careers', 'Press', 'Blog', 'Partners'],
    'Resources': ['Help Center', 'Community', 'Tutorials', 'Webinars', 'Certifications'],
    'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility']
};

const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
];

export const EduLearnFooter: React.FC = () => {
    return (
        <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                {/* Newsletter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 pb-16 border-b border-white/10"
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-3">Stay Updated</h3>
                            <p className="text-gray-400">Get the latest courses, tips, and exclusive offers delivered to your inbox.</p>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-edulearn-primary transition-colors"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-edulearn-primary to-edulearn-secondary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h4 className="font-bold text-lg mb-4">{category}</h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-edulearn-primary transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Logo & Copyright */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-edulearn-primary to-edulearn-secondary" />
                                <span className="text-xl font-bold">EduLearn</span>
                            </div>
                            <p className="text-gray-400 text-sm flex items-center gap-2 justify-center md:justify-start">
                                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> for learners worldwide
                            </p>
                            <p className="text-gray-500 text-sm mt-2">© 2024 EduLearn. All rights reserved.</p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-edulearn-primary hover:to-edulearn-secondary flex items-center justify-center transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
