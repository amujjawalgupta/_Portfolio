import { motion } from "framer-motion";
import { GraduationCap, Target, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 font-mono text-sm">
            // who_am_i.md
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-foreground leading-relaxed">
              I'm a Computer Science student specializing in Cybersecurity with a deep passion for understanding how systems work — and how to secure them. I enjoy problem-solving, Java programming, and building backend systems that are robust and secure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm a curious learner constantly exploring open-source tools, modern backend frameworks, and security methodologies. My goal is to bridge the gap between software development and cybersecurity, creating solutions that are both functional and secure.
            </p>

            {/* Education */}
            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <p className="text-foreground font-medium">B.Tech in Computer Science</p>
              <p className="text-primary text-sm">Cybersecurity Specialization</p>
              <p className="text-muted-foreground text-sm mt-1">
                Rungta International Skill University
              </p>
              <p className="text-muted-foreground text-sm">Expected Graduation: 2029</p>
            </div>
          </motion.div>

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Career Goals</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Become a skilled penetration tester and security researcher
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Build secure backend systems at scale
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Contribute to open-source security tools
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Earn industry certifications (CEH, OSCP)
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Currently Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Penetration Testing", "Node.js", "Linux Security", "Docker", "Network Analysis"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full border border-border font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
