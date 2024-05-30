/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/**/src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '2rem',
        lg: '2rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
      // screens: {
      //   sm: '600px',
      //   md: '728px',
      //   lg: '984px',
      //   xl: '1240px',
      //   '2xl': '1496px',
      // },
    },
  },
  plugins: [
    // require("postcss-import"),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

