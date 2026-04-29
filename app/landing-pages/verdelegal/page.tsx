'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Scale, Lightbulb, Briefcase, ArrowRight, Phone, Mail, Clock } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const practices = [
  { icon: Building2, title: 'Corporate & M&A', desc: 'Strategic counsel for transactions, governance, and regulatory compliance across borders.' },
  { icon: Scale, title: 'Complex Litigation', desc: 'Trial-ready advocacy in high-stakes commercial disputes and class actions.' },
  { icon: Lightbulb, title: 'Intellectual Property', desc: 'Portfolio protection, licensing strategy, and enforcement for innovation-driven companies.' },
  { icon: Briefcase, title: 'Employment Law', desc: 'Workforce compliance, executive agreements, and dispute resolution at every stage.' },
];

const results = [
  { figure: '$2.4B', label: 'in transactions closed' },
  { figure: '94%', label: 'favorable outcomes' },
  { figure: '180+', label: 'attorneys worldwide' },
  { figure: '35', label: 'years of practice' },
];

export default function VerdeLegalPage() {
  return (
    <div className="min-h-screen bg-[#0f1520] text-[#e8e4de] overflow-hidden selection:bg-[#C5A55A]/30">
      {/* Decorative rule */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A55A]/30 to-transparent z-50" />

      {/* Nav */}
      <nav className="relative z-40 px-6 md:px-16 py-8 flex items-center justify-between">
        <Link href="/landing-pages" className="flex items-center gap-2 text-[#C5A55A]/70 hover:text-[#C5A55A] transition-colors text-xs tracking-[0.3em] uppercase">
          <ArrowLeft className="w-4 h-4" />
          Portfolio
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-xs text-[#e8e4de]/30">
            <Phone className="w-3.5 h-3.5" />
            <span>(212) 555-0140</span>
          </div>
          <button className="px-6 py-3 border border-[#C5A55A]/30 text-[#C5A55A] text-xs tracking-[0.2em] uppercase hover:bg-[#C5A55A] hover:text-[#0f1520] transition-all duration-500">
            Consultation
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-16 pt-16 pb-32 md:pt-24 md:pb-40">
        <motion.div
          className="max-w-5xl"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="w-12 h-px bg-[#C5A55A] mb-10" />
          <motion.h1
            variants={fadeUp}
            className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.0] mb-8 font-normal tracking-tight"
          >
            Counsel that<br />
            commands <span className="text-[#C5A55A] italic">results.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#e8e4de]/40 text-lg max-w-xl leading-relaxed font-light mb-12">
            Verde Legal partners with industry leaders navigating high-stakes legal challenges. Precision strategy. Relentless execution.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-3 px-8 py-4 bg-[#C5A55A] text-[#0f1520] text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#e8e4de] transition-colors duration-500">
              Schedule Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 text-[#C5A55A]/60 text-sm tracking-[0.15em] uppercase hover:text-[#C5A55A] transition-colors">
              <Mail className="w-4 h-4" />
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Practice Areas */}
      <section className="px-6 md:px-16 py-24 border-t border-[#C5A55A]/10 bg-[#0c1219]">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <span className="text-[#C5A55A]/40 text-xs tracking-[0.3em] uppercase">Practice Areas</span>
            <div className="flex-1 h-px bg-[#C5A55A]/10" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-[#C5A55A]/10">
            {practices.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="bg-[#0c1219] p-10 md:p-12 group hover:bg-[#111a26] transition-colors duration-700"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 border border-[#C5A55A]/15 group-hover:border-[#C5A55A]/40 transition-colors">
                    <p.icon className="w-5 h-5 text-[#C5A55A]/50 group-hover:text-[#C5A55A] transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading mb-3 text-[#e8e4de] group-hover:text-[#C5A55A] transition-colors duration-500">{p.title}</h3>
                    <p className="text-[#e8e4de]/35 text-sm leading-relaxed font-light">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Results */}
      <section className="px-6 md:px-16 py-24 border-t border-[#C5A55A]/10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl mb-3">Track Record</h2>
            <p className="text-[#e8e4de]/30 text-sm">Decades of measurable outcomes.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {results.map((r) => (
              <motion.div key={r.label} variants={fadeUp} className="text-center">
                <div className="text-4xl md:text-5xl font-heading text-[#C5A55A] mb-2">{r.figure}</div>
                <div className="text-xs tracking-[0.15em] uppercase text-[#e8e4de]/30">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-16 border-t border-[#C5A55A]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-[#e8e4de]/20 text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>Mon-Fri 8AM-7PM EST</span>
          </div>
          <p className="text-xs text-[#e8e4de]/15 tracking-widest uppercase">&copy; 2026 Verde Legal &middot; A Portfolio Piece by Aivate</p>
        </div>
      </footer>
    </div>
  );
}
