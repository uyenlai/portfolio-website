/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
      },
      backgroundImage: {
        darkRadialBg:
          "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 10px, #12100e 20px, #2b4162 100px)",
        lightRadialBg:
          "repeating-radial-gradient(rgba(0,0,0,.4) 2px, rgb(214, 219, 220) 2px, rgb(255, 255, 255) 105px)",
      },
    },
  },
  plugins: [],
};
