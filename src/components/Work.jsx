"use client";

import { motion } from "framer-motion";

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

                        <a href="#" className="p-2 bg-white/40 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition">
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

                    <div className="rounded-xl overflow-hidden mb-6 aspect-[16/10] bg-gray-100 border border-black/5">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOWaacOLnJCJZw9f69fpBD5lGwUUr2dNEG-1R6RybNPjL4zeizo1O8zyw65iw2uWzPQf-ND_1IoRSN2r7WVQ-SS-S8oN8xjz6P4dhzw6H4pqyrYPp2sCoiJY9HevIwD1kkVh9rIDFCxre1nFo_OPJ0qZS3Hf9gJrvybl36rC7VpczePcIzb30ILze4_C16OpBPE3poHJ72kbJG3Sp_zWjyQ0nLD2ahse7cB0BL_vIECBoCIHbP4lf6b9lI1IxgdFdACKnIvF3CAs_h"
                            alt="DriveFleet"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold">Next.js</span>
                        <span className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold">MongoDB</span>
                        <span className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold">JWT Auth</span>
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

                        <a href="#" className="p-2 bg-white/40 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition">
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

                    <div className="rounded-xl overflow-hidden mb-6 aspect-[16/10] bg-gray-100 border border-black/5">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVz1YUDAzDaQ9eOYQrIAgcb1DsLBCvn2I5jKHeiOK5TlXXl6WypgvHa6gxn12QlaCjIP4KfULinumjekU6zNESdpKEQmhowHx1yojuZTNAd-tQDq5_ABXnNFZNAdgiI6eRRWwV1F_ZLNaC0imw6GXeQEwd162cYvab-yawkzUcOtLNGk040Qd5d3NVQoNSEO71J4fsyYbKFy3W_XmRmD43qBaRSUqSig6O0eYzXi3JM09jwk4ovfkwb65Tx2BCUA60Jxa7NK9VvMAi"
                            alt="Tiles Gallery"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold">Next.js</span>
                        <span className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold">Auth</span>
                        <span className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold">MongoDB</span>
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

                        <a href="#" className="p-2 bg-white/40 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition">
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

                    <div className="rounded-xl overflow-hidden mb-6 aspect-[16/10] bg-gray-100 border border-black/5">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbnZsFzhCBVjOE3p59j2msBfwfYQgO8nGPAGsoO1Y0i3bpKIXlbcWghP-Kf9bEukzi76liOwC87t_-RMDO17AwLlBSM15cVWYqRZADp2dEDnvnpSmBDAtlS1k_An-NR0OuUfUDTyiyLCowbyKJhmk5mDp93yGjLGju6HGlApg7TlW32Dv76H6LvfhqGEaCoNiVCPrq32GonSO6eqI-phQ4lPp8_rH64KvaGw77dWisueAk5d--O5zQDrVb3EyRwVnLpeTQHoYJX7tJ"
                            alt="KeenKeeper"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold">React</span>
                        <span className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold">Recharts</span>
                        <span className="px-3 py-1 rounded bg-black text-white text-[10px] font-bold">Tailwind</span>
                    </div>

                </motion.div>

            </div>

        </section>
    );
}