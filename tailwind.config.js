const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './dist/**/*.html',
     './dist/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        aufgabe: colors.yellow,
        folgerung: colors.indigo,
        definition: colors.fuchsia,
      }
    },
  },
  variants: {
    extend: {},
  }
}
