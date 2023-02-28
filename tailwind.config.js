/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif'],
        'shantell' : ['Shantell Sans', 'cursive']
      },
      colors:{
        'biru-tua' : '#0B2748',
        'ungu': '#311D5C',
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}