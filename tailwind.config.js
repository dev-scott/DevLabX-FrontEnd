/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        header: "560px",
        rate: "400px"
      },
      fontSize: {
        h1: "2.6rem"
      },
      screens:{
        xs:'475px',
      },

      colors: {
        primary: "#0B0033",

        secondary: "",
        border: "#001427",
        red: "#D81E5B",
        white: "#FFFFFF"
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
