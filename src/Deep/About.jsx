import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutSection from "./about1"
import CodingProfiles from "./Coding";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen  text-white"
    >
      <AboutSection inView={inView} />
      <CodingProfiles controls={controls} />
    </motion.section>
  );
};

export default About;

// export default AboutSection;
