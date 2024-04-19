/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-pink': '#ffe6e6',
        'custom-pink':'#FF9E9E',
        'custom-light-gray': '#d5d5d5',
      },
    },
  },
  plugins: [],
}

