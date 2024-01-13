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
      className="absolute cursor-pointer rounded-full font-semibold w-max py-3 px-4 bg-black text-white text-xl flex justify-center items-center"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={variants}
    >
      <p>{title}</p>
    </motion.div>
  );
}
