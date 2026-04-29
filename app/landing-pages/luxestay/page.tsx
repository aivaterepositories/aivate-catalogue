'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Wifi, UtensilsCrossed, Waves, Star, MapPin, Phone } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
const stagger = { show: { transition: { staggerChildren: 0.15 } } };

const amenities = [
  { icon: Waves, title: 'Infinity Pool', desc: 'Rooftop pool overlooking the Mediterranean coastline at sunset.' },
  { icon: UtensilsCrossed, title: 'Fine Dining', desc: 'Two Michelin-starred restaurant with a seasonal tasting menu.' },
  { icon: Wifi, title: 'Private Spa', desc: 'Full-service wellness center with traditional hammam rituals.' },
];

export default function LuxeStayPage() {
  return (
    <div className="min-h-screen bg-[#0d0b09] text-[#FFF8F0] overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between mix-blend-difference">
        <Link href="/landing-pages" className="flex items-center gap-2 text-[#D4A853] hover:text-[#FFF8F0] transition-colors text-sm tracking-widest uppercase">
          <ArrowLeft className="w-4 h-4" />
          Portfolio
        </Link>
        <div className="flex items-center gap-8 text-xs tracking-[0.25em] uppercase text-[#FFF8F0]/60">
          <span className="hidden md:inline">Rooms</span>
          <span className="hidden md:inline">Dining</span>
          <span className="hidden md:inline">Wellness</span>
          <button className="px-5 py-2.5 border border-[#D4A853]/40 text-[#D4A853] hover:bg-[#D4A853] hover:text-[#0d0b09] transition-all duration-500 tracking-[0.2em]">
            Reserve
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-end pb-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1510]/80 via-[#0d0b09]/40 to-[#0d0b09]" />
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/1a1510/D4A853?text=')] bg-cover bg-center opacity-30" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4A853]/20 to-transparent hidden lg:block" style={{ right: '33%' }} />

        <motion.div
          className="relative z-10 max-w-3xl"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#D4A853]" />
            <span className="text-[#D4A853] text-xs tracking-[0.3em] uppercase font-light">Est. 1987</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 font-normal"
          >
            Where Quiet<br />
            <span className="text-[#D4A853] italic">Luxury</span> Lives
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#FFF8F0]/50 text-lg max-w-md leading-relaxed font-light mb-10">
            A sanctuary perched above the Amalfi Coast, where every detail is an invitation to slow down.
          </motion.p>
          <motion.button
            variants={fadeUp}
            className="group flex items-center gap-4 px-8 py-4 bg-[#D4A853] text-[#0d0b09] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#FFF8F0] transition-colors duration-500"
          >
            Book Your Escape
            <div className="w-0 group-hover:w-6 overflow-hidden transition-all duration-500">
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </div>
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 right-8 text-right hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center gap-1 justify-end mb-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#D4A853] text-[#D4A853]" />)}
          </div>
          <p className="text-xs text-[#FFF8F0]/30 tracking-widest uppercase">Forbes Travel Guide</p>
        </motion.div>
      </section>

      {/* Amenities */}
      <section className="px-6 md:px-16 py-24 md:py-32">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-16">
            <div className="w-16 h-px bg-[#D4A853]/40" />
            <h2 className="font-heading text-3xl md:text-4xl italic text-[#D4A853]">The Experience</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {amenities.map((a) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className="group relative p-8 border border-[#D4A853]/10 hover:border-[#D4A853]/30 transition-all duration-700"
              >
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#D4A853]/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#D4A853]/30" />
                <a.icon className="w-8 h-8 text-[#D4A853]/60 mb-6 group-hover:text-[#D4A853] transition-colors duration-500" strokeWidth={1} />
                <h3 className="font-heading text-xl mb-3 text-[#FFF8F0]">{a.title}</h3>
                <p className="text-[#FFF8F0]/40 text-sm leading-relaxed font-light">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-16 py-24 border-t border-[#D4A853]/10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="font-heading text-6xl text-[#D4A853]/20 mb-8">&ldquo;</div>
          <p className="font-heading text-2xl md:text-3xl italic leading-relaxed text-[#FFF8F0]/80 mb-8">
            The kind of place that reminds you why you travel. Every room tells a story, every meal is a memory.
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-[#FFF8F0]/40">
            <span>Isabelle Laurent</span>
            <span className="w-1 h-1 rounded-full bg-[#D4A853]/40" />
            <span className="italic">Cond&eacute; Nast Traveler</span>
          </div>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <footer className="px-6 md:px-16 py-16 border-t border-[#D4A853]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-[#FFF8F0]/30 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Amalfi Coast, Italy</span>
            <span className="w-1 h-1 rounded-full bg-[#D4A853]/30" />
            <Phone className="w-4 h-4" />
            <span>+39 089 123 4567</span>
          </div>
          <p className="text-xs text-[#FFF8F0]/20 tracking-widest uppercase">
            &copy; 2026 LuxeStay &middot; A Portfolio Piece by Aivate
          </p>
        </div>
      </footer>
    </div>
  );
}
