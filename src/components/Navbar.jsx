import Logo from "./Logo";
import NavItem from "./NavItem";
import Icons from "./Icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  function handleCloseMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="flex items-center justify-center lg:justify-between w-full px-20 py-8 font-medium">
      <button
        onClick={handleOpenMenu}
        className="lg:hidden absolute left-0 ml-10 dark:text-white cursor-pointer"
      >
        <GiHamburgerMenu />
      </button>
      <Logo />
      {isOpen ? (
        <ul className="dark:text-white dark:bg-[#282C35] bg-[#EBE3D5] lg:hidden absolute top-[10%] left-[2%] z-30 flex flex-col gap-6 justify-center items-center text-center p-8 min-w-[40vw] rounded-3xl rounded-br-2xl border border-solid border-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
          <NavItem
            title="Home"
            href="#"
            className="text-xl relative cursor-pointer dark:text-white"
            onClick={handleCloseMenu}
          />
          <NavItem
            title="About"
            href="#about"
            className="text-xl relative cursor-pointer dark:text-white"
            onClick={handleCloseMenu}
          />
          <NavItem
            title="Skills"
            href="#skills"
            className="text-xl relative cursor-pointer dark:text-white"
            onClick={handleCloseMenu}
          />
          <NavItem
            title="Projects"
            href="#projects"
            className="text-xl relative cursor-pointer dark:text-white"
            onClick={handleCloseMenu}
          />
          <NavItem
            title="Contact"
            href="#contact"
            className="text-xl relative cursor-pointer dark:text-white"
            onClick={handleCloseMenu}
          />
        </ul>
      ) : null}

      <ul className="hidden lg:flex lg:list-none lg:gap-20">
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
