const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#dc4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #2FCBFF 14.53%, #FC59ff 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playFair: ["Playfair", "serif"],
        majorMono: ["Major Mono Display", "san-serif"],
        redHat: ["Red Hat Mono", "serif"],
      },
      content: {
        brush: url("./assets/brush.png"),
        person1: url("./assets/person-1.png"),
        person2: url("./assets/person-2.png"),
        person3: url("./assets/person-3.png"),
      },
    },
    screens: {
      xs: "480px",
      sm: "768",
      md: "1060px",
    },
  },
  plugins: [],
};
