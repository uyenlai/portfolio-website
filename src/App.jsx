import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMe from "./pages/AboutMe";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import classes from "./App.module.css";
import { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen font-mont w-full h-full relative">
        <div
          className={
            !darkMode
              ? `${classes.lightBg} relative`
              : `relative ${classes.darkBg}`
          }
        >
          <Navbar />
          <HomePage />
          {!darkMode && (
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="absolute top-[48px] right-[30px] w-8 h-8 flex justify-center items-center rounded-full bg-zinc-950 text-white border border-solid border-slate-200 hover:scale-110"
            >
              <BsMoonStarsFill className="cursor-pointer" />
            </button>
          )}
          {darkMode && (
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="absolute top-[48px] right-[30px] w-8 h-8 flex justify-center items-center rounded-full bg-slate-200 text-black hover:scale-110"
            >
              <BsSunFill className="cursor-pointer" />
            </button>
          )}
        </div>
        <AboutMe />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </div>
  );
}

export default App;
