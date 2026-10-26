import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileAvatar from "./ProfileAvatar";
import { useIsMobile } from "@/hooks/use-mobile";

const ROLES = [
  "GenAI & AI Inference Developer",
  "Performance Benchmarking Engineer",
  "Deep Learning Practitioner",
  "Full-Stack Builder",
];

const STATS = [
  { value: "8.76", label: "B.Tech CGPA" },
  { value: "6+", label: "AI & Web Projects" },
  { value: "5", label: "Internships" },
  { value: "15+", label: "Certifications & Badges" },
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
  const isMobile = useIsMobile();

  return (
    <section className="relative md:min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 md:px-6 pt-[100px] pb-[60px] md:pt-28 md:pb-16 scroll-mt-[70px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="shrink-0 relative"
        >
          <div className="absolute -inset-3 rounded-full border border-primary/30" />
          <div className="absolute -inset-6 rounded-full border border-primary/10" />
          <ProfileAvatar size={isMobile ? 140 : 220} />
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 mb-5 text-xs md:text-sm text-primary font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Software Developer @ Micron · Hyderabad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-[1.05] tracking-tight"
          >
            <span className="block text-foreground">Hemanth</span>
            <span className="block text-gradient-gold">Yembuluri</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-display text-lg md:text-xl text-accent mb-4 font-medium h-7"
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
            I build and benchmark GenAI workloads, analysing how LLM inference performs on real hardware. B.Tech in AI & ML (2026) with hands-on projects in deep learning, NLP and computer vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-row flex-wrap items-center md:items-start justify-center md:justify-start gap-3 md:gap-4"
          >
            <a href="/My_Resume.pdf" download="Venkata_Satya_Narasimha_Resume.pdf">
              <Button variant="premium" className="rounded-full px-4 md:px-6 text-sm md:text-base gap-2">
                <Download size={16} />
                Download Resume
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" className="rounded-full px-4 md:px-6 text-sm md:text-base gap-2 border-primary/40 text-primary bg-transparent hover:bg-primary/10 hover:text-primary">
                <FolderGit2 size={16} />
                View Projects
              </Button>
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com/Hemanth998999" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="outline" size="icon" className="rounded-full bg-transparent border-border hover:bg-primary/10 hover:border-primary hover:text-primary">
                  <Github size={20} />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/yembuluri-h-n-venkata-satya-narasimha-0719192a4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="outline" size="icon" className="rounded-full bg-transparent border-border hover:bg-primary/10 hover:border-primary hover:text-primary">
                  <Linkedin size={20} />
                </Button>
              </a>
              <a href="mailto:hemanthyembuluri777@gmail.com" aria-label="Email">
                <Button variant="outline" size="icon" className="rounded-full bg-transparent border-border hover:bg-primary/10 hover:border-primary hover:text-primary">
                  <Mail size={20} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 max-w-6xl w-full mx-auto mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
      >
        {STATS.map((s) => (
          <div key={s.label} className="glass-card rounded-xl p-4 md:p-5 text-center md:text-left hover:border-primary/40 transition-colors">
            <p className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">{s.value}</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
