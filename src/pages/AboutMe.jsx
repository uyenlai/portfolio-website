import Layout from "../components/Layout";
import profilePic from "/profilePic.png";

export default function AboutMe() {
  return (
    <Layout id="#about" title="About me">
      <div className="flex flex-col items-center justify-center">
        <div className="lg:flex lg:gap-16 flex-col lg:flex-row justify-center items-center w-full dark:text-white">
          <div className="flex flex-col items-start justify-start sm:basis-1/2 lg:basis-3/4">
            <h3 className="mb-4 text-lg font-bold uppercase">Biography</h3>
            <p className="lg:font-medium font-light mb-4">
              Hi! My name is <strong>Uyen Lai</strong> - a front-end developer.
            </p>
            <h2 className="mb-4 text-lg font-bold uppercase">Objective</h2>
            <p className="lg:font-medium font-light">
              As a dedicated and passionate student with a solid foundation in
              front-end development, I am enthusiastic about securing an
              entry-level position in full-stack development.
            </p>
            <p className="lg:my-4 my-2 lg:font-medium font-light">
              I am eager to contribute my creative problem-solving skills and
              passion for coding to dynamic teams. Committed to absorbing new
              technologies, I aspire to foster personal and professional growth
              in a challenging and innovative environment
            </p>
          </div>
          <div className="bg-gray-500 sm:w-full md:w-1/2 mx-auto mt-6 flex-col items-center justify-center rounded-3xl rounded-br-2xl border border-solid border-l-cyan-900 shadow-[-2px_-2px_30px_2px_rgba(255,255,255,0.5),_20px_20px_30px_4px_rgba(45,78,255,0.15)]">
            <img
              src={profilePic}
              alt="profile picture"
              className="h-auto w-full rounded-[2rem] p-4"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
