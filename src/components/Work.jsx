"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Work() {
    return (
        <section id="work" className="max-w-6xl mx-auto px-6 pb-32">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-between items-end mb-10"
            >

                <h2 className="text-3xl font-bold">
                    Projects
                </h2>

                <a
                    href="#"
                    className="text-black/60 hover:text-black flex items-center gap-1 transition"
                >
                    View all projects →
                </a>

            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* PROJECT 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/40 backdrop-blur border border-white/40 rounded-3xl p-6 group hover:shadow-xl transition-all duration-300"
                >

                    <div className="flex justify-between items-start mb-4">

                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                            Full Stack
                        </span>

                        <a href="https://car-rental-seven-ecru.vercel.app/" target="_blank"
                            className="p-2 bg-white/40 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition">
                            ↗
                        </a>

                    </div>

                    <h3 className="text-2xl font-bold mb-2">
                        DriveFleet Car Rental
                    </h3>

                    <p className="text-black/60 text-sm mb-6 leading-relaxed min-h-[60px]">
                        Full-stack car rental platform with authentication, booking system, CRUD operations,
                        protected routes, and user profile-based features.
                    </p>

                    <div className="relative rounded-xl overflow-hidden mb-6 aspect-[16/10] bg-gray-100 border border-black/5">
                        <Image
                            src="/p1.png"
                            alt="project1"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-wrap gap-2">
                        <a
                            href="https://car-rental-seven-ecru.vercel.app/"
                            target="_blank"
                            className="px-3 py-1 rounded bg-green-600 text-white text-[10px] font-bold"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/ayshaaktersaima1/car-rental"
                            target="_blank"
                            className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold"
                        >
                            Client Repo
                        </a>

                        <a
                            href="https://github.com/ayshaaktersaima1/car-rental-server"
                            target="_blank"
                            className="px-3 py-1 rounded bg-black/80 text-white text-[10px] font-bold"
                        >
                            Server Repo
                        </a>
                    </div>

                </motion.div>

                {/* PROJECT 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/40 backdrop-blur border border-white/40 rounded-3xl p-6 group hover:shadow-xl transition-all duration-300"
                >

                    <div className="flex justify-between items-start mb-4">

                        <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold">
                            Nextjs
                        </span>

                        <a href="https://tiles-gallery-xi.vercel.app/" target="_blank"
                            className="p-2 bg-white/40 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition">
                            ↗
                        </a>

                    </div>

                    <h3 className="text-2xl font-bold mb-2">
                        Tiles Gallery
                    </h3>

                    <p className="text-black/60 text-sm mb-6 leading-relaxed min-h-[60px]">
                        Modern gallery web app with authentication, search system,
                        profile management and responsive UI.
                    </p>

                    <div className="relative rounded-xl overflow-hidden mb-6 aspect-[16/10] bg-gray-100 border border-black/5">
                        <Image
                            src="/p2.png"
                            alt="project1"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-wrap gap-2">

                        <a
                            href="https://tiles-gallery-xi.vercel.app/"
                            target="_blank"
                            className="px-3 py-1 rounded bg-pink-600 text-white text-[10px] font-bold"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/ayshaaktersaima1/tiles-gallery"
                            target="_blank"
                            className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold"
                        >
                            GitHub Repo
                        </a>

                    </div>

                </motion.div>

                {/* PROJECT 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/40 backdrop-blur border border-white/40 rounded-3xl p-6 group hover:shadow-xl transition-all duration-300"
                >

                    <div className="flex justify-between items-start mb-4">

                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold">
                            React App
                        </span>

                        <a href="https://my-keen-keeper-saima.netlify.app/" target="_blank"
                            className="p-2 bg-white/40 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition">
                            ↗
                        </a>

                    </div>

                    <h3 className="text-2xl font-bold mb-2">
                        KeenKeeper
                    </h3>

                    <p className="text-black/60 text-sm mb-6 leading-relaxed min-h-[60px]">
                        Friendship tracking app with analytics dashboard, timeline system,
                        and interaction history visualization.
                    </p>

                    <div className="relative rounded-xl overflow-hidden mb-6 aspect-[16/10] bg-gray-100 border border-black/5">
                        <Image
                            src="/p3.png"
                            alt="project1"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* LINKS */}
                    <div className="flex flex-wrap gap-2">

                        <a
                            href="https://my-keen-keeper-saima.netlify.app/"
                            target="_blank"
                            className="px-3 py-1 rounded bg-gray-700 text-white text-[10px] font-bold"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/ayshaaktersaima1/keen-keeper"
                            target="_blank"
                            className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold"
                        >
                            GitHub Repo
                        </a>

                    </div>

                </motion.div>

            </div>

        </section>
    );
}