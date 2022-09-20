/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage:{
        galaxy: "url('/background-galaxy.png')",
        'gradient-duo': 'linear-gradient(60deg, #9572FC 21%, #43E7AD 54%, #E1D55D 70%)',
      }
    },
  },
  plugins: [],
}
