/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode
  content: ["/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD6D3B",
        secondary: "#FFFFFF",
        black: "#000000",
        lightGray: "#F2F2F1",
        lightMode: {
          divLight: "#FFFFFF",
          h1Light: "#4A4A4A",
          btnLight: "#FB8C00",
          btnText: "#FFFFFF",
          btnHover: "#F57C00",
        },
        darkMode: {
          divDark: "#000000",
          h1Dark: "#FF5722",
          input: "#000000",
          inputText: "#FFFFFF",
          btnDark: "#FB8C00",
          bgText: "#FFFFFF",
          btnHover: "#F57C00",
          seactionDark: "text-white",
        },
      },
    },
  },
  plugins: [],
};
