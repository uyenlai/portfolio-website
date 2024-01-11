import Icons from "./components/Icons";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import profileImg from "./assets/developer-pic-1.png";
import { motion } from "framer-motion";
import projectImg from "./assets/fashion-studio-website.jpg";
import { BsGithub } from "react-icons/bs";

function App() {
  const textVariants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        stagggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="min-h-screen">
      {/* {NAVBAR} */}
      <header className="flex items-center justify-between w-full px-32 py-8 font-medium text-slate-200">
        <Navbar />
        <Logo />
        <Icons />
      </header>

      {/* {HOMEPAGE} */}
      <section className="flex items-center justify-center min-h-screen mt-[160px]">
        <div className="h-full w-full p-32 !pt-0 flex justify-between items-start">
          <div className="basis-1/2">
            <img src={profileImg} alt="Image background" />
          </div>
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-white basis-1/2 flex-col gap-2 items-center self-center text-left"
          >
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="py-2 w-full mx-auto font-extrabold from-stone-100 text-5xl mb-20"
            >
              Turning Vision Into Reality With Code And Design.
            </motion.h1>
            <motion.p
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="my-4 text-base font-medium text-slate-400 mb-6"
            >
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </motion.p>
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="flex gap-5 mt-2"
            >
              <button className="basis-1/4 text-xl p-2 font-semibold capitalize text-slate-800 bg-slate-200 rounded-lg border-2 hover:border-slate-100 hover:bg-slate-900 hover:text-slate-200 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
                Resume
              </button>
              <motion.button
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="basis-1/4 text-xl p-2 font-semibold capitalize text-slate-50"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1, repeat: Infinity },
                }}
              >
                Contact me!
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* {PROJECTS} */}
      <section className="p-32 w-full min-h-screen">
        <div className="py-2 w-full mx-auto flex items-center justify-center">
          <h1 className="text-8xl font-bold w-full capitalize mb-16 text-center text-slate-200 tracking-[1rem]">
            Projects
          </h1>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="w-full flex-col items-center justify-center rounded-3xl rounded-br-2xl border border-solid border-l-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)] overflow-hidden">
            <a
              href="https://github.com/uyenlai"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer overflow-hidden rounded-lg"
            >
              <motion.img
                src={projectImg}
                alt="project 1"
                className="h-auto w-full rounded-[2rem] p-5"
                whileHover={{
                  opacity: 0.9,
                  scale: 1.01,
                  transition: {
                    duration: 0.5,
                  },
                }}
              />
            </a>

            <div className="flex flex-col items-start justify-between p-8">
              <h3 className="text-xl font-medium text-teal-500">
                Featured Project
              </h3>
              <h2 className="my-2 w-full text-left text-4xl font-bold text-slate-200">
                Project 1
              </h2>
              <p className="my-2 rounded-md font-medium text-slate-300">
                A feature-rich Crypto Screener App using React, Tailwind CSS,
                Context API, React Router and Recharts. It shows detail
                regarding almost all the cryptocurrency. You can easily convert
                the price in your local currency.
              </p>
              <div className="flex gap-4 items-center mt-2">
                <motion.a
                  href="https://github.com/uyenlai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                  whileHover={{
                    opacity: 0.8,
                    scale: 1.2,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  <BsGithub className="w-8 h-8" />
                </motion.a>
                <motion.a
                  href="https://github.com/uyenlai"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-slate-200 p-2 px-6 text-lg font-semibold text-slate-800"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  Visit project
                </motion.a>
              </div>
            </div>
          </div>
          <div className="w-full flex-col items-center justify-center rounded-3xl rounded-br-2xl border border-solid border-l-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)] overflow-hidden">
            <a
              href="https://github.com/uyenlai"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer overflow-hidden rounded-lg"
            >
              <motion.img
                src={projectImg}
                alt="project 1"
                className="h-auto w-full rounded-[2rem] p-5"
                whileHover={{
                  opacity: 0.9,
                  scale: 1.01,
                  transition: {
                    duration: 0.5,
                  },
                }}
              />
            </a>

            <div className="flex flex-col items-start justify-between p-8">
              <h3 className="text-xl font-medium text-teal-500">
                Featured Project
              </h3>
              <h2 className="my-2 w-full text-left text-4xl font-bold text-slate-200">
                Project 1
              </h2>
              <p className="my-2 rounded-md font-medium text-slate-300">
                A feature-rich Crypto Screener App using React, Tailwind CSS,
                Context API, React Router and Recharts. It shows detail
                regarding almost all the cryptocurrency. You can easily convert
                the price in your local currency.
              </p>
              <div className="flex gap-4 items-center mt-2">
                <motion.a
                  href="https://github.com/uyenlai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                  whileHover={{
                    opacity: 0.8,
                    scale: 1.2,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  <BsGithub className="w-8 h-8" />
                </motion.a>
                <motion.a
                  href="https://github.com/uyenlai"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-slate-200 p-2 px-6 text-lg font-semibold text-slate-800"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  Visit project
                </motion.a>
              </div>
            </div>
          </div>
          <div className="w-full flex-col items-center justify-center rounded-3xl rounded-br-2xl border border-solid border-l-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)] overflow-hidden">
            <a
              href="https://github.com/uyenlai"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer overflow-hidden rounded-lg"
            >
              <motion.img
                src={projectImg}
                alt="project 1"
                className="h-auto w-full rounded-[2rem] p-5"
                whileHover={{
                  opacity: 0.9,
                  scale: 1.01,
                  transition: {
                    duration: 0.5,
                  },
                }}
              />
            </a>

            <div className="flex flex-col items-start justify-between p-8">
              <h3 className="text-xl font-medium text-teal-500">
                Featured Project
              </h3>
              <h2 className="my-2 w-full text-left text-4xl font-bold text-slate-200">
                Project 1
              </h2>
              <p className="my-2 rounded-md font-medium text-slate-300">
                A feature-rich Crypto Screener App using React, Tailwind CSS,
                Context API, React Router and Recharts. It shows detail
                regarding almost all the cryptocurrency. You can easily convert
                the price in your local currency.
              </p>
              <div className="flex gap-4 items-center mt-2">
                <motion.a
                  href="https://github.com/uyenlai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                  whileHover={{
                    opacity: 0.8,
                    scale: 1.2,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  <BsGithub className="w-8 h-8" />
                </motion.a>
                <motion.a
                  href="https://github.com/uyenlai"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-slate-200 p-2 px-6 text-lg font-semibold text-slate-800"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  Visit project
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
