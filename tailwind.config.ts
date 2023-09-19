import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "blue-darker": "#0A1529",
        "blue-dark": "#0F2040",
        "blue-gray": "#172847",
        "blue-light": "#5E97FF",
        "blue-white": "#F3FCFE",
      },
    },
  },
  plugins: [],
};
export default config;
