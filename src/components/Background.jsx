export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[#f9faf4]"></div>

            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-200/50 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-pink-200/50 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-emerald-200/50 blur-3xl rounded-full animate-pulse"></div>
        </div>
    );
}