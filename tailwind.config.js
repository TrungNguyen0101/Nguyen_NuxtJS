/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    mb: "480px",

    sm: "576px",

    md: "768px",

    lg: "992px",

    xl: "1200px",

    "2xl": "1536px",
  },
};
