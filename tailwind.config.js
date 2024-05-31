/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './projects/**/src/**/*.{html,ts}'
  ],
  theme: {
    extend: {},
    screens: {
      // 'xs': '640px',
      'sm': '600px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1920px',
      '2xl': '2560px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        // sm: '2rem',
        // md: '2rem',
        // lg: '2rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
  },
  plugins: [
    // require("postcss-import"),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

