import { motion } from "framer-motion";

const Navbar = () => {
  const variants = {
    default: { width: "0" },
    hover: { width: "100%" },
  };

  return (
    <nav className="flex list-none gap-8">
      <motion.li className="text-xl relative w-full" whileHover="hover">
        <a href="/">Home</a>
        <motion.div
          className="h-[0.5px] bg-white absolute"
          variants={variants}
        ></motion.div>
      </motion.li>

      <motion.li className="text-xl relative w-full" whileHover="hover">
        <a href="/about">About</a>
        <motion.div
          className="h-[0.5px] bg-white absolute"
          variants={variants}
        ></motion.div>
      </motion.li>

      <motion.li className="text-xl relative w-full" whileHover="hover">
        <a href="/projects">Projects</a>
        <motion.div
          className="h-[0.5px] bg-white absolute"
          variants={variants}
        ></motion.div>
      </motion.li>
    </nav>
  );
};

export default Navbar;
