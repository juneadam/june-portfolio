/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'hover-glow': '0 0 5px 5px #ec4899e6, 0 0 10px 12px #ff00ffB3, 0 0 12px 16px #02ccfef2, 0 0 15px 18px #ffffff',
        'focus-glow': '0 0 15px 10px rgba(56, 234, 237, 0.85)'
      }
    },
  },
  plugins: [],
}

