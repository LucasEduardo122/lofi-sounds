import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'color-change-purple': {
          '0%, 66.66%': {
            color: '#8A2BE2', // Cor Roxa
          },
          '33.33%, 100%': {
            color: '#FFFFFF', // Cor Branca
          },
        },
        'color-change-orange': {
          '0%, 66.66%': {
            color: '#FF7F50', // Cor Verde
          },
          '33.33%, 100%': {
            color: '#FFFFFF', // Cor Branca
          },
        },
        'color-change-blue': {
          '0%, 66.66%': {
            color: '#0000FF', // Cor Azul
          },
          '33.33%, 100%': {
            color: '#FFFFFF', // Cor Branca
          },
        },
      },
      animation: {
        'color-change-purple': 'color-change-purple 10s linear infinite',
        'color-change-orange': 'color-change-orange 10s linear infinite',
        'color-change-blue': 'color-change-blue 10s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
