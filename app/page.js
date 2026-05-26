import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans selection:bg-neutral-950 selection:text-white">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
