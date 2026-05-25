import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialSidebar from "@/components/SocialSidebar";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-[#f9faf4] text-black overflow-x-hidden">

        <SocialSidebar />

        <SmoothScroll>
          {children}
        </SmoothScroll>

      </body>
    </html>
  );
}