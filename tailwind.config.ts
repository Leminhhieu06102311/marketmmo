import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3861fb",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "xxs": "12px"
      },
      maxWidth: {
        "xxs": '23rem',
        "8xl": '1402px'
      },
      width: {
        "71": "17.3rem",
        "category-mobile": "22.5rem"
      }
    },
  },
  plugins: [require('preline/plugin'),],
};
export default config;
