/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors: {
      'black': '#0D0D0D',
      'blackBrown': '#261420',
      'green': '#317c48',
      'chocolat': '#592C28',
      'brown': '#8C5042',
      'beige': '#D8C4A8',
      'offWhite': '#F2E8DF'
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'heading': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

