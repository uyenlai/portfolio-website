/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
      },
      backgroundImage: {
        radialBg:
          "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 10px, #12100e 20px, #2b4162 100px)",
      },
    },
  },
  plugins: [],
};
