/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'false',
  theme: {
    extend: {
      fontFamily: {
        Syne: ['"Syne"', "sans-serif"],
        Montserrat: ['"Montserrat"', "sans-serif"],
        Bebas: ['"Bebas Neue"', "sans-serif"],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

