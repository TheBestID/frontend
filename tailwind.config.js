/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF713B',
        'secondary-25': '#219EBC40',
        'secondary-60': '#219EBC',
      },
    },
  },
  plugins: [],
}
