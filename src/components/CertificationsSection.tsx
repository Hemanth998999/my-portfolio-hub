import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X, ZoomIn } from "lucide-react";

import certJavaFullstack from "@/assets/cert-java-fullstack.jpg";
import certGoogleAiml from "@/assets/cert-google-aiml.jpg";
import certAltairDs from "@/assets/cert-altair-datascience.jpg";
import certChatgpt from "@/assets/cert-chatgpt-genai.jpg";
import certBe10x from "@/assets/cert-be10x-workshop.jpg";
import certGoogleCloud from "@/assets/cert-google-cloud.jpg";
import certHexartAdvance from "@/assets/cert-hexart-advance.jpg";
import certHexartFoundation from "@/assets/cert-hexart-foundation.jpg";
import certMlConnect from "@/assets/cert-ml-connect.jpg";
import certHackerrankProblem from "@/assets/cert-hackerrank-problem.jpg";
import certHackerrankSql from "@/assets/cert-hackerrank-sql.jpg";
import certUdemyMl from "@/assets/cert-udemy-ml.jpg";
import certUdemyPython from "@/assets/cert-udemy-python.jpg";
import certHackoverflow from "@/assets/cert-hackoverflow.jpg";
import certBlackbucksAimlLT from "@/assets/cert-blackbucks-aiml-4month.jpg";

const certifications = [
  {
    category: "Artificial Intelligence & Machine Learning",
    items: [
      { name: "AI & ML Engineer – 4 Month Long-Term Internship", issuer: "Blackbucks Education", image: certBlackbucksAimlLT },
      { name: "Machine Learning A-Z: AI, Python & R + ChatGPT (2024)", issuer: "Udemy", image: certUdemyMl },
      { name: "AI & Machine Learning Course (Google for Developers)", issuer: "EduSkills", image: certGoogleAiml },
      { name: "AI Advanced", issuer: "Hexart", image: certHexartAdvance },
      { name: "AI Foundation", issuer: "Hexart", image: certHexartFoundation },
      { name: "Generative AI / ChatGPT Certification", issuer: "Blackbuck", image: certChatgpt },
    ],
  },
  {
    category: "Programming & Development",
    items: [
      { name: "100 Days of Code: The Complete Python Pro Bootcamp", issuer: "Udemy", image: certUdemyPython },
      { name: "Java Full Stack Development Certificate", issuer: "Blackbuck", image: certJavaFullstack },
    ],
  },
  {
    category: "Data & Problem Solving",
    items: [
      { name: "SQL (Basic)", issuer: "HackerRank", image: certHackerrankSql },
      { name: "Problem Solving (Basic)", issuer: "HackerRank", image: certHackerrankProblem },
      { name: "Data Science Master (Altair RapidMiner)", issuer: "EduSkills", image: certAltairDs },
    ],
  },
  {
    category: "Cloud & Workshops",
    items: [
      { name: "Google Cloud Career Launchpad", issuer: "Google Cloud", image: certGoogleCloud },
      { name: "AI Tools Workshop", issuer: "Be10x", image: certBe10x },
      { name: "ML Connect Workshop", issuer: "SRKR ACE", image: certMlConnect },
    ],
  },
  {
    category: "Leadership & Achievements",
    items: [
      { name: "HackOverflow – Event Organizer", issuer: "SRKR Coding Club", image: certHackoverflow },
      { name: "Art Fusion – 1st Prize (Coin Collection Showcase)", issuer: "SRKR Event Organizing Cell" },
    ],
  },
];

const credlyBadges = [
  {
    name: "AI Fundamentals: Foundations for Understanding AI",
    issuer: "IBM SkillsBuild",
    date: "Jan 2026",
    image: "https://images.credly.com/images/e0644ccc-dd87-4e27-82e4-0facf461cd1f/AI_20Fundamentals_20Foundations_20for_20Understanding_20AI.png",
    url: "https://www.credly.com/users/hemanth-yembuluri",
  },
  {
    name: "Build Infrastructure with Terraform on Google Cloud",
    issuer: "Google Cloud",
    date: "Aug 2024",
    image: "https://images.credly.com/images/b18154fb-9bd3-47e5-a6f1-554be512947d/image.png",
    url: "https://www.credly.com/users/hemanth-yembuluri",
  },
  {
    name: "Develop Your Google Cloud Network",
    issuer: "Google Cloud",
    date: "Aug 2024",
    image: "https://images.credly.com/images/b126c61c-4781-4f03-9b2b-062963003abf/image.png",
    url: "https://www.credly.com/users/hemanth-yembuluri",
  },
  {
    name: "Set Up an App Dev Environment on Google Cloud",
    issuer: "Google Cloud",
    date: "Aug 2024",
    image: "https://images.credly.com/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png",
    url: "https://www.credly.com/users/hemanth-yembuluri",
  },
  {
    name: "Implement Load Balancing on Compute Engine",
    issuer: "Google Cloud",
    date: "Aug 2024",
    image: "https://images.credly.com/images/eea11cba-2a98-4bbe-bad2-447878dd34a2/image.png",
    url: "https://www.credly.com/users/hemanth-yembuluri",
  },
];

const CertificationsSection = () => {
  const [viewingCert, setViewingCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Verified credentials</p>
          <h2 className="text-3xl md:text-5xl font-bold">Certifications & Badges</h2>
        </motion.div>

        {/* Credly Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="text-primary">⬡</span> Credly Badges
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {credlyBadges.map((badge, i) => (
              <motion.a
                key={badge.name}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card rounded-lg p-4 flex flex-col items-center text-center group hover:border-primary/30 transition-colors"
              >
                <img
                  src={badge.image}
                  alt={badge.name}
                  className="w-20 h-20 object-contain mb-3"
                  loading="lazy"
                />
                <p className="text-xs font-medium text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">
                  {badge.name}
                </p>
                <p className="text-xs text-muted-foreground">{badge.issuer}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">{badge.date}</p>
              </motion.a>
            ))}
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.credly.com/users/hemanth-yembuluri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
            >
              View all on Credly <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        {/* Other Certifications */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-lg p-6"
            >
              <h3 className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex gap-3 items-start">
                    <Award size={16} className="text-primary shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.issuer}</p>
                    </div>
                    {item.image && (
                      <button
                        onClick={() => setViewingCert(item.image!)}
                        className="shrink-0 text-primary/60 hover:text-primary transition-colors"
                        title="View certificate"
                      >
                        <ZoomIn size={16} />
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {viewingCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setViewingCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setViewingCert(null)}
                className="absolute -top-10 right-0 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={viewingCert}
                alt="Certificate"
                className="w-full rounded-lg shadow-2xl border border-border"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
