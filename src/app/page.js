import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-black">

      {/* Background mesh */}
      <Background />

      {/* Navbar */}
      <Navbar />
      <Hero />
      <About></About>
      <Stack></Stack>
      <Work></Work>


      <Contact></Contact>
      <Footer></Footer>

    </main>
  );
}