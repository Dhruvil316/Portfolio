import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const AboutSection = ({ inView }) => {
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-purple-900 rounded-full blur-xl opacity-40 animate-pulse" />
            <div className="relative w-full h-full bg-purple-800 rounded-full flex items-center justify-center">
              <FaCode className="text-8xl text-white opacity-90" />
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-purple-400 mb-6">About Me</h1>
          <div className="text-gray-300 text-base leading-relaxed bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection