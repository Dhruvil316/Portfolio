import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CodingProfiles = ({ controls }) => (
  <div className="max-w-7xl mx-auto py-16 px-6">
    <h2 className="text-4xl font-bold text-center mb-3  text-purple-400">Coding Profiles</h2>
    <div className="h-1 w-20 bg-purple-500 mx-auto mb-10 rounded"></div>
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
        icon={<SiLeetcode className="text-4xl text-yellow-400" />}
        title="LeetCode"
        stats={[
          "Top 11.83% globally",
          "Contest Rating: 1717",
          "400+ Problems Solved",
        ]}
        link="https://leetcode.com/u/Db0y/"
      />
      <ProfileCard
        icon={<SiGeeksforgeeks className="text-4xl text-green-400" />}
        title="GeeksforGeeks"
        stats={[
          "Contest Rating: 1452",
          "170+ Problems Solved",
          "Coding Score: 502",
        ]}
        link="https://www.geeksforgeeks.org/user/dboydhruvil/"
      />
    </motion.div>
  </div>
);

const ProfileCard = ({ icon, title, stats, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-purple-400/40 transition-all group hover:shadow-purple-300/20 hover:shadow-lg"
    variants={cardVariants}
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex items-center gap-4 mb-4">
      <span className="p-4 bg-gray-700/50 rounded-xl group-hover:bg-purple-800/30 transition-colors">
        {icon}
      </span>
      <h3 className="text-2xl font-bold text-purple-400">{title}</h3>
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
