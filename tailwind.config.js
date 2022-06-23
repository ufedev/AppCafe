/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.js",
    "./styles/**/*.css",
    "./public/**/*",
    "./components/**/*.js",
    "./layout/**/*.js",
  ],
  theme: {
    extend: {
      width: {
        128: "50rem",
      },
    },
  },
  plugins: [],
}
