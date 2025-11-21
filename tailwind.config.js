/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dios-black': '#121212',
        'dios-orange': '#FF9F1C',
        'dios-pink': '#FF006E',
        'dios-cyan': '#00F0FF',
      },
    },
  },
  plugins: [],
}