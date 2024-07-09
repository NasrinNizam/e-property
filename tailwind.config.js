/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
    'poppins': ["Poppins", 'sans-serif'],
    'roboto' : ["Roboto", 'sans-serif']
    },
    extend: {
    },
    container:{
      center:true,
      padding: '50px'
    }
  },
  plugins: [],
}