/** @type {import('tailwindcss').Config} */

// const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,vue,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica Neue, Helvetica, Arial, sans-serif"],
      mono: ["Courier New", "Menlo", "Monaco"]
    }
  },
};
