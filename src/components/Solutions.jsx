import React from "react";
import {
  CameraIcon,
  VideoCameraIcon,
  ClipboardIcon,
  MegaphoneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Solutions = () => {
  const solutions = [
    { id: 1, icon: <CameraIcon className="w-20 h-20 text-white" />, label: "camera" },
    { id: 2, icon: <VideoCameraIcon className="w-20 h-20 text-white" />, label: "video" },
    { id: 3, icon: <ClipboardIcon className="w-20 h-20 text-white" />, label: "event" },
    { id: 4, icon: <MegaphoneIcon className="w-20 h-20 text-white" />, label: "announce" },
    { id: 5, icon: <PencilSquareIcon className="w-20 h-20 text-white" />, label: "design" },
  ];

  // Variants for animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="w-full py-20 text-white bg-black">
      {/* Title Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-bold leading-none text-7xl">Our</h1>
        <p className="mt-2 text-3xl leading-none">Solutions</p>
      </motion.div>

      {/* Solutions Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-16 px-10 mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {solutions.map((solution) => (
          <motion.div
            key={solution.id}
            className="flex flex-col items-center space-y-8"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex items-center justify-center w-40 h-40 bg-black border-4 border-gray-300 rounded-lg shadow-lg">
              {solution.icon}
            </div>
            <p className="text-xl capitalize">{solution.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Solutions;
