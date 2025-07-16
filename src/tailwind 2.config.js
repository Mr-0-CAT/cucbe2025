/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#004080',
        secondary: '#FBA504',
        accent: '#19a176',
        light: '#F6F4F9',
        dark: '#04000B',
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'hover': '0 10px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}