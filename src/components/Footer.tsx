import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Yembuluri H N Venkata Satya Narasimha. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Hemanth998999"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/yembuluri-h-n-venkata-satya-narasimha-0719192a4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:hemanthyembuluri777@gmail.com"
            aria-label="Email"
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
