module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#007A87",
        secondary: "#FF5A5F",
        tertiary: "#BFE6EA",
      },
      screens: {
        "3xl": "1600px",
      },
    },
    fontFamily: {
      sans: ["Phantom Sans", "sans-serif"],
      bouquet: ["Bouquet", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
