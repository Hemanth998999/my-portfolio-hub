import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileAvatar from "./ProfileAvatar";

const ROLES = [
  "AI & Machine Learning Student",
  "Data & AI Enthusiast",
  "Deep Learning Practitioner",
  "Full-Stack Builder",
];

const useTypewriter = (words: string[], typeSpeed = 70, pauseTime = 1400) => {
  const [text, setText] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wIdx];
    const delta = deleting ? typeSpeed / 2 : typeSpeed;
    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), pauseTime);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setWIdx((i) => (i + 1) % words.length);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delta);
    return () => clearTimeout(t);
  }, [text, deleting, wIdx, words, typeSpeed, pauseTime]);

  return text;
};

const HeroSection = () => {
  const typed = useTypewriter(ROLES);

  return (
    <section className="relative md:min-h-screen flex items-center justify-center overflow-hidden px-5 md:px-6 pt-[90px] pb-[60px] md:py-0 scroll-mt-[70px]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="shrink-0"
        >
          <ProfileAvatar size={200} />
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono text-sm mb-3 tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight text-foreground"
          >
            <span className="block">Yembuluri H N</span>
            <span className="block text-primary glow-text">Venkata Satya Narasimha</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-4 font-medium h-7"
          >
            <span>{typed}</span>
            <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            Building intelligent solutions with machine learning, deep learning, and modern technologies. Passionate about solving real-world problems through data and AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-10"
          >
            <a href="/My_Resume.pdf" download="Venkata_Satya_Narasimha_Resume.pdf">
              <Button className="rounded-full px-6 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <Download size={18} />
                Download Resume
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" className="rounded-full px-6 gap-2 border-primary/40 text-primary hover:bg-primary/10 hover:text-primary">
                <FolderGit2 size={18} />
                View Projects
              </Button>
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com/Hemanth998999" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary hover:text-primary">
                  <Github size={20} />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/yembuluri-h-n-venkata-satya-narasimha-0719192a4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary hover:text-primary">
                  <Linkedin size={20} />
                </Button>
              </a>
              <a href="mailto:hemanthyembuluri777@gmail.com" aria-label="Email">
                <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary hover:text-primary">
                  <Mail size={20} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
