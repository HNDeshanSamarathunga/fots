import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import Navbar from "./Navbar";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : 0,
    scale: 1.2,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1.25,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.5 } },
};

const Header = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Image grid */}
        <div className="absolute inset-0 grid w-full h-full grid-cols-3 overflow-hidden opacity-70">
          {/* First Image */}
          <motion.div
            className="relative overflow-hidden"
            custom="left"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src={img1}
              alt="Image 1"
              className="absolute inset-0 object-cover w-full h-full"
              whileHover={{ scale: 1.35 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Second Image */}
          <motion.div
            className="relative overflow-hidden"
            custom="up"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src={img3}
              alt="Image 2"
              className="absolute inset-0 object-cover w-full h-full"
              whileHover={{ scale: 1.35 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Third Image */}
          <motion.div
            className="relative overflow-hidden"
            custom="right"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src={img2}
              alt="Image 3"
              className="absolute inset-0 object-cover w-full h-full"
              whileHover={{ scale: 1.35 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>

        {/* Navbar stays at the top */}
        <Navbar />

        {/* Centered content */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pb-10 bg-transparent"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col justify-center items-center mt-28 text-center text-white bg-gray-400 bg-opacity-60 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] h-[85vh] sm:h-[80vh] md:h-[75vh] lg:h-[75vh] rounded-3xl"
            variants={contentVariants}
          >
            {/* Logo */}
            <motion.img
              src={logo}
              alt="Logo"
              className="mb-8 w-28 sm:w-32 md:w-36 lg:w-40 xl:w-44"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* Text and Buttons */}
            <motion.div
              className="px-6 py-4 mx-auto text-center md:px-16 lg:px-20 xl:px-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-6xl font-bold max-w-3xl leading-snug">
                <p>Official Media Grid of Student&rsquo;s Union,</p>
                <p>Faculty of Technological Studies,</p>
                <p>University of Vavuniya</p>
              </h2>
              <motion.div
                className="mt-8 space-x-6 sm:mt-10 lg:mt-12 xl:mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
              >
                <motion.a
                  href=""
                  whileHover={{ scale: 1.1 }}
                  className="items-center px-8 py-5 space-x-2 font-bold text-black bg-gray-100 shadow-md cursor-pointer rounded-xl shadow-red-500 hover:bg-white"
                >
                  CHECK NOW
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
