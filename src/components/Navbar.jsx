import Logo from "./Logo";
import NavItem from "./NavItem";
import Icons from "./Icons";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-20 py-8 font-medium">
      <div className="sm:hidden absolute left-0 ml-10">
        <GiHamburgerMenu />
      </div>
      <Logo />
      <ul className="flex list-none gap-20">
        <NavItem
          title="Home"
          href="#"
          className="text-xl relative w-full cursor-pointer dark:text-white"
        />
        <NavItem
          title="About"
          href="#about"
          className="text-xl relative w-full cursor-pointer dark:text-white"
        />
        <NavItem
          title="Skills"
          href="#skills"
          className="text-xl relative w-full cursor-pointer dark:text-white"
        />
        <NavItem
          title="Projects"
          href="#projects"
          className="text-xl relative w-full cursor-pointer dark:text-white"
        />
        <NavItem
          title="Contact"
          href="#contact"
          className="text-xl relative w-full cursor-pointer dark:text-white"
        />
      </ul>
      <Icons />
    </nav>
  );
}
