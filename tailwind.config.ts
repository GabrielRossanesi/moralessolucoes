import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06080c",
        graphite: "#0d1118",
        graphite2: "#151b24",
        paper: "#f5f4ef",
        paper2: "#e8e7df",
        gold: "#c99a3c",
        goldSoft: "#efd38b",
        mist: "#aab4bd",
        cyanSoft: "#8ad8e8",
      },
      boxShadow: {
        glow: "0 0 40px rgba(201, 154, 60, 0.12)",
        premium: "0 12px 48px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "gold-radial": "radial-gradient(circle at 50% 0%, rgba(239, 211, 139, 0.24), transparent 38%)",
      },
    },
  },
  plugins: [],
};

export default config;
