module.exports = {
  content: ['./src/**/*.{html,vue,js,tsx}', './node_modules/preline/preline.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
        ]
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')]
}
