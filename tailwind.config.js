/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'red-radial-gradient': 'radial-gradient(50% 50% at 50% 50%,#eb4432 0,hsla(0,0%,100%,0) 100%)',
        'blue-radial-gradient': 'radial-gradient(50% 50% at 50% 50%,#22d3ee 0,hsla(0,0%,100%,0) 100%)',
        'orange-radial-gradient': 'radial-gradient(50% 50% at 50% 50%,#ea580c 0,hsla(100,100%,100%,100) 100%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

