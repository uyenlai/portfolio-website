import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function NavItem({ href, title, className = "" }) {
  const variants = {
    initial: { width: "0" },
    hover: { width: "100%" },
  };
  return (
    <motion.li className={className} whileHover="hover">
      <Link
        to={href}
        smooth
        duration={1500}
        offset={32}
      >
        {title}
      </Link>
      <motion.div
        className="h-[0.5px] bg-white absolute"
        variants={variants}
      ></motion.div>
    </motion.li>
  );
}
