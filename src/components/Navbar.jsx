export default function Navbar() {
    return (
        <nav className="rounded-full mt-6 mx-auto w-[calc(100%-40px)] max-w-6xl sticky top-4 z-50 bg-white/40 backdrop-blur-md border border-white/40 shadow-sm flex justify-between items-center px-8 py-3">

            {/* Logo */}
            <div className="font-bold text-xl text-black">
                Aysha
            </div>

            {/* Links */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
                <a href="#home" className="hover:text-black/70">Home</a>
                <a href="#about" className="hover:text-black/70">About</a>
                <a href="#stack" className="hover:text-black/70">Skills</a>
                <a href="#work" className="hover:text-black/70">Projects</a>
                <a href="#contact" className="hover:text-black/70">Contact</a>
            </div>

            {/* Button */}
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:scale-105 transition">
                Hire me
            </button>
        </nav>
    );
}