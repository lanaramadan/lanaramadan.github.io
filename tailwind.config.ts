import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "var(--dark)",
        medium: "var(--medium)",
        light: "var(--light)",
        text: "var(--text)",
        background: "var(--background)"

      },
      fontFamily: {
        'geist-mono': 'var(--font-geist-mono)',
        'geist-sans': 'var(--font-geist-sans)',
        'ibm-plex-sans': 'var(--font-ibm-plex-sans)',
        'new-spirit-condensed': 'var(--font-new-spirit-condensed)',
        'eternate': 'var(--font-eternate)'
      },
    },
  },
  plugins: [],
} satisfies Config;
