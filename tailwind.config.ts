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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'geist-mono': 'var(--font-geist-mono)',
        'geist-sans': 'var(--font-geist-sans)',
        'ibm-plex-sans': 'var(--font-ibm-plex-sans)',
        'font-new-spirit-condensed': 'var(--font-new-spirit-condensed)'
      },
    },
  },
  plugins: [],
} satisfies Config;
