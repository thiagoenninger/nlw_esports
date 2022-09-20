/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily:{
      sans:['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage:{
        galaxy: "url('/background-galaxy.png')",
        'gradient-duo': 'linear-gradient(60deg, #9572FC 21%, #43E7AD 54%, #E1D55D 70%)',
        'game-text-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67%)',
      }
    },
  },
  plugins: [],
}
