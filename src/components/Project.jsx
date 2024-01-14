import { motion } from "framer-motion";
import Button from "./Button";
import { BsGithub } from "react-icons/bs";

export default function Project({ href, title, para, src }) {
  return (
    <div className="flex flex-col gap-y-20">
      <div className="w-full flex-col items-center justify-center rounded-3xl rounded-br-2xl border border-solid border-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)] overflow-hidden">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer overflow-hidden rounded-lg"
        >
          <motion.img
            src={src}
            alt={title}
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
          <h2 className="my-2 w-full text-left text-2xl lg:text-4xl md:text-4xl font-bold text-teal-500">
            {title}
          </h2>
          <p className="my-2 rounded-md font-medium dark:text-white text-sm md:text-lg">
            {para}
          </p>
          <div className="flex gap-4 items-center mt-2">
            <motion.a
              className="dark:text-white dark:bg-black rounded-full"
              href="https://github.com/uyenlai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                opacity: 0.8,
                scale: 1.2,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <BsGithub className="lg:w-8 lg:h-8 w-5 h-5 md:w-8 md:h-8" />
            </motion.a>
            <motion.a
              className="rounded-lg bg-slate-200 text-lg font-semibold text-slate-800"
              href="https://github.com/uyenlai"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <Button title="Visit project" className="p-2 md:px-4 md:py-2 md:text-lg" />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
