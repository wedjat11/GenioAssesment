/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        "grey-bg" : '#F3F4F6',
        'black-navbar': '#333533'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

