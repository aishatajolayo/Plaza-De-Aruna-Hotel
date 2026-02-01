/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a', // deep blue
        accent: '#c9a227'   // gold
      }
    },
  },
  plugins: [],
};
