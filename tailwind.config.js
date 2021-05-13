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
        aufgabe: colors.gray,
        folgerung: colors.yellow,
        definition: colors.green,
        kasten: colors.blue,
        beweis: colors.gray,
        beispiel: colors.gray,
        knopf: colors.gray
      }
    },
  },
  variants: {
    extend: {},
  }
}
