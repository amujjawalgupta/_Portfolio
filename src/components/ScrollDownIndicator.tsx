import { motion } from "framer-motion";

interface ScrollDownIndicatorProps {
  targetId: string;
}

const ScrollDownIndicator = ({ targetId }: ScrollDownIndicatorProps) => {
  return (
    <a
      href={`#${targetId}`}
      className="flex flex-col items-center gap-2 mt-16 mx-auto w-fit group"
    >
      <span className="text-muted-foreground text-xs font-mono tracking-widest group-hover:text-primary transition-colors">
        Scroll Down
      </span>
      <motion.div
        className="w-7 h-11 rounded-full border-2 border-muted-foreground/40 group-hover:border-primary/60 transition-colors flex justify-center pt-2"
        animate={{ y: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors"
          animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </a>
  );
};

export default ScrollDownIndicator;
