/** @type {import('tailwindcss').Config} */
export default {
  content: ["/index.html", "./src/**/*{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD6D3B",
        secondary: "#FFFFFF",
        black: "#000000",
        lightGray: "#F2F2F1",
      },
    },
  },
  plugins: [],
};
