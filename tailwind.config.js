import forms from '@tailwindcss/forms';
import prelinePlugin from 'preline/plugin';

export default {
  content: [
    // './src/**/*.{html,js}',
      'node_modules/preline/dist/*.js',
  ],
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
        200: '#E4EEF3',
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
        100: '#F5F5F5',
        200: '#DEDEDE',
        300: '#d2d6dc',
        400: '#A8A8A8',
        500: '#6b7280',
        600: '#4b5563',
        700: '#3C3C3C',
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
        300: '#D9D9D9',
        400: '#3f3f3f',
        500: '#212121',
        600: '#1a1a1a',
        700: '#121212',
        800: '#0c0c0c',
        900: '#060606',
      },
      stone: {
        100: '#f8fafc',
        200: '#f1f5f9',
        300: '#D0D0D0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
      },
      white: '#fff',
      black: '#000000',
      'regal-blue': '#243c5a',
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
      // borderWidth: {
      //   '0.5': '0.5px',
      // },
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
  plugins: [prelinePlugin]
}
