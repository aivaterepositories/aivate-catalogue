'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Phone, Star, Utensils, Wine, Flame } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const dishes = [
  {
    name: 'Wagyu Tartare',
    desc: 'A5 wagyu, smoked egg yolk, black truffle, brioche crisp',
    price: '42',
    tag: 'Signature',
    icon: Flame,
  },
  {
    name: 'Diver Scallops',
    desc: 'Seared Hokkaido scallops, celery root, brown butter, hazelnut',
    price: '38',
    tag: 'Seasonal',
    icon: Utensils,
  },
  {
    name: 'Duck Confit Risotto',
    desc: 'Carnaroli rice, 48-hour duck leg, porcini, aged parmesan',
    price: '36',
    tag: 'Chef Pick',
    icon: Wine,
  },
];

export default function NovaBitesPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f0eb] overflow-hidden selection:bg-[#F59E0B]/30">
      {/* Ambient warmth */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#F59E0B]/[0.04] rounded-full blur-[180px]" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] bg-[#92400e]/[0.06] rounded-full blur-[140px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-40 px-6 md:px-16 py-6 flex items-center justify-between">
        <Link href="/landing-pages" className="flex items-center gap-2 text-[#F59E0B]/60 hover:text-[#F59E0B] transition-colors text-xs tracking-[0.3em] uppercase">
          <ArrowLeft className="w-4 h-4" />
          Portfolio
        </Link>
        <div className="flex items-center gap-6 text-xs">
          <span className="hidden md:inline text-[#f5f0eb]/25 tracking-widest uppercase">Open Tues-Sun from 5PM</span>
          <button className="px-6 py-3 bg-[#F59E0B] text-[#1a1a1a] tracking-[0.2em] uppercase font-semibold hover:bg-[#fbbf24] transition-colors">
            Reserve
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 md:px-16 pt-24 pb-32 md:pt-32 md:pb-40">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-8">
            {[...Array(3)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />)}
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 font-normal"
          >
            A Table Worth<br />
            <span className="italic text-[#F59E0B]">Remembering</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#f5f0eb]/40 text-lg max-w-lg mx-auto leading-relaxed font-light mb-12">
            Contemporary cuisine rooted in seasonal ingredients, served in an intimate 32-seat dining room in the heart of the city.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-4 bg-[#F59E0B] text-[#1a1a1a] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-[#fbbf24] transition-colors">
              Reserve a Table
            </button>
            <button className="px-10 py-4 border border-[#F59E0B]/20 text-[#F59E0B]/70 text-sm tracking-[0.2em] uppercase hover:border-[#F59E0B]/50 hover:text-[#F59E0B] transition-all">
              View Full Menu
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Highlights */}
      <section className="px-6 md:px-16 py-24 border-t border-[#F59E0B]/10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <div className="w-10 h-px bg-[#F59E0B]/40" />
            <h2 className="font-heading text-2xl md:text-3xl italic text-[#F59E0B]">Tonight&apos;s Menu</h2>
            <div className="flex-1 h-px bg-[#F59E0B]/10" />
          </motion.div>

          <div className="space-y-0 divide-y divide-[#F59E0B]/8">
            {dishes.map((d) => (
              <motion.div
                key={d.name}
                variants={fadeUp}
                className="group py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 hover:pl-4 transition-all duration-500"
              >
                <div className="flex items-center gap-4 flex-1">
                  <d.icon className="w-5 h-5 text-[#F59E0B]/30 group-hover:text-[#F59E0B] transition-colors flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-heading text-[#f5f0eb] group-hover:text-[#F59E0B] transition-colors duration-500">{d.name}</h3>
                      <span className="px-2 py-0.5 text-[9px] tracking-[0.2em] uppercase border border-[#F59E0B]/20 text-[#F59E0B]/50 rounded-full">{d.tag}</span>
                    </div>
                    <p className="text-[#f5f0eb]/30 text-sm font-light">{d.desc}</p>
                  </div>
                </div>
                <div className="text-2xl font-heading text-[#F59E0B]/60 group-hover:text-[#F59E0B] transition-colors">
                  ${d.price}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Chef / About */}
      <section className="px-6 md:px-16 py-24 bg-[#151515]">
        <motion.div
          className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-[#92400e]/10 border border-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
            <Utensils className="w-12 h-12 text-[#F59E0B]/30" strokeWidth={1} />
          </div>
          <div>
            <h3 className="font-heading text-2xl mb-4 text-[#f5f0eb]">Chef Margaux Lefevre</h3>
            <p className="text-[#f5f0eb]/35 leading-relaxed font-light mb-4">
              Trained at Le Cordon Bleu and tempered in the kitchens of Tokyo and Copenhagen, Chef Lefevre brings a philosophy of radical simplicity: celebrate the ingredient, respect the season, surprise the palate.
            </p>
            <p className="text-[#f5f0eb]/35 leading-relaxed font-light">
              NovaBites opened in 2022 to a three-month waitlist and has since earned recognition from the James Beard Foundation and Eater&apos;s annual Best New Restaurant list.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-16 border-t border-[#F59E0B]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#f5f0eb]/20 text-xs">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 127 Rivington St, New York</span>
            <span className="w-1 h-1 rounded-full bg-[#F59E0B]/20" />
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Tues-Sun, 5PM-11PM</span>
            <span className="w-1 h-1 rounded-full bg-[#F59E0B]/20" />
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> (212) 555-0199</span>
          </div>
          <p className="text-xs text-[#f5f0eb]/10 tracking-widest uppercase">&copy; 2026 NovaBites &middot; A Portfolio Piece by Aivate</p>
        </div>
      </footer>
    </div>
  );
}
