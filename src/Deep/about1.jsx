import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const AboutSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    },
    exit: {
      opacity: 0,
      y: 40,
      transition: { duration: 0.6 }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("exit");
    }
  }, [controls, inView]);

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="p-6 sm:p-10 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-800 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-4 rounded transition-all duration-500" />
        </div>

        <motion.div 
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-8 border border-gray-700 hover:border-purple-400/40 transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              <span className="text-purple-300 font-semibold">
                Proficient software dev?
              </span>{" "}
              Yeah, that’s me, armed with ReactJS, NextJS, MongoDB, SQL, C++,
              JavaScript, TypeScript, and a dangerously decent grip on DSA 💻. I
              vibe with clean code, reusable components, and that sweet spot
              between functionality and aesthetics ✨. I’ve got hands-on
              experience with REST APIs, MVC, and Agile, aka I can survive
              meetings and write code. Occasionally, I flex some ML/DL basics
              when I feel fancy.
            </p>

            {/* Floating gradient effects */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-40 -z-10" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl opacity-40 -z-10" />
          </div>

        </motion.div>

        <motion.div 
          className="mt-12 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          Continuously expanding my skill set while maintaining focus on writing clean, efficient code.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;