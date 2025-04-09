/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        primary: '#141311',
        lightColor: '#A3A3A3',
        borderColor: '#E4E4E4'
      },
      backgroundColor: {
        primary: '#EDEEF2',
      }
    },
  },
  plugins: [],
}

