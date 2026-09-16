/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F1F2EC",
        surface: "#FFFFFF",
        ink: "#161D18",
        "ink-muted": "#4B564E",
        graphite: "#181C19",
        primary: {
          DEFAULT: "#0F4D34",
          dark: "#0A3826",
          light: "#E4EEE8",
        },
        accent: {
          DEFAULT: "#B5651D",
          soft: "#F1E1CB",
          dark: "#8C4E15",
        },
        border: "#DAD7C9",
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
      },
    },
  },
  plugins: [],
};
