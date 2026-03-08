import { motion } from "framer-motion";
import { GraduationCap, Brain, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Computer Science student specializing in Artificial Intelligence and Machine Learning at Sagi Rama Krishnam Raju Engineering College. I have experience building machine learning and deep learning projects, including recommendation systems and AI-based applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy solving real-world problems using data, AI models, and modern technologies, and I am continuously learning new tools in AI, data analytics, and software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4"
          >
            {[
              { icon: GraduationCap, title: "Education", desc: "B.Tech in CS (AI & ML) – SRKR Engineering College" },
              { icon: Brain, title: "Focus", desc: "Machine Learning, Deep Learning & AI Applications" },
              { icon: Code, title: "Development", desc: "Full-stack web development with MEAN Stack" },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-lg p-5 flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
