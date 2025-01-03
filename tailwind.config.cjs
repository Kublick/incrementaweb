/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      coolvetica: ["Coolvetica", "Helvetica"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          light: "#DBE2F3",
          DEFAULT: "#21409A",
          dark: "#13255C",
        },
        secondary: {
          light: "#F6AFC8",
          DEFAULT: "#E7407B",
          dark: "#a22d56",
        },
        mango: {
          light: "#fff3ec",
          btn: "#ff8f50",
          DEFAULT: "#FF8840",
        },
        whats: {
          DEFAULT: "#25d366",
        },
        telegram: {
          DEFAULT: "#229ED9",
        },
        ventaBlue: "#2749A8",
        redVenta: "#ff1212",
        buttonRed: "rgba(216, 2, 0, 1)",
        purple: "#7465F7",
        blue: "#5885EF",
        lightPurple: "#B3A7D8",
        blueLight: "#36ABE6",
      },
    },
  },
  plugins: [],
};

