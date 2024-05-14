/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    theme: {
      colors: {
        transparent: "transparent",
        bg: "#0C0D0E",
        "dark-charcoal": "#101214",
        "super-dark-gray": "#1A1A1A",
        "dim-gray": "#555555",
        "light-gray": "#878787",
        gray: "#D1D1D1",
        accent: "#F7F7F7",
        text: "#CCCCCC",
        primary: "#EFECE6",
        outline: "#D1D1D1",
        gradient: "#fffff",
        gradient2: "#968A73",
        gradient3: "#675E4C",
        indigo: "#4f46e5",
        amber: "#d97706",
        stone: "#0c0a09",
        neutral: "#fafafa",
        orange: "#ffedd5",
        zinc: "#71717a",
      },
    },
    plugins: [
      "prettier-plugin-tailwindcss",
      require("@tailwindcss/container-queries"),
    ],
  },
};
