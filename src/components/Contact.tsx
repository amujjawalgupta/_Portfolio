import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Instagram, Send, Loader2 } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:ujjawal.gupta.jsr@gmail.com", text: "ujjawal.gupta.jsr@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ujjawal-gupta-504819381/", text: "LinkedIn" },
  { icon: Github, label: "GitHub", href: "https://github.com/amujjawalgupta", text: "GitHub" },
  { icon: Twitter, label: "Twitter (X)", href: "https://x.com/ujjawalgupta12s", text: "Twitter" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/amujjawalgupta", text: "Instagram" },
];

const SERVICE_ID = "service_iqcgsvn";
const TEMPLATE_ID = "template_fn2o1ba";
const PUBLIC_KEY = "fqIDoAIXDftdN_xir";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-secondary/40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-8" />
      <div className="container mx-auto px-4 relative z-10">
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                maxLength={100}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                maxLength={255}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                maxLength={1000}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-all w-full justify-center disabled:opacity-60"
              >
                {sending ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
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
