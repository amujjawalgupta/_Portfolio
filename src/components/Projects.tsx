import { motion } from "framer-motion";
import { Github, Lock, Wifi, Database } from "lucide-react";

const projects = [
  {
    title: "Secure Login System",
    description: "A backend-focused authentication system with encryption and role-based access control.",
    tech: ["Java", "Spring Boot", "JWT", "MySQL"],
    icon: Lock,
  },
  {
    title: "Network Scanner Tool",
    description: "Tool for identifying open ports and basic vulnerabilities on target networks.",
    tech: ["Python", "Sockets", "Nmap API"],
    icon: Wifi,
  },
  {
    title: "Student Management Backend",
    description: "REST API using Java and SQL for managing student records with CRUD operations.",
    tech: ["Java", "SQL", "REST API", "JDBC"],
    icon: Database,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 font-mono text-sm">
            // projects.json
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 card-hover group relative overflow-hidden"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <project.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-secondary text-foreground text-xs rounded font-mono border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono cursor-not-allowed opacity-60">
                  <Github className="w-4 h-4" />
                  Coming Soon
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
