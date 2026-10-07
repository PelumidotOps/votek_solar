/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#76B521",
          light: "#EAF4DE",
          badge: "#D5E8BA",
          dark: "#0C2518",
          darker: "#081B11"
        },
        slate: {
          950: "#0C0B0B"
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
