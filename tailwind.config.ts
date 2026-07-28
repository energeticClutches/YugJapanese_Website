import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        sumi: "#2f3230",
        stone: "#666666",
        paper: "#ffffff",
        washi: "#f7f7f8",
        line: "#eaeaea",
        vermilion: "#b64232",
        moss: "#59685a",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(17, 17, 17, 0.08)",
        lift: "0 20px 70px rgba(17, 17, 17, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
