import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import AboutMe from "./components/AboutMe";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <main className="min-h-screen font-mont w-full h-full relative">
      <Navbar />
      <HomePage />
      <AboutMe />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </main>
  );
}

export default App;
