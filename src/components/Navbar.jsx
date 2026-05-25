"use client";

import { useTheme } from "next-themes";

export default function Navbar() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <nav className="
            rounded-full mt-6 mx-auto w-[calc(100%-40px)] max-w-6xl sticky top-4 z-50
            bg-white/40 dark:bg-[#1A2420]
            backdrop-blur-md
            border border-white/40 dark:border-[#22302B]
            shadow-sm
            flex justify-between items-center px-8 py-3
        ">

            {/* Logo */}
            <div className="font-bold text-xl text-black dark:text-[#E6EAE8]">
                alex.dev
            </div>

            {/* Links */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
                <a href="#work" className="hover:text-black/70 dark:hover:text-[#E6EAE8] text-black dark:text-[#A7B3AD]">
                    Work
                </a>
                <a href="#about" className="hover:text-black/70 dark:hover:text-[#E6EAE8] text-black dark:text-[#A7B3AD]">
                    About
                </a>
                <a href="#stack" className="hover:text-black/70 dark:hover:text-[#E6EAE8] text-black dark:text-[#A7B3AD]">
                    Stack
                </a>
                <a href="#contact" className="hover:text-black/70 dark:hover:text-[#E6EAE8] text-black dark:text-[#A7B3AD]">
                    Contact
                </a>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="
                    px-5 py-2 rounded-full text-sm font-medium
                    bg-black text-white
                    dark:bg-[#3E6B5B] dark:text-[#E6EAE8]
                    hover:scale-105 transition
                "
            >
                {resolvedTheme === "dark"
                    ? "Light Mode ☀️"
                    : "Dark Mode 🌙"}
            </button>

        </nav>
    );
}