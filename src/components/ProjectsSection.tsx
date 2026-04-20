import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Dual Ambiguity Aware Multimodal Emotion Recognition",
    description: "Built a deep learning web app that detects human emotions from both audio and text using multimodal fusion. Combines RoBERTa transformer-based text embeddings with Librosa MFCC audio features through cross-modal attention and gated fusion, deployed on Streamlit Cloud with confidence scores.",
    tech: ["Python", "PyTorch", "RoBERTa", "Transformers", "Librosa", "Streamlit", "NLP", "Multimodal Learning"],
    link: "https://hemanth-multimodal-emotion-recognition.streamlit.app/",
    github: "https://github.com/Hemanth998999/multimodal-emotion-recognition",
  },
  {
    title: "Brain Tumor Detection (End-to-End)",
    description: "Built an end-to-end deep learning application that classifies MRI brain scans into four categories (Glioma, Meningioma, Pituitary, No Tumor) using EfficientNetB4 with 95%+ accuracy. Deployed as a real-time web app with confidence scores and probability distribution visualization.",
    tech: ["Python", "TensorFlow", "Keras", "EfficientNetB4", "Streamlit", "NumPy", "Pillow"],
    link: "https://brain-tumor-detection-hemanth.streamlit.app/",
    github: "https://github.com/Hemanth998999/brain-tumor-detection",
  },
  {
    title: "Dining Portal",
    description: "Designed and developed a responsive dining portal with menu browsing, cart management, address handling, login, reviews, and upcoming reservations. Built as a multi-page web app with clean UI and interactive client-side functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://hemanth998999.github.io/Dining-Portal/",
    github: "https://github.com/Hemanth998999/Dining-Portal",
  },
  {
    title: "Community Connect Hub",
    description: "Developed the frontend interface for a community platform that helps users discover local events and services. Implemented responsive UI components and integrated Firebase Authentication to enable secure user login and registration.",
    tech: ["HTML", "CSS", "JavaScript", "Angular", "Firebase Authentication"],
    link: "https://hemanth998999.github.io/Community-Connect-Hub/pages/community.html",
    github: "https://github.com/Hemanth998999/Community-Connect-Hub",
  },
  {
    title: "AI-Powered Traffic Sign Recognition",
    description: "Built a deep learning model to recognize and classify traffic signs using the German Traffic Sign Recognition Benchmark (GTSRB) dataset.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
    link: null,
  },
  {
    title: "Netflix Movie Recommendation System",
    description: "Developed a machine learning-based recommendation system that suggests movies to users based on similarity between movie features and user preferences.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
    link: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-lg p-6 flex flex-col group hover:border-primary/30 transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                {"github" in project && project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary p-0">
                      <Github size={16} className="mr-1.5" />
                      GitHub
                    </Button>
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                      <ExternalLink size={16} className="mr-1.5" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
