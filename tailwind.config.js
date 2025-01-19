/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#F8F8F8",
        "secondary" :"#F1D6AB",
        "accent" : "#2B2B28"
      }
    },
  },
  plugins: [],
}

