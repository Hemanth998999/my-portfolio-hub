import { motion } from "framer-motion";
import { GraduationCap, Brain, Code, Cpu } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-5 md:px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center"
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
            className="flex flex-col items-center md:items-start"
          >
            <div className="mb-6 hidden">
              <ProfileAvatar size={140} />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center md:text-left">
              Since July 2026 I have been working in Hyderabad as a software developer (contract, through Dexian India Technologies) on GenAI workloads and AI inference performance analysis. Before that, I graduated with a B.Tech in Computer Science (AI & ML) from Sagi Rama Krishnam Raju Engineering College (2026), CGPA 8.76.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center md:text-left">
              Alongside work, I build machine learning projects such as multimodal emotion recognition, brain tumor detection and recommendation systems, and I enjoy digging into how models actually perform on real hardware.
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
              { icon: Cpu, title: "Currently", desc: "Software Developer (Contract) — GenAI workloads & AI inference performance" },
              { icon: GraduationCap, title: "Education", desc: "B.Tech in CS (AI & ML) – SRKR Engineering College" },
              { icon: Brain, title: "Focus", desc: "LLM inference, Deep Learning & AI Applications" },
              { icon: Code, title: "Development", desc: "Web app development using HTML, CSS, JavaScript, and Python-based Streamlit dashboards" },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-lg p-5 flex gap-4 items-start">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                  <item.icon size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground break-words">{item.desc}</p>
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
