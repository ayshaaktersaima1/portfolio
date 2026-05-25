"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 pb-32">

            {/* TITLE */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold"
            >
                Get In Touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-black/60 mt-2 mb-12 text-lg"
            >
                Let’s work together
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h3 className="text-xl font-bold mb-6">
                        Talk to Me
                    </h3>

                    <div className="space-y-4">

                        {/* EMAIL */}
                        <a
                            href="mailto:ayshaaktersaima1@gmail.com"
                            className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 backdrop-blur border border-white/40 hover:bg-white transition"
                        >
                            <FaEnvelope className="text-2xl text-red-500" />

                            <div>
                                <p className="font-semibold">Email</p>
                                <p className="text-sm text-black/60">
                                    ayshaaktersaima1@gmail.com
                                </p>
                                <span className="text-xs text-green-600">
                                    Write me →
                                </span>
                            </div>
                        </a>

                        {/* LINKEDIN */}
                        <a
                            href="https://www.linkedin.com/in/aysha-akter-saima/"
                            target="_blank"
                            className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 backdrop-blur border border-white/40 hover:bg-white transition"
                        >
                            <FaLinkedin className="text-2xl text-blue-500" />

                            <div>
                                <p className="font-semibold">LinkedIn</p>
                                <p className="text-sm text-black/60">
                                    aysha akter saima
                                </p>
                                <span className="text-xs text-green-600">
                                    Write me →
                                </span>
                            </div>
                        </a>

                        {/* GITHUB */}
                        <a
                            href="https://github.com/ayshaaktersaima1"
                            target="_blank"
                            className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 backdrop-blur border border-white/40 hover:bg-white transition"
                        >
                            <SiGithub className="text-2xl text-black" />

                            <div>
                                <p className="font-semibold">GitHub</p>
                                <p className="text-sm text-black/60">
                                    ayshaaktersaima1
                                </p>
                                <span className="text-xs text-green-600">
                                    Write me →
                                </span>
                            </div>
                        </a>

                    </div>
                </motion.div>

                {/* RIGHT SIDE (FORM) */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h3 className="text-xl font-bold mb-6">
                        Write Me Your Project
                    </h3>

                    <form className="space-y-4">

                        <input
                            className="w-full p-3 rounded-xl bg-white/40 border border-white/40"
                            placeholder="Insert your name"
                        />

                        <input
                            className="w-full p-3 rounded-xl bg-white/40 border border-white/40"
                            placeholder="Insert your email"
                        />

                        <textarea
                            rows="5"
                            className="w-full p-3 rounded-xl bg-white/40 border border-white/40"
                            placeholder="Write your project"
                        />

                        <button
                            className="w-full h-[50px] bg-black text-white rounded-xl hover:opacity-90 transition"
                        >
                            Send Message →
                        </button>

                    </form>

                </motion.div>

            </div>
        </section>
    );
}