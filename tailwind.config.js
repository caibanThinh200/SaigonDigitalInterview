/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        banner: '#383F50',
        orange: '#FF8049',
        gray: '#E5E5E5',
        dark: '#16222D'
      }
    },
  },
  plugins: [],
}