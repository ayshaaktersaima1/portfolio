import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/20 bg-white/10 backdrop-blur">

            <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* ================= BRAND ================= */}
                <div>
                    <h2 className="text-2xl font-bold text-black">
                        Aysha Akter Saima
                    </h2>

                    <p className="text-black/60 mt-3 leading-relaxed">
                        Full-stack developer focused on building modern,
                        clean and scalable web applications.
                    </p>
                </div>

                {/* ================= LINKS ================= */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-black">
                        Quick Links
                    </h3>

                    <ul className="space-y-2 text-black/70">
                        <li><a href="#about" className="hover:text-black transition">About</a></li>
                        <li><a href="#stack" className="hover:text-black transition">Technologies</a></li>
                        <li><a href="#projects" className="hover:text-black transition">Projects</a></li>
                        <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
                    </ul>
                </div>

                {/* ================= SOCIAL ================= */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-black">
                        Connect
                    </h3>

                    <div className="flex flex-col gap-3">

                        <p className="flex items-center gap-3 text-black/70 hover:text-black transition">


                            <FaEnvelope />
                            ayshaaktersaima1@gmail.com
                        </p>

                        <a
                            href="https://www.linkedin.com/in/aysha-akter-saima/"
                            target="_blank"
                            className="flex items-center gap-3 text-black/70 hover:text-black transition"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/ayshaaktersaima1"
                            target="_blank"
                            className="flex items-center gap-3 text-black/70 hover:text-black transition"
                        >
                            <SiGithub />
                            GitHub
                        </a>

                    </div>
                </div>

            </div>

            {/* ================= BOTTOM BAR ================= */}
            <div className="border-t border-white/20 py-6 text-center text-sm text-black/60">
                © {new Date().getFullYear()} Aysha Akter Saima. All rights reserved.
            </div>

        </footer>
    );
}