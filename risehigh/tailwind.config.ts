import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: '0.6rem', //6px
      sm: '0.8rem', //8px
      base: '1rem', //10px
      lg: '1.2rem', //12px
      xl: '1.4rem', //14px
      '2xl': '1.6rem', //16px
      '3xl': '1.8rem', //18px
      '4xl': '2rem', //20px
      '5xl': '2.4rem', //24px
      '6xl': '3rem', //30px
      '7xl': '3.6rem', //36px
      '8xl': '4.6rem', //48px
      '9xl': '6.4rem', //64px
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dm: ["DM Sans, sans-serif",...defaultTheme.fontFamily.sans],
        quicksand: ["Quicksand, sans-serif",...defaultTheme.fontFamily.sans],
        jost: [ "Jost, sans-serif",...defaultTheme.fontFamily.sans]
   
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }:{ addBase: Function }) {
      addBase({
        html: { fontSize: '10px' },
      })
    }),
  ],
};
export default config;
