import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function NavItem({ href, title, className = "", onClick }) {
  const variants = {
    initial: { width: "0" },
    hover: { width: "100%" },
  };

  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <motion.li className={className} whileHover="hover">
      <Link to={href} smooth duration={1500}>
        <button onClick={handleClick}>{title}</button>
      </Link>
      <motion.div
        className="h-[0.5px] bg-black dark:bg-white absolute"
        variants={variants}
      ></motion.div>
    </motion.li>
  );
}
