module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 30s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 7))",
          },
        },
      },
      colors: {
        primary: "#002147",
        secondary: "#472600",
        tertiary: "#C76A00",
      },
      fontFamily: {
        primary: ["Open Sans", "serif"],
        secondary: ["Lato", "sans-serif"],
      },
      minHeight: {
        "1/4-screen": "25vh",
        "1/3-screen": "33vh",
        "1/2-screen": "50vh",
        "3/4-screen": "75vh",
      },
      maxHeight: {
        "1/4-screen": "25vh",
        "1/3-screen": "33vh",
        "1/2-screen": "50vh",
        "3/4-screen": "75vh",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["group-hover"],
      backgroundColor: ["odd"],
    },
  },
  plugins: [],
};
