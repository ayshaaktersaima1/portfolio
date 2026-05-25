"use client";

import { motion } from "framer-motion";
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiGit, SiHtml5, SiCss } from "react-icons/si";

export default function Stack() {
    return (
        <motion.section
            id="stack"
            className="max-w-6xl mx-auto px-6 pb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >

            {/* HEADING */}
            <motion.h2
                className="text-3xl md:text-4xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Technologies
            </motion.h2>

            {/* SUB HEADING */}
            <motion.p
                className="text-black/60 mb-8 text-lg"
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
            >
                My tech stack
            </motion.p>

            {/* FLEX WRAP */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">

                <TechCircle icon={<SiJavascript />} name="JS" color="text-yellow-400" /> <TechCircle icon={<SiReact />} name="React" color="text-cyan-400" /> <TechCircle icon={<SiNextdotjs />} name="Next" color="text-black" /> <TechCircle icon={<SiNodedotjs />} name="Node" color="text-green-600" /> <TechCircle icon={<SiExpress />} name="Express" color="text-gray-800" /> <TechCircle icon={<SiMongodb />} name="Mongo" color="text-green-500" /> <TechCircle icon={<SiTailwindcss />} name="Tailwind" color="text-sky-400" /> <TechCircle icon={<SiGit />} name="Git" color="text-orange-500" /> <TechCircle icon={<SiHtml5 />} name="HTML" color="text-orange-500" /> <TechCircle icon={<SiCss />} name="CSS" color="text-blue-500" />
            </div>

        </motion.section>
    );
}

/* ================= CIRCLE ================= */
function TechCircle({ icon, name, color }) {
    return (
        <motion.div
            className="
                flex flex-col items-center justify-center
                w-20 h-20 sm:w-22 sm:h-22
                rounded-full
                bg-white/40 backdrop-blur border border-white/40
                hover:bg-white transition hover:scale-105
            "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.08 }}
        >
            <span className={`text-2xl ${color}`}>
                {icon}
            </span>

            <span className="text-[10px] font-medium text-black/80">
                {name}
            </span>
        </motion.div>
    );
}