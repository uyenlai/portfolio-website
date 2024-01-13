/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
      },
      backgroundImage: {
        darkRadialBg:
          "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 10px, #22303c 15px, #22303c 90px)",
        lightRadialBg:
          "repeating-radial-gradient(rgba(0,0,0,.4) 2px, rgb(214, 219, 220) 5px, rgb(255, 255, 255) 95px)",
      },
      backgroundColor: {
        darkBg: "#22303c",
      },
    },
  },
  plugins: [],
};
