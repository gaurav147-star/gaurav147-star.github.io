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
        "pulse-slow": "pulse 4s linear infinite",
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
        pulse: "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        scale: "scale 3s ease-in-out infinite",
        "scroll-slow": "scroll 30s linear infinite",
        "scroll-medium": "scroll 20s linear infinite",
        "scroll-fast": "scroll 10s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
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
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(0.95)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        scale: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
      },
      perspective: {
        1000: "1000px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      translate: {
        "z-12": "12px",
      },
      // Add custom background gradients
      backgroundImage: {
        "skill-gradient":
          "linear-gradient(to right, rgba(236,87,7,0.1), rgba(236,87,7,0.05))",
        "hover-gradient":
          "linear-gradient(to right, rgba(236,87,7,0.2), rgba(236,87,7,0.1))",
      },
      // Add custom box shadows
      boxShadow: {
        skill: "0 4px 20px -2px rgba(236,87,7,0.1)",
        "skill-hover": "0 8px 30px -2px rgba(236,87,7,0.2)",
      },
      // Add custom border colors
      borderColor: {
        skill: "rgba(236,87,7,0.1)",
        "skill-hover": "rgba(236,87,7,0.3)",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
