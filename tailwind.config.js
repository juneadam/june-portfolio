/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "hover-glow":
          "0 0 5px 5px #ec4899e6, 0 0 8px 12px #ff00ffB3, 0 0 14px 10px #02ccfe, 0 0 18px 4px #ffffff, inset 0 0 5px 5px #ec4899e6",
        "focus-glow":
          "0 0 15px 10px rgba(56, 234, 237, 0.85), inset 0 0 15px 10px rgba(56, 234, 237, 0.3)",
        "hover-card":
          "0 0 5px 5px #f97068, 0 0 10px 5px #ff00ff, 0 0 15px 5px #ffffff",
        "hover-carousel-toggle":
          "0 0 5px 5px #02ccfe, inset 0 0 10px 0 #02ccfe",
      },
      colors: {
        "purple-june": "rgb(88, 51, 136)",
        "carousel-toggle": "#02ccfe",
      },
    },
  },
  plugins: [],
};
