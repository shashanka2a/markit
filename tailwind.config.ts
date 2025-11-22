import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: 'var(--midnight)',
        surface: 'var(--surface)',
        electric: 'var(--electric)',
        cyan: 'var(--cyan)',
        purple: 'var(--purple)',
        card: 'var(--card)',
        cardHover: 'var(--card-hover)',
        cardBorder: 'var(--card-border)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 50px -10px rgba(45, 127, 249, 0.2)',
        'card': '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
        'highlight': '0 0 0 1px rgba(255,255,255,0.1)',
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;

