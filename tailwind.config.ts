import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7ff",
          100: "#eaf0ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8"
        },
        accent: {
          100: "#ffedd5",
          500: "#f59e0b",
          600: "#d97706"
        },
        success: {
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a"
        },
        warning: {
          100: "#fef3c7",
          500: "#f59e0b",
          600: "#d97706"
        },
        danger: {
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
