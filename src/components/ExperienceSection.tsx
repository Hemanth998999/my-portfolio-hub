import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";

const current = {
  title: "Software Developer (Contract)",
  organization: "Micron Technology",
  employer: "Employed via Dexian India Technologies",
  location: "Hyderabad, India",
  duration: "July 2026 – Present",
  description:
    "Working in the memory organization on GenAI workloads and AI inference performance analysis, studying how modern LLM workloads behave on real hardware.",
  highlights: [
    "Benchmarking LLM inference using open-source serving and profiling tools such as llama.cpp, vLLM and GenAI-Perf",
    "Analyzing throughput, latency and resource behaviour of GenAI workloads across configurations",
    "Building scripts and use-case pipelines to run, repeat and compare AI workloads reliably",
    "Documenting findings and working with the on-site team to turn results into usable insights",
  ],
};

const featured = {
  title: "AI & Machine Learning Engineer Intern",
  organization: "IIDT Blackbuck",
  duration: "22nd December 2025 – 21st April 2026",
  summary:
    "Completed a 4-month (16-week, 240 hours) end-to-end AI/ML engineering internship culminating in an individual capstone project.",
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
};

const experiences = [
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

const CardShell = ({ children }: { children: React.ReactNode }) => (
  <div className="glass-card rounded-lg p-6 hover:border-primary/30 transition-colors h-full">
    {children}
  </div>
);

const CardHeader = ({
  title,
  organization,
  duration,
}: {
  title: string;
  organization: string;
  duration: string;
}) => (
  <>
    <div className="flex items-center gap-2 text-primary mb-2">
      <Briefcase size={16} />
    </div>
    <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
      <span className="flex items-center gap-1">
        <MapPin size={12} />
        {organization}
      </span>
      <span className="flex items-center gap-1">
        <Calendar size={12} />
        {duration}
      </span>
    </div>
  </>
);

const ExperienceSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="experience" className="py-16 md:py-24 px-5 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            Professional growth
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">Experience</h2>
        </motion.div>

        {/* Current role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="card-current rounded-lg p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 text-primary text-xs font-mono px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Current role
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar size={12} />
                {current.duration}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin size={12} />
                {current.location}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{current.title}</h3>
            <p className="text-primary font-medium mt-1">{current.organization}</p>
            <p className="text-xs text-muted-foreground mb-4">{current.employer}</p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              {current.description}
            </p>
            <ul className="space-y-2">
              {current.highlights.map((h) => (
                <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">▹</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <h3 className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-6 text-center">
          Internships &amp; training
        </h3>


        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <CardShell>
            <CardHeader
              title={featured.title}
              organization={featured.organization}
              duration={featured.duration}
            />
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              {expanded ? featured.description : featured.summary}
            </p>
            {expanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-1 mb-3 overflow-hidden"
              >
                {featured.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5">▹</span>
                    {h}
                  </li>
                ))}
              </motion.ul>
            )}
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
            >
              {expanded ? "Show less" : "Show more"}
              <ChevronDown
                size={14}
                className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </CardShell>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <CardShell>
                <CardHeader
                  title={exp.title}
                  organization={exp.organization}
                  duration={exp.duration}
                />
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-1">
                  {exp.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </CardShell>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
