import { motion } from "framer-motion";
import { Code2, Brain, Boxes, Globe, Database, Wrench, Sparkles, LucideIcon } from "lucide-react";

type Skill = string | { name: string; featured?: boolean };

const skillCategories: { title: string; icon: LucideIcon; skills: Skill[] }[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [{ name: "Python", featured: true }, "Java", "C", "JavaScript", { name: "SQL", featured: true }],
  },
  {
    title: "ML Concepts",
    icon: Brain,
    skills: [
      { name: "Machine Learning", featured: true },
      { name: "Deep Learning", featured: true },
      "Transfer Learning",
      { name: "NLP", featured: true },
      "Transformers",
      "Multimodal Learning",
      "Audio Processing",
      "CNN",
      "RNN",
      "LSTM",
      "GRU",
    ],
  },
  {
    title: "ML Techniques",
    icon: Brain,
    skills: [
      "K-Means Clustering",
      "PCA",
      "Reinforcement Learning",
      "Explainable AI (SHAP, LIME)",
      "Business Analytics",
      "Data Analysis",
      "Data Preprocessing",
      "Model Evaluation",
      "Hyperparameter Tuning",
      "Feature Engineering",
      { name: "Model Deployment", featured: true },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Boxes,
    skills: [
      { name: "TensorFlow", featured: true },
      "Keras",
      { name: "PyTorch", featured: true },
      "Hugging Face",
      "RoBERTa",
      "Librosa",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      { name: "Streamlit", featured: true },
      "Pillow",
    ],
  },
  { title: "Web Development", icon: Globe, skills: ["HTML", "CSS", "JavaScript", "MongoDB"] },
  { title: "Databases", icon: Database, skills: ["MongoDB", "MySQL"] },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [{ name: "Git & GitHub", featured: true }, "Git LFS", "Google Colab", "Jupyter Notebook", "VS Code", "Linux", "Streamlit Cloud"],
  },
  {
    title: "AI & Productivity Tools",
    icon: Sparkles,
    skills: ["ChatGPT", "GitHub Copilot", "Lovable", "Claude / AI Assistants", "Prompt Engineering"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">What I work with</p>
          <h2 className="text-3xl md:text-5xl font-bold">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-foreground font-semibold text-sm tracking-wide uppercase">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => {
                    const name = typeof s === "string" ? s : s.name;
                    return (
                      <span
                        key={name}
                        className="px-3 py-1.5 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground border-border hover:border-primary/50 hover:text-primary transition-colors"
                      >
                        {name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
