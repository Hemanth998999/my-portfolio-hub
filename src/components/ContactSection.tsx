import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  { icon: Mail, label: "Email", value: "hemanthyembuluri777@gmail.com", href: "mailto:hemanthyembuluri777@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9247998999", href: "tel:+919247998999" },
  { icon: Linkedin, label: "LinkedIn", value: "Venkata Satya Narasimha", href: "https://www.linkedin.com/in/yembuluri-h-n-venkata-satya-narasimha-0719192a4/" },
  { icon: Github, label: "GitHub", value: "Hemanth998999", href: "https://github.com/Hemanth998999" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-5xl font-bold">Contact Me</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass-card rounded-lg p-5 flex items-center gap-4 group hover:border-primary/30 transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <c.icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</p>
                <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Yembuluri H N Venkata Satya Narasimha. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
