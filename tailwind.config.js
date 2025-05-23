import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // รองรับ Dark Mode ด้วย class="dark"
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",     // สีหลักของแบรนด์ (เทาเข้ม)
        secondary: "#4b5563",   // สีรอง (เทาอ่อน)
        accent: "#22d3ee",      // สีเน้น (ฟ้า)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],           // ฟอนต์อังกฤษ
        th: ["Noto Sans Thai", "sans-serif"],    // ฟอนต์ไทย
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
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;