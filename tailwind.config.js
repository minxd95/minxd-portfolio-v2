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
        "fade-up": {
          from: {
            opacity: "0%",
            transform: "translate(0, 16px)",
          },
          to: {
            opacity: "100%",
            transform: "translate(0, 0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease backwards",
        "fade-up": "fade-up 1s ease backwards",
      },
      backgroundImage: {
        me: "url('https://seom.in/assets/images/me.jpeg')",
      },
    },
  },
  plugins: [],
};
