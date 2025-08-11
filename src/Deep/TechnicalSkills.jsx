import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Laptop, Server, Database, Code, LayoutDashboard, Wrench } from "lucide-react";

const skillsData = [
  {
    title: "Frontend",
    icon: <Laptop size={20} />,
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js" ,"REST-APIs" ],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    technologies: ["Java" , "Springboot" ,  "Node.js", "Express.js", "MVC design patterns" , "JWT" ],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    technologies: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "CS-fundamentals",
    icon: <LayoutDashboard size={20} />,
    technologies: ["OOPS" , "Operating System" , "Software Testing & Quality Assurance" , "DBMS" , "Computer Networks"],
  },
  {
    title: "UI Frameworks",
    icon: <Wrench size={20} />,
    technologies: ["TailwindCSS", "Shadcn"],
  },
  {
    title: "Programming",
    icon: <Code size={20} />,
    technologies: [ "C++", "Java",  "DSA"],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

export default function TechnicalSkills() {
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
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-800 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-4 rounded transition-all duration-500" />
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
          A comprehensive set of technologies I work with
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((skill) => (
          <motion.div
            key={skill.title}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
            className="group relative rounded-xl p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl hover:shadow-purple-900/30"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-gradient-to-br from-purple-600 to-purple-300 p-3 rounded-xl shadow-lg">
                {React.cloneElement(skill.icon, { size: 24, className: "text-white" })}
              </span>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
                {skill.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {skill.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium bg-gray-700/50 backdrop-blur-sm rounded-full text-purple-100 border border-gray-600 hover:border-purple-400 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center text-gray-400 text-sm max-w-3xl mx-auto leading-relaxed">
        I'm constantly expanding my skill set and staying up-to-date with the latest technologies 
        and best practices in full-stack development, focusing on building scalable and 
        maintainable solutions.
      </div>
    </motion.section>
  );
}
