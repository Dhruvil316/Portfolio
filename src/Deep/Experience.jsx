import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Shrim Technolabs LLP",
    duration: "23 December, 2024 – Present",
    role: "Software Development Engineer",
    industry: "IT / Computers - Software",
    details: [
      "Designed and developed 10+ reusable, high-quality components using ReactJS and TypeScript, enhancing maintainability and scalability across multiple projects.",
      "Debugged and resolved 95% of reported software issues within project deadlines, improving system reliability.",
      "Collaborated with a cross-functional team in an Agile environment, participating in daily stand-ups, sprint planning, and reviews to ensure timely delivery of 100% of assigned deliverables.",
      "Ensured code quality through rigorous testing and adherence to best practices, reducing bug occurrence by 20%.",
    ],
  },
  {
    company: "Bestwave Technologies Private Limited",
    duration: "27 May, 2024 – 12 Jul, 2024",
    role: "Software Developer Engineer Intern",
    industry: "IT / Computers - Software",
    details: [
      "Contributed to a grocery store project by developing RESTful cart API endpoints using the MVC design pattern with Mongoose, Express, and MongoDB.",
      "Designed and integrated a responsive frontend cart UI using ReactJS and Tanstack Query, ensuring seamless user interactions with the backend.",
      "Implemented Redux for efficient state management in the React app, enhancing performance and reliability.",
      "Collaborated with the team using Agile methodology, attending regular meetings, and ensuring timely delivery of project milestones.",
    ],
  },
];

const Experience = () => {
  const [currentExp, setCurrentExp] = useState(0);

  const handleNext = () => {
    setCurrentExp((prev) => (prev + 1) % experiences.length);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <h2 className="text-4xl font-bold text-purple-400 mb-6 text-center">
        Experience
      </h2>
      <div className="relative w-full max-w-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentExp}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-purple-400">
              {experiences[currentExp].company}
            </h3>
            <p className="text-gray-400 text-sm">
              {experiences[currentExp].duration}
            </p>
            <p className="text-lg font-medium text-gray-300 mt-2">
              {experiences[currentExp].role}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              {experiences[currentExp].industry}
            </p>
            <ul className="text-gray-300 text-left space-y-2">
              {experiences[currentExp].details.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span> {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-6">
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
