import Icons from "./components/Icons";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import profileImg from "./assets/developer-pic-1.png";
import { motion } from "framer-motion";
import projectImg from "./assets/fashion-studio-website.jpg";
import profilePic from "./assets/developer-pic-2.jpg";
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

  const cssVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "-17rem",
      y: "-5rem",
      transition: {
        duration: 1.5,
      },
    },
  };

  const htmlVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "5rem",
      y: "7rem",
      transition: {
        duration: 1.5,
      },
    },
  };

  const jsVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "20rem",
      y: "-15rem",
      transition: {
        duration: 1.5,
      },
    },
  };

  const reactVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "-20rem",
      y: "15rem",
      transition: {
        duration: 1.5,
      },
    },
  };

  const tailwindVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "-18rem",
      y: "-20rem",
      transition: {
        duration: 1.5,
      },
    },
  };

  const githubVariants = {
    initial: {
      position: "absolute",
    },
    animate: {
      x: "18rem",
      y: "20rem",
      transition: {
        duration: 1.5,
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

      {/* {ABOUT ME} */}
      <section className="w-full min-h-screen">
        <div className="p-32 flex flex-col items-center justify-center">
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
          </div>
          <div className="w-full mt-10">
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
              <div className="flex flex-col gap-2 bg-gray-500 text-center p-8 basis-1/2 rounded-3xl rounded-br-2xl border border-solid shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
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
              <div className="bg-gray-500 text-center p-8 basis-1/2 rounded-3xl rounded-br-2xl border border-solid shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
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
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
