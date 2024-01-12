import Layout from "./Layout";
import profilePic from "../assets/developer-pic-2.jpg";

export default function AboutMe() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
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
              <strong className="text-[#EDEADE]">Uyen Lai</strong>. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Aliquid repellendus
              doloremque illo nam magni totam deserunt, eum, quia unde doloribus
              quas commodi praesentium fugiat. Ipsum officia dolore inventore
              libero exercitationem!
            </p>
            <p className="my-4 font-medium text-slate-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              repellendus doloremque illo nam magni totam deserunt, eum, quia
              unde doloribus quas commodi praesentium fugiat. Ipsum officia
              dolore inventore libero exercitationem!
            </p>
            <p className="font-medium text-slate-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              repellendus doloremque illo nam magni totam deserunt, eum, quia
              unde doloribus quas commodi praesentium fugiat. Ipsum officia
              dolore inventore libero exercitationem!
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
      </div>
    </Layout>
  );
}
