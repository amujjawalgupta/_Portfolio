import { motion } from "framer-motion";
import { Code2, Server, ShieldCheck, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 60 },
      { name: "Python", level: 50 },
      { name: "SQL", level: 55 },
    ],
  },
  {
    title: "Backend & Development",
    icon: Server,
    skills: [
      { name: "Backend Fundamentals", level: 65 },
      { name: "Database Basics", level: 55 },
      { name: "API Concepts", level: 60 },
      { name: "Git & Version Control", level: 70 },
    ],
  },
  {
    title: "Cybersecurity & Networking",
    icon: ShieldCheck,
    skills: [
      { name: "Networking Fundamentals", level: 65 },
      { name: "Penetration Testing", level: 40 },
      { name: "Security Concepts", level: 60 },
      { name: "Linux", level: 50 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: [
      { name: "Problem Solving", level: 80 },
      { name: "Analytical Thinking", level: 75 },
      { name: "Curiosity-Driven Learning", level: 90 },
      { name: "Team Collaboration", level: 70 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/50">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 font-mono text-sm">
            // skills.config
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-mono text-xs">{skill.name}</span>
                      <span className="text-muted-foreground text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
