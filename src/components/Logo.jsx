import { motion } from "framer-motion";

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
      className="w-16 h-16 rounded-full border-2 border-teal-700 border-solid flex justify-center items-center cursor-pointer"
    >
      <a href="#" className="text-2xl text-white font-bold">
        UL
      </a>
    </motion.div>
  );
};

export default Logo;
