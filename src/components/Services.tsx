import { motion } from "framer-motion";
import { Server, ShieldAlert, Search } from "lucide-react";

const services = [
  {
    title: "Backend Development",
    status: "Learning",
    description: "Building RESTful APIs, server-side logic, and database management using Java and modern frameworks.",
    icon: Server,
  },
  {
    title: "Penetration Testing",
    status: "Beginner",
    description: "Learning to identify vulnerabilities, perform security assessments, and use industry-standard tools.",
    icon: ShieldAlert,
  },
  {
    title: "Security Research",
    status: "Practice Projects",
    description: "Exploring security concepts through hands-on projects, CTF challenges, and academic research.",
    icon: Search,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 font-mono text-sm">
            // services.yml
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 card-hover text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono mb-4">
                {service.status}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mt-12 font-mono border border-border rounded-lg py-3 px-6 max-w-lg mx-auto"
        >
          ⚠ Currently focused on learning, practice, and academic projects.
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
