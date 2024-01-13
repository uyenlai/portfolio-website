import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: [
          "#121212",
          "rgba(131,58,180,1)",
          "rgba(253,29,29,1)",
          "rgba(252,176,69,1)",
          "rgba(131,58,180,1)",
          "#121212",
        ],
        border: "none",
        transition: { duration: 1.5, repeat: Infinity },
      }}
      className="w-16 h-16 rounded-full dark:border dark:border-solid dark:border-white bg-black flex justify-center items-center cursor-pointer"
    >
      <Link
        to="#"
        smooth
        duration={1500}
        activeClass="active"
        className="text-2xl font-bold text-white"
      >
        UL
      </Link>
    </motion.div>
  );
};

export default Logo;
