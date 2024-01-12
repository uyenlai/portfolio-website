import Layout from "./Layout";
import Project from "./Project";
import projectImg from "../assets/fashion-studio-website.jpg";

export default function ProjectsPage() {
  return (
    <Layout className="!pt-0">
      <div className="py-2 w-full mx-auto">
        <h1 className="text-8xl font-bold w-full capitalize mb-16 text-center text-slate-200 tracking-[1rem]">
          Projects
        </h1>
        <div className="flex flex-col gap-y-20">
          <Project
            href="https://github.com/uyenlai"
            src={projectImg}
            title="Project 1"
            para="A feature-rich Crypto Screener App using React, Tailwind CSS,
            Context API, React Router and Recharts. It shows detail regarding
            almost all the cryptocurrency. You can easily convert the price in
            your local currency."
          />

          <Project title="Project 2" src={projectImg} />
          <Project title="Project 3" src={projectImg} />
        </div>
      </div>
    </Layout>
  );
}
