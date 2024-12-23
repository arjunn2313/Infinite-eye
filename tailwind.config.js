/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#F5A102",
        secondary : "#0C667A",
        content : "#A2A2A2"

      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'primary': '0 4px 10px rgba(0, 123, 255, 0.3)',  
      },
    },
  },
  plugins: [],
}