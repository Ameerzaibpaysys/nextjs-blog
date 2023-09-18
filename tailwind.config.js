/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
       bodyFont:["Poppins", "sans-serif"],
       titleFont:["Montserrat","sans-serif"],
      },
    colors: {
      bodyColor:"#212428",
      lightText:"#c4cfde",
      boxBg:"linear-gradient(145dge,#1e2024,#23272b",
      designColor:"#ff014f",
    },
    boxShadow:{
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },
    },
  },
  plugins: [],
}
