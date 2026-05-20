'use client';

import {
    Box,
    Zap,
    Brain,
    Lock,
    Users,
    BarChart3,
    Sparkles,
    ArrowRight,
    Menu,
    X,
    ArrowLeft
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import {
    VercelIcon,
    NextjsIcon,
    ReactIcon,
    TypeScriptIcon,
    TailwindIcon,
    NodejsIcon,
    GitHubIcon,
    StripeIcon
} from './components/marquee-logos';
import { Testimonials } from './components/testimonials';
import { EternalCube } from './components/cube';

export default function SevenSidedCubePage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate overflow-x-hidden text-white">
            {/* Floating Glass Navbar */}
            <nav className="fixed top-4 left-4 right-4 z-50 glass-panel rounded-2xl">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/landing-pages" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                                <ArrowLeft className="w-5 h-5 text-mint" />
                            </Link>
                            <div className="flex items-center gap-2">
                                <div className="relative w-8 h-8">
                                    <Box className="w-8 h-8 text-indigo animate-float" strokeWidth={2} />
                                </div>
                                <span className="text-xl font-bold font-bold">SevenSidedCube</span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer">Features</a>
                            <a href="#proof" className="text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer">Customers</a>
                            <a href="#cta" className="text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer">Pricing</a>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="hidden sm:block text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer">
                                Sign In
                            </button>
                            <button className="hidden sm:block bg-mint text-slate-900 px-6 py-2.5 rounded-lg hover:bg-mint/90 transition-colors duration-150 cursor-pointer font-semibold shadow-lg shadow-mint/20">
                                Start Free
                            </button>
                            <button
                                className="md:hidden text-white"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
                            <div className="flex flex-col gap-4">
                                <a href="#features" className="text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer">Features</a>
                                <a href="#proof" className="text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer">Customers</a>
                                <a href="#cta" className="text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer">Pricing</a>
                                <button className="text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer text-left">
                                    Sign In
                                </button>
                                <button className="bg-mint text-slate-900 px-6 py-2.5 rounded-lg hover:bg-mint/90 transition-colors duration-150 cursor-pointer font-semibold text-left">
                                    Start Free
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                {/* Eternal 3D Cube Backdrop */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 overflow-hidden">
                    <div className="absolute top-20 left-1/4 w-64 h-64 bg-indigo/10 rounded-full blur-[100px] animate-float" />
                    <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-mint/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />

                    <div className="transform scale-[2.0] md:scale-[3.0] opacity-30 translate-y-12">
                        <EternalCube />
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-block glass-panel px-4 py-2 rounded-full text-sm font-semibold mb-8">
                        <span className="text-indigo-500">Introducing Dimension-Shifting Technology</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight font-bold">
                        Dimension-Shifting
                        <br />
                        <span className="text-mint">Productivity</span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                        Experience productivity across seven dimensions. Transform your workflow with AI-powered tools that adapt to your reality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group bg-mint text-slate-900 px-8 py-4 rounded-xl hover:bg-mint/90 transition-all duration-150 cursor-pointer font-bold text-lg flex items-center gap-2 shadow-lg shadow-mint/20">
                            Start Free Trial
                            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-150" size={20} />
                        </button>
                        <button className="glass-panel glass-card-hover px-8 py-4 rounded-xl cursor-pointer font-bold text-lg">
                            Watch Demo
                        </button>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center items-center gap-12 text-sm">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-500">10K+</div>
                            <div className="text-slate-500 mt-1 uppercase tracking-wider font-medium">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-500">99.9%</div>
                            <div className="text-slate-500 mt-1 uppercase tracking-wider font-medium">Uptime SLA</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-indigo-500">7</div>
                            <div className="text-slate-500 mt-1 uppercase tracking-wider font-medium">Dimensions</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Features */}
            <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-bold">
                            Seven Dimensions of <span className="text-mint">Power</span>
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                            Each side of the cube unlocks a new dimension of productivity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        <div className="lg:col-span-2 glass-panel glass-card-hover rounded-3xl p-8 cursor-pointer group">
                            <div className="flex flex-col h-full">
                                <div className="w-14 h-14 bg-indigo/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Zap className="w-7 h-7 text-indigo" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 font-bold">Lightning Speed</h3>
                                <p className="text-slate-400 leading-relaxed mb-6 flex-grow font-light">
                                    Process tasks 10x faster with our quantum-inspired algorithms. Real-time collaboration that feels instant.
                                </p>
                                <div className="glass-panel rounded-2xl p-4 border border-indigo/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-slate-400">Performance</span>
                                        <span className="text-mint font-bold">+1,247%</span>
                                    </div>
                                    <div className="w-full bg-white/5 rounded-full h-2">
                                        <div className="bg-mint h-2 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: '94%' }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel glass-card-hover rounded-3xl p-8 cursor-pointer group">
                            <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Brain className="w-7 h-7 text-purple-400" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-bold">AI Brain</h3>
                            <p className="text-slate-400 leading-relaxed font-light">
                                Intelligent automation that learns your patterns and predicts your needs.
                            </p>
                        </div>

                        <div className="glass-panel glass-card-hover rounded-3xl p-8 cursor-pointer group">
                            <div className="w-14 h-14 bg-mint/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Lock className="w-7 h-7 text-mint" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-bold">Quantum Security</h3>
                            <p className="text-slate-400 leading-relaxed font-light">
                                Military-grade encryption meets quantum-resistant algorithms.
                            </p>
                        </div>

                        <div className="lg:col-span-2 glass-panel glass-card-hover rounded-3xl p-8 cursor-pointer group">
                            <div className="flex flex-col h-full">
                                <div className="w-14 h-14 bg-indigo/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-7 h-7 text-indigo-400" strokeWidth={2} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 font-bold">Team Synergy</h3>
                                <p className="text-slate-400 leading-relaxed mb-6 flex-grow font-light">
                                    Collaborate seamlessly across dimensions. Share context, not just files.
                                </p>
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo to-purple-500 border-2 border-slate" />
                                    ))}
                                    <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-slate flex items-center justify-center text-xs font-bold text-mint">
                                        +20
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel glass-card-hover rounded-3xl p-8 cursor-pointer group">
                            <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <BarChart3 className="w-7 h-7 text-blue-400" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-bold">Analytics++</h3>
                            <p className="text-slate-400 leading-relaxed font-light">
                                Predictive insights that show you the future, not just the past.
                            </p>
                        </div>

                        <div className="glass-panel glass-card-hover rounded-3xl p-8 cursor-pointer group">
                            <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="w-7 h-7 text-pink-400" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-bold">Magic Workflows</h3>
                            <p className="text-slate-400 leading-relaxed font-light">
                                Automate the impossible with AI-powered workflow generation.
                            </p>
                        </div>

                        <div className="glass-panel glass-card-hover rounded-3xl p-8 cursor-pointer group">
                            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Box className="w-7 h-7 text-orange-400" strokeWidth={2} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-bold">Infinite Scale</h3>
                            <p className="text-slate-400 leading-relaxed font-light">
                                From 1 to 1 million users. Scale without limits or lag.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Marquee */}
            <section id="proof" className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate">
                <div className="max-w-7xl mx-auto">
                    <p className="text-center text-slate-500 mb-8 font-medium uppercase tracking-widest text-sm">
                        Trusted by industry leaders
                    </p>

                    <div className="relative overflow-hidden w-full">
                        {/* Elegant Edge Fades using CSS Mask */}
                        <div
                            className="flex w-max gap-16 animate-marquee py-12 hover:[animation-play-state:paused]"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent, black 120px, black calc(100% - 120px), transparent)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 120px, black calc(100% - 120px), transparent)'
                            }}
                        >
                            {[
                                { component: VercelIcon, name: 'Vercel' },
                                { component: NextjsIcon, name: 'Next.js' },
                                { component: ReactIcon, name: 'React' },
                                { component: TypeScriptIcon, name: 'TypeScript' },
                                { component: TailwindIcon, name: 'Tailwind' },
                                { component: NodejsIcon, name: 'Node.js' },
                                { component: GitHubIcon, name: 'GitHub' },
                                { component: StripeIcon, name: 'Stripe' }
                            ].map(({ component: Icon, name }, i) => (
                                <div key={i} className="flex-shrink-0 flex items-center gap-3 text-slate-500 hover:text-mint transition-all duration-500 group cursor-pointer">
                                    <Icon size={32} className="grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:text-mint transition-all duration-500" />
                                    <span className="text-xl font-bold font-bold tracking-tight">{name}</span>
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {[
                                { component: VercelIcon, name: 'Vercel' },
                                { component: NextjsIcon, name: 'Next.js' },
                                { component: ReactIcon, name: 'React' },
                                { component: TypeScriptIcon, name: 'TypeScript' },
                                { component: TailwindIcon, name: 'Tailwind' },
                                { component: NodejsIcon, name: 'Node.js' },
                                { component: GitHubIcon, name: 'GitHub' },
                                { component: StripeIcon, name: 'Stripe' }
                            ].map(({ component: Icon, name }, i) => (
                                <div key={`dup-${i}`} className="flex-shrink-0 flex items-center gap-3 text-slate-500 hover:text-mint transition-all duration-500 group cursor-pointer">
                                    <Icon size={32} className="grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:text-mint transition-all duration-500" />
                                    <span className="text-xl font-bold font-bold tracking-tight">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* CTA Section */}
            <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-panel glass-card-hover rounded-3xl p-12 text-center border-mint/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-mint/5 rounded-full blur-[80px] -z-10" />
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-bold text-white">
                            Ready to Shift Your <span className="text-mint">Reality?</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto font-light">
                            Join 10,000+ teams already operating in multiple dimensions. Start your free trial today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <button className="group bg-mint text-slate-900 px-10 py-5 rounded-xl hover:bg-mint/90 transition-all duration-150 cursor-pointer font-bold text-lg flex items-center gap-2 shadow-lg shadow-mint/20">
                                Start Free Trial
                                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-150" size={20} />
                            </button>
                            <button className="glass-panel glass-card-hover px-10 py-5 rounded-xl cursor-pointer font-bold text-lg">
                                Book a Demo
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-mint/20 flex items-center justify-center">
                                    <span className="text-mint text-xs">✓</span>
                                </div>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-mint/20 flex items-center justify-center">
                                    <span className="text-mint text-xs">✓</span>
                                </div>
                                <span>14-day free trial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-mint/20 flex items-center justify-center">
                                    <span className="text-mint text-xs">✓</span>
                                </div>
                                <span>Cancel anytime</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-slate">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h3 className="font-bold mb-4 font-bold">Product</h3>
                            <ul className="space-y-2 text-slate-500 text-sm font-medium">
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Features</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Pricing</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Security</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Roadmap</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 font-bold">Company</h3>
                            <ul className="space-y-2 text-slate-500 text-sm font-medium">
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">About</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Blog</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Careers</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Press</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 font-bold">Resources</h3>
                            <ul className="space-y-2 text-slate-500 text-sm font-medium">
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Documentation</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">API</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Support</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Status</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 font-bold">Legal</h3>
                            <ul className="space-y-2 text-slate-500 text-sm font-medium">
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Privacy</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Terms</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">GDPR</a></li>
                                <li><a href="#" className="hover:text-mint transition-colors duration-150">Compliance</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <Box className="w-6 h-6 text-indigo" strokeWidth={2} />
                            <span className="font-bold font-bold">SevenSidedCube</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium uppercase tracking-widest leading-none">
                            © 2026 SevenSidedCube • Establish Your Presence
                        </p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
        </div>
    );
}
