import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SocialSidebar() {
    return (
        <div className="fixed left-6 md:left-10 lg:left-14 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">

            {/* LINKEDIN */}
            <a
                href="https://www.linkedin.com/in/aysha-akter-saima/"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full 
                bg-white/40 backdrop-blur-xl border border-white/50 shadow-md
                hover:scale-110 transition"
            >
                <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
            </a>

            {/* GITHUB */}
            <a
                href="https://github.com/ayshaaktersaima1"
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full 
                bg-white/40 backdrop-blur-xl border border-white/50 shadow-md
                hover:scale-110 transition"
            >
                <FaGithub className="w-5 h-5 text-[#111]" />
            </a>

            {/* WHATSAPP */}
            <a
                href="https://wa.me/8801780613588"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full 
                bg-white/40 backdrop-blur-xl border border-white/50 shadow-md
                hover:scale-110 transition"
            >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
            </a>

        </div>
    );
}