/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '24': '6rem', // following the standard of 128 / 4 = 32
      }
    },
    fontFamily: {
      'sans': ["Plus Jakarta Sans", "sans-serif"]
    }
  },
  plugins: [],
};
