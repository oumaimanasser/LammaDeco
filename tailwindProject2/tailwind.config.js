/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          cream: '#FFFAF8',
          peach: '#FFC3AC',
          searchBg: '#E8E3ED'
        },
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
        },
      }
    },
    plugins: [],
  } 
