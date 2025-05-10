// // components/ProjectCard.jsx
// const ProjectCard = ({ project }) => (
//   <div className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all">
//     <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//     <p className="text-gray-400 mb-4">{project.description}</p>
//     <div className="flex flex-wrap gap-2">
//       {project.tech.map((tech, i) => (
//         <span
//           key={i}
//           className="bg-purple-500 text-white px-2 py-1 rounded text-sm"
//         >
//           {tech}
//         </span>
//       ))}
//     </div>
//   </div>
// );
// export default ProjectCard;

"use client";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 relative overflow-hidden group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      style={{ perspective: 1000 }}
    >
      <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              initial={false}
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              className="bg-purple-500 text-white px-2 py-1 rounded text-sm"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* 3D Hover Effect */}
      <div className="absolute inset-0 transition-transform duration-500 [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)] preserve-3d">
        <div className="absolute inset-0 backface-hidden bg-gray-700 rounded-lg p-6">
          <p className="text-purple-400">View Project Details →</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
