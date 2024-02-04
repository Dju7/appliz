import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffff",
      grayBlack: "#191919",
      primary:"#343434",
      secondary: '#5DEBF0',

    },
    extend: {
      
    },
  },
  plugins: [],
};
export default config;
