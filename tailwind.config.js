/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // ✅ Dark mode पूरी तरह disable
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        ring: "var(--ring)",
      },
    },
  },
  plugins: [],
}
