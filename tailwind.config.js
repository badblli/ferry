module.exports = {
  content: ['./src/**/*.{html,vue,js,tsx}', './node_modules/preline/preline.js'],
  darkMode: 'class',
  theme: {
    colors: {
      blue: {
        100: '#f7fafc',
        // ...
        600: '#2C55E7  ',
        700: '#2149D5',
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      slate: {
        50: '#f2f4f8',
        100: '#e1e6eb',
        200: '#E4EEF3 ',
        300: '#a3b5c9',
        400: '#758fac',
        500: '#4f6d89',
        600: '#42566e',
        700: '#344360',
        800: '#2a3a4c',
        900: '#1e2d3a',
      },
      neutral: {
        50: '#f9fafb',
        100: '#F5F5F5 ',
        200: '#E2E8F0',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      white: '#fff',
    },
    extend: {
      fontFamily: {
        sans: [
          'Plus Jakarta Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
        ]
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')]
}
