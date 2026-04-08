import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0f172a", muted: "#334155", faint: "#64748b" },
        surface: { DEFAULT: "#f8fafc", card: "#ffffff", accent: "#e2e8f0" },
        brand: { DEFAULT: "#0d9488", hover: "#0f766e", soft: "#ccfbf1" },
        gold: { DEFAULT: "#d97706", soft: "#fef3c7" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
