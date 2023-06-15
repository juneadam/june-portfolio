/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'hover-glow': '0 0 8px 4px rgba(56, 234, 237, 0.883)',
        'focus-glow': '0 0 15px 10px rgb(56, 234, 237)'
      }
    },
  },
  plugins: [],
}

