import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Netflix Movie Recommendation System",
    description: "Developed a machine learning-based recommendation system that suggests movies to users based on similarity between movie features and user preferences.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
    link: null,
  },
  {
    title: "AI-Powered Traffic Sign Recognition",
    description: "Built a deep learning model to recognize and classify traffic signs using the German Traffic Sign Recognition Benchmark (GTSRB) dataset.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV"],
    link: null,
  },
  {
    title: "Community Connect Hub",
    description: "A community platform where users can discover and participate in local events and services. Built using the MEAN stack.",
    tech: ["MongoDB", "Express.js", "Angular", "Node.js"],
    link: "https://hemanth998999.github.io/Community-Connect-Hub/pages/community.html",
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
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
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
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                    <ExternalLink size={16} className="mr-1.5" />
                    Live Demo
                  </Button>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
