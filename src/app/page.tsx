import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProjectsSection from "@/components/landing/ProjectsSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import TechStackSection from "@/components/landing/TechStackSection";
import MentoringSection from "@/components/landing/MentoringSection";
import MajorLinksSection from "@/components/landing/MajorLinksSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import ScrollReveal from "@/components/landing/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ProjectsSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ExperienceSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <TechStackSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <MentoringSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <MajorLinksSection />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
