import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        honeydew: "#F5FFF4",
        nyanza: "#EFFEDC",
        fern_green: "#588645",
        smoke_white: "#F5F5F5",
        navy_blue: "#010066",
        federal_blue: "#090844",
        black: "#000000",
        pale_olive: "#ACC67F",
        light_blue: "#E6F5FF",
      },
      screens: {
        xs: "420px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      borderRadius: {
        "2.5xl": "20px",
        "4xl": "30px",
      },
    },
  },
  plugins: [],
});
