import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Shield, Terminal, Code2 } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import ScrollDownIndicator from "./ScrollDownIndicator";
import useTypewriter from "@/hooks/useTypewriter";

const floatingIcons = [
  { icon: Shield, x: "10%", y: "20%", delay: 0, size: 20 },
  { icon: Terminal, x: "85%", y: "15%", delay: 0.5, size: 18 },
  { icon: Code2, x: "75%", y: "75%", delay: 1, size: 22 },
  { icon: Shield, x: "15%", y: "70%", delay: 1.5, size: 16 },
];

const titles = ["Cybersecurity Enthusiast", "Backend Developer", "Security Researcher"];

const Hero = () => {
  const { text } = useTypewriter(titles, 80, 50, 2000);

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

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 pointer-events-none hidden lg:block"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, delay: item.delay, ease: "easeInOut" }}
        >
          <item.icon size={item.size} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/40 bg-primary/5 mb-4 font-mono text-sm text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-primary">❯_</span>
              <span>&lt;hello world /&gt;</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-gradient glow-text">Ujjawal Gupta</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl h-7">
              <span className="text-foreground font-medium">Computer Science Student</span>{" "}
              |{" "}
              <span className="text-primary font-mono">
                {text}
                <motion.span
                  className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              </span>
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
            <div className="relative group cursor-pointer flex flex-col items-center">
              {/* Outer thick ring with glow */}
              <div className="absolute -inset-6 rounded-full border-[3px] border-primary/40 group-hover:border-primary/70 transition-all duration-700 shadow-[0_0_25px_hsl(var(--primary)/0.15)] group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]" />

              {/* Tech accent lines - top */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />

              {/* Inner ring */}
              <div className="absolute -inset-2 rounded-full border border-primary/20 group-hover:border-primary/40 transition-all duration-700" />

              {/* Glow pulse behind image */}
              <motion.div
                className="absolute -inset-3 rounded-full bg-primary/5 group-hover:bg-primary/10 blur-2xl transition-all duration-700"
                animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />

              <motion.div
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/70 transition-all duration-700 relative"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <img
                  src={profileImg}
                  alt="Ujjawal Gupta"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                {/* Scanline effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                />
                {/* Bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </motion.div>

            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <ScrollDownIndicator targetId="about" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
