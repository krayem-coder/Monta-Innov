import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * AnimatedSection – Reusable scroll animation wrapper
 * Animates children when they enter the viewport
 */
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  threshold = 0.15,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = {
    opacity: 0,
    scale: direction === "none" ? 0.98 : 1, // Slight zoom out initially if no direction
    ...directionMap[direction],
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : initial}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Smoother easing curve for premium feel
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
