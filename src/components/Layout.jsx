import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { motion } from "framer-motion";

export default function Layout({ children, className, id, title, }) {
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
      className={`${className} w-full min-h-screen py-24 px-32 relative`}
    >
      <div className="py-2 mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-8xl font-bold w-full capitalize mb-16 text-center tracking-[1rem]">
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
          className="fixed right-[2%] bottom-[5%] font-3xl rounded-full"
          onClick={handleScrollUp}
        >
          <MdKeyboardDoubleArrowUp className="w-10 h-10" />
        </motion.button>
      )}

      {children}
    </section>
  );
}
