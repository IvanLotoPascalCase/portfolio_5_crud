const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: '#202225',
        secondary:'#5865f2',
        gray: colors.gray,

      },
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

