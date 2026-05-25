/** @type {import('tailwindcss').Config} */
module.exports = {
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
            },
            fontFamily: {
                sans: ["Geist", "sans-serif"],
            },
        },
    },
    plugins: [],
};