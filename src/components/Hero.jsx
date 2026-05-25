"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiNodedotjs,
    SiMongodb
} from "react-icons/si";

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-28"
        >

            {/* LEFT SIDE */}
            <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 pt-10"
            >

                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/35 backdrop-blur-xl border border-white/50 shadow-sm mb-8">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#69c58b]"></span>
                    <span className="text-[15px] text-[#4b4b4b] font-medium">
                        Full-stack developer — open to work
                    </span>
                </div>

                {/* TITLE */}
                <h1 className="text-[42px] md:text-[56px] font-serif leading-[1.1] text-[#111] mb-4">
                    Hi, I’m <span className="text-[#5ea77d]">Aysha Akter Saima</span>
                </h1>

                {/* ROLE */}
                <h2 className="text-[22px] md:text-[28px] text-[#444] mb-4">
                    Full-Stack Web Developer
                </h2>

                {/* DESCRIPTION */}
                <p className="text-[18px] text-[#666] max-w-[560px] leading-[1.8] mb-8">
                    I design and build modern, scalable web applications with clean UI,
                    smooth interactions, and strong performance.
                </p>

                {/* BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap items-center gap-5"
                >

                    <a
                        href="#contact"
                        className="h-[55px] px-8 rounded-full bg-[#111] text-white font-semibold hover:scale-[1.03] transition flex items-center justify-center"
                    >
                        Contact Me →
                    </a>
                </motion.div>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 flex justify-center items-center relative pt-10"
            >

                {/* IMAGE WRAPPER */}
                <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">

                    {/* GLOW */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-300/30 via-purple-300/20 to-pink-300/20 blur-2xl" />

                    {/* PROFILE IMAGE */}
                    <Image
                        src="/your-image.jpg"
                        alt="profile"
                        fill
                        className="object-cover rounded-full border border-white/40 shadow-2xl"
                    />

                    {/* FLOATING ICONS (ANIMATED) */}

                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute -top-5 left-1/2 -translate-x-1/2 animate-float"
                    >
                        <TechIcon icon={<SiReact />} label="React" color="#61DAFB" />
                    </motion.div>

                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-1/3 -left-12 animate-float-slow"
                    >
                        <TechIcon icon={<SiNextdotjs />} label="Next.js" color="#000" />
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="absolute bottom-10 left-0 animate-float"
                    >
                        <TechIcon icon={<SiJavascript />} label="JS" color="#F7DF1E" />
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 animate-float-slow"
                    >
                        <TechIcon icon={<SiNodedotjs />} label="Node" color="#3C873A" />
                    </motion.div>

                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute top-1/3 -right-12 animate-float"
                    >
                        <TechIcon icon={<SiMongodb />} label="MongoDB" color="#4DB33D" />
                    </motion.div>

                </div>

            </motion.div>

        </motion.section>
    );
}

/* TECH ICON COMPONENT */
function TechIcon({ icon, label, color }) {
    return (
        <div className="px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-md flex items-center gap-2 text-[12px] font-medium">

            <span className="text-lg" style={{ color }}>
                {icon}
            </span>

            {label}
        </div>
    );
}