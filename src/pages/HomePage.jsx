import { motion } from "framer-motion";
import Button from "../components/Button";
import { Link } from "react-scroll";

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
    <div id="#" className="w-full px-6 py-32 min-h-screen lg:py-24 lg:px-32 md:flex md:justify-center md:items-center md:px-20 relative ">
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
          className="lg:py-2 text-center text-4xl md:text-6xl mx-auto font-extrabold from-stone-100 lg:text-7xl lg:mb-10 sm:mb-10 md:mb-30"
        >
          Turning Vision Into Reality With Code And Design.
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="my-4 text-sm lg:text-xl md:text-xl font-medium mb-10 md:mb-20 tracking-wide"
        >
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </motion.p>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="flex justify-center gap-5 mt-10 md:gap-x-10 md:items-center"
        >
          <Button title="Resume" className="lg:mr-[5rem] md:text-xl md:py-4 md:px-12" />
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="basis-1/4 text-xs lg:text-xl md:text-xl p-2 font-semibold capitalize cursor-pointer"
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
