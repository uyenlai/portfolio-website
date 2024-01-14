import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { motion } from "framer-motion";

export default function Layout({ children, className, id, title }) {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleBtnVisibility = () => {
      window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false);
    };
    window.addEventListener("scroll", handleBtnVisibility);

    return () => {
      window.removeEventListener("scroll", handleBtnVisibility);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id={id}
      className={`${className} w-full py-16 px-8 lg:min-h-screen lg:py-24 lg:px-32 relative dark:bg-darkBg`}
    >
      <div className="lg:py-2 w-full mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="dark:text-white text-4xl md:text-6xl lg:text-8xl font-bold capitalize mb-16 text-center tracking-[1rem]">
          {title}
        </h1>
      </div>
      {showBtn && (
        <motion.button
          animate={{
            y: -8,
            transition: {
              duration: 1.5,
              repeat: Infinity,
            },
          }}
          className="absolute right-[2%] bottom-[5%] lg:font-3xl font-xl rounded-full dark:text-white"
          onClick={handleScrollUp}
        >
          <MdKeyboardDoubleArrowUp className="lg:w-10 lg:h-10" />
        </motion.button>
      )}

      {children}
    </section>
  );
}
