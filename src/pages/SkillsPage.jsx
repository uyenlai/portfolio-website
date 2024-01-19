import Layout from "../components/Layout";
import Skill from "../components/Skill";
import { motion } from "framer-motion";
import cssCertificate from "/udemy-css.pdf";
import jsCertificate from "/udemy-javascript.pdf";
import reactCertificate from "/udemy-react.pdf";
import helsinkiFullstack from "/helsinki-university-fullstack.png";

export default function SkillsPage() {
  return (
    <Layout id="#skills" className="" title="Skills">
      <div className="relative bg-lightRadialBg dark:bg-darkRadialBg h-[50vh] lg:mx-auto rounded-full lg:w-3/4 lg:h-[500px] flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="absolute cursor-pointer rounded-full font-semibold w-max lg:p-4 p-2 text-xs lg:text-xl md:text-sm md:px-4 md:py-4 bg-black text-white flex justify-center items-center dark:text-black dark:bg-white"
        >
          <p>Front End</p>
        </motion.div>
        <Skill title="HTML" x="200%" y="-100%" />
        <Skill title="CSS" x="-190%" y="50%" />
        <Skill title="Javascript" x="120%" y="270%" />
        <Skill title="ReactJS" x="-170%" y="-300%" />
        <Skill title="Tailwind" x="-150%" y="350%" />
        <Skill title="Github" x="200%" y="-400%" />
      </div>

      <div className="w-full">
        <h3 className="lg:text-6xl text-3xl md:text-4xl font-bold w-full capitalize lg:my-16 my-8 text-center tracking-[1rem] dark:text-white">
          Education
        </h3>
        <div className="flex lg:flex-row flex-col items-stretch lg:gap-x-10 gap-y-5 justify-center mt-10">
          <div className="flex flex-col gap-3 text-center p-8 basis-1/2 rounded-3xl rounded-br-2xl border border-solid border-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
            <h3 className="capitalize font-bold text-2xl text-teal-500">
              LAB UAS
            </h3>
            <span className="capitalize font-medium text-black dark:text-white lg:text-xl md:text-xl">
              2021 - present | Student
            </span>
            <p className="font-medium w-full text-left dark:text-white lg:text-xl md:text-lg">
              I am currently pursuing my education with a focus on{" "}
              <strong>Business Information Technology</strong>, aiming to blend
              the realms of business and technology seamlessly. My coursework
              encompasses a diverse range of subjects, providing me with a solid
              foundation to navigate the dynamic intersection of technology and
              business in the professional world
            </p>
          </div>
          <div className="text-center p-8 basis-1/2 rounded-3xl rounded-br-2xl border border-solid border-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
            <h3 className="capitalize font-bold text-2xl text-teal-500">
              Certificates
            </h3>
            <ul className="mt-7 dark:text-white">
              <li className="my-3 w-full flex gap-2 justify-center items-center">
                <a
                  href={jsCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl ring-offset-2 hover:underline"
                >
                  The Complete JavaScript Course 2024: From Zero to Expert!
                </a>
              </li>
              <li className="my-3 w-full flex gap-2 justify-center items-center">
                <a
                  href={reactCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl ring-offset-2 hover:underline"
                >
                  React - The Complete Guide 2024 (incl. React Router & Redux)
                </a>
              </li>
              <li className="my-3 w-full flex gap-2 justify-center items-center">
                <a
                  href={cssCertificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl ring-offset-2 hover:underline"
                >
                  CSS - The Complete Guide 2024 (incl. Flexbox, Grid & Sass)
                </a>
              </li>
              <li className="my-3 w-full flex gap-2 justify-center items-center">
                <a
                  href={helsinkiFullstack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl ring-offset-2 hover:underline"
                >
                  Fullstack Open - University of Helsinki
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
