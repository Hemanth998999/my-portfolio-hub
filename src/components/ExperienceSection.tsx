import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI & Machine Learning Engineer Intern",
    organization: "IIDT Blackbuck",
    duration: "22nd December 2025 – 21st April 2026",
    description:
      "Completed a 4-month (16-week, 240 hours) long-term internship covering the end-to-end AI/ML engineering lifecycle — from data analytics foundations to deep learning, NLP, and model deployment — followed by an individual capstone project.",
    highlights: [
      "AI & ML foundations, business analytics, and data-driven decision making",
      "Data preprocessing, feature engineering, EDA, and visualization",
      "Regression, classification, K-Means clustering, and PCA",
      "Deep Learning with TensorFlow & Keras (ANN, CNN, RNN, LSTM, GRU)",
      "Natural Language Processing and text data preprocessing",
      "Reinforcement Learning and Explainable AI (SHAP, LIME)",
      "Model evaluation, hyperparameter tuning, and deployment as APIs / dashboards",
      "End-to-end capstone project with mentor reviews and final grand assessment",
    ],
  },
  {
    title: "Data Science Master Virtual Intern",
    organization: "AICTE – EduSkills (Altair RapidMiner)",
    duration: "January 2026 – March 2026",
    description:
      "Structured training in data science including data preprocessing, visualization, and ML model building using RapidMiner platform.",
    highlights: [
      "Data preparation and feature engineering",
      "Model training, validation, and evaluation",
      "Analytical thinking and data interpretation",
    ],
  },
  {
    title: "AI & Machine Learning Virtual Intern",
    organization: "AICTE – EduSkills (Google for Developers)",
    duration: "October 2025 – December 2025",
    description:
      "Foundational understanding of AI and ML concepts including supervised learning techniques, model evaluation strategies, and AI application use cases.",
    highlights: [
      "Core machine learning algorithms overview",
      "AI solution design fundamentals",
      "Real-world AI implementation scenarios",
    ],
  },
  {
    title: "Java Full Stack Virtual Intern",
    organization: "IIDT Blackbuck",
    duration: "May 2025 – July 2025",
    description:
      "Introductory training focused on Java programming fundamentals and object-oriented programming concepts relevant to backend development.",
    highlights: [
      "Java syntax, logic building, and OOP principles",
      "Basic backend development workflow",
      "Writing structured and maintainable code",
    ],
  },
  {
    title: "Generative AI / ChatGPT Virtual Intern",
    organization: "IIDT Blackbuck",
    duration: "May 2024 – July 2024",
    description:
      "Training focused on generative AI tools, prompt engineering techniques, and AI-assisted productivity workflows.",
    highlights: [
      "Prompt design and AI interaction strategies",
      "AI-based automation and content generation",
      "Emerging generative AI technologies",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            Professional growth
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Virtual Internship Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20 md:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2 z-10 shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card rounded-lg p-6 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Briefcase size={16} />
                      <span className="text-xs font-mono uppercase tracking-wider">
                        Virtual Internship
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.organization}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.description}
                    </p>
                    <ul className="space-y-1">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
