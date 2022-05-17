module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  plugins: [],
  darkMode: "class",
  theme: {
    minHeight: {
      screen: "calc(var(--vh, 1vh) * 100)",
    },
    fontFamily: {
      oswald: "'Oswald', sans-serif",
    },
  },
};
