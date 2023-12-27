/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#EFFFEF",
          main: "#94D080",
          light: "#E6F0E3",
          dark: "#585858",
        },
        white: {
          DEFAULT: "#F9FAF9",
          light: "#F5F5F5",
          main: "#F6F7F6",
        },
        dark: {
          DEFAULT: "#0F1824",
          main: "#4F4F4F",
          light: "#34333E",
          muted: "#BBB8BE",
          gray: "#E4E8E2",
        },
        danger: {
          DEFAULT: "#F74912",
        },
        info: {
          DEFAULT: "#396DF2",
        },
      },
    },
  },
  plugins: [],
};
