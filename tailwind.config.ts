import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",
        secondary: "#4b5563",
        accent: "#22d3ee",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        th: ["Noto Sans Thai", "sans-serif"],
      },
      animation: {
        fade: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

export default config;