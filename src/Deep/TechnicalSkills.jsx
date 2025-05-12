import React from "react";
import { motion } from "framer-motion";
import { Laptop, Server, Database, Code, LayoutDashboard, Wrench } from "lucide-react";

const skillsData = [
  {
    title: "Frontend",
    icon: <Laptop size={20} />,
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    technologies: ["Node.js", "Express.js", "Python", "Java"],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    technologies: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "CMS",
    icon: <LayoutDashboard size={20} />,
    technologies: ["Strapi CMS", "Payload CMS"],
  },
  {
    title: "UI Frameworks",
    icon: <Wrench size={20} />,
    technologies: ["TailwindCSS", "Shadcn"],
  },
  {
    title: "Programming",
    icon: <Code size={20} />,
    technologies: ["C", "C++", "Java", "Python", "DSA"],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
    },
  }),
};

export default function TechnicalSkills() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-400">Technical Skills</h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto mt-2 rounded"></div>
        <p className="text-gray-400 mt-4">
          A comprehensive set of technologies I work with
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((skill, idx) => (
          <motion.div
            key={skill.title}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            className=" rounded-xl p-6 border border-purple-300 shadow-md hover:shadow-purple-900 transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4 text-lg font-semibold text-white">
              <span className="bg-[#1e1e1e] hover:shadow-lg p-2 rounded-full text-purple-400">
                {skill.icon}
              </span>
              {skill.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-black text-sm px-3 py-1 rounded-full text-white shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-500 text-sm">
        I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in web development.
      </div>
    </section>
  );
}
