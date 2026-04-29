'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Heart,
    ShieldCheck,
    Clock,
    ArrowRight,
    Star,
    CheckCircle2,
    Smile,
    PhoneCall,
    Stethoscope,
    ChevronDown
} from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Marketing Director, San Francisco",
        content: "After struggling with anxiety for years, I finally found help through MindWell. My therapist really gets me, and the flexible scheduling means I can fit sessions into my busy life.",
        img: "https://i.pravatar.cc/100?img=1"
    },
    {
        name: "Michael Rodriguez",
        role: "Engineer, Austin",
        content: "My wellness coach helped me lose 35 pounds and completely transform my relationship with food. The accountability and personalized guidance made all the difference.",
        img: "https://i.pravatar.cc/100?img=13"
    },
    {
        name: "Emily Thompson",
        role: "Teacher, Seattle",
        content: "As a new mom, MindWell was a lifeline. I could attend therapy from home while my baby napped. Truly comprehensive care that fits into a parent's life.",
        img: "https://i.pravatar.cc/100?img=5"
    },
    {
        name: "David Park",
        role: "Senior Architect, Seattle",
        content: "The data-driven matching is incredible. I've never felt more understood by a provider. This is mental health for the modern age.",
        img: "https://i.pravatar.cc/100?img=11"
    },
    {
        name: "Maria Garcia",
        role: "Head of HR, Miami",
        content: "Implementing MindWell for our team was the best decision of the year. The platform is seamless and the results are measurable.",
        img: "https://i.pravatar.cc/100?img=20"
    },
    {
        name: "Dr. Alex Vance",
        role: "Clinical Lead, London",
        content: "As a professional, I appreciate the rigor with which MindWell selects their providers. It's the gold standard in telehealth.",
        img: "https://i.pravatar.cc/100?img=33"
    }
];

export default function MindWellPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-mindwell-light text-mindwell-dark font-body selection:bg-mindwell-cta selection:text-white">
            {/* Floating Navigation */}
            <nav className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled
                    ? 'top-4 max-w-[880px] rounded-full bg-white/95 border border-mindwell-primary/30 shadow-2xl py-2 px-6'
                    : 'top-4 max-w-7xl rounded-2xl bg-white/85 backdrop-blur-md border border-white/20 shadow-lg py-4 px-8'
                }`}>
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <div className="flex items-center group cursor-pointer">
                        <div className="relative overflow-hidden p-1 rounded-lg">
                            <div className="absolute inset-x-[-100%] inset-y-0 bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-[-45deg] animate-[shine_6s_infinite] pointer-events-none" />
                            <img
                                src="/landing-pages/mindwell/assets/mindwell-logo.svg"
                                alt="MindWell Health"
                                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Services', 'How It Works', 'Testimonials', 'Pricing'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="relative group text-mindwell-dark hover:text-mindwell-primary transition-colors duration-200 font-medium whitespace-nowrap"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-mindwell-primary to-transparent group-hover:w-full group-hover:left-0 transition-all duration-300 opacity-50" />
                            </a>
                        ))}
                        <button className="bg-mindwell-cta text-white px-6 py-2 rounded-full hover:bg-green-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap">
                            Start Free Assessment
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div className={`w-6 h-0.5 bg-mindwell-dark transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <div className={`w-6 h-0.5 bg-mindwell-dark my-1 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                        <div className={`w-6 h-0.5 bg-mindwell-dark transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-60 pb-44 px-4 overflow-hidden border-b border-mindwell-primary/10">
                <div className="absolute inset-0 z-0 bg-[url('/landing-pages/mindwell/assets/hero-bg.png')] bg-cover bg-center opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-b from-mindwell-light/90 via-mindwell-light/70 to-mindwell-light z-0" />

                {/* Magic Orbs/Beams */}
                <div className="absolute top-20 left-10 w-96 h-96 bg-mindwell-primary/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-mindwell-cta/10 blur-[120px] rounded-full animate-pulse delay-1000" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-mindwell-primary/20 px-4 py-2 rounded-full shadow-sm mb-10"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-mindwell-cta animate-pulse" />
                        <span className="text-sm font-semibold tracking-wide text-mindwell-primary uppercase">Trusted by 50,000+ wellness seekers</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-extrabold text-mindwell-dark tracking-tight leading-tight mb-8"
                    >
                        Your Complete Wellness <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-mindwell-primary to-mindwell-secondary">Journey Starts Here</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-mindwell-muted leading-relaxed max-w-2xl mx-auto mb-12"
                    >
                        Connect with certified coaches, licensed therapists, and doctors in one seamless, high-performance platform.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button className="w-full sm:w-auto bg-mindwell-cta text-white px-10 py-5 rounded-full text-lg font-bold hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] hover:scale-105 transition-all duration-300">
                            Start Free Assessment
                        </button>
                        <button className="w-full sm:w-auto bg-white/50 backdrop-blur-md border border-mindwell-primary/20 text-mindwell-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-white/80 transition-all duration-300">
                            See How It Works
                        </button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-8 pt-16 text-mindwell-muted/80"
                    >
                        {[
                            { icon: ShieldCheck, text: "HIPAA Compliant" },
                            { icon: CheckCircle2, text: "Licensed Professionals" },
                            { icon: Clock, text: "24/7 Digital Care" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <item.icon className="w-6 h-6 text-mindwell-cta" />
                                <span className="text-sm font-medium">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-24 px-4 bg-white/50 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Traditional Healthcare Leaves Too Many Gaps
                    </h2>
                    <p className="text-xl text-mindwell-muted leading-relaxed mb-16">
                        Long wait times, limited access to specialists, and fragmented care prevent millions from getting the support they deserve.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { val: "3", sub: "Weeks Avg. Wait" },
                            { val: "60%", sub: "Avoid Care Costs" },
                            { val: "Limited", sub: "Specialist Access" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/70 backdrop-blur-md border border-mindwell-primary/10 rounded-[2rem] p-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className="text-5xl font-heading font-medium text-mindwell-primary mb-3">{stat.val}</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-mindwell-muted">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Comprehensive Care, One Platform</h2>
                        <p className="text-xl text-mindwell-muted max-w-2xl mx-auto">
                            From mental health support to wellness coaching and telemedicine — premium care at your fingertips.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Smile,
                                title: "Mental Health Therapy",
                                desc: "Connect with licensed therapists for stress, anxiety, and trauma. Private, secure video sessions.",
                                color: "text-mindwell-primary", bg: "bg-mindwell-primary/10"
                            },
                            {
                                icon: Heart,
                                title: "Wellness Coaching",
                                desc: "Achieve physical and mental goals with certified experts. Habit formation that actually sticks.",
                                color: "text-mindwell-cta", bg: "bg-mindwell-cta/10"
                            },
                            {
                                icon: Stethoscope,
                                title: "Telemedicine",
                                desc: "See board-certified doctors for consultations, lab orders, and urgent care — anywhere, anytime.",
                                color: "text-mindwell-primary", bg: "bg-mindwell-secondary/20"
                            }
                        ].map((service, i) => (
                            <div key={i} className="bg-white/70 backdrop-blur-lg border border-mindwell-primary/10 rounded-[2rem] p-10 group hover:ring-2 hover:ring-mindwell-primary/30 transition-all duration-300">
                                <div className={`w-20 h-20 ${service.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    <service.icon className={`w-10 h-10 ${service.color}`} />
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                                <p className="text-mindwell-muted mb-8 leading-relaxed">{service.desc}</p>
                                <a href="#assessment" className={`${service.color} font-bold inline-flex items-center group-hover:translate-x-2 transition-transform`}>
                                    Learn More <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Marquee */}
            <section id="testimonials" className="py-24 bg-mindwell-primary/5 overflow-hidden">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Real People, Real Results</h2>
                    <p className="text-lg text-mindwell-muted">Join thousands who've transformed their health with MindWell</p>
                </div>

                <div className="relative flex overflow-x-hidden group">
                    <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div key={i} className="inline-block bg-white border border-mindwell-primary/10 rounded-3xl p-8 mr-8 w-[450px] whitespace-normal shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center space-x-1 mb-4 text-yellow-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-mindwell-muted italic mb-6 leading-relaxed">"{t.content}"</p>
                                <div className="flex items-center space-x-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-mindwell-primary/20">
                                        <img src={t.img} alt={t.name} className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-mindwell-dark">{t.name}</div>
                                        <div className="text-sm text-mindwell-muted">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Flexible Plans for Every Journey</h2>
                        <p className="text-xl text-mindwell-muted">Simple, transparent pricing. No long-term commitments.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Simple Plan mapping could go here for brevity, but let's do the core one */}
                        {[
                            { name: "Starter", price: "79", features: ["2 therapy sessions/mo", "Unlimited messaging", "Health dashboard"], cta: "Get Started" },
                            { name: "Premium", price: "149", features: ["4 therapy sessions/mo", "2 coaching sessions/mo", "Priority booking", "Telemedicine"], popular: true, cta: "Start Free Trial" },
                            { name: "Elite", price: "299", features: ["Unlimited therapy", "Care coordinator", "Weekly coaching"], cta: "Contact Sales" }
                        ].map((plan, i) => (
                            <div key={i} className={`bg-white rounded-[2.5rem] p-10 relative border transition-all duration-300 ${plan.popular ? 'border-mindwell-primary ring-4 ring-mindwell-primary/10 shadow-2xl scale-105 z-10' : 'border-mindwell-primary/10 hover:shadow-xl'}`}>
                                {plan.popular && <div className="absolute top-0 right-0 bg-mindwell-primary text-white text-[10px] font-bold uppercase py-2 px-6 rotate-45 translate-x-5 translate-y-3">Popular</div>}
                                <h3 className="text-2xl font-heading font-bold mb-4">{plan.name}</h3>
                                <div className="text-5xl font-heading font-bold text-mindwell-primary mb-10">
                                    ${plan.price}<span className="text-lg text-mindwell-muted font-normal">/mo</span>
                                </div>
                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center space-x-3 text-mindwell-muted">
                                            <CheckCircle2 className="w-5 h-5 text-mindwell-cta" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-4 rounded-full font-bold transition-all ${plan.popular ? 'bg-mindwell-cta text-white hover:bg-green-600' : 'border border-mindwell-primary/20 text-mindwell-primary hover:bg-mindwell-primary/5'}`}>
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Assessment Form */}
            <section id="assessment" className="py-24 px-4 bg-gradient-to-br from-mindwell-light to-mindwell-secondary/20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-12 text-center shadow-2xl">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                            Start Your Wellness <br /> <span className="text-mindwell-primary italic">Transformation</span>
                        </h2>
                        <p className="text-xl text-mindwell-muted mb-12">We'll match you with the right professionals and build your plan today.</p>

                        <form className="grid sm:grid-cols-2 gap-8 text-left">
                            <input type="text" placeholder="Full Name" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-mindwell-primary outline-none" />
                            <input type="email" placeholder="Email Address" className="w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-mindwell-primary outline-none" />
                            <select className="col-span-full w-full bg-white border border-slate-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-mindwell-primary outline-none">
                                <option>Select your priority</option>
                                <option>Mental Health Support</option>
                                <option>Wellness Coaching</option>
                            </select>
                            <button className="col-span-full w-full bg-mindwell-cta text-white py-6 rounded-full text-2xl font-bold hover:shadow-xl transition-all">Submit My Assessment</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-24 px-4 bg-white/40 border-t border-white/20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center opacity-60">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <div className="w-8 h-8 bg-mindwell-primary rounded-lg" />
                            <span className="font-heading font-extrabold text-xl">MindWell</span>
                        </div>
                        <p className="text-sm">© 2026 MindWell Health. Native Next.js Implementation.</p>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(-45deg); }
          20% { transform: translateX(100%) rotate(-45deg); }
          100% { transform: translateX(100%) rotate(-45deg); }
        }
      `}</style>
        </div>
    );
}
