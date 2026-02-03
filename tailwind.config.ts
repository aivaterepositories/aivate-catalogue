import type { Config } from "tailwindcss";

const config: Config = {
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
