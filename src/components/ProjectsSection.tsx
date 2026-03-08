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
    role: "Frontend Developer",
    description: "Developed the frontend interface for a community platform that helps users discover local events and services. Implemented responsive UI components and integrated Firebase Authentication to enable secure user login and registration.",
    contributions: [
      "Designed and developed the frontend user interface for the platform.",
      "Built responsive pages for browsing community events and services.",
      "Integrated Firebase Authentication for secure user login and signup.",
      "Connected the frontend with Firebase backend services for user management.",
      "Focused on user experience, layout structure, and clean UI design.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Angular", "Firebase Authentication"],
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
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {"role" in project && (
                  <p className="text-xs text-primary font-medium mb-3">{(project as any).role}</p>
                )}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                {"contributions" in project && (
                  <ul className="text-xs text-muted-foreground mb-4 space-y-1 list-disc list-inside">
                    {(project as any).contributions.map((c: string) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                )}
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
