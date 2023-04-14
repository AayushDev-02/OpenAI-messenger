/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    extend: {
      colors: {
        primary: '#17132b',
        secondary: '#252038',
        tertiary: '#2d2a40',
        brand: '#fe754d',
        secondary_brand: '#4c3441',
        secondary_text: '#9b98a5',
        primary_text: '#ffffff'
      },
      animation: {
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(2deg)',
          },
          '75%': {
            transform: 'rotate(-2deg)',
          },
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
