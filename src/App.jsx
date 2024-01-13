import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutMe from "./pages/AboutMe";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import classes from './App.module.css'

function App() {
  return (
    <main className="min-h-screen font-mont w-full h-full relative">
      <div className={classes.bg}>
      <Navbar />
      <HomePage />
      </div>
      <AboutMe />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}

export default App;
