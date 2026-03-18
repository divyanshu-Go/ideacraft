import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: "#08080F",
        surface: "#0F0F1A",
        card: "#13131F",
        border: "#1E1E2E",
        "border-light": "#2A2A3E",
        cyan: {
          DEFAULT: "#00E5FF",
          dim: "#00B8CC",
          glow: "rgba(0,229,255,0.15)",
        },
        lime: {
          DEFAULT: "#A8FF3E",
          dim: "#85CC32",
        },
        white: "#FFFFFF",
        muted: "#8888A8",
        subtle: "#4A4A6A",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,229,255,0.12) 0%, transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(0,229,255,0.05) 0%, transparent 50%)",
        "lime-glow":
          "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(168,255,62,0.08) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        "cyan-glow": "0 0 40px rgba(0,229,255,0.15)",
        "cyan-sm": "0 0 20px rgba(0,229,255,0.1)",
        card: "0 4px 40px rgba(0,0,0,0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        flicker: "flicker 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
