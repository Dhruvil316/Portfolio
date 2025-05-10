// components/AnimatedBackground.jsx
"use client";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Floating Circuit Board Pattern */}
      <motion.div
        className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"
        variants={floatingVariants}
        animate="float"
      />

      {/* 3D Floating Cubes */}
      {[...Array(19)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-purple-400/20 rounded-lg"
          style={{
            width: 40,
            height: 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: [0, -100, 0],
            rotate: 360,
            scale: [2, 0.8, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
