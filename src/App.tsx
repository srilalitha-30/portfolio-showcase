import { ScrollProgress } from "@/components/ScrollProgress";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CursorGlow } from "@/components/CursorGlow";
import { BackToTop } from "@/components/BackToTop";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { CodingProfiles } from "@/components/CodingProfiles";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { useEffect } from "react";

function Portfolio() {
  // Ensure dark theme is initialized if no theme exists
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-primary">
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Experience />
        <Achievements />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default Portfolio;
