import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import AboutMe from "./components/AboutMe";
import SkillsPage from "./components/SkillsPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <main className="min-h-screen font-mont w-full h-full">
      <Navbar />
      <HomePage />
      <AboutMe />
      {/* <SkillsPage /> */}
      <ProjectsPage />
      <ContactPage />

      {/* <div className="p-32 flex flex-col items-center justify-center">
          <div className="py-2 mx-auto flex flex-col items-center justify-center text-center">
            <h1 className="text-8xl font-bold w-full capitalize mb-16 text-center text-slate-200 tracking-[1rem]">
              About Me
            </h1>
          </div>
          <div className="flex gap-16 justify-center items-center w-full">
            <div className="flex flex-col items-start justify-start basis-1/2">
              <h3 className="mb-4 text-lg font-bold uppercase text-[#EDEADE]">
                Biography
              </h3>
              <p className="font-medium text-slate-300">
                Hi! My name is{" "}
                <strong className="text-[#EDEADE]">Uyen Lai</strong>. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
                repellendus doloremque illo nam magni totam deserunt, eum, quia
                unde doloribus quas commodi praesentium fugiat. Ipsum officia
                dolore inventore libero exercitationem!
              </p>
              <p className="my-4 font-medium text-slate-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid repellendus doloremque illo nam magni totam deserunt,
                eum, quia unde doloribus quas commodi praesentium fugiat. Ipsum
                officia dolore inventore libero exercitationem!
              </p>
              <p className="font-medium text-slate-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid repellendus doloremque illo nam magni totam deserunt,
                eum, quia unde doloribus quas commodi praesentium fugiat. Ipsum
                officia dolore inventore libero exercitationem!
              </p>
            </div>
            <div className="bg-gray-500 basis-1/2 flex-col items-center justify-center rounded-3xl rounded-br-2xl border border-solid border-l-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
              <img
                src={profilePic}
                alt="profile picture"
                className="h-auto w-full rounded-[2rem] p-4"
              />
            </div>
          </div> */}
      {/* <div className="w-full mt-10">
            <h3 className="text-6xl font-bold w-full capitalize my-16 text-center text-slate-200 tracking-[1rem]">
              Skills
            </h3>
            <div className="relative bg-radialBg rounded-full w-full h-screen mb-64 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer rounded-full font-semibold w-max py-4 px-6 bg-slate-200 text-slate-800 flex justify-center items-center"
              >
                <p>Web</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                variants={cssVariants}
                initial="initial"
                animate="animate"
                className="cursor-pointer w-max py-3 px-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center"
              >
                <p>CSS</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                variants={htmlVariants}
                initial="initial"
                animate="animate"
                className="cursor-pointer w-max origin-center py-3 px-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center"
              >
                <p>HTML</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                variants={jsVariants}
                initial="initial"
                animate="animate"
                className="cursor-pointer w-max origin-center py-3 px-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center"
              >
                <p>JavaScript</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                variants={reactVariants}
                initial="initial"
                animate="animate"
                className="cursor-pointer w-max origin-center py-3 px-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center"
              >
                <p>ReactJS</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                variants={tailwindVariants}
                initial="initial"
                animate="animate"
                className="cursor-pointer w-max origin-center py-3 px-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center"
              >
                <p>Tailwind CSS</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                variants={githubVariants}
                initial="initial"
                animate="animate"
                className="cursor-pointer w-max origin-center py-3 px-6 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center"
              >
                <p>Github</p>
              </motion.div>
            </div>
          </div>
          <div className="w-full -mt-[12rem]">
            <h3 className="text-6xl font-bold w-full capitalize my-16 text-center text-slate-200 tracking-[1rem]">
              Education
            </h3>
            <div className="flex  items-stretch gap-10 justify-center mt-10">
              <div className="flex flex-col gap-2 text-center p-8 basis-1/2 rounded-3xl rounded-br-2xl border border-solid shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
                <h3 className="capitalize font-bold text-2xl text-teal-500">
                  LAB UAS
                </h3>
                <span className="capitalize text font-medium text-[#EDEADE]">
                  2021-present | Student
                </span>
                <p className="font-medium w-full text-slate-300 text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  dolorum in suscipit voluptatibus dolorem neque asperiores
                  quibusdam, necessitatibus totam est fugiat. Aliquid quam omnis
                  at aperiam! Incidunt modi sint corrupti.
                </p>
              </div>
              <div className="text-center p-8 basis-1/2 rounded-3xl rounded-br-2xl border border-solid shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
                <h3 className="capitalize font-bold text-2xl text-teal-500">
                  Certificates
                </h3>
                <ul className="mt-5">
                  <li className="my-3 w-full flex gap-2 justify-center items-center">
                    <a
                      href="https://www.udemy.com/certificate/UC-7d69c860-9d0a-47a2-9a33-2154b1f4c00f/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#EDEADE] text-2xl ring-offset-2 hover:underline"
                    >
                      React Course
                    </a>
                  </li>
                  <li className="my-3 w-full flex gap-2 justify-center items-center">
                    <a
                      href="https://www.udemy.com/certificate/UC-7d69c860-9d0a-47a2-9a33-2154b1f4c00f/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#EDEADE] text-2xl ring-offset-2 hover:underline"
                    >
                      Javascript Course
                    </a>
                  </li>
                  <li className="my-3 w-full flex gap-2 justify-center items-center">
                    <a
                      href="https://www.udemy.com/certificate/UC-7d69c860-9d0a-47a2-9a33-2154b1f4c00f/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#EDEADE] text-2xl ring-offset-2 hover:underline"
                    >
                      CSS Course
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
    </main>
  );
}

export default App;
