/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070807",
        blacktop: "#030403",
        charcoal: "#131513",
        panel: "#1a1b18",
        bone: "#f4efe5",
        "bone-soft": "#d8d0c0",
        muted: "#9f9788",
        gold: "#c99b4d",
        "gold-bright": "#e2bd67",
        copper: "#b86f3d",
        forest: "#31513b",
        moss: "#748567",
        earth: "#745239"
      },
      fontFamily: {
        sans: ["Space Grotesk", "Avenir Next", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"]
      },
      maxWidth: {
        site: "1320px"
      },
      backgroundImage: {
        "site-grid": "linear-gradient(90deg, rgba(244,239,229,0.055) 1px, transparent 1px)",
        "hero-installation": "url('/assets/images/hero-installation.svg')"
      },
      animation: {
        "fade-up": "fadeUp 720ms ease both"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};
