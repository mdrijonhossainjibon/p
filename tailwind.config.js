module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green: { 300: "#7fdf70" },
        gray: {
          500: "#909090",
          700: "#6a6a6a",
          800: "#39393c",
          900: "#111111",
          "900_02": "#262626",
          "900_03": "#0e2a25",
          "900_04": "#2e181d",
          "900_05": "#352e16",
          "900_01": "#1d1d1f",
        },
        teal: { A700: "#00b595" },
        blue_gray: { 100: "#d9d9d9", 900: "#2f2f2f" },
        red: { 400: "#d1425e" },
        yellow: { 600: "#ffd532", 800: "#e9a92a" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
