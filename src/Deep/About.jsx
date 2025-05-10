import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaDatabase, FaBrain, FaGithub, FaLink } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="px-6 py-16 max-w-7xl mx-auto">

        {/* Description Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24 ">
          {/* Animated Character */}
          <motion.div
            className="flex items-center justify-center order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <FaCode className="text-8xl text-white opacity-90" />
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow" />
              </div>
            </div>
          </motion.div>

          {/* Description Text */}
          <motion.div
            className="flex flex-col justify-center order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-400 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <div className="text-base md:text-lg leading-relaxed text-gray-300 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <p className="mb-4">
                <span className="text-purple-400">
                  {" "}
                  Proficient software dev?
                </span>{" "}
                Yeah, that’s me, armed with ReactJS, NextJS, MongoDB, SQL, C++,
                JavaScript, TypeScript, and a dangerously decent grip on DSA 💻.
                I vibe with clean code, reusable components, and that sweet spot
                between functionality and aesthetics ✨.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ReactJS", "NextJS", "TypeScript", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          <SkillCard
            icon={<FaCode className="text-blue-400" />}
            title="Languages"
            items={[
              { name: "C++", level: 90 },
              { name: "JavaScript", level: 88 },
              { name: "TypeScript", level: 85 },
            ]}
          />
          <SkillCard
            icon={<FaBrain className="text-purple-400" />}
            title="Frameworks"
            items={[
              { name: "React/Next.js", level: 90 },
              { name: "Node.js", level: 85 },
              { name: "Express.js", level: 80 },
            ]}
          />
          <SkillCard
            icon={<FaDatabase className="text-green-400" />}
            title="Databases"
            items={[
              { name: "MongoDB", level: 88 },
              { name: "PostgreSQL", level: 82 },
              { name: "Redis", level: 75 },
            ]}
          />
          <SkillCard
            icon={<FaGithub className="text-gray-300" />}
            title="Tools"
            items={[
              { name: "Git/GitHub", level: 90 },
              { name: "Docker", level: 80 },
              { name: "AWS", level: 70 },
            ]}
          />
        </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Coding Profiles Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
            icon={<SiLeetcode className="text-3xl text-yellow-400" />}
            title="LeetCode"
            stats="Top 11.75% | Rating: 1717"
            link="https://leetcode.com/u/Db0y/"
          />
          <ProfileCard
            icon={<SiGeeksforgeeks className="text-3xl text-green-400" />}
            title="GeeksforGeeks"
            stats="500+ Problems Solved"
            link="https://www.geeksforgeeks.org/user/dboydhruvil/"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

// SkillCard Component
const SkillCard = ({ icon, title, items }) => (
  <motion.div
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-purple-500/30 transition-all"
    variants={cardVariants}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center gap-3 mb-6">
      <span className="p-3 bg-gray-700/50 rounded-xl">{icon}</span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">{item.name}</span>
            <span className="text-blue-400">{item.level}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <motion.div
              className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${item.level}%` }}
              transition={{ duration: 1, delay: idx * 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// ProfileCard Component
const ProfileCard = ({ icon, title, stats, link }) => (
  <motion.div
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-400/30 transition-all group"
    variants={cardVariants}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center gap-4 mb-4">
      <span className="p-3 bg-gray-700/50 rounded-xl group-hover:bg-blue-900/20 transition-colors">
        {icon}
      </span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-300 text-sm mb-6">{stats}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-colors"
    >
      <FaLink className="text-blue-400" />
      <span className="text-sm font-medium">View Profile</span>
    </a>
  </motion.div>
);

export default About;
