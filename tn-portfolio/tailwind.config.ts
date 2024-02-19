import type { Config } from "tailwindcss";

const config: Config = {
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
        cloud: "url('../public/assets/img/background.png')",
        "cloud-blue": "url('../public/assets/img/ssso.png')",
        "cloud-light": "url('../public/assets/img/light-BG.png')",
        "dragon": "url('../public/assets/img/backgroundragon.jpg')",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' }, 
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        spinner:{
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        logoslider: "slide 10s linear infinite", // Adjust the duration as needed
        spinner: "spinner 10s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
