/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a76d1",
        secondary: "#2c2d3f",
      },
      fontFamily: {
        primary: ["Poppins", "sans serif"],
      },
    },
  },
  plugins: [],
});
