
import Hero from "@/components/Hero";
import About from "@/components/About";
import MusicGenre from "@/components/MusicGenre";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <MusicGenre />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
