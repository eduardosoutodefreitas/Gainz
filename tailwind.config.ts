import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSecondaryBg: "#080808",
      },
      screens: {
        xs: "458px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "2px",
          medium: "8px",
          large: "12px",
        },
      },
      themes: {
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
            focus: "#6020a0",
            secondary: {
              DEFAULT: "#7828c8",
            },
          },
        },
      },
    }),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
export default config;
