/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'script': ['"Dancing Script"', 'cursive'],
        },
        colors: {
          'peach': {
            '100': '#fffaf8',
            '200': '#ffe8df',
            '300': '#ffdcc5',
            '400': '#ffc3ac',
          },
        },
      },
    },
    plugins: [],
  }