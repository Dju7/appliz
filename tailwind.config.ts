import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      cloud: "#ffff",
      grayBlack: "#191919",
      primary:"#343434",
      secondary: '#5DEBF0',
      tertiary: "#B23BFF",
      alert: "#ff0000",
      yell: "#FAF433"

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { 
      '3xl': '2400px',
    },
    fontFamily: {
      
      'welcome': ["Silkscreen", 'sans-serif'],
      
    },
    extend: {
      
    },
  },
  plugins: [],
};
export default config;
