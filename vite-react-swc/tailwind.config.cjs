/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ['Satisfy'],
        cedarvilleCursiv: ['CedarvilleCursiv', 'cursive'],
      },
      backgroundImage: {
        home: "url('/src/assets/images/bg-blomster.jpg')",
      },
    },
  },
  plugins: [],
};
