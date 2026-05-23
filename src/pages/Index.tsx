import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <HeroSection />
      <div className="bg-secondary/20"><AboutSection /></div>
      <SkillsSection />
      <div className="bg-secondary/20"><ProjectsSection /></div>
      <ExperienceSection />
      <div className="bg-secondary/20"><CertificationsSection /></div>
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
