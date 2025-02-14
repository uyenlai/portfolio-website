import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Icons() {
  return (
    <div className="sm:flex justify-center items-center sm:gap-8 hidden">
      <motion.li
        className="list-none sm:w-8 sm:h-8 hidden lg:flex justify-center items-center rounded-full bg-slate-200 text-black dark:text-white dark:bg-black"
        whileHover={{ y: -5, scale: 1.05 }}
      >
        <a
          href="https://github.com/uyenlai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="w-7 h-7" />
        </a>
      </motion.li>
      
    </div>
  );
}
