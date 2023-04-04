/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        iconBkg: "rgba(146, 146, 212, 0.25)",
      },
      backgroundImage: {
        "overlay-pattern": "url('./src/assets/black-orchid.png')",
        "gradient-radial":
          "radial-gradient(circle, #202283 0%, #0f134c 50%, #020226 100%)",
      },
    },
  },
  plugins: [],
};
