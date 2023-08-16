/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        'sm':'250px',
      },
      fontFamily: {
        'poppins':['Poppins', 'sans-serif'],
        'dancing':['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [],
}

