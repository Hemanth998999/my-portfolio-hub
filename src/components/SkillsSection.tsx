import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "JavaScript", "SQL"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["Machine Learning", "Deep Learning", "Data Analysis", "Data Preprocessing", "Model Evaluation", "Feature Engineering"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["TensorFlow", "Keras", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express.js", "Angular", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "Google Colab", "Jupyter Notebook", "VS Code", "Linux"],
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-lg p-6"
            >
              <h3 className="text-primary font-semibold mb-4 text-sm tracking-wide uppercase">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
