module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#c8553d',
        ochre: '#f28f3b',
        beige: '#f8f4e3',
        dark: '#2b2118',
      },
      fontFamily: {
        'patrick': ['"Patrick Hand"', 'cursive'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}