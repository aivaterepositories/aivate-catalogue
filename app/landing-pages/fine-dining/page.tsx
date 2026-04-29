"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import type { Variants } from "framer-motion";

/* ─── Animation Variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Menu Data ─── */
const menuItems = [
  {
    course: "First Course",
    name: "Hokkaido Scallops",
    description: "Pan-seared with black truffle foam, oscietra caviar, and micro herbs on a bed of cauliflower purée",
    price: "48",
    image: "/images/appetizer.png",
  },
  {
    course: "Main Course",
    name: "Herb-Crusted Lamb Rack",
    description: "New Zealand lamb with pomme purée, heirloom carrots, asparagus, and a red wine jus reduction",
    price: "72",
    image: "/images/main.png",
  },
  {
    course: "Dessert",
    name: "Valrhona Chocolate Sphere",
    description: "Dark chocolate shell with gold dust, raspberry coulis, edible flowers, and cassis sorbet",
    price: "28",
    image: "/images/dessert.png",
  },
];

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <a
          href="#hero"
          className="font-[family-name:var(--font-serif)] text-2xl tracking-[0.2em] text-[var(--gold)] uppercase font-light"
        >
          Aurum
        </a>
        <div className="flex items-center gap-10">
          <a
            href="#menu"
            className="font-[family-name:var(--font-sans)] text-xs tracking-[0.25em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-300"
          >
            Menu
          </a>
          <a
            href="#reservation"
            className="font-[family-name:var(--font-sans)] text-xs tracking-[0.25em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-300"
          >
            Reserve
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden">
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="/images/hero.png"
          alt="Seared wagyu beef with microgreens"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/30 to-[#0A0A0A]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-6">
            Est. 2024
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.08em] text-[var(--text)] mb-6">
            AURUM
          </h1>
          <div className="divider-ornament mb-6">
            <span className="text-[var(--gold)] text-lg">✦</span>
          </div>
          <p className="font-[family-name:var(--font-serif)] text-lg md:text-xl font-light italic text-[var(--muted)] max-w-md mx-auto tracking-wide">
            Where culinary artistry meets timeless elegance
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Philosophy Section ─── */
function Philosophy() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <Image
            src="/images/interior.png"
            alt="Aurum dining room interior"
            fill
            className="object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
          />
          <div className="absolute inset-0 border border-[var(--gold)]/20" />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          <motion.p variants={fadeUp} className="font-[family-name:var(--font-sans)] text-xs tracking-[0.4em] uppercase text-[var(--gold)]">
            Our Philosophy
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light leading-tight text-[var(--text)]"
          >
            A Reverence
            <br />
            <span className="italic text-[var(--gold-light)]">for Craft</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="w-16 h-px bg-[var(--gold)]" />
          <motion.p variants={fadeUp} className="font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[var(--muted)] max-w-lg">
            At Aurum, every dish is a meditation on excellence. Our kitchen sources the finest
            seasonal ingredients from trusted purveyors worldwide — Hokkaido scallops, New Zealand
            lamb, Périgord truffles — transforming them into compositions that honor both tradition
            and innovation.
          </motion.p>
          <motion.p variants={fadeUp} className="font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[var(--muted)] max-w-lg">
            The dining room, bathed in candlelight and dressed in dark oak and velvet, invites
            you to slow down, savor, and surrender to an evening of pure indulgence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Menu Section ─── */
function Menu() {
  return (
    <section id="menu" className="py-28 md:py-40 px-6 md:px-12 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.p variants={fadeUp} className="font-[family-name:var(--font-sans)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
            Tasting Menu
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-serif)] text-4xl md:text-6xl font-light text-[var(--text)]"
          >
            The Experience
          </motion.h2>
          <motion.div variants={fadeUp} className="divider-ornament mt-6">
            <span className="text-[var(--gold)] text-sm">✦</span>
          </motion.div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-24"
        >
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
            >
              {/* Image */}
              <div className={`relative aspect-square overflow-hidden group ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
              </div>

              {/* Details */}
              <div className={`flex flex-col gap-4 ${i % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.3em] uppercase text-[var(--gold)]">
                  {item.course}
                </p>
                <h3 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-light text-[var(--text)]">
                  {item.name}
                </h3>
                <div className={`w-12 h-px bg-[var(--gold)]/40 ${i % 2 === 1 ? "md:ml-auto" : ""}`} />
                <p className="font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[var(--muted)] max-w-sm">
                  {item.description}
                </p>
                <p className="font-[family-name:var(--font-serif)] text-2xl text-[var(--gold-light)] mt-2">
                  ${item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Gallery Section ─── */
function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  const galleryImages = [
    { src: "/images/hero.png", alt: "Wagyu preparation" },
    { src: "/images/interior.png", alt: "Dining atmosphere" },
    { src: "/images/appetizer.png", alt: "Scallop course" },
    { src: "/images/dessert.png", alt: "Dessert artistry" },
    { src: "/images/main.png", alt: "Lamb presentation" },
  ];

  return (
    <section ref={ref} className="py-28 md:py-40 overflow-hidden">
      {/* Header */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <motion.p variants={fadeUp} className="font-[family-name:var(--font-sans)] text-xs tracking-[0.4em] uppercase text-[var(--gold)] mb-4">
          Gallery
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-[family-name:var(--font-serif)] text-4xl md:text-6xl font-light text-[var(--text)]">
          Moments of Beauty
        </motion.h2>
      </motion.div>

      {/* Horizontal Scroll Gallery */}
      <motion.div style={{ x }} className="flex gap-4 px-6">
        {galleryImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative flex-shrink-0 w-[320px] md:w-[420px] aspect-[3/4] overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/20 group-hover:bg-transparent transition-colors duration-700" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ─── Reservation Section ─── */
function Reservation() {
  return (
    <section id="reservation" className="py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-8"
        >
          <motion.div variants={fadeUp} className="divider-ornament">
            <span className="text-[var(--gold)] text-lg">✦</span>
          </motion.div>
          <motion.p variants={fadeUp} className="font-[family-name:var(--font-sans)] text-xs tracking-[0.4em] uppercase text-[var(--gold)]">
            Reserve Your Table
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-serif)] text-4xl md:text-6xl font-light text-[var(--text)] leading-tight"
          >
            An Evening
            <br />
            <span className="italic">Awaits You</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-[family-name:var(--font-sans)] text-sm leading-relaxed text-[var(--muted)] max-w-md">
            We invite you to join us for an unforgettable culinary journey.
            Reservations are recommended to ensure your preferred evening.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="tel:+12125551234"
            className="mt-4 inline-block font-[family-name:var(--font-sans)] text-xs tracking-[0.3em] uppercase border border-[var(--gold)] text-[var(--gold)] px-10 py-4 hover:bg-[var(--gold)] hover:text-[var(--bg)] transition-all duration-500"
          >
            Call (212) 555-1234
          </motion.a>
          <motion.p variants={fadeUp} className="font-[family-name:var(--font-sans)] text-xs text-[var(--muted)] tracking-wider mt-2">
            Tuesday — Saturday · 6:00 PM — 11:00 PM
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <div>
          <p className="font-[family-name:var(--font-serif)] text-xl tracking-[0.2em] text-[var(--gold)] uppercase mb-4">
            Aurum
          </p>
          <p className="font-[family-name:var(--font-sans)] text-xs text-[var(--muted)] leading-relaxed">
            A culinary sanctuary in the
            <br />
            heart of Manhattan.
          </p>
        </div>

        {/* Address */}
        <div>
          <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-4">
            Visit
          </p>
          <p className="font-[family-name:var(--font-sans)] text-xs text-[var(--muted)] leading-relaxed">
            142 West 57th Street
            <br />
            New York, NY 10019
          </p>
        </div>

        {/* Hours */}
        <div>
          <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-4">
            Hours
          </p>
          <p className="font-[family-name:var(--font-sans)] text-xs text-[var(--muted)] leading-relaxed">
            Tuesday — Saturday
            <br />
            6:00 PM — 11:00 PM
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--border)] text-center">
        <p className="font-[family-name:var(--font-sans)] text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">
          © 2024 Aurum. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Philosophy />
      <Menu />
      <Gallery />
      <Reservation />
      <Footer />
    </main>
  );
}
