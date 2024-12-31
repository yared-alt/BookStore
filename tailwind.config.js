/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#ffce1a",
        "secondary": "#0o0842",
        "blackBG": "#f3f3f3",
        "Favorite": "#ff5841"
      }
    },
  },
  plugins: [],
}

