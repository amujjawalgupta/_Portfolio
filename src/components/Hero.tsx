import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-mono text-sm mb-4 tracking-wider">
              &lt; Hello World /&gt;
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-gradient glow-text">Ujjawal Gupta</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              <span className="text-foreground font-medium">Computer Science Student</span>{" "}
              |{" "}
              <span className="text-primary">Cybersecurity Enthusiast</span>{" "}
              |{" "}
              <span className="text-foreground font-medium">Backend Developer</span>
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Computer Science student with a passion for cybersecurity and software development. Strong foundation in networking and security fundamentals. Focused on backend development, modern JavaScript patterns, and penetration testing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all animate-pulse-glow"
              >
                View Projects <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-all"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 glow-border">
                <img
                  src={profileImg}
                  alt="Ujjawal Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-card border border-border rounded-xl flex items-center justify-center">
                <span className="font-mono text-primary text-xs text-center leading-tight">
                  Cyber<br />Sec
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
