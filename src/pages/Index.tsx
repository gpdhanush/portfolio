import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gnana Prakasam | Senior Flutter & Front-End Developer</title>
        <meta
          name="description"
          content="Senior Flutter & Front-End Developer with 5.5+ years of experience building scalable mobile and web applications. Specializing in Flutter, Angular, and modern frontend technologies."
        />
        <meta
          name="keywords"
          content="Flutter Developer, Angular Developer, Frontend Developer, Mobile App Developer, Web Developer, React, TypeScript, Dart"
        />
        <meta property="og:title" content="Gnana Prakasam | Senior Flutter & Front-End Developer" />
        <meta
          property="og:description"
          content="Senior Flutter & Front-End Developer with 5.5+ years of experience building scalable mobile and web applications."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gnana Prakasam | Senior Flutter & Front-End Developer" />
        <meta
          name="twitter:description"
          content="Senior Flutter & Front-End Developer with 5.5+ years of experience building scalable mobile and web applications."
        />
        <link rel="canonical" href="https://gnanaprakasam.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
