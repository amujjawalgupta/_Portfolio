import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Instagram, Send } from "lucide-react";
import { useState, FormEvent } from "react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:ujjawal.gupta.jsr@gmail.com", text: "ujjawal.gupta.jsr@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", text: "LinkedIn" },
  { icon: Github, label: "GitHub", href: "https://github.com", text: "GitHub" },
  { icon: Twitter, label: "Twitter (X)", href: "https://x.com", text: "Twitter" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", text: "Instagram" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 font-mono text-sm">
            // contact.sh
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Connect with me</h3>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <social.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{social.label}</p>
                  <p className="text-muted-foreground text-xs">{social.text}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-all w-full justify-center"
              >
                {submitted ? "Message Sent! ✓" : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
