/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: '#00CFA5',
        secBlack: '#242424',
        black: '#171718'
      }
    },
  },
  plugins: [],
}

