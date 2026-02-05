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
      colors: {
        mint: "#99F6E4",
        indigo: "#4F46E5",
        slate: "#0F172A",
        // Sageware design system colors
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          600: '#2563EB',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        amber: {
          50: '#FFFBEB',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-indigo-mint":
          "linear-gradient(135deg, #88ebc5 0%, #5946df 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
