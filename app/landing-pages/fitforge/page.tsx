'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Flame, Dumbbell, Heart, Timer, Zap, Trophy, Users, Crown } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const stats = [
  { value: '12K+', label: 'Active Members', icon: Users },
  { value: '98%', label: 'Retention Rate', icon: Heart },
  { value: '150+', label: 'Weekly Classes', icon: Flame },
  { value: '24/7', label: 'Access Hours', icon: Timer },
];

const tiers = [
  { name: 'Basic', price: '29', period: '/mo', features: ['Full gym access', 'Locker room', 'Free WiFi', '2 guest passes/mo'], icon: Dumbbell, accent: false },
  { name: 'Pro', price: '59', period: '/mo', features: ['Everything in Basic', 'All group classes', 'Sauna & cold plunge', 'Nutrition coaching'], icon: Zap, accent: true },
  { name: 'Elite', price: '99', period: '/mo', features: ['Everything in Pro', '1-on-1 personal training', 'Recovery suite', 'Priority booking'], icon: Crown, accent: false },
];

export default function FitForgePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden selection:bg-[#BFFF00] selection:text-black">
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-5 flex items-center justify-between">
        <Link href="/landing-pages" className="flex items-center gap-2 text-[#BFFF00] hover:text-white transition-colors text-xs tracking-[0.3em] uppercase">
          <ArrowLeft className="w-4 h-4" />
          Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs tracking-[0.2em] uppercase text-white/40 hidden md:inline">No contracts. Cancel anytime.</span>
          <button className="px-6 py-2.5 bg-[#BFFF00] text-black text-xs tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors">
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BFFF00]/5 rounded-full blur-[150px]" />
        <div className="absolute top-20 right-10 w-72 h-72 border border-[#BFFF00]/5 rounded-full hidden lg:block" />
        <div className="absolute bottom-20 right-32 w-40 h-40 border border-[#BFFF00]/10 rounded-full hidden lg:block" />

        <motion.div
          className="relative z-10 max-w-4xl"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-[#BFFF00]/20 rounded-full text-[#BFFF00] text-xs tracking-[0.2em] uppercase">
            <Flame className="w-3.5 h-3.5" />
            Now Open — Downtown Location
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-8"
          >
            FORGE<br />
            YOUR<br />
            <span className="text-[#BFFF00]">LIMIT.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/40 text-lg max-w-md leading-relaxed mb-12">
            Performance training meets recovery science. 40,000 sq ft of equipment, classes, and wellness built for results.
          </motion.p>
          <motion.button
            variants={fadeUp}
            className="group flex items-center gap-3 px-10 py-5 bg-[#BFFF00] text-black text-sm tracking-[0.15em] uppercase font-bold hover:gap-6 transition-all duration-300"
          >
            Start Free Trial
            <Trophy className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-16 py-20 border-t border-white/5">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center group">
              <s.icon className="w-6 h-6 text-[#BFFF00]/40 mx-auto mb-4 group-hover:text-[#BFFF00] transition-colors" />
              <div className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">{s.value}</div>
              <div className="text-xs tracking-[0.2em] uppercase text-white/30">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Membership Tiers */}
      <section className="px-6 md:px-16 py-24">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight text-center mb-4">
            PICK YOUR <span className="text-[#BFFF00]">PLAN</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/30 text-center mb-16 text-sm tracking-wide">
            All plans include full facility access. Upgrade or cancel anytime.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`relative p-8 border ${tier.accent ? 'border-[#BFFF00]/40 bg-[#BFFF00]/[0.03]' : 'border-white/5 bg-white/[0.02]'} hover:border-[#BFFF00]/30 transition-all duration-500 group`}
              >
                {tier.accent && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#BFFF00] text-black text-[10px] tracking-[0.2em] uppercase font-bold">
                    Most Popular
                  </div>
                )}
                <tier.icon className={`w-8 h-8 mb-6 ${tier.accent ? 'text-[#BFFF00]' : 'text-white/20 group-hover:text-[#BFFF00]/60'} transition-colors`} strokeWidth={1.5} />
                <h3 className="text-sm tracking-[0.2em] uppercase text-white/50 mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-black">${tier.price}</span>
                  <span className="text-white/30 text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                      <div className={`w-1.5 h-1.5 rounded-full ${tier.accent ? 'bg-[#BFFF00]' : 'bg-white/20'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 ${tier.accent ? 'bg-[#BFFF00] text-black hover:bg-white' : 'border border-white/10 text-white/60 hover:border-[#BFFF00]/40 hover:text-[#BFFF00]'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-12 border-t border-white/5 text-center">
        <p className="text-xs text-white/15 tracking-widest uppercase">&copy; 2026 FitForge &middot; A Portfolio Piece by Aivate</p>
      </footer>
    </div>
  );
}
