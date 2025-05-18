import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaBriefcase, FaRocket, FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    company: "Shrim Technolab",
    role: "Software Development Engineer",
    duration: "2024 December - Present",
    icon: <FaBriefcase size={20} />,
    description:
      "Developing full-stack applications using modern web technologies and cloud services.",
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    duration: "2021 - Present",
    icon: <FaLaptopCode size={20} />,
    description:
      "Delivering custom web solutions for clients across various industries.",
  },
  {
    company: "Bestwave Technologies",
    role: "Frontend Engineer",
    duration: "2 Months",
    icon: <FaRocket size={20} />,
    description:
      "Worked on UI development using React.js and implemented responsive designs.",
  },
];

const ExperienceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-gray-800"
      id="experience"
    >
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/20 via-purple-400/50 to-purple-500/20 transform -translate-x-1/2" />

      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-800 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Professional Journey
        </motion.h2>

        <div className="relative space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="relative grid grid-cols-5 gap-10 items-center"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                w-6 h-6 rounded-full bg-purple-400 shadow-glow-purple"
              />

              <motion.div
                className={`col-span-5 md:col-span-2 p-8 rounded-3xl backdrop-blur-sm 
                  border border-purple-400/20 bg-gradient-to-b from-gray-800/50 to-gray-900/50
                  ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-4"}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="p-3 bg-purple-400/10 rounded-xl">
                    {exp.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300">
                      {exp.company}
                    </h3>
                    <p className="text-gray-400 text-sm">{exp.duration}</p>
                  </div>
                </div>
                <p className="text-gray-300">{exp.description}</p>
                <div className="mt-4">
                  <span className="px-3 py-1 text-sm bg-purple-400/20 text-purple-300 rounded-full">
                    {exp.role}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
