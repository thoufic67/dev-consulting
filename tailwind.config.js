import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(calc(0%))" },
        },
        blur: {
          "0%": { filter: "blur(100px)" },
          "100%": { filter: "blur(0px)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        "fast-scroll": "scroll 10s linear infinite ",
        blur: "blur .5s ease-in forwards",
      },
      fontFamily: {
        grotesk: ["Familjen Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      defaultTheme: "dark",
      colors: {
        primary: "#FF4533",
      },
    }),
  ],
};
