module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        themeBackground: "var(--background)",
        themeText: "var(--text)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
