import Logo from "./Logo";
import NavItem from "./NavItem";
import Icons from "./Icons";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="relative flex items-center sm:justify-between justify-center w-full sm:px-32 py-8 font-medium text-slate-200">
      <div className="sm:hidden absolute left-0 ml-10">
        <GiHamburgerMenu />
      </div>
      <ul className="sm:flex list-none hidden sm:gap-8">
        <NavItem title="Home" href="#" className="text-xl relative w-full" />
        <NavItem
          title="About"
          href="#about"
          className="text-xl relative w-full"
        />
        <NavItem
          title="Projects"
          href="#projects"
          className="text-xl relative w-full"
        />
        <NavItem
          title="Contact"
          href="#contact"
          className="text-xl relative w-full"
        />
      </ul>
      <Logo />
      <Icons />
    </nav>
  );
}
