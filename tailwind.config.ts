import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
      },
      fontFamily: {
        Outfit: 
        ['Outfit', 'sans-serif'],
        Ovo: 
        ['Ovo', 'serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
