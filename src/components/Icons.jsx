import { BsGithub } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Icons() {
  return (
    <div className="sm:flex justify-center items-center sm:gap-8 hidden">
      <motion.li
        className="list-none sm:w-8 sm:h-8 flex justify-center items-center rounded-full bg-slate-200 text-black"
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
      <button className="w-8 h-8 flex justify-center items-center rounded-full bg-zinc-950 text-white border border-solid border-slate-200">
        <BsMoonStarsFill className="cursor-pointer" />
      </button>
      <button className="w-8 h-8 flex justify-center items-center rounded-full bg-slate-200 text-black">
        <BsSunFill className="cursor-pointer" />
      </button>
    </div>
  );
}
