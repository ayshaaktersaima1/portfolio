import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialSidebar from "@/components/SocialSidebar";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeProviders from "@/components/ThemeProviders";

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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-background text-black dark:bg-[#0F1412] dark:text-[#E6EAE8] transition-colors duration-300">


        <SocialSidebar />

        <SmoothScroll>
          <ThemeProviders>
            {children}
          </ThemeProviders>
        </SmoothScroll>


      </body>
    </html>
  );
}