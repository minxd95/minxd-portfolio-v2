/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.slate["700"],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0%" },
          to: { opacity: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease",
      },
    },
  },
  plugins: [],
};
