/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#030014", // Deep Space
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "cosmic-dust": "#2A275C",
        "neon-blue": "#00F0FF", // Bright Cyan
        "neon-purple": "#BC13FE", // Deep Neon Purple
        "neon-pink": "#FF007F", // Neon Pink for accents
        "starlight": "#FFFFFF",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glow: "0 0 20px rgba(0, 240, 255, 0.4)",
        "glow-purple": "0 0 20px rgba(188, 19, 254, 0.4)",
        "glow-pink": "0 0 20px rgba(255, 0, 127, 0.4)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      fontFamily: {
         sans: ["Outfit", "sans-serif"],
         mono: ["Fira Code", "monospace"], // For code snippets/terminal feel
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
