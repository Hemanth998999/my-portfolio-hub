import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contacts = [
  { icon: Mail, label: "Email", value: "hemanthyembuluri777@gmail.com", href: "mailto:hemanthyembuluri777@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Venkata Satya Narasimha", href: "https://www.linkedin.com/in/yembuluri-h-n-venkata-satya-narasimha-0719192a4/" },
  { icon: Github, label: "GitHub", value: "Hemanth998999", href: "https://github.com/Hemanth998999" },
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({ title: "Please check your inputs", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }
    const { name, email, message } = result.data;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:hemanthyembuluri777@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client", description: "Your message is ready to send." });
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-5 md:px-6 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-5xl font-bold">Contact Me</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Happy to talk about GenAI, inference performance, or collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-lg p-6 space-y-4"
          >
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5 block">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                maxLength={100}
                className="bg-background/40 border-border"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5 block">Email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                maxLength={255}
                className="bg-background/40 border-border"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground uppercase tracking-wide mb-1.5 block">Message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What would you like to say?"
                rows={4}
                maxLength={1000}
                className="bg-background/40 border-border resize-none"
              />
            </div>
            <Button type="submit" className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <Send size={16} />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
