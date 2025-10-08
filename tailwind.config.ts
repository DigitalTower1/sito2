import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#06121F",
        abyss: "#03070C",
        ember: "#FF6B3D",
        aurora: "#4AC6FF"
      },
      backgroundImage: {
        carbon: "linear-gradient(135deg, rgba(10,18,26,0.95) 25%, rgba(5,10,16,0.95) 25%, rgba(5,10,16,0.95) 50%, rgba(10,18,26,0.95) 50%, rgba(10,18,26,0.95) 75%, rgba(5,10,16,0.95) 75%), linear-gradient(135deg, rgba(255,107,61,0.18), rgba(74,198,255,0.18))",
        "particle-glow": "radial-gradient(circle at center, rgba(74,198,255,0.4), transparent 60%)"
      },
      boxShadow: {
        neon: "0 0 25px rgba(74,198,255,0.35)",
        ember: "0 0 20px rgba(255,107,61,0.35)"
      },
      animation: {
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        float: "float 8s ease-in-out infinite"
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 1 }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
