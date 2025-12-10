/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        // Custom colors using CSS variables
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",

        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-hover": "rgb(var(--color-surface-hover) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",

        "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
        "text-tertiary": "rgb(var(--color-text-tertiary) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        DEFAULT: "var(--transition-base)",
        slow: "var(--transition-slow)",
      },
      animation: {
        "gradient": "gradient 15s ease infinite",
        "fadeInUp": "fadeInUp 0.6s ease-out",
        "fadeIn": "fadeIn 0.4s ease-out",
        "scaleIn": "scaleIn 0.3s ease-out",
        "glowPulse": "glowPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}