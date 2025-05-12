// components/Projects.jsx
import {motion} from "framer-motion"
import { FiSmartphone , FiCode , FiPower } from "react-icons/fi";

const features = [
  { icon: <FiSmartphone />, title: "Responsive Design", color: "bg-blue-100" },
  { icon: <FiCode />, title: "Clean Code", color: "bg-purple-100" },
  { icon: <FiPower />, title: "Fast Performance", color: "bg-pink-100" },
];

const Projects = () => (
  <section id="projects" className="py-20 ">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 ">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className={`p-8 rounded-2xl ${feature.color} hover:shadow-xl transition-all duration-300`}
        >
          <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6 text-3xl">
            {feature.icon}
          </div>
          <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
);

export default Projects;
