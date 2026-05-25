"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="max-w-6xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >

            {/* LEFT SIDE */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >

                <h2 className="text-3xl font-bold mb-8 text-black ">
                    About me
                </h2>

                <div className="space-y-4 text-black/60  max-w-lg leading-7">

                    <p>
                        I’m a full-stack developer who loves turning ideas into beautiful,
                        functional products. I enjoy working with modern technologies to
                        build fast, scalable, and user-friendly applications.
                    </p>

                </div>

                {/* BUTTON */}
                <motion.a
                    href="/resume.pdf"
                    download
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-8 w-fit px-8 py-3 rounded-full flex items-center gap-2
    bg-black text-white hover:opacity-90 transition"
                >
                    ⬇ Download Resume
                </motion.a>

            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl p-8
                bg-white/40 
                backdrop-blur border border-white/40 "
            >

                <h3 className="text-xl font-bold mb-8 text-black ">
                    My Education
                </h3>

                <div className="space-y-8 relative">

                    {/* LINE */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-black/10 "></div>

                    {/* ITEM 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative flex items-start pl-8"
                    >
                        <Dot color="green" />
                        <Content
                            title="SSC"
                            time="2017"
                            desc="Mirza Ahmed Ispahani High School"
                        />
                    </motion.div>

                    {/* ITEM 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative flex items-start pl-8"
                    >
                        <Dot color="pink" />
                        <Content
                            title="HSC"
                            time="2017 - 2019"
                            desc="Bangladesh Mahila Samiti Girls High School & College"
                        />
                    </motion.div>

                    {/* ITEM 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative flex items-start pl-8"
                    >
                        <Dot color="black" />
                        <Content
                            title="BSc in CSE"
                            time="2021 - 2024"
                            desc="International Islamic University Chittagong"
                        />
                    </motion.div>

                </div>

            </motion.div>

        </section>
    );
}

/* ================= REUSABLE COMPONENTS ================= */

function Dot({ color }) {
    const colors = {
        green: "bg-green-600",
        pink: "bg-pink-600",
        black: "bg-black "
    };

    return (
        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white  border-4 border-white  flex items-center justify-center">
            <div className={`w-2 h-2 rounded-full ${colors[color]}`} />
        </div>
    );
}

function Content({ title, time, desc }) {
    return (
        <div className="flex-1">
            <div className="flex justify-between mb-1 flex-wrap gap-2">
                <span className="font-bold text-black ">{title}</span>
                <span className="text-sm text-black/50 ">{time}</span>
            </div>
            <p className="text-sm text-black/60 ">{desc}</p>
        </div>
    );
}