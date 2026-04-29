import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        heading: ["var(--font-lora)", "serif"],
      },
      colors: {
        mint: "#99F6E4",
        indigo: "#4F46E5",
        slate: {
          DEFAULT: "#0F172A",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        coral: {
          400: "#FF6B6B",
          500: "#FF6B6B",
          600: "#FF8E8E"
        },
        aivate: {
          scandal: "#99F6E4",  // Mint
          indigo: "#4F46E5",   // Indigo
          vulcan: "#0F172A",   // Slate 900
          mirage: "#1E293B",   // Slate 800
        },
        mindwell: {
          primary: "#8B5CF6",
          secondary: "#C4B5FD",
          cta: "#10B981",
          light: "#FAF5FF",
          dark: "#4C1D95",
          muted: "#6D28D9",
        },
        edulearn: {
          primary: "#0D9488",
          secondary: "#10B981",
          dark: "#020617",
          light: "#F0FDFA",
          accent: "#FF6B6B",
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'shine': 'shine 1.5s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spinSlow 8s linear infinite',
        'blob': 'blob 7s infinite',
        'tilt': 'tilt 10s infinite linear',
        'float-particle': 'float-particle 5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        shine: {
          '100%': { left: '125%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(153, 246, 228, 0.2), 0 0 10px rgba(153, 246, 228, 0.2)',
            borderColor: 'rgba(153, 246, 228, 0.2)'
          },
          '50%': {
            boxShadow: '0 0 20px rgba(153, 246, 228, 0.4), 0 0 30px rgba(153, 246, 228, 0.4)',
            borderColor: 'rgba(153, 246, 228, 0.5)'
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(0.5deg)" },
          "75%": { transform: "rotate(-0.5deg)" },
        },
        "float-particle": {
          "0%, 100%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "50%": { transform: "translateY(-100px) translateX(20px)" },
        }
      },
      backgroundImage: {
        "gradient-indigo-mint": "linear-gradient(135deg, #4F46E5 0%, #99F6E4 100%)",
        "glass-gradient": "linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.6) 100%)",
        "gradient-edulearn": "linear-gradient(135deg, #0D9488 0%, #10B981 100%)",
        "gradient-edulearn-light": "linear-gradient(135deg, #F0FDFA 0%, #ECFDF5 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
