/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito', sans-serif",
        opensans: "'Open Sans', sans-serif",
      },
      animation: {
        "gradient-x": "gradient-x 15s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        'pulse-slow': 'pulse 4s linear infinite',
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      perspective: {
        "1000": "1000px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      translate: {
        "z-12": "12px",
      },
    },
  },
  plugins: [],
};
