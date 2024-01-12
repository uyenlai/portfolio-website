import { motion } from "framer-motion";

export default function NavItem({ href, title, className = "" }) {
  const variants = {
    initial: { width: "0" },
    hover: { width: "100%" },
  };
  return (
    <motion.li className={className} whileHover="hover">
      <a href={href}>{title}</a>
      <motion.div
        className="h-[0.5px] bg-white absolute"
        variants={variants}
      ></motion.div>
    </motion.li>
  );
}
