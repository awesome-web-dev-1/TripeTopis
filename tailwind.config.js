/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryClr:'#FA7335',
        secodaryClr:'#012E41',
        bodyFontClr:'#345867',
        bgClr1:'#F6F6F6'
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"],
      },
      screens:{
        xs:"575px",
        sm:"768px",
        md:"992px",
        lg:"1200px",
        xl:"1400px"
      }
    },
  },
  plugins: [],
}