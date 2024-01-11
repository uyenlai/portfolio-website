import Icons from "./components/Icons";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import profileImg from "./assets/developer-pic-1.png";
import { motion } from "framer-motion";

function App() {

  return (
    <main className="min-h-screen">
      <header className="flex items-center justify-between w-full px-32 py-8 font-medium fixed top-0">
        <Navbar />
        <Logo />
        <Icons />
      </header>
      <ParticlesBackground />
      <article className="flex items-center justify-center min-h-screen mt-[160px]">
        <div className="h-full w-full p-32 !pt-0 flex justify-between items-start">
          <div className="basis-1/2">
            <img src={profileImg} alt="Image background" />
          </div>
          <div className="text-white basis-1/2 flex-col gap-2 items-center self-center text-left">
            <motion.h1
              animate={{
                scale: 1.2,
                x: 50,
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: 1,
                },
              }}
              className="py-2 w-full mx-auto font-extrabold from-stone-100 text-5xl mb-20"
            >
              Turning Vision Into Reality With Code And Design.
            </motion.h1>
            <p className="my-4 text-base font-medium text-slate-400 mb-6">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex gap-5 mt-2">
              <button className="basis-1/4 text-xl p-2 font-semibold capitalize text-slate-800 bg-slate-100 rounded-lg border-2 hover:border-slate-100 hover:bg-slate-900 hover:text-slate-200 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.6),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
                Resume
              </button>
              <motion.button
                className="basis-1/4 text-xl p-2 font-semibold capitalize text-slate-50"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1, repeat: Infinity },
                }}
              >
                Contact me!
              </motion.button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
