/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'tealowl': '#5b8481',
        'tealowl2': '#9BF1DA',
        'tealowl3': '#274A50',
        'tealowl4': '#274A50',
        'owlsearch': '#F9F6EC',
        'owlsearch2': '#f59d1b',
        'owlsearch3': '#EAAE54',
        'owltext1': '#9E6B3E',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}