/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.js",        // Add this because your index.js is in the root
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}