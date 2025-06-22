import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import { motion, useAnimation , AnimatePresence} from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiGithub, FiExternalLink, FiX , FiChevronLeft , FiChevronRight} from "react-icons/fi";
import { useRef } from "react";

const project1Images = [
  "/Assets1/Project1/img1.png",
  "/Assets1/Project1/img2.png",
  "/Assets1/Project1/img3.png",
  "/Assets1/Project1/img4.png",
  "/Assets1/Project1/img5.png",
  "/Assets1/Project1/img6.png",
  "/Assets1/Project1/img7.png",
];

const project2Images = [
  "/Assets1/Project2/img1.png",
  "/Assets1/Project2/img2.png",
  "/Assets1/Project2/img3.png",
  "/Assets1/Project2/img4.png",
];

const project4Images = [
  "/Assets1/Project4/img1.png",
  "/Assets1/Project4/img2.png",
  "/Assets1/Project4/img3.png",
  "/Assets1/Project4/img4.png",
  "/Assets1/Project4/img5.png",
  "/Assets1/Project4/img6.png",
  "/Assets1/Project4/img7.png",
  "/Assets1/Project4/img8.png",
] ; 

const project3Images = ["/Assets/DNN.png"];

const projectsData = [
  {
    id: 1,
    title: "Campus Placement Portal for College",
    description:
      "A comprehensive portal connecting students with recruiters, featuring real-time notifications and analytics dashboard.",
    images: project1Images,
    thumbnail: "/Assets/JPNU.png",
    githubLink: "https://github.com/Dboy3/JPNU/tree/updatedproject",
    techStack: ["React", "Node.js", "MongoDB", "JWT", "Express", "Tailwind"],
  },
  {
    id: 2,
    title: "MyTube",
    description:
      "YouTube clone with advanced video streaming features and personalized recommendations.",
    images: project2Images,
    thumbnail: "/Assets/YT.png",
    githubLink: "https://github.com/Dboy3/Youtube_clone",
    liveLink: "https://youtube-clone-orcin-alpha.vercel.app/",
    techStack: ["React", "API", "Javascript", "Material UI"],
  },
  {
    id: 3,
    title: "Landcover-classification-using-Hyper-Spectral-Imagery",
    description:
      "Deep learning model for satellite image classification using PyTorch.",
    images: project3Images,
    thumbnail: "/Assets/DNN.png",
    githubLink:
      "https://github.com/Dboy3/Landcover-classification-using-Hyper-Spectral-Imagery",
    techStack: ["Neural Networks", "Deep Learning", "Digital Image Processing"],
  },
  {
    id: 4,
    title: "Invoice-management-webapp",
    description:
      "My contribution to the 6 month internship project",
    images: project4Images,
    thumbnail: project4Images[0],
    githubLink:
      "",
    techStack: ["Typescript", "Next.js", "JWT" , "Node.js" , "PostgreSQL" , "Postman" , "ShadCN" , "TailwindCSS"],
  },
];

Modal.setAppElement("#root");



const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const carouselRef = useRef(null);
  
  // Track window width for responsive design
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalIsOpen) return;
      
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIsOpen]);

  // Smooth carousel navigation
  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex(prev => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex(prev => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  // Open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  // Close project modal
  const closeModal = () => {
    setModalIsOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Carousel animation variants
  const carouselVariants = {
    enter: (direction) => ({
      x: direction === "right" ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === "right" ? -1000 : 1000,
      opacity: 0
    })
  };

  // Project card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  // Modal animation
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      id="projects" 
      className="min-h-screen py-16  px-4 p-10 sm:px-8 bg-gradient-to-br from-gray-900 to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 text-gray-400 max-w-2xl mx-auto"
          >
            Explore my portfolio of innovative projects showcasing technical expertise and creative problem-solving.
          </motion.p>
        </div>

        {/* Mobile View - Vertical List */}
        {windowWidth < 768 && (
          <div className="grid grid-cols-1 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-gray-700 rounded-full text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => openProjectModal(project)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg text-white font-medium hover:from-purple-700 hover:to-purple-900 transition-all"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Desktop View - Horizontal Carousel */}
        {windowWidth >= 768 && (
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div className="relative h-[400px]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={carouselVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "tween", duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="h-full flex">
                      <div className="w-1/4 flex items-center justify-center p-4">
                        <div className="text-white">
                          <h3 className="text-3xl font-bold mb-4">{projectsData[currentIndex].title}</h3>
                          <p className="text-gray-300 mb-6">{projectsData[currentIndex].description}</p>
                          <div className="flex flex-wrap gap-2 mb-8">
                            {projectsData[currentIndex].techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-gray-800 rounded-full text-purple-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => openProjectModal(projectsData[currentIndex])}
                            className="px-5 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl text-white font-medium hover:from-purple-700 hover:to-purple-900 transition-all flex items-center gap-2"
                          >
                            Explore Project
                          </button>
                        </div>
                      </div>
                      <div className="w-3/4 relative">
                        <img
                          src={projectsData[currentIndex].thumbnail}
                          alt={projectsData[currentIndex].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-800 hover:bg-purple-700 p-4 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <FiChevronLeft className="text-white text-2xl" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-800 hover:bg-purple-700 p-4 rounded-full shadow-lg transition-all duration-300 z-10"
            >
              <FiChevronRight className="text-white text-2xl" />
            </button>

            {/* Project Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? "right" : "left");
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-purple-500 scale-125" 
                      : "bg-gray-700 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
        closeTimeoutMS={300}
      >
        {selectedProject && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-purple-500/30 w-full max-w-4xl"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors shadow-lg"
            >
              <FiX className="text-xl text-purple-400" />
            </button>

            <div className="relative">
              <div className="h-64 sm:h-96 overflow-hidden">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-6 text-base sm:text-lg">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-200 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-700 rounded-full text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all font-medium"
                >
                  <FiGithub className="text-xl" />
                  View Source Code
                </a>

                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all font-medium"
                  >
                    <FiExternalLink className="text-xl" />
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </Modal> */}


<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  className="modal"
  overlayClassName="modal-overlay"
  closeTimeoutMS={300}
>
  {selectedProject && (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-purple-500/30 w-full max-w-4xl"
    >
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 z-50 p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors shadow-lg"
      >
        <FiX className="text-xl text-purple-400" />
      </button>

      {/* Image Carousel */}
      <div className="relative h-64 sm:h-96">
        <Slider
          dots={true}
          infinite={true}
          autoplay={true}
          autoplaySpeed={1900}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {selectedProject.images.map((src, idx) => (
            <div key={idx} className="h-64 sm:h-96">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4">
          {selectedProject.title}
        </h3>
        <p className="text-gray-300 mb-6 text-base sm:text-lg">
          {selectedProject.description}
        </p>

        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-200 mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {selectedProject.techStack?.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-700 rounded-full text-purple-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={selectedProject.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all font-medium"
          >
            <FiGithub className="text-xl" />
            View Source Code
          </a>

          {selectedProject.liveLink && (
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all font-medium"
            >
              <FiExternalLink className="text-xl" />
              View Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )}
</Modal>
      <style jsx global>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(8px);
        }
        
        .modal {
          position: relative;
          border: none;
          background: transparent;
          padding: 0;
          width: 95%;
          max-width: 800px;
          margin: 0 auto;
          outline: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;