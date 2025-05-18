import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

// Project 1 Images
import p1_1 from "../Assets1/Project1/img1.png";
import p1_2 from "../Assets1/Project1/img2.png";
import p1_3 from "../Assets1/Project1/img3.png";
import p1_4 from "../Assets1/Project1/img4.png";
import p1_5 from "../Assets1/Project1/img5.png";
import p1_6 from "../Assets1/Project1/img6.png";
import p1_7 from "../Assets1/Project1/img7.png";

import p2_1 from "../Assets1/Project2/img1.png";
import p2_2 from "../Assets1/Project2/img2.png";
import p2_3 from "../Assets1/Project2/img3.png";
import p2_4 from "../Assets1/Project2/img4.png";

import YT from "../Assets/YT.png";
import JPNU from "../Assets/JPNU.png";
import DNN from "../Assets/DNN.png";

const project1Images = [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7];
const project2Images = [p2_1, p2_2, p2_3, p2_4];
const project3Images = [DNN]; // Only one image

const projectsData = [
  {
    id: 1,
    title: "Campus Placement Portal for College",
    description: "A comprehensive portal connecting students with recruiters, featuring real-time notifications and analytics dashboard.",
    images: project1Images,
    thumbnail: JPNU,
    githubLink: "https://github.com/Dboy3/JPNU/tree/updatedproject",
    techStack: ["React", "Node.js", "MongoDB","JWT" ,"Express" , "Tailwind"]
  },
  {
    id: 2,
    title: "MyTube",
    description: "YouTube clone with advanced video streaming features and personalized recommendations.",
    images: project2Images,
    thumbnail: YT,
    githubLink: "https://github.com/Dboy3/Youtube_clone",
    liveLink: "https://youtube-clone-orcin-alpha.vercel.app/",
    techStack: ["React", "API", "Javascript", "Material UI"]
  },
  {
    id: 3,
    title: "Landcover-classification-using-Hyper-Spectral-Imagery",
    description: "Deep learning model for satellite image classification using PyTorch.",
    images: project3Images,
    thumbnail: DNN,
    githubLink: "https://github.com/Dboy3/Landcover-classification-using-Hyper-Spectral-Imagery",
    techStack: ["Neural Networks", "Deep Learning" ,"Digital Image Processing"]
  },
];

Modal.setAppElement('#root');

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          autoplaySpeed: 2000
        }
      }
    ]
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 50 },
      }}
      id="projects"
      className="p-6 sm:p-10 bg-gray-900"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-800 bg-clip-text text-transparent">
        My Projects
      </h2>

      <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-4 rounded transition-all duration-500" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => {
              if (project.images.length > 0) {
                setSelectedProject(project);
                setModalIsOpen(true);
              }
            }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden h-full hover:shadow-purple-500/20 transition-all group">
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack?.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-xs bg-gray-700 rounded-full text-purple-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
        closeTimeoutMS={300}
      >
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-purple-400/20"
          >
            <button
              onClick={() => setModalIsOpen(false)}
              className="absolute -top-4 -right-4 z-50 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors shadow-lg"
            >
              <FiX className="text-2xl text-purple-400" />
            </button>

            <div className="relative">
              {selectedProject.images.length > 1 ? (
                <Slider {...sliderSettings}>
                  {selectedProject.images.map((img, index) => (
                    <div key={index} className="relative focus:outline-none">
                      <img
                        src={img}
                        alt={`${selectedProject.title} - ${index + 1}`}
                        className="w-full h-64 sm:h-96 object-contain bg-gradient-to-br from-gray-900 to-gray-800 mx-auto p-4 rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-64 sm:h-96 object-contain bg-gradient-to-br from-gray-900 to-gray-800 mx-auto p-4 rounded-lg"
                />
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-purple-200 mb-6 text-base">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-400/90 hover:bg-purple-300 text-gray-900 rounded-lg transition-all font-semibold"
                >
                  <FiGithub className="text-xl" />
                  View Code
                </a>
                
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-400/90 hover:bg-green-300 text-gray-900 rounded-lg transition-all font-semibold"
                  >
                    <FiExternalLink className="text-xl" />
                    Live Demo
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
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          position: relative;
          border: none;
          background: transparent;
          padding: 0;
          width: 95%;
          max-width: 800px;
          margin: 0 auto;
        }

        .slick-dots {
          bottom: 20px !important;
        }

        .slick-dots li button:before {
          color: #c084fc !important;
          font-size: 12px !important;
          opacity: 0.5;
        }

        .slick-dots li.slick-active button:before {
          color: #c084fc !important;
          opacity: 1;
        }

        .slick-prev,
        .slick-next {
          width: 40px !important;
          height: 40px !important;
          z-index: 10;
        }

        .slick-prev:before,
        .slick-next:before {
          color: #c084fc !important;
          font-size: 40px !important;
          opacity: 0.8 !important;
          transition: opacity 0.3s ease;
        }

        .slick-prev:hover:before,
        .slick-next:hover:before {
          opacity: 1 !important;
        }

        .slick-prev {
          left: -50px !important;
        }

        .slick-next {
          right: -50px !important;
        }

        @media (max-width: 768px) {
          .slick-prev {
            left: -25px !important;
          }
          .slick-next {
            right: -25px !important;
          }
          .slick-prev:before,
          .slick-next:before {
            font-size: 30px !important;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default Projects;