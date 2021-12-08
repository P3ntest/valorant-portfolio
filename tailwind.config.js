module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: {
          smoke: "#ECECEC",
          DEFAULT: "#fff",
          light: "#878a8c",
        },
        main: {
          darker: "#12121c",
          dark: "#232629",
          DEFAULT: "#1e1e2d",
          light: "#36393d",
        },
        val: {
          DEFAULT: "#f94655",
        },
        text: {
          nav: "#8FA3B0",
          card: "#0F1923",
          subcard: "#4F4245",
        },
      },
    },
  },
  purge: ["./*.html"],
  variants: {
    extend: {},
  },
  plugins: [],
};
