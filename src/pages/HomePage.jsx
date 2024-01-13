import { motion } from "framer-motion";
import Layout from "../components/Layout";
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
    <Layout id="#">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="w-full flex-col gap-2 items-center justify-center self-center text-left"
      >
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="py-2 text-center mx-auto font-extrabold from-stone-100 text-6xl mb-10"
        >
          Turning Vision Into Reality With Code And Design.
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="my-4 text-xl font-medium mb-10 tracking-wide"
        >
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </motion.p>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="flex justify-center gap-5 mt-10"
        >
          <Button title="Resume" className="mr-[5rem]" />
          <motion.p
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="basis-1/4 text-xl p-2 font-semibold capitalize cursor-pointer"
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
    </Layout>
  );
}
