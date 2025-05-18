import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const CodingProfiles = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="bg-gray-900 text-white py-16 px-6 md:px-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-700 bg-clip-text text-transparent">
          Coding Profiles
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-4 rounded" />
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          A quick glimpse at my coding journey across platforms
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        <ProfileCard
          icon={<SiLeetcode className="text-4xl text-yellow-400" />}
          title="LeetCode"
          stats={["Top 11.83% globally", "Contest Rating: 1717", "400+ Problems Solved"]}
          link="https://leetcode.com/u/Db0y/"
        />
        <ProfileCard
          icon={<SiGeeksforgeeks className="text-4xl text-green-400" />}
          title="GeeksforGeeks"
          stats={["Contest Rating: 1452", "170+ Problems Solved", "Coding Score: 502"]}
          link="https://www.geeksforgeeks.org/user/dboydhruvil/"
        />
      </motion.div>
    </motion.section>
  );
};

const ProfileCard = ({ icon, title, stats, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    variants={cardVariants}
    whileHover={{ scale: 1.03 }}
    className="group bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-md p-6 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-700/20"
  >
    <div className="flex items-center gap-4 mb-4">
      <span className="p-4 bg-gray-700/40 rounded-xl group-hover:bg-purple-800/20 transition-colors">
        {icon}
      </span>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <ul className="text-gray-300 space-y-2 text-sm pl-2">
      {stats.map((line, idx) => (
        <li key={idx} className="flex items-start before:content-['•'] before:mr-2 before:text-purple-400">
          {line}
        </li>
      ))}
    </ul>
  </motion.a>
);

export default CodingProfiles;
