import { motion } from "framer-motion";

export default function Skill({ title, x, y }) {
  const variants = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      x: x,
      y: y,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="absolute cursor-pointer rounded-full font-semibold w-max lg:py-3 lg:px-4 bg-black text-white lg:text-xl lg:p-4 p-2 text-xs md:text-sm md:px-4 md:py-4 flex justify-center items-center dark:text-black dark:bg-white"
      initial="initial"
      whileInView="animate"
      variants={variants}
    >
      <p>{title}</p>
    </motion.div>
  );
}
