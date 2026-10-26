import { motion } from "framer-motion";
import { ExternalLink, Github, Brain, Activity, Utensils, Users, TrafficCone, Film, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string | null;
  github?: string;
  icon: LucideIcon;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Dual Ambiguity Aware Multimodal Emotion Recognition",
    description:
      "Deep learning web app that detects human emotions from audio and text via multimodal fusion — RoBERTa text embeddings + Librosa MFCC audio features with cross-modal attention and gated fusion. Deployed on Streamlit Cloud.",
    tech: ["Python", "PyTorch", "RoBERTa", "Transformers", "Librosa", "Streamlit", "NLP"],
    link: "https://hemanth-multimodal-emotion-recognition.streamlit.app/",
    github: "https://github.com/Hemanth998999/multimodal-emotion-recognition",
    icon: Activity,
    gradient: "from-primary/25 via-accent/10 to-transparent",
  },
  {
    title: "Brain Tumor Detection (End-to-End)",
    description:
      "End-to-end deep learning app classifying MRI brain scans (Glioma, Meningioma, Pituitary, No Tumor) using EfficientNetB4 with 95%+ accuracy. Deployed as a real-time web app with confidence scores.",
    tech: ["Python", "TensorFlow", "Keras", "EfficientNetB4", "Streamlit", "NumPy", "Pillow"],
    link: "https://brain-tumor-detection-hemanth.streamlit.app/",
    github: "https://github.com/Hemanth998999/brain-tumor-detection",
    icon: Brain,
    gradient: "from-primary/20 via-accent/15 to-transparent",
  },
  {
    title: "Dining Portal",
    description:
      "Responsive dining portal with menu browsing, cart, address handling, login, reviews, and reservations. Multi-page web app with clean UI and interactive client-side functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://hemanth998999.github.io/Dining-Portal/",
    github: "https://github.com/Hemanth998999/Dining-Portal",
    icon: Utensils,
    gradient: "from-accent/20 via-primary/15 to-transparent",
  },
  {
    title: "Community Connect Hub",
    description:
      "Frontend interface for a community platform that helps users discover local events and services. Integrated Firebase Authentication for secure login and registration.",
    tech: ["HTML", "CSS", "JavaScript", "Angular", "Firebase Authentication"],
    link: "https://hemanth998999.github.io/Community-Connect-Hub/pages/community.html",
    github: "https://github.com/Hemanth998999/Community-Connect-Hub",
    icon: Users,
    gradient: "from-primary/25 via-accent/10 to-transparent",
  },
  {
    title: "AI-Powered Traffic Sign Recognition",
    description:
      "Deep learning model that recognizes and classifies traffic signs using the German Traffic Sign Recognition Benchmark (GTSRB) dataset.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
    icon: TrafficCone,
    gradient: "from-accent/15 via-primary/20 to-transparent",
  },
  {
    title: "Netflix Movie Recommendation System",
    description:
      "Machine learning recommendation system that suggests movies to users based on similarity between movie features and user preferences.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
    icon: Film,
    gradient: "from-primary/20 via-accent/10 to-transparent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-5 md:px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-lg overflow-hidden flex flex-col group hover:border-primary/30 transition-colors"
              >
                <div className={`h-24 md:h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background)/0.4)_100%)]" />
                  <Icon size={56} className="text-foreground/90 relative z-10 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs font-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2 border-t border-border/50">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0 h-auto">
                          <Github size={16} className="mr-1.5" />
                          GitHub
                        </Button>
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto">
                          <ExternalLink size={16} className="mr-1.5" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
