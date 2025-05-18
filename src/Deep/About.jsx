import { motion } from "framer-motion";
import AboutSection from "./about1";
import CodingProfiles from "./Coding";

const About = () => {
  return (
    <motion.section id="about" className="min-h-screen  text-white">
      <AboutSection />
      <CodingProfiles />
    </motion.section>
  );
};

export default About;

// export default AboutSection;
