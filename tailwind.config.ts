import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f5fb",
          100: "#dde8f5",
          200: "#c0d3ee",
          300: "#93b3e3",
          400: "#628ed5",
          500: "#406dc4",
          600: "#2f55a8",
          700: "#274489",
          800: "#243a72",
          900: "#21315f",
        },
        danger: {
          50:  "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        tick: {
          50:  "#fdf4f5",
          100: "#fce8ea",
          200: "#f9d2d7",
          300: "#f3a8b3",
          400: "#eb718a",
          500: "#e04567",
          600: "#cc2750",
          700: "#ac1e44",
          800: "#8f1c3e",
          900: "#7a1c39",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up":   { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
