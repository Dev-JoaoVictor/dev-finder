/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue_100: "#0079FF",
      blue_200: "#4B6A9B",
      blue_300: "#1E2A47",
      gray_100: "#F6F8FF",
      gray_200: "#697C9A",
      black: "#2B3442"

    }
  },
  plugins: [],
}