/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        iconBkg: 'rgba(146, 146, 212, 0.25)',
        navbarBkg: 'rgba(223, 223, 255, 0.05)',
        borderColor: 'rgba(223, 223, 255, 0.10)',
        background: '#020226',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle at top, hsl(287, 60%, 5%) 20%, hsl(287, 30%, 0%))',
      },
    },
  },
  plugins: [],
}
