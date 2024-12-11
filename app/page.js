import Image from "next/image";
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
  
      
      <main className="min-h-screen bg-gray-50">
        <title>Mohamed Zamzem | Portfolio</title>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      
      <Footer />
    </main>

  );
}
