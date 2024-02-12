module.exports = {
  content: ['./src/**/*.{html,vue,js,tsx}', 'node_modules/preline/dist/*.js',],
  darkMode: 'class',
  theme: {
    colors: {
      blue: {
        100: '#EBE4F3',
        200: '#c0d9fd',
        300: '#97b3f7',
        400: '#6495ed',
        500: '#4277e5',
        600: '#3157c9',
        700: '#2149D5',
        800: '#2b45a1',
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
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#EA4335',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      rose: {
        100: '#ffe8e8',
        200: '#feebc8',
        300: '#fbd3d4',
        400: '#f6ad95',
        500: '#ed8966',
        600: '#dd6b40',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },
      green: {
        100: '#E4F3E5;',
        200: '#c6f6d6',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a160',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },
      zinc: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#575757',
        400: '#3f3f3f',
        500: '#212121',
        600: '#1a1a1a',
        700: '#121212',
        800: '#0c0c0c',
        900: '#060606',
      },
      white: '#fff',
      black: '#000000',
    },
    extend: {
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        display: [
          'Plus Jakarta Display',
        ],
        text: [
          'Plus Jakarta Text',
        ]
      },
      
    },
    // screens: {
    //   '2xl': { 'max': '1535px' },
    //   // => @media (max-width: 1535px) { ... }

    //   'xl': { 'max': '1279px' },
    //   // => @media (max-width: 1279px) { ... }

    //   'lg': { 'max': '1023px' },
    //   // => @media (max-width: 1023px) { ... }

    //   'md': { 'max': '767px' },
    //   // => @media (max-width: 767px) { ... }

    //   'sm': { 'max': '639px' },
    //   // => @media (max-width: 639px) { ... }
    // }
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')]
}
