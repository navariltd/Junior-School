/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',            // Vite entry point
    './src/**/*.{vue,js,ts}',  // All Vue, JS, and TS files in src folder
    './components/**/*.{vue,js,ts, jsx, tsx}', // If using a components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [
    require('frappe-ui/src/utils/tailwind.config')
  ],
}
