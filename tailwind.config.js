/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#0b0c10",
        cardDark: "#12131a",
        borderDark: "#222431",
        purpleAccent: "#9333ea",
        neonPurple: "#a855f7",
      },
    },
  },
  plugins: [],
}