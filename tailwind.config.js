/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#f9faf4",
                primary: "#000000",
                "on-primary": "#ffffff",

                // 🌙 DARK MODE PALETTE
                dark: {
                    bg: "#0F1412",
                    surface: "#1A2420",
                    surface2: "#22302B",

                    primary: "#3E6B5B",
                    primaryHover: "#4F7F6C",

                    accentRose: "#B87474",
                    accentRoseHover: "#D08F8F",

                    cream: "#C9C3AD",
                    creamBright: "#F6F4E8",

                    text: "#E6EAE8",
                    textSecondary: "#A7B3AD",
                    textMuted: "#6C7A73",
                }
            },
        }
    },
    plugins: [],
};