/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
    theme: {
      extend: {
        colors: {
          'peach': {
            '100': '#fffaf8',
            '200': '#ffe8df',
            '300': '#ffdcc5',
            '400': '#ffc3ac',
          },},
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
        },
      }
    },
    plugins: [],
  } 
