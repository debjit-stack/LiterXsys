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
        "midnight-navy": "#0A0F1E",
        "deep-slate": "#111827",
        "electric-blue": "#2563EB",
        "cyan-glow": "#06B6D4",
        "off-white": "#F8FAFC",
        "soft-gray": "#F1F5F9",
        "charcoal": "#1E293B",
        "pale-gray": "#CBD5E1",
        "emerald-trust": "#10B981",
        "amber-cta": "#F59E0B",
        "crimson-urgent": "#DC2626",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      animation: {
        "ticker": "ticker 30s linear infinite",
        "mesh-drift": "meshDrift 8s ease-in-out infinite alternate",
        "counter-up": "counterUp 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        meshDrift: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
