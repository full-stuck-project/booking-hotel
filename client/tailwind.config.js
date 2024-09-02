/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD6D3B",
        secondary: "#FFFFFF",
        black: "#000000",
        lightGray: "#F2F2F1",
        lightMode: {
          div: "#FFFFFF",
          divText: "##000000",
          h1: "#000000",
          input: "#FFFFFF",
          inputText: "#000000",

        },
        darkMode: {
          div: "#1F2937",
          divText: "#FFFFFF",
          h1: "#FFFFFF",
          input: "#374151",
          inputText: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
