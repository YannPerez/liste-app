/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'GI-black': '#121212',
        'GI-orange': '#FF9F1C',
        'GI-pink': '#FF006E',
        'GI-cyan': '#00F0FF',
      },
    },
  },
  plugins: [],
}