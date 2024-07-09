/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    colors: {
      'pink': '#EF52A3',
      'green': '#D2FBF2',
      'white': '#F2F3F5',
      'black': '#000000',
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'heading': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

