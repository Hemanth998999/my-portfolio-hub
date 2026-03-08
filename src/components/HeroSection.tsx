import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
            Hello, I'm
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Yembuluri H N</span>
          <br />
          <span className="text-primary glow-text">Venkata Satya Narasimha</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-4 font-medium"
        >
          AI & Machine Learning Student | Data & AI Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building intelligent solutions with machine learning, deep learning, and modern technologies. Passionate about solving real-world problems through data and AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a href="https://github.com/Hemanth998999" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary hover:text-primary">
              <Github size={20} />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/yembuluri-h-n-venkata-satya-narasimha-0719192a4/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary hover:text-primary">
              <Linkedin size={20} />
            </Button>
          </a>
          <a href="mailto:hemanthyembuluri777@gmail.com">
            <Button variant="outline" size="icon" className="rounded-full border-border hover:border-primary hover:text-primary">
              <Mail size={20} />
            </Button>
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="inline-block animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
