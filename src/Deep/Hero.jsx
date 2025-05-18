"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SocialLinks from "./SocialLinks";
import AnimatedBackground from "./AnimatedBackground";

import image1 from "/Assets/paint.png";
import image2 from "/Assets/profile1.png";

const Hero = () => {
  const profileVariants = {
    initial: { scale: 0, rotateY: 180 },
    animate: {
      scale: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const boxRevealVariant = {
    hidden: {
      opacity: 0,
      y: 40,
      clipPath: "inset(100% 0% 0% 0%)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.6,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  };

  const revealControls = useAnimation();
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const handleResumeClick = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1lhhjShR7p2zt3-RPAabxThqaKtob7iJX/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  useEffect(() => {
    if (textInView) {
      revealControls.start("visible");
    } else {
      revealControls.start("hidden");
    }
  }, [textInView, revealControls]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 md:px-16 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden"
    >
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        <div
          ref={textRef}
          className="text-center md:text-left w-full md:w-1/2 flex flex-col justify-center"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white overflow-hidden"
            variants={boxRevealVariant}
            initial="hidden"
            animate={revealControls}
          >
            Hello<span className="text-purple-400">.</span> I'm{" "}
            <span className="text-purple-300">Dhruvil Rana</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-6 overflow-hidden"
            variants={boxRevealVariant}
            initial="hidden"
            animate={revealControls}
            transition={{ delay: 0.2 }}
          >
            Software Development Engineer
          </motion.p>

          {/* <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6 overflow-hidden"
            variants={boxRevealVariant}
            initial="hidden"
            animate={revealControls}
            transition={{ delay: 0.4 }}
          >
            <button className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition">
              Got a project?
            </button>
            <button className="border border-purple-500 text-purple-300 px-5 py-2 rounded-md hover:bg-purple-700 hover:text-white transition">
              My resume
            </button>
          </motion.div> */}

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6 overflow-hidden"
            variants={boxRevealVariant}
            initial="hidden"
            animate={revealControls}
            transition={{ delay: 0.4 }}
          >
            <button className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition">
              Got a project?
            </button>
            <button
              onClick={handleResumeClick}
              className="border border-purple-500 text-purple-300 px-5 py-2 rounded-md hover:bg-purple-700 hover:text-white transition group relative overflow-hidden"
            >
              <span className="relative z-10">My resume</span>
              <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          </motion.div>

          <motion.div
            className="md:justify-start justify-center flex overflow-hidden"
            variants={boxRevealVariant}
            initial="hidden"
            animate={revealControls}
            transition={{ delay: 0.6 }}
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* Profile Image with Splash */}
        <motion.div
          className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem] group perspective-1000"
          variants={profileVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src={image1}
            alt="Background Splash"
            className="absolute top-7 left-1/2 transform -translate-x-1/2 w-[140%] z-0 pointer-events-none"
          />
          <div className="relative z-10 w-full h-full">
            <img
              src={image2}
              alt="Profile"
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
