const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  // purge: ['./pages/**/*.js', './components/**/*.js', './pages/**/*.jsx', './components/**/*.tsx'], - add this purge back once styling fixed
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

