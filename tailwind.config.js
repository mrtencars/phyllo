module.exports = {
  purge: [
    './dist/**/*.html',
     './dist/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        aufgabe: '#345341'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
