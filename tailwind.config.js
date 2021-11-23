const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.warmGray,
      white: "#fff",
    },
    fontFamily: {
      sans: ['"Noto Sans TC"'],
      serif: ['"Noto Serif TC"', "Georgia"],
    },
    lineHeight: {
      normal: "1.75",
      relaxed: "2",
      loose: "2.5",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
