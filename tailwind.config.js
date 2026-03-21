/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unilag: {
          maroon: '#7D0000',
          gold: '#FFD700',
          darkblue: '#001F3F',
          lightgold: '#FFF5E0', // <--- Make sure this line exists!
        },
      },
    },
  },
  plugins: [],
}