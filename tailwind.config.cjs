/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        iconBkg: 'rgba(146, 146, 212, 0.25)',
        background: '#020226',
      },
      backgroundImage: {
        'overlay-pattern': "url('./src/assets/black-orchid.png')",
        'gradient-radial':
          'radial-gradient(circle, #282bb6 0%, #1c2280 20%, #020226 70% , rgba(146, 146, 212, 0) 100%)',
      },
    },
  },
  plugins: [],
}
