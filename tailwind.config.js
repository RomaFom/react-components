/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        gray038: "rgba(0, 0, 0, 0.38)",
        blue: {
          ce7: "#216ce7",
        },
      },
      animation: {
        move: "move 1.25s linear 2 both",
        fill: "fill 2.5s both",
      },
      keyframes: {
        move: {
          "75%, 100%": { translate: "0 88px" },
        },
        fill: {
          "0%,20%": { translate: "0 0" },
          "40%,70%": { translate: "0 -50%" },
          "90%,100%": { translate: "0 -100%" },
        },
      },
    },
  },
  plugins: [],
};
