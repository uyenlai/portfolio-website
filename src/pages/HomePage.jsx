import { motion } from "framer-motion";
import Button from "../components/Button";
import { Link } from "react-scroll";
import resume from "/Uyen Lai - Resume.pdf";

export default function HomePage() {
  const textVariants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        stagggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      id="#"
      className="w-full px-6 py-32 min-h-screen lg:py-24 lg:px-32 md:flex md:justify-center md:items-center md:px-20 relative "
    >
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="w-full flex-col lg:gap-2 items-center justify-center self-center text-left dark:text-white"
      >
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="lg:py-2 text-center text-4xl md:text-5xl mx-auto font-extrabold from-stone-100 lg:text-7xl lg:mb-8 sm:mb-10 md:mb-30"
        >
          Welcome to my portfolio!
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="my-4 text-sm py-20 lg:text-2xl text-center md:text-lg font-medium mb-10 md:mb-20 tracking-wide"
        >
          Join me on this digital odyssey, where lines of code transform
          aspirations into accomplishments, passion fuels progress, and each
          project is a testament to the limitless possibilities of technology.
        </motion.p>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="flex justify-center gap-5 mt-10 md:gap-x-10 md:items-center"
        >
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <Button
              title="Resume"
              className="md:text-xl md:py-4 md:px-12 lg:px-10 lg:py-3 px-7 py-2"
            />
          </a>
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-xs lg:text-xl md:text-xl p-2 font-semibold capitalize cursor-pointer"
            whileHover={{
              scale: 1.1,
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            <Link to="#contact" smooth duration={1500}>
              Contact me!
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
