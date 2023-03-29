/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        iconBkg: "rgba(46, 46, 212, 0.45)",
      },
    }
  },
  plugins: []
}
