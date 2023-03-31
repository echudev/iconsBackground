/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iconBkg: "rgba(146, 146, 212, 0.25)",
      },
      backgroundImage: {
        "overlay-pattern": "url('./src/assets/black-orchid.png')",
      },
    },
  },
  plugins: [],
};
