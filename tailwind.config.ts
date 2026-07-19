import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tea: {
          50: "#f6f7f4",
          100: "#e8ece3",
          200: "#d2d9c8",
          300: "#b3bea4",
          400: "#93a07e",
          500: "#768562",
          600: "#5c6a4c",
          700: "#4a553e",
          800: "#3d4635",
          900: "#353b2f",
          950: "#1a1f16",
        },
        river: {
          50: "#f0f9f9",
          100: "#d9f0f0",
          200: "#b7e0e0",
          300: "#87c9c9",
          400: "#52adad",
          500: "#399292",
          600: "#2f7676",
          700: "#2a6060",
          800: "#264e4e",
          900: "#234242",
          950: "#112525",
        },
        forest: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        earth: {
          50: "#faf8f5",
          100: "#f2ede5",
          200: "#e4d9c8",
          300: "#d0bfa0",
          400: "#bfa078",
          500: "#b08a5c",
          600: "#a3754e",
          700: "#885e41",
          800: "#704d3a",
          900: "#5c4031",
          950: "#332219",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        bengali: ["SolaimanLipi", "Noto Sans Bengali", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
}

export default config
